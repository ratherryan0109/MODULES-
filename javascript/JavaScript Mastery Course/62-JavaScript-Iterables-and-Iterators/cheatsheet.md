# JavaScript Iterables and Iterators - Cheatsheet

## Quick Reference

### Core Syntax
```javascript
// JavaScript Iterables and Iterators - key patterns
const iterable_protocol = "Iterable protocol";
const result = iterable_protocol.toUpperCase();
console.log(result); // "ITERABLE PROTOCOL"
```

### Key Concepts

- **Iterable protocol**: Core concept in javascript iterables and iterators
- **Iterator protocol**: Core concept in javascript iterables and iterators
- **Symbol.iterator**: Core concept in javascript iterables and iterators
- **Custom iterables**: Core concept in javascript iterables and iterators
- **Spreadable objects**: Core concept in javascript iterables and iterators
- **Array.from with mapping**: Core concept in javascript iterables and iterators
- **Creating iterators**: Core concept in javascript iterables and iterators
- **For...of loop internals**: Core concept in javascript iterables and iterators

### Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Declaration | `const x = value` | `const topic = "JavaScript Iterables and Iterators"` |
| Check type | `typeof x` | `typeof topic // "string"` |
| Transform | `x.method()` | `topic.toLowerCase()` |
| Compare | `x === y` | `topic === "JavaScript Iterables and Iterators"` |
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
- Iterable protocol
- Iterator protocol
- Symbol.iterator
- Custom iterables
- Spreadable objects
- Array.from with mapping
- Creating iterators
- For...of loop internals
