# CSS Modern Layout Techniques — Cheatsheet

## Layout Decision Guide

```
┌─────────────────────────────┐
│  1 dimension (row OR col)?  │────→ Flexbox
│  2 dimensions (rows+cols)?  │────→ CSS Grid
│  Align items in a container? │────→ Flexbox
│  Page-level structure?      │────→ CSS Grid
│  Component-level layout?    │────→ Flexbox
│  Unknown number of items?   │────→ Flexbox (wrap)
└─────────────────────────────┘
```

## Flexbox

```css
.flex-container {
  display: flex;
  flex-direction: row;        /* row | column | row-reverse | column-reverse */
  flex-wrap: wrap;            /* nowrap | wrap | wrap-reverse */
  gap: 16px;                  /* row-gap column-gap shorthand */
  justify-content: flex-start; /* main axis: start | center | end | space-between | space-around | space-evenly */
  align-items: stretch;        /* cross axis: stretch | start | center | end | baseline */
}

.flex-item {
  flex: 1 1 0%;              /* grow shrink basis */
  /* Common shortcuts: */
  /* flex: 1    → 1 1 0%     (grow equally) */
  /* flex: auto → 1 1 auto   (grow from content size) */
  /* flex: none → 0 0 auto   (no grow, no shrink) */
}
```

## CSS Grid

```css
.grid-container {
  display: grid;
  /* Column / Row definitions */
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: auto 1fr auto;

  /* Named areas */
  grid-template-areas:
    "header header header"
    "nav    main   aside"
    "footer footer footer";

  gap: 16px;
  align-items: stretch;
  justify-items: stretch;
}

.grid-item { grid-area: header; }
/* Or position by lines: */
.grid-item { grid-column: 1 / 3; grid-row: 1 / 2; }
```

## Key Patterns

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
```

### Auto-fill Responsive Grid (no media queries)
```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(300px, 100%), 1fr));
  gap: 16px;
}
```

### Sticky Footer
```css
body {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}
```

### Equal-height Cards
```css
.card-deck { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); }
.card { display: flex; flex-direction: column; }
.card-body { flex: 1; }        /* pushes footer down */
.card-btn { margin-top: auto; } /* alternative approach */
```

### Centering
```css
.centered { display: grid; place-items: center; }
```

### Sidebar + Content
```css
.layout { display: flex; gap: 24px; }
.sidebar { flex: 0 0 280px; }
.content { flex: 1; min-width: 0; }
```

### Flexbox Wrapping Toolbar
```css
.toolbar { display: flex; flex-wrap: wrap; gap: 8px; }
```

## Container Queries

```css
.card {
  container-type: inline-size;
  container-name: card;
}

@container card (min-width: 400px) {
  .card { flex-direction: row; }
}
```

## Subgrid

```css
.card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto 1fr auto;
  gap: 20px;
}

.card {
  display: grid;
  grid-template-rows: subgrid;
  grid-row: span 3;
}
```

## Intrinsic Sizing

| Value | Behavior |
|-------|----------|
| `min-content` | As narrow as possible (widest word) |
| `max-content` | As wide as needed (no wrapping) |
| `fit-content` | Content-sized, up to a max |
| `clamp(min, pref, max)` | Responsive between bounds |

## Common Mistakes

- ❌ Using Grid when Flexbox is simpler (1D layouts)
- ❌ Forgetting `flex-wrap: wrap` — default is `nowrap`
- ❌ Forgetting `min-width: 0` on flex items with long content
- ❌ Mixing `fr` and `%` in the same grid track definition
- ❌ Using media queries when container queries are better
- ❌ Confusing `auto-fill` vs `auto-fit`
- ❌ Not setting `min-height: 100vh` on grid page layouts

## Browser Support (as of 2026)

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| Flexbox | 29+ | 20+ | 9+ | 12+ |
| Grid | 57+ | 52+ | 10.1+ | 16+ |
| `gap` for Flexbox | 84+ | 63+ | 14.1+ | 84+ |
| Subgrid | 117+ | 71+ | 16+ | 117+ |
| Container Queries | 105+ | 110+ | 16+ | 105+ |
| Masonry | — | (flag) | — | — |
