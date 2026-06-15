# Python Comments — Cheatsheet

## Quick Reference

```python
# Python Comments — Quick Reference
# Core syntax and common patterns

# Basic Single-line comments with #
def basic_single_line_comments_with():
    pass

# Multi-line comments (triple quotes) pattern
def advanced_single_line_comments_with():
    return "result"
```

## Key Concepts

- **Single-line comments with #**
- **Multi-line comments (triple quotes)**
- **Docstrings for functions and classes**
- **PEP 257 docstring conventions**
- **Inline comments best practices**
- **Commenting out code for debugging**
- **Type annotations as documentation**
- **Generating documentation from docstrings**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(single_line_comments_with_value)` | `process(single_line_comments_with_value)` |
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

- Single-line comments with #
- Multi-line comments (triple quotes)
- Docstrings for functions and classes
- PEP 257 docstring conventions
- Inline comments best practices
- Commenting out code for debugging
- Type annotations as documentation
- Generating documentation from docstrings