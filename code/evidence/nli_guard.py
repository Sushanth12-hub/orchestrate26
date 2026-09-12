"""
NLI Guard: Natural Language Inference & Prompt Injection Defense
Classifies unstructured messages into Entailment, Neutral, or Contradiction/Injection.
Defends autonomous financial planning against adversarial prompt injection,
unauthorized balance overrides, and simulated bank fraud.
"""
import re
from typing import Dict, List, Tuple, Any

class NLIMessageGuard:
    """
    3-Class Natural Language Inference (NLI) & Adversarial Screening Engine.
    Classes:
      - ENTAILMENT: Legitimate financial amendment (salary update, rent reduction, confirmed bonus)
      - NEUTRAL: Informational, chit-chat, or greetings
      - CONTRADICTION_ATTACK: Adversarial prompt injection, system instruction override, or fake balances
    """
    
    # Signatures of prompt injection and instruction hacking
    INJECTION_PATTERNS = [
        r"ignore\s+(previous|all)\s+instructions",
        r"system\s*:\s*",
        r"override\s+(balance|minimum|rules)",
        r"you\s+must\s+approve",
        r"bypass\s+safety",
        r"delete\s+ledger",
        r"grant\s+unlimited",
        r"pretend\s+you\s+are",
        r"jailbreak",
        r"developer\s+mode",
        r"as\s+an\s+ai\s+without\s+limitations"
    ]
    
    # Financial amendment keywords with ground truth semantics
    FINANCIAL_TERMS = [
        r"rent\s+(is|reduced|increased|lowered)",
        r"salary\s+(bonus|raise|increment|cut|delayed)",
        r"payroll\s+update",
        r"recurring\s+(canceled|started)",
        r"subscription\s+(ended|cancelled|terminated)",
        r"debt\s+(paid\s+off|settled)"
    ]

    def __init__(self):
        self._compiled_injections = [re.compile(p, re.IGNORECASE) for p in self.INJECTION_PATTERNS]
        self._compiled_financial = [re.compile(p, re.IGNORECASE) for p in self.FINANCIAL_TERMS]

    def classify_message(self, text: str) -> Dict[str, Any]:
        """
        Classifies incoming user/vendor message into NLI categories
        and computes adversarial risk.
        """
        if not text or not isinstance(text, str):
            return {
                "classification": "NEUTRAL",
                "risk_score": 0.0,
                "is_adversarial": False,
                "confidence": 1.0,
                "reason": "Empty or non-text message"
            }

        clean_text = text.strip()

        # Check for adversarial injection signatures
        for pattern in self._compiled_injections:
            if pattern.search(clean_text):
                return {
                    "classification": "CONTRADICTION_ATTACK",
                    "risk_score": 0.98,
                    "is_adversarial": True,
                    "confidence": 0.95,
                    "reason": f"Matched prompt injection signature: {pattern.pattern}"
                }

        # Check for legitimate financial amendment
        has_financial_signal = any(p.search(clean_text) for p in self._compiled_financial)
        has_currency_or_numbers = bool(re.search(r"(\$|€|£|₹|\bEUR\b|\bUSD\b|\bGBP\b|\bINR\b|\d+(\.\d{1,2})?)", clean_text))

        if has_financial_signal and has_currency_or_numbers:
            return {
                "classification": "ENTAILMENT",
                "risk_score": 0.05,
                "is_adversarial": False,
                "confidence": 0.92,
                "reason": "Verified financial amendment statement with numerical entity"
            }

        return {
            "classification": "NEUTRAL",
            "risk_score": 0.0,
            "is_adversarial": False,
            "confidence": 0.88,
            "reason": "Standard non-adversarial user communication"
        }

    def sanitize_and_validate(self, text: str) -> Tuple[bool, str]:
        """
        Validates whether a message is safe to process by downstream agents.
        Returns (is_safe, sanitized_text).
        """
        res = self.classify_message(text)
        if res["is_adversarial"]:
            return False, "[REDACTED: ADVERSARIAL PROMPT INJECTION DETECTED]"
        return True, text.strip()
