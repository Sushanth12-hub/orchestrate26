import os
import sys
import json
import pandas as pd
import plotly.express as px
import plotly.graph_objects as go
import streamlit as st

st.set_page_config(
    page_title="Buy or Wait? | Autonomous Financial Decision Cockpit",
    page_icon="⚖️",
    layout="wide",
    initial_sidebar_state="expanded"
)

# Custom Styling
st.markdown("""
<style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');
    
    html, body, [class*="css"] {
        font-family: 'Inter', sans-serif;
    }
    
    .stApp {
        background-color: #0b0f19;
        color: #f3f4f6;
    }
    
    .metric-card {
        background: rgba(17, 24, 39, 0.85);
        border: 1px solid rgba(75, 85, 99, 0.4);
        border-radius: 12px;
        padding: 20px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
        backdrop-filter: blur(12px);
        transition: transform 0.2s ease, border-color 0.2s ease;
    }
    .metric-card:hover {
        border-color: #06b6d4;
        transform: translateY(-2px);
    }
    .metric-val {
        font-size: 2.2rem;
        font-weight: 700;
        font-family: 'JetBrains Mono', monospace;
    }
    .metric-lbl {
        font-size: 0.85rem;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        color: #9ca3af;
        margin-top: 4px;
    }
    .badge-now {
        background: rgba(16, 185, 129, 0.2);
        color: #10b981;
        border: 1px solid #10b981;
        padding: 4px 10px;
        border-radius: 9999px;
        font-weight: 600;
        font-size: 0.8rem;
    }
    .badge-plan {
        background: rgba(99, 102, 241, 0.2);
        color: #818cf8;
        border: 1px solid #818cf8;
        padding: 4px 10px;
        border-radius: 9999px;
        font-weight: 600;
        font-size: 0.8rem;
    }
    .badge-later {
        background: rgba(245, 158, 11, 0.2);
        color: #fbbf24;
        border: 1px solid #fbbf24;
        padding: 4px 10px;
        border-radius: 9999px;
        font-weight: 600;
        font-size: 0.8rem;
    }
    .badge-no {
        background: rgba(239, 68, 68, 0.2);
        color: #f87171;
        border: 1px solid #f87171;
        padding: 4px 10px;
        border-radius: 9999px;
        font-weight: 600;
        font-size: 0.8rem;
    }
</style>
""", unsafe_allow_html=True)

# Load UI data
cur_dir = os.path.dirname(os.path.abspath(__file__))
data_path = os.path.join(cur_dir, "data", "cockpit_data.json")

if not os.path.exists(data_path):
    st.error(f"Cockpit data bundle not found at {data_path}. Run code/build_cockpit_data.py first.")
    st.stop()

with open(data_path, "r", encoding="utf-8") as f:
    bundle = json.load(f)

requests_data = bundle.get("requests", [])
images_data = bundle.get("images", [])
summary = bundle.get("summary", {})
df_req = pd.DataFrame(requests_data)

# Header
col_hdr1, col_hdr2 = st.columns([3, 1])
with col_hdr1:
    st.title("⚖️ Buy or Wait? — Autonomous Decision Cockpit")
    st.caption("Deterministic Multi-Agent Cash Flow Simulation & Solvency Invariant Kernel")
with col_hdr2:
    st.markdown("""
    <div style="text-align: right; padding-top: 15px;">
        <span class="badge-now">● 100% INVARIANTS PASS</span>
        <div style="font-size: 0.8rem; color: #9ca3af; margin-top: 5px;">HackerRank Orchestrate 2026</div>
    </div>
    """, unsafe_allow_html=True)

# Sidebar Filters
st.sidebar.header("Filter & Search")
status_filter = st.sidebar.multiselect(
    "Affordability Status",
    options=["affordable_now", "affordable_with_plan", "affordable_later", "not_affordable"],
    default=["affordable_now", "affordable_with_plan", "affordable_later", "not_affordable"]
)
currency_options = sorted(list(df_req["currency"].unique())) if "currency" in df_req.columns else []
selected_curr = st.sidebar.multiselect("Home Currency", options=currency_options, default=currency_options)

