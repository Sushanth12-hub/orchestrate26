"""
Portfolio Scheduler: Multi-Goal Concurrent Purchase Scheduling
Evaluates and schedules multiple competing financial goals across a shared rolling
90-day cash flow horizon without triggering cross-goal default or liquidity breaches.
"""
from typing import Dict, List, Optional, Any
from datetime import date, timedelta

class MultiGoalPortfolioScheduler:
    """
    Portfolio-level optimizer that arbitrates between multiple simultaneous
    purchase requests, savings targets, and debt milestones.
    """
    
    def __init__(self, simulator, minimum_balance: float):
        self.simulator = simulator
        self.minimum_balance = minimum_balance

    def schedule_goal_portfolio(
        self,
        goals: List[Dict[str, Any]],
        start_date: date
    ) -> Dict[str, Any]:
        """
        Schedules multiple competing goals:
        Each goal has:
          - 'goal_id': str
          - 'amount': float
          - 'target_date': date or None
          - 'priority': int (1 = Highest, e.g. Emergency buffer/Rent, 5 = Discretionary)
          - 'allow_partial': bool
          
        Returns:
          Allocation schedule per goal, feasible fulfillment dates, and leftover liquidity.
        """
        # Sort goals by priority first, then by target date
        sorted_goals = sorted(
            goals,
            key=lambda g: (g.get("priority", 3), g.get("target_date") or date(9999, 12, 31))
        )
        
        # Track virtual simulated trajectory
        # Base trajectory over 90 days
        base_traj = self.simulator.project_base_trajectory(start_date.strftime("%Y-%m-%d"), 90)
        curr_traj = list(base_traj)
        
        scheduled_results = []
        
        for goal in sorted_goals:
            gid = goal["goal_id"]
            amount = float(goal["amount"])
            target_d = goal.get("target_date")
            allow_partial = goal.get("allow_partial", False)
            
            # Find earliest date where curr_traj can absorb 'amount' without breaching min_balance
            allocated_amount = 0.0
            scheduled_date = None
            status = "unfulfilled"
            
            # Check if immediately payable on start_date
            cushions = [curr_traj[t] - self.minimum_balance for t in range(len(curr_traj))]
            min_cushion = min(cushions) if cushions else 0.0
            
            if min_cushion >= amount:
                allocated_amount = amount
                scheduled_date = start_date
                status = "fully_scheduled_now"
                # Deduct from trajectory from day 0 onward
                for t in range(len(curr_traj)):
                    curr_traj[t] -= amount
            else:
                # Check sequential days
                for day_idx in range(len(curr_traj)):
                    # If we execute on day_idx, will all subsequent days stay above min_balance?
                    subsequent_cushions = [curr_traj[t] - self.minimum_balance for t in range(day_idx, len(curr_traj))]
                    if min(subsequent_cushions) >= amount:
                        candidate_date = start_date + timedelta(days=day_idx)
                        if target_d is None or candidate_date <= target_d:
                            allocated_amount = amount
                            scheduled_date = candidate_date
                            status = "scheduled_delayed"
                            for t in range(day_idx, len(curr_traj)):
                                curr_traj[t] -= amount
                            break
                            
                if status == "unfulfilled" and allow_partial:
                    # Allocate whatever maximum safe cushion is available
                    safe_partial = max(0.0, min_cushion)
                    if safe_partial > 10.0: # Meaningful partial contribution
                        allocated_amount = safe_partial
                        scheduled_date = start_date
                        status = "partially_scheduled"
                        for t in range(len(curr_traj)):
                            curr_traj[t] -= safe_partial

            scheduled_results.append({
                "goal_id": gid,
                "requested_amount": amount,
                "allocated_amount": allocated_amount,
                "scheduled_date": scheduled_date.strftime("%Y-%m-%d") if scheduled_date else None,
                "status": status,
                "target_met": allocated_amount >= amount
            })
            
        return {
            "portfolio_goals": scheduled_results,
            "final_minimum_cushion": min([b - self.minimum_balance for b in curr_traj]),
            "unfulfilled_goals_count": sum(1 for g in scheduled_results if not g["target_met"])
        }
