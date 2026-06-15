# Professional CSS: Debugging

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
CSS debugging is the systematic process of identifying and fixing layout, styling, and rendering issues. Modern browser DevTools provide powerful features for inspecting, debugging, and profiling CSS. This module covers tools and techniques for efficient CSS debugging. Unlike JavaScript (where errors produce stack traces), CSS failures are often silent — the browser simply doesn't render what you expected, without any error message. Developing a structured debugging workflow is essential for every CSS professional.

## Learning Objectives
1. Use browser DevTools for CSS inspection
2. Debug layout issues (Flexbox, Grid)
3. Debug specificity and cascade problems
4. Use CSS containment for isolating issues
5. Debug responsive breakpoints
6. Debug animation and transition issues
7. Use CSS sourcemaps for preprocessor debugging
8. Debug cross-browser CSS issues
9. Use browser developer tools
10. Debug print styles
11. Use CSS Overview panel for audits
12. Debug z-index and stacking context issues

## Theory

### Common CSS Issues
| Issue | Symptom | Debugging Approach |
|-------|---------|-------------------|
| Specificity | Styles not applying | Check computed styles, cascade |
| Layout | Overflow, misalignment | Enable Flexbox/Grid overlays |
| Responsive | Broken at certain widths | Device toolbar, media query inspector |
| Inheritance | Unexpected colors/fonts | Check inherited tab |
| z-index | Stacking issues | 3D view, stacking context overlay |
| Shorthand conflict | Unexpected margin/padding | Box model diagram |
| Missing units | Property ignored | Styles panel warnings |

### Debugging Workflow
1. **Inspect**: Identify the element with the issue using the Elements/Inspector panel
2. **Analyze**: Check computed styles, box model, source, and cascade layers
3. **Isolate**: Remove conflicting styles temporarily, use `all: initial` or `contain: layout style paint`
4. **Fix**: Apply correct style with proper specificity and source order
5. **Verify**: Test across viewports, browsers, and device types

### Understanding the Computed Styles Panel
The Computed Styles panel is the most valuable debugging tool — it shows the final value for every CSS property after the cascade, inheritance, and specificity have been resolved. For each property, it lists all declarations that attempted to set it, ordered by precedence, with the winning declaration highlighted and the overridden ones crossed out. This single view reveals:
- Whether your selector is specific enough
- Whether another rule is overriding your declaration
- Whether the property is being inherited or falling back to the browser default
- Whether the value was invalid (shown with a warning triangle)

### The Box Model Visualizer
Chrome DevTools shows a color-coded box model diagram when you select an element: blue for content, green for padding, yellow for border, orange for margin. If your element is wider or taller than expected, this diagram immediately shows which layer is contributing the extra space. Common findings:
- Unexpected padding on a child element
- A border that wasn't accounted for in width calculations
- Negative margin collapsing in unexpected ways
- `box-sizing: content-box` (default) causing width + padding + border to exceed the container

### Stacking Context Debugging
z-index issues are among the most confusing CSS bugs. The key insight is that z-index only works on positioned elements (position relative, absolute, fixed, or sticky), and each positioned element can create a **new stacking context**. The 3D View in Chrome DevTools (toggleable from the DevTools menu) renders the page as a 3D scene, with elements on different z-planes clearly separated. This visual representation makes it obvious which stacking context is winning and why.

```css
/* Common stacking context creators */
position: relative;          /* z-index works */
position: absolute;          /* Creates new context */
position: fixed;             /* Creates new context */
opacity: less than 1;        /* Creates new context */
transform: any;              /* Creates new context */
filter: any;                 /* Creates new context */
will-change: any;            /* Creates new context */
contain: paint;              /* Creates new context */
mix-blend-mode: any;         /* Creates new context */
isolation: isolate;          /* Creates new context */
```

## Syntax

