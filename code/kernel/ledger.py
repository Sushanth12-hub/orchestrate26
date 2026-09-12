"""
Financial Kernel: Ledger & Financial State Reconstructor (Layer 3)
Builds canonical user ledgers, conservative cash states, and recurring schedule projections.
"""
from typing import Dict, List, Optional, Any, Tuple
import pandas as pd
import numpy as np
from datetime import datetime, timedelta

class FinancialProfile:
    def __init__(self, row: pd.Series):
        self.user_id = str(row["user_id"])
        self.home_currency = str(row["home_currency"])
        self.current_available_balance = float(row["current_available_balance"])
        self.minimum_balance_to_keep = float(row["minimum_balance_to_keep"])
        self.financial_priorities = str(row["financial_priorities"]).split("|") if pd.notna(row.get("financial_priorities")) else []
        self.expense_categories_to_protect = str(row["expense_categories_to_protect"]).split("|") if pd.notna(row.get("expense_categories_to_protect")) else []
        self.expense_categories_user_is_willing_to_reduce = str(row["expense_categories_user_is_willing_to_reduce"]).split("|") if pd.notna(row.get("expense_categories_user_is_willing_to_reduce")) else []
        self.expense_categories_user_is_willing_to_stop = str(row["expense_categories_user_is_willing_to_stop"]).split("|") if pd.notna(row.get("expense_categories_user_is_willing_to_stop")) else []
        self.payment_methods_user_will_consider = str(row["payment_methods_user_will_consider"]).split("|") if pd.notna(row.get("payment_methods_user_will_consider")) else []
        self.max_installment_months = float(row["max_installment_months"]) if pd.notna(row.get("max_installment_months")) else None

class CanonicalLedger:
    def __init__(self, profile: FinancialProfile, events_df: pd.DataFrame, fx_converter, ocr_agent, message_agent):
        self.profile = profile
        self.user_id = profile.user_id
        self.home_currency = profile.home_currency
        self.fx_converter = fx_converter
        self.ocr_agent = ocr_agent
        self.message_agent = message_agent
        
        # Filter events for user
        self.raw_events = events_df[events_df["user_id"] == self.user_id].copy()
        self._normalize_events()
        self._apply_message_amendments()

    def _normalize_events(self):
        # 1. Recover missing amounts from OCR
        for idx, row in self.raw_events.iterrows():
            if pd.isna(row["amount"]):
                eid = row["event_id"]
                claim = self.ocr_agent.get_claim_for_event(eid)
                if claim:
                    self.raw_events.at[idx, "amount"] = claim.value
                    if pd.isna(row["currency"]):
                        self.raw_events.at[idx, "currency"] = claim.currency

        # 2. Normalize FX to home_currency
        norm_amounts = []
        for _, row in self.raw_events.iterrows():
            amt = float(row["amount"]) if pd.notna(row["amount"]) else 0.0
            curr = str(row["currency"]) if pd.notna(row["currency"]) else self.home_currency
            s_date = str(row["settlement_date"]) if pd.notna(row["settlement_date"]) else str(row["event_date"])
            conv_amt = self.fx_converter.convert(amt, curr, self.home_currency, s_date)
            norm_amounts.append(conv_amt)
        self.raw_events["normalized_amount"] = norm_amounts

    def _apply_message_amendments(self):
        amendments = self.message_agent.get_user_amendments(self.user_id)
        self.amendments = amendments

    def get_opening_balance(self, request_date: str) -> float:
        """Available cash on request_date. Future pending debits are deducted on settlement_date in simulator."""
        return self.profile.current_available_balance

    def get_candidate_pruning_events(self) -> List[Dict[str, Any]]:
        """Identify historical recurring events that the user is permitted to stop or reduce.
        Takes only the latest event per recurring description to eliminate duplicate combinations."""
        candidates = []
        seen_descriptions = set()
        
        # Sort descending by settlement_date so we inspect most recent occurrence
        sorted_events = self.raw_events.sort_values("settlement_date", ascending=False)
        
        for _, row in sorted_events.iterrows():
            desc = str(row.get("description", ""))
            if desc in seen_descriptions:
                continue
                
            flex = str(row.get("flexibility", ""))
            cat = str(row.get("category", ""))
            eid = str(row.get("event_id", ""))
            amt = float(row.get("normalized_amount", 0.0))
            min_amt = float(row.get("minimum_allowed_amount", 0.0)) if pd.notna(row.get("minimum_allowed_amount")) else None
            
            can_stop = (flex in ["stoppable", "reducible_or_stoppable"]) and (cat in self.profile.expense_categories_user_is_willing_to_stop)
            can_reduce = (flex in ["reducible", "reducible_or_stoppable"]) and (cat in self.profile.expense_categories_user_is_willing_to_reduce) and (min_amt is not None) and (min_amt < amt)
            
            if can_stop or can_reduce:
                seen_descriptions.add(desc)
                if can_stop:
                    candidates.append({
                        "event_id": eid,
                        "action_type": "stop",
                        "category": cat,
                        "description": desc,
                        "original_amount": amt,
                        "new_amount": 0.0,
                        "savings_per_occurrence": amt
                    })
                if can_reduce:
                    candidates.append({
                        "event_id": eid,
                        "action_type": "reduce_to",
                        "category": cat,
                        "description": desc,
                        "original_amount": amt,
                        "new_amount": min_amt,
                        "savings_per_occurrence": amt - min_amt
                    })
        return candidates
