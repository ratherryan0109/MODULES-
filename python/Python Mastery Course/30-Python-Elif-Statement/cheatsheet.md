# Python elif Statement — Cheatsheet

## Quick Reference

```python
# Python elif Statement — Quick Reference
# Core syntax and common patterns

# Basic elif syntax and chaining
def basic_elif_syntax_and_chaining():
    pass

# Multi-way branching logic pattern
def advanced_elif_syntax_and_chaining():
    return "result"
```

## Key Concepts

- **elif syntax and chaining**
- **Multi-way branching logic**
- **elif vs nested if performance**
- **elif vs match-case (Python 3.10+)**
- **Dictionary dispatch as alternative**
- **elif with complex conditions**
- **Short-circuit evaluation in elif**
- **Refactoring long elif chains**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(elif_syntax_and_chaining_value)` | `process(elif_syntax_and_chaining_value)` |
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

- elif syntax and chaining
- Multi-way branching logic
- elif vs nested if performance
- elif vs match-case (Python 3.10+)
- Dictionary dispatch as alternative
- elif with complex conditions
- Short-circuit evaluation in elif
- Refactoring long elif chains