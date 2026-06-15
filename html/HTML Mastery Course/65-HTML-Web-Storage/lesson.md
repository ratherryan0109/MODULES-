# Module 65: HTML Web Storage

## Introduction

The Web Storage API provides a way for web applications to store data locally within the user's browser. Unlike cookies, Web Storage offers a larger capacity (5-10MB per origin) and synchronous access with a simple key-value interface. The two storage types are `localStorage` (persistent data that survives browser restarts) and `sessionStorage` (data that persists only for the current session). This module covers `localStorage` in depth.

## Learning Objectives

By the end of this module, you will be able to:
- Store and retrieve data using `localStorage` and `sessionStorage`
- Differentiate between `localStorage`, `sessionStorage`, and cookies
- Store complex data structures using `JSON.stringify()` and `JSON.parse()`
- Implement common patterns: settings persistence, form autosave, shopping cart
- Handle storage events for cross-tab communication
- Manage storage limits and error handling
- Understand security implications of client-side storage
- Detect Web Storage availability (feature detection)
- Implement expiration logic for localStorage items
- Choose between localStorage, sessionStorage, IndexedDB, and cookies

## Theory

### What is Web Storage?

Web Storage is a W3C standard API that allows web applications to store key-value pairs in the browser. It was introduced in HTML5 and is supported in all modern browsers.

### localStorage vs sessionStorage

| Feature               | localStorage                     | sessionStorage                   |
|-----------------------|----------------------------------|----------------------------------|
| Persistence           | Until explicitly deleted         | Until tab/browser is closed      |
| Scope                 | Per origin (protocol+host+port)  | Per origin + per tab/window      |
| Capacity              | 5-10MB per origin                | 5-10MB per origin                |
| Server communication  | Never sent to server             | Never sent to server             |
| Same-origin policy    | Yes                              | Yes                              |
| Data type             | Strings only                     | Strings only                     |
| Synchronous API       | Yes                              | Yes                              |

### The Storage Object

Both `localStorage` and `sessionStorage` implement the `Storage` interface:

```javascript
// Store data
localStorage.setItem('key', 'value');

// Retrieve data
const value = localStorage.getItem('key');

// Remove a key
localStorage.removeItem('key');

// Clear all data
localStorage.clear();

// Get key by index
const key = localStorage.key(0);

// Get number of stored items
const length = localStorage.length;
```

### Storing Complex Data

Web Storage only supports strings. To store objects or arrays, serialize with `JSON.stringify()` and parse with `JSON.parse()`:

```javascript
const user = { name: 'John', age: 30, roles: ['admin', 'editor'] };
localStorage.setItem('user', JSON.stringify(user));

const stored = JSON.parse(localStorage.getItem('user'));
console.log(stored.name); // 'John'
```

### Storage Events

When data changes in `localStorage`, a `storage` event fires on other tabs/windows from the same origin:

```javascript
window.addEventListener('storage', (e) => {
  console.log(`Key "${e.key}" changed from "${e.oldValue}" to "${e.newValue}"`);
  console.log(`Origin: ${e.url}`); // The URL of the document that changed
  console.log(`Storage area:`, e.storageArea); // localStorage object
});
```

Note: The event does NOT fire on the tab that made the change. It fires on other tabs monitoring the same origin.

### Storage Limits and Errors

Storage limits vary by browser (typically 5MB per origin). Exceeding the limit throws a `QuotaExceededError`:

```javascript
try {
  localStorage.setItem('key', largeData);
} catch (e) {
  if (e.name === 'QuotaExceededError') {
    console.error('Storage full. Remove some data first.');
  }
}
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
    return false;
  }
}
```

## Syntax

### Basic Operations

```javascript
// Set
localStorage.setItem('theme', 'dark');

// Get
const theme = localStorage.getItem('theme'); // 'dark'

// Remove
localStorage.removeItem('theme');

// Clear all
localStorage.clear();
```

### Working with Objects

