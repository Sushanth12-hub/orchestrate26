"""
VLM Bridge: Multimodal Vision-Language Model Interface & Receipt Tamper Detection
Connects raw visual inputs (receipts/invoices) to zero-shot multimodal vision models
(Gemini 1.5 Flash / Florence-2 / Donut) with prompt schema, arithmetic consistency,
and visual tamper detection heuristics.
"""
import os
import re
from typing import Dict, List, Optional, Any

class VLMReceiptBridge:
    """
    Multimodal Vision-Language Model Bridge for visual receipt verification,
    structured JSON entity extraction, and digital artifact tamper scoring.
    """
    
    SYSTEM_PROMPT = """
You are an expert Forensic Financial Document Inspector and Vision-Language Parser.
Analyze the uploaded financial document image and extract the verified financial entities.
Respond ONLY with a valid JSON object strictly matching this schema:
{
  "merchant_name": string or null,
  "transaction_date": "YYYY-MM-DD" or null,
  "currency": "EUR" | "USD" | "GBP" | "INR" | "CAD" or null,
  "subtotal": float or null,
  "tax_amount": float or null,
  "total_amount": float,
  "is_tampered_or_fraudulent": boolean,
  "tamper_evidence": string or null,
  "line_items": [
    {"description": string, "amount": float}
  ]
}
Rules:
1. Ensure total_amount == subtotal + tax_amount (allowing for rounding within 0.02).
2. Inspect for font inconsistencies, pixelation around numbers, misaligned text, or altered totals.
"""

    def __init__(self, model_name: str = "gemini-1.5-flash", fallback_to_local_ocr: bool = True):
        self.model_name = model_name
        self.fallback_to_local_ocr = fallback_to_local_ocr

    def build_multimodal_request(self, image_path: str) -> Dict[str, Any]:
        """
        Builds the structured API payload for multimodal vision models.
        """
        if not os.path.exists(image_path):
            raise FileNotFoundError(f"Image not found at path: {image_path}")
            
        ext = os.path.splitext(image_path)[1].lower().replace(".", "")
        mime_type = "image/jpeg" if ext in ["jpg", "jpeg"] else f"image/{ext}"
        
        return {
            "model": self.model_name,
            "system_instruction": self.SYSTEM_PROMPT,
            "contents": [
                {"role": "user", "parts": [
                    {"text": "Extract and forensically verify all payment entities from this receipt."},
                    {"inline_data": {"mime_type": mime_type, "file_path": image_path}}
                ]}
            ]
        }

    def verify_arithmetic_consistency(self, extracted_data: Dict[str, Any]) -> bool:
        """
        Cross-checks subtotal + tax against total_amount.
        """
        subtotal = extracted_data.get("subtotal")
        tax = extracted_data.get("tax_amount")
        total = extracted_data.get("total_amount")
        
        if total is None:
            return False
            
        if subtotal is not None and tax is not None:
            expected = subtotal + tax
            return abs(expected - total) <= 0.05
            
        return True

    def calculate_visual_tamper_score(self, metadata: Dict[str, Any]) -> float:
        """
        Heuristic tamper risk assessment based on optical metadata:
        - Ratio of mismatched bounding boxes
        - Inconsistent font sizes across decimal points
        - High compression artifacts around total currency numerals
        Returns a score between 0.0 (clean) and 1.0 (highly suspicious).
        """
        risk_score = 0.0
        if metadata.get("inconsistent_line_height", False):
            risk_score += 0.35
        if metadata.get("compression_anomaly_detected", False):
            risk_score += 0.40
        if metadata.get("arithmetic_mismatch", False):
            risk_score += 0.25
        return min(1.0, risk_score)
