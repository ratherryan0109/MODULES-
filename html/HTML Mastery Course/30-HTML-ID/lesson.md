# Module 30: HTML ID

## Introduction

The `id` attribute provides a unique identifier for an HTML element. Unlike classes, which can be reused, each ID must be unique within a page. IDs serve multiple critical purposes: CSS styling targets, JavaScript hooks, fragment identifiers for URL navigation, and association targets for labels and other elements.

## Learning Objectives

By the end of this module, you will be able to:
- Define the id attribute and its uniqueness requirement
- Use IDs for CSS styling (with caution)
- Use IDs as JavaScript hooks
- Create fragment identifiers with IDs
- Use IDs for form element associations
- Distinguish IDs from classes

## What is an ID?

An `id` is a unique identifier assigned to an HTML element. No two elements on a page can share the same ID.

### Syntax

```html
<element id="unique-name">content</element>
```

### Basic Example

```html
<h1 id="page-title">Welcome to My Site</h1>
<p id="intro-text">This is the introduction.</p>
```

## ID Rules

1. **Unique per page** — no duplicates allowed
2. **Cannot contain spaces** — use hyphens or underscores
3. **Must start with a letter** (a-z, A-Z) — can include digits, hyphens, underscores, colons, periods after first character
4. **Case-sensitive** — `#Main` and `#main` are different
5. **Persistent** — should not change once assigned

## Uses for IDs

### 1. Fragment Identifiers (URL Anchors)

```html
<h2 id="section-1">Section 1</h2>

<!-- Link to it -->
<a href="#section-1">Jump to Section 1</a>

<!-- From another page -->
<a href="page.html#section-1">Jump to Section on Another Page</a>
```

### 2. JavaScript Hooks

```html
<button id="submit-btn">Submit</button>
<div id="results-container"></div>

<script>
  const btn = document.getElementById('submit-btn');
  const results = document.getElementById('results-container');
  btn.addEventListener('click', () => {
    results.textContent = 'Submitted!';
  });
</script>
```

### 3. Form Label Associations

```html
<label for="email">Email:</label>
<input type="email" id="email" name="email">
```

### 4. CSS Styling (Use Sparingly)

```css
#header {
  background: #2c3e50;
  color: white;
}
```

## IDs in CSS

### ID Selector

```css
#element-id {
  property: value;
}
```

### Specificity

IDs have very high specificity (0,1,0,0) — higher than classes (0,0,1,0) and elements (0,0,0,1).

```css
#unique { color: red; }        /* Specificity: 0,1,0,0 */
.class { color: blue; }        /* Specificity: 0,0,1,0 */
div { color: green; }           /* Specificity: 0,0,0,1 */
```

### Warning: Avoid IDs for Styling

IDs are hard to override due to high specificity. They are not reusable. Prefer classes for styling.

## IDs in JavaScript

### Methods

```javascript
// Most common
const el = document.getElementById('myId');

// Alternative
const el = document.querySelector('#myId');
```

### Performance

`getElementById()` is the fastest DOM selection method because it directly accesses the internal ID index.

## IDs for Fragment Navigation

### Smooth Scrolling

```css
html {
  scroll-behavior: smooth;
}
```

### Scroll Margin

Prevents fixed headers from covering the target:

```css
#target {
  scroll-margin-top: 80px;
}
```

## IDs vs Classes

| Feature | ID | Class |
|---------|-----|-------|
| Uniqueness | Must be unique per page | Can be reused |
| CSS specificity | 0,1,0,0 (high) | 0,0,1,0 (medium) |
| JavaScript | `getElementById` (fastest) | `getElementsByClassName` |
| URL fragment | Yes (#id in URL) | No |
| Label association | Yes (for="id") | No |
| Reusability | No | Yes |
| Best for | JS hooks, anchors, labels | All styling |

## Common Mistakes

| Mistake | Problem | Solution |
|---------|---------|----------|
| Duplicate IDs | Invalid HTML, JS breaks | Ensure unique IDs |
| Using IDs for all styling | High specificity, hard to override | Use classes for styling |
| Spaces in ID values | Invalid, breaks selectors | Use hyphens or underscores |
| Dynamic IDs that change | Breaks bookmarks and links | Keep IDs stable |
| Using IDs in CSS preprocessors | Harder to maintain | Use classes in Sass/SCSS |

## Best Practices

1. **Use classes for styling**, IDs only for JS hooks and anchors
2. **Keep IDs stable** — they may be bookmarked externally
3. **Use descriptive names** — `#submit-btn` not `#btn1`
4. **Use hyphens** in multi-word IDs (`#main-content`)
5. **Use `getElementById`** for JavaScript — fastest method
6. **Add `scroll-margin-top`** for fixed-header offset
7. **Validate unique IDs** — use HTML validator
8. **Avoid inline event handlers** — use addEventListener with getElementById
9. **Use IDs for form labels** — `for` attribute matches id
10. **Never use IDs in CSS** if you can use a class instead

## Summary

- IDs must be unique per page
- Use for: JavaScript hooks, URL fragments, form label associations
- Avoid for: CSS styling (use classes instead)
- IDs have high CSS specificity (0,1,0,0)
- `getElementById` is the fastest DOM method
- Use `scroll-margin-top` with fixed headers for smooth anchor navigation
- Never use spaces in ID values
