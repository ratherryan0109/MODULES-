# Building Layouts with Flexbox

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
This module applies all the Flexbox concepts from previous modules — flex container, flex-direction, flex-wrap, justify-content, align-items, align-content, and the flex shorthand — to build real-world, production-ready layouts. You'll learn how to combine these properties to create responsive navigation bars, card grids, sticky footers, hero sections, sidebar + content layouts, media objects, form layouts, and product listing grids. Each pattern demonstrates a specific combination of Flexbox properties that solves a common layout challenge. By the end of this module, you'll have a library of proven Flexbox patterns that you can reuse and adapt in any project, and you'll understand when Flexbox is the right tool versus when CSS Grid would be more appropriate.

## Learning Objectives
1. Build a responsive navigation bar with logo, links, and CTA button using `justify-content: space-between` and auto margins
2. Create a card grid that wraps responsively using `flex-wrap: wrap` and `flex: 1 1 300px`
3. Implement the Holy Grail layout with Flexbox and a sticky footer
4. Build a sticky footer pattern using `min-height: 100vh`, `flex-direction: column`, and `flex: 1`
5. Create a centered hero section using `flex-direction: column`, `justify-content: center`, and `align-items: center`
6. Implement a sidebar + content layout using `flex: 0 0 250px` for the sidebar and `flex: 1` for content
7. Build a media object (image + text) pattern using `flex: none` for the image and `flex: 1` for text
8. Create a form layout with aligned labels and inputs using flex alignment
9. Build a product listing grid with filtering and sorting controls
10. Combine multiple Flexbox patterns in a single page layout

## Theory

### Flexbox Pattern Library
Flexbox is not a "one-size-fits-all" solution — different layout challenges require different combinations of Flexbox properties. The patterns in this module represent the most common and useful Flexbox recipes. Each pattern has a specific purpose and a specific set of properties that make it work.

### The Core Patterns

1. **Navigation Bar**: `display: flex` + `align-items: center` + `justify-content: space-between` or auto margins
2. **Card Grid**: `display: flex` + `flex-wrap: wrap` + `gap` + `flex: 1 1 <basis>` on children
3. **Sticky Footer**: `display: flex` + `flex-direction: column` + `min-height: 100vh` + `flex: 1` on main
4. **Centered Hero**: `display: flex` + `flex-direction: column` + `justify-content: center` + `align-items: center`
5. **Sidebar + Content**: `display: flex` + `flex: 0 0 <width>` on sidebar + `flex: 1` on content
6. **Media Object**: `display: flex` + `gap` + `flex: none` on media + `flex: 1` on body
7. **Input Group**: `display: flex` + `flex: 1` on input + `flex: none` on button
8. **Pagination**: `display: flex` + `justify-content: center` + `gap` for evenly spaced page numbers

### The "Flex: 1" Workhorse
The `flex: 1` pattern is the key to almost every flexible layout. It tells an item to take all remaining space along the main axis:

```css
/* Sidebar + Content */
.layout { display: flex; }
.sidebar { flex: 0 0 250px; }  /* Fixed 250px */
.content { flex: 1; }          /* Takes rest of space */
```

### The Responsive Card Pattern
`flex: 1 1 300px` is the most important single pattern for responsive card grids:

```css
.card {
  flex: 1 1 300px;
  /* 
    - Can grow (flex-grow: 1) to fill available space
    - Can shrink (flex-shrink: 1) when space is tight
    - Ideal width is 300px (flex-basis: 300px)
    - Items wrap to new lines when there isn't 300px + gap available
  */
}
```

### Auto Margins
`margin-left: auto` and `margin-right: auto` are flexbox superpowers. An auto margin on a flex item absorbs all free space on that side, pushing the item (and everything after it) to the opposite side:

```css
.nav {
  display: flex;
}
.logo { /* stays at start */ }
.login { margin-left: auto; } /* pushed to end */
```

## Syntax and Code Examples

### Complete Navigation Bar
```html
<nav class="navbar">
  <div class="logo">Brand</div>
  <ul class="nav-links">
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Services</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
  <button class="cta">Sign Up</button>
</nav>
```

