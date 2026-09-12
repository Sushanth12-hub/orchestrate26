"""
Decision Layer: Candidate Plan Generator & Ranking Cascade (Layer 4)
Generates typed candidate plans (Full, Installments, Partial, Wait, Pruning),
simulates each plan through the financial kernel, and applies the 6-level ranking cascade.
"""
from typing import Dict, List, Optional, Any, Tuple
from dataclasses import dataclass
from datetime import datetime, timedelta
import pandas as pd

@dataclass
class CandidatePlan:
    plan_id: str
    method: str  # full_payment, partial_payment, installments, wait, not_recommended
    schedule: Dict[str, float]
    formatted_plan: str
    total_payable_amount: float
    first_payment_date: str
    final_payment_date: str
    number_of_payments: int
    spending_changes: List[Dict[str, Any]]
    spending_changes_str: str
    payment_option_id: Optional[str]
    completes_on_time: bool
    requires_spending_changes: bool
    is_safe: bool

class PlanGenerator:
    def __init__(self, simulator, options_df: pd.DataFrame):
        self.simulator = simulator
        self.ledger = simulator.ledger
        self.profile = self.ledger.profile
        self.options_df = options_df

    def generate_and_rank_plans(
        self,
        request_row: pd.Series,
        amount_safe_to_pay: float,
        earliest_full_date: Optional[str]
    ) -> Tuple[str, str, str, str, List[Dict[str, Any]]]:
        """
        Returns:
        (affordability_status, recommended_payment_method, payment_plan, spending_changes_str, spending_changes_list)
        """
        req_id = str(request_row["request_id"])
        req_date = str(request_row["request_date"])
        req_amt = float(request_row["requested_amount"])
        comp_date = str(request_row["desired_completion_date"]) if pd.notna(request_row.get("desired_completion_date")) else "2099-12-31"
        allows_partial = bool(request_row.get("allows_partial_payment", False))

        candidate_plans: List[CandidatePlan] = []
        user_methods = self.profile.payment_methods_user_will_consider
        req_options = self.options_df[self.options_df["request_id"] == req_id].copy()

        if "full_payment" in user_methods:
            # Check 0-spending changes: only valid if safe amount covers the requested expenditure
            safe_now = False
            if amount_safe_to_pay >= req_amt:
                safe_now, _, _, _ = self.simulator.simulate_trajectory(req_date, payment_schedule={req_date: req_amt})
            if safe_now:
                candidate_plans.append(CandidatePlan(
                    plan_id="full_now_base",
                    method="full_payment",
                    schedule={req_date: req_amt},
                    formatted_plan=f"{req_date}:{format_amt(req_amt)}",
                    total_payable_amount=req_amt,
                    first_payment_date=req_date,
                    final_payment_date=req_date,
                    number_of_payments=1,
                    spending_changes=[],
                    spending_changes_str="none",
                    payment_option_id="opt_full",
                    completes_on_time=req_date <= comp_date,
                    requires_spending_changes=False,
                    is_safe=True
                ))
            else:
                # Test with permitted spending changes (up to 3)
                pruning_combos = self._find_feasible_pruning_combos(req_date, {req_date: req_amt})
                for p_combo, p_str in pruning_combos:
                    candidate_plans.append(CandidatePlan(
                        plan_id=f"full_now_prune_{p_str}",
                        method="full_payment",
                        schedule={req_date: req_amt},
                        formatted_plan=f"{req_date}:{format_amt(req_amt)}",
                        total_payable_amount=req_amt,
                        first_payment_date=req_date,
                        final_payment_date=req_date,
                        number_of_payments=1,
                        spending_changes=p_combo,
                        spending_changes_str=p_str,
                        payment_option_id="opt_full_prune",
                        completes_on_time=req_date <= comp_date,
                        requires_spending_changes=True,
                        is_safe=True
                    ))

        # 2. CANDIDATE: Installment Options
        if "installments" in user_methods and not req_options.empty:
            for _, opt in req_options[req_options["payment_method"] == "installments"].iterrows():
                opt_id = str(opt["payment_option_id"])
                p_amt = float(opt["payment_amount"])
                num_p = int(opt["number_of_payments"])
                first_d = str(opt["first_payment_date"])
                freq_d = float(opt["payment_frequency_days"]) if pd.notna(opt.get("payment_frequency_days")) else 30.0
                tot_pay = float(opt["total_payable_amount"])

                # Check max_installment_months
                duration_months = ((num_p - 1) * freq_d) / 30.0
                if self.profile.max_installment_months and duration_months > (self.profile.max_installment_months + 0.1):
                    continue

                # Build schedule
                opt_sched = {}
                d_curr = pd.to_datetime(first_d)
                dates_list = []
                for k in range(num_p):
                    d_str = d_curr.strftime("%Y-%m-%d")
                    opt_sched[d_str] = p_amt
                    dates_list.append(f"{d_str}:{format_amt(p_amt)}")
                    d_curr += timedelta(days=freq_d)
                
                final_d = list(opt_sched.keys())[-1]
                sched_str = "|".join(dates_list)

                # Test feasibility
                safe_inst, _, _, _ = self.simulator.simulate_trajectory(req_date, payment_schedule=opt_sched)
                if safe_inst:
                    candidate_plans.append(CandidatePlan(
                        plan_id=f"inst_{opt_id}",
                        method="installments",
                        schedule=opt_sched,
                        formatted_plan=sched_str,
                        total_payable_amount=tot_pay,
                        first_payment_date=first_d,
                        final_payment_date=final_d,
                        number_of_payments=num_p,
                        spending_changes=[],
                        spending_changes_str="none",
                        payment_option_id=opt_id,
                        completes_on_time=final_d <= comp_date,
                        requires_spending_changes=False,
                        is_safe=True
                    ))

        # 3. CANDIDATE: Partial Payment
        if allows_partial and "partial_payment" in user_methods:
            if 0 < amount_safe_to_pay < req_amt and earliest_full_date and earliest_full_date <= comp_date:
                rem_amt = round(req_amt - amount_safe_to_pay, 2)
                part_sched = {
                    req_date: amount_safe_to_pay,
                    earliest_full_date: rem_amt
                }
                safe_part, _, _, _ = self.simulator.simulate_trajectory(req_date, payment_schedule=part_sched)
                if safe_part:
                    candidate_plans.append(CandidatePlan(
                        plan_id="partial_safe",
                        method="partial_payment",
                        schedule=part_sched,
                        formatted_plan=f"{req_date}:{format_amt(amount_safe_to_pay)}|{earliest_full_date}:{format_amt(rem_amt)}",
                        total_payable_amount=req_amt,
                        first_payment_date=req_date,
                        final_payment_date=earliest_full_date,
                        number_of_payments=2,
                        spending_changes=[],
                        spending_changes_str="none",
                        payment_option_id="opt_partial",
                        completes_on_time=earliest_full_date <= comp_date,
                        requires_spending_changes=False,
                        is_safe=True
                    ))

        # 4. CANDIDATE: Wait
        if "full_payment" in user_methods and earliest_full_date and earliest_full_date > req_date:
            candidate_plans.append(CandidatePlan(
                plan_id="wait_safe",
                method="wait",
                schedule={earliest_full_date: req_amt},
                formatted_plan=f"{earliest_full_date}:{format_amt(req_amt)}",
                total_payable_amount=req_amt,
                first_payment_date=earliest_full_date,
                final_payment_date=earliest_full_date,
                number_of_payments=1,
                spending_changes=[],
                spending_changes_str="none",
                payment_option_id="opt_wait",
                completes_on_time=earliest_full_date <= comp_date,
                requires_spending_changes=False,
                is_safe=True
            ))

        # 5. Filter safe plans and rank using 6-level cascade
        safe_plans = [p for p in candidate_plans if p.is_safe]
        
        if not safe_plans:
            return "not_affordable", "not_recommended", "none", "none", []

        def ranking_key(p: CandidatePlan):
            # 1. Complete by deadline: (0 if completes on time, 1 otherwise)
            c1 = 0 if p.completes_on_time else 1
            # 2. No spending changes: (0 if no changes, 1 if changes needed)
            c2 = 0 if not p.requires_spending_changes else 1
            # 3. Minimize total payable amount
            c3 = p.total_payable_amount
            # 4. Earliest first payment date
            c4 = p.first_payment_date
            # 5. Fewest payments
            c5 = p.number_of_payments
            # 6. Lowest numerical payment_option_id
            c6 = p.payment_option_id or "zzzz"
            return (c1, c2, c3, c4, c5, c6)

        safe_plans.sort(key=ranking_key)
        winning_plan = safe_plans[0]

        # Determine affordability status
        if winning_plan.method == "full_payment" and winning_plan.first_payment_date == req_date and not winning_plan.requires_spending_changes:
            status = "affordable_now"
        elif winning_plan.method in ["installments", "partial_payment"] or winning_plan.requires_spending_changes:
            status = "affordable_with_plan"
        elif winning_plan.method == "wait":
            status = "affordable_later"
        else:
            status = "not_affordable"

        return (
            status,
            winning_plan.method,
            winning_plan.formatted_plan,
            winning_plan.spending_changes_str,
            winning_plan.spending_changes
        )

    def _find_feasible_pruning_combos(self, req_date: str, schedule: Dict[str, float]) -> List[Tuple[List[Dict[str, Any]], str]]:
        candidates = self.ledger.get_candidate_pruning_events()
        if not candidates:
            return []
            
        combos = []
        # Try single action
        for c in candidates:
            combo = [c]
            c_str = f"{c['action_type']}:{c['event_id']}" + (f":{format_amt(c['new_amount'])}" if c['action_type'] == 'reduce_to' else "")
            is_safe, _, _, _ = self.simulator.simulate_trajectory(req_date, payment_schedule=schedule, spending_changes=combo)
            if is_safe:
                combos.append((combo, c_str))
                
        # Try pairs if no single action succeeded
        if not combos and len(candidates) >= 2:
            for i in range(len(candidates)):
                for j in range(i + 1, len(candidates)):
                    c1, c2 = candidates[i], candidates[j]
                    if c1["event_id"] == c2["event_id"]:
                        continue  # Mutually exclusive on same event
                    combo = [c1, c2]
                    s1 = f"{c1['action_type']}:{c1['event_id']}" + (f":{format_amt(c1['new_amount'])}" if c1['action_type'] == 'reduce_to' else "")
                    s2 = f"{c2['action_type']}:{c2['event_id']}" + (f":{format_amt(c2['new_amount'])}" if c2['action_type'] == 'reduce_to' else "")
                    c_str = f"{s1}|{s2}"
                    is_safe, _, _, _ = self.simulator.simulate_trajectory(req_date, payment_schedule=schedule, spending_changes=combo)
                    if is_safe:
                        combos.append((combo, c_str))
                        break
                if combos:
                    break

        return combos

    def optimize_spending_sacrifice(self, deficit: float) -> Dict[str, Any]:
        """Calculates optimal budget sacrifice using Knapsack / Linear Programming."""
        from .budget_optimizer import BudgetSacrificeOptimizer
        optimizer = BudgetSacrificeOptimizer()
        return optimizer.optimize_spending_cuts(self.simulator.category_monthly, deficit)

    def schedule_multi_goal_portfolio(self, goals: List[Dict[str, Any]], start_date: str) -> Dict[str, Any]:
        """Schedules concurrent competing goals across the 90-day cash-flow horizon."""
        from .portfolio_scheduler import MultiGoalPortfolioScheduler
        from datetime import datetime
        start_d = datetime.strptime(start_date, "%Y-%m-%d").date()
        scheduler = MultiGoalPortfolioScheduler(self.simulator, self.profile.minimum_balance_to_keep)
        return scheduler.schedule_goal_portfolio(goals, start_d)

def format_amt(val: float) -> str:
    if val == int(val):
        return str(int(val))
    return f"{val:.2f}"
