# Raising Exceptions — Cheatsheet

## Quick Reference

```python
# Raising Exceptions — Quick Reference
# Core syntax and common patterns

# Basic raise statement syntax
def basic_raise_statement_syntax():
    pass

# Raising built-in exceptions pattern
def advanced_raise_statement_syntax():
    return "result"
```

## Key Concepts

- **raise statement syntax**
- **Raising built-in exceptions**
- **Raising with custom messages**
- **Re-raising exceptions (raise without arg)**
- **Chaining exceptions (raise ... from)**
- **Exception groups (Python 3.11+)**
- **assert for debugging checks**
- **When to raise vs return error**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(raise_statement_syntax_value)` | `process(raise_statement_syntax_value)` |
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

- raise statement syntax
- Raising built-in exceptions
- Raising with custom messages
- Re-raising exceptions (raise without arg)
- Chaining exceptions (raise ... from)
- Exception groups (Python 3.11+)
- assert for debugging checks
- When to raise vs return error