# Grid vs Flexbox

This module is the "when to use what" guide. By now you know both CSS Grid and Flexbox. The real skill is knowing which one to reach for — and when to combine them.

---

## 1. The Fundamental Difference

| Dimension | Flexbox | CSS Grid |
|-----------|---------|----------|
| **Primary axis** | One-dimensional (row OR column) | Two-dimensional (rows AND columns) |
| **Flow** | Content-first — items size themselves | Layout-first — tracks define space |
| **Direction** | Row or column (chosen) | Both simultaneously |
| **Intended use** | Component layout | Page/layout structure |

**One-sentence rule:**
> Use Flexbox for distributing items along *one* axis. Use Grid for aligning content along *two* axes.

---

## 2. Content-First vs Layout-First

Understanding this distinction is everything:

```css
/* Flexbox — content-first: items decide their size */
.flex-container {
  display: flex;
  gap: 1rem;
}
/* Items grow/shrink based on their content */

/* Grid — layout-first: tracks decide available space */
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
/* Tracks divide available space, items fit into tracks */
```

**Think of it this way:**
- Flexbox: "Here are my items. Figure out how to arrange them."
- Grid: "Here is my layout. Figure out how the items fit."

---

## 3. When to Use Flexbox

### Navigation bars
```css
.nav {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}
```
Nav items are a one-dimensional row. Items have different widths based on their text.

### Centering a single item
```css
.center {
  display: flex;
  align-items: center;
  justify-content: center;
}
```
The classic centering pattern — simpler than Grid for this use case.

### Inline elements in a row
```css
.button-group {
  display: flex;
  gap: 8px;
}
```
Buttons in a toolbar, tags in a tag list, avatars in a row — all one-dimensional.

### Unknown number of items
```css
.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}
```
Different lengths, wrapping naturally — Flexbox handles this beautifully.

### Distributing space unevenly
```css
.flex-item { flex: 2; }  /* Takes 2x the space */
.flex-item { flex: 1; }  /* Takes 1x the space */
```

---

## 4. When to Use Grid

### Page-level layouts
```css
.page {
  display: grid;
  grid-template-areas:
    "header  header  header"
    "sidebar main    aside"
    "footer  footer  footer";
  grid-template-columns: 200px 1fr 200px;
}
```
Two-dimensional by nature — rows AND columns.

### Card grids
```css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}
```
Items align in both directions. Flexbox with `flex-wrap` would make rows uneven.

### Overlapping elements
```css
.overlay-grid {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
}
.overlay-grid > * { grid-area: 1 / 1 / -1 / -1; }
/* All items stack on top of each other */
```
Flexbox cannot do overlap naturally. Grid's explicit cell model makes this easy.

### Strict alignment in both axes
```css
.align-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, auto);
  align-items: stretch;
  justify-items: stretch;
}
```
Every item aligns to the same row and column tracks — impossible in Flexbox.

### Layouts with large gaps or empty areas
```css
.layout {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1rem;
}
.featured { grid-column: 1 / 9; }
.sidebar { grid-column: 9 / 13; }
```
Grid's explicit placement lets you skip columns and create empty areas easily.

---

## 5. When to Combine Grid and Flexbox

This is the real power move. Most production layouts use both:

```css
/* Grid for page layout */
.page {
  display: grid;
  grid-template-columns: 250px 1fr 200px;
  grid-template-areas: "sidebar main aside";
}

/* Flexbox inside grid cells for component layout */
.main-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.card {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  margin-top: auto;
}
```

**The pattern:**
- **Grid** for overall page layout (rows + columns)
- **Flexbox** inside each grid cell (one-dimensional component layout)
- **Flexbox** for card internals (content flow)
- **Grid** for collections of cards (two-dimensional card grid)

---

## 6. Decision Flowchart

```
Do you need BOTH rows AND columns?
├── YES → CSS Grid
└── NO → Do you need to control the layout or the content flow?
    ├── Layout (tracks, gaps, spanning) → Grid
    ├── Content flow (items wrap, sizes vary) → Flexbox
    └── Both? → Grid for the container, Flexbox for the items
```

### Quick Decision Table

| Scenario | Tool | Why |
|----------|------|-----|
| Nav bar | Flexbox | One dimension, content drives width |
| Page layout | Grid | Two dimensions needed |
| Centering | Flexbox | Simpler syntax |
| Card grid | Grid | Even height rows, 2D alignment |
| Form layout | Grid | Label + input alignment across rows |
| Button group | Flexbox | One row, flexible sizes |
| Article text | Flexbox | Content flows vertically |
| Dashboard | Grid | Grid-like visual structure |
| Image gallery | Grid | Even rows + columns |
| Tag list | Flexbox | Wrapping, variable widths |

