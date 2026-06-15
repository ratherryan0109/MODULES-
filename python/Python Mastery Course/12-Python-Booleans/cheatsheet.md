# Python Booleans — Cheatsheet

## Quick Reference

```python
# Python Booleans — Quick Reference
# Core syntax and common patterns

# Basic True and False keywords
def basic_true_and_false_keywords():
    pass

# Truthy and falsy values pattern
def advanced_true_and_false_keywords():
    return "result"
```

## Key Concepts

- **True and False keywords**
- **Truthy and falsy values**
- **bool() function**
- **Comparison operators returning bool**
- **and, or, not operators**
- **Short-circuit evaluation**
- **Chained comparisons (a < b < c)**
- **Boolean operators with non-bool values**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(true_and_false_keywords_value)` | `process(true_and_false_keywords_value)` |
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

- True and False keywords
- Truthy and falsy values
- bool() function
- Comparison operators returning bool
- and, or, not operators
- Short-circuit evaluation
- Chained comparisons (a < b < c)
- Boolean operators with non-bool values