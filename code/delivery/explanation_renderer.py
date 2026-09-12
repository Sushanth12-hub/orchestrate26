"""
Delivery Layer: Grounded Explanation Renderer (Layer 5)
Renders concise 1-3 sentence explanations strictly grounded in certified financial facts,
exact dates, currency symbols, and minimum reserve amounts.
"""
from typing import Dict, List, Optional, Any
from datetime import datetime

class ExplanationRenderer:
    @staticmethod
    def render(
        status: str,
        method: str,
        currency: str,
        requested_amount: float,
        amount_safe_to_pay: float,
        minimum_balance: float,
        payment_plan: str,
        earliest_date: Optional[str],
        spending_changes_str: str,
        desired_completion_date: str,
        spending_changes_list: List[Dict[str, Any]] = None
    ) -> str:
        curr_str = currency
        comp_d_str = format_date_str(desired_completion_date)
        min_str = format_currency(minimum_balance, currency)
        req_str = format_currency(requested_amount, currency)
        safe_str = format_currency(amount_safe_to_pay, currency)

        if status == "affordable_now":
            return f"Pay {req_str} today. This leaves at least {min_str} available over the next 90 days."

        elif status == "affordable_with_plan":
            if method == "installments":
                # Parse installment count and start date from plan
                parts = payment_plan.split("|")
                num_inst = len(parts)
                first_part = parts[0].split(":")
                start_d = format_date_str(first_part[0])
                inst_amt = format_currency(float(first_part[1]), currency)
                return f"Use {num_inst} installments of {inst_amt}, starting {start_d}. This leaves at least {min_str} available."

            elif method == "partial_payment":
                parts = payment_plan.split("|")
                first_amt = format_currency(float(parts[0].split(":")[1]), currency)
                second_d = format_date_str(parts[1].split(":")[0])
                second_amt = format_currency(float(parts[1].split(":")[1]), currency)
                return f"Pay {first_amt} today and the remaining {second_amt} on {second_d}. This completes the full request and keeps the {min_str} minimum protected."

            elif spending_changes_str != "none" and spending_changes_list:
                actions_text = []
                for ch in spending_changes_list:
                    desc = ch.get("description", "subscription").lower()
                    if ch["action_type"] == "stop":
                        actions_text.append(f"Stop the {desc}")
                    elif ch["action_type"] == "reduce_to":
                        red_amt = format_currency(ch["new_amount"], currency)
                        actions_text.append(f"Reduce the {desc} to {red_amt}")
                action_phrase = " and ".join(actions_text)
                return f"{action_phrase}, then pay {req_str} today. This leaves at least {min_str} available."
            else:
                return f"Proceed with the structured plan for {req_str}. This leaves at least {min_str} protected."

        elif status == "affordable_later" or method == "wait":
            earliest_d_str = format_date_str(earliest_date or desired_completion_date)
            return f"Pay {req_str} in full on {earliest_d_str}. Paying earlier would take the balance below the {min_str} minimum."

        else: # not_affordable
            if comp_d_str:
                return f"Do not make this payment by {comp_d_str}. None of the available options keeps the {min_str} minimum protected."
            return f"Do not proceed with the {req_str} request. None of the available options keeps the {min_str} minimum protected."

def format_currency(amount: float, currency: str) -> str:
    if amount == int(amount):
        formatted_num = f"{int(amount):,}"
    else:
        formatted_num = f"{amount:,.2f}"
    return f"{currency} {formatted_num}"

def format_date_str(d_str: Optional[str]) -> str:
    if not d_str or str(d_str) == "nan":
        return ""
    try:
        dt = datetime.strptime(d_str, "%Y-%m-%d")
        return dt.strftime("%d %B %Y").lstrip("0")
    except:
        return str(d_str)
