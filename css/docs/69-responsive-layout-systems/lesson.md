# Responsive Layout Systems

## Introduction
Responsive layout systems are structured approaches to creating flexible, adaptive page layouts using CSS. Modern CSS provides powerful tools like Flexbox, CSS Grid, and multi-column layout to create complex responsive designs with minimal code.

## Learning Objectives
1. Understand CSS Grid layout system for responsive designs
2. Use Flexbox for component-level responsive layouts
3. Combine Grid and Flexbox effectively
4. Implement multi-column layouts
5. Use named grid areas for semantic layouts
6. Create responsive spacing systems
7. Understand the `fr` unit and fractional sizing
8. Use `minmax()`, `auto-fit`, `auto-fill` for flexibility
9. Implement container queries for component responsiveness
10. Build complete responsive page systems

## Theory

### CSS Layout Systems Comparison

| System | Best For | Dimension | Use Case |
|--------|----------|-----------|----------|
| CSS Grid | Page-level layout | 2D (rows + columns) | Full page layouts, card grids |
| Flexbox | Component-level layout | 1D (row or column) | Navigation, form controls, centering |
| Multi-column | Text-heavy layouts | 1D (columns) | Articles, newspapers |
| Positioning | Overlays, absolute placement | N/A | Modals, popups, tooltips |

### CSS Grid vs Flexbox Decision

```
Need 2D layout (rows AND columns)?
  YES → CSS Grid
  NO  → Is it a single row/column?
          YES → Flexbox
          NO  → Is it text content?
                  YES → Multi-column
                  NO → Consider Grid or Flexbox
```

### The `fr` Unit

The `fr` unit distributes available space in a grid container:

```css
.grid {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  /* 4 equal parts: 25%, 50%, 25% */
}
```

### `minmax()` Function

```css
/* Columns between 200px and 1fr wide */
grid-template-columns: repeat(3, minmax(200px, 1fr));

/* Auto-fit with minimum size */
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
```

### Named Grid Areas

```css
.layout {
  display: grid;
  grid-template-areas:
    "header  header  header"
    "sidebar main    main"
    "sidebar main    main"
    "footer  footer  footer";
  grid-template-columns: 250px 1fr 1fr;
}

.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main    { grid-area: main; }
.footer  { grid-area: footer; }
```

## Syntax Examples

### Holy Grail Layout (Grid)
```css
body {
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 1fr;
  min-height: 100vh;
}

@media (min-width: 768px) {
  body {
    grid-template-columns: 200px 1fr 200px;
    grid-template-rows: auto 1fr auto;
  }
}
```

### Responsive Card Grid
```css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  padding: 1rem;
}

.card {
  display: flex;
  flex-direction: column;
}

.card-content {
  flex: 1; /* Push footer to bottom */
}
```

### Flexbox Navigation
```css
.nav {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
}

.nav-links {
  display: flex;
  gap: 1rem;
  margin-left: auto; /* Push to right */
}
```

### Multi-Column Layout
```css
article {
  column-count: 1;
  column-gap: 2rem;
}

@media (min-width: 768px) {
  article { column-count: 2; }
}

@media (min-width: 1024px) {
  article { column-count: 3; }
}
```

### Container Queries
```css
.card-container {
  container-type: inline-size;
  container-name: card;
}

@container card (min-width: 400px) {
  .card { flex-direction: row; }
}

@container card (min-width: 600px) {
  .card-image { width: 40%; }
}
```

### Responsive Dashboard Grid
```css
.dashboard {
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
  grid-template-areas:
    "header"
    "stats"
    "chart"
    "table";
}

@media (min-width: 640px) {
  .dashboard {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "header header"
      "stats  stats"
      "chart  table";
  }
}

@media (min-width: 1024px) {
  .dashboard {
    grid-template-columns: 200px 1fr 1fr;
    grid-template-areas:
      "sidebar header header"
      "sidebar stats  stats"
      "sidebar chart  table";
  }
}
```

## Visual Explanation

### Responsive Layout Progression

```
Mobile                    Tablet                    Desktop
+----------+             +--------+--------+      +------+--------+------+
|  Header  |             | Header | Header |      | Nav  | Header | --- |
+----------+             +--------+--------+      +------+--------+------+
|  Content |             | Side  | Content|      | Nav  | Content| Side|
+----------+             +--------+--------+      +------+--------+------+
|  Footer  |             | Footer | Footer |      | Nav  | Footer | --- |
+----------+             +--------+--------+      +------+--------+------+
  1 col                     2 col                    3 col (Holy Grail)
```

## Common Mistakes
1. **Using Grid for everything** - Flexbox is better for 1D layouts
2. **Not using `gap`** - Use gap instead of margins for grid/flex spacing
3. **Fixed heights** - Avoid fixed heights that cause overflow
4. **Forgetting `min-height: 100vh`** - Footer floats up on short pages
5. **Nesting Grids unnecessarily** - Grid children can use Flexbox
6. **Not using `auto-fit`/`auto-fill`** - Using explicit columns instead
7. **Overusing `fr` when content dictates size** - Use `auto` for content-sized tracks
8. **No fallback for older browsers** - Feature queries with @supports

## Best Practices
1. Use CSS Grid for page-level layout, Flexbox for components
2. Use `gap` property instead of margins for grid/flex spacing
3. Prefer `auto-fit` and `minmax()` for responsive grids
4. Use named grid areas for clarity
5. Add `min-width: 0` to prevent overflow in grid items
6. Use `min-height: 100vh` on body for sticky footers
7. Combine `fr` with `minmax()` for flexible but constrained tracks
8. Use container queries for reusable components

## Accessibility
- Maintain logical tab order regardless of visual order
- Source order should match reading order
- Grid `order` property affects visual but NOT tab order
- Ensure focus indicators are visible in all layouts
- Test keyboard navigation in all responsive states
- Use semantic HTML elements (header, nav, main, footer)
- Avoid display: contents (breaks accessibility in some browsers)

## Performance
- CSS Grid and Flexbox are GPU-accelerated
- Container queries have minimal performance overhead
- Avoid deep nesting of containers
- Use `content-visibility: auto` for large off-screen sections
- CSS Grid performs well even with many items
- Animating grid properties (gap, tracks) can be expensive

## Browser Compatibility
- CSS Grid: All modern browsers (IE11 with prefixes, partial)
- Flexbox: All modern browsers (IE10+ with prefixes)
- Container queries: Modern browsers (2023+)
- Multi-column: All modern browsers (IE10+)
- `gap` in Flexbox: All modern browsers (2021+)
- `subgrid`: Firefox only (Chrome in development)

## Summary Notes
- CSS Grid is for 2D layouts, Flexbox is for 1D
- Use `auto-fit` + `minmax()` for responsive grids without media queries
- Named grid areas make layouts easier to understand
- The `fr` unit distributes available space in grid containers
- Combine Grid (page) + Flexbox (components) for best results
- Container queries enable component-level responsiveness
- Always use `gap` instead of margins for grid/flex spacing
- Test responsive layouts on real devices
- Maintain proper source order for accessibility
- Use `min-height: 100vh` for consistent full-height layouts
