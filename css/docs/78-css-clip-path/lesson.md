# CSS Clip Path

## Module Overview
Learn how to use the `clip-path` property to create non-rectangular shapes and visual effects. Master polygon, circle, ellipse, inset, and SVG path clipping to transform rectangular elements into dynamic visual shapes, enabling creative layouts, avatar styles, and morphing animations.

## Learning Objectives
- Understand the clip-path property and its clipping functions
- Apply basic shapes: circle(), ellipse(), inset(), polygon()
- Use the path() function for custom SVG paths
- Create hover and animation effects with clip-path
- Combine clip-path with other CSS properties
- Understand the difference between clip-path and masking
- Animate clip paths with matching vertex counts
- Provide fallback strategies for unsupported browsers

## Topics Covered

### 1. The clip-path Property
The `clip-path` property creates a clipping region that determines which parts of an element are visible. Everything outside the path is hidden. Unlike `mask`, which can create soft edges, clip-path always creates hard-edged clipping boundaries.

```css
/* Basic usage */
.element {
  clip-path: circle(50%);
}

/* With positioning */
.element {
  clip-path: circle(50% at 30% 40%);
}
```

The clip region is determined by the intersection of the element's border box and the clipping shape. The clipped element still occupies its original space in the layout — clip-path does not affect the box model or document flow.

### 2. Basic Shape Functions

**circle()** — Creates circular clips. Accepts radius and optional position: `circle(50%)`, `circle(50% at 30% 40%)`.

```css
/* Perfect circle avatar */
.avatar {
  width: 150px;
  height: 150px;
  clip-path: circle(50%);
}

/* Circle positioned off-center */
.offset-circle {
  clip-path: circle(30% at 70% 50%);
}
```

The radius parameter follows the same syntax as radial gradients. You can use keywords like `closest-side` and `farthest-side` in addition to explicit values:
- `circle(closest-side)` — radius equals distance from center to nearest side
- `circle(farthest-side)` — radius equals distance from center to farthest side (default behavior with percentage)

**ellipse()** — Creates elliptical clips. Accepts x-radius, y-radius, and position: `ellipse(40% 60% at center)`.

```css
.element {
  clip-path: ellipse(30% 50% at center);
}

/* Stretched ellipse at top-left */
.element {
  clip-path: ellipse(20% 40% at 0 0);
}
```

Ellipse is useful for creating oval shapes, pill shapes, and organic-looking clips that differ in horizontal and vertical dimensions.

**inset()** — Creates rectangular clips with optional rounded corners: `inset(20px 30px)`.

```css
/* Clip 20px from each edge */
.element {
  clip-path: inset(20px);
}

/* Different values per side — like margin syntax */
.element {
  clip-path: inset(20px 30px 10px 50px);
}

/* With rounded corners */
.element {
  clip-path: inset(20px round 10px);
}

/* Different radii per corner */
.element {
  clip-path: inset(20px 10px round 15px 30px);
}
```

The `inset()` function accepts 1-4 values for top/right/bottom/left insets (like margin or padding shorthand), plus an optional `round` keyword for border-radius-like corner rounding.

**polygon()** — Creates polygonal clips with comma-separated coordinate pairs: `polygon(0 0, 100% 0, 50% 100%)`.

```css
/* Triangle */
.element {
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

/* Hexagon */
.element {
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
}

/* Diamond */
.element {
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
}
```

Polygon is the most flexible clipping function. Each coordinate pair represents a vertex in the polygon, specified as x y pairs. Coordinates can be percentages (relative to element dimensions) or length values.

### 3. The path() Function
Uses SVG path data strings for complex custom shapes: `clip-path: path('M10 10 H 90 V 90 H 10 Z')`.

```css
/* Star shape using SVG path data */
.element {
  clip-path: path('M50 0 L63 38 L100 38 L69 59 L82 100 L50 75 L18 100 L31 59 L0 38 L37 38 Z');
}

/* Wavy bottom edge */
.element {
  clip-path: path('M0 0 L100 0 L100 85 C75 95, 25 75, 0 85 Z');
}
```

The `path()` function accepts the same path data format as SVG `<path>` elements. This enables any shape that can be described with SVG path commands (M, L, C, Q, A, Z, etc.).

### 4. Clip-Path Transitions and Animations
Clip paths can be animated with CSS transitions and keyframe animations, enabling morphing effects.

```css
/* Smooth shape morphing on hover */
.element {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  transition: clip-path 0.5s ease;
}
.element:hover {
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
}
```

