# Module 10: CSS Height and Width

## Table of Contents
1. Introduction
2. Learning Objectives
3. Theory
   - Width and Height Properties
   - Auto Sizing Behavior
   - Percentage-Based Dimensions
   - Viewport Units (vw, vh, vmin, vmax)
   - Min and Max Constraints
   - Box-Sizing and Dimensions
   - Overflow Control
   - Intrinsic Sizing (min-content, max-content, fit-content)
   - Aspect Ratio
   - The `ch` and `lh` Units
4. Visual Explanation
5. Common Mistakes
6. Best Practices
7. Accessibility Considerations
8. Performance Considerations
9. Browser Compatibility
10. Summary Notes

## Introduction
Height and width control the dimensions of elements. CSS provides multiple ways to set sizes — fixed lengths, percentages, viewport units, auto-sizing, and constraints like min/max values. Understanding how browsers calculate element dimensions is fundamental to creating layouts that work across different screen sizes, content amounts, and user preferences.

Dimension management is one of the most practical and frequently encountered aspects of CSS. Every layout challenge — from creating full-height hero sections to ensuring images don't overflow their containers, from fluid typography to responsive card grids — depends on a solid understanding of how height and width work in CSS.

## Learning Objectives
By the end of this module, you will be able to:
- Set fixed and relative height/width values using various units
- Use min-width, max-width, min-height, max-height for constraints
- Understand auto sizing behavior for block and inline elements
- Use viewport units (vw, vh, vmin, vmax) effectively
- Apply percentage-based dimensions correctly
- Understand how box-sizing affects dimension calculations
- Handle overflow content with appropriate strategies
- Use intrinsic sizing keywords (min-content, max-content, fit-content)
- Create aspect-ratio-controlled elements
- Solve common dimension problems in responsive layouts

## Theory

### Width and Height Properties
CSS offers several unit types for specifying dimensions:

```css
/* Fixed (absolute) values */
width: 200px;
height: 300px;
width: 10cm;    /* Print layouts */
height: 5in;    /* Print layouts */

/* Percentage (relative to parent) */
width: 50%;
height: 100%;

/* Viewport units */
width: 100vw;         /* 100% of viewport width */
height: 100vh;        /* 100% of viewport height */
min-height: 100vh;    /* At least full viewport height */

/* Relative to font size */
width: 20em;    /* 20 × current font size */
height: 10rem;  /* 10 × root font size */

/* Auto (default — browser calculates) */
width: auto;
height: auto;
```

### Auto Sizing Behavior
When `width` or `height` is set to `auto` (the default), the browser calculates dimensions based on content:

**Block elements:**
- `width: auto` = fills available space (100% of containing block minus margins/padding/borders)
- `height: auto` = expands to fit content

**Inline elements:**
- `width: auto` = shrinks to fit content (cannot be specified manually)
- `height: auto` = shrinks to fit content (cannot be specified manually)

**Replaced elements (img, video, canvas):**
- `width: auto` = intrinsic width of the media
- `height: auto` = intrinsic height of the media

### Percentage-Based Dimensions

**Percentage width** is straightforward:
```css
.child {
  width: 50%; /* 50% of parent's width */
}
```

**Percentage height** has an important caveat:
```css
.parent {
  height: auto; /* Default — content-based height */
}
.child {
  height: 50%; /* This will NOT work as expected! */
  /* Percentage height requires parent to have an explicit height */
}
```

For percentage height to work, the parent must have an explicit height:
```css
.parent {
  height: 500px; /* Explicit height */
}
.child {
  height: 50%; /* = 250px ✓ */
}

/* Full viewport height trick */
.full-height {
  height: 100vh; /* Better than height: 100% for full-page sections */
}
```

**Percentage height chain:**
```css
html { height: 100%; }
body { height: 100%; }
.parent { height: 100%; }    /* All ancestors need explicit height */
.child { height: 50%; }      /* Now works */
```
This "100% height chain" is a common pattern for full-page layouts.

