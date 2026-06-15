# Module 114: Responsive Accessibility

## Introduction
Responsive accessibility ensures that web content is usable and accessible across all devices, screen sizes, and input methods. This combines responsive design principles with accessibility best practices to create truly inclusive experiences. Responsive design and accessibility are deeply complementary — many responsive techniques (relative units, flexible layouts, reflow) directly improve accessibility, and many accessibility techniques (zoom support, touch targets, keyboard navigation) require responsive thinking.

## Learning Objectives
1. Build responsive layouts that maintain accessibility at all sizes
2. Ensure touch targets are adequately sized on mobile
3. Handle orientation and viewport changes accessibly
4. Use relative units for accessible text sizing
5. Implement accessible responsive navigation patterns
6. Test accessibility across devices and zoom levels
7. Support zoom and text resizing without loss of content
8. Design mobile-first accessible forms
9. Understand WCAG reflow and text spacing requirements
10. Combine responsive breakpoints with accessibility media queries

## Theory

### The Intersection of Responsive and Accessible
| Principle | Responsive | Accessible |
|-----------|-----------|------------|
| Flexible layouts | ✓ Adaptive grids | Text reflow at 400% zoom (WCAG 1.4.10) |
| Touch targets | — | 44×44px minimum (WCAG 2.5.5) |
| Readable text | Relative units | User-scalable text (WCAG 1.4.4) |
| Navigation | Hamburger menus | Skip links + keyboard navigation |
| Media queries | Breakpoints | `prefers-*` queries for user preferences |
| Color | Theming | Contrast requirements |
| Images | Responsive images | Alt text + captions |

### WCAG for Responsive
- **1.4.4 Resize text (AA)**: Text can be resized up to 200% without assistive technology — requires relative units (`rem`, `em`) and prohibits `user-scalable=no`
- **1.4.10 Reflow (AA)**: Content without 2D scrolling at 400% zoom — requires flexible layouts that adapt to zoom
- **1.4.12 Text Spacing (AA)**: No content loss from text spacing overrides — line height 1.5x, paragraph spacing 2x, letter spacing 0.12x, word spacing 0.16x

### Content Reflow at 400% Zoom
WCAG 1.4.10 requires that content reflows to a single column at 400% zoom without requiring horizontal scrolling. This means:
- No fixed-width containers
- CSS Grid and Flexbox for flexible layouts
- `min-width` instead of `width` for primary containers
- Breakpoints that respond to zoom changes
- Content is presented in source order (logical reading order)

### The Viewport Meta Tag
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
Never use `user-scalable=no` or `maximum-scale=1.0` — these violate WCAG 1.4.4 by preventing users from zooming. Always allow pinch-to-zoom.

### Touch Target Guidelines
WCAG 2.5.5 (Level AAA) recommends 44×44px minimum touch targets. WCAG 2.5.8 (Level AA, WCAG 2.2) requires 24×24px for targets with sufficient spacing. Practical guidelines:
- Buttons, links, inputs: minimum 44×44px
- Inline links: minimum 24×24px with 24px spacing between adjacent targets
- Icons that are interactive: minimum 44×44px (including padding)
- Ensure targets don't overlap at any viewport size

### Responsive Navigation Accessibility
Hamburger menus present accessibility challenges:
- The toggle button must be keyboard accessible (use `<button>`)
- `aria-expanded` must indicate menu state
- Menu items must be focusable when open
- Focus must move to the first menu item when menu opens
- Focus must return to the toggle button when menu closes
- Escape key should close the menu
- The menu should be navigable by keyboard and screen reader

---

## Syntax
```css
/* Relative units for accessibility */
html { font-size: 100%; } /* Respect user defaults */
body { font-size: 1rem; line-height: 1.5; }
h1 { font-size: clamp(1.75rem, 4vw, 2.5rem); }
.container { max-width: min(65ch, 100% - 2rem); }

/* Responsive touch targets */
@media (pointer: coarse) {
  button, a, input, select, textarea {
    min-height: 44px;
    min-width: 44px;
    padding: 0.75rem;
  }
}

/* Responsive navigation with accessibility */
.nav-toggle {
  display: none; /* Hidden on desktop */
}
@media (max-width: 768px) {
  .nav-toggle {
    display: block;
    min-height: 44px;
    min-width: 44px;
  }
  .nav-menu {
    position: fixed;
    inset: 0;
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    background: white;
    z-index: 100;
  }
  .nav-menu.open {
    transform: translateX(0);
  }
  /* Ensure nav is keyboard accessible */
}

/* Zoom-resilient layout */
.page-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 1rem;
}
@media (min-width: 640px) {
  .page-layout {
    grid-template-columns: 240px minmax(0, 1fr);
  }
}

/* Fluid typography that respects user preferences */
:root {
  --step-0: clamp(1rem, 0.5rem + 1vw, 1.25rem);
  --step-1: clamp(1.25rem, 0.75rem + 1.5vw, 1.75rem);
  --step-2: clamp(1.5rem, 1rem + 2vw, 2.25rem);
}

/* Reflow-safe container */
.content-area {
  max-width: 65ch;
  padding: 1rem;
  margin: 0 auto;
  /* No fixed width — allows reflow at zoom */
}

/* Ensure focus indicators are visible at all sizes */
:focus-visible {
  outline: 3px solid #0066cc;
  outline-offset: 2px;
}
```

