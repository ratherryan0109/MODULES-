# Module 28: HTML Span

## Introduction

The `<span>` element is the inline equivalent of `<div>` — a generic container with no semantic meaning, designed for inline content. It is used to group text or inline elements for styling, JavaScript manipulation, or to apply CSS classes to specific portions of text without affecting the document's semantics.

## Learning Objectives

By the end of this module, you will be able to:
- Define the purpose of the `<span>` element
- Use `<span>` for inline text styling
- Distinguish between `<span>` and `<div>`
- Use semantic inline elements instead of `<span>` when appropriate
- Manipulate `<span>` elements with JavaScript
- Create visual effects using `<span>` and CSS

## What is `<span>`?

`<span>` is a **generic inline container** with no semantic meaning.

### Syntax

```html
<span>content</span>
```

### Basic Example

```html
<p>This is <span class="highlight">highlighted</span> text.</p>
```

## Span vs Div

| Feature | `<span>` | `<div>` |
|---------|----------|---------|
| Display | Inline | Block |
| Width | Content-based | 100% of parent |
| New line | No | Yes |
| Can contain block | No | Yes |
| Best for | Inline text styling | Layout sections |

## Span vs Semantic Elements

Use semantic elements instead of `<span>` when possible:

| Use This | Instead of Span |
|----------|----------------|
| `<strong>` | `<span class="bold">` |
| `<em>` | `<span class="italic">` |
| `<mark>` | `<span class="highlight">` |
| `<code>` | `<span class="code">` |
| `<abbr>` | `<span class="abbr">` |
| `<q>` | `<span class="quote">` |

## Common Uses for Span

### Text Highlighting

```html
<p>
  This is <span style="color: red;">red text</span> and
  this is <span style="font-weight: bold;">bold text</span>.
</p>
```

### Icon Integration

```html
<p>
  <span class="icon">★</span> Featured Item
  <span class="badge">New</span>
</p>
```

### Multi-colored Text

```html
<h1>
  <span class="color-1">C</span>
  <span class="color-2">o</span>
  <span class="color-3">l</span>
  <span class="color-4">o</span>
  <span class="color-5">r</span>
  <span class="color-6">f</span>
  <span class="color-7">u</span>
  <span class="color-8">l</span>
</h1>
```

### Tooltip Targets

```html
<span class="tooltip-trigger" data-tip="This is a tooltip">
  Hover over me
</span>
```

### JavaScript Hooks

```html
<p>
  Price: <span id="product-price" class="price">$29.99</span>
  <button onclick="updatePrice()">Update</button>
</p>
```

## CSS Styling with Spans

```css
.highlight {
  background: #fff3cd;
  padding: 2px 6px;
  border-radius: 3px;
}

.badge {
  background: #e74c3c;
  color: white;
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 12px;
  font-weight: bold;
}

.rainbow-text span {
  animation: rainbow 2s linear infinite;
}

@keyframes rainbow {
  0%   { color: red; }
  20%  { color: orange; }
  40%  { color: yellow; }
  60%  { color: green; }
  80%  { color: blue; }
  100% { color: purple; }
}
```

## Span and JavaScript

```javascript
// Changing span content
const span = document.getElementById('status');
span.textContent = 'Active';
span.className = 'status-active';

// Toggling classes
element.classList.toggle('highlight');
```

## Common Mistakes

| Mistake | Problem | Solution |
|---------|---------|----------|
| Using span for layout | Span is inline; cannot contain block elements | Use `<div>` for block layout |
| Span instead of semantic elements | Poor accessibility and SEO | Use `<strong>`, `<em>`, `<mark>` |
| Over-nesting spans | Makes HTML unreadable | Keep spans simple, one level deep |
| Setting width/height on span | Ignored by non-replaced inline elements | Use `display: inline-block` |
| Using span for text blocks | Block elements are needed | Use `<p>`, `<div>`, etc. |
| Span without class or purpose | Useless markup, adds clutter | Only use span when needed |

## Best Practices

1. **Use semantic elements first** — only use `<span>` when no semantic element fits
2. **Always use a class or id** — a plain `<span>` has no purpose
3. **Keep nesting minimal** — avoid `<span>` inside `<span>` inside `<span>`
4. **Use for inline styling only** — not for block-level layout
5. **Combine with CSS** — use classes, not inline styles
6. **Use for JavaScript hooks** — spans are great for dynamic content
7. **Avoid spans for text content** that has semantic meaning
8. **Use `inline-block`** when you need box model properties on span
9. **Keep it lightweight** — spans should contain small text fragments

## Summary

- `<span>` is a generic inline container with no semantic meaning
- Use for styling inline text, icons, badges, and JavaScript hooks
- Always prefer semantic elements like `<strong>`, `<em>`, `<mark>` over `<span>`
- `<span>` ignores `width` and `height` — use `display: inline-block` if needed
- `<span>` cannot contain block elements
- Always give `<span>` a purpose via class, id, or data attributes
