# JavaScript Promises - Cheatsheet

## Quick Reference

### Core Syntax
```javascript
// JavaScript Promises - key patterns
const promise_states__pending__fulfilled__rejected_ = "Promise states (pending, fulfilled, rejected)";
const result = promise_states__pending__fulfilled__rejected_.toUpperCase();
console.log(result); // "PROMISE STATES (PENDING, FULFILLED, REJECTED)"
```

### Key Concepts

- **Promise states (pending, fulfilled, rejected)**: Core concept in javascript promises
- **then(), catch(), finally()**: Core concept in javascript promises
- **Promise chaining**: Core concept in javascript promises
- **Promise.all and Promise.allSettled**: Core concept in javascript promises
- **Promise.race and Promise.any**: Core concept in javascript promises
- **Promise.resolve and Promise.reject**: Core concept in javascript promises
- **Unhandled promise rejections**: Core concept in javascript promises
- **Promise pattern (deferred)**: Core concept in javascript promises

### Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Declaration | `const x = value` | `const topic = "JavaScript Promises"` |
| Check type | `typeof x` | `typeof topic // "string"` |
| Transform | `x.method()` | `topic.toLowerCase()` |
| Compare | `x === y` | `topic === "JavaScript Promises"` |
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
- Promise states (pending, fulfilled, rejected)
- then(), catch(), finally()
- Promise chaining
- Promise.all and Promise.allSettled
- Promise.race and Promise.any
- Promise.resolve and Promise.reject
- Unhandled promise rejections
- Promise pattern (deferred)
