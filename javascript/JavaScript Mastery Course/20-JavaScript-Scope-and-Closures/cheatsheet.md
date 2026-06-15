# JavaScript Scope and Closures - Cheatsheet

## Quick Reference

### Core Syntax
```javascript
// JavaScript Scope and Closures - key patterns
const global_scope = "Global scope";
const result = global_scope.toUpperCase();
console.log(result); // "GLOBAL SCOPE"
```

### Key Concepts

- **Global scope**: Core concept in javascript scope and closures
- **Function scope**: Core concept in javascript scope and closures
- **Block scope (let/const)**: Core concept in javascript scope and closures
- **Scope chain**: Core concept in javascript scope and closures
- **Lexical scoping**: Core concept in javascript scope and closures
- **Closures**: Core concept in javascript scope and closures
- **Module pattern**: Core concept in javascript scope and closures
- **Private variables with closures**: Core concept in javascript scope and closures

### Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Declaration | `const x = value` | `const topic = "JavaScript Scope and Closures"` |
| Check type | `typeof x` | `typeof topic // "string"` |
| Transform | `x.method()` | `topic.toLowerCase()` |
| Compare | `x === y` | `topic === "JavaScript Scope and Closures"` |
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
- Global scope
- Function scope
- Block scope (let/const)
- Scope chain
- Lexical scoping
- Closures
- Module pattern
- Private variables with closures
