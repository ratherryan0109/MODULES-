# Python match Statement — Cheatsheet

## Quick Reference

```python
# Python match Statement — Quick Reference
# Core syntax and common patterns

# Basic match-case syntax (Python 3.10+)
def basic_match_case_syntax_python_3_10():
    pass

# Literal and value patterns pattern
def advanced_match_case_syntax_python_3_10():
    return "result"
```

## Key Concepts

- **match-case syntax (Python 3.10+)**
- **Literal and value patterns**
- **Capturing patterns with variables**
- **Sequence patterns (lists, tuples)**
- **Mapping patterns (dicts)**
- **Guard conditions (if clauses)**
- **OR patterns (| in patterns)**
- **Match vs if-elif chains**

## Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Basic usage | `function(match_case_syntax_python_3_10_value)` | `process(match_case_syntax_python_3_10_value)` |
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

- match-case syntax (Python 3.10+)
- Literal and value patterns
- Capturing patterns with variables
- Sequence patterns (lists, tuples)
- Mapping patterns (dicts)
- Guard conditions (if clauses)
- OR patterns (| in patterns)
- Match vs if-elif chains