**Critical rule for smooth animation:** All polygon states must have the SAME number of vertices. The browser interpolates vertex by vertex, so mismatched counts cause sudden jumps or no animation.

```css
/* Correct — same vertex count (4 vertices → 4 vertices) */
@keyframes morph {
  0% { clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%); }
  100% { clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0% 50%); }
}

/* Incorrect — different vertex count (4 → 3) — animates poorly */
@keyframes bad-morph {
  0% { clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%); }
  100% { clip-path: polygon(50% 0, 100% 100%, 0% 100%); } /* Only 3 vertices */
}
```

### 5. Clip-Path with Images
Clip-path is commonly used to create non-rectangular image presentations, avatars, and decorative elements.

```css
/* Geometric image shapes */
.gallery img {
  width: 300px;
  height: 300px;
  object-fit: cover;
}

.gallery img:nth-child(1) { clip-path: circle(50%); }
.gallery img:nth-child(2) { clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); }
.gallery img:nth-child(3) { clip-path: ellipse(30% 50% at 50% 50%); }
```

Combining `clip-path` with `object-fit: cover` ensures images fill their clipping shape without distortion. This combination is the standard approach for creating geometric image galleries.

### 6. shape-outside and Clip-Path
The `shape-outside` property works alongside clip-path to make text flow around the clipped shape.

```css
.float-image {
  float: left;
  shape-outside: circle(50%);
  clip-path: circle(50%);
  width: 200px;
  height: 200px;
}
```

While `clip-path` controls what's visible, `shape-outside` controls how inline content (text) flows around the element. For text to wrap around a clipped shape, both properties should use the same shape values.

### 7. Clip Path vs Mask: When to Use Which

| Consideration | clip-path | mask |
|---------------|-----------|------|
| Edge quality | Always hard | Can be soft (gradients) |
| Performance | More efficient | More expensive |
| Shape types | Geometric (polygon, circle, etc.) | Any alpha channel |
| Animation | Morphing (same vertex count) | Gradient shifts |
| Browser support | Excellent | Good (prefixes needed) |
| Best for | Avatars, geometric layouts, morphing | Fades, textures, gradient reveals |

## Best Practices
- Use `polygon()` for most custom shape needs
- Animate clip-path with matching vertex counts for smooth morphing
- Combine with `shape-outside` for text wrapping around clipped elements
- Test clip paths on different element sizes (use percentages for flexibility)
- Use `object-fit: cover` with clip-path on images for consistent results
- Keep polygon vertex counts under 20 for performance and maintainability
- Use `circle()` for avatar images — simplest and most browser-compatible
- Provide graceful degradation for browsers without clip-path support

## Common Mistakes
- Mismatched vertex counts in animations cause jarring transitions
- Clip-path clips an element but doesn't affect layout (element still occupies original space)
- Using too many polygon points can hurt performance
- Forgetting that `clip-path` clips rendering but not hit-testing in some older browsers
- Applying clip-path to inline elements without `display: block` or `inline-block`
- Not considering that clip-path follows the border box, not the content box
- Using `path()` without browser testing (limited support in older browsers)
- Creating overly complex polygons when a simpler shape would suffice

## Accessibility Considerations
- Clipped content should remain accessible to screen readers
- Don't rely on clip-path animations to convey important information
- Ensure interactive hit areas aren't accidentally clipped
- Focus indicators must remain visible — test keyboard navigation
- Provide alternative styling for `prefers-reduced-motion: reduce`
- Consider that zoom may affect clip-path rendering differently than standard content
- Test with browser zoom at 200% — clipped areas should still be usable
- Use `outline` or `box-shadow` as fallback indicators for interactive elements

## Performance Considerations
- Clip-path with simple shapes (circle, ellipse, inset) is highly performant
- Complex polygons with 50+ vertices increase the cost of each frame
- Animated clip-paths trigger repaints on every frame of the animation
- GPU acceleration applies to clip-path rendering in modern browsers
- Avoid animating clip-path on large elements or multiple elements simultaneously
- Use `will-change: clip-path` for animated clip-paths
- Prefer `clip-path: circle(50%)` over `border-radius: 50%` for circular clips (more performant in some cases)
- On mobile, simplify polygon shapes or use fixed clips instead of animated ones

## Browser Compatibility

