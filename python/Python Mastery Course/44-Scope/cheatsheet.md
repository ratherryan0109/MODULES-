# Scope — Cheatsheet

## Quick Reference

```python
# Scope — Quick Reference
# Core syntax and common patterns

# Basic LEGB rule (Local, Enclosing, Global, Built-in)
def basic_legb_rule_local_enclosing_global_built_in():
    pass

# Global variables and global keyword pattern
def advanced_legb_rule_local_enclosing_global_built_in():
    return "result"
```

## Key Concepts

- **LEGB rule (Local, Enclosing, Global, Built-in)**
- **Global variables and global keyword**
- **nonlocal keyword for closures**
- **Variable scope and assignment**
- **Built-in scope and __builtins__**
- **Scope in nested functions**
- **Module-level (global) scope**
- **Scope and variable shadowing**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(legb_rule_local_enclosing_global_built_in_value)` | `process(legb_rule_local_enclosing_global_built_in_value)` |
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

- LEGB rule (Local, Enclosing, Global, Built-in)
- Global variables and global keyword
- nonlocal keyword for closures
- Variable scope and assignment
- Built-in scope and __builtins__
- Scope in nested functions
- Module-level (global) scope
- Scope and variable shadowing