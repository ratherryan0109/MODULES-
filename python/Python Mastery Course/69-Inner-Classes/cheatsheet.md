# Inner Classes — Cheatsheet

## Quick Reference

```python
# Inner Classes — Quick Reference
# Core syntax and common patterns

# Basic Inner class definition
def basic_inner_class_definition():
    pass

# Accessing outer class from inner pattern
def advanced_inner_class_definition():
    return "result"
```

## Key Concepts

- **Inner class definition**
- **Accessing outer class from inner**
- **Inner class scope rules**
- **Static inner class pattern**
- **Inner classes for internal helpers**
- **Inner class vs separate module**
- **Builder pattern with inner classes**
- **Inner class and serialization**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(inner_class_definition_value)` | `process(inner_class_definition_value)` |
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

- Inner class definition
- Accessing outer class from inner
- Inner class scope rules
- Static inner class pattern
- Inner classes for internal helpers
- Inner class vs separate module
- Builder pattern with inner classes
- Inner class and serialization