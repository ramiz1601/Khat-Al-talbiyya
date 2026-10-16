import re

with open("public/assets/index-RTjVP3YY.js") as f:
    code = f.read()

# Find footer code
idx = code.find("<footer")
if idx == -1:
    idx = code.find("`footer`")
if idx != -1:
    print("FOOTER SNIPPET:")
    print(code[max(0, idx - 100): min(len(code), idx + 1200)])

# Find header / nav code
idx2 = code.find("`header`")
if idx2 != -1:
    print("HEADER SNIPPET:")
    print(code[max(0, idx2 - 100): min(len(code), idx2 + 1800)])
