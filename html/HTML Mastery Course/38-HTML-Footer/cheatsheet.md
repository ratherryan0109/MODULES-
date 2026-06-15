# HTML `<footer>` Element — Cheatsheet

## Basic Syntax
```html
<footer>
  <p>&copy; 2026 Company. All rights reserved.</p>
</footer>
```

## Types of Footers

| Type | Scope | ARIA Role | Example |
|------|-------|-----------|---------|
| Page footer | Entire page | `contentinfo` | Copyright, links |
| Article footer | Single article | None (implicit) | Author, date, tags |
| Section footer | Single section | None (implicit) | Section summary |

## Content Model

| ✅ Allowed | ❌ Not Allowed |
|------------|---------------|
| `<nav>` | `<header>` |
| `<address>` | `<main>` |
| `<p>`, `<ul>`, `<ol>` | `<footer>` (nested) |
| `<section>` | |
| `<h1>`-`<h6>` | |
| `<form>` | |
| `<div>` | |
| Flow content | |

## Common Patterns

```html
<!-- Page footer -->
<footer>
  <p>&copy; 2026 Company</p>
</footer>

<!-- Article footer -->
<article>
  <p>Content...</p>
  <footer>
    <p>Posted by Author</p>
  </footer>
</article>

<!-- Multi-column footer -->
<footer>
  <div class="grid">
    <section><h3>Column 1</h3></section>
    <section><h3>Column 2</h3></section>
  </div>
  <div class="copyright">&copy; 2026</div>
</footer>
```

## CSS for Sticky Footer

```css
body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
main { flex: 1; }
footer { flex-shrink: 0; }
```

## Accessibility

- Add `aria-label` to `<nav>` inside footer
- Page-level footer gets `contentinfo` role automatically
- Footer inside article/section has no landmark role
- Use `<address>` for contact info
- Use `<small>` for legal text

## Browser Support

| Chrome | Firefox | Safari | Edge | IE |
|--------|---------|--------|------|-----|
| 5+     | 4+      | 5+     | 12+  | 9+* |
