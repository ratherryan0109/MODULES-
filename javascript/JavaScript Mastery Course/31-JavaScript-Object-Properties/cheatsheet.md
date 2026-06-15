# JavaScript Object Properties - Cheatsheet

## Quick Reference

### Core Syntax
```javascript
// JavaScript Object Properties - key patterns
const property_descriptors__value__writable__enumerable__configurable_ = "Property descriptors (value, writable, enumerable, configurable)";
const result = property_descriptors__value__writable__enumerable__configurable_.toUpperCase();
console.log(result); // "PROPERTY DESCRIPTORS (VALUE, WRITABLE, ENUMERABLE, CONFIGURABLE)"
```

### Key Concepts

- **Property descriptors (value, writable, enumerable, configurable)**: Core concept in javascript object properties
- **getter and setter**: Core concept in javascript object properties
- **Object.defineProperty**: Core concept in javascript object properties
- **Object.defineProperties**: Core concept in javascript object properties
- **Property enumerability**: Core concept in javascript object properties
- **Property configurable rules**: Core concept in javascript object properties
- **Object.preventExtensions, seal, freeze**: Core concept in javascript object properties
- **Property accessor vs data descriptor**: Core concept in javascript object properties

### Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Declaration | `const x = value` | `const topic = "JavaScript Object Properties"` |
| Check type | `typeof x` | `typeof topic // "string"` |
| Transform | `x.method()` | `topic.toLowerCase()` |
| Compare | `x === y` | `topic === "JavaScript Object Properties"` |
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
- Property descriptors (value, writable, enumerable, configurable)
- getter and setter
- Object.defineProperty
- Object.defineProperties
- Property enumerability
- Property configurable rules
- Object.preventExtensions, seal, freeze
- Property accessor vs data descriptor
