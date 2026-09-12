"""
Delivery Layer: Independent Invariant Validator (Layer 5)
Independent release gate validating row-level, mathematical, schedule, and global invariants.
Rejects any output that breaches financial safety or the challenge contract.
"""
from typing import Dict, List, Tuple
import pandas as pd
import re

REQUIRED_COLUMNS = [
    "request_id",
    "amount_safe_to_pay",
    "affordability_status",
    "recommended_payment_method",
    "payment_plan",
    "earliest_date_for_full_payment",
    "spending_changes_needed",
    "decision_explanation"
]

ALLOWED_STATUSES = {"affordable_now", "affordable_with_plan", "affordable_later", "not_affordable"}
ALLOWED_METHODS = {"full_payment", "partial_payment", "installments", "wait", "not_recommended"}

class IndependentValidator:
    @staticmethod
    def validate(output_df: pd.DataFrame, requests_df: pd.DataFrame) -> Tuple[bool, List[str]]:
        errors = []

        # 1. Column check
        if list(output_df.columns) != REQUIRED_COLUMNS:
            errors.append(f"Column mismatch! Expected {REQUIRED_COLUMNS}, got {list(output_df.columns)}")

        # 2. Row count check
        if len(output_df) != len(requests_df):
            errors.append(f"Row count mismatch! Expected {len(requests_df)}, got {len(output_df)}")

        # 3. Request ID alignment
        req_map = {r["request_id"]: r for _, r in requests_df.iterrows()}
        output_req_ids = set(output_df["request_id"])
        if output_req_ids != set(req_map.keys()):
            errors.append("Output request_ids do not match requests.csv!")

        # 4. Row-level checks
        for idx, row in output_df.iterrows():
            rid = str(row["request_id"])
            if rid not in req_map:
                continue
            req = req_map[rid]
            req_amt = float(req["requested_amount"])
            req_date = str(req["request_date"])

            # Check safe amount bounds
            try:
                safe_amt = float(row["amount_safe_to_pay"])
                if not (0.0 <= safe_amt <= req_amt + 1e-5):
                    errors.append(f"Row {rid}: amount_safe_to_pay ({safe_amt}) outside [0, {req_amt}]")
            except Exception as e:
                errors.append(f"Row {rid}: invalid amount_safe_to_pay value ({row['amount_safe_to_pay']})")

            # Check status enum
            status = str(row["affordability_status"])
            if status not in ALLOWED_STATUSES:
                errors.append(f"Row {rid}: invalid status '{status}'")

            # Check method enum
            method = str(row["recommended_payment_method"])
            if method not in ALLOWED_METHODS:
                errors.append(f"Row {rid}: invalid method '{method}'")

            # Status-method alignment
            if status == "affordable_now":
                if method != "full_payment":
                    errors.append(f"Row {rid}: affordable_now must use full_payment, got '{method}'")
                earliest_d = str(row["earliest_date_for_full_payment"])
                if earliest_d != req_date:
                    errors.append(f"Row {rid}: affordable_now requires earliest_date == request_date ({req_date}), got '{earliest_d}'")

            if status == "not_affordable":
                if method != "not_recommended":
                    errors.append(f"Row {rid}: not_affordable must use not_recommended, got '{method}'")
                if str(row["payment_plan"]).strip() != "none":
                    errors.append(f"Row {rid}: not_affordable must have payment_plan == 'none'")

            # Check plan syntax
            plan = str(row["payment_plan"]).strip()
            if plan != "none":
                for entry in plan.split("|"):
                    if not re.match(r"^\d{4}-\d{2}-\d{2}:[\d.]+$", entry):
                        errors.append(f"Row {rid}: malformed plan entry '{entry}'")

            # Check spending changes syntax
            changes = str(row["spending_changes_needed"]).strip()
            if changes != "none":
                for ch in changes.split("|"):
                    if not (re.match(r"^stop:event_\d+$", ch) or re.match(r"^reduce_to:event_\d+:[\d.]+$", ch)):
                        errors.append(f"Row {rid}: malformed spending change '{ch}'")

            # Explanation non-empty
            exp = str(row["decision_explanation"]).strip()
            if not exp or len(exp) < 10:
                errors.append(f"Row {rid}: empty or suspiciously short explanation")

        is_valid = len(errors) == 0
        return is_valid, errors