```css
/* CSS debugging techniques */
* { outline: 1px solid red; }         /* See all element boxes */
.element { background: rgba(255,0,0,0.1) !important; }  /* Override test */

/* Using CSS containment to isolate issues */
.isolate { contain: layout style paint; }

/* Debug print styles */
@media print {
  .debug-info { display: none; }
}

/* Visual debug grid overlay */
.debug-grid {
  background-image: linear-gradient(0deg, rgba(255,0,0,0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,0,0,0.1) 1px, transparent 1px);
  background-size: 20px 20px;
}

/* Temporarily show all element backgrounds */
.debug-bg * { background: rgba(0, 255, 0, 0.05) !important; }

/* Debug margin collapse */
.debug-margin {
  border-top: 1px solid transparent; /* Prevents margin collapse */
}

/* Highlight text overflow */
.debug-overflow {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.debug-overflow::after {
  content: "…";
  color: red;
  font-weight: bold;
}
```

### Using CSS sourcemaps for Preprocessor Debugging
When debugging SCSS, Less, or PostCSS, sourcemaps map the compiled CSS back to the original source file and line number. In DevTools, the Sources panel shows the original `.scss` or `.less` file when sourcemaps are correctly generated:

```bash
# Dart Sass sourcemap generation
sass --style=expanded --source-map styles.scss styles.css
```

In DevTools, you'll see the original file path and line number in the Styles panel, allowing you to edit the preprocessor source and see the results via Workspaces.

### Key Browser DevTools Features by Browser

| Feature | Chrome | Firefox | Edge | Safari |
|---------|--------|---------|------|--------|
| Flexbox overlay | ✅ | ✅ | ✅ | ✅ |
| Grid overlay | ✅ | ✅ (best) | ✅ | ✅ |
| 3D stacking view | ✅ | ❌ | ✅ | ❌ |
| CSS Overview | ✅ | ❌ | ✅ | ❌ |
| Container queries | ✅ | ✅ | ✅ | ✅ |
| Animation inspector | ✅ | ✅ | ✅ | ✅ |
| Workspaces | ✅ | ✅ | ✅ | ✅ |
| Coverage tab | ✅ | ❌ | ✅ | ❌ |
| CSS sourcemaps | ✅ | ✅ | ✅ | ✅ |

## Common Mistakes
1. **Over-relying on `!important` for debugging**: Adding `!important` temporarily "works" but then stays in the codebase permanently, creating maintenance problems. Instead, inspect the cascade to understand why a rule isn't applying.
2. **Not using computed styles panel**: Guessing why a style isn't applied wastes time. The computed panel shows exactly which declarations win and why.
3. **Ignoring inheritance**: A child element may appear unstyled because it inherits a value from a parent. Check the "Inherited" section in DevTools.
4. **Not checking for conflicting CSS**: Multiple rules can target the same element — check all sources, not just the one you wrote.
5. **Not using device mode for responsive issues**: Media query breakpoints can't be reliably tested by resizing the browser window — use the device toolbar for accurate testing.
6. **Not checking browser compatibility**: A property may be supported in your browser but not in the target browser. Always check caniuse.com.
7. **Forgetting to clear cache when debugging**: Hard-refreshing (Ctrl+F5) bypasses the cache for the current page. Without it, you may be debugging a stale stylesheet.
8. **Debugging in the wrong environment**: Styles may differ between development (with sourcemaps, hot-reload) and production (minified, concatenated). Always check both.
9. **Not checking print styles**: Print stylesheets often break silently — test with DevTools rendering mode or Print Preview.
10. **Assuming the problem is in CSS when it's in HTML**: A missing closing tag, incorrect nesting, or invalid HTML can cause unexpected CSS behavior. Validate HTML first.

## Best Practices
1. **Use DevTools computed styles panel**: It's the most informative single view for debugging CSS cascade conflicts.
2. **Toggle properties to identify conflicts**: Check and uncheck declarations in DevTools to see which one is causing the issue.
3. **Use CSS custom properties for easy debugging**: Define values in one place and change them globally through DevTools to test variations.
4. **Add temporary colorful borders**: `outline: 1px solid red;` on all elements reveals layout structure and overflow issues instantly.
5. **Use Workspace for persistent edits**: Map local files to DevTools for direct editing and saving without leaving the browser.
6. **Check all states (hover, focus, active, disabled)**: Use DevTools' force-state feature (`:hov` panel) to inspect pseudo-classes.
7. **Use CSS overview panel for audits**: The CSS Overview panel (Chrome) shows unused declarations, color contrast issues, and media query usage.
8. **Validate HTML before CSS**: Invalid HTML can cause bizarre CSS behavior. Run your page through the W3C validator first.
9. **Use `outline` instead of `border` for debug outlines**: `outline` doesn't affect layout, so it won't shift elements when you add it.
10. **Keep a debug stylesheet**: Maintain a `_debug.scss` partial with utility classes for common debug patterns, and never ship it to production.

