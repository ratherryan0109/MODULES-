# JavaScript Generators - Cheatsheet

## Quick Reference

### Core Syntax
```javascript
// JavaScript Generators - key patterns
const generator_function_syntax__function__ = "Generator function syntax (function*)";
const result = generator_function_syntax__function__.toUpperCase();
console.log(result); // "GENERATOR FUNCTION SYNTAX (FUNCTION*)"
```

### Key Concepts

- **Generator function syntax (function*)**: Core concept in javascript generators
- **yield keyword**: Core concept in javascript generators
- **Generator.next() method**: Core concept in javascript generators
- **yield* delegation**: Core concept in javascript generators
- **Two-way communication with next()**: Core concept in javascript generators
- **Generator return() and throw()**: Core concept in javascript generators
- **Infinite generators**: Core concept in javascript generators
- **Generator use cases**: Core concept in javascript generators

### Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Declaration | `const x = value` | `const topic = "JavaScript Generators"` |
| Check type | `typeof x` | `typeof topic // "string"` |
| Transform | `x.method()` | `topic.toLowerCase()` |
| Compare | `x === y` | `topic === "JavaScript Generators"` |
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
- Generator function syntax (function*)
- yield keyword
- Generator.next() method
- yield* delegation
- Two-way communication with next()
- Generator return() and throw()
- Infinite generators
- Generator use cases
