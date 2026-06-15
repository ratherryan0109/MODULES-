# continue Statement — Cheatsheet

## Quick Reference

```python
# continue Statement — Quick Reference
# Core syntax and common patterns

# Basic continue in for loops
def basic_continue_in_for_loops():
    pass

# continue in while loops pattern
def advanced_continue_in_for_loops():
    return "result"
```

## Key Concepts

- **continue in for loops**
- **continue in while loops**
- **Skipping iterations conditionally**
- **continue in nested loops**
- **continue vs pass vs break**
- **Continue in loop else clause**
- **Filtering with continue**
- **Readability with vs without continue**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(continue_in_for_loops_value)` | `process(continue_in_for_loops_value)` |
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

- continue in for loops
- continue in while loops
- Skipping iterations conditionally
- continue in nested loops
- continue vs pass vs break
- Continue in loop else clause
- Filtering with continue
- Readability with vs without continue