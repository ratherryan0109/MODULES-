# Binary Search Trees — Cheatsheet

## Quick Reference

```python
# Binary Search Trees — Quick Reference
# Core syntax and common patterns

# Basic BST property (left < root < right)
def basic_bst_property_left_root_right():
    pass

# BST search (O(log n) average) pattern
def advanced_bst_property_left_root_right():
    return "result"
```

## Key Concepts

- **BST property (left < root < right)**
- **BST search (O(log n) average)**
- **BST insertion**
- **BST deletion (three cases)**
- **In-order traversal (sorted)**
- **BST vs sorted array**
- **BST time complexity analysis**
- **BST applications (database indexes)**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(bst_property_left_root_right_value)` | `process(bst_property_left_root_right_value)` |
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

- BST property (left < root < right)
- BST search (O(log n) average)
- BST insertion
- BST deletion (three cases)
- In-order traversal (sorted)
- BST vs sorted array
- BST time complexity analysis
- BST applications (database indexes)