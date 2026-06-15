# Data Cleaning — Cheatsheet

## Quick Reference

```python
# Data Cleaning — Quick Reference
# Core syntax and common patterns

# Basic Detecting missing data (isna(), isnull())
def basic_detecting_missing_data_isna_isnull():
    pass

# Filling missing values (fillna()) pattern
def advanced_detecting_missing_data_isna_isnull():
    return "result"
```

## Key Concepts

- **Detecting missing data (isna(), isnull())**
- **Filling missing values (fillna())**
- **Dropping missing data (dropna())**
- **Removing duplicates**
- **Detecting and handling outliers**
- **String cleaning (str methods)**
- **Data type conversion (astype())**
- **Standardizing categorical data**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(detecting_missing_data_isna_isnull_value)` | `process(detecting_missing_data_isna_isnull_value)` |
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

- Detecting missing data (isna(), isnull())
- Filling missing values (fillna())
- Dropping missing data (dropna())
- Removing duplicates
- Detecting and handling outliers
- String cleaning (str methods)
- Data type conversion (astype())
- Standardizing categorical data