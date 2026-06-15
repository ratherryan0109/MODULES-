# HTML Best Practices Cheatsheet

## Document Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Descriptive Title | Site Name</title>
  <meta name="description" content="150-160 character description">
</head>
<body>
  <header>...</header>
  <main>...</main>
  <footer>...</footer>
</body>
</html>
```

## Semantic Elements Reference

| Element | Usage | Notes |
|---------|-------|-------|
| `<header>` | Introductory content | Can be used per section/article |
| `<nav>` | Navigation links | Primary and secondary nav |
| `<main>` | Primary page content | Only one per page |
| `<article>` | Self-contained content | Blog posts, news items |
| `<section>` | Thematic grouping | Should have a heading |
| `<aside>` | Tangentially related | Sidebars, pull quotes |
| `<footer>` | Footer content | Per-section or page-wide |
| `<figure>` | Self-contained media | With `<figcaption>` |
| `<details>` | Expandable content | With `<summary>` |

## Accessibility Essentials

### Landmarks
```html
<body>
  <header role="banner">...</header>
  <nav role="navigation" aria-label="Main">...</nav>
  <main role="main">...</main>
  <aside role="complementary">...</aside>
  <footer role="contentinfo">...</footer>
</body>
```

### ARIA Attributes Quick Reference

| Attribute | When to Use |
|-----------|-------------|
| `aria-label` | Element has no visible label |
| `aria-labelledby` | Reference another element as label |
| `aria-describedby` | Additional description |
| `aria-hidden="true"` | Decorative/off-screen content |
| `aria-live="polite"` | Dynamic content updates |
| `aria-expanded` | Expandable controls |
| `aria-controls` | References controlled element |
| `aria-current="page"` | Current page in navigation |
| `role="alert"` | Important error messages |
| `aria-required="true"` | Required form fields |

### Form Accessibility Checklist
- [ ] Every input has a `<label>` with `for` attribute
- [ ] Related fields grouped with `<fieldset>` and `<legend>`
- [ ] Required fields marked with `required` and `aria-required`
- [ ] Error messages use `role="alert"` and `aria-describedby`
- [ ] Placeholder not used as label replacement
- [ ] Autocomplete attributes for common fields

## Image Attributes

| Attribute | Purpose | Example |
|-----------|---------|---------|
| `alt` | Alternative text (required) | `alt="Photo of sunset over mountains"` |
| `width`/`height` | Prevent CLS | `width="800" height="600"` |
| `loading="lazy"` | Defer offscreen images | `loading="lazy"` |
| `decoding="async"` | Async decode | `decoding="async"` |
| `srcset` | Responsive sources | `srcset="img-400.jpg 400w, img-800.jpg 800w"` |
| `sizes` | Media conditions | `sizes="(max-width: 600px) 100vw, 800px"` |

## Script Loading

```html
<!-- Deferred (executes after HTML parsed) -->
<script src="app.js" defer></script>

<!-- Async (executes when downloaded) -->
<script src="analytics.js" async></script>

<!-- Module (ES6 modules, deferred by default) -->
<script type="module" src="main.mjs"></script>
```

## Link Best Practices

```html
<!-- External link -->
<a href="https://example.com" target="_blank" rel="noopener noreferrer">

<!-- Skip link -->
<a href="#main-content" class="skip-link">Skip to main content</a>

<!-- Download link -->
<a href="/docs/report.pdf" download="Q1-Report-2026.pdf">

<!-- Phone link -->
<a href="tel:+15551234567">Call us</a>

<!-- Email link -->
<a href="mailto:hello@example.com">Email us</a>
```

## Meta Tags Reference

| Meta Tag | Purpose |
|----------|---------|
| `<meta charset="UTF-8">` | Character encoding |
| `<meta name="viewport" content="width=device-width, initial-scale=1.0">` | Responsive design |
| `<meta name="description" content="...">` | Search snippet |
| `<meta name="robots" content="index, follow">` | Crawler directives |
| `<meta property="og:title" content="...">` | Social sharing title |
| `<meta name="twitter:card" content="summary_large_image">` | Twitter card type |

## Validation Rules

- [ ] Valid DOCTYPE (`<!DOCTYPE html>`)
- [ ] All tags properly closed
- [ ] No duplicate IDs
- [ ] Proper nesting (no block in inline)
- [ ] Valid attribute values
- [ ] Unique `<title>` per page
- [ ] Single `<main>` element
- [ ] One `<h1>` per page
- [ ] No deprecated elements (`<center>`, `<font>`, `<big>`)
- [ ] Alt text on all images

## Common Anti-Patterns

| Anti-Pattern | Problem | Solution |
|-------------|---------|----------|
| Div soup | No semantic meaning | Use semantic elements |
| Inline styles | Maintenance nightmare | External CSS |
| `<br>` for spacing | Presentational misuse | CSS margin/padding |
| Missing labels | Accessibility fail | `<label for="id">` |
| Click here links | Bad for SEO/accessibility | Descriptive link text |
| Skipping heading levels | Broken outline | Sequential hierarchy |
| Inline event handlers | Separation violation | addEventListener() |
| `<table>` for layout | Accessibility nightmare | CSS Grid/Flexbox |
