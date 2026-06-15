# CSS Modern Layout Techniques

## Introduction
Modern CSS layout has evolved dramatically — from the early days of floats, tables, and inline-blocks to powerful native systems: Flexbox, CSS Grid, Multi-column Layout, and Container Queries. This module covers how to combine these techniques to build robust, responsive, and maintainable layouts. You'll learn the mental model for choosing the right tool, how to compose layouts hierarchically, and how to embrace intrinsic design principles that reduce or eliminate the need for media queries.

---

## Learning Objectives
1. Compare Flexbox vs Grid for different layout needs and know when to use each
2. Combine Flexbox and Grid in component and page layouts (hybrid approach)
3. Use CSS Grid template areas for semantic, readable page structures
4. Implement intrinsic sizing (`min-content`, `max-content`, `fit-content`) effectively
5. Build responsive layouts with `minmax()`, `auto-fill`, and `auto-fit`
6. Use container queries for component-level responsive design
7. Leverage modern layout features: subgrid, grid auto-flow, and masonry (future)
8. Apply logical properties for international layout support (RTL)
9. Implement the holy grail layout with modern CSS
10. Create layout systems that are maintainable and scale across projects

---

## Theory

### Layout Decision Guide

The first question to ask: **Is this layout 1D or 2D?**

| Need | Best Tool |
|------|-----------|
| Single row of items (horizontal) | Flexbox |
| Single column of items (vertical) | Flexbox |
| Alignment of items within a container | Flexbox |
| 2D grid (rows + columns simultaneously) | CSS Grid |
| Page-level structure | CSS Grid |
| Unknown number of items | Flexbox |
| Known template with named areas | CSS Grid |
| Component with wrapping items | Flexbox with `flex-wrap` |
| Overlapping elements | CSS Grid (positioning) |

**Rule of thumb:** If you only need one dimension (row OR column), use Flexbox. If you need both dimensions simultaneously (rows AND columns), use Grid.

### Flexbox Fundamentals

Flexbox operates in a single direction (the **main axis**). Items wrap or align along the **cross axis**.

```css
.flex-container {
  display: flex;
  flex-direction: row;        /* default: row | column */
  flex-wrap: wrap;            /* allow wrapping */
  gap: 16px;                  /* spacing between items */
  justify-content: space-between; /* main axis alignment */
  align-items: center;        /* cross axis alignment */
}

.flex-item {
  flex: 1 1 300px;            /* grow | shrink | basis */
}
```

Key properties:
- `flex-grow`: How much the item grows relative to siblings (0 = no grow)
- `flex-shrink`: How much the item shrinks when space is tight
- `flex-basis`: The starting size before grow/shrink is applied
- `gap`: Shorthand for `row-gap` and `column-gap` (the new `margin` for layouts)

### CSS Grid Fundamentals

Grid operates in two dimensions simultaneously. Define rows and columns, then place items.

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto 1fr auto;
  gap: 16px;
  /* OR use named areas: */
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
}

.grid-header  { grid-area: header; }
.grid-sidebar { grid-area: sidebar; }
.grid-main    { grid-area: main; }
.grid-footer  { grid-area: footer; }
```

Key Grid concepts:
- **Explicit grid**: What you define with `grid-template-rows` and `grid-template-columns`
- **Implicit grid**: Auto-generated rows/columns when items exceed the explicit grid
- **Grid lines**: Numbered lines between tracks (used for placement)
- **Grid cells**: The intersection of a row and column
- **Grid areas**: Named regions spanning multiple cells

### Intrinsic Sizing

Intrinsic sizing lets elements size based on their content rather than fixed dimensions.

```css
.intrinsic-demo {
  width: min-content;   /* as narrow as possible — fits the longest word */
  width: max-content;   /* as wide as needed — no text wrapping */
  width: fit-content;   /* like min-content if constrained, max-content if space */
  width: clamp(300px, 50%, 800px); /* responsive between bounds */
}
```

- `min-content`: The smallest size the content can be (widest unbreakable word in text)
- `max-content`: The size the content wants to be without any wrapping
- `fit-content`: Uses `min-content` when container is small, `max-content` when enough space, but never exceeds a given max
- `clamp(MIN, PREFERRED, MAX)`: Combines min, preferred, and max in one declaration

### The `fr` Unit vs Percentages

The `fr` unit distributes available space *after* fixed-size content and gaps. Percentages calculate based on the parent container and do not account for gaps automatically.

```css
/* fr: flexible, distributes remaining space */
grid-template-columns: 1fr 2fr 1fr;  /* middle column is double */

