# CSS Units

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
CSS units define the measurements used throughout stylesheets — for sizing elements, spacing, typography, borders, and more. Choosing the right unit for each context is one of the most important skills in CSS. The wrong choice can break layouts at different screen sizes, ignore user accessibility preferences, or create maintenance headaches. CSS provides a rich set of units: absolute units (px, cm, in), relative units (%, em, rem, ch, ex), viewport units (vw, vh, vmin, vmax, svw, lvh, dvw), and fractional units (fr). Each serves a specific purpose, and understanding their differences is the foundation of responsive, accessible, and maintainable CSS.

## Learning Objectives
1. Distinguish between absolute and relative CSS units and know when to use each
2. Use `em`, `rem`, `%`, `vw`, `vh`, `vmin`, `vmax`, `fr`, `ch`, and `lh` for various contexts
3. Choose appropriate units for typography, layout, spacing, and responsive design
4. Understand viewport units and their behavior with mobile browser chrome
5. Use modern viewport variants: `svh`, `lvh`, `dvh`, `svw`, `lvw`, `dvw`
6. Avoid common pitfalls like `em` compounding and `100vh` mobile issues
7. Combine units with `calc()`, `min()`, `max()`, and `clamp()` for advanced sizing
8. Apply the `ch` unit for optimal line length (measure) in typography
9. Understand the `fr` unit in CSS Grid context
10. Implement fluid typography using `clamp()` with viewport units

## Theory

### Absolute Units
Absolute units represent fixed physical measurements. They do not scale with the viewport or parent element.

| Unit | Name | Common Use |
|---|---|---|
| `px` | Pixel | Screen-based sizing (borders, shadows, images) |
| `cm` | Centimeter | Print stylesheets |
| `mm` | Millimeter | Print stylesheets |
| `in` | Inch (2.54cm) | Print stylesheets |
| `pt` | Point (1/72 of an inch) | Print typography |
| `pc` | Pica (12pt) | Print typography |

**When to use `px`**: Borders (`border: 1px solid`), box-shadows, media query breakpoints, icon sizing, and any measurement that should NOT scale with user preferences. Avoid `px` for typography and layout spacing — these should use relative units.

### Relative Units
Relative units scale based on context, making them essential for responsive and accessible design.

**`%` (Percentage)**: Relative to the parent element's value for the same property. For `width`, percentage is relative to the parent's content width. For `padding` and `margin`, percentage is relative to the **width** of the containing block (even for top/bottom margins).

**`em`**: Relative to the parent element's `font-size`. If a parent has `font-size: 16px`, then `1em = 16px` for direct children. However, `em` compounds — if you nest three elements each with `font-size: 0.8em`, the innermost text becomes `16 × 0.8 × 0.8 × 0.8 = 8.19px`. This compounding is the most common `em` pitfall.

**`rem`** (Root EM): Relative to the root element (`<html>`) `font-size`. This does NOT compound — `1rem` is always the root font-size regardless of nesting. This makes `rem` the best choice for typography and spacing in most cases.

**`ch`**: Relative to the width of the "0" (zero) character in the element's font. Useful for setting measure (line length) — typically `max-width: 60ch` to 80ch for optimal readability.

**`ex`**: Relative to the height of the "x" character in the element's font. Less commonly used but can be useful for vertical alignment.

### Viewport Units
Viewport units are relative to the browser's viewport dimensions. They're powerful for full-screen sections, hero banners, and responsive typography.

| Unit | Relative To | Example |
|---|---|---|
| `vw` | 1% of viewport width | `50vw` = half the viewport width |
| `vh` | 1% of viewport height | `100vh` = full viewport height |
| `vmin` | Smaller of `vw` and `vh` | `50vmin` = half the smaller dimension |
| `vmax` | Larger of `vw` and `vh` | `50vmax` = half the larger dimension |

**Modern Viewport Variants**: Mobile browsers (Safari, Chrome Android) have dynamic toolbars that appear/disappear as the user scrolls. The classic `vh` unit doesn't account for this, causing `100vh` elements to be taller than the visible area. Three new units solve this:

- **`svh` / `svw`** (Small viewport): The smallest possible viewport size (when browser chrome is showing)
- **`lvh` / `lvw`** (Large viewport): The largest possible viewport size (when chrome is hidden)
- **`dvh` / `dvw`** (Dynamic viewport): Updates dynamically as chrome shows/hides — the most accurate but causes layout shifts

