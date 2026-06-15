# Testing Fundamentals — Cheatsheet

## Quick Reference

```python
# Testing Fundamentals — Quick Reference
# Core syntax and common patterns

# Basic unittest module basics (TestCase)
def basic_unittest_module_basics_testcase():
    pass

# Test assertions (assertEqual, assertTrue) pattern
def advanced_unittest_module_basics_testcase():
    return "result"
```

## Key Concepts

- **unittest module basics (TestCase)**
- **Test assertions (assertEqual, assertTrue)**
- **setUp and tearDown methods**
- **pytest framework overview**
- **pytest fixtures and conftest.py**
- **Parametrized tests**
- **Mock and patch (unittest.mock)**
- **Test coverage (coverage.py)**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(unittest_module_basics_testcase_value)` | `process(unittest_module_basics_testcase_value)` |
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

- unittest module basics (TestCase)
- Test assertions (assertEqual, assertTrue)
- setUp and tearDown methods
- pytest framework overview
- pytest fixtures and conftest.py
- Parametrized tests
- Mock and patch (unittest.mock)
- Test coverage (coverage.py)