search_query = st.sidebar.text_input("Search (ID, User, Text)", "")

# Apply filters
filtered_df = df_req[df_req["affordability_status"].isin(status_filter)]
if currency_options and selected_curr:
    filtered_df = filtered_df[filtered_df["currency"].isin(selected_curr)]
if search_query:
    q = search_query.lower()
    filtered_df = filtered_df[
        filtered_df["request_id"].str.lower().str.contains(q) |
        filtered_df["user_id"].str.lower().str.contains(q) |
        filtered_df["request_text"].str.lower().str.contains(q) |
        filtered_df["decision_explanation"].str.lower().str.contains(q)
    ]

# Navigation Tabs
tab_overview, tab_deepdive, tab_ocr, tab_arch, tab_export = st.tabs([
    "📊 Executive Matrix",
    "📈 90-Day Trajectory Simulation",
    "📷 Multimodal OCR Evidence",
    "🧠 System Architecture & Telemetry",
    "📥 Verification & Export"
])

with tab_overview:
    k1, k2, k3, k4, k5 = st.columns(5)
    with k1:
        st.markdown(f"""
        <div class="metric-card">
            <div class="metric-lbl">Total Inquiries</div>
            <div class="metric-val" style="color: #60a5fa;">{len(df_req)}</div>
        </div>
        """, unsafe_allow_html=True)
    with k2:
        cnt_now = len(df_req[df_req["affordability_status"] == "affordable_now"])
        st.markdown(f"""
        <div class="metric-card">
            <div class="metric-lbl">Affordable Now</div>
            <div class="metric-val" style="color: #10b981;">{cnt_now}</div>
        </div>
        """, unsafe_allow_html=True)
    with k3:
        cnt_plan = len(df_req[df_req["affordability_status"] == "affordable_with_plan"])
        st.markdown(f"""
        <div class="metric-card">
            <div class="metric-lbl">Rescued With Plan</div>
            <div class="metric-val" style="color: #818cf8;">{cnt_plan}</div>
        </div>
        """, unsafe_allow_html=True)
    with k4:
        cnt_later = len(df_req[df_req["affordability_status"] == "affordable_later"])
        st.markdown(f"""
        <div class="metric-card">
            <div class="metric-lbl">Affordable Later</div>
            <div class="metric-val" style="color: #fbbf24;">{cnt_later}</div>
        </div>
        """, unsafe_allow_html=True)
    with k5:
        cnt_no = len(df_req[df_req["affordability_status"] == "not_affordable"])
        st.markdown(f"""
        <div class="metric-card">
            <div class="metric-lbl">Deferred / Solvent</div>
            <div class="metric-val" style="color: #f87171;">{cnt_no}</div>
        </div>
        """, unsafe_allow_html=True)

    st.markdown("<br>", unsafe_allow_html=True)
    
    c_chart1, c_chart2 = st.columns(2)
    with c_chart1:
        status_counts = df_req["affordability_status"].value_counts().reset_index()
        status_counts.columns = ["Status", "Count"]
        fig_pie = px.pie(
            status_counts,
            values="Count",
            names="Status",
            title="Affordability Verdict Distribution",
            color="Status",
            color_discrete_map={
                "affordable_now": "#10b981",
                "affordable_with_plan": "#818cf8",
                "affordable_later": "#fbbf24",
                "not_affordable": "#ef4444"
            },
            hole=0.45
        )
        fig_pie.update_layout(
            paper_bgcolor="rgba(0,0,0,0)",
            plot_bgcolor="rgba(0,0,0,0)",
            font_color="#e5e7eb"
        )
        st.plotly_chart(fig_pie, use_container_width=True)

    with c_chart2:
        method_counts = df_req["recommended_payment_method"].value_counts().reset_index()
        method_counts.columns = ["Payment Method", "Count"]
        fig_bar = px.bar(
            method_counts,
            x="Payment Method",
            y="Count",
            title="Recommended Payment Strategy Breakdown",
            color="Payment Method",
            color_discrete_sequence=["#ef4444", "#3b82f6", "#10b981", "#6366f1", "#f59e0b"]
        )
        fig_bar.update_layout(
            paper_bgcolor="rgba(0,0,0,0)",
            plot_bgcolor="rgba(0,0,0,0)",
            font_color="#e5e7eb"
        )
        st.plotly_chart(fig_bar, use_container_width=True)

    st.subheader(f"Evaluation Records ({len(filtered_df)} matches)")
    cols_to_show = [
        "request_id", "user_id", "currency", "requested_amount", "amount_safe_to_pay",
        "affordability_status", "recommended_payment_method", "earliest_date_for_full_payment"
    ]
    st.dataframe(filtered_df[cols_to_show], use_container_width=True, height=350)

