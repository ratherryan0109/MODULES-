# Responsive Website Project Cheatsheet

## Essential Meta Tag
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

## Mobile-First CSS Pattern
```css
/* Base: Mobile styles (no media query) */
.grid { grid-template-columns: 1fr; gap: 1rem; }

/* Tablet */ @media (min-width: 768px) { .grid { grid-template-columns: repeat(2, 1fr); } }
/* Desktop */ @media (min-width: 1024px) { .grid { grid-template-columns: repeat(3, 1fr); } }
/* Wide */ @media (min-width: 1200px) { .grid { grid-template-columns: repeat(4, 1fr); } }
```

## Common Breakpoints
| Name | Min Width | Target |
|------|-----------|--------|
| Mobile | Base | Phones |
| Tablet | 768px | iPads, large phones |
| Desktop | 1024px | Laptops, small monitors |
| Wide | 1200px+ | Large monitors |

## Fluid Images
```css
img { max-width: 100%; height: auto; }
```
```html
<img src="photo-800.jpg" srcset="photo-400.jpg 400w, photo-800.jpg 800w" sizes="100vw" alt="" loading="lazy">
```

## Responsive Grid (Auto-fit)
```css
.grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; }
```

## Responsive Navigation
```css
/* Mobile */ .nav__list { display: none; }
/* Desktop */ @media (min-width: 768px) { .nav__list { display: flex; } .nav__toggle { display: none; } }
```

## Responsive Typography
```css
body { font-size: 16px; line-height: 1.6; }
h1 { font-size: clamp(1.75rem, 4vw, 3rem); }
```

## Responsive Containers
```css
.container { width: 100%; max-width: 1100px; margin: 0 auto; padding: 0 20px; }
```

## Touch Targets (Mobile)
```css
button, a, input { min-height: 44px; min-width: 44px; }
```

## Responsive Iframe (16:9)
```css
.video-wrapper { position: relative; padding-bottom: 56.25%; height: 0; }
.video-wrapper iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
```

## Responsive Table
```css
.table-wrapper { overflow-x: auto; -webkit-overflow-scrolling: touch; }
```

## Testing Checklist
- [ ] Viewport meta tag present
- [ ] No horizontal scroll at any size
- [ ] Navigation works on mobile (hamburger)
- [ ] Images scale correctly
- [ ] Text is readable without zooming
- [ ] Touch targets ≥ 44x44px
- [ ] Forms usable on mobile
- [ ] All breakpoints tested
- [ ] Lighthouse mobile score > 90
- [ ] Content doesn't overflow
