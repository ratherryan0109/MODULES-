# HTML Span Cheatsheet

## Basic Usage

```html
<span>plain text</span>
<span class="highlight">styled text</span>
<span id="dynamic">JS target</span>
<span style="color:red;">inline style</span>
```

## Span vs Others

| Element | Display | Semantics | Use For |
|---------|---------|-----------|---------|
| `<span>` | Inline | None | Styling hooks, JS targets |
| `<div>` | Block | None | Layout containers |
| `<strong>` | Inline | Importance | Bold text with meaning |
| `<em>` | Inline | Emphasis | Italic text with meaning |
| `<mark>` | Inline | Highlight | Marked/highlighted text |

## Semantic Alternatives

| Instead of `<span>` for... | Use |
|---------------------------|-----|
| Bold text | `<strong>` |
| Italic text | `<em>` |
| Highlighted text | `<mark>` |
| Code fragment | `<code>` |
| Abbreviation | `<abbr>` |
| Inline quote | `<q>` |
| Citation | `<cite>` |
| Keyboard input | `<kbd>` |
| Date/time | `<time>` |

## Common CSS Patterns

```css
/* Badge */
.badge {
  background: #e74c3c;
  color: white;
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 12px;
  font-weight: bold;
}

/* Highlight */
.highlight {
  background: #fff3cd;
  padding: 2px 6px;
  border-radius: 3px;
}

/* Status indicator */
.status-dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
.status-dot.online { background: #27ae60; }
.status-dot.offline { background: #999; }
```

## Making Span Respect Box Model

```css
.span-block {
  display: inline-block;  /* Key property */
  width: 100px;
  height: 40px;
  padding: 8px;
  margin: 4px;
}
```

## JavaScript Operations

```javascript
// Get by id
const span = document.getElementById('mySpan');

// Change content
span.textContent = 'New text';

// Change HTML
span.innerHTML = '<strong>bold</strong>';

// Add class
span.classList.add('highlight');

// Toggle class
span.classList.toggle('active');

// Set attribute
span.setAttribute('data-tip', 'Tooltip');
```

## Common Badges

```html
<span class="badge">New</span>
<span class="badge" style="background:#f39c12;">Sale</span>
<span class="badge" style="background:#27ae60;">In Stock</span>
<span class="badge" style="background:#9b59b6;">Premium</span>
```

## Best Practices

- Always add class/id — bare span has no purpose
- Use semantic elements first
- Keep nesting minimal
- Use `display: inline-block` if width/height needed
- Use `textContent` (not innerHTML) for security
- Avoid spans for block layout
