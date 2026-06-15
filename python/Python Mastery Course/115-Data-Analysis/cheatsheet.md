# Data Analysis — Cheatsheet

## Quick Reference

```python
# Data Analysis — Quick Reference
# Core syntax and common patterns

# Basic Descriptive statistics (describe())
def basic_descriptive_statistics_describe():
    pass

# GroupBy aggregation patterns pattern
def advanced_descriptive_statistics_describe():
    return "result"
```

## Key Concepts

- **Descriptive statistics (describe())**
- **GroupBy aggregation patterns**
- **Pivot tables (pivot_table())**
- **Multi-level indexing**
- **Time series date ranges**
- **Resampling time series data**
- **Rolling window calculations**
- **Correlation analysis**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(descriptive_statistics_describe_value)` | `process(descriptive_statistics_describe_value)` |
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

- Descriptive statistics (describe())
- GroupBy aggregation patterns
- Pivot tables (pivot_table())
- Multi-level indexing
- Time series date ranges
- Resampling time series data
- Rolling window calculations
- Correlation analysis