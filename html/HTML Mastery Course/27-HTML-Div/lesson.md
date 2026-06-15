# Module 27: HTML Div

## Introduction

The `<div>` element is the most fundamental and versatile block-level container in HTML. Short for "division," it is a generic container with no semantic meaning used to group content for styling or layout purposes. While modern HTML5 provides semantic alternatives, `<div>` remains essential for grouping, layout, and when no semantic element is appropriate.

## Learning Objectives

By the end of this module, you will be able to:
- Define the purpose of the `<div>` element
- Use `<div>` for grouping and layout
- Distinguish when to use `<div>` vs semantic elements
- Style `<div>` elements with CSS
- Create complex layouts with nested `<div>` elements
- Understand the role of `<div>` in responsive design

## What is `<div>`?

The `<div>` is a **block-level container** with no semantic meaning. It is purely a structural element used to group other elements together.

### Syntax

```html
<div>
  <!-- Content goes here -->
</div>
```

### Basic Example

```html
<div class="container">
  <h2>Section Title</h2>
  <p>This is content grouped inside a div.</p>
</div>
```

## When to Use `<div>`

### Appropriate Uses
- **Styling hooks**: Adding CSS classes to group elements
- **Layout containers**: Creating columns, sections, wrappers
- **JavaScript targets**: DOM manipulation hooks
- **When no semantic element fits**: Generic grouping

### When NOT to Use `<div>`

Use semantic elements instead:
| Use This | Instead of Div |
|----------|----------------|
| `<header>` | `<div class="header">` |
| `<nav>` | `<div class="nav">` |
| `<main>` | `<div class="main">` |
| `<section>` | `<div class="section">` |
| `<article>` | `<div class="article">` |
| `<aside>` | `<div class="sidebar">` |
| `<footer>` | `<div class="footer">` |

## Div for Layout

### Wrapper/Centering Container

```html
<div class="wrapper">
  <!-- Page content -->
</div>
```

```css
.wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
```

### Multi-Column Layout

```html
<div class="row">
  <div class="column">
    <h3>Column 1</h3>
    <p>Content here.</p>
  </div>
  <div class="column">
    <h3>Column 2</h3>
    <p>Content here.</p>
  </div>
  <div class="column">
    <h3>Column 3</h3>
    <p>Content here.</p>
  </div>
</div>
```

```css
.row {
  display: flex;
  gap: 20px;
}
.column {
  flex: 1;
  padding: 20px;
  background: #f9f9f9;
}
```

### Card Layout

```html
<div class="card">
  <div class="card-header">
    <h3>Card Title</h3>
  </div>
  <div class="card-body">
    <p>Card content goes here.</p>
  </div>
  <div class="card-footer">
    <a href="#">Read More</a>
  </div>
</div>
```

## Nested Div Structure

```html
<div class="app">
  <div class="sidebar">
    <div class="sidebar-header">Menu</div>
    <div class="sidebar-content">
      <div class="menu-item">Home</div>
      <div class="menu-item">About</div>
    </div>
  </div>
  <div class="main-content">
    <div class="content-header">Page Title</div>
    <div class="content-body">
      <p>Main content</p>
    </div>
  </div>
</div>
```

## Styling Div Elements

### Common CSS Properties

```css
div {
  /* Layout */
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

  /* Visual */
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
```

### Responsive Divs

```css
.responsive-div {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 16px;
}

@media (min-width: 768px) {
  .responsive-div {
    max-width: 600px;
    padding: 24px;
  }
}
```

### Flexbox with Divs

```css
.flex-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.flex-item {
  flex: 1 1 300px;
  background: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
}
```

### Grid with Divs

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.grid-item {
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
}
```

## Div Accessibility

While `<div>` has no semantic meaning, it still needs accessibility consideration:

```html
<!-- Non-descriptive -->
<div>Click here</div>

<!-- Better with role -->
<div role="button" tabindex="0">Click here</div>

<!-- Best: use semantic element -->
<button>Click here</button>
```

### ARIA Roles for Divs

```html
<div role="navigation">...</div>
<div role="banner" aria-label="Site header">...</div>
<div role="contentinfo">...</div>
<div role="complementary">...</div>
```

## Common Mistakes

| Mistake | Problem | Solution |
|---------|---------|----------|
| Divitis (overusing divs) | Poor semantics, hard to maintain | Use semantic elements when possible |
| Div nesting > 5 levels | Hard to read and debug | Flatten structure or use semantic elements |
| Using div for text | `<div>` is not for standalone text | Use `<p>`, `<h1>`, etc., then wrap in div |
| Using div instead of button | Accessibility issues | Use `<button>` for actions |
| Div without role for interactive | Screen readers cannot interact | Add appropriate ARIA roles |
| Empty divs for spacing | Bad practice, adds clutter | Use CSS margin/padding/gap |

## Best Practices

1. **Use semantic elements first**, `<div>` only when needed
2. **Keep nesting shallow** (max 3-4 levels)
3. **Use meaningful class names** following BEM or similar conventions
4. **Avoid `<div>` for text content** — use `<p>`, headings, etc.
5. **Use `<div>` for layout wrappers** and containers
6. **Add ARIA roles** when `<div>` is used for interactive widgets
7. **Prefer CSS pseudo-elements** over empty `<div>` for decorative content
8. **Use `<div>` for JavaScript hooks** when no semantic element is appropriate
9. **Validate HTML** to ensure proper nesting
10. **Use CSS classes, not IDs**, for styling divs

## Summary

- `<div>` is a generic block-level container with no semantic meaning
- Use for grouping, layout wrappers, and when no semantic element fits
- Always prefer semantic HTML5 elements first
- Style with CSS using classes (not IDs)
- Keep nesting shallow for maintainability
- Add ARIA roles when `<div>` is used for interactive components
- Avoid "divitis" — using divs for everything
- `<div>` is essential for CSS flexbox and grid layouts
