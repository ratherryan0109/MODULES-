# CSS Grid Responsive Layouts

CSS Grid gives us some of the most powerful responsive design tools ever to land in CSS — no framework, no JavaScript, no media query spaghetti. This module covers the three pillars of grid responsiveness: `auto-fill`, `auto-fit`, `minmax()`, and `auto-fit` with `fr` units.

---

## 1. The Problem with Fixed Grids

Fixed-column grids (e.g., `grid-template-columns: 200px 200px 200px`) break at every viewport size. You end up writing media queries like:

```css
.grid { grid-template-columns: repeat(3, 1fr); }
@media (max-width: 768px) { .grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 480px) { .grid { grid-template-columns: 1fr; } }
```

This works, but it's fragile. Every breakpoint change means updating three numbers. CSS Grid's intrinsic sizing keywords eliminate this tedium.

---

## 2. The `minmax()` Function

`minmax(min, max)` sets a size range for each track. The track will be at least `min` wide and at most `max` wide.

```css
grid-template-columns: minmax(200px, 1fr);
/* Each column: at least 200px, can grow to 1fr (equal share of remaining space) */
```

Used inside `repeat()`:
```css
grid-template-columns: repeat(3, minmax(200px, 1fr));
/* 3 columns, each 200px–1fr. If viewport shrinks below 600px, overflow. */

/* Better: let the browser decide how many columns */
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
/* Creates as many 200px+ columns as fit. No overflow. */
```

---

## 3. `auto-fill` vs `auto-fit`

This is the most confusing distinction in responsive grid. Here's the difference:

```css
/* auto-fill: preserves track space even when empty */
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

/* auto-fit: collapses empty tracks to 0 */
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
```

**When 3 columns fit but only 2 items exist:**

| Behavior | `auto-fill` | `auto-fit` |
|----------|-------------|------------|
| Track count | 3 (keeps empty space) | 3 (but items centered) |
| Empty tracks | Visible as empty columns | Collapsed to 0 width |
| Item widths | Spread across fewer columns | Expand to fill collapsed space |
| Best for | Placeholder slots, loading states | Content-only layouts |

**Visual example:** 5 items in a `minmax(200px, 1fr)` grid at 900px viewport:
- `auto-fill`: Shows the 5 items at their natural size, with potentially an empty 6th column ghost track
- `auto-fit`: Shows the 5 items expanding to fill the full width

**Quick rule of thumb:** Default to `auto-fit` unless you explicitly want to reserve space for future items.

---

## 4. The Full Responsive Pattern

```css
.responsive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}
```

This one declaration gives you:
- One column on narrow screens (< 250px)
- Two columns on medium screens (520px–770px)
- Three columns on wide screens (780px–1030px)
- Four columns on very wide screens (1040px+)
- **No media queries needed**
- Items automatically wrap to new rows
- All items are equally wide at each breakpoint
- No overflow, no horizontal scroll

---

## 5. Advanced: Fractional Units with `minmax`

You can combine `minmax` with `fr` in creative ways:

```css
/* Sidebar + content — sidebar min 200px, content fills rest */
grid-template-columns: minmax(200px, 300px) 1fr;

/* Holy grail — sidebar stays between 150-250px */
grid-template-columns: minmax(150px, 250px) 1fr minmax(150px, 250px);

/* Fixed sidebar + auto-content */
grid-template-columns: 250px minmax(0, 1fr);
/* Note: minmax(0, 1fr) prevents overflow from long content */
```

---

## 6. `auto-fill` with Max-Content Columns

Sometimes you want columns to size to their content, not stretch:

```css
/* Columns as wide as their content, no wider than 1fr */
grid-template-columns: repeat(auto-fit, minmax(auto, 350px));
```

Or use `max-content`:
```css
/* Columns size to content, capped at 1fr */
grid-template-columns: repeat(auto-fit, minmax(max-content, 1fr));
```

---

## 7. Responsive Grid Areas

Auto-fill also works with named areas via `grid-template-areas` and media queries:

