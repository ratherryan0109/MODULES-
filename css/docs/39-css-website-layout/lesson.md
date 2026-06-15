# CSS Website Layout

## Table of Contents
1. [Introduction](#introduction)
2. [Learning Objectives](#learning-objectives)
3. [Theory](#theory)
4. [Syntax and Code Examples](#syntax-and-code-examples)
5. [Visual Explanation](#visual-explanation)
6. [Common Mistakes](#common-mistakes)
7. [Best Practices](#best-practices)
8. [Accessibility Considerations](#accessibility-considerations)
9. [Performance Considerations](#performance-considerations)
10. [Browser Compatibility](#browser-compatibility)
11. [Summary Notes](#summary-notes)

## Introduction
Building a complete website layout is the ultimate test of CSS layout skills. Modern CSS gives us two powerful tools — CSS Grid and Flexbox — that together can create any layout pattern imaginable. CSS Grid handles the overall two-dimensional page structure (the "big picture"), while Flexbox manages one-dimensional component-level layouts (navigation items, card rows, header elements). This module teaches you how to combine both systems to build robust, responsive, and maintainable website layouts without hacks, floats, or JavaScript-based layout libraries. From the classic Holy Grail layout to modern dashboard designs, you'll learn the patterns that power the web.

## Learning Objectives
1. Plan a complete website layout hierarchy using CSS Grid for page structure
2. Combine CSS Grid for macro-layout and Flexbox for micro-layout components
3. Create responsive layouts that adapt without media queries using `minmax()` and `auto-fill`
4. Implement common layout patterns: Holy Grail, dashboard, landing page, documentation, e-commerce
5. Build sticky headers, sticky sidebars, and sticky footers with `position: sticky` and Flexbox
6. Create equal-height columns using CSS Grid alignment
7. Design responsive navigation bars that collapse gracefully
8. Implement card grids that auto-fill available space
9. Handle overflow and scrolling in content regions
10. Build production-ready page layouts with semantic HTML elements

## Theory

### The Macro/Micro Layout Strategy
The most effective approach to website layout is a layered one:

1. **Macro (Page-level)**: Use CSS Grid to define the major regions — header, nav, main content, sidebar, footer
2. **Meso (Section-level)**: Use CSS Grid or Flexbox within each region for internal structure
3. **Micro (Component-level)**: Use Flexbox for individual components — card rows, nav links, button groups

This separation of concerns keeps your CSS organized and each layout method doing what it does best.

### The Holy Grail Layout
The Holy Grail layout consists of a full-width header, a footer, and three columns (navigation, main content, aside) in between. The main content column should be flexible while side columns are fixed-width. The footer should stay at the bottom even when content is short (sticky footer).

```css
.holy-grail {
  display: grid;
  grid-template-areas:
    "header header header"
    "nav    main   aside"
    "footer footer footer";
  grid-template-columns: 220px 1fr 220px;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}
```

### CSS Grid for Page Structure
CSS Grid excels at page layout because:
- You define rows AND columns simultaneously
- Named grid areas make the layout readable in CSS
- The `fr` unit distributes available space fractionally
- `minmax()` creates responsive tracks with minimum/maximum bounds
- `auto-fill` and `auto-fit` create responsive grids without media queries
- `grid-template-rows: auto 1fr auto` with `min-height: 100vh` creates the sticky footer pattern

### Flexbox for Components
Within each grid area, Flexbox handles:
- **Navigation**: Aligning logo, links, and CTA button on the same line
- **Card rows**: Creating wrapping card layouts with `flex-wrap: wrap`
- **Header elements**: Spacing between logo, search, and user menu
- **Footer links**: Distributing link groups horizontally or vertically
- **Media objects**: Aligning images with text content

### The Sticky Footer Pattern
The sticky footer keeps the footer at the bottom of the viewport when content is short, and pushes it down when content is long. Using Flexbox:

```css
body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
main {
  flex: 1; /* Takes all available space */
}
```

Using CSS Grid:

```css
body {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}
```

### Responsive Patterns Without Media Queries
Modern CSS enables responsive layouts without a single media query:

1. **`minmax()` with `auto-fill`**: `grid-template-columns: repeat(auto-fill, minmax(250px, 1fr))` — creates as many columns as fit
2. **`clamp()` for fluid typography**: `font-size: clamp(1rem, 2.5vw, 2rem)` — scales between min and max
3. **`flex-wrap: wrap` with `flex-basis`**: `flex: 1 1 300px` — items wrap when they don't fit
4. **`min()` and `max()` for containers**: `width: min(90%, 1200px)` — responsive width with max

## Syntax and Code Examples

### Holy Grail Layout with CSS Grid
```css
.page-layout {
  display: grid;
  grid-template-areas:
    "header header header"
    "nav    main   aside"
    "footer footer footer";
  grid-template-columns: 220px 1fr 280px;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  gap: 0;
}

header { grid-area: header; }
nav    { grid-area: nav; }
main   { grid-area: main; }
aside  { grid-area: aside; }
footer { grid-area: footer; }

/* Responsive: stack on mobile */
@media (max-width: 768px) {
  .page-layout {
    grid-template-areas:
      "header"
      "nav"
      "main"
      "aside"
      "footer";
    grid-template-columns: 1fr;
  }
}
```

### Dashboard Layout
```css
.dashboard {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: 64px 1fr;
  grid-template-areas:
    "sidebar header"
    "sidebar main";
  min-height: 100vh;
}

.sidebar {
  grid-area: sidebar;
  background: #1e293b;
  color: #fff;
  padding: 1rem;
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
}

.dashboard-header {
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  background: #fff;
  border-bottom: 1px solid #e2e8f0;
}

.dashboard-main {
  grid-area: main;
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}
```

### Responsive Navigation Bar
```css
.navbar {
  display: flex;
  align-items: center;
  padding: 0 2rem;
  height: 64px;
  background: #fff;
  border-bottom: 1px solid #e2e8f0;
  gap: 2rem;
}

.navbar .logo {
  font-size: 1.5rem;
  font-weight: 700;
  flex-shrink: 0;
}

.navbar .nav-links {
  display: flex;
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.navbar .cta {
  margin-left: auto;
  flex-shrink: 0;
}

/* Mobile hamburger — hide links, show menu button */
.nav-toggle {
  display: none;
}

@media (max-width: 640px) {
  .navbar .nav-links {
    display: none; /* Toggle with JS */
  }
  .nav-toggle {
    display: block;
  }
}
```

### Full Landing Page
```css
.landing {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;
}

.hero-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 80vh;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.feature-card .icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  margin-bottom: 0.5rem;
}
```

### Documentation Layout with Sidebar
```css
.doc-layout {
  display: grid;
  grid-template-columns: 280px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header  header  header"
    "sidebar content toc"
    "footer  footer  footer";
  min-height: 100vh;
  gap: 0;
}

.sidebar {
  grid-area: sidebar;
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  padding: 1.5rem;
  border-right: 1px solid #e2e8f0;
  background: #f8fafc;
}

.content {
  grid-area: content;
  padding: 2rem 3rem;
  max-width: 800px;
}

.toc {
  grid-area: toc;
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  padding: 1.5rem;
  font-size: 0.875rem;
}
```

## Visual Explanation

```
Common Website Layout Patterns:

Holy Grail:                 Dashboard:
┌──────────────────────┐    ┌────────┬─────────────────┐
│       Header         │    │        │    Header       │
├──────┬───────┬───────┤    │  Side  ├─────────────────┤
│ Nav  │ Main  │ Aside │    │  bar   │                 │
│      │       │       │    │        │     Main        │
├──────┴───────┴───────┤    │        │     Content     │
│       Footer         │    │        │                 │
└──────────────────────┘    └────────┴─────────────────┘

Landing Page:               Documentation:
┌──────────────────────┐    ┌────────┬────────┬───────┐
│       Hero           │    │ Header │ Header │ Header│
│  Centered Content    │    ├────────┼────────┼───────┤
├──────────────────────┤    │ Side   │ Content│  TOC  │
│                      │    │  bar   │        │       │
│  Features Grid       │    │(sticky)│        │(sticky)│
│  ┌──┐ ┌──┐ ┌──┐     │    │        │        │       │
│  │  │ │  │ │  │     │    ├────────┼────────┼───────┤
│  └──┘ └──┘ └──┘     │    │ Footer │ Footer │ Footer│
├──────────────────────┤    └────────┴────────┴───────┘
│       Footer         │
└──────────────────────┘
```

## Common Mistakes
1. **Using Flexbox for everything**: Flexbox is one-dimensional. For page-level layouts with rows AND columns, use CSS Grid
2. **Forgetting `min-height: 100vh`**: Without it, short pages leave empty space above the footer
3. **Over-nesting grid containers**: One grid at the page level is usually enough; avoid grids inside grids inside grids
4. **Not considering mobile first**: Start with the single-column layout, then add grid columns for wider screens
5. **Using fixed widths that don't adapt**: Use `minmax()`, `clamp()`, `fr`, and `%` for fluid sizing
6. **Ignoring content overflow**: Set `overflow: auto` on content areas that might have too much content
7. **Mixing grid and flex at the wrong level**: Grid for page layout, flex for component layout — don't reverse them
8. **Not using semantic HTML**: Use `<header>`, `<nav>`, `<main>`, `<aside>`, `<footer>` instead of generic `<div>`s
9. **Sticky positioning without constraints**: `position: sticky` needs explicit `top`, `bottom`, `left`, or `right` to work
10. **Forgetting `gap` for spacing**: Using margins between grid/flex items creates spacing bugs — use `gap`

## Best Practices
1. **Start with HTML structure first** — layout follows content, not the other way around
2. **Use CSS Grid for the page skeleton**, Flexbox for component interiors
3. **Set `min-height: 100vh`** on the top-level grid container for full-page layouts
4. **Use `grid-template-areas`** for readable, self-documenting layouts
5. **Use `auto-fill`/`auto-fit` with `minmax()`** for responsive grids without media queries
6. **Keep nesting to 2-3 levels** — deeper nesting is hard to debug and maintain
7. **Use `max-width` with `margin: 0 auto`** for content containers to prevent overly wide text lines
8. **Add `gap` for consistent spacing** — avoid margin hacks between flex/grid items
9. **Use sticky positioning for sidebars and headers** — it's CSS-native and performs well
10. **Add responsive breakpoints at content thresholds**, not device sizes
11. **Use `clamp()` for fluid typography** that scales with the viewport
12. **Test layouts with real content at multiple zoom levels**

## Accessibility Considerations
- Use semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<aside>`, `<footer>`) — they provide landmarks for screen reader navigation
- Maintain logical DOM order — CSS Grid placement (via `grid-area` or `order`) changes visual order but NOT screen reader order
- Ensure keyboard navigation follows the visual reading order
- Sticky headers and sidebars should not obscure content — test at different zoom levels
- Skip links (`<a href="#main-content">Skip to content</a>`) are essential for keyboard users
- Navigation must be keyboard-operable: Tab, Enter, Escape for menus
- Use `aria-current="page"` on the current navigation link
- Card grids should maintain a logical reading order (top-to-bottom, left-to-right)
- Ensure sufficient contrast between text and background in all layout regions
- Content reordering on mobile should not change the semantic order
- Test all layouts with screen readers (NVDA, VoiceOver, JAWS)

## Performance Considerations
- CSS Grid and Flexbox layouts are GPU-accelerated and highly performant
- Avoid deeply nested grid containers — each grid creates a new formatting context
- `position: sticky` is composited and performs better than JavaScript-based scroll listeners
- Use `contain: layout style paint` on isolated components to limit repaint scope
- Too many grid lines (100+) can impact initial layout performance — keep grids reasonable
- `auto-fill`/`auto-fit` recalculates on resize — fine for typical viewport changes
- Avoid `box-shadow` on many grid items simultaneously — it can cause paint bottlenecks
- Use `content-visibility: auto` on long pages to defer rendering of off-screen sections
- Lazy-load images below the fold with `loading="lazy"`
- CSS containment with `contain: layout` prevents layout recalculations from propagating outside the container

## Browser Compatibility

| Feature | Chrome | Edge | Firefox | Safari | Opera | IE |
|---|---|---|---|---|---|---|
| CSS Grid (full) | 57+ | 16+ | 52+ | 10.1+ | 44+ | No (IE 10/11 have old spec) |
| `grid-template-areas` | 57+ | 16+ | 52+ | 10.1+ | 44+ | Partial (-ms-) |
| `fr` unit | 57+ | 16+ | 52+ | 10.1+ | 44+ | No |
| `repeat()` | 57+ | 16+ | 52+ | 10.1+ | 44+ | No |
| `minmax()` | 57+ | 16+ | 52+ | 10.1+ | 44+ | No |
| `auto-fill`/`auto-fit` | 57+ | 16+ | 52+ | 10.1+ | 44+ | No |
| `gap` (Grid) | 57+ | 16+ | 52+ | 10.1+ | 44+ | No |
| `gap` (Flexbox) | 84+ | 84+ | 63+ | 14.1+ | 70+ | No |
| Flexbox (full) | 29+ | 12+ | 28+ | 9+ | 17+ | 11 (partial) |
| `position: sticky` | 56+ | 16+ | 32+ | 6.1+ | 43+ | No |
| `clamp()` | 79+ | 79+ | 75+ | 13.1+ | 66+ | No |
| `min()`/`max()` | 79+ | 79+ | 75+ | 11.1+ | 66+ | No |
| `contain` | 52+ | 79+ | 69+ | 15.2+ | 39+ | No |
| `content-visibility` | 85+ | 85+ | 108+ | 15.4+ | 71+ | No |

## Summary Notes
- **Macro/Micro approach**: CSS Grid for page structure, Flexbox for components
- **Holy Grail layout**: `grid-template-areas` with header/nav/main/aside/footer
- **Sticky footer**: `min-height: 100vh` + `grid-template-rows: auto 1fr auto` or Flexbox `flex: 1`
- **Responsive grids**: `repeat(auto-fit, minmax(250px, 1fr))` creates adaptive column layouts
- **Fluid typography**: `clamp()` for text that scales between minimum and maximum sizes
- **Auto margins**: `margin-left: auto` pushes items to the right in Flexbox containers
- **Sticky positioning**: Use `position: sticky` with `top: 0` for headers/sidebars — no JavaScript needed
- **Semantic HTML**: Use `<header>`, `<nav>`, `<main>`, `<aside>`, `<footer>` for accessibility and SEO
- **Mobile first**: Start with single-column layouts, add complexity for wider screens
- **Content over layout**: Let the content determine the layout, not the reverse
- **Keep it shallow**: Max 2-3 levels of nesting for maintainable CSS
- **Test early, test often**: Use browser DevTools to inspect grid and flex layouts
