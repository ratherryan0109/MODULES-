# Responsive Layout Systems Cheatsheet

## CSS Grid

### Basic Grid
```css
.container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: auto 1fr auto;
  gap: 1rem;
}
```

### Responsive Auto-Fit
```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}
```

### Named Grid Areas
```css
.container {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  grid-template-columns: 200px 1fr;
  gap: 1rem;
}
.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
```

### Grid Shorthand
```css
.container {
  grid: "header header" auto
        "sidebar main" 1fr
        "footer footer" auto
        / 200px 1fr;
  gap: 1rem;
}
```

## Flexbox

### Navigation
```css
.nav {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
}
.nav-links {
  display: flex;
  gap: 1rem;
  margin-left: auto;
}
```

### Card Grid
```css
.card-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}
.card {
  display: flex;
  flex-direction: column;
  flex: 1 1 300px;
}
.card-content { flex: 1; }
```

### Centering
```css
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

## Multi-Column
```css
article {
  column-count: 2;
  column-gap: 2rem;
  column-rule: 1px solid #ddd;
  column-width: 300px; /* responsive alternative */
}
```

## Container Queries
```css
/* Parent */
.card-wrapper {
  container-type: inline-size;
  container-name: card;
}

/* Child */
@container card (min-width: 400px) {
  .card { flex-direction: row; }
}
@container card (min-width: 600px) {
  .card { padding: 2rem; }
}
```

## Layout Decision Guide

| Pattern | System | Reason |
|---------|--------|--------|
| Full page layout | Grid | 2D needs |
| Navigation | Flexbox | 1D row |
| Card grid | Grid | 2D rows + columns |
| Single card | Flexbox | 1D column |
| Form layout | Grid | Alignment grid |
| Toolbar | Flexbox | 1D row wrapping |
| Article text | Multi-column | Text flow |
| Dashboard | Grid | Widget positioning |
| Centering | Flexbox | Simple 1D centering |

## Common Layout Patterns

### Sticky Footer
```css
body {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}
```

### Sidebar + Content
```css
@media (min-width: 768px) {
  .layout {
    display: grid;
    grid-template-columns: 250px 1fr;
  }
}
```

### Centered Content
```css
.content {
  max-width: 65ch;
  margin: 0 auto;
}
```

## Performance Tips
- CSS Grid and Flexbox are GPU-accelerated
- Use `content-visibility: auto` for lazy-rendering off-screen
- Avoid animating `gap`, `grid-template-*`, `flex-basis`
- Container queries add negligible overhead
- Prefer `auto-fit` over media queries for simple grids