### Accessible Responsive Navigation HTML
```html
<nav aria-label="Main navigation">
  <button class="nav-toggle" aria-expanded="false" aria-controls="nav-menu">
    <span class="sr-only">Menu</span>
    <span aria-hidden="true">☰</span>
  </button>
  <ul id="nav-menu" class="nav-menu" role="list">
    <li><a href="/" aria-current="page">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>
```

---

## Common Mistakes
1. **Using `user-scalable=no` in viewport meta** — This violates WCAG 1.4.4 (Resize text) and prevents users with low vision from zooming. Never use it.
2. **Fixed-width designs that break at zoom** — Containers with `width: 1200px` cause horizontal scrolling at 400% zoom, violating WCAG 1.4.10 (Reflow).
3. **Touch targets smaller than 44px** — Small buttons are impossible to tap accurately for users with motor disabilities or on small screens.
4. **Horizontal scrolling at 400% zoom** — Content must reflow without 2D scrolling. Test by zooming to 400% in the browser.
5. **Navigation hidden behind hamburger without keyboard access** — The toggle button must be focusable, and the menu must be keyboard-navigable when open.
6. **Not testing with zoom and different font sizes** — Always test at 200% and 400% zoom, and with browser font size set to "Very Large."
7. **Forms that don't reflow on mobile** — Label-input pairs should stack vertically on narrow screens.
8. **Using `px` for font sizes** — `px` units prevent text resizing in some browsers. Use `rem` or `em` instead.
9. **Relying only on width-based media queries** — Combine with `prefers-*` queries for motion, contrast, and color scheme preferences.
10. **Not providing skip links in responsive layouts** — Skip links are even more important on mobile where screen space for navigation is limited.

## Best Practices
1. Use `rem`/`em` for text, `%`/`vw`/`fr` for layout — never use `px` for font sizes or container widths
2. Minimum touch target 44×44px (WCAG 2.5.5 AAA) — 24×24px with spacing (WCAG 2.5.8 AA)
3. Never disable user zoom — remove `user-scalable=no` and `maximum-scale=1.0`
4. Test reflow at 400% zoom — no horizontal scrolling, content in one column
5. Mobile-first CSS + progressive enhancement — start with the narrow layout and enhance with `min-width` breakpoints
6. Navigation must work at any viewport size — skip links, keyboard accessibility, and screen reader labels
7. Use `clamp()` for fluid typography — sets minimum, preferred, and maximum sizes
8. Use `min()` and `max()` for container sizing — prevents overflow at any zoom level
9. Provide visible labels alongside icons — especially critical at small viewports
10. Test content overflow — use `overflow-wrap: break-word` for long words and URLs

## Accessibility
- Respect `prefers-reduced-motion` for responsive animations (hamburger menu transitions, page transitions)
- Ensure focus indicators scale with zoom — `outline` and `box-shadow` do scale by default
- Use `aria-current="page"` for current page in responsive navigation — helps screen reader users identify the current page
- Provide skip links regardless of viewport — they're essential on mobile where navigating through a long menu is tedious
- Support landscape and portrait orientations — test forms, tables, and image galleries in both orientations
- Use `prefers-color-scheme` for responsive theming — dark mode can improve readability in low-light conditions
- Ensure that responsive hiding (`display: none` on mobile) doesn't hide focusable or screen-reader-accessible content
- Use `prefers-contrast: more` to adjust responsive layouts for high contrast needs
- The `rem` unit respects browser font size settings — always use `rem` or `em` for accessible text sizing
- Provide accessible names for responsive UI toggles (hamburger, accordion, tabs)

## Performance
- Responsive CSS has minimal performance cost — media queries are evaluated once during style calculation
- Use media queries efficiently — avoid duplicating large blocks of CSS across multiple breakpoints
- `content-visibility: auto` improves performance by skipping rendering for off-screen content
- `clamp()` and `min()`/`max()` are more efficient than JavaScript-based responsive calculations
- Relative units (`rem`, `em`, `%`) resolve during style calculation — no runtime cost
- Mobile-first CSS (base styles for mobile, enhancements for desktop) avoids overriding many styles
- The `@media (pointer: coarse)` query for touch targets is evaluated once and has negligible cost
- Responsive images with `srcset` and `sizes` reduce bandwidth and improve loading performance on mobile
- Avoid `@import` in CSS for performance — use `<link>` tags instead, especially in responsive stylesheets
- CSS Grid and Flexbox are highly optimized for responsive layouts — use them instead of float-based layouts

