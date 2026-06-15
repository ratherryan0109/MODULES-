# MySQL Delete — Cheatsheet

## Quick Reference

```python
# MySQL Delete — Quick Reference
# Core syntax and common patterns

# Basic DELETE statement syntax
def basic_delete_statement_syntax():
    pass

# WHERE clause for targeted deletion pattern
def advanced_delete_statement_syntax():
    return "result"
```

## Key Concepts

- **DELETE statement syntax**
- **WHERE clause for targeted deletion**
- **Deleting all rows (no WHERE)**
- **TRUNCATE TABLE vs DELETE**
- **DELETE with JOIN**
- **Cascading deletes (foreign keys)**
- **Transaction safety for deletes**
- **Soft delete pattern**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(delete_statement_syntax_value)` | `process(delete_statement_syntax_value)` |
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

- DELETE statement syntax
- WHERE clause for targeted deletion
- Deleting all rows (no WHERE)
- TRUNCATE TABLE vs DELETE
- DELETE with JOIN
- Cascading deletes (foreign keys)
- Transaction safety for deletes
- Soft delete pattern