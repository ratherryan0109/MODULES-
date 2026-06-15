# MySQL Select — Cheatsheet

## Quick Reference

```python
# MySQL Select — Quick Reference
# Core syntax and common patterns

# Basic SELECT statement basics
def basic_select_statement_basics():
    pass

# fetchall(), fetchone(), fetchmany() pattern
def advanced_select_statement_basics():
    return "result"
```

## Key Concepts

- **SELECT statement basics**
- **fetchall(), fetchone(), fetchmany()**
- **WHERE clause filtering**
- **ORDER BY sorting**
- **LIMIT and OFFSET pagination**
- **COUNT, SUM, AVG aggregation**
- **GROUP BY with HAVING**
- **LIKE and pattern matching**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(select_statement_basics_value)` | `process(select_statement_basics_value)` |
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

- SELECT statement basics
- fetchall(), fetchone(), fetchmany()
- WHERE clause filtering
- ORDER BY sorting
- LIMIT and OFFSET pagination
- COUNT, SUM, AVG aggregation
- GROUP BY with HAVING
- LIKE and pattern matching