```css
.navbar {
  display: flex;
  align-items: center;
  padding: 0 2rem;
  height: 64px;
  background: #1e293b;
  color: #fff;
  gap: 2rem;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  flex: none;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links a {
  color: #94a3b8;
  text-decoration: none;
  transition: color 0.2s;
}

.nav-links a:hover {
  color: #fff;
}

.cta {
  margin-left: auto;
  padding: 0.5rem 1.25rem;
  background: #3b82f6;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  flex: none;
}

@media (max-width: 640px) {
  .navbar {
    flex-wrap: wrap;
    height: auto;
    padding: 1rem;
  }
  .nav-links {
    order: 1; /* Move below logo on mobile */
    width: 100%;
    justify-content: center;
  }
}
```

### Responsive Card Grid
```css
.card-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding: 2rem;
}

.card {
  flex: 1 1 300px;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
  border: 1px solid #e2e8f0;
}

.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.card-description {
  color: #64748b;
  line-height: 1.5;
  flex: 1; /* Pushes footer to bottom */
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  margin-top: 1rem;
  border-top: 1px solid #e2e8f0;
}
```

### Sticky Footer Layout
```css
/* Full page with footer always at bottom */
html, body {
  height: 100%;
  margin: 0;
}

body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.page-header {
  padding: 1rem 2rem;
  background: #1e293b;
  color: #fff;
}

.page-content {
  flex: 1; /* Expands to fill all available vertical space */
  padding: 2rem;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
}

.page-footer {
  padding: 2rem;
  background: #1e293b;
  color: #94a3b8;
  text-align: center;
}
```

### Centered Hero Section
```css
.hero {
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

.hero h1 {
  font-size: clamp(2rem, 5vw, 4rem);
  margin-bottom: 1rem;
  max-width: 800px;
}

.hero p {
  font-size: 1.25rem;
  max-width: 600px;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}
```

### Sidebar + Content Layout
```css
.app-layout {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  flex: 0 0 280px;
  background: #1e293b;
  color: #fff;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.sidebar.sticky {
  position: sticky;
  top: 0;
  height: 100vh;
}

.main-area {
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
}

@media (max-width: 768px) {
  .app-layout {
    flex-direction: column;
  }
  .sidebar {
    flex: none;
    width: 100%;
    position: static;
    height: auto;
  }
}
```

### Media Object Pattern
```css
.media {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  padding: 1rem;
  border-bottom: 1px solid #e2e8f0;
}

.media-image {
  flex: none;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
}

.media-body {
  flex: 1;
  min-width: 0;
}

.media-title {
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.media-description {
  color: #64748b;
  line-height: 1.5;
}

/* Nested media object — for comment threads */
.media-nested {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  margin-left: 3rem;
  border-left: 2px solid #e2e8f0;
}
```

### Input Group
```css
.input-group {
  display: flex;
  gap: 0;
  max-width: 500px;
}

.input-group input {
  flex: 1;
  padding: 0.75rem 1rem;
  border: 2px solid #d1d5db;
  border-right: none;
  border-radius: 8px 0 0 8px;
  font-size: 1rem;
  outline: none;
  min-width: 0;
}

.input-group input:focus {
  border-color: #3b82f6;
}

.input-group button {
  flex: none;
  padding: 0.75rem 1.5rem;
  background: #3b82f6;
  color: #fff;
  border: 2px solid #3b82f6;
  border-radius: 0 8px 8px 0;
  cursor: pointer;
  font-size: 1rem;
  white-space: nowrap;
}
```

### Product Listing Grid
```css
.product-listing {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding: 2rem;
}

.product-card {
  flex: 1 1 250px;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  border: 1px solid #f1f5f9;
  transition: box-shadow 0.2s;
}

.product-card:hover {
  box-shadow: 0 10px 15px rgba(0,0,0,0.1);
}

.product-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.product-info {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.product-name {
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.product-price {
  color: #3b82f6;
  font-weight: 700;
  font-size: 1.125rem;
  margin-top: auto;
}

.product-actions {
  display: flex;
  gap: 0.5rem;
  padding: 1rem;
  padding-top: 0;
}
```

