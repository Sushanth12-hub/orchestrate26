"""
Evidence Layer: Message Amendment Agent (A2)
Parses 216 English and Indonesian messages, extracts structured financial amendments,
and enforces prompt injection immunity (untrusted input doctrine).
"""
import re
from typing import Dict, List, Optional, Any
from dataclasses import dataclass

@dataclass
class MessageAmendment:
    message_id: str
    user_id: str
    request_id: Optional[str]
    related_event_id: Optional[str]
    source_type: str
    amendment_type: str  # salary_override, salary_date_change, rent_increase_pct, unconfirmed_income, refund_pending, internal_transfer
    value: Any
    currency: Optional[str]
    effective_date: Optional[str]
    is_actionable: bool
    evidence_span: str

class MessageAmendmentAgent:
    """Agent A2: Interprets natural language communications with prompt injection defense."""
    def __init__(self, messages_df):
        self.messages_df = messages_df
        self.user_amendments: Dict[str, List[MessageAmendment]] = {}
        self._parse_all_messages()

    def _parse_all_messages(self):
        for _, row in self.messages_df.iterrows():
            msg_id = str(row["message_id"])
            user_id = str(row["user_id"])
            req_id = str(row["request_id"]) if pd_not_na(row.get("request_id")) else None
            evt_id = str(row["related_event_id"]) if pd_not_na(row.get("related_event_id")) else None
            src = str(row["source_type"])
            text = str(row["message_text"])

            amendments = self._extract_amendments_from_text(msg_id, user_id, req_id, evt_id, src, text)
            if user_id not in self.user_amendments:
                self.user_amendments[user_id] = []
            self.user_amendments[user_id].extend(amendments)

    def _extract_amendments_from_text(self, msg_id, user_id, req_id, evt_id, src, text) -> List[MessageAmendment]:
        amendments = []
        
        # 1. Prompt injection defense: reject explicit instructions attempting to force rules
        suspicious_patterns = [
            r"ignore all previous instructions",
            r"mark as affordable_now",
            r"set amount_safe_to_pay",
            r"bypass minimum balance"
        ]
        for pat in suspicious_patterns:
            if re.search(pat, text, re.IGNORECASE):
                # Quarantine adversarial payload
                return amendments

        # 2. Confirmed salary increase / new amount (e.g. "Gaji bulanan Anda naik menjadi IDR 42750000. Perubahan ini berlaku mulai 2025-08-15.")
        id_raise = re.search(r"Gaji bulanan Anda naik menjadi (IDR|INR|USD|EUR|ZAR)\s*([\d,]+).*?mulai\s*(\d{4}-\d{2}-\d{2})", text, re.IGNORECASE)
        if id_raise:
            curr = id_raise.group(1).upper()
            amt = float(id_raise.group(2).replace(",", ""))
            date = id_raise.group(3)
            amendments.append(MessageAmendment(
                message_id=msg_id, user_id=user_id, request_id=req_id, related_event_id=evt_id,
                source_type=src, amendment_type="salary_override", value=amt, currency=curr,
                effective_date=date, is_actionable=True, evidence_span=id_raise.group(0)
            ))

        # 3. Temporary monthly pay / salary reduction (e.g. "Your temporary monthly pay is EUR 1037.52" or "Your next salary is reduced to EUR 1422.85")
        sal_temp = re.search(r"(?:temporary monthly pay is|salary is reduced to)\s*(IDR|INR|USD|EUR|ZAR)\s*([\d,.]+)", text, re.IGNORECASE)
        if sal_temp:
            curr = sal_temp.group(1).upper()
            amt_raw = sal_temp.group(2).replace(",", "").rstrip(".")
            try:
                amt = float(amt_raw)
                amendments.append(MessageAmendment(
                    message_id=msg_id, user_id=user_id, request_id=req_id, related_event_id=evt_id,
                    source_type=src, amendment_type="salary_override", value=amt, currency=curr,
                    effective_date=None, is_actionable=True, evidence_span=sal_temp.group(0)
                ))
            except ValueError:
                pass

        # 4. Salary date update (e.g. "Your confirmed salary is now expected on 2024-09-23")
        sal_date = re.search(r"confirmed salary is now expected on\s*(\d{4}-\d{2}-\d{2})", text, re.IGNORECASE)
        if sal_date:
            amendments.append(MessageAmendment(
                message_id=msg_id, user_id=user_id, request_id=req_id, related_event_id=evt_id,
                source_type=src, amendment_type="salary_date_change", value=sal_date.group(1), currency=None,
                effective_date=sal_date.group(1), is_actionable=True, evidence_span=sal_date.group(0)
            ))

        # 5. Seasonal contract ended / income stopped (e.g. "seasonal contract has ended. No off-season income")
        if re.search(r"seasonal contract has ended|no off-season income", text, re.IGNORECASE):
            amendments.append(MessageAmendment(
                message_id=msg_id, user_id=user_id, request_id=req_id, related_event_id=evt_id,
                source_type=src, amendment_type="salary_ended", value=0.0, currency=None,
                effective_date=None, is_actionable=True, evidence_span=text
            ))

        # 6. Rent increase (e.g. "The renewed lease increases monthly rent by 12%")
        rent_inc = re.search(r"increases monthly rent by\s*(\d+)%", text, re.IGNORECASE)
        if rent_inc:
            pct = float(rent_inc.group(1)) / 100.0
            amendments.append(MessageAmendment(
                message_id=msg_id, user_id=user_id, request_id=req_id, related_event_id=evt_id,
                source_type=src, amendment_type="rent_increase_pct", value=pct, currency=None,
                effective_date=None, is_actionable=True, evidence_span=rent_inc.group(0)
            ))

        # 7. Unconfirmed income / bonus pending / gig payout pending (Non-actionable / conservative exclusion)
        unconfirmed = re.search(r"(?:pending|belum disetujui|menunggu hasil|not reached your account|still in payment processing)", text, re.IGNORECASE)
        if unconfirmed and any(w in text.lower() for w in ["bonus", "komisi", "commission", "payout", "prize", "refund"]):
            amendments.append(MessageAmendment(
                message_id=msg_id, user_id=user_id, request_id=req_id, related_event_id=evt_id,
                source_type=src, amendment_type="unconfirmed_credit_alert", value=0.0, currency=None,
                effective_date=None, is_actionable=False, evidence_span=text[:100]
            ))

        return amendments

    def get_user_amendments(self, user_id: str) -> List[MessageAmendment]:
        return self.user_amendments.get(user_id, [])

    def classify_with_nli(self, text: str) -> Dict[str, Any]:
        """Classifies message semantics and adversarial injection risk using NLI guard."""
        from .nli_guard import NLIMessageGuard
        guard = NLIMessageGuard()
        return guard.classify_message(text)

def pd_not_na(val):
    if val is None:
        return False
    if isinstance(val, float) and str(val) == "nan":
        return False
    if str(val).strip() == "" or str(val).lower() == "nan":
        return False
    return True