### The `fr` Unit (CSS Grid)
The `fr` unit represents a fraction of the available space in a CSS Grid container. It only works within `grid-template-columns` and `grid-template-rows`:

```css
grid-template-columns: 1fr 2fr 1fr;
/* 4 equal parts: first column 25%, second 50%, third 25% */
```

Unlike `%`, `fr` only distributes **available** space after fixed-width content and `gap` are accounted for. This prevents overflow and creates truly flexible grids.

### The `lh` Unit
`lh` is relative to the line-height of the current element. Useful for setting heights that match text lines, like in a code editor or text input.

### CSS Math Functions
Modern CSS allows combining units with mathematical functions:

- **`calc()`**: `calc(100% - 80px)` — mix units in arithmetic
- **`min()`**: `min(100%, 1200px)` — use the smaller value
- **`max()`**: `max(300px, 50%)` — use the larger value
- **`clamp()`**: `clamp(1rem, 2.5vw, 2rem)` — constrain between min and max

These functions eliminate the need for many media queries.

## Syntax and Code Examples

### Typography with rem
```css
html {
  font-size: 100%; /* Respects user's browser font-size setting (usually 16px) */
}

h1 { font-size: 2.5rem; }      /* 40px at default */
h2 { font-size: 2rem; }         /* 32px */
h3 { font-size: 1.75rem; }      /* 28px */
h4 { font-size: 1.5rem; }       /* 24px */
p  { font-size: 1rem; }         /* 16px */
small { font-size: 0.875rem; }  /* 14px */

/* Spacing with rem for consistent vertical rhythm */
h1, h2, h3, h4, p {
  margin-bottom: 1.5rem;
}
```

### Fluid Typography with clamp()
```css
/* Heading that scales between 1.5rem and 3rem */
h1 {
  font-size: clamp(1.5rem, 1rem + 3vw, 3rem);
}

/* Body text that scales slightly */
p {
  font-size: clamp(0.95rem, 0.9rem + 0.25vw, 1.125rem);
}
```

### Optimal Line Length with ch
```css
article {
  max-width: 70ch; /* ~70 characters per line — optimal readability */
  margin: 0 auto;
}

/* Narrow measure for long-form content */
.long-read {
  max-width: 65ch;
}

/* Wide measure for technical content */
.technical-content {
  max-width: 80ch;
}
```

### Full-Height Sections with Viewport Units
```css
/* Hero section — always fills the viewport */
.hero {
  height: 100dvh; /* Dynamic viewport height — accounts for mobile chrome */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* Full-width banner */
.banner {
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  /* Centers and extends to full viewport width even in a constrained container */
}
```

### Responsive Container with min/max
```css
.container {
  width: min(90%, 1200px);
  margin-inline: auto;
}

/* Content with constraints */
.sidebar {
  width: max(250px, 20%);
  /* Never smaller than 250px, but at least 20% of parent */
}

/* Card grid with responsive sizing */
.card {
  flex: 1 1 clamp(250px, 30%, 400px);
}
```

### Spacing with rem vs em
```css
/* Use rem for consistent spacing site-wide */
.container {
  padding: 1.5rem;   /* 24px at default font-size */
  gap: 1rem;         /* 16px */
  border-radius: 0.5rem; /* 8px */
}

/* Use em for component-relative spacing */
.btn {
  padding: 0.5em 1em; /* Scales with button's font-size */
  border-radius: 0.25em;
}

.btn-large {
  font-size: 1.25rem; /* Button scales, padding scales with it */
}
```

### CSS Grid with fr Unit
```css
.layout {
  display: grid;
  grid-template-columns: 250px 1fr 250px;
  /* Fixed sidebars, flexible center */
  gap: 1.5rem;
  padding: 1.5rem;
}

/* Asymmetric grid */
.asymmetric {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  /* First column is 2× the size of the others */
  gap: 1rem;
}
```

### calc() with Mixed Units
```css
/* Full-width content with padding */
.content-area {
  width: calc(100% - 3rem);
  margin: 0 1.5rem;
}

/* Aspect ratio box */
.box {
  width: 100%;
  height: calc(width * 0.5625); /* 16:9 aspect ratio */
}

/* Fluid spacing */
.section {
  padding: calc(2rem + 2vw);
}
```

## Visual Explanation

