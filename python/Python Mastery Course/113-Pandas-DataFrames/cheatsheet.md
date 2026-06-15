# Pandas DataFrames — Cheatsheet

## Quick Reference

```python
# Pandas DataFrames — Quick Reference
# Core syntax and common patterns

# Basic DataFrame creation (dicts, CSV, Excel)
def basic_dataframe_creation_dicts_csv_excel():
    pass

# Column selection and filtering pattern
def advanced_dataframe_creation_dicts_csv_excel():
    return "result"
```

## Key Concepts

- **DataFrame creation (dicts, CSV, Excel)**
- **Column selection and filtering**
- **Row selection (.loc, .iloc)**
- **Adding and removing columns**
- **Sorting by values**
- **Conditional filtering**
- **GroupBy operations**
- **Merging and joining DataFrames**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(dataframe_creation_dicts_csv_excel_value)` | `process(dataframe_creation_dicts_csv_excel_value)` |
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

- DataFrame creation (dicts, CSV, Excel)
- Column selection and filtering
- Row selection (.loc, .iloc)
- Adding and removing columns
- Sorting by values
- Conditional filtering
- GroupBy operations
- Merging and joining DataFrames