import re
import os
import glob

assets_dir = "/workspace/public/assets"
for js_path in glob.glob(os.path.join(assets_dir, "*.js")):
    with open(js_path, "r", encoding="utf-8", errors="ignore") as f:
        content = f.read()
    print("=== JS:", os.path.basename(js_path), "len:", len(content))
    lazy_imports = re.findall(r'import\("([^"]+)"\)', content)
    if lazy_imports:
        print("  lazy imports:", lazy_imports)
    paths = re.findall(r'path:"([^"]+)"', content)
    if paths:
        print("  paths:", paths)
