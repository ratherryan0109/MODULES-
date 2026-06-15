# CSV Files — Cheatsheet

## Quick Reference

```python
# CSV Files — Quick Reference
# Core syntax and common patterns

# Basic csv.reader() and csv.writer()
def basic_csv_reader_and_csv_writer():
    pass

# csv.DictReader and DictWriter pattern
def advanced_csv_reader_and_csv_writer():
    return "result"
```

## Key Concepts

- **csv.reader() and csv.writer()**
- **csv.DictReader and DictWriter**
- **CSV dialects and formatting**
- **Writing headers row**
- **Handling quoted fields**
- **CSV with different delimiters**
- **Reading large CSV files**
- **Error handling in CSV parsing**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(csv_reader_and_csv_writer_value)` | `process(csv_reader_and_csv_writer_value)` |
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

- csv.reader() and csv.writer()
- csv.DictReader and DictWriter
- CSV dialects and formatting
- Writing headers row
- Handling quoted fields
- CSV with different delimiters
- Reading large CSV files
- Error handling in CSV parsing