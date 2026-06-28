import re, sys

files = [
    'oza-kriz-masasi.html',
    'mini-hafiza.html', 
    'enerji-minecraft-reaktor.html',
    'oza-nadir-metaller-oyun.html'
]

for fname in files:
    with open(fname) as f:
        content = f.read()
    
    # Find the main script block
    match = re.search(r'(<script(?!.*src)[^>]*>)(.*?)(</script>)', content, re.DOTALL)
    if not match:
        print(f"{fname}: No inline script found")
        continue
    
    script = match.group(2)
    opens = script.count('{')
    closes = script.count('}')
    diff = closes - opens
    
    if diff <= 0:
        print(f"{fname}: OK (opens={opens}, closes={closes})")
        continue
    
    print(f"{fname}: Extra {diff} closing brace(s)")
    
    # Find the extra closing brace - scan from end
    lines = script.split('\n')
    # Track brace depth from end to find standalone extra }
    for i in range(len(lines)-1, -1, -1):
        line = lines[i].strip()
        if line == '}' or line == '  }':
            # Check if removing this line fixes the count
            test_script = '\n'.join(lines[:i] + lines[i+1:])
            if test_script.count('{') == test_script.count('}'):
                print(f"  -> Removing line {i+1} (relative): '{lines[i].strip()}'")
                lines.pop(i)
                break
    
    new_script = '\n'.join(lines)
    new_content = content[:match.start(2)] + new_script + content[match.end(2):]
    
    # Verify
    new_opens = new_script.count('{')
    new_closes = new_script.count('}')
    if new_opens == new_closes:
        with open(fname, 'w') as f:
            f.write(new_content)
        print(f"  -> FIXED: opens={new_opens} closes={new_closes}")
    else:
        print(f"  -> Still mismatched: opens={new_opens} closes={new_closes}")
        # Try a different approach - find the } that was added by sed (after 'return' or standalone)
        lines = script.split('\n')
        for i in range(len(lines)-1, -1, -1):
            line = lines[i].strip()
            if line == '}':
                # Check context - if previous line also ends with } it might be the extra one
                if i > 0 and lines[i-1].strip().endswith('}'):
                    test_script = '\n'.join(lines[:i] + lines[i+1:])
                    if test_script.count('{') == test_script.count('}'):
                        lines.pop(i)
                        new_script = '\n'.join(lines)
                        new_content = content[:match.start(2)] + new_script + content[match.end(2):]
                        with open(fname, 'w') as f:
                            f.write(new_content)
                        print(f"  -> FIXED (method 2)")
                        break
