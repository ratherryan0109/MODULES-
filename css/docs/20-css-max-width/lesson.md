# Module 20: CSS Max-Width

## Table of Contents
1. Introduction
2. Learning Objectives
3. Theory
   - Max-Width Basics
   - Max-Width vs Width
   - Max-Width and Min-Width Priority
   - Centering with Max-Width
   - Responsive Images
   - Min-Width and Max-Width Together
   - Media Queries with Max-Width
   - Common Patterns
   - The ch Unit for Readability
   - Max-Width on Different Element Types
   - Logical Properties (max-inline-size, max-block-size)
   - Container Queries with max-width
4. Visual Explanation
5. Common Mistakes
6. Best Practices
7. Accessibility Considerations
8. Performance Considerations
9. Browser Compatibility
10. Summary Notes

## Introduction
The `max-width` property sets the maximum width an element can stretch to. It's a cornerstone of responsive design, allowing content to scale down on small screens while staying contained on large ones. Combined with `width` and `margin: auto`, `max-width` creates fluid, responsive layouts that work across all devices.

`max-width` is one of the few properties that made responsive web design possible without media queries. By setting `max-width: 1200px` with `width: 100%`, a container becomes fluid on small screens but caps at a readable width on large screens. This "baked-in" responsiveness is essential for modern web development.

## Learning Objectives
By the end of this module, you will be able to:
- Use `max-width` for responsive containers that adapt to any screen
- Combine `max-width` with `width` for flexible, resilient layouts
- Center elements with `margin: auto` and `max-width`
- Understand `max-width` vs `width` priority rules
- Use `min-width` for accessibility and minimum size guarantees
- Apply `max-width: 100%` to images for responsive behavior
- Combine `min-width` and `max-width` for responsive ranges
- Use the `ch` unit for optimal text line length
- Use logical properties (`max-inline-size`) for international layouts
- Integrate max-width with container queries

## Theory

### Max-Width Basics
`max-width` overrides `width` when the computed `width` would exceed the `max-width`:

```css
/* Container that's flexible up to 1200px */
.container {
  max-width: 1200px;
  width: 100%;           /* Shrinks on small screens */
  margin: 0 auto;        /* Centers when viewport > 1200px */
}
```

**Behavior breakdown:**
- If viewport is 800px wide: container is 800px (100% of viewport)
- If viewport is 1400px wide: container is 1200px (capped by max-width)
- If viewport is 500px wide: container is 500px (100% of viewport)

### Max-Width vs Width
Understanding the interaction between `width` and `max-width`:

```css
/* Pattern 1: Width as default, max-width as cap */
.element {
  width: 100%;            /* Default: fill the container */
  max-width: 800px;       /* Cap at 800px */
}
```

```css
/* Pattern 2: Fixed width that shrinks on small screens */
.element {
  width: 500px;
  max-width: 100%;        /* Shrinks when viewport < 500px */
}
```

```css
/* Pattern 3: Percentage width with max-width constraint */
.element {
  width: 80%;             /* 80% of parent */
  max-width: 1200px;      /* Don't exceed 1200px */
}
```

### Max-Width and Min-Width Priority
The priority rules for width constraints:

1. `min-width` ALWAYS wins over `width` and `max-width`
2. `max-width` wins over `width` but loses to `min-width`
3. If `min-width` > `max-width`, `min-width` takes priority

```css
.example {
  width: 500px;
  min-width: 600px;
  max-width: 400px;
  /* MIN-WIDTH WINS: element is 600px wide (min-width > max-width) */
}

.example2 {
  width: 100%;
  min-width: 300px;     /* Never below 300px */
  max-width: 1200px;    /* Never above 1200px */
  /* Between 300px and 1200px, width is 100% of container */
}
```

**Practical example of min-width + max-width:**
```css
.sidebar {
  width: 25%;
  min-width: 250px;     /* On narrow parents, sidebar stays readable */
  max-width: 400px;     /* On wide parents, sidebar stays compact */
}
```

### Centering with Max-Width
The classic responsive centering pattern:

```css
.container {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 20px;       /* Prevents content touching edges */
}
```

**Why `margin: 0 auto` works with max-width:**
- When the container width (determined by max-width or width) is less than the viewport width
- The browser distributes the remaining space equally between left and right auto margins
- The container sits in the center

