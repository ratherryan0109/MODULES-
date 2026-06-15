# Local Storage Cheatsheet

## Basic API Methods

| Method | Description | Example |
|--------|-------------|---------|
| `setItem(key, value)` | Store a value | `localStorage.setItem('name', 'John')` |
| `getItem(key)` | Retrieve a value | `localStorage.getItem('name')` → `'John'` |
| `removeItem(key)` | Remove a key-value pair | `localStorage.removeItem('name')` |
| `clear()` | Remove all items | `localStorage.clear()` |
| `key(index)` | Get key at position | `localStorage.key(0)` → `'name'` |
| `length` | Number of stored items | `localStorage.length` → `3` |

## Storage Comparison

| Feature | Local Storage | Session Storage | Cookies |
|---------|:-------------:|:---------------:|:-------:|
| Capacity | 5-10 MB | 5-10 MB | 4 KB |
| Persistence | Until cleared | Tab closes | Configurable |
| Sent to server | No | No | Yes |
| Scope | Origin | Tab/Window | Origin + Path |
| Accessible via JS | Yes | Yes | Yes (unless HttpOnly) |

## Working with Objects

```javascript
// Store
localStorage.setItem('key', JSON.stringify({name: 'Alice'}))

// Retrieve
const obj = JSON.parse(localStorage.getItem('key'))

// Safe retrieval
function safeGet(key) {
    try {
        return JSON.parse(localStorage.getItem(key))
    } catch {
        return null
    }
}
```

## Storage Event Properties

| Property | Description |
|----------|-------------|
| `e.key` | The key that was changed |
| `e.oldValue` | Previous value (null if new) |
| `e.newValue` | New value (null if removed) |
| `e.url` | URL of the page that made the change |
| `e.storageArea` | The Storage object that changed |

```javascript
window.addEventListener('storage', (e) => {
    console.log(`Key "${e.key}" changed from "${e.oldValue}" to "${e.newValue}"`)
})
```

## Data with Expiration

```javascript
function setWithTTL(key, value, ttlMs) {
    localStorage.setItem(key, JSON.stringify({
        value,
        expiry: Date.now() + ttlMs
    }))
}

function getWithTTL(key) {
    const item = JSON.parse(localStorage.getItem(key))
    if (!item) return null
    if (Date.now() > item.expiry) {
        localStorage.removeItem(key)
        return null
    }
    return item.value
}
```

## Error Handling

```javascript
try {
    localStorage.setItem('key', 'value')
} catch (e) {
    if (e.name === 'QuotaExceededError') {
        console.warn('Storage quota exceeded')
    }
}
```

## Storage Check

```javascript
// Feature detection
if (typeof Storage !== 'undefined') {
    // Available
}

// Availability check (handles private browsing)
function isStorageAvailable() {
    try {
        localStorage.setItem('__test__', '1')
        localStorage.removeItem('__test__')
        return true
    } catch {
        return false
    }
}
```

## Iteration

```javascript
// Using for loop
for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    const value = localStorage.getItem(key)
}

// Using Object.keys
Object.keys(localStorage).forEach(key => {
    const value = localStorage.getItem(key)
})
```

## Size Calculation

```javascript
function getStorageSize() {
    let bytes = 0
    for (let key in localStorage) {
        bytes += (key.length + localStorage[key].length) * 2
    }
    return bytes // UTF-16 = 2 bytes per char
}
```

## Common Use Cases

| Use Case | Pattern |
|----------|---------|
| User preferences | `localStorage.setItem('theme', 'dark')` |
| Shopping cart | `JSON.stringify([{id:1, qty:2}])` |
| Form autosave | `JSON.stringify({name, email})` |
| API cache | `{data, expiry: Date.now() + 300000}` |
| Feature flags | `localStorage.getItem('featureX') === 'enabled'` |

## Security Notes

- Never store passwords, tokens, or PII in Local Storage
- Vulnerable to XSS attacks
- Data is stored in plain text in browser profile
- Use HttpOnly cookies for auth tokens
- Use Web Crypto API for encryption if needed

## Key Differences from IndexedDB

| Aspect | Local Storage | IndexedDB |
|--------|:------------:|:---------:|
| Data type | Strings only | Any structured data |
| Async/Sync | Synchronous | Asynchronous |
| Capacity | ~5 MB | ~50 MB+ |
| Indexes | No | Yes |
| Transactions | No | Yes |
| Workers | No | Yes |