---

## 7. Common Mistakes

### Mistake 1: Grid for everything
```css
/* ❌ Overkill — one row */
.container { display: grid; grid-template-columns: repeat(3, 1fr); }

/* ✅ Simpler — one dimension */
.container { display: flex; gap: 1rem; }
.container > * { flex: 1; }
```

### Mistake 2: Flexbox for card grids
```css
/* ❌ Flex-wrap creates uneven rows */
.card-grid { display: flex; flex-wrap: wrap; gap: 1rem; }

/* ✅ Grid creates perfect alignment */
.card-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; }
```

### Mistake 3: Not combining them
```css
/* ❌ Using Grid where Flexbox is simpler for internal layout */
.card { display: grid; grid-template-rows: auto 1fr auto; }

/* ✅ Flexbox for the card internals */
.card { display: flex; flex-direction: column; }
.card-footer { margin-top: auto; }
```

---

## 8. Practical Comparison: Same Layout, Both Tools

### Card Grid — Flexbox Version
```css
.flex-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
.flex-grid > * {
  flex: 1 1 280px; /* grow, shrink, basis */
}
/* Problem: last row items stretch to fill space awkwardly */
```

### Card Grid — Grid Version
```css
.grid-layout {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
}
/* Perfect — items align in both directions, last row items don't stretch */
```

### Two-Column Layout — Flexbox Version
```css
.flex-two {
  display: flex;
  gap: 2rem;
}
.sidebar { flex: 0 0 250px; }
.content { flex: 1; }
/* Works great for two columns */
```

### Two-Column Layout — Grid Version
```css
.grid-two {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 2rem;
}
/* Also works — more explicit */
```

---

## 9. The Pragmatic Rule

Learn both. Use both. The best CSS developers don't choose one — they use Grid for layout structure and Flexbox for component internals.

**Simple heuristic:**
- Count the dimensions: 1 → Flexbox, 2 → Grid
- If you're building a page layout: Grid
- If you're building a UI component: Flexbox
- If it has both: Grid outside, Flexbox inside

---

## Summary

| | Flexbox | Grid |
|--|---------|------|
| **Dimensions** | 1 | 2 |
| **Approach** | Content-first | Layout-first |
| **Best for** | Navigation, centering, components, wrapping items | Page layout, card grids, overlapping, strict alignment |
| **Combined** | Inside Grid cells for component layout | Outside, defining the page structure |

The real skill isn't knowing which is "better" — it's knowing when to reach for each tool. Most production layouts use both.

---

## Visual Explanation

```
Flexbox (1D) vs CSS Grid (2D)
===============================

Flexbox — One-dimensional (row OR column, not both)
┌──────────────────────────────────────────────────┐
│ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────┐ │
│ │  Item 1  │ │  Item 2  │ │  Item 3  │ │Item 4│ │
│ └──────────┘ └──────────┘ └──────────┘ └──────┘ │
│ Content-driven widths ← items "push"             │
└──────────────────────────────────────────────────┘

CSS Grid — Two-dimensional (rows AND columns)
┌──────────────────────────────────────────────────┐
│ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ │
│ │   Item 1    │ │   Item 2    │ │   Item 3    │ │
│ └─────────────┘ └─────────────┘ └─────────────┘ │
│ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ │
│ │   Item 4    │ │   Item 5    │ │   Item 6    │ │
│ └─────────────┘ └─────────────┘ └─────────────┘ │
│ Track-driven widths ← layout "pulls"             │
└──────────────────────────────────────────────────┘

Content-First (Flexbox) vs Layout-First (Grid)
═══════════════════════════════════════════════

Flexbox approach:                   Grid approach:
"Here are my items.                 "Here is my layout.
 Figure out how to                  Figure out how the
 arrange them."                     items fit."

Real-World Combination Pattern
═══════════════════════════════

Grid for page layout (2D structure):
┌──────┬──────────────────┬──────┐
│Header│     Header       │Header│
├──────┼──────────────────┼──────┤
│ Nav  │                  │ Side │
│      │    Flexbox       │      │
│      │    inside grid   │      │
│      │    cells (1D)    │      │
├──────┼──────────────────┼──────┤
│Footer│     Footer       │Footer│
└──────┴──────────────────┴──────┘

Decision Flowchart:
Need both rows AND columns?
├── YES ──→ CSS Grid
└── NO ───→ Is the layout structure or content flow?
            ├── Layout (tracks, spanning) → Grid
            ├── Content flow (wrapping)   → Flexbox
            └── Both? → Grid outside, Flexbox inside
```
