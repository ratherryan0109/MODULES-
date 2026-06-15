# Python Functions — Cheatsheet

## Quick Reference

```python
# Python Functions — Quick Reference
# Core syntax and common patterns

# Basic def statement and function definition
def basic_def_statement_and_function_definition():
    pass

# Function parameters and arguments pattern
def advanced_def_statement_and_function_definition():
    return "result"
```

## Key Concepts

- **def statement and function definition**
- **Function parameters and arguments**
- **Return values and multiple returns**
- **Docstrings (PEP 257)**
- **Function annotations (type hints)**
- **First-class functions (functions as objects)**
- **Inner functions and closures**
- **Function attributes and __name__**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(def_statement_and_function_definition_value)` | `process(def_statement_and_function_definition_value)` |
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

- def statement and function definition
- Function parameters and arguments
- Return values and multiple returns
- Docstrings (PEP 257)
- Function annotations (type hints)
- First-class functions (functions as objects)
- Inner functions and closures
- Function attributes and __name__