### Viewport Units
Viewport units are relative to the browser's viewport (the visible area):

```css
/* vw = viewport width, vh = viewport height */
width: 100vw;          /* 100% of viewport width */
height: 100vh;         /* 100% of viewport height */

/* vmin = smaller of vw and vh, vmax = larger */
width: 50vmin;         /* 50% of the smaller viewport dimension */
height: 50vmax;        /* 50% of the larger viewport dimension */
```

**Important notes about viewport units:**
- `100vw` includes the scrollbar width, which can cause horizontal scrollbars. Use `width: 100%` instead for most cases.
- `100vh` on mobile browsers includes the browser chrome (URL bar, toolbar), which can cause layout issues. The `dvh` (dynamic viewport height) and `svh` (small viewport height) units address this in modern CSS.
- `100dvh` = dynamic viewport height (changes as browser UI shows/hides)
- `100svh` = small viewport height (viewport excluding browser chrome)

```css
/* Modern full-height solution */
.hero {
  height: 100vh;        /* Fallback */
  height: 100dvh;       /* Modern — accounts for mobile browser chrome */
}
```

### Min and Max Constraints
Min/max properties set boundaries while allowing flexibility:
```css
.element {
  min-width: 200px;
  max-width: 800px;
  width: 100%;
  /* Starts at 100%, grows/shrinks between 200-800px */
}

.element {
  min-height: 100px;
  max-height: 500px;
  height: auto;
}
```

**Priority rules:**
- `min-width` always wins over `width` and `max-width`
- `max-width` wins over `width` but loses to `min-width`
- If `min-width` > `max-width`, `min-width` takes precedence

```css
.example {
  width: 500px;
  max-width: 100%;   /* On narrow screens, max-width overrides */
}

.example2 {
  min-width: 400px;
  max-width: 300px;  /* min-width wins — element is at least 400px */
}
```

### Box-Sizing and Dimensions
The `box-sizing` property changes how width/height are calculated:

```css
/* content-box (default) — width excludes padding and border */
box-sizing: content-box;
/* width: 200px + padding 20px + border 2px = 222px total */

/* border-box — width includes padding and border */
box-sizing: border-box;
/* width: 200px = content + padding + border, content shrinks to fit */

/* Universal recommendation */
*, *::before, *::after { box-sizing: border-box; }
```

### Overflow Control
When content exceeds specified dimensions, the `overflow` property controls what happens:
```css
overflow: visible;   /* Content overflows the box (default) */
overflow: hidden;    /* Content is clipped */
overflow: scroll;    /* Scrollbars always shown */
overflow: auto;      /* Scrollbars only when needed */

/* Individual axes */
overflow-x: hidden;
overflow-y: auto;
```

**Scrolling container pattern:**
```css
.scrollable-card {
  height: 300px;
  overflow-y: auto;  /* Vertical scrollbar appears when content > 300px */
}
```

### Intrinsic Sizing Keywords
CSS provides keywords for sizing based on content rather than the containing block:
```css
/* min-content: As small as possible without overflow */
width: min-content;     /* Width of the longest word/content */

/* max-content: As large as needed to fit all content on one line */
width: max-content;     /* No text wrapping — all content on one line */

/* fit-content: Acts like max-content up to a limit, then wraps */
width: fit-content(300px); /* max-content but capped at 300px */
```

**Practical use cases:**
```css
/* Tooltip that sizes to its content */
.tooltip {
  width: max-content;     /* Don't wrap text */
  max-width: 300px;       /* But don't exceed 300px */
}

/* Button that shrinks to content */
.btn-group {
  width: min-content;     /* Tightly wrap the buttons */
}
```

### Aspect Ratio
The `aspect-ratio` property creates dimension-ratio boxes:
```css
.video-container {
  width: 100%;
  aspect-ratio: 16 / 9;  /* Automatically calculates height */
}

.square {
  width: 100px;
  aspect-ratio: 1;        /* Equal width and height */
}
```

