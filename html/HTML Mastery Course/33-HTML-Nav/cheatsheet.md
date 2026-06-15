# HTML Nav Element - Cheatsheet

## Quick Reference

| Attribute | Value | Description |
|-----------|-------|-------------|
| Tag | `<nav>` | Block-level semantic element for navigation links |
| ARIA role | `navigation` | Implicit landmark role |
| Sectioning | Yes | Creates entry in document outline |
| Content | Flow content | Primarily `<ul>`, `<ol>`, `<a>` |

## Common Navigation Patterns

```html
<!-- Horizontal navigation -->
<nav aria-label="Main">
  <ul>
    <li><a href="/" aria-current="page">Home</a></li>
    <li><a href="/about">About</a></li>
  </ul>
</nav>

<!-- Breadcrumb (use <ol>) -->
<nav aria-label="Breadcrumb">
  <ol>
    <li><a href="/">Home</a></li>
    <li aria-current="page">Current</li>
  </ol>
</nav>

<!-- Pagination -->
<nav aria-label="Pagination">
  <ul>
    <li><a href="#" aria-label="Previous">«</a></li>
    <li><a href="#" aria-current="page">1</a></li>
    <li><a href="#">2</a></li>
    <li><a href="#" aria-label="Next">»</a></li>
  </ul>
</nav>

<!-- Sidebar vertical -->
<nav aria-label="Sidebar">
  <ul>
    <li><a href="/dashboard" aria-current="page">Dashboard</a></li>
    <li><a href="/settings">Settings</a></li>
  </ul>
</nav>
```

## ARIA Attributes Reference

| Attribute | When to use | Example |
|-----------|-------------|---------|
| `aria-label` | Always on `<nav>` | `<nav aria-label="Main">` |
| `aria-current="page"` | Current page link | `<a href="/" aria-current="page">Home</a>` |
| `aria-current="step"` | Current step | `<a aria-current="step">Step 3</a>` |
| `aria-label` on pagination links | Pagination items | `<a href="#" aria-label="Page 2">2</a>` |
| `aria-expanded` | Dropdown toggles | `<button aria-expanded="false">Menu</button>` |
| `aria-haspopup="true"` | Items with sub-menus | `<a aria-haspopup="true">Services</a>` |

## CSS Styling Examples

```css
/* Horizontal nav */
nav ul { display: flex; gap: 1rem; list-style: none; }

/* Vertical nav */
nav ul { display: flex; flex-direction: column; }

/* Active link */
[aria-current="page"] { font-weight: bold; color: blue; }

/* Breadcrumb separator */
nav li + li::before { content: "›"; margin: 0 8px; }

/* Sticky nav */
nav { position: sticky; top: 0; z-index: 100; }
```

## Accessibility Checklist

- [ ] Uses `<nav>` for major navigation blocks
- [ ] Has unique `aria-label` on each `<nav>`
- [ ] Uses `<ul>` or `<ol>` for link structure
- [ ] Current page marked with `aria-current="page"`
- [ ] Skip-to-content link present before `<nav>`
- [ ] Focus indicators visible on all links
- [ ] Dropdowns work with keyboard (Tab, Enter, Escape)
- [ ] Mobile hamburger has `aria-label` and `aria-expanded`
- [ ] Links have descriptive text (not "click here")
- [ ] Hamburger menu accessible when hidden (not `display: none`)

## Common Mistakes ❌

| Mistake | Why |
|---------|-----|
| `<nav><nav>...</nav></nav>` | Cannot nest `<nav>` |
| No `aria-label` on multiple `<nav>` | Screen readers can't distinguish them |
| Using `<div>` instead of `<ul>` | Loses list semantics |
| Omitting `aria-current="page"` | Users don't know their location |
| Wrapping every link group in `<nav>` | Too many landmarks |
| Dropdown without keyboard support | Keyboard users can't access sub-menus |
| Hiding nav with `display: none` | Removes from accessibility tree |

## Valid Children of `<nav>`

✅ `<ul>` — Unordered list of links
✅ `<ol>` — Ordered list (breadcrumbs, pagination)
✅ `<a>` — Direct links (simple navs)
✅ `<div>` — Grouping wrapper
✅ `<h2>`–`<h6>` — Heading (optional)
✅ `<button>` — Toggle buttons
❌ `<nav>` — Cannot nest
❌ `<main>` — Not a structural child
❌ `<footer>` — Not appropriate
