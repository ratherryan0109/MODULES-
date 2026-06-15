# JavaScript Internationalization - Cheatsheet

## Quick Reference

### Core Syntax
```javascript
// JavaScript Internationalization - key patterns
const intl_datetimeformat = "Intl.DateTimeFormat";
const result = intl_datetimeformat.toUpperCase();
console.log(result); // "INTL.DATETIMEFORMAT"
```

### Key Concepts

- **Intl.DateTimeFormat**: Core concept in javascript internationalization
- **Intl.NumberFormat**: Core concept in javascript internationalization
- **Intl.Collator for sorting**: Core concept in javascript internationalization
- **Intl.PluralRules**: Core concept in javascript internationalization
- **Intl.RelativeTimeFormat**: Core concept in javascript internationalization
- **Intl.ListFormat**: Core concept in javascript internationalization
- **Locale selection**: Core concept in javascript internationalization
- **Polyfilling Intl API**: Core concept in javascript internationalization

### Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Declaration | `const x = value` | `const topic = "JavaScript Internationalization"` |
| Check type | `typeof x` | `typeof topic // "string"` |
| Transform | `x.method()` | `topic.toLowerCase()` |
| Compare | `x === y` | `topic === "JavaScript Internationalization"` |
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
- Intl.DateTimeFormat
- Intl.NumberFormat
- Intl.Collator for sorting
- Intl.PluralRules
- Intl.RelativeTimeFormat
- Intl.ListFormat
- Locale selection
- Polyfilling Intl API