**Before `aspect-ratio`** (the padding-top hack):
```css
.legacy-ratio-box {
  width: 100%;
  padding-top: 56.25%;   /* 9/16 = 0.5625 for 16:9 */
  height: 0;
  position: relative;
}
```

### The `ch` and `lh` Units
- `ch`: Width of the "0" character in the element's font — useful for limiting line length
- `lh`: Height of one line — useful for line-clamping effects

```css
article {
  max-width: 65ch;     /* Optimal line length for readability (65 chars) */
}
```

## Visual Explanation
```
Auto Width Behavior:

  Block element (auto width):
  ┌──────────────────────────────────┐
  │  Fills available width           │
  │  ┌───── content ──────────────┐  │
  │  │                            │  │
  └──────────────────────────────────┘

  Inline element (auto width):
  ┌──────┐
  │fits  │  ← Shrinks to content
  │content│
  └──────┘

Box-Sizing Comparison:

  content-box:
  width: 300px
  ┌──────────────────────────────────────┐  ← margin
  │ ┌─ border ─────────────────────────┐ │
  │ │ ┌─ padding ────────────────────┐ │ │
  │ │ │ ┌─ content (300px) ───────┐ │ │ │
  │ │ │ │                         │ │ │ │
  │ │ │ └─────────────────────────┘ │ │ │
  │ │ └──────────────────────────────┘ │ │
  │ └──────────────────────────────────┘ │
  └──────────────────────────────────────┘
  Total width: 300 + padding*2 + border*2 + margin*2

  border-box:
  width: 300px
  ┌──────────────────────────────────────┐  ← margin
  │ ┌─ border (inside width) ──────────┐ │
  │ │ ┌─ padding (inside width) ─────┐ │ │
  │ │ │ ┌─ content (shrinks) ──────┐ │ │ │
  │ │ │ │                          │ │ │ │
  │ │ │ └──────────────────────────┘ │ │ │
  │ │ └───────────────────────────────┘ │ │
  │ └───────────────────────────────────┘ │
  └───────────────────────────────────────┘
  Total width: 300 + margin*2 (padding and border inside)
```

## Common Mistakes
1. **`height: 100%` doesn't work**: Percentage height needs the parent to have an explicit height. Add `height: 100vh` to the parent or use `min-height: 100vh`.
2. **Overflow hidden clipping too much**: `overflow: hidden` clips ALL content that exceeds dimensions. Use `overflow: auto` when content might grow.
3. **Forgetting box-sizing**: Default `content-box` adds padding and border to specified width, causing overflow. Always use `border-box`.
4. **Setting both `width` and `max-width`**: Width acts as a default; `max-width` overrides when the container is smaller. Understand the priority.
5. **`100vw` causing horizontal scrollbar**: Viewport scrollbars take up space. Use `width: 100%` (which excludes scrollbar space) instead of `100vw`.
6. **Not setting `height: auto` on responsive images**: Fixed-height images will distort when width changes. Always use `height: auto` for images.
7. **Assuming `min-height: 100vh` centers content**: It only sets minimum height — you need flexbox or other methods for vertical centering.
8. **Using viewport units on mobile**: `100vh` includes browser chrome on Chrome Android. Use `100dvh` or JavaScript-based solutions.
9. **Setting fixed heights on dynamic content**: Fixed heights cause overflow or empty space when content changes. Use `min-height` instead.

## Best Practices
- Use `box-sizing: border-box` globally (`*, *::before, *::after { box-sizing: border-box; }`)
- Use `max-width` with `width: 100%` for responsive containers
- Use `min-height: 100vh` instead of `height: 100vh` to allow content growth
- Always pair `max-width: 100%` with `height: auto` for responsive images
- Use `clamp()` for responsive font sizes: `font-size: clamp(1rem, 2vw, 2rem);`
- Use `aspect-ratio` instead of the padding-top hack for maintaining ratios
- Prefer intrinsic sizing (`fit-content`, `min-content`) for content-aware layouts
- For full-height sections, use `100dvh` with `100vh` fallback for mobile support
- Use `overflow: auto` instead of `overflow: scroll` to avoid permanent scrollbars

