# Module 66: HTML Session Storage

## Overview
Session Storage (sessionStorage) is a web storage mechanism that provides temporary key-value storage for a single browser tab or window. Unlike localStorage, sessionStorage data is automatically cleared when the page session ends — when the tab or browser window is closed. This makes it ideal for short-lived, session-scoped data like form drafts, temporary UI state, and multi-step wizard progress.

## Key Characteristics

### Session Scope and Lifetime
Session Storage is scoped to the current browser tab or window. Each tab gets its own isolated session storage instance:
- Data persists across page reloads and navigations within the same tab
- Data is cleared when the tab or browser is closed
- Opening a new tab creates a new, empty sessionStorage instance
- Data is NOT shared between tabs, even if they load the same page

### API Interface
sessionStorage shares the exact same API as localStorage:

| Method | Description |
|--------|-------------|
| `setItem(key, value)` | Store a value (string) |
| `getItem(key)` | Retrieve a value (or null) |
| `removeItem(key)` | Delete a single item |
| `clear()` | Delete all items |
| `key(index)` | Get key name at position |
| `length` | Number of stored items |

### Capacity and Performance
- Storage limit: ~5-10MB per origin (same as localStorage)
- Synchronous API: all operations block the main thread
- String-only values: objects must be serialized with JSON.stringify()
- Operations are fast for small data sizes (< 100KB)

## Common Use Cases

### 1. Multi-Step Form Wizards
Preserve form data across wizard steps without committing to long-term storage. If the user closes the tab, the data is naturally cleaned up.

```javascript
// Save wizard progress
sessionStorage.setItem('wizard_step', '3');
sessionStorage.setItem('wizard_data', JSON.stringify({
  name: 'Alice',
  plan: 'premium',
  paymentMethod: 'card'
}));
```

### 2. Temporary UI State
Store UI state that should not persist beyond the current session:
- Accordion open/close states
- Tab selection in a navigation panel
- Scroll position before a page navigation
- Modal last viewed state

### 3. One-Time Flags
Track whether a user has completed an action during the current visit:
- First-time visit tour/onboarding shown
- Cookie consent banner displayed
- Welcome message acknowledged

### 4. Page Navigation Data
Pass data between pages during a user's visit without URL parameters:
- Filter selections across a product listing
- Sort order preference for the current visit
- Search query history within the session

### 5. Draft Autosave (Session-Limited)
Save text editor drafts or form content that should not persist after the browser closes:
```javascript
const draft = { title: 'My Draft', content: 'Working on...', cursorPosition: 42 };
sessionStorage.setItem('draft', JSON.stringify(draft));
```

## Differences from localStorage

| Aspect | sessionStorage | localStorage |
|--------|---------------|-------------|
| Lifetime | Until tab closes | Until explicitly cleared |
| Tab isolation | Per-tab | Shared across tabs |
| Browser restart | Cleared | Persists |
| Use case | Transient session data | Long-term preferences |
| Privacy | Auto-cleaned | Manual cleanup needed |

## Storage Event with sessionStorage
The `storage` event also fires for sessionStorage changes in other tabs. However, since sessionStorage is per-tab, this is less commonly used. In most browsers, sessionStorage changes in one tab do NOT fire storage events in other tabs because each tab has its own isolated storage. The event only fires when sessionStorage is accessed through an iframe from the same origin.

## Tab Isolation in Practice

```javascript
// Tab A
sessionStorage.setItem('tabId', 'A');
// Tab B (same URL)
sessionStorage.getItem('tabId'); // null — separate storage
```

### Exception: Opened Windows
When a page opens a new tab via `window.open()`, some browsers (Chrome) may clone the opener's sessionStorage into the new tab:
```javascript
const newTab = window.open('same-page.html');
// newTab may inherit the opener's sessionStorage in some browsers
```

## Security Considerations

### Advantages over localStorage
- **Natural cleanup**: Session-scoped data is auto-cleared, reducing the chance of sensitive data lingering
- **Tab isolation**: Data from one tab cannot be accessed by another tab
- **Better for form drafts**: If the user closes the tab accidentally, the data is gone (more privacy-friendly)

### Still Vulnerable to XSS
Like localStorage, sessionStorage is accessible to any JavaScript running on the same origin. An XSS attack can read sessionStorage data just as easily. Never store authentication tokens, passwords, or personal identifiable information (PII) in sessionStorage.

## Feature Detection

```javascript
function sessionStorageAvailable() {
  try {
    const storage = window.sessionStorage;
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return false;
  }
}
```

## Best Practices

1. **Use sessionStorage for transient data only** — if data should survive restarts, use localStorage
2. **Always serialize with JSON** — be explicit when storing objects/arrays
3. **Wrap in try/catch** — quota limits still apply and private browsing may block access
4. **Namespace your keys** — e.g., `app_wizard_step`, `app_scroll_position`
5. **Validate on read** — stored data may be corrupted or manually edited
6. **Don't store secrets** — sessionStorage is not encrypted and is visible to JavaScript
7. **Provide fallbacks** — if sessionStorage is unavailable, fall back to in-memory state

## Summary

| Feature | sessionStorage |
|---------|---------------|
| Persistence | Until tab closes |
| Tab isolation | Yes — each tab is independent |
| Capacity | ~5-10MB per origin |
| API | Synchronous, string-based key-value |
| Events | Storage event (limited) |
| Availability | Everywhere localStorage is supported |
| Best for | Transient state, wizards, flags, form drafts |
