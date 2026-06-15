# CSS Pseudo-elements

## Introduction
CSS pseudo-elements allow you to style specific parts of an element's content or insert content before/after an element. They use double colon syntax (::) and are essential for advanced styling without additional HTML markup.

## Learning Objectives
1. Understand the difference between pseudo-classes and pseudo-elements
2. Master ::before and ::after for content insertion
3. Use ::first-letter and ::first-line for typographic effects
4. Implement ::selection for custom highlight styling
5. Create decorative elements with ::before and ::after
6. Use ::placeholder for input placeholder styling
7. Style with ::marker for list markers
8. Use ::backdrop for overlay backgrounds
9. Combine pseudo-elements with pseudo-classes
10. Apply best practices for content and accessibility

## Theory

### What are Pseudo-elements?
Pseudo-elements target specific parts of an element (like the first letter) or insert virtual elements (like ::before). They use double colon (::) notation to distinguish them from pseudo-classes.

Unlike pseudo-classes which describe a state, pseudo-elements create virtual elements that do not exist in the DOM. The `::before` and `::after` pseudo-elements insert generated content as the first or last child of the selected element. This content can be styled like any real DOM element, but it is not part of the HTML source.

### Pseudo-class vs Pseudo-element

| Feature | Pseudo-class | Pseudo-element |
|---------|-------------|----------------|
| Syntax | Single colon (`:`) | Double colon (`::`) |
| Purpose | State/position of element | Part of element / virtual element |
| Example | `:hover` | `::before` |
| Creates new element | No | Yes (for ::before/::after) |
| Specificity | Class level (0,1,0) | Element level (0,0,1) |
| Content property | Not available | Required for ::before/::after |

### The Content Property
The `content` property is mandatory for `::before` and `::after` pseudo-elements. Without it, the pseudo-element will not render, even if other properties like `width` or `background` are set. The content can be:
- A string: `content: "text"`
- An attribute value: `content: attr(data-tooltip)`
- A URL: `content: url(icon.svg)`
- A counter: `content: counter(item)`
- An empty string: `content: ""` (most common for decorative elements)

### Pseudo-elements Are Not Void Elements
`::before` and `::after` cannot be used on void elements like `<img>`, `<input>`, `<br>`, `<hr>`, and `<textarea>`. These elements cannot have children, so pseudo-elements cannot be generated inside them. For these elements, consider using adjacent elements or SVG-based techniques instead.

## Common Pseudo-elements

```css
::before      /* Insert content before element */
::after       /* Insert content after element */
::first-letter /* First letter of block */
::first-line  /* First line of block */
::selection   /* User-selected text */
::placeholder /* Input placeholder text */
::marker      /* List item marker */
::backdrop    /* Full-screen overlay */
::cue         /* WebVTT captions */
::slotted()   /* Slotted content in shadow DOM */
::grammar-error  /* Grammar errors (limited support) */
::spelling-error /* Spelling errors (limited support) */
```

## Examples

### ::before and ::after
```css
.link::after {
  content: " →";
}
.quote::before {
  content: '"';
  font-size: 2em;
  color: #999;
}
```

### Decorative Elements with Positioning
```css
.card {
  position: relative;
  padding: 1rem;
}
.card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: #4a90d9;
  border-radius: 4px 0 0 4px;
}
```

### Clearfix Pattern
```css
.container::after {
  content: "";
  display: table;
  clear: both;
}
```

### ::first-letter
```css
p::first-letter {
  font-size: 3em;
  float: left;
  margin-right: 5px;
  color: #e94560;
  font-weight: bold;
  line-height: 0.8;
}
```

### ::selection
```css
::selection {
  background: #4a90d9;
  color: white;
}
/* Different selection color for headings */
h1::selection {
  background: #e94560;
  color: white;
}
```

### ::placeholder
```css
input::placeholder {
  color: #999;
  font-style: italic;
  opacity: 0.8;
}
/* Firefox requires lower opacity for placeholder */
input::-moz-placeholder {
  color: #999;
  opacity: 0.8;
}
```

### ::marker
```css
li::marker {
  color: #4a90d9;
  font-weight: bold;
}
ul li::marker {
  content: "▶ ";
  font-size: 0.8em;
}
```

### ::backdrop
```css
dialog::backdrop {
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
}
```

## Visual Explanation

```
::before → [CONTENT] ← ::after
┌───────────────────────────────┐
│ ← ::before                    │
│                               │
│  ::first-letter T his is      │
│  ::first-line of text         │
│  that continues on the        │
│  next line...                 │
│                               │
│                    ::after →  │
└───────────────────────────────┘

Pseudo-element Positioning:
┌───────────────────────────────┐
│ ::before (positioned)         │
│ ┌─┐ ┌───────────────────────┐│
│ │ │ │ Content area          ││
│ │ │ │ (original element)    ││
│ │ │ └───────────────────────┘│
│ └─┘                          │
│                    ::after → │
└───────────────────────────────┘
```