```css
/* Debug utility classes — never ship these */
.debug-outline * { outline: 1px solid rgba(255, 0, 0, 0.3); }
.debug-outline-2 * { outline: 2px solid rgba(0, 255, 0, 0.3); }

.debug-grid { /* Shows 10px grid */ }
.debug-log::before { content: "Logged: " attr(data-debug); }

.debug-dimensions {
  position: relative;
}
.debug-dimensions::after {
  content: attr(class) " — w:" attr(data-width) " h:" attr(data-height);
  position: absolute;
  top: 100%;
  left: 0;
  background: yellow;
  color: black;
  font-size: 12px;
  white-space: nowrap;
  z-index: 99999;
}
```

## Accessibility Considerations
- **Never ship debug tools to production**: Debug outlines, highlighting, and overlay elements can confuse screen reader users. Ensure debug utilities are stripped from production builds.
- **Use `:focus-visible` to debug focus issues**: Check that focus indicators are visible and high-contrast in all interactive elements.
- **Check color contrast while debugging**: When you add temporary background colors or outlines for debugging, ensure you restore the original accessible contrast before shipping.
- **Test with assistive technology**: Some CSS issues only manifest when using screen readers, zoom tools, or voice navigation. Include accessibility testing in your debugging workflow.
- **Respect reduced motion during debugging**: If you're debugging animations, test with `prefers-reduced-motion: reduce` to ensure the fallback state is functional.
- **Test keyboard navigation**: Use Tab, Shift+Tab, and arrow keys to navigate the page. Focus order and visible focus indicators are critical for keyboard-only users.

## Performance Considerations
- **Remove debug styles before measuring performance**: Debug outlines, overlays, and forced states can skew rendering performance measurements. Use Incognito/Private mode for clean profiling.
- **Use Performance panel for paint debugging**: The "Paint" and "Rendering" tabs in DevTools show repaint regions, layer borders, and FPS counters — invaluable for identifying performance regressions.
- **Clear console regularly**: Console log statements (especially `console.log` inside resize handlers) can cause layout thrashing if they trigger style reads.
- **Profile with production builds**: Development builds with sourcemaps, hot-reload, and unminified CSS don't reflect production performance. Profile production builds for accurate data.
- **Test on low-end devices**: A 60fps animation on a desktop MacBook may run at 15fps on a mid-range Android phone. Use DevTools CPU throttling to simulate lower-end hardware.

## Browser Compatibility
| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| Flexbox overlays | 57+ | 52+ | 12+ | 79+ |
| Grid overlays | 57+ | 52+ | 12+ | 79+ |
| 3D View | 57+ | — | — | 79+ |
| CSS Overview | 96+ | — | — | 96+ |
| Container Queries | 105+ | 110+ | 16+ | 105+ |
| Coverage tab | 59+ | — | — | 79+ |
| Workspaces | 57+ | 55+ | — | 79+ |
| Sourcemaps | 57+ | 52+ | 12+ | 79+ |
| Animation inspector | 57+ | 52+ | 12+ | 79+ |

Cross-browser debugging is often necessary because different browser engines render CSS subtly differently. Firefox Developer Edition has the best CSS Grid debugging tools, Chrome has the most comprehensive performance profiling features, and Safari's Web Inspector excels at debugging WebKit-specific rendering. For consistent debugging across browser engines, use BrowserStack, Sauce Labs, or LambdaTest.

