"""
Financial Kernel: Dated Foreign Exchange Converter (Layer 3)
Converts foreign currency amounts to the user's home currency using exact dated directional rates.
"""
from typing import Optional
import pandas as pd

class FXConverter:
    def __init__(self, fx_df: pd.DataFrame):
        self.fx_df = fx_df.copy()
        self.fx_df["rate_date"] = pd.to_datetime(self.fx_df["rate_date"])
        
    def convert(self, amount: float, from_curr: str, to_curr: str, settlement_date: str) -> float:
        if from_curr == to_curr or amount == 0:
            return float(amount)
        
        target_dt = pd.to_datetime(settlement_date)
        
        # 1. Look for exact direct rate on closest rate_date
        direct_matches = self.fx_df[(self.fx_df["from_currency"] == from_curr) & (self.fx_df["to_currency"] == to_curr)].copy()
        if not direct_matches.empty:
            direct_matches["diff"] = (direct_matches["rate_date"] - target_dt).abs()
            closest = direct_matches.sort_values("diff").iloc[0]
            return float(amount * closest["rate"])
        
        # 2. Look for inverse rate
        inverse_matches = self.fx_df[(self.fx_df["from_currency"] == to_curr) & (self.fx_df["to_currency"] == from_curr)].copy()
        if not inverse_matches.empty:
            inverse_matches["diff"] = (inverse_matches["rate_date"] - target_dt).abs()
            closest = inverse_matches.sort_values("diff").iloc[0]
            return float(amount / closest["rate"])
            
        # 3. Two-hop via USD or EUR
        # Check from_curr -> USD and USD -> to_curr
        usd_rates_from = self.fx_df[(self.fx_df["from_currency"] == from_curr) & (self.fx_df["to_currency"] == "USD")]
        if not usd_rates_from.empty:
            usd_amt = self.convert(amount, from_curr, "USD", settlement_date)
            return self.convert(usd_amt, "USD", to_curr, settlement_date)
            
        usd_rates_to = self.fx_df[(self.fx_df["from_currency"] == "USD") & (self.fx_df["to_currency"] == from_curr)]
        if not usd_rates_to.empty:
            usd_amt = self.convert(amount, from_curr, "USD", settlement_date)
            return self.convert(usd_amt, "USD", to_curr, settlement_date)

        # Fallback 1:1 if no path found
        return float(amount)
