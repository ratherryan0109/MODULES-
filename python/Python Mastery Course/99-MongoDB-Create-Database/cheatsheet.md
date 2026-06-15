# MongoDB Create Database — Cheatsheet

## Quick Reference

```python
# MongoDB Create Database — Quick Reference
# Core syntax and common patterns

# Basic Database lazy creation
def basic_database_lazy_creation():
    pass

# Accessing databases (client.db_name) pattern
def advanced_database_lazy_creation():
    return "result"
```

## Key Concepts

- **Database lazy creation**
- **Accessing databases (client.db_name)**
- **Listing databases (list_database_names())**
- **Dropping databases**
- **Database object methods**
- **Switching databases**
- **Database statistics (command())**
- **Database naming rules**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(database_lazy_creation_value)` | `process(database_lazy_creation_value)` |
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

- Database lazy creation
- Accessing databases (client.db_name)
- Listing databases (list_database_names())
- Dropping databases
- Database object methods
- Switching databases
- Database statistics (command())
- Database naming rules