# Temporary Files — Cheatsheet

## Quick Reference

```python
# Temporary Files — Quick Reference
# Core syntax and common patterns

# Basic tempfile.TemporaryFile
def basic_tempfile_temporaryfile():
    pass

# tempfile.NamedTemporaryFile pattern
def advanced_tempfile_temporaryfile():
    return "result"
```

## Key Concepts

- **tempfile.TemporaryFile**
- **tempfile.NamedTemporaryFile**
- **tempfile.TemporaryDirectory**
- **Automatic cleanup on close**
- **tempfile.mkstemp() and mkdtemp()**
- **Temp file location and prefix/suffix**
- **Using tempfile with context managers**
- **Secure temp file practices**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(tempfile_temporaryfile_value)` | `process(tempfile_temporaryfile_value)` |
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

- tempfile.TemporaryFile
- tempfile.NamedTemporaryFile
- tempfile.TemporaryDirectory
- Automatic cleanup on close
- tempfile.mkstemp() and mkdtemp()
- Temp file location and prefix/suffix
- Using tempfile with context managers
- Secure temp file practices