# Password Generator — Cheatsheet

## Quick Reference

```python
# Password Generator — Quick Reference
# Core syntax and common patterns

# Basic Random character generation
def basic_random_character_generation():
    pass

# Character set selection pattern
def advanced_random_character_generation():
    return "result"
```

## Key Concepts

- **Random character generation**
- **Character set selection**
- **Password strength evaluation**
- **secrets module for security**
- **Customizable password rules**
- **CLI argument parsing (argparse)**
- **Generating multiple passwords**
- **Password entropy calculation**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(random_character_generation_value)` | `process(random_character_generation_value)` |
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

- Random character generation
- Character set selection
- Password strength evaluation
- secrets module for security
- Customizable password rules
- CLI argument parsing (argparse)
- Generating multiple passwords
- Password entropy calculation