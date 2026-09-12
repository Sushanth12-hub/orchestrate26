"""
Budget Optimizer: Knapsack & Linear Programming for Optimal Budget Sacrifice
Finds the mathematically optimal spending reduction plan that covers a cash deficit
with minimum lifestyle disruption / utility penalty.
"""
from typing import Dict, List, Tuple, Any
import math

class BudgetSacrificeOptimizer:
    """
    Mixed-Integer / Knapsack Solver for optimal category spending cuts.
    Objective: Minimize sum(w_c * cut_c) subject to sum(cut_c) >= Deficit.
    """
    # Category utility weights: lower weight = lower lifestyle sacrifice / cut first
    DEFAULT_UTILITY_WEIGHTS = {
        "dining": 1.0,
        "entertainment": 1.2,
        "shopping": 1.5,
        "travel": 2.0,
        "hobbies": 2.2,
        "personal_care": 3.0,
        "groceries": 4.5,
        "transportation": 6.0,
        "healthcare": 8.0,
        "utilities": 10.0,
        "housing": 25.0,
        "debt": 50.0
    }
    
    # Maximum percentage of spend that can realistically be cut per category
    MAX_CUT_PCT = {
        "dining": 0.50,
        "entertainment": 0.50,
        "shopping": 0.50,
        "travel": 0.60,
        "hobbies": 0.50,
        "personal_care": 0.30,
        "groceries": 0.20,
        "transportation": 0.15,
        "healthcare": 0.0,
        "utilities": 0.0,
        "housing": 0.0,
        "debt": 0.0
    }

    def __init__(self, utility_weights: Dict[str, float] = None):
        self.weights = utility_weights or self.DEFAULT_UTILITY_WEIGHTS

    def optimize_spending_cuts(
        self,
        category_monthly_spending: Dict[str, float],
        required_monthly_savings: float
    ) -> Dict[str, Any]:
        """
        Solves continuous/fractional knapsack optimization with category bounds.
        
        Args:
            category_monthly_spending: Dictionary mapping category -> historical monthly spend.
            required_monthly_savings: Target monthly deficit that must be eliminated.
            
        Returns:
            Dictionary containing:
                - optimal_cuts: {category: cut_amount}
                - total_savings: float
                - utility_penalty: float
                - feasibility: bool
        """
        if required_monthly_savings <= 0:
            return {
                "optimal_cuts": {},
                "total_savings": 0.0,
                "utility_penalty": 0.0,
                "feasibility": True
            }

        # Build candidate items with max allowable cut and efficiency (weight per dollar saved)
        candidates = []
        for cat, spend in category_monthly_spending.items():
            cat_norm = cat.strip().lower()
            weight = self.weights.get(cat_norm, 3.0)
            max_pct = self.MAX_CUT_PCT.get(cat_norm, 0.30)
            max_cut = spend * max_pct
            if max_cut > 0.5: # At least 50 cents cuttable
                candidates.append({
                    "category": cat,
                    "max_cut": max_cut,
                    "weight": weight,
                    "efficiency": weight # Lower is better to cut first
                })

        # Sort candidates ascending by utility penalty per dollar (greedy optimal for linear knapsack)
        candidates.sort(key=lambda x: x["efficiency"])

        total_saved = 0.0
        utility_loss = 0.0
        optimal_cuts = {}
        remaining_needed = required_monthly_savings

        for item in candidates:
            if remaining_needed <= 0.001:
                break
            cat = item["category"]
            take_cut = min(item["max_cut"], remaining_needed)
            # Round to sensible currency precision
            take_cut = round(take_cut, 2)
            if take_cut > 0:
                optimal_cuts[cat] = take_cut
                total_saved += take_cut
                utility_loss += take_cut * item["weight"]
                remaining_needed -= take_cut

        is_feasible = total_saved >= (required_monthly_savings - 1e-3)

        return {
            "optimal_cuts": optimal_cuts,
            "total_savings": round(total_saved, 2),
            "utility_penalty": round(utility_loss, 2),
            "feasibility": is_feasible,
            "deficit_remaining": max(0.0, round(required_monthly_savings - total_saved, 2))
        }
