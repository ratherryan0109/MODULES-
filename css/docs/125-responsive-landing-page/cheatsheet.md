# CSS Cheatsheet — Responsive Landing Page

## Box Model & Reset
| Property | Value | Purpose |
|----------|-------|---------|
| `box-sizing` | `border-box` | Include padding/border in width |
| `margin` | `0` | Remove default margins |
| `padding` | `0` | Remove default padding |

## Custom Properties (CSS Variables)
```css
:root {
  --clr-primary: #6366f1;
  --ff-sans: 'Inter', sans-serif;
  --fs-h1: clamp(2.5rem, 5vw, 4rem);
  --spacing-lg: 4rem;
  --max-width: 1200px;
}
```

## Layout — Flexbox
```css
display: flex;
flex-wrap: wrap;        /* Allow wrapping */
gap: 2rem;              /* Spacing between items */
justify-content: center; /* Main axis alignment */
align-items: center;     /* Cross axis alignment */
flex: 1 1 300px;        /* grow shrink basis */
```

## Layout — CSS Grid
```css
display: grid;
grid-template-columns: 1fr 1fr;    /* Two equal columns */
grid-template-columns: repeat(3, 1fr);
gap: 2rem;
align-items: center;
```

## Responsive Typography
```css
font-size: clamp(2.5rem, 6vw, 4.5rem);
```
Clamp provides a MINIMUM, PREFERRED (vw), and MAXIMUM value.

## Media Queries (Mobile-First)
```css
/* Mobile: default styles */
@media (min-width: 768px) { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
@media (min-width: 1280px) { /* Large Desktop */ }
```

## Transitions & Animations
```css
transition: property duration timing-function delay;
transition: transform 0.3s ease, box-shadow 0.3s ease;

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
}
animation: fadeInUp 0.6s ease 0.2s both;
```

## Buttons
```css
.btn-primary {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  background: var(--clr-primary);
  color: white;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.3s ease, transform 0.3s ease;
}
.btn-primary:hover {
  background: var(--clr-primary-dark);
  transform: translateY(-2px);
}
```

## Cards
```css
.card {
  padding: 2rem;
  border-radius: 1rem;
  background: white;
  border: 1px solid #e2e8f0;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card:hover { transform: translateY(-5px); box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
```

## Accessibility
```css
/* Skip link */
.skip-link { position: absolute; top: -100%; }
.skip-link:focus { top: 1rem; }

/* Focus visible */
:focus-visible { outline: 2px solid var(--clr-primary); outline-offset: 2px; }

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Glassmorphism Header
```css
background: rgba(255,255,255,0.95);
backdrop-filter: blur(10px);
-webkit-backdrop-filter: blur(10px);
```

## Grid Areas for Sections
```css
.features-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}
.feature-card { flex: 1 1 300px; max-width: 380px; }
```
