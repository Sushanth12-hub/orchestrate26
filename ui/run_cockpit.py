"""
Cockpit Launcher: Run Streamlit visual dashboard or open standalone HTML cockpit.
Usage:
    python ui/run_cockpit.py            # Opens standalone HTML in browser
    python ui/run_cockpit.py --server   # Starts Streamlit dashboard server
"""
import os
import sys
import webbrowser
import subprocess

def main():
    ui_dir = os.path.dirname(os.path.abspath(__file__))
    html_path = os.path.join(ui_dir, "index.html")
    dashboard_path = os.path.join(ui_dir, "dashboard.py")

    if "--server" in sys.argv:
        print(f"Launching Streamlit visual dashboard on {dashboard_path}...")
        subprocess.run([sys.executable, "-m", "streamlit", "run", dashboard_path])
    else:
        print(f"Opening standalone financial cockpit: {html_path}")
        webbrowser.open("file://" + html_path)
        print("\nTip: To launch the interactive Python Streamlit dashboard, run:")
        print("    python ui/run_cockpit.py --server\n")

if __name__ == "__main__":
    main()