```
CSS Unit Decision Tree:

What are you sizing?
         │
         ├── Typography? ──────→ rem (primary)
         │                         ├── ch (line length)
         │                         └── clamp() (fluid text)
         │
         ├── Layout (width/grid)? ─→ % (fluid)
         │                              ├── fr (grid tracks)
         │                              ├── minmax() (responsive)
         │                              └── clamp() (constrained)
         │
         ├── Full-screen element? ──→ dvh, dvw (dynamic)
         │                              ├── vh, vw (standard)
         │                              └── svh, lvh (specific)
         │
         ├── Spacing/Margin? ────→ rem (consistent)
         │                            └── em (component-scoped)
         │
         ├── Borders/Shadows? ──→ px (fixed, no scaling)
         │
         └── Print? ──────────→ pt, cm, in, mm

Viewport Size Illustration:

┌──────────────────────────────────┐
│  Toolbar (hides on scroll)       │ ← Browser chrome
├──────────────────────────────────┤
│                                  │
│         100vh (classic)          │ ← Includes hidden chrome area
│                                  │
│         100dvh (dynamic)         │ ← Adjusts as chrome shows/hides
│                                  │
│         100svh (small)           │ ← Smallest viewport (chrome visible)
├──────────────────────────────────┤
│  Toolbar area (fixed)            │
└──────────────────────────────────┘

Mobile browser:  100vh > 100dvh > 100svh
```

## Common Mistakes
1. **`em` compounding in nested elements**: `font-size: 0.8em` inside another `0.8em` element compounds, making text smaller than expected. Use `rem` for predictable sizing.
2. **Using `px` for typography**: This overrides user font-size preferences and breaks browser zoom. Use `rem` for accessible text.
3. **`100vh` on mobile browsers**: Does not account for dynamic browser chrome — the bottom of the page is hidden. Use `100dvh` instead.
4. **Mixing `%` and fixed units without `calc()`**: `width: 100% - 80px` does NOT work — use `calc(100% - 80px)`.
5. **Using `em` for `width` when you mean `rem`**: `em` for width is relative to the element's font-size, not the parent's width — surprising behavior.
6. **Forgetting that percentage `padding`/`margin` is based on parent width**: Even `padding-top: 50%` is 50% of the parent's width, not height.
7. **Using `vw`/`vh` for font-size alone**: Text sized with `vw` doesn't zoom when the user zooms in. Combine with `rem` via `clamp()`.
8. **Assuming `fr` works like `%`**: `fr` distributes free space after accounting for gaps and fixed tracks — it's not a percentage of the total width.
9. **Setting `html { font-size: 10px }` for easy rem math**: This breaks user font-size preferences. Use `62.5%` (which equals 10px at default 16px) instead, or stick with the default.
10. **Not using `ch` for line lengths**: Text lines that are too long (140+ characters) are hard to read. Set `max-width: 60-80ch`.

## Best Practices
1. **Use `rem` for typography and spacing** — it respects user preferences and doesn't compound
2. **Use `%` or `fr` for layout widths** — flexible, fluid, responsive by nature
3. **Use `px` only for borders, shadows, and fine details** that shouldn't scale
4. **Use `dvh`/`dvw` for full-viewport elements** — accounts for mobile browser chrome
5. **Use `ch` for optimal line length** — `max-width: 65-75ch` for comfortable reading
6. **Use `clamp()` for fluid typography** — scales between min and max without media queries
7. **Use `calc()` for mixing units** — e.g., `calc(100% - 2rem)`
8. **Use `em` for component-scoped spacing** — padding/margin that scales with the component's font-size
9. **Prefer `min()`/`max()` over media queries** for responsive constraints
10. **Set `html { font-size: 100% }`** — respect the user's browser setting
11. **Avoid setting a fixed `font-size` on `html`** — let users control their default
12. **Test at multiple zoom levels** — especially 200% zoom for accessibility compliance

## Accessibility Considerations
- **Always use relative units for text** (`rem`, `em`, `%`) so text scales with browser zoom and user font-size settings
- **Never set `font-size` in `px` on body or html** — this blocks user font-size adjustments in some browsers
- **`vw`-sized text does not scale with browser zoom** — always use `clamp()` to set a minimum `rem` value
- **Line length matters for readability**: `max-width: 60-80ch` (WCAG 1.4.8 recommends 80 characters or fewer)
- **`rem`-based spacing ensures consistent proportions** when users increase default font size
- **Test at 200% browser zoom** — all content must remain visible and functional (WCAG 1.4.4)
- **Avoid using `em` for `font-size` in deeply nested components** — compounding can make text unreadably small
- **`dvh` can cause layout shifts** as the user scrolls on mobile — use `svh` or `lvh` for critical elements
- **Viewport units (`vw`, `vh`) may cause horizontal scrolling** on some devices — use `overflow-x: hidden` with caution
- **Provide sufficient touch targets** — minimum 44×44px using `rem` so they scale with user preferences

