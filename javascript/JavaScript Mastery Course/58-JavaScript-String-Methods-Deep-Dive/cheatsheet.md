# JavaScript String Methods Deep Dive - Cheatsheet

## Quick Reference

### Core Syntax
```javascript
// JavaScript String Methods Deep Dive - key patterns
const indexof__lastindexof__includes = "indexOf, lastIndexOf, includes";
const result = indexof__lastindexof__includes.toUpperCase();
console.log(result); // "INDEXOF, LASTINDEXOF, INCLUDES"
```

### Key Concepts

- **indexOf, lastIndexOf, includes**: Core concept in javascript string methods deep dive
- **startsWith, endsWith**: Core concept in javascript string methods deep dive
- **slice vs substring vs substr**: Core concept in javascript string methods deep dive
- **split and join**: Core concept in javascript string methods deep dive
- **replace and replaceAll**: Core concept in javascript string methods deep dive
- **toUpperCase, toLowerCase, trim**: Core concept in javascript string methods deep dive
- **padStart, padEnd, repeat**: Core concept in javascript string methods deep dive
- **localeCompare, normalize**: Core concept in javascript string methods deep dive

### Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Declaration | `const x = value` | `const topic = "JavaScript String Methods Deep Dive"` |
| Check type | `typeof x` | `typeof topic // "string"` |
| Transform | `x.method()` | `topic.toLowerCase()` |
| Compare | `x === y` | `topic === "JavaScript String Methods Deep Dive"` |
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
- indexOf, lastIndexOf, includes
- startsWith, endsWith
- slice vs substring vs substr
- split and join
- replace and replaceAll
- toUpperCase, toLowerCase, trim
- padStart, padEnd, repeat
- localeCompare, normalize
