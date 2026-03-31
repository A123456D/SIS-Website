#!/usr/bin/env python3
import json
import os

with open('files.json', 'r') as f:
    files = json.load(f)

for filepath, content in files.items():
    full_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), filepath)
    os.makedirs(os.path.dirname(full_path), exist_ok=True)
    with open(full_path, 'w') as f:
        f.write(content)
    print(f"Written: {filepath}")

print(f"\nDone. {len(files)} files processed.")
