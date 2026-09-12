"""
Decision Layer: Fast Precomputed Cash-Flow Simulator (Layer 4)
Precomputes recurring templates, salary, and future scheduled transactions once per ledger,
enabling sub-millisecond 90-day trajectory simulations.
"""
from typing import Dict, List, Optional, Tuple, Any
from datetime import datetime, timedelta
import pandas as pd

class CashFlowSimulator:
    def __init__(self, ledger, horizon_days: int = 90):
        self.ledger = ledger
        self.user_id = ledger.user_id
        self.profile = ledger.profile
        self.min_balance = self.profile.minimum_balance_to_keep
        self.horizon_days = horizon_days
        self.raw_events = ledger.raw_events
        
        self._precompute_templates()

    def _precompute_templates(self):
        # 1. Salary precomputation
        salaries = self.raw_events[
            (self.raw_events["category"] == "salary") &
            (self.raw_events["direction"] == "credit")
        ]
        
        salary_amt = None
        salary_day = None
        for a in self.ledger.amendments:
            if a.amendment_type == "salary_override":
                salary_amt = a.value
            if a.amendment_type == "salary_date_change":
                salary_day = int(pd.to_datetime(a.value).day)
            if a.amendment_type == "salary_ended":
                salary_amt = 0.0

        if salary_amt is None and not salaries.empty:
            salary_amt = float(salaries["normalized_amount"].iloc[-1])
            salary_dt = pd.to_datetime(salaries["settlement_date"].iloc[-1])
            salary_day = salary_dt.day

        self.salary_amt = salary_amt or 0.0
        self.salary_day = salary_day or 15

        # 2. Recurring debits precomputation (deduplicated by description)
        recurring_debits = self.raw_events[
            (self.raw_events["direction"] == "debit") &
            (self.raw_events["status"] == "settled")
        ].copy()
        
        sorted_debits = recurring_debits.sort_values("settlement_date", ascending=False)
        seen_templates = set()
        self.recurring_templates = []
        
        for _, row in sorted_debits.iterrows():
            desc = str(row["description"])
            if desc in seen_templates:
                continue
            seen_templates.add(desc)
            
            eid = str(row["event_id"])
            amt = float(row["normalized_amount"])
            cat = str(row["category"])
            dt = pd.to_datetime(row["settlement_date"])
            day_of_month = dt.day

            # Check rent increase amendment
            for a in self.ledger.amendments:
                if a.amendment_type == "rent_increase_pct" and cat == "rent":
                    amt = amt * (1.0 + a.value)

            self.recurring_templates.append({
                "event_id": eid,
                "description": desc,
                "category": cat,
                "base_amount": amt,
                "day_of_month": day_of_month
            })

        # 3. Scheduled / Pending future items precomputation
        future_events = self.raw_events[
            (self.raw_events["status"].isin(["scheduled", "pending"])) &
            (pd.notna(self.raw_events["settlement_date"]))
        ]
        self.future_items = []
        for _, fe in future_events.iterrows():
            d_str = pd.to_datetime(fe["settlement_date"]).strftime("%Y-%m-%d")
            amt = float(fe["normalized_amount"])
            direction = str(fe["direction"])
            category = str(fe["category"])
            self.future_items.append((d_str, amt, direction, category))

    def simulate_trajectory(
        self,
        request_date: str,
        payment_schedule: Dict[str, float] = None,
        spending_changes: List[Dict[str, Any]] = None
    ) -> Tuple[bool, float, List[float], List[str]]:
        """
        Simulates daily balance from request_date to request_date + horizon_days.
        Returns (is_safe, min_cushion, daily_balances, dates).
        """
        start_dt = pd.to_datetime(request_date)
        # Generate date list with days of month
        dates = []
        days_of_month = []
        days_in_month = []
        for d in range(self.horizon_days + 1):
            curr_dt = start_dt + timedelta(days=d)
            dates.append(curr_dt.strftime("%Y-%m-%d"))
            days_of_month.append(curr_dt.day)
            days_in_month.append(curr_dt.days_in_month)

        schedule = payment_schedule or {}
        opening_bal = self.ledger.get_opening_balance(request_date)
        daily_deltas = [0.0] * (self.horizon_days + 1)
        date_to_idx = {dates[i]: i for i in range(len(dates))}

        # 1. Salary
        if self.salary_amt > 0:
            target_day = self.salary_day
            for i in range(len(dates)):
                if days_of_month[i] == min(target_day, days_in_month[i]):
                    daily_deltas[i] += self.salary_amt

        # 2. Recurring expenses
        stopped_events = set()
        reduced_events = {}
        if spending_changes:
            for ch in spending_changes:
                if ch["action_type"] == "stop":
                    stopped_events.add(ch["event_id"])
                elif ch["action_type"] == "reduce_to":
                    reduced_events[ch["event_id"]] = ch["new_amount"]

        for tmpl in self.recurring_templates:
            eid = tmpl["event_id"]
            if eid in stopped_events:
                continue
            amt = reduced_events.get(eid, tmpl["base_amount"])
            target_day = tmpl["day_of_month"]
            
            for i in range(len(dates)):
                if days_of_month[i] == min(target_day, days_in_month[i]):
                    daily_deltas[i] -= amt

        # 3. Scheduled future items
        for d_str, amt, direction, cat in self.future_items:
            if d_str in date_to_idx:
                idx = date_to_idx[d_str]
                if direction == "debit":
                    daily_deltas[idx] -= amt
                elif direction == "credit" and cat == "salary":
                    daily_deltas[idx] += amt

        # 4. Plan payments
        for p_date, p_amt in schedule.items():
            if p_date in date_to_idx:
                daily_deltas[date_to_idx[p_date]] -= p_amt

        # 5. Daily balance trajectory
        balance = opening_bal
        daily_balances = []
        is_safe = True
        min_cushion = float("inf")

        for delta in daily_deltas:
            balance += delta
            daily_balances.append(balance)
            cushion = balance - self.min_balance
            if cushion < min_cushion:
                min_cushion = cushion
            if balance < self.min_balance:
                is_safe = False

        return is_safe, min_cushion, daily_balances, dates

    def calculate_safe_amount_and_earliest_date(
        self,
        request_date: str,
        requested_amount: float,
        desired_completion_date: str
    ) -> Tuple[float, Optional[str]]:
        start_dt = pd.to_datetime(request_date)
        
        # 1. Baseline simulation with 0 payment
        _, min_cushion, _, _ = self.simulate_trajectory(request_date)
        amount_safe = max(0.0, min(requested_amount, min_cushion))
        amount_safe = round(amount_safe, 2)

        # 2. Find earliest date for full payment
        earliest_date = None
        dates = [(start_dt + timedelta(days=d)).strftime("%Y-%m-%d") for d in range(self.horizon_days + 1)]
        
        for d in dates:
            is_safe, _, _, _ = self.simulate_trajectory(request_date, payment_schedule={d: requested_amount})
            if is_safe:
                earliest_date = d
                break

        return amount_safe, earliest_date
