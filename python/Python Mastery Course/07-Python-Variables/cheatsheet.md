# Python Variables — Cheatsheet

## Quick Reference

```python
# Python Variables — Quick Reference
# Core syntax and common patterns

# Basic Variable assignment and rebinding
def basic_variable_assignment_and_rebinding():
    pass

# Dynamic typing and type inference pattern
def advanced_variable_assignment_and_rebinding():
    return "result"
```

## Key Concepts

- **Variable assignment and rebinding**
- **Dynamic typing and type inference**
- **Multiple assignment (a, b = 1, 2)**
- **Swapping variables (a, b = b, a)**
- **Variable naming rules and conventions**
- **Constants by convention (UPPER_CASE)**
- **Type hints for variables**
- **del statement and garbage collection**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(variable_assignment_and_rebinding_value)` | `process(variable_assignment_and_rebinding_value)` |
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

- Variable assignment and rebinding
- Dynamic typing and type inference
- Multiple assignment (a, b = 1, 2)
- Swapping variables (a, b = b, a)
- Variable naming rules and conventions
- Constants by convention (UPPER_CASE)
- Type hints for variables
- del statement and garbage collection