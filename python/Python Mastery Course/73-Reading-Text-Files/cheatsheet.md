# Reading Text Files — Cheatsheet

## Quick Reference

```python
# Reading Text Files — Quick Reference
# Core syntax and common patterns

# Basic read() with size parameter
def basic_read_with_size_parameter():
    pass

# readline() for single lines pattern
def advanced_read_with_size_parameter():
    return "result"
```

## Key Concepts

- **read() with size parameter**
- **readline() for single lines**
- **readlines() for list of lines**
- **For loop iteration (memory efficient)**
- **Reading large files in chunks**
- **Reading with context managers**
- **Reading from specific positions (seek)**
- **Handling encoding errors**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(read_with_size_parameter_value)` | `process(read_with_size_parameter_value)` |
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

- read() with size parameter
- readline() for single lines
- readlines() for list of lines
- For loop iteration (memory efficient)
- Reading large files in chunks
- Reading with context managers
- Reading from specific positions (seek)
- Handling encoding errors