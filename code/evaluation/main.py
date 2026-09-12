"""
Evaluation Benchmark Runner for HackerRank Orchestrate
Compares model predictions against ground truth (sample_requests.csv) or validates output.csv.
"""
import os
import sys
import pandas as pd
from typing import Dict, Any

# Ensure UTF-8 output on Windows
if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")

CURRENT_DIR = os.path.dirname(os.path.abspath(__file__))
CODE_DIR = os.path.dirname(CURRENT_DIR)
REPO_ROOT = os.path.dirname(CODE_DIR)
if CODE_DIR not in sys.path:
    sys.path.insert(0, CODE_DIR)

from evidence.ocr_agent import ReceiptEvidenceAgent
from evidence.message_agent import MessageAmendmentAgent
from kernel.fx_converter import FXConverter
from kernel.ledger import FinancialProfile, CanonicalLedger
from simulator.cash_flow import CashFlowSimulator
from planner.plan_generator import PlanGenerator
from delivery.validator import IndependentValidator

def evaluate_benchmark(sample_path: str, dataset_dir: str):
    print("=" * 75)
    print("  HACKERRANK ORCHESTRATE: BENCHMARK EVALUATION (sample_requests.csv)")
    print("=" * 75)
    
    sample_df = pd.read_csv(sample_path)
    profiles_df = pd.read_csv(os.path.join(dataset_dir, "financial_profiles.csv"))
    events_df = pd.read_csv(os.path.join(dataset_dir, "financial_events.csv"))
    options_df = pd.read_csv(os.path.join(dataset_dir, "request_payment_options.csv"))
    fx_df = pd.read_csv(os.path.join(dataset_dir, "exchange_rates.csv"))
    messages_df = pd.read_csv(os.path.join(dataset_dir, "messages.csv"))
    media_dir = os.path.join(dataset_dir, "media", "images")

    ocr = ReceiptEvidenceAgent(media_dir)
    msg = MessageAmendmentAgent(messages_df)
    fx = FXConverter(fx_df)
    profiles_map = {str(row["user_id"]): FinancialProfile(row) for _, row in profiles_df.iterrows()}

    matches = {
        "amount_safe_to_pay": 0,
        "affordability_status": 0,
        "recommended_payment_method": 0,
        "payment_plan": 0,
        "earliest_date_for_full_payment": 0,
        "spending_changes_needed": 0
    }
    total = len(sample_df)

    for idx, gt in sample_df.iterrows():
        req_id = str(gt["request_id"])
        uid = str(gt["user_id"])
        req_date = str(gt["request_date"])
        req_amt = float(gt["requested_amount"])
        comp_date = str(gt["desired_completion_date"]) if pd.notna(gt.get("desired_completion_date")) else None

        prof = profiles_map[uid]
        ledger = CanonicalLedger(prof, events_df, fx, ocr, msg)
        sim = CashFlowSimulator(ledger, 90)
        planner = PlanGenerator(sim, options_df)

        safe_amt, earliest_date = sim.calculate_safe_amount_and_earliest_date(req_date, req_amt, comp_date)
        status, method, plan_str, changes_str, _ = planner.generate_and_rank_plans(gt, safe_amt, earliest_date)
        final_earliest = req_date if status == "affordable_now" else (earliest_date or "")
        if status == "not_affordable":
            final_earliest = ""

        gt_safe = float(gt["amount_safe_to_pay"])
        gt_status = str(gt["affordability_status"])
        gt_method = str(gt["recommended_payment_method"])
        gt_plan = str(gt["payment_plan"])
        gt_earliest = str(gt["earliest_date_for_full_payment"]) if pd.notna(gt["earliest_date_for_full_payment"]) else ""
        gt_changes = str(gt["spending_changes_needed"])

        safe_match = abs(safe_amt - gt_safe) < 1.0
        status_match = (status == gt_status)
        method_match = (method == gt_method)
        plan_match = (plan_str == gt_plan)
        earliest_match = (final_earliest == gt_earliest)
        changes_match = (changes_str == gt_changes)

        if safe_match: matches["amount_safe_to_pay"] += 1
        if status_match: matches["affordability_status"] += 1
        if method_match: matches["recommended_payment_method"] += 1
        if plan_match: matches["payment_plan"] += 1
        if earliest_match: matches["earliest_date_for_full_payment"] += 1
        if changes_match: matches["spending_changes_needed"] += 1

        pass_safe = "[PASS]" if safe_match else "[FAIL]"
        pass_stat = "[PASS]" if status_match else "[FAIL]"
        pass_meth = "[PASS]" if method_match else "[FAIL]"

        print(f"[{req_id}] safe: pred={safe_amt:10.2f} (gt={gt_safe:10.2f}) {pass_safe} | "
              f"status: {status:19s} {pass_stat} | "
              f"method: {method:15s} {pass_meth}")
        if not (status_match and method_match and safe_match and plan_match and earliest_match and changes_match):
            if not plan_match:
                print(f"    plan: pred='{plan_str}' != gt='{gt_plan}'")
            if not changes_match:
                print(f"    changes: pred='{changes_str}' != gt='{gt_changes}'")
            if not earliest_match:
                print(f"    earliest: pred='{final_earliest}' != gt='{gt_earliest}'")

    print("\n" + "=" * 75)
    print("  ACCURACY BREAKDOWN ACROSS 25 GOLDEN GROUND TRUTH REQUESTS")
    print("=" * 75)
    for k, v in matches.items():
        pct = (v / total) * 100
        bar = "#" * int(pct // 5) + "-" * (20 - int(pct // 5))
        print(f"  {k:30s} [{bar}] {v:2d}/{total:2d} ({pct:5.1f}%)")
    print("=" * 75)

if __name__ == "__main__":
    dataset = os.path.join(REPO_ROOT, "dataset")
    sample_file = os.path.join(dataset, "sample_requests.csv")
    evaluate_benchmark(sample_file, dataset)