## Browser Compatibility

| Feature/Property | Chrome | Firefox | Safari | Edge |
|------------------|--------|---------|--------|------|
| `clamp()` | 79+ | 75+ | 13.1+ | 79+ |
| `min()` / `max()` | 79+ | 75+ | 11.1+ | 79+ |
| CSS Grid | 57+ | 52+ | 10.1+ | 16+ |
| Flexbox | 29+ | 22+ | 9+ | 12+ |
| `@media (pointer)` | 41+ | 64+ | 9+ | 12+ |
| `@media (hover)` | 41+ | 64+ | 9+ | 12+ |
| `prefers-color-scheme` | 76+ | 67+ | 12.1+ | 79+ |
| `prefers-contrast` | 96+ | 101+ | 14.1+ | 96+ |
| `prefers-reduced-motion` | 74+ | 63+ | 10.1+ | 79+ |
| `content-visibility` | 85+ | 107+ | 15.4+ | 85+ |
| `overflow-wrap` | 1+ | 3.5+ | 1+ | 12+ |

All modern browsers support the responsive CSS features used for accessible layouts. The `clamp()` function is supported in all modern browsers since 2020. CSS Grid has broad support. The `prefers-*` media queries have modern browser support across all major engines. For older browsers (IE 11), provide fallback styles using float-based layouts and fixed font sizes, but ensure viewport zoom is never disabled.

## Summary Notes
- Responsive and accessible design are complementary — they share goals of flexibility, readability, and device independence
- Use relative units (`rem`, `em`, `%`, `vw`, `fr`) over fixed `px` for accessible text and layout sizing
- Minimum touch target: 44×44px (WCAG 2.5.5); minimum 24×24px with spacing (WCAG 2.5.8)
- Never disable user zoom — `user-scalable=no` violates WCAG 1.4.4
- Test reflow at 400% zoom — content must not require 2D scrolling (WCAG 1.4.10)
- Navigation must work at all viewport sizes — with skip links, keyboard accessibility, and proper ARIA attributes
- Use `prefers-*` queries alongside width-based breakpoints for motion, contrast, and color scheme preferences
- Fluid typography with `clamp()` provides responsive text sizing without media queries
- Mobile-first CSS (base = mobile, `min-width` enhancements) leads to cleaner, more maintainable code
- Test across devices, zoom levels, font size settings, orientations, and input methods for truly accessible responsive design

---

## Visual Explanation

```
Content Reflow at 400% Zoom (WCAG 1.4.10)
===========================================

Normal viewport (1280px) — three columns:
┌──────┬──────────────────┬──────┐
│ Nav  │    Main Content  │ Ads  │
│      │                  │      │
│      │                  │      │
└──────┴──────────────────┴──────┘

At 400% zoom — single column, no horizontal scroll:
┌────────────────────────────┐
│ Nav                        │
├────────────────────────────┤
│ Main Content               │
│                            │
│                            │
├────────────────────────────┤
│ Ads                        │
└────────────────────────────┘
Content reflows to source order

Touch Target Guidelines (WCAG 2.5.5 / 2.5.8)
══════════════════════════════════════════════

┌──────────────────┐
│                  │       ┌──────┐        ┌──────┐
│   44px × 44px    │       │24px  │  24px  │24px  │
│   minimum for    │       │ target│  gap   │target│
│   buttons/links  │       └──────┘        └──────┘
│                  │       WCAG 2.5.8 AA    24px spacing
└──────────────────┘
  WCAG 2.5.5 AAA

Responsive + Accessible Design Principles
══════════════════════════════════════════

┌────────────────────────────────────────┐
│            Shared Foundation            │
│                                         │
│  ┌────────────────┐ ┌────────────────┐ │
│  │  Responsive    │ │  Accessibility │ │
│  │  Design        │ │                │ │
│  ├────────────────┤ ├────────────────┤ │
│  │ Media queries  │ │ WCAG criteria  │ │
│  │ Flexible grids │ │ Keyboard nav   │ │
│  │ Relative units │ │ Screen readers │ │
│  │ Fluid layouts  │ │ Focus mgmt    │ │
│  └────────────────┘ └────────────────┘ │
│         \                  /            │
│          ┌──────────────┐              │
│          │  Inclusive   │              │
│          │  Experience  │              │
│          └──────────────┘              │
└────────────────────────────────────────┘

Mobile-First Responsive Navigation
═══════════════════════════════════

Mobile (< 768px):                Desktop (>= 768px):
┌──────────────────┐             ┌──────────────────────┐
│ [☰] Menu         │             │ Home  About  Contact │
│ ┌──────────────┐ │             └──────────────────────┘
│ │ Home         │ │             Skip link provided
│ │ About        │ │             at both viewports
│ │ Contact      │ │
│ └──────────────┘ │
│ aria-expanded    │
│ keyboard nav     │
└──────────────────┘
```
