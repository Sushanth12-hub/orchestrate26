import os
import sys
import pandas as pd
import numpy as np
from datetime import datetime, timedelta

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(REPO_ROOT, "code"))

from evidence.ocr_agent import ReceiptEvidenceAgent
from evidence.message_agent import MessageAmendmentAgent
from kernel.fx_converter import FXConverter
from kernel.ledger import FinancialProfile

samples = pd.read_csv(os.path.join(REPO_ROOT, "dataset", "sample_requests.csv"))
profiles_df = pd.read_csv(os.path.join(REPO_ROOT, "dataset", "financial_profiles.csv"))
events_df = pd.read_csv(os.path.join(REPO_ROOT, "dataset", "financial_events.csv"))
options_df = pd.read_csv(os.path.join(REPO_ROOT, "dataset", "request_payment_options.csv"))
fx_df = pd.read_csv(os.path.join(REPO_ROOT, "dataset", "exchange_rates.csv"))
messages_df = pd.read_csv(os.path.join(REPO_ROOT, "dataset", "messages.csv"))
media_dir = os.path.join(REPO_ROOT, "dataset", "media", "images")

ocr = ReceiptEvidenceAgent(media_dir)
msg = MessageAmendmentAgent(messages_df)
fx = FXConverter(fx_df)
profiles_map = {str(row["user_id"]): FinancialProfile(row) for _, row in profiles_df.iterrows()}

def test_safe_amount_logic(req_row):
    req_id = req_row["request_id"]
    uid = req_row["user_id"]
    req_date = req_row["request_date"]
    req_amt = float(req_row["requested_amount"])
    gt_safe = float(req_row["amount_safe_to_pay"])

    prof = profiles_map[uid]
    ue = events_df[events_df["user_id"] == uid].copy()

    # Fill OCR
    for idx, row in ue.iterrows():
        if pd.isna(row["amount"]):
            claim = ocr.get_claim_for_event(row["event_id"])
            if claim:
                ue.at[idx, "amount"] = claim.value
                if pd.isna(row["currency"]):
                    ue.at[idx, "currency"] = claim.currency

    # Normalization
    norm_amts = []
    for _, row in ue.iterrows():
        amt = float(row["amount"]) if pd.notna(row["amount"]) else 0.0
        curr = str(row["currency"]) if pd.notna(row["currency"]) else prof.home_currency
        s_date = str(row["settlement_date"]) if pd.notna(row["settlement_date"]) else str(row["event_date"])
        conv = fx.convert(amt, curr, prof.home_currency, s_date)
        norm_amts.append(conv)
    ue["normalized_amount"] = norm_amts

    # Salary
    amendments = msg.get_user_amendments(uid)
    salaries = ue[(ue["category"] == "salary") & (ue["direction"] == "credit")]
    salary_amt = None
    salary_day = None
    for a in amendments:
        if a.amendment_type == "salary_override":
            salary_amt = a.value
        if a.amendment_type == "salary_date_change":
            salary_day = int(pd.to_datetime(a.value).day)
        if a.amendment_type == "salary_ended":
            salary_amt = 0.0

    if salary_amt is None and not salaries.empty:
        next_sal = salaries[salaries["status"].isin(["scheduled", "pending"])]
        if not next_sal.empty:
            salary_amt = float(next_sal["normalized_amount"].iloc[-1])
            salary_day = pd.to_datetime(next_sal["settlement_date"].iloc[-1]).day
        else:
            salary_amt = float(salaries["normalized_amount"].iloc[-1])
            salary_day = pd.to_datetime(salaries["settlement_date"].iloc[-1]).day

    salary_amt = salary_amt or 0.0
    salary_day = salary_day or 15

    # Check protected categories
    protected_cats = set(prof.expense_categories_to_protect)
    # Always include fixed commitments
    protected_cats.update(["rent", "utilities", "debt_repayment", "education", "insurance", "family_support", "housing"])

    debits = ue[(ue["direction"] == "debit") & (ue["status"] == "settled") & (ue["settlement_date"] < req_date)]
    templates = []
    for desc, grp in debits.groupby("description"):
        cat = grp["category"].iloc[0]
        if cat not in protected_cats and cat not in ["streaming", "cloud_storage", "music_subscription", "delivery_membership", "gym"]:
            continue

        count = len(grp)
        dates = pd.to_datetime(grp["settlement_date"]).sort_values()
        diffs = dates.diff().dt.days.dropna()
        avg_interval = diffs.mean() if len(diffs) > 0 else 0

        # Require monthly recurrence
        if count >= 3 and (25 <= avg_interval <= 35 or cat in ["rent", "utilities", "debt_repayment", "education", "insurance"]):
            last_row = grp.sort_values("settlement_date").iloc[-1]
            amt = float(last_row["normalized_amount"])
            day_of_month = int(pd.to_datetime(last_row["settlement_date"]).day)

            for a in amendments:
                if a.amendment_type == "rent_increase_pct" and cat == "rent":
                    amt = amt * (1.0 + a.value)

            templates.append({
                "description": desc,
                "category": cat,
                "amount": amt,
                "day_of_month": day_of_month
            })

    # Future items
    future_events = ue[(ue["status"].isin(["scheduled", "pending"])) & (pd.notna(ue["settlement_date"])) & (ue["settlement_date"] >= req_date)]
    future_items = []
    for _, fe in future_events.iterrows():
        d_str = pd.to_datetime(fe["settlement_date"]).strftime("%Y-%m-%d")
        amt = float(fe["normalized_amount"])
        direction = str(fe["direction"])
        category = str(fe["category"])
        future_items.append((d_str, amt, direction, category))

    opening_bal = prof.current_available_balance

    start_dt = pd.to_datetime(req_date)
    dates = [(start_dt + timedelta(days=d)).strftime("%Y-%m-%d") for d in range(91)]
    days_of_month = [(start_dt + timedelta(days=d)).day for d in range(91)]
    days_in_month = [(start_dt + timedelta(days=d)).days_in_month for d in range(91)]
    date_to_idx = {dates[i]: i for i in range(len(dates))}

    daily_deltas = [0.0] * 91

    if salary_amt > 0:
        for i in range(len(dates)):
            if days_of_month[i] == min(salary_day, days_in_month[i]):
                daily_deltas[i] += salary_amt

    for tmpl in templates:
        t_day = tmpl["day_of_month"]
        t_amt = tmpl["amount"]
        for i in range(len(dates)):
            if i > 0 and days_of_month[i] == min(t_day, days_in_month[i]):
                daily_deltas[i] -= t_amt

    for d_str, amt, direction, cat in future_items:
        if d_str in date_to_idx:
            idx = date_to_idx[d_str]
            if direction == "debit":
                daily_deltas[idx] -= amt
            elif direction == "credit" and cat == "salary":
                daily_deltas[idx] += amt

    bal = opening_bal
    min_cushion = float("inf")
    for delta in daily_deltas:
        bal += delta
        cushion = bal - prof.minimum_balance_to_keep
        if cushion < min_cushion:
            min_cushion = cushion

    safe_amt = max(0.0, min(req_amt, min_cushion))
    safe_amt = round(safe_amt, 2)
    return safe_amt, gt_safe

print("Testing Protected Categories Logic on 25 sample requests:")
for idx, r in samples.iterrows():
    pred, gt = test_safe_amount_logic(r)
    match = abs(pred - gt) < 1.0
    print(f"[{r['request_id']}] pred={pred:10.2f} | gt={gt:10.2f} | {'PASS' if match else 'DIFF ' + str(round(pred - gt, 2))}")