## Summary Notes
- **Computed styles panel** shows final applied values — the single most useful debugging view
- Toggle properties in DevTools to identify which declaration is causing the issue
- Use **Flexbox/Grid overlays** for layout debugging — they show gaps, alignment, and track sizes
- Check **box model diagram** for sizing issues — padding and border often cause unexpected overflow
- Use **3D view** for z-index debugging — it visualizes stacking contexts as physical layers
- `all: initial` or `all: unset` resets an element for isolation testing
- Temporary colored borders (`outline`) reveal element boundaries without affecting layout
- Clear cache (Ctrl+F5) when debugging stylesheet changes — stale CSS is a common trap
- Use sourcemaps for preprocessor debugging — edit SCSS directly in DevTools
- **CSS Overview panel** shows summary statistics: unused declarations, colors, contrast issues
- Validate HTML first — many CSS issues stem from invalid HTML
- Test across browsers, not just your development browser
- Keep a dedicated debug stylesheet that is never shipped to production
- Always test keyboard navigation and focus states alongside visual debugging

---

## Visual Explanation

```
CSS Debugging Workflow — Step by Step
========================================

1. INSPECT
   ┌─────────────────────────────────────────┐
   │ Elements Panel → Select the element     │
   │ with the issue                          │
   └────────────────┬────────────────────────┘
                    ▼
2. ANALYZE
   ┌─────────────────────────────────────────┐
   │ ┌─────────────────────────────────────┐ │
   │ │ Computed Styles Panel              │ │
   │ │ ── Shows FINAL value after cascade │ │
   │ │ ✓ Winning declaration (highlighted)│ │
   │ │ ✗ Overridden rules (crossed out)   │ │
   │ │ ⚠ Invalid values (warning)         │ │
   │ └─────────────────────────────────────┘ │
   │ ┌─────────────────────────────────────┐ │
   │ │ Box Model Diagram                  │ │
   │ │   margin   (orange)  ← ─────────┐ │ │
   │ │   border   (yellow)  ← actual   │ │ │
   │ │   padding  (green)   ← size     │ │ │
   │ │   content  (blue)    ← breakdown│ │ │
   │ └─────────────────────────────────────┘ │
   └────────────────┬────────────────────────┘
                    ▼
3. ISOLATE
   ┌─────────────────────────────────────────┐
   │ Techniques:                             │
   │ • all: initial  → reset element         │
   │ • contain: layout style paint → isolate │
   │ • outline: 1px solid red → show bounds  │
   │ • Toggle declarations in DevTools       │
   └────────────────┬────────────────────────┘
                    ▼
4. FIX
   ┌─────────────────────────────────────────┐
   │ Apply correct style with proper         │
   │ specificity, source order, and layer    │
   └────────────────┬────────────────────────┘
                    ▼
5. VERIFY
   ┌─────────────────────────────────────────┐
   │ • Responsive mode + Device Toolbar      │
   │ • Keyboard navigation + Tab order       │
   │ • Cross-browser (Chrome/Firefox/Safari) │
   │ • Print preview                         │
   │ • Coverage audit (remove dead CSS)      │
   └─────────────────────────────────────────┘

Stacking Context Debugging (z-index)
══════════════════════════════════════

┌────────────────────────────────────────────────────┐
│  z-index: 9999  ← Seems high but...               │
│  ┌──────────────────────────────────────────────┐  │
│  │ Parent creates new stacking context          │  │
│  │ (via transform, opacity<1, or position)       │  │
│  │  ┌────────────────┐    ┌──────────────────┐  │  │
│  │  │ z-index: 1     │    │ z-index: 10      │  │  │
│  │  │ (inside parent)│    │ (outside parent)  │  │  │
│  │  │ HIDDEN behind  │    │ VISIBLE on top   │  │  │
│  │  └────────────────┘    └──────────────────┘  │  │
│  └──────────────────────────────────────────────┘  │
│                                                     │
│  Fix: Check if parent creates a stacking context   │
│  Use 3D View in Chrome DevTools to visualize       │
└─────────────────────────────────────────────────────┘

Common Stacking Context Triggers:
position: relative | absolute | fixed  | sticky
opacity < 1        | transform | filter | will-change
contain: paint     | isolation: isolate | mix-blend-mode
```