### Pagination
```css
.pagination {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  padding: 2rem;
  list-style: none;
}

.pagination li {
  flex: none;
}

.pagination a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  color: #334155;
  text-decoration: none;
  transition: all 0.2s;
}

.pagination a:hover,
.pagination a.active {
  background: #3b82f6;
  color: #fff;
  border-color: #3b82f6;
}
```

## Visual Explanation

```
Patterns Quick Reference:

Navigation Bar:              Card Grid (wrapping):
┌──────────────────────┐    ┌──────┐ ┌──────┐ ┌──────┐
│ Logo  [a][a][a] [CTA]│    │ Card │ │ Card │ │ Card │
└──────────────────────┘    ├──────┤ ├──────┤ ├──────┤
                            │ Card │ │ Card │ │ Card │
Sticky Footer:              └──────┘ └──────┘ └──────┘
┌──────────────────────┐    
│ Header               │    Sidebar + Content:
├──────────────────────┤    ┌──────────┬──────────────────┐
│ Main (flex: 1)       │    │  Fixed   │                  │
│                      │    │  Sidebar │   Content        │
├──────────────────────┤    │  280px   │   (flex: 1)      │
│ Footer (always      │    │          │   Takes rest     │
│ at bottom)          │    └──────────┴──────────────────┘
└──────────────────────┘    

Centered Hero:              Media Object:
┌──────────────────────┐    ┌─────────┬──────────────────┐
│                      │    │  Image  │  Title            │
│     Centered         │    │  80×80  │  Description that │
│      Content         │    │         │  wraps naturally  │
│                      │    └─────────┴──────────────────┘
└──────────────────────┘
```

## Common Mistakes
1. **Over-nesting flex containers**: Too many nested flex containers make code unmanageable. Keep nesting to 2-3 levels. Use CSS Grid for the outermost page structure if needed.
2. **Using Flexbox for everything**: Flexbox is one-dimensional. Use CSS Grid for 2D layouts (full pages, dashboards, image galleries) and table-like data.
3. **Ignoring content priority**: Don't let flex layout push critical content off-screen. Set `min-width` on important content areas.
4. **Not using `gap`**: Relying on margins between flex items creates spacing bugs — especially with wrapping. Use `gap` instead.
5. **Forgetting `min-width: 0`**: Items won't shrink below their content size unless `min-width: 0` is set. This is the #1 cause of unexpected overflow.
6. **Not testing at different viewports**: Flexbox patterns that look great at 1200px may break at 360px. Always test responsive patterns.
7. **Using `height` instead of `min-height`**: Fixed heights prevent content from growing. Use `min-height` for flexible layouts.
8. **Complex responsive behavior without media queries**: While Flexbox handles many cases, some layouts still need media queries for major breakpoints.
9. **Not considering reading order**: `order`, `row-reverse`, and flex reordering can create confusing visual sequences that don't match DOM order.
10. **Applying Flexbox to inline content**: Text and inline elements inside a flex container become anonymous flex items — behavior may be unexpected.

## Best Practices
1. **Start with HTML structure first**, then apply Flexbox — layout follows content, not the reverse
2. **Use `flex: 1` for flexible items** and `flex: none` or `flex: 0 0 <size>` for fixed items
3. **Use `flex-wrap: wrap` for card grids** — let Flexbox handle the responsiveness
4. **Use auto margins** (`margin-left: auto`, `margin-right: auto`) for simple spacing within flex containers
5. **Set explicit `min-width` values** to prevent items from shrinking below usability
6. **Use `gap` for spacing** — never use margins between flex items
7. **Keep nesting to 2-3 levels maximum** — deeper nesting is a sign you should use CSS Grid
8. **Use `flex: 1 1 300px` for responsive cards** — the standard pattern for wrapping card grids
9. **Combine Flexbox with CSS Grid** — Grid for page structure, Flexbox for component interiors
10. **Use media queries only when necessary** — Flexbox `flex-wrap` handles many responsive cases
11. **Test all patterns at multiple viewport widths** — especially at 320px and 768px breakpoints
12. **Add `min-height: 100vh` for full-page layouts** — ensures the layout fills the viewport

