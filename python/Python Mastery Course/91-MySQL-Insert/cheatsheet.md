# MySQL Insert — Cheatsheet

## Quick Reference

```python
# MySQL Insert — Quick Reference
# Core syntax and common patterns

# Basic INSERT INTO statement
def basic_insert_into_statement():
    pass

# Parameterized queries (%s placeholders) pattern
def advanced_insert_into_statement():
    return "result"
```

## Key Concepts

- **INSERT INTO statement**
- **Parameterized queries (%s placeholders)**
- **Single row insert**
- **Batch insert (executemany())**
- **INSERT IGNORE for duplicates**
- **ON DUPLICATE KEY UPDATE**
- **RETURNING primary key (lastrowid)**
- **Transaction control for inserts**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(insert_into_statement_value)` | `process(insert_into_statement_value)` |
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

- INSERT INTO statement
- Parameterized queries (%s placeholders)
- Single row insert
- Batch insert (executemany())
- INSERT IGNORE for duplicates
- ON DUPLICATE KEY UPDATE
- RETURNING primary key (lastrowid)
- Transaction control for inserts