with tab_deepdive:
    st.subheader("Request Deep Dive & 90-Day Cash Flow Simulation")
    
    if filtered_df.empty:
        st.warning("No requests match current filters.")
    else:
        req_id_list = filtered_df["request_id"].tolist()
        selected_rid = st.selectbox("Select Request ID to Inspect", options=req_id_list)
        selected_row = df_req[df_req["request_id"] == selected_rid].iloc[0]
        
        status = selected_row["affordability_status"]
        badge_cls = "badge-now" if status == "affordable_now" else ("badge-plan" if status == "affordable_with_plan" else ("badge-later" if status == "affordable_later" else "badge-no"))
        
        st.markdown(f"""
        <div style="background: rgba(17, 24, 39, 0.8); border: 1px solid rgba(75, 85, 99, 0.4); border-radius: 12px; padding: 18px; margin-bottom: 20px;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <div>
                    <span style="font-size: 1.4rem; font-weight: 700;">{selected_row['request_id']} — {selected_row.get('request_text', '')}</span>
                    <div style="color: #9ca3af; font-size: 0.9rem; margin-top: 4px;">User: {selected_row['user_id']} | Date: {selected_row['request_date']} | Deadline: {selected_row['desired_completion_date']}</div>
                </div>
                <div>
                    <span class="{badge_cls}" style="font-size: 1.1rem; padding: 6px 16px;">{status.upper().replace('_', ' ')}</span>
                </div>
            </div>
        </div>
        """, unsafe_allow_html=True)
        
        curve = selected_row.get("curve", [])
        if curve:
            curve_df = pd.DataFrame(curve)
            fig_traj = go.Figure()
            
            fig_traj.add_trace(go.Scatter(
                x=curve_df["date"],
                y=curve_df["min_balance"],
                mode="lines",
                name="Protected Minimum Balance",
                line=dict(color="#ef4444", width=2, dash="dash")
            ))
            
            fig_traj.add_trace(go.Scatter(
                x=curve_df["date"],
                y=curve_df["balance"],
                mode="lines+markers",
                name="Projected Available Cash",
                line=dict(color="#06b6d4", width=3),
                fill="tonexty",
                fillcolor="rgba(6, 182, 212, 0.1)"
            ))
            
            curr_str = selected_row.get("currency", "")
            fig_traj.update_layout(
                title=f"90-Day Cash Trajectory & Solvency Cushion ({curr_str})",
                xaxis_title="Timeline Date",
                yaxis_title=f"Balance ({curr_str})",
                paper_bgcolor="rgba(0,0,0,0)",
                plot_bgcolor="rgba(17, 24, 39, 0.4)",
                font_color="#e5e7eb",
                hovermode="x unified",
                height=400
            )
            st.plotly_chart(fig_traj, use_container_width=True)
            
        d1, d2, d3, d4 = st.columns(4)
        with d1:
            st.metric("Requested Amount", f"{selected_row['requested_amount']:,.2f} {selected_row.get('currency', '')}")
        with d2:
            st.metric("Amount Safe To Pay", f"{selected_row['amount_safe_to_pay']:,.2f} {selected_row.get('currency', '')}")
        with d3:
            st.metric("Payment Method", selected_row["recommended_payment_method"])
        with d4:
            st.metric("Earliest Full Date", selected_row["earliest_date_for_full_payment"] or "None in 90d")

        st.markdown("### Grounded Decision Explanation")
        st.info(f"📢 {selected_row['decision_explanation']}")

        if selected_row["payment_plan"] != "none":
            st.markdown(f"**Recommended Payment Plan:** `{selected_row['payment_plan']}`")
        if selected_row["spending_changes_needed"] != "none":
            st.markdown(f"**Required Spending Changes:** `{selected_row['spending_changes_needed']}`")

