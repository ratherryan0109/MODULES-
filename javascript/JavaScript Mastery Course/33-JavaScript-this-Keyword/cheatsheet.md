# JavaScript this Keyword - Cheatsheet

## Quick Reference

### Core Syntax
```javascript
// JavaScript this Keyword - key patterns
const global_this = "Global this";
const result = global_this.toUpperCase();
console.log(result); // "GLOBAL THIS"
```

### Key Concepts

- **Global this**: Core concept in javascript this keyword
- **Function invocation this**: Core concept in javascript this keyword
- **Method invocation this**: Core concept in javascript this keyword
- **Constructor this**: Core concept in javascript this keyword
- **Arrow function this (lexical)**: Core concept in javascript this keyword
- **call() method**: Core concept in javascript this keyword
- **apply() method**: Core concept in javascript this keyword
- **bind() method**: Core concept in javascript this keyword

### Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Declaration | `const x = value` | `const topic = "JavaScript this Keyword"` |
| Check type | `typeof x` | `typeof topic // "string"` |
| Transform | `x.method()` | `topic.toLowerCase()` |
| Compare | `x === y` | `topic === "JavaScript this Keyword"` |
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
- Global this
- Function invocation this
- Method invocation this
- Constructor this
- Arrow function this (lexical)
- call() method
- apply() method
- bind() method
