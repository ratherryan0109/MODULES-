# Python String Formatting — Cheatsheet

## Quick Reference

```python
# Python String Formatting — Quick Reference
# Core syntax and common patterns

# Basic f-string basics (f"{var}")
def basic_f_string_basics_f_var():
    pass

# Expression evaluation in f-strings pattern
def advanced_f_string_basics_f_var():
    return "result"
```

## Key Concepts

- **f-string basics (f"{var}")**
- **Expression evaluation in f-strings**
- **Format specifiers (:>10, :^10, :<10)**
- **Number formatting (:,.2f, :%**
- **:x)**
- **str.format() method**
- **Named placeholders in format()**
- **string.Template class**
- **Formatting best practices**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(f_string_basics_f_var_value)` | `process(f_string_basics_f_var_value)` |
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

- f-string basics (f"{var}")
- Expression evaluation in f-strings
- Format specifiers (:>10, :^10, :<10)
- Number formatting (:,.2f, :%
- :x)
- str.format() method
- Named placeholders in format()
- string.Template class
- Formatting best practices