# Module 39: HTML Layout Techniques

## Introduction

HTML layout techniques define how elements are arranged on a web page. Over the years, web layout has evolved from table-based layouts through floats and positioning to modern techniques like Flexbox and CSS Grid. This module covers both traditional and modern approaches, helping you understand when and how to use each technique.

## Learning Objectives

By the end of this module, you will be able to:
- Understand the evolution of HTML layout techniques
- Use CSS Flexbox for one-dimensional layouts
- Use CSS Grid for two-dimensional layouts
- Implement responsive layouts with media queries
- Combine layout techniques for complex designs
- Apply the position property effectively
- Use CSS multi-column for text layouts

## Layout Techniques Overview

| Technique | Best For | Dimension | Browser Support |
|-----------|----------|-----------|-----------------|
| **Normal Flow** | Default block/inline layout | 1D | All |
| **Floats** | Wrapping text around images | 1D | All |
| **Positioning** | Overlapping, fixed/sticky elements | N/A | All |
| **Flexbox** | One-dimensional distributions | 1D | Modern + IE11 |
| **CSS Grid** | Two-dimensional layouts | 2D | Modern + Edge 16 |
| **Multi-Column** | Text columns (magazine style) | 1D | Modern |

## 1. Normal Flow

Elements appear in the order they appear in the HTML source. Block elements stack vertically; inline elements flow horizontally.

```html
<div>Block 1</div>
<div>Block 2</div>
<span>Inline 1</span>
<span>Inline 2</span>
```

## 2. Floats

Floats were historically used for layout but are now primarily used for text wrapping around images.

```html
<img src="image.jpg" alt="" style="float: left; margin-right: 10px;">
<p>Text wraps around the floated image on the right side.</p>
```

## 3. Positioning

### Relative
```css
.relative-box { position: relative; top: 10px; left: 20px; }
```

### Absolute
```css
.container { position: relative; }
.absolute-box { position: absolute; top: 0; right: 0; }
```

### Fixed
```css
.fixed-header { position: fixed; top: 0; width: 100%; z-index: 100; }
```

### Sticky
```css
.sticky-nav { position: sticky; top: 0; z-index: 50; }
```

## 4. CSS Flexbox (Module 39 Focus)

Flexbox is a one-dimensional layout method for arranging items in rows or columns.

### Basic Usage
```css
.flex-container {
  display: flex;
  justify-content: center;  /* Main axis */
  align-items: center;      /* Cross axis */
  gap: 10px;
}
```

### Flex Direction
```css
flex-direction: row;            /* Default: left to right */
flex-direction: column;         /* Top to bottom */
flex-direction: row-reverse;    /* Right to left */
```

### Common Patterns
```css
/* Centering */
.centered { display: flex; justify-content: center; align-items: center; min-height: 100vh; }

/* Equal columns */
.equal-columns { display: flex; gap: 20px; }
.equal-columns > * { flex: 1; }

/* Holy Grail Layout with Flexbox */
body { display: flex; flex-direction: column; min-height: 100vh; }
main { flex: 1; display: flex; }
article { flex: 1; }
nav, aside { width: 200px; }
```

## 5. CSS Grid (Module 39 Focus)

Grid is a two-dimensional layout system that handles rows and columns simultaneously.

### Basic Usage
```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
```

### Grid Areas
```css
.page-layout {
  display: grid;
  grid-template-areas:
    "header  header  header"
    "nav     main    aside"
    "footer  footer  footer";
  grid-template-columns: 200px 1fr 250px;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}
header { grid-area: header; }
nav    { grid-area: nav; }
main   { grid-area: main; }
aside  { grid-area: aside; }
footer { grid-area: footer; }
```

### Responsive Grid
```css
.auto-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
```

## 6. Multi-Column Layout

```css
.magazine-text {
  column-count: 3;
  column-gap: 40px;
  column-rule: 1px solid #ddd;
}
```

## Combining Techniques

Modern layouts typically combine Flexbox (for components) with Grid (for page structure):

```css
.page { display: grid; grid-template-columns: 1fr 300px; gap: 20px; }
.card { display: flex; flex-direction: column; }
.card-body { flex: 1; }
```

## Common Mistakes

- Using floats for page layout (use Grid or Flexbox)
- Forgetting to set `min-height: 100vh` on page layouts
- Over-nesting flex containers
- Not using `gap` property (older browsers need margins)
- Mixing Grid and Flexbox without purpose

## Best Practices

1. Use Grid for page-level layout, Flexbox for component-level
2. Use `min-height: 100vh` for full-height layouts
3. Use `gap` instead of margins for spacing
4. Keep layout structure shallow
5. Use `auto-fit`/`minmax()` for responsive grids
6. Use `position: sticky` instead of JavaScript for sticky headers
7. Always test responsive breakpoints

## Summary Notes

| Technique | Use Case | Property |
|-----------|----------|----------|
| **Flexbox** | 1D layouts, nav bars, centering | `display: flex` |
| **Grid** | 2D layouts, page structure | `display: grid` |
| **Position** | Overlapping, fixed elements | `position: absolute/fixed/sticky` |
| **Float** | Text wrapping | `float: left/right` |
| **Multi-column** | Magazine text | `column-count` |
