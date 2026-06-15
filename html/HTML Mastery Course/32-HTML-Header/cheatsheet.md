# HTML Header Element - Cheatsheet

## Quick Reference

| Attribute | Value | Description |
|-----------|-------|-------------|
| Tag | `<header>` | Block-level semantic element for introductory content |
| ARIA role (page-level) | `banner` | When direct child of `<body>` |
| ARIA role (section-level) | (none) | Generic landmark |
| Children | Flow content | headings, nav, img, form, div, p, etc. |
| Parents | Sectioning content | body, article, section, aside, main |

## Valid Parent Elements

✅ `<body>` — Page-level header
✅ `<article>` — Article header
✅ `<section>` — Section header
✅ `<aside>` — Aside header
✅ `<main>` — Main content header
❌ `<header>` — Cannot nest headers
❌ `<footer>` — Not permitted
❌ `<address>` — Not permitted

## Common Header Patterns

### Page Header
```html
<header>
  <a href="/"><img src="logo.svg" alt="Home"></a>
  <h1>Site Name</h1>
  <nav>...</nav>
</header>
```

### Article Header
```html
<article>
  <header>
    <h2>Post Title</h2>
    <p><time datetime="2025-01-01">Jan 1</time> by Author</p>
  </header>
</article>
```

### Section Header
```html
<section>
  <header>
    <h2>Section Title</h2>
    <p>Introductory text for this section.</p>
  </header>
</section>
```

## HTML5 Document Landmarks

```
<body>
  <header role="banner">     ← site-wide branding
  <nav role="navigation">    ← primary navigation
  <main role="main">         ← main content
    <article role="article">
      <header>               ← article intro
      </header>
    </article>
  </main>
  <footer role="contentinfo"> ← site info
</body>
```

## Accessibility Best Practices

```html
<!-- Skip link in header -->
<header>
  <a href="#main-content" class="skip-link">
    Skip to main content
  </a>
  <h1>Site Name</h1>
  <nav aria-label="Main">...</nav>
</header>
<main id="main-content">
  ...
</main>
```

## CSS Styling Examples

```css
/* Sticky header */
header { position: sticky; top: 0; z-index: 100; }

/* Fixed header */
header { position: fixed; top: 0; width: 100%; z-index: 100; }

/* Flexbox layout */
header { display: flex; align-items: center; justify-content: space-between; padding: 1rem 2rem; }

/* Grid layout */
header { display: grid; grid-template-columns: auto 1fr auto; gap: 2rem; align-items: center; }

/* Background gradient */
header { background: linear-gradient(135deg, #667eea, #764ba2); color: white; }

/* Print hide */
@media print { header nav, header form { display: none; } }
```

## Common Mistakes ❌

| Mistake | Why it's wrong |
|---------|----------------|
| `<header><header>...</header></header>` | Headers cannot nest |
| `<footer><header>...</header></footer>` | Header not allowed in footer |
| `<nav><header>...</header></nav>` | Nav contains nav items, not headers |
| Multiple page-level `<header>` | Only one `role="banner"` per page |
| Using `<header>` as a generic div | Use `<div>` for non-semantic containers |
| Omitting heading in `<header>` | Headings provide structure and accessibility |

## Best Practices Checklist

- [ ] Only one `<header>` as direct child of `<body>`
- [ ] Contains at least one heading (`<h1>`–`<h6>`)
- [ ] No nested `<header>` elements
- [ ] Includes skip-to-content link for accessibility
- [ ] `<nav>` inside header uses `aria-label`
- [ ] Consistent across all pages
- [ ] Responsive design for mobile
- [ ] Contains site branding (logo/name)