## Common Mistakes

1. **Using single colon for pseudo-elements**: Use `::` (double colon) — single colon is only for pseudo-classes
2. **Forgetting content property**: `::before` and `::after` require `content: ""` — without it, they won't render
3. **Adding content for styling only**: Screen readers read inserted content — decorative content should use `content: ""` with CSS styling
4. **Using ::before/::after on void elements**: Doesn't work on `<img>`, `<input>`, `<br>`, `<hr>`, `<textarea>`
5. **::first-letter on inline elements**: Only works on block/inline-block elements
6. **Assuming ::before/::after are inside the element**: They are generated as children (first/last), not outside the element
7. **Overriding content with multiple pseudo-elements**: An element can have only one `::before` and one `::after`
8. **Using ::placeholder with insufficient color contrast**: Must meet WCAG AA contrast requirements

## Best Practices

1. Always use double colon (`::`) for pseudo-elements
2. Always set `content: ""` for empty decorative elements
3. Use `content` for decorative elements only, not meaningful content
4. Combine `::before` and `::after` with positioning for complex effects (tooltips, badges, icons)
5. Use `::selection` sparingly to maintain usability
6. Style `::placeholder` to match form design
7. Test pseudo-element content with screen readers
8. Use `attr()` in content to display dynamic attribute values
9. For tooltip-style content, use `aria-label` on the parent element for accessibility
10. Apply `pointer-events: none` on decorative pseudo-elements to prevent them from blocking interactions

## Accessibility

- Content added via `content` property IS read by screen readers
- Use ARIA `role="presentation"` if decorative content is purely visual
- Don't use `::before`/`::after` for meaningful content (screen readers won't know it's decorative)
- `::selection` should maintain sufficient contrast ratio (at least 3:1)
- `::placeholder` must meet WCAG AA color contrast requirements (4.5:1)
- Ensure decorative elements don't interfere with keyboard navigation
- Pseudo-elements that convey information (like `::before` with an icon) should have an `aria-label` on the parent
- Use `@media (prefers-reduced-motion: no-preference)` for animated pseudo-elements

## Performance

- Pseudo-elements are well-optimized in all modern browsers
- `::before` and `::after` create virtual DOM nodes that are processed like real elements
- Complex positioning of pseudo-elements may affect paint time
- Generally minimal performance impact — pseudo-elements are efficient
- `::backdrop` uses the compositor thread, so it's GPU-accelerated
- Using `transform` or `opacity` on pseudo-elements leverages GPU compositing
- Avoid creating too many pseudo-elements on elements that are animated or scrolled frequently

## Browser Compatibility

| Pseudo-element | Chrome | Firefox | Safari | Edge | IE |
|---------------|--------|---------|--------|------|----|
| `::before/::after` | ✓ | ✓ | ✓ | ✓ | ✓ 8+ |
| `::first-letter` | ✓ | ✓ | ✓ | ✓ | ✓ |
| `::first-line` | ✓ | ✓ | ✓ | ✓ | ✓ |
| `::selection` | ✓ | ✓ | ✓ | ✓ | ✗ |
| `::placeholder` | ✓ 57+ | ✓ 51+ | ✓ 10.1+ | ✓ 79+ | ✗ |
| `::marker` | ✓ 86+ | ✓ 68+ | ✓ 11.1+ | ✓ 86+ | ✗ |
| `::backdrop` | ✓ | ✓ | ✓ | ✓ | ✗ |
| `::cue` | ✓ | ✓ | ✓ | ✓ | ✗ |

*`::selection` uses single colon (`:selection`) in older browsers
*`::placeholder` requires vendor prefixes in some older browsers (`::-webkit-input-placeholder`, `::-moz-placeholder`)

## Summary Notes

- Pseudo-elements use double colon `::`
- `::before` and `::after` insert generated content
- `content` property is required for `::before`/`::after`
- `::first-letter` styles the first letter of block-level text
- `::first-line` styles the first line of block-level text
- `::selection` customizes text highlight appearance
- `::placeholder` styles input placeholder text
- `::marker` styles list item bullets/numbers
- Pseudo-elements can't be applied to void elements (`img`, `input`, `br`)
- Inserted content is read by screen readers — use `content: ""` for decoration
- Use pseudo-elements for decoration, not meaningful content
- `::backdrop` styles full-screen overlays (dialog, fullscreen API)
- Use `attr()` to display HTML attribute values in pseudo-element content
- Each element can have at most one `::before` and one `::after`
- Pseudo-elements have element-level specificity (0,0,1)
