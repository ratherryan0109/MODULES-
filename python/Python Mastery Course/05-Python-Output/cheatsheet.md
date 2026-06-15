# Python Output — Cheatsheet

## Quick Reference

```python
# Python Output — Quick Reference
# Core syntax and common patterns

# Basic print() function syntax
def basic_print_function_syntax():
    pass

# sep and end parameters pattern
def advanced_print_function_syntax():
    return "result"
```

## Key Concepts

- **print() function syntax**
- **sep and end parameters**
- **Formatted string literals (f-strings)**
- **Old-style % formatting**
- **str.format() method**
- **Printing to files (file parameter)**
- **Pretty printing with pprint**
- **Controlling output buffering**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(print_function_syntax_value)` | `process(print_function_syntax_value)` |
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

- print() function syntax
- sep and end parameters
- Formatted string literals (f-strings)
- Old-style % formatting
- str.format() method
- Printing to files (file parameter)
- Pretty printing with pprint
- Controlling output buffering