# Web Storage Cheatsheet

## API Reference

### Basic Methods
```javascript
// Store data
localStorage.setItem('key', 'value');
sessionStorage.setItem('key', 'value');

// Retrieve data (returns null if key doesn't exist)
localStorage.getItem('key');
sessionStorage.getItem('key');

// Remove a single item
localStorage.removeItem('key');
sessionStorage.removeItem('key');

// Clear all items
localStorage.clear();
sessionStorage.clear();

// Get number of stored items
localStorage.length;
sessionStorage.length;

// Get key at index (for iteration)
localStorage.key(index);
sessionStorage.key(index);
```

### Working with Objects
```javascript
// Store an object
const user = { name: 'Alice', age: 30 };
localStorage.setItem('user', JSON.stringify(user));

// Retrieve an object (with error handling)
try {
  const raw = localStorage.getItem('user');
  const user = raw ? JSON.parse(raw) : null;
} catch (e) {
  console.error('Parse error', e);
}
```

### Storage Event
```javascript
window.addEventListener('storage', (e) => {
  console.log('Key changed:', e.key);
  console.log('Old value:', e.oldValue);
  console.log('New value:', e.newValue);
  console.log('URL:', e.url);
  console.log('Storage area:', e.storageArea);
});
// Note: fires only in OTHER tabs, not the one making the change
```

### Feature Detection
```javascript
function storageAvailable(type) {
  try {
    const storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      (e.name === 'QuotaExceededError' ||
       e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
      storage &&
      storage.length > 0
    );
  }
}
// Usage: storageAvailable('localStorage')
```

### TTL (Expiry) Pattern
```javascript
function setWithExpiry(key, value, ttlMs) {
  const item = { value, expiry: Date.now() + ttlMs };
  localStorage.setItem(key, JSON.stringify(item));
}

function getWithExpiry(key) {
  const raw = localStorage.getItem(key);
  if (!raw) return null;
  const item = JSON.parse(raw);
  if (Date.now() > item.expiry) {
    localStorage.removeItem(key);
    return null;
  }
  return item.value;
}
```

## Key Facts

| Feature | localStorage | sessionStorage |
|---------|-------------|----------------|
| Persistence | Until cleared | Until tab closes |
| Tab isolation | Shared across tabs | Per-tab |
| Survives browser restart | Yes | No |
| Capacity | ~5-10MB | ~5-10MB |
| Scope | Per origin | Per origin |
| Sent to server | No | No |

## Quick Reference

| Operation | Code |
|-----------|------|
| Store string | `localStorage.setItem('k', 'v')` |
| Store object | `localStorage.setItem('k', JSON.stringify(obj))` |
| Read string | `localStorage.getItem('k')` |
| Read object | `JSON.parse(localStorage.getItem('k'))` |
| Delete one | `localStorage.removeItem('k')` |
| Delete all | `localStorage.clear()` |
| Count items | `localStorage.length` |
| Iterate | `for (let i = 0; i < localStorage.length; i++)` |
| Check exists | `localStorage.getItem('k') !== null` |
| Estimate size | `(key.length + value.length) * 2` bytes |

## Best Practices

- **Always** wrap storage operations in try/catch for QuotaExceededError
- **Never** store sensitive data (tokens, passwords, PII) in localStorage
- **Namespace** your keys (e.g., `myApp_settings`)
- **Always** use feature detection before accessing storage
- **Debounce** frequent writes to avoid performance issues
- **Use JSON** for anything beyond simple strings
- **Graceful degradation**: provide fallbacks when storage is unavailable
- **Validate** data on read — storage can be corrupted or manually edited

## Common Patterns

```javascript
// Storage utility class
class Storage {
  constructor(key, fallback = null) {
    this.key = key;
    this.fallback = fallback;
  }
  get() {
    try {
      const raw = localStorage.getItem(this.key);
      return raw ? JSON.parse(raw) : this.fallback;
    } catch {
      return this.fallback;
    }
  }
  set(value) {
    try {
      localStorage.setItem(this.key, JSON.stringify(value));
    } catch (e) {
      console.error('Storage full', e);
    }
  }
  remove() { localStorage.removeItem(this.key); }
}

// Cache layer
const cache = {
  get(key) {
    const item = localStorage.getItem(key);
    if (!item) return null;
    const { data, expiry } = JSON.parse(item);
    if (Date.now() > expiry) { localStorage.removeItem(key); return null; }
    return data;
  },
  set(key, data, ttl = 300000) {
    localStorage.setItem(key, JSON.stringify({ data, expiry: Date.now() + ttl }));
  }
};
```

## Storage Limits per Browser

| Browser | localStorage | Cookies |
|---------|-------------|---------|
| Chrome | ~5-10MB | 4KB |
| Firefox | ~5-10MB | 4KB |
| Safari | ~5MB | 4KB |
| Edge | ~5-10MB | 4KB |

## Limitations

- Synchronous API (blocks main thread)
- String-only values (requires JSON serialization)
- No indexing or querying
- No built-in expiry
- Not available in Web Workers / Service Workers
- Not available in SSR (Server-Side Rendering)
- Vulnerable to XSS attacks
- No encryption
