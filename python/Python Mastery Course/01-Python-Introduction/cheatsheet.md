# Python Introduction — Cheatsheet

## Hello, World!
```python
print("Hello, World!")   # Output: Hello, World!
```

## Print() Function
```python
print("text")            # Print a string
print(42)                # Print a number
print(2 + 2)             # Print expression result (output: 4)
```

## Multiple Arguments
```python
print("a", "b", "c")                         # a b c (space separated)
print("a", "b", "c", sep=", ")               # a, b, c (custom separator)
print("a", "b", "c", sep="")                  # abc (no separator)
```

## Line Endings
```python
print("Hello")           # Adds newline at end
print("Hello", end="")   # No newline (next print continues on same line)
print("Hello", end="!\n") # Custom ending
```

## String Multiplication
```python
print("=" * 20)          # ====================
print("-" * 10)          # ----------
```

## Strings
```python
"Hello"                  # Double quotes
'Hello'                  # Single quotes (same thing)
"it's fine"              # Single quote inside double quotes
```

## Newline Inside String
```python
print("Line 1\nLine 2")  # \n creates a newline inside a string
```

## Comments
```python
# This is a comment — Python ignores it
print("Hello")  # Inline comment also works
```

## Common Errors
| Error | Cause | Fix |
|-------|-------|-----|
| `NameError` | Missing quotes around text | Add `"quotes"` |
| `SyntaxError: unterminated string` | Mismatched quotes | Match `" "` or `' '` |
| `SyntaxError: Missing parentheses` | No `()` after print | Add `()` |
| `NameError: Print` | Capital P | Use lowercase `print` |

## Python Program Structure
```python
# Save as filename.py
# Run with: python filename.py

# Code runs top to bottom
print("First")    # Runs first
print("Second")   # Runs second
```

## Quiz
- `print()` is a function → needs parentheses
- Strings need matching quotes `"..."` or `'...'`
- Python is case-sensitive: `print` ≠ `Print`
- `sep` controls separator between items
- `end` controls what goes after the output (default: newline)
