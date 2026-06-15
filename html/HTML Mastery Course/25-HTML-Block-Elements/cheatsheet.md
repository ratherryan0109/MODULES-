# HTML Block Elements Cheatsheet

## Key Characteristics

| Feature | Behavior |
|---------|----------|
| New line | Starts on a new line |
| Width | 100% of parent by default |
| Height | Auto (determined by content) |
| Stack | Vertical |
| Box model | Respects width, height, margin, padding, border |
| Containment | Can contain block and inline elements |

## Common Block Elements

| Element | Purpose |
|---------|---------|
| `<div>` | Generic container (non-semantic) |
| `<p>` | Paragraph |
| `<h1>`-`<h6>` | Headings (level 1-6) |
| `<ul>`, `<ol>`, `<dl>` | Lists |
| `<li>`, `<dt>`, `<dd>` | List items / terms / definitions |
| `<header>` | Introductory content |
| `<nav>` | Navigation |
| `<main>` | Primary content (unique per page) |
| `<section>` | Thematic grouping |
| `<article>` | Self-contained content |
| `<aside>` | Indirectly related content |
| `<footer>` | Footer information |
| `<blockquote>` | Extended quotation |
| `<pre>` | Preformatted text |
| `<hr>` | Thematic break |
| `<address>` | Contact information |
| `<form>` | Input form |
| `<fieldset>` | Grouped form controls |
| `<figure>` | Self-contained content (images, diagrams) |
| `<figcaption>` | Figure caption |
| `<table>` | Tabular data |

## CSS Display Values

| Value | Behavior |
|-------|----------|
| `block` | Full-width block, starts new line |
| `inline` | Stays in text flow, no width/height |
| `inline-block` | Inline flow + block box model |
| `flex` | Block-level flex container |
| `grid` | Block-level grid container |
| `none` | Removed from document flow |
| `contents` | Hides own box, shows children |
| `flow-root` | Block element with new BFC |

## Box Model Default (content-box)

```
Total width  = width + padding-left + padding-right + border-left + border-right
Total height = height + padding-top + padding-bottom + border-top + border-bottom
```

## Box Model (border-box)

```
Total width  = width (includes padding + border)
Total height = height (includes padding + border)
```

## Margin Collapsing Rules

| Scenario | Result |
|----------|--------|
| Adjacent siblings | Collapse to larger margin |
| Parent + first/last child | Collapse if no border/padding |
| Empty blocks | Margins collapse |
| Floated, positioned, inline-block | Do NOT collapse |

## Centering Block Elements

```css
/* Horizontal */
.centered {
  width: 80%;
  max-width: 1000px;
  margin: 0 auto;
}

/* Vertical (modern) */
.parent {
  display: flex;
  align-items: center;
  justify-content: center;
}
```

## Common Nesting Rules

| Container | Can Contain | Cannot Contain |
|-----------|-------------|----------------|
| `<div>` | Any elements | — |
| `<p>` | Inline elements | Block elements |
| `<h1>`-`<h6>` | Inline elements | Block elements |
| `<header>` | Flow content | `<main>` |
| `<footer>` | Flow content | `<main>` |
| `<main>` | Flow content | — |
| `<section>` | Flow content | — |
| `<article>` | Flow content | — |
| `<aside>` | Flow content | — |
| `<blockquote>` | Flow content | — |

## Quick CSS Reset

```css
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
```
