# JavaScript call, apply, bind - Cheatsheet

## Quick Reference

### Core Syntax
```javascript
// JavaScript call, apply, bind - key patterns
const call_____function_borrowing = "call() - function borrowing";
const result = call_____function_borrowing.toUpperCase();
console.log(result); // "CALL() - FUNCTION BORROWING"
```

### Key Concepts

- **call() - function borrowing**: Core concept in javascript call, apply, bind
- **apply() - array arguments**: Core concept in javascript call, apply, bind
- **bind() - permanent binding**: Core concept in javascript call, apply, bind
- **Partial application with bind**: Core concept in javascript call, apply, bind
- **Function borrowing between objects**: Core concept in javascript call, apply, bind
- **Currying with bind**: Core concept in javascript call, apply, bind
- **call vs apply vs bind**: Core concept in javascript call, apply, bind
- **Use cases for explicit binding**: Core concept in javascript call, apply, bind

### Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Declaration | `const x = value` | `const topic = "JavaScript call, apply, bind"` |
| Check type | `typeof x` | `typeof topic // "string"` |
| Transform | `x.method()` | `topic.toLowerCase()` |
| Compare | `x === y` | `topic === "JavaScript call, apply, bind"` |
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
- call() - function borrowing
- apply() - array arguments
- bind() - permanent binding
- Partial application with bind
- Function borrowing between objects
- Currying with bind
- call vs apply vs bind
- Use cases for explicit binding
