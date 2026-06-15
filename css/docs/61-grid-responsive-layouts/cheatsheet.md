# Grid Responsive Layouts — Cheatsheet

## The One-Liner
```css
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
```
This single declaration creates a fully responsive grid without media queries.

## `minmax(min, max)` Syntax
```css
/* In repeat() */
grid-template-columns: repeat(3, minmax(200px, 1fr));

/* Outside repeat() — for mixed layouts */
grid-template-columns: minmax(200px, 300px) 1fr minmax(150px, 200px);
```

## `auto-fill` vs `auto-fit`

| Behavior | `auto-fill` | `auto-fit` |
|----------|-------------|------------|
| Creates | As many tracks as fit | As many tracks as fit |
| Empty tracks | Preserved (visible) | Collapsed (width: 0) |
| Items | Stay at defined sizes | Expand to fill space |
| Best for | Placeholders, loading states | Most layouts |

**Mental model:**
- `auto-fill` = "reserve space for future items"
- `auto-fit` = "fit current items into the available space"

## Viewport Behavior
```
repeat(auto-fit, minmax(200px, 1fr))

Viewport < 200px  → 1 column
200px - 400px     → 1-2 columns
400px - 600px     → 2-3 columns
600px - 800px     → 3-4 columns
...and so on
```

## Common Patterns

| Pattern | Code |
|---------|------|
| Responsive card grid | `repeat(auto-fit, minmax(280px, 1fr))` |
| Sidebar + content | `minmax(200px, 300px) 1fr` |
| Holy grail | `minmax(150px, 250px) 1fr minmax(150px, 250px)` |
| Fixed sidebar + flex content | `250px minmax(0, 1fr)` |
| Content-width columns | `repeat(auto-fit, minmax(auto, 350px))` |

## Pitfalls
```css
/* ❌ Overflow risk */
grid-template-columns: 200px 1fr; /* 1fr min is auto — long content overflows */

/* ✅ Safe — allows column to shrink */
grid-template-columns: 200px minmax(0, 1fr);

/* ❌ Invalid — 1fr cannot be the minimum */
grid-template-columns: repeat(3, minmax(1fr, 300px)); /* WRONG */
```

## `minmax(0, 1fr)` Explained
- Plain `1fr` has implicit min of `auto` (content-based minimum)
- `minmax(0, 1fr)` allows the track to shrink to 0
- Prevents overflow from long words/images
- Use when content might exceed the cell

## Browser Support
All features supported in:
- Chrome 57+
- Firefox 52+
- Safari 10.1+
- Edge 16+