## Accessibility Considerations
- Maintain logical DOM order; don't rely on `order` or flex reordering for meaningful content sequence
- Navigation bars must use semantic `<nav>` with proper `<ul>`/`<li>` structure
- Ensure keyboard focus order matches visual order — test with Tab navigation
- Card grids should maintain logical reading order (top-to-bottom, left-to-right in LTR)
- Test all layouts with a screen reader (NVDA, VoiceOver, JAWS)
- Sticky footers and headers should not obscure content — test at different zoom levels
- Skip links (`<a href="#main-content">Skip to content</a>`) are essential for keyboard users
- Hero sections must have sufficient color contrast — gradients can reduce contrast ratios
- Media objects should use `<img>` with `alt` text for images
- Product cards should use semantic headings (`<h2>`, `<h3>`) for product names
- Pagination should use `<nav>` with `aria-label="Pagination"` and `aria-current="page"` on the active page

## Performance Considerations
- All Flexbox patterns in this module are performant — built on the fast flex layout algorithm
- Card grids with 50+ items may have minor layout overhead — consider virtualization for very large lists
- Sticky positioning (`position: sticky`) is composited and performs better than JavaScript scroll listeners
- Use `will-change: transform` sparingly — only on animated flex items
- `flex-wrap: wrap` with many items recalcs on resize — typically negligible
- Avoid deeply nested Flexbox (4+ levels) for complex component hierarchies
- CSS containment (`contain: layout style`) can isolate flex containers for performance
- Lazy-load images in card grids with `loading="lazy"`
- Animating flex properties (flex-grow, flex-basis) triggers layout — prefer `transform` animations

## Browser Compatibility

| Pattern | Chrome | Edge | Firefox | Safari | Opera | IE |
|---|---|---|---|---|---|---|
| Flexbox (all patterns) | 29+ | 12+ | 28+ | 9+ | 17+ | 11 (partial) |
| `gap` in flex layouts | 84+ | 84+ | 63+ | 14.1+ | 70+ | No |
| `position: sticky` | 56+ | 16+ | 32+ | 6.1+ | 43+ | No |
| `flex-wrap: wrap` | 29+ | 12+ | 28+ | 9+ | 17+ | 11 |
| `flex: 1` shorthand | 29+ | 12+ | 20+ | 9+ | 17+ | 11 (partial) |
| `min-height: 100vh` | 20+ | 12+ | 18+ | 7+ | 12+ | 9+ |
| Auto margins in flex | 29+ | 12+ | 20+ | 9+ | 17+ | 11 |
| `order` | 29+ | 12+ | 20+ | 9+ | 17+ | 11 |

## Summary Notes
- **Flexbox is for 1D layouts** — rows or columns. Use CSS Grid for 2D page structures.
- **Key patterns**: Nav bar, card grid, sticky footer, hero section, sidebar+content, media object, input group, pagination
- **`flex: 1`** is the workhorse — makes an item take all remaining space
- **`flex: 1 1 300px`** is the responsive card pattern — auto-wrapping with ideal width
- **`flex-direction: column`** + `min-height: 100vh` + `flex: 1` on main = sticky footer
- **Auto margins** (`margin-left: auto`) push flex items to the end — great for nav CTAs
- **`gap`** replaces margin hacks for spacing between flex items
- **`min-width: 0`** is the fix for items that won't shrink properly
- **`flex-wrap: wrap`** + `flex: 1 1 <basis>` eliminates many media queries
- **`min-height: 100vh`** on full-page containers prevents short-page gaps
- Keep nesting to 2-3 levels max — beyond that, consider CSS Grid
- Combine Flexbox (components) with CSS Grid (page structure) for the most robust layouts
- Test all patterns with real content, varying viewport sizes, and screen readers
