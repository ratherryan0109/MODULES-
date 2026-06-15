# CSS Breakpoints Cheatsheet

## Common Framework Breakpoints

| Framework | xs | sm | md | lg | xl | xxl |
|-----------|-----|------|------|------|------|------|
| **Bootstrap 5** | <576px | ≥576px | ≥768px | ≥992px | ≥1200px | ≥1400px |
| **Tailwind** | - | ≥640px | ≥768px | ≥1024px | ≥1280px | ≥1536px |
| **Material UI** | <600px | ≥600px | ≥900px | ≥1200px | ≥1536px | - |
| **Bulma** | - | ≥768px | ≥769px | ≥1024px | ≥1216px | ≥1408px |
| **Foundation** | - | ≥640px | ≥1024px | ≥1440px | - | - |

## Mobile-First Pattern

```css
/* BASE (no query): Mobile first */
.container { padding: 1rem; }
.grid { grid-template-columns: 1fr; }

/* sm (≥640px) */
@media (min-width: 640px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
}

/* md (≥768px) */
@media (min-width: 768px) {
  .container { padding: 2rem; }
}

/* lg (≥1024px) */
@media (min-width: 1024px) {
  .grid { grid-template-columns: repeat(3, 1fr); }
}

/* xl (≥1280px) */
@media (min-width: 1280px) {
  .container { max-width: 1200px; margin: 0 auto; }
}
```

## Modern Range Syntax

```css
/* Inclusive range */
@media (576px <= width <= 1024px) { }

/* Greater than or equal */
@media (width >= 768px) { }

/* Less than or equal */
@media (width <= 480px) { }

/* Less than (strict) */
@media (width < 576px) { }
```

## Container Query Breakpoints

```css
.container-type { container-type: inline-size; }

@container (min-width: 400px) {
  .child { flex-direction: row; }
}

@container (min-width: 600px) {
  .child { display: grid; grid-template-columns: 1fr 1fr; }
}
```

## Reduce Breakpoints with CSS Grid

```css
/* Auto-fill: creates as many tracks as will fit */
grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));

/* Auto-fit: same, but collapses empty tracks */
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
```

## When to Add a Breakpoint

| Symptom | Solution |
|---------|----------|
| Text too wide (>75 chars) | Constrain width or add columns |
| Cards too stretched | Add breakpoint for multi-column |
| Navigation cramped | Stack or collapse items |
| Too much whitespace | Increase padding or content width |
| Images too small | Adjust grid or image sizes |

## Breakpoint Best Practices

- Add breakpoints **when content breaks**, not for devices
- Use **3-5 breakpoints** maximum
- Use **min-width** (mobile-first) not max-width
- **Document** breakpoints at stylesheet top
- **Test between breakpoints**, not just at them
- Consider **container queries** for components
- Use **auto-fit/minmax** to reduce breakpoint needs

## Debugging Breakpoints

```css
/* Visual breakpoint indicator */
body::after {
  content: 'xs';
  position: fixed; bottom: 0; right: 0;
  background: black; color: white; padding: 4px 8px;
}
@media (min-width: 640px) { body::after { content: 'sm'; } }
@media (min-width: 768px) { body::after { content: 'md'; } }
@media (min-width: 1024px) { body::after { content: 'lg'; } }
@media (min-width: 1280px) { body::after { content: 'xl'; } }
```
