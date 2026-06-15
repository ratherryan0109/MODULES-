# Session Storage Cheatsheet

## API Reference

```javascript
// Store data (string only)
sessionStorage.setItem('key', 'value');

// Retrieve data (returns null if key doesn't exist)
sessionStorage.getItem('key');

// Remove a single item
sessionStorage.removeItem('key');

// Clear all items
sessionStorage.clear();

// Count items
sessionStorage.length;

// Get key at a specific index
sessionStorage.key(0);

// Store objects (must serialize)
sessionStorage.setItem('user', JSON.stringify({ name: 'Alice' }));
const user = JSON.parse(sessionStorage.getItem('user'));
```

## Key Facts

| Property | Behavior |
|----------|----------|
| **Persistence** | Until tab/browser window is closed |
| **Tab isolation** | Each tab has its own separate storage |
| **Cross-tab sharing** | Not shared (except window.open() in some browsers) |
| **Survives refresh** | Yes |
| **Survives navigation** | Yes |
| **Survives browser restart** | No |
| **Capacity** | ~5-10MB per origin |
| **Scope** | Per origin (protocol + host + port) |
| **API** | Synchronous, string-only values |
| **Available in workers** | No |
| **Sent to server** | No |

## Common Use Cases

| Use Case | Example |
|----------|---------|
| Multi-step wizards | Save current step and form data across pages |
| One-time flags | `sessionStorage.setItem('tourShown', 'true')` |
| Scroll position | Save and restore scroll position on navigation |
| Tab-specific preferences | Theme, font size for current tab only |
| Navigation history | Track visited pages during session |
| Form draft (session) | Autosave that clears when tab closes |
| Pre-login data | Guest cart transferred to account on login |
| Session timer | Track time spent on page this session |

## Best Practices

- **Use for transient data only** — if it should survive restarts, use localStorage
- **Always serialize with JSON** — `JSON.stringify()` before set, `JSON.parse()` after get
- **Wrap in try/catch** — quota limits and disabled storage in private mode
- **Namespace your keys** — e.g., `myApp_wizard_step`
- **Validate on read** — stored data can be corrupted or manually edited
- **Never store secrets** — no encryption, accessible to any JS on the origin
- **Feature detection** — check availability before using
- **Debounce writes** — avoid frequent synchronous writes on the main thread

## Feature Detection Pattern

```javascript
function sessionStorageAvailable() {
  try {
    const s = window.sessionStorage;
    const x = '__test__';
    s.setItem(x, x);
    s.removeItem(x);
    return true;
  } catch (e) {
    return false;
  }
}
```

## Common Patterns

### Session Timer
```javascript
sessionStorage.setItem('sessionStart', Date.now().toString());
function getSessionDuration() {
  return Date.now() - parseInt(sessionStorage.getItem('sessionStart'));
}
```

### One-Time Flag
```javascript
function isFirstVisit() {
  if (sessionStorage.getItem('firstVisitDone')) return false;
  sessionStorage.setItem('firstVisitDone', 'true');
  return true;
}
```

### Page Exit Detection
```javascript
window.addEventListener('beforeunload', () => {
  if (sessionStorage.getItem('hasUnsavedChanges')) {
    event.preventDefault();
    event.returnValue = '';
  }
});
```

## Comparison: sessionStorage vs localStorage

| Criterion | sessionStorage | localStorage |
|-----------|---------------|-------------|
| Cleared when | Tab closes | Never (manually) |
| Tab isolation | Yes | No |
| Survives restart | No | Yes |
| Best for | Transient session state | Long-term preferences |
| Privacy | Auto-cleanup | Manual cleanup needed |
| Capacity | ~5-10MB | ~5-10MB |

## Browser Support

| Browser | Support |
|---------|---------|
| Chrome | Full support since v4 |
| Firefox | Full support since v3.5 |
| Safari | Full support since v4 |
| Edge | Full support since v12 |
| IE | Supported since IE8 |
| Opera | Full support since v10.5 |

## Limitations

- Not available in Web Workers / Service Workers
- Not available in SSR environments (Next.js, etc.)
- Synchronous API (blocks main thread)
- String-only values
- No indexing or querying
- No built-in expiration
- Accessible to any JavaScript (XSS vulnerable)
- No encryption
- No notification when data is about to be cleared
