# JavaScript Async/Await - Cheatsheet

## Quick Reference

### Core Syntax
```javascript
// JavaScript Async/Await - key patterns
const async_function_keyword = "async function keyword";
const result = async_function_keyword.toUpperCase();
console.log(result); // "ASYNC FUNCTION KEYWORD"
```

### Key Concepts

- **async function keyword**: Core concept in javascript async/await
- **await expression**: Core concept in javascript async/await
- **Error handling with try/catch**: Core concept in javascript async/await
- **Await with Promise.all**: Core concept in javascript async/await
- **Sequential vs parallel execution**: Core concept in javascript async/await
- **Async iteration (for await...of)**: Core concept in javascript async/await
- **Top-level await**: Core concept in javascript async/await
- **Async function patterns**: Core concept in javascript async/await

### Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Declaration | `const x = value` | `const topic = "JavaScript Async/Await"` |
| Check type | `typeof x` | `typeof topic // "string"` |
| Transform | `x.method()` | `topic.toLowerCase()` |
| Compare | `x === y` | `topic === "JavaScript Async/Await"` |
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
- async function keyword
- await expression
- Error handling with try/catch
- Await with Promise.all
- Sequential vs parallel execution
- Async iteration (for await...of)
- Top-level await
- Async function patterns
