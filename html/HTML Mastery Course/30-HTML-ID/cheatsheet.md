# HTML ID Cheatsheet

## Basic Syntax

```html
<element id="unique-name">content</element>
```

## CSS Selectors

| Selector | Targets | Specificity |
|----------|---------|-------------|
| `#id` | Element with that ID | 0,1,0,0 |
| `element#id` | Specific element with ID | 0,1,0,1 |
| `.class#id` | Element with class and ID | 0,1,1,0 |

## JavaScript Methods

```javascript
// Fastest
document.getElementById('myId');

// Alternative
document.querySelector('#myId');

// Check existence
if (document.getElementById('myId')) { ... }
```

## Common Uses

| Use | Example |
|-----|---------|
| URL anchor | `<a href="#section">` / `<div id="section">` |
| Label association | `<label for="email">` / `<input id="email">` |
| JS hook | `document.getElementById('btn')` |
| CSS target | `#header { background: black; }` (avoid) |

## Smooth Scroll

```css
html { scroll-behavior: smooth; }
#target { scroll-margin-top: 80px; }
```

## Rules

| Rule | Explanation |
|------|-------------|
| Unique | One ID per value per page |
| No spaces | Use hyphens: `main-content` |
| Start with letter | `1st` is invalid; `first` is valid |
| Case-sensitive | `#ID` and `#id` are different |
| No reserved names | Avoid generic names like `id` |

## Accessibility Attributes Using IDs

| Attribute | Purpose |
|-----------|---------|
| `for="id"` | Associates label with input |
| `aria-labelledby="id1 id2"` | Multiple label sources |
| `aria-describedby="id"` | Description source |
| `aria-controls="id"` | Controlled element |

## Best Practices

- Use classes for styling, IDs for JS and anchors
- Keep IDs stable (users can bookmark them)
- Use descriptive names: `#submit-btn` not `#btn1`
- Validate no duplicate IDs
- Use `scroll-margin-top` with fixed headers
- Use `getElementById` (fastest DOM method)
