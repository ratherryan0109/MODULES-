# Module 67: HTML Local Storage

## Introduction

Web storage, specifically Local Storage, is a powerful feature of modern web browsers that allows web applications to store data persistently on the client side. Before HTML5, developers relied on cookies to store small amounts of data, which had significant limitations in size, performance, and security. Local Storage was introduced as part of the HTML5 specification to provide a more robust, higher-capacity, and easier-to-use alternative for client-side data persistence.

Local Storage enables developers to save key-value pairs directly in the user's browser, with data surviving browser sessions, page reloads, and even browser restarts. This capability has transformed how web applications manage state, cache data, and provide offline functionality.

## Learning Objectives

By the end of this module, you will be able to:

- Understand the difference between Local Storage, Session Storage, and Cookies
- Store, retrieve, update, and delete data using the Web Storage API
- Work with complex data types via JSON serialization
- Handle storage events across browser tabs
- Implement storage capacity detection and error handling
- Apply security best practices for client-side data storage
- Build real-world features using Local Storage (caching, preferences, offline data)

## Syntax

### Checking for Storage Support

```javascript
if (typeof Storage !== 'undefined') {
    // Local Storage is supported
} else {
    // Fallback handling
}
```

### Setting Items

```javascript
localStorage.setItem('key', 'value');
localStorage.key = 'value';       // Alternative syntax
localStorage['key'] = 'value';    // Alternative syntax
```

### Getting Items

```javascript
const value = localStorage.getItem('key');
const value2 = localStorage.key;   // Alternative
const value3 = localStorage['key']; // Alternative
```

### Removing Items

```javascript
localStorage.removeItem('key');     // Remove single item
localStorage.clear();               // Remove all items
```

### Getting Storage Information

```javascript
const length = localStorage.length; // Number of stored items
const key = localStorage.key(0);    // Get key at index
```

## The Web Storage API in Detail

### Local Storage vs Session Storage vs Cookies

| Feature | Local Storage | Session Storage | Cookies |
|---------|--------------|-----------------|---------|
| Capacity | ~5-10 MB | ~5-10 MB | ~4 KB |
| Persistence | Until explicitly cleared | Until tab closes | Configurable expiry |
| Sent to server | No | No | Yes (via HTTP headers) |
| Scope | Origin (protocol + host + port) | Tab/window | Origin + path |
| Accessible from | Same origin | Same tab | Same origin + path |
| Expiration | Never | On tab close | Manual or session |

### Storage Event

The `storage` event fires on other windows/tabs when Local Storage changes:

```javascript
window.addEventListener('storage', function(e) {
    console.log('Key changed:', e.key);
    console.log('Old value:', e.oldValue);
    console.log('New value:', e.newValue);
    console.log('Storage area:', e.storageArea);
    console.log('URL of change:', e.url);
});
```

> **Important**: The event does not fire on the same tab that made the change, only on other tabs/windows within the same origin.

## Working with Complex Data

Local Storage stores everything as strings. To store objects, arrays, or other data types, you need JSON serialization:

### Storing Objects

```javascript
const user = {
    id: 1,
    name: 'Alice',
    preferences: {
        theme: 'dark',
        fontSize: 14
    },
    tags: ['developer', 'designer']
};

localStorage.setItem('user', JSON.stringify(user));
```

### Retrieving Objects

```javascript
const storedUser = JSON.parse(localStorage.getItem('user'));
console.log(storedUser.name); // 'Alice'
console.log(storedUser.preferences.theme); // 'dark'
```

### Error Handling with JSON Parsing

```javascript
function safeGet(key) {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    } catch (e) {
        console.error('Error parsing stored data:', e);
        return null;
    }
}
```

## Storage Quota and Error Handling

Browsers impose a storage limit (typically 5-10 MB per origin). When exceeded, a `QuotaExceededError` is thrown:

```javascript
function setWithStorageCheck(key, value) {
    try {
        localStorage.setItem(key, value);
        return true;
    } catch (e) {
        if (e.name === 'QuotaExceededError' || e.code === 22) {
            console.warn('Storage quota exceeded');
            // Implement cleanup or notify user
            return false;
        }
        console.error('Storage error:', e);
        return false;
    }
}
```