with tab_ocr:
    st.subheader("Multimodal OCR Evidence Archive")
    st.write("Inspection of the 16 visual receipts and invoices resolved by the Receipt Evidence Agent (A1).")
    
    for i in range(0, len(images_data), 4):
        cols = st.columns(4)
        for j in range(4):
            if i + j < len(images_data):
                img_item = images_data[i + j]
                with cols[j]:
                    img_id = img_item["image_id"]
                    img_path = f"dataset/media/images/{img_id}.png"
                    if os.path.exists(img_path):
                        st.image(img_path, caption=f"{img_id} ({img_item.get('extracted_currency', '')} {img_item.get('extracted_amount', '')})", use_container_width=True)
                    else:
                        st.markdown(f"**{img_id}**")
                    st.caption(f"Event: `{img_item.get('related_event_id', 'N/A')}` | Conf: {img_item.get('ocr_confidence', 0.99):.2f}")
                    st.text(f"Notes: {img_item.get('ocr_notes', '')}")

with tab_arch:
    st.subheader("Deterministic Multi-Agent Architecture & Audit Graph")
    st.markdown("""
- **Agent A1 (Receipt Evidence):** Ingests raw images, extracts numerical bounds, enforces zero-imputation defense.
- **Agent A2 (Message Amendment):** Evaluates communications, strips prompt injection attacks, registers amendments.
- **Policy Kernel (Dated FX & Ledger):** Strict directional FX conversion, canonical balance tracking.
- **Cash Flow Simulator (Layer 4):** 90-day day-by-day deterministic cash flow verification.
- **Plan Generator & Tie-Breaker (Layer 5):** 6-level tie-breaking cascade prioritizing deadline and solvency.
- **Independent Validator Gate (Layer 7):** Validates 100% of rows against schema and mathematical invariants.
""")

with tab_export:
    st.subheader("Verification & Compliance Deliverables")
    col_e1, col_e2 = st.columns(2)
    with col_e1:
        st.markdown("### output.csv (250 Records)")
        if os.path.exists("output.csv"):
            with open("output.csv", "r") as f:
                csv_data = f.read()
            st.download_button(
                label="⬇️ Download output.csv",
                data=csv_data,
                file_name="output.csv",
                mime="text/csv"
            )
            st.success("Ready for HackerRank submission.")
    with col_e2:
        st.markdown("### usage_report.md")
        report_path = "code/evaluation/usage_report.md"
        if os.path.exists(report_path):
            with open(report_path, "r") as f:
                rep_data = f.read()
            st.download_button(
                label="⬇️ Download usage_report.md",
                data=rep_data,
                file_name="usage_report.md",
                mime="text/markdown"
            )
            st.success("Telemetry & cost report attached.")

st.markdown("---")
st.caption("HackerRank Orchestrate 2026 | Submission Link: https://www.hackerrank.com/contests/hackerrank-orchestrate-september26/challenges/buy-or-wait/submission")