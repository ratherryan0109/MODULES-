# JavaScript Error Handling - Cheatsheet

## Quick Reference

### Core Syntax
```javascript
// JavaScript Error Handling - key patterns
const try_catch_finally = "try/catch/finally";
const result = try_catch_finally.toUpperCase();
console.log(result); // "TRY/CATCH/FINALLY"
```

### Key Concepts

- **try/catch/finally**: Core concept in javascript error handling
- **Error types (Error, SyntaxError, ReferenceError, etc.)**: Core concept in javascript error handling
- **Custom error classes**: Core concept in javascript error handling
- **Throwing errors**: Core concept in javascript error handling
- **Error stack traces**: Core concept in javascript error handling
- **Error handling patterns**: Core concept in javascript error handling
- **Finally block usage**: Core concept in javascript error handling
- **Async error handling**: Core concept in javascript error handling

### Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Declaration | `const x = value` | `const topic = "JavaScript Error Handling"` |
| Check type | `typeof x` | `typeof topic // "string"` |
| Transform | `x.method()` | `topic.toLowerCase()` |
| Compare | `x === y` | `topic === "JavaScript Error Handling"` |
| Iterate | `arr.method()` | `[1,2,3].map(n => n * 2)` |

### Best Practices
1. Use `const` by default, `let` when reassignment is needed
2. Handle edge cases and validate inputs
3. Write pure functions when possible
4. Use meaningful, descriptive names
5. Keep functions small and focused
6. Test with different inputs and edge cases
7. Use early returns to reduce nesting
8. Prefer array methods over manual loops

### Common Mistakes
- Misunderstanding mutable vs immutable operations
- Forgetting to handle edge cases
- Overcomplicating simple logic
- Not using strict equality (===)
- Mutating state unexpectedly

### Related Topics
- try/catch/finally
- Error types (Error, SyntaxError, ReferenceError, etc.)
- Custom error classes
- Throwing errors
- Error stack traces
- Error handling patterns
- Finally block usage
- Async error handling
