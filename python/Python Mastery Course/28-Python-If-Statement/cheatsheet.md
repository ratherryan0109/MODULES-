# Python if Statement — Cheatsheet

## Quick Reference

```python
# Python if Statement — Quick Reference
# Core syntax and common patterns

# Basic if statement syntax
def basic_if_statement_syntax():
    pass

# Colon and indentation block pattern
def advanced_if_statement_syntax():
    return "result"
```

## Key Concepts

- **if statement syntax**
- **Colon and indentation block**
- **Comparison expressions**
- **Truthy and falsy in conditions**
- **Nested if statements**
- **Pass statement in conditionals**
- **Inline if (conditional expression)**
- **Boolean operators in conditions**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(if_statement_syntax_value)` | `process(if_statement_syntax_value)` |
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

- if statement syntax
- Colon and indentation block
- Comparison expressions
- Truthy and falsy in conditions
- Nested if statements
- Pass statement in conditionals
- Inline if (conditional expression)
- Boolean operators in conditions