**Full example with padding:**
```css
.centered-content {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 24px;       /* Breathing room on small screens */
}
```

### Responsive Images
The single most important responsive image pattern:

```css
img {
  max-width: 100%;       /* Never exceeds container width */
  height: auto;          /* Maintains aspect ratio */
  display: block;        /* Removes bottom gap (baseline alignment) */
}
```

**Why this works:**
- `max-width: 100%` ensures the image never overflows its container
- `height: auto` maintains the aspect ratio when the image scales down
- Without `max-width: 100%`, images with intrinsic sizes larger than the viewport will cause horizontal scrolling

**Full responsive image with background:**
```css
.hero-image {
  max-width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
}

/* For background images */
.hero-section {
  background-image: url('hero.jpg');
  background-size: cover;
  background-position: center;
  min-height: 400px;
  max-width: 1200px;
  margin: 0 auto;
}
```

**Responsive images with picture element:**
```html
<picture>
  <source srcset="hero-wide.webp" media="(min-width: 1200px)" type="image/webp">
  <source srcset="hero-wide.jpg" media="(min-width: 1200px)">
  <source srcset="hero-mobile.webp" type="image/webp">
  <img src="hero-mobile.jpg" alt="Hero image" style="max-width: 100%; height: auto;">
</picture>
```

### Min-Width and Max-Width Together
Combining both creates a "responsive range":

```css
.element {
  min-width: 300px;       /* Never smaller than 300px */
  max-width: 800px;       /* Never larger than 800px */
  width: 100%;            /* Default: fill available space */
}
/* Results:
     Container < 300px: element = 300px (overflows)
     Container 300-800px: element = container width
     Container > 800px: element = 800px (capped)
*/
```

**Practical pattern: responsive card:**
```css
.card {
  width: 100%;
  min-width: 280px;
  max-width: 450px;       /* Cards max at 450px */
  margin: 0 auto;         /* Centered in container */
}

/* Card grid with responsive cards */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
}
```

### Media Queries with Max-Width
`max-width` in media queries creates "mobile-first" or "desktop-first" breakpoints:

```css
/* Mobile-first (min-width queries — start small, add styles for larger) */
/* Base styles for mobile */
.element { font-size: 1rem; }

@media (min-width: 768px) {
  .element { font-size: 1.125rem; }  /* Tablet+ */
}

@media (min-width: 1200px) {
  .element { font-size: 1.25rem; }    /* Desktop+ */
}

/* Desktop-first (max-width queries — start large, override for smaller) */
/* Base styles for desktop */
.element { font-size: 1.25rem; }

@media (max-width: 1199px) {
  .element { font-size: 1.125rem; }   /* Tablet */
}

@media (max-width: 767px) {
  .element { font-size: 1rem; }       /* Mobile */
}
```

**Combined range queries:**
```css
/* Target devices between 768px and 1024px */
@media (min-width: 768px) and (max-width: 1024px) {
  .container { max-width: 960px; }
}
```

### Common Patterns

**Pattern 1: Full-width hero with content constraint:**
```css
.hero {
  width: 100%;
  background: linear-gradient(135deg, #667eea, #764ba2);
}

.hero-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 24px;
  color: white;
}
```

**Pattern 2: Readable text (optimal line length):**
```css
article {
  max-width: 65ch;        /* Approximately 65 characters per line */
  margin: 0 auto;
  padding: 0 20px;
  font-size: 1.125rem;
  line-height: 1.8;
}
```

**Pattern 3: Responsive card grid:**
```css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
```

**Pattern 4: Form inputs with max-width:**
```css
input, select, textarea {
  width: 100%;
  max-width: 600px;       /* Don't stretch inputs too wide */
  padding: 12px 16px;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
}

/* Submit button smaller than input */
button[type="submit"] {
  max-width: 300px;
}
```

**Pattern 5: Side-by-side layout with constraints:**
```css
.layout {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.main-content {
  flex: 1;
  min-width: 300px;       /* Don't squash below readability */
  max-width: 800px;
}

.sidebar {
  width: 300px;
  flex-shrink: 0;
}
```

### The ch Unit for Readability
The `ch` unit equals the width of the "0" character in the element's font. It's perfect for controlling line length:

