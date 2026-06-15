# HTML Div Cheatsheet

## Basic Structure

```html
<div>Content</div>
```

## Common Use Cases

| Purpose | Code |
|---------|------|
| Wrapper | `<div class="wrapper">` |
| Card | `<div class="card">` |
| Column | `<div class="column">` |
| Container | `<div class="container">` |
| Section | `<div class="section">` |

## Div vs Semantic Elements

| Div (avoid) | Semantic (prefer) |
|-------------|------------------|
| `<div class="header">` | `<header>` |
| `<div class="nav">` | `<nav>` |
| `<div class="main">` | `<main>` |
| `<div class="section">` | `<section>` |
| `<div class="article">` | `<article>` |
| `<div class="aside">` | `<aside>` |
| `<div class="footer">` | `<footer>` |

## CSS Layout Patterns

### Centered Wrapper
```css
.wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
```

### Flex Row
```css
.row {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}
.column { flex: 1; }
```

### Grid Layout
```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
```

### Card Component
```css
.card {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
.card-header { padding: 16px 20px; background: #f8f9fa; }
.card-body   { padding: 20px; }
.card-footer { padding: 12px 20px; border-top: 1px solid #ddd; }
```

## ARIA Roles for Divs

```html
<div role="banner">Site header</div>
<div role="navigation">Links</div>
<div role="main">Content</div>
<div role="complementary">Sidebar</div>
<div role="contentinfo">Copyright</div>
<div role="button" tabindex="0">Clickable</div>
<div role="dialog" aria-modal="true">Modal</div>
<div role="tabpanel">Tab content</div>
<div role="alert">Alert message</div>
```

## Responsive Patterns

```css
.div-responsive {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}
@media (min-width: 768px) {
  .div-responsive { max-width: 600px; }
}
```

## Best Practices Checklist

- [ ] Use semantic elements first
- [ ] Keep nesting ≤ 4 levels
- [ ] Use meaningful class names
- [ ] Add ARIA roles when needed
- [ ] Don't use divs for spacing
- [ ] Avoid empty divs
- [ ] Use CSS pseudo-elements for decoration
- [ ] Validate HTML nesting rules
- [ ] Use classes (not IDs) for styling
