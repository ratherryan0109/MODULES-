# Grid vs Flexbox — Cheatsheet

## The Fundamental Distinction

| | Flexbox | CSS Grid |
|--|---------|----------|
| **Dimensions** | One (row OR column) | Two (rows AND columns) |
| **Approach** | Content-first | Layout-first |
| **Flow** | Items size themselves | Tracks define available space |
| **Overlap** | Not possible naturally | Trivial (same grid cell) |

## Decision Flowchart
```
Need both rows AND columns?         → CSS Grid
Need only one axis (row/column)?    → Flexbox
Building page layout?               → Grid (outside)
Building UI components?             → Flexbox (inside)
Card grid?                          → Grid (aligns both axes)
Nav bar?                            → Flexbox (one dimension)
Centering content?                  → Flexbox (simpler)
```

## Quick Reference: When to Use What

| Scenario | Tool | Why |
|----------|------|-----|
| Navigation bar | Flexbox | One dimension, content-driven |
| Page layout (header/sidebar/main/footer) | Grid | Two-dimensional structure |
| Card grid | Grid | Even rows + columns |
| Button group | Flexbox | Single row, flexible sizes |
| Form with labels + inputs | Grid | Align columns across rows |
| Tag list | Flexbox | Content wrapping |
| Image gallery | Grid | Grid-like visual structure |
| Centering a single item | Flexbox | Classic pattern |
| Overlapping elements | Grid | Same grid cell |
| Dashboard | Grid | Grid-like structure |

## Pattern: Grid Outside, Flexbox Inside
```css
/* Grid for page structure */
.page {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: auto 1fr auto;
}

/* Flexbox inside for components */
.card {
  display: flex;
  flex-direction: column;
}
.card-footer {
  display: flex;
  justify-content: space-between;
  margin-top: auto;
}
```

## Pattern: Same Layout, Both Tools

### Card Grid — Flexbox (not ideal)
```css
.flex-grid { display: flex; flex-wrap: wrap; gap: 1rem; }
.flex-grid > * { flex: 1 1 280px; }
/* ⚠ Last row items stretch to fill */
```

### Card Grid — Grid (ideal)
```css
.grid-layout { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; }
/* ✅ Perfect alignment in both directions */
```

### Two-Column — Flexbox (works)
```css
.flex-two { display: flex; gap: 2rem; }
.sidebar { flex: 0 0 250px; }
.content { flex: 1; }
```

### Two-Column — Grid (also works)
```css
.grid-two { display: grid; grid-template-columns: 250px 1fr; gap: 2rem; }
```

## Common Mistakes

| Mistake | Why | Fix |
|---------|-----|-----|
| Grid for a nav bar | Overkill — you need one dimension | Use Flexbox |
| Flexbox for card grid | Uneven last row | Use Grid with auto-fit + minmax |
| Not combining both | Missing the most powerful pattern | Grid outside, Flexbox inside |
| Grid for centering one item | Extra syntax | Flexbox centering is simpler |

## Memory Joggers
- **Grid** = GRID (rows AND columns like a spreadsheet)
- **Flexbox** = FLEXible (items flex to fit one direction)
- **Both** = Start with Grid for the big picture, use Flexbox for the details

## Browser Support
- **Flexbox**: Chrome 29+, Firefox 22+, Safari 9+, Edge 12+, IE 11 (partial)
- **Grid**: Chrome 57+, Firefox 52+, Safari 10.1+, Edge 16+
