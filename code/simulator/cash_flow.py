"""
Decision Layer: Fast Precomputed Cash-Flow Simulator (Layer 4)
Precomputes recurring templates, salary, and future scheduled transactions once per ledger,
enabling sub-millisecond 90-day trajectory simulations.

Key design principles:
  1. Salary: Detects confirmed salary, accounts for explicit message amendments (override,
     date change, salary ended), and respects employment termination (e.g., 'Final employer payroll').
     Unconfirmed bonus alerts do not wipe out regular base salary.
  2. Recurring expenses: Deduplicates by description. Subscriptions and debt payments are
     strictly recurring. Essential fixed categories (rent, utilities, insurance, healthcare,
     housing, education, family_support) and regular variable living expenses (groceries,
     transport, dining) are preserved based on historical consistency.
  3. First-month settlement: Debits whose settlement day <= request_date.day are already
     reflected in current_available_balance and are not double-deducted in month 0.
  4. Pre-salary bottleneck & 90-day trajectory: Safe amount is constrained by the tighter
     of the pre-payday liquidity bottleneck and the 90-day forward trajectory floor.
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
        events = self.raw_events

        # ── 1. Salary stream ─────────────────────────────────────────────
        salaries = events[
            (events["category"] == "salary")
            & (events["direction"] == "credit")
            & (events["status"] == "settled")
            & (pd.notna(events["normalized_amount"]))
        ].copy()

        sal_override = None
        sal_day = None
        sal_ended = False

        for a in self.ledger.amendments:
            if a.amendment_type == "salary_override":
                sal_override = a.value
            if a.amendment_type == "salary_date_change":
                sal_day = int(pd.to_datetime(a.value).day)
            if a.amendment_type == "salary_ended":
                sal_ended = True

        # Check if last salary was "final"
        if not salaries.empty:
            last_desc = str(salaries.sort_values("settlement_date").iloc[-1]["description"]).lower()
            if "final" in last_desc:
                sal_ended = True

        self.salary_amt = 0.0
        self.salary_day = 15

        if not sal_ended:
            if sal_override is not None:
                self.salary_amt = float(sal_override)
                if sal_day:
                    self.salary_day = sal_day
                elif not salaries.empty:
                    self.salary_day = int(pd.to_datetime(salaries["settlement_date"]).dt.day.mode().iloc[0])
            elif not salaries.empty:
                m_day = int(pd.to_datetime(salaries["settlement_date"]).dt.day.mode().iloc[0])
                regular_sal = salaries[pd.to_datetime(salaries["settlement_date"]).dt.day == m_day]
                if not regular_sal.empty:
                    self.salary_amt = float(regular_sal["normalized_amount"].iloc[-1])
                else:
                    self.salary_amt = float(salaries.sort_values("settlement_date").iloc[-1]["normalized_amount"])
                self.salary_day = sal_day if sal_day else m_day

        self.salary_streams = [(self.salary_amt, self.salary_day)] if self.salary_amt > 0 else []

        # ── 2. Recurring debits ──────────────────────────────────────────
        debits = events[
            (events["direction"] == "debit")
            & (events["status"] == "settled")
            & (pd.notna(events["normalized_amount"]))
        ].copy()
        debits["_sdate"] = pd.to_datetime(debits["settlement_date"])
        debits["_month"] = debits["_sdate"].dt.to_period("M")

        n_months = debits["_month"].nunique()
        desc_counts = debits.groupby("description")["_month"].nunique()

        latest = debits.sort_values("_sdate", ascending=False).drop_duplicates("description").copy()
        latest["_day"] = latest["_sdate"].dt.day
        latest["m_count"] = latest["description"].map(desc_counts)

        self.recurring_templates = []
        for _, r in latest.iterrows():
            etype = str(r.get("event_type", "expense"))
            cat = str(r["category"])
            mc = int(r["m_count"])

            is_sub = etype in ("subscription", "debt_payment")
            is_fixed = cat in ("rent", "housing", "utilities", "insurance", "healthcare", "education", "family_support") and mc >= 2
            is_var = cat in ("groceries", "transport", "dining", "shopping", "entertainment") and mc >= max(2, n_months // 2)

            if not (is_sub or is_fixed or is_var):
                continue

            amt = float(r["normalized_amount"])
            for a in self.ledger.amendments:
                if a.amendment_type == "rent_increase_pct" and cat == "rent":
                    amt *= (1.0 + a.value)

            self.recurring_templates.append({
                "event_id": str(r["event_id"]),
                "description": str(r["description"]),
                "category": cat,
                "base_amount": amt,
                "day_of_month": int(r["_day"]),
            })

        # ── 3. Scheduled / Pending items ─────────────────────────────────
        future = events[
            (events["status"].isin(["scheduled", "pending"]))
            & (pd.notna(events["settlement_date"]))
        ]
        self.future_items = []
        for _, fe in future.iterrows():
            d_str = pd.to_datetime(fe["settlement_date"]).strftime("%Y-%m-%d")
            amt = float(fe["normalized_amount"])
            direction = str(fe["direction"])
            cat = str(fe["category"])
            self.future_items.append((d_str, amt, direction, cat))

    def simulate_trajectory(
        self,
        request_date: str,
        payment_schedule: Dict[str, float] = None,
        spending_changes: List[Dict[str, Any]] = None,
    ) -> Tuple[bool, float, List[float], List[str]]:
        start_dt = pd.to_datetime(request_date)
        n_days = self.horizon_days + 1

        dates = []
        days_of_month = []
        days_in_month = []
        month_offsets = []
        cur_ym = start_dt.month + start_dt.year * 12

        for d in range(n_days):
            cur = start_dt + timedelta(days=d)
            dates.append(cur.strftime("%Y-%m-%d"))
            days_of_month.append(cur.day)
            days_in_month.append(cur.days_in_month)
            month_offsets.append((cur.month + cur.year * 12) - cur_ym)

        schedule = payment_schedule or {}
        opening_bal = self.ledger.get_opening_balance(request_date)
        daily_deltas = [0.0] * n_days
        date_to_idx = {dates[i]: i for i in range(n_days)}

        # 1. Salary
        if self.salary_amt > 0:
            for i in range(n_days):
                if days_of_month[i] == min(self.salary_day, days_in_month[i]):
                    if month_offsets[i] == 0 and self.salary_day <= start_dt.day:
                        continue
                    daily_deltas[i] += self.salary_amt

        # 2. Recurring expenses
        stopped = set()
        reduced = {}
        if spending_changes:
            for ch in spending_changes:
                if ch["action_type"] == "stop":
                    stopped.add(ch["event_id"])
                elif ch["action_type"] == "reduce_to":
                    reduced[ch["event_id"]] = ch["new_amount"]

        for tmpl in self.recurring_templates:
            eid = tmpl["event_id"]
            if eid in stopped:
                continue
            amt = reduced.get(eid, tmpl["base_amount"])
            day = tmpl["day_of_month"]

            for i in range(n_days):
                if days_of_month[i] == min(day, days_in_month[i]):
                    if month_offsets[i] == 0 and day <= start_dt.day:
                        continue
                    daily_deltas[i] -= amt

        # 3. Future scheduled items
        for d_str, amt, direction, cat in self.future_items:
            if d_str in date_to_idx:
                idx = date_to_idx[d_str]
                if direction == "debit":
                    daily_deltas[idx] -= amt
                elif direction == "credit" and cat == "salary":
                    daily_deltas[idx] += amt

        # 4. Payments
        for p_date, p_amt in schedule.items():
            if p_date in date_to_idx:
                daily_deltas[date_to_idx[p_date]] -= p_amt

        # 5. Trajectory
        bal = opening_bal
        min_cushion = float("inf")
        is_safe = True
        bals = []

        for delta in daily_deltas:
            bal += delta
            bals.append(bal)
            cushion = bal - self.min_balance
            if cushion < min_cushion:
                min_cushion = cushion
            if bal < self.min_balance:
                is_safe = False

        return is_safe, min_cushion, bals, dates

    def calculate_safe_amount_and_earliest_date(
        self,
        request_date: str,
        requested_amount: float,
        desired_completion_date: str,
    ) -> Tuple[float, Optional[str]]:
        start_dt = pd.to_datetime(request_date)

        # 1. Pre-salary liquidity bottleneck calculation
        raw = self.raw_events.copy()
        raw["sdate"] = pd.to_datetime(raw["settlement_date"])
        prev_m_end = start_dt.replace(day=1) - pd.Timedelta(days=1)
        prev_m_start = prev_m_end.replace(day=1)

        payday = self.salary_day
        prev_debits = raw[
            (raw["direction"] == "debit")
            & (raw["status"] == "settled")
            & (raw["sdate"] >= prev_m_start)
            & (raw["sdate"] <= prev_m_end)
        ].copy()

        if payday > start_dt.day:
            in_win = prev_debits[
                (prev_debits["sdate"].dt.day > start_dt.day)
                & (prev_debits["sdate"].dt.day <= payday)
            ]
            win_sum = float(in_win["normalized_amount"].sum())
        else:
            in_win1 = prev_debits[prev_debits["sdate"].dt.day > start_dt.day]
            in_win2 = prev_debits[prev_debits["sdate"].dt.day <= payday]
            win_sum = float(in_win1["normalized_amount"].sum() + in_win2["normalized_amount"].sum())

        pending = raw[
            (raw["direction"] == "debit")
            & (raw["status"].isin(["pending", "scheduled"]))
        ]
        pend_sum = float(pending["normalized_amount"].sum())

        opening_bal = self.ledger.get_opening_balance(request_date)
        pre_salary_commit = win_sum + pend_sum
        cushion = opening_bal - self.min_balance - pre_salary_commit

        # Full 90-day simulation
        _, sim_min_cushion, _, _ = self.simulate_trajectory(request_date)

        if self.salary_amt > 0:
            effective_cushion = min(cushion, sim_min_cushion)
        else:
            effective_cushion = sim_min_cushion

        amount_safe = max(0.0, min(requested_amount, effective_cushion))
        amount_safe = round(amount_safe, 2)

        # 2. Earliest date for full payment
        earliest_date = None
        dates = [
            (start_dt + timedelta(days=d)).strftime("%Y-%m-%d")
            for d in range(self.horizon_days + 1)
        ]
        for d in dates:
            is_safe, _, _, _ = self.simulate_trajectory(
                request_date, payment_schedule={d: requested_amount}
            )
            if is_safe:
                earliest_date = d
                break
        return amount_safe, earliest_date

    def project_base_trajectory(self, request_date: str, horizon_days: int = 90) -> List[float]:
        """Returns the 91-day projected balance trajectory."""
        _, _, bals, _ = self.simulate_trajectory(request_date)
        return bals

    def simulate_stochastic_cushions(self, request_date: str) -> Dict[str, Any]:
        """Runs Monte Carlo Cash-Flow at Risk simulation on the projected trajectory."""
        from .stochastic_engine import StochasticCashFlowEngine
        base_bals = self.project_base_trajectory(request_date)
        engine = StochasticCashFlowEngine(num_simulations=500)
        # Gather discretionary spending categories
        disc_cats = {k: v for k, v in self.category_monthly.items() if k.lower() in ["dining", "entertainment", "shopping", "travel"]}
        return engine.simulate_trajectories(base_bals, disc_cats)
