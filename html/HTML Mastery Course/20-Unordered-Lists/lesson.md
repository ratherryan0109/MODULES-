# Module 20: Unordered Lists

## Introduction

Unordered lists (`<ul>`) display items with bullet points where the order of items does not matter. They are the most commonly used list type on the web — used for navigation menus, feature lists, ingredient lists, bullet points in articles, and grouped links.

The `<ul>` element creates a list with bullet markers. CSS provides control over the bullet style (`list-style-type`), position, and even custom markers using images or pseudo-elements.

---

## Learning Objectives

By the end of this module, you will be able to:
- Create unordered lists with the `<ul>` element
- Use CSS to change bullet styles (disc, circle, square, none)
- Create custom bullet markers with CSS
- Build horizontal navigation menus from unordered lists
- Nest unordered lists for hierarchical content
- Understand accessibility implications of list styling

---

## Syntax

```html
<ul>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ul>
```

## Bullet Styles (list-style-type)

| Value | Appearance |
|-------|-----------|
| `disc` | Filled circle (default) |
| `circle` | Empty circle |
| `square` | Filled square |
| `none` | No bullet |

```css
ul { list-style-type: square; }
ul { list-style-type: none; } /* Most common for nav menus */
```

## CSS Custom Bullets

### Using ::before pseudo-element

```css
ul { list-style: none; padding-left: 0; }
li { padding-left: 1.5em; position: relative; }
li::before {
  content: '✓';
  color: green;
  position: absolute;
  left: 0;
}
```

### Using ::marker

```css
li::marker {
  color: #e94560;
  font-size: 1.2em;
}
```

### Using list-style-image

```css
ul { list-style-image: url('bullet.png'); }
```

## Horizontal Navigation

```css
nav ul {
  list-style: none;
  display: flex;
  gap: 20px;
  background: #333;
  padding: 15px 20px;
}
nav a {
  color: white;
  text-decoration: none;
}
```

## Nesting Unordered Lists

```html
<ul>
  <li>Frontend
    <ul>
      <li>HTML</li>
      <li>CSS</li>
    </ul>
  </li>
  <li>Backend
    <ul>
      <li>Node.js</li>
      <li>Python</li>
    </ul>
  </li>
</ul>
```

## Common Use Cases

1. **Navigation menus** — With `list-style: none` and `display: flex`
2. **Feature lists** — Checkmarks or custom icons as bullets
3. **Breadcrumbs** — Inline list with separators
4. **Tags/categories** — Horizontal list of linked tags
5. **Bullet points in articles** — Key takeaways, highlights
6. **Grouped links** — Footer link groups, sidebar links

## Best Practices

1. **Use semantics** — `<ul>` for collections, not for indentation
2. **Remove bullets for nav** — `list-style: none` for horizontal menus
3. **Custom bullets for branding** — Use `::before` for checkmarks, arrows, etc.
4. **Nest properly** — Nested lists go inside `<li>`
5. **Accessible navigation** — Use `<nav>` + `<ul>` for site navigation
6. **Avoid over-nesting** — 3 levels maximum
7. **Use `list-style-position: inside`** — For tighter layouts

## Common Mistakes

1. **Using `<ul>` when `<ol>` is needed** — For numbered steps
2. **Nesting outside `<li>`** — Invalid HTML
3. **Forgetting `list-style: none`** — Bullets appear in nav menus
4. **Using `<br>` for list-like layouts** — Use actual list elements
5. **Deep nesting** — Creates confusing structure
6. **Missing spacing** — Lists need padding/margin for readability

## Summary Notes

- `<ul>` creates bulleted lists for items without inherent order
- `list-style-type` controls bullet appearance (disc, circle, square, none)
- `list-style: none` is essential for navigation menus
- Custom bullets use `::before` or `::marker` pseudo-elements
- Flexbox converts vertical lists to horizontal navigation bars
- Nested lists create hierarchical menus
- Screen readers announce list structure and item count
- Lists are block-level elements with default padding
- Use CSS `list-style-position` to control marker placement
- Unordered lists are the most versatile list type for layouts
