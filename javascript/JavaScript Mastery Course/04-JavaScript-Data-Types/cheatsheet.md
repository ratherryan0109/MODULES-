# JavaScript Data Types - Cheatsheet

## Quick Reference

### Core Syntax
```javascript
// JavaScript Data Types - key patterns
const primitive_types__string__number__boolean__null__undefined__symbol__bigint_ = "Primitive types (string, number, boolean, null, undefined, symbol, bigint)";
const result = primitive_types__string__number__boolean__null__undefined__symbol__bigint_.toUpperCase();
console.log(result); // "PRIMITIVE TYPES (STRING, NUMBER, BOOLEAN, NULL, UNDEFINED, SYMBOL, BIGINT)"
```

### Key Concepts

- **Primitive types (string, number, boolean, null, undefined, symbol, bigint)**: Core concept in javascript data types
- **Reference types (object, array, function)**: Core concept in javascript data types
- **typeof operator**: Core concept in javascript data types
- **Type coercion (implicit)**: Core concept in javascript data types
- **Type conversion (explicit)**: Core concept in javascript data types
- **NaN and Infinity**: Core concept in javascript data types
- **Pass by value vs reference**: Core concept in javascript data types
- **Dynamic typing**: Core concept in javascript data types

### Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Declaration | `const x = value` | `const topic = "JavaScript Data Types"` |
| Check type | `typeof x` | `typeof topic // "string"` |
| Transform | `x.method()` | `topic.toLowerCase()` |
| Compare | `x === y` | `topic === "JavaScript Data Types"` |
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
- Primitive types (string, number, boolean, null, undefined, symbol, bigint)
- Reference types (object, array, function)
- typeof operator
- Type coercion (implicit)
- Type conversion (explicit)
- NaN and Infinity
- Pass by value vs reference
- Dynamic typing
