# JavaScript IndexedDB - Cheatsheet

## Quick Reference

### Core Syntax
```javascript
// JavaScript IndexedDB - key patterns
const indexeddb_opening__indexeddb_open_ = "IndexedDB opening (indexedDB.open)";
const result = indexeddb_opening__indexeddb_open_.toUpperCase();
console.log(result); // "INDEXEDDB OPENING (INDEXEDDB.OPEN)"
```

### Key Concepts

- **IndexedDB opening (indexedDB.open)**: Core concept in javascript indexeddb
- **Object stores**: Core concept in javascript indexeddb
- **Indexes for searching**: Core concept in javascript indexeddb
- **Transactions**: Core concept in javascript indexeddb
- **CRUD operations (put, get, delete)**: Core concept in javascript indexeddb
- **Cursors for iteration**: Core concept in javascript indexeddb
- **Error handling**: Core concept in javascript indexeddb
- **IndexedDB vs localStorage**: Core concept in javascript indexeddb

### Common Operations

| Operation | Syntax | Example |
|-----------|--------|---------|
| Declaration | `const x = value` | `const topic = "JavaScript IndexedDB"` |
| Check type | `typeof x` | `typeof topic // "string"` |
| Transform | `x.method()` | `topic.toLowerCase()` |
| Compare | `x === y` | `topic === "JavaScript IndexedDB"` |
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
- IndexedDB opening (indexedDB.open)
- Object stores
- Indexes for searching
- Transactions
- CRUD operations (put, get, delete)
- Cursors for iteration
- Error handling
- IndexedDB vs localStorage