/* percentage: relative to parent */
grid-template-columns: 25% 50% 25%;  /* does NOT account for gap */
```

**Tip:** Always prefer `fr` over percentages in grids — it handles gap calculations automatically.

### Auto-fill vs Auto-fit

These two keywords for `repeat()` behave differently when there are fewer items than tracks:

```css
/* auto-fill: keeps empty tracks (preserves the grid structure) */
grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));

/* auto-fit: collapses empty tracks (items stretch) */
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
```

- **auto-fill**: Creates as many tracks as fit. Empty tracks keep their size. Use when you want consistent column widths.
- **auto-fit**: Same track calculation, but empty tracks are collapsed to 0. Items can grow to fill space. Use for responsive galleries.

### Container Queries

Container queries let components respond to their own container's size rather than the viewport.

```css
/* Define a containment context */
.card-container {
  container-type: inline-size;
  container-name: card;
}

/* Query the container */
@container card (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
}

/* Viewport-relative fallback */
@media (max-width: 600px) {
  .card {
    flex-direction: column;
  }
}
```

### Subgrid

Subgrid lets child grids inherit track sizes from a parent grid. Useful for aligned card layouts.

```css
.page-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.card {
  display: grid;
  grid-template-rows: subgrid;  /* inherit rows from parent */
  grid-row: span 3;             /* span 3 rows to align content */
}
```

**Browser support:** Chrome 117+, Firefox 71+, Safari 16+.

### Masonry (Experimental)

CSS Grid Level 3 introduces masonry layout for Pinterest-style uneven grids.

```css
.masonry {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: masonry;  /* experimental */
}
```

**Note:** As of 2026, masonry is only supported in Firefox (behind a flag). Use JavaScript-based masonry libraries for production.

---

## Common Layout Patterns

### Holy Grail Layout

```css
.page {
  display: grid;
  grid-template:
    "header header" auto
    "nav    main"   1fr
    "footer footer" auto
    / 250px 1fr;
  min-height: 100vh;
}

/* Responsive: stack on mobile */
@media (max-width: 768px) {
  .page {
    grid-template:
      "header" auto
      "nav"    auto
      "main"   1fr
      "footer" auto
      / 1fr;
  }
}

header { grid-area: header; }
nav    { grid-area: nav; }
main   { grid-area: main; }
footer { grid-area: footer; }
```

### Auto-fill Gallery

```css
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
}

.gallery-item {
  aspect-ratio: 1;
  object-fit: cover;
}
```

### Sidebar + Content (Flexbox)

```css
.page-layout {
  display: flex;
  gap: 24px;
  align-items: flex-start;
}

.sidebar {
  flex: 0 0 280px;    /* fixed width sidebar */
}

.content {
  flex: 1;             /* fill remaining space */
  min-width: 0;        /* prevent flex overflow */
}

/* Stack on mobile */
@media (max-width: 768px) {
  .page-layout {
    flex-direction: column;
  }
  .sidebar {
    flex-basis: auto;  /* let sidebar size naturally */
  }
}
```

### Centering (The Ultimate Way)

```css
.centered {
  display: grid;
  place-items: center;
  /* place-items is shorthand for align-items + justify-items */
  /* place-content: center; if you need alignment of the grid itself */
}
```

### Sticky Footer with Grid

```css
body {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}
```

### Flexbox Wrapping Toolbar

```css
.toolbar {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}

