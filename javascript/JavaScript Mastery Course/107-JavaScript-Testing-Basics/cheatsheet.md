# JavaScript Testing Basics - Cheatsheet

## Quick Reference

### Core Syntax
```javascript
// JavaScript Testing Basics - key patterns
const testing_pyramid = "Testing pyramid";
const result = testing_pyramid.toUpperCase();
console.log(result); // "TESTING PYRAMID"
```

### Key Concepts

- **Testing pyramid**: Core concept in javascript testing basics
- **Unit tests**: Core concept in javascript testing basics
- **Integration tests**: Core concept in javascript testing basics
- **Assertion libraries (Chai, Node assert)**: Core concept in javascript testing basics
- **Test runners (Jest, Mocha, Vitest)**: Core concept in javascript testing basics
- **Test-driven development (TDD)**: Core concept in javascript testing basics
- **Behavior-driven development (BDD)**: Core concept in javascript testing basics
- **Code coverage**: Core concept in javascript testing basics

### Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Declaration | `const x = value` | `const topic = "JavaScript Testing Basics"` |
| Check type | `typeof x` | `typeof topic // "string"` |
| Transform | `x.method()` | `topic.toLowerCase()` |
| Compare | `x === y` | `topic === "JavaScript Testing Basics"` |
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
- Testing pyramid
- Unit tests
- Integration tests
- Assertion libraries (Chai, Node assert)
- Test runners (Jest, Mocha, Vitest)
- Test-driven development (TDD)
- Behavior-driven development (BDD)
- Code coverage
