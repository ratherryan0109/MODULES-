# CSS Grid Introduction - Quick Reference

## Grid Terminology

| Term | Definition |
|------|-----------|
| **Grid Container** | Element with `display: grid` |
| **Grid Item** | Direct child of grid container |
| **Grid Line** | Horizontal/vertical dividing line |
| **Grid Track** | Space between grid lines (row or column) |
| **Grid Cell** | Intersection of a row and column |
| **Grid Area** | Rectangular group of cells |

## Key Properties

| Property | Purpose | Example |
|----------|---------|---------|
| `display: grid` | Creates grid container | `display: grid;` |
| `grid-template-columns` | Defines columns | `repeat(3, 1fr)` |
| `grid-template-rows` | Defines rows | `auto 1fr auto` |
| `gap` | Spacing between tracks | `gap: 20px` |
| `fr` unit | Fraction of available space | `1fr 2fr 1fr` |

## Grid vs Flexbox

| Aspect | Grid | Flexbox |
|--------|------|---------|
| Dimensions | 2D (rows + columns) | 1D (row OR column) |
| Best for | Page layouts, complex 2D | Components, navs, centering |
| Item placement | Explicit track placement | Content-flow based |