## Performance Considerations
- Unit selection has no direct performance impact — the browser handles all unit calculations efficiently
- `calc()` with mixed units is resolved during layout and has minimal overhead
- `clamp()` is optimized — no performance concern even with many instances
- `dvh` causes the browser to recalculate on viewport changes (scroll, toolbar show/hide) — use `svh` or `lvh` if layout shifts are problematic
- `vw`/`vh` units are efficient — they're recalculated on resize, which is already an expensive operation
- `em`/`rem` calculations are fast and cacheable by the browser
- `fr` unit calculation is part of the CSS Grid layout algorithm — no additional cost
- For animations, prefer units that browsers can composite (px, rem, %, vw) — avoid calc() in animation properties
- `min()`/`max()` are resolved at computed-value time — no runtime overhead
- Modern browsers use sub-pixel rendering for all units, so precision is consistent

## Browser Compatibility

| Unit | Chrome | Edge | Firefox | Safari | Opera | IE |
|---|---|---|---|---|---|---|
| `px` | 1+ | 12+ | 1+ | 1+ | 3.5+ | 4+ |
| `%` | 1+ | 12+ | 1+ | 1+ | 3.5+ | 4+ |
| `em` | 1+ | 12+ | 1+ | 1+ | 3.5+ | 4+ |
| `rem` | 4+ | 12+ | 3.6+ | 4.1+ | 11.6+ | 9+ |
| `vw` / `vh` | 20+ | 12+ | 19+ | 6+ | 20+ | 9+ (partial) |
| `vmin` | 26+ | 12+ | 19+ | 7+ | 20+ | 9+ (`vm`) |
| `vmax` | 26+ | 12+ | 19+ | 7+ | 20+ | No |
| `ch` | 27+ | 12+ | 1+ | 7+ | 20+ | 9+ |
| `ex` | 1+ | 12+ | 1+ | 1+ | 3.5+ | 4+ |
| `fr` | 57+ | 16+ | 52+ | 10.1+ | 44+ | No |
| `lh` | 88+ | 88+ | 96+ | 15.4+ | 74+ | No |
| `svh` / `lvh` / `dvh` | 108+ | 108+ | 101+ | 15.4+ | 94+ | No |
| `svw` / `lvw` / `dvw` | 108+ | 108+ | 101+ | 15.4+ | 94+ | No |
| `calc()` | 26+ | 12+ | 16+ | 7+ | 15+ | 9+ (partial) |
| `min()` / `max()` | 79+ | 79+ | 75+ | 11.1+ | 66+ | No |
| `clamp()` | 79+ | 79+ | 75+ | 13.1+ | 66+ | No |
| `cqw` / `cqh` (container) | 105+ | 105+ | 110+ | 16+ | 91+ | No |

## Summary Notes
- **Absolute units** (`px`, `pt`, `cm`): Fixed size, use sparingly (borders, shadows, print)
- **Relative units** (`%`, `em`, `rem`, `ch`): Scale based on context — essential for responsive and accessible design
- **Viewport units** (`vw`, `vh`, `vmin`, `vmax`, `dvh`, `svh`, `lvh`): Scale with the browser viewport
- **Fractional unit** (`fr`): CSS Grid only — distributes available space proportionally
- **`rem` is preferred for typography** — respects user preferences, doesn't compound like `em`
- **`ch` for line length** — `max-width: 70ch` for optimal readability
- **`dvh`/`dvw` for mobile-friendly full-viewport** — accounts for dynamic browser chrome
- **`clamp()` for fluid sizing** — `clamp(min, preferred, max)` handles responsive scaling
- **`calc()` for mixed-unit math** — `calc(100% - 2rem)` combines units safely
- **Never use `px` for text** — it blocks accessibility and browser zoom
- **`fr` ≠ `%`** — `fr` distributes remaining space after fixed tracks and gaps
- **Test at 200% zoom** — WCAG 2.1 SC 1.4.4 requires text scaling without loss of content