### Checking Available Storage

```javascript
function checkStorageAvailability() {
    const testKey = '__test__';
    try {
        localStorage.setItem(testKey, '');
        localStorage.removeItem(testKey);
        return true;
    } catch (e) {
        return false;
    }
}
```

## Visual Representation

```
┌─────────────────────────────────────────────────────┐
│                    Browser                           │
│  ┌─────────────────────────────────────────────┐    │
│  │              Origin: mysite.com              │    │
│  │  ┌───────────────────────────────────────┐  │    │
│  │  │         Local Storage                 │  │    │
│  │  │  ┌─────────────────────────────────┐  │  │    │
│  │  │  │ key: "theme" → value: "dark"   │  │  │    │
│  │  │  │ key: "user"  → value: "{...}"  │  │  │    │
│  │  │  │ key: "token" → value: "abc123" │  │  │    │
│  │  │  │ key: "cache" → value: "[...]"  │  │  │    │
│  │  │  └─────────────────────────────────┘  │  │    │
│  │  │      Capacity: 4.2 MB / 5 MB          │  │    │
│  │  └───────────────────────────────────────┘  │    │
│  │                                             │    │
│  │  ┌───────────────────────────────────────┐  │    │
│  │  │         Session Storage               │  │    │
│  │  │  ┌─────────────────────────────────┐  │  │    │
│  │  │  │ key: "sessionId" → "temp123"   │  │  │    │
│  │  │  └─────────────────────────────────┘  │  │    │
│  │  └───────────────────────────────────────┘  │    │
│  └─────────────────────────────────────────────┘    │
│                                                     │
│  Tab 1: mysite.com     Tab 2: mysite.com            │
│         ↓ storage event ──────→ receives event      │
└─────────────────────────────────────────────────────┘
```

## Common Mistakes

### Mistake 1: Storing Objects Without Serialization

```javascript
// ❌ Wrong
const obj = { name: 'Alice' };
localStorage.setItem('user', obj);
// Stores: "[object Object]"

// ✅ Correct
localStorage.setItem('user', JSON.stringify(obj));
// Stores: '{"name":"Alice"}'
```

### Mistake 2: Not Handling Missing Keys

```javascript
// ❌ Wrong - returns null
const data = localStorage.getItem('nonexistent');
console.log(data.length); // TypeError: Cannot read property 'length' of null

// ✅ Correct
const data = localStorage.getItem('nonexistent');
if (data) {
    console.log(data.length);
}
```

### Mistake 3: Assuming Storage is Always Available

```javascript
// ❌ Wrong
localStorage.setItem('test', 'value');

// ✅ Correct
if (typeof Storage === 'undefined') {
    // Provide fallback or inform user
    return;
}
localStorage.setItem('test', 'value');
```

### Mistake 4: Storing Sensitive Information

```javascript
// ❌ Wrong - never store passwords or tokens here
localStorage.setItem('password', 'mySecret123');
localStorage.setItem('jwt_token', 'eyJhbG...');

// ✅ Correct - use secure cookies or session storage for sensitive data
// Or use the Web Crypto API for encryption:
```

### Mistake 5: Ignoring Storage Limits

```javascript
// ❌ Wrong - no error handling for quota exceeded
localStorage.setItem('largeData', hugeString);

// ✅ Correct
function safeSetItem(key, value) {
    try {
        localStorage.setItem(key, value);
    } catch (e) {
        if (e.name === 'QuotaExceededError') {
            // Clear old caches first
            clearOldCache();
            localStorage.setItem(key, value);
        }
    }
}
```

## Best Practices

### 1. Always Use Try-Catch

Storage operations can fail due to privacy settings, quota limits, or disabled storage. Always wrap calls in try-catch.

### 2. Namespace Your Keys

```javascript
// Use prefixes to avoid collisions
localStorage.setItem('app_theme', 'dark');
localStorage.setItem('app_language', 'en');
localStorage.setItem('auth_token', 'abc123');
```

### 3. Implement Data Expiration

