# Description Lists - Cheatsheet

## Core Elements

| Element | Tag | Description | Attributes |
|---------|-----|-------------|------------|
| Description List | `<dl>...</dl>` | Wraps the entire list | global attributes only |
| Description Term | `<dt>...</dt>` | Defines a term/label | global attributes only |
| Description Details | `<dd>...</dd>` | Provides the description | global attributes only |

## Basic Structure

```html
<dl>
  <dt>Term</dt>
  <dd>Description</dd>
</dl>
```

## Variations

| Pattern | Code | Use Case |
|---------|------|----------|
| One term, one description | `<dt>T</dt><dd>D</dd>` | Simple glossary |
| One term, many descriptions | `<dt>T</dt><dd>D1</dd><dd>D2</dd>` | Multiple definitions |
| Many terms, one description | `<dt>T1</dt><dt>T2</dt><dd>D</dd>` | Synonyms |
| Grouped (HTML5) | `<div><dt>T</dt><dd>D</dd></div>` | Styling groups |

## CSS Styling

```css
/* Remove default indentation */
dd { margin-left: 0; }

/* Two-column grid layout */
dl { display: grid; grid-template-columns: auto 1fr; }

/* Flexbox layout */
dl { display: flex; flex-wrap: wrap; }
dt { flex: 0 0 150px; }
dd { flex: 1 1 200px; margin: 0; }
```

## Comparison with Other Lists

| Aspect | `<dl>` | `<ul>` | `<ol>` |
|--------|--------|--------|--------|
| Relationship | Term ↔ Description | Items | Ordered items |
| Direct children | `<dt>`, `<dd>`, `<div>` | `<li>` | `<li>` |
| Default marker | None | Bullet | Number |
| Use case | Glossaries, metadata | Bullet lists | Numbered steps |

## Accessibility

- Implicit role `list` on `<dl>`
- Implicit role `listitem` on `<dt>` and `<dd>`
- Screen readers announce number of items
- Use `aria-label` on `<dl>` for context

## Common Mistakes ❌

- Using `<br>` instead of `<dd>` for descriptions
- Putting `<li>` inside `<dl>`
- Using `<dl>` for visual indentation only
- Forgetting closing tags
- Nesting `<dl>` directly inside other lists without `<dd>` wrapper

## Valid Children of `<dl>`

✅ `<dt>` — Description Term
✅ `<dd>` — Description Details
✅ `<div>` — Grouping wrapper (HTML5 only, must contain `<dt>`/`<dd>`)
❌ `<li>` — List item (use only in `<ul>`/`<ol>`)
❌ `<p>` — Paragraph (must be inside `<dd>`)
❌ `<span>` — Inline wrapper (not a direct child)
