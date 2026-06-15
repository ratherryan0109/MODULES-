# HTML Responsive Design — Cheatsheet

## Core Principles

| Principle | Implementation |
|-----------|---------------|
| Fluid Grids | `%`, `fr`, `vw`, `em`, `rem` instead of `px` |
| Flexible Images | `img { max-width: 100%; height: auto; }` |
| Media Queries | `@media (min-width: 768px) { ... }` |

## Viewport Meta Tag (Required)

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

## Media Query Breakpoints

```css
/* Mobile-first */
/* Base: mobile styles */

@media (min-width: 576px) { /* Landscape phones */ }
@media (min-width: 768px) { /* Tablets */ }
@media (min-width: 992px) { /* Desktops */ }
@media (min-width: 1200px) { /* Large desktops */ }
```

## Other Media Queries

```css
@media (orientation: landscape) { }
@media (orientation: portrait) { }
@media (prefers-color-scheme: dark) { }
@media (prefers-color-scheme: light) { }
@media (prefers-reduced-motion: reduce) { }
@media (prefers-reduced-data: reduce) { }
@media (min-resolution: 2dppx) { /* Retina */ }
```

## Responsive Images

```html
<!-- Resolution switching -->
<img src="small.jpg"
     srcset="medium.jpg 768w, large.jpg 1200w"
     sizes="(max-width: 768px) 100vw, 50vw"
     alt="Description">

<!-- Art direction -->
<picture>
  <source media="(min-width: 768px)" srcset="wide.jpg">
  <source media="(min-width: 480px)" srcset="square.jpg">
  <img src="mobile.jpg" alt="Description">
</picture>
```

## Fluid Typography

```css
html { font-size: clamp(16px, 1rem + 0.5vw, 20px); }
h1 { font-size: clamp(1.5rem, 4vw, 3rem); }
p { font-size: clamp(1rem, 2.5vw, 1.2rem); }
```

## Responsive Grid (No Media Queries)

```css
.auto-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}
```

## Responsive Flexbox (No Media Queries)

```css
.flex-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.flex-grid > * {
  flex: 1 1 280px; /* grow, shrink, min-width */
}
```

## Responsive Tables

```css
.table-wrapper { overflow-x: auto; }
/* Or use display: block on mobile with data labels */
```

## Container Queries (Modern)

```css
.widget { container-type: inline-size; }

@container (max-width: 300px) {
  .widget { flex-direction: column; }
}
```

## Testing Checklist

- [ ] Viewport meta tag present
- [ ] Images have `max-width: 100%`
- [ ] No horizontal scroll at any width
- [ ] Touch targets >= 48px
- [ ] Text readable without zooming
- [ ] Forms work on mobile
- [ ] Test at 320px, 768px, 1024px, 1440px
