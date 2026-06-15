# Professional CSS: Performance Optimization

## Table of Contents
1. [Introduction](#introduction)
2. [Learning Objectives](#learning-objectives)
3. [Theory](#theory)
4. [Syntax](#syntax)
5. [Common Mistakes](#common-mistakes)
6. [Best Practices](#best-practices)
7. [Accessibility Considerations](#accessibility-considerations)
8. [Performance Considerations](#performance-considerations)
9. [Browser Compatibility](#browser-compatibility)
10. [Summary Notes](#summary-notes)

## Introduction
CSS performance optimization affects page load times, rendering speed, and user experience. Well-optimized CSS reduces file sizes, minimizes render-blocking, and ensures smooth animations. This module covers techniques to audit and improve CSS performance. In the modern web, CSS is often one of the largest render-blocking resources — a single large stylesheet can delay the first paint by hundreds of milliseconds. Understanding how browsers parse, apply, and render CSS is essential for building fast, responsive websites.

## Learning Objectives
1. Measure CSS performance impact
2. Minimize CSS file size
3. Reduce render-blocking CSS
4. Optimize selector performance
5. Use performant animation properties
6. Implement critical CSS
7. Use content-visibility for lazy rendering
8. Optimize font loading
9. Audit CSS coverage
10. Implement CSS code-splitting
11. Understand the Critical Rendering Path
12. Use performance profiling tools (Lighthouse, Chrome DevTools)

## Theory

### CSS Performance Factors
| Factor | Impact | Optimization |
|--------|--------|-------------|
| File size | Download time | Minification, gzip, tree-shaking |
| Render blocking | First paint delay | Critical CSS, media queries |
| Selector matching | Style calculation | Avoid universal selectors |
| Animation properties | Frame rate | Use transform/opacity |
| Font loading | Text visibility | font-display, preload |
| Unused CSS | Download waste | Coverage analysis, purge |

### Critical Rendering Path
1. **HTML parsed → DOM**: The browser constructs the Document Object Model from HTML bytes.
2. **CSS parsed → CSSOM**: CSS bytes are parsed into the CSS Object Model. This step blocks rendering because the browser needs to know all styles before painting.
3. **DOM + CSSOM = Render Tree**: The browser combines DOM and CSSOM into a render tree that includes only visible elements.
4. **Layout → Paint → Composite**: The browser calculates geometry (layout), fills pixels (paint), and layers them together (composite).

Every byte of CSS must be downloaded, parsed, and applied before the first paint. This is why CSS is called a "render-blocking resource" — the browser holds the initial render until the CSSOM is fully constructed.

### How Selector Matching Works
Browsers match CSS selectors **right-to-left**. For example, `.sidebar a` is interpreted as "find all `<a>` elements, then check if they are inside `.sidebar`." This means the rightmost part of the selector (the key selector) determines matching performance:
- `a {}` — fast (single element check)
- `.sidebar a {}` — slower (must check every `<a>` for ancestry)
- `.sidebar ul li a span {}` — much slower (deep traversal)

In practice, modern browsers are extremely fast at selector matching — it's rarely the bottleneck. But in large DOMs (10,000+ elements), overly complex selectors can add measurable overhead during style recalculation.

### The Cost of Layout Thrashing
When JavaScript reads layout properties (like `offsetHeight`, `getComputedStyle`) and then writes to the DOM, it forces synchronous layout recalculations — known as **layout thrashing**. While primarily a JavaScript concern, CSS animations and transitions that trigger layout properties (width, height, top, left) cause similar performance degradation because they force the browser to re-layout on every frame.

## Syntax

```css
/* Critical CSS (inlined in <head>) */
<style>
  .header { position: fixed; top: 0; width: 100%; }
  .hero { height: 100vh; background: #0055CC; color: white; }
</style>

/* Non-critical loaded async */
<link rel="preload" href="styles.css" as="style" onload="this.rel='stylesheet'">

/* Content visibility for off-screen sections */
.lazy-section { content-visibility: auto; contain-intrinsic-size: 500px; }

/* Performant animation */
.animated {
  transform: translateX(100px);
  opacity: 0.5;
  transition: transform 0.3s, opacity 0.3s;
}

/* CSS containment for isolating subtrees */
.isolate {
  contain: layout style paint;
}

/* Will-change for proactive compositing (use sparingly) */
.smooth-slide {
  will-change: transform;
}

/* Media-query-based code splitting */
<link rel="stylesheet" href="print.css" media="print">
<link rel="stylesheet" href="mobile.css" media="(max-width: 768px)">

/* @supports for progressive loading of advanced features */
@supports (display: grid) {
  @import url('grid-layout.css');
}
```

### Critical CSS Extraction in Practice
Critical CSS refers to the styles needed to render above-the-fold content. Tools like Critical, Penthouse, or the Chrome Lighthouse bot can automatically extract these:

```bash
# Using the critical CLI tool
npx critical index.html --base . --inline --extract
```

The extracted CSS is inlined into the `<head>`, and the full stylesheet is loaded asynchronously:

```html
<head>
  <style>
    /* Inlined critical CSS — everything needed for initial viewport */
    .header { ... }
    .hero { ... }
    .nav { ... }
  </style>
  <link rel="preload" href="styles.css" as="style" onload="this.rel='stylesheet'">
  <noscript><link rel="stylesheet" href="styles.css"></noscript>
</head>
```

### CSS Code-Splitting Patterns
Instead of serving one monolithic CSS file, split CSS by route, component, or media type:

```css
/* Route-based splitting (with webpack/Rollup/Vite) */
/* home-page.css */
/* about-page.css */
/* product-page.css */

/* Media-based splitting */
<link rel="stylesheet" href="base.css"> <!-- Always loads -->
<link rel="stylesheet" href="desktop.css" media="(min-width: 1024px)">
<link rel="stylesheet" href="print.css" media="print">
```

Media-query-based splitting is clever — the browser downloads all stylesheets but only applies them when the media query matches, preventing render-blocking for non-matching stylesheets.

## Common Mistakes
1. **Loading all CSS in `<head>` without splitting**: A single 200KB stylesheet blocks rendering until fully downloaded. Split by route, component, or media type.
2. **Too many unused CSS rules**: Legacy projects often accumulate dead CSS from deleted components, refactored layouts, or A/B test variants. Run coverage audits regularly.
3. **Animating layout-triggering properties**: Properties like `width`, `height`, `top`, `left`, and `margin` trigger layout recalculation on every frame, causing jank. Use `transform` instead.
4. **Overly specific selectors causing recalc**: Deeply nested selectors force the browser to evaluate more ancestry checks during style recalculation.
5. **Loading web fonts with `font-display: block`**: This causes invisible text (FOIT) for up to 3 seconds. Use `font-display: swap` or `font-display: optional`.
6. **No CSS minification in production**: Unminified CSS includes whitespace, comments, and verbose syntax that inflates file size by 30-50%.
7. **Large CSS files without critical CSS extraction**: Sending 100KB of CSS for above-the-fold content that only needs 5KB delays first paint significantly.
8. **`@import` statements blocking rendering**: `@import` inside CSS files causes sequential loading — the imported file doesn't start downloading until the parent CSS is parsed.

## Best Practices
1. **Extract and inline critical CSS**: Above-the-fold styles should be inlined in `<head>` for instant rendering.
2. **Use `content-visibility: auto`** for below-fold content to skip rendering until the element scrolls near the viewport.
3. **Minify CSS in production**: Use cssnano, clean-css, or framework build tools to strip whitespace and optimize syntax.
4. **Use code-splitting for route-specific CSS**: In component frameworks, lazy-load styles with the component using dynamic imports.
5. **Preload key stylesheets**: For above-the-fold stylesheets that can't be inlined, use `<link rel="preload">` to hint the browser.
6. **Use `font-display: swap` for web fonts**: Ensure text remains visible during font loading to prevent FOIT (Flash of Invisible Text).
7. **Audit coverage regularly**: Use Chrome DevTools Coverage tab to find and remove unused CSS.
8. **Avoid `@import` — use `<link>`**: Link tags enable parallel downloads; `@import` forces sequential loading.
9. **Use `contain` property**: CSS containment (`contain: layout style paint`) tells the browser that a subtree's layout, style, and paint are independent, preventing style/layout changes inside from affecting the outside.
10. **Leverage HTTP/2 multiplexing**: With HTTP/2, serving many small CSS files is often faster than one large file because multiple files can be downloaded in parallel over a single connection.

## Accessibility Considerations
- **Never hide critical content behind slow-loading CSS**: Users with slow connections or assistive technology should get a functional (if less styled) experience immediately.
- **`font-display: swap` benefits low-vision users**: They may zoom in, and `font-display: swap` ensures text remains visible and selectable while web fonts load.
- **Avoid removing focus styles for "performance"**: Some developers remove `:focus` outlines thinking they cause repaints. This makes the site unusable for keyboard-only users. Use `:focus-visible` instead.
- **Content jumping (CLS)**: Use `contain-intrinsic-size` with `content-visibility` to reserve space for off-screen content. Without it, lazy-rendered sections cause Cumulative Layout Shift, which is disorienting for all users but especially for screen-magnifier users.
- **Prefer reduced motion**: Wrap all animations in `@media (prefers-reduced-motion: no-preference)` to respect user accessibility settings.

## Performance Considerations
- **Critical CSS reduces first paint by 15-30%**: Lighthouse explicitly measures this as the "Eliminate render-blocking resources" audit.
- **`transform`/`opacity` animations run on GPU compositor**: These are the only two properties that guarantee compositor-only updates. Every other animated property triggers layout and/or paint.
- **`content-visibility` can reduce initial render cost by 50%+**: For long-scrolling pages (documentation, social feeds, product listings), this is the single biggest performance win.
- **Selector matching is rarely the bottleneck** (modern engines): Blink and WebKit match selectors at microsecond speed. Focus on reducing CSS file size and eliminating unused rules instead.
- **CSS file size should be < 100KB for good performance**: After gzip, aim for 15-30KB. Monitor this with bundler analysis tools.
- **Use `will-change` sparingly**: Each `will-change` declaration creates a new compositor layer, consuming GPU memory. Overuse can cause performance degradation on mobile devices.
- **Avoid expensive paint properties**: `filter`, `backdrop-filter`, `clip-path`, and complex `box-shadow` values are paint-intensive. On low-end devices, they can drop frame rates during scrolling.
- **Consider `@media (hover: hover)` for hover animations**: Touch devices don't have a hover state, so hover animations are wasted work. Only apply hover transitions on devices that support hover.

```css
/* Hover transitions only on hover-capable devices */
@media (hover: hover) {
  .card:hover {
    transform: translateY(-2px);
    transition: transform 0.2s ease;
  }
}
```

## Browser Compatibility
| Feature | Chrome | Firefox | Safari | Edge | IE |
|---------|--------|---------|--------|------|-----|
| `content-visibility` | 85+ | — | — | 85+ | — |
| `contain-intrinsic-size` | 95+ | 107+ | 17+ | 95+ | — |
| `will-change` | 49+ | 48+ | 9.1+ | 79+ | — |
| `transform` (2D) | 36+ | 16+ | 9+ | 79+ | 10+ (with -ms-) |
| `opacity` (animations) | 4+ | 4+ | 3.1+ | 79+ | 9+ |
| `font-display` | 49+ | 46+ | 11+ | 79+ | — |
| `@supports` | 28+ | 22+ | 9+ | 79+ | — |
| `contain` | 52+ | 69+ | 15.4+ | 79+ | — |
| `prefers-reduced-motion` | 74+ | 63+ | 10.1+ | 79+ | — |
| CSS Grid | 57+ | 52+ | 10.1+ | 79+ | — |

`content-visibility` requires Chrome 85+, with no Firefox or Safari support as of early 2025. `contain-intrinsic-size` is similarly limited. Critical CSS works universally — it's just standard CSS inlined into HTML. For broader `content-visibility` support, pair it with a fallback that renders the content normally in unsupported browsers. Always test performance optimizations in Chrome DevTools' Performance panel and Lighthouse to verify improvements across target browsers.

## Summary Notes
- CSS is render-blocking — critical CSS should be inlined in `<head>` for instant first paint
- Use `content-visibility: auto` for off-screen sections to defer rendering
- Animate only `transform` and `opacity` — these run on the GPU compositor thread
- Eliminate unused CSS with coverage tools (DevTools Coverage, PurgeCSS)
- `@import` blocks rendering — use `<link>` instead for parallel downloads
- Minify and gzip CSS in production to reduce file size by 60-80%
- Use `font-display: swap` for web fonts to prevent invisible text (FOIT)
- Regular performance audits (Lighthouse, WebPageTest) prevent CSS bloat
- Route-based CSS splitting reduces initial payload for single-page applications
- `will-change` should be used sparingly — it consumes GPU memory on every layer
- CSS `contain` property isolates subtrees for independent rendering
- HTTP/2 enables efficient loading of many small CSS files
- Always test on real devices — DevTools throttling approximates but doesn't match real-world conditions
- A performance budget (e.g., "CSS < 15KB gzipped") keeps teams accountable

---

## Visual Explanation

```
Critical Rendering Path — Waterfall
=====================================

HTML        DOM           CSSOM         Render Tree      Layout       Paint     Composite
Bytes       Construction  Construction  Construction     Geometry     Fill       Layers
┌─────┐     ┌────────┐   ┌────────┐    ┌─────────┐     ┌────────┐  ┌────────┐ ┌────────┐
│HTML │────→│ DOM    │   │ CSSOM │────→│ Render  │────→│ Layout │─→│ Paint  │─→│Composit│
│bytes│     │        │──→│        │    │ Tree    │     │(reflow)│  │(raster)│  │        │
└─────┘     └────────┘   └────────┘    └─────────┘     └────────┘  └────────┘ └────────┘
                ↑              ↑
           Parse starts    ⚠️ RENDER BLOCKING
           immediately     (CSS must be fully
                           parsed before paint)

Timeline:
[HTML DL] [HTML Parse─────] [CSS Parse─] [RenderTree] [Layout] [Paint] [Composite]
            ↑                            ↑
       DOM construction            First Paint =
       begins                       "Above the Fold"

Optimization Levers — Where each technique helps:
┌────────────────────────────────────────────────────────────────────┐
│ Technique               │ Skips / Optimizes                        │
├────────────────────────────────────────────────────────────────────┤
│ Critical CSS (inline)   │ Eliminates CSS round-trip before paint   │
│ content-visibility:auto │ Skips Layout/Paint for off-screen        │
│ transform / opacity     │ Skips Layout + Paint (GPU composite only)│
│ font-display: swap      │ Text visible during font load (no FOIT)  │
│ CSS containment         │ Isolates subtrees from layout recalc     │
│ Media query splitting   │ Non-matching CSS is non-render-blocking  │
│ @import avoidance       │ Prevents sequential CSS loading          │
└────────────────────────────────────────────────────────────────────┘

CSS Selector Matching (right-to-left)
═══════════════════════════════════════

Browser reads selectors right-to-left:
  .sidebar ul li a span
                └──┬──┘     ← Key selector: find all <span> first
                    └──────── Then check ancestry chain
                              (slower in large DOMs)

  .sidebar a
         └┬┘      ← Key selector: find all <a>, check parent
                     (faster — fewer elements to check)
```
