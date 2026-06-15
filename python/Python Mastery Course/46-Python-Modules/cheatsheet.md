# Python Modules — Cheatsheet

## Quick Reference

```python
# Python Modules — Quick Reference
# Core syntax and common patterns

# Basic import statement variations
def basic_import_statement_variations():
    pass

# from ... import ... patterns pattern
def advanced_import_statement_variations():
    return "result"
```

## Key Concepts

- **import statement variations**
- **from ... import ... patterns**
- **Module search path (sys.path)**
- **__name__ == "__main__" guard**
- **Module namespace and __all__**
- **Reloading modules (importlib.reload)**
- **Circular import avoidance**
- **Package hierarchy (__init__.py)**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(import_statement_variations_value)` | `process(import_statement_variations_value)` |
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

- import statement variations
- from ... import ... patterns
- Module search path (sys.path)
- __name__ == "__main__" guard
- Module namespace and __all__
- Reloading modules (importlib.reload)
- Circular import avoidance
- Package hierarchy (__init__.py)