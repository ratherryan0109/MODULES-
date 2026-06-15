# JavaScript Object Prototypes - Cheatsheet

## Quick Reference

### Core Syntax
```javascript
// JavaScript Object Prototypes - key patterns
const prototype_chain = "Prototype chain";
const result = prototype_chain.toUpperCase();
console.log(result); // "PROTOTYPE CHAIN"
```

### Key Concepts

- **Prototype chain**: Core concept in javascript object prototypes
- **__proto__ vs prototype**: Core concept in javascript object prototypes
- **Object.getPrototypeOf**: Core concept in javascript object prototypes
- **Object.setPrototypeOf**: Core concept in javascript object prototypes
- **hasOwnProperty**: Core concept in javascript object prototypes
- **isPrototypeOf**: Core concept in javascript object prototypes
- **Property shadowing**: Core concept in javascript object prototypes
- **Prototypal inheritance**: Core concept in javascript object prototypes

### Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Declaration | `const x = value` | `const topic = "JavaScript Object Prototypes"` |
| Check type | `typeof x` | `typeof topic // "string"` |
| Transform | `x.method()` | `topic.toLowerCase()` |
| Compare | `x === y` | `topic === "JavaScript Object Prototypes"` |
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
- Prototype chain
- __proto__ vs prototype
- Object.getPrototypeOf
- Object.setPrototypeOf
- hasOwnProperty
- isPrototypeOf
- Property shadowing
- Prototypal inheritance