| Feature | Chrome | Firefox | Safari | Edge | IE |
|---------|--------|---------|--------|------|-----|
| circle() | 55+ | 3.5+ (with url()) | 9.1+ | 79+ | No |
| ellipse() | 55+ | 3.5+ | 9.1+ | 79+ | No |
| inset() | 55+ | 3.5+ | 9.1+ | 79+ | No |
| polygon() | 55+ | 3.5+ | 9.1+ | 79+ | No |
| path() | 88+ | 94+ | No | 88+ | No |
| shape-outside | 37+ | 62+ | 10+ | 79+ | No |
| Animation | 55+ | 49+ | 9.1+ | 79+ | No |

Basic clip-path shapes (circle, ellipse, inset, polygon) are well-supported in all modern browsers. The `path()` function has more limited support — Firefox added it in version 94, Chrome in 88, and Safari has not yet implemented it as of 2024.

## Visual Explanation

**Basic clip-path shapes applied to a square element:**
```
  Original element:      circle(50%):          ellipse(40% 60%):
  ┌──────────────────┐   ┌──────────────────┐   ┌──────────────────┐
  │                  │   │      ┌───┐      │   │                  │
  │                  │   │   ┌──┤   ├──┐   │   │  ┌──────────────┐│
  │                  │   │   │  │   │  │   │   │  │              ││
  │                  │   │   └──┤   ├──┘   │   │  └──────────────┘│
  │                  │   │      └───┘      │   │                  │
  │                  │   └──────────────────┘   └──────────────────┘
  └──────────────────┘

  inset(20px):             polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%):
  ┌──────────────────┐     ┌──────────────────┐
  │   ┌──────────┐   │     │       ╱╲        │
  │   │          │   │     │     ╱    ╲      │
  │   │ visible  │   │     │   ╱        ╲    │
  │   │  area    │   │     │ ╱            ╲  │
  │   │          │   │     │ ╲            ╱  │
  │   └──────────┘   │     │   ╲        ╱    │
  │  clipped edge    │     │     ╲    ╱      │
  └──────────────────┘     │       ╲╱        │
                           └──────────────────┘
```

**How clip-path animation works — vertex matching:**
```
  Same vertex count (4 → 4) — SMOOTH:
  
  polygon(0 0, 100% 0, 100% 100%, 0% 100%)    ← rectangle
           │        │          │          │
           ▼        ▼          ▼          ▼
  polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%) ← diamond
  
  Each vertex interpolates independently:
  v1: (0,0) ───────→ (50%,0)
  v2: (100%,0) ─────→ (100%,50%)
  v3: (100%,100%) ──→ (50%,100%)
  v4: (0,100%) ─────→ (0,50%)
  
  Different vertex count (4 → 3) — JARING:
  rectangle (4 vertices) → triangle (3 vertices)
  → browser cannot interpolate — sudden jump
```

**clip-path with shape-outside for text wrapping:**
```
  ┌──────────────────────────────────────┐
  │ Text text text text text text text   │
  │ text text text  ╱╲ text text text   │
  │ text text text ╱  ╲ text text text  │
  │ text text text ╲  ╱ text text text  │
  │ text text text  ╲╱ text text text   │
  │ text text text text text text text   │
  └──────────────────────────────────────┘
      ┌──────────────────┐
      │   Clipped image  │
      │   + shape-outside│
      └──────────────────┘
  Text flows around the visible shape
```

**clip-path vs mask edge comparison:**
```
  clip-path: polygon(...)         mask-image: radial-gradient(...)
  ┌────────────────────┐        ┌────────────────────┐
  │                    │        │                    │
  │   ┌────────────┐   │        │   ╭──────────╮    │
  │   │  HARD      │   │        │  ╱  SOFT     ╲   │
  │   │  EDGE      │   │        │ │   EDGE      │   │
  │   │            │   │        │ │             │   │
  │   └────────────┘   │        │   ╲          ╱    │
  │                    │        │    ╰──────────╯    │
  └────────────────────┘        └────────────────────┘
  Sharp, aliased boundary       Smooth, anti-aliased fade
```

## Summary Notes
- `clip-path` creates hard-edged clipping regions using geometric shapes or SVG paths
- Four basic shape functions: `circle()`, `ellipse()`, `inset()`, `polygon()`
- `path()` accepts SVG path data for custom complex shapes
- Animate between shapes with matching vertex counts for smooth morphing
- `clip-path` doesn't affect layout or document flow — element still occupies original space
- Combine with `shape-outside` for text wrapping around clipped elements
- Use `object-fit: cover` with clip-path for image-based shapes
- All modern browsers support basic clip-path functions
- Prefer `clip-path` for hard edges, `mask` for soft/transparent edges
- Provide fallback styling for browsers without clip-path support (IE, older browsers)
