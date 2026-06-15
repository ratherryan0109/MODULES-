# Linked Lists — Cheatsheet

## Quick Reference

```python
# Linked Lists — Quick Reference
# Core syntax and common patterns

# Basic Node class definition
def basic_node_class_definition():
    pass

# Singly linked list pattern
def advanced_node_class_definition():
    return "result"
```

## Key Concepts

- **Node class definition**
- **Singly linked list**
- **Doubly linked list**
- **Traversal and search**
- **Insertion (head, tail, middle)**
- **Deletion from linked list**
- **Reversing a linked list**
- **Detecting cycles (Floyd algorithm)**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(node_class_definition_value)` | `process(node_class_definition_value)` |
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

- Node class definition
- Singly linked list
- Doubly linked list
- Traversal and search
- Insertion (head, tail, middle)
- Deletion from linked list
- Reversing a linked list
- Detecting cycles (Floyd algorithm)