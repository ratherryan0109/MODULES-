# Library Management System — Cheatsheet

## Quick Reference

```python
# Library Management System — Quick Reference
# Core syntax and common patterns

# Basic Book catalog management
def basic_book_catalog_management():
    pass

# Member registration pattern
def advanced_book_catalog_management():
    return "result"
```

## Key Concepts

- **Book catalog management**
- **Member registration**
- **Book borrowing and returns**
- **Due date tracking**
- **Fine calculation system**
- **Search by title/author/ISBN**
- **Book availability tracking**
- **Report generation**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(book_catalog_management_value)` | `process(book_catalog_management_value)` |
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

- Book catalog management
- Member registration
- Book borrowing and returns
- Due date tracking
- Fine calculation system
- Search by title/author/ISBN
- Book availability tracking
- Report generation