```css
/* Optimal line length for readability */
.content {
  max-width: 65ch;        /* 65-75 characters per line is ideal */
}

/* Research-backed max-width for different text sizes */
.body-text { max-width: 65ch; }
.large-text { max-width: 45ch; }    /* Larger text needs fewer chars per line */
.small-text { max-width: 80ch; }    /* Smaller text can handle more chars */
```

**Why line length matters:**
- Lines that are too short (less than 45 characters) cause excessive line breaks
- Lines that are too long (more than 75 characters) cause eye strain — the reader loses their place
- 65-75 characters per line is the research-backed sweet spot for readability in English

### Max-Width on Different Element Types

**Block elements:** `max-width` applies normally.
```css
div, p, section { max-width: 800px; }
```

**Inline elements:** `max-width` is ignored on non-replaced inline elements.
```css
span { max-width: 200px; }  /* IGNORED on inline spans */
```

**Replaced inline elements:** `max-width` applies.
```css
img, video { max-width: 100%; }
input { max-width: 400px; }
```

**Flex items:** `max-width` can limit flex item growth.
```css
.flex-item {
  flex: 1;
  max-width: 400px;  /* Item won't grow past 400px */
}
```

**Table cells:** `max-width` is respected but may interact with table layout algorithms.

### Logical Properties (max-inline-size, max-block-size)
For internationalization support, CSS provides logical equivalents:

```css
/* Physical property (LTR-centric) */
.element {
  max-width: 800px;
}

/* Logical property (writing-mode agnostic) */
.element {
  max-inline-size: 800px;  /* Respects writing direction */
}
```

**Benefits:**
- Works correctly in vertical writing modes (Japanese, Chinese)
- Adapts to RTL/LTR automatically
- More semantic — describes the size constraint, not the direction

### Container Queries with Max-Width
Modern CSS container queries allow elements to respond to their container's size, not just the viewport:

```css
.card-container {
  container-type: inline-size;
  container-name: card;
}

.card {
  max-width: 100%;
}

@container card (max-width: 400px) {
  .card {
    padding: 12px;
    font-size: 0.875rem;
  }
}

@container card (min-width: 401px) {
  .card {
    padding: 24px;
    font-size: 1rem;
  }
}
```

## Visual Explanation
```
Max-Width Behavior:

  Small screen (500px):
  ┌──────────────────────────────────────┐
  │  width: 100%                          │
  │  max-width: 800px                     │
  │  → Element is 500px (fills screen)    │
  └──────────────────────────────────────┘

  Medium screen (800px):
  ┌──────────────────────────────────────┐
  │  width: 100%                          │
  │  max-width: 800px                     │
  │  → Element is 800px (fills screen)    │
  └──────────────────────────────────────┘

  Large screen (1400px):
  ┌─────────────────────────────────────────────┐
  │             ┌─────────────────────┐          │
  │             │  Element: 800px     │          │
  │   margin    │  (capped by         │  margin  │
  │   auto      │   max-width)        │  auto    │
  │             └─────────────────────┘          │
  └─────────────────────────────────────────────┘

Min/Max Width Priority:

  1. min-width ← WINS (always overrides others)
  2. max-width ← Overrides width
  3. width    ← Default (overridden by both above)
```

## Common Mistakes
1. **Not setting `width: 100%` with `max-width`**: Without `width: 100%`, the element won't shrink below its content width on small screens — it may overflow
2. **Forgetting `margin: auto`**: `max-width` alone doesn't center — you need `margin-left: auto; margin-right: auto;` or `margin: 0 auto`
3. **Not using `max-width: 100%` on images**: Images with intrinsic sizes larger than the viewport will overflow and cause horizontal scrolling
4. **Setting both `width` and `max-width` incorrectly**: Understand which takes priority — `max-width` overrides `width` when `width` is larger
5. **Hardcoding max-width for everything**: Different content needs different constraints — text needs different widths than media or forms
6. **Not considering padding**: `max-width` applies to the content-box — adding `padding: 20px` to a box with `max-width: 100%` can cause horizontal overflow
7. **Using max-width on inline elements**: Non-replaced inline elements ignore `max-width` — use `display: block` or `inline-block`
8. **Not using `ch` units for text**: Pixels don't account for font size changes — `65ch` scales with font better for readability
9. **Setting `max-width` on `body`**: The body element should usually stretch full-width; apply max-width to a wrapper div instead
10. **Forgetting that `max-width: 100%` includes parent padding**: It's relative to the parent's content width, not the viewport

