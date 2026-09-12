"""
Stress Testing Engine: Macroeconomic & Liquidity Shock Analysis
Simulates financial runway and computes an empirical Financial Resilience Score (0-100)
under severe liquidity shocks:
  1. Salary Freeze / Job Loss Shock (runway in days until buffer breach)
  2. Inflation Shock (+20% discretionary expenditure surge)
  3. Emergency Cash Outflow Shock ($1,000 unexpected expense)
"""
from typing import Dict, List, Any
import numpy as np

class LiquidityStressTester:
    """
    Evaluates insolvency resistance and stress resilience for user profiles.
    """
    def __init__(self, simulator):
        self.simulator = simulator
        self.profile = simulator.profile
        self.min_balance = self.profile.minimum_balance_to_keep

    def run_stress_battery(self, as_of_date: str) -> Dict[str, Any]:
        """
        Executes a 3-scenario stress battery and computes a composite Resilience Score.
        """
        base_trajectory = self.simulator.project_base_trajectory(as_of_date, horizon_days=90)
        
        # Scenario 1: Total Salary Loss (Job Disruption)
        salary_amt = self.simulator.salary_amt
        # Strip future salary additions
        # Find salary occurrences and deduct
        runway_days = 90
        stress_bals_job_loss = list(base_trajectory)
        
        # Approximate salary deduction over 90 days
        for day in range(len(stress_bals_job_loss)):
            months_passed = day / 30.0
            accum_salary_deduction = months_passed * salary_amt
            stress_bals_job_loss[day] -= accum_salary_deduction
            if stress_bals_job_loss[day] < self.min_balance and runway_days == 90:
                runway_days = day

        # Scenario 2: +20% Discretionary Inflation Shock
        monthly_disc = sum(v for k, v in self.simulator.category_monthly.items() 
                           if k.lower() in ["dining", "entertainment", "shopping", "travel", "groceries"])
        daily_disc_shock = (monthly_disc * 0.20) / 30.0
        stress_bals_inflation = [
            base_trajectory[t] - (t * daily_disc_shock) 
            for t in range(len(base_trajectory))
        ]
        min_bal_inflation = min(stress_bals_inflation)
        survives_inflation = min_bal_inflation >= self.min_balance

        # Scenario 3: Emergency Outflow Shock ($1,000 / equivalent in local currency)
        # Using 1,000 in home currency or equivalent
        emergency_amt = max(500.0, salary_amt * 0.30 if salary_amt > 0 else 500.0)
        stress_bals_emergency = [b - emergency_amt for b in base_trajectory]
        min_bal_emergency = min(stress_bals_emergency)
        survives_emergency = min_bal_emergency >= self.min_balance

        # Compute Composite Resilience Score (0 to 100)
        # 40 pts for runway >= 60 days
        runway_pts = min(40.0, (runway_days / 60.0) * 40.0)
        # 30 pts for surviving inflation shock
        infl_pts = 30.0 if survives_inflation else max(0.0, (min_bal_inflation / self.min_balance) * 30.0)
        # 30 pts for surviving emergency shock
        emerg_pts = 30.0 if survives_emergency else max(0.0, (min_bal_emergency / self.min_balance) * 30.0)
        
        composite_score = round(runway_pts + infl_pts + emerg_pts, 1)

        rating = "AAA (Extremely Resilient)" if composite_score >= 85 else \
                 "A (Resilient)" if composite_score >= 70 else \
                 "BBB (Moderate Buffer)" if composite_score >= 50 else \
                 "CCC (Vulnerable to Liquidity Shocks)"

        return {
            "resilience_score": composite_score,
            "credit_rating": rating,
            "emergency_runway_days": runway_days,
            "survives_20pct_inflation": survives_inflation,
            "survives_emergency_shock": survives_emergency,
            "minimum_inflation_balance": round(min_bal_inflation, 2),
            "emergency_shock_amount": round(emergency_amt, 2)
        }