.toolbar > * {
  flex: 0 0 auto;      /* items don't grow/shrink */
}
```

---

## Responsive Without Media Queries

Modern CSS reduces reliance on media queries for responsive behavior:

```css
/* 1. Clamp-based typography */
h1 {
  font-size: clamp(1.5rem, 4vw, 3rem);
}

/* 2. Auto-fill responsive grid — no media queries */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(300px, 100%), 1fr));
}

/* 3. Flexbox wrapping */
.card-list {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
.card-list > * {
  flex: 1 1 300px;
}

/* 4. Container query approach */
@container (min-width: 400px) {
  .card { flex-direction: row; }
}
@container (max-width: 399px) {
  .card { flex-direction: column; }
}

/* 5. Viewport-aware intrinsic sizing */
.section {
  width: min(100% - 2rem, 1200px);
  margin-inline: auto;
}
```

---

## Visual Explanation

```
Layout Decision Tree:

  Is your layout 1D (row OR column) or 2D (rows AND columns)?
         │
    ┌────┴────┐
    │         │
   1D         2D
    │         │
    ▼         ▼
  Flexbox   CSS Grid
    │         │
    │         ├── Fixed template?     → grid-template-areas
    │         ├── Responsive columns? → auto-fill/minmax
    │         ├── Aligned card rows?  → subgrid
    │         └── Overlapping?        → grid positioning
    │
    ├── Single direction?     → flex-direction
    ├── Wrapping needed?      → flex-wrap
    └── Alignment focus?      → justify-content / align-items


Flexbox (1D) vs Grid (2D) — Visual Comparison:

Flexbox — single row:        CSS Grid — rows + columns:
┌────────────────────┐       ┌──────┬──────┬──────┐
│ ┌──┐ ┌──┐ ┌──┐ ┌──┐│       │  A   │  B   │  C   │
│ │ A │ │ B │ │ C │ │ D││      ├──────┼──────┼──────┤
│ └──┘ └──┘ └──┘ └──┘│       │  D   │  E   │  F   │
└────────────────────┘       ├──────┼──────┼──────┤
                              │  G   │  H   │  I   │
Flexbox — wrapped:            └──────┴──────┴──────┘
┌────────────────────┐
│ ┌──┐ ┌──┐ ┌──┐    │      Grid items align in both
│ │ A │ │ B │ │ C │    │      axes simultaneously
│ └──┘ └──┘ └──┘    │
│ ┌──┐ ┌──┐         │
│ │ D │ │ E │         │
│ └──┘ └──┘         │
└────────────────────┘


Holy Grail Page Layout with Grid Template Areas:

┌──────────────────────────────┐
│          HEADER              │  grid-area: header
├───────────┬──────────────────┤
│           │                  │
│  SIDEBAR  │      MAIN        │
│           │                  │
│           │                  │
├───────────┴──────────────────┤
│          FOOTER              │  grid-area: footer
└──────────────────────────────┘

grid-template-areas:
  "header  header"
  "sidebar main"
  "footer  footer"


auto-fill vs auto-fit — Same minmax(250px, 1fr):

auto-fill:                    auto-fit:
┌───┬───┬───┬───┬───┬───┐    ┌───┬───┬───┬───────────────┐
│ A │ B │ C │   │   │   │    │ A │ B │ C │               │
└───┴───┴───┴───┴───┴───┘    └───┴───┴───┴───────────────┘
  empty tracks preserved       empty tracks collapsed
  (consistent column widths)   (items can grow to fill)


Intrinsic Sizing:

  min-content:                   max-content:
  ┌────────┐                     ┌────────────────────────┐
  │ widest │                     │ no line breaks allowed  │
  │ word   │                     │ text expands as needed  │
  └────────┘                     └────────────────────────┘

  fit-content(400px):
  ┌──────────────────────────────┐
  │ grows up to 400px, then      │
  │ wraps like min-content       │
  └──────────────────────────────┘


The fr Unit vs Percentages:

  grid-template-columns: 1fr 2fr 1fr

  ┌──────────┬────────────────────┬──────────┐
  │  1fr     │      2fr          │   1fr    │
  │ (25%)    │      (50%)        │  (25%)   │
  └──────────┴────────────────────┴──────────┘
   ↑ gap accounted for automatically

  grid-template-columns: 25% 50% 25%

  ┌──────┬─────────┬──────┐
  │ 25%  │   50%   │ 25%  │
  └──────┴─────────┴──────┘
   ←── gap causes overflow! ──→


Container Queries — Component-Level Responsive:

  @media (viewport-based):   @container (container-based):

  ┌──────────────────────┐   ┌────┬─────┬────────┐
  │ viewport width       │   │card│     │        │
  │ controls layout      │   │col │card │  card  │
  │                      │   │    │col  │  row   │
  └──────────────────────┘   └────┴─────┴────────┘
  ┌──────────────────────┐   ┌────────────────────┐
  │ same component       │   │ same component     │
  │ same size on ALL     │   │ adapts to its OWN  │
  │ screen sizes         │   │ container width    │
  └──────────────────────┘   └────────────────────┘
```

### Common Mistakes

1. **Using Grid for everything** — Grid's 2D power is overkill for simple 1D layouts. Flexbox is simpler and more semantic for components.

2. **Forgetting `min-width: 0` on flex items** — Flex items default to `min-width: auto`, which can cause overflow with long text. Set `min-width: 0` to allow shrinking below content size.

3. **Using `auto` in `flex` shorthand wrong** — `flex: 1` sets `flex: 1 1 0%` (flexible). `flex: auto` sets `flex: 1 1 auto` (basis is content size). These behave differently!

4. **Not accounting for `gap` in percentage-based grids** — `grid-template-columns: 25% 25% 25% 25%` will overflow because of gaps. Use `1fr` instead.

5. **Over-nesting grid containers** — Grid is powerful enough to handle complex layouts without nested grids in most cases. Use `subgrid` instead.

6. **Forgetting `flex-wrap`** — Default is `nowrap`, which causes overflow on small screens. Explicitly set `flex-wrap: wrap` for responsive flex containers.

7. **Using media queries when container queries are better** — If a component should respond to its own space (not the viewport), use `@container`.

8. **Not setting `min-height: 100vh` on grid page layouts** — Without this, a grid with `1fr` rows won't stretch to fill the viewport.

9. **Confusing `auto-fill` and `auto-fit`** — They behave the same when there are many items, but differently with few items. Test both.

10. **Using `grid-template-areas` without `grid-area` on children** — Named areas don't work unless each child explicitly sets `grid-area`.

---

## Best Practices

1. **Start with the content, then choose the layout** — Let your content structure guide whether you need Flexbox or Grid, not the other way around.

2. **Use Grid for page-level, Flexbox for component-level** — Grid handles the big picture; Flexbox handles alignment within components.

3. **Prefer intrinsic sizing over fixed widths** — Use `min-content`, `max-content`, `fit-content`, or `clamp()` instead of hard-coded pixel values.

4. **Use `minmax()` and `auto-fill` for flexible grids** — This creates truly responsive layouts without a single media query.

5. **Name your grid areas semantically** — `grid-template-areas: "header main footer"` is more readable than `grid-column: 1 / 3`.

6. **Combine with container queries for true component reuse** — A component should respond to its container, not the viewport.

7. **Use logical properties for RTL support** — Replace `margin-left` with `margin-inline-start` for automatic RTL handling.

8. **Always set `gap` instead of margins on children** — Gap is cleaner, avoids margin collapsing issues, and is well-supported.

9. **Keep your layout CSS flat** — Avoid deeply nested layout containers. One or two levels of grid/flex is usually enough.

10. **Test on real devices** — Browser DevTools responsive mode is good, but real device testing reveals edge cases.

---

## Accessibility

- **Maintain logical source order** — Screen readers follow DOM order, not CSS visual order. Use `order` in Flexbox/Grid sparingly.
- **Use semantic HTML** — `<header>`, `<nav>`, `<main>`, `<footer>` help screen readers understand the layout structure.
- **Grid area names can help visual structure, but** — the underlying DOM order should still be logical for keyboard navigation.
- **Zoom behavior** — Test layouts at 200% zoom. Intrinsic sizing usually handles this well, but fixed-width grids can break.
- **`gap` vs `margin`** — Neither has accessibility implications, but `gap` is simpler and less error-prone.

---

## Performance

- **CSS Grid and Flexbox are GPU-accelerated** — They are highly optimized in all modern browsers.
- **Avoid frequent layout recalculations** — Changing grid/flex properties in JavaScript (especially on scroll) triggers expensive re-layout.
- **Container queries are performant** — They're designed for efficient recalculation and don't cause cascading re-layouts.
- **Use `content-visibility: auto`** on off-screen sections to defer rendering:
  ```css
  .off-screen-section {
    content-visibility: auto;
    contain-intrinsic-size: 500px;
  }
  ```

---

## Browser Support

| Feature | Chrome | Edge | Firefox | Safari |
|---------|--------|------|---------|--------|
| Flexbox | 29+ | 12+ | 20+ | 9+ |
| CSS Grid | 57+ | 16+ | 52+ | 10.1+ |
| Grid Template Areas | 57+ | 16+ | 52+ | 10.1+ |
| `minmax()` | 57+ | 16+ | 52+ | 10.1+ |
| `auto-fill`/`auto-fit` | 57+ | 16+ | 52+ | 10.1+ |
| `gap` for Flexbox | 84+ | 84+ | 63+ | 14.1+ |
| `subgrid` | 117+ | 117+ | 71+ | 16+ |
| Container Queries | 105+ | 105+ | 110+ | 16+ |
| `place-items` | 59+ | 16+ | 53+ | 11+ |
| `fit-content()` | 57+ | 16+ | 92+ | 10.1+ |
| Flexbox `gap` | 84+ | 84+ | 63+ | 14.1+ |

---

## Summary Notes

- **Flexbox for 1D, Grid for 2D** — This is the most important mental model
- **Intrinsic design** — Build layouts that adapt to content, not the other way around
- **`minmax(min, 1fr)`** — The single most useful Grid pattern for responsive layouts
- **`auto-fill` preserves structure, `auto-fit` fills gaps** — Choose based on desired behavior
- **Container queries** — The future of component-level responsive design
- **Named grid areas** — Make layouts readable and maintainable
- **`gap` everywhere** — Replace margins between layout children with `gap`
- **Semantic HTML first** — Let the markup guide the layout choice

---

## Cheat Table

| Concept | Property/Value | Use Case |
|---------|---------------|----------|
| 1D layout | `display: flex` | Toolbar, navbar, card row |
| 2D layout | `display: grid` | Page structure, gallery |
| Responsive grid | `repeat(auto-fill, minmax(250px, 1fr))` | Gallery, card grid |
| Named layout | `grid-template-areas` + `grid-area` | Holy grail, semantic pages |
| Component responsive | `container-type: inline-size` + `@container` | Reusable components |
| Aligned cards | `grid-template-rows: subgrid` | Card decks |
| Automatic stretch | `align-items: stretch` | Equal-height columns |
| Centering | `place-items: center` | Any centering |
| Wrapping | `flex-wrap: wrap` | Toolbars, tags |
| Even distribution | `justify-content: space-between` | Nav links, stats |
