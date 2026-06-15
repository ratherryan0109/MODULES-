# JavaScript Hoisting - Cheatsheet

## Quick Reference

### Core Syntax
```javascript
// JavaScript Hoisting - key patterns
const variable_hoisting__var_ = "Variable hoisting (var)";
const result = variable_hoisting__var_.toUpperCase();
console.log(result); // "VARIABLE HOISTING (VAR)"
```

### Key Concepts

- **Variable hoisting (var)**: Core concept in javascript hoisting
- **Function declaration hoisting**: Core concept in javascript hoisting
- **Temporal Dead Zone (TDZ)**: Core concept in javascript hoisting
- **let and const hoisting**: Core concept in javascript hoisting
- **Function expression hoisting**: Core concept in javascript hoisting
- **Class hoisting**: Core concept in javascript hoisting
- **Hoisting order**: Core concept in javascript hoisting
- **Best practices to avoid hoisting bugs**: Core concept in javascript hoisting

### Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Declaration | `const x = value` | `const topic = "JavaScript Hoisting"` |
| Check type | `typeof x` | `typeof topic // "string"` |
| Transform | `x.method()` | `topic.toLowerCase()` |
| Compare | `x === y` | `topic === "JavaScript Hoisting"` |
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
- Variable hoisting (var)
- Function declaration hoisting
- Temporal Dead Zone (TDZ)
- let and const hoisting
- Function expression hoisting
- Class hoisting
- Hoisting order
- Best practices to avoid hoisting bugs
