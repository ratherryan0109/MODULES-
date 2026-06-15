# Python Sets — Cheatsheet

## Quick Reference

```python
# Python Sets — Quick Reference
# Core syntax and common patterns

# Basic Set creation ({1, 2}, set())
def basic_set_creation_1_2_set():
    pass

# Unordered unique elements pattern
def advanced_set_creation_1_2_set():
    return "result"
```

## Key Concepts

- **Set creation ({1, 2}, set())**
- **Unordered unique elements**
- **Sets vs lists for membership**
- **Adding and removing elements**
- **Iteration over sets (no order guarantee)**
- **frozenset immutable variant**
- **Set comprehensions**
- **Hashable requirements for set elements**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(set_creation_1_2_set_value)` | `process(set_creation_1_2_set_value)` |
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

- Set creation ({1, 2}, set())
- Unordered unique elements
- Sets vs lists for membership
- Adding and removing elements
- Iteration over sets (no order guarantee)
- frozenset immutable variant
- Set comprehensions
- Hashable requirements for set elements