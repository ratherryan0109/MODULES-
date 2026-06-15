# Writing Text Files — Cheatsheet

## Quick Reference

```python
# Writing Text Files — Quick Reference
# Core syntax and common patterns

# Basic write() for string output
def basic_write_for_string_output():
    pass

# writelines() for sequences pattern
def advanced_write_for_string_output():
    return "result"
```

## Key Concepts

- **write() for string output**
- **writelines() for sequences**
- **Write modes (w, x, a)**
- **Encoding when writing (encoding param)**
- **Formatting output to files**
- **Writing with print() file parameter**
- **Flushing writes (flush=True)**
- **Atomic write patterns**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(write_for_string_output_value)` | `process(write_for_string_output_value)` |
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

- write() for string output
- writelines() for sequences
- Write modes (w, x, a)
- Encoding when writing (encoding param)
- Formatting output to files
- Writing with print() file parameter
- Flushing writes (flush=True)
- Atomic write patterns