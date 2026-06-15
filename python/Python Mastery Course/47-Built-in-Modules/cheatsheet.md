# Built-in Modules — Cheatsheet

## Quick Reference

```python
# Built-in Modules — Quick Reference
# Core syntax and common patterns

# Basic os module (file/process operations)
def basic_os_module_file_process_operations():
    pass

# sys module (interpreter access) pattern
def advanced_os_module_file_process_operations():
    return "result"
```

## Key Concepts

- **os module (file/process operations)**
- **sys module (interpreter access)**
- **math module (mathematical functions)**
- **datetime module (dates and times)**
- **json module (JSON handling)**
- **re module (regular expressions)**
- **collections module (specialized containers)**
- **pathlib module (path operations)**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(os_module_file_process_operations_value)` | `process(os_module_file_process_operations_value)` |
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

- os module (file/process operations)
- sys module (interpreter access)
- math module (mathematical functions)
- datetime module (dates and times)
- json module (JSON handling)
- re module (regular expressions)
- collections module (specialized containers)
- pathlib module (path operations)