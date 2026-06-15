# JavaScript Strings - Cheatsheet

## Quick Reference

### Core Syntax
```javascript
// JavaScript Strings - key patterns
const string_literals_and_template_literals = "String literals and template literals";
const result = string_literals_and_template_literals.toUpperCase();
console.log(result); // "STRING LITERALS AND TEMPLATE LITERALS"
```

### Key Concepts

- **String literals and template literals**: Core concept in javascript strings
- **Escape sequences**: Core concept in javascript strings
- **String length and access**: Core concept in javascript strings
- **Common string methods**: Core concept in javascript strings
- **String immutability**: Core concept in javascript strings
- **Template literal interpolation**: Core concept in javascript strings
- **Tagged templates**: Core concept in javascript strings
- **Regular expressions**: Core concept in javascript strings

### Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Declaration | `const x = value` | `const topic = "JavaScript Strings"` |
| Check type | `typeof x` | `typeof topic // "string"` |
| Transform | `x.method()` | `topic.toLowerCase()` |
| Compare | `x === y` | `topic === "JavaScript Strings"` |
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
- String literals and template literals
- Escape sequences
- String length and access
- Common string methods
- String immutability
- Template literal interpolation
- Tagged templates
- Regular expressions
