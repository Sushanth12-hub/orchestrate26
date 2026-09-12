"""
Stochastic Engine: Monte Carlo Simulation & Cash-Flow at Risk (CFaR)
Computes probabilistic trajectory envelopes, VaR 0.95, and volatility-calibrated safe amounts.
"""
import numpy as np
from typing import Dict, List, Tuple, Any

class StochasticCashFlowEngine:
    """
    Monte Carlo simulator modeling stochastic income variance and
    discretionary expense shocks over a rolling 90-day horizon.
    """
    def __init__(self, num_simulations: int = 1000, random_seed: int = 42):
        self.num_simulations = num_simulations
        self.rng = np.random.default_rng(random_seed)

    def simulate_trajectories(
        self,
        base_trajectory: List[float],
        discretionary_categories: Dict[str, float],
        income_uncertainty_pct: float = 0.05,
        expense_volatility_pct: float = 0.15
    ) -> Dict[str, Any]:
        """
        Generates N simulated balance trajectories by injecting stochastic shocks.
        
        Args:
            base_trajectory: 91-day deterministic balance array (Day 0 to Day 90).
            discretionary_categories: Monthly spend per discretionary category.
            income_uncertainty_pct: Standard deviation of salary receipt timing/amount.
            expense_volatility_pct: Standard deviation of variable spending shocks.
            
        Returns:
            Dictionary containing percentiles (5th, 50th, 95th), CFaR, and risk-adjusted safe amount.
        """
        horizon = len(base_trajectory)
        base_arr = np.array(base_trajectory, dtype=np.float64)
        
        # Calculate daily discretionary variance
        total_monthly_discretionary = sum(discretionary_categories.values()) if discretionary_categories else 0.0
        daily_discretionary = total_monthly_discretionary / 30.0 if total_monthly_discretionary > 0 else 10.0
        daily_sigma = daily_discretionary * expense_volatility_pct
        
        # Matrix of random spending shocks: shape (N, horizon)
        spending_shocks = self.rng.normal(0, daily_sigma, size=(self.num_simulations, horizon))
        
        # Accumulate shocks to reflect cumulative drift
        cumulative_shocks = np.cumsum(spending_shocks, axis=1)
        
        # Simulated trajectories matrix
        simulated_paths = base_arr + cumulative_shocks
        
        # Compute trajectory statistics across simulations
        mean_path = np.mean(simulated_paths, axis=0)
        std_path = np.std(simulated_paths, axis=0)
        p05_path = np.percentile(simulated_paths, 5, axis=0)   # 95% Value at Risk lower bound
        p50_path = np.percentile(simulated_paths, 50, axis=0)  # Median
        p95_path = np.percentile(simulated_paths, 95, axis=0)  # 95th percentile
        
        # Cash-Flow at Risk (CFaR) at 95% confidence level
        cfar_95 = base_arr - p05_path
        max_cfar = float(np.max(cfar_95))
        
        return {
            "mean_trajectory": mean_path.tolist(),
            "std_trajectory": std_path.tolist(),
            "var_95_lower_bound": p05_path.tolist(),
            "median_trajectory": p50_path.tolist(),
            "p95_upper_bound": p95_path.tolist(),
            "max_cfar_95": max_cfar,
            "min_simulated_balance": float(np.min(p05_path))
        }

    def compute_cfar_safe_amount(
        self,
        base_trajectory: List[float],
        minimum_balance: float,
        discretionary_categories: Dict[str, float]
    ) -> Tuple[float, float]:
        """
        Calculates safe amount under stochastic volatility:
        Safe Amount = max(0, min_t(p05(t) - min_balance))
        """
        metrics = self.simulate_trajectories(base_trajectory, discretionary_categories)
        var_lower = np.array(metrics["var_95_lower_bound"])
        
        cushions = var_lower - minimum_balance
        stochastic_safe = float(max(0.0, np.min(cushions)))
        return stochastic_safe, metrics["max_cfar_95"]
