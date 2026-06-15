# Python File Handling — Cheatsheet

## Quick Reference

```python
# Python File Handling — Quick Reference
# Core syntax and common patterns

# Basic open() function and file modes
def basic_open_function_and_file_modes():
    pass

# Reading files (.read(), .readline(), .readlines()) pattern
def advanced_open_function_and_file_modes():
    return "result"
```

## Key Concepts

- **open() function and file modes**
- **Reading files (.read(), .readline(), .readlines())**
- **Writing files (.write(), .writelines())**
- **Context managers (with statement)**
- **File encoding (utf-8, latin-1)**
- **File seek and tell positioning**
- **Buffering and flushing**
- **Error handling in file operations**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(open_function_and_file_modes_value)` | `process(open_function_and_file_modes_value)` |
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

- open() function and file modes
- Reading files (.read(), .readline(), .readlines())
- Writing files (.write(), .writelines())
- Context managers (with statement)
- File encoding (utf-8, latin-1)
- File seek and tell positioning
- Buffering and flushing
- Error handling in file operations