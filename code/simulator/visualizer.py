"""
Trajectory Visualizer: Publication-Quality Matplotlib Cash-Flow Plots
Generates 90-day forward trajectory charts with Monte Carlo VaR 0.95 confidence bands,
payday credit spikes, and minimum safety threshold lines.
"""
import os
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from typing import Dict, List, Optional, Any

class TrajectoryPlotter:
    """
    Renders high-resolution cash flow trajectory curves.
    """
    @staticmethod
    def plot_request_trajectory(
        dates: List[str],
        base_balances: List[float],
        min_balance: float,
        var_lower_bound: Optional[List[float]],
        request_amount: float,
        output_filepath: str,
        title: str = "90-Day Cash-Flow Trajectory Forecast"
    ) -> str:
        """
        Plots the 90-day curve and saves to disk.
        """
        plt.figure(figsize=(10, 5), dpi=150)
        
        days = list(range(len(base_balances)))
        
        # Base trajectory line
        plt.plot(days, base_balances, color="#0066CC", linewidth=2.2, label="Projected Daily Balance (Base)")
        
        # Monte Carlo VaR 95% envelope
        if var_lower_bound is not None and len(var_lower_bound) == len(base_balances):
            plt.fill_between(days, var_lower_bound, base_balances, color="#0066CC", alpha=0.15, label="95% Confidence Band (VaR 0.95)")
            plt.plot(days, var_lower_bound, color="#64748B", linestyle=":", linewidth=1.2, label="5th Percentile Lower Bound")

        # Minimum balance invariant line
        plt.axhline(y=min_balance, color="#DC2626", linestyle="--", linewidth=1.5, label=f"Minimum Buffer ({min_balance:,.0f})")
        
        plt.title(title, fontsize=12, fontweight="bold", pad=12, color="#0A2540")
        plt.xlabel("Days Ahead (t = 0 to 90)", fontsize=10, labelpad=8)
        plt.ylabel("Account Balance", fontsize=10, labelpad=8)
        plt.grid(True, linestyle="--", alpha=0.4)
        plt.legend(loc="upper left", frameon=True, fontsize=9)
        plt.tight_layout()
        
        os.makedirs(os.path.dirname(os.path.abspath(output_filepath)), exist_ok=True)
        plt.savefig(output_filepath, bbox_inches="tight")
        plt.close()
        
        return output_filepath
