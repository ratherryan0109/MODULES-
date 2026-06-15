# Class Properties — Cheatsheet

## Quick Reference

```python
# Class Properties — Quick Reference
# Core syntax and common patterns

# Basic @property decorator (getter)
def basic_property_decorator_getter():
    pass

# @<name>.setter decorator pattern
def advanced_property_decorator_getter():
    return "result"
```

## Key Concepts

- **@property decorator (getter)**
- **@<name>.setter decorator**
- **@<name>.deleter decorator**
- **Computed/derived properties**
- **Read-only properties**
- **Lazy evaluation with properties**
- **Property vs public attribute tradeoffs**
- **property() built-in function**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(property_decorator_getter_value)` | `process(property_decorator_getter_value)` |
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

- @property decorator (getter)
- @<name>.setter decorator
- @<name>.deleter decorator
- Computed/derived properties
- Read-only properties
- Lazy evaluation with properties
- Property vs public attribute tradeoffs
- property() built-in function