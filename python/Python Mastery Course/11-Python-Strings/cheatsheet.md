# Python Strings — Cheatsheet

## Quick Reference

```python
# Python Strings — Quick Reference
# Core syntax and common patterns

# Basic String literals (single, double, triple quotes)
def basic_string_literals_single_double_triple_quotes():
    pass

# Escape sequences and raw strings pattern
def advanced_string_literals_single_double_triple_quotes():
    return "result"
```

## Key Concepts

- **String literals (single, double, triple quotes)**
- **Escape sequences and raw strings**
- **String indexing and slicing**
- **String methods (upper, lower, strip, split, join)**
- **String immutability in practice**
- **f-strings for formatting**
- **String templates (string.Template)**
- **Multiline strings and textwrap module**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(string_literals_single_double_triple_quotes_value)` | `process(string_literals_single_double_triple_quotes_value)` |
| With type check | `isinstance(value, type)` | `isinstance(x, int)` |
| Error handling | `try/except` | `try: ... except ValueError: ...` |
| Type hinting | `def func() -> Type` | `def process() -> None:` |
| Documentation | `"""Docstring"""` | `"""Function docs."""` |
| Testing | `assert` | `assert result == expected` |

## Best Practices

1. Follow PEP 8 consistently
2. Use type hints for function signatures
3. Write docstrings for all public APIs
4. Prefer list comprehensions over map/filter
5. Use context managers (with) for resources
6. Handle exceptions specifically, not broadly
7. Use pathlib over os.path for paths
8. Write tests before or alongside code

## Common Mistakes

- Mutable default arguments (use None sentinel)
- Modifying list while iterating
- Catching bare exceptions
- Confusing == and is for comparisons
- Forgetting to close files (use context managers)
- Using time.time() for performance (use timeit)

## Related Topics

- String literals (single, double, triple quotes)
- Escape sequences and raw strings
- String indexing and slicing
- String methods (upper, lower, strip, split, join)
- String immutability in practice
- f-strings for formatting
- String templates (string.Template)
- Multiline strings and textwrap module