```css
/* Recommended responsive defaults */
* { box-sizing: border-box; }

img, video {
  max-width: 100%;
  height: auto;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
```

## Accessibility Considerations
- Fixed heights can cause text truncation when users zoom (up to 200% or 400%)
- `overflow: hidden` can hide content from users who zoom or use screen magnifiers
- Ensure content is accessible when zoomed to 200% without horizontal scrolling
- Avoid fixed heights on elements containing text — use `min-height` instead
- Viewport units don't account for zoom — text sized with `vw` may become too small at narrow widths
- Use `clamp()` with accessible minimum sizes (`clamp(16px, 2vw, 32px)`)
- Scrolling containers should have visible scrollbar indicators (don't hide scrollbars on Windows)

```css
/* Accessible zoom handling */
.content-card {
  min-height: auto;     /* Don't clip text */
  height: auto;          /* Allow growth */
  max-height: 60vh;      /* Constrain but allow scrolling */
  overflow-y: auto;      /* Enable scrolling if needed */
}
```

## Performance Considerations
- Setting explicit dimensions helps browsers avoid layout thrashing (repeated reflows)
- `width` and `height` changes trigger layout recalculation — batch dimension changes together
- Animated width/height changes are expensive — prefer `transform: scale()` for animations
- `100vw` and `100vh` can cause layout shifts when scrollbars appear/disappear
- Very large elements (wider than viewport) can impact scroll performance
- Images with explicit dimensions prevent content layout shifts (CLS) — good for Core Web Vitals

## Browser Compatibility
| Property | Chrome | Firefox | Safari | Edge | Opera | IE |
|----------|--------|---------|--------|------|-------|----|
| width / height | 1+ | 1+ | 1+ | 12+ | 3.5+ | 4+ |
| min-width / max-width | 1+ | 1+ | 1+ | 12+ | 3.5+ | 7+ |
| min-height / max-height | 1+ | 1+ | 1+ | 12+ | 3.5+ | 7+ |
| vw / vh | 31+ | 19+ | 7+ | 12+ | 18+ | No (IE9 partial) |
| vmin / vmax | 31+ | 19+ | 7+ | 12+ | 18+ | No (IE9 partial vmin) |
| dvh / svh / lvh | 108+ | 101+ | 15.4+ | 108+ | 90+ | No |
| min-content / max-content | 57+ | 66+ | 11+ | 16+ | 44+ | No |
| fit-content() | 57+ | 91+ | 11+ | 16+ | 44+ | No |
| aspect-ratio | 88+ | 89+ | 15+ | 88+ | 74+ | No |
| clamp() | 79+ | 75+ | 13.1+ | 79+ | 66+ | No |
| box-sizing | 10+ | 29+ | 5.1+ | 12+ | 7+ | 8+ |

## Summary Notes
- `width` and `height` set element dimensions; `auto` lets the browser calculate based on content
- Block elements default to `width: auto` (fill available space), inline elements shrink to fit
- `min-*` and `max-*` properties constrain dimensions (min always wins over max)
- Viewport units: 1vw = 1% of viewport width, 1vh = 1% of viewport height
- `100dvh` is the modern way to get full viewport height on mobile (accounts for browser chrome)
- `box-sizing: border-box` makes padding and border count inside the specified width — always use it
- `overflow` controls what happens when content exceeds dimensions (visible, hidden, scroll, auto)
- Percentage height requires parent to have explicit height (unlike percentage width)
- Intrinsic sizing keywords: `min-content` (shrink), `max-content` (no wrap), `fit-content()` (bounded)
- `aspect-ratio` property creates ratio-constrained boxes without the padding hack
- Use `clamp(min, preferred, max)` for responsive, accessible sizes
- Images should always have `max-width: 100%` and `height: auto` for responsiveness
- `65ch` is the recommended max-width for readable text line length