```javascript
// Save
const settings = { theme: 'dark', fontSize: 16, notifications: true };
localStorage.setItem('settings', JSON.stringify(settings));

// Load
const saved = JSON.parse(localStorage.getItem('settings'));
if (saved) {
  applySettings(saved);
}
```

### Expiration Pattern (No native TTL)

```javascript
function setWithExpiry(key, value, ttlMinutes) {
  const item = {
    value: value,
    expiry: Date.now() + ttlMinutes * 60 * 1000
  };
  localStorage.setItem(key, JSON.stringify(item));
}

function getWithExpiry(key) {
  const itemStr = localStorage.getItem(key);
  if (!itemStr) return null;
  const item = JSON.parse(itemStr);
  if (Date.now() > item.expiry) {
    localStorage.removeItem(key);
    return null;
  }
  return item.value;
}
```

## Examples

### Example 1: Theme Preference

```javascript
function setTheme(theme) {
  document.body.className = theme;
  localStorage.setItem('theme', theme);
}

function loadTheme() {
  const saved = localStorage.getItem('theme');
  if (saved) {
    document.body.className = saved;
  }
}
```

### Example 2: Form Autosave

```javascript
const form = document.getElementById('myForm');
form.addEventListener('input', () => {
  const data = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value
  };
  localStorage.setItem('formDraft', JSON.stringify(data));
});

window.addEventListener('load', () => {
  const saved = JSON.parse(localStorage.getItem('formDraft'));
  if (saved) {
    form.name.value = saved.name || '';
    form.email.value = saved.email || '';
    form.message.value = saved.message || '';
  }
});
```

### Example 3: Shopping Cart

```javascript
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(item) {
  cart.push(item);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartUI();
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartUI();
}

function clearCart() {
  cart = [];
  localStorage.removeItem('cart');
  updateCartUI();
}
```

## Common Mistakes

1. **Not checking storage availability**: Some browsers may have storage disabled (private browsing in Safari). Always wrap in try/catch or use feature detection.

2. **Forgetting to parse JSON**: `getItem()` returns a string. Objects must be parsed with `JSON.parse()` or you'll get "[object Object]".

3. **Storing sensitive data**: Never store passwords, tokens, or PII in localStorage — it's accessible to any JavaScript on the same origin.

4. **Not handling QuotaExceededError**: Storage can fill up. Catch the error and handle gracefully.

5. **Assuming storage is synchronous across tabs**: Use the `storage` event to synchronize state across tabs.

6. **No expiration mechanism**: localStorage has no built-in TTL. Implement manual expiry if needed.

7. **Storing too much data per key**: Keep individual values small. Use multiple keys or IndexedDB for large datasets.

8. **Relying on storage for critical data**: Storage can be cleared by users at any time. Always have fallbacks.

9. **Not cleaning up stale data**: Remove old or unused keys to avoid quota issues.

10. **Confusing localStorage with sessionStorage**: Choose the right one based on persistence needs.

## Best Practices

1. **Always wrap storage operations in try/catch** to handle quota errors gracefully.

2. **Use JSON serialization** for all non-string data.

3. **Create a storage wrapper** (util function) for consistent error handling.

4. **Prefix keys** to avoid collisions (e.g., `app_theme`, `app_cart`).

5. **Implement expiration** for cached data using the pattern above.

6. **Set default values** when retrieved data is null or malformed.

7. **Clean up on logout** — remove all user-specific storage items.

8. **Use `sessionStorage` for sensitive navigation state** that shouldn't persist.

9. **Limit localStorage usage to < 50 items** for performance.

10. **Test in private browsing mode** where storage may be restricted.

## Summary Notes

- Web Storage provides key-value storage in the browser (5-10MB per origin)
- `localStorage` persists until explicitly cleared
- `sessionStorage` persists only for the current tab session
- Both APIs are synchronous and string-only
- Use `JSON.stringify()` / `JSON.parse()` for complex data
- Storage events synchronize state across tabs
- No built-in TTL — implement expiration manually
- Never store sensitive data in local/session storage
- Always handle quota errors with try/catch
- Feature detect with the `storageAvailable()` pattern
