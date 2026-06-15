# HTML `<article>` Element — Cheatsheet

## Basic Syntax

```html
<article>
  <h2>Article Title</h2>
  <p>Self-contained content that makes sense on its own.</p>
</article>
```

## vs. `<section>` vs. `<div>`

| Decision | Use |
|----------|-----|
| Can it stand alone? Could it be syndicated? | `<article>` |
| Thematic group within a larger context? | `<section>` |
| Generic container for styling? | `<div>` |

## Typical Structure

```html
<article>
  <header>
    <h1>Title</h1>
    <p>By Author | <time datetime="2026-06-01">June 1, 2026</time></p>
  </header>
  
  <section>
    <h2>Subheading</h2>
    <p>Content...</p>
  </section>
  
  <footer>
    <p>Tags: <a href="#">tag1</a>, <a href="#">tag2</a></p>
  </footer>
</article>
```

## Nesting Rules

| Pattern | Example |
|---------|---------|
| Article containing sections | Blog post with organized content |
| Article containing articles | Blog post with comments |
| Section containing articles | Category page with product cards |
| Main containing articles | News listing page |

## ARIA Role

```html
<!-- Implicit role -->
<article> <!-- role="article" -->
```

```html
<!-- Redundant but explicit -->
<article role="article">
```

## Content That Fits `<article>`

| ✅ Good Use | ❌ Bad Use |
|-------------|-----------|
| Blog posts | Navigation menus |
| News stories | Site headers |
| Forum posts | Footers |
| User comments | Decorative elements |
| Product cards | Single-line text |
| Social media posts | Generic containers |
| Interactive widgets | Copyright notices |
| Job listings | Search forms |

## Common Patterns

### Blog Listing
```html
<main>
  <h1>Blog</h1>
  <article>Post 1</article>
  <article>Post 2</article>
</main>
```

### Blog Post + Comments
```html
<article>
  <h2>Post Title</h2>
  <p>Content...</p>
  <article>Comment 1</article>
  <article>Comment 2</article>
</article>
```

### Product Grid
```html
<section>
  <h2>Products</h2>
  <div class="grid">
    <article>Product 1</article>
    <article>Product 2</article>
  </div>
</section>
```

## Attributes

| Attribute | Usage |
|-----------|-------|
| `aria-labelledby` | References heading `id` |
| `aria-label` | Direct accessible name |
| `itemscope` | For microdata/structured data |
| `itemtype` | Schema.org type (e.g., "https://schema.org/Article") |

## CSS Defaults

```css
article {
  display: block;
}
```

## Accessibility

- Implicit role: `article`
- Screen reader navigation: Jump between articles
- Always include a heading for context
- Use `time` for publication dates

## Browser Support

| Chrome | Firefox | Safari | Edge | IE |
|--------|---------|--------|------|-----|
| 5+     | 4+      | 5+     | 12+  | 9+* |

*Requires HTML5 shiv in IE 9-11
