# JavaScript Microtasks vs Macrotasks - Cheatsheet

## Quick Reference

### Core Syntax
```javascript
// JavaScript Microtasks vs Macrotasks - key patterns
const microtasks__promise__mutationobserver_ = "Microtasks (Promise, MutationObserver)";
const result = microtasks__promise__mutationobserver_.toUpperCase();
console.log(result); // "MICROTASKS (PROMISE, MUTATIONOBSERVER)"
```

### Key Concepts

- **Microtasks (Promise, MutationObserver)**: Core concept in javascript microtasks vs macrotasks
- **Macrotasks (setTimeout, setInterval, I/O)**: Core concept in javascript microtasks vs macrotasks
- **Microtask queue processing**: Core concept in javascript microtasks vs macrotasks
- **Macrotask queue processing**: Core concept in javascript microtasks vs macrotasks
- **Execution order examples**: Core concept in javascript microtasks vs macrotasks
- **Microtask starvation**: Core concept in javascript microtasks vs macrotasks
- **QueueMicrotask API**: Core concept in javascript microtasks vs macrotasks
- **Event loop priorities**: Core concept in javascript microtasks vs macrotasks

### Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Declaration | `const x = value` | `const topic = "JavaScript Microtasks vs Macrotasks"` |
| Check type | `typeof x` | `typeof topic // "string"` |
| Transform | `x.method()` | `topic.toLowerCase()` |
| Compare | `x === y` | `topic === "JavaScript Microtasks vs Macrotasks"` |
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
- Microtasks (Promise, MutationObserver)
- Macrotasks (setTimeout, setInterval, I/O)
- Microtask queue processing
- Macrotask queue processing
- Execution order examples
- Microtask starvation
- QueueMicrotask API
- Event loop priorities
