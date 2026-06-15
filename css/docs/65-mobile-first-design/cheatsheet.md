# Mobile-First Design Cheatsheet

## Mindset

```
Mobile-First:
Base CSS (mobile) → @media (min-width: sm) → @media (min-width: md) → @media (min-width: lg)

Desktop-First (avoid):
Base CSS (desktop) → @media (max-width: lg) → @media (max-width: md) → @media (max-width: sm)
```

## CSS Pattern

```css
/* BASE: Mobile styles */
.container { padding: 0.5rem; }
.grid { display: grid; grid-template-columns: 1fr; gap: 0.5rem; }
.nav a { display: block; padding: 0.75rem; }

/* Tablet */
@media (min-width: 768px) {
  .container { padding: 1rem 2rem; }
  .grid { grid-template-columns: repeat(2, 1fr); gap: 1rem; }
}

/* Desktop */
@media (min-width: 1024px) {
  .container { max-width: 1200px; margin: 0 auto; }
  .grid { grid-template-columns: repeat(3, 1fr); }
}
```

## Mobile Constraints Checklist

| Constraint | Solution |
|------------|----------|
| Small screen | Single column, prioritize content |
| Touch input | 44x44px minimum touch targets |
| Slow network | Lazy loading, responsive images |
| Limited CPU | Reduce animations, GPU-accelerated CSS |
| Data caps | Serve small files, use srcset |
| Screen glare | Support dark mode |

## Touch Target Sizes

| Element | Minimum Size |
|---------|-------------|
| Buttons | 44x44px |
| Links | 44x44px |
| Form inputs | 44px height |
| Icon taps | 44x44px with padding |

## Mobile-First Navigation Patterns

| Pattern | Mobile | Desktop |
|---------|--------|---------|
| Hamburger | ☰ → show menu | Horizontal links |
| Bottom nav | Icons at bottom | Sidebar |
| Tab bar | Horizontal scroll | Full labels |
| Off-canvas | Slide from left | Always visible |

## Content Order (Mobile)

```
1. Primary content / Hero
2. Key actions / CTAs
3. Secondary content
4. Navigation
5. Footer / Meta info
```

## Responsive Images (Mobile-First)

```html
<img src="small.jpg"
     srcset="medium.jpg 768w, large.jpg 1200w"
     sizes="100vw"
     alt="">
```

## Performance Tips
- Critical CSS inlined in `<head>`
- Defer non-critical JavaScript
- Images: lazy loading + responsive
- Fonts: font-display: swap
- Avoid layout shifts (aspect-ratio)
- Minimize first paint time

## Testing Tools
- Chrome DevTools device toolbar
- Safari Web Inspector responsive mode
- Firefox Responsive Design Mode
- Physical device testing
- Lighthouse mobile audit
- WebPageTest for mobile performance
