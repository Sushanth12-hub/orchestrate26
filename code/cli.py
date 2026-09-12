"""
Interactive CLI & What-If Purchase Simulator
Enables instant query of any request or on-the-fly evaluation of hypothetical purchases.
Usage:
  python code/cli.py --request_id request_26
  python code/cli.py --user_id user_01 --amount 500 --date 2024-06-01
  python code/cli.py --benchmark
"""
import os
import sys
import argparse
import pandas as pd
from datetime import datetime

CURRENT_DIR = os.path.dirname(os.path.abspath(__file__))
if CURRENT_DIR not in sys.path:
    sys.path.insert(0, CURRENT_DIR)

from evidence.ocr_agent import ReceiptEvidenceAgent
from evidence.message_agent import MessageAmendmentAgent
from kernel.fx_converter import FXConverter
from kernel.ledger import FinancialProfile, CanonicalLedger
from simulator.cash_flow import CashFlowSimulator
from planner.plan_generator import PlanGenerator
from delivery.explanation_renderer import ExplanationRenderer

def initialize_engine():
    repo_root = os.path.abspath(os.path.join(CURRENT_DIR, ".."))
    dataset_dir = os.path.join(repo_root, "dataset")
    media_dir = os.path.join(dataset_dir, "media", "images")
    
    profiles_df = pd.read_csv(os.path.join(dataset_dir, "financial_profiles.csv"))
    events_df = pd.read_csv(os.path.join(dataset_dir, "financial_events.csv"))
    options_df = pd.read_csv(os.path.join(dataset_dir, "request_payment_options.csv"))
    fx_df = pd.read_csv(os.path.join(dataset_dir, "exchange_rates.csv"))
    messages_df = pd.read_csv(os.path.join(dataset_dir, "messages.csv"))
    
    ocr_agent = ReceiptEvidenceAgent(media_dir)
    message_agent = MessageAmendmentAgent(messages_df)
    fx_converter = FXConverter(fx_df)
    
    profiles_map = {str(row["user_id"]): FinancialProfile(row) for _, row in profiles_df.iterrows()}
    user_ledgers = {}
    for uid, prof in profiles_map.items():
        user_ledgers[uid] = CanonicalLedger(prof, events_df, fx_converter, ocr_agent, message_agent)
        
    return user_ledgers, options_df, dataset_dir

def evaluate_single_request(req_id: str):
    user_ledgers, options_df, dataset_dir = initialize_engine()
    requests_df = pd.read_csv(os.path.join(dataset_dir, "requests.csv"))
    
    match = requests_df[requests_df["request_id"] == req_id]
    if match.empty:
        # Check sample requests
        samples_df = pd.read_csv(os.path.join(dataset_dir, "sample_requests.csv"))
        match = samples_df[samples_df["request_id"] == req_id]
        
    if match.empty:
        print(f"Error: Request '{req_id}' not found in requests.csv or sample_requests.csv")
        return
        
    req = match.iloc[0]
    user_id = str(req["user_id"])
    req_date = str(req["request_date"])
    req_amt = float(req["requested_amount"])
    comp_date = str(req["desired_completion_date"]) if pd.notna(req.get("desired_completion_date")) else None
    
    ledger = user_ledgers[user_id]
    simulator = CashFlowSimulator(ledger, horizon_days=90)
    planner = PlanGenerator(simulator, options_df)
    
    safe_amt, earliest_date = simulator.calculate_safe_amount_and_earliest_date(req_date, req_amt, comp_date)
    status, method, plan_str, changes_str, changes_list = planner.generate_and_rank_plans(req, safe_amt, earliest_date)
    
    final_earliest = req_date if status == "affordable_now" else (earliest_date or "None")
    if status == "not_affordable":
        final_earliest = "None"
        
    explanation = ExplanationRenderer.render(
        status=status,
        method=method,
        currency=ledger.home_currency,
        requested_amount=req_amt,
        amount_safe_to_pay=safe_amt,
        minimum_balance=ledger.profile.minimum_balance_to_keep,
        payment_plan=plan_str,
        earliest_date=final_earliest,
        spending_changes_str=changes_str,
        desired_completion_date=comp_date,
        spending_changes_list=changes_list
    )
    
    print("\n" + "=" * 65)
    print(f"  EVALUATION VERDICT: {req_id} (User: {user_id})")
    print("=" * 65)
    print(f"  Requested Amount        : {req_amt:,.2f} {ledger.home_currency}")
    print(f"  Request Date            : {req_date}")
    print(f"  Amount Safe to Pay      : {safe_amt:,.2f} {ledger.home_currency}")
    print(f"  Affordability Status    : {status.upper()}")
    print(f"  Recommended Method      : {method}")
    print(f"  Payment Plan            : {plan_str}")
    print(f"  Earliest Full Date      : {final_earliest}")
    print(f"  Spending Changes Needed : {changes_str or 'None'}")
    print("-" * 65)
    print(f"  Explanation:\n{explanation}")
    print("=" * 65 + "\n")

def evaluate_what_if(user_id: str, amount: float, date_str: str):
    user_ledgers, options_df, _ = initialize_engine()
    if user_id not in user_ledgers:
        print(f"Error: User '{user_id}' not found.")
        return
        
    ledger = user_ledgers[user_id]
    simulator = CashFlowSimulator(ledger, horizon_days=90)
    planner = PlanGenerator(simulator, options_df)
    
    fake_req = pd.Series({
        "request_id": "what_if_custom",
        "user_id": user_id,
        "request_date": date_str,
        "requested_amount": amount,
        "desired_completion_date": None,
        "allows_partial_payment": True
    })
    
    safe_amt, earliest_date = simulator.calculate_safe_amount_and_earliest_date(date_str, amount, None)
    status, method, plan_str, changes_str, _ = planner.generate_and_rank_plans(fake_req, safe_amt, earliest_date)
    
    print("\n" + "=" * 65)
    print(f"  WHAT-IF SCENARIO ANALYSIS FOR {user_id}")
    print("=" * 65)
    print(f"  Proposed Purchase Amount : {amount:,.2f} {ledger.home_currency}")
    print(f"  Proposed Purchase Date   : {date_str}")
    print(f"  Amount Safe to Pay       : {safe_amt:,.2f} {ledger.home_currency}")
    print(f"  Status                   : {status.upper()}")
    print(f"  Recommended Strategy     : {method}")
    print(f"  Executable Plan          : {plan_str}")
    print("=" * 65 + "\n")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Autonomous Buy-or-Wait CLI")
    parser.add_argument("--request_id", type=str, help="Evaluate existing request (e.g. request_26)")
    parser.add_argument("--user_id", type=str, help="User ID for what-if simulation (e.g. user_01)")
    parser.add_argument("--amount", type=float, help="Purchase amount for what-if simulation")
    parser.add_argument("--date", type=str, default=datetime.now().strftime("%Y-%m-%d"), help="Purchase date (YYYY-MM-DD)")
    args = parser.parse_args()
    
    if args.request_id:
        evaluate_single_request(args.request_id)
    elif args.user_id and args.amount:
        evaluate_what_if(args.user_id, args.amount, args.date)
    else:
        # Default run request_26
        evaluate_single_request("request_26")