## Best Practices
- Always pair `max-width` with `width: 100%` for responsive behavior
- Use `margin: 0 auto` to center elements that have a max-width
- Use `max-width: 100%` and `height: auto` on ALL images and videos
- Use the `ch` unit for text content (`max-width: 65ch` for body text)
- Apply `padding: 0 20px` alongside max-width for small-screen breathing room
- Use `min-width` and `max-width` together to create responsive ranges
- Use logical properties (`max-inline-size`) for internationalized layouts
- Use `max-width` in media queries for desktop-first responsive designs
- Consider container queries for component-level responsiveness
- Use `box-sizing: border-box` so padding doesn't add to max-width calculations

```css
/* Recommended default setup */
*, *::before, *::after {
  box-sizing: border-box;
}

img, video, iframe {
  max-width: 100%;
  height: auto;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

article, .prose {
  max-width: 65ch;
  margin: 0 auto;
}
```

## Accessibility Considerations
- `max-width` with `margin: 0 auto` ensures content doesn't stretch too wide — long lines reduce readability for all users, especially those with dyslexia
- The `ch` unit scales with font size — users who increase browser font size still get an appropriate line length
- Ensure `min-width` values work at 200% zoom — if a sidebar has `min-width: 400px`, it may overflow on a zoomed mobile viewport
- Don't use `max-width` to clip content — `overflow: hidden` paired with max-width can hide content at zoomed levels
- Use `max-width` instead of fixed `width` for better zoom behavior
- Text containers should use `max-width: 65ch` or similar for WCAG readability guidelines
- Ensure focus indicators aren't clipped by max-width containers (use `outline-offset` if needed)

## Performance Considerations
- `max-width` has negligible performance cost—it's calculated during the layout phase
- Using `max-width: 100%` on images is more performant than using JavaScript to resize them
- Setting `max-width` on containers helps limit the paint area—browsers can optimize painting for constrained boxes
- `max-width` in media queries helps serve appropriate styles without JavaScript
- Combining `max-width` with `width` avoids layout shifts (CLS) — the browser knows the element's constraints upfront
- Unlike JavaScript-based responsive sizing, `max-width` is GPU-accelerated and doesn't block the main thread

## Browser Compatibility
| Property | Chrome | Firefox | Safari | Edge | Opera | IE |
|----------|--------|---------|--------|------|-------|----|
| max-width | 1+ | 1+ | 1+ | 12+ | 4+ | 7+ |
| min-width | 1+ | 1+ | 1+ | 12+ | 4+ | 7+ |
| max-height | 1+ | 1+ | 1+ | 12+ | 4+ | 7+ |
| min-height | 1+ | 1+ | 1+ | 12+ | 4+ | 7+ |
| ch unit | 27+ | 1+ | 7+ | 12+ | 9+ | 9+ |
| max-inline-size | 69+ | 41+ | 12.1+ | 79+ | 56+ | No |
| container queries | 105+ | 110+ | 16+ | 105+ | 91+ | No |
| clamp() | 79+ | 75+ | 13.1+ | 79+ | 66+ | No |

`max-width` and `min-width` are supported in all browsers since IE7. The `ch` unit is supported since IE9. Container queries are the newest addition and require modern browsers (2023+). Logical properties have excellent modern support.

## Summary Notes
- `max-width` sets the maximum width but allows the element to shrink below it
- Always pair max-width with `width: 100%` for true responsive behavior
- Use `margin: 0 auto` to center elements that have a max-width
- `img { max-width: 100%; height: auto; }` for responsive images (prevents overflow)
- `65ch` is the recommended max-width for readable text (optimal line length)
- `min-width` always wins over `max-width` and `width` in priority
- `min-width` and `max-width` create responsive ranges for flexible elements
- Use media queries `@media (max-width: 768px)` for desktop-first responsive design
- Use `@media (min-width: 768px)` for mobile-first approach
- Container queries allow elements to respond to their parent's width
- Logical properties `max-inline-size` for international layout support
- Always use `box-sizing: border-box` to prevent padding from adding to max-width
- `max-width` is GPU-accelerated and doesn't cause layout shifts
- `max-width` is essential for responsive web design — one of the few properties that made RWD possible without media queries
