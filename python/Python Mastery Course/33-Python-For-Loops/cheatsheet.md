# Python for Loops — Cheatsheet

## Quick Reference

```python
# Python for Loops — Quick Reference
# Core syntax and common patterns

# Basic for loop syntax (for x in iterable)
def basic_for_loop_syntax_for_x_in_iterable():
    pass

# range() function and its forms pattern
def advanced_for_loop_syntax_for_x_in_iterable():
    return "result"
```

## Key Concepts

- **for loop syntax (for x in iterable)**
- **range() function and its forms**
- **Iterating over lists, tuples, sets, dicts**
- **Enumerate for index-value pairs**
- **Zip for parallel iteration**
- **Reversed iteration**
- **Else clause on for loops**
- **Loop variable scope and leakage**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(for_loop_syntax_for_x_in_iterable_value)` | `process(for_loop_syntax_for_x_in_iterable_value)` |
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

- for loop syntax (for x in iterable)
- range() function and its forms
- Iterating over lists, tuples, sets, dicts
- Enumerate for index-value pairs
- Zip for parallel iteration
- Reversed iteration
- Else clause on for loops
- Loop variable scope and leakage