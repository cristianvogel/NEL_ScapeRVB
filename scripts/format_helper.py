import re
import sys

def format_helper(file_path):
    with open(file_path, 'r') as file:
        lines = file.readlines()

    pattern = re.compile(r'^\s*(?:[\w:<>]+\s+)+[\w:<>]+\s*\(.*\)\s*(?:const)?\s*{')
    new_lines = []
    for i, line in enumerate(lines):
        if pattern.match(line) and (i == 0 or lines[i-1].strip() != ''):
            new_lines.append('\n')
        new_lines.append(line)

    with open(file_path, 'w') as file:
        file.writelines(new_lines)

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: format_helper <file_path>")
        sys.exit(1)
    
    format_helper(sys.argv[1])