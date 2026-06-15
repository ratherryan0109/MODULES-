# CSS Variables Cheatsheet

## Declaration & Usage
```css
:root {
  --primary: #3498db;
  --spacing-md: 1rem;
  --font-size: 16px;
}

.element {
  color: var(--primary);
  padding: var(--spacing-md);
  font-size: var(--font-size);
}
```

## Fallback Values
```css
.element {
  color: var(--undefined-var, red);                /* simple fallback */
  color: var(--undefined-var, var(--primary));     /* chained fallback */
  color: var(--undefined-var, var(--also-undefined, blue)); /* nested fallback */
}
```

## Scoped Variables
```css
.container {
  --primary: #8e44ad;  /* scoped to this subtree */
}
.container .child {
  color: var(--primary); /* uses #8e44ad */
}
```

## JavaScript API
```javascript
// Read
const value = getComputedStyle(element).getPropertyValue('--primary').trim();

// Write
element.style.setProperty('--primary', '#e74c3c');

// Write to root
document.documentElement.style.setProperty('--primary', '#2ecc71');
```

## Theming
```css
:root {
  --bg: #ffffff;
  --text: #333333;
  --primary: #3498db;
}

[data-theme="dark"] {
  --bg: #1a1a2e;
  --text: #eeeeee;
  --primary: #8e44ad;
}

body {
  background: var(--bg);
  color: var(--text);
}
```

## Media Queries
```css
:root {
  --spacing-lg: 2rem;
}

@media (max-width: 768px) {
  :root {
    --spacing-lg: 1rem;
  }
}
```

## Naming Conventions
```css
:root {
  /* Colors */
  --color-primary: #3498db;
  --color-secondary: #2ecc71;
  --color-text: #333;

  /* Spacing */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;

  /* Typography */
  --font-sans: 'Segoe UI', sans-serif;
  --font-mono: 'Courier New', monospace;
  --size-sm: 0.875rem;
  --size-md: 1rem;

  /* Layout */
  --max-width: 1200px;
  --radius: 8px;

  /* Shadows */
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.12);
  --shadow-md: 0 4px 6px rgba(0,0,0,0.1);
}
```
