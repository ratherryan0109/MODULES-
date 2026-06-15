# Stacks — Cheatsheet

## Quick Reference

```python
# Stacks — Quick Reference
# Core syntax and common patterns

# Basic Stack LIFO principle
def basic_stack_lifo_principle():
    pass

# Stack using list (append, pop) pattern
def advanced_stack_lifo_principle():
    return "result"
```

## Key Concepts

- **Stack LIFO principle**
- **Stack using list (append, pop)**
- **Stack using collections.deque**
- **Stack operations (push, pop, peek, is_empty)**
- **Undo/redo with stacks**
- **Expression parsing (parentheses match)**
- **DFS with stack**
- **Call stack recursion insight**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(stack_lifo_principle_value)` | `process(stack_lifo_principle_value)` |
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

- Stack LIFO principle
- Stack using list (append, pop)
- Stack using collections.deque
- Stack operations (push, pop, peek, is_empty)
- Undo/redo with stacks
- Expression parsing (parentheses match)
- DFS with stack
- Call stack recursion insight