"""
Submission Packaging Script for HackerRank Orchestrate
Generates a clean, compliant code.zip excluding datasets, virtual environments, and cache artifacts.
"""
import os
import zipfile

def package_submission(repo_root: str):
    zip_path = os.path.join(repo_root, "code.zip")
    code_dir = os.path.join(repo_root, "code")

    print(f"Creating submission package at {zip_path}...")
    with zipfile.ZipFile(zip_path, "w", zipfile.ZIP_DEFLATED) as zipf:
        # Add code directory
        for root, dirs, files in os.walk(code_dir):
            # Exclude __pycache__ and test scratch scripts
            dirs[:] = [d for d in dirs if d not in ["__pycache__", ".pytest_cache", "test_scratch"]]
            for file in files:
                if file.endswith((".pyc", ".pyo", ".pyd")) or file.startswith("test_"):
                    continue
                full_path = os.path.join(root, file)
                rel_path = os.path.relpath(full_path, repo_root)
                zipf.write(full_path, rel_path)
                print(f"  + {rel_path}")

        # Add root documentation
        for doc in ["README.md", "AGENTS.md", "problem_statement.md"]:
            doc_path = os.path.join(repo_root, doc)
            if os.path.exists(doc_path):
                zipf.write(doc_path, doc)
                print(f"  + {doc}")

        # Add automated test suite
        tests_dir = os.path.join(repo_root, "tests")
        if os.path.exists(tests_dir):
            for root, dirs, files in os.walk(tests_dir):
                dirs[:] = [d for d in dirs if d not in ["__pycache__", ".pytest_cache"]]
                for file in files:
                    if file.endswith((".pyc", ".pyo")):
                        continue
                    full_path = os.path.join(root, file)
                    rel_path = os.path.relpath(full_path, repo_root)
                    zipf.write(full_path, rel_path)
                    print(f"  + {rel_path}")

        # Ensure evaluation/usage_report.md exists at root level of zip as well
        eval_report = os.path.join(code_dir, "evaluation", "usage_report.md")
        if os.path.exists(eval_report):
            zipf.write(eval_report, "evaluation/usage_report.md")
            print(f"  + evaluation/usage_report.md")
        eval_main = os.path.join(code_dir, "evaluation", "main.py")
        if os.path.exists(eval_main):
            zipf.write(eval_main, "evaluation/main.py")
            print(f"  + evaluation/main.py")

    size_kb = os.path.getsize(zip_path) / 1024
    print(f"\n[SUCCESS] Generated clean code.zip ({size_kb:.2f} KB)")

if __name__ == "__main__":
    root = os.path.dirname(os.path.abspath(__file__))
    package_submission(root)
