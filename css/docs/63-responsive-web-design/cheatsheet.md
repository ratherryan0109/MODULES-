# Responsive Web Design Cheatsheet

## Viewport Meta Tag
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

## CSS Relative Units

| Unit | Relative To | Use Case |
|------|-------------|----------|
| % | Parent element | Layout widths |
| em | Parent font-size | Typography, spacing |
| rem | Root font-size (html) | Consistent spacing |
| vw | Viewport width (1/100) | Full-width elements |
| vh | Viewport height (1/100) | Full-height sections |
| vmin | Smaller of vw/vh | Responsive shapes |
| vmax | Larger of vw/vh | Responsive shapes |
| fr | Available grid space | Grid columns/rows |

## Media Query Patterns

### Mobile-First (Recommended)
```css
/* Base styles: mobile */
.element { ... }

/* Tablet+ */
@media (min-width: 768px) { ... }

/* Desktop+ */
@media (min-width: 1024px) { ... }

/* Large Desktop */
@media (min-width: 1440px) { ... }
```

### Desktop-First
```css
/* Base styles: desktop */
.element { ... }

/* Tablet- */
@media (max-width: 1023px) { ... }

/* Mobile- */
@media (max-width: 767px) { ... }
```

## Responsive Layout Patterns

### CSS Grid Auto-Fit
```css
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
```

### Flexbox Wrap
```css
display: flex;
flex-wrap: wrap;
gap: 1rem;
> * { flex: 1 1 200px; }
```

### Container Queries
```css
@container (min-width: 400px) { ... }
```

## Responsive Images

```html
<img srcset="small.jpg 500w, medium.jpg 1000w, large.jpg 1500w"
     sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
     src="fallback.jpg" alt="Description">
```

```html
<picture>
  <source media="(min-width: 1200px)" srcset="large.webp" type="image/webp">
  <source media="(min-width: 768px)" srcset="medium.webp" type="image/webp">
  <img src="small.jpg" alt="Description">
</picture>
```

## Responsive Typography

```css
/* Fluid with clamp() */
font-size: clamp(1rem, 2.5vw, 2rem);

/* Viewport units with fallback */
font-size: calc(16px + 0.5vw);
```

## Common Breakpoints

| Name | Width | Devices |
|------|-------|---------|
| xs | < 576px | Phones |
| sm | ≥ 576px | Large phones |
| md | ≥ 768px | Tablets |
| lg | ≥ 992px | Laptops |
| xl | ≥ 1200px | Desktops |
| xxl | ≥ 1400px | Large screens |

## Testing Tools
- Browser DevTools device emulation
- Chrome Lighthouse for responsive audit
- Responsive Design Checker
- BrowserStack / Sauce Labs
- Real device testing