```javascript
function setWithExpiry(key, value, ttlMinutes) {
    const item = {
        value: value,
        expiry: Date.now() + (ttlMinutes * 60 * 1000)
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

### 4. Create a Storage Wrapper

```javascript
const StorageManager = {
    set(key, value, options = {}) {
        try {
            const item = {
                value,
                timestamp: Date.now(),
                expiry: options.ttl ? Date.now() + options.ttl : null
            };
            localStorage.setItem(key, JSON.stringify(item));
            return true;
        } catch (e) {
            console.warn('Storage set failed:', e);
            return false;
        }
    },
    
    get(key) {
        try {
            const item = JSON.parse(localStorage.getItem(key));
            if (!item) return null;
            if (item.expiry && Date.now() > item.expiry) {
                localStorage.removeItem(key);
                return null;
            }
            return item.value;
        } catch {
            return null;
        }
    },
    
    remove(key) {
        localStorage.removeItem(key);
    },
    
    clear() {
        localStorage.clear();
    },
    
    get size() {
        let total = 0;
        for (let key in localStorage) {
            if (localStorage.hasOwnProperty(key)) {
                total += localStorage[key].length * 2; // UTF-16 encoding
            }
        }
        return total;
    }
};
```

### 5. Use Typed Storage Classes

```javascript
class PreferenceStore {
    constructor(namespace = 'prefs') {
        this.namespace = namespace;
    }
    
    get(key) {
        const data = localStorage.getItem(`${this.namespace}_${key}`);
        return data ? JSON.parse(data) : null;
    }
    
    set(key, value) {
        localStorage.setItem(`${this.namespace}_${key}`, JSON.stringify(value));
    }
    
    remove(key) {
        localStorage.removeItem(`${this.namespace}_${key}`);
    }
}

const prefs = new PreferenceStore();
prefs.set('theme', 'dark');
console.log(prefs.get('theme')); // 'dark'
```

## Real-World Use Cases

### User Preferences

```javascript
// Save user theme preference
document.getElementById('themeToggle').addEventListener('click', () => {
    const current = localStorage.getItem('theme') || 'light';
    const next = current === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', next);
    document.body.className = `theme-${next}`;
});
```

### Shopping Cart Persistence

```javascript
class CartManager {
    constructor() {
        this.cart = this.loadCart();
    }
    
    loadCart() {
        const saved = localStorage.getItem('cart');
        return saved ? JSON.parse(saved) : [];
    }
    
    saveCart() {
        localStorage.setItem('cart', JSON.stringify(this.cart));
    }
    
    addItem(item) {
        this.cart.push({...item, addedAt: Date.now()});
        this.saveCart();
    }
    
    removeItem(itemId) {
        this.cart = this.cart.filter(i => i.id !== itemId);
        this.saveCart();
    }
    
    getItemCount() {
        return this.cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    }
}
```

### Form Autosave

```javascript
const form = document.querySelector('#longForm');
const SAVE_KEY = 'form_draft';

// Autosave on input
form.addEventListener('input', () => {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    localStorage.setItem(SAVE_KEY, JSON.stringify(data));
});

// Restore on page load
window.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem(SAVE_KEY);
    if (saved) {
        const data = JSON.parse(saved);
        Object.entries(data).forEach(([name, value]) => {
            const input = form.elements[name];
            if (input) input.value = value;
        });
    }
});
```

## Summary Notes

- Local Storage provides 5-10 MB of persistent client-side storage per origin
- Data is stored as key-value pairs, always as strings
- Use `JSON.stringify()` and `JSON.parse()` for complex data types
- The `storage` event allows cross-tab communication
- Always implement error handling for quota exceeded scenarios
- Never store sensitive data (passwords, tokens) in Local Storage
- Session Storage is identical but clears when the tab closes
- Cookies are sent to servers automatically; Local Storage is not
- Use wrapper utilities for production-ready storage management
- Implement data expiration when caching time-sensitive information
- Always check for Storage support before using the API
- Storage is synchronous and can block the main thread for large operations
- Use namespaced keys to avoid collisions between different app features