```css
.layout {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    "header"
    "nav"
    "main"
    "sidebar"
    "footer";
}

@media (min-width: 768px) {
  .layout {
    grid-template-columns: 200px 1fr 200px;
    grid-template-areas:
      "header  header  header"
      "nav     main    sidebar"
      "footer  footer  footer";
  }
}
```

This hybrid approach uses media queries for layout structure changes but auto-fill for content grid areas.

---

## 8. Auto-Fit in the Wild: Card Grid Example

```css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  padding: 1rem;
}

.card {
  background: #fff;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
```

This pattern is the foundation for most modern card UIs — from Netflix browse pages to GitHub dashboards to news sites.

---

## 9. `minmax()` with Fixed and Percentage Values

```css
/* Responsive sidebar grid */
grid-template-columns: minmax(0, 30%) 1fr;
/* On wide screens: 30% sidebar, 70% content */
/* On narrow screens: sidebar can shrink below 30% if needed */

/* Better than percentage-only because minmax gives you a floor */
```

---

## 10. Common Pitfalls

### Pitfall 1: No `minmax(0, 1fr)`

```css
/* Problem: long content can overflow */
grid-template-columns: 200px 1fr;

/* Fix: allow column to shrink to 0 */
grid-template-columns: 200px minmax(0, 1fr);
```

### Pitfall 2: `auto-fill` vs `auto-fit` Confusion

```css
/* 6 items, 1200px viewport: shows 4 columns */
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

/* 6 items, 1200px viewport: shows 4+ columns, items stretch */
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
```

### Pitfall 3: Not Using `auto-rows`

```css
/* Items in new rows get height: auto — can vary */
.responsive-grid { grid-auto-rows: 1fr; }
/* Consistent height across all rows */
```

---

## Summary

| Keyword | Behavior | Use When |
|---------|----------|----------|
| `minmax(min, max)` | Defines a size range | You need flexible but bounded tracks |
| `auto-fill` | Creates as many tracks as fit, keeps empty space | You want to reserve grid positions |
| `auto-fit` | Creates as many tracks as fit, collapses empty | You want items to fill the available space |
| `auto-fill/auto-fit + minmax()` | Fully responsive grid | You want zero media query breakpoints |

The one-liner that changes everything:
```css
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
```

---

## Visual Explanation

```
Responsive Grid Layout — auto-fill vs auto-fit
===============================================

Viewport: 900px wide, 5 items, column min: 250px max: 1fr

auto-fill:
┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐
│ Item 1 │ │ Item 2 │ │ Item 3 │ │(empty) │
│        │ │        │ │        │ │ track  │
└────────┘ └────────┘ └────────┘ └────────┘
┌────────┐ ┌────────┐
│ Item 4 │ │ Item 5 │
└────────┘ └────────┘
Empty track preserved — items don't stretch

auto-fit:
┌────────┐ ┌────────┐ ┌────────┐
│ Item 1 │ │ Item 2 │ │ Item 3 │
│        │ │        │ │        │
└────────┘ └────────┘ └────────┘
┌────────┐ ┌────────┐ ┌────────┐
│ Item 4 │ │ Item 5 │ │        │ ← empty collapsed
└────────┘ └────────┘ └────────┘
Empty tracks collapsed — items expand to fill

minmax(200px, 1fr) — responsive breakpoints without media queries:
< 500px       500-749px     750-999px     1000px+
┌─────┐       ┌─────┬─────┐ ┌─────┬─────┬──┐ ┌──┬──┬──┬──┐
│  1  │       │  1  │  2  │ │  1  │  2  │ 3│ │ 1│ 2│ 3│ 4│
└─────┘       └─────┴─────┘ └─────┴─────┴──┘ └──┴──┴──┴──┘
 1 col         2 cols         3 cols          4 cols

grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))
```

---

## What's Next

Now that you can build responsive grids, module 62 (Grid vs Flexbox) will help you decide which layout tool to use and when. Every layout decision is a choice between these two powerful CSS tools.
