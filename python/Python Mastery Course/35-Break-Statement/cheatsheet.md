# break Statement — Cheatsheet

## Quick Reference

```python
# break Statement — Quick Reference
# Core syntax and common patterns

# Basic break in for loops
def basic_break_in_for_loops():
    pass

# break in while loops pattern
def advanced_break_in_for_loops():
    return "result"
```

## Key Concepts

- **break in for loops**
- **break in while loops**
- **Breaking out of infinite loops**
- **Breaking nested loops (flag pattern)**
- **Break with else clause interaction**
- **Break vs return vs sys.exit()**
- **Break in comprehension context**
- **Cleaner alternatives to break**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(break_in_for_loops_value)` | `process(break_in_for_loops_value)` |
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

- break in for loops
- break in while loops
- Breaking out of infinite loops
- Breaking nested loops (flag pattern)
- Break with else clause interaction
- Break vs return vs sys.exit()
- Break in comprehension context
- Cleaner alternatives to break