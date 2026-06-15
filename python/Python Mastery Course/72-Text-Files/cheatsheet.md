# Text Files (.txt) — Cheatsheet

## Quick Reference

```python
# Text Files (.txt) — Quick Reference
# Core syntax and common patterns

# Basic Opening text files (mode="r", "w", "a")
def basic_opening_text_files_mode_r_w_a():
    pass

# Reading entire file content pattern
def advanced_opening_text_files_mode_r_w_a():
    return "result"
```

## Key Concepts

- **Opening text files (mode="r", "w", "a")**
- **Reading entire file content**
- **Line-by-line iteration**
- **Writing lines to files**
- **File encoding considerations**
- **Newline handling (\n, \r\n)**
- **Stripping whitespace from lines**
- **Processing large text files**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(opening_text_files_mode_r_w_a_value)` | `process(opening_text_files_mode_r_w_a_value)` |
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

- Opening text files (mode="r", "w", "a")
- Reading entire file content
- Line-by-line iteration
- Writing lines to files
- File encoding considerations
- Newline handling (\n, \r\n)
- Stripping whitespace from lines
- Processing large text files