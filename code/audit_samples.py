import os
import sys
import pandas as pd

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
samples = pd.read_csv(os.path.join(REPO_ROOT, "dataset", "sample_requests.csv"))
profiles_df = pd.read_csv(os.path.join(REPO_ROOT, "dataset", "financial_profiles.csv"))
events_df = pd.read_csv(os.path.join(REPO_ROOT, "dataset", "financial_events.csv"))

print("SAMPLE BENCHMARK AUDIT:")
for idx, r in samples.iterrows():
    prof = profiles_df[profiles_df["user_id"] == r["user_id"]].iloc[0]
    bal = prof["current_available_balance"]
    min_bal = prof["minimum_balance_to_keep"]
    cushion = bal - min_bal
    req_amt = r["requested_amount"]
    safe = r["amount_safe_to_pay"]
    status = r["affordability_status"]
    method = r["recommended_payment_method"]
    plan = r["payment_plan"]
    changes = r["spending_changes_needed"]
    print(f"[{r['request_id']}] req={req_amt:10.2f} | safe={safe:10.2f} | cushion={cushion:10.2f} | status={status:20s} | method={method:15s} | plan={plan} | changes={changes}")
