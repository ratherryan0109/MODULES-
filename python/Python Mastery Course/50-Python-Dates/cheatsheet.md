# Python Dates — Cheatsheet

## Quick Reference

```python
# Python Dates — Quick Reference
# Core syntax and common patterns

# Basic datetime module classes
def basic_datetime_module_classes():
    pass

# date, time, datetime objects pattern
def advanced_datetime_module_classes():
    return "result"
```

## Key Concepts

- **datetime module classes**
- **date, time, datetime objects**
- **Timedelta for date arithmetic**
- **strftime() and strptime() formatting**
- **timezone and pytz/zoneinfo**
- **dateutil for flexible parsing**
- **Working with timestamps (Unix time)**
- **Calendar module for calendars**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(datetime_module_classes_value)` | `process(datetime_module_classes_value)` |
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

- datetime module classes
- date, time, datetime objects
- Timedelta for date arithmetic
- strftime() and strptime() formatting
- timezone and pytz/zoneinfo
- dateutil for flexible parsing
- Working with timestamps (Unix time)
- Calendar module for calendars