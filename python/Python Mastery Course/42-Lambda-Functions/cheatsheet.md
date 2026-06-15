# Lambda Functions — Cheatsheet

## Quick Reference

```python
# Lambda Functions — Quick Reference
# Core syntax and common patterns

# Basic lambda syntax (lambda x: expr)
def basic_lambda_syntax_lambda_x_expr():
    pass

# Lambda with map() and filter() pattern
def advanced_lambda_syntax_lambda_x_expr():
    return "result"
```

## Key Concepts

- **lambda syntax (lambda x: expr)**
- **Lambda with map() and filter()**
- **Lambda as sort key functions**
- **Lambda limitations (single expression)**
- **Lambda closures and variable capture**
- **Lambda vs def readability**
- **Lambda with reduce()**
- **Lambda in tkinter/GUI callbacks**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(lambda_syntax_lambda_x_expr_value)` | `process(lambda_syntax_lambda_x_expr_value)` |
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

- lambda syntax (lambda x: expr)
- Lambda with map() and filter()
- Lambda as sort key functions
- Lambda limitations (single expression)
- Lambda closures and variable capture
- Lambda vs def readability
- Lambda with reduce()
- Lambda in tkinter/GUI callbacks