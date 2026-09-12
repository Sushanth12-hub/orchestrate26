window.COCKPIT_DATA = {
  "summary": {
    "total_requests": 250,
    "status_counts": {
      "not_affordable": 196,
      "affordable_later": 21,
      "affordable_with_plan": 20,
      "affordable_now": 13
    },
    "method_counts": {
      "not_recommended": 196,
      "wait": 21,
      "full_payment": 16,
      "installments": 16,
      "partial_payment": 1
    },
    "total_evaluated_value": 1308385231.38,
    "safety_invariant_pass_rate": 100.0,
    "batch_latency_seconds": 95.21,
    "average_latency_ms": 380.8
  },
  "requests": [
    {
      "request_id": "request_26",
      "user_id": "user_26",
      "requested_amount": 15656000.0,
      "currency": "IDR",
      "request_type": "family_transfer",
      "request_text": "I've been asked to transfer IDR 15,656,000 to my family. I need to complete it by 7 October 2025. Should I send the full amount, send part of it, or wait?",
      "allows_partial_payment": false,
      "request_date": "2025-08-03",
      "desired_completion_date": "2025-10-07",
      "home_currency": "IDR",
      "current_balance": 100845250.0,
      "minimum_balance_to_keep": 24768300.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 7 October 2025. None of the available options keeps the IDR 24,768,300 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2025-08-03",
          "balance": 90471250.0,
          "min_balance": 24768300.0
        },
        {
          "day": 5,
          "date": "2025-08-08",
          "balance": 83996731.85,
          "min_balance": 24768300.0
        },
        {
          "day": 10,
          "date": "2025-08-13",
          "balance": 78172337.89,
          "min_balance": 24768300.0
        },
        {
          "day": 15,
          "date": "2025-08-18",
          "balance": 74640294.25,
          "min_balance": 24768300.0
        },
        {
          "day": 20,
          "date": "2025-08-23",
          "balance": 82347631.4,
          "min_balance": 24768300.0
        },
        {
          "day": 25,
          "date": "2025-08-28",
          "balance": 76538595.62,
          "min_balance": 24768300.0
        },
        {
          "day": 30,
          "date": "2025-09-02",
          "balance": 75367434.93,
          "min_balance": 24768300.0
        },
        {
          "day": 35,
          "date": "2025-09-07",
          "balance": 60574530.25,
          "min_balance": 24768300.0
        },
        {
          "day": 40,
          "date": "2025-09-12",
          "balance": 54150910.67,
          "min_balance": 24768300.0
        },
        {
          "day": 45,
          "date": "2025-09-17",
          "balance": 50150197.17,
          "min_balance": 24768300.0
        },
        {
          "day": 50,
          "date": "2025-09-22",
          "balance": 56869816.33,
          "min_balance": 24768300.0
        },
        {
          "day": 55,
          "date": "2025-09-27",
          "balance": 54025771.5,
          "min_balance": 24768300.0
        },
        {
          "day": 60,
          "date": "2025-10-02",
          "balance": 49889619.86,
          "min_balance": 24768300.0
        },
        {
          "day": 65,
          "date": "2025-10-07",
          "balance": 35096715.18,
          "min_balance": 24768300.0
        },
        {
          "day": 70,
          "date": "2025-10-12",
          "balance": 28673095.6,
          "min_balance": 24768300.0
        },
        {
          "day": 75,
          "date": "2025-10-17",
          "balance": 24672382.1,
          "min_balance": 24768300.0
        },
        {
          "day": 80,
          "date": "2025-10-22",
          "balance": 31392001.26,
          "min_balance": 24768300.0
        },
        {
          "day": 85,
          "date": "2025-10-27",
          "balance": 28547956.43,
          "min_balance": 24768300.0
        },
        {
          "day": 90,
          "date": "2025-11-01",
          "balance": 24411804.79,
          "min_balance": 24768300.0
        }
      ]
    },
    {
      "request_id": "request_27",
      "user_id": "user_27",
      "requested_amount": 6670.0,
      "currency": "ZAR",
      "request_type": "purchase",
      "request_text": "Can I make this purchase without dipping into the balance I want to keep? I need to decide by 21 August 2026. The laptop costs ZAR 6,670.",
      "allows_partial_payment": true,
      "request_date": "2026-07-05",
      "desired_completion_date": "2026-08-21",
      "home_currency": "ZAR",
      "current_balance": 93141.8,
      "minimum_balance_to_keep": 20500.0,
      "amount_safe_to_pay": 145.43,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 21 August 2026. None of the available options keeps the ZAR 20,500 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2026-07-05",
          "balance": 93141.8,
          "min_balance": 20500.0
        },
        {
          "day": 5,
          "date": "2026-07-10",
          "balance": 86410.75,
          "min_balance": 20500.0
        },
        {
          "day": 10,
          "date": "2026-07-15",
          "balance": 81973.43,
          "min_balance": 20500.0
        },
        {
          "day": 15,
          "date": "2026-07-20",
          "balance": 79429.29,
          "min_balance": 20500.0
        },
        {
          "day": 20,
          "date": "2026-07-25",
          "balance": 74072.33,
          "min_balance": 20500.0
        },
        {
          "day": 25,
          "date": "2026-07-30",
          "balance": 77013.05,
          "min_balance": 20500.0
        },
        {
          "day": 30,
          "date": "2026-08-04",
          "balance": 66428.35,
          "min_balance": 20500.0
        },
        {
          "day": 35,
          "date": "2026-08-09",
          "balance": 59697.3,
          "min_balance": 20500.0
        },
        {
          "day": 40,
          "date": "2026-08-14",
          "balance": 56293.8,
          "min_balance": 20500.0
        },
        {
          "day": 45,
          "date": "2026-08-19",
          "balance": 52715.84,
          "min_balance": 20500.0
        },
        {
          "day": 50,
          "date": "2026-08-24",
          "balance": 49518.92,
          "min_balance": 20500.0
        },
        {
          "day": 55,
          "date": "2026-08-29",
          "balance": 50299.6,
          "min_balance": 20500.0
        },
        {
          "day": 60,
          "date": "2026-09-03",
          "balance": 48074.9,
          "min_balance": 20500.0
        },
        {
          "day": 65,
          "date": "2026-09-08",
          "balance": 32983.85,
          "min_balance": 20500.0
        },
        {
          "day": 70,
          "date": "2026-09-13",
          "balance": 30759.58,
          "min_balance": 20500.0
        },
        {
          "day": 75,
          "date": "2026-09-18",
          "balance": 27360.04,
          "min_balance": 20500.0
        },
        {
          "day": 80,
          "date": "2026-09-23",
          "balance": 23913.25,
          "min_balance": 20500.0
        },
        {
          "day": 85,
          "date": "2026-09-28",
          "balance": 24158.44,
          "min_balance": 20500.0
        },
        {
          "day": 90,
          "date": "2026-10-03",
          "balance": 21361.45,
          "min_balance": 20500.0
        }
      ]
    },
    {
      "request_id": "request_28",
      "user_id": "user_28",
      "requested_amount": 1302.4,
      "currency": "EUR",
      "request_type": "investment",
      "request_text": "I'm planning an investment contribution of EUR 1,302.40. What portion can I invest today without going below my minimum balance?",
      "allows_partial_payment": false,
      "request_date": "2024-06-07",
      "desired_completion_date": "2024-08-15",
      "home_currency": "EUR",
      "current_balance": 1789.4,
      "minimum_balance_to_keep": 1100.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 15 August 2024. None of the available options keeps the EUR 1,100 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2024-06-07",
          "balance": 1675.05,
          "min_balance": 1100.0
        },
        {
          "day": 5,
          "date": "2024-06-12",
          "balance": 1315.17,
          "min_balance": 1100.0
        },
        {
          "day": 10,
          "date": "2024-06-17",
          "balance": 1229.04,
          "min_balance": 1100.0
        },
        {
          "day": 15,
          "date": "2024-06-22",
          "balance": 1711.86,
          "min_balance": 1100.0
        },
        {
          "day": 20,
          "date": "2024-06-27",
          "balance": 1490.7,
          "min_balance": 1100.0
        },
        {
          "day": 25,
          "date": "2024-07-02",
          "balance": 898.68,
          "min_balance": 1100.0
        },
        {
          "day": 30,
          "date": "2024-07-07",
          "balance": 560.02,
          "min_balance": 1100.0
        },
        {
          "day": 35,
          "date": "2024-07-12",
          "balance": 200.14,
          "min_balance": 1100.0
        },
        {
          "day": 40,
          "date": "2024-07-17",
          "balance": 114.01,
          "min_balance": 1100.0
        },
        {
          "day": 45,
          "date": "2024-07-22",
          "balance": 596.83,
          "min_balance": 1100.0
        },
        {
          "day": 50,
          "date": "2024-07-27",
          "balance": 375.67,
          "min_balance": 1100.0
        },
        {
          "day": 55,
          "date": "2024-08-01",
          "balance": -186.01,
          "min_balance": 1100.0
        },
        {
          "day": 60,
          "date": "2024-08-06",
          "balance": -440.66,
          "min_balance": 1100.0
        },
        {
          "day": 65,
          "date": "2024-08-11",
          "balance": -840.33,
          "min_balance": 1100.0
        },
        {
          "day": 70,
          "date": "2024-08-16",
          "balance": -1001.02,
          "min_balance": 1100.0
        },
        {
          "day": 75,
          "date": "2024-08-21",
          "balance": -492.22,
          "min_balance": 1100.0
        },
        {
          "day": 80,
          "date": "2024-08-26",
          "balance": -739.36,
          "min_balance": 1100.0
        },
        {
          "day": 85,
          "date": "2024-08-31",
          "balance": -915.12,
          "min_balance": 1100.0
        },
        {
          "day": 90,
          "date": "2024-09-05",
          "balance": -1555.69,
          "min_balance": 1100.0
        }
      ]
    },
    {
      "request_id": "request_29",
      "user_id": "user_29",
      "requested_amount": 51524.0,
      "currency": "ZAR",
      "request_type": "investment",
      "request_text": "Would investing this amount leave my upcoming bills covered? I have an opportunity to invest ZAR 51,524.",
      "allows_partial_payment": false,
      "request_date": "2025-11-04",
      "desired_completion_date": "2025-11-23",
      "home_currency": "ZAR",
      "current_balance": 113540.1,
      "minimum_balance_to_keep": 28300.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 23 November 2025. None of the available options keeps the ZAR 28,300 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2025-11-04",
          "balance": 112152.68,
          "min_balance": 28300.0
        },
        {
          "day": 5,
          "date": "2025-11-09",
          "balance": 98484.75,
          "min_balance": 28300.0
        },
        {
          "day": 10,
          "date": "2025-11-14",
          "balance": 93851.37,
          "min_balance": 28300.0
        },
        {
          "day": 15,
          "date": "2025-11-19",
          "balance": 86165.56,
          "min_balance": 28300.0
        },
        {
          "day": 20,
          "date": "2025-11-24",
          "balance": 82890.24,
          "min_balance": 28300.0
        },
        {
          "day": 25,
          "date": "2025-11-29",
          "balance": 71333.54,
          "min_balance": 28300.0
        },
        {
          "day": 30,
          "date": "2025-12-04",
          "balance": 64396.84,
          "min_balance": 28300.0
        },
        {
          "day": 35,
          "date": "2025-12-09",
          "balance": 50728.91,
          "min_balance": 28300.0
        },
        {
          "day": 40,
          "date": "2025-12-14",
          "balance": 46095.53,
          "min_balance": 28300.0
        },
        {
          "day": 45,
          "date": "2025-12-19",
          "balance": 38409.72,
          "min_balance": 28300.0
        },
        {
          "day": 50,
          "date": "2025-12-24",
          "balance": 35134.4,
          "min_balance": 28300.0
        },
        {
          "day": 55,
          "date": "2025-12-29",
          "balance": 23577.7,
          "min_balance": 28300.0
        },
        {
          "day": 60,
          "date": "2026-01-03",
          "balance": 18028.42,
          "min_balance": 28300.0
        },
        {
          "day": 65,
          "date": "2026-01-08",
          "balance": 2973.07,
          "min_balance": 28300.0
        },
        {
          "day": 70,
          "date": "2026-01-13",
          "balance": -63.46,
          "min_balance": 28300.0
        },
        {
          "day": 75,
          "date": "2026-01-18",
          "balance": -9346.12,
          "min_balance": 28300.0
        },
        {
          "day": 80,
          "date": "2026-01-23",
          "balance": -11325.51,
          "min_balance": 28300.0
        },
        {
          "day": 85,
          "date": "2026-01-28",
          "balance": -20878.22,
          "min_balance": 28300.0
        },
        {
          "day": 90,
          "date": "2026-02-02",
          "balance": -25921.42,
          "min_balance": 28300.0
        }
      ]
    },
    {
      "request_id": "request_30",
      "user_id": "user_30",
      "requested_amount": 775.2,
      "currency": "USD",
      "request_type": "debt_repayment",
      "request_text": "The additional loan payment would be USD 775.20. I need to complete it by 6 June 2026. Can I clear this additional amount without putting upcoming bills at risk?",
      "allows_partial_payment": false,
      "request_date": "2026-04-06",
      "desired_completion_date": "2026-06-06",
      "home_currency": "USD",
      "current_balance": 3752.72,
      "minimum_balance_to_keep": 900.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 6 June 2026. None of the available options keeps the USD 900 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2026-04-06",
          "balance": 3699.54,
          "min_balance": 900.0
        },
        {
          "day": 5,
          "date": "2026-04-11",
          "balance": 3393.32,
          "min_balance": 900.0
        },
        {
          "day": 10,
          "date": "2026-04-16",
          "balance": 3098.23,
          "min_balance": 900.0
        },
        {
          "day": 15,
          "date": "2026-04-21",
          "balance": 3388.35,
          "min_balance": 900.0
        },
        {
          "day": 20,
          "date": "2026-04-26",
          "balance": 3227.11,
          "min_balance": 900.0
        },
        {
          "day": 25,
          "date": "2026-05-01",
          "balance": 3034.7,
          "min_balance": 900.0
        },
        {
          "day": 30,
          "date": "2026-05-06",
          "balance": 2551.93,
          "min_balance": 900.0
        },
        {
          "day": 35,
          "date": "2026-05-11",
          "balance": 2245.71,
          "min_balance": 900.0
        },
        {
          "day": 40,
          "date": "2026-05-16",
          "balance": 1950.62,
          "min_balance": 900.0
        },
        {
          "day": 45,
          "date": "2026-05-21",
          "balance": 2240.74,
          "min_balance": 900.0
        },
        {
          "day": 50,
          "date": "2026-05-26",
          "balance": 2079.5,
          "min_balance": 900.0
        },
        {
          "day": 55,
          "date": "2026-05-31",
          "balance": 1934.07,
          "min_balance": 900.0
        },
        {
          "day": 60,
          "date": "2026-06-05",
          "balance": 1457.5,
          "min_balance": 900.0
        },
        {
          "day": 65,
          "date": "2026-06-10",
          "balance": 1148.49,
          "min_balance": 900.0
        },
        {
          "day": 70,
          "date": "2026-06-15",
          "balance": 892.52,
          "min_balance": 900.0
        },
        {
          "day": 75,
          "date": "2026-06-20",
          "balance": 1158.63,
          "min_balance": 900.0
        },
        {
          "day": 80,
          "date": "2026-06-25",
          "balance": 931.89,
          "min_balance": 900.0
        },
        {
          "day": 85,
          "date": "2026-06-30",
          "balance": 786.46,
          "min_balance": 900.0
        },
        {
          "day": 90,
          "date": "2026-07-05",
          "balance": 309.89,
          "min_balance": 900.0
        }
      ]
    },
    {
      "request_id": "request_31",
      "user_id": "user_31",
      "requested_amount": 18164000.0,
      "currency": "IDR",
      "request_type": "purchase",
      "request_text": "Would paying for the laptop today leave enough for my regular expenses? I need to decide by 15 November 2024. The price of the laptop is IDR 18,164,000.",
      "allows_partial_payment": false,
      "request_date": "2024-09-03",
      "desired_completion_date": "2024-11-15",
      "home_currency": "IDR",
      "current_balance": 30429260.0,
      "minimum_balance_to_keep": 16588900.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 15 November 2024. None of the available options keeps the IDR 16,588,900 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2024-09-03",
          "balance": 30429260.0,
          "min_balance": 16588900.0
        },
        {
          "day": 5,
          "date": "2024-09-08",
          "balance": 21269320.58,
          "min_balance": 16588900.0
        },
        {
          "day": 10,
          "date": "2024-09-13",
          "balance": 16810865.44,
          "min_balance": 16588900.0
        },
        {
          "day": 15,
          "date": "2024-09-18",
          "balance": 53383041.17,
          "min_balance": 16588900.0
        },
        {
          "day": 20,
          "date": "2024-09-23",
          "balance": 51412556.69,
          "min_balance": 16588900.0
        },
        {
          "day": 25,
          "date": "2024-09-28",
          "balance": 49067087.95,
          "min_balance": 16588900.0
        },
        {
          "day": 30,
          "date": "2024-10-03",
          "balance": 47099367.84,
          "min_balance": 16588900.0
        },
        {
          "day": 35,
          "date": "2024-10-08",
          "balance": 37939428.42,
          "min_balance": 16588900.0
        },
        {
          "day": 40,
          "date": "2024-10-13",
          "balance": 33480973.28,
          "min_balance": 16588900.0
        },
        {
          "day": 45,
          "date": "2024-10-18",
          "balance": 50080349.01,
          "min_balance": 16588900.0
        },
        {
          "day": 50,
          "date": "2024-10-23",
          "balance": 48109864.53,
          "min_balance": 16588900.0
        },
        {
          "day": 55,
          "date": "2024-10-28",
          "balance": 45764395.79,
          "min_balance": 16588900.0
        },
        {
          "day": 60,
          "date": "2024-11-02",
          "balance": 43796675.68,
          "min_balance": 16588900.0
        },
        {
          "day": 65,
          "date": "2024-11-07",
          "balance": 35849776.9,
          "min_balance": 16588900.0
        },
        {
          "day": 70,
          "date": "2024-11-12",
          "balance": 31027412.79,
          "min_balance": 16588900.0
        },
        {
          "day": 75,
          "date": "2024-11-17",
          "balance": 48365735.48,
          "min_balance": 16588900.0
        },
        {
          "day": 80,
          "date": "2024-11-22",
          "balance": 45628562.98,
          "min_balance": 16588900.0
        },
        {
          "day": 85,
          "date": "2024-11-27",
          "balance": 43033697.18,
          "min_balance": 16588900.0
        },
        {
          "day": 90,
          "date": "2024-12-02",
          "balance": 40493983.52,
          "min_balance": 16588900.0
        }
      ]
    },
    {
      "request_id": "request_32",
      "user_id": "user_32",
      "requested_amount": 40018.0,
      "currency": "ZAR",
      "request_type": "travel",
      "request_text": "I'm planning a family trip that costs ZAR 40,018. Can I afford the full trip without putting upcoming bills at risk?",
      "allows_partial_payment": false,
      "request_date": "2025-02-05",
      "desired_completion_date": "2025-04-15",
      "home_currency": "ZAR",
      "current_balance": 69005.8,
      "minimum_balance_to_keep": 35700.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 15 April 2025. None of the available options keeps the ZAR 35,700 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2025-02-05",
          "balance": 59734.62,
          "min_balance": 35700.0
        },
        {
          "day": 5,
          "date": "2025-02-10",
          "balance": 44928.83,
          "min_balance": 35700.0
        },
        {
          "day": 10,
          "date": "2025-02-15",
          "balance": 89231.43,
          "min_balance": 35700.0
        },
        {
          "day": 15,
          "date": "2025-02-20",
          "balance": 80309.71,
          "min_balance": 35700.0
        },
        {
          "day": 20,
          "date": "2025-02-25",
          "balance": 76429.64,
          "min_balance": 35700.0
        },
        {
          "day": 25,
          "date": "2025-03-02",
          "balance": 50221.17,
          "min_balance": 35700.0
        },
        {
          "day": 30,
          "date": "2025-03-07",
          "balance": 34083.48,
          "min_balance": 35700.0
        },
        {
          "day": 35,
          "date": "2025-03-12",
          "balance": 18359.73,
          "min_balance": 35700.0
        },
        {
          "day": 40,
          "date": "2025-03-17",
          "balance": 65851.76,
          "min_balance": 35700.0
        },
        {
          "day": 45,
          "date": "2025-03-22",
          "balance": 57096.34,
          "min_balance": 35700.0
        },
        {
          "day": 50,
          "date": "2025-03-27",
          "balance": 54808.84,
          "min_balance": 35700.0
        },
        {
          "day": 55,
          "date": "2025-04-01",
          "balance": 31973.4,
          "min_balance": 35700.0
        },
        {
          "day": 60,
          "date": "2025-04-06",
          "balance": 17848.72,
          "min_balance": 35700.0
        },
        {
          "day": 65,
          "date": "2025-04-11",
          "balance": 1358.81,
          "min_balance": 35700.0
        },
        {
          "day": 70,
          "date": "2025-04-16",
          "balance": 48401.91,
          "min_balance": 35700.0
        },
        {
          "day": 75,
          "date": "2025-04-21",
          "balance": 39480.19,
          "min_balance": 35700.0
        },
        {
          "day": 80,
          "date": "2025-04-26",
          "balance": 35600.12,
          "min_balance": 35700.0
        },
        {
          "day": 85,
          "date": "2025-05-01",
          "balance": 11558.64,
          "min_balance": 35700.0
        },
        {
          "day": 90,
          "date": "2025-05-06",
          "balance": -2566.04,
          "min_balance": 35700.0
        }
      ]
    },
    {
      "request_id": "request_33",
      "user_id": "user_33",
      "requested_amount": 118000.0,
      "currency": "INR",
      "request_type": "housing",
      "request_text": "Would paying the full deposit leave enough for my other commitments? The move requires a INR 118,000 deposit.",
      "allows_partial_payment": false,
      "request_date": "2026-01-07",
      "desired_completion_date": "2026-03-15",
      "home_currency": "INR",
      "current_balance": 167280.0,
      "minimum_balance_to_keep": 102100.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 15 March 2026. None of the available options keeps the INR 102,100 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2026-01-07",
          "balance": 161660.0,
          "min_balance": 102100.0
        },
        {
          "day": 5,
          "date": "2026-01-12",
          "balance": 127130.77,
          "min_balance": 102100.0
        },
        {
          "day": 10,
          "date": "2026-01-17",
          "balance": 250967.78,
          "min_balance": 102100.0
        },
        {
          "day": 15,
          "date": "2026-01-22",
          "balance": 229880.97,
          "min_balance": 102100.0
        },
        {
          "day": 20,
          "date": "2026-01-27",
          "balance": 207116.36,
          "min_balance": 102100.0
        },
        {
          "day": 25,
          "date": "2026-02-01",
          "balance": 185838.19,
          "min_balance": 102100.0
        },
        {
          "day": 30,
          "date": "2026-02-06",
          "balance": 117834.7,
          "min_balance": 102100.0
        },
        {
          "day": 35,
          "date": "2026-02-11",
          "balance": 93269.83,
          "min_balance": 102100.0
        },
        {
          "day": 40,
          "date": "2026-02-16",
          "balance": 217901.76,
          "min_balance": 102100.0
        },
        {
          "day": 45,
          "date": "2026-02-21",
          "balance": 191123.96,
          "min_balance": 102100.0
        },
        {
          "day": 50,
          "date": "2026-02-26",
          "balance": 164639.96,
          "min_balance": 102100.0
        },
        {
          "day": 55,
          "date": "2026-03-03",
          "balance": 79719.58,
          "min_balance": 102100.0
        },
        {
          "day": 60,
          "date": "2026-03-08",
          "balance": 62769.4,
          "min_balance": 102100.0
        },
        {
          "day": 65,
          "date": "2026-03-13",
          "balance": 28240.17,
          "min_balance": 102100.0
        },
        {
          "day": 70,
          "date": "2026-03-18",
          "balance": 152077.18,
          "min_balance": 102100.0
        },
        {
          "day": 75,
          "date": "2026-03-23",
          "balance": 128759.86,
          "min_balance": 102100.0
        },
        {
          "day": 80,
          "date": "2026-03-28",
          "balance": 108225.76,
          "min_balance": 102100.0
        },
        {
          "day": 85,
          "date": "2026-04-02",
          "balance": 36546.02,
          "min_balance": 102100.0
        },
        {
          "day": 90,
          "date": "2026-04-07",
          "balance": 13324.1,
          "min_balance": 102100.0
        }
      ]
    },
    {
      "request_id": "request_34",
      "user_id": "user_34",
      "requested_amount": 129400.0,
      "currency": "INR",
      "request_type": "travel",
      "request_text": "I can book the family trip for INR 129,400. I need to complete it by 28 January 2025. How much can I safely put toward the booking today?",
      "allows_partial_payment": false,
      "request_date": "2024-12-04",
      "desired_completion_date": "2025-01-28",
      "home_currency": "INR",
      "current_balance": 559752.5,
      "minimum_balance_to_keep": 138500.0,
      "amount_safe_to_pay": 28721.34,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 28 January 2025. None of the available options keeps the INR 138,500 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2024-12-04",
          "balance": 559752.5,
          "min_balance": 138500.0
        },
        {
          "day": 5,
          "date": "2024-12-09",
          "balance": 525866.97,
          "min_balance": 138500.0
        },
        {
          "day": 10,
          "date": "2024-12-14",
          "balance": 506938.74,
          "min_balance": 138500.0
        },
        {
          "day": 15,
          "date": "2024-12-19",
          "balance": 475135.23,
          "min_balance": 138500.0
        },
        {
          "day": 20,
          "date": "2024-12-24",
          "balance": 537637.75,
          "min_balance": 138500.0
        },
        {
          "day": 25,
          "date": "2024-12-29",
          "balance": 480108.78,
          "min_balance": 138500.0
        },
        {
          "day": 30,
          "date": "2025-01-03",
          "balance": 428908.78,
          "min_balance": 138500.0
        },
        {
          "day": 35,
          "date": "2025-01-08",
          "balance": 395023.25,
          "min_balance": 138500.0
        },
        {
          "day": 40,
          "date": "2025-01-13",
          "balance": 376095.02,
          "min_balance": 138500.0
        },
        {
          "day": 45,
          "date": "2025-01-18",
          "balance": 353815.75,
          "min_balance": 138500.0
        },
        {
          "day": 50,
          "date": "2025-01-23",
          "balance": 410511.17,
          "min_balance": 138500.0
        },
        {
          "day": 55,
          "date": "2025-01-28",
          "balance": 364279.43,
          "min_balance": 138500.0
        },
        {
          "day": 60,
          "date": "2025-02-02",
          "balance": 349265.06,
          "min_balance": 138500.0
        },
        {
          "day": 65,
          "date": "2025-02-07",
          "balance": 274494.6,
          "min_balance": 138500.0
        },
        {
          "day": 70,
          "date": "2025-02-12",
          "balance": 252951.32,
          "min_balance": 138500.0
        },
        {
          "day": 75,
          "date": "2025-02-17",
          "balance": 233866.46,
          "min_balance": 138500.0
        },
        {
          "day": 80,
          "date": "2025-02-22",
          "balance": 279667.45,
          "min_balance": 138500.0
        },
        {
          "day": 85,
          "date": "2025-02-27",
          "balance": 249844.53,
          "min_balance": 138500.0
        },
        {
          "day": 90,
          "date": "2025-03-04",
          "balance": 167221.34,
          "min_balance": 138500.0
        }
      ]
    },
    {
      "request_id": "request_35",
      "user_id": "user_35",
      "requested_amount": 212000.0,
      "currency": "INR",
      "request_type": "travel",
      "request_text": "Would it be safer to book the trip now or wait until more money comes in? I need to decide by 15 January 2026. I've found a travel option for INR 212,000.",
      "allows_partial_payment": false,
      "request_date": "2025-10-30",
      "desired_completion_date": "2026-01-15",
      "home_currency": "INR",
      "current_balance": 231530.0,
      "minimum_balance_to_keep": 106400.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 15 January 2026. None of the available options keeps the INR 106,400 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2025-10-30",
          "balance": 227884.73,
          "min_balance": 106400.0
        },
        {
          "day": 5,
          "date": "2025-11-04",
          "balance": 176800.27,
          "min_balance": 106400.0
        },
        {
          "day": 10,
          "date": "2025-11-09",
          "balance": 133035.14,
          "min_balance": 106400.0
        },
        {
          "day": 15,
          "date": "2025-11-14",
          "balance": 99057.54,
          "min_balance": 106400.0
        },
        {
          "day": 20,
          "date": "2025-11-19",
          "balance": 244514.19,
          "min_balance": 106400.0
        },
        {
          "day": 25,
          "date": "2025-11-24",
          "balance": 227185.85,
          "min_balance": 106400.0
        },
        {
          "day": 30,
          "date": "2025-11-29",
          "balance": 211260.46,
          "min_balance": 106400.0
        },
        {
          "day": 35,
          "date": "2025-12-04",
          "balance": 156530.73,
          "min_balance": 106400.0
        },
        {
          "day": 40,
          "date": "2025-12-09",
          "balance": 112765.6,
          "min_balance": 106400.0
        },
        {
          "day": 45,
          "date": "2025-12-14",
          "balance": 78788.0,
          "min_balance": 106400.0
        },
        {
          "day": 50,
          "date": "2025-12-19",
          "balance": 224244.65,
          "min_balance": 106400.0
        },
        {
          "day": 55,
          "date": "2025-12-24",
          "balance": 206916.31,
          "min_balance": 106400.0
        },
        {
          "day": 60,
          "date": "2025-12-29",
          "balance": 190990.92,
          "min_balance": 106400.0
        },
        {
          "day": 65,
          "date": "2026-01-03",
          "balance": 173261.19,
          "min_balance": 106400.0
        },
        {
          "day": 70,
          "date": "2026-01-08",
          "balance": 96895.09,
          "min_balance": 106400.0
        },
        {
          "day": 75,
          "date": "2026-01-13",
          "balance": 58518.46,
          "min_balance": 106400.0
        },
        {
          "day": 80,
          "date": "2026-01-18",
          "balance": 203975.11,
          "min_balance": 106400.0
        },
        {
          "day": 85,
          "date": "2026-01-23",
          "balance": 190800.2,
          "min_balance": 106400.0
        },
        {
          "day": 90,
          "date": "2026-01-28",
          "balance": 182847.64,
          "min_balance": 106400.0
        }
      ]
    },
    {
      "request_id": "request_36",
      "user_id": "user_36",
      "requested_amount": 3954.0,
      "currency": "USD",
      "request_type": "education",
      "request_text": "I'm considering a professional course priced at USD 3,954. Is it safe to cover the full course fee by the deadline?",
      "allows_partial_payment": false,
      "request_date": "2026-07-03",
      "desired_completion_date": "2026-09-15",
      "home_currency": "USD",
      "current_balance": 3846.6,
      "minimum_balance_to_keep": 2400.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 15 September 2026. None of the available options keeps the USD 2,400 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2026-07-03",
          "balance": 3846.6,
          "min_balance": 2400.0
        },
        {
          "day": 5,
          "date": "2026-07-08",
          "balance": 3325.18,
          "min_balance": 2400.0
        },
        {
          "day": 10,
          "date": "2026-07-13",
          "balance": 3078.09,
          "min_balance": 2400.0
        },
        {
          "day": 15,
          "date": "2026-07-18",
          "balance": 4580.88,
          "min_balance": 2400.0
        },
        {
          "day": 20,
          "date": "2026-07-23",
          "balance": 4508.87,
          "min_balance": 2400.0
        },
        {
          "day": 25,
          "date": "2026-07-28",
          "balance": 3709.96,
          "min_balance": 2400.0
        },
        {
          "day": 30,
          "date": "2026-08-02",
          "balance": 3266.05,
          "min_balance": 2400.0
        },
        {
          "day": 35,
          "date": "2026-08-07",
          "balance": 2816.63,
          "min_balance": 2400.0
        },
        {
          "day": 40,
          "date": "2026-08-12",
          "balance": 2497.54,
          "min_balance": 2400.0
        },
        {
          "day": 45,
          "date": "2026-08-17",
          "balance": 4000.33,
          "min_balance": 2400.0
        },
        {
          "day": 50,
          "date": "2026-08-22",
          "balance": 3928.32,
          "min_balance": 2400.0
        },
        {
          "day": 55,
          "date": "2026-08-27",
          "balance": 3270.7,
          "min_balance": 2400.0
        },
        {
          "day": 60,
          "date": "2026-09-01",
          "balance": 3062.15,
          "min_balance": 2400.0
        },
        {
          "day": 65,
          "date": "2026-09-06",
          "balance": 2236.08,
          "min_balance": 2400.0
        },
        {
          "day": 70,
          "date": "2026-09-11",
          "balance": 1916.99,
          "min_balance": 2400.0
        },
        {
          "day": 75,
          "date": "2026-09-16",
          "balance": 3419.78,
          "min_balance": 2400.0
        },
        {
          "day": 80,
          "date": "2026-09-21",
          "balance": 3347.77,
          "min_balance": 2400.0
        },
        {
          "day": 85,
          "date": "2026-09-26",
          "balance": 2910.72,
          "min_balance": 2400.0
        },
        {
          "day": 90,
          "date": "2026-10-01",
          "balance": 2481.6,
          "min_balance": 2400.0
        }
      ]
    },
    {
      "request_id": "request_37",
      "user_id": "user_37",
      "requested_amount": 14649000.0,
      "currency": "IDR",
      "request_type": "family_transfer",
      "request_text": "Can I make the full transfer without falling short on my own bills? I'm planning to send my family IDR 14,649,000.",
      "allows_partial_payment": false,
      "request_date": "2024-03-05",
      "desired_completion_date": "2024-05-15",
      "home_currency": "IDR",
      "current_balance": 29125000.0,
      "minimum_balance_to_keep": 17056200.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 15 May 2024. None of the available options keeps the IDR 17,056,200 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2024-03-05",
          "balance": 28088574.24,
          "min_balance": 17056200.0
        },
        {
          "day": 5,
          "date": "2024-03-10",
          "balance": 24423146.69,
          "min_balance": 17056200.0
        },
        {
          "day": 10,
          "date": "2024-03-15",
          "balance": 16438170.83,
          "min_balance": 17056200.0
        },
        {
          "day": 15,
          "date": "2024-03-20",
          "balance": 23098287.19,
          "min_balance": 17056200.0
        },
        {
          "day": 20,
          "date": "2024-03-25",
          "balance": 20320245.87,
          "min_balance": 17056200.0
        },
        {
          "day": 25,
          "date": "2024-03-30",
          "balance": 18528359.9,
          "min_balance": 17056200.0
        },
        {
          "day": 30,
          "date": "2024-04-04",
          "balance": 9657674.67,
          "min_balance": 17056200.0
        },
        {
          "day": 35,
          "date": "2024-04-09",
          "balance": 6880021.98,
          "min_balance": 17056200.0
        },
        {
          "day": 40,
          "date": "2024-04-14",
          "balance": -2295795.1,
          "min_balance": 17056200.0
        },
        {
          "day": 45,
          "date": "2024-04-19",
          "balance": -5859538.14,
          "min_balance": 17056200.0
        },
        {
          "day": 50,
          "date": "2024-04-24",
          "balance": 2489789.63,
          "min_balance": 17056200.0
        },
        {
          "day": 55,
          "date": "2024-04-29",
          "balance": -938965.43,
          "min_balance": 17056200.0
        },
        {
          "day": 60,
          "date": "2024-05-04",
          "balance": -9809650.66,
          "min_balance": 17056200.0
        },
        {
          "day": 65,
          "date": "2024-05-09",
          "balance": -12587303.35,
          "min_balance": 17056200.0
        },
        {
          "day": 70,
          "date": "2024-05-14",
          "balance": -21763120.43,
          "min_balance": 17056200.0
        },
        {
          "day": 75,
          "date": "2024-05-19",
          "balance": -25326863.47,
          "min_balance": 17056200.0
        },
        {
          "day": 80,
          "date": "2024-05-24",
          "balance": -16977535.7,
          "min_balance": 17056200.0
        },
        {
          "day": 85,
          "date": "2024-05-29",
          "balance": -20406290.76,
          "min_balance": 17056200.0
        },
        {
          "day": 90,
          "date": "2024-06-03",
          "balance": -28799442.58,
          "min_balance": 17056200.0
        }
      ]
    },
    {
      "request_id": "request_38",
      "user_id": "user_38",
      "requested_amount": 971.3,
      "currency": "EUR",
      "request_type": "emergency_expense",
      "request_text": "The latest estimate for the repair is EUR 971.30. I need to complete it by 15 October 2025. Can I cover the full repair now and still manage my essential expenses?",
      "allows_partial_payment": false,
      "request_date": "2025-08-07",
      "desired_completion_date": "2025-10-15",
      "home_currency": "EUR",
      "current_balance": 779.4,
      "minimum_balance_to_keep": 400.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 15 October 2025. None of the available options keeps the EUR 400 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2025-08-07",
          "balance": 720.96,
          "min_balance": 400.0
        },
        {
          "day": 5,
          "date": "2025-08-12",
          "balance": 510.65,
          "min_balance": 400.0
        },
        {
          "day": 10,
          "date": "2025-08-17",
          "balance": 1151.03,
          "min_balance": 400.0
        },
        {
          "day": 15,
          "date": "2025-08-22",
          "balance": 1057.37,
          "min_balance": 400.0
        },
        {
          "day": 20,
          "date": "2025-08-27",
          "balance": 1002.09,
          "min_balance": 400.0
        },
        {
          "day": 25,
          "date": "2025-09-01",
          "balance": 916.99,
          "min_balance": 400.0
        },
        {
          "day": 30,
          "date": "2025-09-06",
          "balance": 599.78,
          "min_balance": 400.0
        },
        {
          "day": 35,
          "date": "2025-09-11",
          "balance": 389.09,
          "min_balance": 400.0
        },
        {
          "day": 40,
          "date": "2025-09-16",
          "balance": 992.7,
          "min_balance": 400.0
        },
        {
          "day": 45,
          "date": "2025-09-21",
          "balance": 945.58,
          "min_balance": 400.0
        },
        {
          "day": 50,
          "date": "2025-09-26",
          "balance": 822.47,
          "min_balance": 400.0
        },
        {
          "day": 55,
          "date": "2025-10-01",
          "balance": 737.37,
          "min_balance": 400.0
        },
        {
          "day": 60,
          "date": "2025-10-06",
          "balance": 420.16,
          "min_balance": 400.0
        },
        {
          "day": 65,
          "date": "2025-10-11",
          "balance": 209.47,
          "min_balance": 400.0
        },
        {
          "day": 70,
          "date": "2025-10-16",
          "balance": 813.08,
          "min_balance": 400.0
        },
        {
          "day": 75,
          "date": "2025-10-21",
          "balance": 765.96,
          "min_balance": 400.0
        },
        {
          "day": 80,
          "date": "2025-10-26",
          "balance": 642.85,
          "min_balance": 400.0
        },
        {
          "day": 85,
          "date": "2025-10-31",
          "balance": 602.51,
          "min_balance": 400.0
        },
        {
          "day": 90,
          "date": "2025-11-05",
          "balance": 240.54,
          "min_balance": 400.0
        }
      ]
    },
    {
      "request_id": "request_39",
      "user_id": "user_39",
      "requested_amount": 208600.0,
      "currency": "INR",
      "request_type": "housing",
      "request_text": "Can I cover this deposit without putting rent and regular bills at risk? I need to decide by 15 June 2026. I need INR 208,600 for the rental deposit.",
      "allows_partial_payment": false,
      "request_date": "2026-04-04",
      "desired_completion_date": "2026-06-15",
      "home_currency": "INR",
      "current_balance": 416505.0,
      "minimum_balance_to_keep": 213400.0,
      "amount_safe_to_pay": 28714.42,
      "affordability_status": "affordable_later",
      "recommended_payment_method": "wait",
      "payment_plan": "2026-06-15:208600",
      "earliest_date_for_full_payment": "2026-06-15",
      "spending_changes_needed": "none",
      "decision_explanation": "Pay INR 208,600 in full on 15 June 2026. Paying earlier would take the balance below the INR 213,400 minimum.",
      "curve": [
        {
          "day": 0,
          "date": "2026-04-04",
          "balance": 330406.22,
          "min_balance": 213400.0
        },
        {
          "day": 5,
          "date": "2026-04-09",
          "balance": 297963.21,
          "min_balance": 213400.0
        },
        {
          "day": 10,
          "date": "2026-04-14",
          "balance": 242114.42,
          "min_balance": 213400.0
        },
        {
          "day": 15,
          "date": "2026-04-19",
          "balance": 712210.39,
          "min_balance": 213400.0
        },
        {
          "day": 20,
          "date": "2026-04-24",
          "balance": 681806.72,
          "min_balance": 213400.0
        },
        {
          "day": 25,
          "date": "2026-04-29",
          "balance": 646244.91,
          "min_balance": 213400.0
        },
        {
          "day": 30,
          "date": "2026-05-04",
          "balance": 525141.02,
          "min_balance": 213400.0
        },
        {
          "day": 35,
          "date": "2026-05-09",
          "balance": 492698.01,
          "min_balance": 213400.0
        },
        {
          "day": 40,
          "date": "2026-05-14",
          "balance": 436849.22,
          "min_balance": 213400.0
        },
        {
          "day": 45,
          "date": "2026-05-19",
          "balance": 652955.35,
          "min_balance": 213400.0
        },
        {
          "day": 50,
          "date": "2026-05-24",
          "balance": 622551.68,
          "min_balance": 213400.0
        },
        {
          "day": 55,
          "date": "2026-05-29",
          "balance": 586989.87,
          "min_balance": 213400.0
        },
        {
          "day": 60,
          "date": "2026-06-03",
          "balance": 551984.76,
          "min_balance": 213400.0
        },
        {
          "day": 65,
          "date": "2026-06-08",
          "balance": 443642.97,
          "min_balance": 213400.0
        },
        {
          "day": 70,
          "date": "2026-06-13",
          "balance": 393843.35,
          "min_balance": 213400.0
        },
        {
          "day": 75,
          "date": "2026-06-18",
          "balance": 593700.31,
          "min_balance": 213400.0
        },
        {
          "day": 80,
          "date": "2026-06-23",
          "balance": 563296.64,
          "min_balance": 213400.0
        },
        {
          "day": 85,
          "date": "2026-06-28",
          "balance": 535497.1,
          "min_balance": 213400.0
        },
        {
          "day": 90,
          "date": "2026-07-03",
          "balance": 492729.72,
          "min_balance": 213400.0
        }
      ]
    },
    {
      "request_id": "request_40",
      "user_id": "user_40",
      "requested_amount": 1290.3,
      "currency": "EUR",
      "request_type": "education",
      "request_text": "The professional course costs EUR 1,290.30. How much of the course fee can I manage without cutting into essentials?",
      "allows_partial_payment": false,
      "request_date": "2024-06-06",
      "desired_completion_date": "2024-08-15",
      "home_currency": "EUR",
      "current_balance": 2394.0,
      "minimum_balance_to_keep": 1500.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 15 August 2024. None of the available options keeps the EUR 1,500 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2024-06-06",
          "balance": 2212.3,
          "min_balance": 1500.0
        },
        {
          "day": 5,
          "date": "2024-06-11",
          "balance": 1832.0,
          "min_balance": 1500.0
        },
        {
          "day": 10,
          "date": "2024-06-16",
          "balance": 3325.06,
          "min_balance": 1500.0
        },
        {
          "day": 15,
          "date": "2024-06-21",
          "balance": 3100.83,
          "min_balance": 1500.0
        },
        {
          "day": 20,
          "date": "2024-06-26",
          "balance": 2916.98,
          "min_balance": 1500.0
        },
        {
          "day": 25,
          "date": "2024-07-01",
          "balance": 1930.71,
          "min_balance": 1500.0
        },
        {
          "day": 30,
          "date": "2024-07-06",
          "balance": 1488.77,
          "min_balance": 1500.0
        },
        {
          "day": 35,
          "date": "2024-07-11",
          "balance": 1151.47,
          "min_balance": 1500.0
        },
        {
          "day": 40,
          "date": "2024-07-16",
          "balance": 2644.53,
          "min_balance": 1500.0
        },
        {
          "day": 45,
          "date": "2024-07-21",
          "balance": 2420.3,
          "min_balance": 1500.0
        },
        {
          "day": 50,
          "date": "2024-07-26",
          "balance": 2236.45,
          "min_balance": 1500.0
        },
        {
          "day": 55,
          "date": "2024-07-31",
          "balance": 1917.12,
          "min_balance": 1500.0
        },
        {
          "day": 60,
          "date": "2024-08-05",
          "balance": 946.94,
          "min_balance": 1500.0
        },
        {
          "day": 65,
          "date": "2024-08-10",
          "balance": 470.94,
          "min_balance": 1500.0
        },
        {
          "day": 70,
          "date": "2024-08-15",
          "balance": 1999.83,
          "min_balance": 1500.0
        },
        {
          "day": 75,
          "date": "2024-08-20",
          "balance": 1782.43,
          "min_balance": 1500.0
        },
        {
          "day": 80,
          "date": "2024-08-25",
          "balance": 1674.5,
          "min_balance": 1500.0
        },
        {
          "day": 85,
          "date": "2024-08-30",
          "balance": 1236.59,
          "min_balance": 1500.0
        },
        {
          "day": 90,
          "date": "2024-09-04",
          "balance": 375.37,
          "min_balance": 1500.0
        }
      ]
    },
    {
      "request_id": "request_41",
      "user_id": "user_41",
      "requested_amount": 38760000.0,
      "currency": "IDR",
      "request_type": "emergency_expense",
      "request_text": "The repair cannot wait. How much can I safely pay today? The repair bill comes to IDR 38,760,000.",
      "allows_partial_payment": false,
      "request_date": "2025-11-03",
      "desired_completion_date": "2026-01-15",
      "home_currency": "IDR",
      "current_balance": 50175850.0,
      "minimum_balance_to_keep": 25366600.0,
      "amount_safe_to_pay": 7395989.17,
      "affordability_status": "affordable_later",
      "recommended_payment_method": "wait",
      "payment_plan": "2025-11-15:38760000",
      "earliest_date_for_full_payment": "2025-11-15",
      "spending_changes_needed": "none",
      "decision_explanation": "Pay IDR 38,760,000 in full on 15 November 2025. Paying earlier would take the balance below the IDR 25,366,600 minimum.",
      "curve": [
        {
          "day": 0,
          "date": "2025-11-03",
          "balance": 47255550.0,
          "min_balance": 25366600.0
        },
        {
          "day": 5,
          "date": "2025-11-08",
          "balance": 35836738.81,
          "min_balance": 25366600.0
        },
        {
          "day": 10,
          "date": "2025-11-13",
          "balance": 33822050.61,
          "min_balance": 25366600.0
        },
        {
          "day": 15,
          "date": "2025-11-18",
          "balance": 112246634.07,
          "min_balance": 25366600.0
        },
        {
          "day": 20,
          "date": "2025-11-23",
          "balance": 110406696.99,
          "min_balance": 25366600.0
        },
        {
          "day": 25,
          "date": "2025-11-28",
          "balance": 100140604.37,
          "min_balance": 25366600.0
        },
        {
          "day": 30,
          "date": "2025-12-03",
          "balance": 85785601.44,
          "min_balance": 25366600.0
        },
        {
          "day": 35,
          "date": "2025-12-08",
          "balance": 77287090.25,
          "min_balance": 25366600.0
        },
        {
          "day": 40,
          "date": "2025-12-13",
          "balance": 75272402.05,
          "min_balance": 25366600.0
        },
        {
          "day": 45,
          "date": "2025-12-18",
          "balance": 111136994.47,
          "min_balance": 25366600.0
        },
        {
          "day": 50,
          "date": "2025-12-23",
          "balance": 109297057.39,
          "min_balance": 25366600.0
        },
        {
          "day": 55,
          "date": "2025-12-28",
          "balance": 99030964.77,
          "min_balance": 25366600.0
        },
        {
          "day": 60,
          "date": "2026-01-02",
          "balance": 84675961.84,
          "min_balance": 25366600.0
        },
        {
          "day": 65,
          "date": "2026-01-07",
          "balance": 76177450.65,
          "min_balance": 25366600.0
        },
        {
          "day": 70,
          "date": "2026-01-12",
          "balance": 74162762.45,
          "min_balance": 25366600.0
        },
        {
          "day": 75,
          "date": "2026-01-17",
          "balance": 111797142.11,
          "min_balance": 25366600.0
        },
        {
          "day": 80,
          "date": "2026-01-22",
          "balance": 108187417.79,
          "min_balance": 25366600.0
        },
        {
          "day": 85,
          "date": "2026-01-27",
          "balance": 101779735.58,
          "min_balance": 25366600.0
        },
        {
          "day": 90,
          "date": "2026-02-01",
          "balance": 95231941.85,
          "min_balance": 25366600.0
        }
      ]
    },
    {
      "request_id": "request_42",
      "user_id": "user_42",
      "requested_amount": 52100.0,
      "currency": "INR",
      "request_type": "emergency_expense",
      "request_text": "I need to cover an urgent repair of INR 52,100. I need to complete it by 15 March 2026. What is the most I can put toward this repair right now?",
      "allows_partial_payment": false,
      "request_date": "2026-01-05",
      "desired_completion_date": "2026-03-15",
      "home_currency": "INR",
      "current_balance": 261765.0,
      "minimum_balance_to_keep": 113100.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 15 March 2026. None of the available options keeps the INR 113,100 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2026-01-05",
          "balance": 253665.0,
          "min_balance": 113100.0
        },
        {
          "day": 5,
          "date": "2026-01-10",
          "balance": 223573.04,
          "min_balance": 113100.0
        },
        {
          "day": 10,
          "date": "2026-01-15",
          "balance": 298510.43,
          "min_balance": 113100.0
        },
        {
          "day": 15,
          "date": "2026-01-20",
          "balance": 265864.33,
          "min_balance": 113100.0
        },
        {
          "day": 20,
          "date": "2026-01-25",
          "balance": 247674.16,
          "min_balance": 113100.0
        },
        {
          "day": 25,
          "date": "2026-01-30",
          "balance": 221693.98,
          "min_balance": 113100.0
        },
        {
          "day": 30,
          "date": "2026-02-04",
          "balance": 158333.95,
          "min_balance": 113100.0
        },
        {
          "day": 35,
          "date": "2026-02-09",
          "balance": 140251.99,
          "min_balance": 113100.0
        },
        {
          "day": 40,
          "date": "2026-02-14",
          "balance": 125169.17,
          "min_balance": 113100.0
        },
        {
          "day": 45,
          "date": "2026-02-19",
          "balance": 191505.13,
          "min_balance": 113100.0
        },
        {
          "day": 50,
          "date": "2026-02-24",
          "balance": 160443.11,
          "min_balance": 113100.0
        },
        {
          "day": 55,
          "date": "2026-03-01",
          "balance": 120797.91,
          "min_balance": 113100.0
        },
        {
          "day": 60,
          "date": "2026-03-06",
          "balance": 66163.59,
          "min_balance": 113100.0
        },
        {
          "day": 65,
          "date": "2026-03-11",
          "balance": 42747.63,
          "min_balance": 113100.0
        },
        {
          "day": 70,
          "date": "2026-03-16",
          "balance": 111007.32,
          "min_balance": 113100.0
        },
        {
          "day": 75,
          "date": "2026-03-21",
          "balance": 77567.69,
          "min_balance": 113100.0
        },
        {
          "day": 80,
          "date": "2026-03-26",
          "balance": 67652.98,
          "min_balance": 113100.0
        },
        {
          "day": 85,
          "date": "2026-03-31",
          "balance": 44046.83,
          "min_balance": 113100.0
        },
        {
          "day": 90,
          "date": "2026-04-05",
          "balance": -16128.15,
          "min_balance": 113100.0
        }
      ]
    },
    {
      "request_id": "request_43",
      "user_id": "user_43",
      "requested_amount": 43339000.0,
      "currency": "IDR",
      "request_type": "purchase",
      "request_text": "Laptop yang saya incar harganya IDR 43.339.000. Saya harus memutuskan sebelum 15 November 2024. Apakah saya bisa membelinya sekarang, atau sebaiknya menunggu?",
      "allows_partial_payment": false,
      "request_date": "2024-09-07",
      "desired_completion_date": "2024-11-15",
      "home_currency": "IDR",
      "current_balance": 36640750.0,
      "minimum_balance_to_keep": 21398000.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 15 November 2024. None of the available options keeps the IDR 21,398,000 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2024-09-07",
          "balance": 34144715.5,
          "min_balance": 21398000.0
        },
        {
          "day": 5,
          "date": "2024-09-12",
          "balance": 28953598.85,
          "min_balance": 21398000.0
        },
        {
          "day": 10,
          "date": "2024-09-17",
          "balance": 52634018.8,
          "min_balance": 21398000.0
        },
        {
          "day": 15,
          "date": "2024-09-22",
          "balance": 49657040.17,
          "min_balance": 21398000.0
        },
        {
          "day": 20,
          "date": "2024-09-27",
          "balance": 45438720.19,
          "min_balance": 21398000.0
        },
        {
          "day": 25,
          "date": "2024-10-02",
          "balance": 42543646.18,
          "min_balance": 21398000.0
        },
        {
          "day": 30,
          "date": "2024-10-07",
          "balance": 29576550.54,
          "min_balance": 21398000.0
        },
        {
          "day": 35,
          "date": "2024-10-12",
          "balance": 25639433.89,
          "min_balance": 21398000.0
        },
        {
          "day": 40,
          "date": "2024-10-17",
          "balance": 49319853.84,
          "min_balance": 21398000.0
        },
        {
          "day": 45,
          "date": "2024-10-22",
          "balance": 46342875.21,
          "min_balance": 21398000.0
        },
        {
          "day": 50,
          "date": "2024-10-27",
          "balance": 42124555.23,
          "min_balance": 21398000.0
        },
        {
          "day": 55,
          "date": "2024-11-01",
          "balance": 39229481.22,
          "min_balance": 21398000.0
        },
        {
          "day": 60,
          "date": "2024-11-06",
          "balance": 27504420.08,
          "min_balance": 21398000.0
        },
        {
          "day": 65,
          "date": "2024-11-11",
          "balance": 22325268.93,
          "min_balance": 21398000.0
        },
        {
          "day": 70,
          "date": "2024-11-16",
          "balance": 48806383.11,
          "min_balance": 21398000.0
        },
        {
          "day": 75,
          "date": "2024-11-21",
          "balance": 44491700.56,
          "min_balance": 21398000.0
        },
        {
          "day": 80,
          "date": "2024-11-26",
          "balance": 40736450.87,
          "min_balance": 21398000.0
        },
        {
          "day": 85,
          "date": "2024-12-01",
          "balance": 35915316.26,
          "min_balance": 21398000.0
        },
        {
          "day": 90,
          "date": "2024-12-06",
          "balance": 24190255.12,
          "min_balance": 21398000.0
        }
      ]
    },
    {
      "request_id": "request_44",
      "user_id": "user_44",
      "requested_amount": 95800.0,
      "currency": "INR",
      "request_type": "education",
      "request_text": "I need INR 95,800 for the course fee. Would paying the course fee now leave enough for my regular commitments?",
      "allows_partial_payment": false,
      "request_date": "2025-02-04",
      "desired_completion_date": "2025-04-15",
      "home_currency": "INR",
      "current_balance": 162290.0,
      "minimum_balance_to_keep": 82900.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 15 April 2025. None of the available options keeps the INR 82,900 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2025-02-04",
          "balance": 158661.97,
          "min_balance": 82900.0
        },
        {
          "day": 5,
          "date": "2025-02-09",
          "balance": 125852.33,
          "min_balance": 82900.0
        },
        {
          "day": 10,
          "date": "2025-02-14",
          "balance": 93791.15,
          "min_balance": 82900.0
        },
        {
          "day": 15,
          "date": "2025-02-19",
          "balance": 190573.5,
          "min_balance": 82900.0
        },
        {
          "day": 20,
          "date": "2025-02-24",
          "balance": 180308.95,
          "min_balance": 82900.0
        },
        {
          "day": 25,
          "date": "2025-03-01",
          "balance": 130515.48,
          "min_balance": 82900.0
        },
        {
          "day": 30,
          "date": "2025-03-06",
          "balance": 108214.59,
          "min_balance": 82900.0
        },
        {
          "day": 35,
          "date": "2025-03-11",
          "balance": 64582.11,
          "min_balance": 82900.0
        },
        {
          "day": 40,
          "date": "2025-03-16",
          "balance": 166156.84,
          "min_balance": 82900.0
        },
        {
          "day": 45,
          "date": "2025-03-21",
          "balance": 152886.67,
          "min_balance": 82900.0
        },
        {
          "day": 50,
          "date": "2025-03-26",
          "balance": 135166.22,
          "min_balance": 82900.0
        },
        {
          "day": 55,
          "date": "2025-03-31",
          "balance": 128881.4,
          "min_balance": 82900.0
        },
        {
          "day": 60,
          "date": "2025-04-05",
          "balance": 70527.76,
          "min_balance": 82900.0
        },
        {
          "day": 65,
          "date": "2025-04-10",
          "balance": 31448.67,
          "min_balance": 82900.0
        },
        {
          "day": 70,
          "date": "2025-04-15",
          "balance": 133417.49,
          "min_balance": 82900.0
        },
        {
          "day": 75,
          "date": "2025-04-20",
          "balance": 115199.84,
          "min_balance": 82900.0
        },
        {
          "day": 80,
          "date": "2025-04-25",
          "balance": 100193.24,
          "min_balance": 82900.0
        },
        {
          "day": 85,
          "date": "2025-04-30",
          "balance": 91194.57,
          "min_balance": 82900.0
        },
        {
          "day": 90,
          "date": "2025-05-05",
          "balance": 32840.93,
          "min_balance": 82900.0
        }
      ]
    },
    {
      "request_id": "request_45",
      "user_id": "user_45",
      "requested_amount": 21983000.0,
      "currency": "IDR",
      "request_type": "purchase",
      "request_text": "How much of the laptop price can I safely cover today? The price of the laptop is IDR 21,983,000.",
      "allows_partial_payment": false,
      "request_date": "2026-07-06",
      "desired_completion_date": "2026-09-15",
      "home_currency": "IDR",
      "current_balance": 19982900.0,
      "minimum_balance_to_keep": 11149800.0,
      "amount_safe_to_pay": 3088761.92,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 15 September 2026. None of the available options keeps the IDR 11,149,800 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2026-07-06",
          "balance": 18829943.79,
          "min_balance": 11149800.0
        },
        {
          "day": 5,
          "date": "2026-07-11",
          "balance": 14715536.56,
          "min_balance": 11149800.0
        },
        {
          "day": 10,
          "date": "2026-07-16",
          "balance": 30641648.98,
          "min_balance": 11149800.0
        },
        {
          "day": 15,
          "date": "2026-07-21",
          "balance": 28044127.9,
          "min_balance": 11149800.0
        },
        {
          "day": 20,
          "date": "2026-07-26",
          "balance": 26799364.06,
          "min_balance": 11149800.0
        },
        {
          "day": 25,
          "date": "2026-07-31",
          "balance": 23650879.61,
          "min_balance": 11149800.0
        },
        {
          "day": 30,
          "date": "2026-08-05",
          "balance": 20943359.19,
          "min_balance": 11149800.0
        },
        {
          "day": 35,
          "date": "2026-08-10",
          "balance": 15675995.75,
          "min_balance": 11149800.0
        },
        {
          "day": 40,
          "date": "2026-08-15",
          "balance": 31602108.17,
          "min_balance": 11149800.0
        },
        {
          "day": 45,
          "date": "2026-08-20",
          "balance": 29004587.09,
          "min_balance": 11149800.0
        },
        {
          "day": 50,
          "date": "2026-08-25",
          "balance": 27759823.25,
          "min_balance": 11149800.0
        },
        {
          "day": 55,
          "date": "2026-08-30",
          "balance": 24611338.8,
          "min_balance": 11149800.0
        },
        {
          "day": 60,
          "date": "2026-09-04",
          "balance": 22272732.27,
          "min_balance": 11149800.0
        },
        {
          "day": 65,
          "date": "2026-09-09",
          "balance": 18662603.1,
          "min_balance": 11149800.0
        },
        {
          "day": 70,
          "date": "2026-09-14",
          "balance": 16159480.3,
          "min_balance": 11149800.0
        },
        {
          "day": 75,
          "date": "2026-09-19",
          "balance": 31302597.27,
          "min_balance": 11149800.0
        },
        {
          "day": 80,
          "date": "2026-09-24",
          "balance": 28720282.44,
          "min_balance": 11149800.0
        },
        {
          "day": 85,
          "date": "2026-09-29",
          "balance": 27063944.52,
          "min_balance": 11149800.0
        },
        {
          "day": 90,
          "date": "2026-10-04",
          "balance": 23233191.46,
          "min_balance": 11149800.0
        }
      ]
    },
    {
      "request_id": "request_46",
      "user_id": "user_46",
      "requested_amount": 49450.0,
      "currency": "INR",
      "request_type": "debt_repayment",
      "request_text": "I would like to repay an additional INR 49,450. I need to complete it by 9 January 2025. Is the full extra repayment safe, or should I pay a smaller amount?",
      "allows_partial_payment": true,
      "request_date": "2024-12-03",
      "desired_completion_date": "2025-01-09",
      "home_currency": "INR",
      "current_balance": 202335.0,
      "minimum_balance_to_keep": 84000.0,
      "amount_safe_to_pay": 23996.69,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 9 January 2025. None of the available options keeps the INR 84,000 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2024-12-03",
          "balance": 168535.0,
          "min_balance": 84000.0
        },
        {
          "day": 5,
          "date": "2024-12-08",
          "balance": 151315.06,
          "min_balance": 84000.0
        },
        {
          "day": 10,
          "date": "2024-12-13",
          "balance": 115469.19,
          "min_balance": 84000.0
        },
        {
          "day": 15,
          "date": "2024-12-18",
          "balance": 379075.08,
          "min_balance": 84000.0
        },
        {
          "day": 20,
          "date": "2024-12-23",
          "balance": 368143.88,
          "min_balance": 84000.0
        },
        {
          "day": 25,
          "date": "2024-12-28",
          "balance": 346103.29,
          "min_balance": 84000.0
        },
        {
          "day": 30,
          "date": "2025-01-02",
          "balance": 283826.82,
          "min_balance": 84000.0
        },
        {
          "day": 35,
          "date": "2025-01-07",
          "balance": 232806.88,
          "min_balance": 84000.0
        },
        {
          "day": 40,
          "date": "2025-01-12",
          "balance": 206457.63,
          "min_balance": 84000.0
        },
        {
          "day": 45,
          "date": "2025-01-17",
          "balance": 322988.47,
          "min_balance": 84000.0
        },
        {
          "day": 50,
          "date": "2025-01-22",
          "balance": 309993.82,
          "min_balance": 84000.0
        },
        {
          "day": 55,
          "date": "2025-01-27",
          "balance": 289082.1,
          "min_balance": 84000.0
        },
        {
          "day": 60,
          "date": "2025-02-01",
          "balance": 230302.93,
          "min_balance": 84000.0
        },
        {
          "day": 65,
          "date": "2025-02-06",
          "balance": 183102.58,
          "min_balance": 84000.0
        },
        {
          "day": 70,
          "date": "2025-02-11",
          "balance": 165268.7,
          "min_balance": 84000.0
        },
        {
          "day": 75,
          "date": "2025-02-16",
          "balance": 259480.29,
          "min_balance": 84000.0
        },
        {
          "day": 80,
          "date": "2025-02-21",
          "balance": 246485.64,
          "min_balance": 84000.0
        },
        {
          "day": 85,
          "date": "2025-02-26",
          "balance": 228825.2,
          "min_balance": 84000.0
        },
        {
          "day": 90,
          "date": "2025-03-03",
          "balance": 123010.46,
          "min_balance": 84000.0
        }
      ]
    },
    {
      "request_id": "request_47",
      "user_id": "user_47",
      "requested_amount": 38114000.0,
      "currency": "IDR",
      "request_type": "emergency_expense",
      "request_text": "What is the most I can put toward this repair right now? I need to decide by 19 June 2025. I've received a repair quote for IDR 38,114,000.",
      "allows_partial_payment": false,
      "request_date": "2025-05-05",
      "desired_completion_date": "2025-06-19",
      "home_currency": "IDR",
      "current_balance": 112924150.0,
      "minimum_balance_to_keep": 30049000.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 19 June 2025. None of the available options keeps the IDR 30,049,000 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2025-05-05",
          "balance": 112924150.0,
          "min_balance": 30049000.0
        },
        {
          "day": 5,
          "date": "2025-05-10",
          "balance": 106611074.23,
          "min_balance": 30049000.0
        },
        {
          "day": 10,
          "date": "2025-05-15",
          "balance": 100633104.56,
          "min_balance": 30049000.0
        },
        {
          "day": 15,
          "date": "2025-05-20",
          "balance": 95805328.51,
          "min_balance": 30049000.0
        },
        {
          "day": 20,
          "date": "2025-05-25",
          "balance": 90213559.13,
          "min_balance": 30049000.0
        },
        {
          "day": 25,
          "date": "2025-05-30",
          "balance": 92862895.05,
          "min_balance": 30049000.0
        },
        {
          "day": 30,
          "date": "2025-06-04",
          "balance": 75554005.11,
          "min_balance": 30049000.0
        },
        {
          "day": 35,
          "date": "2025-06-09",
          "balance": 71623243.83,
          "min_balance": 30049000.0
        },
        {
          "day": 40,
          "date": "2025-06-14",
          "balance": 63653409.67,
          "min_balance": 30049000.0
        },
        {
          "day": 45,
          "date": "2025-06-19",
          "balance": 59566444.38,
          "min_balance": 30049000.0
        },
        {
          "day": 50,
          "date": "2025-06-24",
          "balance": 55978504.36,
          "min_balance": 30049000.0
        },
        {
          "day": 55,
          "date": "2025-06-29",
          "balance": 55492750.16,
          "min_balance": 30049000.0
        },
        {
          "day": 60,
          "date": "2025-07-04",
          "balance": 38183860.22,
          "min_balance": 30049000.0
        },
        {
          "day": 65,
          "date": "2025-07-09",
          "balance": 34253098.94,
          "min_balance": 30049000.0
        },
        {
          "day": 70,
          "date": "2025-07-14",
          "balance": 26283264.78,
          "min_balance": 30049000.0
        },
        {
          "day": 75,
          "date": "2025-07-19",
          "balance": 22196299.49,
          "min_balance": 30049000.0
        },
        {
          "day": 80,
          "date": "2025-07-24",
          "balance": 18608359.47,
          "min_balance": 30049000.0
        },
        {
          "day": 85,
          "date": "2025-07-29",
          "balance": 18122605.27,
          "min_balance": 30049000.0
        },
        {
          "day": 90,
          "date": "2025-08-03",
          "balance": 12878715.33,
          "min_balance": 30049000.0
        }
      ]
    },
    {
      "request_id": "request_48",
      "user_id": "user_48",
      "requested_amount": 45700.0,
      "currency": "INR",
      "request_type": "family_transfer",
      "request_text": "I want to send INR 45,700 to my family. Can I complete this family transfer and still keep my minimum balance?",
      "allows_partial_payment": false,
      "request_date": "2026-07-25",
      "desired_completion_date": "2026-08-24",
      "home_currency": "INR",
      "current_balance": 188065.0,
      "minimum_balance_to_keep": 71300.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 24 August 2026. None of the available options keeps the INR 71,300 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2026-07-25",
          "balance": 188065.0,
          "min_balance": 71300.0
        },
        {
          "day": 5,
          "date": "2026-07-30",
          "balance": 172834.29,
          "min_balance": 71300.0
        },
        {
          "day": 10,
          "date": "2026-08-04",
          "balance": 142437.66,
          "min_balance": 71300.0
        },
        {
          "day": 15,
          "date": "2026-08-09",
          "balance": 118764.02,
          "min_balance": 71300.0
        },
        {
          "day": 20,
          "date": "2026-08-14",
          "balance": 105172.77,
          "min_balance": 71300.0
        },
        {
          "day": 25,
          "date": "2026-08-19",
          "balance": 176083.33,
          "min_balance": 71300.0
        },
        {
          "day": 30,
          "date": "2026-08-24",
          "balance": 147820.3,
          "min_balance": 71300.0
        },
        {
          "day": 35,
          "date": "2026-08-29",
          "balance": 132589.59,
          "min_balance": 71300.0
        },
        {
          "day": 40,
          "date": "2026-09-03",
          "balance": 102192.96,
          "min_balance": 71300.0
        },
        {
          "day": 45,
          "date": "2026-09-08",
          "balance": 78519.32,
          "min_balance": 71300.0
        },
        {
          "day": 50,
          "date": "2026-09-13",
          "balance": 64928.07,
          "min_balance": 71300.0
        },
        {
          "day": 55,
          "date": "2026-09-18",
          "balance": 135838.63,
          "min_balance": 71300.0
        },
        {
          "day": 60,
          "date": "2026-09-23",
          "balance": 128595.13,
          "min_balance": 71300.0
        },
        {
          "day": 65,
          "date": "2026-09-28",
          "balance": 99121.63,
          "min_balance": 71300.0
        },
        {
          "day": 70,
          "date": "2026-10-03",
          "balance": 61948.26,
          "min_balance": 71300.0
        },
        {
          "day": 75,
          "date": "2026-10-08",
          "balance": 38274.62,
          "min_balance": 71300.0
        },
        {
          "day": 80,
          "date": "2026-10-13",
          "balance": 24683.37,
          "min_balance": 71300.0
        },
        {
          "day": 85,
          "date": "2026-10-18",
          "balance": 95593.93,
          "min_balance": 71300.0
        },
        {
          "day": 90,
          "date": "2026-10-23",
          "balance": 88350.43,
          "min_balance": 71300.0
        }
      ]
    },
    {
      "request_id": "request_49",
      "user_id": "user_49",
      "requested_amount": 34333000.0,
      "currency": "IDR",
      "request_type": "travel",
      "request_text": "How much can I safely put toward the booking today? I've found a travel option for IDR 34,333,000.",
      "allows_partial_payment": false,
      "request_date": "2024-03-04",
      "desired_completion_date": "2024-05-22",
      "home_currency": "IDR",
      "current_balance": 40504493.34,
      "minimum_balance_to_keep": 20275700.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 22 May 2024. None of the available options keeps the IDR 20,275,700 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2024-03-04",
          "balance": 38492077.43,
          "min_balance": 20275700.0
        },
        {
          "day": 5,
          "date": "2024-03-09",
          "balance": 34395837.73,
          "min_balance": 20275700.0
        },
        {
          "day": 10,
          "date": "2024-03-14",
          "balance": 26947673.77,
          "min_balance": 20275700.0
        },
        {
          "day": 15,
          "date": "2024-03-19",
          "balance": 51662179.09,
          "min_balance": 20275700.0
        },
        {
          "day": 20,
          "date": "2024-03-24",
          "balance": 49385802.79,
          "min_balance": 20275700.0
        },
        {
          "day": 25,
          "date": "2024-03-29",
          "balance": 46053573.66,
          "min_balance": 20275700.0
        },
        {
          "day": 30,
          "date": "2024-04-03",
          "balance": 31180725.61,
          "min_balance": 20275700.0
        },
        {
          "day": 35,
          "date": "2024-04-08",
          "balance": 25072070.0,
          "min_balance": 20275700.0
        },
        {
          "day": 40,
          "date": "2024-04-13",
          "balance": 19249939.09,
          "min_balance": 20275700.0
        },
        {
          "day": 45,
          "date": "2024-04-18",
          "balance": 42338411.36,
          "min_balance": 20275700.0
        },
        {
          "day": 50,
          "date": "2024-04-23",
          "balance": 40062035.06,
          "min_balance": 20275700.0
        },
        {
          "day": 55,
          "date": "2024-04-28",
          "balance": 37973189.79,
          "min_balance": 20275700.0
        },
        {
          "day": 60,
          "date": "2024-05-03",
          "balance": 21856957.88,
          "min_balance": 20275700.0
        },
        {
          "day": 65,
          "date": "2024-05-08",
          "balance": 15748302.27,
          "min_balance": 20275700.0
        },
        {
          "day": 70,
          "date": "2024-05-13",
          "balance": 9926171.36,
          "min_balance": 20275700.0
        },
        {
          "day": 75,
          "date": "2024-05-18",
          "balance": 33014643.63,
          "min_balance": 20275700.0
        },
        {
          "day": 80,
          "date": "2024-05-23",
          "balance": 30738267.33,
          "min_balance": 20275700.0
        },
        {
          "day": 85,
          "date": "2024-05-28",
          "balance": 28649422.06,
          "min_balance": 20275700.0
        },
        {
          "day": 90,
          "date": "2024-06-02",
          "balance": 14838441.56,
          "min_balance": 20275700.0
        }
      ]
    },
    {
      "request_id": "request_50",
      "user_id": "user_50",
      "requested_amount": 43900.0,
      "currency": "INR",
      "request_type": "travel",
      "request_text": "The family trip will cost INR 43,900. I need to complete it by 21 August 2025. Would it be safer to book the trip now or wait until more money comes in?",
      "allows_partial_payment": false,
      "request_date": "2025-08-06",
      "desired_completion_date": "2025-08-21",
      "home_currency": "INR",
      "current_balance": 247325.5,
      "minimum_balance_to_keep": 99700.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 21 August 2025. None of the available options keeps the INR 99,700 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2025-08-06",
          "balance": 247325.5,
          "min_balance": 99700.0
        },
        {
          "day": 5,
          "date": "2025-08-11",
          "balance": 227299.82,
          "min_balance": 99700.0
        },
        {
          "day": 10,
          "date": "2025-08-16",
          "balance": 266442.77,
          "min_balance": 99700.0
        },
        {
          "day": 15,
          "date": "2025-08-21",
          "balance": 261784.58,
          "min_balance": 99700.0
        },
        {
          "day": 20,
          "date": "2025-08-26",
          "balance": 258191.76,
          "min_balance": 99700.0
        },
        {
          "day": 25,
          "date": "2025-08-31",
          "balance": 251375.47,
          "min_balance": 99700.0
        },
        {
          "day": 30,
          "date": "2025-09-05",
          "balance": 197555.15,
          "min_balance": 99700.0
        },
        {
          "day": 35,
          "date": "2025-09-10",
          "balance": 183433.57,
          "min_balance": 99700.0
        },
        {
          "day": 40,
          "date": "2025-09-15",
          "balance": 219153.3,
          "min_balance": 99700.0
        },
        {
          "day": 45,
          "date": "2025-09-20",
          "balance": 212014.23,
          "min_balance": 99700.0
        },
        {
          "day": 50,
          "date": "2025-09-25",
          "balance": 208421.41,
          "min_balance": 99700.0
        },
        {
          "day": 55,
          "date": "2025-09-30",
          "balance": 201605.12,
          "min_balance": 99700.0
        },
        {
          "day": 60,
          "date": "2025-10-05",
          "balance": 147784.8,
          "min_balance": 99700.0
        },
        {
          "day": 65,
          "date": "2025-10-10",
          "balance": 133663.22,
          "min_balance": 99700.0
        },
        {
          "day": 70,
          "date": "2025-10-15",
          "balance": 169382.95,
          "min_balance": 99700.0
        },
        {
          "day": 75,
          "date": "2025-10-20",
          "balance": 162243.88,
          "min_balance": 99700.0
        },
        {
          "day": 80,
          "date": "2025-10-25",
          "balance": 158651.06,
          "min_balance": 99700.0
        },
        {
          "day": 85,
          "date": "2025-10-30",
          "balance": 151834.77,
          "min_balance": 99700.0
        },
        {
          "day": 90,
          "date": "2025-11-04",
          "balance": 102183.88,
          "min_balance": 99700.0
        }
      ]
    },
    {
      "request_id": "request_51",
      "user_id": "user_51",
      "requested_amount": 2191000.0,
      "currency": "IDR",
      "request_type": "investment",
      "request_text": "Is it safer to invest now, invest a smaller amount, or wait? I need to decide by 28 February 2026. The amount I would like to invest is IDR 2,191,000.",
      "allows_partial_payment": true,
      "request_date": "2026-01-03",
      "desired_completion_date": "2026-02-28",
      "home_currency": "IDR",
      "current_balance": 35347700.0,
      "minimum_balance_to_keep": 7811000.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 28 February 2026. None of the available options keeps the IDR 7,811,000 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2026-01-03",
          "balance": 34983558.82,
          "min_balance": 7811000.0
        },
        {
          "day": 5,
          "date": "2026-01-08",
          "balance": 30261369.53,
          "min_balance": 7811000.0
        },
        {
          "day": 10,
          "date": "2026-01-13",
          "balance": 27716973.7,
          "min_balance": 7811000.0
        },
        {
          "day": 15,
          "date": "2026-01-18",
          "balance": 26341540.06,
          "min_balance": 7811000.0
        },
        {
          "day": 20,
          "date": "2026-01-23",
          "balance": 25353543.51,
          "min_balance": 7811000.0
        },
        {
          "day": 25,
          "date": "2026-01-28",
          "balance": 25749812.02,
          "min_balance": 7811000.0
        },
        {
          "day": 30,
          "date": "2026-02-02",
          "balance": 23435601.11,
          "min_balance": 7811000.0
        },
        {
          "day": 35,
          "date": "2026-02-07",
          "balance": 19542741.39,
          "min_balance": 7811000.0
        },
        {
          "day": 40,
          "date": "2026-02-12",
          "balance": 16350320.96,
          "min_balance": 7811000.0
        },
        {
          "day": 45,
          "date": "2026-02-17",
          "balance": 14893814.08,
          "min_balance": 7811000.0
        },
        {
          "day": 50,
          "date": "2026-02-22",
          "balance": 13441444.62,
          "min_balance": 7811000.0
        },
        {
          "day": 55,
          "date": "2026-02-27",
          "balance": 14309374.96,
          "min_balance": 7811000.0
        },
        {
          "day": 60,
          "date": "2026-03-04",
          "balance": 8214361.04,
          "min_balance": 7811000.0
        },
        {
          "day": 65,
          "date": "2026-03-09",
          "balance": 5891203.09,
          "min_balance": 7811000.0
        },
        {
          "day": 70,
          "date": "2026-03-14",
          "balance": 3892775.92,
          "min_balance": 7811000.0
        },
        {
          "day": 75,
          "date": "2026-03-19",
          "balance": 2245816.81,
          "min_balance": 7811000.0
        },
        {
          "day": 80,
          "date": "2026-03-24",
          "balance": 917964.04,
          "min_balance": 7811000.0
        },
        {
          "day": 85,
          "date": "2026-03-29",
          "balance": 943284.84,
          "min_balance": 7811000.0
        },
        {
          "day": 90,
          "date": "2026-04-03",
          "balance": -752737.85,
          "min_balance": 7811000.0
        }
      ]
    },
    {
      "request_id": "request_52",
      "user_id": "user_52",
      "requested_amount": 28870.0,
      "currency": "INR",
      "request_type": "emergency_expense",
      "request_text": "The latest estimate for the repair is INR 28,870. What is the most I can put toward this repair right now?",
      "allows_partial_payment": true,
      "request_date": "2024-06-05",
      "desired_completion_date": "2024-07-09",
      "home_currency": "INR",
      "current_balance": 75320.0,
      "minimum_balance_to_keep": 41500.0,
      "amount_safe_to_pay": 5443.58,
      "affordability_status": "affordable_later",
      "recommended_payment_method": "wait",
      "payment_plan": "2024-08-15:28870",
      "earliest_date_for_full_payment": "2024-08-15",
      "spending_changes_needed": "none",
      "decision_explanation": "Pay INR 28,870 in full on 15 August 2024. Paying earlier would take the balance below the INR 41,500 minimum.",
      "curve": [
        {
          "day": 0,
          "date": "2024-06-05",
          "balance": 68508.45,
          "min_balance": 41500.0
        },
        {
          "day": 5,
          "date": "2024-06-10",
          "balance": 58789.94,
          "min_balance": 41500.0
        },
        {
          "day": 10,
          "date": "2024-06-15",
          "balance": 117575.77,
          "min_balance": 41500.0
        },
        {
          "day": 15,
          "date": "2024-06-20",
          "balance": 113290.07,
          "min_balance": 41500.0
        },
        {
          "day": 20,
          "date": "2024-06-25",
          "balance": 111888.71,
          "min_balance": 41500.0
        },
        {
          "day": 25,
          "date": "2024-06-30",
          "balance": 101894.94,
          "min_balance": 41500.0
        },
        {
          "day": 30,
          "date": "2024-07-05",
          "balance": 66938.27,
          "min_balance": 41500.0
        },
        {
          "day": 35,
          "date": "2024-07-10",
          "balance": 57219.76,
          "min_balance": 41500.0
        },
        {
          "day": 40,
          "date": "2024-07-15",
          "balance": 116005.59,
          "min_balance": 41500.0
        },
        {
          "day": 45,
          "date": "2024-07-20",
          "balance": 111719.89,
          "min_balance": 41500.0
        },
        {
          "day": 50,
          "date": "2024-07-25",
          "balance": 110318.53,
          "min_balance": 41500.0
        },
        {
          "day": 55,
          "date": "2024-07-30",
          "balance": 100324.76,
          "min_balance": 41500.0
        },
        {
          "day": 60,
          "date": "2024-08-04",
          "balance": 72179.64,
          "min_balance": 41500.0
        },
        {
          "day": 65,
          "date": "2024-08-09",
          "balance": 62939.58,
          "min_balance": 41500.0
        },
        {
          "day": 70,
          "date": "2024-08-14",
          "balance": 46943.58,
          "min_balance": 41500.0
        },
        {
          "day": 75,
          "date": "2024-08-19",
          "balance": 110149.71,
          "min_balance": 41500.0
        },
        {
          "day": 80,
          "date": "2024-08-24",
          "balance": 110149.71,
          "min_balance": 41500.0
        },
        {
          "day": 85,
          "date": "2024-08-29",
          "balance": 98754.58,
          "min_balance": 41500.0
        },
        {
          "day": 90,
          "date": "2024-09-03",
          "balance": 72139.52,
          "min_balance": 41500.0
        }
      ]
    },
    {
      "request_id": "request_53",
      "user_id": "user_53",
      "requested_amount": 1699.2,
      "currency": "USD",
      "request_type": "purchase",
      "request_text": "Is the laptop affordable right now, or should I wait? The laptop comes to USD 1,699.20.",
      "allows_partial_payment": false,
      "request_date": "2025-11-07",
      "desired_completion_date": "2026-01-20",
      "home_currency": "USD",
      "current_balance": 3523.42,
      "minimum_balance_to_keep": 2100.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 20 January 2026. None of the available options keeps the USD 2,100 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2025-11-07",
          "balance": 3523.42,
          "min_balance": 2100.0
        },
        {
          "day": 5,
          "date": "2025-11-12",
          "balance": 2650.79,
          "min_balance": 2100.0
        },
        {
          "day": 10,
          "date": "2025-11-17",
          "balance": 4932.82,
          "min_balance": 2100.0
        },
        {
          "day": 15,
          "date": "2025-11-22",
          "balance": 4549.9,
          "min_balance": 2100.0
        },
        {
          "day": 20,
          "date": "2025-11-27",
          "balance": 4327.03,
          "min_balance": 2100.0
        },
        {
          "day": 25,
          "date": "2025-12-02",
          "balance": 3224.3,
          "min_balance": 2100.0
        },
        {
          "day": 30,
          "date": "2025-12-07",
          "balance": 2690.29,
          "min_balance": 2100.0
        },
        {
          "day": 35,
          "date": "2025-12-12",
          "balance": 1817.66,
          "min_balance": 2100.0
        },
        {
          "day": 40,
          "date": "2025-12-17",
          "balance": 4099.69,
          "min_balance": 2100.0
        },
        {
          "day": 45,
          "date": "2025-12-22",
          "balance": 3716.77,
          "min_balance": 2100.0
        },
        {
          "day": 50,
          "date": "2025-12-27",
          "balance": 3493.9,
          "min_balance": 2100.0
        },
        {
          "day": 55,
          "date": "2026-01-01",
          "balance": 3273.27,
          "min_balance": 2100.0
        },
        {
          "day": 60,
          "date": "2026-01-06",
          "balance": 1857.16,
          "min_balance": 2100.0
        },
        {
          "day": 65,
          "date": "2026-01-11",
          "balance": 984.53,
          "min_balance": 2100.0
        },
        {
          "day": 70,
          "date": "2026-01-16",
          "balance": 3349.9,
          "min_balance": 2100.0
        },
        {
          "day": 75,
          "date": "2026-01-21",
          "balance": 2990.2,
          "min_balance": 2100.0
        },
        {
          "day": 80,
          "date": "2026-01-26",
          "balance": 2771.96,
          "min_balance": 2100.0
        },
        {
          "day": 85,
          "date": "2026-01-31",
          "balance": 2440.14,
          "min_balance": 2100.0
        },
        {
          "day": 90,
          "date": "2026-02-05",
          "balance": 1240.77,
          "min_balance": 2100.0
        }
      ]
    },
    {
      "request_id": "request_54",
      "user_id": "user_54",
      "requested_amount": 121528.0,
      "currency": "ZAR",
      "request_type": "housing",
      "request_text": "The move requires a ZAR 121,528 deposit. I need to complete it by 21 August 2026. Can I cover this deposit without putting rent and regular bills at risk?",
      "allows_partial_payment": false,
      "request_date": "2026-07-04",
      "desired_completion_date": "2026-08-21",
      "home_currency": "ZAR",
      "current_balance": 53581.4,
      "minimum_balance_to_keep": 37000.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 21 August 2026. None of the available options keeps the ZAR 37,000 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2026-07-04",
          "balance": 49070.89,
          "min_balance": 37000.0
        },
        {
          "day": 5,
          "date": "2026-07-09",
          "balance": 39645.07,
          "min_balance": 37000.0
        },
        {
          "day": 10,
          "date": "2026-07-14",
          "balance": 34743.13,
          "min_balance": 37000.0
        },
        {
          "day": 15,
          "date": "2026-07-19",
          "balance": 58151.96,
          "min_balance": 37000.0
        },
        {
          "day": 20,
          "date": "2026-07-24",
          "balance": 54966.31,
          "min_balance": 37000.0
        },
        {
          "day": 25,
          "date": "2026-07-29",
          "balance": 46758.7,
          "min_balance": 37000.0
        },
        {
          "day": 30,
          "date": "2026-08-03",
          "balance": 41487.36,
          "min_balance": 37000.0
        },
        {
          "day": 35,
          "date": "2026-08-08",
          "balance": 27551.03,
          "min_balance": 37000.0
        },
        {
          "day": 40,
          "date": "2026-08-13",
          "balance": 24166.89,
          "min_balance": 37000.0
        },
        {
          "day": 45,
          "date": "2026-08-18",
          "balance": 50338.01,
          "min_balance": 37000.0
        },
        {
          "day": 50,
          "date": "2026-08-23",
          "balance": 42872.27,
          "min_balance": 37000.0
        },
        {
          "day": 55,
          "date": "2026-08-28",
          "balance": 38478.22,
          "min_balance": 37000.0
        },
        {
          "day": 60,
          "date": "2026-09-02",
          "balance": 29393.32,
          "min_balance": 37000.0
        },
        {
          "day": 65,
          "date": "2026-09-07",
          "balance": 19814.65,
          "min_balance": 37000.0
        },
        {
          "day": 70,
          "date": "2026-09-12",
          "balance": 13233.43,
          "min_balance": 37000.0
        },
        {
          "day": 75,
          "date": "2026-09-17",
          "balance": 41870.27,
          "min_balance": 37000.0
        },
        {
          "day": 80,
          "date": "2026-09-22",
          "balance": 30778.23,
          "min_balance": 37000.0
        },
        {
          "day": 85,
          "date": "2026-09-27",
          "balance": 29441.75,
          "min_balance": 37000.0
        },
        {
          "day": 90,
          "date": "2026-10-02",
          "balance": 17299.28,
          "min_balance": 37000.0
        }
      ]
    },
    {
      "request_id": "request_55",
      "user_id": "user_55",
      "requested_amount": 218600.0,
      "currency": "INR",
      "request_type": "family_transfer",
      "request_text": "How much can I safely send to my family today? I need to decide by 22 August 2026. I want to send INR 218,600 to my family.",
      "allows_partial_payment": false,
      "request_date": "2026-06-08",
      "desired_completion_date": "2026-08-22",
      "home_currency": "INR",
      "current_balance": 314341.19,
      "minimum_balance_to_keep": 124300.0,
      "amount_safe_to_pay": 80428.66,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 22 August 2026. None of the available options keeps the INR 124,300 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2026-06-08",
          "balance": 299141.57,
          "min_balance": 124300.0
        },
        {
          "day": 5,
          "date": "2026-06-13",
          "balance": 252983.68,
          "min_balance": 124300.0
        },
        {
          "day": 10,
          "date": "2026-06-18",
          "balance": 434869.4,
          "min_balance": 124300.0
        },
        {
          "day": 15,
          "date": "2026-06-23",
          "balance": 414273.32,
          "min_balance": 124300.0
        },
        {
          "day": 20,
          "date": "2026-06-28",
          "balance": 393288.44,
          "min_balance": 124300.0
        },
        {
          "day": 25,
          "date": "2026-07-03",
          "balance": 352580.04,
          "min_balance": 124300.0
        },
        {
          "day": 30,
          "date": "2026-07-08",
          "balance": 264590.56,
          "min_balance": 124300.0
        },
        {
          "day": 35,
          "date": "2026-07-13",
          "balance": 232232.67,
          "min_balance": 124300.0
        },
        {
          "day": 40,
          "date": "2026-07-18",
          "balance": 414118.39,
          "min_balance": 124300.0
        },
        {
          "day": 45,
          "date": "2026-07-23",
          "balance": 393522.31,
          "min_balance": 124300.0
        },
        {
          "day": 50,
          "date": "2026-07-28",
          "balance": 372537.43,
          "min_balance": 124300.0
        },
        {
          "day": 55,
          "date": "2026-08-02",
          "balance": 337710.55,
          "min_balance": 124300.0
        },
        {
          "day": 60,
          "date": "2026-08-07",
          "balance": 259039.17,
          "min_balance": 124300.0
        },
        {
          "day": 65,
          "date": "2026-08-12",
          "balance": 227031.66,
          "min_balance": 124300.0
        },
        {
          "day": 70,
          "date": "2026-08-17",
          "balance": 403017.87,
          "min_balance": 124300.0
        },
        {
          "day": 75,
          "date": "2026-08-22",
          "balance": 383887.8,
          "min_balance": 124300.0
        },
        {
          "day": 80,
          "date": "2026-08-27",
          "balance": 355261.89,
          "min_balance": 124300.0
        },
        {
          "day": 85,
          "date": "2026-09-01",
          "balance": 330037.9,
          "min_balance": 124300.0
        },
        {
          "day": 90,
          "date": "2026-09-06",
          "balance": 239011.16,
          "min_balance": 124300.0
        }
      ]
    },
    {
      "request_id": "request_56",
      "user_id": "user_56",
      "requested_amount": 881.56,
      "currency": "USD",
      "request_type": "purchase",
      "request_text": "I've found a laptop for USD 881.56. Would paying for the laptop today leave enough for my regular expenses?",
      "allows_partial_payment": true,
      "request_date": "2025-02-03",
      "desired_completion_date": "2025-03-13",
      "home_currency": "USD",
      "current_balance": 3432.36,
      "minimum_balance_to_keep": 2100.0,
      "amount_safe_to_pay": 266.42,
      "affordability_status": "affordable_with_plan",
      "recommended_payment_method": "partial_payment",
      "payment_plan": "2025-02-03:266.42|2025-02-15:615.14",
      "earliest_date_for_full_payment": "2025-02-15",
      "spending_changes_needed": "none",
      "decision_explanation": "Pay USD 266.42 today and the remaining USD 615.14 on 15 February 2025. This completes the full request and keeps the USD 2,100 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2025-02-03",
          "balance": 3303.38,
          "min_balance": 2100.0
        },
        {
          "day": 5,
          "date": "2025-02-08",
          "balance": 2629.82,
          "min_balance": 2100.0
        },
        {
          "day": 10,
          "date": "2025-02-13",
          "balance": 2410.69,
          "min_balance": 2100.0
        },
        {
          "day": 15,
          "date": "2025-02-18",
          "balance": 6711.72,
          "min_balance": 2100.0
        },
        {
          "day": 20,
          "date": "2025-02-23",
          "balance": 6616.03,
          "min_balance": 2100.0
        },
        {
          "day": 25,
          "date": "2025-02-28",
          "balance": 6131.46,
          "min_balance": 2100.0
        },
        {
          "day": 30,
          "date": "2025-03-05",
          "balance": 5477.19,
          "min_balance": 2100.0
        },
        {
          "day": 35,
          "date": "2025-03-10",
          "balance": 4886.21,
          "min_balance": 2100.0
        },
        {
          "day": 40,
          "date": "2025-03-15",
          "balance": 7026.92,
          "min_balance": 2100.0
        },
        {
          "day": 45,
          "date": "2025-03-20",
          "balance": 6648.84,
          "min_balance": 2100.0
        },
        {
          "day": 50,
          "date": "2025-03-25",
          "balance": 6489.33,
          "min_balance": 2100.0
        },
        {
          "day": 55,
          "date": "2025-03-30",
          "balance": 6123.2,
          "min_balance": 2100.0
        },
        {
          "day": 60,
          "date": "2025-04-04",
          "balance": 5674.86,
          "min_balance": 2100.0
        },
        {
          "day": 65,
          "date": "2025-04-09",
          "balance": 4877.95,
          "min_balance": 2100.0
        },
        {
          "day": 70,
          "date": "2025-04-14",
          "balance": 4737.9,
          "min_balance": 2100.0
        },
        {
          "day": 75,
          "date": "2025-04-19",
          "balance": 6640.58,
          "min_balance": 2100.0
        },
        {
          "day": 80,
          "date": "2025-04-24",
          "balance": 6519.44,
          "min_balance": 2100.0
        },
        {
          "day": 85,
          "date": "2025-04-29",
          "balance": 6114.94,
          "min_balance": 2100.0
        },
        {
          "day": 90,
          "date": "2025-05-04",
          "balance": 5666.6,
          "min_balance": 2100.0
        }
      ]
    },
    {
      "request_id": "request_57",
      "user_id": "user_57",
      "requested_amount": 61446.0,
      "currency": "ZAR",
      "request_type": "education",
      "request_text": "Can I pay for the course before enrolment closes? I'm considering a professional course priced at ZAR 61,446.",
      "allows_partial_payment": false,
      "request_date": "2026-04-05",
      "desired_completion_date": "2026-06-15",
      "home_currency": "ZAR",
      "current_balance": 63914.6,
      "minimum_balance_to_keep": 42700.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 15 June 2026. None of the available options keeps the ZAR 42,700 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2026-04-05",
          "balance": 63914.6,
          "min_balance": 42700.0
        },
        {
          "day": 5,
          "date": "2026-04-10",
          "balance": 51680.54,
          "min_balance": 42700.0
        },
        {
          "day": 10,
          "date": "2026-04-15",
          "balance": 95388.87,
          "min_balance": 42700.0
        },
        {
          "day": 15,
          "date": "2026-04-20",
          "balance": 91008.26,
          "min_balance": 42700.0
        },
        {
          "day": 20,
          "date": "2026-04-25",
          "balance": 87261.69,
          "min_balance": 42700.0
        },
        {
          "day": 25,
          "date": "2026-04-30",
          "balance": 75913.44,
          "min_balance": 42700.0
        },
        {
          "day": 30,
          "date": "2026-05-05",
          "balance": 58223.48,
          "min_balance": 42700.0
        },
        {
          "day": 35,
          "date": "2026-05-10",
          "balance": 45989.42,
          "min_balance": 42700.0
        },
        {
          "day": 40,
          "date": "2026-05-15",
          "balance": 89697.75,
          "min_balance": 42700.0
        },
        {
          "day": 45,
          "date": "2026-05-20",
          "balance": 85317.14,
          "min_balance": 42700.0
        },
        {
          "day": 50,
          "date": "2026-05-25",
          "balance": 81570.57,
          "min_balance": 42700.0
        },
        {
          "day": 55,
          "date": "2026-05-30",
          "balance": 70222.32,
          "min_balance": 42700.0
        },
        {
          "day": 60,
          "date": "2026-06-04",
          "balance": 52532.36,
          "min_balance": 42700.0
        },
        {
          "day": 65,
          "date": "2026-06-09",
          "balance": 40298.3,
          "min_balance": 42700.0
        },
        {
          "day": 70,
          "date": "2026-06-14",
          "balance": 35327.04,
          "min_balance": 42700.0
        },
        {
          "day": 75,
          "date": "2026-06-19",
          "balance": 81950.69,
          "min_balance": 42700.0
        },
        {
          "day": 80,
          "date": "2026-06-24",
          "balance": 77186.81,
          "min_balance": 42700.0
        },
        {
          "day": 85,
          "date": "2026-06-29",
          "balance": 64531.2,
          "min_balance": 42700.0
        },
        {
          "day": 90,
          "date": "2026-07-04",
          "balance": 46841.24,
          "min_balance": 42700.0
        }
      ]
    },
    {
      "request_id": "request_58",
      "user_id": "user_58",
      "requested_amount": 16226000.0,
      "currency": "IDR",
      "request_type": "debt_repayment",
      "request_text": "The additional loan payment would be IDR 16,226,000. I need to complete it by 25 January 2025. How much extra can I put toward the loan today?",
      "allows_partial_payment": false,
      "request_date": "2024-12-07",
      "desired_completion_date": "2025-01-25",
      "home_currency": "IDR",
      "current_balance": 42146065.0,
      "minimum_balance_to_keep": 14433900.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 25 January 2025. None of the available options keeps the IDR 14,433,900 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2024-12-07",
          "balance": 40369090.58,
          "min_balance": 14433900.0
        },
        {
          "day": 5,
          "date": "2024-12-12",
          "balance": 36989427.27,
          "min_balance": 14433900.0
        },
        {
          "day": 10,
          "date": "2024-12-17",
          "balance": 48233429.23,
          "min_balance": 14433900.0
        },
        {
          "day": 15,
          "date": "2024-12-22",
          "balance": 45622833.88,
          "min_balance": 14433900.0
        },
        {
          "day": 20,
          "date": "2024-12-27",
          "balance": 42686026.53,
          "min_balance": 14433900.0
        },
        {
          "day": 25,
          "date": "2025-01-01",
          "balance": 40115429.43,
          "min_balance": 14433900.0
        },
        {
          "day": 30,
          "date": "2025-01-06",
          "balance": 28839013.85,
          "min_balance": 14433900.0
        },
        {
          "day": 35,
          "date": "2025-01-11",
          "balance": 23932226.12,
          "min_balance": 14433900.0
        },
        {
          "day": 40,
          "date": "2025-01-16",
          "balance": 35772434.0,
          "min_balance": 14433900.0
        },
        {
          "day": 45,
          "date": "2025-01-21",
          "balance": 33314958.11,
          "min_balance": 14433900.0
        },
        {
          "day": 50,
          "date": "2025-01-26",
          "balance": 29378975.38,
          "min_balance": 14433900.0
        },
        {
          "day": 55,
          "date": "2025-01-31",
          "balance": 27597131.26,
          "min_balance": 14433900.0
        },
        {
          "day": 60,
          "date": "2025-02-05",
          "balance": 17463819.84,
          "min_balance": 14433900.0
        },
        {
          "day": 65,
          "date": "2025-02-10",
          "balance": 12204152.88,
          "min_balance": 14433900.0
        },
        {
          "day": 70,
          "date": "2025-02-15",
          "balance": 23408611.77,
          "min_balance": 14433900.0
        },
        {
          "day": 75,
          "date": "2025-02-20",
          "balance": 20592727.87,
          "min_balance": 14433900.0
        },
        {
          "day": 80,
          "date": "2025-02-25",
          "balance": 16800533.79,
          "min_balance": 14433900.0
        },
        {
          "day": 85,
          "date": "2025-03-02",
          "balance": 13501327.13,
          "min_balance": 14433900.0
        },
        {
          "day": 90,
          "date": "2025-03-07",
          "balance": 447937.13,
          "min_balance": 14433900.0
        }
      ]
    },
    {
      "request_id": "request_59",
      "user_id": "user_59",
      "requested_amount": 140600.0,
      "currency": "INR",
      "request_type": "investment",
      "request_text": "Would investing this amount leave my upcoming bills covered? I need to decide by 2 July 2025. I'm considering setting aside INR 140,600 for an investment.",
      "allows_partial_payment": false,
      "request_date": "2025-05-04",
      "desired_completion_date": "2025-07-02",
      "home_currency": "INR",
      "current_balance": 723245.99,
      "minimum_balance_to_keep": 132600.0,
      "amount_safe_to_pay": 60741.58,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 2 July 2025. None of the available options keeps the INR 132,600 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2025-05-04",
          "balance": 669445.99,
          "min_balance": 132600.0
        },
        {
          "day": 5,
          "date": "2025-05-09",
          "balance": 640172.23,
          "min_balance": 132600.0
        },
        {
          "day": 10,
          "date": "2025-05-14",
          "balance": 601957.36,
          "min_balance": 132600.0
        },
        {
          "day": 15,
          "date": "2025-05-19",
          "balance": 575411.8,
          "min_balance": 132600.0
        },
        {
          "day": 20,
          "date": "2025-05-24",
          "balance": 541136.42,
          "min_balance": 132600.0
        },
        {
          "day": 25,
          "date": "2025-05-29",
          "balance": 580108.15,
          "min_balance": 132600.0
        },
        {
          "day": 30,
          "date": "2025-06-03",
          "balance": 549348.57,
          "min_balance": 132600.0
        },
        {
          "day": 35,
          "date": "2025-06-08",
          "balance": 466274.81,
          "min_balance": 132600.0
        },
        {
          "day": 40,
          "date": "2025-06-13",
          "balance": 432173.49,
          "min_balance": 132600.0
        },
        {
          "day": 45,
          "date": "2025-06-18",
          "balance": 408242.63,
          "min_balance": 132600.0
        },
        {
          "day": 50,
          "date": "2025-06-23",
          "balance": 379757.81,
          "min_balance": 132600.0
        },
        {
          "day": 55,
          "date": "2025-06-28",
          "balance": 406210.73,
          "min_balance": 132600.0
        },
        {
          "day": 60,
          "date": "2025-07-03",
          "balance": 375451.15,
          "min_balance": 132600.0
        },
        {
          "day": 65,
          "date": "2025-07-08",
          "balance": 292377.39,
          "min_balance": 132600.0
        },
        {
          "day": 70,
          "date": "2025-07-13",
          "balance": 258276.07,
          "min_balance": 132600.0
        },
        {
          "day": 75,
          "date": "2025-07-18",
          "balance": 234345.21,
          "min_balance": 132600.0
        },
        {
          "day": 80,
          "date": "2025-07-23",
          "balance": 205860.39,
          "min_balance": 132600.0
        },
        {
          "day": 85,
          "date": "2025-07-28",
          "balance": 232313.31,
          "min_balance": 132600.0
        },
        {
          "day": 90,
          "date": "2025-08-02",
          "balance": 201553.73,
          "min_balance": 132600.0
        }
      ]
    },
    {
      "request_id": "request_60",
      "user_id": "user_60",
      "requested_amount": 199.89,
      "currency": "USD",
      "request_type": "housing",
      "request_text": "I need USD 199.89 for the rental deposit. Is the deposit affordable now, or do I need more time?",
      "allows_partial_payment": true,
      "request_date": "2026-01-06",
      "desired_completion_date": "2026-03-04",
      "home_currency": "USD",
      "current_balance": 683.69,
      "minimum_balance_to_keep": 400.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 4 March 2026. None of the available options keeps the USD 400 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2026-01-06",
          "balance": 613.88,
          "min_balance": 400.0
        },
        {
          "day": 5,
          "date": "2026-01-11",
          "balance": 452.78,
          "min_balance": 400.0
        },
        {
          "day": 10,
          "date": "2026-01-16",
          "balance": 940.63,
          "min_balance": 400.0
        },
        {
          "day": 15,
          "date": "2026-01-21",
          "balance": 874.84,
          "min_balance": 400.0
        },
        {
          "day": 20,
          "date": "2026-01-26",
          "balance": 838.46,
          "min_balance": 400.0
        },
        {
          "day": 25,
          "date": "2026-01-31",
          "balance": 712.78,
          "min_balance": 400.0
        },
        {
          "day": 30,
          "date": "2026-02-05",
          "balance": 493.63,
          "min_balance": 400.0
        },
        {
          "day": 35,
          "date": "2026-02-10",
          "balance": 352.47,
          "min_balance": 400.0
        },
        {
          "day": 40,
          "date": "2026-02-15",
          "balance": 820.57,
          "min_balance": 400.0
        },
        {
          "day": 45,
          "date": "2026-02-20",
          "balance": 768.45,
          "min_balance": 400.0
        },
        {
          "day": 50,
          "date": "2026-02-25",
          "balance": 718.4,
          "min_balance": 400.0
        },
        {
          "day": 55,
          "date": "2026-03-02",
          "balance": 446.55,
          "min_balance": 400.0
        },
        {
          "day": 60,
          "date": "2026-03-07",
          "balance": 338.76,
          "min_balance": 400.0
        },
        {
          "day": 65,
          "date": "2026-03-12",
          "balance": 212.66,
          "min_balance": 400.0
        },
        {
          "day": 70,
          "date": "2026-03-17",
          "balance": 700.51,
          "min_balance": 400.0
        },
        {
          "day": 75,
          "date": "2026-03-22",
          "balance": 612.54,
          "min_balance": 400.0
        },
        {
          "day": 80,
          "date": "2026-03-27",
          "balance": 598.34,
          "min_balance": 400.0
        },
        {
          "day": 85,
          "date": "2026-04-01",
          "balance": 326.49,
          "min_balance": 400.0
        },
        {
          "day": 90,
          "date": "2026-04-06",
          "balance": 218.7,
          "min_balance": 400.0
        }
      ]
    },
    {
      "request_id": "request_61",
      "user_id": "user_61",
      "requested_amount": 29062.0,
      "currency": "ZAR",
      "request_type": "purchase",
      "request_text": "Would paying for the laptop today leave enough for my regular expenses? I've been quoted ZAR 29,062 for the laptop.",
      "allows_partial_payment": false,
      "request_date": "2024-03-03",
      "desired_completion_date": "2024-05-24",
      "home_currency": "ZAR",
      "current_balance": 147470.23,
      "minimum_balance_to_keep": 36700.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 24 May 2024. None of the available options keeps the ZAR 36,700 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2024-03-03",
          "balance": 142462.43,
          "min_balance": 36700.0
        },
        {
          "day": 5,
          "date": "2024-03-08",
          "balance": 136047.37,
          "min_balance": 36700.0
        },
        {
          "day": 10,
          "date": "2024-03-13",
          "balance": 122482.05,
          "min_balance": 36700.0
        },
        {
          "day": 15,
          "date": "2024-03-18",
          "balance": 121293.3,
          "min_balance": 36700.0
        },
        {
          "day": 20,
          "date": "2024-03-23",
          "balance": 115616.32,
          "min_balance": 36700.0
        },
        {
          "day": 25,
          "date": "2024-03-28",
          "balance": 111390.0,
          "min_balance": 36700.0
        },
        {
          "day": 30,
          "date": "2024-04-02",
          "balance": 97578.97,
          "min_balance": 36700.0
        },
        {
          "day": 35,
          "date": "2024-04-07",
          "balance": 90736.51,
          "min_balance": 36700.0
        },
        {
          "day": 40,
          "date": "2024-04-12",
          "balance": 78028.34,
          "min_balance": 36700.0
        },
        {
          "day": 45,
          "date": "2024-04-17",
          "balance": 75982.44,
          "min_balance": 36700.0
        },
        {
          "day": 50,
          "date": "2024-04-22",
          "balance": 73146.85,
          "min_balance": 36700.0
        },
        {
          "day": 55,
          "date": "2024-04-27",
          "balance": 66079.14,
          "min_balance": 36700.0
        },
        {
          "day": 60,
          "date": "2024-05-02",
          "balance": 52268.11,
          "min_balance": 36700.0
        },
        {
          "day": 65,
          "date": "2024-05-07",
          "balance": 45425.65,
          "min_balance": 36700.0
        },
        {
          "day": 70,
          "date": "2024-05-12",
          "balance": 32717.48,
          "min_balance": 36700.0
        },
        {
          "day": 75,
          "date": "2024-05-17",
          "balance": 30671.58,
          "min_balance": 36700.0
        },
        {
          "day": 80,
          "date": "2024-05-22",
          "balance": 27835.99,
          "min_balance": 36700.0
        },
        {
          "day": 85,
          "date": "2024-05-27",
          "balance": 20768.28,
          "min_balance": 36700.0
        },
        {
          "day": 90,
          "date": "2024-06-01",
          "balance": 18749.25,
          "min_balance": 36700.0
        }
      ]
    },
    {
      "request_id": "request_62",
      "user_id": "user_62",
      "requested_amount": 404.23,
      "currency": "USD",
      "request_type": "debt_repayment",
      "request_text": "I have USD 404.23 in mind as an extra loan payment. I need to complete it by 9 October 2025. Can I make the extra loan payment now without affecting essential expenses?",
      "allows_partial_payment": true,
      "request_date": "2025-08-05",
      "desired_completion_date": "2025-10-09",
      "home_currency": "USD",
      "current_balance": 5151.44,
      "minimum_balance_to_keep": 1300.0,
      "amount_safe_to_pay": 404.23,
      "affordability_status": "affordable_now",
      "recommended_payment_method": "full_payment",
      "payment_plan": "2025-08-05:404.23",
      "earliest_date_for_full_payment": "2025-08-05",
      "spending_changes_needed": "none",
      "decision_explanation": "Pay USD 404.23 today. This leaves at least USD 1,300 available over the next 90 days.",
      "curve": [
        {
          "day": 0,
          "date": "2025-08-05",
          "balance": 5006.44,
          "min_balance": 1300.0
        },
        {
          "day": 5,
          "date": "2025-08-10",
          "balance": 4350.05,
          "min_balance": 1300.0
        },
        {
          "day": 10,
          "date": "2025-08-15",
          "balance": 4152.07,
          "min_balance": 1300.0
        },
        {
          "day": 15,
          "date": "2025-08-20",
          "balance": 3708.99,
          "min_balance": 1300.0
        },
        {
          "day": 20,
          "date": "2025-08-25",
          "balance": 4894.03,
          "min_balance": 1300.0
        },
        {
          "day": 25,
          "date": "2025-08-30",
          "balance": 4568.93,
          "min_balance": 1300.0
        },
        {
          "day": 30,
          "date": "2025-09-04",
          "balance": 3927.69,
          "min_balance": 1300.0
        },
        {
          "day": 35,
          "date": "2025-09-09",
          "balance": 3610.26,
          "min_balance": 1300.0
        },
        {
          "day": 40,
          "date": "2025-09-14",
          "balance": 3252.45,
          "min_balance": 1300.0
        },
        {
          "day": 45,
          "date": "2025-09-19",
          "balance": 2973.9,
          "min_balance": 1300.0
        },
        {
          "day": 50,
          "date": "2025-09-24",
          "balance": 4012.27,
          "min_balance": 1300.0
        },
        {
          "day": 55,
          "date": "2025-09-29",
          "balance": 3918.87,
          "min_balance": 1300.0
        },
        {
          "day": 60,
          "date": "2025-10-04",
          "balance": 2993.94,
          "min_balance": 1300.0
        },
        {
          "day": 65,
          "date": "2025-10-09",
          "balance": 2676.51,
          "min_balance": 1300.0
        },
        {
          "day": 70,
          "date": "2025-10-14",
          "balance": 2318.7,
          "min_balance": 1300.0
        },
        {
          "day": 75,
          "date": "2025-10-19",
          "balance": 2040.15,
          "min_balance": 1300.0
        },
        {
          "day": 80,
          "date": "2025-10-24",
          "balance": 3078.52,
          "min_balance": 1300.0
        },
        {
          "day": 85,
          "date": "2025-10-29",
          "balance": 2985.12,
          "min_balance": 1300.0
        },
        {
          "day": 90,
          "date": "2025-11-03",
          "balance": 2060.19,
          "min_balance": 1300.0
        }
      ]
    },
    {
      "request_id": "request_63",
      "user_id": "user_63",
      "requested_amount": 343900.0,
      "currency": "INR",
      "request_type": "purchase",
      "request_text": "Is the laptop affordable right now, or should I wait? I need to decide by 17 September 2026. I've found a laptop for INR 343,900.",
      "allows_partial_payment": true,
      "request_date": "2026-07-07",
      "desired_completion_date": "2026-09-17",
      "home_currency": "INR",
      "current_balance": 251795.0,
      "minimum_balance_to_keep": 153500.0,
      "amount_safe_to_pay": 14490.31,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 17 September 2026. None of the available options keeps the INR 153,500 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2026-07-07",
          "balance": 243645.0,
          "min_balance": 153500.0
        },
        {
          "day": 5,
          "date": "2026-07-12",
          "balance": 191316.65,
          "min_balance": 153500.0
        },
        {
          "day": 10,
          "date": "2026-07-17",
          "balance": 542893.91,
          "min_balance": 153500.0
        },
        {
          "day": 15,
          "date": "2026-07-22",
          "balance": 520576.33,
          "min_balance": 153500.0
        },
        {
          "day": 20,
          "date": "2026-07-27",
          "balance": 485818.84,
          "min_balance": 153500.0
        },
        {
          "day": 25,
          "date": "2026-08-01",
          "balance": 472430.5,
          "min_balance": 153500.0
        },
        {
          "day": 30,
          "date": "2026-08-06",
          "balance": 388733.33,
          "min_balance": 153500.0
        },
        {
          "day": 35,
          "date": "2026-08-11",
          "balance": 352527.19,
          "min_balance": 153500.0
        },
        {
          "day": 40,
          "date": "2026-08-16",
          "balance": 506139.84,
          "min_balance": 153500.0
        },
        {
          "day": 45,
          "date": "2026-08-21",
          "balance": 496660.06,
          "min_balance": 153500.0
        },
        {
          "day": 50,
          "date": "2026-08-26",
          "balance": 454857.61,
          "min_balance": 153500.0
        },
        {
          "day": 55,
          "date": "2026-08-31",
          "balance": 435676.43,
          "min_balance": 153500.0
        },
        {
          "day": 60,
          "date": "2026-09-05",
          "balance": 351979.26,
          "min_balance": 153500.0
        },
        {
          "day": 65,
          "date": "2026-09-10",
          "balance": 326661.83,
          "min_balance": 153500.0
        },
        {
          "day": 70,
          "date": "2026-09-15",
          "balance": 474466.97,
          "min_balance": 153500.0
        },
        {
          "day": 75,
          "date": "2026-09-20",
          "balance": 459905.99,
          "min_balance": 153500.0
        },
        {
          "day": 80,
          "date": "2026-09-25",
          "balance": 418103.54,
          "min_balance": 153500.0
        },
        {
          "day": 85,
          "date": "2026-09-30",
          "balance": 398922.36,
          "min_balance": 153500.0
        },
        {
          "day": 90,
          "date": "2026-10-05",
          "balance": 315225.19,
          "min_balance": 153500.0
        }
      ]
    },
    {
      "request_id": "request_64",
      "user_id": "user_64",
      "requested_amount": 63700.0,
      "currency": "INR",
      "request_type": "other",
      "request_text": "I've been offered the annual membership for INR 63,700. Is the full membership fee affordable today, or should I wait?",
      "allows_partial_payment": false,
      "request_date": "2024-06-04",
      "desired_completion_date": "2024-08-16",
      "home_currency": "INR",
      "current_balance": 98573.01,
      "minimum_balance_to_keep": 36100.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 16 August 2024. None of the available options keeps the INR 36,100 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2024-06-04",
          "balance": 17733.13,
          "min_balance": 36100.0
        },
        {
          "day": 5,
          "date": "2024-06-09",
          "balance": 4854.24,
          "min_balance": 36100.0
        },
        {
          "day": 10,
          "date": "2024-06-14",
          "balance": -84771.65,
          "min_balance": 36100.0
        },
        {
          "day": 15,
          "date": "2024-06-19",
          "balance": -37618.77,
          "min_balance": 36100.0
        },
        {
          "day": 20,
          "date": "2024-06-24",
          "balance": -43156.46,
          "min_balance": 36100.0
        },
        {
          "day": 25,
          "date": "2024-06-29",
          "balance": -54146.82,
          "min_balance": 36100.0
        },
        {
          "day": 30,
          "date": "2024-07-04",
          "balance": -70282.76,
          "min_balance": 36100.0
        },
        {
          "day": 35,
          "date": "2024-07-09",
          "balance": -83161.65,
          "min_balance": 36100.0
        },
        {
          "day": 40,
          "date": "2024-07-14",
          "balance": -90868.28,
          "min_balance": 36100.0
        },
        {
          "day": 45,
          "date": "2024-07-19",
          "balance": -43715.4,
          "min_balance": 36100.0
        },
        {
          "day": 50,
          "date": "2024-07-24",
          "balance": -49253.09,
          "min_balance": 36100.0
        },
        {
          "day": 55,
          "date": "2024-07-29",
          "balance": -60243.45,
          "min_balance": 36100.0
        },
        {
          "day": 60,
          "date": "2024-08-03",
          "balance": -75218.77,
          "min_balance": 36100.0
        },
        {
          "day": 65,
          "date": "2024-08-08",
          "balance": -89258.28,
          "min_balance": 36100.0
        },
        {
          "day": 70,
          "date": "2024-08-13",
          "balance": -96964.91,
          "min_balance": 36100.0
        },
        {
          "day": 75,
          "date": "2024-08-18",
          "balance": -49812.03,
          "min_balance": 36100.0
        },
        {
          "day": 80,
          "date": "2024-08-23",
          "balance": -55349.72,
          "min_balance": 36100.0
        },
        {
          "day": 85,
          "date": "2024-08-28",
          "balance": -65062.14,
          "min_balance": 36100.0
        },
        {
          "day": 90,
          "date": "2024-09-02",
          "balance": -80225.16,
          "min_balance": 36100.0
        }
      ]
    },
    {
      "request_id": "request_65",
      "user_id": "user_65",
      "requested_amount": 54340.0,
      "currency": "ZAR",
      "request_type": "other",
      "request_text": "Can I pay for the annual membership now without affecting my regular expenses? The annual membership costs ZAR 54,340.",
      "allows_partial_payment": true,
      "request_date": "2025-11-06",
      "desired_completion_date": "2025-11-25",
      "home_currency": "ZAR",
      "current_balance": 28524.0,
      "minimum_balance_to_keep": 15500.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 25 November 2025. None of the available options keeps the ZAR 15,500 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2025-11-06",
          "balance": 26768.28,
          "min_balance": 15500.0
        },
        {
          "day": 5,
          "date": "2025-11-11",
          "balance": 19400.89,
          "min_balance": 15500.0
        },
        {
          "day": 10,
          "date": "2025-11-16",
          "balance": 39571.54,
          "min_balance": 15500.0
        },
        {
          "day": 15,
          "date": "2025-11-21",
          "balance": 35505.76,
          "min_balance": 15500.0
        },
        {
          "day": 20,
          "date": "2025-11-26",
          "balance": 34879.95,
          "min_balance": 15500.0
        },
        {
          "day": 25,
          "date": "2025-12-01",
          "balance": 29777.26,
          "min_balance": 15500.0
        },
        {
          "day": 30,
          "date": "2025-12-06",
          "balance": 25502.54,
          "min_balance": 15500.0
        },
        {
          "day": 35,
          "date": "2025-12-11",
          "balance": 18135.15,
          "min_balance": 15500.0
        },
        {
          "day": 40,
          "date": "2025-12-16",
          "balance": 38305.8,
          "min_balance": 15500.0
        },
        {
          "day": 45,
          "date": "2025-12-21",
          "balance": 34240.02,
          "min_balance": 15500.0
        },
        {
          "day": 50,
          "date": "2025-12-26",
          "balance": 33614.21,
          "min_balance": 15500.0
        },
        {
          "day": 55,
          "date": "2025-12-31",
          "balance": 28511.52,
          "min_balance": 15500.0
        },
        {
          "day": 60,
          "date": "2026-01-05",
          "balance": 25992.52,
          "min_balance": 15500.0
        },
        {
          "day": 65,
          "date": "2026-01-10",
          "balance": 18246.74,
          "min_balance": 15500.0
        },
        {
          "day": 70,
          "date": "2026-01-15",
          "balance": 37040.06,
          "min_balance": 15500.0
        },
        {
          "day": 75,
          "date": "2026-01-20",
          "balance": 34025.94,
          "min_balance": 15500.0
        },
        {
          "day": 80,
          "date": "2026-01-25",
          "balance": 32348.47,
          "min_balance": 15500.0
        },
        {
          "day": 85,
          "date": "2026-01-30",
          "balance": 28114.96,
          "min_balance": 15500.0
        },
        {
          "day": 90,
          "date": "2026-02-04",
          "balance": 24726.78,
          "min_balance": 15500.0
        }
      ]
    },
    {
      "request_id": "request_66",
      "user_id": "user_66",
      "requested_amount": 22200.0,
      "currency": "INR",
      "request_type": "emergency_expense",
      "request_text": "The latest estimate for the repair is INR 22,200. I need to complete it by 17 April 2026. The repair cannot wait. How much can I safely pay today?",
      "allows_partial_payment": true,
      "request_date": "2026-04-03",
      "desired_completion_date": "2026-04-17",
      "home_currency": "INR",
      "current_balance": 302520.0,
      "minimum_balance_to_keep": 80700.0,
      "amount_safe_to_pay": 22200.0,
      "affordability_status": "affordable_now",
      "recommended_payment_method": "full_payment",
      "payment_plan": "2026-04-03:22200",
      "earliest_date_for_full_payment": "2026-04-03",
      "spending_changes_needed": "none",
      "decision_explanation": "Pay INR 22,200 today. This leaves at least INR 80,700 available over the next 90 days.",
      "curve": [
        {
          "day": 0,
          "date": "2026-04-03",
          "balance": 276220.0,
          "min_balance": 80700.0
        },
        {
          "day": 5,
          "date": "2026-04-08",
          "balance": 253818.13,
          "min_balance": 80700.0
        },
        {
          "day": 10,
          "date": "2026-04-13",
          "balance": 242171.55,
          "min_balance": 80700.0
        },
        {
          "day": 15,
          "date": "2026-04-18",
          "balance": 229241.55,
          "min_balance": 80700.0
        },
        {
          "day": 20,
          "date": "2026-04-23",
          "balance": 287033.06,
          "min_balance": 80700.0
        },
        {
          "day": 25,
          "date": "2026-04-28",
          "balance": 263310.82,
          "min_balance": 80700.0
        },
        {
          "day": 30,
          "date": "2026-05-03",
          "balance": 229822.39,
          "min_balance": 80700.0
        },
        {
          "day": 35,
          "date": "2026-05-08",
          "balance": 207420.52,
          "min_balance": 80700.0
        },
        {
          "day": 40,
          "date": "2026-05-13",
          "balance": 195773.94,
          "min_balance": 80700.0
        },
        {
          "day": 45,
          "date": "2026-05-18",
          "balance": 182843.94,
          "min_balance": 80700.0
        },
        {
          "day": 50,
          "date": "2026-05-23",
          "balance": 240635.45,
          "min_balance": 80700.0
        },
        {
          "day": 55,
          "date": "2026-05-28",
          "balance": 216913.21,
          "min_balance": 80700.0
        },
        {
          "day": 60,
          "date": "2026-06-02",
          "balance": 209724.78,
          "min_balance": 80700.0
        },
        {
          "day": 65,
          "date": "2026-06-07",
          "balance": 171413.83,
          "min_balance": 80700.0
        },
        {
          "day": 70,
          "date": "2026-06-12",
          "balance": 156445.58,
          "min_balance": 80700.0
        },
        {
          "day": 75,
          "date": "2026-06-17",
          "balance": 146024.45,
          "min_balance": 80700.0
        },
        {
          "day": 80,
          "date": "2026-06-22",
          "balance": 195945.14,
          "min_balance": 80700.0
        },
        {
          "day": 85,
          "date": "2026-06-27",
          "balance": 183842.47,
          "min_balance": 80700.0
        },
        {
          "day": 90,
          "date": "2026-07-02",
          "balance": 163327.17,
          "min_balance": 80700.0
        }
      ]
    },
    {
      "request_id": "request_67",
      "user_id": "user_67",
      "requested_amount": 2094.0,
      "currency": "USD",
      "request_type": "emergency_expense",
      "request_text": "What is the most I can put toward this repair right now? I need to decide by 15 November 2024. The urgent repair will cost USD 2,094.",
      "allows_partial_payment": false,
      "request_date": "2024-09-05",
      "desired_completion_date": "2024-11-15",
      "home_currency": "USD",
      "current_balance": 1992.54,
      "minimum_balance_to_keep": 1200.0,
      "amount_safe_to_pay": 216.13,
      "affordability_status": "affordable_later",
      "recommended_payment_method": "wait",
      "payment_plan": "2024-11-15:2094",
      "earliest_date_for_full_payment": "2024-11-15",
      "spending_changes_needed": "none",
      "decision_explanation": "Pay USD 2,094 in full on 15 November 2024. Paying earlier would take the balance below the USD 1,200 minimum.",
      "curve": [
        {
          "day": 0,
          "date": "2024-09-05",
          "balance": 1949.71,
          "min_balance": 1200.0
        },
        {
          "day": 5,
          "date": "2024-09-10",
          "balance": 1676.42,
          "min_balance": 1200.0
        },
        {
          "day": 10,
          "date": "2024-09-15",
          "balance": 5356.92,
          "min_balance": 1200.0
        },
        {
          "day": 15,
          "date": "2024-09-20",
          "balance": 5045.17,
          "min_balance": 1200.0
        },
        {
          "day": 20,
          "date": "2024-09-25",
          "balance": 4869.64,
          "min_balance": 1200.0
        },
        {
          "day": 25,
          "date": "2024-09-30",
          "balance": 4503.67,
          "min_balance": 1200.0
        },
        {
          "day": 30,
          "date": "2024-10-05",
          "balance": 3844.28,
          "min_balance": 1200.0
        },
        {
          "day": 35,
          "date": "2024-10-10",
          "balance": 3570.99,
          "min_balance": 1200.0
        },
        {
          "day": 40,
          "date": "2024-10-15",
          "balance": 5203.81,
          "min_balance": 1200.0
        },
        {
          "day": 45,
          "date": "2024-10-20",
          "balance": 4892.06,
          "min_balance": 1200.0
        },
        {
          "day": 50,
          "date": "2024-10-25",
          "balance": 4716.53,
          "min_balance": 1200.0
        },
        {
          "day": 55,
          "date": "2024-10-30",
          "balance": 4350.56,
          "min_balance": 1200.0
        },
        {
          "day": 60,
          "date": "2024-11-04",
          "balance": 3734.0,
          "min_balance": 1200.0
        },
        {
          "day": 65,
          "date": "2024-11-09",
          "balance": 3417.88,
          "min_balance": 1200.0
        },
        {
          "day": 70,
          "date": "2024-11-14",
          "balance": 3157.59,
          "min_balance": 1200.0
        },
        {
          "day": 75,
          "date": "2024-11-19",
          "balance": 4836.95,
          "min_balance": 1200.0
        },
        {
          "day": 80,
          "date": "2024-11-24",
          "balance": 4563.42,
          "min_balance": 1200.0
        },
        {
          "day": 85,
          "date": "2024-11-29",
          "balance": 4236.7,
          "min_balance": 1200.0
        },
        {
          "day": 90,
          "date": "2024-12-04",
          "balance": 3580.89,
          "min_balance": 1200.0
        }
      ]
    },
    {
      "request_id": "request_68",
      "user_id": "user_68",
      "requested_amount": 2091.6,
      "currency": "USD",
      "request_type": "debt_repayment",
      "request_text": "The extra repayment I'm considering is USD 2,091.60. How much extra can I put toward the loan today?",
      "allows_partial_payment": false,
      "request_date": "2025-02-07",
      "desired_completion_date": "2025-04-16",
      "home_currency": "USD",
      "current_balance": 3657.83,
      "minimum_balance_to_keep": 1500.0,
      "amount_safe_to_pay": 295.64,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 16 April 2025. None of the available options keeps the USD 1,500 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2025-02-07",
          "balance": 3657.83,
          "min_balance": 1500.0
        },
        {
          "day": 5,
          "date": "2025-02-12",
          "balance": 3075.72,
          "min_balance": 1500.0
        },
        {
          "day": 10,
          "date": "2025-02-17",
          "balance": 2741.25,
          "min_balance": 1500.0
        },
        {
          "day": 15,
          "date": "2025-02-22",
          "balance": 2395.32,
          "min_balance": 1500.0
        },
        {
          "day": 20,
          "date": "2025-02-27",
          "balance": 4808.95,
          "min_balance": 1500.0
        },
        {
          "day": 25,
          "date": "2025-03-04",
          "balance": 3573.93,
          "min_balance": 1500.0
        },
        {
          "day": 30,
          "date": "2025-03-09",
          "balance": 3194.46,
          "min_balance": 1500.0
        },
        {
          "day": 35,
          "date": "2025-03-14",
          "balance": 2653.53,
          "min_balance": 1500.0
        },
        {
          "day": 40,
          "date": "2025-03-19",
          "balance": 2319.17,
          "min_balance": 1500.0
        },
        {
          "day": 45,
          "date": "2025-03-24",
          "balance": 4509.11,
          "min_balance": 1500.0
        },
        {
          "day": 50,
          "date": "2025-03-29",
          "balance": 4289.37,
          "min_balance": 1500.0
        },
        {
          "day": 55,
          "date": "2025-04-03",
          "balance": 3421.25,
          "min_balance": 1500.0
        },
        {
          "day": 60,
          "date": "2025-04-08",
          "balance": 3058.15,
          "min_balance": 1500.0
        },
        {
          "day": 65,
          "date": "2025-04-13",
          "balance": 2476.04,
          "min_balance": 1500.0
        },
        {
          "day": 70,
          "date": "2025-04-18",
          "balance": 2141.57,
          "min_balance": 1500.0
        },
        {
          "day": 75,
          "date": "2025-04-23",
          "balance": 4209.27,
          "min_balance": 1500.0
        },
        {
          "day": 80,
          "date": "2025-04-28",
          "balance": 4071.11,
          "min_balance": 1500.0
        },
        {
          "day": 85,
          "date": "2025-05-03",
          "balance": 3121.41,
          "min_balance": 1500.0
        },
        {
          "day": 90,
          "date": "2025-05-08",
          "balance": 2758.31,
          "min_balance": 1500.0
        }
      ]
    },
    {
      "request_id": "request_69",
      "user_id": "user_69",
      "requested_amount": 529.1,
      "currency": "EUR",
      "request_type": "investment",
      "request_text": "Would investing this amount leave my upcoming bills covered? I want to put EUR 529.10 into an investment.",
      "allows_partial_payment": false,
      "request_date": "2026-01-04",
      "desired_completion_date": "2026-01-14",
      "home_currency": "EUR",
      "current_balance": 1639.5,
      "minimum_balance_to_keep": 700.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 14 January 2026. None of the available options keeps the EUR 700 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2026-01-04",
          "balance": 1639.5,
          "min_balance": 700.0
        },
        {
          "day": 5,
          "date": "2026-01-09",
          "balance": 1432.77,
          "min_balance": 700.0
        },
        {
          "day": 10,
          "date": "2026-01-14",
          "balance": 1157.34,
          "min_balance": 700.0
        },
        {
          "day": 15,
          "date": "2026-01-19",
          "balance": 2186.51,
          "min_balance": 700.0
        },
        {
          "day": 20,
          "date": "2026-01-24",
          "balance": 2186.51,
          "min_balance": 700.0
        },
        {
          "day": 25,
          "date": "2026-01-29",
          "balance": 2033.45,
          "min_balance": 700.0
        },
        {
          "day": 30,
          "date": "2026-02-03",
          "balance": 1351.99,
          "min_balance": 700.0
        },
        {
          "day": 35,
          "date": "2026-02-08",
          "balance": 1169.26,
          "min_balance": 700.0
        },
        {
          "day": 40,
          "date": "2026-02-13",
          "balance": 906.23,
          "min_balance": 700.0
        },
        {
          "day": 45,
          "date": "2026-02-18",
          "balance": 1942.28,
          "min_balance": 700.0
        },
        {
          "day": 50,
          "date": "2026-02-23",
          "balance": 1899.0,
          "min_balance": 700.0
        },
        {
          "day": 55,
          "date": "2026-02-28",
          "balance": 1703.63,
          "min_balance": 700.0
        },
        {
          "day": 60,
          "date": "2026-03-05",
          "balance": 990.63,
          "min_balance": 700.0
        },
        {
          "day": 65,
          "date": "2026-03-10",
          "balance": 857.76,
          "min_balance": 700.0
        },
        {
          "day": 70,
          "date": "2026-03-15",
          "balance": 1733.97,
          "min_balance": 700.0
        },
        {
          "day": 75,
          "date": "2026-03-20",
          "balance": 1611.5,
          "min_balance": 700.0
        },
        {
          "day": 80,
          "date": "2026-03-25",
          "balance": 1611.5,
          "min_balance": 700.0
        },
        {
          "day": 85,
          "date": "2026-03-30",
          "balance": 1416.13,
          "min_balance": 700.0
        },
        {
          "day": 90,
          "date": "2026-04-04",
          "balance": 776.98,
          "min_balance": 700.0
        }
      ]
    },
    {
      "request_id": "request_70",
      "user_id": "user_70",
      "requested_amount": 243900.0,
      "currency": "INR",
      "request_type": "other",
      "request_text": "The full-year membership is INR 243,900. I need to complete it by 15 February 2025. Can I pay for the annual membership now without affecting my regular expenses?",
      "allows_partial_payment": false,
      "request_date": "2024-12-06",
      "desired_completion_date": "2025-02-15",
      "home_currency": "INR",
      "current_balance": 208360.0,
      "minimum_balance_to_keep": 115000.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 15 February 2025. None of the available options keeps the INR 115,000 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2024-12-06",
          "balance": 202135.78,
          "min_balance": 115000.0
        },
        {
          "day": 5,
          "date": "2024-12-11",
          "balance": 182814.7,
          "min_balance": 115000.0
        },
        {
          "day": 10,
          "date": "2024-12-16",
          "balance": 349821.91,
          "min_balance": 115000.0
        },
        {
          "day": 15,
          "date": "2024-12-21",
          "balance": 329176.69,
          "min_balance": 115000.0
        },
        {
          "day": 20,
          "date": "2024-12-26",
          "balance": 317305.31,
          "min_balance": 115000.0
        },
        {
          "day": 25,
          "date": "2024-12-31",
          "balance": 283228.82,
          "min_balance": 115000.0
        },
        {
          "day": 30,
          "date": "2025-01-05",
          "balance": 144867.89,
          "min_balance": 115000.0
        },
        {
          "day": 35,
          "date": "2025-01-10",
          "balance": 119322.59,
          "min_balance": 115000.0
        },
        {
          "day": 40,
          "date": "2025-01-15",
          "balance": 290870.39,
          "min_balance": 115000.0
        },
        {
          "day": 45,
          "date": "2025-01-20",
          "balance": 265684.58,
          "min_balance": 115000.0
        },
        {
          "day": 50,
          "date": "2025-01-25",
          "balance": 253813.2,
          "min_balance": 115000.0
        },
        {
          "day": 55,
          "date": "2025-01-30",
          "balance": 227869.46,
          "min_balance": 115000.0
        },
        {
          "day": 60,
          "date": "2025-02-04",
          "balance": 81375.78,
          "min_balance": 115000.0
        },
        {
          "day": 65,
          "date": "2025-02-09",
          "balance": 55830.48,
          "min_balance": 115000.0
        },
        {
          "day": 70,
          "date": "2025-02-14",
          "balance": 24378.28,
          "min_balance": 115000.0
        },
        {
          "day": 75,
          "date": "2025-02-19",
          "balance": 202192.47,
          "min_balance": 115000.0
        },
        {
          "day": 80,
          "date": "2025-02-24",
          "balance": 190321.09,
          "min_balance": 115000.0
        },
        {
          "day": 85,
          "date": "2025-03-01",
          "balance": 156244.6,
          "min_balance": 115000.0
        },
        {
          "day": 90,
          "date": "2025-03-06",
          "balance": 11659.45,
          "min_balance": 115000.0
        }
      ]
    },
    {
      "request_id": "request_71",
      "user_id": "user_71",
      "requested_amount": 21451000.0,
      "currency": "IDR",
      "request_type": "housing",
      "request_text": "Can I pay the rental deposit by the requested date? I need to decide by 28 May 2025. I need to pay a IDR 21,451,000 rental deposit.",
      "allows_partial_payment": false,
      "request_date": "2025-05-03",
      "desired_completion_date": "2025-05-28",
      "home_currency": "IDR",
      "current_balance": 16369850.0,
      "minimum_balance_to_keep": 8884800.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 28 May 2025. None of the available options keeps the IDR 8,884,800 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2025-05-03",
          "balance": 16369850.0,
          "min_balance": 8884800.0
        },
        {
          "day": 5,
          "date": "2025-05-08",
          "balance": 11091154.16,
          "min_balance": 8884800.0
        },
        {
          "day": 10,
          "date": "2025-05-13",
          "balance": 10041078.33,
          "min_balance": 8884800.0
        },
        {
          "day": 15,
          "date": "2025-05-18",
          "balance": 18288106.63,
          "min_balance": 8884800.0
        },
        {
          "day": 20,
          "date": "2025-05-23",
          "balance": 16031175.43,
          "min_balance": 8884800.0
        },
        {
          "day": 25,
          "date": "2025-05-28",
          "balance": 14037035.63,
          "min_balance": 8884800.0
        },
        {
          "day": 30,
          "date": "2025-06-02",
          "balance": 12297622.57,
          "min_balance": 8884800.0
        },
        {
          "day": 35,
          "date": "2025-06-07",
          "balance": 8304309.55,
          "min_balance": 8884800.0
        },
        {
          "day": 40,
          "date": "2025-06-12",
          "balance": 5968850.9,
          "min_balance": 8884800.0
        },
        {
          "day": 45,
          "date": "2025-06-17",
          "balance": 14779264.53,
          "min_balance": 8884800.0
        },
        {
          "day": 50,
          "date": "2025-06-22",
          "balance": 12227150.35,
          "min_balance": 8884800.0
        },
        {
          "day": 55,
          "date": "2025-06-27",
          "balance": 10525215.88,
          "min_balance": 8884800.0
        },
        {
          "day": 60,
          "date": "2025-07-02",
          "balance": 8225395.14,
          "min_balance": 8884800.0
        },
        {
          "day": 65,
          "date": "2025-07-07",
          "balance": 4232082.12,
          "min_balance": 8884800.0
        },
        {
          "day": 70,
          "date": "2025-07-12",
          "balance": 1896623.47,
          "min_balance": 8884800.0
        },
        {
          "day": 75,
          "date": "2025-07-17",
          "balance": 10707037.1,
          "min_balance": 8884800.0
        },
        {
          "day": 80,
          "date": "2025-07-22",
          "balance": 8154922.92,
          "min_balance": 8884800.0
        },
        {
          "day": 85,
          "date": "2025-07-27",
          "balance": 6452988.45,
          "min_balance": 8884800.0
        },
        {
          "day": 90,
          "date": "2025-08-01",
          "balance": 4153167.71,
          "min_balance": 8884800.0
        }
      ]
    },
    {
      "request_id": "request_72",
      "user_id": "user_72",
      "requested_amount": 11330.0,
      "currency": "ZAR",
      "request_type": "family_transfer",
      "request_text": "I'm planning to send my family ZAR 11,330. Can I make the full transfer without falling short on my own bills?",
      "allows_partial_payment": false,
      "request_date": "2026-07-05",
      "desired_completion_date": "2026-07-14",
      "home_currency": "ZAR",
      "current_balance": 30337.13,
      "minimum_balance_to_keep": 12200.0,
      "amount_safe_to_pay": 4192.45,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 14 July 2026. None of the available options keeps the ZAR 12,200 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2026-07-05",
          "balance": 29298.12,
          "min_balance": 12200.0
        },
        {
          "day": 5,
          "date": "2026-07-10",
          "balance": 24960.47,
          "min_balance": 12200.0
        },
        {
          "day": 10,
          "date": "2026-07-15",
          "balance": 40834.33,
          "min_balance": 12200.0
        },
        {
          "day": 15,
          "date": "2026-07-20",
          "balance": 39912.21,
          "min_balance": 12200.0
        },
        {
          "day": 20,
          "date": "2026-07-25",
          "balance": 38806.71,
          "min_balance": 12200.0
        },
        {
          "day": 25,
          "date": "2026-07-30",
          "balance": 34485.14,
          "min_balance": 12200.0
        },
        {
          "day": 30,
          "date": "2026-08-04",
          "balance": 27251.2,
          "min_balance": 12200.0
        },
        {
          "day": 35,
          "date": "2026-08-09",
          "balance": 23218.74,
          "min_balance": 12200.0
        },
        {
          "day": 40,
          "date": "2026-08-14",
          "balance": 19478.38,
          "min_balance": 12200.0
        },
        {
          "day": 45,
          "date": "2026-08-19",
          "balance": 36826.28,
          "min_balance": 12200.0
        },
        {
          "day": 50,
          "date": "2026-08-24",
          "balance": 36432.78,
          "min_balance": 12200.0
        },
        {
          "day": 55,
          "date": "2026-08-29",
          "balance": 33113.57,
          "min_balance": 12200.0
        },
        {
          "day": 60,
          "date": "2026-09-03",
          "balance": 24165.27,
          "min_balance": 12200.0
        },
        {
          "day": 65,
          "date": "2026-09-08",
          "balance": 20132.81,
          "min_balance": 12200.0
        },
        {
          "day": 70,
          "date": "2026-09-13",
          "balance": 17020.39,
          "min_balance": 12200.0
        },
        {
          "day": 75,
          "date": "2026-09-18",
          "balance": 34140.57,
          "min_balance": 12200.0
        },
        {
          "day": 80,
          "date": "2026-09-23",
          "balance": 33346.85,
          "min_balance": 12200.0
        },
        {
          "day": 85,
          "date": "2026-09-28",
          "balance": 30409.31,
          "min_balance": 12200.0
        },
        {
          "day": 90,
          "date": "2026-10-03",
          "balance": 21079.34,
          "min_balance": 12200.0
        }
      ]
    },
    {
      "request_id": "request_73",
      "user_id": "user_73",
      "requested_amount": 71400.0,
      "currency": "INR",
      "request_type": "emergency_expense",
      "request_text": "Can I cover the full repair now and still manage my essential expenses? The latest estimate for the repair is INR 71,400.",
      "allows_partial_payment": false,
      "request_date": "2023-01-20",
      "desired_completion_date": "2023-02-13",
      "home_currency": "INR",
      "current_balance": 278542.5,
      "minimum_balance_to_keep": 103200.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 13 February 2023. None of the available options keeps the INR 103,200 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2023-01-20",
          "balance": 278542.5,
          "min_balance": 103200.0
        },
        {
          "day": 5,
          "date": "2023-01-25",
          "balance": 263302.69,
          "min_balance": 103200.0
        },
        {
          "day": 10,
          "date": "2023-01-30",
          "balance": 244720.36,
          "min_balance": 103200.0
        },
        {
          "day": 15,
          "date": "2023-02-04",
          "balance": 187695.51,
          "min_balance": 103200.0
        },
        {
          "day": 20,
          "date": "2023-02-09",
          "balance": 172035.55,
          "min_balance": 103200.0
        },
        {
          "day": 25,
          "date": "2023-02-14",
          "balance": 129291.83,
          "min_balance": 103200.0
        },
        {
          "day": 30,
          "date": "2023-02-19",
          "balance": 243855.69,
          "min_balance": 103200.0
        },
        {
          "day": 35,
          "date": "2023-02-24",
          "balance": 232265.88,
          "min_balance": 103200.0
        },
        {
          "day": 40,
          "date": "2023-03-01",
          "balance": 210695.4,
          "min_balance": 103200.0
        },
        {
          "day": 45,
          "date": "2023-03-06",
          "balance": 149071.29,
          "min_balance": 103200.0
        },
        {
          "day": 50,
          "date": "2023-03-11",
          "balance": 125202.74,
          "min_balance": 103200.0
        },
        {
          "day": 55,
          "date": "2023-03-16",
          "balance": 223289.2,
          "min_balance": 103200.0
        },
        {
          "day": 60,
          "date": "2023-03-21",
          "balance": 203807.3,
          "min_balance": 103200.0
        },
        {
          "day": 65,
          "date": "2023-03-26",
          "balance": 197360.3,
          "min_balance": 103200.0
        },
        {
          "day": 70,
          "date": "2023-03-31",
          "balance": 182646.74,
          "min_balance": 103200.0
        },
        {
          "day": 75,
          "date": "2023-04-05",
          "balance": 125621.89,
          "min_balance": 103200.0
        },
        {
          "day": 80,
          "date": "2023-04-10",
          "balance": 109961.93,
          "min_balance": 103200.0
        },
        {
          "day": 85,
          "date": "2023-04-15",
          "balance": 196112.43,
          "min_balance": 103200.0
        },
        {
          "day": 90,
          "date": "2023-04-20",
          "balance": 181782.07,
          "min_balance": 103200.0
        }
      ]
    },
    {
      "request_id": "request_74",
      "user_id": "user_74",
      "requested_amount": 5010.0,
      "currency": "ZAR",
      "request_type": "debt_repayment",
      "request_text": "I would like to repay an additional ZAR 5,010. I need to complete it by 21 October 2025. Would paying this much toward the loan leave enough for the rest of the month?",
      "allows_partial_payment": true,
      "request_date": "2025-08-04",
      "desired_completion_date": "2025-10-21",
      "home_currency": "ZAR",
      "current_balance": 70056.9,
      "minimum_balance_to_keep": 21900.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 21 October 2025. None of the available options keeps the ZAR 21,900 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2025-08-04",
          "balance": 70056.9,
          "min_balance": 21900.0
        },
        {
          "day": 5,
          "date": "2025-08-09",
          "balance": 62615.37,
          "min_balance": 21900.0
        },
        {
          "day": 10,
          "date": "2025-08-14",
          "balance": 58770.01,
          "min_balance": 21900.0
        },
        {
          "day": 15,
          "date": "2025-08-19",
          "balance": 55889.6,
          "min_balance": 21900.0
        },
        {
          "day": 20,
          "date": "2025-08-24",
          "balance": 63019.7,
          "min_balance": 21900.0
        },
        {
          "day": 25,
          "date": "2025-08-29",
          "balance": 58906.64,
          "min_balance": 21900.0
        },
        {
          "day": 30,
          "date": "2025-09-03",
          "balance": 50126.03,
          "min_balance": 21900.0
        },
        {
          "day": 35,
          "date": "2025-09-08",
          "balance": 44917.81,
          "min_balance": 21900.0
        },
        {
          "day": 40,
          "date": "2025-09-13",
          "balance": 39626.71,
          "min_balance": 21900.0
        },
        {
          "day": 45,
          "date": "2025-09-18",
          "balance": 37019.48,
          "min_balance": 21900.0
        },
        {
          "day": 50,
          "date": "2025-09-23",
          "balance": 43901.98,
          "min_balance": 21900.0
        },
        {
          "day": 55,
          "date": "2025-09-28",
          "balance": 40652.2,
          "min_balance": 21900.0
        },
        {
          "day": 60,
          "date": "2025-10-03",
          "balance": 30195.16,
          "min_balance": 21900.0
        },
        {
          "day": 65,
          "date": "2025-10-08",
          "balance": 24986.94,
          "min_balance": 21900.0
        },
        {
          "day": 70,
          "date": "2025-10-13",
          "balance": 19695.84,
          "min_balance": 21900.0
        },
        {
          "day": 75,
          "date": "2025-10-18",
          "balance": 17088.61,
          "min_balance": 21900.0
        },
        {
          "day": 80,
          "date": "2025-10-23",
          "balance": 23971.11,
          "min_balance": 21900.0
        },
        {
          "day": 85,
          "date": "2025-10-28",
          "balance": 20721.33,
          "min_balance": 21900.0
        },
        {
          "day": 90,
          "date": "2025-11-02",
          "balance": 17854.29,
          "min_balance": 21900.0
        }
      ]
    },
    {
      "request_id": "request_75",
      "user_id": "user_75",
      "requested_amount": 28270.0,
      "currency": "ZAR",
      "request_type": "emergency_expense",
      "request_text": "Should I pay for the repair in full, split the payment, or wait? I need to decide by 12 June 2026. I've received a repair quote for ZAR 28,270.",
      "allows_partial_payment": false,
      "request_date": "2026-04-06",
      "desired_completion_date": "2026-06-12",
      "home_currency": "ZAR",
      "current_balance": 145867.87,
      "minimum_balance_to_keep": 39000.0,
      "amount_safe_to_pay": 28270.0,
      "affordability_status": "affordable_with_plan",
      "recommended_payment_method": "installments",
      "payment_plan": "2026-04-09:9800.27|2026-05-09:9800.27|2026-06-08:9800.27",
      "earliest_date_for_full_payment": "2026-04-06",
      "spending_changes_needed": "none",
      "decision_explanation": "Use 3 installments of ZAR 9,800.27, starting 9 April 2026. This leaves at least ZAR 39,000 available.",
      "curve": [
        {
          "day": 0,
          "date": "2026-04-06",
          "balance": 145867.87,
          "min_balance": 39000.0
        },
        {
          "day": 5,
          "date": "2026-04-11",
          "balance": 139624.63,
          "min_balance": 39000.0
        },
        {
          "day": 10,
          "date": "2026-04-16",
          "balance": 182804.2,
          "min_balance": 39000.0
        },
        {
          "day": 15,
          "date": "2026-04-21",
          "balance": 179578.4,
          "min_balance": 39000.0
        },
        {
          "day": 20,
          "date": "2026-04-26",
          "balance": 173810.97,
          "min_balance": 39000.0
        },
        {
          "day": 25,
          "date": "2026-05-01",
          "balance": 165069.84,
          "min_balance": 39000.0
        },
        {
          "day": 30,
          "date": "2026-05-06",
          "balance": 145120.65,
          "min_balance": 39000.0
        },
        {
          "day": 35,
          "date": "2026-05-11",
          "balance": 138877.41,
          "min_balance": 39000.0
        },
        {
          "day": 40,
          "date": "2026-05-16",
          "balance": 182056.98,
          "min_balance": 39000.0
        },
        {
          "day": 45,
          "date": "2026-05-21",
          "balance": 178831.18,
          "min_balance": 39000.0
        },
        {
          "day": 50,
          "date": "2026-05-26",
          "balance": 173063.75,
          "min_balance": 39000.0
        },
        {
          "day": 55,
          "date": "2026-05-31",
          "balance": 166690.19,
          "min_balance": 39000.0
        },
        {
          "day": 60,
          "date": "2026-06-05",
          "balance": 144373.43,
          "min_balance": 39000.0
        },
        {
          "day": 65,
          "date": "2026-06-10",
          "balance": 139089.39,
          "min_balance": 39000.0
        },
        {
          "day": 70,
          "date": "2026-06-15",
          "balance": 182474.74,
          "min_balance": 39000.0
        },
        {
          "day": 75,
          "date": "2026-06-20",
          "balance": 180017.19,
          "min_balance": 39000.0
        },
        {
          "day": 80,
          "date": "2026-06-25",
          "balance": 172316.53,
          "min_balance": 39000.0
        },
        {
          "day": 85,
          "date": "2026-06-30",
          "balance": 165942.97,
          "min_balance": 39000.0
        },
        {
          "day": 90,
          "date": "2026-07-05",
          "balance": 143626.21,
          "min_balance": 39000.0
        }
      ]
    },
    {
      "request_id": "request_76",
      "user_id": "user_76",
      "requested_amount": 4455.6,
      "currency": "USD",
      "request_type": "other",
      "request_text": "Renewing the membership would cost USD 4,455.60. How much can I safely pay toward the membership now?",
      "allows_partial_payment": false,
      "request_date": "2024-06-03",
      "desired_completion_date": "2024-07-30",
      "home_currency": "USD",
      "current_balance": 3338.8,
      "minimum_balance_to_keep": 1800.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 30 July 2024. None of the available options keeps the USD 1,800 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2024-06-03",
          "balance": 3240.49,
          "min_balance": 1800.0
        },
        {
          "day": 5,
          "date": "2024-06-08",
          "balance": 2790.82,
          "min_balance": 1800.0
        },
        {
          "day": 10,
          "date": "2024-06-13",
          "balance": 2265.08,
          "min_balance": 1800.0
        },
        {
          "day": 15,
          "date": "2024-06-18",
          "balance": 1899.05,
          "min_balance": 1800.0
        },
        {
          "day": 20,
          "date": "2024-06-23",
          "balance": 1800.96,
          "min_balance": 1800.0
        },
        {
          "day": 25,
          "date": "2024-06-28",
          "balance": 3179.0,
          "min_balance": 1800.0
        },
        {
          "day": 30,
          "date": "2024-07-03",
          "balance": 1939.35,
          "min_balance": 1800.0
        },
        {
          "day": 35,
          "date": "2024-07-08",
          "balance": 1489.68,
          "min_balance": 1800.0
        },
        {
          "day": 40,
          "date": "2024-07-13",
          "balance": 963.94,
          "min_balance": 1800.0
        },
        {
          "day": 45,
          "date": "2024-07-18",
          "balance": 597.91,
          "min_balance": 1800.0
        },
        {
          "day": 50,
          "date": "2024-07-23",
          "balance": 499.82,
          "min_balance": 1800.0
        },
        {
          "day": 55,
          "date": "2024-07-28",
          "balance": 1877.86,
          "min_balance": 1800.0
        },
        {
          "day": 60,
          "date": "2024-08-02",
          "balance": 736.52,
          "min_balance": 1800.0
        },
        {
          "day": 65,
          "date": "2024-08-07",
          "balance": 334.21,
          "min_balance": 1800.0
        },
        {
          "day": 70,
          "date": "2024-08-12",
          "balance": -159.78,
          "min_balance": 1800.0
        },
        {
          "day": 75,
          "date": "2024-08-17",
          "balance": -557.16,
          "min_balance": 1800.0
        },
        {
          "day": 80,
          "date": "2024-08-22",
          "balance": -801.32,
          "min_balance": 1800.0
        },
        {
          "day": 85,
          "date": "2024-08-27",
          "balance": 677.15,
          "min_balance": 1800.0
        },
        {
          "day": 90,
          "date": "2024-09-01",
          "balance": -564.62,
          "min_balance": 1800.0
        }
      ]
    },
    {
      "request_id": "request_77",
      "user_id": "user_77",
      "requested_amount": 60700.0,
      "currency": "INR",
      "request_type": "housing",
      "request_text": "How much of the rental deposit can I safely pay today? The rental deposit is INR 60,700.",
      "allows_partial_payment": false,
      "request_date": "2025-11-05",
      "desired_completion_date": "2025-11-14",
      "home_currency": "INR",
      "current_balance": 189860.5,
      "minimum_balance_to_keep": 82200.0,
      "amount_safe_to_pay": 11970.79,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 14 November 2025. None of the available options keeps the INR 82,200 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2025-11-05",
          "balance": 187012.34,
          "min_balance": 82200.0
        },
        {
          "day": 5,
          "date": "2025-11-10",
          "balance": 169435.05,
          "min_balance": 82200.0
        },
        {
          "day": 10,
          "date": "2025-11-15",
          "balance": 239806.47,
          "min_balance": 82200.0
        },
        {
          "day": 15,
          "date": "2025-11-20",
          "balance": 229809.41,
          "min_balance": 82200.0
        },
        {
          "day": 20,
          "date": "2025-11-25",
          "balance": 226044.78,
          "min_balance": 82200.0
        },
        {
          "day": 25,
          "date": "2025-11-30",
          "balance": 212697.36,
          "min_balance": 82200.0
        },
        {
          "day": 30,
          "date": "2025-12-05",
          "balance": 169694.5,
          "min_balance": 82200.0
        },
        {
          "day": 35,
          "date": "2025-12-10",
          "balance": 152117.21,
          "min_balance": 82200.0
        },
        {
          "day": 40,
          "date": "2025-12-15",
          "balance": 222488.63,
          "min_balance": 82200.0
        },
        {
          "day": 45,
          "date": "2025-12-20",
          "balance": 212491.57,
          "min_balance": 82200.0
        },
        {
          "day": 50,
          "date": "2025-12-25",
          "balance": 208726.94,
          "min_balance": 82200.0
        },
        {
          "day": 55,
          "date": "2025-12-30",
          "balance": 195379.52,
          "min_balance": 82200.0
        },
        {
          "day": 60,
          "date": "2026-01-04",
          "balance": 155224.82,
          "min_balance": 82200.0
        },
        {
          "day": 65,
          "date": "2026-01-09",
          "balance": 142659.7,
          "min_balance": 82200.0
        },
        {
          "day": 70,
          "date": "2026-01-14",
          "balance": 94170.79,
          "min_balance": 82200.0
        },
        {
          "day": 75,
          "date": "2026-01-19",
          "balance": 199105.6,
          "min_balance": 82200.0
        },
        {
          "day": 80,
          "date": "2026-01-24",
          "balance": 191409.1,
          "min_balance": 82200.0
        },
        {
          "day": 85,
          "date": "2026-01-29",
          "balance": 180296.35,
          "min_balance": 82200.0
        },
        {
          "day": 90,
          "date": "2026-02-03",
          "balance": 141814.15,
          "min_balance": 82200.0
        }
      ]
    },
    {
      "request_id": "request_78",
      "user_id": "user_78",
      "requested_amount": 50200.0,
      "currency": "INR",
      "request_type": "purchase",
      "request_text": "The laptop I'm looking at is INR 50,200. I need to complete it by 14 October 2025. Is the laptop affordable right now, or should I wait?",
      "allows_partial_payment": false,
      "request_date": "2025-10-02",
      "desired_completion_date": "2025-10-14",
      "home_currency": "INR",
      "current_balance": 156676.0,
      "minimum_balance_to_keep": 55200.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 14 October 2025. None of the available options keeps the INR 55,200 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2025-10-02",
          "balance": 154004.24,
          "min_balance": 55200.0
        },
        {
          "day": 5,
          "date": "2025-10-07",
          "balance": 113529.6,
          "min_balance": 55200.0
        },
        {
          "day": 10,
          "date": "2025-10-12",
          "balance": 99526.28,
          "min_balance": 55200.0
        },
        {
          "day": 15,
          "date": "2025-10-17",
          "balance": 177946.85,
          "min_balance": 55200.0
        },
        {
          "day": 20,
          "date": "2025-10-22",
          "balance": 170202.23,
          "min_balance": 55200.0
        },
        {
          "day": 25,
          "date": "2025-10-27",
          "balance": 157265.2,
          "min_balance": 55200.0
        },
        {
          "day": 30,
          "date": "2025-11-01",
          "balance": 111011.64,
          "min_balance": 55200.0
        },
        {
          "day": 35,
          "date": "2025-11-06",
          "balance": 73406.19,
          "min_balance": 55200.0
        },
        {
          "day": 40,
          "date": "2025-11-11",
          "balance": 58856.28,
          "min_balance": 55200.0
        },
        {
          "day": 45,
          "date": "2025-11-16",
          "balance": 133880.1,
          "min_balance": 55200.0
        },
        {
          "day": 50,
          "date": "2025-11-21",
          "balance": 126759.17,
          "min_balance": 55200.0
        },
        {
          "day": 55,
          "date": "2025-11-26",
          "balance": 116615.75,
          "min_balance": 55200.0
        },
        {
          "day": 60,
          "date": "2025-12-01",
          "balance": 65347.27,
          "min_balance": 55200.0
        },
        {
          "day": 65,
          "date": "2025-12-06",
          "balance": 27741.82,
          "min_balance": 55200.0
        },
        {
          "day": 70,
          "date": "2025-12-11",
          "balance": 13191.91,
          "min_balance": 55200.0
        },
        {
          "day": 75,
          "date": "2025-12-16",
          "balance": 88215.73,
          "min_balance": 55200.0
        },
        {
          "day": 80,
          "date": "2025-12-21",
          "balance": 81094.8,
          "min_balance": 55200.0
        },
        {
          "day": 85,
          "date": "2025-12-26",
          "balance": 70951.38,
          "min_balance": 55200.0
        },
        {
          "day": 90,
          "date": "2025-12-31",
          "balance": 25549.44,
          "min_balance": 55200.0
        }
      ]
    },
    {
      "request_id": "request_79",
      "user_id": "user_79",
      "requested_amount": 2151.6,
      "currency": "EUR",
      "request_type": "purchase",
      "request_text": "Can I buy the laptop now without making next month's bills tight? I need to decide by 1 November 2024. I'm considering a EUR 2,151.60 laptop.",
      "allows_partial_payment": true,
      "request_date": "2024-09-04",
      "desired_completion_date": "2024-11-01",
      "home_currency": "EUR",
      "current_balance": 2104.08,
      "minimum_balance_to_keep": 1000.0,
      "amount_safe_to_pay": 181.94,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 1 November 2024. None of the available options keeps the EUR 1,000 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2024-09-04",
          "balance": 1675.76,
          "min_balance": 1000.0
        },
        {
          "day": 5,
          "date": "2024-09-09",
          "balance": 1464.7,
          "min_balance": 1000.0
        },
        {
          "day": 10,
          "date": "2024-09-14",
          "balance": 1181.94,
          "min_balance": 1000.0
        },
        {
          "day": 15,
          "date": "2024-09-19",
          "balance": 3744.2,
          "min_balance": 1000.0
        },
        {
          "day": 20,
          "date": "2024-09-24",
          "balance": 3336.93,
          "min_balance": 1000.0
        },
        {
          "day": 25,
          "date": "2024-09-29",
          "balance": 3263.48,
          "min_balance": 1000.0
        },
        {
          "day": 30,
          "date": "2024-10-04",
          "balance": 2516.65,
          "min_balance": 1000.0
        },
        {
          "day": 35,
          "date": "2024-10-09",
          "balance": 2305.59,
          "min_balance": 1000.0
        },
        {
          "day": 40,
          "date": "2024-10-14",
          "balance": 2022.83,
          "min_balance": 1000.0
        },
        {
          "day": 45,
          "date": "2024-10-19",
          "balance": 3271.33,
          "min_balance": 1000.0
        },
        {
          "day": 50,
          "date": "2024-10-24",
          "balance": 2864.06,
          "min_balance": 1000.0
        },
        {
          "day": 55,
          "date": "2024-10-29",
          "balance": 2790.61,
          "min_balance": 1000.0
        },
        {
          "day": 60,
          "date": "2024-11-03",
          "balance": 2472.1,
          "min_balance": 1000.0
        },
        {
          "day": 65,
          "date": "2024-11-08",
          "balance": 1884.72,
          "min_balance": 1000.0
        },
        {
          "day": 70,
          "date": "2024-11-13",
          "balance": 1672.79,
          "min_balance": 1000.0
        },
        {
          "day": 75,
          "date": "2024-11-18",
          "balance": 2798.46,
          "min_balance": 1000.0
        },
        {
          "day": 80,
          "date": "2024-11-23",
          "balance": 2391.19,
          "min_balance": 1000.0
        },
        {
          "day": 85,
          "date": "2024-11-28",
          "balance": 2317.74,
          "min_balance": 1000.0
        },
        {
          "day": 90,
          "date": "2024-12-03",
          "balance": 1999.23,
          "min_balance": 1000.0
        }
      ]
    },
    {
      "request_id": "request_80",
      "user_id": "user_80",
      "requested_amount": 217500.0,
      "currency": "INR",
      "request_type": "debt_repayment",
      "request_text": "I'm considering paying an extra INR 217,500 off the loan. Can I clear this additional amount without putting upcoming bills at risk?",
      "allows_partial_payment": false,
      "request_date": "2025-02-06",
      "desired_completion_date": "2025-02-21",
      "home_currency": "INR",
      "current_balance": 280125.0,
      "minimum_balance_to_keep": 121300.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 21 February 2025. None of the available options keeps the INR 121,300 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2025-02-06",
          "balance": 268242.07,
          "min_balance": 121300.0
        },
        {
          "day": 5,
          "date": "2025-02-11",
          "balance": 231799.35,
          "min_balance": 121300.0
        },
        {
          "day": 10,
          "date": "2025-02-16",
          "balance": 210374.36,
          "min_balance": 121300.0
        },
        {
          "day": 15,
          "date": "2025-02-21",
          "balance": 189476.68,
          "min_balance": 121300.0
        },
        {
          "day": 20,
          "date": "2025-02-26",
          "balance": 222415.63,
          "min_balance": 121300.0
        },
        {
          "day": 25,
          "date": "2025-03-03",
          "balance": 120323.11,
          "min_balance": 121300.0
        },
        {
          "day": 30,
          "date": "2025-03-08",
          "balance": 83451.79,
          "min_balance": 121300.0
        },
        {
          "day": 35,
          "date": "2025-03-13",
          "balance": 67959.07,
          "min_balance": 121300.0
        },
        {
          "day": 40,
          "date": "2025-03-18",
          "balance": 47654.08,
          "min_balance": 121300.0
        },
        {
          "day": 45,
          "date": "2025-03-23",
          "balance": 26756.4,
          "min_balance": 121300.0
        },
        {
          "day": 50,
          "date": "2025-03-28",
          "balance": 49371.6,
          "min_balance": 121300.0
        },
        {
          "day": 55,
          "date": "2025-04-02",
          "balance": -31314.91,
          "min_balance": 121300.0
        },
        {
          "day": 60,
          "date": "2025-04-07",
          "balance": -79268.49,
          "min_balance": 121300.0
        },
        {
          "day": 65,
          "date": "2025-04-12",
          "balance": -94761.21,
          "min_balance": 121300.0
        },
        {
          "day": 70,
          "date": "2025-04-17",
          "balance": -115066.2,
          "min_balance": 121300.0
        },
        {
          "day": 75,
          "date": "2025-04-22",
          "balance": -135963.88,
          "min_balance": 121300.0
        },
        {
          "day": 80,
          "date": "2025-04-27",
          "balance": -108289.01,
          "min_balance": 121300.0
        },
        {
          "day": 85,
          "date": "2025-05-02",
          "balance": -194035.19,
          "min_balance": 121300.0
        },
        {
          "day": 90,
          "date": "2025-05-07",
          "balance": -241988.77,
          "min_balance": 121300.0
        }
      ]
    },
    {
      "request_id": "request_81",
      "user_id": "user_81",
      "requested_amount": 2076.0,
      "currency": "USD",
      "request_type": "travel",
      "request_text": "Does paying for the trip now leave enough for the rest of the month? I'm planning a family trip that costs USD 2,076.",
      "allows_partial_payment": false,
      "request_date": "2026-07-03",
      "desired_completion_date": "2026-07-14",
      "home_currency": "USD",
      "current_balance": 5028.25,
      "minimum_balance_to_keep": 1600.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 14 July 2026. None of the available options keeps the USD 1,600 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2026-07-03",
          "balance": 4788.82,
          "min_balance": 1600.0
        },
        {
          "day": 5,
          "date": "2026-07-08",
          "balance": 4257.87,
          "min_balance": 1600.0
        },
        {
          "day": 10,
          "date": "2026-07-13",
          "balance": 3482.15,
          "min_balance": 1600.0
        },
        {
          "day": 15,
          "date": "2026-07-18",
          "balance": 5892.58,
          "min_balance": 1600.0
        },
        {
          "day": 20,
          "date": "2026-07-23",
          "balance": 5626.95,
          "min_balance": 1600.0
        },
        {
          "day": 25,
          "date": "2026-07-28",
          "balance": 5223.23,
          "min_balance": 1600.0
        },
        {
          "day": 30,
          "date": "2026-08-02",
          "balance": 3735.99,
          "min_balance": 1600.0
        },
        {
          "day": 35,
          "date": "2026-08-07",
          "balance": 3311.61,
          "min_balance": 1600.0
        },
        {
          "day": 40,
          "date": "2026-08-12",
          "balance": 2535.89,
          "min_balance": 1600.0
        },
        {
          "day": 45,
          "date": "2026-08-17",
          "balance": 5116.14,
          "min_balance": 1600.0
        },
        {
          "day": 50,
          "date": "2026-08-22",
          "balance": 4757.02,
          "min_balance": 1600.0
        },
        {
          "day": 55,
          "date": "2026-08-27",
          "balance": 4360.96,
          "min_balance": 1600.0
        },
        {
          "day": 60,
          "date": "2026-09-01",
          "balance": 3971.54,
          "min_balance": 1600.0
        },
        {
          "day": 65,
          "date": "2026-09-06",
          "balance": 2365.35,
          "min_balance": 1600.0
        },
        {
          "day": 70,
          "date": "2026-09-11",
          "balance": 1770.29,
          "min_balance": 1600.0
        },
        {
          "day": 75,
          "date": "2026-09-16",
          "balance": 4317.76,
          "min_balance": 1600.0
        },
        {
          "day": 80,
          "date": "2026-09-21",
          "balance": 3921.61,
          "min_balance": 1600.0
        },
        {
          "day": 85,
          "date": "2026-09-26",
          "balance": 3543.16,
          "min_balance": 1600.0
        },
        {
          "day": 90,
          "date": "2026-10-01",
          "balance": 3025.28,
          "min_balance": 1600.0
        }
      ]
    },
    {
      "request_id": "request_82",
      "user_id": "user_82",
      "requested_amount": 1405.2,
      "currency": "USD",
      "request_type": "family_transfer",
      "request_text": "I've been asked to transfer USD 1,405.20 to my family. I need to complete it by 15 February 2025. Can I make the full transfer without falling short on my own bills?",
      "allows_partial_payment": false,
      "request_date": "2024-12-05",
      "desired_completion_date": "2025-02-15",
      "home_currency": "USD",
      "current_balance": 2202.4,
      "minimum_balance_to_keep": 1100.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 15 February 2025. None of the available options keeps the USD 1,100 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2024-12-05",
          "balance": 2111.4,
          "min_balance": 1100.0
        },
        {
          "day": 5,
          "date": "2024-12-10",
          "balance": 1638.54,
          "min_balance": 1100.0
        },
        {
          "day": 10,
          "date": "2024-12-15",
          "balance": 919.88,
          "min_balance": 1100.0
        },
        {
          "day": 15,
          "date": "2024-12-20",
          "balance": 1512.64,
          "min_balance": 1100.0
        },
        {
          "day": 20,
          "date": "2024-12-25",
          "balance": 1377.74,
          "min_balance": 1100.0
        },
        {
          "day": 25,
          "date": "2024-12-30",
          "balance": 1024.3,
          "min_balance": 1100.0
        },
        {
          "day": 30,
          "date": "2025-01-04",
          "balance": 392.6,
          "min_balance": 1100.0
        },
        {
          "day": 35,
          "date": "2025-01-09",
          "balance": 42.74,
          "min_balance": 1100.0
        },
        {
          "day": 40,
          "date": "2025-01-14",
          "balance": -599.31,
          "min_balance": 1100.0
        },
        {
          "day": 45,
          "date": "2025-01-19",
          "balance": -832.48,
          "min_balance": 1100.0
        },
        {
          "day": 50,
          "date": "2025-01-24",
          "balance": -250.06,
          "min_balance": 1100.0
        },
        {
          "day": 55,
          "date": "2025-01-29",
          "balance": -519.52,
          "min_balance": 1100.0
        },
        {
          "day": 60,
          "date": "2025-02-03",
          "balance": -1140.34,
          "min_balance": 1100.0
        },
        {
          "day": 65,
          "date": "2025-02-08",
          "balance": -1444.16,
          "min_balance": 1100.0
        },
        {
          "day": 70,
          "date": "2025-02-13",
          "balance": -2097.26,
          "min_balance": 1100.0
        },
        {
          "day": 75,
          "date": "2025-02-18",
          "balance": -2460.28,
          "min_balance": 1100.0
        },
        {
          "day": 80,
          "date": "2025-02-23",
          "balance": -1841.03,
          "min_balance": 1100.0
        },
        {
          "day": 85,
          "date": "2025-02-28",
          "balance": -2362.54,
          "min_balance": 1100.0
        },
        {
          "day": 90,
          "date": "2025-03-05",
          "balance": -2863.0,
          "min_balance": 1100.0
        }
      ]
    },
    {
      "request_id": "request_83",
      "user_id": "user_83",
      "requested_amount": 156200.0,
      "currency": "INR",
      "request_type": "family_transfer",
      "request_text": "Can I complete this family transfer and still keep my minimum balance? I need to decide by 17 June 2025. I want to send INR 156,200 to my family.",
      "allows_partial_payment": false,
      "request_date": "2025-05-07",
      "desired_completion_date": "2025-06-17",
      "home_currency": "INR",
      "current_balance": 68930.0,
      "minimum_balance_to_keep": 37800.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 17 June 2025. None of the available options keeps the INR 37,800 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2025-05-07",
          "balance": 66130.0,
          "min_balance": 37800.0
        },
        {
          "day": 5,
          "date": "2025-05-12",
          "balance": 37834.97,
          "min_balance": 37800.0
        },
        {
          "day": 10,
          "date": "2025-05-17",
          "balance": 91048.55,
          "min_balance": 37800.0
        },
        {
          "day": 15,
          "date": "2025-05-22",
          "balance": 86339.29,
          "min_balance": 37800.0
        },
        {
          "day": 20,
          "date": "2025-05-27",
          "balance": 80515.41,
          "min_balance": 37800.0
        },
        {
          "day": 25,
          "date": "2025-06-01",
          "balance": 76922.15,
          "min_balance": 37800.0
        },
        {
          "day": 30,
          "date": "2025-06-06",
          "balance": 58511.18,
          "min_balance": 37800.0
        },
        {
          "day": 35,
          "date": "2025-06-11",
          "balance": 43129.65,
          "min_balance": 37800.0
        },
        {
          "day": 40,
          "date": "2025-06-16",
          "balance": 88343.51,
          "min_balance": 37800.0
        },
        {
          "day": 45,
          "date": "2025-06-21",
          "balance": 84018.1,
          "min_balance": 37800.0
        },
        {
          "day": 50,
          "date": "2025-06-26",
          "balance": 77439.45,
          "min_balance": 37800.0
        },
        {
          "day": 55,
          "date": "2025-07-01",
          "balance": 72103.33,
          "min_balance": 37800.0
        },
        {
          "day": 60,
          "date": "2025-07-06",
          "balance": 53692.36,
          "min_balance": 37800.0
        },
        {
          "day": 65,
          "date": "2025-07-11",
          "balance": 38310.83,
          "min_balance": 37800.0
        },
        {
          "day": 70,
          "date": "2025-07-16",
          "balance": 83524.69,
          "min_balance": 37800.0
        },
        {
          "day": 75,
          "date": "2025-07-21",
          "balance": 79199.28,
          "min_balance": 37800.0
        },
        {
          "day": 80,
          "date": "2025-07-26",
          "balance": 72620.63,
          "min_balance": 37800.0
        },
        {
          "day": 85,
          "date": "2025-07-31",
          "balance": 70877.77,
          "min_balance": 37800.0
        },
        {
          "day": 90,
          "date": "2025-08-05",
          "balance": 53465.15,
          "min_balance": 37800.0
        }
      ]
    },
    {
      "request_id": "request_84",
      "user_id": "user_84",
      "requested_amount": 95400.0,
      "currency": "INR",
      "request_type": "education",
      "request_text": "Enrolment for the course comes to INR 95,400. Would paying the course fee now leave enough for my regular commitments?",
      "allows_partial_payment": false,
      "request_date": "2026-04-04",
      "desired_completion_date": "2026-06-15",
      "home_currency": "INR",
      "current_balance": 153945.0,
      "minimum_balance_to_keep": 91300.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 15 June 2026. None of the available options keeps the INR 91,300 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2026-04-04",
          "balance": 153945.0,
          "min_balance": 91300.0
        },
        {
          "day": 5,
          "date": "2026-04-09",
          "balance": 125529.91,
          "min_balance": 91300.0
        },
        {
          "day": 10,
          "date": "2026-04-14",
          "balance": 106420.6,
          "min_balance": 91300.0
        },
        {
          "day": 15,
          "date": "2026-04-19",
          "balance": 196991.8,
          "min_balance": 91300.0
        },
        {
          "day": 20,
          "date": "2026-04-24",
          "balance": 187924.65,
          "min_balance": 91300.0
        },
        {
          "day": 25,
          "date": "2026-04-29",
          "balance": 169375.0,
          "min_balance": 91300.0
        },
        {
          "day": 30,
          "date": "2026-05-04",
          "balance": 130452.68,
          "min_balance": 91300.0
        },
        {
          "day": 35,
          "date": "2026-05-09",
          "balance": 102037.59,
          "min_balance": 91300.0
        },
        {
          "day": 40,
          "date": "2026-05-14",
          "balance": 89008.28,
          "min_balance": 91300.0
        },
        {
          "day": 45,
          "date": "2026-05-19",
          "balance": 179579.48,
          "min_balance": 91300.0
        },
        {
          "day": 50,
          "date": "2026-05-24",
          "balance": 170512.33,
          "min_balance": 91300.0
        },
        {
          "day": 55,
          "date": "2026-05-29",
          "balance": 151962.68,
          "min_balance": 91300.0
        },
        {
          "day": 60,
          "date": "2026-06-03",
          "balance": 113040.36,
          "min_balance": 91300.0
        },
        {
          "day": 65,
          "date": "2026-06-08",
          "balance": 88725.55,
          "min_balance": 91300.0
        },
        {
          "day": 70,
          "date": "2026-06-13",
          "balance": 71595.96,
          "min_balance": 91300.0
        },
        {
          "day": 75,
          "date": "2026-06-18",
          "balance": 162167.16,
          "min_balance": 91300.0
        },
        {
          "day": 80,
          "date": "2026-06-23",
          "balance": 153100.01,
          "min_balance": 91300.0
        },
        {
          "day": 85,
          "date": "2026-06-28",
          "balance": 134550.36,
          "min_balance": 91300.0
        },
        {
          "day": 90,
          "date": "2026-07-03",
          "balance": 95628.04,
          "min_balance": 91300.0
        }
      ]
    },
    {
      "request_id": "request_85",
      "user_id": "user_85",
      "requested_amount": 19304000.0,
      "currency": "IDR",
      "request_type": "housing",
      "request_text": "Is the deposit affordable now, or do I need more time? I need to pay a IDR 19,304,000 rental deposit.",
      "allows_partial_payment": false,
      "request_date": "2024-03-06",
      "desired_completion_date": "2024-04-26",
      "home_currency": "IDR",
      "current_balance": 8818420.0,
      "minimum_balance_to_keep": 6396300.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 26 April 2024. None of the available options keeps the IDR 6,396,300 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2024-03-06",
          "balance": 8193317.76,
          "min_balance": 6396300.0
        },
        {
          "day": 5,
          "date": "2024-03-11",
          "balance": 7269657.73,
          "min_balance": 6396300.0
        },
        {
          "day": 10,
          "date": "2024-03-16",
          "balance": 14690761.75,
          "min_balance": 6396300.0
        },
        {
          "day": 15,
          "date": "2024-03-21",
          "balance": 13245301.64,
          "min_balance": 6396300.0
        },
        {
          "day": 20,
          "date": "2024-03-26",
          "balance": 12043205.21,
          "min_balance": 6396300.0
        },
        {
          "day": 25,
          "date": "2024-03-31",
          "balance": 10849695.1,
          "min_balance": 6396300.0
        },
        {
          "day": 30,
          "date": "2024-04-05",
          "balance": 7216075.12,
          "min_balance": 6396300.0
        },
        {
          "day": 35,
          "date": "2024-04-10",
          "balance": 6429472.88,
          "min_balance": 6396300.0
        },
        {
          "day": 40,
          "date": "2024-04-15",
          "balance": 13286129.19,
          "min_balance": 6396300.0
        },
        {
          "day": 45,
          "date": "2024-04-20",
          "balance": 11642956.76,
          "min_balance": 6396300.0
        },
        {
          "day": 50,
          "date": "2024-04-25",
          "balance": 10712580.4,
          "min_balance": 6396300.0
        },
        {
          "day": 55,
          "date": "2024-04-30",
          "balance": 9247350.22,
          "min_balance": 6396300.0
        },
        {
          "day": 60,
          "date": "2024-05-05",
          "balance": 5613730.24,
          "min_balance": 6396300.0
        },
        {
          "day": 65,
          "date": "2024-05-10",
          "balance": 4827128.0,
          "min_balance": 6396300.0
        },
        {
          "day": 70,
          "date": "2024-05-15",
          "balance": 11683784.31,
          "min_balance": 6396300.0
        },
        {
          "day": 75,
          "date": "2024-05-20",
          "balance": 10040611.88,
          "min_balance": 6396300.0
        },
        {
          "day": 80,
          "date": "2024-05-25",
          "balance": 9110235.52,
          "min_balance": 6396300.0
        },
        {
          "day": 85,
          "date": "2024-05-30",
          "balance": 7645005.34,
          "min_balance": 6396300.0
        },
        {
          "day": 90,
          "date": "2024-06-04",
          "balance": 4559329.57,
          "min_balance": 6396300.0
        }
      ]
    },
    {
      "request_id": "request_86",
      "user_id": "user_86",
      "requested_amount": 46300.0,
      "currency": "INR",
      "request_type": "travel",
      "request_text": "The current quote for the trip is INR 46,300. I need to complete it by 22 August 2025. Does paying for the trip now leave enough for the rest of the month?",
      "allows_partial_payment": false,
      "request_date": "2025-08-03",
      "desired_completion_date": "2025-08-22",
      "home_currency": "INR",
      "current_balance": 228639.5,
      "minimum_balance_to_keep": 84900.0,
      "amount_safe_to_pay": 30606.6,
      "affordability_status": "affordable_later",
      "recommended_payment_method": "wait",
      "payment_plan": "2025-08-23:46300",
      "earliest_date_for_full_payment": "2025-08-23",
      "spending_changes_needed": "none",
      "decision_explanation": "Pay INR 46,300 in full on 23 August 2025. Paying earlier would take the balance below the INR 84,900 minimum.",
      "curve": [
        {
          "day": 0,
          "date": "2025-08-03",
          "balance": 189839.5,
          "min_balance": 84900.0
        },
        {
          "day": 5,
          "date": "2025-08-08",
          "balance": 175207.98,
          "min_balance": 84900.0
        },
        {
          "day": 10,
          "date": "2025-08-13",
          "balance": 139284.34,
          "min_balance": 84900.0
        },
        {
          "day": 15,
          "date": "2025-08-18",
          "balance": 121833.54,
          "min_balance": 84900.0
        },
        {
          "day": 20,
          "date": "2025-08-23",
          "balance": 363506.6,
          "min_balance": 84900.0
        },
        {
          "day": 25,
          "date": "2025-08-28",
          "balance": 354587.65,
          "min_balance": 84900.0
        },
        {
          "day": 30,
          "date": "2025-09-02",
          "balance": 336970.43,
          "min_balance": 84900.0
        },
        {
          "day": 35,
          "date": "2025-09-07",
          "balance": 283538.91,
          "min_balance": 84900.0
        },
        {
          "day": 40,
          "date": "2025-09-12",
          "balance": 257468.68,
          "min_balance": 84900.0
        },
        {
          "day": 45,
          "date": "2025-09-17",
          "balance": 230164.47,
          "min_balance": 84900.0
        },
        {
          "day": 50,
          "date": "2025-09-22",
          "balance": 223837.53,
          "min_balance": 84900.0
        },
        {
          "day": 55,
          "date": "2025-09-27",
          "balance": 344010.87,
          "min_balance": 84900.0
        },
        {
          "day": 60,
          "date": "2025-10-02",
          "balance": 321301.36,
          "min_balance": 84900.0
        },
        {
          "day": 65,
          "date": "2025-10-07",
          "balance": 267869.84,
          "min_balance": 84900.0
        },
        {
          "day": 70,
          "date": "2025-10-12",
          "balance": 241799.61,
          "min_balance": 84900.0
        },
        {
          "day": 75,
          "date": "2025-10-17",
          "balance": 214495.4,
          "min_balance": 84900.0
        },
        {
          "day": 80,
          "date": "2025-10-22",
          "balance": 208168.46,
          "min_balance": 84900.0
        },
        {
          "day": 85,
          "date": "2025-10-27",
          "balance": 328341.8,
          "min_balance": 84900.0
        },
        {
          "day": 90,
          "date": "2025-11-01",
          "balance": 311106.74,
          "min_balance": 84900.0
        }
      ]
    },
    {
      "request_id": "request_87",
      "user_id": "user_87",
      "requested_amount": 487900.0,
      "currency": "INR",
      "request_type": "other",
      "request_text": "Would committing to the membership leave enough for my upcoming bills? I need to decide by 15 March 2026. The membership fee is INR 487,900 for the year.",
      "allows_partial_payment": false,
      "request_date": "2026-01-05",
      "desired_completion_date": "2026-03-15",
      "home_currency": "INR",
      "current_balance": 278750.0,
      "minimum_balance_to_keep": 185900.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 15 March 2026. None of the available options keeps the INR 185,900 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2026-01-05",
          "balance": 278750.0,
          "min_balance": 185900.0
        },
        {
          "day": 5,
          "date": "2026-01-10",
          "balance": 242454.01,
          "min_balance": 185900.0
        },
        {
          "day": 10,
          "date": "2026-01-15",
          "balance": 426140.37,
          "min_balance": 185900.0
        },
        {
          "day": 15,
          "date": "2026-01-20",
          "balance": 400876.53,
          "min_balance": 185900.0
        },
        {
          "day": 20,
          "date": "2026-01-25",
          "balance": 365943.73,
          "min_balance": 185900.0
        },
        {
          "day": 25,
          "date": "2026-01-30",
          "balance": 345877.19,
          "min_balance": 185900.0
        },
        {
          "day": 30,
          "date": "2026-02-04",
          "balance": 213375.68,
          "min_balance": 185900.0
        },
        {
          "day": 35,
          "date": "2026-02-09",
          "balance": 184130.81,
          "min_balance": 185900.0
        },
        {
          "day": 40,
          "date": "2026-02-14",
          "balance": 109766.05,
          "min_balance": 185900.0
        },
        {
          "day": 45,
          "date": "2026-02-19",
          "balance": 335502.21,
          "min_balance": 185900.0
        },
        {
          "day": 50,
          "date": "2026-02-24",
          "balance": 300569.41,
          "min_balance": 185900.0
        },
        {
          "day": 55,
          "date": "2026-03-01",
          "balance": 243008.15,
          "min_balance": 185900.0
        },
        {
          "day": 60,
          "date": "2026-03-06",
          "balance": 148001.36,
          "min_balance": 185900.0
        },
        {
          "day": 65,
          "date": "2026-03-11",
          "balance": 80689.29,
          "min_balance": 185900.0
        },
        {
          "day": 70,
          "date": "2026-03-16",
          "balance": 288515.81,
          "min_balance": 185900.0
        },
        {
          "day": 75,
          "date": "2026-03-21",
          "balance": 255580.18,
          "min_balance": 185900.0
        },
        {
          "day": 80,
          "date": "2026-03-26",
          "balance": 225927.26,
          "min_balance": 185900.0
        },
        {
          "day": 85,
          "date": "2026-03-31",
          "balance": 190040.03,
          "min_balance": 185900.0
        },
        {
          "day": 90,
          "date": "2026-04-05",
          "balance": 82627.04,
          "min_balance": 185900.0
        }
      ]
    },
    {
      "request_id": "request_88",
      "user_id": "user_88",
      "requested_amount": 26092.0,
      "currency": "ZAR",
      "request_type": "housing",
      "request_text": "I need ZAR 26,092 for the rental deposit. Would paying the full deposit leave enough for my other commitments?",
      "allows_partial_payment": false,
      "request_date": "2024-06-07",
      "desired_completion_date": "2024-08-25",
      "home_currency": "ZAR",
      "current_balance": 41357.89,
      "minimum_balance_to_keep": 25800.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 25 August 2024. None of the available options keeps the ZAR 25,800 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2024-06-07",
          "balance": 40153.89,
          "min_balance": 25800.0
        },
        {
          "day": 5,
          "date": "2024-06-12",
          "balance": 35553.52,
          "min_balance": 25800.0
        },
        {
          "day": 10,
          "date": "2024-06-17",
          "balance": 63892.7,
          "min_balance": 25800.0
        },
        {
          "day": 15,
          "date": "2024-06-22",
          "balance": 61711.76,
          "min_balance": 25800.0
        },
        {
          "day": 20,
          "date": "2024-06-27",
          "balance": 60678.53,
          "min_balance": 25800.0
        },
        {
          "day": 25,
          "date": "2024-07-02",
          "balance": 43540.0,
          "min_balance": 25800.0
        },
        {
          "day": 30,
          "date": "2024-07-07",
          "balance": 29346.12,
          "min_balance": 25800.0
        },
        {
          "day": 35,
          "date": "2024-07-12",
          "balance": 24745.75,
          "min_balance": 25800.0
        },
        {
          "day": 40,
          "date": "2024-07-17",
          "balance": 53084.93,
          "min_balance": 25800.0
        },
        {
          "day": 45,
          "date": "2024-07-22",
          "balance": 50903.99,
          "min_balance": 25800.0
        },
        {
          "day": 50,
          "date": "2024-07-27",
          "balance": 49870.76,
          "min_balance": 25800.0
        },
        {
          "day": 55,
          "date": "2024-08-01",
          "balance": 33994.7,
          "min_balance": 25800.0
        },
        {
          "day": 60,
          "date": "2024-08-06",
          "balance": 19742.35,
          "min_balance": 25800.0
        },
        {
          "day": 65,
          "date": "2024-08-11",
          "balance": 13937.98,
          "min_balance": 25800.0
        },
        {
          "day": 70,
          "date": "2024-08-16",
          "balance": 43477.17,
          "min_balance": 25800.0
        },
        {
          "day": 75,
          "date": "2024-08-21",
          "balance": 40096.22,
          "min_balance": 25800.0
        },
        {
          "day": 80,
          "date": "2024-08-26",
          "balance": 39062.99,
          "min_balance": 25800.0
        },
        {
          "day": 85,
          "date": "2024-08-31",
          "balance": 32800.93,
          "min_balance": 25800.0
        },
        {
          "day": 90,
          "date": "2024-09-05",
          "balance": 8934.58,
          "min_balance": 25800.0
        }
      ]
    },
    {
      "request_id": "request_89",
      "user_id": "user_89",
      "requested_amount": 13756000.0,
      "currency": "IDR",
      "request_type": "other",
      "request_text": "Is the full membership fee affordable today, or should I wait? I'm considering a yearly membership for IDR 13,756,000.",
      "allows_partial_payment": false,
      "request_date": "2025-11-04",
      "desired_completion_date": "2026-01-15",
      "home_currency": "IDR",
      "current_balance": 27331862.01,
      "minimum_balance_to_keep": 12534700.0,
      "amount_safe_to_pay": 8189458.64,
      "affordability_status": "affordable_with_plan",
      "recommended_payment_method": "installments",
      "payment_plan": "2025-11-18:4768746.67|2025-12-16:4768746.67|2026-01-13:4768746.67",
      "earliest_date_for_full_payment": "2025-11-15",
      "spending_changes_needed": "none",
      "decision_explanation": "Use 3 installments of IDR 4,768,746.67, starting 18 November 2025. This leaves at least IDR 12,534,700 available.",
      "curve": [
        {
          "day": 0,
          "date": "2025-11-04",
          "balance": 27331862.01,
          "min_balance": 12534700.0
        },
        {
          "day": 5,
          "date": "2025-11-09",
          "balance": 25065091.07,
          "min_balance": 12534700.0
        },
        {
          "day": 10,
          "date": "2025-11-14",
          "balance": 20724158.64,
          "min_balance": 12534700.0
        },
        {
          "day": 15,
          "date": "2025-11-19",
          "balance": 49365446.76,
          "min_balance": 12534700.0
        },
        {
          "day": 20,
          "date": "2025-11-24",
          "balance": 46186177.32,
          "min_balance": 12534700.0
        },
        {
          "day": 25,
          "date": "2025-11-29",
          "balance": 44038949.2,
          "min_balance": 12534700.0
        },
        {
          "day": 30,
          "date": "2025-12-04",
          "balance": 38580857.55,
          "min_balance": 12534700.0
        },
        {
          "day": 35,
          "date": "2025-12-09",
          "balance": 36314086.61,
          "min_balance": 12534700.0
        },
        {
          "day": 40,
          "date": "2025-12-14",
          "balance": 31973154.18,
          "min_balance": 12534700.0
        },
        {
          "day": 45,
          "date": "2025-12-19",
          "balance": 45414442.3,
          "min_balance": 12534700.0
        },
        {
          "day": 50,
          "date": "2025-12-24",
          "balance": 42235172.86,
          "min_balance": 12534700.0
        },
        {
          "day": 55,
          "date": "2025-12-29",
          "balance": 40087944.74,
          "min_balance": 12534700.0
        },
        {
          "day": 60,
          "date": "2026-01-03",
          "balance": 34629853.09,
          "min_balance": 12534700.0
        },
        {
          "day": 65,
          "date": "2026-01-08",
          "balance": 32686082.15,
          "min_balance": 12534700.0
        },
        {
          "day": 70,
          "date": "2026-01-13",
          "balance": 28473332.85,
          "min_balance": 12534700.0
        },
        {
          "day": 75,
          "date": "2026-01-18",
          "balance": 42102445.45,
          "min_balance": 12534700.0
        },
        {
          "day": 80,
          "date": "2026-01-23",
          "balance": 38784358.77,
          "min_balance": 12534700.0
        },
        {
          "day": 85,
          "date": "2026-01-28",
          "balance": 36610450.33,
          "min_balance": 12534700.0
        },
        {
          "day": 90,
          "date": "2026-02-02",
          "balance": 31133401.3,
          "min_balance": 12534700.0
        }
      ]
    },
    {
      "request_id": "request_90",
      "user_id": "user_90",
      "requested_amount": 2560.0,
      "currency": "ZAR",
      "request_type": "debt_repayment",
      "request_text": "I have ZAR 2,560 in mind as an extra loan payment. I need to complete it by 23 September 2026. Can I clear this additional amount without putting upcoming bills at risk?",
      "allows_partial_payment": true,
      "request_date": "2026-07-06",
      "desired_completion_date": "2026-09-23",
      "home_currency": "ZAR",
      "current_balance": 31629.5,
      "minimum_balance_to_keep": 7600.0,
      "amount_safe_to_pay": 205.93,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 23 September 2026. None of the available options keeps the ZAR 7,600 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2026-07-06",
          "balance": 31271.73,
          "min_balance": 7600.0
        },
        {
          "day": 5,
          "date": "2026-07-11",
          "balance": 27619.7,
          "min_balance": 7600.0
        },
        {
          "day": 10,
          "date": "2026-07-16",
          "balance": 26924.5,
          "min_balance": 7600.0
        },
        {
          "day": 15,
          "date": "2026-07-21",
          "balance": 30712.22,
          "min_balance": 7600.0
        },
        {
          "day": 20,
          "date": "2026-07-26",
          "balance": 30204.14,
          "min_balance": 7600.0
        },
        {
          "day": 25,
          "date": "2026-07-31",
          "balance": 28007.81,
          "min_balance": 7600.0
        },
        {
          "day": 30,
          "date": "2026-08-05",
          "balance": 23688.31,
          "min_balance": 7600.0
        },
        {
          "day": 35,
          "date": "2026-08-10",
          "balance": 20151.76,
          "min_balance": 7600.0
        },
        {
          "day": 40,
          "date": "2026-08-15",
          "balance": 18983.31,
          "min_balance": 7600.0
        },
        {
          "day": 45,
          "date": "2026-08-20",
          "balance": 22771.03,
          "min_balance": 7600.0
        },
        {
          "day": 50,
          "date": "2026-08-25",
          "balance": 22262.95,
          "min_balance": 7600.0
        },
        {
          "day": 55,
          "date": "2026-08-30",
          "balance": 20552.97,
          "min_balance": 7600.0
        },
        {
          "day": 60,
          "date": "2026-09-04",
          "balance": 15747.12,
          "min_balance": 7600.0
        },
        {
          "day": 65,
          "date": "2026-09-09",
          "balance": 13761.81,
          "min_balance": 7600.0
        },
        {
          "day": 70,
          "date": "2026-09-14",
          "balance": 11042.12,
          "min_balance": 7600.0
        },
        {
          "day": 75,
          "date": "2026-09-19",
          "balance": 9724.83,
          "min_balance": 7600.0
        },
        {
          "day": 80,
          "date": "2026-09-24",
          "balance": 14321.76,
          "min_balance": 7600.0
        },
        {
          "day": 85,
          "date": "2026-09-29",
          "balance": 13925.65,
          "min_balance": 7600.0
        },
        {
          "day": 90,
          "date": "2026-10-04",
          "balance": 7805.93,
          "min_balance": 7600.0
        }
      ]
    },
    {
      "request_id": "request_91",
      "user_id": "user_91",
      "requested_amount": 1927.2,
      "currency": "EUR",
      "request_type": "emergency_expense",
      "request_text": "The repair cannot wait. How much can I safely pay today? I need to decide by 15 November 2024. I need to cover an urgent repair of EUR 1,927.20.",
      "allows_partial_payment": false,
      "request_date": "2024-09-03",
      "desired_completion_date": "2024-11-15",
      "home_currency": "EUR",
      "current_balance": 4209.6,
      "minimum_balance_to_keep": 2100.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 15 November 2024. None of the available options keeps the EUR 2,100 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2024-09-03",
          "balance": 4169.62,
          "min_balance": 2100.0
        },
        {
          "day": 5,
          "date": "2024-09-08",
          "balance": 2871.18,
          "min_balance": 2100.0
        },
        {
          "day": 10,
          "date": "2024-09-13",
          "balance": 2273.39,
          "min_balance": 2100.0
        },
        {
          "day": 15,
          "date": "2024-09-18",
          "balance": 4140.75,
          "min_balance": 2100.0
        },
        {
          "day": 20,
          "date": "2024-09-23",
          "balance": 3806.92,
          "min_balance": 2100.0
        },
        {
          "day": 25,
          "date": "2024-09-28",
          "balance": 3379.86,
          "min_balance": 2100.0
        },
        {
          "day": 30,
          "date": "2024-10-03",
          "balance": 3294.25,
          "min_balance": 2100.0
        },
        {
          "day": 35,
          "date": "2024-10-08",
          "balance": 2161.81,
          "min_balance": 2100.0
        },
        {
          "day": 40,
          "date": "2024-10-13",
          "balance": 1564.02,
          "min_balance": 2100.0
        },
        {
          "day": 45,
          "date": "2024-10-18",
          "balance": 3431.38,
          "min_balance": 2100.0
        },
        {
          "day": 50,
          "date": "2024-10-23",
          "balance": 3097.55,
          "min_balance": 2100.0
        },
        {
          "day": 55,
          "date": "2024-10-28",
          "balance": 2670.49,
          "min_balance": 2100.0
        },
        {
          "day": 60,
          "date": "2024-11-02",
          "balance": 2624.86,
          "min_balance": 2100.0
        },
        {
          "day": 65,
          "date": "2024-11-07",
          "balance": 1620.62,
          "min_balance": 2100.0
        },
        {
          "day": 70,
          "date": "2024-11-12",
          "balance": 1267.82,
          "min_balance": 2100.0
        },
        {
          "day": 75,
          "date": "2024-11-17",
          "balance": 2798.27,
          "min_balance": 2100.0
        },
        {
          "day": 80,
          "date": "2024-11-22",
          "balance": 2487.22,
          "min_balance": 2100.0
        },
        {
          "day": 85,
          "date": "2024-11-27",
          "balance": 2111.68,
          "min_balance": 2100.0
        },
        {
          "day": 90,
          "date": "2024-12-02",
          "balance": 1915.49,
          "min_balance": 2100.0
        }
      ]
    },
    {
      "request_id": "request_92",
      "user_id": "user_92",
      "requested_amount": 34034.0,
      "currency": "ZAR",
      "request_type": "education",
      "request_text": "I'm considering a professional course priced at ZAR 34,034. Can I pay for the course before enrolment closes?",
      "allows_partial_payment": false,
      "request_date": "2025-02-05",
      "desired_completion_date": "2025-02-14",
      "home_currency": "ZAR",
      "current_balance": 78664.47,
      "minimum_balance_to_keep": 28100.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 14 February 2025. None of the available options keeps the ZAR 28,100 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2025-02-05",
          "balance": 75925.01,
          "min_balance": 28100.0
        },
        {
          "day": 5,
          "date": "2025-02-10",
          "balance": 61820.6,
          "min_balance": 28100.0
        },
        {
          "day": 10,
          "date": "2025-02-15",
          "balance": 58096.03,
          "min_balance": 28100.0
        },
        {
          "day": 15,
          "date": "2025-02-20",
          "balance": 52100.08,
          "min_balance": 28100.0
        },
        {
          "day": 20,
          "date": "2025-02-25",
          "balance": 63559.88,
          "min_balance": 28100.0
        },
        {
          "day": 25,
          "date": "2025-03-02",
          "balance": 48223.13,
          "min_balance": 28100.0
        },
        {
          "day": 30,
          "date": "2025-03-07",
          "balance": 38336.08,
          "min_balance": 28100.0
        },
        {
          "day": 35,
          "date": "2025-03-12",
          "balance": 31228.56,
          "min_balance": 28100.0
        },
        {
          "day": 40,
          "date": "2025-03-17",
          "balance": 25324.12,
          "min_balance": 28100.0
        },
        {
          "day": 45,
          "date": "2025-03-22",
          "balance": 21658.74,
          "min_balance": 28100.0
        },
        {
          "day": 50,
          "date": "2025-03-27",
          "balance": 30438.79,
          "min_balance": 28100.0
        },
        {
          "day": 55,
          "date": "2025-04-01",
          "balance": 23022.52,
          "min_balance": 28100.0
        },
        {
          "day": 60,
          "date": "2025-04-06",
          "balance": 13436.33,
          "min_balance": 28100.0
        },
        {
          "day": 65,
          "date": "2025-04-11",
          "balance": 787.22,
          "min_balance": 28100.0
        },
        {
          "day": 70,
          "date": "2025-04-16",
          "balance": -2786.65,
          "min_balance": 28100.0
        },
        {
          "day": 75,
          "date": "2025-04-21",
          "balance": -8782.6,
          "min_balance": 28100.0
        },
        {
          "day": 80,
          "date": "2025-04-26",
          "balance": 1068.08,
          "min_balance": 28100.0
        },
        {
          "day": 85,
          "date": "2025-05-01",
          "balance": -7418.82,
          "min_balance": 28100.0
        },
        {
          "day": 90,
          "date": "2025-05-06",
          "balance": -17005.01,
          "min_balance": 28100.0
        }
      ]
    },
    {
      "request_id": "request_93",
      "user_id": "user_93",
      "requested_amount": 1729.2,
      "currency": "USD",
      "request_type": "travel",
      "request_text": "Can I book the family trip now and still cover my usual expenses? The current quote for the trip is USD 1,729.20.",
      "allows_partial_payment": false,
      "request_date": "2026-04-07",
      "desired_completion_date": "2026-04-14",
      "home_currency": "USD",
      "current_balance": 3962.1,
      "minimum_balance_to_keep": 1900.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 14 April 2026. None of the available options keeps the USD 1,900 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2026-04-07",
          "balance": 3962.1,
          "min_balance": 1900.0
        },
        {
          "day": 5,
          "date": "2026-04-12",
          "balance": 3592.53,
          "min_balance": 1900.0
        },
        {
          "day": 10,
          "date": "2026-04-17",
          "balance": 5657.72,
          "min_balance": 1900.0
        },
        {
          "day": 15,
          "date": "2026-04-22",
          "balance": 5363.25,
          "min_balance": 1900.0
        },
        {
          "day": 20,
          "date": "2026-04-27",
          "balance": 5224.84,
          "min_balance": 1900.0
        },
        {
          "day": 25,
          "date": "2026-05-02",
          "balance": 3336.17,
          "min_balance": 1900.0
        },
        {
          "day": 30,
          "date": "2026-05-07",
          "balance": 3129.15,
          "min_balance": 1900.0
        },
        {
          "day": 35,
          "date": "2026-05-12",
          "balance": 2759.58,
          "min_balance": 1900.0
        },
        {
          "day": 40,
          "date": "2026-05-17",
          "balance": 4824.77,
          "min_balance": 1900.0
        },
        {
          "day": 45,
          "date": "2026-05-22",
          "balance": 4530.3,
          "min_balance": 1900.0
        },
        {
          "day": 50,
          "date": "2026-05-27",
          "balance": 4391.89,
          "min_balance": 1900.0
        },
        {
          "day": 55,
          "date": "2026-06-01",
          "balance": 4035.62,
          "min_balance": 1900.0
        },
        {
          "day": 60,
          "date": "2026-06-06",
          "balance": 2296.2,
          "min_balance": 1900.0
        },
        {
          "day": 65,
          "date": "2026-06-11",
          "balance": 2010.06,
          "min_balance": 1900.0
        },
        {
          "day": 70,
          "date": "2026-06-16",
          "balance": 4105.27,
          "min_balance": 1900.0
        },
        {
          "day": 75,
          "date": "2026-06-21",
          "balance": 3697.35,
          "min_balance": 1900.0
        },
        {
          "day": 80,
          "date": "2026-06-26",
          "balance": 3558.94,
          "min_balance": 1900.0
        },
        {
          "day": 85,
          "date": "2026-07-01",
          "balance": 3202.67,
          "min_balance": 1900.0
        },
        {
          "day": 90,
          "date": "2026-07-06",
          "balance": 1463.25,
          "min_balance": 1900.0
        }
      ]
    },
    {
      "request_id": "request_94",
      "user_id": "user_94",
      "requested_amount": 572.0,
      "currency": "EUR",
      "request_type": "housing",
      "request_text": "The deposit on the place comes to EUR 572. I need to complete it by 22 December 2024. Can I cover this deposit without putting rent and regular bills at risk?",
      "allows_partial_payment": false,
      "request_date": "2024-12-04",
      "desired_completion_date": "2024-12-22",
      "home_currency": "EUR",
      "current_balance": 2663.6,
      "minimum_balance_to_keep": 600.0,
      "amount_safe_to_pay": 217.52,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 22 December 2024. None of the available options keeps the EUR 600 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2024-12-04",
          "balance": 2645.18,
          "min_balance": 600.0
        },
        {
          "day": 5,
          "date": "2024-12-09",
          "balance": 2414.81,
          "min_balance": 600.0
        },
        {
          "day": 10,
          "date": "2024-12-14",
          "balance": 2301.78,
          "min_balance": 600.0
        },
        {
          "day": 15,
          "date": "2024-12-19",
          "balance": 2181.32,
          "min_balance": 600.0
        },
        {
          "day": 20,
          "date": "2024-12-24",
          "balance": 2568.48,
          "min_balance": 600.0
        },
        {
          "day": 25,
          "date": "2024-12-29",
          "balance": 2382.4,
          "min_balance": 600.0
        },
        {
          "day": 30,
          "date": "2025-01-03",
          "balance": 2054.38,
          "min_balance": 600.0
        },
        {
          "day": 35,
          "date": "2025-01-08",
          "balance": 1902.08,
          "min_balance": 600.0
        },
        {
          "day": 40,
          "date": "2025-01-13",
          "balance": 1706.14,
          "min_balance": 600.0
        },
        {
          "day": 45,
          "date": "2025-01-18",
          "balance": 1572.1,
          "min_balance": 600.0
        },
        {
          "day": 50,
          "date": "2025-01-23",
          "balance": 1959.26,
          "min_balance": 600.0
        },
        {
          "day": 55,
          "date": "2025-01-28",
          "balance": 1819.41,
          "min_balance": 600.0
        },
        {
          "day": 60,
          "date": "2025-02-02",
          "balance": 1732.26,
          "min_balance": 600.0
        },
        {
          "day": 65,
          "date": "2025-02-07",
          "balance": 1325.52,
          "min_balance": 600.0
        },
        {
          "day": 70,
          "date": "2025-02-12",
          "balance": 1152.08,
          "min_balance": 600.0
        },
        {
          "day": 75,
          "date": "2025-02-17",
          "balance": 1017.91,
          "min_balance": 600.0
        },
        {
          "day": 80,
          "date": "2025-02-22",
          "balance": 1350.04,
          "min_balance": 600.0
        },
        {
          "day": 85,
          "date": "2025-02-27",
          "balance": 1289.92,
          "min_balance": 600.0
        },
        {
          "day": 90,
          "date": "2025-03-04",
          "balance": 817.52,
          "min_balance": 600.0
        }
      ]
    },
    {
      "request_id": "request_95",
      "user_id": "user_95",
      "requested_amount": 553000.0,
      "currency": "INR",
      "request_type": "education",
      "request_text": "How much of the course fee can I manage without cutting into essentials? I need to decide by 14 July 2025. I've been quoted INR 553,000 for the course.",
      "allows_partial_payment": false,
      "request_date": "2025-05-06",
      "desired_completion_date": "2025-07-14",
      "home_currency": "INR",
      "current_balance": 283365.0,
      "minimum_balance_to_keep": 145500.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 14 July 2025. None of the available options keeps the INR 145,500 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2025-05-06",
          "balance": 283365.0,
          "min_balance": 145500.0
        },
        {
          "day": 5,
          "date": "2025-05-11",
          "balance": 255817.9,
          "min_balance": 145500.0
        },
        {
          "day": 10,
          "date": "2025-05-16",
          "balance": 147678.74,
          "min_balance": 145500.0
        },
        {
          "day": 15,
          "date": "2025-05-21",
          "balance": 129844.01,
          "min_balance": 145500.0
        },
        {
          "day": 20,
          "date": "2025-05-26",
          "balance": 362152.11,
          "min_balance": 145500.0
        },
        {
          "day": 25,
          "date": "2025-05-31",
          "balance": 338824.21,
          "min_balance": 145500.0
        },
        {
          "day": 30,
          "date": "2025-06-05",
          "balance": 260257.75,
          "min_balance": 145500.0
        },
        {
          "day": 35,
          "date": "2025-06-10",
          "balance": 232710.65,
          "min_balance": 145500.0
        },
        {
          "day": 40,
          "date": "2025-06-15",
          "balance": 129555.3,
          "min_balance": 145500.0
        },
        {
          "day": 45,
          "date": "2025-06-20",
          "balance": 106736.76,
          "min_balance": 145500.0
        },
        {
          "day": 50,
          "date": "2025-06-25",
          "balance": 339044.86,
          "min_balance": 145500.0
        },
        {
          "day": 55,
          "date": "2025-06-30",
          "balance": 315716.96,
          "min_balance": 145500.0
        },
        {
          "day": 60,
          "date": "2025-07-05",
          "balance": 237150.5,
          "min_balance": 145500.0
        },
        {
          "day": 65,
          "date": "2025-07-10",
          "balance": 209603.4,
          "min_balance": 145500.0
        },
        {
          "day": 70,
          "date": "2025-07-15",
          "balance": 106448.05,
          "min_balance": 145500.0
        },
        {
          "day": 75,
          "date": "2025-07-20",
          "balance": 83629.51,
          "min_balance": 145500.0
        },
        {
          "day": 80,
          "date": "2025-07-25",
          "balance": 315937.61,
          "min_balance": 145500.0
        },
        {
          "day": 85,
          "date": "2025-07-30",
          "balance": 292609.71,
          "min_balance": 145500.0
        },
        {
          "day": 90,
          "date": "2025-08-04",
          "balance": 221722.9,
          "min_balance": 145500.0
        }
      ]
    },
    {
      "request_id": "request_96",
      "user_id": "user_96",
      "requested_amount": 90200.0,
      "currency": "INR",
      "request_type": "purchase",
      "request_text": "I've been quoted INR 90,200 for the laptop. Would paying for the laptop today leave enough for my regular expenses?",
      "allows_partial_payment": false,
      "request_date": "2026-01-03",
      "desired_completion_date": "2026-03-12",
      "home_currency": "INR",
      "current_balance": 161635.49,
      "minimum_balance_to_keep": 56500.0,
      "amount_safe_to_pay": 55054.07,
      "affordability_status": "affordable_with_plan",
      "recommended_payment_method": "installments",
      "payment_plan": "2026-01-10:31269.33|2026-02-09:31269.33|2026-03-11:31269.33",
      "earliest_date_for_full_payment": "2026-01-15",
      "spending_changes_needed": "none",
      "decision_explanation": "Use 3 installments of INR 31,269.33, starting 10 January 2026. This leaves at least INR 56,500 available.",
      "curve": [
        {
          "day": 0,
          "date": "2026-01-03",
          "balance": 158793.23,
          "min_balance": 56500.0
        },
        {
          "day": 5,
          "date": "2026-01-08",
          "balance": 136668.98,
          "min_balance": 56500.0
        },
        {
          "day": 10,
          "date": "2026-01-13",
          "balance": 115053.87,
          "min_balance": 56500.0
        },
        {
          "day": 15,
          "date": "2026-01-18",
          "balance": 266211.72,
          "min_balance": 56500.0
        },
        {
          "day": 20,
          "date": "2026-01-23",
          "balance": 264034.95,
          "min_balance": 56500.0
        },
        {
          "day": 25,
          "date": "2026-01-28",
          "balance": 251246.68,
          "min_balance": 56500.0
        },
        {
          "day": 30,
          "date": "2026-02-02",
          "balance": 222675.3,
          "min_balance": 56500.0
        },
        {
          "day": 35,
          "date": "2026-02-07",
          "balance": 197708.79,
          "min_balance": 56500.0
        },
        {
          "day": 40,
          "date": "2026-02-12",
          "balance": 176093.68,
          "min_balance": 56500.0
        },
        {
          "day": 45,
          "date": "2026-02-17",
          "balance": 248888.27,
          "min_balance": 56500.0
        },
        {
          "day": 50,
          "date": "2026-02-22",
          "balance": 245074.76,
          "min_balance": 56500.0
        },
        {
          "day": 55,
          "date": "2026-02-27",
          "balance": 237557.75,
          "min_balance": 56500.0
        },
        {
          "day": 60,
          "date": "2026-03-04",
          "balance": 200872.85,
          "min_balance": 56500.0
        },
        {
          "day": 65,
          "date": "2026-03-09",
          "balance": 178748.6,
          "min_balance": 56500.0
        },
        {
          "day": 70,
          "date": "2026-03-14",
          "balance": 153633.69,
          "min_balance": 56500.0
        },
        {
          "day": 75,
          "date": "2026-03-19",
          "balance": 228291.34,
          "min_balance": 56500.0
        },
        {
          "day": 80,
          "date": "2026-03-24",
          "balance": 223411.53,
          "min_balance": 56500.0
        },
        {
          "day": 85,
          "date": "2026-03-29",
          "balance": 213326.3,
          "min_balance": 56500.0
        },
        {
          "day": 90,
          "date": "2026-04-03",
          "balance": 181912.66,
          "min_balance": 56500.0
        }
      ]
    },
    {
      "request_id": "request_97",
      "user_id": "user_97",
      "requested_amount": 23496.0,
      "currency": "ZAR",
      "request_type": "housing",
      "request_text": "How much of the rental deposit can I safely pay today? I've been asked to pay ZAR 23,496 as the rental deposit.",
      "allows_partial_payment": false,
      "request_date": "2024-03-05",
      "desired_completion_date": "2024-05-24",
      "home_currency": "ZAR",
      "current_balance": 38565.89,
      "minimum_balance_to_keep": 29700.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 24 May 2024. None of the available options keeps the ZAR 29,700 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2024-03-05",
          "balance": 36975.24,
          "min_balance": 29700.0
        },
        {
          "day": 5,
          "date": "2024-03-10",
          "balance": 33723.43,
          "min_balance": 29700.0
        },
        {
          "day": 10,
          "date": "2024-03-15",
          "balance": 98022.66,
          "min_balance": 29700.0
        },
        {
          "day": 15,
          "date": "2024-03-20",
          "balance": 95777.78,
          "min_balance": 29700.0
        },
        {
          "day": 20,
          "date": "2024-03-25",
          "balance": 93494.81,
          "min_balance": 29700.0
        },
        {
          "day": 25,
          "date": "2024-03-30",
          "balance": 89931.02,
          "min_balance": 29700.0
        },
        {
          "day": 30,
          "date": "2024-04-04",
          "balance": 74970.38,
          "min_balance": 29700.0
        },
        {
          "day": 35,
          "date": "2024-04-09",
          "balance": 70127.92,
          "min_balance": 29700.0
        },
        {
          "day": 40,
          "date": "2024-04-14",
          "balance": 63587.15,
          "min_balance": 29700.0
        },
        {
          "day": 45,
          "date": "2024-04-19",
          "balance": 96762.27,
          "min_balance": 29700.0
        },
        {
          "day": 50,
          "date": "2024-04-24",
          "balance": 95574.87,
          "min_balance": 29700.0
        },
        {
          "day": 55,
          "date": "2024-04-29",
          "balance": 90915.51,
          "min_balance": 29700.0
        },
        {
          "day": 60,
          "date": "2024-05-04",
          "balance": 75954.87,
          "min_balance": 29700.0
        },
        {
          "day": 65,
          "date": "2024-05-09",
          "balance": 71112.41,
          "min_balance": 29700.0
        },
        {
          "day": 70,
          "date": "2024-05-14",
          "balance": 64571.64,
          "min_balance": 29700.0
        },
        {
          "day": 75,
          "date": "2024-05-19",
          "balance": 97746.76,
          "min_balance": 29700.0
        },
        {
          "day": 80,
          "date": "2024-05-24",
          "balance": 96559.36,
          "min_balance": 29700.0
        },
        {
          "day": 85,
          "date": "2024-05-29",
          "balance": 91900.0,
          "min_balance": 29700.0
        },
        {
          "day": 90,
          "date": "2024-06-03",
          "balance": 77601.22,
          "min_balance": 29700.0
        }
      ]
    },
    {
      "request_id": "request_98",
      "user_id": "user_98",
      "requested_amount": 27148.0,
      "currency": "ZAR",
      "request_type": "travel",
      "request_text": "I've found a travel option for ZAR 27,148. I need to complete it by 15 October 2025. Can I book the family trip now and still cover my usual expenses?",
      "allows_partial_payment": false,
      "request_date": "2025-08-07",
      "desired_completion_date": "2025-10-15",
      "home_currency": "ZAR",
      "current_balance": 47244.7,
      "minimum_balance_to_keep": 30000.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 15 October 2025. None of the available options keeps the ZAR 30,000 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2025-08-07",
          "balance": 45134.98,
          "min_balance": 30000.0
        },
        {
          "day": 5,
          "date": "2025-08-12",
          "balance": 40712.34,
          "min_balance": 30000.0
        },
        {
          "day": 10,
          "date": "2025-08-17",
          "balance": 71553.61,
          "min_balance": 30000.0
        },
        {
          "day": 15,
          "date": "2025-08-22",
          "balance": 66335.73,
          "min_balance": 30000.0
        },
        {
          "day": 20,
          "date": "2025-08-27",
          "balance": 59189.66,
          "min_balance": 30000.0
        },
        {
          "day": 25,
          "date": "2025-09-01",
          "balance": 51962.37,
          "min_balance": 30000.0
        },
        {
          "day": 30,
          "date": "2025-09-06",
          "balance": 39160.01,
          "min_balance": 30000.0
        },
        {
          "day": 35,
          "date": "2025-09-11",
          "balance": 33884.85,
          "min_balance": 30000.0
        },
        {
          "day": 40,
          "date": "2025-09-16",
          "balance": 63468.92,
          "min_balance": 30000.0
        },
        {
          "day": 45,
          "date": "2025-09-21",
          "balance": 61083.29,
          "min_balance": 30000.0
        },
        {
          "day": 50,
          "date": "2025-09-26",
          "balance": 51104.97,
          "min_balance": 30000.0
        },
        {
          "day": 55,
          "date": "2025-10-01",
          "balance": 43877.68,
          "min_balance": 30000.0
        },
        {
          "day": 60,
          "date": "2025-10-06",
          "balance": 31075.32,
          "min_balance": 30000.0
        },
        {
          "day": 65,
          "date": "2025-10-11",
          "balance": 25800.16,
          "min_balance": 30000.0
        },
        {
          "day": 70,
          "date": "2025-10-16",
          "balance": 55384.23,
          "min_balance": 30000.0
        },
        {
          "day": 75,
          "date": "2025-10-21",
          "balance": 52998.6,
          "min_balance": 30000.0
        },
        {
          "day": 80,
          "date": "2025-10-26",
          "balance": 43020.28,
          "min_balance": 30000.0
        },
        {
          "day": 85,
          "date": "2025-10-31",
          "balance": 39336.21,
          "min_balance": 30000.0
        },
        {
          "day": 90,
          "date": "2025-11-05",
          "balance": 22990.63,
          "min_balance": 30000.0
        }
      ]
    },
    {
      "request_id": "request_99",
      "user_id": "user_99",
      "requested_amount": 18062.0,
      "currency": "ZAR",
      "request_type": "emergency_expense",
      "request_text": "Would paying the repair bill today take me below the balance I need to keep? I need to decide by 14 July 2026. The repair I need is priced at ZAR 18,062.",
      "allows_partial_payment": false,
      "request_date": "2026-07-04",
      "desired_completion_date": "2026-07-14",
      "home_currency": "ZAR",
      "current_balance": 86706.58,
      "minimum_balance_to_keep": 49100.0,
      "amount_safe_to_pay": 16618.43,
      "affordability_status": "affordable_later",
      "recommended_payment_method": "wait",
      "payment_plan": "2026-07-15:18062",
      "earliest_date_for_full_payment": "2026-07-15",
      "spending_changes_needed": "none",
      "decision_explanation": "Pay ZAR 18,062 in full on 15 July 2026. Paying earlier would take the balance below the ZAR 49,100 minimum.",
      "curve": [
        {
          "day": 0,
          "date": "2026-07-04",
          "balance": 86706.58,
          "min_balance": 49100.0
        },
        {
          "day": 5,
          "date": "2026-07-09",
          "balance": 72537.35,
          "min_balance": 49100.0
        },
        {
          "day": 10,
          "date": "2026-07-14",
          "balance": 65718.43,
          "min_balance": 49100.0
        },
        {
          "day": 15,
          "date": "2026-07-19",
          "balance": 173753.97,
          "min_balance": 49100.0
        },
        {
          "day": 20,
          "date": "2026-07-24",
          "balance": 169497.83,
          "min_balance": 49100.0
        },
        {
          "day": 25,
          "date": "2026-07-29",
          "balance": 161282.03,
          "min_balance": 49100.0
        },
        {
          "day": 30,
          "date": "2026-08-03",
          "balance": 151670.56,
          "min_balance": 49100.0
        },
        {
          "day": 35,
          "date": "2026-08-08",
          "balance": 142064.16,
          "min_balance": 49100.0
        },
        {
          "day": 40,
          "date": "2026-08-13",
          "balance": 131547.76,
          "min_balance": 49100.0
        },
        {
          "day": 45,
          "date": "2026-08-18",
          "balance": 185502.57,
          "min_balance": 49100.0
        },
        {
          "day": 50,
          "date": "2026-08-23",
          "balance": 179862.58,
          "min_balance": 49100.0
        },
        {
          "day": 55,
          "date": "2026-08-28",
          "balance": 174446.28,
          "min_balance": 49100.0
        },
        {
          "day": 60,
          "date": "2026-09-02",
          "balance": 160673.44,
          "min_balance": 49100.0
        },
        {
          "day": 65,
          "date": "2026-09-07",
          "balance": 153703.65,
          "min_balance": 49100.0
        },
        {
          "day": 70,
          "date": "2026-09-12",
          "balance": 139531.74,
          "min_balance": 49100.0
        },
        {
          "day": 75,
          "date": "2026-09-17",
          "balance": 193486.55,
          "min_balance": 49100.0
        },
        {
          "day": 80,
          "date": "2026-09-22",
          "balance": 187846.56,
          "min_balance": 49100.0
        },
        {
          "day": 85,
          "date": "2026-09-27",
          "balance": 183463.06,
          "min_balance": 49100.0
        },
        {
          "day": 90,
          "date": "2026-10-02",
          "balance": 168657.42,
          "min_balance": 49100.0
        }
      ]
    },
    {
      "request_id": "request_100",
      "user_id": "user_100",
      "requested_amount": 37114.0,
      "currency": "ZAR",
      "request_type": "purchase",
      "request_text": "I'm considering a ZAR 37,114 laptop. How much of the laptop price can I safely cover today?",
      "allows_partial_payment": false,
      "request_date": "2024-06-06",
      "desired_completion_date": "2024-08-16",
      "home_currency": "ZAR",
      "current_balance": 68363.53,
      "minimum_balance_to_keep": 32500.0,
      "amount_safe_to_pay": 16768.12,
      "affordability_status": "affordable_with_plan",
      "recommended_payment_method": "installments",
      "payment_plan": "2024-06-13:12866.19|2024-07-14:12866.19|2024-08-14:12866.19",
      "earliest_date_for_full_payment": "2024-06-15",
      "spending_changes_needed": "none",
      "decision_explanation": "Use 3 installments of ZAR 12,866.19, starting 13 June 2024. This leaves at least ZAR 32,500 available.",
      "curve": [
        {
          "day": 0,
          "date": "2024-06-06",
          "balance": 62771.43,
          "min_balance": 32500.0
        },
        {
          "day": 5,
          "date": "2024-06-11",
          "balance": 52981.08,
          "min_balance": 32500.0
        },
        {
          "day": 10,
          "date": "2024-06-16",
          "balance": 130964.15,
          "min_balance": 32500.0
        },
        {
          "day": 15,
          "date": "2024-06-21",
          "balance": 128099.85,
          "min_balance": 32500.0
        },
        {
          "day": 20,
          "date": "2024-06-26",
          "balance": 128099.85,
          "min_balance": 32500.0
        },
        {
          "day": 25,
          "date": "2024-07-01",
          "balance": 107555.28,
          "min_balance": 32500.0
        },
        {
          "day": 30,
          "date": "2024-07-06",
          "balance": 95272.14,
          "min_balance": 32500.0
        },
        {
          "day": 35,
          "date": "2024-07-11",
          "balance": 86509.19,
          "min_balance": 32500.0
        },
        {
          "day": 40,
          "date": "2024-07-16",
          "balance": 121812.26,
          "min_balance": 32500.0
        },
        {
          "day": 45,
          "date": "2024-07-21",
          "balance": 118947.96,
          "min_balance": 32500.0
        },
        {
          "day": 50,
          "date": "2024-07-26",
          "balance": 118947.96,
          "min_balance": 32500.0
        },
        {
          "day": 55,
          "date": "2024-07-31",
          "balance": 112608.42,
          "min_balance": 32500.0
        },
        {
          "day": 60,
          "date": "2024-08-05",
          "balance": 90684.95,
          "min_balance": 32500.0
        },
        {
          "day": 65,
          "date": "2024-08-10",
          "balance": 79338.86,
          "min_balance": 32500.0
        },
        {
          "day": 70,
          "date": "2024-08-15",
          "balance": 112660.37,
          "min_balance": 32500.0
        },
        {
          "day": 75,
          "date": "2024-08-20",
          "balance": 109796.07,
          "min_balance": 32500.0
        },
        {
          "day": 80,
          "date": "2024-08-25",
          "balance": 109796.07,
          "min_balance": 32500.0
        },
        {
          "day": 85,
          "date": "2024-08-30",
          "balance": 103456.53,
          "min_balance": 32500.0
        },
        {
          "day": 90,
          "date": "2024-09-04",
          "balance": 84055.19,
          "min_balance": 32500.0
        }
      ]
    },
    {
      "request_id": "request_101",
      "user_id": "user_101",
      "requested_amount": 143500.0,
      "currency": "INR",
      "request_type": "investment",
      "request_text": "Is it safer to invest now, invest a smaller amount, or wait? I'm considering setting aside INR 143,500 for an investment.",
      "allows_partial_payment": false,
      "request_date": "2025-11-03",
      "desired_completion_date": "2025-11-14",
      "home_currency": "INR",
      "current_balance": 465868.5,
      "minimum_balance_to_keep": 187400.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 14 November 2025. None of the available options keeps the INR 187,400 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2025-11-03",
          "balance": 420158.5,
          "min_balance": 187400.0
        },
        {
          "day": 5,
          "date": "2025-11-08",
          "balance": 324151.79,
          "min_balance": 187400.0
        },
        {
          "day": 10,
          "date": "2025-11-13",
          "balance": 306609.54,
          "min_balance": 187400.0
        },
        {
          "day": 15,
          "date": "2025-11-18",
          "balance": 514829.35,
          "min_balance": 187400.0
        },
        {
          "day": 20,
          "date": "2025-11-23",
          "balance": 507478.84,
          "min_balance": 187400.0
        },
        {
          "day": 25,
          "date": "2025-11-28",
          "balance": 460526.43,
          "min_balance": 187400.0
        },
        {
          "day": 30,
          "date": "2025-12-03",
          "balance": 334676.93,
          "min_balance": 187400.0
        },
        {
          "day": 35,
          "date": "2025-12-08",
          "balance": 254330.22,
          "min_balance": 187400.0
        },
        {
          "day": 40,
          "date": "2025-12-13",
          "balance": 236787.97,
          "min_balance": 187400.0
        },
        {
          "day": 45,
          "date": "2025-12-18",
          "balance": 445007.78,
          "min_balance": 187400.0
        },
        {
          "day": 50,
          "date": "2025-12-23",
          "balance": 437657.27,
          "min_balance": 187400.0
        },
        {
          "day": 55,
          "date": "2025-12-28",
          "balance": 390704.86,
          "min_balance": 187400.0
        },
        {
          "day": 60,
          "date": "2026-01-02",
          "balance": 294905.36,
          "min_balance": 187400.0
        },
        {
          "day": 65,
          "date": "2026-01-07",
          "balance": 220706.15,
          "min_balance": 187400.0
        },
        {
          "day": 70,
          "date": "2026-01-12",
          "balance": 166966.4,
          "min_balance": 187400.0
        },
        {
          "day": 75,
          "date": "2026-01-17",
          "balance": 375186.21,
          "min_balance": 187400.0
        },
        {
          "day": 80,
          "date": "2026-01-22",
          "balance": 367835.7,
          "min_balance": 187400.0
        },
        {
          "day": 85,
          "date": "2026-01-27",
          "balance": 328546.05,
          "min_balance": 187400.0
        },
        {
          "day": 90,
          "date": "2026-02-01",
          "balance": 229626.79,
          "min_balance": 187400.0
        }
      ]
    },
    {
      "request_id": "request_102",
      "user_id": "user_102",
      "requested_amount": 1716.0,
      "currency": "EUR",
      "request_type": "purchase",
      "request_text": "The laptop comes to EUR 1,716. I need to complete it by 12 June 2026. Can I make this purchase without dipping into the balance I want to keep?",
      "allows_partial_payment": false,
      "request_date": "2026-04-05",
      "desired_completion_date": "2026-06-12",
      "home_currency": "EUR",
      "current_balance": 4643.74,
      "minimum_balance_to_keep": 900.0,
      "amount_safe_to_pay": 1716.0,
      "affordability_status": "affordable_with_plan",
      "recommended_payment_method": "installments",
      "payment_plan": "2026-04-05:594.88|2026-05-05:594.88|2026-06-04:594.88",
      "earliest_date_for_full_payment": "2026-04-05",
      "spending_changes_needed": "none",
      "decision_explanation": "Use 3 installments of EUR 594.88, starting 5 April 2026. This leaves at least EUR 900 available.",
      "curve": [
        {
          "day": 0,
          "date": "2026-04-05",
          "balance": 4510.61,
          "min_balance": 900.0
        },
        {
          "day": 5,
          "date": "2026-04-10",
          "balance": 4145.14,
          "min_balance": 900.0
        },
        {
          "day": 10,
          "date": "2026-04-15",
          "balance": 4032.9,
          "min_balance": 900.0
        },
        {
          "day": 15,
          "date": "2026-04-20",
          "balance": 4766.79,
          "min_balance": 900.0
        },
        {
          "day": 20,
          "date": "2026-04-25",
          "balance": 4734.36,
          "min_balance": 900.0
        },
        {
          "day": 25,
          "date": "2026-04-30",
          "balance": 4430.27,
          "min_balance": 900.0
        },
        {
          "day": 30,
          "date": "2026-05-05",
          "balance": 4037.74,
          "min_balance": 900.0
        },
        {
          "day": 35,
          "date": "2026-05-10",
          "balance": 3758.27,
          "min_balance": 900.0
        },
        {
          "day": 40,
          "date": "2026-05-15",
          "balance": 3646.03,
          "min_balance": 900.0
        },
        {
          "day": 45,
          "date": "2026-05-20",
          "balance": 4379.92,
          "min_balance": 900.0
        },
        {
          "day": 50,
          "date": "2026-05-25",
          "balance": 4347.49,
          "min_balance": 900.0
        },
        {
          "day": 55,
          "date": "2026-05-30",
          "balance": 4083.23,
          "min_balance": 900.0
        },
        {
          "day": 60,
          "date": "2026-06-04",
          "balance": 3698.0,
          "min_balance": 900.0
        },
        {
          "day": 65,
          "date": "2026-06-09",
          "balance": 3451.97,
          "min_balance": 900.0
        },
        {
          "day": 70,
          "date": "2026-06-14",
          "balance": 3303.5,
          "min_balance": 900.0
        },
        {
          "day": 75,
          "date": "2026-06-19",
          "balance": 3192.88,
          "min_balance": 900.0
        },
        {
          "day": 80,
          "date": "2026-06-24",
          "balance": 3960.62,
          "min_balance": 900.0
        },
        {
          "day": 85,
          "date": "2026-06-29",
          "balance": 3838.8,
          "min_balance": 900.0
        },
        {
          "day": 90,
          "date": "2026-07-04",
          "balance": 3311.13,
          "min_balance": 900.0
        }
      ]
    },
    {
      "request_id": "request_103",
      "user_id": "user_103",
      "requested_amount": 368300.0,
      "currency": "INR",
      "request_type": "travel",
      "request_text": "Can I book the family trip now and still cover my usual expenses? I need to decide by 7 October 2024. The total trip cost is INR 368,300.",
      "allows_partial_payment": false,
      "request_date": "2024-09-07",
      "desired_completion_date": "2024-10-07",
      "home_currency": "INR",
      "current_balance": 168749.0,
      "minimum_balance_to_keep": 125500.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 7 October 2024. None of the available options keeps the INR 125,500 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2024-09-07",
          "balance": 157697.96,
          "min_balance": 125500.0
        },
        {
          "day": 5,
          "date": "2024-09-12",
          "balance": 125578.31,
          "min_balance": 125500.0
        },
        {
          "day": 10,
          "date": "2024-09-17",
          "balance": 262294.91,
          "min_balance": 125500.0
        },
        {
          "day": 15,
          "date": "2024-09-22",
          "balance": 243943.31,
          "min_balance": 125500.0
        },
        {
          "day": 20,
          "date": "2024-09-27",
          "balance": 232638.18,
          "min_balance": 125500.0
        },
        {
          "day": 25,
          "date": "2024-10-02",
          "balance": 207362.97,
          "min_balance": 125500.0
        },
        {
          "day": 30,
          "date": "2024-10-07",
          "balance": 133304.94,
          "min_balance": 125500.0
        },
        {
          "day": 35,
          "date": "2024-10-12",
          "balance": 108675.29,
          "min_balance": 125500.0
        },
        {
          "day": 40,
          "date": "2024-10-17",
          "balance": 245391.89,
          "min_balance": 125500.0
        },
        {
          "day": 45,
          "date": "2024-10-22",
          "balance": 227040.29,
          "min_balance": 125500.0
        },
        {
          "day": 50,
          "date": "2024-10-27",
          "balance": 215735.16,
          "min_balance": 125500.0
        },
        {
          "day": 55,
          "date": "2024-11-01",
          "balance": 190459.95,
          "min_balance": 125500.0
        },
        {
          "day": 60,
          "date": "2024-11-06",
          "balance": 119962.96,
          "min_balance": 125500.0
        },
        {
          "day": 65,
          "date": "2024-11-11",
          "balance": 95912.27,
          "min_balance": 125500.0
        },
        {
          "day": 70,
          "date": "2024-11-16",
          "balance": 238225.19,
          "min_balance": 125500.0
        },
        {
          "day": 75,
          "date": "2024-11-21",
          "balance": 215167.85,
          "min_balance": 125500.0
        },
        {
          "day": 80,
          "date": "2024-11-26",
          "balance": 204310.18,
          "min_balance": 125500.0
        },
        {
          "day": 85,
          "date": "2024-12-01",
          "balance": 173556.93,
          "min_balance": 125500.0
        },
        {
          "day": 90,
          "date": "2024-12-06",
          "balance": 103059.94,
          "min_balance": 125500.0
        }
      ]
    },
    {
      "request_id": "request_104",
      "user_id": "user_104",
      "requested_amount": 17204.0,
      "currency": "ZAR",
      "request_type": "purchase",
      "request_text": "The laptop costs ZAR 17,204. Can I buy the laptop now without making next month's bills tight?",
      "allows_partial_payment": false,
      "request_date": "2025-02-04",
      "desired_completion_date": "2025-04-15",
      "home_currency": "ZAR",
      "current_balance": 64021.7,
      "minimum_balance_to_keep": 24700.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 15 April 2025. None of the available options keeps the ZAR 24,700 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2025-02-04",
          "balance": 62372.83,
          "min_balance": 24700.0
        },
        {
          "day": 5,
          "date": "2025-02-09",
          "balance": 55673.68,
          "min_balance": 24700.0
        },
        {
          "day": 10,
          "date": "2025-02-14",
          "balance": 42856.97,
          "min_balance": 24700.0
        },
        {
          "day": 15,
          "date": "2025-02-19",
          "balance": 39421.26,
          "min_balance": 24700.0
        },
        {
          "day": 20,
          "date": "2025-02-24",
          "balance": 44747.52,
          "min_balance": 24700.0
        },
        {
          "day": 25,
          "date": "2025-03-01",
          "balance": 29505.37,
          "min_balance": 24700.0
        },
        {
          "day": 30,
          "date": "2025-03-06",
          "balance": 24772.54,
          "min_balance": 24700.0
        },
        {
          "day": 35,
          "date": "2025-03-11",
          "balance": 15118.19,
          "min_balance": 24700.0
        },
        {
          "day": 40,
          "date": "2025-03-16",
          "balance": 8949.14,
          "min_balance": 24700.0
        },
        {
          "day": 45,
          "date": "2025-03-21",
          "balance": 5220.0,
          "min_balance": 24700.0
        },
        {
          "day": 50,
          "date": "2025-03-26",
          "balance": 10073.33,
          "min_balance": 24700.0
        },
        {
          "day": 55,
          "date": "2025-03-31",
          "balance": 7631.41,
          "min_balance": 24700.0
        },
        {
          "day": 60,
          "date": "2025-04-05",
          "balance": -7009.23,
          "min_balance": 24700.0
        },
        {
          "day": 65,
          "date": "2025-04-10",
          "balance": -16487.38,
          "min_balance": 24700.0
        },
        {
          "day": 70,
          "date": "2025-04-15",
          "balance": -22246.49,
          "min_balance": 24700.0
        },
        {
          "day": 75,
          "date": "2025-04-20",
          "balance": -25682.2,
          "min_balance": 24700.0
        },
        {
          "day": 80,
          "date": "2025-04-25",
          "balance": -21502.24,
          "min_balance": 24700.0
        },
        {
          "day": 85,
          "date": "2025-04-30",
          "balance": -24920.32,
          "min_balance": 24700.0
        },
        {
          "day": 90,
          "date": "2025-05-05",
          "balance": -39560.96,
          "min_balance": 24700.0
        }
      ]
    },
    {
      "request_id": "request_105",
      "user_id": "user_105",
      "requested_amount": 53500.0,
      "currency": "INR",
      "request_type": "debt_repayment",
      "request_text": "Can I clear this additional amount without putting upcoming bills at risk? I'm planning an extra loan payment of INR 53,500.",
      "allows_partial_payment": false,
      "request_date": "2026-06-08",
      "desired_completion_date": "2026-06-14",
      "home_currency": "INR",
      "current_balance": 147831.8,
      "minimum_balance_to_keep": 73900.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 14 June 2026. None of the available options keeps the INR 73,900 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2026-06-08",
          "balance": 147831.8,
          "min_balance": 73900.0
        },
        {
          "day": 5,
          "date": "2026-06-13",
          "balance": 123120.09,
          "min_balance": 73900.0
        },
        {
          "day": 10,
          "date": "2026-06-18",
          "balance": 225276.73,
          "min_balance": 73900.0
        },
        {
          "day": 15,
          "date": "2026-06-23",
          "balance": 205890.17,
          "min_balance": 73900.0
        },
        {
          "day": 20,
          "date": "2026-06-28",
          "balance": 192552.86,
          "min_balance": 73900.0
        },
        {
          "day": 25,
          "date": "2026-07-03",
          "balance": 138751.2,
          "min_balance": 73900.0
        },
        {
          "day": 30,
          "date": "2026-07-08",
          "balance": 82130.0,
          "min_balance": 73900.0
        },
        {
          "day": 35,
          "date": "2026-07-13",
          "balance": 57418.29,
          "min_balance": 73900.0
        },
        {
          "day": 40,
          "date": "2026-07-18",
          "balance": 159574.93,
          "min_balance": 73900.0
        },
        {
          "day": 45,
          "date": "2026-07-23",
          "balance": 140188.37,
          "min_balance": 73900.0
        },
        {
          "day": 50,
          "date": "2026-07-28",
          "balance": 126851.06,
          "min_balance": 73900.0
        },
        {
          "day": 55,
          "date": "2026-08-02",
          "balance": 73049.4,
          "min_balance": 73900.0
        },
        {
          "day": 60,
          "date": "2026-08-07",
          "balance": 16428.2,
          "min_balance": 73900.0
        },
        {
          "day": 65,
          "date": "2026-08-12",
          "balance": -1813.19,
          "min_balance": 73900.0
        },
        {
          "day": 70,
          "date": "2026-08-17",
          "balance": 102547.85,
          "min_balance": 73900.0
        },
        {
          "day": 75,
          "date": "2026-08-22",
          "balance": 79157.35,
          "min_balance": 73900.0
        },
        {
          "day": 80,
          "date": "2026-08-27",
          "balance": 63238.46,
          "min_balance": 73900.0
        },
        {
          "day": 85,
          "date": "2026-09-01",
          "balance": 49577.73,
          "min_balance": 73900.0
        },
        {
          "day": 90,
          "date": "2026-09-06",
          "balance": -33931.14,
          "min_balance": 73900.0
        }
      ]
    },
    {
      "request_id": "request_106",
      "user_id": "user_106",
      "requested_amount": 2207.7,
      "currency": "EUR",
      "request_type": "education",
      "request_text": "I'm considering a professional course priced at EUR 2,207.70. I need to complete it by 15 February 2025. Is it safe to cover the full course fee by the deadline?",
      "allows_partial_payment": false,
      "request_date": "2024-12-03",
      "desired_completion_date": "2025-02-15",
      "home_currency": "EUR",
      "current_balance": 2601.7,
      "minimum_balance_to_keep": 1200.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 15 February 2025. None of the available options keeps the EUR 1,200 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2024-12-03",
          "balance": 2077.0,
          "min_balance": 1200.0
        },
        {
          "day": 5,
          "date": "2024-12-08",
          "balance": 1799.16,
          "min_balance": 1200.0
        },
        {
          "day": 10,
          "date": "2024-12-13",
          "balance": 1373.31,
          "min_balance": 1200.0
        },
        {
          "day": 15,
          "date": "2024-12-18",
          "balance": 2972.1,
          "min_balance": 1200.0
        },
        {
          "day": 20,
          "date": "2024-12-23",
          "balance": 2825.3,
          "min_balance": 1200.0
        },
        {
          "day": 25,
          "date": "2024-12-28",
          "balance": 2546.46,
          "min_balance": 1200.0
        },
        {
          "day": 30,
          "date": "2025-01-02",
          "balance": 2379.85,
          "min_balance": 1200.0
        },
        {
          "day": 35,
          "date": "2025-01-07",
          "balance": 1577.31,
          "min_balance": 1200.0
        },
        {
          "day": 40,
          "date": "2025-01-12",
          "balance": 1151.46,
          "min_balance": 1200.0
        },
        {
          "day": 45,
          "date": "2025-01-17",
          "balance": 2750.25,
          "min_balance": 1200.0
        },
        {
          "day": 50,
          "date": "2025-01-22",
          "balance": 2647.34,
          "min_balance": 1200.0
        },
        {
          "day": 55,
          "date": "2025-01-27",
          "balance": 2324.61,
          "min_balance": 1200.0
        },
        {
          "day": 60,
          "date": "2025-02-01",
          "balance": 2237.63,
          "min_balance": 1200.0
        },
        {
          "day": 65,
          "date": "2025-02-06",
          "balance": 1454.62,
          "min_balance": 1200.0
        },
        {
          "day": 70,
          "date": "2025-02-11",
          "balance": 1233.54,
          "min_balance": 1200.0
        },
        {
          "day": 75,
          "date": "2025-02-16",
          "balance": 2528.4,
          "min_balance": 1200.0
        },
        {
          "day": 80,
          "date": "2025-02-21",
          "balance": 2425.49,
          "min_balance": 1200.0
        },
        {
          "day": 85,
          "date": "2025-02-26",
          "balance": 2174.77,
          "min_balance": 1200.0
        },
        {
          "day": 90,
          "date": "2025-03-03",
          "balance": 1411.45,
          "min_balance": 1200.0
        }
      ]
    },
    {
      "request_id": "request_107",
      "user_id": "user_107",
      "requested_amount": 2534.4,
      "currency": "EUR",
      "request_type": "housing",
      "request_text": "How much of the rental deposit can I safely pay today? I need to decide by 4 July 2025. The landlord has asked for a deposit of EUR 2,534.40.",
      "allows_partial_payment": false,
      "request_date": "2025-05-05",
      "desired_completion_date": "2025-07-04",
      "home_currency": "EUR",
      "current_balance": 5054.52,
      "minimum_balance_to_keep": 1600.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 4 July 2025. None of the available options keeps the EUR 1,600 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2025-05-05",
          "balance": 5054.52,
          "min_balance": 1600.0
        },
        {
          "day": 5,
          "date": "2025-05-10",
          "balance": 4555.78,
          "min_balance": 1600.0
        },
        {
          "day": 10,
          "date": "2025-05-15",
          "balance": 5023.73,
          "min_balance": 1600.0
        },
        {
          "day": 15,
          "date": "2025-05-20",
          "balance": 4796.24,
          "min_balance": 1600.0
        },
        {
          "day": 20,
          "date": "2025-05-25",
          "balance": 4522.29,
          "min_balance": 1600.0
        },
        {
          "day": 25,
          "date": "2025-05-30",
          "balance": 4347.87,
          "min_balance": 1600.0
        },
        {
          "day": 30,
          "date": "2025-06-04",
          "balance": 3287.99,
          "min_balance": 1600.0
        },
        {
          "day": 35,
          "date": "2025-06-09",
          "balance": 3071.42,
          "min_balance": 1600.0
        },
        {
          "day": 40,
          "date": "2025-06-14",
          "balance": 2125.55,
          "min_balance": 1600.0
        },
        {
          "day": 45,
          "date": "2025-06-19",
          "balance": 3029.71,
          "min_balance": 1600.0
        },
        {
          "day": 50,
          "date": "2025-06-24",
          "balance": 2847.35,
          "min_balance": 1600.0
        },
        {
          "day": 55,
          "date": "2025-06-29",
          "balance": 2581.34,
          "min_balance": 1600.0
        },
        {
          "day": 60,
          "date": "2025-07-04",
          "balance": 1521.46,
          "min_balance": 1600.0
        },
        {
          "day": 65,
          "date": "2025-07-09",
          "balance": 1304.89,
          "min_balance": 1600.0
        },
        {
          "day": 70,
          "date": "2025-07-14",
          "balance": 359.02,
          "min_balance": 1600.0
        },
        {
          "day": 75,
          "date": "2025-07-19",
          "balance": 1263.18,
          "min_balance": 1600.0
        },
        {
          "day": 80,
          "date": "2025-07-24",
          "balance": 1080.82,
          "min_balance": 1600.0
        },
        {
          "day": 85,
          "date": "2025-07-29",
          "balance": 814.81,
          "min_balance": 1600.0
        },
        {
          "day": 90,
          "date": "2025-08-03",
          "balance": 529.39,
          "min_balance": 1600.0
        }
      ]
    },
    {
      "request_id": "request_108",
      "user_id": "user_108",
      "requested_amount": 55308.0,
      "currency": "ZAR",
      "request_type": "education",
      "request_text": "The course I want to take is ZAR 55,308. Should I pay for the course now, use installments, or wait?",
      "allows_partial_payment": false,
      "request_date": "2026-07-07",
      "desired_completion_date": "2026-07-26",
      "home_currency": "ZAR",
      "current_balance": 31936.4,
      "minimum_balance_to_keep": 24100.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 26 July 2026. None of the available options keeps the ZAR 24,100 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2026-07-07",
          "balance": 31936.4,
          "min_balance": 24100.0
        },
        {
          "day": 5,
          "date": "2026-07-12",
          "balance": 26747.56,
          "min_balance": 24100.0
        },
        {
          "day": 10,
          "date": "2026-07-17",
          "balance": 24219.42,
          "min_balance": 24100.0
        },
        {
          "day": 15,
          "date": "2026-07-22",
          "balance": 18713.93,
          "min_balance": 24100.0
        },
        {
          "day": 20,
          "date": "2026-07-27",
          "balance": 27307.56,
          "min_balance": 24100.0
        },
        {
          "day": 25,
          "date": "2026-08-01",
          "balance": 18571.94,
          "min_balance": 24100.0
        },
        {
          "day": 30,
          "date": "2026-08-06",
          "balance": 10815.86,
          "min_balance": 24100.0
        },
        {
          "day": 35,
          "date": "2026-08-11",
          "balance": 5627.02,
          "min_balance": 24100.0
        },
        {
          "day": 40,
          "date": "2026-08-16",
          "balance": 3856.78,
          "min_balance": 24100.0
        },
        {
          "day": 45,
          "date": "2026-08-21",
          "balance": -780.59,
          "min_balance": 24100.0
        },
        {
          "day": 50,
          "date": "2026-08-26",
          "balance": 6187.02,
          "min_balance": 24100.0
        },
        {
          "day": 55,
          "date": "2026-08-31",
          "balance": -367.3,
          "min_balance": 24100.0
        },
        {
          "day": 60,
          "date": "2026-09-05",
          "balance": -8239.1,
          "min_balance": 24100.0
        },
        {
          "day": 65,
          "date": "2026-09-10",
          "balance": -15493.52,
          "min_balance": 24100.0
        },
        {
          "day": 70,
          "date": "2026-09-15",
          "balance": -17263.76,
          "min_balance": 24100.0
        },
        {
          "day": 75,
          "date": "2026-09-20",
          "balance": -21901.13,
          "min_balance": 24100.0
        },
        {
          "day": 80,
          "date": "2026-09-25",
          "balance": -13815.52,
          "min_balance": 24100.0
        },
        {
          "day": 85,
          "date": "2026-09-30",
          "balance": -21487.84,
          "min_balance": 24100.0
        },
        {
          "day": 90,
          "date": "2026-10-05",
          "balance": -29359.64,
          "min_balance": 24100.0
        }
      ]
    },
    {
      "request_id": "request_109",
      "user_id": "user_109",
      "requested_amount": 1863.4,
      "currency": "EUR",
      "request_type": "family_transfer",
      "request_text": "Would sending the money now leave enough for my upcoming expenses? The amount I want to send is EUR 1,863.40.",
      "allows_partial_payment": false,
      "request_date": "2024-03-04",
      "desired_completion_date": "2024-05-26",
      "home_currency": "EUR",
      "current_balance": 2976.46,
      "minimum_balance_to_keep": 1700.0,
      "amount_safe_to_pay": 368.51,
      "affordability_status": "affordable_with_plan",
      "recommended_payment_method": "installments",
      "payment_plan": "2024-03-18:645.98|2024-04-18:645.98|2024-05-19:645.98",
      "earliest_date_for_full_payment": "2024-03-15",
      "spending_changes_needed": "none",
      "decision_explanation": "Use 3 installments of EUR 645.98, starting 18 March 2024. This leaves at least EUR 1,700 available.",
      "curve": [
        {
          "day": 0,
          "date": "2024-03-04",
          "balance": 2976.46,
          "min_balance": 1700.0
        },
        {
          "day": 5,
          "date": "2024-03-09",
          "balance": 2359.9,
          "min_balance": 1700.0
        },
        {
          "day": 10,
          "date": "2024-03-14",
          "balance": 2068.51,
          "min_balance": 1700.0
        },
        {
          "day": 15,
          "date": "2024-03-19",
          "balance": 6458.57,
          "min_balance": 1700.0
        },
        {
          "day": 20,
          "date": "2024-03-24",
          "balance": 6389.29,
          "min_balance": 1700.0
        },
        {
          "day": 25,
          "date": "2024-03-29",
          "balance": 5833.69,
          "min_balance": 1700.0
        },
        {
          "day": 30,
          "date": "2024-04-03",
          "balance": 4955.09,
          "min_balance": 1700.0
        },
        {
          "day": 35,
          "date": "2024-04-08",
          "balance": 4475.65,
          "min_balance": 1700.0
        },
        {
          "day": 40,
          "date": "2024-04-13",
          "balance": 4143.28,
          "min_balance": 1700.0
        },
        {
          "day": 45,
          "date": "2024-04-18",
          "balance": 6239.41,
          "min_balance": 1700.0
        },
        {
          "day": 50,
          "date": "2024-04-23",
          "balance": 5972.24,
          "min_balance": 1700.0
        },
        {
          "day": 55,
          "date": "2024-04-28",
          "balance": 5458.06,
          "min_balance": 1700.0
        },
        {
          "day": 60,
          "date": "2024-05-03",
          "balance": 4538.04,
          "min_balance": 1700.0
        },
        {
          "day": 65,
          "date": "2024-05-08",
          "balance": 4058.6,
          "min_balance": 1700.0
        },
        {
          "day": 70,
          "date": "2024-05-13",
          "balance": 3726.23,
          "min_balance": 1700.0
        },
        {
          "day": 75,
          "date": "2024-05-18",
          "balance": 5822.36,
          "min_balance": 1700.0
        },
        {
          "day": 80,
          "date": "2024-05-23",
          "balance": 5555.19,
          "min_balance": 1700.0
        },
        {
          "day": 85,
          "date": "2024-05-28",
          "balance": 5041.01,
          "min_balance": 1700.0
        },
        {
          "day": 90,
          "date": "2024-06-02",
          "balance": 4174.77,
          "min_balance": 1700.0
        }
      ]
    },
    {
      "request_id": "request_110",
      "user_id": "user_110",
      "requested_amount": 22352.0,
      "currency": "ZAR",
      "request_type": "family_transfer",
      "request_text": "I've been asked to transfer ZAR 22,352 to my family. I need to complete it by 11 October 2025. How much can I safely send to my family today?",
      "allows_partial_payment": false,
      "request_date": "2025-08-06",
      "desired_completion_date": "2025-10-11",
      "home_currency": "ZAR",
      "current_balance": 61229.53,
      "minimum_balance_to_keep": 11200.0,
      "amount_safe_to_pay": 17803.32,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 11 October 2025. None of the available options keeps the ZAR 11,200 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2025-08-06",
          "balance": 61229.53,
          "min_balance": 11200.0
        },
        {
          "day": 5,
          "date": "2025-08-11",
          "balance": 57116.65,
          "min_balance": 11200.0
        },
        {
          "day": 10,
          "date": "2025-08-16",
          "balance": 55149.72,
          "min_balance": 11200.0
        },
        {
          "day": 15,
          "date": "2025-08-21",
          "balance": 52996.25,
          "min_balance": 11200.0
        },
        {
          "day": 20,
          "date": "2025-08-26",
          "balance": 59169.8,
          "min_balance": 11200.0
        },
        {
          "day": 25,
          "date": "2025-08-31",
          "balance": 57022.65,
          "min_balance": 11200.0
        },
        {
          "day": 30,
          "date": "2025-09-05",
          "balance": 50487.46,
          "min_balance": 11200.0
        },
        {
          "day": 35,
          "date": "2025-09-10",
          "balance": 46970.28,
          "min_balance": 11200.0
        },
        {
          "day": 40,
          "date": "2025-09-15",
          "balance": 44407.65,
          "min_balance": 11200.0
        },
        {
          "day": 45,
          "date": "2025-09-20",
          "balance": 43624.49,
          "min_balance": 11200.0
        },
        {
          "day": 50,
          "date": "2025-09-25",
          "balance": 48427.73,
          "min_balance": 11200.0
        },
        {
          "day": 55,
          "date": "2025-09-30",
          "balance": 46280.58,
          "min_balance": 11200.0
        },
        {
          "day": 60,
          "date": "2025-10-05",
          "balance": 39745.39,
          "min_balance": 11200.0
        },
        {
          "day": 65,
          "date": "2025-10-10",
          "balance": 36228.21,
          "min_balance": 11200.0
        },
        {
          "day": 70,
          "date": "2025-10-15",
          "balance": 33665.58,
          "min_balance": 11200.0
        },
        {
          "day": 75,
          "date": "2025-10-20",
          "balance": 32882.42,
          "min_balance": 11200.0
        },
        {
          "day": 80,
          "date": "2025-10-25",
          "balance": 37685.66,
          "min_balance": 11200.0
        },
        {
          "day": 85,
          "date": "2025-10-30",
          "balance": 36880.61,
          "min_balance": 11200.0
        },
        {
          "day": 90,
          "date": "2025-11-04",
          "balance": 29003.32,
          "min_balance": 11200.0
        }
      ]
    },
    {
      "request_id": "request_111",
      "user_id": "user_111",
      "requested_amount": 16625000.0,
      "currency": "IDR",
      "request_type": "debt_repayment",
      "request_text": "Is the full extra repayment safe, or should I pay a smaller amount? I need to decide by 2 May 2026. I have IDR 16,625,000 in mind as an extra loan payment.",
      "allows_partial_payment": false,
      "request_date": "2026-04-03",
      "desired_completion_date": "2026-05-02",
      "home_currency": "IDR",
      "current_balance": 85204860.0,
      "minimum_balance_to_keep": 23022800.0,
      "amount_safe_to_pay": 16625000.0,
      "affordability_status": "affordable_now",
      "recommended_payment_method": "full_payment",
      "payment_plan": "2026-04-03:16625000",
      "earliest_date_for_full_payment": "2026-04-03",
      "spending_changes_needed": "none",
      "decision_explanation": "Pay IDR 16,625,000 today. This leaves at least IDR 23,022,800 available over the next 90 days.",
      "curve": [
        {
          "day": 0,
          "date": "2026-04-03",
          "balance": 84619623.79,
          "min_balance": 23022800.0
        },
        {
          "day": 5,
          "date": "2026-04-08",
          "balance": 74639151.79,
          "min_balance": 23022800.0
        },
        {
          "day": 10,
          "date": "2026-04-13",
          "balance": 70400994.5,
          "min_balance": 23022800.0
        },
        {
          "day": 15,
          "date": "2026-04-18",
          "balance": 93366482.61,
          "min_balance": 23022800.0
        },
        {
          "day": 20,
          "date": "2026-04-23",
          "balance": 89958547.46,
          "min_balance": 23022800.0
        },
        {
          "day": 25,
          "date": "2026-04-28",
          "balance": 86128086.67,
          "min_balance": 23022800.0
        },
        {
          "day": 30,
          "date": "2026-05-03",
          "balance": 83920840.06,
          "min_balance": 23022800.0
        },
        {
          "day": 35,
          "date": "2026-05-08",
          "balance": 73940368.06,
          "min_balance": 23022800.0
        },
        {
          "day": 40,
          "date": "2026-05-13",
          "balance": 69702210.77,
          "min_balance": 23022800.0
        },
        {
          "day": 45,
          "date": "2026-05-18",
          "balance": 92667698.88,
          "min_balance": 23022800.0
        },
        {
          "day": 50,
          "date": "2026-05-23",
          "balance": 89259763.73,
          "min_balance": 23022800.0
        },
        {
          "day": 55,
          "date": "2026-05-28",
          "balance": 85429302.94,
          "min_balance": 23022800.0
        },
        {
          "day": 60,
          "date": "2026-06-02",
          "balance": 83807292.54,
          "min_balance": 23022800.0
        },
        {
          "day": 65,
          "date": "2026-06-07",
          "balance": 75981518.63,
          "min_balance": 23022800.0
        },
        {
          "day": 70,
          "date": "2026-06-12",
          "balance": 69003427.04,
          "min_balance": 23022800.0
        },
        {
          "day": 75,
          "date": "2026-06-17",
          "balance": 92546465.49,
          "min_balance": 23022800.0
        },
        {
          "day": 80,
          "date": "2026-06-22",
          "balance": 88560980.0,
          "min_balance": 23022800.0
        },
        {
          "day": 85,
          "date": "2026-06-27",
          "balance": 85868644.98,
          "min_balance": 23022800.0
        },
        {
          "day": 90,
          "date": "2026-07-02",
          "balance": 83108508.81,
          "min_balance": 23022800.0
        }
      ]
    },
    {
      "request_id": "request_112",
      "user_id": "user_112",
      "requested_amount": 271.7,
      "currency": "EUR",
      "request_type": "family_transfer",
      "request_text": "My family needs a transfer of EUR 271.70. Can I make the full transfer without falling short on my own bills?",
      "allows_partial_payment": false,
      "request_date": "2024-06-05",
      "desired_completion_date": "2024-06-14",
      "home_currency": "EUR",
      "current_balance": 1026.0,
      "minimum_balance_to_keep": 500.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 14 June 2024. None of the available options keeps the EUR 500 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2024-06-05",
          "balance": 955.31,
          "min_balance": 500.0
        },
        {
          "day": 5,
          "date": "2024-06-10",
          "balance": 758.9,
          "min_balance": 500.0
        },
        {
          "day": 10,
          "date": "2024-06-15",
          "balance": 1316.22,
          "min_balance": 500.0
        },
        {
          "day": 15,
          "date": "2024-06-20",
          "balance": 1235.33,
          "min_balance": 500.0
        },
        {
          "day": 20,
          "date": "2024-06-25",
          "balance": 1185.13,
          "min_balance": 500.0
        },
        {
          "day": 25,
          "date": "2024-06-30",
          "balance": 1040.51,
          "min_balance": 500.0
        },
        {
          "day": 30,
          "date": "2024-07-05",
          "balance": 717.39,
          "min_balance": 500.0
        },
        {
          "day": 35,
          "date": "2024-07-10",
          "balance": 520.98,
          "min_balance": 500.0
        },
        {
          "day": 40,
          "date": "2024-07-15",
          "balance": 1078.3,
          "min_balance": 500.0
        },
        {
          "day": 45,
          "date": "2024-07-20",
          "balance": 997.41,
          "min_balance": 500.0
        },
        {
          "day": 50,
          "date": "2024-07-25",
          "balance": 947.21,
          "min_balance": 500.0
        },
        {
          "day": 55,
          "date": "2024-07-30",
          "balance": 802.59,
          "min_balance": 500.0
        },
        {
          "day": 60,
          "date": "2024-08-04",
          "balance": 550.16,
          "min_balance": 500.0
        },
        {
          "day": 65,
          "date": "2024-08-09",
          "balance": 405.67,
          "min_balance": 500.0
        },
        {
          "day": 70,
          "date": "2024-08-14",
          "balance": 213.38,
          "min_balance": 500.0
        },
        {
          "day": 75,
          "date": "2024-08-19",
          "balance": 794.79,
          "min_balance": 500.0
        },
        {
          "day": 80,
          "date": "2024-08-24",
          "balance": 709.29,
          "min_balance": 500.0
        },
        {
          "day": 85,
          "date": "2024-08-29",
          "balance": 597.26,
          "min_balance": 500.0
        },
        {
          "day": 90,
          "date": "2024-09-03",
          "balance": 312.24,
          "min_balance": 500.0
        }
      ]
    },
    {
      "request_id": "request_113",
      "user_id": "user_113",
      "requested_amount": 36500.0,
      "currency": "INR",
      "request_type": "debt_repayment",
      "request_text": "How much extra can I put toward the loan today? I want to put another INR 36,500 toward my loan.",
      "allows_partial_payment": true,
      "request_date": "2026-09-04",
      "desired_completion_date": "2026-10-19",
      "home_currency": "INR",
      "current_balance": 141890.0,
      "minimum_balance_to_keep": 82300.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 19 October 2026. None of the available options keeps the INR 82,300 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2026-09-04",
          "balance": 141890.0,
          "min_balance": 82300.0
        },
        {
          "day": 5,
          "date": "2026-09-09",
          "balance": 115783.1,
          "min_balance": 82300.0
        },
        {
          "day": 10,
          "date": "2026-09-14",
          "balance": 99846.14,
          "min_balance": 82300.0
        },
        {
          "day": 15,
          "date": "2026-09-19",
          "balance": 186595.3,
          "min_balance": 82300.0
        },
        {
          "day": 20,
          "date": "2026-09-24",
          "balance": 178494.24,
          "min_balance": 82300.0
        },
        {
          "day": 25,
          "date": "2026-09-29",
          "balance": 157032.28,
          "min_balance": 82300.0
        },
        {
          "day": 30,
          "date": "2026-10-04",
          "balance": 114705.09,
          "min_balance": 82300.0
        },
        {
          "day": 35,
          "date": "2026-10-09",
          "balance": 88598.19,
          "min_balance": 82300.0
        },
        {
          "day": 40,
          "date": "2026-10-14",
          "balance": 72661.23,
          "min_balance": 82300.0
        },
        {
          "day": 45,
          "date": "2026-10-19",
          "balance": 159410.39,
          "min_balance": 82300.0
        },
        {
          "day": 50,
          "date": "2026-10-24",
          "balance": 151309.33,
          "min_balance": 82300.0
        },
        {
          "day": 55,
          "date": "2026-10-29",
          "balance": 129847.37,
          "min_balance": 82300.0
        },
        {
          "day": 60,
          "date": "2026-11-03",
          "balance": 87520.18,
          "min_balance": 82300.0
        },
        {
          "day": 65,
          "date": "2026-11-08",
          "balance": 71482.2,
          "min_balance": 82300.0
        },
        {
          "day": 70,
          "date": "2026-11-13",
          "balance": 51445.14,
          "min_balance": 82300.0
        },
        {
          "day": 75,
          "date": "2026-11-18",
          "balance": 142885.5,
          "min_balance": 82300.0
        },
        {
          "day": 80,
          "date": "2026-11-23",
          "balance": 126373.68,
          "min_balance": 82300.0
        },
        {
          "day": 85,
          "date": "2026-11-28",
          "balance": 114626.59,
          "min_balance": 82300.0
        },
        {
          "day": 90,
          "date": "2026-12-03",
          "balance": 60335.27,
          "min_balance": 82300.0
        }
      ]
    },
    {
      "request_id": "request_114",
      "user_id": "user_114",
      "requested_amount": 65300.0,
      "currency": "INR",
      "request_type": "other",
      "request_text": "The annual membership costs INR 65,300. I need to complete it by 14 January 2026. Is the full membership fee affordable today, or should I wait?",
      "allows_partial_payment": false,
      "request_date": "2026-01-04",
      "desired_completion_date": "2026-01-14",
      "home_currency": "INR",
      "current_balance": 219230.0,
      "minimum_balance_to_keep": 113400.0,
      "amount_safe_to_pay": 32124.73,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 14 January 2026. None of the available options keeps the INR 113,400 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2026-01-04",
          "balance": 215530.24,
          "min_balance": 113400.0
        },
        {
          "day": 5,
          "date": "2026-01-09",
          "balance": 191990.14,
          "min_balance": 113400.0
        },
        {
          "day": 10,
          "date": "2026-01-14",
          "balance": 178332.35,
          "min_balance": 113400.0
        },
        {
          "day": 15,
          "date": "2026-01-19",
          "balance": 303989.19,
          "min_balance": 113400.0
        },
        {
          "day": 20,
          "date": "2026-01-24",
          "balance": 276600.86,
          "min_balance": 113400.0
        },
        {
          "day": 25,
          "date": "2026-01-29",
          "balance": 255665.3,
          "min_balance": 113400.0
        },
        {
          "day": 30,
          "date": "2026-02-03",
          "balance": 202826.19,
          "min_balance": 113400.0
        },
        {
          "day": 35,
          "date": "2026-02-08",
          "balance": 182805.75,
          "min_balance": 113400.0
        },
        {
          "day": 40,
          "date": "2026-02-13",
          "balance": 161928.54,
          "min_balance": 113400.0
        },
        {
          "day": 45,
          "date": "2026-02-18",
          "balance": 294409.2,
          "min_balance": 113400.0
        },
        {
          "day": 50,
          "date": "2026-02-23",
          "balance": 263620.84,
          "min_balance": 113400.0
        },
        {
          "day": 55,
          "date": "2026-02-28",
          "balance": 228122.38,
          "min_balance": 113400.0
        },
        {
          "day": 60,
          "date": "2026-03-05",
          "balance": 182722.62,
          "min_balance": 113400.0
        },
        {
          "day": 65,
          "date": "2026-03-10",
          "balance": 152744.22,
          "min_balance": 113400.0
        },
        {
          "day": 70,
          "date": "2026-03-15",
          "balance": 282559.89,
          "min_balance": 113400.0
        },
        {
          "day": 75,
          "date": "2026-03-20",
          "balance": 260526.76,
          "min_balance": 113400.0
        },
        {
          "day": 80,
          "date": "2026-03-25",
          "balance": 236831.21,
          "min_balance": 113400.0
        },
        {
          "day": 85,
          "date": "2026-03-30",
          "balance": 211718.57,
          "min_balance": 113400.0
        },
        {
          "day": 90,
          "date": "2026-04-04",
          "balance": 166318.81,
          "min_balance": 113400.0
        }
      ]
    },
    {
      "request_id": "request_115",
      "user_id": "user_115",
      "requested_amount": 80500.0,
      "currency": "INR",
      "request_type": "other",
      "request_text": "Can I pay for the annual membership now without affecting my regular expenses? I need to decide by 15 November 2024. The membership fee is INR 80,500 for the year.",
      "allows_partial_payment": false,
      "request_date": "2024-09-06",
      "desired_completion_date": "2024-11-15",
      "home_currency": "INR",
      "current_balance": 65935.0,
      "minimum_balance_to_keep": 38800.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 15 November 2024. None of the available options keeps the INR 38,800 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2024-09-06",
          "balance": 65935.0,
          "min_balance": 38800.0
        },
        {
          "day": 5,
          "date": "2024-09-11",
          "balance": 60030.65,
          "min_balance": 38800.0
        },
        {
          "day": 10,
          "date": "2024-09-16",
          "balance": 106662.03,
          "min_balance": 38800.0
        },
        {
          "day": 15,
          "date": "2024-09-21",
          "balance": 103370.77,
          "min_balance": 38800.0
        },
        {
          "day": 20,
          "date": "2024-09-26",
          "balance": 100195.88,
          "min_balance": 38800.0
        },
        {
          "day": 25,
          "date": "2024-10-01",
          "balance": 90523.48,
          "min_balance": 38800.0
        },
        {
          "day": 30,
          "date": "2024-10-06",
          "balance": 54215.81,
          "min_balance": 38800.0
        },
        {
          "day": 35,
          "date": "2024-10-11",
          "balance": 48311.46,
          "min_balance": 38800.0
        },
        {
          "day": 40,
          "date": "2024-10-16",
          "balance": 94942.84,
          "min_balance": 38800.0
        },
        {
          "day": 45,
          "date": "2024-10-21",
          "balance": 91651.58,
          "min_balance": 38800.0
        },
        {
          "day": 50,
          "date": "2024-10-26",
          "balance": 88476.69,
          "min_balance": 38800.0
        },
        {
          "day": 55,
          "date": "2024-10-31",
          "balance": 78804.29,
          "min_balance": 38800.0
        },
        {
          "day": 60,
          "date": "2024-11-05",
          "balance": 42496.62,
          "min_balance": 38800.0
        },
        {
          "day": 65,
          "date": "2024-11-10",
          "balance": 36592.27,
          "min_balance": 38800.0
        },
        {
          "day": 70,
          "date": "2024-11-15",
          "balance": 86835.61,
          "min_balance": 38800.0
        },
        {
          "day": 75,
          "date": "2024-11-20",
          "balance": 79932.39,
          "min_balance": 38800.0
        },
        {
          "day": 80,
          "date": "2024-11-25",
          "balance": 78694.01,
          "min_balance": 38800.0
        },
        {
          "day": 85,
          "date": "2024-11-30",
          "balance": 67085.1,
          "min_balance": 38800.0
        },
        {
          "day": 90,
          "date": "2024-12-05",
          "balance": 30777.43,
          "min_balance": 38800.0
        }
      ]
    },
    {
      "request_id": "request_116",
      "user_id": "user_116",
      "requested_amount": 241200.0,
      "currency": "INR",
      "request_type": "family_transfer",
      "request_text": "The amount I want to send is INR 241,200. Should I send the full amount, send part of it, or wait?",
      "allows_partial_payment": false,
      "request_date": "2025-02-03",
      "desired_completion_date": "2025-04-16",
      "home_currency": "INR",
      "current_balance": 138375.0,
      "minimum_balance_to_keep": 80300.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 16 April 2025. None of the available options keeps the INR 80,300 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2025-02-03",
          "balance": 133083.72,
          "min_balance": 80300.0
        },
        {
          "day": 5,
          "date": "2025-02-08",
          "balance": 103953.19,
          "min_balance": 80300.0
        },
        {
          "day": 10,
          "date": "2025-02-13",
          "balance": 81054.83,
          "min_balance": 80300.0
        },
        {
          "day": 15,
          "date": "2025-02-18",
          "balance": 311231.28,
          "min_balance": 80300.0
        },
        {
          "day": 20,
          "date": "2025-02-23",
          "balance": 298745.26,
          "min_balance": 80300.0
        },
        {
          "day": 25,
          "date": "2025-02-28",
          "balance": 253915.58,
          "min_balance": 80300.0
        },
        {
          "day": 30,
          "date": "2025-03-05",
          "balance": 192412.29,
          "min_balance": 80300.0
        },
        {
          "day": 35,
          "date": "2025-03-10",
          "balance": 163868.81,
          "min_balance": 80300.0
        },
        {
          "day": 40,
          "date": "2025-03-15",
          "balance": 268596.42,
          "min_balance": 80300.0
        },
        {
          "day": 45,
          "date": "2025-03-20",
          "balance": 254430.25,
          "min_balance": 80300.0
        },
        {
          "day": 50,
          "date": "2025-03-25",
          "balance": 236290.32,
          "min_balance": 80300.0
        },
        {
          "day": 55,
          "date": "2025-03-30",
          "balance": 214985.58,
          "min_balance": 80300.0
        },
        {
          "day": 60,
          "date": "2025-04-04",
          "balance": 149204.29,
          "min_balance": 80300.0
        },
        {
          "day": 65,
          "date": "2025-04-09",
          "balance": 123034.43,
          "min_balance": 80300.0
        },
        {
          "day": 70,
          "date": "2025-04-14",
          "balance": 97241.96,
          "min_balance": 80300.0
        },
        {
          "day": 75,
          "date": "2025-04-19",
          "balance": 206312.52,
          "min_balance": 80300.0
        },
        {
          "day": 80,
          "date": "2025-04-24",
          "balance": 193826.5,
          "min_balance": 80300.0
        },
        {
          "day": 85,
          "date": "2025-04-29",
          "balance": 167139.92,
          "min_balance": 80300.0
        },
        {
          "day": 90,
          "date": "2025-05-04",
          "balance": 96744.91,
          "min_balance": 80300.0
        }
      ]
    },
    {
      "request_id": "request_117",
      "user_id": "user_117",
      "requested_amount": 880.0,
      "currency": "EUR",
      "request_type": "housing",
      "request_text": "El dep\u00f3sito de alquiler es de EUR 880. \u00bfPuedo pagarlo hoy sin poner en riesgo mis otros gastos, o deber\u00eda esperar?",
      "allows_partial_payment": false,
      "request_date": "2026-07-05",
      "desired_completion_date": "2026-07-14",
      "home_currency": "EUR",
      "current_balance": 2164.2,
      "minimum_balance_to_keep": 1000.0,
      "amount_safe_to_pay": 486.39,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 14 July 2026. None of the available options keeps the EUR 1,000 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2026-07-05",
          "balance": 2164.2,
          "min_balance": 1000.0
        },
        {
          "day": 5,
          "date": "2026-07-10",
          "balance": 1851.06,
          "min_balance": 1000.0
        },
        {
          "day": 10,
          "date": "2026-07-15",
          "balance": 2720.01,
          "min_balance": 1000.0
        },
        {
          "day": 15,
          "date": "2026-07-20",
          "balance": 2485.82,
          "min_balance": 1000.0
        },
        {
          "day": 20,
          "date": "2026-07-25",
          "balance": 2450.83,
          "min_balance": 1000.0
        },
        {
          "day": 25,
          "date": "2026-07-30",
          "balance": 2212.81,
          "min_balance": 1000.0
        },
        {
          "day": 30,
          "date": "2026-08-04",
          "balance": 2010.71,
          "min_balance": 1000.0
        },
        {
          "day": 35,
          "date": "2026-08-09",
          "balance": 1829.68,
          "min_balance": 1000.0
        },
        {
          "day": 40,
          "date": "2026-08-14",
          "balance": 1639.88,
          "min_balance": 1000.0
        },
        {
          "day": 45,
          "date": "2026-08-19",
          "balance": 2332.33,
          "min_balance": 1000.0
        },
        {
          "day": 50,
          "date": "2026-08-24",
          "balance": 2297.34,
          "min_balance": 1000.0
        },
        {
          "day": 55,
          "date": "2026-08-29",
          "balance": 2096.33,
          "min_balance": 1000.0
        },
        {
          "day": 60,
          "date": "2026-09-03",
          "balance": 1857.22,
          "min_balance": 1000.0
        },
        {
          "day": 65,
          "date": "2026-09-08",
          "balance": 1698.19,
          "min_balance": 1000.0
        },
        {
          "day": 70,
          "date": "2026-09-13",
          "balance": 1518.23,
          "min_balance": 1000.0
        },
        {
          "day": 75,
          "date": "2026-09-18",
          "balance": 2274.77,
          "min_balance": 1000.0
        },
        {
          "day": 80,
          "date": "2026-09-23",
          "balance": 2143.85,
          "min_balance": 1000.0
        },
        {
          "day": 85,
          "date": "2026-09-28",
          "balance": 2028.53,
          "min_balance": 1000.0
        },
        {
          "day": 90,
          "date": "2026-10-03",
          "balance": 1703.73,
          "min_balance": 1000.0
        }
      ]
    },
    {
      "request_id": "request_118",
      "user_id": "user_118",
      "requested_amount": 738.1,
      "currency": "EUR",
      "request_type": "housing",
      "request_text": "I've been asked to pay EUR 738.10 as the rental deposit. I need to complete it by 8 February 2025. Would paying the full deposit leave enough for my other commitments?",
      "allows_partial_payment": false,
      "request_date": "2024-12-07",
      "desired_completion_date": "2025-02-08",
      "home_currency": "EUR",
      "current_balance": 1538.51,
      "minimum_balance_to_keep": 600.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 8 February 2025. None of the available options keeps the EUR 600 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2024-12-07",
          "balance": 1476.9,
          "min_balance": 600.0
        },
        {
          "day": 5,
          "date": "2024-12-12",
          "balance": 1261.87,
          "min_balance": 600.0
        },
        {
          "day": 10,
          "date": "2024-12-17",
          "balance": 1125.76,
          "min_balance": 600.0
        },
        {
          "day": 15,
          "date": "2024-12-22",
          "balance": 1369.42,
          "min_balance": 600.0
        },
        {
          "day": 20,
          "date": "2024-12-27",
          "balance": 1317.7,
          "min_balance": 600.0
        },
        {
          "day": 25,
          "date": "2025-01-01",
          "balance": 1198.55,
          "min_balance": 600.0
        },
        {
          "day": 30,
          "date": "2025-01-06",
          "balance": 877.38,
          "min_balance": 600.0
        },
        {
          "day": 35,
          "date": "2025-01-11",
          "balance": 710.74,
          "min_balance": 600.0
        },
        {
          "day": 40,
          "date": "2025-01-16",
          "balance": 479.95,
          "min_balance": 600.0
        },
        {
          "day": 45,
          "date": "2025-01-21",
          "balance": 762.69,
          "min_balance": 600.0
        },
        {
          "day": 50,
          "date": "2025-01-26",
          "balance": 656.57,
          "min_balance": 600.0
        },
        {
          "day": 55,
          "date": "2025-01-31",
          "balance": 581.41,
          "min_balance": 600.0
        },
        {
          "day": 60,
          "date": "2025-02-05",
          "balance": 252.13,
          "min_balance": 600.0
        },
        {
          "day": 65,
          "date": "2025-02-10",
          "balance": 73.26,
          "min_balance": 600.0
        },
        {
          "day": 70,
          "date": "2025-02-15",
          "balance": -161.28,
          "min_balance": 600.0
        },
        {
          "day": 75,
          "date": "2025-02-20",
          "balance": 101.56,
          "min_balance": 600.0
        },
        {
          "day": 80,
          "date": "2025-02-25",
          "balance": 9.25,
          "min_balance": 600.0
        },
        {
          "day": 85,
          "date": "2025-03-02",
          "balance": -143.69,
          "min_balance": 600.0
        },
        {
          "day": 90,
          "date": "2025-03-07",
          "balance": -506.49,
          "min_balance": 600.0
        }
      ]
    },
    {
      "request_id": "request_119",
      "user_id": "user_119",
      "requested_amount": 203500.0,
      "currency": "INR",
      "request_type": "education",
      "request_text": "Would paying the course fee now leave enough for my regular commitments? I need to decide by 17 July 2025. Enrolment for the course comes to INR 203,500.",
      "allows_partial_payment": false,
      "request_date": "2025-05-04",
      "desired_completion_date": "2025-07-17",
      "home_currency": "INR",
      "current_balance": 282101.01,
      "minimum_balance_to_keep": 151200.0,
      "amount_safe_to_pay": 34891.26,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 17 July 2025. None of the available options keeps the INR 151,200 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2025-05-04",
          "balance": 282101.01,
          "min_balance": 151200.0
        },
        {
          "day": 5,
          "date": "2025-05-09",
          "balance": 224457.79,
          "min_balance": 151200.0
        },
        {
          "day": 10,
          "date": "2025-05-14",
          "balance": 186272.38,
          "min_balance": 151200.0
        },
        {
          "day": 15,
          "date": "2025-05-19",
          "balance": 347373.61,
          "min_balance": 151200.0
        },
        {
          "day": 20,
          "date": "2025-05-24",
          "balance": 332182.68,
          "min_balance": 151200.0
        },
        {
          "day": 25,
          "date": "2025-05-29",
          "balance": 313796.19,
          "min_balance": 151200.0
        },
        {
          "day": 30,
          "date": "2025-06-03",
          "balance": 282010.45,
          "min_balance": 151200.0
        },
        {
          "day": 35,
          "date": "2025-06-08",
          "balance": 239946.65,
          "min_balance": 151200.0
        },
        {
          "day": 40,
          "date": "2025-06-13",
          "balance": 191425.57,
          "min_balance": 151200.0
        },
        {
          "day": 45,
          "date": "2025-06-18",
          "balance": 354290.39,
          "min_balance": 151200.0
        },
        {
          "day": 50,
          "date": "2025-06-23",
          "balance": 337500.99,
          "min_balance": 151200.0
        },
        {
          "day": 55,
          "date": "2025-06-28",
          "balance": 322495.59,
          "min_balance": 151200.0
        },
        {
          "day": 60,
          "date": "2025-07-03",
          "balance": 281919.89,
          "min_balance": 151200.0
        },
        {
          "day": 65,
          "date": "2025-07-08",
          "balance": 239856.09,
          "min_balance": 151200.0
        },
        {
          "day": 70,
          "date": "2025-07-13",
          "balance": 191335.01,
          "min_balance": 151200.0
        },
        {
          "day": 75,
          "date": "2025-07-18",
          "balance": 354199.83,
          "min_balance": 151200.0
        },
        {
          "day": 80,
          "date": "2025-07-23",
          "balance": 337410.43,
          "min_balance": 151200.0
        },
        {
          "day": 85,
          "date": "2025-07-28",
          "balance": 322405.03,
          "min_balance": 151200.0
        },
        {
          "day": 90,
          "date": "2025-08-02",
          "balance": 288967.75,
          "min_balance": 151200.0
        }
      ]
    },
    {
      "request_id": "request_120",
      "user_id": "user_120",
      "requested_amount": 7714000.0,
      "currency": "IDR",
      "request_type": "investment",
      "request_text": "I have an opportunity to invest IDR 7,714,000. How much can I invest now without affecting essential payments?",
      "allows_partial_payment": false,
      "request_date": "2026-04-06",
      "desired_completion_date": "2026-04-14",
      "home_currency": "IDR",
      "current_balance": 31748980.0,
      "minimum_balance_to_keep": 20050300.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 14 April 2026. None of the available options keeps the IDR 20,050,300 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2026-04-06",
          "balance": 31161880.0,
          "min_balance": 20050300.0
        },
        {
          "day": 5,
          "date": "2026-04-11",
          "balance": 26685160.49,
          "min_balance": 20050300.0
        },
        {
          "day": 10,
          "date": "2026-04-16",
          "balance": 48613416.41,
          "min_balance": 20050300.0
        },
        {
          "day": 15,
          "date": "2026-04-21",
          "balance": 46448811.69,
          "min_balance": 20050300.0
        },
        {
          "day": 20,
          "date": "2026-04-26",
          "balance": 45526622.98,
          "min_balance": 20050300.0
        },
        {
          "day": 25,
          "date": "2026-05-01",
          "balance": 25063160.81,
          "min_balance": 20050300.0
        },
        {
          "day": 30,
          "date": "2026-05-06",
          "balance": 23378318.12,
          "min_balance": 20050300.0
        },
        {
          "day": 35,
          "date": "2026-05-11",
          "balance": 19488698.61,
          "min_balance": 20050300.0
        },
        {
          "day": 40,
          "date": "2026-05-16",
          "balance": 41416954.53,
          "min_balance": 20050300.0
        },
        {
          "day": 45,
          "date": "2026-05-21",
          "balance": 39252349.81,
          "min_balance": 20050300.0
        },
        {
          "day": 50,
          "date": "2026-05-26",
          "balance": 38330161.1,
          "min_balance": 20050300.0
        },
        {
          "day": 55,
          "date": "2026-05-31",
          "balance": 32952698.93,
          "min_balance": 20050300.0
        },
        {
          "day": 60,
          "date": "2026-06-05",
          "balance": 16181856.24,
          "min_balance": 20050300.0
        },
        {
          "day": 65,
          "date": "2026-06-10",
          "balance": 13136015.92,
          "min_balance": 20050300.0
        },
        {
          "day": 70,
          "date": "2026-06-15",
          "balance": 34220492.65,
          "min_balance": 20050300.0
        },
        {
          "day": 75,
          "date": "2026-06-20",
          "balance": 32055887.93,
          "min_balance": 20050300.0
        },
        {
          "day": 80,
          "date": "2026-06-25",
          "balance": 31133699.22,
          "min_balance": 20050300.0
        },
        {
          "day": 85,
          "date": "2026-06-30",
          "balance": 25756237.05,
          "min_balance": 20050300.0
        },
        {
          "day": 90,
          "date": "2026-07-05",
          "balance": 8985394.36,
          "min_balance": 20050300.0
        }
      ]
    },
    {
      "request_id": "request_121",
      "user_id": "user_121",
      "requested_amount": 633.6,
      "currency": "USD",
      "request_type": "debt_repayment",
      "request_text": "Is the full extra repayment safe, or should I pay a smaller amount? The additional loan payment would be USD 633.60.",
      "allows_partial_payment": false,
      "request_date": "2024-03-03",
      "desired_completion_date": "2024-03-14",
      "home_currency": "USD",
      "current_balance": 1741.0,
      "minimum_balance_to_keep": 800.0,
      "amount_safe_to_pay": 474.48,
      "affordability_status": "affordable_later",
      "recommended_payment_method": "wait",
      "payment_plan": "2024-05-15:633.60",
      "earliest_date_for_full_payment": "2024-05-15",
      "spending_changes_needed": "none",
      "decision_explanation": "Pay USD 633.60 in full on 15 May 2024. Paying earlier would take the balance below the USD 800 minimum.",
      "curve": [
        {
          "day": 0,
          "date": "2024-03-03",
          "balance": 1684.22,
          "min_balance": 800.0
        },
        {
          "day": 5,
          "date": "2024-03-08",
          "balance": 1555.54,
          "min_balance": 800.0
        },
        {
          "day": 10,
          "date": "2024-03-13",
          "balance": 1317.04,
          "min_balance": 800.0
        },
        {
          "day": 15,
          "date": "2024-03-18",
          "balance": 3344.23,
          "min_balance": 800.0
        },
        {
          "day": 20,
          "date": "2024-03-23",
          "balance": 3186.3,
          "min_balance": 800.0
        },
        {
          "day": 25,
          "date": "2024-03-28",
          "balance": 2983.59,
          "min_balance": 800.0
        },
        {
          "day": 30,
          "date": "2024-04-02",
          "balance": 2204.96,
          "min_balance": 800.0
        },
        {
          "day": 35,
          "date": "2024-04-07",
          "balance": 2069.5,
          "min_balance": 800.0
        },
        {
          "day": 40,
          "date": "2024-04-12",
          "balance": 1872.56,
          "min_balance": 800.0
        },
        {
          "day": 45,
          "date": "2024-04-17",
          "balance": 2802.19,
          "min_balance": 800.0
        },
        {
          "day": 50,
          "date": "2024-04-22",
          "balance": 2690.3,
          "min_balance": 800.0
        },
        {
          "day": 55,
          "date": "2024-04-27",
          "balance": 2499.74,
          "min_balance": 800.0
        },
        {
          "day": 60,
          "date": "2024-05-02",
          "balance": 1662.92,
          "min_balance": 800.0
        },
        {
          "day": 65,
          "date": "2024-05-07",
          "balance": 1527.46,
          "min_balance": 800.0
        },
        {
          "day": 70,
          "date": "2024-05-12",
          "balance": 1330.52,
          "min_balance": 800.0
        },
        {
          "day": 75,
          "date": "2024-05-17",
          "balance": 2260.15,
          "min_balance": 800.0
        },
        {
          "day": 80,
          "date": "2024-05-22",
          "balance": 2148.26,
          "min_balance": 800.0
        },
        {
          "day": 85,
          "date": "2024-05-27",
          "balance": 1957.7,
          "min_balance": 800.0
        },
        {
          "day": 90,
          "date": "2024-06-01",
          "balance": 1495.1,
          "min_balance": 800.0
        }
      ]
    },
    {
      "request_id": "request_122",
      "user_id": "user_122",
      "requested_amount": 20558000.0,
      "currency": "IDR",
      "request_type": "other",
      "request_text": "The membership fee is IDR 20,558,000 for the year. I need to complete it by 2 October 2025. Would committing to the membership leave enough for my upcoming bills?",
      "allows_partial_payment": false,
      "request_date": "2025-08-05",
      "desired_completion_date": "2025-10-02",
      "home_currency": "IDR",
      "current_balance": 56827244.99,
      "minimum_balance_to_keep": 12588500.0,
      "amount_safe_to_pay": 20558000.0,
      "affordability_status": "affordable_with_plan",
      "recommended_payment_method": "installments",
      "payment_plan": "2025-08-05:7126773.33|2025-09-02:7126773.33|2025-09-30:7126773.33",
      "earliest_date_for_full_payment": "2025-08-05",
      "spending_changes_needed": "none",
      "decision_explanation": "Use 3 installments of IDR 7,126,773.33, starting 5 August 2025. This leaves at least IDR 12,588,500 available.",
      "curve": [
        {
          "day": 0,
          "date": "2025-08-05",
          "balance": 55336538.06,
          "min_balance": 12588500.0
        },
        {
          "day": 5,
          "date": "2025-08-10",
          "balance": 51251374.21,
          "min_balance": 12588500.0
        },
        {
          "day": 10,
          "date": "2025-08-15",
          "balance": 50535081.24,
          "min_balance": 12588500.0
        },
        {
          "day": 15,
          "date": "2025-08-20",
          "balance": 49628938.52,
          "min_balance": 12588500.0
        },
        {
          "day": 20,
          "date": "2025-08-25",
          "balance": 58988949.47,
          "min_balance": 12588500.0
        },
        {
          "day": 25,
          "date": "2025-08-30",
          "balance": 55542608.78,
          "min_balance": 12588500.0
        },
        {
          "day": 30,
          "date": "2025-09-04",
          "balance": 50012937.22,
          "min_balance": 12588500.0
        },
        {
          "day": 35,
          "date": "2025-09-09",
          "balance": 47203393.38,
          "min_balance": 12588500.0
        },
        {
          "day": 40,
          "date": "2025-09-14",
          "balance": 45620773.47,
          "min_balance": 12588500.0
        },
        {
          "day": 45,
          "date": "2025-09-19",
          "balance": 45178318.29,
          "min_balance": 12588500.0
        },
        {
          "day": 50,
          "date": "2025-09-24",
          "balance": 54074641.7,
          "min_balance": 12588500.0
        },
        {
          "day": 55,
          "date": "2025-09-29",
          "balance": 52173694.78,
          "min_balance": 12588500.0
        },
        {
          "day": 60,
          "date": "2025-10-04",
          "balance": 45098629.45,
          "min_balance": 12588500.0
        },
        {
          "day": 65,
          "date": "2025-10-09",
          "balance": 42289085.61,
          "min_balance": 12588500.0
        },
        {
          "day": 70,
          "date": "2025-10-14",
          "balance": 40706465.7,
          "min_balance": 12588500.0
        },
        {
          "day": 75,
          "date": "2025-10-19",
          "balance": 40264010.52,
          "min_balance": 12588500.0
        },
        {
          "day": 80,
          "date": "2025-10-24",
          "balance": 49160333.93,
          "min_balance": 12588500.0
        },
        {
          "day": 85,
          "date": "2025-10-29",
          "balance": 47259387.01,
          "min_balance": 12588500.0
        },
        {
          "day": 90,
          "date": "2025-11-03",
          "balance": 40629068.73,
          "min_balance": 12588500.0
        }
      ]
    },
    {
      "request_id": "request_123",
      "user_id": "user_123",
      "requested_amount": 4076000.0,
      "currency": "IDR",
      "request_type": "investment",
      "request_text": "What portion can I invest today without going below my minimum balance? I need to decide by 28 March 2026. I'm thinking of investing IDR 4,076,000.",
      "allows_partial_payment": true,
      "request_date": "2026-01-07",
      "desired_completion_date": "2026-03-28",
      "home_currency": "IDR",
      "current_balance": 63706400.0,
      "minimum_balance_to_keep": 18091200.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 28 March 2026. None of the available options keeps the IDR 18,091,200 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2026-01-07",
          "balance": 62317500.0,
          "min_balance": 18091200.0
        },
        {
          "day": 5,
          "date": "2026-01-12",
          "balance": 58083065.96,
          "min_balance": 18091200.0
        },
        {
          "day": 10,
          "date": "2026-01-17",
          "balance": 54960679.47,
          "min_balance": 18091200.0
        },
        {
          "day": 15,
          "date": "2026-01-22",
          "balance": 52589108.02,
          "min_balance": 18091200.0
        },
        {
          "day": 20,
          "date": "2026-01-27",
          "balance": 49675659.06,
          "min_balance": 18091200.0
        },
        {
          "day": 25,
          "date": "2026-02-01",
          "balance": 47409632.41,
          "min_balance": 18091200.0
        },
        {
          "day": 30,
          "date": "2026-02-06",
          "balance": 44695900.82,
          "min_balance": 18091200.0
        },
        {
          "day": 35,
          "date": "2026-02-11",
          "balance": 42393766.78,
          "min_balance": 18091200.0
        },
        {
          "day": 40,
          "date": "2026-02-16",
          "balance": 39498240.77,
          "min_balance": 18091200.0
        },
        {
          "day": 45,
          "date": "2026-02-21",
          "balance": 37024170.49,
          "min_balance": 18091200.0
        },
        {
          "day": 50,
          "date": "2026-02-26",
          "balance": 33870332.29,
          "min_balance": 18091200.0
        },
        {
          "day": 55,
          "date": "2026-03-03",
          "balance": 29496682.96,
          "min_balance": 18091200.0
        },
        {
          "day": 60,
          "date": "2026-03-08",
          "balance": 26727192.31,
          "min_balance": 18091200.0
        },
        {
          "day": 65,
          "date": "2026-03-13",
          "balance": 25445717.6,
          "min_balance": 18091200.0
        },
        {
          "day": 70,
          "date": "2026-03-18",
          "balance": 21979238.63,
          "min_balance": 18091200.0
        },
        {
          "day": 75,
          "date": "2026-03-23",
          "balance": 19626970.4,
          "min_balance": 18091200.0
        },
        {
          "day": 80,
          "date": "2026-03-28",
          "balance": 16599290.05,
          "min_balance": 18091200.0
        },
        {
          "day": 85,
          "date": "2026-04-02",
          "balance": 13940386.04,
          "min_balance": 18091200.0
        },
        {
          "day": 90,
          "date": "2026-04-07",
          "balance": 12230502.46,
          "min_balance": 18091200.0
        }
      ]
    },
    {
      "request_id": "request_124",
      "user_id": "user_124",
      "requested_amount": 3104.2,
      "currency": "EUR",
      "request_type": "other",
      "request_text": "I'm considering a yearly membership for EUR 3,104.20. Is the full membership fee affordable today, or should I wait?",
      "allows_partial_payment": false,
      "request_date": "2024-06-04",
      "desired_completion_date": "2024-08-20",
      "home_currency": "EUR",
      "current_balance": 3709.56,
      "minimum_balance_to_keep": 1600.0,
      "amount_safe_to_pay": 822.26,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 20 August 2024. None of the available options keeps the EUR 1,600 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2024-06-04",
          "balance": 3646.92,
          "min_balance": 1600.0
        },
        {
          "day": 5,
          "date": "2024-06-09",
          "balance": 3339.63,
          "min_balance": 1600.0
        },
        {
          "day": 10,
          "date": "2024-06-14",
          "balance": 2422.26,
          "min_balance": 1600.0
        },
        {
          "day": 15,
          "date": "2024-06-19",
          "balance": 7606.72,
          "min_balance": 1600.0
        },
        {
          "day": 20,
          "date": "2024-06-24",
          "balance": 7533.2,
          "min_balance": 1600.0
        },
        {
          "day": 25,
          "date": "2024-06-29",
          "balance": 7131.64,
          "min_balance": 1600.0
        },
        {
          "day": 30,
          "date": "2024-07-04",
          "balance": 5912.42,
          "min_balance": 1600.0
        },
        {
          "day": 35,
          "date": "2024-07-09",
          "balance": 5605.13,
          "min_balance": 1600.0
        },
        {
          "day": 40,
          "date": "2024-07-14",
          "balance": 4747.76,
          "min_balance": 1600.0
        },
        {
          "day": 45,
          "date": "2024-07-19",
          "balance": 7303.22,
          "min_balance": 1600.0
        },
        {
          "day": 50,
          "date": "2024-07-24",
          "balance": 7229.7,
          "min_balance": 1600.0
        },
        {
          "day": 55,
          "date": "2024-07-29",
          "balance": 6828.14,
          "min_balance": 1600.0
        },
        {
          "day": 60,
          "date": "2024-08-03",
          "balance": 5671.56,
          "min_balance": 1600.0
        },
        {
          "day": 65,
          "date": "2024-08-08",
          "balance": 5383.04,
          "min_balance": 1600.0
        },
        {
          "day": 70,
          "date": "2024-08-13",
          "balance": 4520.01,
          "min_balance": 1600.0
        },
        {
          "day": 75,
          "date": "2024-08-18",
          "balance": 6999.72,
          "min_balance": 1600.0
        },
        {
          "day": 80,
          "date": "2024-08-23",
          "balance": 6999.72,
          "min_balance": 1600.0
        },
        {
          "day": 85,
          "date": "2024-08-28",
          "balance": 6524.64,
          "min_balance": 1600.0
        },
        {
          "day": 90,
          "date": "2024-09-02",
          "balance": 5490.11,
          "min_balance": 1600.0
        }
      ]
    },
    {
      "request_id": "request_125",
      "user_id": "user_125",
      "requested_amount": 6468.0,
      "currency": "ZAR",
      "request_type": "travel",
      "request_text": "Would it be safer to book the trip now or wait until more money comes in? I can book the family trip for ZAR 6,468.",
      "allows_partial_payment": false,
      "request_date": "2025-11-06",
      "desired_completion_date": "2025-11-14",
      "home_currency": "ZAR",
      "current_balance": 22027.97,
      "minimum_balance_to_keep": 11300.0,
      "amount_safe_to_pay": 364.93,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 14 November 2025. None of the available options keeps the ZAR 11,300 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2025-11-06",
          "balance": 20645.27,
          "min_balance": 11300.0
        },
        {
          "day": 5,
          "date": "2025-11-11",
          "balance": 17415.8,
          "min_balance": 11300.0
        },
        {
          "day": 10,
          "date": "2025-11-16",
          "balance": 30077.21,
          "min_balance": 11300.0
        },
        {
          "day": 15,
          "date": "2025-11-21",
          "balance": 27986.46,
          "min_balance": 11300.0
        },
        {
          "day": 20,
          "date": "2025-11-26",
          "balance": 26669.58,
          "min_balance": 11300.0
        },
        {
          "day": 25,
          "date": "2025-12-01",
          "balance": 24276.51,
          "min_balance": 11300.0
        },
        {
          "day": 30,
          "date": "2025-12-06",
          "balance": 18494.48,
          "min_balance": 11300.0
        },
        {
          "day": 35,
          "date": "2025-12-11",
          "balance": 15265.01,
          "min_balance": 11300.0
        },
        {
          "day": 40,
          "date": "2025-12-16",
          "balance": 27926.42,
          "min_balance": 11300.0
        },
        {
          "day": 45,
          "date": "2025-12-21",
          "balance": 25835.67,
          "min_balance": 11300.0
        },
        {
          "day": 50,
          "date": "2025-12-26",
          "balance": 24518.79,
          "min_balance": 11300.0
        },
        {
          "day": 55,
          "date": "2025-12-31",
          "balance": 22929.08,
          "min_balance": 11300.0
        },
        {
          "day": 60,
          "date": "2026-01-05",
          "balance": 17726.39,
          "min_balance": 11300.0
        },
        {
          "day": 65,
          "date": "2026-01-10",
          "balance": 14901.26,
          "min_balance": 11300.0
        },
        {
          "day": 70,
          "date": "2026-01-15",
          "balance": 26624.93,
          "min_balance": 11300.0
        },
        {
          "day": 75,
          "date": "2026-01-20",
          "balance": 24503.25,
          "min_balance": 11300.0
        },
        {
          "day": 80,
          "date": "2026-01-25",
          "balance": 22669.08,
          "min_balance": 11300.0
        },
        {
          "day": 85,
          "date": "2026-01-30",
          "balance": 20778.29,
          "min_balance": 11300.0
        },
        {
          "day": 90,
          "date": "2026-02-04",
          "balance": 15977.53,
          "min_balance": 11300.0
        }
      ]
    },
    {
      "request_id": "request_126",
      "user_id": "user_126",
      "requested_amount": 159600.0,
      "currency": "INR",
      "request_type": "emergency_expense",
      "request_text": "I need to cover an urgent repair of INR 159,600. I need to complete it by 17 July 2026. The repair cannot wait. How much can I safely pay today?",
      "allows_partial_payment": false,
      "request_date": "2026-07-03",
      "desired_completion_date": "2026-07-17",
      "home_currency": "INR",
      "current_balance": 403175.0,
      "minimum_balance_to_keep": 129700.0,
      "amount_safe_to_pay": 21129.98,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 17 July 2026. None of the available options keeps the INR 129,700 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2026-07-03",
          "balance": 360175.0,
          "min_balance": 129700.0
        },
        {
          "day": 5,
          "date": "2026-07-08",
          "balance": 334154.98,
          "min_balance": 129700.0
        },
        {
          "day": 10,
          "date": "2026-07-13",
          "balance": 318399.87,
          "min_balance": 129700.0
        },
        {
          "day": 15,
          "date": "2026-07-18",
          "balance": 304856.8,
          "min_balance": 129700.0
        },
        {
          "day": 20,
          "date": "2026-07-23",
          "balance": 365787.21,
          "min_balance": 129700.0
        },
        {
          "day": 25,
          "date": "2026-07-28",
          "balance": 335224.15,
          "min_balance": 129700.0
        },
        {
          "day": 30,
          "date": "2026-08-02",
          "balance": 329420.04,
          "min_balance": 129700.0
        },
        {
          "day": 35,
          "date": "2026-08-07",
          "balance": 260400.02,
          "min_balance": 129700.0
        },
        {
          "day": 40,
          "date": "2026-08-12",
          "balance": 252588.55,
          "min_balance": 129700.0
        },
        {
          "day": 45,
          "date": "2026-08-17",
          "balance": 231101.84,
          "min_balance": 129700.0
        },
        {
          "day": 50,
          "date": "2026-08-22",
          "balance": 292032.25,
          "min_balance": 129700.0
        },
        {
          "day": 55,
          "date": "2026-08-27",
          "balance": 281260.88,
          "min_balance": 129700.0
        },
        {
          "day": 60,
          "date": "2026-09-01",
          "balance": 255665.08,
          "min_balance": 129700.0
        },
        {
          "day": 65,
          "date": "2026-09-06",
          "balance": 201123.33,
          "min_balance": 129700.0
        },
        {
          "day": 70,
          "date": "2026-09-11",
          "balance": 178833.59,
          "min_balance": 129700.0
        },
        {
          "day": 75,
          "date": "2026-09-16",
          "balance": 163380.6,
          "min_balance": 129700.0
        },
        {
          "day": 80,
          "date": "2026-09-21",
          "balance": 218277.29,
          "min_balance": 129700.0
        },
        {
          "day": 85,
          "date": "2026-09-26",
          "balance": 215389.88,
          "min_balance": 129700.0
        },
        {
          "day": 90,
          "date": "2026-10-01",
          "balance": 181910.12,
          "min_balance": 129700.0
        }
      ]
    },
    {
      "request_id": "request_127",
      "user_id": "user_127",
      "requested_amount": 23980.0,
      "currency": "ZAR",
      "request_type": "family_transfer",
      "request_text": "Can I make the full transfer without falling short on my own bills? I need to decide by 18 October 2024. The transfer I have in mind is ZAR 23,980.",
      "allows_partial_payment": true,
      "request_date": "2024-09-05",
      "desired_completion_date": "2024-10-18",
      "home_currency": "ZAR",
      "current_balance": 66058.0,
      "minimum_balance_to_keep": 41000.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 18 October 2024. None of the available options keeps the ZAR 41,000 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2024-09-05",
          "balance": 66058.0,
          "min_balance": 41000.0
        },
        {
          "day": 5,
          "date": "2024-09-10",
          "balance": 58538.34,
          "min_balance": 41000.0
        },
        {
          "day": 10,
          "date": "2024-09-15",
          "balance": 96463.77,
          "min_balance": 41000.0
        },
        {
          "day": 15,
          "date": "2024-09-20",
          "balance": 89112.5,
          "min_balance": 41000.0
        },
        {
          "day": 20,
          "date": "2024-09-25",
          "balance": 85083.84,
          "min_balance": 41000.0
        },
        {
          "day": 25,
          "date": "2024-09-30",
          "balance": 77232.21,
          "min_balance": 41000.0
        },
        {
          "day": 30,
          "date": "2024-10-05",
          "balance": 53360.01,
          "min_balance": 41000.0
        },
        {
          "day": 35,
          "date": "2024-10-10",
          "balance": 45840.35,
          "min_balance": 41000.0
        },
        {
          "day": 40,
          "date": "2024-10-15",
          "balance": 83765.78,
          "min_balance": 41000.0
        },
        {
          "day": 45,
          "date": "2024-10-20",
          "balance": 76414.51,
          "min_balance": 41000.0
        },
        {
          "day": 50,
          "date": "2024-10-25",
          "balance": 72385.85,
          "min_balance": 41000.0
        },
        {
          "day": 55,
          "date": "2024-10-30",
          "balance": 64534.22,
          "min_balance": 41000.0
        },
        {
          "day": 60,
          "date": "2024-11-04",
          "balance": 40662.02,
          "min_balance": 41000.0
        },
        {
          "day": 65,
          "date": "2024-11-09",
          "balance": 34727.84,
          "min_balance": 41000.0
        },
        {
          "day": 70,
          "date": "2024-11-14",
          "balance": 22145.8,
          "min_balance": 41000.0
        },
        {
          "day": 75,
          "date": "2024-11-19",
          "balance": 63716.52,
          "min_balance": 41000.0
        },
        {
          "day": 80,
          "date": "2024-11-24",
          "balance": 59687.86,
          "min_balance": 41000.0
        },
        {
          "day": 85,
          "date": "2024-11-29",
          "balance": 55041.75,
          "min_balance": 41000.0
        },
        {
          "day": 90,
          "date": "2024-12-04",
          "balance": 27964.03,
          "min_balance": 41000.0
        }
      ]
    },
    {
      "request_id": "request_128",
      "user_id": "user_128",
      "requested_amount": 25168.0,
      "currency": "ZAR",
      "request_type": "education",
      "request_text": "I need ZAR 25,168 for the course fee. Should I pay for the course now, use installments, or wait?",
      "allows_partial_payment": false,
      "request_date": "2025-02-07",
      "desired_completion_date": "2025-02-14",
      "home_currency": "ZAR",
      "current_balance": 80711.7,
      "minimum_balance_to_keep": 42600.0,
      "amount_safe_to_pay": 21180.29,
      "affordability_status": "affordable_later",
      "recommended_payment_method": "wait",
      "payment_plan": "2025-03-15:25168",
      "earliest_date_for_full_payment": "2025-03-15",
      "spending_changes_needed": "none",
      "decision_explanation": "Pay ZAR 25,168 in full on 15 March 2025. Paying earlier would take the balance below the ZAR 42,600 minimum.",
      "curve": [
        {
          "day": 0,
          "date": "2025-02-07",
          "balance": 77803.3,
          "min_balance": 42600.0
        },
        {
          "day": 5,
          "date": "2025-02-12",
          "balance": 65872.22,
          "min_balance": 42600.0
        },
        {
          "day": 10,
          "date": "2025-02-17",
          "balance": 113369.24,
          "min_balance": 42600.0
        },
        {
          "day": 15,
          "date": "2025-02-22",
          "balance": 106939.33,
          "min_balance": 42600.0
        },
        {
          "day": 20,
          "date": "2025-02-27",
          "balance": 105926.7,
          "min_balance": 42600.0
        },
        {
          "day": 25,
          "date": "2025-03-04",
          "balance": 90769.28,
          "min_balance": 42600.0
        },
        {
          "day": 30,
          "date": "2025-03-09",
          "balance": 74276.23,
          "min_balance": 42600.0
        },
        {
          "day": 35,
          "date": "2025-03-14",
          "balance": 65828.41,
          "min_balance": 42600.0
        },
        {
          "day": 40,
          "date": "2025-03-19",
          "balance": 112339.67,
          "min_balance": 42600.0
        },
        {
          "day": 45,
          "date": "2025-03-24",
          "balance": 108987.45,
          "min_balance": 42600.0
        },
        {
          "day": 50,
          "date": "2025-03-29",
          "balance": 106005.81,
          "min_balance": 42600.0
        },
        {
          "day": 55,
          "date": "2025-04-03",
          "balance": 92817.4,
          "min_balance": 42600.0
        },
        {
          "day": 60,
          "date": "2025-04-08",
          "balance": 81899.54,
          "min_balance": 42600.0
        },
        {
          "day": 65,
          "date": "2025-04-13",
          "balance": 67876.53,
          "min_balance": 42600.0
        },
        {
          "day": 70,
          "date": "2025-04-18",
          "balance": 116389.47,
          "min_balance": 42600.0
        },
        {
          "day": 75,
          "date": "2025-04-23",
          "balance": 111035.57,
          "min_balance": 42600.0
        },
        {
          "day": 80,
          "date": "2025-04-28",
          "balance": 108912.13,
          "min_balance": 42600.0
        },
        {
          "day": 85,
          "date": "2025-05-03",
          "balance": 94865.52,
          "min_balance": 42600.0
        },
        {
          "day": 90,
          "date": "2025-05-08",
          "balance": 83947.66,
          "min_balance": 42600.0
        }
      ]
    },
    {
      "request_id": "request_129",
      "user_id": "user_129",
      "requested_amount": 2668.8,
      "currency": "USD",
      "request_type": "education",
      "request_text": "Would paying the course fee now leave enough for my regular commitments? The course I want to take is USD 2,668.80.",
      "allows_partial_payment": false,
      "request_date": "2026-04-04",
      "desired_completion_date": "2026-06-18",
      "home_currency": "USD",
      "current_balance": 1088.0,
      "minimum_balance_to_keep": 800.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 18 June 2026. None of the available options keeps the USD 800 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2026-04-04",
          "balance": 1088.0,
          "min_balance": 800.0
        },
        {
          "day": 5,
          "date": "2026-04-09",
          "balance": 853.86,
          "min_balance": 800.0
        },
        {
          "day": 10,
          "date": "2026-04-14",
          "balance": 704.57,
          "min_balance": 800.0
        },
        {
          "day": 15,
          "date": "2026-04-19",
          "balance": 1644.33,
          "min_balance": 800.0
        },
        {
          "day": 20,
          "date": "2026-04-24",
          "balance": 1613.46,
          "min_balance": 800.0
        },
        {
          "day": 25,
          "date": "2026-04-29",
          "balance": 1372.94,
          "min_balance": 800.0
        },
        {
          "day": 30,
          "date": "2026-05-04",
          "balance": 699.94,
          "min_balance": 800.0
        },
        {
          "day": 35,
          "date": "2026-05-09",
          "balance": 465.8,
          "min_balance": 800.0
        },
        {
          "day": 40,
          "date": "2026-05-14",
          "balance": 316.51,
          "min_balance": 800.0
        },
        {
          "day": 45,
          "date": "2026-05-19",
          "balance": 1256.27,
          "min_balance": 800.0
        },
        {
          "day": 50,
          "date": "2026-05-24",
          "balance": 1225.4,
          "min_balance": 800.0
        },
        {
          "day": 55,
          "date": "2026-05-29",
          "balance": 984.88,
          "min_balance": 800.0
        },
        {
          "day": 60,
          "date": "2026-06-03",
          "balance": 311.88,
          "min_balance": 800.0
        },
        {
          "day": 65,
          "date": "2026-06-08",
          "balance": 104.74,
          "min_balance": 800.0
        },
        {
          "day": 70,
          "date": "2026-06-13",
          "balance": -44.72,
          "min_balance": 800.0
        },
        {
          "day": 75,
          "date": "2026-06-18",
          "balance": 910.76,
          "min_balance": 800.0
        },
        {
          "day": 80,
          "date": "2026-06-23",
          "balance": 868.21,
          "min_balance": 800.0
        },
        {
          "day": 85,
          "date": "2026-06-28",
          "balance": 596.82,
          "min_balance": 800.0
        },
        {
          "day": 90,
          "date": "2026-07-03",
          "balance": -76.18,
          "min_balance": 800.0
        }
      ]
    },
    {
      "request_id": "request_130",
      "user_id": "user_130",
      "requested_amount": 1978.8,
      "currency": "USD",
      "request_type": "family_transfer",
      "request_text": "The amount I want to send is USD 1,978.80. I need to complete it by 15 February 2025. How much can I safely send to my family today?",
      "allows_partial_payment": false,
      "request_date": "2024-12-06",
      "desired_completion_date": "2025-02-15",
      "home_currency": "USD",
      "current_balance": 2317.46,
      "minimum_balance_to_keep": 1400.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 15 February 2025. None of the available options keeps the USD 1,400 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2024-12-06",
          "balance": 2317.46,
          "min_balance": 1400.0
        },
        {
          "day": 5,
          "date": "2024-12-11",
          "balance": 1655.75,
          "min_balance": 1400.0
        },
        {
          "day": 10,
          "date": "2024-12-16",
          "balance": 3416.18,
          "min_balance": 1400.0
        },
        {
          "day": 15,
          "date": "2024-12-21",
          "balance": 3097.9,
          "min_balance": 1400.0
        },
        {
          "day": 20,
          "date": "2024-12-26",
          "balance": 3042.51,
          "min_balance": 1400.0
        },
        {
          "day": 25,
          "date": "2024-12-31",
          "balance": 2859.12,
          "min_balance": 1400.0
        },
        {
          "day": 30,
          "date": "2025-01-05",
          "balance": 2029.08,
          "min_balance": 1400.0
        },
        {
          "day": 35,
          "date": "2025-01-10",
          "balance": 1430.37,
          "min_balance": 1400.0
        },
        {
          "day": 40,
          "date": "2025-01-15",
          "balance": 3187.03,
          "min_balance": 1400.0
        },
        {
          "day": 45,
          "date": "2025-01-20",
          "balance": 2809.52,
          "min_balance": 1400.0
        },
        {
          "day": 50,
          "date": "2025-01-25",
          "balance": 2754.13,
          "min_balance": 1400.0
        },
        {
          "day": 55,
          "date": "2025-01-30",
          "balance": 2570.74,
          "min_balance": 1400.0
        },
        {
          "day": 60,
          "date": "2025-02-04",
          "balance": 1970.74,
          "min_balance": 1400.0
        },
        {
          "day": 65,
          "date": "2025-02-09",
          "balance": 1249.45,
          "min_balance": 1400.0
        },
        {
          "day": 70,
          "date": "2025-02-14",
          "balance": 860.43,
          "min_balance": 1400.0
        },
        {
          "day": 75,
          "date": "2025-02-19",
          "balance": 2521.14,
          "min_balance": 1400.0
        },
        {
          "day": 80,
          "date": "2025-02-24",
          "balance": 2521.14,
          "min_balance": 1400.0
        },
        {
          "day": 85,
          "date": "2025-03-01",
          "balance": 2282.36,
          "min_balance": 1400.0
        },
        {
          "day": 90,
          "date": "2025-03-06",
          "balance": 1452.32,
          "min_balance": 1400.0
        }
      ]
    },
    {
      "request_id": "request_131",
      "user_id": "user_131",
      "requested_amount": 1855.2,
      "currency": "USD",
      "request_type": "education",
      "request_text": "Is it safe to cover the full course fee by the deadline? I need to decide by 8 July 2025. The professional course costs USD 1,855.20.",
      "allows_partial_payment": true,
      "request_date": "2025-05-03",
      "desired_completion_date": "2025-07-08",
      "home_currency": "USD",
      "current_balance": 3387.16,
      "minimum_balance_to_keep": 1100.0,
      "amount_safe_to_pay": 831.77,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 8 July 2025. None of the available options keeps the USD 1,100 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2025-05-03",
          "balance": 3387.16,
          "min_balance": 1100.0
        },
        {
          "day": 5,
          "date": "2025-05-08",
          "balance": 2822.18,
          "min_balance": 1100.0
        },
        {
          "day": 10,
          "date": "2025-05-13",
          "balance": 2525.39,
          "min_balance": 1100.0
        },
        {
          "day": 15,
          "date": "2025-05-18",
          "balance": 2238.48,
          "min_balance": 1100.0
        },
        {
          "day": 20,
          "date": "2025-05-23",
          "balance": 3635.67,
          "min_balance": 1100.0
        },
        {
          "day": 25,
          "date": "2025-05-28",
          "balance": 3476.29,
          "min_balance": 1100.0
        },
        {
          "day": 30,
          "date": "2025-06-02",
          "balance": 3351.21,
          "min_balance": 1100.0
        },
        {
          "day": 35,
          "date": "2025-06-07",
          "balance": 2935.31,
          "min_balance": 1100.0
        },
        {
          "day": 40,
          "date": "2025-06-12",
          "balance": 2734.29,
          "min_balance": 1100.0
        },
        {
          "day": 45,
          "date": "2025-06-17",
          "balance": 2202.53,
          "min_balance": 1100.0
        },
        {
          "day": 50,
          "date": "2025-06-22",
          "balance": 1967.72,
          "min_balance": 1100.0
        },
        {
          "day": 55,
          "date": "2025-06-27",
          "balance": 3440.34,
          "min_balance": 1100.0
        },
        {
          "day": 60,
          "date": "2025-07-02",
          "balance": 3315.26,
          "min_balance": 1100.0
        },
        {
          "day": 65,
          "date": "2025-07-07",
          "balance": 2899.36,
          "min_balance": 1100.0
        },
        {
          "day": 70,
          "date": "2025-07-12",
          "balance": 2698.34,
          "min_balance": 1100.0
        },
        {
          "day": 75,
          "date": "2025-07-17",
          "balance": 2166.58,
          "min_balance": 1100.0
        },
        {
          "day": 80,
          "date": "2025-07-22",
          "balance": 1931.77,
          "min_balance": 1100.0
        },
        {
          "day": 85,
          "date": "2025-07-27",
          "balance": 3404.39,
          "min_balance": 1100.0
        },
        {
          "day": 90,
          "date": "2025-08-01",
          "balance": 3321.5,
          "min_balance": 1100.0
        }
      ]
    },
    {
      "request_id": "request_132",
      "user_id": "user_132",
      "requested_amount": 379.86,
      "currency": "USD",
      "request_type": "family_transfer",
      "request_text": "I want to send USD 379.86 to my family. Can I make the full transfer without falling short on my own bills?",
      "allows_partial_payment": true,
      "request_date": "2026-01-05",
      "desired_completion_date": "2026-02-25",
      "home_currency": "USD",
      "current_balance": 1744.55,
      "minimum_balance_to_keep": 1100.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 25 February 2026. None of the available options keeps the USD 1,100 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2026-01-05",
          "balance": 1684.42,
          "min_balance": 1100.0
        },
        {
          "day": 5,
          "date": "2026-01-10",
          "balance": 1540.61,
          "min_balance": 1100.0
        },
        {
          "day": 10,
          "date": "2026-01-15",
          "balance": 2582.04,
          "min_balance": 1100.0
        },
        {
          "day": 15,
          "date": "2026-01-20",
          "balance": 2396.35,
          "min_balance": 1100.0
        },
        {
          "day": 20,
          "date": "2026-01-25",
          "balance": 2158.08,
          "min_balance": 1100.0
        },
        {
          "day": 25,
          "date": "2026-01-30",
          "balance": 1831.58,
          "min_balance": 1100.0
        },
        {
          "day": 30,
          "date": "2026-02-04",
          "balance": 1424.74,
          "min_balance": 1100.0
        },
        {
          "day": 35,
          "date": "2026-02-09",
          "balance": 1220.8,
          "min_balance": 1100.0
        },
        {
          "day": 40,
          "date": "2026-02-14",
          "balance": 1068.83,
          "min_balance": 1100.0
        },
        {
          "day": 45,
          "date": "2026-02-19",
          "balance": 2076.54,
          "min_balance": 1100.0
        },
        {
          "day": 50,
          "date": "2026-02-24",
          "balance": 1838.27,
          "min_balance": 1100.0
        },
        {
          "day": 55,
          "date": "2026-03-01",
          "balance": 1190.17,
          "min_balance": 1100.0
        },
        {
          "day": 60,
          "date": "2026-03-06",
          "balance": 1009.8,
          "min_balance": 1100.0
        },
        {
          "day": 65,
          "date": "2026-03-11",
          "balance": 830.28,
          "min_balance": 1100.0
        },
        {
          "day": 70,
          "date": "2026-03-16",
          "balance": 1942.42,
          "min_balance": 1100.0
        },
        {
          "day": 75,
          "date": "2026-03-21",
          "balance": 1633.24,
          "min_balance": 1100.0
        },
        {
          "day": 80,
          "date": "2026-03-26",
          "balance": 1518.46,
          "min_balance": 1100.0
        },
        {
          "day": 85,
          "date": "2026-03-31",
          "balance": 1191.96,
          "min_balance": 1100.0
        },
        {
          "day": 90,
          "date": "2026-04-05",
          "balance": 724.99,
          "min_balance": 1100.0
        }
      ]
    },
    {
      "request_id": "request_133",
      "user_id": "user_133",
      "requested_amount": 15770000.0,
      "currency": "IDR",
      "request_type": "purchase",
      "request_text": "Is the laptop affordable right now, or should I wait? I've found a laptop for IDR 15,770,000.",
      "allows_partial_payment": false,
      "request_date": "2024-03-07",
      "desired_completion_date": "2024-03-29",
      "home_currency": "IDR",
      "current_balance": 36824650.0,
      "minimum_balance_to_keep": 9986200.0,
      "amount_safe_to_pay": 15770000.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 29 March 2024. None of the available options keeps the IDR 9,986,200 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2024-03-07",
          "balance": 36441046.22,
          "min_balance": 9986200.0
        },
        {
          "day": 5,
          "date": "2024-03-12",
          "balance": 33354944.64,
          "min_balance": 9986200.0
        },
        {
          "day": 10,
          "date": "2024-03-17",
          "balance": 49929518.08,
          "min_balance": 9986200.0
        },
        {
          "day": 15,
          "date": "2024-03-22",
          "balance": 48797237.56,
          "min_balance": 9986200.0
        },
        {
          "day": 20,
          "date": "2024-03-27",
          "balance": 47728715.47,
          "min_balance": 9986200.0
        },
        {
          "day": 25,
          "date": "2024-04-01",
          "balance": 45652067.31,
          "min_balance": 9986200.0
        },
        {
          "day": 30,
          "date": "2024-04-06",
          "balance": 39058987.48,
          "min_balance": 9986200.0
        },
        {
          "day": 35,
          "date": "2024-04-11",
          "balance": 35589282.12,
          "min_balance": 9986200.0
        },
        {
          "day": 40,
          "date": "2024-04-16",
          "balance": 52163855.56,
          "min_balance": 9986200.0
        },
        {
          "day": 45,
          "date": "2024-04-21",
          "balance": 51031575.04,
          "min_balance": 9986200.0
        },
        {
          "day": 50,
          "date": "2024-04-26",
          "balance": 50764220.19,
          "min_balance": 9986200.0
        },
        {
          "day": 55,
          "date": "2024-05-01",
          "balance": 47886404.79,
          "min_balance": 9986200.0
        },
        {
          "day": 60,
          "date": "2024-05-06",
          "balance": 41293324.96,
          "min_balance": 9986200.0
        },
        {
          "day": 65,
          "date": "2024-05-11",
          "balance": 37823619.6,
          "min_balance": 9986200.0
        },
        {
          "day": 70,
          "date": "2024-05-16",
          "balance": 54398193.04,
          "min_balance": 9986200.0
        },
        {
          "day": 75,
          "date": "2024-05-21",
          "balance": 53265912.52,
          "min_balance": 9986200.0
        },
        {
          "day": 80,
          "date": "2024-05-26",
          "balance": 52998557.67,
          "min_balance": 9986200.0
        },
        {
          "day": 85,
          "date": "2024-05-31",
          "balance": 50120742.27,
          "min_balance": 9986200.0
        },
        {
          "day": 90,
          "date": "2024-06-05",
          "balance": 44855341.14,
          "min_balance": 9986200.0
        }
      ]
    },
    {
      "request_id": "request_134",
      "user_id": "user_134",
      "requested_amount": 21831000.0,
      "currency": "IDR",
      "request_type": "purchase",
      "request_text": "The laptop I'm looking at is IDR 21,831,000. I need to complete it by 15 October 2025. Can I buy the laptop now without making next month's bills tight?",
      "allows_partial_payment": false,
      "request_date": "2025-08-04",
      "desired_completion_date": "2025-10-15",
      "home_currency": "IDR",
      "current_balance": 28020700.0,
      "minimum_balance_to_keep": 15902500.0,
      "amount_safe_to_pay": 5396513.25,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 15 October 2025. None of the available options keeps the IDR 15,902,500 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2025-08-04",
          "balance": 28020700.0,
          "min_balance": 15902500.0
        },
        {
          "day": 5,
          "date": "2025-08-09",
          "balance": 24040294.63,
          "min_balance": 15902500.0
        },
        {
          "day": 10,
          "date": "2025-08-14",
          "balance": 21299013.25,
          "min_balance": 15902500.0
        },
        {
          "day": 15,
          "date": "2025-08-19",
          "balance": 68464006.86,
          "min_balance": 15902500.0
        },
        {
          "day": 20,
          "date": "2025-08-24",
          "balance": 63032755.15,
          "min_balance": 15902500.0
        },
        {
          "day": 25,
          "date": "2025-08-29",
          "balance": 59971031.74,
          "min_balance": 15902500.0
        },
        {
          "day": 30,
          "date": "2025-09-03",
          "balance": 40903544.67,
          "min_balance": 15902500.0
        },
        {
          "day": 35,
          "date": "2025-09-08",
          "balance": 39206592.18,
          "min_balance": 15902500.0
        },
        {
          "day": 40,
          "date": "2025-09-13",
          "balance": 34401307.92,
          "min_balance": 15902500.0
        },
        {
          "day": 45,
          "date": "2025-09-18",
          "balance": 56836851.53,
          "min_balance": 15902500.0
        },
        {
          "day": 50,
          "date": "2025-09-23",
          "balance": 51830874.78,
          "min_balance": 15902500.0
        },
        {
          "day": 55,
          "date": "2025-09-28",
          "balance": 49512705.69,
          "min_balance": 15902500.0
        },
        {
          "day": 60,
          "date": "2025-10-03",
          "balance": 29276389.34,
          "min_balance": 15902500.0
        },
        {
          "day": 65,
          "date": "2025-10-08",
          "balance": 27579436.85,
          "min_balance": 15902500.0
        },
        {
          "day": 70,
          "date": "2025-10-13",
          "balance": 22774152.59,
          "min_balance": 15902500.0
        },
        {
          "day": 75,
          "date": "2025-10-18",
          "balance": 45209696.2,
          "min_balance": 15902500.0
        },
        {
          "day": 80,
          "date": "2025-10-23",
          "balance": 40203719.45,
          "min_balance": 15902500.0
        },
        {
          "day": 85,
          "date": "2025-10-28",
          "balance": 37885550.36,
          "min_balance": 15902500.0
        },
        {
          "day": 90,
          "date": "2025-11-02",
          "balance": 26052662.8,
          "min_balance": 15902500.0
        }
      ]
    },
    {
      "request_id": "request_135",
      "user_id": "user_135",
      "requested_amount": 304.8,
      "currency": "USD",
      "request_type": "housing",
      "request_text": "Is the deposit affordable now, or do I need more time? I need to decide by 14 July 2026. The landlord has asked for a deposit of USD 304.80.",
      "allows_partial_payment": true,
      "request_date": "2026-07-06",
      "desired_completion_date": "2026-07-14",
      "home_currency": "USD",
      "current_balance": 1041.1,
      "minimum_balance_to_keep": 500.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 14 July 2026. None of the available options keeps the USD 500 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2026-07-06",
          "balance": 1011.53,
          "min_balance": 500.0
        },
        {
          "day": 5,
          "date": "2026-07-11",
          "balance": 837.04,
          "min_balance": 500.0
        },
        {
          "day": 10,
          "date": "2026-07-16",
          "balance": 1340.88,
          "min_balance": 500.0
        },
        {
          "day": 15,
          "date": "2026-07-21",
          "balance": 1234.98,
          "min_balance": 500.0
        },
        {
          "day": 20,
          "date": "2026-07-26",
          "balance": 1071.45,
          "min_balance": 500.0
        },
        {
          "day": 25,
          "date": "2026-07-31",
          "balance": 1009.02,
          "min_balance": 500.0
        },
        {
          "day": 30,
          "date": "2026-08-05",
          "balance": 777.48,
          "min_balance": 500.0
        },
        {
          "day": 35,
          "date": "2026-08-10",
          "balance": 631.41,
          "min_balance": 500.0
        },
        {
          "day": 40,
          "date": "2026-08-15",
          "balance": 1096.23,
          "min_balance": 500.0
        },
        {
          "day": 45,
          "date": "2026-08-20",
          "balance": 1023.48,
          "min_balance": 500.0
        },
        {
          "day": 50,
          "date": "2026-08-25",
          "balance": 847.49,
          "min_balance": 500.0
        },
        {
          "day": 55,
          "date": "2026-08-30",
          "balance": 745.4,
          "min_balance": 500.0
        },
        {
          "day": 60,
          "date": "2026-09-04",
          "balance": 625.53,
          "min_balance": 500.0
        },
        {
          "day": 65,
          "date": "2026-09-09",
          "balance": 367.79,
          "min_balance": 500.0
        },
        {
          "day": 70,
          "date": "2026-09-14",
          "balance": 214.87,
          "min_balance": 500.0
        },
        {
          "day": 75,
          "date": "2026-09-19",
          "balance": 795.65,
          "min_balance": 500.0
        },
        {
          "day": 80,
          "date": "2026-09-24",
          "balance": 583.87,
          "min_balance": 500.0
        },
        {
          "day": 85,
          "date": "2026-09-29",
          "balance": 497.94,
          "min_balance": 500.0
        },
        {
          "day": 90,
          "date": "2026-10-04",
          "balance": 361.91,
          "min_balance": 500.0
        }
      ]
    },
    {
      "request_id": "request_136",
      "user_id": "user_136",
      "requested_amount": 560.4,
      "currency": "USD",
      "request_type": "education",
      "request_text": "The course I want to take is USD 560.40. Is it safe to cover the full course fee by the deadline?",
      "allows_partial_payment": true,
      "request_date": "2024-06-03",
      "desired_completion_date": "2024-06-14",
      "home_currency": "USD",
      "current_balance": 2291.68,
      "minimum_balance_to_keep": 1100.0,
      "amount_safe_to_pay": 497.98,
      "affordability_status": "affordable_later",
      "recommended_payment_method": "wait",
      "payment_plan": "2024-06-15:560.40",
      "earliest_date_for_full_payment": "2024-06-15",
      "spending_changes_needed": "none",
      "decision_explanation": "Pay USD 560.40 in full on 15 June 2024. Paying earlier would take the balance below the USD 1,100 minimum.",
      "curve": [
        {
          "day": 0,
          "date": "2024-06-03",
          "balance": 2291.68,
          "min_balance": 1100.0
        },
        {
          "day": 5,
          "date": "2024-06-08",
          "balance": 2214.52,
          "min_balance": 1100.0
        },
        {
          "day": 10,
          "date": "2024-06-13",
          "balance": 1597.98,
          "min_balance": 1100.0
        },
        {
          "day": 15,
          "date": "2024-06-18",
          "balance": 4590.8,
          "min_balance": 1100.0
        },
        {
          "day": 20,
          "date": "2024-06-23",
          "balance": 4481.92,
          "min_balance": 1100.0
        },
        {
          "day": 25,
          "date": "2024-06-28",
          "balance": 4324.72,
          "min_balance": 1100.0
        },
        {
          "day": 30,
          "date": "2024-07-03",
          "balance": 3845.58,
          "min_balance": 1100.0
        },
        {
          "day": 35,
          "date": "2024-07-08",
          "balance": 3768.42,
          "min_balance": 1100.0
        },
        {
          "day": 40,
          "date": "2024-07-13",
          "balance": 3151.88,
          "min_balance": 1100.0
        },
        {
          "day": 45,
          "date": "2024-07-18",
          "balance": 4596.7,
          "min_balance": 1100.0
        },
        {
          "day": 50,
          "date": "2024-07-23",
          "balance": 4487.82,
          "min_balance": 1100.0
        },
        {
          "day": 55,
          "date": "2024-07-28",
          "balance": 4330.62,
          "min_balance": 1100.0
        },
        {
          "day": 60,
          "date": "2024-08-02",
          "balance": 3851.48,
          "min_balance": 1100.0
        },
        {
          "day": 65,
          "date": "2024-08-07",
          "balance": 3774.32,
          "min_balance": 1100.0
        },
        {
          "day": 70,
          "date": "2024-08-12",
          "balance": 3190.71,
          "min_balance": 1100.0
        },
        {
          "day": 75,
          "date": "2024-08-17",
          "balance": 4602.6,
          "min_balance": 1100.0
        },
        {
          "day": 80,
          "date": "2024-08-22",
          "balance": 4602.6,
          "min_balance": 1100.0
        },
        {
          "day": 85,
          "date": "2024-08-27",
          "balance": 4336.52,
          "min_balance": 1100.0
        },
        {
          "day": 90,
          "date": "2024-09-01",
          "balance": 3898.86,
          "min_balance": 1100.0
        }
      ]
    },
    {
      "request_id": "request_137",
      "user_id": "user_137",
      "requested_amount": 80100.0,
      "currency": "INR",
      "request_type": "purchase",
      "request_text": "Can I make this purchase without dipping into the balance I want to keep? The laptop comes to INR 80,100.",
      "allows_partial_payment": false,
      "request_date": "2025-11-05",
      "desired_completion_date": "2026-01-15",
      "home_currency": "INR",
      "current_balance": 139760.0,
      "minimum_balance_to_keep": 71800.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 15 January 2026. None of the available options keeps the INR 71,800 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2025-11-05",
          "balance": 139760.0,
          "min_balance": 71800.0
        },
        {
          "day": 5,
          "date": "2025-11-10",
          "balance": 118896.84,
          "min_balance": 71800.0
        },
        {
          "day": 10,
          "date": "2025-11-15",
          "balance": 193214.5,
          "min_balance": 71800.0
        },
        {
          "day": 15,
          "date": "2025-11-20",
          "balance": 187917.14,
          "min_balance": 71800.0
        },
        {
          "day": 20,
          "date": "2025-11-25",
          "balance": 180739.35,
          "min_balance": 71800.0
        },
        {
          "day": 25,
          "date": "2025-11-30",
          "balance": 159152.5,
          "min_balance": 71800.0
        },
        {
          "day": 30,
          "date": "2025-12-05",
          "balance": 107242.09,
          "min_balance": 71800.0
        },
        {
          "day": 35,
          "date": "2025-12-10",
          "balance": 86378.93,
          "min_balance": 71800.0
        },
        {
          "day": 40,
          "date": "2025-12-15",
          "balance": 160696.59,
          "min_balance": 71800.0
        },
        {
          "day": 45,
          "date": "2025-12-20",
          "balance": 155399.23,
          "min_balance": 71800.0
        },
        {
          "day": 50,
          "date": "2025-12-25",
          "balance": 148221.44,
          "min_balance": 71800.0
        },
        {
          "day": 55,
          "date": "2025-12-30",
          "balance": 126634.59,
          "min_balance": 71800.0
        },
        {
          "day": 60,
          "date": "2026-01-04",
          "balance": 74724.18,
          "min_balance": 71800.0
        },
        {
          "day": 65,
          "date": "2026-01-09",
          "balance": 53861.02,
          "min_balance": 71800.0
        },
        {
          "day": 70,
          "date": "2026-01-14",
          "balance": 25601.0,
          "min_balance": 71800.0
        },
        {
          "day": 75,
          "date": "2026-01-19",
          "balance": 122881.32,
          "min_balance": 71800.0
        },
        {
          "day": 80,
          "date": "2026-01-24",
          "balance": 120690.41,
          "min_balance": 71800.0
        },
        {
          "day": 85,
          "date": "2026-01-29",
          "balance": 94116.68,
          "min_balance": 71800.0
        },
        {
          "day": 90,
          "date": "2026-02-03",
          "balance": 45100.41,
          "min_balance": 71800.0
        }
      ]
    },
    {
      "request_id": "request_138",
      "user_id": "user_138",
      "requested_amount": 1256.94,
      "currency": "EUR",
      "request_type": "purchase",
      "request_text": "I've been quoted EUR 1,256.94 for the laptop. I need to complete it by 5 June 2026. Is the laptop affordable right now, or should I wait?",
      "allows_partial_payment": true,
      "request_date": "2026-04-07",
      "desired_completion_date": "2026-06-05",
      "home_currency": "EUR",
      "current_balance": 3644.65,
      "minimum_balance_to_keep": 2300.0,
      "amount_safe_to_pay": 85.71,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 5 June 2026. None of the available options keeps the EUR 2,300 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2026-04-07",
          "balance": 3347.53,
          "min_balance": 2300.0
        },
        {
          "day": 5,
          "date": "2026-04-12",
          "balance": 2736.83,
          "min_balance": 2300.0
        },
        {
          "day": 10,
          "date": "2026-04-17",
          "balance": 5171.0,
          "min_balance": 2300.0
        },
        {
          "day": 15,
          "date": "2026-04-22",
          "balance": 4857.46,
          "min_balance": 2300.0
        },
        {
          "day": 20,
          "date": "2026-04-27",
          "balance": 4664.93,
          "min_balance": 2300.0
        },
        {
          "day": 25,
          "date": "2026-05-02",
          "balance": 4032.98,
          "min_balance": 2300.0
        },
        {
          "day": 30,
          "date": "2026-05-07",
          "balance": 3100.65,
          "min_balance": 2300.0
        },
        {
          "day": 35,
          "date": "2026-05-12",
          "balance": 2624.7,
          "min_balance": 2300.0
        },
        {
          "day": 40,
          "date": "2026-05-17",
          "balance": 5058.87,
          "min_balance": 2300.0
        },
        {
          "day": 45,
          "date": "2026-05-22",
          "balance": 4745.33,
          "min_balance": 2300.0
        },
        {
          "day": 50,
          "date": "2026-05-27",
          "balance": 4552.8,
          "min_balance": 2300.0
        },
        {
          "day": 55,
          "date": "2026-06-01",
          "balance": 4120.42,
          "min_balance": 2300.0
        },
        {
          "day": 60,
          "date": "2026-06-06",
          "balance": 3150.89,
          "min_balance": 2300.0
        },
        {
          "day": 65,
          "date": "2026-06-11",
          "balance": 2639.32,
          "min_balance": 2300.0
        },
        {
          "day": 70,
          "date": "2026-06-16",
          "balance": 5080.71,
          "min_balance": 2300.0
        },
        {
          "day": 75,
          "date": "2026-06-21",
          "balance": 4756.13,
          "min_balance": 2300.0
        },
        {
          "day": 80,
          "date": "2026-06-26",
          "balance": 4575.42,
          "min_balance": 2300.0
        },
        {
          "day": 85,
          "date": "2026-07-01",
          "balance": 4008.29,
          "min_balance": 2300.0
        },
        {
          "day": 90,
          "date": "2026-07-06",
          "balance": 3038.76,
          "min_balance": 2300.0
        }
      ]
    },
    {
      "request_id": "request_139",
      "user_id": "user_139",
      "requested_amount": 2316.0,
      "currency": "USD",
      "request_type": "housing",
      "request_text": "Can I cover this deposit without putting rent and regular bills at risk? I need to decide by 17 November 2024. I've been asked to pay USD 2,316 as the rental deposit.",
      "allows_partial_payment": false,
      "request_date": "2024-09-04",
      "desired_completion_date": "2024-11-17",
      "home_currency": "USD",
      "current_balance": 3767.84,
      "minimum_balance_to_keep": 1500.0,
      "amount_safe_to_pay": 1230.19,
      "affordability_status": "affordable_with_plan",
      "recommended_payment_method": "installments",
      "payment_plan": "2024-09-07:802.88|2024-10-08:802.88|2024-11-08:802.88",
      "earliest_date_for_full_payment": "2024-09-15",
      "spending_changes_needed": "none",
      "decision_explanation": "Use 3 installments of USD 802.88, starting 7 September 2024. This leaves at least USD 1,500 available.",
      "curve": [
        {
          "day": 0,
          "date": "2024-09-04",
          "balance": 3287.84,
          "min_balance": 1500.0
        },
        {
          "day": 5,
          "date": "2024-09-09",
          "balance": 3010.96,
          "min_balance": 1500.0
        },
        {
          "day": 10,
          "date": "2024-09-14",
          "balance": 2730.19,
          "min_balance": 1500.0
        },
        {
          "day": 15,
          "date": "2024-09-19",
          "balance": 6018.41,
          "min_balance": 1500.0
        },
        {
          "day": 20,
          "date": "2024-09-24",
          "balance": 5629.28,
          "min_balance": 1500.0
        },
        {
          "day": 25,
          "date": "2024-09-29",
          "balance": 5339.64,
          "min_balance": 1500.0
        },
        {
          "day": 30,
          "date": "2024-10-04",
          "balance": 4712.24,
          "min_balance": 1500.0
        },
        {
          "day": 35,
          "date": "2024-10-09",
          "balance": 4517.36,
          "min_balance": 1500.0
        },
        {
          "day": 40,
          "date": "2024-10-14",
          "balance": 4236.59,
          "min_balance": 1500.0
        },
        {
          "day": 45,
          "date": "2024-10-19",
          "balance": 5700.81,
          "min_balance": 1500.0
        },
        {
          "day": 50,
          "date": "2024-10-24",
          "balance": 5311.68,
          "min_balance": 1500.0
        },
        {
          "day": 55,
          "date": "2024-10-29",
          "balance": 5022.04,
          "min_balance": 1500.0
        },
        {
          "day": 60,
          "date": "2024-11-03",
          "balance": 4874.64,
          "min_balance": 1500.0
        },
        {
          "day": 65,
          "date": "2024-11-08",
          "balance": 4199.76,
          "min_balance": 1500.0
        },
        {
          "day": 70,
          "date": "2024-11-13",
          "balance": 3995.71,
          "min_balance": 1500.0
        },
        {
          "day": 75,
          "date": "2024-11-18",
          "balance": 5536.04,
          "min_balance": 1500.0
        },
        {
          "day": 80,
          "date": "2024-11-23",
          "balance": 5234.08,
          "min_balance": 1500.0
        },
        {
          "day": 85,
          "date": "2024-11-28",
          "balance": 4738.4,
          "min_balance": 1500.0
        },
        {
          "day": 90,
          "date": "2024-12-03",
          "balance": 4557.04,
          "min_balance": 1500.0
        }
      ]
    },
    {
      "request_id": "request_140",
      "user_id": "user_140",
      "requested_amount": 62832.0,
      "currency": "ZAR",
      "request_type": "emergency_expense",
      "request_text": "I need to cover an urgent repair of ZAR 62,832. Should I pay for the repair in full, split the payment, or wait?",
      "allows_partial_payment": false,
      "request_date": "2025-02-06",
      "desired_completion_date": "2025-03-04",
      "home_currency": "ZAR",
      "current_balance": 34679.0,
      "minimum_balance_to_keep": 21600.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 4 March 2025. None of the available options keeps the ZAR 21,600 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2025-02-06",
          "balance": 31527.29,
          "min_balance": 21600.0
        },
        {
          "day": 5,
          "date": "2025-02-11",
          "balance": 20355.05,
          "min_balance": 21600.0
        },
        {
          "day": 10,
          "date": "2025-02-16",
          "balance": 48835.79,
          "min_balance": 21600.0
        },
        {
          "day": 15,
          "date": "2025-02-21",
          "balance": 44653.6,
          "min_balance": 21600.0
        },
        {
          "day": 20,
          "date": "2025-02-26",
          "balance": 43396.72,
          "min_balance": 21600.0
        },
        {
          "day": 25,
          "date": "2025-03-03",
          "balance": 25249.59,
          "min_balance": 21600.0
        },
        {
          "day": 30,
          "date": "2025-03-08",
          "balance": 16796.32,
          "min_balance": 21600.0
        },
        {
          "day": 35,
          "date": "2025-03-13",
          "balance": 8319.58,
          "min_balance": 21600.0
        },
        {
          "day": 40,
          "date": "2025-03-18",
          "balance": 38190.79,
          "min_balance": 21600.0
        },
        {
          "day": 45,
          "date": "2025-03-23",
          "balance": 34102.62,
          "min_balance": 21600.0
        },
        {
          "day": 50,
          "date": "2025-03-28",
          "balance": 31968.31,
          "min_balance": 21600.0
        },
        {
          "day": 55,
          "date": "2025-04-02",
          "balance": 17872.56,
          "min_balance": 21600.0
        },
        {
          "day": 60,
          "date": "2025-04-07",
          "balance": 7502.22,
          "min_balance": 21600.0
        },
        {
          "day": 65,
          "date": "2025-04-12",
          "balance": 314.43,
          "min_balance": 21600.0
        },
        {
          "day": 70,
          "date": "2025-04-17",
          "balance": 30247.59,
          "min_balance": 21600.0
        },
        {
          "day": 75,
          "date": "2025-04-22",
          "balance": 26065.4,
          "min_balance": 21600.0
        },
        {
          "day": 80,
          "date": "2025-04-27",
          "balance": 23329.14,
          "min_balance": 21600.0
        },
        {
          "day": 85,
          "date": "2025-05-02",
          "balance": 8578.46,
          "min_balance": 21600.0
        },
        {
          "day": 90,
          "date": "2025-05-07",
          "balance": -1791.88,
          "min_balance": 21600.0
        }
      ]
    },
    {
      "request_id": "request_141",
      "user_id": "user_141",
      "requested_amount": 171600.0,
      "currency": "INR",
      "request_type": "other",
      "request_text": "How much can I safely pay toward the membership now? I've been offered the annual membership for INR 171,600.",
      "allows_partial_payment": true,
      "request_date": "2026-01-03",
      "desired_completion_date": "2026-02-12",
      "home_currency": "INR",
      "current_balance": 122545.0,
      "minimum_balance_to_keep": 67300.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 12 February 2026. None of the available options keeps the INR 67,300 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2026-01-03",
          "balance": 116918.82,
          "min_balance": 67300.0
        },
        {
          "day": 5,
          "date": "2026-01-08",
          "balance": 89288.06,
          "min_balance": 67300.0
        },
        {
          "day": 10,
          "date": "2026-01-13",
          "balance": 76970.75,
          "min_balance": 67300.0
        },
        {
          "day": 15,
          "date": "2026-01-18",
          "balance": 164404.12,
          "min_balance": 67300.0
        },
        {
          "day": 20,
          "date": "2026-01-23",
          "balance": 150942.25,
          "min_balance": 67300.0
        },
        {
          "day": 25,
          "date": "2026-01-28",
          "balance": 138954.52,
          "min_balance": 67300.0
        },
        {
          "day": 30,
          "date": "2026-02-02",
          "balance": 73367.04,
          "min_balance": 67300.0
        },
        {
          "day": 35,
          "date": "2026-02-07",
          "balance": 56135.11,
          "min_balance": 67300.0
        },
        {
          "day": 40,
          "date": "2026-02-12",
          "balance": 35412.79,
          "min_balance": 67300.0
        },
        {
          "day": 45,
          "date": "2026-02-17",
          "balance": 127766.28,
          "min_balance": 67300.0
        },
        {
          "day": 50,
          "date": "2026-02-22",
          "balance": 111280.04,
          "min_balance": 67300.0
        },
        {
          "day": 55,
          "date": "2026-02-27",
          "balance": 99150.81,
          "min_balance": 67300.0
        },
        {
          "day": 60,
          "date": "2026-03-04",
          "balance": 29992.9,
          "min_balance": 67300.0
        },
        {
          "day": 65,
          "date": "2026-03-09",
          "balance": 1333.29,
          "min_balance": 67300.0
        },
        {
          "day": 70,
          "date": "2026-03-14",
          "balance": -7990.19,
          "min_balance": 67300.0
        },
        {
          "day": 75,
          "date": "2026-03-19",
          "balance": 81288.2,
          "min_balance": 67300.0
        },
        {
          "day": 80,
          "date": "2026-03-24",
          "balance": 67826.33,
          "min_balance": 67300.0
        },
        {
          "day": 85,
          "date": "2026-03-29",
          "balance": 48931.29,
          "min_balance": 67300.0
        },
        {
          "day": 90,
          "date": "2026-04-03",
          "balance": -11565.06,
          "min_balance": 67300.0
        }
      ]
    },
    {
      "request_id": "request_142",
      "user_id": "user_142",
      "requested_amount": 1263.6,
      "currency": "USD",
      "request_type": "investment",
      "request_text": "The amount I would like to invest is USD 1,263.60. I need to complete it by 4 February 2025. Can I make the full investment and still keep enough cash available?",
      "allows_partial_payment": true,
      "request_date": "2024-12-05",
      "desired_completion_date": "2025-02-04",
      "home_currency": "USD",
      "current_balance": 5993.85,
      "minimum_balance_to_keep": 1700.0,
      "amount_safe_to_pay": 1237.29,
      "affordability_status": "affordable_with_plan",
      "recommended_payment_method": "full_payment",
      "payment_plan": "2024-12-05:1263.60",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "reduce_to:event_13105:25.50",
      "decision_explanation": "Reduce the bakery and snacks to USD 25.50, then pay USD 1,263.60 today. This leaves at least USD 1,700 available.",
      "curve": [
        {
          "day": 0,
          "date": "2024-12-05",
          "balance": 5928.85,
          "min_balance": 1700.0
        },
        {
          "day": 5,
          "date": "2024-12-10",
          "balance": 5333.59,
          "min_balance": 1700.0
        },
        {
          "day": 10,
          "date": "2024-12-15",
          "balance": 5192.26,
          "min_balance": 1700.0
        },
        {
          "day": 15,
          "date": "2024-12-20",
          "balance": 4930.41,
          "min_balance": 1700.0
        },
        {
          "day": 20,
          "date": "2024-12-25",
          "balance": 5856.52,
          "min_balance": 1700.0
        },
        {
          "day": 25,
          "date": "2024-12-30",
          "balance": 5599.82,
          "min_balance": 1700.0
        },
        {
          "day": 30,
          "date": "2025-01-04",
          "balance": 4888.33,
          "min_balance": 1700.0
        },
        {
          "day": 35,
          "date": "2025-01-09",
          "balance": 4573.31,
          "min_balance": 1700.0
        },
        {
          "day": 40,
          "date": "2025-01-14",
          "balance": 4268.98,
          "min_balance": 1700.0
        },
        {
          "day": 45,
          "date": "2025-01-19",
          "balance": 3954.89,
          "min_balance": 1700.0
        },
        {
          "day": 50,
          "date": "2025-01-24",
          "balance": 4936.12,
          "min_balance": 1700.0
        },
        {
          "day": 55,
          "date": "2025-01-29",
          "balance": 4713.97,
          "min_balance": 1700.0
        },
        {
          "day": 60,
          "date": "2025-02-03",
          "balance": 3963.29,
          "min_balance": 1700.0
        },
        {
          "day": 65,
          "date": "2025-02-08",
          "balance": 3668.86,
          "min_balance": 1700.0
        },
        {
          "day": 70,
          "date": "2025-02-13",
          "balance": 3293.46,
          "min_balance": 1700.0
        },
        {
          "day": 75,
          "date": "2025-02-18",
          "balance": 3077.23,
          "min_balance": 1700.0
        },
        {
          "day": 80,
          "date": "2025-02-23",
          "balance": 3960.6,
          "min_balance": 1700.0
        },
        {
          "day": 85,
          "date": "2025-02-28",
          "balance": 3551.77,
          "min_balance": 1700.0
        },
        {
          "day": 90,
          "date": "2025-03-05",
          "balance": 2937.29,
          "min_balance": 1700.0
        }
      ]
    },
    {
      "request_id": "request_143",
      "user_id": "user_143",
      "requested_amount": 12584.0,
      "currency": "ZAR",
      "request_type": "emergency_expense",
      "request_text": "Can I cover the full repair now and still manage my essential expenses? I need to decide by 15 July 2025. The latest estimate for the repair is ZAR 12,584.",
      "allows_partial_payment": false,
      "request_date": "2025-05-07",
      "desired_completion_date": "2025-07-15",
      "home_currency": "ZAR",
      "current_balance": 20111.0,
      "minimum_balance_to_keep": 11300.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 15 July 2025. None of the available options keeps the ZAR 11,300 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2025-05-07",
          "balance": 19684.2,
          "min_balance": 11300.0
        },
        {
          "day": 5,
          "date": "2025-05-12",
          "balance": 16026.04,
          "min_balance": 11300.0
        },
        {
          "day": 10,
          "date": "2025-05-17",
          "balance": 26799.24,
          "min_balance": 11300.0
        },
        {
          "day": 15,
          "date": "2025-05-22",
          "balance": 25850.61,
          "min_balance": 11300.0
        },
        {
          "day": 20,
          "date": "2025-05-27",
          "balance": 23421.39,
          "min_balance": 11300.0
        },
        {
          "day": 25,
          "date": "2025-06-01",
          "balance": 17478.06,
          "min_balance": 11300.0
        },
        {
          "day": 30,
          "date": "2025-06-06",
          "balance": 11270.36,
          "min_balance": 11300.0
        },
        {
          "day": 35,
          "date": "2025-06-11",
          "balance": 8458.58,
          "min_balance": 11300.0
        },
        {
          "day": 40,
          "date": "2025-06-16",
          "balance": 18812.2,
          "min_balance": 11300.0
        },
        {
          "day": 45,
          "date": "2025-06-21",
          "balance": 17863.57,
          "min_balance": 11300.0
        },
        {
          "day": 50,
          "date": "2025-06-26",
          "balance": 16610.44,
          "min_balance": 11300.0
        },
        {
          "day": 55,
          "date": "2025-07-01",
          "balance": 9491.02,
          "min_balance": 11300.0
        },
        {
          "day": 60,
          "date": "2025-07-06",
          "balance": 3283.32,
          "min_balance": 11300.0
        },
        {
          "day": 65,
          "date": "2025-07-11",
          "balance": 471.54,
          "min_balance": 11300.0
        },
        {
          "day": 70,
          "date": "2025-07-16",
          "balance": 10825.16,
          "min_balance": 11300.0
        },
        {
          "day": 75,
          "date": "2025-07-21",
          "balance": 9876.53,
          "min_balance": 11300.0
        },
        {
          "day": 80,
          "date": "2025-07-26",
          "balance": 8623.4,
          "min_balance": 11300.0
        },
        {
          "day": 85,
          "date": "2025-07-31",
          "balance": 6262.18,
          "min_balance": 11300.0
        },
        {
          "day": 90,
          "date": "2025-08-05",
          "balance": -4703.72,
          "min_balance": 11300.0
        }
      ]
    },
    {
      "request_id": "request_144",
      "user_id": "user_144",
      "requested_amount": 233.34,
      "currency": "USD",
      "request_type": "investment",
      "request_text": "I'm thinking of investing USD 233.34. Would investing this amount leave my upcoming bills covered?",
      "allows_partial_payment": true,
      "request_date": "2026-07-04",
      "desired_completion_date": "2026-07-26",
      "home_currency": "USD",
      "current_balance": 1248.08,
      "minimum_balance_to_keep": 600.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 26 July 2026. None of the available options keeps the USD 600 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2026-07-04",
          "balance": 1248.08,
          "min_balance": 600.0
        },
        {
          "day": 5,
          "date": "2026-07-09",
          "balance": 1128.4,
          "min_balance": 600.0
        },
        {
          "day": 10,
          "date": "2026-07-14",
          "balance": 852.7,
          "min_balance": 600.0
        },
        {
          "day": 15,
          "date": "2026-07-19",
          "balance": 1628.68,
          "min_balance": 600.0
        },
        {
          "day": 20,
          "date": "2026-07-24",
          "balance": 1556.67,
          "min_balance": 600.0
        },
        {
          "day": 25,
          "date": "2026-07-29",
          "balance": 1452.9,
          "min_balance": 600.0
        },
        {
          "day": 30,
          "date": "2026-08-03",
          "balance": 1020.59,
          "min_balance": 600.0
        },
        {
          "day": 35,
          "date": "2026-08-08",
          "balance": 900.91,
          "min_balance": 600.0
        },
        {
          "day": 40,
          "date": "2026-08-13",
          "balance": 701.61,
          "min_balance": 600.0
        },
        {
          "day": 45,
          "date": "2026-08-18",
          "balance": 1473.88,
          "min_balance": 600.0
        },
        {
          "day": 50,
          "date": "2026-08-23",
          "balance": 1421.26,
          "min_balance": 600.0
        },
        {
          "day": 55,
          "date": "2026-08-28",
          "balance": 1276.41,
          "min_balance": 600.0
        },
        {
          "day": 60,
          "date": "2026-09-02",
          "balance": 885.51,
          "min_balance": 600.0
        },
        {
          "day": 65,
          "date": "2026-09-07",
          "balance": 724.42,
          "min_balance": 600.0
        },
        {
          "day": 70,
          "date": "2026-09-12",
          "balance": 525.12,
          "min_balance": 600.0
        },
        {
          "day": 75,
          "date": "2026-09-17",
          "balance": 1297.39,
          "min_balance": 600.0
        },
        {
          "day": 80,
          "date": "2026-09-22",
          "balance": 1244.77,
          "min_balance": 600.0
        },
        {
          "day": 85,
          "date": "2026-09-27",
          "balance": 1116.01,
          "min_balance": 600.0
        },
        {
          "day": 90,
          "date": "2026-10-02",
          "balance": 709.02,
          "min_balance": 600.0
        }
      ]
    },
    {
      "request_id": "request_145",
      "user_id": "user_145",
      "requested_amount": 217400.0,
      "currency": "INR",
      "request_type": "travel",
      "request_text": "Would it be safer to book the trip now or wait until more money comes in? The total trip cost is INR 217,400.",
      "allows_partial_payment": true,
      "request_date": "2024-03-06",
      "desired_completion_date": "2024-05-26",
      "home_currency": "INR",
      "current_balance": 261013.66,
      "minimum_balance_to_keep": 155400.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 26 May 2024. None of the available options keeps the INR 155,400 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2024-03-06",
          "balance": 229436.02,
          "min_balance": 155400.0
        },
        {
          "day": 5,
          "date": "2024-03-11",
          "balance": 175540.22,
          "min_balance": 155400.0
        },
        {
          "day": 10,
          "date": "2024-03-16",
          "balance": 130545.95,
          "min_balance": 155400.0
        },
        {
          "day": 15,
          "date": "2024-03-21",
          "balance": 215691.19,
          "min_balance": 155400.0
        },
        {
          "day": 20,
          "date": "2024-03-26",
          "balance": 197991.61,
          "min_balance": 155400.0
        },
        {
          "day": 25,
          "date": "2024-03-31",
          "balance": 168946.37,
          "min_balance": 155400.0
        },
        {
          "day": 30,
          "date": "2024-04-05",
          "balance": 88166.15,
          "min_balance": 155400.0
        },
        {
          "day": 35,
          "date": "2024-04-10",
          "balance": 35275.29,
          "min_balance": 155400.0
        },
        {
          "day": 40,
          "date": "2024-04-15",
          "balance": -42301.56,
          "min_balance": 155400.0
        },
        {
          "day": 45,
          "date": "2024-04-20",
          "balance": 42843.68,
          "min_balance": 155400.0
        },
        {
          "day": 50,
          "date": "2024-04-25",
          "balance": 33286.66,
          "min_balance": 155400.0
        },
        {
          "day": 55,
          "date": "2024-04-30",
          "balance": -3901.14,
          "min_balance": 155400.0
        },
        {
          "day": 60,
          "date": "2024-05-05",
          "balance": -84681.36,
          "min_balance": 155400.0
        },
        {
          "day": 65,
          "date": "2024-05-10",
          "balance": -137572.22,
          "min_balance": 155400.0
        },
        {
          "day": 70,
          "date": "2024-05-15",
          "balance": -215149.07,
          "min_balance": 155400.0
        },
        {
          "day": 75,
          "date": "2024-05-20",
          "balance": -130003.83,
          "min_balance": 155400.0
        },
        {
          "day": 80,
          "date": "2024-05-25",
          "balance": -139560.85,
          "min_balance": 155400.0
        },
        {
          "day": 85,
          "date": "2024-05-30",
          "balance": -162479.9,
          "min_balance": 155400.0
        },
        {
          "day": 90,
          "date": "2024-06-04",
          "balance": -252855.25,
          "min_balance": 155400.0
        }
      ]
    },
    {
      "request_id": "request_146",
      "user_id": "user_146",
      "requested_amount": 449400.0,
      "currency": "INR",
      "request_type": "housing",
      "request_text": "I've been asked to pay INR 449,400 as the rental deposit. I need to complete it by 17 October 2025. Can I pay the rental deposit by the requested date?",
      "allows_partial_payment": true,
      "request_date": "2025-08-03",
      "desired_completion_date": "2025-10-17",
      "home_currency": "INR",
      "current_balance": 190065.0,
      "minimum_balance_to_keep": 108600.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 17 October 2025. None of the available options keeps the INR 108,600 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2025-08-03",
          "balance": 183449.69,
          "min_balance": 108600.0
        },
        {
          "day": 5,
          "date": "2025-08-08",
          "balance": 129097.63,
          "min_balance": 108600.0
        },
        {
          "day": 10,
          "date": "2025-08-13",
          "balance": 93885.75,
          "min_balance": 108600.0
        },
        {
          "day": 15,
          "date": "2025-08-18",
          "balance": 402664.55,
          "min_balance": 108600.0
        },
        {
          "day": 20,
          "date": "2025-08-23",
          "balance": 391618.55,
          "min_balance": 108600.0
        },
        {
          "day": 25,
          "date": "2025-08-28",
          "balance": 354661.79,
          "min_balance": 108600.0
        },
        {
          "day": 30,
          "date": "2025-09-02",
          "balance": 319218.67,
          "min_balance": 108600.0
        },
        {
          "day": 35,
          "date": "2025-09-07",
          "balance": 277216.9,
          "min_balance": 108600.0
        },
        {
          "day": 40,
          "date": "2025-09-12",
          "balance": 227253.9,
          "min_balance": 108600.0
        },
        {
          "day": 45,
          "date": "2025-09-17",
          "balance": 369023.36,
          "min_balance": 108600.0
        },
        {
          "day": 50,
          "date": "2025-09-22",
          "balance": 358275.27,
          "min_balance": 108600.0
        },
        {
          "day": 55,
          "date": "2025-09-27",
          "balance": 339848.37,
          "min_balance": 108600.0
        },
        {
          "day": 60,
          "date": "2025-10-02",
          "balance": 280372.34,
          "min_balance": 108600.0
        },
        {
          "day": 65,
          "date": "2025-10-07",
          "balance": 238370.57,
          "min_balance": 108600.0
        },
        {
          "day": 70,
          "date": "2025-10-12",
          "balance": 188407.57,
          "min_balance": 108600.0
        },
        {
          "day": 75,
          "date": "2025-10-17",
          "balance": 330177.03,
          "min_balance": 108600.0
        },
        {
          "day": 80,
          "date": "2025-10-22",
          "balance": 319428.94,
          "min_balance": 108600.0
        },
        {
          "day": 85,
          "date": "2025-10-27",
          "balance": 301002.04,
          "min_balance": 108600.0
        },
        {
          "day": 90,
          "date": "2025-11-01",
          "balance": 241526.01,
          "min_balance": 108600.0
        }
      ]
    },
    {
      "request_id": "request_147",
      "user_id": "user_147",
      "requested_amount": 1129.7,
      "currency": "EUR",
      "request_type": "travel",
      "request_text": "Can I afford the full trip without putting upcoming bills at risk? I need to decide by 7 June 2026. I've found a travel option for EUR 1,129.70.",
      "allows_partial_payment": true,
      "request_date": "2026-04-05",
      "desired_completion_date": "2026-06-07",
      "home_currency": "EUR",
      "current_balance": 1641.53,
      "minimum_balance_to_keep": 900.0,
      "amount_safe_to_pay": 74.55,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 7 June 2026. None of the available options keeps the EUR 900 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2026-04-05",
          "balance": 1556.23,
          "min_balance": 900.0
        },
        {
          "day": 5,
          "date": "2026-04-10",
          "balance": 1438.61,
          "min_balance": 900.0
        },
        {
          "day": 10,
          "date": "2026-04-15",
          "balance": 2661.63,
          "min_balance": 900.0
        },
        {
          "day": 15,
          "date": "2026-04-20",
          "balance": 2583.03,
          "min_balance": 900.0
        },
        {
          "day": 20,
          "date": "2026-04-25",
          "balance": 2443.99,
          "min_balance": 900.0
        },
        {
          "day": 25,
          "date": "2026-04-30",
          "balance": 2113.36,
          "min_balance": 900.0
        },
        {
          "day": 30,
          "date": "2026-05-05",
          "balance": 1477.19,
          "min_balance": 900.0
        },
        {
          "day": 35,
          "date": "2026-05-10",
          "balance": 1359.57,
          "min_balance": 900.0
        },
        {
          "day": 40,
          "date": "2026-05-15",
          "balance": 2582.59,
          "min_balance": 900.0
        },
        {
          "day": 45,
          "date": "2026-05-20",
          "balance": 2503.99,
          "min_balance": 900.0
        },
        {
          "day": 50,
          "date": "2026-05-25",
          "balance": 2364.95,
          "min_balance": 900.0
        },
        {
          "day": 55,
          "date": "2026-05-30",
          "balance": 2171.62,
          "min_balance": 900.0
        },
        {
          "day": 60,
          "date": "2026-06-04",
          "balance": 1483.45,
          "min_balance": 900.0
        },
        {
          "day": 65,
          "date": "2026-06-09",
          "balance": 1280.53,
          "min_balance": 900.0
        },
        {
          "day": 70,
          "date": "2026-06-14",
          "balance": 974.55,
          "min_balance": 900.0
        },
        {
          "day": 75,
          "date": "2026-06-19",
          "balance": 2479.18,
          "min_balance": 900.0
        },
        {
          "day": 80,
          "date": "2026-06-24",
          "balance": 2285.91,
          "min_balance": 900.0
        },
        {
          "day": 85,
          "date": "2026-06-29",
          "balance": 2178.12,
          "min_balance": 900.0
        },
        {
          "day": 90,
          "date": "2026-07-04",
          "balance": 1404.41,
          "min_balance": 900.0
        }
      ]
    },
    {
      "request_id": "request_148",
      "user_id": "user_148",
      "requested_amount": 22242.0,
      "currency": "ZAR",
      "request_type": "purchase",
      "request_text": "The laptop I'm looking at is ZAR 22,242. Is the laptop affordable right now, or should I wait?",
      "allows_partial_payment": true,
      "request_date": "2024-06-07",
      "desired_completion_date": "2024-08-18",
      "home_currency": "ZAR",
      "current_balance": 33181.08,
      "minimum_balance_to_keep": 20000.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 18 August 2024. None of the available options keeps the ZAR 20,000 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2024-06-07",
          "balance": 31538.66,
          "min_balance": 20000.0
        },
        {
          "day": 5,
          "date": "2024-06-12",
          "balance": 29063.71,
          "min_balance": 20000.0
        },
        {
          "day": 10,
          "date": "2024-06-17",
          "balance": 58491.67,
          "min_balance": 20000.0
        },
        {
          "day": 15,
          "date": "2024-06-22",
          "balance": 55159.3,
          "min_balance": 20000.0
        },
        {
          "day": 20,
          "date": "2024-06-27",
          "balance": 53551.68,
          "min_balance": 20000.0
        },
        {
          "day": 25,
          "date": "2024-07-02",
          "balance": 33962.26,
          "min_balance": 20000.0
        },
        {
          "day": 30,
          "date": "2024-07-07",
          "balance": 16474.67,
          "min_balance": 20000.0
        },
        {
          "day": 35,
          "date": "2024-07-12",
          "balance": 13999.72,
          "min_balance": 20000.0
        },
        {
          "day": 40,
          "date": "2024-07-17",
          "balance": 43427.68,
          "min_balance": 20000.0
        },
        {
          "day": 45,
          "date": "2024-07-22",
          "balance": 40095.31,
          "min_balance": 20000.0
        },
        {
          "day": 50,
          "date": "2024-07-27",
          "balance": 38487.69,
          "min_balance": 20000.0
        },
        {
          "day": 55,
          "date": "2024-08-01",
          "balance": 21695.82,
          "min_balance": 20000.0
        },
        {
          "day": 60,
          "date": "2024-08-06",
          "balance": 3053.1,
          "min_balance": 20000.0
        },
        {
          "day": 65,
          "date": "2024-08-11",
          "balance": -488.97,
          "min_balance": 20000.0
        },
        {
          "day": 70,
          "date": "2024-08-16",
          "balance": 28363.69,
          "min_balance": 20000.0
        },
        {
          "day": 75,
          "date": "2024-08-21",
          "balance": 26624.53,
          "min_balance": 20000.0
        },
        {
          "day": 80,
          "date": "2024-08-26",
          "balance": 23423.7,
          "min_balance": 20000.0
        },
        {
          "day": 85,
          "date": "2024-08-31",
          "balance": 18846.81,
          "min_balance": 20000.0
        },
        {
          "day": 90,
          "date": "2024-09-05",
          "balance": -12010.89,
          "min_balance": 20000.0
        }
      ]
    },
    {
      "request_id": "request_149",
      "user_id": "user_149",
      "requested_amount": 36652.0,
      "currency": "ZAR",
      "request_type": "travel",
      "request_text": "How much can I safely put toward the booking today? The current quote for the trip is ZAR 36,652.",
      "allows_partial_payment": false,
      "request_date": "2025-11-04",
      "desired_completion_date": "2026-01-19",
      "home_currency": "ZAR",
      "current_balance": 84358.38,
      "minimum_balance_to_keep": 42100.0,
      "amount_safe_to_pay": 12064.07,
      "affordability_status": "affordable_with_plan",
      "recommended_payment_method": "installments",
      "payment_plan": "2025-11-18:12706.03|2025-12-16:12706.03|2026-01-13:12706.03",
      "earliest_date_for_full_payment": "2025-11-15",
      "spending_changes_needed": "none",
      "decision_explanation": "Use 3 installments of ZAR 12,706.03, starting 18 November 2025. This leaves at least ZAR 42,100 available.",
      "curve": [
        {
          "day": 0,
          "date": "2025-11-04",
          "balance": 83099.73,
          "min_balance": 42100.0
        },
        {
          "day": 5,
          "date": "2025-11-09",
          "balance": 77149.4,
          "min_balance": 42100.0
        },
        {
          "day": 10,
          "date": "2025-11-14",
          "balance": 54164.07,
          "min_balance": 42100.0
        },
        {
          "day": 15,
          "date": "2025-11-19",
          "balance": 157806.92,
          "min_balance": 42100.0
        },
        {
          "day": 20,
          "date": "2025-11-24",
          "balance": 152784.02,
          "min_balance": 42100.0
        },
        {
          "day": 25,
          "date": "2025-11-29",
          "balance": 146846.67,
          "min_balance": 42100.0
        },
        {
          "day": 30,
          "date": "2025-12-04",
          "balance": 124642.25,
          "min_balance": 42100.0
        },
        {
          "day": 35,
          "date": "2025-12-09",
          "balance": 118691.92,
          "min_balance": 42100.0
        },
        {
          "day": 40,
          "date": "2025-12-14",
          "balance": 95706.59,
          "min_balance": 42100.0
        },
        {
          "day": 45,
          "date": "2025-12-19",
          "balance": 146989.44,
          "min_balance": 42100.0
        },
        {
          "day": 50,
          "date": "2025-12-24",
          "balance": 141966.54,
          "min_balance": 42100.0
        },
        {
          "day": 55,
          "date": "2025-12-29",
          "balance": 136029.19,
          "min_balance": 42100.0
        },
        {
          "day": 60,
          "date": "2026-01-03",
          "balance": 115083.42,
          "min_balance": 42100.0
        },
        {
          "day": 65,
          "date": "2026-01-08",
          "balance": 109175.38,
          "min_balance": 42100.0
        },
        {
          "day": 70,
          "date": "2026-01-13",
          "balance": 84889.11,
          "min_balance": 42100.0
        },
        {
          "day": 75,
          "date": "2026-01-18",
          "balance": 136171.96,
          "min_balance": 42100.0
        },
        {
          "day": 80,
          "date": "2026-01-23",
          "balance": 131149.06,
          "min_balance": 42100.0
        },
        {
          "day": 85,
          "date": "2026-01-28",
          "balance": 128400.16,
          "min_balance": 42100.0
        },
        {
          "day": 90,
          "date": "2026-02-02",
          "balance": 104265.94,
          "min_balance": 42100.0
        }
      ]
    },
    {
      "request_id": "request_150",
      "user_id": "user_150",
      "requested_amount": 496.1,
      "currency": "EUR",
      "request_type": "education",
      "request_text": "The course I want to take is EUR 496.10. I need to complete it by 16 March 2026. How much of the course fee can I manage without cutting into essentials?",
      "allows_partial_payment": false,
      "request_date": "2026-01-06",
      "desired_completion_date": "2026-03-16",
      "home_currency": "EUR",
      "current_balance": 1257.44,
      "minimum_balance_to_keep": 700.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 16 March 2026. None of the available options keeps the EUR 700 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2026-01-06",
          "balance": 1257.44,
          "min_balance": 700.0
        },
        {
          "day": 5,
          "date": "2026-01-11",
          "balance": 1079.22,
          "min_balance": 700.0
        },
        {
          "day": 10,
          "date": "2026-01-16",
          "balance": 1839.45,
          "min_balance": 700.0
        },
        {
          "day": 15,
          "date": "2026-01-21",
          "balance": 1692.78,
          "min_balance": 700.0
        },
        {
          "day": 20,
          "date": "2026-01-26",
          "balance": 1564.37,
          "min_balance": 700.0
        },
        {
          "day": 25,
          "date": "2026-01-31",
          "balance": 1433.95,
          "min_balance": 700.0
        },
        {
          "day": 30,
          "date": "2026-02-05",
          "balance": 993.76,
          "min_balance": 700.0
        },
        {
          "day": 35,
          "date": "2026-02-10",
          "balance": 852.25,
          "min_balance": 700.0
        },
        {
          "day": 40,
          "date": "2026-02-15",
          "balance": 1575.77,
          "min_balance": 700.0
        },
        {
          "day": 45,
          "date": "2026-02-20",
          "balance": 1498.14,
          "min_balance": 700.0
        },
        {
          "day": 50,
          "date": "2026-02-25",
          "balance": 1328.97,
          "min_balance": 700.0
        },
        {
          "day": 55,
          "date": "2026-03-02",
          "balance": 1060.18,
          "min_balance": 700.0
        },
        {
          "day": 60,
          "date": "2026-03-07",
          "balance": 674.8,
          "min_balance": 700.0
        },
        {
          "day": 65,
          "date": "2026-03-12",
          "balance": 489.66,
          "min_balance": 700.0
        },
        {
          "day": 70,
          "date": "2026-03-17",
          "balance": 1234.46,
          "min_balance": 700.0
        },
        {
          "day": 75,
          "date": "2026-03-22",
          "balance": 1106.11,
          "min_balance": 700.0
        },
        {
          "day": 80,
          "date": "2026-03-27",
          "balance": 1022.18,
          "min_balance": 700.0
        },
        {
          "day": 85,
          "date": "2026-04-01",
          "balance": 796.5,
          "min_balance": 700.0
        },
        {
          "day": 90,
          "date": "2026-04-06",
          "balance": 466.4,
          "min_balance": 700.0
        }
      ]
    },
    {
      "request_id": "request_151",
      "user_id": "user_151",
      "requested_amount": 26999000.0,
      "currency": "IDR",
      "request_type": "housing",
      "request_text": "Can I pay the rental deposit by the requested date? I need to decide by 14 September 2024. I need IDR 26,999,000 for the rental deposit.",
      "allows_partial_payment": false,
      "request_date": "2024-09-03",
      "desired_completion_date": "2024-09-14",
      "home_currency": "IDR",
      "current_balance": 83998265.0,
      "minimum_balance_to_keep": 31633600.0,
      "amount_safe_to_pay": 10014381.13,
      "affordability_status": "affordable_later",
      "recommended_payment_method": "wait",
      "payment_plan": "2024-11-15:26999000",
      "earliest_date_for_full_payment": "2024-11-15",
      "spending_changes_needed": "none",
      "decision_explanation": "Pay IDR 26,999,000 in full on 15 November 2024. Paying earlier would take the balance below the IDR 31,633,600 minimum.",
      "curve": [
        {
          "day": 0,
          "date": "2024-09-03",
          "balance": 81665907.33,
          "min_balance": 31633600.0
        },
        {
          "day": 5,
          "date": "2024-09-08",
          "balance": 62282248.16,
          "min_balance": 31633600.0
        },
        {
          "day": 10,
          "date": "2024-09-13",
          "balance": 48919200.59,
          "min_balance": 31633600.0
        },
        {
          "day": 15,
          "date": "2024-09-18",
          "balance": 91986868.71,
          "min_balance": 31633600.0
        },
        {
          "day": 20,
          "date": "2024-09-23",
          "balance": 88485456.18,
          "min_balance": 31633600.0
        },
        {
          "day": 25,
          "date": "2024-09-28",
          "balance": 83186543.39,
          "min_balance": 31633600.0
        },
        {
          "day": 30,
          "date": "2024-10-03",
          "balance": 78030297.6,
          "min_balance": 31633600.0
        },
        {
          "day": 35,
          "date": "2024-10-08",
          "balance": 58646638.43,
          "min_balance": 31633600.0
        },
        {
          "day": 40,
          "date": "2024-10-13",
          "balance": 45283590.86,
          "min_balance": 31633600.0
        },
        {
          "day": 45,
          "date": "2024-10-18",
          "balance": 88351258.98,
          "min_balance": 31633600.0
        },
        {
          "day": 50,
          "date": "2024-10-23",
          "balance": 84849846.45,
          "min_balance": 31633600.0
        },
        {
          "day": 55,
          "date": "2024-10-28",
          "balance": 79550933.66,
          "min_balance": 31633600.0
        },
        {
          "day": 60,
          "date": "2024-11-02",
          "balance": 76727045.54,
          "min_balance": 31633600.0
        },
        {
          "day": 65,
          "date": "2024-11-07",
          "balance": 57724463.17,
          "min_balance": 31633600.0
        },
        {
          "day": 70,
          "date": "2024-11-12",
          "balance": 51719992.54,
          "min_balance": 31633600.0
        },
        {
          "day": 75,
          "date": "2024-11-17",
          "balance": 84715649.25,
          "min_balance": 31633600.0
        },
        {
          "day": 80,
          "date": "2024-11-22",
          "balance": 81214236.72,
          "min_balance": 31633600.0
        },
        {
          "day": 85,
          "date": "2024-11-27",
          "balance": 76618043.99,
          "min_balance": 31633600.0
        },
        {
          "day": 90,
          "date": "2024-12-02",
          "balance": 73091435.81,
          "min_balance": 31633600.0
        }
      ]
    },
    {
      "request_id": "request_152",
      "user_id": "user_152",
      "requested_amount": 13882.0,
      "currency": "ZAR",
      "request_type": "emergency_expense",
      "request_text": "I've received a repair quote for ZAR 13,882. What is the most I can put toward this repair right now?",
      "allows_partial_payment": false,
      "request_date": "2025-02-05",
      "desired_completion_date": "2025-04-13",
      "home_currency": "ZAR",
      "current_balance": 28368.77,
      "minimum_balance_to_keep": 11900.0,
      "amount_safe_to_pay": 802.25,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 13 April 2025. None of the available options keeps the ZAR 11,900 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2025-02-05",
          "balance": 26400.1,
          "min_balance": 11900.0
        },
        {
          "day": 5,
          "date": "2025-02-10",
          "balance": 22436.83,
          "min_balance": 11900.0
        },
        {
          "day": 10,
          "date": "2025-02-15",
          "balance": 34546.6,
          "min_balance": 11900.0
        },
        {
          "day": 15,
          "date": "2025-02-20",
          "balance": 32480.3,
          "min_balance": 11900.0
        },
        {
          "day": 20,
          "date": "2025-02-25",
          "balance": 31641.39,
          "min_balance": 11900.0
        },
        {
          "day": 25,
          "date": "2025-03-02",
          "balance": 24840.69,
          "min_balance": 11900.0
        },
        {
          "day": 30,
          "date": "2025-03-07",
          "balance": 20912.95,
          "min_balance": 11900.0
        },
        {
          "day": 35,
          "date": "2025-03-12",
          "balance": 17917.68,
          "min_balance": 11900.0
        },
        {
          "day": 40,
          "date": "2025-03-17",
          "balance": 29321.13,
          "min_balance": 11900.0
        },
        {
          "day": 45,
          "date": "2025-03-22",
          "balance": 27707.43,
          "min_balance": 11900.0
        },
        {
          "day": 50,
          "date": "2025-03-27",
          "balance": 26510.23,
          "min_balance": 11900.0
        },
        {
          "day": 55,
          "date": "2025-04-01",
          "balance": 21867.23,
          "min_balance": 11900.0
        },
        {
          "day": 60,
          "date": "2025-04-06",
          "balance": 17674.2,
          "min_balance": 11900.0
        },
        {
          "day": 65,
          "date": "2025-04-11",
          "balance": 13710.93,
          "min_balance": 11900.0
        },
        {
          "day": 70,
          "date": "2025-04-16",
          "balance": 25439.5,
          "min_balance": 11900.0
        },
        {
          "day": 75,
          "date": "2025-04-21",
          "balance": 23344.48,
          "min_balance": 11900.0
        },
        {
          "day": 80,
          "date": "2025-04-26",
          "balance": 22562.18,
          "min_balance": 11900.0
        },
        {
          "day": 85,
          "date": "2025-05-01",
          "balance": 17504.28,
          "min_balance": 11900.0
        },
        {
          "day": 90,
          "date": "2025-05-06",
          "balance": 13311.25,
          "min_balance": 11900.0
        }
      ]
    },
    {
      "request_id": "request_153",
      "user_id": "user_153",
      "requested_amount": 2830.8,
      "currency": "USD",
      "request_type": "purchase",
      "request_text": "Is the laptop affordable right now, or should I wait? The laptop costs USD 2,830.80.",
      "allows_partial_payment": false,
      "request_date": "2026-07-07",
      "desired_completion_date": "2026-09-24",
      "home_currency": "USD",
      "current_balance": 1903.6,
      "minimum_balance_to_keep": 1400.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 24 September 2026. None of the available options keeps the USD 1,400 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2026-07-07",
          "balance": 1854.6,
          "min_balance": 1400.0
        },
        {
          "day": 5,
          "date": "2026-07-12",
          "balance": 1512.8,
          "min_balance": 1400.0
        },
        {
          "day": 10,
          "date": "2026-07-17",
          "balance": 2948.63,
          "min_balance": 1400.0
        },
        {
          "day": 15,
          "date": "2026-07-22",
          "balance": 2720.5,
          "min_balance": 1400.0
        },
        {
          "day": 20,
          "date": "2026-07-27",
          "balance": 2493.46,
          "min_balance": 1400.0
        },
        {
          "day": 25,
          "date": "2026-08-01",
          "balance": 2125.04,
          "min_balance": 1400.0
        },
        {
          "day": 30,
          "date": "2026-08-06",
          "balance": 1362.36,
          "min_balance": 1400.0
        },
        {
          "day": 35,
          "date": "2026-08-11",
          "balance": 1113.11,
          "min_balance": 1400.0
        },
        {
          "day": 40,
          "date": "2026-08-16",
          "balance": 2495.73,
          "min_balance": 1400.0
        },
        {
          "day": 45,
          "date": "2026-08-21",
          "balance": 2179.26,
          "min_balance": 1400.0
        },
        {
          "day": 50,
          "date": "2026-08-26",
          "balance": 1996.35,
          "min_balance": 1400.0
        },
        {
          "day": 55,
          "date": "2026-08-31",
          "balance": 1621.32,
          "min_balance": 1400.0
        },
        {
          "day": 60,
          "date": "2026-09-05",
          "balance": 942.75,
          "min_balance": 1400.0
        },
        {
          "day": 65,
          "date": "2026-09-10",
          "balance": 571.87,
          "min_balance": 1400.0
        },
        {
          "day": 70,
          "date": "2026-09-15",
          "balance": 2004.26,
          "min_balance": 1400.0
        },
        {
          "day": 75,
          "date": "2026-09-20",
          "balance": 1691.83,
          "min_balance": 1400.0
        },
        {
          "day": 80,
          "date": "2026-09-25",
          "balance": 1497.35,
          "min_balance": 1400.0
        },
        {
          "day": 85,
          "date": "2026-09-30",
          "balance": 1080.08,
          "min_balance": 1400.0
        },
        {
          "day": 90,
          "date": "2026-10-05",
          "balance": 401.51,
          "min_balance": 1400.0
        }
      ]
    },
    {
      "request_id": "request_154",
      "user_id": "user_154",
      "requested_amount": 1625.8,
      "currency": "EUR",
      "request_type": "travel",
      "request_text": "I've found a travel option for EUR 1,625.80. I need to complete it by 14 February 2025. How much can I safely put toward the booking today?",
      "allows_partial_payment": false,
      "request_date": "2024-12-04",
      "desired_completion_date": "2025-02-14",
      "home_currency": "EUR",
      "current_balance": 4679.4,
      "minimum_balance_to_keep": 1300.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 14 February 2025. None of the available options keeps the EUR 1,300 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2024-12-04",
          "balance": 4679.4,
          "min_balance": 1300.0
        },
        {
          "day": 5,
          "date": "2024-12-09",
          "balance": 4331.56,
          "min_balance": 1300.0
        },
        {
          "day": 10,
          "date": "2024-12-14",
          "balance": 3809.37,
          "min_balance": 1300.0
        },
        {
          "day": 15,
          "date": "2024-12-19",
          "balance": 4696.16,
          "min_balance": 1300.0
        },
        {
          "day": 20,
          "date": "2024-12-24",
          "balance": 4548.85,
          "min_balance": 1300.0
        },
        {
          "day": 25,
          "date": "2024-12-29",
          "balance": 4377.25,
          "min_balance": 1300.0
        },
        {
          "day": 30,
          "date": "2025-01-03",
          "balance": 3527.05,
          "min_balance": 1300.0
        },
        {
          "day": 35,
          "date": "2025-01-08",
          "balance": 3179.21,
          "min_balance": 1300.0
        },
        {
          "day": 40,
          "date": "2025-01-13",
          "balance": 2741.25,
          "min_balance": 1300.0
        },
        {
          "day": 45,
          "date": "2025-01-18",
          "balance": 3616.4,
          "min_balance": 1300.0
        },
        {
          "day": 50,
          "date": "2025-01-23",
          "balance": 3460.22,
          "min_balance": 1300.0
        },
        {
          "day": 55,
          "date": "2025-01-28",
          "balance": 3224.9,
          "min_balance": 1300.0
        },
        {
          "day": 60,
          "date": "2025-02-02",
          "balance": 3107.79,
          "min_balance": 1300.0
        },
        {
          "day": 65,
          "date": "2025-02-07",
          "balance": 2026.86,
          "min_balance": 1300.0
        },
        {
          "day": 70,
          "date": "2025-02-12",
          "balance": 1691.46,
          "min_balance": 1300.0
        },
        {
          "day": 75,
          "date": "2025-02-17",
          "balance": 2464.05,
          "min_balance": 1300.0
        },
        {
          "day": 80,
          "date": "2025-02-22",
          "balance": 2352.38,
          "min_balance": 1300.0
        },
        {
          "day": 85,
          "date": "2025-02-27",
          "balance": 2119.06,
          "min_balance": 1300.0
        },
        {
          "day": 90,
          "date": "2025-03-04",
          "balance": 1222.35,
          "min_balance": 1300.0
        }
      ]
    },
    {
      "request_id": "request_155",
      "user_id": "user_155",
      "requested_amount": 112500.0,
      "currency": "INR",
      "request_type": "purchase",
      "request_text": "How much of the laptop price can I safely cover today? I need to decide by 20 May 2025. The laptop I'm looking at is INR 112,500.",
      "allows_partial_payment": false,
      "request_date": "2025-05-06",
      "desired_completion_date": "2025-05-20",
      "home_currency": "INR",
      "current_balance": 218050.0,
      "minimum_balance_to_keep": 56300.0,
      "amount_safe_to_pay": 112500.0,
      "affordability_status": "affordable_now",
      "recommended_payment_method": "full_payment",
      "payment_plan": "2025-05-06:112500",
      "earliest_date_for_full_payment": "2025-05-06",
      "spending_changes_needed": "none",
      "decision_explanation": "Pay INR 112,500 today. This leaves at least INR 56,300 available over the next 90 days.",
      "curve": [
        {
          "day": 0,
          "date": "2025-05-06",
          "balance": 218050.0,
          "min_balance": 56300.0
        },
        {
          "day": 5,
          "date": "2025-05-11",
          "balance": 193927.9,
          "min_balance": 56300.0
        },
        {
          "day": 10,
          "date": "2025-05-16",
          "balance": 266636.51,
          "min_balance": 56300.0
        },
        {
          "day": 15,
          "date": "2025-05-21",
          "balance": 262352.44,
          "min_balance": 56300.0
        },
        {
          "day": 20,
          "date": "2025-05-26",
          "balance": 247184.04,
          "min_balance": 56300.0
        },
        {
          "day": 25,
          "date": "2025-05-31",
          "balance": 237960.08,
          "min_balance": 56300.0
        },
        {
          "day": 30,
          "date": "2025-06-05",
          "balance": 214112.07,
          "min_balance": 56300.0
        },
        {
          "day": 35,
          "date": "2025-06-10",
          "balance": 194761.1,
          "min_balance": 56300.0
        },
        {
          "day": 40,
          "date": "2025-06-15",
          "balance": 266378.65,
          "min_balance": 56300.0
        },
        {
          "day": 45,
          "date": "2025-06-20",
          "balance": 261163.07,
          "min_balance": 56300.0
        },
        {
          "day": 50,
          "date": "2025-06-25",
          "balance": 247561.91,
          "min_balance": 56300.0
        },
        {
          "day": 55,
          "date": "2025-06-30",
          "balance": 234022.15,
          "min_balance": 56300.0
        },
        {
          "day": 60,
          "date": "2025-07-05",
          "balance": 210174.14,
          "min_balance": 56300.0
        },
        {
          "day": 65,
          "date": "2025-07-10",
          "balance": 190823.17,
          "min_balance": 56300.0
        },
        {
          "day": 70,
          "date": "2025-07-15",
          "balance": 262440.72,
          "min_balance": 56300.0
        },
        {
          "day": 75,
          "date": "2025-07-20",
          "balance": 257225.14,
          "min_balance": 56300.0
        },
        {
          "day": 80,
          "date": "2025-07-25",
          "balance": 243623.98,
          "min_balance": 56300.0
        },
        {
          "day": 85,
          "date": "2025-07-30",
          "balance": 232586.55,
          "min_balance": 56300.0
        },
        {
          "day": 90,
          "date": "2025-08-04",
          "balance": 219137.71,
          "min_balance": 56300.0
        }
      ]
    },
    {
      "request_id": "request_156",
      "user_id": "user_156",
      "requested_amount": 43076.0,
      "currency": "ZAR",
      "request_type": "education",
      "request_text": "I need ZAR 43,076 for the course fee. Is it safe to cover the full course fee by the deadline?",
      "allows_partial_payment": false,
      "request_date": "2026-04-03",
      "desired_completion_date": "2026-06-15",
      "home_currency": "ZAR",
      "current_balance": 42105.3,
      "minimum_balance_to_keep": 26900.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 15 June 2026. None of the available options keeps the ZAR 26,900 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2026-04-03",
          "balance": 40488.3,
          "min_balance": 26900.0
        },
        {
          "day": 5,
          "date": "2026-04-08",
          "balance": 31679.8,
          "min_balance": 26900.0
        },
        {
          "day": 10,
          "date": "2026-04-13",
          "balance": 28338.55,
          "min_balance": 26900.0
        },
        {
          "day": 15,
          "date": "2026-04-18",
          "balance": 55780.67,
          "min_balance": 26900.0
        },
        {
          "day": 20,
          "date": "2026-04-23",
          "balance": 51387.54,
          "min_balance": 26900.0
        },
        {
          "day": 25,
          "date": "2026-04-28",
          "balance": 46346.73,
          "min_balance": 26900.0
        },
        {
          "day": 30,
          "date": "2026-05-03",
          "balance": 36681.45,
          "min_balance": 26900.0
        },
        {
          "day": 35,
          "date": "2026-05-08",
          "balance": 29489.95,
          "min_balance": 26900.0
        },
        {
          "day": 40,
          "date": "2026-05-13",
          "balance": 26148.7,
          "min_balance": 26900.0
        },
        {
          "day": 45,
          "date": "2026-05-18",
          "balance": 53590.82,
          "min_balance": 26900.0
        },
        {
          "day": 50,
          "date": "2026-05-23",
          "balance": 49197.69,
          "min_balance": 26900.0
        },
        {
          "day": 55,
          "date": "2026-05-28",
          "balance": 44156.88,
          "min_balance": 26900.0
        },
        {
          "day": 60,
          "date": "2026-06-02",
          "balance": 34491.6,
          "min_balance": 26900.0
        },
        {
          "day": 65,
          "date": "2026-06-07",
          "balance": 28105.3,
          "min_balance": 26900.0
        },
        {
          "day": 70,
          "date": "2026-06-12",
          "balance": 23958.85,
          "min_balance": 26900.0
        },
        {
          "day": 75,
          "date": "2026-06-17",
          "balance": 51400.97,
          "min_balance": 26900.0
        },
        {
          "day": 80,
          "date": "2026-06-22",
          "balance": 48624.84,
          "min_balance": 26900.0
        },
        {
          "day": 85,
          "date": "2026-06-27",
          "balance": 41967.03,
          "min_balance": 26900.0
        },
        {
          "day": 90,
          "date": "2026-07-02",
          "balance": 32301.75,
          "min_balance": 26900.0
        }
      ]
    },
    {
      "request_id": "request_157",
      "user_id": "user_157",
      "requested_amount": 23503000.0,
      "currency": "IDR",
      "request_type": "investment",
      "request_text": "Can I make the full investment and still keep enough cash available? I'm considering setting aside IDR 23,503,000 for an investment.",
      "allows_partial_payment": true,
      "request_date": "2024-03-05",
      "desired_completion_date": "2024-05-15",
      "home_currency": "IDR",
      "current_balance": 25805950.0,
      "minimum_balance_to_keep": 15714100.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 15 May 2024. None of the available options keeps the IDR 15,714,100 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2024-03-05",
          "balance": 24363698.53,
          "min_balance": 15714100.0
        },
        {
          "day": 5,
          "date": "2024-03-10",
          "balance": 22149325.7,
          "min_balance": 15714100.0
        },
        {
          "day": 10,
          "date": "2024-03-15",
          "balance": 42733711.44,
          "min_balance": 15714100.0
        },
        {
          "day": 15,
          "date": "2024-03-20",
          "balance": 39942843.41,
          "min_balance": 15714100.0
        },
        {
          "day": 20,
          "date": "2024-03-25",
          "balance": 36898913.51,
          "min_balance": 15714100.0
        },
        {
          "day": 25,
          "date": "2024-03-30",
          "balance": 33701472.75,
          "min_balance": 15714100.0
        },
        {
          "day": 30,
          "date": "2024-04-04",
          "balance": 24048063.79,
          "min_balance": 15714100.0
        },
        {
          "day": 35,
          "date": "2024-04-09",
          "balance": 21128639.49,
          "min_balance": 15714100.0
        },
        {
          "day": 40,
          "date": "2024-04-14",
          "balance": 17035825.23,
          "min_balance": 15714100.0
        },
        {
          "day": 45,
          "date": "2024-04-19",
          "balance": 38184957.2,
          "min_balance": 15714100.0
        },
        {
          "day": 50,
          "date": "2024-04-24",
          "balance": 36013065.39,
          "min_balance": 15714100.0
        },
        {
          "day": 55,
          "date": "2024-04-29",
          "balance": 32961395.55,
          "min_balance": 15714100.0
        },
        {
          "day": 60,
          "date": "2024-05-04",
          "balance": 22290177.58,
          "min_balance": 15714100.0
        },
        {
          "day": 65,
          "date": "2024-05-09",
          "balance": 19370753.28,
          "min_balance": 15714100.0
        },
        {
          "day": 70,
          "date": "2024-05-14",
          "balance": 15277939.02,
          "min_balance": 15714100.0
        },
        {
          "day": 75,
          "date": "2024-05-19",
          "balance": 36427070.99,
          "min_balance": 15714100.0
        },
        {
          "day": 80,
          "date": "2024-05-24",
          "balance": 34255179.18,
          "min_balance": 15714100.0
        },
        {
          "day": 85,
          "date": "2024-05-29",
          "balance": 31203509.34,
          "min_balance": 15714100.0
        },
        {
          "day": 90,
          "date": "2024-06-03",
          "balance": 21073015.16,
          "min_balance": 15714100.0
        }
      ]
    },
    {
      "request_id": "request_158",
      "user_id": "user_158",
      "requested_amount": 242600.0,
      "currency": "INR",
      "request_type": "emergency_expense",
      "request_text": "The urgent repair will cost INR 242,600. I need to complete it by 2 October 2025. Can I cover the full repair now and still manage my essential expenses?",
      "allows_partial_payment": false,
      "request_date": "2025-08-07",
      "desired_completion_date": "2025-10-02",
      "home_currency": "INR",
      "current_balance": 745417.1,
      "minimum_balance_to_keep": 131400.0,
      "amount_safe_to_pay": 100386.12,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 2 October 2025. None of the available options keeps the INR 131,400 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2025-08-07",
          "balance": 731543.22,
          "min_balance": 131400.0
        },
        {
          "day": 5,
          "date": "2025-08-12",
          "balance": 699856.71,
          "min_balance": 131400.0
        },
        {
          "day": 10,
          "date": "2025-08-17",
          "balance": 669875.24,
          "min_balance": 131400.0
        },
        {
          "day": 15,
          "date": "2025-08-22",
          "balance": 703817.46,
          "min_balance": 131400.0
        },
        {
          "day": 20,
          "date": "2025-08-27",
          "balance": 687944.73,
          "min_balance": 131400.0
        },
        {
          "day": 25,
          "date": "2025-09-01",
          "balance": 654206.91,
          "min_balance": 131400.0
        },
        {
          "day": 30,
          "date": "2025-09-06",
          "balance": 572474.99,
          "min_balance": 131400.0
        },
        {
          "day": 35,
          "date": "2025-09-11",
          "balance": 532863.27,
          "min_balance": 131400.0
        },
        {
          "day": 40,
          "date": "2025-09-16",
          "balance": 501481.24,
          "min_balance": 131400.0
        },
        {
          "day": 45,
          "date": "2025-09-21",
          "balance": 485781.74,
          "min_balance": 131400.0
        },
        {
          "day": 50,
          "date": "2025-09-26",
          "balance": 515002.62,
          "min_balance": 131400.0
        },
        {
          "day": 55,
          "date": "2025-10-01",
          "balance": 481264.8,
          "min_balance": 131400.0
        },
        {
          "day": 60,
          "date": "2025-10-06",
          "balance": 399532.88,
          "min_balance": 131400.0
        },
        {
          "day": 65,
          "date": "2025-10-11",
          "balance": 359921.16,
          "min_balance": 131400.0
        },
        {
          "day": 70,
          "date": "2025-10-16",
          "balance": 328539.13,
          "min_balance": 131400.0
        },
        {
          "day": 75,
          "date": "2025-10-21",
          "balance": 312839.63,
          "min_balance": 131400.0
        },
        {
          "day": 80,
          "date": "2025-10-26",
          "balance": 342060.51,
          "min_balance": 131400.0
        },
        {
          "day": 85,
          "date": "2025-10-31",
          "balance": 321935.03,
          "min_balance": 131400.0
        },
        {
          "day": 90,
          "date": "2025-11-05",
          "balance": 231786.12,
          "min_balance": 131400.0
        }
      ]
    },
    {
      "request_id": "request_159",
      "user_id": "user_159",
      "requested_amount": 13398.0,
      "currency": "ZAR",
      "request_type": "investment",
      "request_text": "Would investing this amount leave my upcoming bills covered? I need to decide by 20 March 2026. The investment I'm considering is ZAR 13,398.",
      "allows_partial_payment": true,
      "request_date": "2026-01-04",
      "desired_completion_date": "2026-03-20",
      "home_currency": "ZAR",
      "current_balance": 40283.2,
      "minimum_balance_to_keep": 8700.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 20 March 2026. None of the available options keeps the ZAR 8,700 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2026-01-04",
          "balance": 35829.9,
          "min_balance": 8700.0
        },
        {
          "day": 5,
          "date": "2026-01-09",
          "balance": 34471.29,
          "min_balance": 8700.0
        },
        {
          "day": 10,
          "date": "2026-01-14",
          "balance": 31515.39,
          "min_balance": 8700.0
        },
        {
          "day": 15,
          "date": "2026-01-19",
          "balance": 30342.76,
          "min_balance": 8700.0
        },
        {
          "day": 20,
          "date": "2026-01-24",
          "balance": 28324.53,
          "min_balance": 8700.0
        },
        {
          "day": 25,
          "date": "2026-01-29",
          "balance": 28613.86,
          "min_balance": 8700.0
        },
        {
          "day": 30,
          "date": "2026-02-03",
          "balance": 26924.59,
          "min_balance": 8700.0
        },
        {
          "day": 35,
          "date": "2026-02-08",
          "balance": 21112.68,
          "min_balance": 8700.0
        },
        {
          "day": 40,
          "date": "2026-02-13",
          "balance": 19178.21,
          "min_balance": 8700.0
        },
        {
          "day": 45,
          "date": "2026-02-18",
          "balance": 16984.15,
          "min_balance": 8700.0
        },
        {
          "day": 50,
          "date": "2026-02-23",
          "balance": 14965.92,
          "min_balance": 8700.0
        },
        {
          "day": 55,
          "date": "2026-02-28",
          "balance": 14183.04,
          "min_balance": 8700.0
        },
        {
          "day": 60,
          "date": "2026-03-05",
          "balance": 9112.68,
          "min_balance": 8700.0
        },
        {
          "day": 65,
          "date": "2026-03-10",
          "balance": 7381.52,
          "min_balance": 8700.0
        },
        {
          "day": 70,
          "date": "2026-03-15",
          "balance": 4641.97,
          "min_balance": 8700.0
        },
        {
          "day": 75,
          "date": "2026-03-20",
          "balance": 3625.54,
          "min_balance": 8700.0
        },
        {
          "day": 80,
          "date": "2026-03-25",
          "balance": 1203.21,
          "min_balance": 8700.0
        },
        {
          "day": 85,
          "date": "2026-03-30",
          "balance": 824.43,
          "min_balance": 8700.0
        },
        {
          "day": 90,
          "date": "2026-04-04",
          "balance": -4245.93,
          "min_balance": 8700.0
        }
      ]
    },
    {
      "request_id": "request_160",
      "user_id": "user_160",
      "requested_amount": 1246.3,
      "currency": "EUR",
      "request_type": "travel",
      "request_text": "I can book the family trip for EUR 1,246.30. Would it be safer to book the trip now or wait until more money comes in?",
      "allows_partial_payment": true,
      "request_date": "2024-06-06",
      "desired_completion_date": "2024-08-20",
      "home_currency": "EUR",
      "current_balance": 2144.61,
      "minimum_balance_to_keep": 1200.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 20 August 2024. None of the available options keeps the EUR 1,200 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2024-06-06",
          "balance": 2057.61,
          "min_balance": 1200.0
        },
        {
          "day": 5,
          "date": "2024-06-11",
          "balance": 1663.76,
          "min_balance": 1200.0
        },
        {
          "day": 10,
          "date": "2024-06-16",
          "balance": 3126.01,
          "min_balance": 1200.0
        },
        {
          "day": 15,
          "date": "2024-06-21",
          "balance": 3126.01,
          "min_balance": 1200.0
        },
        {
          "day": 20,
          "date": "2024-06-26",
          "balance": 2953.53,
          "min_balance": 1200.0
        },
        {
          "day": 25,
          "date": "2024-07-01",
          "balance": 2083.93,
          "min_balance": 1200.0
        },
        {
          "day": 30,
          "date": "2024-07-06",
          "balance": 1752.35,
          "min_balance": 1200.0
        },
        {
          "day": 35,
          "date": "2024-07-11",
          "balance": 1445.5,
          "min_balance": 1200.0
        },
        {
          "day": 40,
          "date": "2024-07-16",
          "balance": 2907.75,
          "min_balance": 1200.0
        },
        {
          "day": 45,
          "date": "2024-07-21",
          "balance": 2907.75,
          "min_balance": 1200.0
        },
        {
          "day": 50,
          "date": "2024-07-26",
          "balance": 2735.27,
          "min_balance": 1200.0
        },
        {
          "day": 55,
          "date": "2024-07-31",
          "balance": 2459.58,
          "min_balance": 1200.0
        },
        {
          "day": 60,
          "date": "2024-08-05",
          "balance": 1534.09,
          "min_balance": 1200.0
        },
        {
          "day": 65,
          "date": "2024-08-10",
          "balance": 1227.24,
          "min_balance": 1200.0
        },
        {
          "day": 70,
          "date": "2024-08-15",
          "balance": 2730.23,
          "min_balance": 1200.0
        },
        {
          "day": 75,
          "date": "2024-08-20",
          "balance": 2689.49,
          "min_balance": 1200.0
        },
        {
          "day": 80,
          "date": "2024-08-25",
          "balance": 2572.28,
          "min_balance": 1200.0
        },
        {
          "day": 85,
          "date": "2024-08-30",
          "balance": 2241.32,
          "min_balance": 1200.0
        },
        {
          "day": 90,
          "date": "2024-09-04",
          "balance": 1459.13,
          "min_balance": 1200.0
        }
      ]
    },
    {
      "request_id": "request_161",
      "user_id": "user_161",
      "requested_amount": 21204000.0,
      "currency": "IDR",
      "request_type": "debt_repayment",
      "request_text": "Is the full extra repayment safe, or should I pay a smaller amount? I'm planning an extra loan payment of IDR 21,204,000.",
      "allows_partial_payment": false,
      "request_date": "2025-11-03",
      "desired_completion_date": "2026-01-15",
      "home_currency": "IDR",
      "current_balance": 41308350.0,
      "minimum_balance_to_keep": 23010400.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 15 January 2026. None of the available options keeps the IDR 23,010,400 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2025-11-03",
          "balance": 40251950.0,
          "min_balance": 23010400.0
        },
        {
          "day": 5,
          "date": "2025-11-08",
          "balance": 31336706.41,
          "min_balance": 23010400.0
        },
        {
          "day": 10,
          "date": "2025-11-13",
          "balance": 23001020.26,
          "min_balance": 23010400.0
        },
        {
          "day": 15,
          "date": "2025-11-18",
          "balance": 35173617.62,
          "min_balance": 23010400.0
        },
        {
          "day": 20,
          "date": "2025-11-23",
          "balance": 32792866.89,
          "min_balance": 23010400.0
        },
        {
          "day": 25,
          "date": "2025-11-28",
          "balance": 29666344.98,
          "min_balance": 23010400.0
        },
        {
          "day": 30,
          "date": "2025-12-03",
          "balance": 16451072.47,
          "min_balance": 23010400.0
        },
        {
          "day": 35,
          "date": "2025-12-08",
          "balance": 8592228.88,
          "min_balance": 23010400.0
        },
        {
          "day": 40,
          "date": "2025-12-13",
          "balance": 256542.73,
          "min_balance": 23010400.0
        },
        {
          "day": 45,
          "date": "2025-12-18",
          "balance": 12429140.09,
          "min_balance": 23010400.0
        },
        {
          "day": 50,
          "date": "2025-12-23",
          "balance": 10048389.36,
          "min_balance": 23010400.0
        },
        {
          "day": 55,
          "date": "2025-12-28",
          "balance": 6921867.45,
          "min_balance": 23010400.0
        },
        {
          "day": 60,
          "date": "2026-01-02",
          "balance": -6293405.06,
          "min_balance": 23010400.0
        },
        {
          "day": 65,
          "date": "2026-01-07",
          "balance": -11822848.65,
          "min_balance": 23010400.0
        },
        {
          "day": 70,
          "date": "2026-01-12",
          "balance": -20669772.65,
          "min_balance": 23010400.0
        },
        {
          "day": 75,
          "date": "2026-01-17",
          "balance": -9018552.51,
          "min_balance": 23010400.0
        },
        {
          "day": 80,
          "date": "2026-01-22",
          "balance": -11357279.42,
          "min_balance": 23010400.0
        },
        {
          "day": 85,
          "date": "2026-01-27",
          "balance": -15207429.78,
          "min_balance": 23010400.0
        },
        {
          "day": 90,
          "date": "2026-02-01",
          "balance": -18964513.57,
          "min_balance": 23010400.0
        }
      ]
    },
    {
      "request_id": "request_162",
      "user_id": "user_162",
      "requested_amount": 83923000.0,
      "currency": "IDR",
      "request_type": "other",
      "request_text": "I've been offered the annual membership for IDR 83,923,000. I need to complete it by 26 August 2026. Would committing to the membership leave enough for my upcoming bills?",
      "allows_partial_payment": false,
      "request_date": "2026-07-05",
      "desired_completion_date": "2026-08-26",
      "home_currency": "IDR",
      "current_balance": 34607300.0,
      "minimum_balance_to_keep": 24161100.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 26 August 2026. None of the available options keeps the IDR 24,161,100 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2026-07-05",
          "balance": 32762400.0,
          "min_balance": 24161100.0
        },
        {
          "day": 5,
          "date": "2026-07-10",
          "balance": 24203191.79,
          "min_balance": 24161100.0
        },
        {
          "day": 10,
          "date": "2026-07-15",
          "balance": 50158179.26,
          "min_balance": 24161100.0
        },
        {
          "day": 15,
          "date": "2026-07-20",
          "balance": 44886042.41,
          "min_balance": 24161100.0
        },
        {
          "day": 20,
          "date": "2026-07-25",
          "balance": 42218647.08,
          "min_balance": 24161100.0
        },
        {
          "day": 25,
          "date": "2026-07-30",
          "balance": 36618640.26,
          "min_balance": 24161100.0
        },
        {
          "day": 30,
          "date": "2026-08-04",
          "balance": 31492670.65,
          "min_balance": 24161100.0
        },
        {
          "day": 35,
          "date": "2026-08-09",
          "balance": 26692559.5,
          "min_balance": 24161100.0
        },
        {
          "day": 40,
          "date": "2026-08-14",
          "balance": 22570467.92,
          "min_balance": 24161100.0
        },
        {
          "day": 45,
          "date": "2026-08-19",
          "balance": 48308969.91,
          "min_balance": 24161100.0
        },
        {
          "day": 50,
          "date": "2026-08-24",
          "balance": 43661150.13,
          "min_balance": 24161100.0
        },
        {
          "day": 55,
          "date": "2026-08-29",
          "balance": 38388809.12,
          "min_balance": 24161100.0
        },
        {
          "day": 60,
          "date": "2026-09-03",
          "balance": 34309841.3,
          "min_balance": 24161100.0
        },
        {
          "day": 65,
          "date": "2026-09-08",
          "balance": 28339934.08,
          "min_balance": 24161100.0
        },
        {
          "day": 70,
          "date": "2026-09-13",
          "balance": 23750713.0,
          "min_balance": 24161100.0
        },
        {
          "day": 75,
          "date": "2026-09-18",
          "balance": 49794090.27,
          "min_balance": 24161100.0
        },
        {
          "day": 80,
          "date": "2026-09-23",
          "balance": 44236320.78,
          "min_balance": 24161100.0
        },
        {
          "day": 85,
          "date": "2026-09-28",
          "balance": 41455429.69,
          "min_balance": 24161100.0
        },
        {
          "day": 90,
          "date": "2026-10-03",
          "balance": 34885011.95,
          "min_balance": 24161100.0
        }
      ]
    },
    {
      "request_id": "request_163",
      "user_id": "user_163",
      "requested_amount": 19304000.0,
      "currency": "IDR",
      "request_type": "other",
      "request_text": "Can I take the membership and still keep my minimum balance intact? I need to decide by 15 November 2024. The annual membership costs IDR 19,304,000.",
      "allows_partial_payment": false,
      "request_date": "2024-09-07",
      "desired_completion_date": "2024-11-15",
      "home_currency": "IDR",
      "current_balance": 49519524.26,
      "minimum_balance_to_keep": 26728700.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 15 November 2024. None of the available options keeps the IDR 26,728,700 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2024-09-07",
          "balance": 47807624.26,
          "min_balance": 26728700.0
        },
        {
          "day": 5,
          "date": "2024-09-12",
          "balance": 40324229.82,
          "min_balance": 26728700.0
        },
        {
          "day": 10,
          "date": "2024-09-17",
          "balance": 29661009.6,
          "min_balance": 26728700.0
        },
        {
          "day": 15,
          "date": "2024-09-22",
          "balance": 40031538.88,
          "min_balance": 26728700.0
        },
        {
          "day": 20,
          "date": "2024-09-27",
          "balance": 35630190.39,
          "min_balance": 26728700.0
        },
        {
          "day": 25,
          "date": "2024-10-02",
          "balance": 28732377.0,
          "min_balance": 26728700.0
        },
        {
          "day": 30,
          "date": "2024-10-07",
          "balance": 18271962.49,
          "min_balance": 26728700.0
        },
        {
          "day": 35,
          "date": "2024-10-12",
          "balance": 12500468.05,
          "min_balance": 26728700.0
        },
        {
          "day": 40,
          "date": "2024-10-17",
          "balance": 1837247.83,
          "min_balance": 26728700.0
        },
        {
          "day": 45,
          "date": "2024-10-22",
          "balance": 12207777.11,
          "min_balance": 26728700.0
        },
        {
          "day": 50,
          "date": "2024-10-27",
          "balance": 7806428.62,
          "min_balance": 26728700.0
        },
        {
          "day": 55,
          "date": "2024-11-01",
          "balance": 1461582.5,
          "min_balance": 26728700.0
        },
        {
          "day": 60,
          "date": "2024-11-06",
          "balance": -9551799.28,
          "min_balance": 26728700.0
        },
        {
          "day": 65,
          "date": "2024-11-11",
          "balance": -15323293.72,
          "min_balance": 26728700.0
        },
        {
          "day": 70,
          "date": "2024-11-16",
          "balance": -24855840.41,
          "min_balance": 26728700.0
        },
        {
          "day": 75,
          "date": "2024-11-21",
          "balance": -14124558.98,
          "min_balance": 26728700.0
        },
        {
          "day": 80,
          "date": "2024-11-26",
          "balance": -18813306.4,
          "min_balance": 26728700.0
        },
        {
          "day": 85,
          "date": "2024-12-01",
          "balance": -26362179.27,
          "min_balance": 26728700.0
        },
        {
          "day": 90,
          "date": "2024-12-06",
          "balance": -37375561.05,
          "min_balance": 26728700.0
        }
      ]
    },
    {
      "request_id": "request_164",
      "user_id": "user_164",
      "requested_amount": 27018000.0,
      "currency": "IDR",
      "request_type": "other",
      "request_text": "The membership fee is IDR 27,018,000 for the year. Is the full membership fee affordable today, or should I wait?",
      "allows_partial_payment": false,
      "request_date": "2025-02-04",
      "desired_completion_date": "2025-04-15",
      "home_currency": "IDR",
      "current_balance": 75429169.2,
      "minimum_balance_to_keep": 29550500.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 15 April 2025. None of the available options keeps the IDR 29,550,500 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2025-02-04",
          "balance": 73933133.4,
          "min_balance": 29550500.0
        },
        {
          "day": 5,
          "date": "2025-02-09",
          "balance": 56180126.5,
          "min_balance": 29550500.0
        },
        {
          "day": 10,
          "date": "2025-02-14",
          "balance": 51365318.98,
          "min_balance": 29550500.0
        },
        {
          "day": 15,
          "date": "2025-02-19",
          "balance": 44604794.82,
          "min_balance": 29550500.0
        },
        {
          "day": 20,
          "date": "2025-02-24",
          "balance": 67329915.34,
          "min_balance": 29550500.0
        },
        {
          "day": 25,
          "date": "2025-03-01",
          "balance": 58725067.99,
          "min_balance": 29550500.0
        },
        {
          "day": 30,
          "date": "2025-03-06",
          "balance": 46276819.31,
          "min_balance": 29550500.0
        },
        {
          "day": 35,
          "date": "2025-03-11",
          "balance": 34690875.29,
          "min_balance": 29550500.0
        },
        {
          "day": 40,
          "date": "2025-03-16",
          "balance": 30121140.98,
          "min_balance": 29550500.0
        },
        {
          "day": 45,
          "date": "2025-03-21",
          "balance": 23320265.16,
          "min_balance": 29550500.0
        },
        {
          "day": 50,
          "date": "2025-03-26",
          "balance": 44803797.92,
          "min_balance": 29550500.0
        },
        {
          "day": 55,
          "date": "2025-03-31",
          "balance": 38882166.78,
          "min_balance": 29550500.0
        },
        {
          "day": 60,
          "date": "2025-04-05",
          "balance": 29994118.79,
          "min_balance": 29550500.0
        },
        {
          "day": 65,
          "date": "2025-04-10",
          "balance": 15158624.08,
          "min_balance": 29550500.0
        },
        {
          "day": 70,
          "date": "2025-04-15",
          "balance": 11679516.56,
          "min_balance": 29550500.0
        },
        {
          "day": 75,
          "date": "2025-04-20",
          "balance": 3477363.95,
          "min_balance": 29550500.0
        },
        {
          "day": 80,
          "date": "2025-04-25",
          "balance": 26334954.42,
          "min_balance": 29550500.0
        },
        {
          "day": 85,
          "date": "2025-04-30",
          "balance": 19039265.57,
          "min_balance": 29550500.0
        },
        {
          "day": 90,
          "date": "2025-05-05",
          "balance": 10151217.58,
          "min_balance": 29550500.0
        }
      ]
    },
    {
      "request_id": "request_165",
      "user_id": "user_165",
      "requested_amount": 80600.0,
      "currency": "INR",
      "request_type": "travel",
      "request_text": "Would it be safer to book the trip now or wait until more money comes in? I'm planning a family trip that costs INR 80,600.",
      "allows_partial_payment": true,
      "request_date": "2026-04-06",
      "desired_completion_date": "2026-04-21",
      "home_currency": "INR",
      "current_balance": 366705.0,
      "minimum_balance_to_keep": 95000.0,
      "amount_safe_to_pay": 80600.0,
      "affordability_status": "affordable_now",
      "recommended_payment_method": "full_payment",
      "payment_plan": "2026-04-06:80600",
      "earliest_date_for_full_payment": "2026-04-06",
      "spending_changes_needed": "none",
      "decision_explanation": "Pay INR 80,600 today. This leaves at least INR 95,000 available over the next 90 days.",
      "curve": [
        {
          "day": 0,
          "date": "2026-04-06",
          "balance": 359115.96,
          "min_balance": 95000.0
        },
        {
          "day": 5,
          "date": "2026-04-11",
          "balance": 347148.81,
          "min_balance": 95000.0
        },
        {
          "day": 10,
          "date": "2026-04-16",
          "balance": 452686.98,
          "min_balance": 95000.0
        },
        {
          "day": 15,
          "date": "2026-04-21",
          "balance": 438082.64,
          "min_balance": 95000.0
        },
        {
          "day": 20,
          "date": "2026-04-26",
          "balance": 429235.76,
          "min_balance": 95000.0
        },
        {
          "day": 25,
          "date": "2026-05-01",
          "balance": 404973.92,
          "min_balance": 95000.0
        },
        {
          "day": 30,
          "date": "2026-05-06",
          "balance": 357781.9,
          "min_balance": 95000.0
        },
        {
          "day": 35,
          "date": "2026-05-11",
          "balance": 345814.75,
          "min_balance": 95000.0
        },
        {
          "day": 40,
          "date": "2026-05-16",
          "balance": 451352.92,
          "min_balance": 95000.0
        },
        {
          "day": 45,
          "date": "2026-05-21",
          "balance": 436748.58,
          "min_balance": 95000.0
        },
        {
          "day": 50,
          "date": "2026-05-26",
          "balance": 427901.7,
          "min_balance": 95000.0
        },
        {
          "day": 55,
          "date": "2026-05-31",
          "balance": 403639.86,
          "min_balance": 95000.0
        },
        {
          "day": 60,
          "date": "2026-06-05",
          "balance": 364036.88,
          "min_balance": 95000.0
        },
        {
          "day": 65,
          "date": "2026-06-10",
          "balance": 344480.69,
          "min_balance": 95000.0
        },
        {
          "day": 70,
          "date": "2026-06-15",
          "balance": 452935.54,
          "min_balance": 95000.0
        },
        {
          "day": 75,
          "date": "2026-06-20",
          "balance": 435414.52,
          "min_balance": 95000.0
        },
        {
          "day": 80,
          "date": "2026-06-25",
          "balance": 429983.19,
          "min_balance": 95000.0
        },
        {
          "day": 85,
          "date": "2026-06-30",
          "balance": 402305.8,
          "min_balance": 95000.0
        },
        {
          "day": 90,
          "date": "2026-07-05",
          "balance": 362702.82,
          "min_balance": 95000.0
        }
      ]
    },
    {
      "request_id": "request_166",
      "user_id": "user_166",
      "requested_amount": 2907.6,
      "currency": "USD",
      "request_type": "other",
      "request_text": "I'm considering a yearly membership for USD 2,907.60. I need to complete it by 5 February 2025. How much can I safely pay toward the membership now?",
      "allows_partial_payment": false,
      "request_date": "2024-12-03",
      "desired_completion_date": "2025-02-05",
      "home_currency": "USD",
      "current_balance": 9001.95,
      "minimum_balance_to_keep": 1700.0,
      "amount_safe_to_pay": 2907.6,
      "affordability_status": "affordable_with_plan",
      "recommended_payment_method": "installments",
      "payment_plan": "2024-12-03:1007.97|2025-01-03:1007.97|2025-02-03:1007.97",
      "earliest_date_for_full_payment": "2024-12-03",
      "spending_changes_needed": "none",
      "decision_explanation": "Use 3 installments of USD 1,007.97, starting 3 December 2024. This leaves at least USD 1,700 available.",
      "curve": [
        {
          "day": 0,
          "date": "2024-12-03",
          "balance": 8352.8,
          "min_balance": 1700.0
        },
        {
          "day": 5,
          "date": "2024-12-08",
          "balance": 8058.4,
          "min_balance": 1700.0
        },
        {
          "day": 10,
          "date": "2024-12-13",
          "balance": 7821.41,
          "min_balance": 1700.0
        },
        {
          "day": 15,
          "date": "2024-12-18",
          "balance": 7444.5,
          "min_balance": 1700.0
        },
        {
          "day": 20,
          "date": "2024-12-23",
          "balance": 8697.43,
          "min_balance": 1700.0
        },
        {
          "day": 25,
          "date": "2024-12-28",
          "balance": 8283.39,
          "min_balance": 1700.0
        },
        {
          "day": 30,
          "date": "2025-01-02",
          "balance": 8283.39,
          "min_balance": 1700.0
        },
        {
          "day": 35,
          "date": "2025-01-07",
          "balance": 7339.84,
          "min_balance": 1700.0
        },
        {
          "day": 40,
          "date": "2025-01-12",
          "balance": 7280.84,
          "min_balance": 1700.0
        },
        {
          "day": 45,
          "date": "2025-01-17",
          "balance": 6944.0,
          "min_balance": 1700.0
        },
        {
          "day": 50,
          "date": "2025-01-22",
          "balance": 7978.87,
          "min_balance": 1700.0
        },
        {
          "day": 55,
          "date": "2025-01-27",
          "balance": 7564.83,
          "min_balance": 1700.0
        },
        {
          "day": 60,
          "date": "2025-02-01",
          "balance": 7564.83,
          "min_balance": 1700.0
        },
        {
          "day": 65,
          "date": "2025-02-06",
          "balance": 6881.09,
          "min_balance": 1700.0
        },
        {
          "day": 70,
          "date": "2025-02-11",
          "balance": 6562.28,
          "min_balance": 1700.0
        },
        {
          "day": 75,
          "date": "2025-02-16",
          "balance": 6305.21,
          "min_balance": 1700.0
        },
        {
          "day": 80,
          "date": "2025-02-21",
          "balance": 7260.31,
          "min_balance": 1700.0
        },
        {
          "day": 85,
          "date": "2025-02-26",
          "balance": 7039.73,
          "min_balance": 1700.0
        },
        {
          "day": 90,
          "date": "2025-03-03",
          "balance": 6197.12,
          "min_balance": 1700.0
        }
      ]
    },
    {
      "request_id": "request_167",
      "user_id": "user_167",
      "requested_amount": 43802.0,
      "currency": "ZAR",
      "request_type": "housing",
      "request_text": "How much of the rental deposit can I safely pay today? I need to decide by 31 May 2025. I've been asked to pay ZAR 43,802 as the rental deposit.",
      "allows_partial_payment": false,
      "request_date": "2025-05-05",
      "desired_completion_date": "2025-05-31",
      "home_currency": "ZAR",
      "current_balance": 105090.3,
      "minimum_balance_to_keep": 31200.0,
      "amount_safe_to_pay": 38755.13,
      "affordability_status": "affordable_later",
      "recommended_payment_method": "wait",
      "payment_plan": "2025-07-23:43802",
      "earliest_date_for_full_payment": "2025-07-23",
      "spending_changes_needed": "none",
      "decision_explanation": "Pay ZAR 43,802 in full on 23 July 2025. Paying earlier would take the balance below the ZAR 31,200 minimum.",
      "curve": [
        {
          "day": 0,
          "date": "2025-05-05",
          "balance": 105090.3,
          "min_balance": 31200.0
        },
        {
          "day": 5,
          "date": "2025-05-10",
          "balance": 100339.12,
          "min_balance": 31200.0
        },
        {
          "day": 10,
          "date": "2025-05-15",
          "balance": 82495.42,
          "min_balance": 31200.0
        },
        {
          "day": 15,
          "date": "2025-05-20",
          "balance": 81394.73,
          "min_balance": 31200.0
        },
        {
          "day": 20,
          "date": "2025-05-25",
          "balance": 122632.0,
          "min_balance": 31200.0
        },
        {
          "day": 25,
          "date": "2025-05-30",
          "balance": 118834.54,
          "min_balance": 31200.0
        },
        {
          "day": 30,
          "date": "2025-06-04",
          "balance": 100110.29,
          "min_balance": 31200.0
        },
        {
          "day": 35,
          "date": "2025-06-09",
          "balance": 95359.11,
          "min_balance": 31200.0
        },
        {
          "day": 40,
          "date": "2025-06-14",
          "balance": 83877.49,
          "min_balance": 31200.0
        },
        {
          "day": 45,
          "date": "2025-06-19",
          "balance": 76414.72,
          "min_balance": 31200.0
        },
        {
          "day": 50,
          "date": "2025-06-24",
          "balance": 117651.99,
          "min_balance": 31200.0
        },
        {
          "day": 55,
          "date": "2025-06-29",
          "balance": 113854.53,
          "min_balance": 31200.0
        },
        {
          "day": 60,
          "date": "2025-07-04",
          "balance": 95130.28,
          "min_balance": 31200.0
        },
        {
          "day": 65,
          "date": "2025-07-09",
          "balance": 90379.1,
          "min_balance": 31200.0
        },
        {
          "day": 70,
          "date": "2025-07-14",
          "balance": 78897.48,
          "min_balance": 31200.0
        },
        {
          "day": 75,
          "date": "2025-07-19",
          "balance": 71434.71,
          "min_balance": 31200.0
        },
        {
          "day": 80,
          "date": "2025-07-24",
          "balance": 112671.98,
          "min_balance": 31200.0
        },
        {
          "day": 85,
          "date": "2025-07-29",
          "balance": 108874.52,
          "min_balance": 31200.0
        },
        {
          "day": 90,
          "date": "2025-08-03",
          "balance": 106144.27,
          "min_balance": 31200.0
        }
      ]
    },
    {
      "request_id": "request_168",
      "user_id": "user_168",
      "requested_amount": 49380.0,
      "currency": "INR",
      "request_type": "housing",
      "request_text": "The rental deposit is INR 49,380. Would paying the full deposit leave enough for my other commitments?",
      "allows_partial_payment": true,
      "request_date": "2026-01-07",
      "desired_completion_date": "2026-03-16",
      "home_currency": "INR",
      "current_balance": 173843.0,
      "minimum_balance_to_keep": 114400.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 16 March 2026. None of the available options keeps the INR 114,400 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2026-01-07",
          "balance": 173843.0,
          "min_balance": 114400.0
        },
        {
          "day": 5,
          "date": "2026-01-12",
          "balance": 146314.73,
          "min_balance": 114400.0
        },
        {
          "day": 10,
          "date": "2026-01-17",
          "balance": 267519.99,
          "min_balance": 114400.0
        },
        {
          "day": 15,
          "date": "2026-01-22",
          "balance": 243802.61,
          "min_balance": 114400.0
        },
        {
          "day": 20,
          "date": "2026-01-27",
          "balance": 228377.71,
          "min_balance": 114400.0
        },
        {
          "day": 25,
          "date": "2026-02-01",
          "balance": 164750.88,
          "min_balance": 114400.0
        },
        {
          "day": 30,
          "date": "2026-02-06",
          "balance": 139856.99,
          "min_balance": 114400.0
        },
        {
          "day": 35,
          "date": "2026-02-11",
          "balance": 112328.72,
          "min_balance": 114400.0
        },
        {
          "day": 40,
          "date": "2026-02-16",
          "balance": 239700.2,
          "min_balance": 114400.0
        },
        {
          "day": 45,
          "date": "2026-02-21",
          "balance": 209816.6,
          "min_balance": 114400.0
        },
        {
          "day": 50,
          "date": "2026-02-26",
          "balance": 198145.37,
          "min_balance": 114400.0
        },
        {
          "day": 55,
          "date": "2026-03-03",
          "balance": 127077.17,
          "min_balance": 114400.0
        },
        {
          "day": 60,
          "date": "2026-03-08",
          "balance": 102240.98,
          "min_balance": 114400.0
        },
        {
          "day": 65,
          "date": "2026-03-13",
          "balance": 73037.88,
          "min_balance": 114400.0
        },
        {
          "day": 70,
          "date": "2026-03-18",
          "balance": 195502.76,
          "min_balance": 114400.0
        },
        {
          "day": 75,
          "date": "2026-03-23",
          "balance": 171694.25,
          "min_balance": 114400.0
        },
        {
          "day": 80,
          "date": "2026-03-28",
          "balance": 160405.69,
          "min_balance": 114400.0
        },
        {
          "day": 85,
          "date": "2026-04-02",
          "balance": 93091.16,
          "min_balance": 114400.0
        },
        {
          "day": 90,
          "date": "2026-04-07",
          "balance": 71884.97,
          "min_balance": 114400.0
        }
      ]
    },
    {
      "request_id": "request_169",
      "user_id": "user_169",
      "requested_amount": 41976.0,
      "currency": "ZAR",
      "request_type": "education",
      "request_text": "Would paying the course fee now leave enough for my regular commitments? I'm considering a professional course priced at ZAR 41,976.",
      "allows_partial_payment": false,
      "request_date": "2024-03-04",
      "desired_completion_date": "2024-05-16",
      "home_currency": "ZAR",
      "current_balance": 77544.5,
      "minimum_balance_to_keep": 18700.0,
      "amount_safe_to_pay": 30191.4,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 16 May 2024. None of the available options keeps the ZAR 18,700 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2024-03-04",
          "balance": 77544.5,
          "min_balance": 18700.0
        },
        {
          "day": 5,
          "date": "2024-03-09",
          "balance": 69750.67,
          "min_balance": 18700.0
        },
        {
          "day": 10,
          "date": "2024-03-14",
          "balance": 63346.68,
          "min_balance": 18700.0
        },
        {
          "day": 15,
          "date": "2024-03-19",
          "balance": 90450.41,
          "min_balance": 18700.0
        },
        {
          "day": 20,
          "date": "2024-03-24",
          "balance": 87841.1,
          "min_balance": 18700.0
        },
        {
          "day": 25,
          "date": "2024-03-29",
          "balance": 80863.73,
          "min_balance": 18700.0
        },
        {
          "day": 30,
          "date": "2024-04-03",
          "balance": 70316.86,
          "min_balance": 18700.0
        },
        {
          "day": 35,
          "date": "2024-04-08",
          "balance": 63387.63,
          "min_balance": 18700.0
        },
        {
          "day": 40,
          "date": "2024-04-13",
          "balance": 57710.13,
          "min_balance": 18700.0
        },
        {
          "day": 45,
          "date": "2024-04-18",
          "balance": 84926.9,
          "min_balance": 18700.0
        },
        {
          "day": 50,
          "date": "2024-04-23",
          "balance": 80613.46,
          "min_balance": 18700.0
        },
        {
          "day": 55,
          "date": "2024-04-28",
          "balance": 74945.4,
          "min_balance": 18700.0
        },
        {
          "day": 60,
          "date": "2024-05-03",
          "balance": 63089.22,
          "min_balance": 18700.0
        },
        {
          "day": 65,
          "date": "2024-05-08",
          "balance": 56159.99,
          "min_balance": 18700.0
        },
        {
          "day": 70,
          "date": "2024-05-13",
          "balance": 50482.49,
          "min_balance": 18700.0
        },
        {
          "day": 75,
          "date": "2024-05-18",
          "balance": 77699.26,
          "min_balance": 18700.0
        },
        {
          "day": 80,
          "date": "2024-05-23",
          "balance": 73385.82,
          "min_balance": 18700.0
        },
        {
          "day": 85,
          "date": "2024-05-28",
          "balance": 67717.76,
          "min_balance": 18700.0
        },
        {
          "day": 90,
          "date": "2024-06-02",
          "balance": 56541.99,
          "min_balance": 18700.0
        }
      ]
    },
    {
      "request_id": "request_170",
      "user_id": "user_170",
      "requested_amount": 36936000.0,
      "currency": "IDR",
      "request_type": "other",
      "request_text": "The annual membership costs IDR 36,936,000. I need to complete it by 4 October 2025. Can I pay for the annual membership now without affecting my regular expenses?",
      "allows_partial_payment": false,
      "request_date": "2025-08-06",
      "desired_completion_date": "2025-10-04",
      "home_currency": "IDR",
      "current_balance": 69446998.4,
      "minimum_balance_to_keep": 24715800.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 4 October 2025. None of the available options keeps the IDR 24,715,800 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2025-08-06",
          "balance": 69446998.4,
          "min_balance": 24715800.0
        },
        {
          "day": 5,
          "date": "2025-08-11",
          "balance": 62587318.11,
          "min_balance": 24715800.0
        },
        {
          "day": 10,
          "date": "2025-08-16",
          "balance": 90335871.06,
          "min_balance": 24715800.0
        },
        {
          "day": 15,
          "date": "2025-08-21",
          "balance": 84465437.64,
          "min_balance": 24715800.0
        },
        {
          "day": 20,
          "date": "2025-08-26",
          "balance": 80124899.52,
          "min_balance": 24715800.0
        },
        {
          "day": 25,
          "date": "2025-08-31",
          "balance": 78218916.72,
          "min_balance": 24715800.0
        },
        {
          "day": 30,
          "date": "2025-09-05",
          "balance": 46433423.36,
          "min_balance": 24715800.0
        },
        {
          "day": 35,
          "date": "2025-09-10",
          "balance": 39573743.07,
          "min_balance": 24715800.0
        },
        {
          "day": 40,
          "date": "2025-09-15",
          "balance": 68214655.97,
          "min_balance": 24715800.0
        },
        {
          "day": 45,
          "date": "2025-09-20",
          "balance": 61451862.6,
          "min_balance": 24715800.0
        },
        {
          "day": 50,
          "date": "2025-09-25",
          "balance": 57111324.48,
          "min_balance": 24715800.0
        },
        {
          "day": 55,
          "date": "2025-09-30",
          "balance": 55205341.68,
          "min_balance": 24715800.0
        },
        {
          "day": 60,
          "date": "2025-10-05",
          "balance": 23419848.32,
          "min_balance": 24715800.0
        },
        {
          "day": 65,
          "date": "2025-10-10",
          "balance": 16560168.03,
          "min_balance": 24715800.0
        },
        {
          "day": 70,
          "date": "2025-10-15",
          "balance": 45201080.93,
          "min_balance": 24715800.0
        },
        {
          "day": 75,
          "date": "2025-10-20",
          "balance": 38438287.56,
          "min_balance": 24715800.0
        },
        {
          "day": 80,
          "date": "2025-10-25",
          "balance": 34097749.44,
          "min_balance": 24715800.0
        },
        {
          "day": 85,
          "date": "2025-10-30",
          "balance": 33535168.22,
          "min_balance": 24715800.0
        },
        {
          "day": 90,
          "date": "2025-11-04",
          "balance": 3556583.81,
          "min_balance": 24715800.0
        }
      ]
    },
    {
      "request_id": "request_171",
      "user_id": "user_171",
      "requested_amount": 1878.8,
      "currency": "EUR",
      "request_type": "investment",
      "request_text": "Is it safer to invest now, invest a smaller amount, or wait? I need to decide by 10 September 2026. I'm considering setting aside EUR 1,878.80 for an investment.",
      "allows_partial_payment": false,
      "request_date": "2026-07-03",
      "desired_completion_date": "2026-09-10",
      "home_currency": "EUR",
      "current_balance": 810.65,
      "minimum_balance_to_keep": 500.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 10 September 2026. None of the available options keeps the EUR 500 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2026-07-03",
          "balance": 784.55,
          "min_balance": 500.0
        },
        {
          "day": 5,
          "date": "2026-07-08",
          "balance": 602.55,
          "min_balance": 500.0
        },
        {
          "day": 10,
          "date": "2026-07-13",
          "balance": 458.97,
          "min_balance": 500.0
        },
        {
          "day": 15,
          "date": "2026-07-18",
          "balance": 1067.63,
          "min_balance": 500.0
        },
        {
          "day": 20,
          "date": "2026-07-23",
          "balance": 1001.3,
          "min_balance": 500.0
        },
        {
          "day": 25,
          "date": "2026-07-28",
          "balance": 914.7,
          "min_balance": 500.0
        },
        {
          "day": 30,
          "date": "2026-08-02",
          "balance": 820.31,
          "min_balance": 500.0
        },
        {
          "day": 35,
          "date": "2026-08-07",
          "balance": 713.21,
          "min_balance": 500.0
        },
        {
          "day": 40,
          "date": "2026-08-12",
          "balance": 483.86,
          "min_balance": 500.0
        },
        {
          "day": 45,
          "date": "2026-08-17",
          "balance": 1127.3,
          "min_balance": 500.0
        },
        {
          "day": 50,
          "date": "2026-08-22",
          "balance": 1035.92,
          "min_balance": 500.0
        },
        {
          "day": 55,
          "date": "2026-08-27",
          "balance": 963.37,
          "min_balance": 500.0
        },
        {
          "day": 60,
          "date": "2026-09-01",
          "balance": 829.97,
          "min_balance": 500.0
        },
        {
          "day": 65,
          "date": "2026-09-06",
          "balance": 722.87,
          "min_balance": 500.0
        },
        {
          "day": 70,
          "date": "2026-09-11",
          "balance": 529.64,
          "min_balance": 500.0
        },
        {
          "day": 75,
          "date": "2026-09-16",
          "balance": 1171.29,
          "min_balance": 500.0
        },
        {
          "day": 80,
          "date": "2026-09-21",
          "balance": 1045.58,
          "min_balance": 500.0
        },
        {
          "day": 85,
          "date": "2026-09-26",
          "balance": 992.57,
          "min_balance": 500.0
        },
        {
          "day": 90,
          "date": "2026-10-01",
          "balance": 839.63,
          "min_balance": 500.0
        }
      ]
    },
    {
      "request_id": "request_172",
      "user_id": "user_172",
      "requested_amount": 10200.0,
      "currency": "ZAR",
      "request_type": "education",
      "request_text": "I've been quoted ZAR 10,200 for the course. Can I pay for the course before enrolment closes?",
      "allows_partial_payment": true,
      "request_date": "2024-06-05",
      "desired_completion_date": "2024-07-15",
      "home_currency": "ZAR",
      "current_balance": 50942.4,
      "minimum_balance_to_keep": 27200.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 15 July 2024. None of the available options keeps the ZAR 27,200 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2024-06-05",
          "balance": 48005.76,
          "min_balance": 27200.0
        },
        {
          "day": 5,
          "date": "2024-06-10",
          "balance": 39590.9,
          "min_balance": 27200.0
        },
        {
          "day": 10,
          "date": "2024-06-15",
          "balance": 66184.01,
          "min_balance": 27200.0
        },
        {
          "day": 15,
          "date": "2024-06-20",
          "balance": 62469.04,
          "min_balance": 27200.0
        },
        {
          "day": 20,
          "date": "2024-06-25",
          "balance": 61865.91,
          "min_balance": 27200.0
        },
        {
          "day": 25,
          "date": "2024-06-30",
          "balance": 60279.49,
          "min_balance": 27200.0
        },
        {
          "day": 30,
          "date": "2024-07-05",
          "balance": 44447.06,
          "min_balance": 27200.0
        },
        {
          "day": 35,
          "date": "2024-07-10",
          "balance": 36032.2,
          "min_balance": 27200.0
        },
        {
          "day": 40,
          "date": "2024-07-15",
          "balance": 62625.31,
          "min_balance": 27200.0
        },
        {
          "day": 45,
          "date": "2024-07-20",
          "balance": 58910.34,
          "min_balance": 27200.0
        },
        {
          "day": 50,
          "date": "2024-07-25",
          "balance": 58307.21,
          "min_balance": 27200.0
        },
        {
          "day": 55,
          "date": "2024-07-30",
          "balance": 56720.79,
          "min_balance": 27200.0
        },
        {
          "day": 60,
          "date": "2024-08-04",
          "balance": 43825.0,
          "min_balance": 27200.0
        },
        {
          "day": 65,
          "date": "2024-08-09",
          "balance": 39344.63,
          "min_balance": 27200.0
        },
        {
          "day": 70,
          "date": "2024-08-14",
          "balance": 25185.06,
          "min_balance": 27200.0
        },
        {
          "day": 75,
          "date": "2024-08-19",
          "balance": 55351.64,
          "min_balance": 27200.0
        },
        {
          "day": 80,
          "date": "2024-08-24",
          "balance": 54748.51,
          "min_balance": 27200.0
        },
        {
          "day": 85,
          "date": "2024-08-29",
          "balance": 53162.09,
          "min_balance": 27200.0
        },
        {
          "day": 90,
          "date": "2024-09-03",
          "balance": 40266.3,
          "min_balance": 27200.0
        }
      ]
    },
    {
      "request_id": "request_173",
      "user_id": "user_173",
      "requested_amount": 113000.0,
      "currency": "INR",
      "request_type": "family_transfer",
      "request_text": "Can I complete this family transfer and still keep my minimum balance? I've been asked to transfer INR 113,000 to my family.",
      "allows_partial_payment": true,
      "request_date": "2025-11-07",
      "desired_completion_date": "2026-01-17",
      "home_currency": "INR",
      "current_balance": 162290.53,
      "minimum_balance_to_keep": 79100.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 17 January 2026. None of the available options keeps the INR 79,100 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2025-11-07",
          "balance": 157810.53,
          "min_balance": 79100.0
        },
        {
          "day": 5,
          "date": "2025-11-12",
          "balance": 131553.23,
          "min_balance": 79100.0
        },
        {
          "day": 10,
          "date": "2025-11-17",
          "balance": 229780.21,
          "min_balance": 79100.0
        },
        {
          "day": 15,
          "date": "2025-11-22",
          "balance": 213217.94,
          "min_balance": 79100.0
        },
        {
          "day": 20,
          "date": "2025-11-27",
          "balance": 200659.97,
          "min_balance": 79100.0
        },
        {
          "day": 25,
          "date": "2025-12-02",
          "balance": 149028.16,
          "min_balance": 79100.0
        },
        {
          "day": 30,
          "date": "2025-12-07",
          "balance": 129968.62,
          "min_balance": 79100.0
        },
        {
          "day": 35,
          "date": "2025-12-12",
          "balance": 103711.32,
          "min_balance": 79100.0
        },
        {
          "day": 40,
          "date": "2025-12-17",
          "balance": 201938.3,
          "min_balance": 79100.0
        },
        {
          "day": 45,
          "date": "2025-12-22",
          "balance": 185376.03,
          "min_balance": 79100.0
        },
        {
          "day": 50,
          "date": "2025-12-27",
          "balance": 172818.06,
          "min_balance": 79100.0
        },
        {
          "day": 55,
          "date": "2026-01-01",
          "balance": 157228.61,
          "min_balance": 79100.0
        },
        {
          "day": 60,
          "date": "2026-01-06",
          "balance": 106606.71,
          "min_balance": 79100.0
        },
        {
          "day": 65,
          "date": "2026-01-11",
          "balance": 84211.8,
          "min_balance": 79100.0
        },
        {
          "day": 70,
          "date": "2026-01-16",
          "balance": 181086.13,
          "min_balance": 79100.0
        },
        {
          "day": 75,
          "date": "2026-01-21",
          "balance": 165424.16,
          "min_balance": 79100.0
        },
        {
          "day": 80,
          "date": "2026-01-26",
          "balance": 147483.7,
          "min_balance": 79100.0
        },
        {
          "day": 85,
          "date": "2026-01-31",
          "balance": 134989.06,
          "min_balance": 79100.0
        },
        {
          "day": 90,
          "date": "2026-02-05",
          "balance": 86107.11,
          "min_balance": 79100.0
        }
      ]
    },
    {
      "request_id": "request_174",
      "user_id": "user_174",
      "requested_amount": 1146.2,
      "currency": "EUR",
      "request_type": "investment",
      "request_text": "I want to put EUR 1,146.20 into an investment. I need to complete it by 7 June 2026. Would investing this amount leave my upcoming bills covered?",
      "allows_partial_payment": false,
      "request_date": "2026-04-04",
      "desired_completion_date": "2026-06-07",
      "home_currency": "EUR",
      "current_balance": 3266.04,
      "minimum_balance_to_keep": 700.0,
      "amount_safe_to_pay": 1146.2,
      "affordability_status": "affordable_with_plan",
      "recommended_payment_method": "installments",
      "payment_plan": "2026-04-04:397.35|2026-05-04:397.35|2026-06-03:397.35",
      "earliest_date_for_full_payment": "2026-04-04",
      "spending_changes_needed": "none",
      "decision_explanation": "Use 3 installments of EUR 397.35, starting 4 April 2026. This leaves at least EUR 700 available.",
      "curve": [
        {
          "day": 0,
          "date": "2026-04-04",
          "balance": 3235.83,
          "min_balance": 700.0
        },
        {
          "day": 5,
          "date": "2026-04-09",
          "balance": 3108.58,
          "min_balance": 700.0
        },
        {
          "day": 10,
          "date": "2026-04-14",
          "balance": 2971.73,
          "min_balance": 700.0
        },
        {
          "day": 15,
          "date": "2026-04-19",
          "balance": 3767.44,
          "min_balance": 700.0
        },
        {
          "day": 20,
          "date": "2026-04-24",
          "balance": 3745.78,
          "min_balance": 700.0
        },
        {
          "day": 25,
          "date": "2026-04-29",
          "balance": 3556.15,
          "min_balance": 700.0
        },
        {
          "day": 30,
          "date": "2026-05-04",
          "balance": 3298.2,
          "min_balance": 700.0
        },
        {
          "day": 35,
          "date": "2026-05-09",
          "balance": 3170.95,
          "min_balance": 700.0
        },
        {
          "day": 40,
          "date": "2026-05-14",
          "balance": 3034.1,
          "min_balance": 700.0
        },
        {
          "day": 45,
          "date": "2026-05-19",
          "balance": 3829.81,
          "min_balance": 700.0
        },
        {
          "day": 50,
          "date": "2026-05-24",
          "balance": 3808.15,
          "min_balance": 700.0
        },
        {
          "day": 55,
          "date": "2026-05-29",
          "balance": 3618.52,
          "min_balance": 700.0
        },
        {
          "day": 60,
          "date": "2026-06-03",
          "balance": 3390.78,
          "min_balance": 700.0
        },
        {
          "day": 65,
          "date": "2026-06-08",
          "balance": 3263.89,
          "min_balance": 700.0
        },
        {
          "day": 70,
          "date": "2026-06-13",
          "balance": 3123.94,
          "min_balance": 700.0
        },
        {
          "day": 75,
          "date": "2026-06-18",
          "balance": 3948.45,
          "min_balance": 700.0
        },
        {
          "day": 80,
          "date": "2026-06-23",
          "balance": 3892.18,
          "min_balance": 700.0
        },
        {
          "day": 85,
          "date": "2026-06-28",
          "balance": 3749.61,
          "min_balance": 700.0
        },
        {
          "day": 90,
          "date": "2026-07-03",
          "balance": 3453.15,
          "min_balance": 700.0
        }
      ]
    },
    {
      "request_id": "request_175",
      "user_id": "user_175",
      "requested_amount": 2346.3,
      "currency": "EUR",
      "request_type": "emergency_expense",
      "request_text": "Should I pay for the repair in full, split the payment, or wait? I need to decide by 1 October 2024. I need to cover an urgent repair of EUR 2,346.30.",
      "allows_partial_payment": false,
      "request_date": "2024-09-06",
      "desired_completion_date": "2024-10-01",
      "home_currency": "EUR",
      "current_balance": 4760.25,
      "minimum_balance_to_keep": 1700.0,
      "amount_safe_to_pay": 1969.1,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 1 October 2024. None of the available options keeps the EUR 1,700 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2024-09-06",
          "balance": 4760.25,
          "min_balance": 1700.0
        },
        {
          "day": 5,
          "date": "2024-09-11",
          "balance": 4439.11,
          "min_balance": 1700.0
        },
        {
          "day": 10,
          "date": "2024-09-16",
          "balance": 5979.31,
          "min_balance": 1700.0
        },
        {
          "day": 15,
          "date": "2024-09-21",
          "balance": 5715.98,
          "min_balance": 1700.0
        },
        {
          "day": 20,
          "date": "2024-09-26",
          "balance": 5507.31,
          "min_balance": 1700.0
        },
        {
          "day": 25,
          "date": "2024-10-01",
          "balance": 5166.98,
          "min_balance": 1700.0
        },
        {
          "day": 30,
          "date": "2024-10-06",
          "balance": 4520.54,
          "min_balance": 1700.0
        },
        {
          "day": 35,
          "date": "2024-10-11",
          "balance": 4199.4,
          "min_balance": 1700.0
        },
        {
          "day": 40,
          "date": "2024-10-16",
          "balance": 5739.6,
          "min_balance": 1700.0
        },
        {
          "day": 45,
          "date": "2024-10-21",
          "balance": 5476.27,
          "min_balance": 1700.0
        },
        {
          "day": 50,
          "date": "2024-10-26",
          "balance": 5267.6,
          "min_balance": 1700.0
        },
        {
          "day": 55,
          "date": "2024-10-31",
          "balance": 4927.27,
          "min_balance": 1700.0
        },
        {
          "day": 60,
          "date": "2024-11-05",
          "balance": 4280.83,
          "min_balance": 1700.0
        },
        {
          "day": 65,
          "date": "2024-11-10",
          "balance": 3959.69,
          "min_balance": 1700.0
        },
        {
          "day": 70,
          "date": "2024-11-15",
          "balance": 5532.74,
          "min_balance": 1700.0
        },
        {
          "day": 75,
          "date": "2024-11-20",
          "balance": 5397.5,
          "min_balance": 1700.0
        },
        {
          "day": 80,
          "date": "2024-11-25",
          "balance": 5091.74,
          "min_balance": 1700.0
        },
        {
          "day": 85,
          "date": "2024-11-30",
          "balance": 4687.56,
          "min_balance": 1700.0
        },
        {
          "day": 90,
          "date": "2024-12-05",
          "balance": 4041.12,
          "min_balance": 1700.0
        }
      ]
    },
    {
      "request_id": "request_176",
      "user_id": "user_176",
      "requested_amount": 1239.7,
      "currency": "EUR",
      "request_type": "travel",
      "request_text": "The family trip will cost EUR 1,239.70. Does paying for the trip now leave enough for the rest of the month?",
      "allows_partial_payment": false,
      "request_date": "2025-02-03",
      "desired_completion_date": "2025-02-27",
      "home_currency": "EUR",
      "current_balance": 1286.95,
      "minimum_balance_to_keep": 600.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 27 February 2025. None of the available options keeps the EUR 600 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2025-02-03",
          "balance": 1250.56,
          "min_balance": 600.0
        },
        {
          "day": 5,
          "date": "2025-02-08",
          "balance": 1116.65,
          "min_balance": 600.0
        },
        {
          "day": 10,
          "date": "2025-02-13",
          "balance": 895.7,
          "min_balance": 600.0
        },
        {
          "day": 15,
          "date": "2025-02-18",
          "balance": 814.73,
          "min_balance": 600.0
        },
        {
          "day": 20,
          "date": "2025-02-23",
          "balance": 754.11,
          "min_balance": 600.0
        },
        {
          "day": 25,
          "date": "2025-02-28",
          "balance": 953.41,
          "min_balance": 600.0
        },
        {
          "day": 30,
          "date": "2025-03-05",
          "balance": 570.11,
          "min_balance": 600.0
        },
        {
          "day": 35,
          "date": "2025-03-10",
          "balance": 456.77,
          "min_balance": 600.0
        },
        {
          "day": 40,
          "date": "2025-03-15",
          "balance": 277.32,
          "min_balance": 600.0
        },
        {
          "day": 45,
          "date": "2025-03-20",
          "balance": 185.74,
          "min_balance": 600.0
        },
        {
          "day": 50,
          "date": "2025-03-25",
          "balance": 470.17,
          "min_balance": 600.0
        },
        {
          "day": 55,
          "date": "2025-03-30",
          "balance": 405.05,
          "min_balance": 600.0
        },
        {
          "day": 60,
          "date": "2025-04-04",
          "balance": 66.48,
          "min_balance": 600.0
        },
        {
          "day": 65,
          "date": "2025-04-09",
          "balance": -90.27,
          "min_balance": 600.0
        },
        {
          "day": 70,
          "date": "2025-04-14",
          "balance": -314.72,
          "min_balance": 600.0
        },
        {
          "day": 75,
          "date": "2025-04-19",
          "balance": -369.35,
          "min_balance": 600.0
        },
        {
          "day": 80,
          "date": "2025-04-24",
          "balance": -97.91,
          "min_balance": 600.0
        },
        {
          "day": 85,
          "date": "2025-04-29",
          "balance": -186.99,
          "min_balance": 600.0
        },
        {
          "day": 90,
          "date": "2025-05-04",
          "balance": -525.56,
          "min_balance": 600.0
        }
      ]
    },
    {
      "request_id": "request_177",
      "user_id": "user_177",
      "requested_amount": 1017.6,
      "currency": "USD",
      "request_type": "emergency_expense",
      "request_text": "What is the most I can put toward this repair right now? I have an unexpected repair bill of USD 1,017.60.",
      "allows_partial_payment": false,
      "request_date": "2026-01-05",
      "desired_completion_date": "2026-01-25",
      "home_currency": "USD",
      "current_balance": 2987.24,
      "minimum_balance_to_keep": 1300.0,
      "amount_safe_to_pay": 177.6,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 25 January 2026. None of the available options keeps the USD 1,300 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2026-01-05",
          "balance": 2936.42,
          "min_balance": 1300.0
        },
        {
          "day": 5,
          "date": "2026-01-10",
          "balance": 2543.89,
          "min_balance": 1300.0
        },
        {
          "day": 10,
          "date": "2026-01-15",
          "balance": 4070.21,
          "min_balance": 1300.0
        },
        {
          "day": 15,
          "date": "2026-01-20",
          "balance": 3588.36,
          "min_balance": 1300.0
        },
        {
          "day": 20,
          "date": "2026-01-25",
          "balance": 3429.16,
          "min_balance": 1300.0
        },
        {
          "day": 25,
          "date": "2026-01-30",
          "balance": 3177.33,
          "min_balance": 1300.0
        },
        {
          "day": 30,
          "date": "2026-02-04",
          "balance": 2513.62,
          "min_balance": 1300.0
        },
        {
          "day": 35,
          "date": "2026-02-09",
          "balance": 2221.25,
          "min_balance": 1300.0
        },
        {
          "day": 40,
          "date": "2026-02-14",
          "balance": 1951.22,
          "min_balance": 1300.0
        },
        {
          "day": 45,
          "date": "2026-02-19",
          "balance": 3337.81,
          "min_balance": 1300.0
        },
        {
          "day": 50,
          "date": "2026-02-24",
          "balance": 2998.43,
          "min_balance": 1300.0
        },
        {
          "day": 55,
          "date": "2026-03-01",
          "balance": 2575.9,
          "min_balance": 1300.0
        },
        {
          "day": 60,
          "date": "2026-03-06",
          "balance": 1910.22,
          "min_balance": 1300.0
        },
        {
          "day": 65,
          "date": "2026-03-11",
          "balance": 1596.65,
          "min_balance": 1300.0
        },
        {
          "day": 70,
          "date": "2026-03-16",
          "balance": 3122.97,
          "min_balance": 1300.0
        },
        {
          "day": 75,
          "date": "2026-03-21",
          "balance": 2641.12,
          "min_balance": 1300.0
        },
        {
          "day": 80,
          "date": "2026-03-26",
          "balance": 2481.92,
          "min_balance": 1300.0
        },
        {
          "day": 85,
          "date": "2026-03-31",
          "balance": 2230.09,
          "min_balance": 1300.0
        },
        {
          "day": 90,
          "date": "2026-04-05",
          "balance": 1515.56,
          "min_balance": 1300.0
        }
      ]
    },
    {
      "request_id": "request_178",
      "user_id": "user_178",
      "requested_amount": 2938.1,
      "currency": "EUR",
      "request_type": "investment",
      "request_text": "I'm considering setting aside EUR 2,938.10 for an investment. I need to complete it by 12 February 2025. What portion can I invest today without going below my minimum balance?",
      "allows_partial_payment": false,
      "request_date": "2024-12-07",
      "desired_completion_date": "2025-02-12",
      "home_currency": "EUR",
      "current_balance": 7959.3,
      "minimum_balance_to_keep": 1400.0,
      "amount_safe_to_pay": 1934.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 12 February 2025. None of the available options keeps the EUR 1,400 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2024-12-07",
          "balance": 7693.3,
          "min_balance": 1400.0
        },
        {
          "day": 5,
          "date": "2024-12-12",
          "balance": 7319.51,
          "min_balance": 1400.0
        },
        {
          "day": 10,
          "date": "2024-12-17",
          "balance": 7187.61,
          "min_balance": 1400.0
        },
        {
          "day": 15,
          "date": "2024-12-22",
          "balance": 7637.6,
          "min_balance": 1400.0
        },
        {
          "day": 20,
          "date": "2024-12-27",
          "balance": 7459.4,
          "min_balance": 1400.0
        },
        {
          "day": 25,
          "date": "2025-01-01",
          "balance": 7126.08,
          "min_balance": 1400.0
        },
        {
          "day": 30,
          "date": "2025-01-06",
          "balance": 6506.2,
          "min_balance": 1400.0
        },
        {
          "day": 35,
          "date": "2025-01-11",
          "balance": 5947.84,
          "min_balance": 1400.0
        },
        {
          "day": 40,
          "date": "2025-01-16",
          "balance": 5734.51,
          "min_balance": 1400.0
        },
        {
          "day": 45,
          "date": "2025-01-21",
          "balance": 6258.44,
          "min_balance": 1400.0
        },
        {
          "day": 50,
          "date": "2025-01-26",
          "balance": 6078.55,
          "min_balance": 1400.0
        },
        {
          "day": 55,
          "date": "2025-01-31",
          "balance": 5828.64,
          "min_balance": 1400.0
        },
        {
          "day": 60,
          "date": "2025-02-05",
          "balance": 5053.1,
          "min_balance": 1400.0
        },
        {
          "day": 65,
          "date": "2025-02-10",
          "balance": 4566.48,
          "min_balance": 1400.0
        },
        {
          "day": 70,
          "date": "2025-02-15",
          "balance": 4281.41,
          "min_balance": 1400.0
        },
        {
          "day": 75,
          "date": "2025-02-20",
          "balance": 4110.79,
          "min_balance": 1400.0
        },
        {
          "day": 80,
          "date": "2025-02-25",
          "balance": 4625.45,
          "min_balance": 1400.0
        },
        {
          "day": 85,
          "date": "2025-03-02",
          "balance": 4140.1,
          "min_balance": 1400.0
        },
        {
          "day": 90,
          "date": "2025-03-07",
          "balance": 3334.0,
          "min_balance": 1400.0
        }
      ]
    },
    {
      "request_id": "request_179",
      "user_id": "user_179",
      "requested_amount": 41648000.0,
      "currency": "IDR",
      "request_type": "debt_repayment",
      "request_text": "Would paying this much toward the loan leave enough for the rest of the month? I need to decide by 15 July 2025. I would like to repay an additional IDR 41,648,000.",
      "allows_partial_payment": false,
      "request_date": "2025-05-04",
      "desired_completion_date": "2025-07-15",
      "home_currency": "IDR",
      "current_balance": 79388050.0,
      "minimum_balance_to_keep": 41430800.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 15 July 2025. None of the available options keeps the IDR 41,430,800 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2025-05-04",
          "balance": 65765050.0,
          "min_balance": 41430800.0
        },
        {
          "day": 5,
          "date": "2025-05-09",
          "balance": 59420434.07,
          "min_balance": 41430800.0
        },
        {
          "day": 10,
          "date": "2025-05-14",
          "balance": 50149603.53,
          "min_balance": 41430800.0
        },
        {
          "day": 15,
          "date": "2025-05-19",
          "balance": 93447353.32,
          "min_balance": 41430800.0
        },
        {
          "day": 20,
          "date": "2025-05-24",
          "balance": 86786245.45,
          "min_balance": 41430800.0
        },
        {
          "day": 25,
          "date": "2025-05-29",
          "balance": 64951142.1,
          "min_balance": 41430800.0
        },
        {
          "day": 30,
          "date": "2025-06-03",
          "balance": 58695124.4,
          "min_balance": 41430800.0
        },
        {
          "day": 35,
          "date": "2025-06-08",
          "balance": 38727508.47,
          "min_balance": 41430800.0
        },
        {
          "day": 40,
          "date": "2025-06-13",
          "balance": 29456677.93,
          "min_balance": 41430800.0
        },
        {
          "day": 45,
          "date": "2025-06-18",
          "balance": 74232405.98,
          "min_balance": 41430800.0
        },
        {
          "day": 50,
          "date": "2025-06-23",
          "balance": 69989565.12,
          "min_balance": 41430800.0
        },
        {
          "day": 55,
          "date": "2025-06-28",
          "balance": 58907216.5,
          "min_balance": 41430800.0
        },
        {
          "day": 60,
          "date": "2025-07-03",
          "balance": 38002198.8,
          "min_balance": 41430800.0
        },
        {
          "day": 65,
          "date": "2025-07-08",
          "balance": 18034582.87,
          "min_balance": 41430800.0
        },
        {
          "day": 70,
          "date": "2025-07-13",
          "balance": 8763752.33,
          "min_balance": 41430800.0
        },
        {
          "day": 75,
          "date": "2025-07-18",
          "balance": 53539480.38,
          "min_balance": 41430800.0
        },
        {
          "day": 80,
          "date": "2025-07-23",
          "balance": 49296639.52,
          "min_balance": 41430800.0
        },
        {
          "day": 85,
          "date": "2025-07-28",
          "balance": 38214290.9,
          "min_balance": 41430800.0
        },
        {
          "day": 90,
          "date": "2025-08-02",
          "balance": 17309273.2,
          "min_balance": 41430800.0
        }
      ]
    },
    {
      "request_id": "request_180",
      "user_id": "user_180",
      "requested_amount": 66500.0,
      "currency": "INR",
      "request_type": "debt_repayment",
      "request_text": "The extra repayment I'm considering is INR 66,500. Can I clear this additional amount without putting upcoming bills at risk?",
      "allows_partial_payment": true,
      "request_date": "2026-07-06",
      "desired_completion_date": "2026-09-02",
      "home_currency": "INR",
      "current_balance": 134980.0,
      "minimum_balance_to_keep": 37300.0,
      "amount_safe_to_pay": 43408.9,
      "affordability_status": "affordable_with_plan",
      "recommended_payment_method": "installments",
      "payment_plan": "2026-07-06:11970|2026-08-03:11970|2026-08-31:11970|2026-09-28:11970|2026-10-26:11970|2026-11-23:11970",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Use 6 installments of INR 11,970, starting 6 July 2026. This leaves at least INR 37,300 available.",
      "curve": [
        {
          "day": 0,
          "date": "2026-07-06",
          "balance": 131563.47,
          "min_balance": 37300.0
        },
        {
          "day": 5,
          "date": "2026-07-11",
          "balance": 115779.05,
          "min_balance": 37300.0
        },
        {
          "day": 10,
          "date": "2026-07-16",
          "balance": 165610.24,
          "min_balance": 37300.0
        },
        {
          "day": 15,
          "date": "2026-07-21",
          "balance": 158965.29,
          "min_balance": 37300.0
        },
        {
          "day": 20,
          "date": "2026-07-26",
          "balance": 152813.44,
          "min_balance": 37300.0
        },
        {
          "day": 25,
          "date": "2026-07-31",
          "balance": 144603.11,
          "min_balance": 37300.0
        },
        {
          "day": 30,
          "date": "2026-08-05",
          "balance": 115956.01,
          "min_balance": 37300.0
        },
        {
          "day": 35,
          "date": "2026-08-10",
          "balance": 101335.06,
          "min_balance": 37300.0
        },
        {
          "day": 40,
          "date": "2026-08-15",
          "balance": 151166.25,
          "min_balance": 37300.0
        },
        {
          "day": 45,
          "date": "2026-08-20",
          "balance": 144521.3,
          "min_balance": 37300.0
        },
        {
          "day": 50,
          "date": "2026-08-25",
          "balance": 140258.22,
          "min_balance": 37300.0
        },
        {
          "day": 55,
          "date": "2026-08-30",
          "balance": 131791.23,
          "min_balance": 37300.0
        },
        {
          "day": 60,
          "date": "2026-09-04",
          "balance": 107735.16,
          "min_balance": 37300.0
        },
        {
          "day": 65,
          "date": "2026-09-09",
          "balance": 94801.07,
          "min_balance": 37300.0
        },
        {
          "day": 70,
          "date": "2026-09-14",
          "balance": 80708.9,
          "min_balance": 37300.0
        },
        {
          "day": 75,
          "date": "2026-09-19",
          "balance": 131181.96,
          "min_balance": 37300.0
        },
        {
          "day": 80,
          "date": "2026-09-24",
          "balance": 125814.23,
          "min_balance": 37300.0
        },
        {
          "day": 85,
          "date": "2026-09-29",
          "balance": 118316.26,
          "min_balance": 37300.0
        },
        {
          "day": 90,
          "date": "2026-10-04",
          "balance": 93291.17,
          "min_balance": 37300.0
        }
      ]
    },
    {
      "request_id": "request_181",
      "user_id": "user_181",
      "requested_amount": 5059.2,
      "currency": "USD",
      "request_type": "investment",
      "request_text": "Is it safer to invest now, invest a smaller amount, or wait? I want to put USD 5,059.20 into an investment.",
      "allows_partial_payment": false,
      "request_date": "2024-03-03",
      "desired_completion_date": "2024-04-07",
      "home_currency": "USD",
      "current_balance": 3362.0,
      "minimum_balance_to_keep": 2000.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 7 April 2024. None of the available options keeps the USD 2,000 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2024-03-03",
          "balance": 3204.81,
          "min_balance": 2000.0
        },
        {
          "day": 5,
          "date": "2024-03-08",
          "balance": 2601.05,
          "min_balance": 2000.0
        },
        {
          "day": 10,
          "date": "2024-03-13",
          "balance": 1652.32,
          "min_balance": 2000.0
        },
        {
          "day": 15,
          "date": "2024-03-18",
          "balance": 6556.03,
          "min_balance": 2000.0
        },
        {
          "day": 20,
          "date": "2024-03-23",
          "balance": 6176.14,
          "min_balance": 2000.0
        },
        {
          "day": 25,
          "date": "2024-03-28",
          "balance": 5732.85,
          "min_balance": 2000.0
        },
        {
          "day": 30,
          "date": "2024-04-02",
          "balance": 4683.12,
          "min_balance": 2000.0
        },
        {
          "day": 35,
          "date": "2024-04-07",
          "balance": 4380.85,
          "min_balance": 2000.0
        },
        {
          "day": 40,
          "date": "2024-04-12",
          "balance": 3286.44,
          "min_balance": 2000.0
        },
        {
          "day": 45,
          "date": "2024-04-17",
          "balance": 5684.88,
          "min_balance": 2000.0
        },
        {
          "day": 50,
          "date": "2024-04-22",
          "balance": 5318.96,
          "min_balance": 2000.0
        },
        {
          "day": 55,
          "date": "2024-04-27",
          "balance": 4915.59,
          "min_balance": 2000.0
        },
        {
          "day": 60,
          "date": "2024-05-02",
          "balance": 3737.24,
          "min_balance": 2000.0
        },
        {
          "day": 65,
          "date": "2024-05-07",
          "balance": 3434.97,
          "min_balance": 2000.0
        },
        {
          "day": 70,
          "date": "2024-05-12",
          "balance": 2340.56,
          "min_balance": 2000.0
        },
        {
          "day": 75,
          "date": "2024-05-17",
          "balance": 4739.0,
          "min_balance": 2000.0
        },
        {
          "day": 80,
          "date": "2024-05-22",
          "balance": 4373.08,
          "min_balance": 2000.0
        },
        {
          "day": 85,
          "date": "2024-05-27",
          "balance": 3969.71,
          "min_balance": 2000.0
        },
        {
          "day": 90,
          "date": "2024-06-01",
          "balance": 3724.83,
          "min_balance": 2000.0
        }
      ]
    },
    {
      "request_id": "request_182",
      "user_id": "user_182",
      "requested_amount": 65714.0,
      "currency": "ZAR",
      "request_type": "debt_repayment",
      "request_text": "I'm planning an extra loan payment of ZAR 65,714. I need to complete it by 26 September 2025. Can I make the extra loan payment now without affecting essential expenses?",
      "allows_partial_payment": false,
      "request_date": "2025-08-05",
      "desired_completion_date": "2025-09-26",
      "home_currency": "ZAR",
      "current_balance": 125010.3,
      "minimum_balance_to_keep": 31100.0,
      "amount_safe_to_pay": 65714.0,
      "affordability_status": "affordable_now",
      "recommended_payment_method": "full_payment",
      "payment_plan": "2025-08-05:65714",
      "earliest_date_for_full_payment": "2025-08-05",
      "spending_changes_needed": "none",
      "decision_explanation": "Pay ZAR 65,714 today. This leaves at least ZAR 31,100 available over the next 90 days.",
      "curve": [
        {
          "day": 0,
          "date": "2025-08-05",
          "balance": 123767.3,
          "min_balance": 31100.0
        },
        {
          "day": 5,
          "date": "2025-08-10",
          "balance": 109010.19,
          "min_balance": 31100.0
        },
        {
          "day": 10,
          "date": "2025-08-15",
          "balance": 154339.95,
          "min_balance": 31100.0
        },
        {
          "day": 15,
          "date": "2025-08-20",
          "balance": 148745.14,
          "min_balance": 31100.0
        },
        {
          "day": 20,
          "date": "2025-08-25",
          "balance": 145895.53,
          "min_balance": 31100.0
        },
        {
          "day": 25,
          "date": "2025-08-30",
          "balance": 134905.59,
          "min_balance": 31100.0
        },
        {
          "day": 30,
          "date": "2025-09-04",
          "balance": 121743.49,
          "min_balance": 31100.0
        },
        {
          "day": 35,
          "date": "2025-09-09",
          "balance": 108229.38,
          "min_balance": 31100.0
        },
        {
          "day": 40,
          "date": "2025-09-14",
          "balance": 104020.3,
          "min_balance": 31100.0
        },
        {
          "day": 45,
          "date": "2025-09-19",
          "balance": 150183.41,
          "min_balance": 31100.0
        },
        {
          "day": 50,
          "date": "2025-09-24",
          "balance": 145114.72,
          "min_balance": 31100.0
        },
        {
          "day": 55,
          "date": "2025-09-29",
          "balance": 140626.96,
          "min_balance": 31100.0
        },
        {
          "day": 60,
          "date": "2025-10-04",
          "balance": 120962.68,
          "min_balance": 31100.0
        },
        {
          "day": 65,
          "date": "2025-10-09",
          "balance": 107448.57,
          "min_balance": 31100.0
        },
        {
          "day": 70,
          "date": "2025-10-14",
          "balance": 103239.49,
          "min_balance": 31100.0
        },
        {
          "day": 75,
          "date": "2025-10-19",
          "balance": 149402.6,
          "min_balance": 31100.0
        },
        {
          "day": 80,
          "date": "2025-10-24",
          "balance": 144333.91,
          "min_balance": 31100.0
        },
        {
          "day": 85,
          "date": "2025-10-29",
          "balance": 139846.15,
          "min_balance": 31100.0
        },
        {
          "day": 90,
          "date": "2025-11-03",
          "balance": 125703.87,
          "min_balance": 31100.0
        }
      ]
    },
    {
      "request_id": "request_183",
      "user_id": "user_183",
      "requested_amount": 26866000.0,
      "currency": "IDR",
      "request_type": "emergency_expense",
      "request_text": "Can I cover the full repair now and still manage my essential expenses? I need to decide by 18 June 2026. The repair I need is priced at IDR 26,866,000.",
      "allows_partial_payment": false,
      "request_date": "2026-04-07",
      "desired_completion_date": "2026-06-18",
      "home_currency": "IDR",
      "current_balance": 42156223.74,
      "minimum_balance_to_keep": 11878300.0,
      "amount_safe_to_pay": 6955699.8,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 18 June 2026. None of the available options keeps the IDR 11,878,300 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2026-04-07",
          "balance": 40190407.77,
          "min_balance": 11878300.0
        },
        {
          "day": 5,
          "date": "2026-04-12",
          "balance": 33175068.14,
          "min_balance": 11878300.0
        },
        {
          "day": 10,
          "date": "2026-04-17",
          "balance": 51009322.61,
          "min_balance": 11878300.0
        },
        {
          "day": 15,
          "date": "2026-04-22",
          "balance": 47712156.56,
          "min_balance": 11878300.0
        },
        {
          "day": 20,
          "date": "2026-04-27",
          "balance": 45681600.27,
          "min_balance": 11878300.0
        },
        {
          "day": 25,
          "date": "2026-05-02",
          "balance": 41919485.9,
          "min_balance": 11878300.0
        },
        {
          "day": 30,
          "date": "2026-05-07",
          "balance": 32919083.93,
          "min_balance": 11878300.0
        },
        {
          "day": 35,
          "date": "2026-05-12",
          "balance": 27233744.3,
          "min_balance": 11878300.0
        },
        {
          "day": 40,
          "date": "2026-05-17",
          "balance": 45067998.77,
          "min_balance": 11878300.0
        },
        {
          "day": 45,
          "date": "2026-05-22",
          "balance": 41770832.72,
          "min_balance": 11878300.0
        },
        {
          "day": 50,
          "date": "2026-05-27",
          "balance": 39740276.43,
          "min_balance": 11878300.0
        },
        {
          "day": 55,
          "date": "2026-06-01",
          "balance": 36961630.04,
          "min_balance": 11878300.0
        },
        {
          "day": 60,
          "date": "2026-06-06",
          "balance": 27613576.06,
          "min_balance": 11878300.0
        },
        {
          "day": 65,
          "date": "2026-06-11",
          "balance": 22492936.08,
          "min_balance": 11878300.0
        },
        {
          "day": 70,
          "date": "2026-06-16",
          "balance": 39126674.93,
          "min_balance": 11878300.0
        },
        {
          "day": 75,
          "date": "2026-06-21",
          "balance": 37505749.88,
          "min_balance": 11878300.0
        },
        {
          "day": 80,
          "date": "2026-06-26",
          "balance": 34189704.78,
          "min_balance": 11878300.0
        },
        {
          "day": 85,
          "date": "2026-07-01",
          "balance": 31020306.2,
          "min_balance": 11878300.0
        },
        {
          "day": 90,
          "date": "2026-07-06",
          "balance": 21672252.22,
          "min_balance": 11878300.0
        }
      ]
    },
    {
      "request_id": "request_184",
      "user_id": "user_184",
      "requested_amount": 251900.0,
      "currency": "INR",
      "request_type": "debt_repayment",
      "request_text": "The additional loan payment would be INR 251,900. Would paying this much toward the loan leave enough for the rest of the month?",
      "allows_partial_payment": false,
      "request_date": "2024-06-04",
      "desired_completion_date": "2024-07-30",
      "home_currency": "INR",
      "current_balance": 163160.0,
      "minimum_balance_to_keep": 110800.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 30 July 2024. None of the available options keeps the INR 110,800 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2024-06-04",
          "balance": 154587.76,
          "min_balance": 110800.0
        },
        {
          "day": 5,
          "date": "2024-06-09",
          "balance": 133039.99,
          "min_balance": 110800.0
        },
        {
          "day": 10,
          "date": "2024-06-14",
          "balance": 113450.37,
          "min_balance": 110800.0
        },
        {
          "day": 15,
          "date": "2024-06-19",
          "balance": 216799.99,
          "min_balance": 110800.0
        },
        {
          "day": 20,
          "date": "2024-06-24",
          "balance": 200979.03,
          "min_balance": 110800.0
        },
        {
          "day": 25,
          "date": "2024-06-29",
          "balance": 168078.4,
          "min_balance": 110800.0
        },
        {
          "day": 30,
          "date": "2024-07-04",
          "balance": 109839.48,
          "min_balance": 110800.0
        },
        {
          "day": 35,
          "date": "2024-07-09",
          "balance": 88291.71,
          "min_balance": 110800.0
        },
        {
          "day": 40,
          "date": "2024-07-14",
          "balance": 73522.09,
          "min_balance": 110800.0
        },
        {
          "day": 45,
          "date": "2024-07-19",
          "balance": 176871.71,
          "min_balance": 110800.0
        },
        {
          "day": 50,
          "date": "2024-07-24",
          "balance": 161050.75,
          "min_balance": 110800.0
        },
        {
          "day": 55,
          "date": "2024-07-29",
          "balance": 128150.12,
          "min_balance": 110800.0
        },
        {
          "day": 60,
          "date": "2024-08-03",
          "balance": 78483.44,
          "min_balance": 110800.0
        },
        {
          "day": 65,
          "date": "2024-08-08",
          "balance": 48363.43,
          "min_balance": 110800.0
        },
        {
          "day": 70,
          "date": "2024-08-13",
          "balance": 33593.81,
          "min_balance": 110800.0
        },
        {
          "day": 75,
          "date": "2024-08-18",
          "balance": 136943.43,
          "min_balance": 110800.0
        },
        {
          "day": 80,
          "date": "2024-08-23",
          "balance": 121122.47,
          "min_balance": 110800.0
        },
        {
          "day": 85,
          "date": "2024-08-28",
          "balance": 96771.77,
          "min_balance": 110800.0
        },
        {
          "day": 90,
          "date": "2024-09-02",
          "balance": 43606.19,
          "min_balance": 110800.0
        }
      ]
    },
    {
      "request_id": "request_185",
      "user_id": "user_185",
      "requested_amount": 1257.3,
      "currency": "EUR",
      "request_type": "travel",
      "request_text": "Would it be safer to book the trip now or wait until more money comes in? The booking comes to EUR 1,257.30.",
      "allows_partial_payment": true,
      "request_date": "2025-11-06",
      "desired_completion_date": "2026-01-15",
      "home_currency": "EUR",
      "current_balance": 2083.4,
      "minimum_balance_to_keep": 1300.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 15 January 2026. None of the available options keeps the EUR 1,300 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2025-11-06",
          "balance": 1946.05,
          "min_balance": 1300.0
        },
        {
          "day": 5,
          "date": "2025-11-11",
          "balance": 1629.96,
          "min_balance": 1300.0
        },
        {
          "day": 10,
          "date": "2025-11-16",
          "balance": 2892.98,
          "min_balance": 1300.0
        },
        {
          "day": 15,
          "date": "2025-11-21",
          "balance": 2767.14,
          "min_balance": 1300.0
        },
        {
          "day": 20,
          "date": "2025-11-26",
          "balance": 2543.89,
          "min_balance": 1300.0
        },
        {
          "day": 25,
          "date": "2025-12-01",
          "balance": 2349.94,
          "min_balance": 1300.0
        },
        {
          "day": 30,
          "date": "2025-12-06",
          "balance": 1407.6,
          "min_balance": 1300.0
        },
        {
          "day": 35,
          "date": "2025-12-11",
          "balance": 1091.51,
          "min_balance": 1300.0
        },
        {
          "day": 40,
          "date": "2025-12-16",
          "balance": 2354.53,
          "min_balance": 1300.0
        },
        {
          "day": 45,
          "date": "2025-12-21",
          "balance": 2228.69,
          "min_balance": 1300.0
        },
        {
          "day": 50,
          "date": "2025-12-26",
          "balance": 2005.44,
          "min_balance": 1300.0
        },
        {
          "day": 55,
          "date": "2025-12-31",
          "balance": 1811.49,
          "min_balance": 1300.0
        },
        {
          "day": 60,
          "date": "2026-01-05",
          "balance": 1006.5,
          "min_balance": 1300.0
        },
        {
          "day": 65,
          "date": "2026-01-10",
          "balance": 655.06,
          "min_balance": 1300.0
        },
        {
          "day": 70,
          "date": "2026-01-15",
          "balance": 1949.31,
          "min_balance": 1300.0
        },
        {
          "day": 75,
          "date": "2026-01-20",
          "balance": 1766.0,
          "min_balance": 1300.0
        },
        {
          "day": 80,
          "date": "2026-01-25",
          "balance": 1549.44,
          "min_balance": 1300.0
        },
        {
          "day": 85,
          "date": "2026-01-30",
          "balance": 1273.04,
          "min_balance": 1300.0
        },
        {
          "day": 90,
          "date": "2026-02-04",
          "balance": 586.66,
          "min_balance": 1300.0
        }
      ]
    },
    {
      "request_id": "request_186",
      "user_id": "user_186",
      "requested_amount": 26554.0,
      "currency": "ZAR",
      "request_type": "investment",
      "request_text": "I'm thinking of investing ZAR 26,554. I need to complete it by 15 March 2026. Is it safer to invest now, invest a smaller amount, or wait?",
      "allows_partial_payment": false,
      "request_date": "2026-01-03",
      "desired_completion_date": "2026-03-15",
      "home_currency": "ZAR",
      "current_balance": 44863.5,
      "minimum_balance_to_keep": 22000.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 15 March 2026. None of the available options keeps the ZAR 22,000 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2026-01-03",
          "balance": 37515.5,
          "min_balance": 22000.0
        },
        {
          "day": 5,
          "date": "2026-01-08",
          "balance": 31651.83,
          "min_balance": 22000.0
        },
        {
          "day": 10,
          "date": "2026-01-13",
          "balance": 25608.61,
          "min_balance": 22000.0
        },
        {
          "day": 15,
          "date": "2026-01-18",
          "balance": 52911.88,
          "min_balance": 22000.0
        },
        {
          "day": 20,
          "date": "2026-01-23",
          "balance": 50743.73,
          "min_balance": 22000.0
        },
        {
          "day": 25,
          "date": "2026-01-28",
          "balance": 44644.32,
          "min_balance": 22000.0
        },
        {
          "day": 30,
          "date": "2026-02-02",
          "balance": 38491.97,
          "min_balance": 22000.0
        },
        {
          "day": 35,
          "date": "2026-02-07",
          "balance": 27131.08,
          "min_balance": 22000.0
        },
        {
          "day": 40,
          "date": "2026-02-12",
          "balance": 21058.43,
          "min_balance": 22000.0
        },
        {
          "day": 45,
          "date": "2026-02-17",
          "balance": 47826.54,
          "min_balance": 22000.0
        },
        {
          "day": 50,
          "date": "2026-02-22",
          "balance": 44372.2,
          "min_balance": 22000.0
        },
        {
          "day": 55,
          "date": "2026-02-27",
          "balance": 42278.15,
          "min_balance": 22000.0
        },
        {
          "day": 60,
          "date": "2026-03-04",
          "balance": 24250.06,
          "min_balance": 22000.0
        },
        {
          "day": 65,
          "date": "2026-03-09",
          "balance": 16343.9,
          "min_balance": 22000.0
        },
        {
          "day": 70,
          "date": "2026-03-14",
          "balance": 12106.64,
          "min_balance": 22000.0
        },
        {
          "day": 75,
          "date": "2026-03-19",
          "balance": 40168.82,
          "min_balance": 22000.0
        },
        {
          "day": 80,
          "date": "2026-03-24",
          "balance": 37117.54,
          "min_balance": 22000.0
        },
        {
          "day": 85,
          "date": "2026-03-29",
          "balance": 30234.24,
          "min_balance": 22000.0
        },
        {
          "day": 90,
          "date": "2026-04-03",
          "balance": 18400.91,
          "min_balance": 22000.0
        }
      ]
    },
    {
      "request_id": "request_187",
      "user_id": "user_187",
      "requested_amount": 187500.0,
      "currency": "INR",
      "request_type": "other",
      "request_text": "Would committing to the membership leave enough for my upcoming bills? I need to decide by 15 November 2024. I'm considering a yearly membership for INR 187,500.",
      "allows_partial_payment": true,
      "request_date": "2024-09-05",
      "desired_completion_date": "2024-11-15",
      "home_currency": "INR",
      "current_balance": 195735.0,
      "minimum_balance_to_keep": 128300.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 15 November 2024. None of the available options keeps the INR 128,300 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2024-09-05",
          "balance": 186606.26,
          "min_balance": 128300.0
        },
        {
          "day": 5,
          "date": "2024-09-10",
          "balance": 176088.58,
          "min_balance": 128300.0
        },
        {
          "day": 10,
          "date": "2024-09-15",
          "balance": 270329.56,
          "min_balance": 128300.0
        },
        {
          "day": 15,
          "date": "2024-09-20",
          "balance": 255285.45,
          "min_balance": 128300.0
        },
        {
          "day": 20,
          "date": "2024-09-25",
          "balance": 248219.15,
          "min_balance": 128300.0
        },
        {
          "day": 25,
          "date": "2024-09-30",
          "balance": 224094.76,
          "min_balance": 128300.0
        },
        {
          "day": 30,
          "date": "2024-10-05",
          "balance": 165244.73,
          "min_balance": 128300.0
        },
        {
          "day": 35,
          "date": "2024-10-10",
          "balance": 154727.05,
          "min_balance": 128300.0
        },
        {
          "day": 40,
          "date": "2024-10-15",
          "balance": 248968.03,
          "min_balance": 128300.0
        },
        {
          "day": 45,
          "date": "2024-10-20",
          "balance": 233923.92,
          "min_balance": 128300.0
        },
        {
          "day": 50,
          "date": "2024-10-25",
          "balance": 226857.62,
          "min_balance": 128300.0
        },
        {
          "day": 55,
          "date": "2024-10-30",
          "balance": 202733.23,
          "min_balance": 128300.0
        },
        {
          "day": 60,
          "date": "2024-11-04",
          "balance": 153011.94,
          "min_balance": 128300.0
        },
        {
          "day": 65,
          "date": "2024-11-09",
          "balance": 133365.52,
          "min_balance": 128300.0
        },
        {
          "day": 70,
          "date": "2024-11-14",
          "balance": 97619.07,
          "min_balance": 128300.0
        },
        {
          "day": 75,
          "date": "2024-11-19",
          "balance": 220705.43,
          "min_balance": 128300.0
        },
        {
          "day": 80,
          "date": "2024-11-24",
          "balance": 205496.09,
          "min_balance": 128300.0
        },
        {
          "day": 85,
          "date": "2024-11-29",
          "balance": 184814.51,
          "min_balance": 128300.0
        },
        {
          "day": 90,
          "date": "2024-12-04",
          "balance": 131650.41,
          "min_balance": 128300.0
        }
      ]
    },
    {
      "request_id": "request_188",
      "user_id": "user_188",
      "requested_amount": 2464.0,
      "currency": "EUR",
      "request_type": "family_transfer",
      "request_text": "I want to send EUR 2,464 to my family. Can I complete this family transfer and still keep my minimum balance?",
      "allows_partial_payment": false,
      "request_date": "2025-02-07",
      "desired_completion_date": "2025-03-04",
      "home_currency": "EUR",
      "current_balance": 1485.3,
      "minimum_balance_to_keep": 900.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 4 March 2025. None of the available options keeps the EUR 900 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2025-02-07",
          "balance": 1353.39,
          "min_balance": 900.0
        },
        {
          "day": 5,
          "date": "2025-02-12",
          "balance": 1005.5,
          "min_balance": 900.0
        },
        {
          "day": 10,
          "date": "2025-02-17",
          "balance": 2258.54,
          "min_balance": 900.0
        },
        {
          "day": 15,
          "date": "2025-02-22",
          "balance": 2101.39,
          "min_balance": 900.0
        },
        {
          "day": 20,
          "date": "2025-02-27",
          "balance": 2029.25,
          "min_balance": 900.0
        },
        {
          "day": 25,
          "date": "2025-03-04",
          "balance": 970.26,
          "min_balance": 900.0
        },
        {
          "day": 30,
          "date": "2025-03-09",
          "balance": 714.79,
          "min_balance": 900.0
        },
        {
          "day": 35,
          "date": "2025-03-14",
          "balance": 366.9,
          "min_balance": 900.0
        },
        {
          "day": 40,
          "date": "2025-03-19",
          "balance": 1587.6,
          "min_balance": 900.0
        },
        {
          "day": 45,
          "date": "2025-03-24",
          "balance": 1390.65,
          "min_balance": 900.0
        },
        {
          "day": 50,
          "date": "2025-03-29",
          "balance": 1199.9,
          "min_balance": 900.0
        },
        {
          "day": 55,
          "date": "2025-04-03",
          "balance": 517.33,
          "min_balance": 900.0
        },
        {
          "day": 60,
          "date": "2025-04-08",
          "balance": 76.19,
          "min_balance": 900.0
        },
        {
          "day": 65,
          "date": "2025-04-13",
          "balance": -271.7,
          "min_balance": 900.0
        },
        {
          "day": 70,
          "date": "2025-04-18",
          "balance": 981.34,
          "min_balance": 900.0
        },
        {
          "day": 75,
          "date": "2025-04-23",
          "balance": 824.19,
          "min_balance": 900.0
        },
        {
          "day": 80,
          "date": "2025-04-28",
          "balance": 642.55,
          "min_balance": 900.0
        },
        {
          "day": 85,
          "date": "2025-05-03",
          "balance": -121.27,
          "min_balance": 900.0
        },
        {
          "day": 90,
          "date": "2025-05-08",
          "balance": -562.41,
          "min_balance": 900.0
        }
      ]
    },
    {
      "request_id": "request_189",
      "user_id": "user_189",
      "requested_amount": 488.4,
      "currency": "EUR",
      "request_type": "debt_repayment",
      "request_text": "Would paying this much toward the loan leave enough for the rest of the month? I'm planning an extra loan payment of EUR 488.40.",
      "allows_partial_payment": true,
      "request_date": "2026-07-04",
      "desired_completion_date": "2026-08-14",
      "home_currency": "EUR",
      "current_balance": 1147.66,
      "minimum_balance_to_keep": 400.0,
      "amount_safe_to_pay": 314.84,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 14 August 2026. None of the available options keeps the EUR 400 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2026-07-04",
          "balance": 1147.66,
          "min_balance": 400.0
        },
        {
          "day": 5,
          "date": "2026-07-09",
          "balance": 1015.97,
          "min_balance": 400.0
        },
        {
          "day": 10,
          "date": "2026-07-14",
          "balance": 947.84,
          "min_balance": 400.0
        },
        {
          "day": 15,
          "date": "2026-07-19",
          "balance": 1330.13,
          "min_balance": 400.0
        },
        {
          "day": 20,
          "date": "2026-07-24",
          "balance": 1271.2,
          "min_balance": 400.0
        },
        {
          "day": 25,
          "date": "2026-07-29",
          "balance": 1124.01,
          "min_balance": 400.0
        },
        {
          "day": 30,
          "date": "2026-08-03",
          "balance": 1031.16,
          "min_balance": 400.0
        },
        {
          "day": 35,
          "date": "2026-08-08",
          "balance": 915.47,
          "min_balance": 400.0
        },
        {
          "day": 40,
          "date": "2026-08-13",
          "balance": 831.34,
          "min_balance": 400.0
        },
        {
          "day": 45,
          "date": "2026-08-18",
          "balance": 1213.63,
          "min_balance": 400.0
        },
        {
          "day": 50,
          "date": "2026-08-23",
          "balance": 1177.48,
          "min_balance": 400.0
        },
        {
          "day": 55,
          "date": "2026-08-28",
          "balance": 1049.64,
          "min_balance": 400.0
        },
        {
          "day": 60,
          "date": "2026-09-02",
          "balance": 962.66,
          "min_balance": 400.0
        },
        {
          "day": 65,
          "date": "2026-09-07",
          "balance": 798.97,
          "min_balance": 400.0
        },
        {
          "day": 70,
          "date": "2026-09-12",
          "balance": 735.35,
          "min_balance": 400.0
        },
        {
          "day": 75,
          "date": "2026-09-17",
          "balance": 1132.41,
          "min_balance": 400.0
        },
        {
          "day": 80,
          "date": "2026-09-22",
          "balance": 1060.98,
          "min_balance": 400.0
        },
        {
          "day": 85,
          "date": "2026-09-27",
          "balance": 955.15,
          "min_balance": 400.0
        },
        {
          "day": 90,
          "date": "2026-10-02",
          "balance": 846.16,
          "min_balance": 400.0
        }
      ]
    },
    {
      "request_id": "request_190",
      "user_id": "user_190",
      "requested_amount": 2557.5,
      "currency": "EUR",
      "request_type": "purchase",
      "request_text": "The laptop I'm looking at is EUR 2,557.50. I need to complete it by 15 February 2025. How much of the laptop price can I safely cover today?",
      "allows_partial_payment": true,
      "request_date": "2024-12-06",
      "desired_completion_date": "2025-02-15",
      "home_currency": "EUR",
      "current_balance": 3155.8,
      "minimum_balance_to_keep": 1600.0,
      "amount_safe_to_pay": 444.04,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 15 February 2025. None of the available options keeps the EUR 1,600 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2024-12-06",
          "balance": 3155.8,
          "min_balance": 1600.0
        },
        {
          "day": 5,
          "date": "2024-12-11",
          "balance": 2749.31,
          "min_balance": 1600.0
        },
        {
          "day": 10,
          "date": "2024-12-16",
          "balance": 7579.26,
          "min_balance": 1600.0
        },
        {
          "day": 15,
          "date": "2024-12-21",
          "balance": 7220.85,
          "min_balance": 1600.0
        },
        {
          "day": 20,
          "date": "2024-12-26",
          "balance": 6912.24,
          "min_balance": 1600.0
        },
        {
          "day": 25,
          "date": "2024-12-31",
          "balance": 6654.78,
          "min_balance": 1600.0
        },
        {
          "day": 30,
          "date": "2025-01-05",
          "balance": 5337.66,
          "min_balance": 1600.0
        },
        {
          "day": 35,
          "date": "2025-01-10",
          "balance": 4931.17,
          "min_balance": 1600.0
        },
        {
          "day": 40,
          "date": "2025-01-15",
          "balance": 7004.7,
          "min_balance": 1600.0
        },
        {
          "day": 45,
          "date": "2025-01-20",
          "balance": 6776.53,
          "min_balance": 1600.0
        },
        {
          "day": 50,
          "date": "2025-01-25",
          "balance": 6363.04,
          "min_balance": 1600.0
        },
        {
          "day": 55,
          "date": "2025-01-30",
          "balance": 6082.09,
          "min_balance": 1600.0
        },
        {
          "day": 60,
          "date": "2025-02-04",
          "balance": 4877.7,
          "min_balance": 1600.0
        },
        {
          "day": 65,
          "date": "2025-02-09",
          "balance": 4329.03,
          "min_balance": 1600.0
        },
        {
          "day": 70,
          "date": "2025-02-14",
          "balance": 3558.76,
          "min_balance": 1600.0
        },
        {
          "day": 75,
          "date": "2025-02-19",
          "balance": 6109.39,
          "min_balance": 1600.0
        },
        {
          "day": 80,
          "date": "2025-02-24",
          "balance": 5695.9,
          "min_balance": 1600.0
        },
        {
          "day": 85,
          "date": "2025-03-01",
          "balance": 5236.06,
          "min_balance": 1600.0
        },
        {
          "day": 90,
          "date": "2025-03-06",
          "balance": 4003.38,
          "min_balance": 1600.0
        }
      ]
    },
    {
      "request_id": "request_191",
      "user_id": "user_191",
      "requested_amount": 664.4,
      "currency": "EUR",
      "request_type": "investment",
      "request_text": "Is it safer to invest now, invest a smaller amount, or wait? I need to decide by 17 July 2025. The amount I would like to invest is EUR 664.40.",
      "allows_partial_payment": false,
      "request_date": "2025-05-03",
      "desired_completion_date": "2025-07-17",
      "home_currency": "EUR",
      "current_balance": 1591.06,
      "minimum_balance_to_keep": 500.0,
      "amount_safe_to_pay": 530.97,
      "affordability_status": "affordable_later",
      "recommended_payment_method": "wait",
      "payment_plan": "2025-07-15:664.40",
      "earliest_date_for_full_payment": "2025-07-15",
      "spending_changes_needed": "none",
      "decision_explanation": "Pay EUR 664.40 in full on 15 July 2025. Paying earlier would take the balance below the EUR 500 minimum.",
      "curve": [
        {
          "day": 0,
          "date": "2025-05-03",
          "balance": 1591.06,
          "min_balance": 500.0
        },
        {
          "day": 5,
          "date": "2025-05-08",
          "balance": 1372.49,
          "min_balance": 500.0
        },
        {
          "day": 10,
          "date": "2025-05-13",
          "balance": 1080.33,
          "min_balance": 500.0
        },
        {
          "day": 15,
          "date": "2025-05-18",
          "balance": 1780.46,
          "min_balance": 500.0
        },
        {
          "day": 20,
          "date": "2025-05-23",
          "balance": 1741.46,
          "min_balance": 500.0
        },
        {
          "day": 25,
          "date": "2025-05-28",
          "balance": 1648.38,
          "min_balance": 500.0
        },
        {
          "day": 30,
          "date": "2025-06-02",
          "balance": 1568.38,
          "min_balance": 500.0
        },
        {
          "day": 35,
          "date": "2025-06-07",
          "balance": 1456.99,
          "min_balance": 500.0
        },
        {
          "day": 40,
          "date": "2025-06-12",
          "balance": 1072.74,
          "min_balance": 500.0
        },
        {
          "day": 45,
          "date": "2025-06-17",
          "balance": 1790.14,
          "min_balance": 500.0
        },
        {
          "day": 50,
          "date": "2025-06-22",
          "balance": 1738.01,
          "min_balance": 500.0
        },
        {
          "day": 55,
          "date": "2025-06-27",
          "balance": 1658.42,
          "min_balance": 500.0
        },
        {
          "day": 60,
          "date": "2025-07-02",
          "balance": 1545.7,
          "min_balance": 500.0
        },
        {
          "day": 65,
          "date": "2025-07-07",
          "balance": 1434.31,
          "min_balance": 500.0
        },
        {
          "day": 70,
          "date": "2025-07-12",
          "balance": 1050.06,
          "min_balance": 500.0
        },
        {
          "day": 75,
          "date": "2025-07-17",
          "balance": 1767.46,
          "min_balance": 500.0
        },
        {
          "day": 80,
          "date": "2025-07-22",
          "balance": 1715.33,
          "min_balance": 500.0
        },
        {
          "day": 85,
          "date": "2025-07-27",
          "balance": 1635.74,
          "min_balance": 500.0
        },
        {
          "day": 90,
          "date": "2025-08-01",
          "balance": 1566.4,
          "min_balance": 500.0
        }
      ]
    },
    {
      "request_id": "request_192",
      "user_id": "user_192",
      "requested_amount": 2046.0,
      "currency": "USD",
      "request_type": "education",
      "request_text": "The course I want to take is USD 2,046. Can I pay for the course before enrolment closes?",
      "allows_partial_payment": false,
      "request_date": "2026-04-05",
      "desired_completion_date": "2026-05-11",
      "home_currency": "USD",
      "current_balance": 1384.8,
      "minimum_balance_to_keep": 1000.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 11 May 2026. None of the available options keeps the USD 1,000 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2026-04-05",
          "balance": 1307.99,
          "min_balance": 1000.0
        },
        {
          "day": 5,
          "date": "2026-04-10",
          "balance": 1087.97,
          "min_balance": 1000.0
        },
        {
          "day": 10,
          "date": "2026-04-15",
          "balance": 2546.37,
          "min_balance": 1000.0
        },
        {
          "day": 15,
          "date": "2026-04-20",
          "balance": 2408.92,
          "min_balance": 1000.0
        },
        {
          "day": 20,
          "date": "2026-04-25",
          "balance": 2408.92,
          "min_balance": 1000.0
        },
        {
          "day": 25,
          "date": "2026-04-30",
          "balance": 2270.37,
          "min_balance": 1000.0
        },
        {
          "day": 30,
          "date": "2026-05-05",
          "balance": 1745.14,
          "min_balance": 1000.0
        },
        {
          "day": 35,
          "date": "2026-05-10",
          "balance": 1525.12,
          "min_balance": 1000.0
        },
        {
          "day": 40,
          "date": "2026-05-15",
          "balance": 2169.92,
          "min_balance": 1000.0
        },
        {
          "day": 45,
          "date": "2026-05-20",
          "balance": 2032.47,
          "min_balance": 1000.0
        },
        {
          "day": 50,
          "date": "2026-05-25",
          "balance": 2032.47,
          "min_balance": 1000.0
        },
        {
          "day": 55,
          "date": "2026-05-30",
          "balance": 1893.92,
          "min_balance": 1000.0
        },
        {
          "day": 60,
          "date": "2026-06-04",
          "balance": 1445.5,
          "min_balance": 1000.0
        },
        {
          "day": 65,
          "date": "2026-06-09",
          "balance": 1148.67,
          "min_balance": 1000.0
        },
        {
          "day": 70,
          "date": "2026-06-14",
          "balance": 979.87,
          "min_balance": 1000.0
        },
        {
          "day": 75,
          "date": "2026-06-19",
          "balance": 1656.02,
          "min_balance": 1000.0
        },
        {
          "day": 80,
          "date": "2026-06-24",
          "balance": 1656.02,
          "min_balance": 1000.0
        },
        {
          "day": 85,
          "date": "2026-06-29",
          "balance": 1517.47,
          "min_balance": 1000.0
        },
        {
          "day": 90,
          "date": "2026-07-04",
          "balance": 1069.05,
          "min_balance": 1000.0
        }
      ]
    },
    {
      "request_id": "request_193",
      "user_id": "user_193",
      "requested_amount": 1212.2,
      "currency": "EUR",
      "request_type": "other",
      "request_text": "Can I take the membership and still keep my minimum balance intact? The annual plan comes to EUR 1,212.20.",
      "allows_partial_payment": false,
      "request_date": "2024-03-07",
      "desired_completion_date": "2024-05-28",
      "home_currency": "EUR",
      "current_balance": 1310.62,
      "minimum_balance_to_keep": 1000.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 28 May 2024. None of the available options keeps the EUR 1,000 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2024-03-07",
          "balance": 1255.58,
          "min_balance": 1000.0
        },
        {
          "day": 5,
          "date": "2024-03-12",
          "balance": 1057.16,
          "min_balance": 1000.0
        },
        {
          "day": 10,
          "date": "2024-03-17",
          "balance": 2614.61,
          "min_balance": 1000.0
        },
        {
          "day": 15,
          "date": "2024-03-22",
          "balance": 2248.41,
          "min_balance": 1000.0
        },
        {
          "day": 20,
          "date": "2024-03-27",
          "balance": 2027.86,
          "min_balance": 1000.0
        },
        {
          "day": 25,
          "date": "2024-04-01",
          "balance": 1821.2,
          "min_balance": 1000.0
        },
        {
          "day": 30,
          "date": "2024-04-06",
          "balance": 1062.12,
          "min_balance": 1000.0
        },
        {
          "day": 35,
          "date": "2024-04-11",
          "balance": 881.07,
          "min_balance": 1000.0
        },
        {
          "day": 40,
          "date": "2024-04-16",
          "balance": 2366.11,
          "min_balance": 1000.0
        },
        {
          "day": 45,
          "date": "2024-04-21",
          "balance": 1999.91,
          "min_balance": 1000.0
        },
        {
          "day": 50,
          "date": "2024-04-26",
          "balance": 1826.13,
          "min_balance": 1000.0
        },
        {
          "day": 55,
          "date": "2024-05-01",
          "balance": 1572.7,
          "min_balance": 1000.0
        },
        {
          "day": 60,
          "date": "2024-05-06",
          "balance": 813.62,
          "min_balance": 1000.0
        },
        {
          "day": 65,
          "date": "2024-05-11",
          "balance": 632.57,
          "min_balance": 1000.0
        },
        {
          "day": 70,
          "date": "2024-05-16",
          "balance": 2117.61,
          "min_balance": 1000.0
        },
        {
          "day": 75,
          "date": "2024-05-21",
          "balance": 1751.41,
          "min_balance": 1000.0
        },
        {
          "day": 80,
          "date": "2024-05-26",
          "balance": 1577.63,
          "min_balance": 1000.0
        },
        {
          "day": 85,
          "date": "2024-05-31",
          "balance": 1411.95,
          "min_balance": 1000.0
        },
        {
          "day": 90,
          "date": "2024-06-05",
          "balance": 748.79,
          "min_balance": 1000.0
        }
      ]
    },
    {
      "request_id": "request_194",
      "user_id": "user_194",
      "requested_amount": 132800.0,
      "currency": "INR",
      "request_type": "housing",
      "request_text": "The move requires a INR 132,800 deposit. I need to complete it by 23 October 2025. Can I cover this deposit without putting rent and regular bills at risk?",
      "allows_partial_payment": false,
      "request_date": "2025-08-04",
      "desired_completion_date": "2025-10-23",
      "home_currency": "INR",
      "current_balance": 208630.0,
      "minimum_balance_to_keep": 113600.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 23 October 2025. None of the available options keeps the INR 113,600 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2025-08-04",
          "balance": 208630.0,
          "min_balance": 113600.0
        },
        {
          "day": 5,
          "date": "2025-08-09",
          "balance": 186007.19,
          "min_balance": 113600.0
        },
        {
          "day": 10,
          "date": "2025-08-14",
          "balance": 138946.61,
          "min_balance": 113600.0
        },
        {
          "day": 15,
          "date": "2025-08-19",
          "balance": 129386.82,
          "min_balance": 113600.0
        },
        {
          "day": 20,
          "date": "2025-08-24",
          "balance": 258684.94,
          "min_balance": 113600.0
        },
        {
          "day": 25,
          "date": "2025-08-29",
          "balance": 251343.8,
          "min_balance": 113600.0
        },
        {
          "day": 30,
          "date": "2025-09-03",
          "balance": 193706.38,
          "min_balance": 113600.0
        },
        {
          "day": 35,
          "date": "2025-09-08",
          "balance": 171083.57,
          "min_balance": 113600.0
        },
        {
          "day": 40,
          "date": "2025-09-13",
          "balance": 133802.97,
          "min_balance": 113600.0
        },
        {
          "day": 45,
          "date": "2025-09-18",
          "balance": 117352.8,
          "min_balance": 113600.0
        },
        {
          "day": 50,
          "date": "2025-09-23",
          "balance": 243761.32,
          "min_balance": 113600.0
        },
        {
          "day": 55,
          "date": "2025-09-28",
          "balance": 236420.18,
          "min_balance": 113600.0
        },
        {
          "day": 60,
          "date": "2025-10-03",
          "balance": 178782.76,
          "min_balance": 113600.0
        },
        {
          "day": 65,
          "date": "2025-10-08",
          "balance": 156159.95,
          "min_balance": 113600.0
        },
        {
          "day": 70,
          "date": "2025-10-13",
          "balance": 118879.35,
          "min_balance": 113600.0
        },
        {
          "day": 75,
          "date": "2025-10-18",
          "balance": 102429.18,
          "min_balance": 113600.0
        },
        {
          "day": 80,
          "date": "2025-10-23",
          "balance": 228837.7,
          "min_balance": 113600.0
        },
        {
          "day": 85,
          "date": "2025-10-28",
          "balance": 221496.56,
          "min_balance": 113600.0
        },
        {
          "day": 90,
          "date": "2025-11-02",
          "balance": 209658.19,
          "min_balance": 113600.0
        }
      ]
    },
    {
      "request_id": "request_195",
      "user_id": "user_195",
      "requested_amount": 1170.4,
      "currency": "EUR",
      "request_type": "purchase",
      "request_text": "How much of the laptop price can I safely cover today? I need to decide by 11 March 2026. The laptop costs EUR 1,170.40.",
      "allows_partial_payment": true,
      "request_date": "2026-01-06",
      "desired_completion_date": "2026-03-11",
      "home_currency": "EUR",
      "current_balance": 2011.18,
      "minimum_balance_to_keep": 700.0,
      "amount_safe_to_pay": 378.55,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 11 March 2026. None of the available options keeps the EUR 700 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2026-01-06",
          "balance": 2011.18,
          "min_balance": 700.0
        },
        {
          "day": 5,
          "date": "2026-01-11",
          "balance": 1806.86,
          "min_balance": 700.0
        },
        {
          "day": 10,
          "date": "2026-01-16",
          "balance": 2691.6,
          "min_balance": 700.0
        },
        {
          "day": 15,
          "date": "2026-01-21",
          "balance": 2652.22,
          "min_balance": 700.0
        },
        {
          "day": 20,
          "date": "2026-01-26",
          "balance": 2472.88,
          "min_balance": 700.0
        },
        {
          "day": 25,
          "date": "2026-01-31",
          "balance": 2296.11,
          "min_balance": 700.0
        },
        {
          "day": 30,
          "date": "2026-02-05",
          "balance": 1784.04,
          "min_balance": 700.0
        },
        {
          "day": 35,
          "date": "2026-02-10",
          "balance": 1603.72,
          "min_balance": 700.0
        },
        {
          "day": 40,
          "date": "2026-02-15",
          "balance": 2492.26,
          "min_balance": 700.0
        },
        {
          "day": 45,
          "date": "2026-02-20",
          "balance": 2425.08,
          "min_balance": 700.0
        },
        {
          "day": 50,
          "date": "2026-02-25",
          "balance": 2245.74,
          "min_balance": 700.0
        },
        {
          "day": 55,
          "date": "2026-03-02",
          "balance": 1992.06,
          "min_balance": 700.0
        },
        {
          "day": 60,
          "date": "2026-03-07",
          "balance": 1556.9,
          "min_balance": 700.0
        },
        {
          "day": 65,
          "date": "2026-03-12",
          "balance": 1242.01,
          "min_balance": 700.0
        },
        {
          "day": 70,
          "date": "2026-03-17",
          "balance": 2237.32,
          "min_balance": 700.0
        },
        {
          "day": 75,
          "date": "2026-03-22",
          "balance": 2122.32,
          "min_balance": 700.0
        },
        {
          "day": 80,
          "date": "2026-03-27",
          "balance": 1942.28,
          "min_balance": 700.0
        },
        {
          "day": 85,
          "date": "2026-04-01",
          "balance": 1789.97,
          "min_balance": 700.0
        },
        {
          "day": 90,
          "date": "2026-04-06",
          "balance": 1329.76,
          "min_balance": 700.0
        }
      ]
    },
    {
      "request_id": "request_196",
      "user_id": "user_196",
      "requested_amount": 762.3,
      "currency": "EUR",
      "request_type": "purchase",
      "request_text": "I've found a laptop for EUR 762.30. Would paying for the laptop today leave enough for my regular expenses?",
      "allows_partial_payment": false,
      "request_date": "2024-06-03",
      "desired_completion_date": "2024-07-05",
      "home_currency": "EUR",
      "current_balance": 1575.65,
      "minimum_balance_to_keep": 500.0,
      "amount_safe_to_pay": 762.3,
      "affordability_status": "affordable_now",
      "recommended_payment_method": "full_payment",
      "payment_plan": "2024-06-03:762.30",
      "earliest_date_for_full_payment": "2024-06-03",
      "spending_changes_needed": "none",
      "decision_explanation": "Pay EUR 762.30 today. This leaves at least EUR 500 available over the next 90 days.",
      "curve": [
        {
          "day": 0,
          "date": "2024-06-03",
          "balance": 1575.65,
          "min_balance": 500.0
        },
        {
          "day": 5,
          "date": "2024-06-08",
          "balance": 1463.93,
          "min_balance": 500.0
        },
        {
          "day": 10,
          "date": "2024-06-13",
          "balance": 1320.64,
          "min_balance": 500.0
        },
        {
          "day": 15,
          "date": "2024-06-18",
          "balance": 2889.52,
          "min_balance": 500.0
        },
        {
          "day": 20,
          "date": "2024-06-23",
          "balance": 2837.05,
          "min_balance": 500.0
        },
        {
          "day": 25,
          "date": "2024-06-28",
          "balance": 2668.66,
          "min_balance": 500.0
        },
        {
          "day": 30,
          "date": "2024-07-03",
          "balance": 2325.04,
          "min_balance": 500.0
        },
        {
          "day": 35,
          "date": "2024-07-08",
          "balance": 2213.32,
          "min_balance": 500.0
        },
        {
          "day": 40,
          "date": "2024-07-13",
          "balance": 2070.03,
          "min_balance": 500.0
        },
        {
          "day": 45,
          "date": "2024-07-18",
          "balance": 2824.91,
          "min_balance": 500.0
        },
        {
          "day": 50,
          "date": "2024-07-23",
          "balance": 2772.44,
          "min_balance": 500.0
        },
        {
          "day": 55,
          "date": "2024-07-28",
          "balance": 2604.05,
          "min_balance": 500.0
        },
        {
          "day": 60,
          "date": "2024-08-02",
          "balance": 2260.43,
          "min_balance": 500.0
        },
        {
          "day": 65,
          "date": "2024-08-07",
          "balance": 2148.71,
          "min_balance": 500.0
        },
        {
          "day": 70,
          "date": "2024-08-12",
          "balance": 2019.13,
          "min_balance": 500.0
        },
        {
          "day": 75,
          "date": "2024-08-17",
          "balance": 2760.3,
          "min_balance": 500.0
        },
        {
          "day": 80,
          "date": "2024-08-22",
          "balance": 2720.66,
          "min_balance": 500.0
        },
        {
          "day": 85,
          "date": "2024-08-27",
          "balance": 2539.44,
          "min_balance": 500.0
        },
        {
          "day": 90,
          "date": "2024-09-01",
          "balance": 2243.37,
          "min_balance": 500.0
        }
      ]
    },
    {
      "request_id": "request_197",
      "user_id": "user_197",
      "requested_amount": 50939000.0,
      "currency": "IDR",
      "request_type": "family_transfer",
      "request_text": "Can I make the full transfer without falling short on my own bills? The transfer I have in mind is IDR 50,939,000.",
      "allows_partial_payment": true,
      "request_date": "2025-11-05",
      "desired_completion_date": "2026-01-21",
      "home_currency": "IDR",
      "current_balance": 96081218.26,
      "minimum_balance_to_keep": 26245900.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 21 January 2026. None of the available options keeps the IDR 26,245,900 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2025-11-05",
          "balance": 96081218.26,
          "min_balance": 26245900.0
        },
        {
          "day": 5,
          "date": "2025-11-10",
          "balance": 87386538.66,
          "min_balance": 26245900.0
        },
        {
          "day": 10,
          "date": "2025-11-15",
          "balance": 94768195.65,
          "min_balance": 26245900.0
        },
        {
          "day": 15,
          "date": "2025-11-20",
          "balance": 87728446.8,
          "min_balance": 26245900.0
        },
        {
          "day": 20,
          "date": "2025-11-25",
          "balance": 84696376.87,
          "min_balance": 26245900.0
        },
        {
          "day": 25,
          "date": "2025-11-30",
          "balance": 78884617.18,
          "min_balance": 26245900.0
        },
        {
          "day": 30,
          "date": "2025-12-05",
          "balance": 62348841.5,
          "min_balance": 26245900.0
        },
        {
          "day": 35,
          "date": "2025-12-10",
          "balance": 53654161.9,
          "min_balance": 26245900.0
        },
        {
          "day": 40,
          "date": "2025-12-15",
          "balance": 61035818.89,
          "min_balance": 26245900.0
        },
        {
          "day": 45,
          "date": "2025-12-20",
          "balance": 53996070.04,
          "min_balance": 26245900.0
        },
        {
          "day": 50,
          "date": "2025-12-25",
          "balance": 50964000.11,
          "min_balance": 26245900.0
        },
        {
          "day": 55,
          "date": "2025-12-30",
          "balance": 45152240.42,
          "min_balance": 26245900.0
        },
        {
          "day": 60,
          "date": "2026-01-04",
          "balance": 28616464.74,
          "min_balance": 26245900.0
        },
        {
          "day": 65,
          "date": "2026-01-09",
          "balance": 19921785.14,
          "min_balance": 26245900.0
        },
        {
          "day": 70,
          "date": "2026-01-14",
          "balance": 8801086.28,
          "min_balance": 26245900.0
        },
        {
          "day": 75,
          "date": "2026-01-19",
          "balance": 23721361.23,
          "min_balance": 26245900.0
        },
        {
          "day": 80,
          "date": "2026-01-24",
          "balance": 17231623.35,
          "min_balance": 26245900.0
        },
        {
          "day": 85,
          "date": "2026-01-29",
          "balance": 12271743.84,
          "min_balance": 26245900.0
        },
        {
          "day": 90,
          "date": "2026-02-03",
          "balance": -2703586.9,
          "min_balance": 26245900.0
        }
      ]
    },
    {
      "request_id": "request_198",
      "user_id": "user_198",
      "requested_amount": 185800.0,
      "currency": "INR",
      "request_type": "education",
      "request_text": "I need INR 185,800 for the course fee. I need to complete it by 21 September 2026. Should I pay for the course now, use installments, or wait?",
      "allows_partial_payment": true,
      "request_date": "2026-07-07",
      "desired_completion_date": "2026-09-21",
      "home_currency": "INR",
      "current_balance": 395190.0,
      "minimum_balance_to_keep": 124300.0,
      "amount_safe_to_pay": 185800.0,
      "affordability_status": "affordable_now",
      "recommended_payment_method": "full_payment",
      "payment_plan": "2026-07-07:185800",
      "earliest_date_for_full_payment": "2026-07-07",
      "spending_changes_needed": "none",
      "decision_explanation": "Pay INR 185,800 today. This leaves at least INR 124,300 available over the next 90 days.",
      "curve": [
        {
          "day": 0,
          "date": "2026-07-07",
          "balance": 371075.09,
          "min_balance": 124300.0
        },
        {
          "day": 5,
          "date": "2026-07-12",
          "balance": 319012.08,
          "min_balance": 124300.0
        },
        {
          "day": 10,
          "date": "2026-07-17",
          "balance": 486462.54,
          "min_balance": 124300.0
        },
        {
          "day": 15,
          "date": "2026-07-22",
          "balance": 465003.26,
          "min_balance": 124300.0
        },
        {
          "day": 20,
          "date": "2026-07-27",
          "balance": 451967.49,
          "min_balance": 124300.0
        },
        {
          "day": 25,
          "date": "2026-08-01",
          "balance": 424580.21,
          "min_balance": 124300.0
        },
        {
          "day": 30,
          "date": "2026-08-06",
          "balance": 389734.36,
          "min_balance": 124300.0
        },
        {
          "day": 35,
          "date": "2026-08-11",
          "balance": 336657.85,
          "min_balance": 124300.0
        },
        {
          "day": 40,
          "date": "2026-08-16",
          "balance": 502909.43,
          "min_balance": 124300.0
        },
        {
          "day": 45,
          "date": "2026-08-21",
          "balance": 491603.54,
          "min_balance": 124300.0
        },
        {
          "day": 50,
          "date": "2026-08-26",
          "balance": 464111.85,
          "min_balance": 124300.0
        },
        {
          "day": 55,
          "date": "2026-08-31",
          "balance": 460476.05,
          "min_balance": 124300.0
        },
        {
          "day": 60,
          "date": "2026-09-05",
          "balance": 405737.47,
          "min_balance": 124300.0
        },
        {
          "day": 65,
          "date": "2026-09-10",
          "balance": 369976.73,
          "min_balance": 124300.0
        },
        {
          "day": 70,
          "date": "2026-09-15",
          "balance": 519300.8,
          "min_balance": 124300.0
        },
        {
          "day": 75,
          "date": "2026-09-20",
          "balance": 510751.26,
          "min_balance": 124300.0
        },
        {
          "day": 80,
          "date": "2026-09-25",
          "balance": 485056.21,
          "min_balance": 124300.0
        },
        {
          "day": 85,
          "date": "2026-09-30",
          "balance": 472620.41,
          "min_balance": 124300.0
        },
        {
          "day": 90,
          "date": "2026-10-05",
          "balance": 417881.83,
          "min_balance": 124300.0
        }
      ]
    },
    {
      "request_id": "request_199",
      "user_id": "user_199",
      "requested_amount": 23674000.0,
      "currency": "IDR",
      "request_type": "housing",
      "request_text": "Can I cover this deposit without putting rent and regular bills at risk? I need to decide by 10 November 2024. The deposit on the place comes to IDR 23,674,000.",
      "allows_partial_payment": false,
      "request_date": "2024-09-04",
      "desired_completion_date": "2024-11-10",
      "home_currency": "IDR",
      "current_balance": 136691818.94,
      "minimum_balance_to_keep": 25359500.0,
      "amount_safe_to_pay": 13484424.47,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 10 November 2024. None of the available options keeps the IDR 25,359,500 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2024-09-04",
          "balance": 125935769.18,
          "min_balance": 25359500.0
        },
        {
          "day": 5,
          "date": "2024-09-09",
          "balance": 118844531.61,
          "min_balance": 25359500.0
        },
        {
          "day": 10,
          "date": "2024-09-14",
          "balance": 111974907.4,
          "min_balance": 25359500.0
        },
        {
          "day": 15,
          "date": "2024-09-19",
          "balance": 109225730.53,
          "min_balance": 25359500.0
        },
        {
          "day": 20,
          "date": "2024-09-24",
          "balance": 103174799.86,
          "min_balance": 25359500.0
        },
        {
          "day": 25,
          "date": "2024-09-29",
          "balance": 107637819.61,
          "min_balance": 25359500.0
        },
        {
          "day": 30,
          "date": "2024-10-04",
          "balance": 94293976.14,
          "min_balance": 25359500.0
        },
        {
          "day": 35,
          "date": "2024-10-09",
          "balance": 87202738.57,
          "min_balance": 25359500.0
        },
        {
          "day": 40,
          "date": "2024-10-14",
          "balance": 80333114.36,
          "min_balance": 25359500.0
        },
        {
          "day": 45,
          "date": "2024-10-19",
          "balance": 77583937.49,
          "min_balance": 25359500.0
        },
        {
          "day": 50,
          "date": "2024-10-24",
          "balance": 71533006.82,
          "min_balance": 25359500.0
        },
        {
          "day": 55,
          "date": "2024-10-29",
          "balance": 75996026.57,
          "min_balance": 25359500.0
        },
        {
          "day": 60,
          "date": "2024-11-03",
          "balance": 73408232.86,
          "min_balance": 25359500.0
        },
        {
          "day": 65,
          "date": "2024-11-08",
          "balance": 55560945.53,
          "min_balance": 25359500.0
        },
        {
          "day": 70,
          "date": "2024-11-13",
          "balance": 50653598.45,
          "min_balance": 25359500.0
        },
        {
          "day": 75,
          "date": "2024-11-18",
          "balance": 45942144.45,
          "min_balance": 25359500.0
        },
        {
          "day": 80,
          "date": "2024-11-23",
          "balance": 42941409.64,
          "min_balance": 25359500.0
        },
        {
          "day": 85,
          "date": "2024-11-28",
          "balance": 45065790.69,
          "min_balance": 25359500.0
        },
        {
          "day": 90,
          "date": "2024-12-03",
          "balance": 41766439.82,
          "min_balance": 25359500.0
        }
      ]
    },
    {
      "request_id": "request_200",
      "user_id": "user_200",
      "requested_amount": 21717000.0,
      "currency": "IDR",
      "request_type": "purchase",
      "request_text": "The laptop comes to IDR 21,717,000. How much of the laptop price can I safely cover today?",
      "allows_partial_payment": false,
      "request_date": "2025-02-06",
      "desired_completion_date": "2025-04-10",
      "home_currency": "IDR",
      "current_balance": 53886150.0,
      "minimum_balance_to_keep": 20114600.0,
      "amount_safe_to_pay": 20539875.44,
      "affordability_status": "affordable_with_plan",
      "recommended_payment_method": "full_payment",
      "payment_plan": "2025-02-06:21717000",
      "earliest_date_for_full_payment": "2025-04-15",
      "spending_changes_needed": "reduce_to:event_18422:394250|stop:event_18423",
      "decision_explanation": "Reduce the games and recreation to IDR 394,250 and Stop the shared storage plan, then pay IDR 21,717,000 today. This leaves at least IDR 20,114,600 available.",
      "curve": [
        {
          "day": 0,
          "date": "2025-02-06",
          "balance": 51889250.0,
          "min_balance": 20114600.0
        },
        {
          "day": 5,
          "date": "2025-02-11",
          "balance": 45986562.56,
          "min_balance": 20114600.0
        },
        {
          "day": 10,
          "date": "2025-02-16",
          "balance": 66047343.67,
          "min_balance": 20114600.0
        },
        {
          "day": 15,
          "date": "2025-02-21",
          "balance": 60422333.94,
          "min_balance": 20114600.0
        },
        {
          "day": 20,
          "date": "2025-02-26",
          "balance": 60422333.94,
          "min_balance": 20114600.0
        },
        {
          "day": 25,
          "date": "2025-03-03",
          "balance": 52340182.54,
          "min_balance": 20114600.0
        },
        {
          "day": 30,
          "date": "2025-03-08",
          "balance": 47103334.87,
          "min_balance": 20114600.0
        },
        {
          "day": 35,
          "date": "2025-03-13",
          "balance": 43248081.78,
          "min_balance": 20114600.0
        },
        {
          "day": 40,
          "date": "2025-03-18",
          "balance": 62235517.68,
          "min_balance": 20114600.0
        },
        {
          "day": 45,
          "date": "2025-03-23",
          "balance": 58442718.81,
          "min_balance": 20114600.0
        },
        {
          "day": 50,
          "date": "2025-03-28",
          "balance": 57137229.86,
          "min_balance": 20114600.0
        },
        {
          "day": 55,
          "date": "2025-04-02",
          "balance": 50765767.17,
          "min_balance": 20114600.0
        },
        {
          "day": 60,
          "date": "2025-04-07",
          "balance": 45123719.74,
          "min_balance": 20114600.0
        },
        {
          "day": 65,
          "date": "2025-04-12",
          "balance": 42027332.3,
          "min_balance": 20114600.0
        },
        {
          "day": 70,
          "date": "2025-04-17",
          "balance": 61444779.9,
          "min_balance": 20114600.0
        },
        {
          "day": 75,
          "date": "2025-04-22",
          "balance": 56463103.68,
          "min_balance": 20114600.0
        },
        {
          "day": 80,
          "date": "2025-04-27",
          "balance": 55669066.66,
          "min_balance": 20114600.0
        },
        {
          "day": 85,
          "date": "2025-05-02",
          "balance": 48786152.04,
          "min_balance": 20114600.0
        },
        {
          "day": 90,
          "date": "2025-05-07",
          "balance": 43144104.61,
          "min_balance": 20114600.0
        }
      ]
    },
    {
      "request_id": "request_201",
      "user_id": "user_201",
      "requested_amount": 23997000.0,
      "currency": "IDR",
      "request_type": "debt_repayment",
      "request_text": "Is the full extra repayment safe, or should I pay a smaller amount? The extra repayment I'm considering is IDR 23,997,000.",
      "allows_partial_payment": true,
      "request_date": "2026-04-03",
      "desired_completion_date": "2026-05-16",
      "home_currency": "IDR",
      "current_balance": 77973400.0,
      "minimum_balance_to_keep": 17304500.0,
      "amount_safe_to_pay": 23997000.0,
      "affordability_status": "affordable_now",
      "recommended_payment_method": "full_payment",
      "payment_plan": "2026-04-03:23997000",
      "earliest_date_for_full_payment": "2026-04-03",
      "spending_changes_needed": "none",
      "decision_explanation": "Pay IDR 23,997,000 today. This leaves at least IDR 17,304,500 available over the next 90 days.",
      "curve": [
        {
          "day": 0,
          "date": "2026-04-03",
          "balance": 77308400.0,
          "min_balance": 17304500.0
        },
        {
          "day": 5,
          "date": "2026-04-08",
          "balance": 74337245.3,
          "min_balance": 17304500.0
        },
        {
          "day": 10,
          "date": "2026-04-13",
          "balance": 71897312.4,
          "min_balance": 17304500.0
        },
        {
          "day": 15,
          "date": "2026-04-18",
          "balance": 85915494.09,
          "min_balance": 17304500.0
        },
        {
          "day": 20,
          "date": "2026-04-23",
          "balance": 85915494.09,
          "min_balance": 17304500.0
        },
        {
          "day": 25,
          "date": "2026-04-28",
          "balance": 82840580.27,
          "min_balance": 17304500.0
        },
        {
          "day": 30,
          "date": "2026-05-03",
          "balance": 74462203.75,
          "min_balance": 17304500.0
        },
        {
          "day": 35,
          "date": "2026-05-08",
          "balance": 72156049.05,
          "min_balance": 17304500.0
        },
        {
          "day": 40,
          "date": "2026-05-13",
          "balance": 69716116.15,
          "min_balance": 17304500.0
        },
        {
          "day": 45,
          "date": "2026-05-18",
          "balance": 83734297.84,
          "min_balance": 17304500.0
        },
        {
          "day": 50,
          "date": "2026-05-23",
          "balance": 83734297.84,
          "min_balance": 17304500.0
        },
        {
          "day": 55,
          "date": "2026-05-28",
          "balance": 80659384.02,
          "min_balance": 17304500.0
        },
        {
          "day": 60,
          "date": "2026-06-02",
          "balance": 72281007.5,
          "min_balance": 17304500.0
        },
        {
          "day": 65,
          "date": "2026-06-07",
          "balance": 69974852.8,
          "min_balance": 17304500.0
        },
        {
          "day": 70,
          "date": "2026-06-12",
          "balance": 68280201.79,
          "min_balance": 17304500.0
        },
        {
          "day": 75,
          "date": "2026-06-17",
          "balance": 81553101.59,
          "min_balance": 17304500.0
        },
        {
          "day": 80,
          "date": "2026-06-22",
          "balance": 81553101.59,
          "min_balance": 17304500.0
        },
        {
          "day": 85,
          "date": "2026-06-27",
          "balance": 78478187.77,
          "min_balance": 17304500.0
        },
        {
          "day": 90,
          "date": "2026-07-02",
          "balance": 70099811.25,
          "min_balance": 17304500.0
        }
      ]
    },
    {
      "request_id": "request_202",
      "user_id": "user_202",
      "requested_amount": 123900.0,
      "currency": "INR",
      "request_type": "family_transfer",
      "request_text": "I want to send INR 123,900 to my family. I need to complete it by 14 January 2025. Can I make the full transfer without falling short on my own bills?",
      "allows_partial_payment": false,
      "request_date": "2024-12-05",
      "desired_completion_date": "2025-01-14",
      "home_currency": "INR",
      "current_balance": 366065.0,
      "minimum_balance_to_keep": 147800.0,
      "amount_safe_to_pay": 75418.11,
      "affordability_status": "affordable_later",
      "recommended_payment_method": "wait",
      "payment_plan": "2025-02-15:123900",
      "earliest_date_for_full_payment": "2025-02-15",
      "spending_changes_needed": "none",
      "decision_explanation": "Pay INR 123,900 in full on 15 February 2025. Paying earlier would take the balance below the INR 147,800 minimum.",
      "curve": [
        {
          "day": 0,
          "date": "2024-12-05",
          "balance": 350512.02,
          "min_balance": 147800.0
        },
        {
          "day": 5,
          "date": "2024-12-10",
          "balance": 312414.17,
          "min_balance": 147800.0
        },
        {
          "day": 10,
          "date": "2024-12-15",
          "balance": 442617.59,
          "min_balance": 147800.0
        },
        {
          "day": 15,
          "date": "2024-12-20",
          "balance": 412966.37,
          "min_balance": 147800.0
        },
        {
          "day": 20,
          "date": "2024-12-25",
          "balance": 409001.6,
          "min_balance": 147800.0
        },
        {
          "day": 25,
          "date": "2024-12-30",
          "balance": 394762.62,
          "min_balance": 147800.0
        },
        {
          "day": 30,
          "date": "2025-01-04",
          "balance": 326505.26,
          "min_balance": 147800.0
        },
        {
          "day": 35,
          "date": "2025-01-09",
          "balance": 292714.43,
          "min_balance": 147800.0
        },
        {
          "day": 40,
          "date": "2025-01-14",
          "balance": 242917.85,
          "min_balance": 147800.0
        },
        {
          "day": 45,
          "date": "2025-01-19",
          "balance": 402414.5,
          "min_balance": 147800.0
        },
        {
          "day": 50,
          "date": "2025-01-24",
          "balance": 389301.86,
          "min_balance": 147800.0
        },
        {
          "day": 55,
          "date": "2025-01-29",
          "balance": 375062.88,
          "min_balance": 147800.0
        },
        {
          "day": 60,
          "date": "2025-02-03",
          "balance": 316762.88,
          "min_balance": 147800.0
        },
        {
          "day": 65,
          "date": "2025-02-08",
          "balance": 273014.69,
          "min_balance": 147800.0
        },
        {
          "day": 70,
          "date": "2025-02-13",
          "balance": 243898.24,
          "min_balance": 147800.0
        },
        {
          "day": 75,
          "date": "2025-02-18",
          "balance": 382714.76,
          "min_balance": 147800.0
        },
        {
          "day": 80,
          "date": "2025-02-23",
          "balance": 369602.12,
          "min_balance": 147800.0
        },
        {
          "day": 85,
          "date": "2025-02-28",
          "balance": 355363.14,
          "min_balance": 147800.0
        },
        {
          "day": 90,
          "date": "2025-03-05",
          "balance": 281482.8,
          "min_balance": 147800.0
        }
      ]
    },
    {
      "request_id": "request_203",
      "user_id": "user_203",
      "requested_amount": 1442.1,
      "currency": "EUR",
      "request_type": "emergency_expense",
      "request_text": "Can I cover the full repair now and still manage my essential expenses? I need to decide by 8 July 2025. I need to cover an urgent repair of EUR 1,442.10.",
      "allows_partial_payment": false,
      "request_date": "2025-05-07",
      "desired_completion_date": "2025-07-08",
      "home_currency": "EUR",
      "current_balance": 8327.38,
      "minimum_balance_to_keep": 1400.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 8 July 2025. None of the available options keeps the EUR 1,400 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2025-05-07",
          "balance": 8230.38,
          "min_balance": 1400.0
        },
        {
          "day": 5,
          "date": "2025-05-12",
          "balance": 7581.26,
          "min_balance": 1400.0
        },
        {
          "day": 10,
          "date": "2025-05-17",
          "balance": 7257.42,
          "min_balance": 1400.0
        },
        {
          "day": 15,
          "date": "2025-05-22",
          "balance": 7189.68,
          "min_balance": 1400.0
        },
        {
          "day": 20,
          "date": "2025-05-27",
          "balance": 6830.53,
          "min_balance": 1400.0
        },
        {
          "day": 25,
          "date": "2025-06-01",
          "balance": 6622.67,
          "min_balance": 1400.0
        },
        {
          "day": 30,
          "date": "2025-06-06",
          "balance": 6021.87,
          "min_balance": 1400.0
        },
        {
          "day": 35,
          "date": "2025-06-11",
          "balance": 5623.67,
          "min_balance": 1400.0
        },
        {
          "day": 40,
          "date": "2025-06-16",
          "balance": 5189.14,
          "min_balance": 1400.0
        },
        {
          "day": 45,
          "date": "2025-06-21",
          "balance": 5078.17,
          "min_balance": 1400.0
        },
        {
          "day": 50,
          "date": "2025-06-26",
          "balance": 4831.88,
          "min_balance": 1400.0
        },
        {
          "day": 55,
          "date": "2025-07-01",
          "balance": 4511.16,
          "min_balance": 1400.0
        },
        {
          "day": 60,
          "date": "2025-07-06",
          "balance": 3910.36,
          "min_balance": 1400.0
        },
        {
          "day": 65,
          "date": "2025-07-11",
          "balance": 3512.16,
          "min_balance": 1400.0
        },
        {
          "day": 70,
          "date": "2025-07-16",
          "balance": 3077.63,
          "min_balance": 1400.0
        },
        {
          "day": 75,
          "date": "2025-07-21",
          "balance": 2966.66,
          "min_balance": 1400.0
        },
        {
          "day": 80,
          "date": "2025-07-26",
          "balance": 2720.37,
          "min_balance": 1400.0
        },
        {
          "day": 85,
          "date": "2025-07-31",
          "balance": 2440.97,
          "min_balance": 1400.0
        },
        {
          "day": 90,
          "date": "2025-08-05",
          "balance": 1857.19,
          "min_balance": 1400.0
        }
      ]
    },
    {
      "request_id": "request_204",
      "user_id": "user_204",
      "requested_amount": 588.74,
      "currency": "EUR",
      "request_type": "housing",
      "request_text": "I need to pay a EUR 588.74 rental deposit. Can I cover this deposit without putting rent and regular bills at risk?",
      "allows_partial_payment": true,
      "request_date": "2026-01-04",
      "desired_completion_date": "2026-01-31",
      "home_currency": "EUR",
      "current_balance": 2626.28,
      "minimum_balance_to_keep": 1300.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 31 January 2026. None of the available options keeps the EUR 1,300 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2026-01-04",
          "balance": 2559.35,
          "min_balance": 1300.0
        },
        {
          "day": 5,
          "date": "2026-01-09",
          "balance": 2167.08,
          "min_balance": 1300.0
        },
        {
          "day": 10,
          "date": "2026-01-14",
          "balance": 1701.75,
          "min_balance": 1300.0
        },
        {
          "day": 15,
          "date": "2026-01-19",
          "balance": 3592.62,
          "min_balance": 1300.0
        },
        {
          "day": 20,
          "date": "2026-01-24",
          "balance": 3504.11,
          "min_balance": 1300.0
        },
        {
          "day": 25,
          "date": "2026-01-29",
          "balance": 3038.28,
          "min_balance": 1300.0
        },
        {
          "day": 30,
          "date": "2026-02-03",
          "balance": 2144.19,
          "min_balance": 1300.0
        },
        {
          "day": 35,
          "date": "2026-02-08",
          "balance": 1684.99,
          "min_balance": 1300.0
        },
        {
          "day": 40,
          "date": "2026-02-13",
          "balance": 1296.66,
          "min_balance": 1300.0
        },
        {
          "day": 45,
          "date": "2026-02-18",
          "balance": 3240.7,
          "min_balance": 1300.0
        },
        {
          "day": 50,
          "date": "2026-02-23",
          "balance": 3099.02,
          "min_balance": 1300.0
        },
        {
          "day": 55,
          "date": "2026-02-28",
          "balance": 2573.24,
          "min_balance": 1300.0
        },
        {
          "day": 60,
          "date": "2026-03-05",
          "balance": 1492.9,
          "min_balance": 1300.0
        },
        {
          "day": 65,
          "date": "2026-03-10",
          "balance": 1163.9,
          "min_balance": 1300.0
        },
        {
          "day": 70,
          "date": "2026-03-15",
          "balance": 2915.57,
          "min_balance": 1300.0
        },
        {
          "day": 75,
          "date": "2026-03-20",
          "balance": 2782.44,
          "min_balance": 1300.0
        },
        {
          "day": 80,
          "date": "2026-03-25",
          "balance": 2596.33,
          "min_balance": 1300.0
        },
        {
          "day": 85,
          "date": "2026-03-30",
          "balance": 2168.15,
          "min_balance": 1300.0
        },
        {
          "day": 90,
          "date": "2026-04-04",
          "balance": 1267.08,
          "min_balance": 1300.0
        }
      ]
    },
    {
      "request_id": "request_205",
      "user_id": "user_205",
      "requested_amount": 10621000.0,
      "currency": "IDR",
      "request_type": "debt_repayment",
      "request_text": "Can I clear this additional amount without putting upcoming bills at risk? The additional loan payment would be IDR 10,621,000.",
      "allows_partial_payment": true,
      "request_date": "2024-03-06",
      "desired_completion_date": "2024-05-19",
      "home_currency": "IDR",
      "current_balance": 31462900.0,
      "minimum_balance_to_keep": 13994300.0,
      "amount_safe_to_pay": 10621000.0,
      "affordability_status": "affordable_now",
      "recommended_payment_method": "full_payment",
      "payment_plan": "2024-03-06:10621000",
      "earliest_date_for_full_payment": "2024-03-06",
      "spending_changes_needed": "none",
      "decision_explanation": "Pay IDR 10,621,000 today. This leaves at least IDR 13,994,300 available over the next 90 days.",
      "curve": [
        {
          "day": 0,
          "date": "2024-03-06",
          "balance": 29947911.02,
          "min_balance": 13994300.0
        },
        {
          "day": 5,
          "date": "2024-03-11",
          "balance": 27666731.1,
          "min_balance": 13994300.0
        },
        {
          "day": 10,
          "date": "2024-03-16",
          "balance": 61649262.32,
          "min_balance": 13994300.0
        },
        {
          "day": 15,
          "date": "2024-03-21",
          "balance": 59539521.16,
          "min_balance": 13994300.0
        },
        {
          "day": 20,
          "date": "2024-03-26",
          "balance": 55830153.71,
          "min_balance": 13994300.0
        },
        {
          "day": 25,
          "date": "2024-03-31",
          "balance": 53223694.99,
          "min_balance": 13994300.0
        },
        {
          "day": 30,
          "date": "2024-04-05",
          "balance": 44293056.48,
          "min_balance": 13994300.0
        },
        {
          "day": 35,
          "date": "2024-04-10",
          "balance": 42342967.5,
          "min_balance": 13994300.0
        },
        {
          "day": 40,
          "date": "2024-04-15",
          "balance": 56239418.8,
          "min_balance": 13994300.0
        },
        {
          "day": 45,
          "date": "2024-04-20",
          "balance": 54129677.64,
          "min_balance": 13994300.0
        },
        {
          "day": 50,
          "date": "2024-04-25",
          "balance": 51838879.59,
          "min_balance": 13994300.0
        },
        {
          "day": 55,
          "date": "2024-04-30",
          "balance": 47813851.47,
          "min_balance": 13994300.0
        },
        {
          "day": 60,
          "date": "2024-05-05",
          "balance": 38883212.96,
          "min_balance": 13994300.0
        },
        {
          "day": 65,
          "date": "2024-05-10",
          "balance": 36933123.98,
          "min_balance": 13994300.0
        },
        {
          "day": 70,
          "date": "2024-05-15",
          "balance": 50829575.28,
          "min_balance": 13994300.0
        },
        {
          "day": 75,
          "date": "2024-05-20",
          "balance": 48719834.12,
          "min_balance": 13994300.0
        },
        {
          "day": 80,
          "date": "2024-05-25",
          "balance": 46429036.07,
          "min_balance": 13994300.0
        },
        {
          "day": 85,
          "date": "2024-05-30",
          "balance": 43075275.44,
          "min_balance": 13994300.0
        },
        {
          "day": 90,
          "date": "2024-06-04",
          "balance": 34463237.11,
          "min_balance": 13994300.0
        }
      ]
    },
    {
      "request_id": "request_206",
      "user_id": "user_206",
      "requested_amount": 1404.7,
      "currency": "EUR",
      "request_type": "family_transfer",
      "request_text": "I need to make a family transfer of EUR 1,404.70. I need to complete it by 29 September 2025. Should I send the full amount, send part of it, or wait?",
      "allows_partial_payment": true,
      "request_date": "2025-08-03",
      "desired_completion_date": "2025-09-29",
      "home_currency": "EUR",
      "current_balance": 5231.14,
      "minimum_balance_to_keep": 900.0,
      "amount_safe_to_pay": 1404.7,
      "affordability_status": "affordable_with_plan",
      "recommended_payment_method": "installments",
      "payment_plan": "2025-08-03:486.96|2025-08-31:486.96|2025-09-28:486.96",
      "earliest_date_for_full_payment": "2025-08-03",
      "spending_changes_needed": "none",
      "decision_explanation": "Use 3 installments of EUR 486.96, starting 3 August 2025. This leaves at least EUR 900 available.",
      "curve": [
        {
          "day": 0,
          "date": "2025-08-03",
          "balance": 4779.04,
          "min_balance": 900.0
        },
        {
          "day": 5,
          "date": "2025-08-08",
          "balance": 4569.62,
          "min_balance": 900.0
        },
        {
          "day": 10,
          "date": "2025-08-13",
          "balance": 4365.63,
          "min_balance": 900.0
        },
        {
          "day": 15,
          "date": "2025-08-18",
          "balance": 4161.16,
          "min_balance": 900.0
        },
        {
          "day": 20,
          "date": "2025-08-23",
          "balance": 4975.02,
          "min_balance": 900.0
        },
        {
          "day": 25,
          "date": "2025-08-28",
          "balance": 4715.37,
          "min_balance": 900.0
        },
        {
          "day": 30,
          "date": "2025-09-02",
          "balance": 4672.34,
          "min_balance": 900.0
        },
        {
          "day": 35,
          "date": "2025-09-07",
          "balance": 4010.82,
          "min_balance": 900.0
        },
        {
          "day": 40,
          "date": "2025-09-12",
          "balance": 3898.07,
          "min_balance": 900.0
        },
        {
          "day": 45,
          "date": "2025-09-17",
          "balance": 3668.35,
          "min_balance": 900.0
        },
        {
          "day": 50,
          "date": "2025-09-22",
          "balance": 4416.22,
          "min_balance": 900.0
        },
        {
          "day": 55,
          "date": "2025-09-27",
          "balance": 4353.34,
          "min_balance": 900.0
        },
        {
          "day": 60,
          "date": "2025-10-02",
          "balance": 4113.54,
          "min_balance": 900.0
        },
        {
          "day": 65,
          "date": "2025-10-07",
          "balance": 3452.02,
          "min_balance": 900.0
        },
        {
          "day": 70,
          "date": "2025-10-12",
          "balance": 3339.27,
          "min_balance": 900.0
        },
        {
          "day": 75,
          "date": "2025-10-17",
          "balance": 3109.55,
          "min_balance": 900.0
        },
        {
          "day": 80,
          "date": "2025-10-22",
          "balance": 3857.42,
          "min_balance": 900.0
        },
        {
          "day": 85,
          "date": "2025-10-27",
          "balance": 3794.54,
          "min_balance": 900.0
        },
        {
          "day": 90,
          "date": "2025-11-01",
          "balance": 3554.74,
          "min_balance": 900.0
        }
      ]
    },
    {
      "request_id": "request_207",
      "user_id": "user_207",
      "requested_amount": 11830.0,
      "currency": "ZAR",
      "request_type": "family_transfer",
      "request_text": "Can I make the full transfer without falling short on my own bills? I need to decide by 24 July 2026. The amount I want to send is ZAR 11,830.",
      "allows_partial_payment": true,
      "request_date": "2026-07-05",
      "desired_completion_date": "2026-07-24",
      "home_currency": "ZAR",
      "current_balance": 26729.6,
      "minimum_balance_to_keep": 13600.0,
      "amount_safe_to_pay": 3387.78,
      "affordability_status": "affordable_later",
      "recommended_payment_method": "wait",
      "payment_plan": "2026-07-15:11830",
      "earliest_date_for_full_payment": "2026-07-15",
      "spending_changes_needed": "none",
      "decision_explanation": "Pay ZAR 11,830 in full on 15 July 2026. Paying earlier would take the balance below the ZAR 13,600 minimum.",
      "curve": [
        {
          "day": 0,
          "date": "2026-07-05",
          "balance": 24276.6,
          "min_balance": 13600.0
        },
        {
          "day": 5,
          "date": "2026-07-10",
          "balance": 21445.32,
          "min_balance": 13600.0
        },
        {
          "day": 10,
          "date": "2026-07-15",
          "balance": 58715.06,
          "min_balance": 13600.0
        },
        {
          "day": 15,
          "date": "2026-07-20",
          "balance": 56425.81,
          "min_balance": 13600.0
        },
        {
          "day": 20,
          "date": "2026-07-25",
          "balance": 53178.21,
          "min_balance": 13600.0
        },
        {
          "day": 25,
          "date": "2026-07-30",
          "balance": 50156.1,
          "min_balance": 13600.0
        },
        {
          "day": 30,
          "date": "2026-08-04",
          "balance": 47128.19,
          "min_balance": 13600.0
        },
        {
          "day": 35,
          "date": "2026-08-09",
          "balance": 42661.26,
          "min_balance": 13600.0
        },
        {
          "day": 40,
          "date": "2026-08-14",
          "balance": 37386.37,
          "min_balance": 13600.0
        },
        {
          "day": 45,
          "date": "2026-08-19",
          "balance": 56355.76,
          "min_balance": 13600.0
        },
        {
          "day": 50,
          "date": "2026-08-24",
          "balance": 53391.97,
          "min_balance": 13600.0
        },
        {
          "day": 55,
          "date": "2026-08-29",
          "balance": 50409.37,
          "min_balance": 13600.0
        },
        {
          "day": 60,
          "date": "2026-09-03",
          "balance": 47011.62,
          "min_balance": 13600.0
        },
        {
          "day": 65,
          "date": "2026-09-08",
          "balance": 42837.45,
          "min_balance": 13600.0
        },
        {
          "day": 70,
          "date": "2026-09-13",
          "balance": 36664.96,
          "min_balance": 13600.0
        },
        {
          "day": 75,
          "date": "2026-09-18",
          "balance": 55634.35,
          "min_balance": 13600.0
        },
        {
          "day": 80,
          "date": "2026-09-23",
          "balance": 52670.56,
          "min_balance": 13600.0
        },
        {
          "day": 85,
          "date": "2026-09-28",
          "balance": 50309.91,
          "min_balance": 13600.0
        },
        {
          "day": 90,
          "date": "2026-10-03",
          "balance": 46290.21,
          "min_balance": 13600.0
        }
      ]
    },
    {
      "request_id": "request_208",
      "user_id": "user_208",
      "requested_amount": 4413000.0,
      "currency": "IDR",
      "request_type": "travel",
      "request_text": "The total trip cost is IDR 4,413,000. Can I book the family trip now and still cover my usual expenses?",
      "allows_partial_payment": true,
      "request_date": "2024-06-07",
      "desired_completion_date": "2024-07-13",
      "home_currency": "IDR",
      "current_balance": 16928800.0,
      "minimum_balance_to_keep": 10470700.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 13 July 2024. None of the available options keeps the IDR 10,470,700 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2024-06-07",
          "balance": 16647251.26,
          "min_balance": 10470700.0
        },
        {
          "day": 5,
          "date": "2024-06-12",
          "balance": 14412099.77,
          "min_balance": 10470700.0
        },
        {
          "day": 10,
          "date": "2024-06-17",
          "balance": 25923732.67,
          "min_balance": 10470700.0
        },
        {
          "day": 15,
          "date": "2024-06-22",
          "balance": 24418428.44,
          "min_balance": 10470700.0
        },
        {
          "day": 20,
          "date": "2024-06-27",
          "balance": 22759802.98,
          "min_balance": 10470700.0
        },
        {
          "day": 25,
          "date": "2024-07-02",
          "balance": 16228773.48,
          "min_balance": 10470700.0
        },
        {
          "day": 30,
          "date": "2024-07-07",
          "balance": 9661496.73,
          "min_balance": 10470700.0
        },
        {
          "day": 35,
          "date": "2024-07-12",
          "balance": 7426345.24,
          "min_balance": 10470700.0
        },
        {
          "day": 40,
          "date": "2024-07-17",
          "balance": 18937978.14,
          "min_balance": 10470700.0
        },
        {
          "day": 45,
          "date": "2024-07-22",
          "balance": 17432673.91,
          "min_balance": 10470700.0
        },
        {
          "day": 50,
          "date": "2024-07-27",
          "balance": 15774048.45,
          "min_balance": 10470700.0
        },
        {
          "day": 55,
          "date": "2024-08-01",
          "balance": 10274185.63,
          "min_balance": 10470700.0
        },
        {
          "day": 60,
          "date": "2024-08-06",
          "balance": 2957290.94,
          "min_balance": 10470700.0
        },
        {
          "day": 65,
          "date": "2024-08-11",
          "balance": 440590.71,
          "min_balance": 10470700.0
        },
        {
          "day": 70,
          "date": "2024-08-16",
          "balance": 11952223.61,
          "min_balance": 10470700.0
        },
        {
          "day": 75,
          "date": "2024-08-21",
          "balance": 10669047.85,
          "min_balance": 10470700.0
        },
        {
          "day": 80,
          "date": "2024-08-26",
          "balance": 8788293.92,
          "min_balance": 10470700.0
        },
        {
          "day": 85,
          "date": "2024-08-31",
          "balance": 6722222.28,
          "min_balance": 10470700.0
        },
        {
          "day": 90,
          "date": "2024-09-05",
          "balance": -4028463.59,
          "min_balance": 10470700.0
        }
      ]
    },
    {
      "request_id": "request_209",
      "user_id": "user_209",
      "requested_amount": 56914.0,
      "currency": "ZAR",
      "request_type": "travel",
      "request_text": "How much can I safely put toward the booking today? I can book the family trip for ZAR 56,914.",
      "allows_partial_payment": false,
      "request_date": "2025-11-04",
      "desired_completion_date": "2025-11-25",
      "home_currency": "ZAR",
      "current_balance": 27025.1,
      "minimum_balance_to_keep": 18400.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 25 November 2025. None of the available options keeps the ZAR 18,400 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2025-11-04",
          "balance": 26462.03,
          "min_balance": 18400.0
        },
        {
          "day": 5,
          "date": "2025-11-09",
          "balance": 20610.47,
          "min_balance": 18400.0
        },
        {
          "day": 10,
          "date": "2025-11-14",
          "balance": 18201.17,
          "min_balance": 18400.0
        },
        {
          "day": 15,
          "date": "2025-11-19",
          "balance": 57836.91,
          "min_balance": 18400.0
        },
        {
          "day": 20,
          "date": "2025-11-24",
          "balance": 56691.61,
          "min_balance": 18400.0
        },
        {
          "day": 25,
          "date": "2025-11-29",
          "balance": 52643.8,
          "min_balance": 18400.0
        },
        {
          "day": 30,
          "date": "2025-12-04",
          "balance": 48752.4,
          "min_balance": 18400.0
        },
        {
          "day": 35,
          "date": "2025-12-09",
          "balance": 42900.84,
          "min_balance": 18400.0
        },
        {
          "day": 40,
          "date": "2025-12-14",
          "balance": 40491.54,
          "min_balance": 18400.0
        },
        {
          "day": 45,
          "date": "2025-12-19",
          "balance": 59007.28,
          "min_balance": 18400.0
        },
        {
          "day": 50,
          "date": "2025-12-24",
          "balance": 57861.98,
          "min_balance": 18400.0
        },
        {
          "day": 55,
          "date": "2025-12-29",
          "balance": 53814.17,
          "min_balance": 18400.0
        },
        {
          "day": 60,
          "date": "2026-01-03",
          "balance": 50485.84,
          "min_balance": 18400.0
        },
        {
          "day": 65,
          "date": "2026-01-08",
          "balance": 44071.21,
          "min_balance": 18400.0
        },
        {
          "day": 70,
          "date": "2026-01-13",
          "balance": 42160.58,
          "min_balance": 18400.0
        },
        {
          "day": 75,
          "date": "2026-01-18",
          "balance": 60861.51,
          "min_balance": 18400.0
        },
        {
          "day": 80,
          "date": "2026-01-23",
          "balance": 59763.32,
          "min_balance": 18400.0
        },
        {
          "day": 85,
          "date": "2026-01-28",
          "balance": 55424.75,
          "min_balance": 18400.0
        },
        {
          "day": 90,
          "date": "2026-02-02",
          "balance": 54065.21,
          "min_balance": 18400.0
        }
      ]
    },
    {
      "request_id": "request_210",
      "user_id": "user_210",
      "requested_amount": 1360.02,
      "currency": "USD",
      "request_type": "emergency_expense",
      "request_text": "I need to cover an urgent repair of USD 1,360.02. I need to complete it by 23 June 2026. Should I pay for the repair in full, split the payment, or wait?",
      "allows_partial_payment": true,
      "request_date": "2026-04-06",
      "desired_completion_date": "2026-06-23",
      "home_currency": "USD",
      "current_balance": 3525.32,
      "minimum_balance_to_keep": 2000.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 23 June 2026. None of the available options keeps the USD 2,000 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2026-04-06",
          "balance": 3379.52,
          "min_balance": 2000.0
        },
        {
          "day": 5,
          "date": "2026-04-11",
          "balance": 2674.34,
          "min_balance": 2000.0
        },
        {
          "day": 10,
          "date": "2026-04-16",
          "balance": 5201.38,
          "min_balance": 2000.0
        },
        {
          "day": 15,
          "date": "2026-04-21",
          "balance": 4969.26,
          "min_balance": 2000.0
        },
        {
          "day": 20,
          "date": "2026-04-26",
          "balance": 4612.79,
          "min_balance": 2000.0
        },
        {
          "day": 25,
          "date": "2026-05-01",
          "balance": 3749.57,
          "min_balance": 2000.0
        },
        {
          "day": 30,
          "date": "2026-05-06",
          "balance": 2816.92,
          "min_balance": 2000.0
        },
        {
          "day": 35,
          "date": "2026-05-11",
          "balance": 2257.54,
          "min_balance": 2000.0
        },
        {
          "day": 40,
          "date": "2026-05-16",
          "balance": 4784.58,
          "min_balance": 2000.0
        },
        {
          "day": 45,
          "date": "2026-05-21",
          "balance": 4552.46,
          "min_balance": 2000.0
        },
        {
          "day": 50,
          "date": "2026-05-26",
          "balance": 4195.99,
          "min_balance": 2000.0
        },
        {
          "day": 55,
          "date": "2026-05-31",
          "balance": 3547.96,
          "min_balance": 2000.0
        },
        {
          "day": 60,
          "date": "2026-06-05",
          "balance": 2400.12,
          "min_balance": 2000.0
        },
        {
          "day": 65,
          "date": "2026-06-10",
          "balance": 1970.41,
          "min_balance": 2000.0
        },
        {
          "day": 70,
          "date": "2026-06-15",
          "balance": 4444.13,
          "min_balance": 2000.0
        },
        {
          "day": 75,
          "date": "2026-06-20",
          "balance": 4237.23,
          "min_balance": 2000.0
        },
        {
          "day": 80,
          "date": "2026-06-25",
          "balance": 3924.99,
          "min_balance": 2000.0
        },
        {
          "day": 85,
          "date": "2026-06-30",
          "balance": 3131.16,
          "min_balance": 2000.0
        },
        {
          "day": 90,
          "date": "2026-07-05",
          "balance": 1983.32,
          "min_balance": 2000.0
        }
      ]
    },
    {
      "request_id": "request_211",
      "user_id": "user_211",
      "requested_amount": 1788.6,
      "currency": "EUR",
      "request_type": "other",
      "request_text": "How much can I safely pay toward the membership now? I need to decide by 15 November 2024. I've been offered the annual membership for EUR 1,788.60.",
      "allows_partial_payment": true,
      "request_date": "2024-09-03",
      "desired_completion_date": "2024-11-15",
      "home_currency": "EUR",
      "current_balance": 2727.89,
      "minimum_balance_to_keep": 1500.0,
      "amount_safe_to_pay": 126.06,
      "affordability_status": "affordable_later",
      "recommended_payment_method": "wait",
      "payment_plan": "2024-11-15:1788.60",
      "earliest_date_for_full_payment": "2024-11-15",
      "spending_changes_needed": "none",
      "decision_explanation": "Pay EUR 1,788.60 in full on 15 November 2024. Paying earlier would take the balance below the EUR 1,500 minimum.",
      "curve": [
        {
          "day": 0,
          "date": "2024-09-03",
          "balance": 2727.89,
          "min_balance": 1500.0
        },
        {
          "day": 5,
          "date": "2024-09-08",
          "balance": 1958.74,
          "min_balance": 1500.0
        },
        {
          "day": 10,
          "date": "2024-09-13",
          "balance": 1626.06,
          "min_balance": 1500.0
        },
        {
          "day": 15,
          "date": "2024-09-18",
          "balance": 5042.8,
          "min_balance": 1500.0
        },
        {
          "day": 20,
          "date": "2024-09-23",
          "balance": 4836.46,
          "min_balance": 1500.0
        },
        {
          "day": 25,
          "date": "2024-09-28",
          "balance": 4551.97,
          "min_balance": 1500.0
        },
        {
          "day": 30,
          "date": "2024-10-03",
          "balance": 4403.71,
          "min_balance": 1500.0
        },
        {
          "day": 35,
          "date": "2024-10-08",
          "balance": 3634.56,
          "min_balance": 1500.0
        },
        {
          "day": 40,
          "date": "2024-10-13",
          "balance": 3301.88,
          "min_balance": 1500.0
        },
        {
          "day": 45,
          "date": "2024-10-18",
          "balance": 4833.66,
          "min_balance": 1500.0
        },
        {
          "day": 50,
          "date": "2024-10-23",
          "balance": 4627.32,
          "min_balance": 1500.0
        },
        {
          "day": 55,
          "date": "2024-10-28",
          "balance": 4342.83,
          "min_balance": 1500.0
        },
        {
          "day": 60,
          "date": "2024-11-02",
          "balance": 4194.57,
          "min_balance": 1500.0
        },
        {
          "day": 65,
          "date": "2024-11-07",
          "balance": 3532.37,
          "min_balance": 1500.0
        },
        {
          "day": 70,
          "date": "2024-11-12",
          "balance": 3178.18,
          "min_balance": 1500.0
        },
        {
          "day": 75,
          "date": "2024-11-17",
          "balance": 4797.99,
          "min_balance": 1500.0
        },
        {
          "day": 80,
          "date": "2024-11-22",
          "balance": 4418.18,
          "min_balance": 1500.0
        },
        {
          "day": 85,
          "date": "2024-11-27",
          "balance": 4179.98,
          "min_balance": 1500.0
        },
        {
          "day": 90,
          "date": "2024-12-02",
          "balance": 3985.43,
          "min_balance": 1500.0
        }
      ]
    },
    {
      "request_id": "request_212",
      "user_id": "user_212",
      "requested_amount": 71934000.0,
      "currency": "IDR",
      "request_type": "other",
      "request_text": "The annual membership costs IDR 71,934,000. Would committing to the membership leave enough for my upcoming bills?",
      "allows_partial_payment": true,
      "request_date": "2025-02-05",
      "desired_completion_date": "2025-02-28",
      "home_currency": "IDR",
      "current_balance": 51923800.0,
      "minimum_balance_to_keep": 29579800.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 28 February 2025. None of the available options keeps the IDR 29,579,800 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2025-02-05",
          "balance": 48450865.97,
          "min_balance": 29579800.0
        },
        {
          "day": 5,
          "date": "2025-02-10",
          "balance": 39442701.85,
          "min_balance": 29579800.0
        },
        {
          "day": 10,
          "date": "2025-02-15",
          "balance": 33600570.66,
          "min_balance": 29579800.0
        },
        {
          "day": 15,
          "date": "2025-02-20",
          "balance": 28769591.92,
          "min_balance": 29579800.0
        },
        {
          "day": 20,
          "date": "2025-02-25",
          "balance": 60978341.34,
          "min_balance": 29579800.0
        },
        {
          "day": 25,
          "date": "2025-03-02",
          "balance": 47082473.55,
          "min_balance": 29579800.0
        },
        {
          "day": 30,
          "date": "2025-03-07",
          "balance": 43609539.52,
          "min_balance": 29579800.0
        },
        {
          "day": 35,
          "date": "2025-03-12",
          "balance": 29513924.25,
          "min_balance": 29579800.0
        },
        {
          "day": 40,
          "date": "2025-03-17",
          "balance": 27928947.63,
          "min_balance": 29579800.0
        },
        {
          "day": 45,
          "date": "2025-03-22",
          "balance": 22697014.89,
          "min_balance": 29579800.0
        },
        {
          "day": 50,
          "date": "2025-03-27",
          "balance": 53207155.77,
          "min_balance": 29579800.0
        },
        {
          "day": 55,
          "date": "2025-04-01",
          "balance": 43860353.27,
          "min_balance": 29579800.0
        },
        {
          "day": 60,
          "date": "2025-04-06",
          "balance": 38768213.07,
          "min_balance": 29579800.0
        },
        {
          "day": 65,
          "date": "2025-04-11",
          "balance": 28035597.8,
          "min_balance": 29579800.0
        },
        {
          "day": 70,
          "date": "2025-04-16",
          "balance": 23087621.18,
          "min_balance": 29579800.0
        },
        {
          "day": 75,
          "date": "2025-04-21",
          "balance": 19086939.02,
          "min_balance": 29579800.0
        },
        {
          "day": 80,
          "date": "2025-04-26",
          "balance": 49071897.99,
          "min_balance": 29579800.0
        },
        {
          "day": 85,
          "date": "2025-05-01",
          "balance": 39019026.82,
          "min_balance": 29579800.0
        },
        {
          "day": 90,
          "date": "2025-05-06",
          "balance": 33926886.62,
          "min_balance": 29579800.0
        }
      ]
    },
    {
      "request_id": "request_213",
      "user_id": "user_213",
      "requested_amount": 3362.4,
      "currency": "USD",
      "request_type": "family_transfer",
      "request_text": "Can I complete this family transfer and still keep my minimum balance? I need to make a family transfer of USD 3,362.40.",
      "allows_partial_payment": false,
      "request_date": "2026-01-07",
      "desired_completion_date": "2026-03-22",
      "home_currency": "USD",
      "current_balance": 12051.94,
      "minimum_balance_to_keep": 2100.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 22 March 2026. None of the available options keeps the USD 2,100 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2026-01-07",
          "balance": 11858.13,
          "min_balance": 2100.0
        },
        {
          "day": 5,
          "date": "2026-01-12",
          "balance": 11377.1,
          "min_balance": 2100.0
        },
        {
          "day": 10,
          "date": "2026-01-17",
          "balance": 11055.2,
          "min_balance": 2100.0
        },
        {
          "day": 15,
          "date": "2026-01-22",
          "balance": 10663.06,
          "min_balance": 2100.0
        },
        {
          "day": 20,
          "date": "2026-01-27",
          "balance": 10412.83,
          "min_balance": 2100.0
        },
        {
          "day": 25,
          "date": "2026-02-01",
          "balance": 9992.87,
          "min_balance": 2100.0
        },
        {
          "day": 30,
          "date": "2026-02-06",
          "balance": 8676.03,
          "min_balance": 2100.0
        },
        {
          "day": 35,
          "date": "2026-02-11",
          "balance": 8281.29,
          "min_balance": 2100.0
        },
        {
          "day": 40,
          "date": "2026-02-16",
          "balance": 7838.08,
          "min_balance": 2100.0
        },
        {
          "day": 45,
          "date": "2026-02-21",
          "balance": 7450.59,
          "min_balance": 2100.0
        },
        {
          "day": 50,
          "date": "2026-02-26",
          "balance": 7036.92,
          "min_balance": 2100.0
        },
        {
          "day": 55,
          "date": "2026-03-03",
          "balance": 5507.43,
          "min_balance": 2100.0
        },
        {
          "day": 60,
          "date": "2026-03-08",
          "balance": 5106.31,
          "min_balance": 2100.0
        },
        {
          "day": 65,
          "date": "2026-03-13",
          "balance": 4625.28,
          "min_balance": 2100.0
        },
        {
          "day": 70,
          "date": "2026-03-18",
          "balance": 4303.38,
          "min_balance": 2100.0
        },
        {
          "day": 75,
          "date": "2026-03-23",
          "balance": 3833.69,
          "min_balance": 2100.0
        },
        {
          "day": 80,
          "date": "2026-03-28",
          "balance": 3661.01,
          "min_balance": 2100.0
        },
        {
          "day": 85,
          "date": "2026-04-02",
          "balance": 2225.89,
          "min_balance": 2100.0
        },
        {
          "day": 90,
          "date": "2026-04-07",
          "balance": 1730.4,
          "min_balance": 2100.0
        }
      ]
    },
    {
      "request_id": "request_214",
      "user_id": "user_214",
      "requested_amount": 69750.0,
      "currency": "INR",
      "request_type": "other",
      "request_text": "The annual plan comes to INR 69,750. I need to complete it by 28 January 2025. Is the full membership fee affordable today, or should I wait?",
      "allows_partial_payment": true,
      "request_date": "2024-12-04",
      "desired_completion_date": "2025-01-28",
      "home_currency": "INR",
      "current_balance": 292180.0,
      "minimum_balance_to_keep": 174900.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 28 January 2025. None of the available options keeps the INR 174,900 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2024-12-04",
          "balance": 287376.11,
          "min_balance": 174900.0
        },
        {
          "day": 5,
          "date": "2024-12-09",
          "balance": 223689.37,
          "min_balance": 174900.0
        },
        {
          "day": 10,
          "date": "2024-12-14",
          "balance": 198941.97,
          "min_balance": 174900.0
        },
        {
          "day": 15,
          "date": "2024-12-19",
          "balance": 409149.85,
          "min_balance": 174900.0
        },
        {
          "day": 20,
          "date": "2024-12-24",
          "balance": 382497.63,
          "min_balance": 174900.0
        },
        {
          "day": 25,
          "date": "2024-12-29",
          "balance": 339454.08,
          "min_balance": 174900.0
        },
        {
          "day": 30,
          "date": "2025-01-03",
          "balance": 243451.01,
          "min_balance": 174900.0
        },
        {
          "day": 35,
          "date": "2025-01-08",
          "balance": 191270.21,
          "min_balance": 174900.0
        },
        {
          "day": 40,
          "date": "2025-01-13",
          "balance": 156737.4,
          "min_balance": 174900.0
        },
        {
          "day": 45,
          "date": "2025-01-18",
          "balance": 371683.57,
          "min_balance": 174900.0
        },
        {
          "day": 50,
          "date": "2025-01-23",
          "balance": 339041.9,
          "min_balance": 174900.0
        },
        {
          "day": 55,
          "date": "2025-01-28",
          "balance": 306303.21,
          "min_balance": 174900.0
        },
        {
          "day": 60,
          "date": "2025-02-02",
          "balance": 271715.77,
          "min_balance": 174900.0
        },
        {
          "day": 65,
          "date": "2025-02-07",
          "balance": 160935.46,
          "min_balance": 174900.0
        },
        {
          "day": 70,
          "date": "2025-02-12",
          "balance": 120561.39,
          "min_balance": 174900.0
        },
        {
          "day": 75,
          "date": "2025-02-17",
          "balance": 329977.79,
          "min_balance": 174900.0
        },
        {
          "day": 80,
          "date": "2025-02-22",
          "balance": 290312.91,
          "min_balance": 174900.0
        },
        {
          "day": 85,
          "date": "2025-02-27",
          "balance": 278665.73,
          "min_balance": 174900.0
        },
        {
          "day": 90,
          "date": "2025-03-04",
          "balance": 141189.14,
          "min_balance": 174900.0
        }
      ]
    },
    {
      "request_id": "request_215",
      "user_id": "user_215",
      "requested_amount": 29986.0,
      "currency": "ZAR",
      "request_type": "investment",
      "request_text": "How much can I invest now without affecting essential payments? I need to decide by 10 July 2025. The investment I'm considering is ZAR 29,986.",
      "allows_partial_payment": true,
      "request_date": "2025-05-06",
      "desired_completion_date": "2025-07-10",
      "home_currency": "ZAR",
      "current_balance": 93951.16,
      "minimum_balance_to_keep": 15700.0,
      "amount_safe_to_pay": 15701.02,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 10 July 2025. None of the available options keeps the ZAR 15,700 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2025-05-06",
          "balance": 93951.16,
          "min_balance": 15700.0
        },
        {
          "day": 5,
          "date": "2025-05-11",
          "balance": 90808.3,
          "min_balance": 15700.0
        },
        {
          "day": 10,
          "date": "2025-05-16",
          "balance": 85391.84,
          "min_balance": 15700.0
        },
        {
          "day": 15,
          "date": "2025-05-21",
          "balance": 83662.59,
          "min_balance": 15700.0
        },
        {
          "day": 20,
          "date": "2025-05-26",
          "balance": 80934.15,
          "min_balance": 15700.0
        },
        {
          "day": 25,
          "date": "2025-05-31",
          "balance": 78514.85,
          "min_balance": 15700.0
        },
        {
          "day": 30,
          "date": "2025-06-05",
          "balance": 74751.54,
          "min_balance": 15700.0
        },
        {
          "day": 35,
          "date": "2025-06-10",
          "balance": 71608.68,
          "min_balance": 15700.0
        },
        {
          "day": 40,
          "date": "2025-06-15",
          "balance": 67506.2,
          "min_balance": 15700.0
        },
        {
          "day": 45,
          "date": "2025-06-20",
          "balance": 64462.97,
          "min_balance": 15700.0
        },
        {
          "day": 50,
          "date": "2025-06-25",
          "balance": 62485.23,
          "min_balance": 15700.0
        },
        {
          "day": 55,
          "date": "2025-06-30",
          "balance": 59315.23,
          "min_balance": 15700.0
        },
        {
          "day": 60,
          "date": "2025-07-05",
          "balance": 55551.92,
          "min_balance": 15700.0
        },
        {
          "day": 65,
          "date": "2025-07-10",
          "balance": 52409.06,
          "min_balance": 15700.0
        },
        {
          "day": 70,
          "date": "2025-07-15",
          "balance": 48306.58,
          "min_balance": 15700.0
        },
        {
          "day": 75,
          "date": "2025-07-20",
          "balance": 45263.35,
          "min_balance": 15700.0
        },
        {
          "day": 80,
          "date": "2025-07-25",
          "balance": 43285.61,
          "min_balance": 15700.0
        },
        {
          "day": 85,
          "date": "2025-07-30",
          "balance": 40115.61,
          "min_balance": 15700.0
        },
        {
          "day": 90,
          "date": "2025-08-04",
          "balance": 31401.02,
          "min_balance": 15700.0
        }
      ]
    },
    {
      "request_id": "request_216",
      "user_id": "user_216",
      "requested_amount": 3332.4,
      "currency": "USD",
      "request_type": "travel",
      "request_text": "I can book the family trip for USD 3,332.40. Does paying for the trip now leave enough for the rest of the month?",
      "allows_partial_payment": false,
      "request_date": "2026-07-03",
      "desired_completion_date": "2026-09-15",
      "home_currency": "USD",
      "current_balance": 2966.8,
      "minimum_balance_to_keep": 1800.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 15 September 2026. None of the available options keeps the USD 1,800 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2026-07-03",
          "balance": 2966.8,
          "min_balance": 1800.0
        },
        {
          "day": 5,
          "date": "2026-07-08",
          "balance": 2054.99,
          "min_balance": 1800.0
        },
        {
          "day": 10,
          "date": "2026-07-13",
          "balance": 1769.72,
          "min_balance": 1800.0
        },
        {
          "day": 15,
          "date": "2026-07-18",
          "balance": 3464.58,
          "min_balance": 1800.0
        },
        {
          "day": 20,
          "date": "2026-07-23",
          "balance": 3464.58,
          "min_balance": 1800.0
        },
        {
          "day": 25,
          "date": "2026-07-28",
          "balance": 2906.36,
          "min_balance": 1800.0
        },
        {
          "day": 30,
          "date": "2026-08-02",
          "balance": 2456.67,
          "min_balance": 1800.0
        },
        {
          "day": 35,
          "date": "2026-08-07",
          "balance": 1597.86,
          "min_balance": 1800.0
        },
        {
          "day": 40,
          "date": "2026-08-12",
          "balance": 1319.6,
          "min_balance": 1800.0
        },
        {
          "day": 45,
          "date": "2026-08-17",
          "balance": 3006.11,
          "min_balance": 1800.0
        },
        {
          "day": 50,
          "date": "2026-08-22",
          "balance": 2954.45,
          "min_balance": 1800.0
        },
        {
          "day": 55,
          "date": "2026-08-27",
          "balance": 2470.36,
          "min_balance": 1800.0
        },
        {
          "day": 60,
          "date": "2026-09-01",
          "balance": 2245.94,
          "min_balance": 1800.0
        },
        {
          "day": 65,
          "date": "2026-09-06",
          "balance": 1184.93,
          "min_balance": 1800.0
        },
        {
          "day": 70,
          "date": "2026-09-11",
          "balance": 809.47,
          "min_balance": 1800.0
        },
        {
          "day": 75,
          "date": "2026-09-16",
          "balance": 2495.98,
          "min_balance": 1800.0
        },
        {
          "day": 80,
          "date": "2026-09-21",
          "balance": 2444.32,
          "min_balance": 1800.0
        },
        {
          "day": 85,
          "date": "2026-09-26",
          "balance": 2109.97,
          "min_balance": 1800.0
        },
        {
          "day": 90,
          "date": "2026-10-01",
          "balance": 1735.81,
          "min_balance": 1800.0
        }
      ]
    },
    {
      "request_id": "request_217",
      "user_id": "user_217",
      "requested_amount": 37180.0,
      "currency": "ZAR",
      "request_type": "travel",
      "request_text": "Can I afford the full trip without putting upcoming bills at risk? I've found a travel option for ZAR 37,180.",
      "allows_partial_payment": true,
      "request_date": "2024-03-05",
      "desired_completion_date": "2024-05-21",
      "home_currency": "ZAR",
      "current_balance": 58401.97,
      "minimum_balance_to_keep": 26800.0,
      "amount_safe_to_pay": 15054.37,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 21 May 2024. None of the available options keeps the ZAR 26,800 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2024-03-05",
          "balance": 57648.3,
          "min_balance": 26800.0
        },
        {
          "day": 5,
          "date": "2024-03-10",
          "balance": 51827.13,
          "min_balance": 26800.0
        },
        {
          "day": 10,
          "date": "2024-03-15",
          "balance": 111923.63,
          "min_balance": 26800.0
        },
        {
          "day": 15,
          "date": "2024-03-20",
          "balance": 107321.67,
          "min_balance": 26800.0
        },
        {
          "day": 20,
          "date": "2024-03-25",
          "balance": 102544.47,
          "min_balance": 26800.0
        },
        {
          "day": 25,
          "date": "2024-03-30",
          "balance": 97469.62,
          "min_balance": 26800.0
        },
        {
          "day": 30,
          "date": "2024-04-04",
          "balance": 82088.06,
          "min_balance": 26800.0
        },
        {
          "day": 35,
          "date": "2024-04-09",
          "balance": 76847.61,
          "min_balance": 26800.0
        },
        {
          "day": 40,
          "date": "2024-04-14",
          "balance": 65540.46,
          "min_balance": 26800.0
        },
        {
          "day": 45,
          "date": "2024-04-19",
          "balance": 95587.76,
          "min_balance": 26800.0
        },
        {
          "day": 50,
          "date": "2024-04-24",
          "balance": 93705.61,
          "min_balance": 26800.0
        },
        {
          "day": 55,
          "date": "2024-04-29",
          "balance": 87022.22,
          "min_balance": 26800.0
        },
        {
          "day": 60,
          "date": "2024-05-04",
          "balance": 70354.15,
          "min_balance": 26800.0
        },
        {
          "day": 65,
          "date": "2024-05-09",
          "balance": 65113.7,
          "min_balance": 26800.0
        },
        {
          "day": 70,
          "date": "2024-05-14",
          "balance": 53806.55,
          "min_balance": 26800.0
        },
        {
          "day": 75,
          "date": "2024-05-19",
          "balance": 83853.85,
          "min_balance": 26800.0
        },
        {
          "day": 80,
          "date": "2024-05-24",
          "balance": 81971.7,
          "min_balance": 26800.0
        },
        {
          "day": 85,
          "date": "2024-05-29",
          "balance": 75288.31,
          "min_balance": 26800.0
        },
        {
          "day": 90,
          "date": "2024-06-03",
          "balance": 60861.3,
          "min_balance": 26800.0
        }
      ]
    },
    {
      "request_id": "request_218",
      "user_id": "user_218",
      "requested_amount": 61142000.0,
      "currency": "IDR",
      "request_type": "purchase",
      "request_text": "The laptop I'm looking at is IDR 61,142,000. I need to complete it by 6 October 2025. Is the laptop affordable right now, or should I wait?",
      "allows_partial_payment": false,
      "request_date": "2025-08-07",
      "desired_completion_date": "2025-10-06",
      "home_currency": "IDR",
      "current_balance": 72419614.8,
      "minimum_balance_to_keep": 34477200.0,
      "amount_safe_to_pay": 20784298.35,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 6 October 2025. None of the available options keeps the IDR 34,477,200 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2025-08-07",
          "balance": 69857599.71,
          "min_balance": 34477200.0
        },
        {
          "day": 5,
          "date": "2025-08-12",
          "balance": 57329501.9,
          "min_balance": 34477200.0
        },
        {
          "day": 10,
          "date": "2025-08-17",
          "balance": 150480231.85,
          "min_balance": 34477200.0
        },
        {
          "day": 15,
          "date": "2025-08-22",
          "balance": 141464768.36,
          "min_balance": 34477200.0
        },
        {
          "day": 20,
          "date": "2025-08-27",
          "balance": 140469731.04,
          "min_balance": 34477200.0
        },
        {
          "day": 25,
          "date": "2025-09-01",
          "balance": 133896293.48,
          "min_balance": 34477200.0
        },
        {
          "day": 30,
          "date": "2025-09-06",
          "balance": 120044623.81,
          "min_balance": 34477200.0
        },
        {
          "day": 35,
          "date": "2025-09-11",
          "balance": 107022401.1,
          "min_balance": 34477200.0
        },
        {
          "day": 40,
          "date": "2025-09-16",
          "balance": 150393246.95,
          "min_balance": 34477200.0
        },
        {
          "day": 45,
          "date": "2025-09-21",
          "balance": 144611711.78,
          "min_balance": 34477200.0
        },
        {
          "day": 50,
          "date": "2025-09-26",
          "balance": 139454740.05,
          "min_balance": 34477200.0
        },
        {
          "day": 55,
          "date": "2025-10-01",
          "balance": 132881302.49,
          "min_balance": 34477200.0
        },
        {
          "day": 60,
          "date": "2025-10-06",
          "balance": 119029632.82,
          "min_balance": 34477200.0
        },
        {
          "day": 65,
          "date": "2025-10-11",
          "balance": 106007410.11,
          "min_balance": 34477200.0
        },
        {
          "day": 70,
          "date": "2025-10-16",
          "balance": 149378255.96,
          "min_balance": 34477200.0
        },
        {
          "day": 75,
          "date": "2025-10-21",
          "balance": 143596720.79,
          "min_balance": 34477200.0
        },
        {
          "day": 80,
          "date": "2025-10-26",
          "balance": 138439749.06,
          "min_balance": 34477200.0
        },
        {
          "day": 85,
          "date": "2025-10-31",
          "balance": 135482097.04,
          "min_balance": 34477200.0
        },
        {
          "day": 90,
          "date": "2025-11-05",
          "balance": 118014641.83,
          "min_balance": 34477200.0
        }
      ]
    },
    {
      "request_id": "request_219",
      "user_id": "user_219",
      "requested_amount": 1673.1,
      "currency": "EUR",
      "request_type": "education",
      "request_text": "Would paying the course fee now leave enough for my regular commitments? I need to decide by 13 June 2026. I need EUR 1,673.10 for the course fee.",
      "allows_partial_payment": true,
      "request_date": "2026-04-04",
      "desired_completion_date": "2026-06-13",
      "home_currency": "EUR",
      "current_balance": 2815.51,
      "minimum_balance_to_keep": 1100.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 13 June 2026. None of the available options keeps the EUR 1,100 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2026-04-04",
          "balance": 2085.89,
          "min_balance": 1100.0
        },
        {
          "day": 5,
          "date": "2026-04-09",
          "balance": 1787.71,
          "min_balance": 1100.0
        },
        {
          "day": 10,
          "date": "2026-04-14",
          "balance": 1412.69,
          "min_balance": 1100.0
        },
        {
          "day": 15,
          "date": "2026-04-19",
          "balance": 3133.52,
          "min_balance": 1100.0
        },
        {
          "day": 20,
          "date": "2026-04-24",
          "balance": 2984.32,
          "min_balance": 1100.0
        },
        {
          "day": 25,
          "date": "2026-04-29",
          "balance": 2774.93,
          "min_balance": 1100.0
        },
        {
          "day": 30,
          "date": "2026-05-04",
          "balance": 1860.93,
          "min_balance": 1100.0
        },
        {
          "day": 35,
          "date": "2026-05-09",
          "balance": 1562.75,
          "min_balance": 1100.0
        },
        {
          "day": 40,
          "date": "2026-05-14",
          "balance": 1187.73,
          "min_balance": 1100.0
        },
        {
          "day": 45,
          "date": "2026-05-19",
          "balance": 2908.56,
          "min_balance": 1100.0
        },
        {
          "day": 50,
          "date": "2026-05-24",
          "balance": 2759.36,
          "min_balance": 1100.0
        },
        {
          "day": 55,
          "date": "2026-05-29",
          "balance": 2549.97,
          "min_balance": 1100.0
        },
        {
          "day": 60,
          "date": "2026-06-03",
          "balance": 2365.59,
          "min_balance": 1100.0
        },
        {
          "day": 65,
          "date": "2026-06-08",
          "balance": 1337.79,
          "min_balance": 1100.0
        },
        {
          "day": 70,
          "date": "2026-06-13",
          "balance": 1063.45,
          "min_balance": 1100.0
        },
        {
          "day": 75,
          "date": "2026-06-18",
          "balance": 2741.07,
          "min_balance": 1100.0
        },
        {
          "day": 80,
          "date": "2026-06-23",
          "balance": 2534.4,
          "min_balance": 1100.0
        },
        {
          "day": 85,
          "date": "2026-06-28",
          "balance": 2378.18,
          "min_balance": 1100.0
        },
        {
          "day": 90,
          "date": "2026-07-03",
          "balance": 2140.63,
          "min_balance": 1100.0
        }
      ]
    },
    {
      "request_id": "request_220",
      "user_id": "user_220",
      "requested_amount": 3118.5,
      "currency": "EUR",
      "request_type": "investment",
      "request_text": "I'm considering setting aside EUR 3,118.50 for an investment. How much can I invest now without affecting essential payments?",
      "allows_partial_payment": true,
      "request_date": "2024-06-06",
      "desired_completion_date": "2024-07-03",
      "home_currency": "EUR",
      "current_balance": 1487.32,
      "minimum_balance_to_keep": 1100.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 3 July 2024. None of the available options keeps the EUR 1,100 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2024-06-06",
          "balance": 1407.32,
          "min_balance": 1100.0
        },
        {
          "day": 5,
          "date": "2024-06-11",
          "balance": 1261.66,
          "min_balance": 1100.0
        },
        {
          "day": 10,
          "date": "2024-06-16",
          "balance": 2355.18,
          "min_balance": 1100.0
        },
        {
          "day": 15,
          "date": "2024-06-21",
          "balance": 2098.59,
          "min_balance": 1100.0
        },
        {
          "day": 20,
          "date": "2024-06-26",
          "balance": 1958.42,
          "min_balance": 1100.0
        },
        {
          "day": 25,
          "date": "2024-07-01",
          "balance": 1379.63,
          "min_balance": 1100.0
        },
        {
          "day": 30,
          "date": "2024-07-06",
          "balance": 1213.7,
          "min_balance": 1100.0
        },
        {
          "day": 35,
          "date": "2024-07-11",
          "balance": 1148.04,
          "min_balance": 1100.0
        },
        {
          "day": 40,
          "date": "2024-07-16",
          "balance": 2241.56,
          "min_balance": 1100.0
        },
        {
          "day": 45,
          "date": "2024-07-21",
          "balance": 1984.97,
          "min_balance": 1100.0
        },
        {
          "day": 50,
          "date": "2024-07-26",
          "balance": 1844.8,
          "min_balance": 1100.0
        },
        {
          "day": 55,
          "date": "2024-07-31",
          "balance": 1709.08,
          "min_balance": 1100.0
        },
        {
          "day": 60,
          "date": "2024-08-05",
          "balance": 1100.08,
          "min_balance": 1100.0
        },
        {
          "day": 65,
          "date": "2024-08-10",
          "balance": 1034.42,
          "min_balance": 1100.0
        },
        {
          "day": 70,
          "date": "2024-08-15",
          "balance": 2127.94,
          "min_balance": 1100.0
        },
        {
          "day": 75,
          "date": "2024-08-20",
          "balance": 1949.77,
          "min_balance": 1100.0
        },
        {
          "day": 80,
          "date": "2024-08-25",
          "balance": 1797.16,
          "min_balance": 1100.0
        },
        {
          "day": 85,
          "date": "2024-08-30",
          "balance": 1595.46,
          "min_balance": 1100.0
        },
        {
          "day": 90,
          "date": "2024-09-04",
          "balance": 1056.91,
          "min_balance": 1100.0
        }
      ]
    },
    {
      "request_id": "request_221",
      "user_id": "user_221",
      "requested_amount": 109800.0,
      "currency": "INR",
      "request_type": "housing",
      "request_text": "Can I pay the rental deposit by the requested date? I need INR 109,800 for the rental deposit.",
      "allows_partial_payment": false,
      "request_date": "2025-11-03",
      "desired_completion_date": "2026-01-14",
      "home_currency": "INR",
      "current_balance": 268305.0,
      "minimum_balance_to_keep": 81500.0,
      "amount_safe_to_pay": 88450.86,
      "affordability_status": "affordable_later",
      "recommended_payment_method": "wait",
      "payment_plan": "2026-01-15:109800",
      "earliest_date_for_full_payment": "2026-01-15",
      "spending_changes_needed": "none",
      "decision_explanation": "Pay INR 109,800 in full on 15 January 2026. Paying earlier would take the balance below the INR 81,500 minimum.",
      "curve": [
        {
          "day": 0,
          "date": "2025-11-03",
          "balance": 265315.0,
          "min_balance": 81500.0
        },
        {
          "day": 5,
          "date": "2025-11-08",
          "balance": 256573.64,
          "min_balance": 81500.0
        },
        {
          "day": 10,
          "date": "2025-11-13",
          "balance": 201021.13,
          "min_balance": 81500.0
        },
        {
          "day": 15,
          "date": "2025-11-18",
          "balance": 303603.83,
          "min_balance": 81500.0
        },
        {
          "day": 20,
          "date": "2025-11-23",
          "balance": 295097.76,
          "min_balance": 81500.0
        },
        {
          "day": 25,
          "date": "2025-11-28",
          "balance": 280945.3,
          "min_balance": 81500.0
        },
        {
          "day": 30,
          "date": "2025-12-03",
          "balance": 247966.81,
          "min_balance": 81500.0
        },
        {
          "day": 35,
          "date": "2025-12-08",
          "balance": 242215.45,
          "min_balance": 81500.0
        },
        {
          "day": 40,
          "date": "2025-12-13",
          "balance": 186662.94,
          "min_balance": 81500.0
        },
        {
          "day": 45,
          "date": "2025-12-18",
          "balance": 289245.64,
          "min_balance": 81500.0
        },
        {
          "day": 50,
          "date": "2025-12-23",
          "balance": 280739.57,
          "min_balance": 81500.0
        },
        {
          "day": 55,
          "date": "2025-12-28",
          "balance": 266587.11,
          "min_balance": 81500.0
        },
        {
          "day": 60,
          "date": "2026-01-02",
          "balance": 233608.62,
          "min_balance": 81500.0
        },
        {
          "day": 65,
          "date": "2026-01-07",
          "balance": 227857.26,
          "min_balance": 81500.0
        },
        {
          "day": 70,
          "date": "2026-01-12",
          "balance": 184834.75,
          "min_balance": 81500.0
        },
        {
          "day": 75,
          "date": "2026-01-17",
          "balance": 281018.05,
          "min_balance": 81500.0
        },
        {
          "day": 80,
          "date": "2026-01-22",
          "balance": 266381.38,
          "min_balance": 81500.0
        },
        {
          "day": 85,
          "date": "2026-01-27",
          "balance": 254057.42,
          "min_balance": 81500.0
        },
        {
          "day": 90,
          "date": "2026-02-01",
          "balance": 248550.43,
          "min_balance": 81500.0
        }
      ]
    },
    {
      "request_id": "request_222",
      "user_id": "user_222",
      "requested_amount": 34078.0,
      "currency": "ZAR",
      "request_type": "education",
      "request_text": "The professional course costs ZAR 34,078. I need to complete it by 10 March 2026. Can I pay for the course before enrolment closes?",
      "allows_partial_payment": false,
      "request_date": "2026-01-05",
      "desired_completion_date": "2026-03-10",
      "home_currency": "ZAR",
      "current_balance": 118101.7,
      "minimum_balance_to_keep": 27300.0,
      "amount_safe_to_pay": 24239.61,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 10 March 2026. None of the available options keeps the ZAR 27,300 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2026-01-05",
          "balance": 116962.1,
          "min_balance": 27300.0
        },
        {
          "day": 5,
          "date": "2026-01-10",
          "balance": 107840.43,
          "min_balance": 27300.0
        },
        {
          "day": 10,
          "date": "2026-01-15",
          "balance": 104348.03,
          "min_balance": 27300.0
        },
        {
          "day": 15,
          "date": "2026-01-20",
          "balance": 110778.7,
          "min_balance": 27300.0
        },
        {
          "day": 20,
          "date": "2026-01-25",
          "balance": 108065.67,
          "min_balance": 27300.0
        },
        {
          "day": 25,
          "date": "2026-01-30",
          "balance": 104255.23,
          "min_balance": 27300.0
        },
        {
          "day": 30,
          "date": "2026-02-04",
          "balance": 94394.87,
          "min_balance": 27300.0
        },
        {
          "day": 35,
          "date": "2026-02-09",
          "balance": 89852.84,
          "min_balance": 27300.0
        },
        {
          "day": 40,
          "date": "2026-02-14",
          "balance": 82920.4,
          "min_balance": 27300.0
        },
        {
          "day": 45,
          "date": "2026-02-19",
          "balance": 81753.16,
          "min_balance": 27300.0
        },
        {
          "day": 50,
          "date": "2026-02-24",
          "balance": 86638.04,
          "min_balance": 27300.0
        },
        {
          "day": 55,
          "date": "2026-03-01",
          "balance": 81371.24,
          "min_balance": 27300.0
        },
        {
          "day": 60,
          "date": "2026-03-06",
          "balance": 72967.24,
          "min_balance": 27300.0
        },
        {
          "day": 65,
          "date": "2026-03-11",
          "balance": 64985.17,
          "min_balance": 27300.0
        },
        {
          "day": 70,
          "date": "2026-03-16",
          "balance": 61492.77,
          "min_balance": 27300.0
        },
        {
          "day": 75,
          "date": "2026-03-21",
          "balance": 66842.41,
          "min_balance": 27300.0
        },
        {
          "day": 80,
          "date": "2026-03-26",
          "balance": 65210.41,
          "min_balance": 27300.0
        },
        {
          "day": 85,
          "date": "2026-03-31",
          "balance": 61399.97,
          "min_balance": 27300.0
        },
        {
          "day": 90,
          "date": "2026-04-05",
          "balance": 51539.61,
          "min_balance": 27300.0
        }
      ]
    },
    {
      "request_id": "request_223",
      "user_id": "user_223",
      "requested_amount": 898.7,
      "currency": "EUR",
      "request_type": "purchase",
      "request_text": "Is the laptop affordable right now, or should I wait? I need to decide by 20 October 2024. The laptop costs EUR 898.70.",
      "allows_partial_payment": true,
      "request_date": "2024-09-07",
      "desired_completion_date": "2024-10-20",
      "home_currency": "EUR",
      "current_balance": 2255.51,
      "minimum_balance_to_keep": 800.0,
      "amount_safe_to_pay": 898.7,
      "affordability_status": "affordable_now",
      "recommended_payment_method": "full_payment",
      "payment_plan": "2024-09-07:898.70",
      "earliest_date_for_full_payment": "2024-09-07",
      "spending_changes_needed": "none",
      "decision_explanation": "Pay EUR 898.70 today. This leaves at least EUR 800 available over the next 90 days.",
      "curve": [
        {
          "day": 0,
          "date": "2024-09-07",
          "balance": 2191.51,
          "min_balance": 800.0
        },
        {
          "day": 5,
          "date": "2024-09-12",
          "balance": 1883.45,
          "min_balance": 800.0
        },
        {
          "day": 10,
          "date": "2024-09-17",
          "balance": 4288.64,
          "min_balance": 800.0
        },
        {
          "day": 15,
          "date": "2024-09-22",
          "balance": 4180.82,
          "min_balance": 800.0
        },
        {
          "day": 20,
          "date": "2024-09-27",
          "balance": 4090.47,
          "min_balance": 800.0
        },
        {
          "day": 25,
          "date": "2024-10-02",
          "balance": 3973.47,
          "min_balance": 800.0
        },
        {
          "day": 30,
          "date": "2024-10-07",
          "balance": 3441.14,
          "min_balance": 800.0
        },
        {
          "day": 35,
          "date": "2024-10-12",
          "balance": 3197.08,
          "min_balance": 800.0
        },
        {
          "day": 40,
          "date": "2024-10-17",
          "balance": 4293.27,
          "min_balance": 800.0
        },
        {
          "day": 45,
          "date": "2024-10-22",
          "balance": 4185.45,
          "min_balance": 800.0
        },
        {
          "day": 50,
          "date": "2024-10-27",
          "balance": 4095.1,
          "min_balance": 800.0
        },
        {
          "day": 55,
          "date": "2024-11-01",
          "balance": 3978.1,
          "min_balance": 800.0
        },
        {
          "day": 60,
          "date": "2024-11-06",
          "balance": 3445.77,
          "min_balance": 800.0
        },
        {
          "day": 65,
          "date": "2024-11-11",
          "balance": 3201.71,
          "min_balance": 800.0
        },
        {
          "day": 70,
          "date": "2024-11-16",
          "balance": 4297.9,
          "min_balance": 800.0
        },
        {
          "day": 75,
          "date": "2024-11-21",
          "balance": 4190.08,
          "min_balance": 800.0
        },
        {
          "day": 80,
          "date": "2024-11-26",
          "balance": 4161.39,
          "min_balance": 800.0
        },
        {
          "day": 85,
          "date": "2024-12-01",
          "balance": 3982.73,
          "min_balance": 800.0
        },
        {
          "day": 90,
          "date": "2024-12-06",
          "balance": 3450.4,
          "min_balance": 800.0
        }
      ]
    },
    {
      "request_id": "request_224",
      "user_id": "user_224",
      "requested_amount": 10327000.0,
      "currency": "IDR",
      "request_type": "travel",
      "request_text": "I've found a travel option for IDR 10,327,000. How much can I safely put toward the booking today?",
      "allows_partial_payment": true,
      "request_date": "2025-02-04",
      "desired_completion_date": "2025-03-16",
      "home_currency": "IDR",
      "current_balance": 49969400.0,
      "minimum_balance_to_keep": 22187600.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 16 March 2025. None of the available options keeps the IDR 22,187,600 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2025-02-04",
          "balance": 48908124.27,
          "min_balance": 22187600.0
        },
        {
          "day": 5,
          "date": "2025-02-09",
          "balance": 41433626.67,
          "min_balance": 22187600.0
        },
        {
          "day": 10,
          "date": "2025-02-14",
          "balance": 29494785.47,
          "min_balance": 22187600.0
        },
        {
          "day": 15,
          "date": "2025-02-19",
          "balance": 61103825.01,
          "min_balance": 22187600.0
        },
        {
          "day": 20,
          "date": "2025-02-24",
          "balance": 58158410.12,
          "min_balance": 22187600.0
        },
        {
          "day": 25,
          "date": "2025-03-01",
          "balance": 40049052.16,
          "min_balance": 22187600.0
        },
        {
          "day": 30,
          "date": "2025-03-06",
          "balance": 34657692.56,
          "min_balance": 22187600.0
        },
        {
          "day": 35,
          "date": "2025-03-11",
          "balance": 23641987.29,
          "min_balance": 22187600.0
        },
        {
          "day": 40,
          "date": "2025-03-16",
          "balance": 55839443.34,
          "min_balance": 22187600.0
        },
        {
          "day": 45,
          "date": "2025-03-21",
          "balance": 49943216.41,
          "min_balance": 22187600.0
        },
        {
          "day": 50,
          "date": "2025-03-26",
          "balance": 46603459.61,
          "min_balance": 22187600.0
        },
        {
          "day": 55,
          "date": "2025-03-31",
          "balance": 43952367.58,
          "min_balance": 22187600.0
        },
        {
          "day": 60,
          "date": "2025-04-05",
          "balance": 25729058.45,
          "min_balance": 22187600.0
        },
        {
          "day": 65,
          "date": "2025-04-10",
          "balance": 15809158.45,
          "min_balance": 22187600.0
        },
        {
          "day": 70,
          "date": "2025-04-15",
          "balance": 47737517.25,
          "min_balance": 22187600.0
        },
        {
          "day": 75,
          "date": "2025-04-20",
          "balance": 43246556.79,
          "min_balance": 22187600.0
        },
        {
          "day": 80,
          "date": "2025-04-25",
          "balance": 39174707.53,
          "min_balance": 22187600.0
        },
        {
          "day": 85,
          "date": "2025-04-30",
          "balance": 35023733.47,
          "min_balance": 22187600.0
        },
        {
          "day": 90,
          "date": "2025-05-05",
          "balance": 16800424.34,
          "min_balance": 22187600.0
        }
      ]
    },
    {
      "request_id": "request_225",
      "user_id": "user_225",
      "requested_amount": 22059000.0,
      "currency": "IDR",
      "request_type": "emergency_expense",
      "request_text": "Should I pay for the repair in full, split the payment, or wait? The repair I need is priced at IDR 22,059,000.",
      "allows_partial_payment": true,
      "request_date": "2026-07-06",
      "desired_completion_date": "2026-09-21",
      "home_currency": "IDR",
      "current_balance": 35791159.6,
      "minimum_balance_to_keep": 17670700.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 21 September 2026. None of the available options keeps the IDR 17,670,700 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2026-07-06",
          "balance": 32066158.37,
          "min_balance": 17670700.0
        },
        {
          "day": 5,
          "date": "2026-07-11",
          "balance": 25621454.89,
          "min_balance": 17670700.0
        },
        {
          "day": 10,
          "date": "2026-07-16",
          "balance": 46841186.33,
          "min_balance": 17670700.0
        },
        {
          "day": 15,
          "date": "2026-07-21",
          "balance": 44595304.22,
          "min_balance": 17670700.0
        },
        {
          "day": 20,
          "date": "2026-07-26",
          "balance": 43709245.47,
          "min_balance": 17670700.0
        },
        {
          "day": 25,
          "date": "2026-07-31",
          "balance": 41602850.58,
          "min_balance": 17670700.0
        },
        {
          "day": 30,
          "date": "2026-08-05",
          "balance": 30963253.78,
          "min_balance": 17670700.0
        },
        {
          "day": 35,
          "date": "2026-08-10",
          "balance": 24581460.14,
          "min_balance": 17670700.0
        },
        {
          "day": 40,
          "date": "2026-08-15",
          "balance": 42013280.51,
          "min_balance": 17670700.0
        },
        {
          "day": 45,
          "date": "2026-08-20",
          "balance": 39767398.4,
          "min_balance": 17670700.0
        },
        {
          "day": 50,
          "date": "2026-08-25",
          "balance": 38881339.65,
          "min_balance": 17670700.0
        },
        {
          "day": 55,
          "date": "2026-08-30",
          "balance": 37308581.28,
          "min_balance": 17670700.0
        },
        {
          "day": 60,
          "date": "2026-09-04",
          "balance": 26981769.55,
          "min_balance": 17670700.0
        },
        {
          "day": 65,
          "date": "2026-09-09",
          "balance": 20407818.08,
          "min_balance": 17670700.0
        },
        {
          "day": 70,
          "date": "2026-09-14",
          "balance": 13313575.17,
          "min_balance": 17670700.0
        },
        {
          "day": 75,
          "date": "2026-09-19",
          "balance": 36613481.55,
          "min_balance": 17670700.0
        },
        {
          "day": 80,
          "date": "2026-09-24",
          "balance": 34053433.83,
          "min_balance": 17670700.0
        },
        {
          "day": 85,
          "date": "2026-09-29",
          "balance": 32480675.46,
          "min_balance": 17670700.0
        },
        {
          "day": 90,
          "date": "2026-10-04",
          "balance": 22153863.73,
          "min_balance": 17670700.0
        }
      ]
    },
    {
      "request_id": "request_226",
      "user_id": "user_226",
      "requested_amount": 157000.0,
      "currency": "INR",
      "request_type": "other",
      "request_text": "The annual membership costs INR 157,000. I need to complete it by 15 January 2025. How much can I safely pay toward the membership now?",
      "allows_partial_payment": false,
      "request_date": "2024-12-03",
      "desired_completion_date": "2025-01-15",
      "home_currency": "INR",
      "current_balance": 581180.0,
      "minimum_balance_to_keep": 209400.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 15 January 2025. None of the available options keeps the INR 209,400 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2024-12-03",
          "balance": 498980.0,
          "min_balance": 209400.0
        },
        {
          "day": 5,
          "date": "2024-12-08",
          "balance": 461902.63,
          "min_balance": 209400.0
        },
        {
          "day": 10,
          "date": "2024-12-13",
          "balance": 381550.25,
          "min_balance": 209400.0
        },
        {
          "day": 15,
          "date": "2024-12-18",
          "balance": 340903.26,
          "min_balance": 209400.0
        },
        {
          "day": 20,
          "date": "2024-12-23",
          "balance": 420562.19,
          "min_balance": 209400.0
        },
        {
          "day": 25,
          "date": "2024-12-28",
          "balance": 376587.94,
          "min_balance": 209400.0
        },
        {
          "day": 30,
          "date": "2025-01-02",
          "balance": 353124.29,
          "min_balance": 209400.0
        },
        {
          "day": 35,
          "date": "2025-01-07",
          "balance": 239758.42,
          "min_balance": 209400.0
        },
        {
          "day": 40,
          "date": "2025-01-12",
          "balance": 175468.08,
          "min_balance": 209400.0
        },
        {
          "day": 45,
          "date": "2025-01-17",
          "balance": 127306.59,
          "min_balance": 209400.0
        },
        {
          "day": 50,
          "date": "2025-01-22",
          "balance": 192506.48,
          "min_balance": 209400.0
        },
        {
          "day": 55,
          "date": "2025-01-27",
          "balance": 160659.34,
          "min_balance": 209400.0
        },
        {
          "day": 60,
          "date": "2025-02-01",
          "balance": 135345.81,
          "min_balance": 209400.0
        },
        {
          "day": 65,
          "date": "2025-02-06",
          "balance": 25138.2,
          "min_balance": 209400.0
        },
        {
          "day": 70,
          "date": "2025-02-11",
          "balance": -14137.63,
          "min_balance": 209400.0
        },
        {
          "day": 75,
          "date": "2025-02-16",
          "balance": -100749.12,
          "min_balance": 209400.0
        },
        {
          "day": 80,
          "date": "2025-02-21",
          "balance": -30221.92,
          "min_balance": 209400.0
        },
        {
          "day": 85,
          "date": "2025-02-26",
          "balance": -55409.94,
          "min_balance": 209400.0
        },
        {
          "day": 90,
          "date": "2025-03-03",
          "balance": -185187.13,
          "min_balance": 209400.0
        }
      ]
    },
    {
      "request_id": "request_227",
      "user_id": "user_227",
      "requested_amount": 259700.0,
      "currency": "INR",
      "request_type": "debt_repayment",
      "request_text": "Can I make the extra loan payment now without affecting essential expenses? I need to decide by 20 June 2025. I'm considering paying an extra INR 259,700 off the loan.",
      "allows_partial_payment": false,
      "request_date": "2025-05-05",
      "desired_completion_date": "2025-06-20",
      "home_currency": "INR",
      "current_balance": 105655.0,
      "minimum_balance_to_keep": 62900.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 20 June 2025. None of the available options keeps the INR 62,900 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2025-05-05",
          "balance": 95405.0,
          "min_balance": 62900.0
        },
        {
          "day": 5,
          "date": "2025-05-10",
          "balance": 71249.49,
          "min_balance": 62900.0
        },
        {
          "day": 10,
          "date": "2025-05-15",
          "balance": 149683.3,
          "min_balance": 62900.0
        },
        {
          "day": 15,
          "date": "2025-05-20",
          "balance": 138865.59,
          "min_balance": 62900.0
        },
        {
          "day": 20,
          "date": "2025-05-25",
          "balance": 129906.95,
          "min_balance": 62900.0
        },
        {
          "day": 25,
          "date": "2025-05-30",
          "balance": 121933.6,
          "min_balance": 62900.0
        },
        {
          "day": 30,
          "date": "2025-06-04",
          "balance": 109530.33,
          "min_balance": 62900.0
        },
        {
          "day": 35,
          "date": "2025-06-09",
          "balance": 88080.23,
          "min_balance": 62900.0
        },
        {
          "day": 40,
          "date": "2025-06-14",
          "balance": 61880.31,
          "min_balance": 62900.0
        },
        {
          "day": 45,
          "date": "2025-06-19",
          "balance": 146846.96,
          "min_balance": 62900.0
        },
        {
          "day": 50,
          "date": "2025-06-24",
          "balance": 136043.37,
          "min_balance": 62900.0
        },
        {
          "day": 55,
          "date": "2025-06-29",
          "balance": 131942.66,
          "min_balance": 62900.0
        },
        {
          "day": 60,
          "date": "2025-07-04",
          "balance": 113405.66,
          "min_balance": 62900.0
        },
        {
          "day": 65,
          "date": "2025-07-09",
          "balance": 91955.56,
          "min_balance": 62900.0
        },
        {
          "day": 70,
          "date": "2025-07-14",
          "balance": 65755.64,
          "min_balance": 62900.0
        },
        {
          "day": 75,
          "date": "2025-07-19",
          "balance": 150722.29,
          "min_balance": 62900.0
        },
        {
          "day": 80,
          "date": "2025-07-24",
          "balance": 139918.7,
          "min_balance": 62900.0
        },
        {
          "day": 85,
          "date": "2025-07-29",
          "balance": 135817.99,
          "min_balance": 62900.0
        },
        {
          "day": 90,
          "date": "2025-08-03",
          "balance": 121013.49,
          "min_balance": 62900.0
        }
      ]
    },
    {
      "request_id": "request_228",
      "user_id": "user_228",
      "requested_amount": 63327000.0,
      "currency": "IDR",
      "request_type": "investment",
      "request_text": "I'm thinking of investing IDR 63,327,000. What portion can I invest today without going below my minimum balance?",
      "allows_partial_payment": true,
      "request_date": "2026-04-07",
      "desired_completion_date": "2026-04-30",
      "home_currency": "IDR",
      "current_balance": 36748550.0,
      "minimum_balance_to_keep": 26191200.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 30 April 2026. None of the available options keeps the IDR 26,191,200 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2026-04-07",
          "balance": 32772228.48,
          "min_balance": 26191200.0
        },
        {
          "day": 5,
          "date": "2026-04-12",
          "balance": 28790176.57,
          "min_balance": 26191200.0
        },
        {
          "day": 10,
          "date": "2026-04-17",
          "balance": 56440923.68,
          "min_balance": 26191200.0
        },
        {
          "day": 15,
          "date": "2026-04-22",
          "balance": 50140820.2,
          "min_balance": 26191200.0
        },
        {
          "day": 20,
          "date": "2026-04-27",
          "balance": 48958218.44,
          "min_balance": 26191200.0
        },
        {
          "day": 25,
          "date": "2026-05-02",
          "balance": 34673225.78,
          "min_balance": 26191200.0
        },
        {
          "day": 30,
          "date": "2026-05-07",
          "balance": 26358464.28,
          "min_balance": 26191200.0
        },
        {
          "day": 35,
          "date": "2026-05-12",
          "balance": 22376412.37,
          "min_balance": 26191200.0
        },
        {
          "day": 40,
          "date": "2026-05-17",
          "balance": 50027159.48,
          "min_balance": 26191200.0
        },
        {
          "day": 45,
          "date": "2026-05-22",
          "balance": 43727056.0,
          "min_balance": 26191200.0
        },
        {
          "day": 50,
          "date": "2026-05-27",
          "balance": 42544454.24,
          "min_balance": 26191200.0
        },
        {
          "day": 55,
          "date": "2026-06-01",
          "balance": 29428595.83,
          "min_balance": 26191200.0
        },
        {
          "day": 60,
          "date": "2026-06-06",
          "balance": 23921021.6,
          "min_balance": 26191200.0
        },
        {
          "day": 65,
          "date": "2026-06-11",
          "balance": 16224848.17,
          "min_balance": 26191200.0
        },
        {
          "day": 70,
          "date": "2026-06-16",
          "balance": 43613395.28,
          "min_balance": 26191200.0
        },
        {
          "day": 75,
          "date": "2026-06-21",
          "balance": 40034205.36,
          "min_balance": 26191200.0
        },
        {
          "day": 80,
          "date": "2026-06-26",
          "balance": 36130690.04,
          "min_balance": 26191200.0
        },
        {
          "day": 85,
          "date": "2026-07-01",
          "balance": 23014831.63,
          "min_balance": 26191200.0
        },
        {
          "day": 90,
          "date": "2026-07-06",
          "balance": 17507257.4,
          "min_balance": 26191200.0
        }
      ]
    },
    {
      "request_id": "request_229",
      "user_id": "user_229",
      "requested_amount": 1526.8,
      "currency": "EUR",
      "request_type": "travel",
      "request_text": "How much can I safely put toward the booking today? The total trip cost is EUR 1,526.80.",
      "allows_partial_payment": false,
      "request_date": "2024-03-04",
      "desired_completion_date": "2024-05-23",
      "home_currency": "EUR",
      "current_balance": 1800.52,
      "minimum_balance_to_keep": 1000.0,
      "amount_safe_to_pay": 20.54,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 23 May 2024. None of the available options keeps the EUR 1,000 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2024-03-04",
          "balance": 1768.32,
          "min_balance": 1000.0
        },
        {
          "day": 5,
          "date": "2024-03-09",
          "balance": 1553.67,
          "min_balance": 1000.0
        },
        {
          "day": 10,
          "date": "2024-03-14",
          "balance": 1343.64,
          "min_balance": 1000.0
        },
        {
          "day": 15,
          "date": "2024-03-19",
          "balance": 2479.58,
          "min_balance": 1000.0
        },
        {
          "day": 20,
          "date": "2024-03-24",
          "balance": 2306.76,
          "min_balance": 1000.0
        },
        {
          "day": 25,
          "date": "2024-03-29",
          "balance": 2038.07,
          "min_balance": 1000.0
        },
        {
          "day": 30,
          "date": "2024-04-03",
          "balance": 1565.97,
          "min_balance": 1000.0
        },
        {
          "day": 35,
          "date": "2024-04-08",
          "balance": 1454.34,
          "min_balance": 1000.0
        },
        {
          "day": 40,
          "date": "2024-04-13",
          "balance": 1250.29,
          "min_balance": 1000.0
        },
        {
          "day": 45,
          "date": "2024-04-18",
          "balance": 2318.03,
          "min_balance": 1000.0
        },
        {
          "day": 50,
          "date": "2024-04-23",
          "balance": 2209.95,
          "min_balance": 1000.0
        },
        {
          "day": 55,
          "date": "2024-04-28",
          "balance": 1936.74,
          "min_balance": 1000.0
        },
        {
          "day": 60,
          "date": "2024-05-03",
          "balance": 1404.42,
          "min_balance": 1000.0
        },
        {
          "day": 65,
          "date": "2024-05-08",
          "balance": 1292.79,
          "min_balance": 1000.0
        },
        {
          "day": 70,
          "date": "2024-05-13",
          "balance": 1088.74,
          "min_balance": 1000.0
        },
        {
          "day": 75,
          "date": "2024-05-18",
          "balance": 2156.48,
          "min_balance": 1000.0
        },
        {
          "day": 80,
          "date": "2024-05-23",
          "balance": 2048.4,
          "min_balance": 1000.0
        },
        {
          "day": 85,
          "date": "2024-05-28",
          "balance": 1775.19,
          "min_balance": 1000.0
        },
        {
          "day": 90,
          "date": "2024-06-02",
          "balance": 1295.9,
          "min_balance": 1000.0
        }
      ]
    },
    {
      "request_id": "request_230",
      "user_id": "user_230",
      "requested_amount": 3537.6,
      "currency": "EUR",
      "request_type": "debt_repayment",
      "request_text": "I have EUR 3,537.60 in mind as an extra loan payment. I need to complete it by 4 October 2025. Can I clear this additional amount without putting upcoming bills at risk?",
      "allows_partial_payment": false,
      "request_date": "2025-08-06",
      "desired_completion_date": "2025-10-04",
      "home_currency": "EUR",
      "current_balance": 8676.76,
      "minimum_balance_to_keep": 2000.0,
      "amount_safe_to_pay": 2126.39,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 4 October 2025. None of the available options keeps the EUR 2,000 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2025-08-06",
          "balance": 8566.32,
          "min_balance": 2000.0
        },
        {
          "day": 5,
          "date": "2025-08-11",
          "balance": 8055.67,
          "min_balance": 2000.0
        },
        {
          "day": 10,
          "date": "2025-08-16",
          "balance": 8830.66,
          "min_balance": 2000.0
        },
        {
          "day": 15,
          "date": "2025-08-21",
          "balance": 8617.67,
          "min_balance": 2000.0
        },
        {
          "day": 20,
          "date": "2025-08-26",
          "balance": 8320.15,
          "min_balance": 2000.0
        },
        {
          "day": 25,
          "date": "2025-08-31",
          "balance": 8250.25,
          "min_balance": 2000.0
        },
        {
          "day": 30,
          "date": "2025-09-05",
          "balance": 7174.59,
          "min_balance": 2000.0
        },
        {
          "day": 35,
          "date": "2025-09-10",
          "balance": 6674.98,
          "min_balance": 2000.0
        },
        {
          "day": 40,
          "date": "2025-09-15",
          "balance": 7381.3,
          "min_balance": 2000.0
        },
        {
          "day": 45,
          "date": "2025-09-20",
          "balance": 7185.63,
          "min_balance": 2000.0
        },
        {
          "day": 50,
          "date": "2025-09-25",
          "balance": 6817.98,
          "min_balance": 2000.0
        },
        {
          "day": 55,
          "date": "2025-09-30",
          "balance": 6748.08,
          "min_balance": 2000.0
        },
        {
          "day": 60,
          "date": "2025-10-05",
          "balance": 5672.42,
          "min_balance": 2000.0
        },
        {
          "day": 65,
          "date": "2025-10-10",
          "balance": 5172.81,
          "min_balance": 2000.0
        },
        {
          "day": 70,
          "date": "2025-10-15",
          "balance": 5879.13,
          "min_balance": 2000.0
        },
        {
          "day": 75,
          "date": "2025-10-20",
          "balance": 5683.46,
          "min_balance": 2000.0
        },
        {
          "day": 80,
          "date": "2025-10-25",
          "balance": 5315.81,
          "min_balance": 2000.0
        },
        {
          "day": 85,
          "date": "2025-10-30",
          "balance": 5245.91,
          "min_balance": 2000.0
        },
        {
          "day": 90,
          "date": "2025-11-04",
          "balance": 4283.24,
          "min_balance": 2000.0
        }
      ]
    },
    {
      "request_id": "request_231",
      "user_id": "user_231",
      "requested_amount": 35706.0,
      "currency": "ZAR",
      "request_type": "purchase",
      "request_text": "Would paying for the laptop today leave enough for my regular expenses? I need to decide by 17 March 2026. I've found a laptop for ZAR 35,706.",
      "allows_partial_payment": true,
      "request_date": "2026-01-03",
      "desired_completion_date": "2026-03-17",
      "home_currency": "ZAR",
      "current_balance": 84590.59,
      "minimum_balance_to_keep": 24300.0,
      "amount_safe_to_pay": 15988.86,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 17 March 2026. None of the available options keeps the ZAR 24,300 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2026-01-03",
          "balance": 84590.59,
          "min_balance": 24300.0
        },
        {
          "day": 5,
          "date": "2026-01-08",
          "balance": 67394.78,
          "min_balance": 24300.0
        },
        {
          "day": 10,
          "date": "2026-01-13",
          "balance": 58465.82,
          "min_balance": 24300.0
        },
        {
          "day": 15,
          "date": "2026-01-18",
          "balance": 139140.43,
          "min_balance": 24300.0
        },
        {
          "day": 20,
          "date": "2026-01-23",
          "balance": 128851.18,
          "min_balance": 24300.0
        },
        {
          "day": 25,
          "date": "2026-01-28",
          "balance": 123174.4,
          "min_balance": 24300.0
        },
        {
          "day": 30,
          "date": "2026-02-02",
          "balance": 99156.68,
          "min_balance": 24300.0
        },
        {
          "day": 35,
          "date": "2026-02-07",
          "balance": 84988.68,
          "min_balance": 24300.0
        },
        {
          "day": 40,
          "date": "2026-02-12",
          "balance": 73031.91,
          "min_balance": 24300.0
        },
        {
          "day": 45,
          "date": "2026-02-17",
          "balance": 109706.52,
          "min_balance": 24300.0
        },
        {
          "day": 50,
          "date": "2026-02-22",
          "balance": 100774.54,
          "min_balance": 24300.0
        },
        {
          "day": 55,
          "date": "2026-02-27",
          "balance": 93740.49,
          "min_balance": 24300.0
        },
        {
          "day": 60,
          "date": "2026-03-04",
          "balance": 55554.77,
          "min_balance": 24300.0
        },
        {
          "day": 65,
          "date": "2026-03-09",
          "balance": 47801.98,
          "min_balance": 24300.0
        },
        {
          "day": 70,
          "date": "2026-03-14",
          "balance": 42586.36,
          "min_balance": 24300.0
        },
        {
          "day": 75,
          "date": "2026-03-19",
          "balance": 74226.25,
          "min_balance": 24300.0
        },
        {
          "day": 80,
          "date": "2026-03-24",
          "balance": 68273.64,
          "min_balance": 24300.0
        },
        {
          "day": 85,
          "date": "2026-03-29",
          "balance": 60206.56,
          "min_balance": 24300.0
        },
        {
          "day": 90,
          "date": "2026-04-03",
          "balance": 40288.86,
          "min_balance": 24300.0
        }
      ]
    },
    {
      "request_id": "request_232",
      "user_id": "user_232",
      "requested_amount": 1970.1,
      "currency": "EUR",
      "request_type": "travel",
      "request_text": "The family trip will cost EUR 1,970.10. Can I afford the full trip without putting upcoming bills at risk?",
      "allows_partial_payment": true,
      "request_date": "2024-06-05",
      "desired_completion_date": "2024-08-15",
      "home_currency": "EUR",
      "current_balance": 4269.4,
      "minimum_balance_to_keep": 2400.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 15 August 2024. None of the available options keeps the EUR 2,400 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2024-06-05",
          "balance": 3948.65,
          "min_balance": 2400.0
        },
        {
          "day": 5,
          "date": "2024-06-10",
          "balance": 3165.22,
          "min_balance": 2400.0
        },
        {
          "day": 10,
          "date": "2024-06-15",
          "balance": 5318.16,
          "min_balance": 2400.0
        },
        {
          "day": 15,
          "date": "2024-06-20",
          "balance": 5003.35,
          "min_balance": 2400.0
        },
        {
          "day": 20,
          "date": "2024-06-25",
          "balance": 4786.57,
          "min_balance": 2400.0
        },
        {
          "day": 25,
          "date": "2024-06-30",
          "balance": 4265.65,
          "min_balance": 2400.0
        },
        {
          "day": 30,
          "date": "2024-07-05",
          "balance": 2768.83,
          "min_balance": 2400.0
        },
        {
          "day": 35,
          "date": "2024-07-10",
          "balance": 1985.4,
          "min_balance": 2400.0
        },
        {
          "day": 40,
          "date": "2024-07-15",
          "balance": 4138.34,
          "min_balance": 2400.0
        },
        {
          "day": 45,
          "date": "2024-07-20",
          "balance": 3823.53,
          "min_balance": 2400.0
        },
        {
          "day": 50,
          "date": "2024-07-25",
          "balance": 3606.75,
          "min_balance": 2400.0
        },
        {
          "day": 55,
          "date": "2024-07-30",
          "balance": 3085.83,
          "min_balance": 2400.0
        },
        {
          "day": 60,
          "date": "2024-08-04",
          "balance": 1909.76,
          "min_balance": 2400.0
        },
        {
          "day": 65,
          "date": "2024-08-09",
          "balance": 1288.58,
          "min_balance": 2400.0
        },
        {
          "day": 70,
          "date": "2024-08-14",
          "balance": 255.39,
          "min_balance": 2400.0
        },
        {
          "day": 75,
          "date": "2024-08-19",
          "balance": 2685.35,
          "min_balance": 2400.0
        },
        {
          "day": 80,
          "date": "2024-08-24",
          "balance": 2426.93,
          "min_balance": 2400.0
        },
        {
          "day": 85,
          "date": "2024-08-29",
          "balance": 1998.03,
          "min_balance": 2400.0
        },
        {
          "day": 90,
          "date": "2024-09-03",
          "balance": 729.94,
          "min_balance": 2400.0
        }
      ]
    },
    {
      "request_id": "request_233",
      "user_id": "user_233",
      "requested_amount": 6241000.0,
      "currency": "IDR",
      "request_type": "housing",
      "request_text": "Would paying the full deposit leave enough for my other commitments? The landlord has asked for a deposit of IDR 6,241,000.",
      "allows_partial_payment": true,
      "request_date": "2025-11-07",
      "desired_completion_date": "2025-12-17",
      "home_currency": "IDR",
      "current_balance": 19341300.0,
      "minimum_balance_to_keep": 10365700.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 17 December 2025. None of the available options keeps the IDR 10,365,700 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2025-11-07",
          "balance": 19341300.0,
          "min_balance": 10365700.0
        },
        {
          "day": 5,
          "date": "2025-11-12",
          "balance": 14998394.79,
          "min_balance": 10365700.0
        },
        {
          "day": 10,
          "date": "2025-11-17",
          "balance": 21464662.63,
          "min_balance": 10365700.0
        },
        {
          "day": 15,
          "date": "2025-11-22",
          "balance": 19203377.97,
          "min_balance": 10365700.0
        },
        {
          "day": 20,
          "date": "2025-11-27",
          "balance": 19203377.97,
          "min_balance": 10365700.0
        },
        {
          "day": 25,
          "date": "2025-12-02",
          "balance": 12843630.27,
          "min_balance": 10365700.0
        },
        {
          "day": 30,
          "date": "2025-12-07",
          "balance": 8478754.63,
          "min_balance": 10365700.0
        },
        {
          "day": 35,
          "date": "2025-12-12",
          "balance": 4135849.42,
          "min_balance": 10365700.0
        },
        {
          "day": 40,
          "date": "2025-12-17",
          "balance": 10602117.26,
          "min_balance": 10365700.0
        },
        {
          "day": 45,
          "date": "2025-12-22",
          "balance": 8340832.6,
          "min_balance": 10365700.0
        },
        {
          "day": 50,
          "date": "2025-12-27",
          "balance": 8340832.6,
          "min_balance": 10365700.0
        },
        {
          "day": 55,
          "date": "2026-01-01",
          "balance": 5876084.9,
          "min_balance": 10365700.0
        },
        {
          "day": 60,
          "date": "2026-01-06",
          "balance": -2383790.74,
          "min_balance": 10365700.0
        },
        {
          "day": 65,
          "date": "2026-01-11",
          "balance": -6726695.95,
          "min_balance": 10365700.0
        },
        {
          "day": 70,
          "date": "2026-01-16",
          "balance": 866604.55,
          "min_balance": 10365700.0
        },
        {
          "day": 75,
          "date": "2026-01-21",
          "balance": -1408267.96,
          "min_balance": 10365700.0
        },
        {
          "day": 80,
          "date": "2026-01-26",
          "balance": -2521712.77,
          "min_balance": 10365700.0
        },
        {
          "day": 85,
          "date": "2026-01-31",
          "balance": -4143836.59,
          "min_balance": 10365700.0
        },
        {
          "day": 90,
          "date": "2026-02-05",
          "balance": -11714297.73,
          "min_balance": 10365700.0
        }
      ]
    },
    {
      "request_id": "request_234",
      "user_id": "user_234",
      "requested_amount": 1213.3,
      "currency": "EUR",
      "request_type": "debt_repayment",
      "request_text": "I'm considering paying an extra EUR 1,213.30 off the loan. I need to complete it by 15 September 2026. Would paying this much toward the loan leave enough for the rest of the month?",
      "allows_partial_payment": false,
      "request_date": "2026-07-04",
      "desired_completion_date": "2026-09-15",
      "home_currency": "EUR",
      "current_balance": 1274.25,
      "minimum_balance_to_keep": 700.0,
      "amount_safe_to_pay": 92.9,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 15 September 2026. None of the available options keeps the EUR 700 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2026-07-04",
          "balance": 1123.36,
          "min_balance": 700.0
        },
        {
          "day": 5,
          "date": "2026-07-09",
          "balance": 906.78,
          "min_balance": 700.0
        },
        {
          "day": 10,
          "date": "2026-07-14",
          "balance": 792.9,
          "min_balance": 700.0
        },
        {
          "day": 15,
          "date": "2026-07-19",
          "balance": 1527.29,
          "min_balance": 700.0
        },
        {
          "day": 20,
          "date": "2026-07-24",
          "balance": 1429.32,
          "min_balance": 700.0
        },
        {
          "day": 25,
          "date": "2026-07-29",
          "balance": 1259.55,
          "min_balance": 700.0
        },
        {
          "day": 30,
          "date": "2026-08-03",
          "balance": 1188.03,
          "min_balance": 700.0
        },
        {
          "day": 35,
          "date": "2026-08-08",
          "balance": 911.86,
          "min_balance": 700.0
        },
        {
          "day": 40,
          "date": "2026-08-13",
          "balance": 836.1,
          "min_balance": 700.0
        },
        {
          "day": 45,
          "date": "2026-08-18",
          "balance": 1601.92,
          "min_balance": 700.0
        },
        {
          "day": 50,
          "date": "2026-08-23",
          "balance": 1457.09,
          "min_balance": 700.0
        },
        {
          "day": 55,
          "date": "2026-08-28",
          "balance": 1341.72,
          "min_balance": 700.0
        },
        {
          "day": 60,
          "date": "2026-09-02",
          "balance": 1193.11,
          "min_balance": 700.0
        },
        {
          "day": 65,
          "date": "2026-09-07",
          "balance": 961.94,
          "min_balance": 700.0
        },
        {
          "day": 70,
          "date": "2026-09-12",
          "balance": 860.69,
          "min_balance": 700.0
        },
        {
          "day": 75,
          "date": "2026-09-17",
          "balance": 1678.05,
          "min_balance": 700.0
        },
        {
          "day": 80,
          "date": "2026-09-22",
          "balance": 1507.82,
          "min_balance": 700.0
        },
        {
          "day": 85,
          "date": "2026-09-27",
          "balance": 1415.6,
          "min_balance": 700.0
        },
        {
          "day": 90,
          "date": "2026-10-02",
          "balance": 1198.19,
          "min_balance": 700.0
        }
      ]
    },
    {
      "request_id": "request_235",
      "user_id": "user_235",
      "requested_amount": 967.2,
      "currency": "USD",
      "request_type": "education",
      "request_text": "How much of the course fee can I manage without cutting into essentials? I need to decide by 25 October 2024. I've been quoted USD 967.20 for the course.",
      "allows_partial_payment": true,
      "request_date": "2024-09-06",
      "desired_completion_date": "2024-10-25",
      "home_currency": "USD",
      "current_balance": 2086.28,
      "minimum_balance_to_keep": 700.0,
      "amount_safe_to_pay": 509.53,
      "affordability_status": "affordable_with_plan",
      "recommended_payment_method": "installments",
      "payment_plan": "2024-09-20:174.10|2024-10-20:174.10|2024-11-19:174.10|2024-12-19:174.10|2025-01-18:174.10|2025-02-17:174.10",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Use 6 installments of USD 174.10, starting 20 September 2024. This leaves at least USD 700 available.",
      "curve": [
        {
          "day": 0,
          "date": "2024-09-06",
          "balance": 2045.66,
          "min_balance": 700.0
        },
        {
          "day": 5,
          "date": "2024-09-11",
          "balance": 1888.1,
          "min_balance": 700.0
        },
        {
          "day": 10,
          "date": "2024-09-16",
          "balance": 2707.02,
          "min_balance": 700.0
        },
        {
          "day": 15,
          "date": "2024-09-21",
          "balance": 2650.73,
          "min_balance": 700.0
        },
        {
          "day": 20,
          "date": "2024-09-26",
          "balance": 2585.56,
          "min_balance": 700.0
        },
        {
          "day": 25,
          "date": "2024-10-01",
          "balance": 2429.4,
          "min_balance": 700.0
        },
        {
          "day": 30,
          "date": "2024-10-06",
          "balance": 1796.49,
          "min_balance": 700.0
        },
        {
          "day": 35,
          "date": "2024-10-11",
          "balance": 1638.93,
          "min_balance": 700.0
        },
        {
          "day": 40,
          "date": "2024-10-16",
          "balance": 2457.85,
          "min_balance": 700.0
        },
        {
          "day": 45,
          "date": "2024-10-21",
          "balance": 2401.56,
          "min_balance": 700.0
        },
        {
          "day": 50,
          "date": "2024-10-26",
          "balance": 2336.39,
          "min_balance": 700.0
        },
        {
          "day": 55,
          "date": "2024-10-31",
          "balance": 2232.49,
          "min_balance": 700.0
        },
        {
          "day": 60,
          "date": "2024-11-05",
          "balance": 1587.94,
          "min_balance": 700.0
        },
        {
          "day": 65,
          "date": "2024-11-10",
          "balance": 1416.76,
          "min_balance": 700.0
        },
        {
          "day": 70,
          "date": "2024-11-15",
          "balance": 2228.68,
          "min_balance": 700.0
        },
        {
          "day": 75,
          "date": "2024-11-20",
          "balance": 2152.39,
          "min_balance": 700.0
        },
        {
          "day": 80,
          "date": "2024-11-25",
          "balance": 2087.22,
          "min_balance": 700.0
        },
        {
          "day": 85,
          "date": "2024-11-30",
          "balance": 1983.32,
          "min_balance": 700.0
        },
        {
          "day": 90,
          "date": "2024-12-05",
          "balance": 1338.77,
          "min_balance": 700.0
        }
      ]
    },
    {
      "request_id": "request_236",
      "user_id": "user_236",
      "requested_amount": 52383000.0,
      "currency": "IDR",
      "request_type": "housing",
      "request_text": "The move requires a IDR 52,383,000 deposit. Can I pay the rental deposit by the requested date?",
      "allows_partial_payment": true,
      "request_date": "2025-02-03",
      "desired_completion_date": "2025-02-23",
      "home_currency": "IDR",
      "current_balance": 31173450.0,
      "minimum_balance_to_keep": 16768600.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 23 February 2025. None of the available options keeps the IDR 16,768,600 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2025-02-03",
          "balance": 30403833.72,
          "min_balance": 16768600.0
        },
        {
          "day": 5,
          "date": "2025-02-08",
          "balance": 22316109.15,
          "min_balance": 16768600.0
        },
        {
          "day": 10,
          "date": "2025-02-13",
          "balance": 18022721.7,
          "min_balance": 16768600.0
        },
        {
          "day": 15,
          "date": "2025-02-18",
          "balance": 37723625.51,
          "min_balance": 16768600.0
        },
        {
          "day": 20,
          "date": "2025-02-23",
          "balance": 36079459.33,
          "min_balance": 16768600.0
        },
        {
          "day": 25,
          "date": "2025-02-28",
          "balance": 24342482.04,
          "min_balance": 16768600.0
        },
        {
          "day": 30,
          "date": "2025-03-05",
          "balance": 17831845.01,
          "min_balance": 16768600.0
        },
        {
          "day": 35,
          "date": "2025-03-10",
          "balance": 10344489.04,
          "min_balance": 16768600.0
        },
        {
          "day": 40,
          "date": "2025-03-15",
          "balance": 29567418.63,
          "min_balance": 16768600.0
        },
        {
          "day": 45,
          "date": "2025-03-20",
          "balance": 26616221.33,
          "min_balance": 16768600.0
        },
        {
          "day": 50,
          "date": "2025-03-25",
          "balance": 24157623.84,
          "min_balance": 16768600.0
        },
        {
          "day": 55,
          "date": "2025-03-30",
          "balance": 20590820.82,
          "min_balance": 16768600.0
        },
        {
          "day": 60,
          "date": "2025-04-04",
          "balance": 9448511.28,
          "min_balance": 16768600.0
        },
        {
          "day": 65,
          "date": "2025-04-09",
          "balance": -133172.18,
          "min_balance": 16768600.0
        },
        {
          "day": 70,
          "date": "2025-04-14",
          "balance": -3330242.59,
          "min_balance": 16768600.0
        },
        {
          "day": 75,
          "date": "2025-04-19",
          "balance": 16138560.11,
          "min_balance": 16768600.0
        },
        {
          "day": 80,
          "date": "2025-04-24",
          "balance": 14303596.81,
          "min_balance": 16768600.0
        },
        {
          "day": 85,
          "date": "2025-04-29",
          "balance": 10561921.43,
          "min_balance": 16768600.0
        },
        {
          "day": 90,
          "date": "2025-05-04",
          "balance": -1029149.94,
          "min_balance": 16768600.0
        }
      ]
    },
    {
      "request_id": "request_237",
      "user_id": "user_237",
      "requested_amount": 23826000.0,
      "currency": "IDR",
      "request_type": "other",
      "request_text": "Would committing to the membership leave enough for my upcoming bills? Renewing the membership would cost IDR 23,826,000.",
      "allows_partial_payment": false,
      "request_date": "2026-04-05",
      "desired_completion_date": "2026-05-20",
      "home_currency": "IDR",
      "current_balance": 100824550.0,
      "minimum_balance_to_keep": 22431500.0,
      "amount_safe_to_pay": 23826000.0,
      "affordability_status": "affordable_now",
      "recommended_payment_method": "full_payment",
      "payment_plan": "2026-04-05:23826000",
      "earliest_date_for_full_payment": "2026-04-05",
      "spending_changes_needed": "none",
      "decision_explanation": "Pay IDR 23,826,000 today. This leaves at least IDR 22,431,500 available over the next 90 days.",
      "curve": [
        {
          "day": 0,
          "date": "2026-04-05",
          "balance": 100824550.0,
          "min_balance": 22431500.0
        },
        {
          "day": 5,
          "date": "2026-04-10",
          "balance": 93184078.76,
          "min_balance": 22431500.0
        },
        {
          "day": 10,
          "date": "2026-04-15",
          "balance": 116148327.0,
          "min_balance": 22431500.0
        },
        {
          "day": 15,
          "date": "2026-04-20",
          "balance": 112250398.13,
          "min_balance": 22431500.0
        },
        {
          "day": 20,
          "date": "2026-04-25",
          "balance": 109521944.02,
          "min_balance": 22431500.0
        },
        {
          "day": 25,
          "date": "2026-04-30",
          "balance": 105033533.99,
          "min_balance": 22431500.0
        },
        {
          "day": 30,
          "date": "2026-05-05",
          "balance": 94364754.99,
          "min_balance": 22431500.0
        },
        {
          "day": 35,
          "date": "2026-05-10",
          "balance": 86724283.75,
          "min_balance": 22431500.0
        },
        {
          "day": 40,
          "date": "2026-05-15",
          "balance": 109688531.99,
          "min_balance": 22431500.0
        },
        {
          "day": 45,
          "date": "2026-05-20",
          "balance": 105790603.12,
          "min_balance": 22431500.0
        },
        {
          "day": 50,
          "date": "2026-05-25",
          "balance": 103062149.01,
          "min_balance": 22431500.0
        },
        {
          "day": 55,
          "date": "2026-05-30",
          "balance": 98573738.98,
          "min_balance": 22431500.0
        },
        {
          "day": 60,
          "date": "2026-06-04",
          "balance": 87904959.98,
          "min_balance": 22431500.0
        },
        {
          "day": 65,
          "date": "2026-06-09",
          "balance": 81346022.08,
          "min_balance": 22431500.0
        },
        {
          "day": 70,
          "date": "2026-06-14",
          "balance": 74616153.17,
          "min_balance": 22431500.0
        },
        {
          "day": 75,
          "date": "2026-06-19",
          "balance": 99330808.11,
          "min_balance": 22431500.0
        },
        {
          "day": 80,
          "date": "2026-06-24",
          "balance": 97988971.05,
          "min_balance": 22431500.0
        },
        {
          "day": 85,
          "date": "2026-06-29",
          "balance": 92113943.97,
          "min_balance": 22431500.0
        },
        {
          "day": 90,
          "date": "2026-07-04",
          "balance": 81445164.97,
          "min_balance": 22431500.0
        }
      ]
    },
    {
      "request_id": "request_238",
      "user_id": "user_238",
      "requested_amount": 663.6,
      "currency": "USD",
      "request_type": "investment",
      "request_text": "I'm planning an investment contribution of USD 663.60. I need to complete it by 16 February 2025. What portion can I invest today without going below my minimum balance?",
      "allows_partial_payment": false,
      "request_date": "2024-12-07",
      "desired_completion_date": "2025-02-16",
      "home_currency": "USD",
      "current_balance": 1882.07,
      "minimum_balance_to_keep": 700.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 16 February 2025. None of the available options keeps the USD 700 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2024-12-07",
          "balance": 1829.46,
          "min_balance": 700.0
        },
        {
          "day": 5,
          "date": "2024-12-12",
          "balance": 1735.41,
          "min_balance": 700.0
        },
        {
          "day": 10,
          "date": "2024-12-17",
          "balance": 2121.1,
          "min_balance": 700.0
        },
        {
          "day": 15,
          "date": "2024-12-22",
          "balance": 2035.72,
          "min_balance": 700.0
        },
        {
          "day": 20,
          "date": "2024-12-27",
          "balance": 1909.44,
          "min_balance": 700.0
        },
        {
          "day": 25,
          "date": "2025-01-01",
          "balance": 1762.85,
          "min_balance": 700.0
        },
        {
          "day": 30,
          "date": "2025-01-06",
          "balance": 1369.33,
          "min_balance": 700.0
        },
        {
          "day": 35,
          "date": "2025-01-11",
          "balance": 1231.67,
          "min_balance": 700.0
        },
        {
          "day": 40,
          "date": "2025-01-16",
          "balance": 1639.91,
          "min_balance": 700.0
        },
        {
          "day": 45,
          "date": "2025-01-21",
          "balance": 1574.43,
          "min_balance": 700.0
        },
        {
          "day": 50,
          "date": "2025-01-26",
          "balance": 1431.72,
          "min_balance": 700.0
        },
        {
          "day": 55,
          "date": "2025-01-31",
          "balance": 1282.58,
          "min_balance": 700.0
        },
        {
          "day": 60,
          "date": "2025-02-05",
          "balance": 927.34,
          "min_balance": 700.0
        },
        {
          "day": 65,
          "date": "2025-02-10",
          "balance": 746.93,
          "min_balance": 700.0
        },
        {
          "day": 70,
          "date": "2025-02-15",
          "balance": 1150.52,
          "min_balance": 700.0
        },
        {
          "day": 75,
          "date": "2025-02-20",
          "balance": 1061.69,
          "min_balance": 700.0
        },
        {
          "day": 80,
          "date": "2025-02-25",
          "balance": 948.21,
          "min_balance": 700.0
        },
        {
          "day": 85,
          "date": "2025-03-02",
          "balance": 684.16,
          "min_balance": 700.0
        },
        {
          "day": 90,
          "date": "2025-03-07",
          "balance": 291.24,
          "min_balance": 700.0
        }
      ]
    },
    {
      "request_id": "request_239",
      "user_id": "user_239",
      "requested_amount": 642.0,
      "currency": "USD",
      "request_type": "investment",
      "request_text": "Would investing this amount leave my upcoming bills covered? I need to decide by 24 May 2025. I have an opportunity to invest USD 642.",
      "allows_partial_payment": false,
      "request_date": "2025-05-04",
      "desired_completion_date": "2025-05-24",
      "home_currency": "USD",
      "current_balance": 1988.9,
      "minimum_balance_to_keep": 600.0,
      "amount_safe_to_pay": 556.45,
      "affordability_status": "affordable_later",
      "recommended_payment_method": "wait",
      "payment_plan": "2025-05-15:642",
      "earliest_date_for_full_payment": "2025-05-15",
      "spending_changes_needed": "none",
      "decision_explanation": "Pay USD 642 in full on 15 May 2025. Paying earlier would take the balance below the USD 600 minimum.",
      "curve": [
        {
          "day": 0,
          "date": "2025-05-04",
          "balance": 1667.3,
          "min_balance": 600.0
        },
        {
          "day": 5,
          "date": "2025-05-09",
          "balance": 1416.48,
          "min_balance": 600.0
        },
        {
          "day": 10,
          "date": "2025-05-14",
          "balance": 1156.45,
          "min_balance": 600.0
        },
        {
          "day": 15,
          "date": "2025-05-19",
          "balance": 3018.11,
          "min_balance": 600.0
        },
        {
          "day": 20,
          "date": "2025-05-24",
          "balance": 2957.67,
          "min_balance": 600.0
        },
        {
          "day": 25,
          "date": "2025-05-29",
          "balance": 2852.17,
          "min_balance": 600.0
        },
        {
          "day": 30,
          "date": "2025-06-03",
          "balance": 2807.67,
          "min_balance": 600.0
        },
        {
          "day": 35,
          "date": "2025-06-08",
          "balance": 2305.62,
          "min_balance": 600.0
        },
        {
          "day": 40,
          "date": "2025-06-13",
          "balance": 2032.28,
          "min_balance": 600.0
        },
        {
          "day": 45,
          "date": "2025-06-18",
          "balance": 2816.88,
          "min_balance": 600.0
        },
        {
          "day": 50,
          "date": "2025-06-23",
          "balance": 2756.44,
          "min_balance": 600.0
        },
        {
          "day": 55,
          "date": "2025-06-28",
          "balance": 2650.94,
          "min_balance": 600.0
        },
        {
          "day": 60,
          "date": "2025-07-03",
          "balance": 2606.44,
          "min_balance": 600.0
        },
        {
          "day": 65,
          "date": "2025-07-08",
          "balance": 2104.39,
          "min_balance": 600.0
        },
        {
          "day": 70,
          "date": "2025-07-13",
          "balance": 1831.05,
          "min_balance": 600.0
        },
        {
          "day": 75,
          "date": "2025-07-18",
          "balance": 2615.65,
          "min_balance": 600.0
        },
        {
          "day": 80,
          "date": "2025-07-23",
          "balance": 2555.21,
          "min_balance": 600.0
        },
        {
          "day": 85,
          "date": "2025-07-28",
          "balance": 2449.71,
          "min_balance": 600.0
        },
        {
          "day": 90,
          "date": "2025-08-02",
          "balance": 2449.71,
          "min_balance": 600.0
        }
      ]
    },
    {
      "request_id": "request_240",
      "user_id": "user_240",
      "requested_amount": 101200.0,
      "currency": "INR",
      "request_type": "travel",
      "request_text": "The current quote for the trip is INR 101,200. Would it be safer to book the trip now or wait until more money comes in?",
      "allows_partial_payment": true,
      "request_date": "2026-01-06",
      "desired_completion_date": "2026-03-20",
      "home_currency": "INR",
      "current_balance": 92720.0,
      "minimum_balance_to_keep": 52800.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 20 March 2026. None of the available options keeps the INR 52,800 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2026-01-06",
          "balance": 84786.82,
          "min_balance": 52800.0
        },
        {
          "day": 5,
          "date": "2026-01-11",
          "balance": 64165.58,
          "min_balance": 52800.0
        },
        {
          "day": 10,
          "date": "2026-01-16",
          "balance": 119689.11,
          "min_balance": 52800.0
        },
        {
          "day": 15,
          "date": "2026-01-21",
          "balance": 113147.79,
          "min_balance": 52800.0
        },
        {
          "day": 20,
          "date": "2026-01-26",
          "balance": 102868.27,
          "min_balance": 52800.0
        },
        {
          "day": 25,
          "date": "2026-01-31",
          "balance": 94858.73,
          "min_balance": 52800.0
        },
        {
          "day": 30,
          "date": "2026-02-05",
          "balance": 69244.0,
          "min_balance": 52800.0
        },
        {
          "day": 35,
          "date": "2026-02-10",
          "balance": 45729.58,
          "min_balance": 52800.0
        },
        {
          "day": 40,
          "date": "2026-02-15",
          "balance": 101253.11,
          "min_balance": 52800.0
        },
        {
          "day": 45,
          "date": "2026-02-20",
          "balance": 96956.38,
          "min_balance": 52800.0
        },
        {
          "day": 50,
          "date": "2026-02-25",
          "balance": 85436.22,
          "min_balance": 52800.0
        },
        {
          "day": 55,
          "date": "2026-03-02",
          "balance": 57553.71,
          "min_balance": 52800.0
        },
        {
          "day": 60,
          "date": "2026-03-07",
          "balance": 37213.58,
          "min_balance": 52800.0
        },
        {
          "day": 65,
          "date": "2026-03-12",
          "balance": 26573.58,
          "min_balance": 52800.0
        },
        {
          "day": 70,
          "date": "2026-03-17",
          "balance": 82817.11,
          "min_balance": 52800.0
        },
        {
          "day": 75,
          "date": "2026-03-22",
          "balance": 70280.91,
          "min_balance": 52800.0
        },
        {
          "day": 80,
          "date": "2026-03-27",
          "balance": 61334.93,
          "min_balance": 52800.0
        },
        {
          "day": 85,
          "date": "2026-04-01",
          "balance": 39117.71,
          "min_balance": 52800.0
        },
        {
          "day": 90,
          "date": "2026-04-06",
          "balance": 26958.82,
          "min_balance": 52800.0
        }
      ]
    },
    {
      "request_id": "request_241",
      "user_id": "user_241",
      "requested_amount": 21052000.0,
      "currency": "IDR",
      "request_type": "family_transfer",
      "request_text": "Should I send the full amount, send part of it, or wait? I need to make a family transfer of IDR 21,052,000.",
      "allows_partial_payment": false,
      "request_date": "2024-03-03",
      "desired_completion_date": "2024-05-25",
      "home_currency": "IDR",
      "current_balance": 90172322.14,
      "minimum_balance_to_keep": 19252000.0,
      "amount_safe_to_pay": 21052000.0,
      "affordability_status": "affordable_with_plan",
      "recommended_payment_method": "installments",
      "payment_plan": "2024-03-17:7298026.67|2024-04-17:7298026.67|2024-05-18:7298026.67",
      "earliest_date_for_full_payment": "2024-03-03",
      "spending_changes_needed": "none",
      "decision_explanation": "Use 3 installments of IDR 7,298,026.67, starting 17 March 2024. This leaves at least IDR 19,252,000 available.",
      "curve": [
        {
          "day": 0,
          "date": "2024-03-03",
          "balance": 85905275.5,
          "min_balance": 19252000.0
        },
        {
          "day": 5,
          "date": "2024-03-08",
          "balance": 80937086.9,
          "min_balance": 19252000.0
        },
        {
          "day": 10,
          "date": "2024-03-13",
          "balance": 75151279.34,
          "min_balance": 19252000.0
        },
        {
          "day": 15,
          "date": "2024-03-18",
          "balance": 95856431.61,
          "min_balance": 19252000.0
        },
        {
          "day": 20,
          "date": "2024-03-23",
          "balance": 93523021.28,
          "min_balance": 19252000.0
        },
        {
          "day": 25,
          "date": "2024-03-28",
          "balance": 89420434.35,
          "min_balance": 19252000.0
        },
        {
          "day": 30,
          "date": "2024-04-02",
          "balance": 79303014.41,
          "min_balance": 19252000.0
        },
        {
          "day": 35,
          "date": "2024-04-07",
          "balance": 73145779.17,
          "min_balance": 19252000.0
        },
        {
          "day": 40,
          "date": "2024-04-12",
          "balance": 67359971.61,
          "min_balance": 19252000.0
        },
        {
          "day": 45,
          "date": "2024-04-17",
          "balance": 88065123.88,
          "min_balance": 19252000.0
        },
        {
          "day": 50,
          "date": "2024-04-22",
          "balance": 87166424.31,
          "min_balance": 19252000.0
        },
        {
          "day": 55,
          "date": "2024-04-27",
          "balance": 81629126.62,
          "min_balance": 19252000.0
        },
        {
          "day": 60,
          "date": "2024-05-02",
          "balance": 71511706.68,
          "min_balance": 19252000.0
        },
        {
          "day": 65,
          "date": "2024-05-07",
          "balance": 65354471.44,
          "min_balance": 19252000.0
        },
        {
          "day": 70,
          "date": "2024-05-12",
          "balance": 59568663.88,
          "min_balance": 19252000.0
        },
        {
          "day": 75,
          "date": "2024-05-17",
          "balance": 80273816.15,
          "min_balance": 19252000.0
        },
        {
          "day": 80,
          "date": "2024-05-22",
          "balance": 79375116.58,
          "min_balance": 19252000.0
        },
        {
          "day": 85,
          "date": "2024-05-27",
          "balance": 73837818.89,
          "min_balance": 19252000.0
        },
        {
          "day": 90,
          "date": "2024-06-01",
          "balance": 71336712.28,
          "min_balance": 19252000.0
        }
      ]
    },
    {
      "request_id": "request_242",
      "user_id": "user_242",
      "requested_amount": 1966.8,
      "currency": "EUR",
      "request_type": "debt_repayment",
      "request_text": "I would like to repay an additional EUR 1,966.80. I need to complete it by 25 August 2025. Can I make the extra loan payment now without affecting essential expenses?",
      "allows_partial_payment": false,
      "request_date": "2025-08-05",
      "desired_completion_date": "2025-08-25",
      "home_currency": "EUR",
      "current_balance": 1037.4,
      "minimum_balance_to_keep": 600.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 25 August 2025. None of the available options keeps the EUR 600 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2025-08-05",
          "balance": 969.4,
          "min_balance": 600.0
        },
        {
          "day": 5,
          "date": "2025-08-10",
          "balance": 677.21,
          "min_balance": 600.0
        },
        {
          "day": 10,
          "date": "2025-08-15",
          "balance": 980.75,
          "min_balance": 600.0
        },
        {
          "day": 15,
          "date": "2025-08-20",
          "balance": 907.35,
          "min_balance": 600.0
        },
        {
          "day": 20,
          "date": "2025-08-25",
          "balance": 755.87,
          "min_balance": 600.0
        },
        {
          "day": 25,
          "date": "2025-08-30",
          "balance": 658.08,
          "min_balance": 600.0
        },
        {
          "day": 30,
          "date": "2025-09-04",
          "balance": 244.69,
          "min_balance": 600.0
        },
        {
          "day": 35,
          "date": "2025-09-09",
          "balance": 20.5,
          "min_balance": 600.0
        },
        {
          "day": 40,
          "date": "2025-09-14",
          "balance": -189.26,
          "min_balance": 600.0
        },
        {
          "day": 45,
          "date": "2025-09-19",
          "balance": 250.64,
          "min_balance": 600.0
        },
        {
          "day": 50,
          "date": "2025-09-24",
          "balance": 112.87,
          "min_balance": 600.0
        },
        {
          "day": 55,
          "date": "2025-09-29",
          "balance": 84.94,
          "min_balance": 600.0
        },
        {
          "day": 60,
          "date": "2025-10-04",
          "balance": -412.02,
          "min_balance": 600.0
        },
        {
          "day": 65,
          "date": "2025-10-09",
          "balance": -636.21,
          "min_balance": 600.0
        },
        {
          "day": 70,
          "date": "2025-10-14",
          "balance": -845.97,
          "min_balance": 600.0
        },
        {
          "day": 75,
          "date": "2025-10-19",
          "balance": -406.07,
          "min_balance": 600.0
        },
        {
          "day": 80,
          "date": "2025-10-24",
          "balance": -543.84,
          "min_balance": 600.0
        },
        {
          "day": 85,
          "date": "2025-10-29",
          "balance": -571.77,
          "min_balance": 600.0
        },
        {
          "day": 90,
          "date": "2025-11-03",
          "balance": -1004.57,
          "min_balance": 600.0
        }
      ]
    },
    {
      "request_id": "request_243",
      "user_id": "user_243",
      "requested_amount": 17468.0,
      "currency": "ZAR",
      "request_type": "emergency_expense",
      "request_text": "Can I cover the full repair now and still manage my essential expenses? I need to decide by 9 August 2026. I've received a repair quote for ZAR 17,468.",
      "allows_partial_payment": false,
      "request_date": "2026-07-07",
      "desired_completion_date": "2026-08-09",
      "home_currency": "ZAR",
      "current_balance": 47470.4,
      "minimum_balance_to_keep": 19900.0,
      "amount_safe_to_pay": 16408.81,
      "affordability_status": "affordable_later",
      "recommended_payment_method": "wait",
      "payment_plan": "2026-07-15:17468",
      "earliest_date_for_full_payment": "2026-07-15",
      "spending_changes_needed": "none",
      "decision_explanation": "Pay ZAR 17,468 in full on 15 July 2026. Paying earlier would take the balance below the ZAR 19,900 minimum.",
      "curve": [
        {
          "day": 0,
          "date": "2026-07-07",
          "balance": 46399.0,
          "min_balance": 19900.0
        },
        {
          "day": 5,
          "date": "2026-07-12",
          "balance": 38367.28,
          "min_balance": 19900.0
        },
        {
          "day": 10,
          "date": "2026-07-17",
          "balance": 83695.62,
          "min_balance": 19900.0
        },
        {
          "day": 15,
          "date": "2026-07-22",
          "balance": 80166.78,
          "min_balance": 19900.0
        },
        {
          "day": 20,
          "date": "2026-07-27",
          "balance": 77525.11,
          "min_balance": 19900.0
        },
        {
          "day": 25,
          "date": "2026-08-01",
          "balance": 76211.47,
          "min_balance": 19900.0
        },
        {
          "day": 30,
          "date": "2026-08-06",
          "balance": 63478.25,
          "min_balance": 19900.0
        },
        {
          "day": 35,
          "date": "2026-08-11",
          "balance": 59884.34,
          "min_balance": 19900.0
        },
        {
          "day": 40,
          "date": "2026-08-16",
          "balance": 78439.46,
          "min_balance": 19900.0
        },
        {
          "day": 45,
          "date": "2026-08-21",
          "balance": 75778.38,
          "min_balance": 19900.0
        },
        {
          "day": 50,
          "date": "2026-08-26",
          "balance": 72521.49,
          "min_balance": 19900.0
        },
        {
          "day": 55,
          "date": "2026-08-31",
          "balance": 70952.71,
          "min_balance": 19900.0
        },
        {
          "day": 60,
          "date": "2026-09-05",
          "balance": 57648.9,
          "min_balance": 19900.0
        },
        {
          "day": 65,
          "date": "2026-09-10",
          "balance": 55412.58,
          "min_balance": 19900.0
        },
        {
          "day": 70,
          "date": "2026-09-15",
          "balance": 72610.11,
          "min_balance": 19900.0
        },
        {
          "day": 75,
          "date": "2026-09-20",
          "balance": 70802.8,
          "min_balance": 19900.0
        },
        {
          "day": 80,
          "date": "2026-09-25",
          "balance": 66692.14,
          "min_balance": 19900.0
        },
        {
          "day": 85,
          "date": "2026-09-30",
          "balance": 65123.36,
          "min_balance": 19900.0
        },
        {
          "day": 90,
          "date": "2026-10-05",
          "balance": 51819.55,
          "min_balance": 19900.0
        }
      ]
    },
    {
      "request_id": "request_244",
      "user_id": "user_244",
      "requested_amount": 49918.0,
      "currency": "ZAR",
      "request_type": "family_transfer",
      "request_text": "I want to send ZAR 49,918 to my family. Would sending the money now leave enough for my upcoming expenses?",
      "allows_partial_payment": false,
      "request_date": "2024-06-04",
      "desired_completion_date": "2024-07-16",
      "home_currency": "ZAR",
      "current_balance": 126279.2,
      "minimum_balance_to_keep": 45900.0,
      "amount_safe_to_pay": 47738.73,
      "affordability_status": "affordable_later",
      "recommended_payment_method": "wait",
      "payment_plan": "2024-06-15:49918",
      "earliest_date_for_full_payment": "2024-06-15",
      "spending_changes_needed": "none",
      "decision_explanation": "Pay ZAR 49,918 in full on 15 June 2024. Paying earlier would take the balance below the ZAR 45,900 minimum.",
      "curve": [
        {
          "day": 0,
          "date": "2024-06-04",
          "balance": 126279.2,
          "min_balance": 45900.0
        },
        {
          "day": 5,
          "date": "2024-06-09",
          "balance": 111061.41,
          "min_balance": 45900.0
        },
        {
          "day": 10,
          "date": "2024-06-14",
          "balance": 93638.73,
          "min_balance": 45900.0
        },
        {
          "day": 15,
          "date": "2024-06-19",
          "balance": 197969.14,
          "min_balance": 45900.0
        },
        {
          "day": 20,
          "date": "2024-06-24",
          "balance": 195980.13,
          "min_balance": 45900.0
        },
        {
          "day": 25,
          "date": "2024-06-29",
          "balance": 188202.81,
          "min_balance": 45900.0
        },
        {
          "day": 30,
          "date": "2024-07-04",
          "balance": 164070.86,
          "min_balance": 45900.0
        },
        {
          "day": 35,
          "date": "2024-07-09",
          "balance": 148853.07,
          "min_balance": 45900.0
        },
        {
          "day": 40,
          "date": "2024-07-14",
          "balance": 134948.19,
          "min_balance": 45900.0
        },
        {
          "day": 45,
          "date": "2024-07-19",
          "balance": 182518.6,
          "min_balance": 45900.0
        },
        {
          "day": 50,
          "date": "2024-07-24",
          "balance": 180529.59,
          "min_balance": 45900.0
        },
        {
          "day": 55,
          "date": "2024-07-29",
          "balance": 172752.27,
          "min_balance": 45900.0
        },
        {
          "day": 60,
          "date": "2024-08-03",
          "balance": 148620.32,
          "min_balance": 45900.0
        },
        {
          "day": 65,
          "date": "2024-08-08",
          "balance": 134968.38,
          "min_balance": 45900.0
        },
        {
          "day": 70,
          "date": "2024-08-13",
          "balance": 120900.74,
          "min_balance": 45900.0
        },
        {
          "day": 75,
          "date": "2024-08-18",
          "balance": 171066.61,
          "min_balance": 45900.0
        },
        {
          "day": 80,
          "date": "2024-08-23",
          "balance": 165079.05,
          "min_balance": 45900.0
        },
        {
          "day": 85,
          "date": "2024-08-28",
          "balance": 160080.96,
          "min_balance": 45900.0
        },
        {
          "day": 90,
          "date": "2024-09-02",
          "balance": 133169.78,
          "min_balance": 45900.0
        }
      ]
    },
    {
      "request_id": "request_245",
      "user_id": "user_245",
      "requested_amount": 128500.0,
      "currency": "INR",
      "request_type": "emergency_expense",
      "request_text": "Should I pay for the repair in full, split the payment, or wait? I need to cover an urgent repair of INR 128,500.",
      "allows_partial_payment": false,
      "request_date": "2025-11-06",
      "desired_completion_date": "2026-01-15",
      "home_currency": "INR",
      "current_balance": 160360.0,
      "minimum_balance_to_keep": 94600.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 15 January 2026. None of the available options keeps the INR 94,600 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2025-11-06",
          "balance": 150670.79,
          "min_balance": 94600.0
        },
        {
          "day": 5,
          "date": "2025-11-11",
          "balance": 131026.63,
          "min_balance": 94600.0
        },
        {
          "day": 10,
          "date": "2025-11-16",
          "balance": 253391.88,
          "min_balance": 94600.0
        },
        {
          "day": 15,
          "date": "2025-11-21",
          "balance": 234824.15,
          "min_balance": 94600.0
        },
        {
          "day": 20,
          "date": "2025-11-26",
          "balance": 215105.96,
          "min_balance": 94600.0
        },
        {
          "day": 25,
          "date": "2025-12-01",
          "balance": 189628.78,
          "min_balance": 94600.0
        },
        {
          "day": 30,
          "date": "2025-12-06",
          "balance": 134712.64,
          "min_balance": 94600.0
        },
        {
          "day": 35,
          "date": "2025-12-11",
          "balance": 115068.48,
          "min_balance": 94600.0
        },
        {
          "day": 40,
          "date": "2025-12-16",
          "balance": 237433.73,
          "min_balance": 94600.0
        },
        {
          "day": 45,
          "date": "2025-12-21",
          "balance": 218866.0,
          "min_balance": 94600.0
        },
        {
          "day": 50,
          "date": "2025-12-26",
          "balance": 199147.81,
          "min_balance": 94600.0
        },
        {
          "day": 55,
          "date": "2025-12-31",
          "balance": 183473.89,
          "min_balance": 94600.0
        },
        {
          "day": 60,
          "date": "2026-01-05",
          "balance": 128443.7,
          "min_balance": 94600.0
        },
        {
          "day": 65,
          "date": "2026-01-10",
          "balance": 99110.33,
          "min_balance": 94600.0
        },
        {
          "day": 70,
          "date": "2026-01-15",
          "balance": 229228.69,
          "min_balance": 94600.0
        },
        {
          "day": 75,
          "date": "2026-01-20",
          "balance": 206308.63,
          "min_balance": 94600.0
        },
        {
          "day": 80,
          "date": "2026-01-25",
          "balance": 193601.88,
          "min_balance": 94600.0
        },
        {
          "day": 85,
          "date": "2026-01-30",
          "balance": 174348.98,
          "min_balance": 94600.0
        },
        {
          "day": 90,
          "date": "2026-02-04",
          "balance": 116313.6,
          "min_balance": 94600.0
        }
      ]
    },
    {
      "request_id": "request_246",
      "user_id": "user_246",
      "requested_amount": 64086.0,
      "currency": "ZAR",
      "request_type": "education",
      "request_text": "I'm considering a professional course priced at ZAR 64,086. I need to complete it by 2 June 2026. Is it safe to cover the full course fee by the deadline?",
      "allows_partial_payment": false,
      "request_date": "2026-04-03",
      "desired_completion_date": "2026-06-02",
      "home_currency": "ZAR",
      "current_balance": 201692.06,
      "minimum_balance_to_keep": 39300.0,
      "amount_safe_to_pay": 64086.0,
      "affordability_status": "affordable_with_plan",
      "recommended_payment_method": "installments",
      "payment_plan": "2026-04-03:22216.48|2026-05-03:22216.48|2026-06-02:22216.48",
      "earliest_date_for_full_payment": "2026-04-03",
      "spending_changes_needed": "none",
      "decision_explanation": "Use 3 installments of ZAR 22,216.48, starting 3 April 2026. This leaves at least ZAR 39,300 available.",
      "curve": [
        {
          "day": 0,
          "date": "2026-04-03",
          "balance": 187458.06,
          "min_balance": 39300.0
        },
        {
          "day": 5,
          "date": "2026-04-08",
          "balance": 177808.6,
          "min_balance": 39300.0
        },
        {
          "day": 10,
          "date": "2026-04-13",
          "balance": 172118.91,
          "min_balance": 39300.0
        },
        {
          "day": 15,
          "date": "2026-04-18",
          "balance": 216899.91,
          "min_balance": 39300.0
        },
        {
          "day": 20,
          "date": "2026-04-23",
          "balance": 214732.03,
          "min_balance": 39300.0
        },
        {
          "day": 25,
          "date": "2026-04-28",
          "balance": 207413.13,
          "min_balance": 39300.0
        },
        {
          "day": 30,
          "date": "2026-05-03",
          "balance": 190801.35,
          "min_balance": 39300.0
        },
        {
          "day": 35,
          "date": "2026-05-08",
          "balance": 181151.89,
          "min_balance": 39300.0
        },
        {
          "day": 40,
          "date": "2026-05-13",
          "balance": 175462.2,
          "min_balance": 39300.0
        },
        {
          "day": 45,
          "date": "2026-05-18",
          "balance": 220243.2,
          "min_balance": 39300.0
        },
        {
          "day": 50,
          "date": "2026-05-23",
          "balance": 218075.32,
          "min_balance": 39300.0
        },
        {
          "day": 55,
          "date": "2026-05-28",
          "balance": 210756.42,
          "min_balance": 39300.0
        },
        {
          "day": 60,
          "date": "2026-06-02",
          "balance": 208378.64,
          "min_balance": 39300.0
        },
        {
          "day": 65,
          "date": "2026-06-07",
          "balance": 186227.04,
          "min_balance": 39300.0
        },
        {
          "day": 70,
          "date": "2026-06-12",
          "balance": 182492.39,
          "min_balance": 39300.0
        },
        {
          "day": 75,
          "date": "2026-06-17",
          "balance": 226131.02,
          "min_balance": 39300.0
        },
        {
          "day": 80,
          "date": "2026-06-22",
          "balance": 221418.61,
          "min_balance": 39300.0
        },
        {
          "day": 85,
          "date": "2026-06-27",
          "balance": 218312.05,
          "min_balance": 39300.0
        },
        {
          "day": 90,
          "date": "2026-07-02",
          "balance": 211721.93,
          "min_balance": 39300.0
        }
      ]
    },
    {
      "request_id": "request_247",
      "user_id": "user_247",
      "requested_amount": 1059.3,
      "currency": "EUR",
      "request_type": "family_transfer",
      "request_text": "Can I make the full transfer without falling short on my own bills? I need to decide by 8 November 2024. I'm planning to send my family EUR 1,059.30.",
      "allows_partial_payment": true,
      "request_date": "2024-09-05",
      "desired_completion_date": "2024-11-08",
      "home_currency": "EUR",
      "current_balance": 2819.2,
      "minimum_balance_to_keep": 1300.0,
      "amount_safe_to_pay": 909.71,
      "affordability_status": "affordable_with_plan",
      "recommended_payment_method": "full_payment",
      "payment_plan": "2024-09-05:1059.30",
      "earliest_date_for_full_payment": "2024-11-15",
      "spending_changes_needed": "reduce_to:event_22750:20|stop:event_22685",
      "decision_explanation": "Reduce the bakery and snacks to EUR 20 and Stop the fitness club membership, then pay EUR 1,059.30 today. This leaves at least EUR 1,300 available.",
      "curve": [
        {
          "day": 0,
          "date": "2024-09-05",
          "balance": 2819.2,
          "min_balance": 1300.0
        },
        {
          "day": 5,
          "date": "2024-09-10",
          "balance": 2608.46,
          "min_balance": 1300.0
        },
        {
          "day": 10,
          "date": "2024-09-15",
          "balance": 3914.8,
          "min_balance": 1300.0
        },
        {
          "day": 15,
          "date": "2024-09-20",
          "balance": 3659.8,
          "min_balance": 1300.0
        },
        {
          "day": 20,
          "date": "2024-09-25",
          "balance": 3453.94,
          "min_balance": 1300.0
        },
        {
          "day": 25,
          "date": "2024-09-30",
          "balance": 3148.59,
          "min_balance": 1300.0
        },
        {
          "day": 30,
          "date": "2024-10-05",
          "balance": 2682.82,
          "min_balance": 1300.0
        },
        {
          "day": 35,
          "date": "2024-10-10",
          "balance": 2472.08,
          "min_balance": 1300.0
        },
        {
          "day": 40,
          "date": "2024-10-15",
          "balance": 3778.42,
          "min_balance": 1300.0
        },
        {
          "day": 45,
          "date": "2024-10-20",
          "balance": 3523.42,
          "min_balance": 1300.0
        },
        {
          "day": 50,
          "date": "2024-10-25",
          "balance": 3317.56,
          "min_balance": 1300.0
        },
        {
          "day": 55,
          "date": "2024-10-30",
          "balance": 3012.21,
          "min_balance": 1300.0
        },
        {
          "day": 60,
          "date": "2024-11-04",
          "balance": 2546.44,
          "min_balance": 1300.0
        },
        {
          "day": 65,
          "date": "2024-11-09",
          "balance": 2335.7,
          "min_balance": 1300.0
        },
        {
          "day": 70,
          "date": "2024-11-14",
          "balance": 2209.71,
          "min_balance": 1300.0
        },
        {
          "day": 75,
          "date": "2024-11-19",
          "balance": 3433.74,
          "min_balance": 1300.0
        },
        {
          "day": 80,
          "date": "2024-11-24",
          "balance": 3181.18,
          "min_balance": 1300.0
        },
        {
          "day": 85,
          "date": "2024-11-29",
          "balance": 2924.13,
          "min_balance": 1300.0
        },
        {
          "day": 90,
          "date": "2024-12-04",
          "balance": 2410.06,
          "min_balance": 1300.0
        }
      ]
    },
    {
      "request_id": "request_248",
      "user_id": "user_248",
      "requested_amount": 1965.6,
      "currency": "USD",
      "request_type": "investment",
      "request_text": "I'm considering setting aside USD 1,965.60 for an investment. What portion can I invest today without going below my minimum balance?",
      "allows_partial_payment": true,
      "request_date": "2025-02-07",
      "desired_completion_date": "2025-04-28",
      "home_currency": "USD",
      "current_balance": 2807.36,
      "minimum_balance_to_keep": 1300.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 28 April 2025. None of the available options keeps the USD 1,300 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2025-02-07",
          "balance": 2807.36,
          "min_balance": 1300.0
        },
        {
          "day": 5,
          "date": "2025-02-12",
          "balance": 2259.78,
          "min_balance": 1300.0
        },
        {
          "day": 10,
          "date": "2025-02-17",
          "balance": 2160.33,
          "min_balance": 1300.0
        },
        {
          "day": 15,
          "date": "2025-02-22",
          "balance": 1974.63,
          "min_balance": 1300.0
        },
        {
          "day": 20,
          "date": "2025-02-27",
          "balance": 2509.01,
          "min_balance": 1300.0
        },
        {
          "day": 25,
          "date": "2025-03-04",
          "balance": 1902.45,
          "min_balance": 1300.0
        },
        {
          "day": 30,
          "date": "2025-03-09",
          "balance": 1687.1,
          "min_balance": 1300.0
        },
        {
          "day": 35,
          "date": "2025-03-14",
          "balance": 1226.85,
          "min_balance": 1300.0
        },
        {
          "day": 40,
          "date": "2025-03-19",
          "balance": 1044.05,
          "min_balance": 1300.0
        },
        {
          "day": 45,
          "date": "2025-03-24",
          "balance": 1476.08,
          "min_balance": 1300.0
        },
        {
          "day": 50,
          "date": "2025-03-29",
          "balance": 1397.95,
          "min_balance": 1300.0
        },
        {
          "day": 55,
          "date": "2025-04-03",
          "balance": 929.61,
          "min_balance": 1300.0
        },
        {
          "day": 60,
          "date": "2025-04-08",
          "balance": 741.5,
          "min_balance": 1300.0
        },
        {
          "day": 65,
          "date": "2025-04-13",
          "balance": 193.92,
          "min_balance": 1300.0
        },
        {
          "day": 70,
          "date": "2025-04-18",
          "balance": 60.3,
          "min_balance": 1300.0
        },
        {
          "day": 75,
          "date": "2025-04-23",
          "balance": -119.86,
          "min_balance": 1300.0
        },
        {
          "day": 80,
          "date": "2025-04-28",
          "balance": 402.71,
          "min_balance": 1300.0
        },
        {
          "day": 85,
          "date": "2025-05-03",
          "balance": -103.32,
          "min_balance": 1300.0
        },
        {
          "day": 90,
          "date": "2025-05-08",
          "balance": -291.43,
          "min_balance": 1300.0
        }
      ]
    },
    {
      "request_id": "request_249",
      "user_id": "user_249",
      "requested_amount": 643.2,
      "currency": "USD",
      "request_type": "other",
      "request_text": "Is the full membership fee affordable today, or should I wait? The annual plan comes to USD 643.20.",
      "allows_partial_payment": false,
      "request_date": "2026-01-04",
      "desired_completion_date": "2026-03-15",
      "home_currency": "USD",
      "current_balance": 942.4,
      "minimum_balance_to_keep": 600.0,
      "amount_safe_to_pay": 10.77,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 15 March 2026. None of the available options keeps the USD 600 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2026-01-04",
          "balance": 924.51,
          "min_balance": 600.0
        },
        {
          "day": 5,
          "date": "2026-01-09",
          "balance": 743.89,
          "min_balance": 600.0
        },
        {
          "day": 10,
          "date": "2026-01-14",
          "balance": 688.27,
          "min_balance": 600.0
        },
        {
          "day": 15,
          "date": "2026-01-19",
          "balance": 1296.87,
          "min_balance": 600.0
        },
        {
          "day": 20,
          "date": "2026-01-24",
          "balance": 1228.43,
          "min_balance": 600.0
        },
        {
          "day": 25,
          "date": "2026-01-29",
          "balance": 1165.16,
          "min_balance": 600.0
        },
        {
          "day": 30,
          "date": "2026-02-03",
          "balance": 903.65,
          "min_balance": 600.0
        },
        {
          "day": 35,
          "date": "2026-02-08",
          "balance": 752.04,
          "min_balance": 600.0
        },
        {
          "day": 40,
          "date": "2026-02-13",
          "balance": 676.54,
          "min_balance": 600.0
        },
        {
          "day": 45,
          "date": "2026-02-18",
          "balance": 1285.28,
          "min_balance": 600.0
        },
        {
          "day": 50,
          "date": "2026-02-23",
          "balance": 1206.9,
          "min_balance": 600.0
        },
        {
          "day": 55,
          "date": "2026-02-28",
          "balance": 1107.41,
          "min_balance": 600.0
        },
        {
          "day": 60,
          "date": "2026-03-05",
          "balance": 847.01,
          "min_balance": 600.0
        },
        {
          "day": 65,
          "date": "2026-03-10",
          "balance": 666.39,
          "min_balance": 600.0
        },
        {
          "day": 70,
          "date": "2026-03-15",
          "balance": 1312.77,
          "min_balance": 600.0
        },
        {
          "day": 75,
          "date": "2026-03-20",
          "balance": 1207.82,
          "min_balance": 600.0
        },
        {
          "day": 80,
          "date": "2026-03-25",
          "balance": 1150.93,
          "min_balance": 600.0
        },
        {
          "day": 85,
          "date": "2026-03-30",
          "balance": 1068.66,
          "min_balance": 600.0
        },
        {
          "day": 90,
          "date": "2026-04-04",
          "balance": 808.26,
          "min_balance": 600.0
        }
      ]
    },
    {
      "request_id": "request_250",
      "user_id": "user_250",
      "requested_amount": 124278.0,
      "currency": "ZAR",
      "request_type": "debt_repayment",
      "request_text": "The extra repayment I'm considering is ZAR 124,278. I need to complete it by 18 January 2025. Can I clear this additional amount without putting upcoming bills at risk?",
      "allows_partial_payment": true,
      "request_date": "2024-12-06",
      "desired_completion_date": "2025-01-18",
      "home_currency": "ZAR",
      "current_balance": 64120.0,
      "minimum_balance_to_keep": 35300.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 18 January 2025. None of the available options keeps the ZAR 35,300 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2024-12-06",
          "balance": 64120.0,
          "min_balance": 35300.0
        },
        {
          "day": 5,
          "date": "2024-12-11",
          "balance": 52386.61,
          "min_balance": 35300.0
        },
        {
          "day": 10,
          "date": "2024-12-16",
          "balance": 96142.16,
          "min_balance": 35300.0
        },
        {
          "day": 15,
          "date": "2024-12-21",
          "balance": 89790.21,
          "min_balance": 35300.0
        },
        {
          "day": 20,
          "date": "2024-12-26",
          "balance": 88345.38,
          "min_balance": 35300.0
        },
        {
          "day": 25,
          "date": "2024-12-31",
          "balance": 77295.09,
          "min_balance": 35300.0
        },
        {
          "day": 30,
          "date": "2025-01-05",
          "balance": 59516.7,
          "min_balance": 35300.0
        },
        {
          "day": 35,
          "date": "2025-01-10",
          "balance": 50524.11,
          "min_balance": 35300.0
        },
        {
          "day": 40,
          "date": "2025-01-15",
          "balance": 91538.86,
          "min_balance": 35300.0
        },
        {
          "day": 45,
          "date": "2025-01-20",
          "balance": 85186.91,
          "min_balance": 35300.0
        },
        {
          "day": 50,
          "date": "2025-01-25",
          "balance": 85186.91,
          "min_balance": 35300.0
        },
        {
          "day": 55,
          "date": "2025-01-30",
          "balance": 75088.88,
          "min_balance": 35300.0
        },
        {
          "day": 60,
          "date": "2025-02-04",
          "balance": 54913.4,
          "min_balance": 35300.0
        },
        {
          "day": 65,
          "date": "2025-02-09",
          "balance": 45920.81,
          "min_balance": 35300.0
        },
        {
          "day": 70,
          "date": "2025-02-14",
          "balance": 33255.56,
          "min_balance": 35300.0
        },
        {
          "day": 75,
          "date": "2025-02-19",
          "balance": 80583.61,
          "min_balance": 35300.0
        },
        {
          "day": 80,
          "date": "2025-02-24",
          "balance": 80583.61,
          "min_balance": 35300.0
        },
        {
          "day": 85,
          "date": "2025-03-01",
          "balance": 68088.49,
          "min_balance": 35300.0
        },
        {
          "day": 90,
          "date": "2025-03-06",
          "balance": 50310.1,
          "min_balance": 35300.0
        }
      ]
    },
    {
      "request_id": "request_251",
      "user_id": "user_251",
      "requested_amount": 1513.6,
      "currency": "EUR",
      "request_type": "education",
      "request_text": "Is it safe to cover the full course fee by the deadline? I need to decide by 6 June 2025. The course fee is EUR 1,513.60.",
      "allows_partial_payment": false,
      "request_date": "2025-05-03",
      "desired_completion_date": "2025-06-06",
      "home_currency": "EUR",
      "current_balance": 4648.55,
      "minimum_balance_to_keep": 1300.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 6 June 2025. None of the available options keeps the EUR 1,300 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2025-05-03",
          "balance": 4648.55,
          "min_balance": 1300.0
        },
        {
          "day": 5,
          "date": "2025-05-08",
          "balance": 3939.42,
          "min_balance": 1300.0
        },
        {
          "day": 10,
          "date": "2025-05-13",
          "balance": 3735.06,
          "min_balance": 1300.0
        },
        {
          "day": 15,
          "date": "2025-05-18",
          "balance": 3543.0,
          "min_balance": 1300.0
        },
        {
          "day": 20,
          "date": "2025-05-23",
          "balance": 3356.53,
          "min_balance": 1300.0
        },
        {
          "day": 25,
          "date": "2025-05-28",
          "balance": 3466.12,
          "min_balance": 1300.0
        },
        {
          "day": 30,
          "date": "2025-06-02",
          "balance": 3436.62,
          "min_balance": 1300.0
        },
        {
          "day": 35,
          "date": "2025-06-07",
          "balance": 2881.26,
          "min_balance": 1300.0
        },
        {
          "day": 40,
          "date": "2025-06-12",
          "balance": 2572.77,
          "min_balance": 1300.0
        },
        {
          "day": 45,
          "date": "2025-06-17",
          "balance": 2371.97,
          "min_balance": 1300.0
        },
        {
          "day": 50,
          "date": "2025-06-22",
          "balance": 2206.29,
          "min_balance": 1300.0
        },
        {
          "day": 55,
          "date": "2025-06-27",
          "balance": 2254.19,
          "min_balance": 1300.0
        },
        {
          "day": 60,
          "date": "2025-07-02",
          "balance": 2224.69,
          "min_balance": 1300.0
        },
        {
          "day": 65,
          "date": "2025-07-07",
          "balance": 1669.33,
          "min_balance": 1300.0
        },
        {
          "day": 70,
          "date": "2025-07-12",
          "balance": 1360.84,
          "min_balance": 1300.0
        },
        {
          "day": 75,
          "date": "2025-07-17",
          "balance": 1160.04,
          "min_balance": 1300.0
        },
        {
          "day": 80,
          "date": "2025-07-22",
          "balance": 994.36,
          "min_balance": 1300.0
        },
        {
          "day": 85,
          "date": "2025-07-27",
          "balance": 1042.26,
          "min_balance": 1300.0
        },
        {
          "day": 90,
          "date": "2025-08-01",
          "balance": 1012.76,
          "min_balance": 1300.0
        }
      ]
    },
    {
      "request_id": "request_252",
      "user_id": "user_252",
      "requested_amount": 28082000.0,
      "currency": "IDR",
      "request_type": "family_transfer",
      "request_text": "My family needs a transfer of IDR 28,082,000. Can I make the full transfer without falling short on my own bills?",
      "allows_partial_payment": false,
      "request_date": "2026-07-05",
      "desired_completion_date": "2026-09-15",
      "home_currency": "IDR",
      "current_balance": 25250700.0,
      "minimum_balance_to_keep": 15152200.0,
      "amount_safe_to_pay": 72105.52,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 15 September 2026. None of the available options keeps the IDR 15,152,200 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2026-07-05",
          "balance": 23325549.1,
          "min_balance": 15152200.0
        },
        {
          "day": 5,
          "date": "2026-07-10",
          "balance": 17353972.54,
          "min_balance": 15152200.0
        },
        {
          "day": 10,
          "date": "2026-07-15",
          "balance": 35960434.62,
          "min_balance": 15152200.0
        },
        {
          "day": 15,
          "date": "2026-07-20",
          "balance": 33328333.04,
          "min_balance": 15152200.0
        },
        {
          "day": 20,
          "date": "2026-07-25",
          "balance": 30831099.97,
          "min_balance": 15152200.0
        },
        {
          "day": 25,
          "date": "2026-07-30",
          "balance": 25877175.12,
          "min_balance": 15152200.0
        },
        {
          "day": 30,
          "date": "2026-08-04",
          "balance": 22632261.99,
          "min_balance": 15152200.0
        },
        {
          "day": 35,
          "date": "2026-08-09",
          "balance": 17481457.9,
          "min_balance": 15152200.0
        },
        {
          "day": 40,
          "date": "2026-08-14",
          "balance": 15866743.53,
          "min_balance": 15152200.0
        },
        {
          "day": 45,
          "date": "2026-08-19",
          "balance": 32685895.03,
          "min_balance": 15152200.0
        },
        {
          "day": 50,
          "date": "2026-08-24",
          "balance": 30188661.96,
          "min_balance": 15152200.0
        },
        {
          "day": 55,
          "date": "2026-08-29",
          "balance": 26003654.49,
          "min_balance": 15152200.0
        },
        {
          "day": 60,
          "date": "2026-09-03",
          "balance": 21989823.98,
          "min_balance": 15152200.0
        },
        {
          "day": 65,
          "date": "2026-09-08",
          "balance": 18234309.36,
          "min_balance": 15152200.0
        },
        {
          "day": 70,
          "date": "2026-09-13",
          "balance": 15224305.52,
          "min_balance": 15152200.0
        },
        {
          "day": 75,
          "date": "2026-09-18",
          "balance": 32577733.63,
          "min_balance": 15152200.0
        },
        {
          "day": 80,
          "date": "2026-09-23",
          "balance": 31286660.94,
          "min_balance": 15152200.0
        },
        {
          "day": 85,
          "date": "2026-09-28",
          "balance": 26726986.08,
          "min_balance": 15152200.0
        },
        {
          "day": 90,
          "date": "2026-10-03",
          "balance": 21347385.97,
          "min_balance": 15152200.0
        }
      ]
    },
    {
      "request_id": "request_253",
      "user_id": "user_253",
      "requested_amount": 2840.2,
      "currency": "EUR",
      "request_type": "housing",
      "request_text": "Would paying the full deposit leave enough for my other commitments? I need to pay a EUR 2,840.20 rental deposit.",
      "allows_partial_payment": false,
      "request_date": "2024-03-07",
      "desired_completion_date": "2024-06-01",
      "home_currency": "EUR",
      "current_balance": 4635.57,
      "minimum_balance_to_keep": 2300.0,
      "amount_safe_to_pay": 189.13,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 1 June 2024. None of the available options keeps the EUR 2,300 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2024-03-07",
          "balance": 4448.75,
          "min_balance": 2300.0
        },
        {
          "day": 5,
          "date": "2024-03-12",
          "balance": 3707.68,
          "min_balance": 2300.0
        },
        {
          "day": 10,
          "date": "2024-03-17",
          "balance": 6320.99,
          "min_balance": 2300.0
        },
        {
          "day": 15,
          "date": "2024-03-22",
          "balance": 5928.47,
          "min_balance": 2300.0
        },
        {
          "day": 20,
          "date": "2024-03-27",
          "balance": 5773.2,
          "min_balance": 2300.0
        },
        {
          "day": 25,
          "date": "2024-04-01",
          "balance": 5382.13,
          "min_balance": 2300.0
        },
        {
          "day": 30,
          "date": "2024-04-06",
          "balance": 3901.27,
          "min_balance": 2300.0
        },
        {
          "day": 35,
          "date": "2024-04-11",
          "balance": 3261.99,
          "min_balance": 2300.0
        },
        {
          "day": 40,
          "date": "2024-04-16",
          "balance": 5778.69,
          "min_balance": 2300.0
        },
        {
          "day": 45,
          "date": "2024-04-21",
          "balance": 5386.17,
          "min_balance": 2300.0
        },
        {
          "day": 50,
          "date": "2024-04-26",
          "balance": 5275.12,
          "min_balance": 2300.0
        },
        {
          "day": 55,
          "date": "2024-05-01",
          "balance": 4839.83,
          "min_balance": 2300.0
        },
        {
          "day": 60,
          "date": "2024-05-06",
          "balance": 3358.97,
          "min_balance": 2300.0
        },
        {
          "day": 65,
          "date": "2024-05-11",
          "balance": 2719.69,
          "min_balance": 2300.0
        },
        {
          "day": 70,
          "date": "2024-05-16",
          "balance": 5236.39,
          "min_balance": 2300.0
        },
        {
          "day": 75,
          "date": "2024-05-21",
          "balance": 4843.87,
          "min_balance": 2300.0
        },
        {
          "day": 80,
          "date": "2024-05-26",
          "balance": 4732.82,
          "min_balance": 2300.0
        },
        {
          "day": 85,
          "date": "2024-05-31",
          "balance": 4443.07,
          "min_balance": 2300.0
        },
        {
          "day": 90,
          "date": "2024-06-05",
          "balance": 3068.17,
          "min_balance": 2300.0
        }
      ]
    },
    {
      "request_id": "request_254",
      "user_id": "user_254",
      "requested_amount": 3535.2,
      "currency": "USD",
      "request_type": "other",
      "request_text": "The annual membership costs USD 3,535.20. I need to complete it by 15 October 2025. Is the full membership fee affordable today, or should I wait?",
      "allows_partial_payment": true,
      "request_date": "2025-08-04",
      "desired_completion_date": "2025-10-15",
      "home_currency": "USD",
      "current_balance": 4259.6,
      "minimum_balance_to_keep": 2500.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 15 October 2025. None of the available options keeps the USD 2,500 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2025-08-04",
          "balance": 4015.6,
          "min_balance": 2500.0
        },
        {
          "day": 5,
          "date": "2025-08-09",
          "balance": 2971.82,
          "min_balance": 2500.0
        },
        {
          "day": 10,
          "date": "2025-08-14",
          "balance": 2531.35,
          "min_balance": 2500.0
        },
        {
          "day": 15,
          "date": "2025-08-19",
          "balance": 4812.03,
          "min_balance": 2500.0
        },
        {
          "day": 20,
          "date": "2025-08-24",
          "balance": 4666.73,
          "min_balance": 2500.0
        },
        {
          "day": 25,
          "date": "2025-08-29",
          "balance": 4225.17,
          "min_balance": 2500.0
        },
        {
          "day": 30,
          "date": "2025-09-03",
          "balance": 4175.08,
          "min_balance": 2500.0
        },
        {
          "day": 35,
          "date": "2025-09-08",
          "balance": 3416.51,
          "min_balance": 2500.0
        },
        {
          "day": 40,
          "date": "2025-09-13",
          "balance": 2515.87,
          "min_balance": 2500.0
        },
        {
          "day": 45,
          "date": "2025-09-18",
          "balance": 4943.95,
          "min_balance": 2500.0
        },
        {
          "day": 50,
          "date": "2025-09-23",
          "balance": 4644.49,
          "min_balance": 2500.0
        },
        {
          "day": 55,
          "date": "2025-09-28",
          "balance": 4519.73,
          "min_balance": 2500.0
        },
        {
          "day": 60,
          "date": "2025-10-03",
          "balance": 4090.56,
          "min_balance": 2500.0
        },
        {
          "day": 65,
          "date": "2025-10-08",
          "balance": 3331.99,
          "min_balance": 2500.0
        },
        {
          "day": 70,
          "date": "2025-10-13",
          "balance": 2431.35,
          "min_balance": 2500.0
        },
        {
          "day": 75,
          "date": "2025-10-18",
          "balance": 4859.43,
          "min_balance": 2500.0
        },
        {
          "day": 80,
          "date": "2025-10-23",
          "balance": 4559.97,
          "min_balance": 2500.0
        },
        {
          "day": 85,
          "date": "2025-10-28",
          "balance": 4435.21,
          "min_balance": 2500.0
        },
        {
          "day": 90,
          "date": "2025-11-02",
          "balance": 4006.04,
          "min_balance": 2500.0
        }
      ]
    },
    {
      "request_id": "request_255",
      "user_id": "user_255",
      "requested_amount": 3345000.0,
      "currency": "IDR",
      "request_type": "family_transfer",
      "request_text": "How much can I safely send to my family today? I need to decide by 15 June 2026. I need to make a family transfer of IDR 3,345,000.",
      "allows_partial_payment": true,
      "request_date": "2026-04-06",
      "desired_completion_date": "2026-06-15",
      "home_currency": "IDR",
      "current_balance": 38518150.0,
      "minimum_balance_to_keep": 9813900.0,
      "amount_safe_to_pay": 3345000.0,
      "affordability_status": "affordable_now",
      "recommended_payment_method": "full_payment",
      "payment_plan": "2026-04-06:3345000",
      "earliest_date_for_full_payment": "2026-04-06",
      "spending_changes_needed": "none",
      "decision_explanation": "Pay IDR 3,345,000 today. This leaves at least IDR 9,813,900 available over the next 90 days.",
      "curve": [
        {
          "day": 0,
          "date": "2026-04-06",
          "balance": 37447316.46,
          "min_balance": 9813900.0
        },
        {
          "day": 5,
          "date": "2026-04-11",
          "balance": 34806680.39,
          "min_balance": 9813900.0
        },
        {
          "day": 10,
          "date": "2026-04-16",
          "balance": 49111118.24,
          "min_balance": 9813900.0
        },
        {
          "day": 15,
          "date": "2026-04-21",
          "balance": 47265371.92,
          "min_balance": 9813900.0
        },
        {
          "day": 20,
          "date": "2026-04-26",
          "balance": 45112816.5,
          "min_balance": 9813900.0
        },
        {
          "day": 25,
          "date": "2026-05-01",
          "balance": 43177618.33,
          "min_balance": 9813900.0
        },
        {
          "day": 30,
          "date": "2026-05-06",
          "balance": 38268784.79,
          "min_balance": 9813900.0
        },
        {
          "day": 35,
          "date": "2026-05-11",
          "balance": 35628148.72,
          "min_balance": 9813900.0
        },
        {
          "day": 40,
          "date": "2026-05-16",
          "balance": 49932586.57,
          "min_balance": 9813900.0
        },
        {
          "day": 45,
          "date": "2026-05-21",
          "balance": 48086840.25,
          "min_balance": 9813900.0
        },
        {
          "day": 50,
          "date": "2026-05-26",
          "balance": 45934284.83,
          "min_balance": 9813900.0
        },
        {
          "day": 55,
          "date": "2026-05-31",
          "balance": 44653463.38,
          "min_balance": 9813900.0
        },
        {
          "day": 60,
          "date": "2026-06-05",
          "balance": 40161086.66,
          "min_balance": 9813900.0
        },
        {
          "day": 65,
          "date": "2026-06-10",
          "balance": 36856217.05,
          "min_balance": 9813900.0
        },
        {
          "day": 70,
          "date": "2026-06-15",
          "balance": 50754054.9,
          "min_balance": 9813900.0
        },
        {
          "day": 75,
          "date": "2026-06-20",
          "balance": 49515401.99,
          "min_balance": 9813900.0
        },
        {
          "day": 80,
          "date": "2026-06-25",
          "balance": 46755753.16,
          "min_balance": 9813900.0
        },
        {
          "day": 85,
          "date": "2026-06-30",
          "balance": 45474931.71,
          "min_balance": 9813900.0
        },
        {
          "day": 90,
          "date": "2026-07-05",
          "balance": 40982554.99,
          "min_balance": 9813900.0
        }
      ]
    },
    {
      "request_id": "request_256",
      "user_id": "user_256",
      "requested_amount": 218700.0,
      "currency": "INR",
      "request_type": "investment",
      "request_text": "I'm thinking of investing INR 218,700. Is it safer to invest now, invest a smaller amount, or wait?",
      "allows_partial_payment": false,
      "request_date": "2024-06-03",
      "desired_completion_date": "2024-08-19",
      "home_currency": "INR",
      "current_balance": 394983.28,
      "minimum_balance_to_keep": 168600.0,
      "amount_safe_to_pay": 32979.22,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 19 August 2024. None of the available options keeps the INR 168,600 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2024-06-03",
          "balance": 379759.16,
          "min_balance": 168600.0
        },
        {
          "day": 5,
          "date": "2024-06-08",
          "balance": 343711.72,
          "min_balance": 168600.0
        },
        {
          "day": 10,
          "date": "2024-06-13",
          "balance": 292242.34,
          "min_balance": 168600.0
        },
        {
          "day": 15,
          "date": "2024-06-18",
          "balance": 465441.61,
          "min_balance": 168600.0
        },
        {
          "day": 20,
          "date": "2024-06-23",
          "balance": 447145.82,
          "min_balance": 168600.0
        },
        {
          "day": 25,
          "date": "2024-06-28",
          "balance": 427040.47,
          "min_balance": 168600.0
        },
        {
          "day": 30,
          "date": "2024-07-03",
          "balance": 338547.84,
          "min_balance": 168600.0
        },
        {
          "day": 35,
          "date": "2024-07-08",
          "balance": 302500.4,
          "min_balance": 168600.0
        },
        {
          "day": 40,
          "date": "2024-07-13",
          "balance": 251031.02,
          "min_balance": 168600.0
        },
        {
          "day": 45,
          "date": "2024-07-18",
          "balance": 424230.29,
          "min_balance": 168600.0
        },
        {
          "day": 50,
          "date": "2024-07-23",
          "balance": 405934.5,
          "min_balance": 168600.0
        },
        {
          "day": 55,
          "date": "2024-07-28",
          "balance": 385829.15,
          "min_balance": 168600.0
        },
        {
          "day": 60,
          "date": "2024-08-02",
          "balance": 312560.64,
          "min_balance": 168600.0
        },
        {
          "day": 65,
          "date": "2024-08-07",
          "balance": 261289.08,
          "min_balance": 168600.0
        },
        {
          "day": 70,
          "date": "2024-08-12",
          "balance": 209819.7,
          "min_balance": 168600.0
        },
        {
          "day": 75,
          "date": "2024-08-17",
          "balance": 395723.13,
          "min_balance": 168600.0
        },
        {
          "day": 80,
          "date": "2024-08-22",
          "balance": 364723.18,
          "min_balance": 168600.0
        },
        {
          "day": 85,
          "date": "2024-08-27",
          "balance": 344617.83,
          "min_balance": 168600.0
        },
        {
          "day": 90,
          "date": "2024-09-01",
          "balance": 271349.32,
          "min_balance": 168600.0
        }
      ]
    },
    {
      "request_id": "request_257",
      "user_id": "user_257",
      "requested_amount": 1352.4,
      "currency": "USD",
      "request_type": "other",
      "request_text": "Would committing to the membership leave enough for my upcoming bills? I'm considering a yearly membership for USD 1,352.40.",
      "allows_partial_payment": false,
      "request_date": "2025-11-05",
      "desired_completion_date": "2026-01-15",
      "home_currency": "USD",
      "current_balance": 2685.2,
      "minimum_balance_to_keep": 1600.0,
      "amount_safe_to_pay": 282.17,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 15 January 2026. None of the available options keeps the USD 1,600 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2025-11-05",
          "balance": 2649.89,
          "min_balance": 1600.0
        },
        {
          "day": 5,
          "date": "2025-11-10",
          "balance": 2128.32,
          "min_balance": 1600.0
        },
        {
          "day": 10,
          "date": "2025-11-15",
          "balance": 5700.11,
          "min_balance": 1600.0
        },
        {
          "day": 15,
          "date": "2025-11-20",
          "balance": 5456.2,
          "min_balance": 1600.0
        },
        {
          "day": 20,
          "date": "2025-11-25",
          "balance": 5156.5,
          "min_balance": 1600.0
        },
        {
          "day": 25,
          "date": "2025-11-30",
          "balance": 4749.2,
          "min_balance": 1600.0
        },
        {
          "day": 30,
          "date": "2025-12-05",
          "balance": 4025.47,
          "min_balance": 1600.0
        },
        {
          "day": 35,
          "date": "2025-12-10",
          "balance": 3503.9,
          "min_balance": 1600.0
        },
        {
          "day": 40,
          "date": "2025-12-15",
          "balance": 5121.32,
          "min_balance": 1600.0
        },
        {
          "day": 45,
          "date": "2025-12-20",
          "balance": 4877.41,
          "min_balance": 1600.0
        },
        {
          "day": 50,
          "date": "2025-12-25",
          "balance": 4577.71,
          "min_balance": 1600.0
        },
        {
          "day": 55,
          "date": "2025-12-30",
          "balance": 4170.41,
          "min_balance": 1600.0
        },
        {
          "day": 60,
          "date": "2026-01-04",
          "balance": 3481.99,
          "min_balance": 1600.0
        },
        {
          "day": 65,
          "date": "2026-01-09",
          "balance": 3044.03,
          "min_balance": 1600.0
        },
        {
          "day": 70,
          "date": "2026-01-14",
          "balance": 2678.96,
          "min_balance": 1600.0
        },
        {
          "day": 75,
          "date": "2026-01-19",
          "balance": 4445.16,
          "min_balance": 1600.0
        },
        {
          "day": 80,
          "date": "2026-01-24",
          "balance": 4042.0,
          "min_balance": 1600.0
        },
        {
          "day": 85,
          "date": "2026-01-29",
          "balance": 3809.96,
          "min_balance": 1600.0
        },
        {
          "day": 90,
          "date": "2026-02-03",
          "balance": 2941.75,
          "min_balance": 1600.0
        }
      ]
    },
    {
      "request_id": "request_258",
      "user_id": "user_258",
      "requested_amount": 1113.6,
      "currency": "USD",
      "request_type": "investment",
      "request_text": "I want to put USD 1,113.60 into an investment. I need to complete it by 22 January 2026. What portion can I invest today without going below my minimum balance?",
      "allows_partial_payment": true,
      "request_date": "2026-01-07",
      "desired_completion_date": "2026-01-22",
      "home_currency": "USD",
      "current_balance": 2603.68,
      "minimum_balance_to_keep": 500.0,
      "amount_safe_to_pay": 735.69,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 22 January 2026. None of the available options keeps the USD 500 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2026-01-07",
          "balance": 2547.95,
          "min_balance": 500.0
        },
        {
          "day": 5,
          "date": "2026-01-12",
          "balance": 2362.16,
          "min_balance": 500.0
        },
        {
          "day": 10,
          "date": "2026-01-17",
          "balance": 3359.43,
          "min_balance": 500.0
        },
        {
          "day": 15,
          "date": "2026-01-22",
          "balance": 3213.81,
          "min_balance": 500.0
        },
        {
          "day": 20,
          "date": "2026-01-27",
          "balance": 3100.5,
          "min_balance": 500.0
        },
        {
          "day": 25,
          "date": "2026-02-01",
          "balance": 2950.02,
          "min_balance": 500.0
        },
        {
          "day": 30,
          "date": "2026-02-06",
          "balance": 2548.18,
          "min_balance": 500.0
        },
        {
          "day": 35,
          "date": "2026-02-11",
          "balance": 2347.63,
          "min_balance": 500.0
        },
        {
          "day": 40,
          "date": "2026-02-16",
          "balance": 2731.05,
          "min_balance": 500.0
        },
        {
          "day": 45,
          "date": "2026-02-21",
          "balance": 2659.6,
          "min_balance": 500.0
        },
        {
          "day": 50,
          "date": "2026-02-26",
          "balance": 2472.12,
          "min_balance": 500.0
        },
        {
          "day": 55,
          "date": "2026-03-03",
          "balance": 1942.1,
          "min_balance": 500.0
        },
        {
          "day": 60,
          "date": "2026-03-08",
          "balance": 1822.07,
          "min_balance": 500.0
        },
        {
          "day": 65,
          "date": "2026-03-13",
          "balance": 1643.41,
          "min_balance": 500.0
        },
        {
          "day": 70,
          "date": "2026-03-18",
          "balance": 2062.62,
          "min_balance": 500.0
        },
        {
          "day": 75,
          "date": "2026-03-23",
          "balance": 1874.14,
          "min_balance": 500.0
        },
        {
          "day": 80,
          "date": "2026-03-28",
          "balance": 1794.25,
          "min_balance": 500.0
        },
        {
          "day": 85,
          "date": "2026-04-02",
          "balance": 1634.11,
          "min_balance": 500.0
        },
        {
          "day": 90,
          "date": "2026-04-07",
          "balance": 1235.69,
          "min_balance": 500.0
        }
      ]
    },
    {
      "request_id": "request_259",
      "user_id": "user_259",
      "requested_amount": 935.0,
      "currency": "EUR",
      "request_type": "other",
      "request_text": "Is the full membership fee affordable today, or should I wait? I need to decide by 15 November 2024. The full-year membership is EUR 935.",
      "allows_partial_payment": false,
      "request_date": "2024-09-04",
      "desired_completion_date": "2024-11-15",
      "home_currency": "EUR",
      "current_balance": 1269.3,
      "minimum_balance_to_keep": 600.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 15 November 2024. None of the available options keeps the EUR 600 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2024-09-04",
          "balance": 965.55,
          "min_balance": 600.0
        },
        {
          "day": 5,
          "date": "2024-09-09",
          "balance": 861.72,
          "min_balance": 600.0
        },
        {
          "day": 10,
          "date": "2024-09-14",
          "balance": 593.54,
          "min_balance": 600.0
        },
        {
          "day": 15,
          "date": "2024-09-19",
          "balance": 1365.94,
          "min_balance": 600.0
        },
        {
          "day": 20,
          "date": "2024-09-24",
          "balance": 1328.07,
          "min_balance": 600.0
        },
        {
          "day": 25,
          "date": "2024-09-29",
          "balance": 1214.8,
          "min_balance": 600.0
        },
        {
          "day": 30,
          "date": "2024-10-04",
          "balance": 832.14,
          "min_balance": 600.0
        },
        {
          "day": 35,
          "date": "2024-10-09",
          "balance": 770.31,
          "min_balance": 600.0
        },
        {
          "day": 40,
          "date": "2024-10-14",
          "balance": 502.13,
          "min_balance": 600.0
        },
        {
          "day": 45,
          "date": "2024-10-19",
          "balance": 1274.53,
          "min_balance": 600.0
        },
        {
          "day": 50,
          "date": "2024-10-24",
          "balance": 1236.66,
          "min_balance": 600.0
        },
        {
          "day": 55,
          "date": "2024-10-29",
          "balance": 1123.39,
          "min_balance": 600.0
        },
        {
          "day": 60,
          "date": "2024-11-03",
          "balance": 1044.48,
          "min_balance": 600.0
        },
        {
          "day": 65,
          "date": "2024-11-08",
          "balance": 678.9,
          "min_balance": 600.0
        },
        {
          "day": 70,
          "date": "2024-11-13",
          "balance": 510.44,
          "min_balance": 600.0
        },
        {
          "day": 75,
          "date": "2024-11-18",
          "balance": 1183.12,
          "min_balance": 600.0
        },
        {
          "day": 80,
          "date": "2024-11-23",
          "balance": 1183.12,
          "min_balance": 600.0
        },
        {
          "day": 85,
          "date": "2024-11-28",
          "balance": 1054.64,
          "min_balance": 600.0
        },
        {
          "day": 90,
          "date": "2024-12-03",
          "balance": 953.07,
          "min_balance": 600.0
        }
      ]
    },
    {
      "request_id": "request_260",
      "user_id": "user_260",
      "requested_amount": 52079000.0,
      "currency": "IDR",
      "request_type": "emergency_expense",
      "request_text": "The repair I need is priced at IDR 52,079,000. Should I pay for the repair in full, split the payment, or wait?",
      "allows_partial_payment": true,
      "request_date": "2025-02-06",
      "desired_completion_date": "2025-04-18",
      "home_currency": "IDR",
      "current_balance": 35787100.0,
      "minimum_balance_to_keep": 20727700.0,
      "amount_safe_to_pay": 4085162.97,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 18 April 2025. None of the available options keeps the IDR 20,727,700 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2025-02-06",
          "balance": 33415900.0,
          "min_balance": 20727700.0
        },
        {
          "day": 5,
          "date": "2025-02-11",
          "balance": 25498154.5,
          "min_balance": 20727700.0
        },
        {
          "day": 10,
          "date": "2025-02-16",
          "balance": 82058614.4,
          "min_balance": 20727700.0
        },
        {
          "day": 15,
          "date": "2025-02-21",
          "balance": 77785248.42,
          "min_balance": 20727700.0
        },
        {
          "day": 20,
          "date": "2025-02-26",
          "balance": 75171878.8,
          "min_balance": 20727700.0
        },
        {
          "day": 25,
          "date": "2025-03-03",
          "balance": 56355764.7,
          "min_balance": 20727700.0
        },
        {
          "day": 30,
          "date": "2025-03-08",
          "balance": 51732161.68,
          "min_balance": 20727700.0
        },
        {
          "day": 35,
          "date": "2025-03-13",
          "balance": 45293224.65,
          "min_balance": 20727700.0
        },
        {
          "day": 40,
          "date": "2025-03-18",
          "balance": 72027834.36,
          "min_balance": 20727700.0
        },
        {
          "day": 45,
          "date": "2025-03-23",
          "balance": 67897076.45,
          "min_balance": 20727700.0
        },
        {
          "day": 50,
          "date": "2025-03-28",
          "balance": 65154753.56,
          "min_balance": 20727700.0
        },
        {
          "day": 55,
          "date": "2025-04-02",
          "balance": 47576132.54,
          "min_balance": 20727700.0
        },
        {
          "day": 60,
          "date": "2025-04-07",
          "balance": 43579529.52,
          "min_balance": 20727700.0
        },
        {
          "day": 65,
          "date": "2025-04-12",
          "balance": 37198884.02,
          "min_balance": 20727700.0
        },
        {
          "day": 70,
          "date": "2025-04-17",
          "balance": 64499350.08,
          "min_balance": 20727700.0
        },
        {
          "day": 75,
          "date": "2025-04-22",
          "balance": 59117444.29,
          "min_balance": 20727700.0
        },
        {
          "day": 80,
          "date": "2025-04-27",
          "balance": 56375121.4,
          "min_balance": 20727700.0
        },
        {
          "day": 85,
          "date": "2025-05-02",
          "balance": 38796500.38,
          "min_balance": 20727700.0
        },
        {
          "day": 90,
          "date": "2025-05-07",
          "balance": 34799897.36,
          "min_balance": 20727700.0
        }
      ]
    },
    {
      "request_id": "request_261",
      "user_id": "user_261",
      "requested_amount": 1830.4,
      "currency": "EUR",
      "request_type": "housing",
      "request_text": "Can I pay the rental deposit by the requested date? The landlord has asked for a deposit of EUR 1,830.40.",
      "allows_partial_payment": false,
      "request_date": "2026-07-03",
      "desired_completion_date": "2026-09-19",
      "home_currency": "EUR",
      "current_balance": 4718.96,
      "minimum_balance_to_keep": 1500.0,
      "amount_safe_to_pay": 1781.05,
      "affordability_status": "affordable_later",
      "recommended_payment_method": "wait",
      "payment_plan": "2026-07-15:1830.40",
      "earliest_date_for_full_payment": "2026-07-15",
      "spending_changes_needed": "none",
      "decision_explanation": "Pay EUR 1,830.40 in full on 15 July 2026. Paying earlier would take the balance below the EUR 1,500 minimum.",
      "curve": [
        {
          "day": 0,
          "date": "2026-07-03",
          "balance": 4236.46,
          "min_balance": 1500.0
        },
        {
          "day": 5,
          "date": "2026-07-08",
          "balance": 3736.31,
          "min_balance": 1500.0
        },
        {
          "day": 10,
          "date": "2026-07-13",
          "balance": 3352.48,
          "min_balance": 1500.0
        },
        {
          "day": 15,
          "date": "2026-07-18",
          "balance": 5523.36,
          "min_balance": 1500.0
        },
        {
          "day": 20,
          "date": "2026-07-23",
          "balance": 5341.11,
          "min_balance": 1500.0
        },
        {
          "day": 25,
          "date": "2026-07-28",
          "balance": 4843.94,
          "min_balance": 1500.0
        },
        {
          "day": 30,
          "date": "2026-08-02",
          "balance": 4623.33,
          "min_balance": 1500.0
        },
        {
          "day": 35,
          "date": "2026-08-07",
          "balance": 3818.68,
          "min_balance": 1500.0
        },
        {
          "day": 40,
          "date": "2026-08-12",
          "balance": 3434.85,
          "min_balance": 1500.0
        },
        {
          "day": 45,
          "date": "2026-08-17",
          "balance": 5605.73,
          "min_balance": 1500.0
        },
        {
          "day": 50,
          "date": "2026-08-22",
          "balance": 5543.85,
          "min_balance": 1500.0
        },
        {
          "day": 55,
          "date": "2026-08-27",
          "balance": 4992.38,
          "min_balance": 1500.0
        },
        {
          "day": 60,
          "date": "2026-09-01",
          "balance": 4782.75,
          "min_balance": 1500.0
        },
        {
          "day": 65,
          "date": "2026-09-06",
          "balance": 4071.71,
          "min_balance": 1500.0
        },
        {
          "day": 70,
          "date": "2026-09-11",
          "balance": 3641.7,
          "min_balance": 1500.0
        },
        {
          "day": 75,
          "date": "2026-09-16",
          "balance": 5899.03,
          "min_balance": 1500.0
        },
        {
          "day": 80,
          "date": "2026-09-21",
          "balance": 5626.22,
          "min_balance": 1500.0
        },
        {
          "day": 85,
          "date": "2026-09-26",
          "balance": 5245.72,
          "min_balance": 1500.0
        },
        {
          "day": 90,
          "date": "2026-10-01",
          "balance": 4865.12,
          "min_balance": 1500.0
        }
      ]
    },
    {
      "request_id": "request_262",
      "user_id": "user_262",
      "requested_amount": 9236000.0,
      "currency": "IDR",
      "request_type": "education",
      "request_text": "The course I want to take is IDR 9,236,000. I need to complete it by 24 January 2025. Can I pay for the course before enrolment closes?",
      "allows_partial_payment": true,
      "request_date": "2024-12-05",
      "desired_completion_date": "2025-01-24",
      "home_currency": "IDR",
      "current_balance": 88406100.0,
      "minimum_balance_to_keep": 31018500.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 24 January 2025. None of the available options keeps the IDR 31,018,500 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2024-12-05",
          "balance": 85464900.0,
          "min_balance": 31018500.0
        },
        {
          "day": 5,
          "date": "2024-12-10",
          "balance": 75287962.25,
          "min_balance": 31018500.0
        },
        {
          "day": 10,
          "date": "2024-12-15",
          "balance": 91712769.01,
          "min_balance": 31018500.0
        },
        {
          "day": 15,
          "date": "2024-12-20",
          "balance": 83175068.94,
          "min_balance": 31018500.0
        },
        {
          "day": 20,
          "date": "2024-12-25",
          "balance": 78515738.23,
          "min_balance": 31018500.0
        },
        {
          "day": 25,
          "date": "2024-12-30",
          "balance": 70950672.14,
          "min_balance": 31018500.0
        },
        {
          "day": 30,
          "date": "2025-01-04",
          "balance": 54321400.48,
          "min_balance": 31018500.0
        },
        {
          "day": 35,
          "date": "2025-01-09",
          "balance": 49360043.48,
          "min_balance": 31018500.0
        },
        {
          "day": 40,
          "date": "2025-01-14",
          "balance": 35227665.66,
          "min_balance": 31018500.0
        },
        {
          "day": 45,
          "date": "2025-01-19",
          "balance": 58234037.45,
          "min_balance": 31018500.0
        },
        {
          "day": 50,
          "date": "2025-01-24",
          "balance": 50313438.71,
          "min_balance": 31018500.0
        },
        {
          "day": 55,
          "date": "2025-01-29",
          "balance": 44973685.62,
          "min_balance": 31018500.0
        },
        {
          "day": 60,
          "date": "2025-02-03",
          "balance": 28278860.03,
          "min_balance": 31018500.0
        },
        {
          "day": 65,
          "date": "2025-02-08",
          "balance": 22580447.19,
          "min_balance": 31018500.0
        },
        {
          "day": 70,
          "date": "2025-02-13",
          "balance": 7990698.48,
          "min_balance": 31018500.0
        },
        {
          "day": 75,
          "date": "2025-02-18",
          "balance": 31432322.42,
          "min_balance": 31018500.0
        },
        {
          "day": 80,
          "date": "2025-02-23",
          "balance": 22111139.19,
          "min_balance": 31018500.0
        },
        {
          "day": 85,
          "date": "2025-02-28",
          "balance": 14546073.1,
          "min_balance": 31018500.0
        },
        {
          "day": 90,
          "date": "2025-03-05",
          "balance": -2083198.56,
          "min_balance": 31018500.0
        }
      ]
    },
    {
      "request_id": "request_263",
      "user_id": "user_263",
      "requested_amount": 51546.0,
      "currency": "ZAR",
      "request_type": "education",
      "request_text": "Should I pay for the course now, use installments, or wait? I need to decide by 15 June 2025. I've been quoted ZAR 51,546 for the course.",
      "allows_partial_payment": true,
      "request_date": "2025-05-07",
      "desired_completion_date": "2025-06-15",
      "home_currency": "ZAR",
      "current_balance": 38818.0,
      "minimum_balance_to_keep": 24100.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 15 June 2025. None of the available options keeps the ZAR 24,100 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2025-05-07",
          "balance": 37850.0,
          "min_balance": 24100.0
        },
        {
          "day": 5,
          "date": "2025-05-12",
          "balance": 31848.47,
          "min_balance": 24100.0
        },
        {
          "day": 10,
          "date": "2025-05-17",
          "balance": 54286.56,
          "min_balance": 24100.0
        },
        {
          "day": 15,
          "date": "2025-05-22",
          "balance": 51638.21,
          "min_balance": 24100.0
        },
        {
          "day": 20,
          "date": "2025-05-27",
          "balance": 47481.94,
          "min_balance": 24100.0
        },
        {
          "day": 25,
          "date": "2025-06-01",
          "balance": 46979.81,
          "min_balance": 24100.0
        },
        {
          "day": 30,
          "date": "2025-06-06",
          "balance": 31150.37,
          "min_balance": 24100.0
        },
        {
          "day": 35,
          "date": "2025-06-11",
          "balance": 27295.44,
          "min_balance": 24100.0
        },
        {
          "day": 40,
          "date": "2025-06-16",
          "balance": 49060.49,
          "min_balance": 24100.0
        },
        {
          "day": 45,
          "date": "2025-06-21",
          "balance": 47022.24,
          "min_balance": 24100.0
        },
        {
          "day": 50,
          "date": "2025-06-26",
          "balance": 42650.33,
          "min_balance": 24100.0
        },
        {
          "day": 55,
          "date": "2025-07-01",
          "balance": 41248.18,
          "min_balance": 24100.0
        },
        {
          "day": 60,
          "date": "2025-07-06",
          "balance": 25418.74,
          "min_balance": 24100.0
        },
        {
          "day": 65,
          "date": "2025-07-11",
          "balance": 21563.81,
          "min_balance": 24100.0
        },
        {
          "day": 70,
          "date": "2025-07-16",
          "balance": 43328.86,
          "min_balance": 24100.0
        },
        {
          "day": 75,
          "date": "2025-07-21",
          "balance": 41290.61,
          "min_balance": 24100.0
        },
        {
          "day": 80,
          "date": "2025-07-26",
          "balance": 36918.7,
          "min_balance": 24100.0
        },
        {
          "day": 85,
          "date": "2025-07-31",
          "balance": 35516.55,
          "min_balance": 24100.0
        },
        {
          "day": 90,
          "date": "2025-08-05",
          "balance": 20551.25,
          "min_balance": 24100.0
        }
      ]
    },
    {
      "request_id": "request_264",
      "user_id": "user_264",
      "requested_amount": 111300.0,
      "currency": "INR",
      "request_type": "emergency_expense",
      "request_text": "I've received a repair quote for INR 111,300. Would paying the repair bill today take me below the balance I need to keep?",
      "allows_partial_payment": false,
      "request_date": "2026-04-04",
      "desired_completion_date": "2026-06-15",
      "home_currency": "INR",
      "current_balance": 104375.0,
      "minimum_balance_to_keep": 59500.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 15 June 2026. None of the available options keeps the INR 59,500 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2026-04-04",
          "balance": 104375.0,
          "min_balance": 59500.0
        },
        {
          "day": 5,
          "date": "2026-04-09",
          "balance": 80983.78,
          "min_balance": 59500.0
        },
        {
          "day": 10,
          "date": "2026-04-14",
          "balance": 62392.34,
          "min_balance": 59500.0
        },
        {
          "day": 15,
          "date": "2026-04-19",
          "balance": 137780.98,
          "min_balance": 59500.0
        },
        {
          "day": 20,
          "date": "2026-04-24",
          "balance": 131423.41,
          "min_balance": 59500.0
        },
        {
          "day": 25,
          "date": "2026-04-29",
          "balance": 115149.98,
          "min_balance": 59500.0
        },
        {
          "day": 30,
          "date": "2026-05-04",
          "balance": 61778.14,
          "min_balance": 59500.0
        },
        {
          "day": 35,
          "date": "2026-05-09",
          "balance": 38386.92,
          "min_balance": 59500.0
        },
        {
          "day": 40,
          "date": "2026-05-14",
          "balance": 24875.48,
          "min_balance": 59500.0
        },
        {
          "day": 45,
          "date": "2026-05-19",
          "balance": 100264.12,
          "min_balance": 59500.0
        },
        {
          "day": 50,
          "date": "2026-05-24",
          "balance": 93906.55,
          "min_balance": 59500.0
        },
        {
          "day": 55,
          "date": "2026-05-29",
          "balance": 77633.12,
          "min_balance": 59500.0
        },
        {
          "day": 60,
          "date": "2026-06-03",
          "balance": 24261.28,
          "min_balance": 59500.0
        },
        {
          "day": 65,
          "date": "2026-06-08",
          "balance": 870.06,
          "min_balance": 59500.0
        },
        {
          "day": 70,
          "date": "2026-06-13",
          "balance": -12641.38,
          "min_balance": 59500.0
        },
        {
          "day": 75,
          "date": "2026-06-18",
          "balance": 62747.26,
          "min_balance": 59500.0
        },
        {
          "day": 80,
          "date": "2026-06-23",
          "balance": 56389.69,
          "min_balance": 59500.0
        },
        {
          "day": 85,
          "date": "2026-06-28",
          "balance": 40116.26,
          "min_balance": 59500.0
        },
        {
          "day": 90,
          "date": "2026-07-03",
          "balance": -13255.58,
          "min_balance": 59500.0
        }
      ]
    },
    {
      "request_id": "request_265",
      "user_id": "user_265",
      "requested_amount": 45970.0,
      "currency": "INR",
      "request_type": "family_transfer",
      "request_text": "How much can I safely send to my family today? I want to send INR 45,970 to my family.",
      "allows_partial_payment": true,
      "request_date": "2024-03-06",
      "desired_completion_date": "2024-03-21",
      "home_currency": "INR",
      "current_balance": 786105.0,
      "minimum_balance_to_keep": 189700.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 21 March 2024. None of the available options keeps the INR 189,700 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2024-03-06",
          "balance": 768204.3,
          "min_balance": 189700.0
        },
        {
          "day": 5,
          "date": "2024-03-11",
          "balance": 741569.49,
          "min_balance": 189700.0
        },
        {
          "day": 10,
          "date": "2024-03-16",
          "balance": 720640.76,
          "min_balance": 189700.0
        },
        {
          "day": 15,
          "date": "2024-03-21",
          "balance": 676214.49,
          "min_balance": 189700.0
        },
        {
          "day": 20,
          "date": "2024-03-26",
          "balance": 640406.87,
          "min_balance": 189700.0
        },
        {
          "day": 25,
          "date": "2024-03-31",
          "balance": 586571.08,
          "min_balance": 189700.0
        },
        {
          "day": 30,
          "date": "2024-04-05",
          "balance": 469009.72,
          "min_balance": 189700.0
        },
        {
          "day": 35,
          "date": "2024-04-10",
          "balance": 438710.72,
          "min_balance": 189700.0
        },
        {
          "day": 40,
          "date": "2024-04-15",
          "balance": 403545.48,
          "min_balance": 189700.0
        },
        {
          "day": 45,
          "date": "2024-04-20",
          "balance": 359119.21,
          "min_balance": 189700.0
        },
        {
          "day": 50,
          "date": "2024-04-25",
          "balance": 336870.96,
          "min_balance": 189700.0
        },
        {
          "day": 55,
          "date": "2024-04-30",
          "balance": 269475.8,
          "min_balance": 189700.0
        },
        {
          "day": 60,
          "date": "2024-05-05",
          "balance": 151914.44,
          "min_balance": 189700.0
        },
        {
          "day": 65,
          "date": "2024-05-10",
          "balance": 121615.44,
          "min_balance": 189700.0
        },
        {
          "day": 70,
          "date": "2024-05-15",
          "balance": 86450.2,
          "min_balance": 189700.0
        },
        {
          "day": 75,
          "date": "2024-05-20",
          "balance": 42023.93,
          "min_balance": 189700.0
        },
        {
          "day": 80,
          "date": "2024-05-25",
          "balance": 19775.68,
          "min_balance": 189700.0
        },
        {
          "day": 85,
          "date": "2024-05-30",
          "balance": -39617.01,
          "min_balance": 189700.0
        },
        {
          "day": 90,
          "date": "2024-06-04",
          "balance": -150993.38,
          "min_balance": 189700.0
        }
      ]
    },
    {
      "request_id": "request_266",
      "user_id": "user_266",
      "requested_amount": 935.0,
      "currency": "EUR",
      "request_type": "investment",
      "request_text": "I'm planning an investment contribution of EUR 935. I need to complete it by 3 October 2025. Is it safer to invest now, invest a smaller amount, or wait?",
      "allows_partial_payment": false,
      "request_date": "2025-08-03",
      "desired_completion_date": "2025-10-03",
      "home_currency": "EUR",
      "current_balance": 2354.92,
      "minimum_balance_to_keep": 900.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 3 October 2025. None of the available options keeps the EUR 900 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2025-08-03",
          "balance": 2088.72,
          "min_balance": 900.0
        },
        {
          "day": 5,
          "date": "2025-08-08",
          "balance": 1981.77,
          "min_balance": 900.0
        },
        {
          "day": 10,
          "date": "2025-08-13",
          "balance": 1680.18,
          "min_balance": 900.0
        },
        {
          "day": 15,
          "date": "2025-08-18",
          "balance": 2547.67,
          "min_balance": 900.0
        },
        {
          "day": 20,
          "date": "2025-08-23",
          "balance": 2438.43,
          "min_balance": 900.0
        },
        {
          "day": 25,
          "date": "2025-08-28",
          "balance": 2307.99,
          "min_balance": 900.0
        },
        {
          "day": 30,
          "date": "2025-09-02",
          "balance": 1966.99,
          "min_balance": 900.0
        },
        {
          "day": 35,
          "date": "2025-09-07",
          "balance": 1593.84,
          "min_balance": 900.0
        },
        {
          "day": 40,
          "date": "2025-09-12",
          "balance": 1345.98,
          "min_balance": 900.0
        },
        {
          "day": 45,
          "date": "2025-09-17",
          "balance": 2176.85,
          "min_balance": 900.0
        },
        {
          "day": 50,
          "date": "2025-09-22",
          "balance": 2050.5,
          "min_balance": 900.0
        },
        {
          "day": 55,
          "date": "2025-09-27",
          "balance": 1958.95,
          "min_balance": 900.0
        },
        {
          "day": 60,
          "date": "2025-10-02",
          "balance": 1579.06,
          "min_balance": 900.0
        },
        {
          "day": 65,
          "date": "2025-10-07",
          "balance": 1205.91,
          "min_balance": 900.0
        },
        {
          "day": 70,
          "date": "2025-10-12",
          "balance": 958.05,
          "min_balance": 900.0
        },
        {
          "day": 75,
          "date": "2025-10-17",
          "balance": 1788.92,
          "min_balance": 900.0
        },
        {
          "day": 80,
          "date": "2025-10-22",
          "balance": 1662.57,
          "min_balance": 900.0
        },
        {
          "day": 85,
          "date": "2025-10-27",
          "balance": 1571.02,
          "min_balance": 900.0
        },
        {
          "day": 90,
          "date": "2025-11-01",
          "balance": 1241.73,
          "min_balance": 900.0
        }
      ]
    },
    {
      "request_id": "request_267",
      "user_id": "user_267",
      "requested_amount": 1925.0,
      "currency": "EUR",
      "request_type": "housing",
      "request_text": "How much of the rental deposit can I safely pay today? I need to decide by 17 March 2026. I need to pay a EUR 1,925 rental deposit.",
      "allows_partial_payment": true,
      "request_date": "2026-01-05",
      "desired_completion_date": "2026-03-17",
      "home_currency": "EUR",
      "current_balance": 3648.98,
      "minimum_balance_to_keep": 1500.0,
      "amount_safe_to_pay": 640.85,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 17 March 2026. None of the available options keeps the EUR 1,500 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2026-01-05",
          "balance": 3648.98,
          "min_balance": 1500.0
        },
        {
          "day": 5,
          "date": "2026-01-10",
          "balance": 3385.12,
          "min_balance": 1500.0
        },
        {
          "day": 10,
          "date": "2026-01-15",
          "balance": 4734.77,
          "min_balance": 1500.0
        },
        {
          "day": 15,
          "date": "2026-01-20",
          "balance": 4627.71,
          "min_balance": 1500.0
        },
        {
          "day": 20,
          "date": "2026-01-25",
          "balance": 4359.49,
          "min_balance": 1500.0
        },
        {
          "day": 25,
          "date": "2026-01-30",
          "balance": 4169.76,
          "min_balance": 1500.0
        },
        {
          "day": 30,
          "date": "2026-02-04",
          "balance": 3262.82,
          "min_balance": 1500.0
        },
        {
          "day": 35,
          "date": "2026-02-09",
          "balance": 2998.96,
          "min_balance": 1500.0
        },
        {
          "day": 40,
          "date": "2026-02-14",
          "balance": 2527.01,
          "min_balance": 1500.0
        },
        {
          "day": 45,
          "date": "2026-02-19",
          "balance": 4241.55,
          "min_balance": 1500.0
        },
        {
          "day": 50,
          "date": "2026-02-24",
          "balance": 3973.33,
          "min_balance": 1500.0
        },
        {
          "day": 55,
          "date": "2026-03-01",
          "balance": 3540.19,
          "min_balance": 1500.0
        },
        {
          "day": 60,
          "date": "2026-03-06",
          "balance": 2876.66,
          "min_balance": 1500.0
        },
        {
          "day": 65,
          "date": "2026-03-11",
          "balance": 2503.46,
          "min_balance": 1500.0
        },
        {
          "day": 70,
          "date": "2026-03-16",
          "balance": 3891.98,
          "min_balance": 1500.0
        },
        {
          "day": 75,
          "date": "2026-03-21",
          "balance": 3643.1,
          "min_balance": 1500.0
        },
        {
          "day": 80,
          "date": "2026-03-26",
          "balance": 3528.62,
          "min_balance": 1500.0
        },
        {
          "day": 85,
          "date": "2026-03-31",
          "balance": 3259.71,
          "min_balance": 1500.0
        },
        {
          "day": 90,
          "date": "2026-04-05",
          "balance": 2490.5,
          "min_balance": 1500.0
        }
      ]
    },
    {
      "request_id": "request_268",
      "user_id": "user_268",
      "requested_amount": 2426.6,
      "currency": "EUR",
      "request_type": "debt_repayment",
      "request_text": "The additional loan payment would be EUR 2,426.60. How much extra can I put toward the loan today?",
      "allows_partial_payment": false,
      "request_date": "2024-06-07",
      "desired_completion_date": "2024-08-15",
      "home_currency": "EUR",
      "current_balance": 2912.52,
      "minimum_balance_to_keep": 1400.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 15 August 2024. None of the available options keeps the EUR 1,400 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2024-06-07",
          "balance": 2912.52,
          "min_balance": 1400.0
        },
        {
          "day": 5,
          "date": "2024-06-12",
          "balance": 2385.16,
          "min_balance": 1400.0
        },
        {
          "day": 10,
          "date": "2024-06-17",
          "balance": 4411.09,
          "min_balance": 1400.0
        },
        {
          "day": 15,
          "date": "2024-06-22",
          "balance": 4250.85,
          "min_balance": 1400.0
        },
        {
          "day": 20,
          "date": "2024-06-27",
          "balance": 4019.1,
          "min_balance": 1400.0
        },
        {
          "day": 25,
          "date": "2024-07-02",
          "balance": 3074.29,
          "min_balance": 1400.0
        },
        {
          "day": 30,
          "date": "2024-07-07",
          "balance": 2026.03,
          "min_balance": 1400.0
        },
        {
          "day": 35,
          "date": "2024-07-12",
          "balance": 1498.67,
          "min_balance": 1400.0
        },
        {
          "day": 40,
          "date": "2024-07-17",
          "balance": 3524.6,
          "min_balance": 1400.0
        },
        {
          "day": 45,
          "date": "2024-07-22",
          "balance": 3364.36,
          "min_balance": 1400.0
        },
        {
          "day": 50,
          "date": "2024-07-27",
          "balance": 3132.61,
          "min_balance": 1400.0
        },
        {
          "day": 55,
          "date": "2024-08-01",
          "balance": 2187.8,
          "min_balance": 1400.0
        },
        {
          "day": 60,
          "date": "2024-08-06",
          "balance": 1139.54,
          "min_balance": 1400.0
        },
        {
          "day": 65,
          "date": "2024-08-11",
          "balance": 612.18,
          "min_balance": 1400.0
        },
        {
          "day": 70,
          "date": "2024-08-16",
          "balance": 2691.14,
          "min_balance": 1400.0
        },
        {
          "day": 75,
          "date": "2024-08-21",
          "balance": 2477.87,
          "min_balance": 1400.0
        },
        {
          "day": 80,
          "date": "2024-08-26",
          "balance": 2246.12,
          "min_balance": 1400.0
        },
        {
          "day": 85,
          "date": "2024-08-31",
          "balance": 1859.01,
          "min_balance": 1400.0
        },
        {
          "day": 90,
          "date": "2024-09-05",
          "balance": 377.28,
          "min_balance": 1400.0
        }
      ]
    },
    {
      "request_id": "request_269",
      "user_id": "user_269",
      "requested_amount": 15490.0,
      "currency": "ZAR",
      "request_type": "family_transfer",
      "request_text": "Would sending the money now leave enough for my upcoming expenses? I need to make a family transfer of ZAR 15,490.",
      "allows_partial_payment": true,
      "request_date": "2025-11-04",
      "desired_completion_date": "2026-01-02",
      "home_currency": "ZAR",
      "current_balance": 45307.9,
      "minimum_balance_to_keep": 23100.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 2 January 2026. None of the available options keeps the ZAR 23,100 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2025-11-04",
          "balance": 44387.22,
          "min_balance": 23100.0
        },
        {
          "day": 5,
          "date": "2025-11-09",
          "balance": 35149.31,
          "min_balance": 23100.0
        },
        {
          "day": 10,
          "date": "2025-11-14",
          "balance": 26822.59,
          "min_balance": 23100.0
        },
        {
          "day": 15,
          "date": "2025-11-19",
          "balance": 45014.54,
          "min_balance": 23100.0
        },
        {
          "day": 20,
          "date": "2025-11-24",
          "balance": 41202.38,
          "min_balance": 23100.0
        },
        {
          "day": 25,
          "date": "2025-11-29",
          "balance": 36377.91,
          "min_balance": 23100.0
        },
        {
          "day": 30,
          "date": "2025-12-04",
          "balance": 18970.06,
          "min_balance": 23100.0
        },
        {
          "day": 35,
          "date": "2025-12-09",
          "balance": 9732.15,
          "min_balance": 23100.0
        },
        {
          "day": 40,
          "date": "2025-12-14",
          "balance": 1405.43,
          "min_balance": 23100.0
        },
        {
          "day": 45,
          "date": "2025-12-19",
          "balance": 19597.38,
          "min_balance": 23100.0
        },
        {
          "day": 50,
          "date": "2025-12-24",
          "balance": 15785.22,
          "min_balance": 23100.0
        },
        {
          "day": 55,
          "date": "2025-12-29",
          "balance": 10960.75,
          "min_balance": 23100.0
        },
        {
          "day": 60,
          "date": "2026-01-03",
          "balance": -5526.42,
          "min_balance": 23100.0
        },
        {
          "day": 65,
          "date": "2026-01-08",
          "balance": -14942.0,
          "min_balance": 23100.0
        },
        {
          "day": 70,
          "date": "2026-01-13",
          "balance": -22990.78,
          "min_balance": 23100.0
        },
        {
          "day": 75,
          "date": "2026-01-18",
          "balance": -5819.78,
          "min_balance": 23100.0
        },
        {
          "day": 80,
          "date": "2026-01-23",
          "balance": -9631.94,
          "min_balance": 23100.0
        },
        {
          "day": 85,
          "date": "2026-01-28",
          "balance": -13507.04,
          "min_balance": 23100.0
        },
        {
          "day": 90,
          "date": "2026-02-02",
          "balance": -29764.1,
          "min_balance": 23100.0
        }
      ]
    },
    {
      "request_id": "request_270",
      "user_id": "user_270",
      "requested_amount": 3028.8,
      "currency": "USD",
      "request_type": "investment",
      "request_text": "I'm thinking of investing USD 3,028.80. I need to complete it by 30 August 2026. How much can I invest now without affecting essential payments?",
      "allows_partial_payment": false,
      "request_date": "2026-07-06",
      "desired_completion_date": "2026-08-30",
      "home_currency": "USD",
      "current_balance": 1935.4,
      "minimum_balance_to_keep": 1400.0,
      "amount_safe_to_pay": 38.75,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 30 August 2026. None of the available options keeps the USD 1,400 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2026-07-06",
          "balance": 1935.4,
          "min_balance": 1400.0
        },
        {
          "day": 5,
          "date": "2026-07-11",
          "balance": 1438.75,
          "min_balance": 1400.0
        },
        {
          "day": 10,
          "date": "2026-07-16",
          "balance": 3508.82,
          "min_balance": 1400.0
        },
        {
          "day": 15,
          "date": "2026-07-21",
          "balance": 3355.13,
          "min_balance": 1400.0
        },
        {
          "day": 20,
          "date": "2026-07-26",
          "balance": 3314.48,
          "min_balance": 1400.0
        },
        {
          "day": 25,
          "date": "2026-07-31",
          "balance": 2995.43,
          "min_balance": 1400.0
        },
        {
          "day": 30,
          "date": "2026-08-05",
          "balance": 2625.81,
          "min_balance": 1400.0
        },
        {
          "day": 35,
          "date": "2026-08-10",
          "balance": 2201.16,
          "min_balance": 1400.0
        },
        {
          "day": 40,
          "date": "2026-08-15",
          "balance": 3161.69,
          "min_balance": 1400.0
        },
        {
          "day": 45,
          "date": "2026-08-20",
          "balance": 3011.57,
          "min_balance": 1400.0
        },
        {
          "day": 50,
          "date": "2026-08-25",
          "balance": 2933.53,
          "min_balance": 1400.0
        },
        {
          "day": 55,
          "date": "2026-08-30",
          "balance": 2725.01,
          "min_balance": 1400.0
        },
        {
          "day": 60,
          "date": "2026-09-04",
          "balance": 2244.86,
          "min_balance": 1400.0
        },
        {
          "day": 65,
          "date": "2026-09-09",
          "balance": 2047.02,
          "min_balance": 1400.0
        },
        {
          "day": 70,
          "date": "2026-09-14",
          "balance": 1748.21,
          "min_balance": 1400.0
        },
        {
          "day": 75,
          "date": "2026-09-19",
          "balance": 2679.6,
          "min_balance": 1400.0
        },
        {
          "day": 80,
          "date": "2026-09-24",
          "balance": 2552.58,
          "min_balance": 1400.0
        },
        {
          "day": 85,
          "date": "2026-09-29",
          "balance": 2465.1,
          "min_balance": 1400.0
        },
        {
          "day": 90,
          "date": "2026-10-04",
          "balance": 1863.91,
          "min_balance": 1400.0
        }
      ]
    },
    {
      "request_id": "request_271",
      "user_id": "user_271",
      "requested_amount": 91300.0,
      "currency": "INR",
      "request_type": "travel",
      "request_text": "Does paying for the trip now leave enough for the rest of the month? I need to decide by 15 November 2024. The total trip cost is INR 91,300.",
      "allows_partial_payment": false,
      "request_date": "2024-09-03",
      "desired_completion_date": "2024-11-15",
      "home_currency": "INR",
      "current_balance": 142960.0,
      "minimum_balance_to_keep": 58200.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 15 November 2024. None of the available options keeps the INR 58,200 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2024-09-03",
          "balance": 142960.0,
          "min_balance": 58200.0
        },
        {
          "day": 5,
          "date": "2024-09-08",
          "balance": 98860.86,
          "min_balance": 58200.0
        },
        {
          "day": 10,
          "date": "2024-09-13",
          "balance": 67098.04,
          "min_balance": 58200.0
        },
        {
          "day": 15,
          "date": "2024-09-18",
          "balance": 52632.48,
          "min_balance": 58200.0
        },
        {
          "day": 20,
          "date": "2024-09-23",
          "balance": 85490.29,
          "min_balance": 58200.0
        },
        {
          "day": 25,
          "date": "2024-09-28",
          "balance": 73993.35,
          "min_balance": 58200.0
        },
        {
          "day": 30,
          "date": "2024-10-03",
          "balance": 65221.44,
          "min_balance": 58200.0
        },
        {
          "day": 35,
          "date": "2024-10-08",
          "balance": 21122.3,
          "min_balance": 58200.0
        },
        {
          "day": 40,
          "date": "2024-10-13",
          "balance": -10640.52,
          "min_balance": 58200.0
        },
        {
          "day": 45,
          "date": "2024-10-18",
          "balance": -25106.08,
          "min_balance": 58200.0
        },
        {
          "day": 50,
          "date": "2024-10-23",
          "balance": 7751.73,
          "min_balance": 58200.0
        },
        {
          "day": 55,
          "date": "2024-10-28",
          "balance": -3745.21,
          "min_balance": 58200.0
        },
        {
          "day": 60,
          "date": "2024-11-02",
          "balance": -12517.12,
          "min_balance": 58200.0
        },
        {
          "day": 65,
          "date": "2024-11-07",
          "balance": -50841.76,
          "min_balance": 58200.0
        },
        {
          "day": 70,
          "date": "2024-11-12",
          "balance": -66527.07,
          "min_balance": 58200.0
        },
        {
          "day": 75,
          "date": "2024-11-17",
          "balance": -102844.64,
          "min_balance": 58200.0
        },
        {
          "day": 80,
          "date": "2024-11-22",
          "balance": -62327.88,
          "min_balance": 58200.0
        },
        {
          "day": 85,
          "date": "2024-11-27",
          "balance": -79187.2,
          "min_balance": 58200.0
        },
        {
          "day": 90,
          "date": "2024-12-02",
          "balance": -90255.68,
          "min_balance": 58200.0
        }
      ]
    },
    {
      "request_id": "request_272",
      "user_id": "user_272",
      "requested_amount": 13585000.0,
      "currency": "IDR",
      "request_type": "debt_repayment",
      "request_text": "I have IDR 13,585,000 in mind as an extra loan payment. Can I make the extra loan payment now without affecting essential expenses?",
      "allows_partial_payment": false,
      "request_date": "2025-02-05",
      "desired_completion_date": "2025-04-10",
      "home_currency": "IDR",
      "current_balance": 16324524.0,
      "minimum_balance_to_keep": 7508600.0,
      "amount_safe_to_pay": 4510895.34,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 10 April 2025. None of the available options keeps the IDR 7,508,600 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2025-02-05",
          "balance": 15300700.06,
          "min_balance": 7508600.0
        },
        {
          "day": 5,
          "date": "2025-02-10",
          "balance": 13055118.73,
          "min_balance": 7508600.0
        },
        {
          "day": 10,
          "date": "2025-02-15",
          "balance": 23392364.67,
          "min_balance": 7508600.0
        },
        {
          "day": 15,
          "date": "2025-02-20",
          "balance": 21047035.15,
          "min_balance": 7508600.0
        },
        {
          "day": 20,
          "date": "2025-02-25",
          "balance": 20452730.28,
          "min_balance": 7508600.0
        },
        {
          "day": 25,
          "date": "2025-03-02",
          "balance": 17158119.19,
          "min_balance": 7508600.0
        },
        {
          "day": 30,
          "date": "2025-03-07",
          "balance": 14923995.25,
          "min_balance": 7508600.0
        },
        {
          "day": 35,
          "date": "2025-03-12",
          "balance": 13814613.92,
          "min_balance": 7508600.0
        },
        {
          "day": 40,
          "date": "2025-03-17",
          "balance": 23663000.64,
          "min_balance": 7508600.0
        },
        {
          "day": 45,
          "date": "2025-03-22",
          "balance": 21468330.34,
          "min_balance": 7508600.0
        },
        {
          "day": 50,
          "date": "2025-03-27",
          "balance": 20678445.33,
          "min_balance": 7508600.0
        },
        {
          "day": 55,
          "date": "2025-04-01",
          "balance": 19134051.14,
          "min_balance": 7508600.0
        },
        {
          "day": 60,
          "date": "2025-04-06",
          "balance": 16565090.44,
          "min_balance": 7508600.0
        },
        {
          "day": 65,
          "date": "2025-04-11",
          "balance": 14648209.11,
          "min_balance": 7508600.0
        },
        {
          "day": 70,
          "date": "2025-04-16",
          "balance": 24864919.29,
          "min_balance": 7508600.0
        },
        {
          "day": 75,
          "date": "2025-04-21",
          "balance": 22301925.53,
          "min_balance": 7508600.0
        },
        {
          "day": 80,
          "date": "2025-04-26",
          "balance": 21792156.63,
          "min_balance": 7508600.0
        },
        {
          "day": 85,
          "date": "2025-05-01",
          "balance": 19967646.33,
          "min_balance": 7508600.0
        },
        {
          "day": 90,
          "date": "2025-05-06",
          "balance": 17398685.63,
          "min_balance": 7508600.0
        }
      ]
    },
    {
      "request_id": "request_273",
      "user_id": "user_273",
      "requested_amount": 15861000.0,
      "currency": "IDR",
      "request_type": "education",
      "request_text": "Should I pay for the course now, use installments, or wait? Enrolment for the course comes to IDR 15,861,000.",
      "allows_partial_payment": true,
      "request_date": "2026-04-07",
      "desired_completion_date": "2026-06-15",
      "home_currency": "IDR",
      "current_balance": 32146800.0,
      "minimum_balance_to_keep": 18774600.0,
      "amount_safe_to_pay": 0.0,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 15 June 2026. None of the available options keeps the IDR 18,774,600 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2026-04-07",
          "balance": 32146800.0,
          "min_balance": 18774600.0
        },
        {
          "day": 5,
          "date": "2026-04-12",
          "balance": 23606250.62,
          "min_balance": 18774600.0
        },
        {
          "day": 10,
          "date": "2026-04-17",
          "balance": 53264906.62,
          "min_balance": 18774600.0
        },
        {
          "day": 15,
          "date": "2026-04-22",
          "balance": 49776532.14,
          "min_balance": 18774600.0
        },
        {
          "day": 20,
          "date": "2026-04-27",
          "balance": 48735038.8,
          "min_balance": 18774600.0
        },
        {
          "day": 25,
          "date": "2026-05-02",
          "balance": 34187946.17,
          "min_balance": 18774600.0
        },
        {
          "day": 30,
          "date": "2026-05-07",
          "balance": 29617780.94,
          "min_balance": 18774600.0
        },
        {
          "day": 35,
          "date": "2026-05-12",
          "balance": 21077231.56,
          "min_balance": 18774600.0
        },
        {
          "day": 40,
          "date": "2026-05-17",
          "balance": 50735887.56,
          "min_balance": 18774600.0
        },
        {
          "day": 45,
          "date": "2026-05-22",
          "balance": 47247513.08,
          "min_balance": 18774600.0
        },
        {
          "day": 50,
          "date": "2026-05-27",
          "balance": 46206019.74,
          "min_balance": 18774600.0
        },
        {
          "day": 55,
          "date": "2026-06-01",
          "balance": 42032927.11,
          "min_balance": 18774600.0
        },
        {
          "day": 60,
          "date": "2026-06-06",
          "balance": 27088761.88,
          "min_balance": 18774600.0
        },
        {
          "day": 65,
          "date": "2026-06-11",
          "balance": 20219597.72,
          "min_balance": 18774600.0
        },
        {
          "day": 70,
          "date": "2026-06-16",
          "balance": 49187441.21,
          "min_balance": 18774600.0
        },
        {
          "day": 75,
          "date": "2026-06-21",
          "balance": 44718494.02,
          "min_balance": 18774600.0
        },
        {
          "day": 80,
          "date": "2026-06-26",
          "balance": 43677000.68,
          "min_balance": 18774600.0
        },
        {
          "day": 85,
          "date": "2026-07-01",
          "balance": 39503908.05,
          "min_balance": 18774600.0
        },
        {
          "day": 90,
          "date": "2026-07-06",
          "balance": 24559742.82,
          "min_balance": 18774600.0
        }
      ]
    },
    {
      "request_id": "request_274",
      "user_id": "user_274",
      "requested_amount": 2713.7,
      "currency": "EUR",
      "request_type": "debt_repayment",
      "request_text": "I want to put another EUR 2,713.70 toward my loan. I need to complete it by 11 February 2025. Would paying this much toward the loan leave enough for the rest of the month?",
      "allows_partial_payment": false,
      "request_date": "2024-12-04",
      "desired_completion_date": "2025-02-11",
      "home_currency": "EUR",
      "current_balance": 4847.31,
      "minimum_balance_to_keep": 1800.0,
      "amount_safe_to_pay": 582.24,
      "affordability_status": "not_affordable",
      "recommended_payment_method": "not_recommended",
      "payment_plan": "none",
      "earliest_date_for_full_payment": "",
      "spending_changes_needed": "none",
      "decision_explanation": "Do not make this payment by 11 February 2025. None of the available options keeps the EUR 1,800 minimum protected.",
      "curve": [
        {
          "day": 0,
          "date": "2024-12-04",
          "balance": 4847.31,
          "min_balance": 1800.0
        },
        {
          "day": 5,
          "date": "2024-12-09",
          "balance": 4157.16,
          "min_balance": 1800.0
        },
        {
          "day": 10,
          "date": "2024-12-14",
          "balance": 3697.72,
          "min_balance": 1800.0
        },
        {
          "day": 15,
          "date": "2024-12-19",
          "balance": 5718.83,
          "min_balance": 1800.0
        },
        {
          "day": 20,
          "date": "2024-12-24",
          "balance": 5379.21,
          "min_balance": 1800.0
        },
        {
          "day": 25,
          "date": "2024-12-29",
          "balance": 5021.58,
          "min_balance": 1800.0
        },
        {
          "day": 30,
          "date": "2025-01-03",
          "balance": 4189.57,
          "min_balance": 1800.0
        },
        {
          "day": 35,
          "date": "2025-01-08",
          "balance": 3700.9,
          "min_balance": 1800.0
        },
        {
          "day": 40,
          "date": "2025-01-13",
          "balance": 3163.8,
          "min_balance": 1800.0
        },
        {
          "day": 45,
          "date": "2025-01-18",
          "balance": 5329.23,
          "min_balance": 1800.0
        },
        {
          "day": 50,
          "date": "2025-01-23",
          "balance": 4778.42,
          "min_balance": 1800.0
        },
        {
          "day": 55,
          "date": "2025-01-28",
          "balance": 4432.1,
          "min_balance": 1800.0
        },
        {
          "day": 60,
          "date": "2025-02-02",
          "balance": 4192.93,
          "min_balance": 1800.0
        },
        {
          "day": 65,
          "date": "2025-02-07",
          "balance": 3270.86,
          "min_balance": 1800.0
        },
        {
          "day": 70,
          "date": "2025-02-12",
          "balance": 2717.4,
          "min_balance": 1800.0
        },
        {
          "day": 75,
          "date": "2025-02-17",
          "balance": 4671.49,
          "min_balance": 1800.0
        },
        {
          "day": 80,
          "date": "2025-02-22",
          "balance": 4120.68,
          "min_balance": 1800.0
        },
        {
          "day": 85,
          "date": "2025-02-27",
          "balance": 3999.29,
          "min_balance": 1800.0
        },
        {
          "day": 90,
          "date": "2025-03-04",
          "balance": 2874.09,
          "min_balance": 1800.0
        }
      ]
    },
    {
      "request_id": "request_275",
      "user_id": "user_275",
      "requested_amount": 15884000.0,
      "currency": "IDR",
      "request_type": "emergency_expense",
      "request_text": "Should I pay for the repair in full, split the payment, or wait? I need to decide by 22 July 2025. I have an unexpected repair bill of IDR 15,884,000.",
      "allows_partial_payment": false,
      "request_date": "2025-05-06",
      "desired_completion_date": "2025-07-22",
      "home_currency": "IDR",
      "current_balance": 37206450.0,
      "minimum_balance_to_keep": 12760100.0,
      "amount_safe_to_pay": 10810002.98,
      "affordability_status": "affordable_later",
      "recommended_payment_method": "wait",
      "payment_plan": "2025-07-15:15884000",
      "earliest_date_for_full_payment": "2025-07-15",
      "spending_changes_needed": "none",
      "decision_explanation": "Pay IDR 15,884,000 in full on 15 July 2025. Paying earlier would take the balance below the IDR 12,760,100 minimum.",
      "curve": [
        {
          "day": 0,
          "date": "2025-05-06",
          "balance": 37206450.0,
          "min_balance": 12760100.0
        },
        {
          "day": 5,
          "date": "2025-05-11",
          "balance": 34477773.01,
          "min_balance": 12760100.0
        },
        {
          "day": 10,
          "date": "2025-05-16",
          "balance": 43951048.72,
          "min_balance": 12760100.0
        },
        {
          "day": 15,
          "date": "2025-05-21",
          "balance": 43499210.97,
          "min_balance": 12760100.0
        },
        {
          "day": 20,
          "date": "2025-05-26",
          "balance": 42670887.64,
          "min_balance": 12760100.0
        },
        {
          "day": 25,
          "date": "2025-05-31",
          "balance": 41646845.99,
          "min_balance": 12760100.0
        },
        {
          "day": 30,
          "date": "2025-06-05",
          "balance": 34933738.95,
          "min_balance": 12760100.0
        },
        {
          "day": 35,
          "date": "2025-06-10",
          "balance": 32777053.15,
          "min_balance": 12760100.0
        },
        {
          "day": 40,
          "date": "2025-06-15",
          "balance": 42056795.57,
          "min_balance": 12760100.0
        },
        {
          "day": 45,
          "date": "2025-06-20",
          "balance": 41226499.92,
          "min_balance": 12760100.0
        },
        {
          "day": 50,
          "date": "2025-06-25",
          "balance": 40398176.59,
          "min_balance": 12760100.0
        },
        {
          "day": 55,
          "date": "2025-06-30",
          "balance": 39374134.94,
          "min_balance": 12760100.0
        },
        {
          "day": 60,
          "date": "2025-07-05",
          "balance": 32661027.9,
          "min_balance": 12760100.0
        },
        {
          "day": 65,
          "date": "2025-07-10",
          "balance": 30504342.1,
          "min_balance": 12760100.0
        },
        {
          "day": 70,
          "date": "2025-07-15",
          "balance": 39784084.52,
          "min_balance": 12760100.0
        },
        {
          "day": 75,
          "date": "2025-07-20",
          "balance": 38953788.87,
          "min_balance": 12760100.0
        },
        {
          "day": 80,
          "date": "2025-07-25",
          "balance": 38125465.54,
          "min_balance": 12760100.0
        },
        {
          "day": 85,
          "date": "2025-07-30",
          "balance": 37101423.89,
          "min_balance": 12760100.0
        },
        {
          "day": 90,
          "date": "2025-08-04",
          "balance": 30714951.99,
          "min_balance": 12760100.0
        }
      ]
    }
  ],
  "images": [
    {
      "image_id": "image_01",
      "user_id": "user_03",
      "request_id": "request_03",
      "related_event_id": "event_253",
      "extracted_amount": 4365000.0,
      "extracted_currency": "IDR",
      "ocr_confidence": 0.99,
      "ocr_notes": "Net Pay: IDR 4,365,000 transferred to Bank Central Asia"
    },
    {
      "image_id": "image_02",
      "user_id": "user_16",
      "request_id": "request_16",
      "related_event_id": "event_1442",
      "extracted_amount": 100000.0,
      "extracted_currency": "INR",
      "ocr_confidence": 0.99,
      "ocr_notes": "Rent Receipt Amount Received: 1,00,000.00"
    },
    {
      "image_id": "image_03",
      "user_id": "user_17",
      "request_id": "request_17",
      "related_event_id": "event_1545",
      "extracted_amount": 41272.0,
      "extracted_currency": "INR",
      "ocr_confidence": 0.99,
      "ocr_notes": "Net Amount: 41272.0, Cash Paid: 41272.00 (Riddhi Siddhi Nuts and Spices)"
    },
    {
      "image_id": "image_04",
      "user_id": "user_19",
      "request_id": "request_19",
      "related_event_id": "event_1700",
      "extracted_amount": 2854.0,
      "extracted_currency": "INR",
      "ocr_confidence": 0.98,
      "ocr_notes": "Total Order Bill Details Item Bill: 2854.00"
    },
    {
      "image_id": "image_05",
      "user_id": "user_20",
      "request_id": "request_20",
      "related_event_id": "event_1786",
      "extracted_amount": 704.05,
      "extracted_currency": "INR",
      "ocr_confidence": 0.99,
      "ocr_notes": "Airtel Thanks Bill Total: 704.05 (Seven Hundred Four Rupees and Five Paise Only)"
    },
    {
      "image_id": "image_06",
      "user_id": "user_33",
      "request_id": "request_33",
      "related_event_id": "event_3051",
      "extracted_amount": 1995.0,
      "extracted_currency": "INR",
      "ocr_confidence": 0.99,
      "ocr_notes": "Blink Commerce Invoice Total: 1995.00"
    },
    {
      "image_id": "image_07",
      "user_id": "user_35",
      "request_id": "request_35",
      "related_event_id": "event_3231",
      "extracted_amount": 8528.1,
      "extracted_currency": "INR",
      "ocr_confidence": 0.99,
      "ocr_notes": "Nagarjuna Restaurant Total: 8528.10, Grand Total (RS): 8528"
    },
    {
      "image_id": "image_08",
      "user_id": "user_48",
      "request_id": "request_48",
      "related_event_id": "event_4535",
      "extracted_amount": 15339.0,
      "extracted_currency": "INR",
      "ocr_confidence": 0.99,
      "ocr_notes": "Total Amount Received: \u20b9 15,339.00 (Rupees Fifteen Thousand Three Hundred Thirty Nine Only)"
    },
    {
      "image_id": "image_09",
      "user_id": "user_55",
      "request_id": "request_55",
      "related_event_id": "event_5170",
      "extracted_amount": 723.0,
      "extracted_currency": "INR",
      "ocr_confidence": 0.99,
      "ocr_notes": "Water Bill Total Amount Received: \u20b9 723.00 (Rupees Seven Hundred Twenty Three Only)"
    },
    {
      "image_id": "image_10",
      "user_id": "user_64",
      "request_id": "request_64",
      "related_event_id": "event_6033",
      "extracted_amount": 79679.26,
      "extracted_currency": "INR",
      "ocr_confidence": 0.99,
      "ocr_notes": "Total In Words: Seventy-Nine Thousand Six Hundred Seventy-Nine and Twenty-Six Paise Only (79679.26)"
    },
    {
      "image_id": "image_11",
      "user_id": "user_73",
      "request_id": "request_73",
      "related_event_id": "event_6859",
      "extracted_amount": 3650.0,
      "extracted_currency": "INR",
      "ocr_confidence": 0.99,
      "ocr_notes": "Jeevan Hospital Total Bill Amount: 3650.00"
    },
    {
      "image_id": "image_12",
      "user_id": "user_78",
      "request_id": "request_78",
      "related_event_id": "event_7307",
      "extracted_amount": 33.5,
      "extracted_currency": "USD",
      "ocr_confidence": 0.99,
      "ocr_notes": "CityCab Service Ride Distance: $28.50, Surcharge: $5.00, Total: $33.50"
    },
    {
      "image_id": "image_13",
      "user_id": "user_84",
      "request_id": "request_84",
      "related_event_id": "event_7941",
      "extracted_amount": 2298.0,
      "extracted_currency": "INR",
      "ocr_confidence": 0.99,
      "ocr_notes": "DailyObjects Order Summary Total Paid: \u20b92,298"
    },
    {
      "image_id": "image_14",
      "user_id": "user_101",
      "request_id": "request_101",
      "related_event_id": "event_9421",
      "extracted_amount": 4543.0,
      "extracted_currency": "INR",
      "ocr_confidence": 0.98,
      "ocr_notes": "Medical pharmacy prescription receipt TOTAL: 4543.00"
    },
    {
      "image_id": "image_15",
      "user_id": "user_105",
      "request_id": "request_105",
      "related_event_id": "event_9806",
      "extracted_amount": 9968.0,
      "extracted_currency": "INR",
      "ocr_confidence": 0.99,
      "ocr_notes": "InterGlobe Aviation IndiGo Grand Total: 9,968.00 (Air travel 9580 + Airport charges 388)"
    },
    {
      "image_id": "image_16",
      "user_id": "user_113",
      "request_id": "request_113",
      "related_event_id": "event_10521",
      "extracted_amount": 393.22,
      "extracted_currency": "INR",
      "ocr_confidence": 0.99,
      "ocr_notes": "EV Charging Station Invoice Total: 393.22 (Three Hundred and Ninety Three Rupees And Twenty Two Paise Only)"
    }
  ]
};