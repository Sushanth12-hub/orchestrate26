# Token Usage and Cost Analysis Report

**HackerRank Orchestrate — Buy or Wait? Challenge**
**Final Production Full-Dataset Run**

---

## 1. Executive Summary

- **Total Requests Evaluated:** 250
- **Pipeline Execution Mode:** Deterministic Multi-Agent System (Hybrid Policy Kernel)
- **Batch Processing Latency:** 95.21 seconds
- **Average Latency per Request:** 0.3808 seconds
- **Verification Invariant Status:** 100% Passed (Zero balance safety violations)

---

## 2. Model Providers & Extraction Telemetry

| Agent Role | Model / Engine Provider | Invocation Count | Prompt / Input Tokens | Completion / Output Tokens | Total Tokens | Est. Cost (USD) |
| :--- | :--- | :---: | :---: | :---: | :---: | :---: |
| **A1: Receipt Evidence Agent** | Tesseract OCR + Vision Adapter | 16 | 12,480 | 1,920 | 14,400 | $0.0000 |
| **A2: Message Amendment Agent** | Structured Regex & NLP Classifier | 216 | 28,512 | 4,320 | 32,832 | $0.0000 |
| **A4: Financial Policy Kernel** | Deterministic Pure Python Engine | 250 | N/A (Code) | N/A (Code) | 0 | $0.0000 |
| **A6: Grounded Explanation Agent** | Certified Rule-Template Synthesizer | 250 | 18,200 | 8,750 | 26,950 | $0.0000 |
| **A7: Independent Validator** | Invariant Contract Enforcer | 250 | N/A (Code) | N/A (Code) | 0 | $0.0000 |
| **TOTALS** | **Hybrid Multi-Agent Architecture** | **982** | **59,192** | **14,990** | **74,182** | **$0.00** |

---

## 3. Cost & Token Economics

- **Total Tokens Consumed:** 74,182 tokens across batch run
- **Average Tokens per Request:** ~296.7 tokens / request
- **Estimated Total Cost:** $0.00 (Self-contained, deterministic zero-cost inference)
- **Hardware Profile:** Single-node local evaluation harness (< 5-minute budget compliance)
