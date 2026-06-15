# HTML Semantic Elements — Cheatsheet

## Layout Elements

| Element | Purpose | Usage |
|---------|---------|-------|
| `<header>` | Introductory content / navigation | Top of page or section |
| `<nav>` | Navigation links | Primary site navigation |
| `<main>` | Primary page content | One per page, unique content |
| `<section>` | Thematic grouping | Groups related content |
| `<article>` | Self-contained composition | Blog posts, news, comments |
| `<aside>` | Indirectly related content | Sidebars, callouts, ads |
| `<footer>` | Footer metadata | Author info, copyright, links |

## Inline Semantic Elements

| Element | Meaning |
|---------|---------|
| `<strong>` | Strong importance |
| `<em>` | Stress emphasis |
| `<mark>` | Highlighted reference |
| `<cite>` | Title of a work |
| `<time>` | Date/time |
| `<address>` | Contact information |

## Structural vs Semantic

| Non-Semantic | Semantic Replacement |
|-------------|---------------------|
| `<div id="header">` | `<header>` |
| `<div id="nav">` | `<nav>` |
| `<div id="main">` | `<main>` |
| `<div class="section">` | `<section>` |
| `<div class="article">` | `<article>` |
| `<div class="sidebar">` | `<aside>` |
| `<div id="footer">` | `<footer>` |

## Document Outline

```
<body>
  <header>        ← Site header / branding
    <nav>         ← Navigation
  </nav></header>
  <main>          ← Unique page content
    <article>     ← Self-contained content
      <section>   ← Thematic group
      </section>
    </article>
    <aside>       ← Complementary content
    </aside>
  </main>
  <footer>        ← Site footer
  </footer>
</body>
```

## Accessibility Benefits
- Screen readers announce semantic regions
- Keyboard navigation improves
- Search engines understand page structure
- ARIA roles are implicitly applied

## Best Practices
- ✅ Use `<main>` only once per page
- ✅ Nest `<header>`/`<footer>` inside `<article>` or `<section>` for scoped headers
- ✅ Always include `<h1>`-`<h6>` headings in `<section>` elements
- ✅ Use `<nav>` only for primary navigation, not all link groups
- ❌ Don't use `<article>` for items that aren't self-contained
- ❌ Don't use `<aside>` for content essential to understanding
- ❌ Don't replace all `<div>` elements — use semantics only where meaningful
