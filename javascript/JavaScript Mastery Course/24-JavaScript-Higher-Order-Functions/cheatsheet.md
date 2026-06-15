# JavaScript Higher-Order Functions - Cheatsheet

## Quick Reference

### Core Syntax
```javascript
// JavaScript Higher-Order Functions - key patterns
const functions_as_arguments = "Functions as arguments";
const result = functions_as_arguments.toUpperCase();
console.log(result); // "FUNCTIONS AS ARGUMENTS"
```

### Key Concepts

- **Functions as arguments**: Core concept in javascript higher-order functions
- **Functions as return values**: Core concept in javascript higher-order functions
- **Function composition**: Core concept in javascript higher-order functions
- **Currying**: Core concept in javascript higher-order functions
- **Partial application**: Core concept in javascript higher-order functions
- **map/filter/reduce as HOFs**: Core concept in javascript higher-order functions
- **Decorator functions**: Core concept in javascript higher-order functions
- **Memoization**: Core concept in javascript higher-order functions

### Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Declaration | `const x = value` | `const topic = "JavaScript Higher-Order Functions"` |
| Check type | `typeof x` | `typeof topic // "string"` |
| Transform | `x.method()` | `topic.toLowerCase()` |
| Compare | `x === y` | `topic === "JavaScript Higher-Order Functions"` |
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
- Functions as arguments
- Functions as return values
- Function composition
- Currying
- Partial application
- map/filter/reduce as HOFs
- Decorator functions
- Memoization
