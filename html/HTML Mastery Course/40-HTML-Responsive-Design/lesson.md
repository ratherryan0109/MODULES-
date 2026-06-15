# Module 40: HTML Responsive Design

## Introduction

Responsive web design (RWD) is an approach to web development that ensures web pages render well on a variety of devices and window or screen sizes. Rather than building separate sites for desktop and mobile, responsive design uses flexible layouts, flexible images, and CSS media queries to adapt content to any screen. The term was coined by Ethan Marcotte in 2010, and it has since become the standard approach for modern web development.

## Learning Objectives

By the end of this module, you will be able to:
- Understand the three core principles of responsive design
- Implement fluid grids using relative units
- Create responsive images with `srcset` and `sizes`
- Write effective media queries
- Design mobile-first or desktop-first layouts
- Test responsive designs across devices

## Three Core Principles

### 1. Fluid Grids
Use relative units (%, fr, em, rem, vw, vh) instead of fixed pixels.

### 2. Flexible Images
Images scale within their containing elements using `max-width: 100%`.

### 3. Media Queries
CSS rules that apply based on device characteristics (width, height, orientation).

## Fluid Grids with Relative Units

```css
/* Fixed - Not responsive */
.container { width: 960px; }

/* Fluid - Responsive */
.container { 
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}

/* CSS Grid responsive without media queries */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
```

## Flexible Images

```css
img {
  max-width: 100%;
  height: auto;
}
```

### Responsive Images with `srcset`

```html
<img src="small.jpg"
     srcset="medium.jpg 768w, large.jpg 1200w, xlarge.jpg 1920w"
     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
     alt="Responsive image example">
```

### Using `<picture>` Element

```html
<picture>
  <source media="(min-width: 1200px)" srcset="large.webp" type="image/webp">
  <source media="(min-width: 768px)" srcset="medium.webp" type="image/webp">
  <source srcset="small.webp" type="image/webp">
  <img src="fallback.jpg" alt="Responsive image">
</picture>
```

## Media Queries

### Basic Syntax

```css
/* Mobile-first: base styles for mobile */
.column { width: 100%; }

/* Tablet */
@media (min-width: 768px) {
  .column { width: 50%; }
}

/* Desktop */
@media (min-width: 1024px) {
  .column { width: 33.33%; }
}
```

### Common Breakpoints

```css
/* Extra small devices (phones, < 576px) — base styles */
/* Small devices (landscape phones, >= 576px) */
@media (min-width: 576px) { }
/* Medium devices (tablets, >= 768px) */
@media (min-width: 768px) { }
/* Large devices (desktops, >= 992px) */
@media (min-width: 992px) { }
/* Extra large devices (>= 1200px) */
@media (min-width: 1200px) { }
```

### Orientation, Resolution, and More

```css
/* Landscape orientation */
@media (orientation: landscape) { }

/* Portrait orientation */
@media (orientation: portrait) { }

/* High-resolution screens (Retina) */
@media (min-resolution: 2dppx) { }

/* Prefers reduced motion */
@media (prefers-reduced-motion: reduce) {
  * { animation-duration: 0.01ms !important; }
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  body { background: #222; color: #eee; }
}
```

## Mobile-First vs. Desktop-First

### Mobile-First (Recommended)
```css
/* Mobile: single column */
.column { width: 100%; }

/* Tablet: two columns */
@media (min-width: 768px) {
  .column { width: 50%; }
}

/* Desktop: three columns */
@media (min-width: 1024px) {
  .column { width: 33.33%; }
}
```

### Desktop-First
```css
/* Desktop: four columns */
.column { width: 25%; }

/* Tablet: two columns */
@media (max-width: 1024px) {
  .column { width: 50%; }
}

/* Mobile: single column */
@media (max-width: 768px) {
  .column { width: 100%; }
}
```

## Responsive Typography

```css
/* Fluid typography using clamp */
h1 { font-size: clamp(1.5rem, 4vw, 3rem); }
p { font-size: clamp(1rem, 2vw, 1.2rem); }

/* Using viewport units */
body { font-size: calc(16px + 0.5vw); }
```

## Responsive Navigation Patterns

### Hamburger Menu (Mobile)
```css
.nav-links { display: none; }
.nav-links.open { display: flex; flex-direction: column; }

@media (min-width: 768px) {
  .nav-links { display: flex; flex-direction: row; }
  .hamburger { display: none; }
}
```

### Priority+ Navigation
Shows more links on wider screens, collapses overflow into a "More" menu.

## Testing Responsive Design

1. **Browser DevTools** — Device emulation in Chrome/Firefox
2. **Resize the browser** — Drag to see breakpoints in action
3. **Real devices** — Test on actual phones and tablets
4. **Online tools** — BrowserStack, Responsinator, LambdaTest
5. **Chrome Lighthouse** — Audit for responsive issues

## Common Mistakes

- Using fixed pixel widths instead of relative units
- Forgetting `max-width: 100%` on images
- Not having a viewport meta tag (covered in Module 41)
- Testing only at specific breakpoints vs. all widths
- Hiding content on mobile instead of reorganizing
- Using too many or too few breakpoints

## Best Practices

1. **Start with mobile-first** styles, then add complexity
2. **Use relative units** (`%`, `em`, `rem`, `vw`, `vh`, `fr`)
3. **Set `max-width: 100%`** on all images and media
4. **Use the viewport meta tag** (see Module 41)
5. **Test on real devices** beyond just DevTools
6. **Use `clamp()`** for fluid typography
7. **Design content-first**, not device-first
8. **Use `min-width`** for mobile-first media queries
9. **Avoid `!important`** in media queries
10. **Use CSS Grid `auto-fit`/`minmax()`** for auto-responsive grids

## Summary Notes

| Principle | Technique | Code |
|-----------|-----------|------|
| **Fluid Grids** | Relative units | `width: 90%; max-width: 1200px;` |
| **Flexible Media** | Max-width constraint | `img { max-width: 100%; }` |
| **Media Queries** | Breakpoint conditions | `@media (min-width: 768px) {}` |
| **Mobile-First** | Base → Enhance | Start with mobile, add with `min-width` |
| **Responsive Images** | `srcset` + `sizes` | `<img srcset="..." sizes="...">` |
| **Fluid Typography** | `clamp()` | `font-size: clamp(1rem, 2vw, 1.5rem);` |
