# CSS Rotate

## Introduction
The `rotate` CSS property is a standalone transform property that rotates an element around a fixed point (transform-origin). It separates rotation from other transforms for cleaner code and better performance optimization. Part of CSS Transforms Module Level 2, the standalone `rotate` property allows rotating elements along specific axes without the function-based syntax.

## Learning Objectives
1. Use the standalone rotate property for 2D and 3D rotation
2. Understand axis-specific rotation (X, Y, Z)
3. Combine rotate with other individual transform properties
4. Create flip and spin effects
5. Apply perspective for 3D rotations
6. Understand angle units and their use cases
7. Differentiate standalone rotate from transform: rotate()

## Theory

### Standalone Rotate Property
```css
rotate: 45deg;              /* 2D rotation around Z-axis */
rotate: X 45deg;            /* Around X-axis */
rotate: Y 45deg;            /* Around Y-axis */
rotate: Z 45deg;            /* Around Z-axis (same as 2D) */
rotate: 0.5turn;            /* Using turn unit */
rotate: 1.57rad;            /* Using radians */
rotate: none;               /* Default (no rotation) */
```

The standalone `rotate` property provides a dedicated way to rotate elements without the `rotate()` function inside the `transform` property. This enables independent control and animation of rotation separate from translation and scaling.

```css
/* Standalone property — cleaner when only rotating */
.element {
  rotate: 45deg;
}

/* Equivalent transform */
.element {
  transform: rotate(45deg);
}

/* 3D axis-specific rotation */
.element {
  rotate: Y 180deg; /* Flips horizontally like turning a page */
}
```

### Axes of Rotation
| Axis | Effect | Visual | Example |
|------|--------|--------|---------|
| Z (default) | Spins flat | Like a clock hand | Clockwise rotation |
| X | Flipping forward | Like a calendar page | Nodding animation |
| Y | Flipping sideways | Like a door opening | Card flip effect |

```css
/* Z-axis rotation — standard 2D spinning */
.spinner {
  rotate: Z 360deg; /* Equivalent to just rotate: 360deg */
}

/* X-axis rotation — forward/backward tilt */
.nodding {
  rotate: X 30deg;
}

/* Y-axis rotation — side to side */
.door {
  rotate: Y 90deg; /* Opens like a door */
}
```

**3D rotation requires perspective:**
For X and Y axis rotations to appear three-dimensional, the parent element needs a `perspective` value. Without perspective, X and Y rotations make the element look narrower (as if compressing), not tilted in 3D space.

```css
.parent {
  perspective: 800px; /* Required for 3D effect */
}

.child {
  rotate: Y 45deg; /* Now appears to recede into the distance */
}
```

### Values and Units
| Unit | Example | Description | Use Case |
|------|---------|-------------|----------|
| deg | 45deg | Degrees (0-360) | Most common, intuitive |
| rad | 1.57rad | Radians (0-2π) | Math contexts |
| grad | 100grad | Gradians (0-400) | Surveying, engineering |
| turn | 0.5turn | Full turns | Intuitive fractions |

```css
/* All of these represent the same rotation */
rotate: 180deg;
rotate: 3.14159rad;
rotate: 200grad;
rotate: 0.5turn;

/* Practical use of different units */
rotate: 45deg;          /* Standard quarter rotation */
rotate: 0.125turn;      /* Same as 45deg (1/8 of a turn) */
rotate: 1.5708rad;      /* Same as 90deg (π/2) */
```

**The `turn` unit** is particularly useful for animations because fractional turns are more intuitive than degrees for multi-rotation animations:
```css
@keyframes spin {
  from { rotate: 0turn; }
  to { rotate: 3turn; } /* Three full spins — much clearer than 1080deg */
}
```

### Combining with Other Transform Properties
```css
.element {
  translate: 100px 0;
  rotate: 45deg;
  scale: 1.2;
}

/* This is equivalent to: */
.element-eq {
  transform: translate(100px, 0) rotate(45deg) scale(1.2);
}
```

**Application order:**
When using individual transform properties, the browser applies them in this fixed order: `translate` → `rotate` → `scale`. This means:
1. The element is moved to its translated position
2. It's rotated around its transform-origin
3. It's scaled from its transform-origin

### Practical Rotation Effects

**Card flip (3D):**
```css
.card-container {
  perspective: 1000px;
}

.card {
  transform-style: preserve-3d;
  transition: rotate 0.6s ease;
}

.card:hover {
  rotate: Y 180deg;
}

.card-front, .card-back {
  backface-visibility: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
}

.card-back {
  rotate: Y 180deg; /* Back face is rotated */
}
```

**Continuous spinner:**
```css
.loader {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { rotate: 0deg; }
  to { rotate: 360deg; }
}
```

**3D cube face rotation:**
```css
.cube-face {
  position: absolute;
  width: 200px;
  height: 200px;
}

.cube-face:nth-child(1) { rotate: X 0deg; translate: 0 0 100px; }
.cube-face:nth-child(2) { rotate: Y 90deg; translate: 0 0 100px; }
.cube-face:nth-child(3) { rotate: Y 180deg; translate: 0 0 100px; }
.cube-face:nth-child(4) { rotate: Y 270deg; translate: 0 0 100px; }
.cube-face:nth-child(5) { rotate: X 90deg; translate: 0 0 100px; }
.cube-face:nth-child(6) { rotate: X 270deg; translate: 0 0 100px; }
```

**Hover tilt effect:**
```css
.card {
  transition: rotate 0.2s ease;
}

.card:hover {
  rotate: -2deg; /* Slight tilt for interactive feedback */
}
```

## Visual Explanation

```
Rotation Axes:

  Y (rotateX — forward/backward tilt)
  ↑
  │
  └────→ X (rotateY — side-to-side turn)
  ↙
  Z (rotateZ — 2D spin, default)


Rotation Effects on a Square:

Z-axis (default) — 45deg        Z-axis — 180deg
┌────┐           ┌─┐            ┌────┐         ┌────┐
│    │  rotateZ  ┌┘ └┐          │    │  rotateZ │    │
│    │  ──────→  └┐ ┌┘          │    │  ──────→ │    │
└────┘            └─┘            └────┘         └────┘

X-axis — 45deg                  Y-axis — 45deg
┌────┐           ╱────╲         ┌────┐          ╔════╗
│    │  rotateX  │    │         │    │  rotateY  ║    ║
│    │  ──────→  ╲────╱         │    │  ──────→  ╚════╝
└────┘                          └────┘

Y-axis — 180deg (Card Flip)
┌────┐   →   ┐┌──┐┌   →   ┌────┐
│front│       ││fr││       │back│
│     │       │└──┘│       │    │
└────┘       └──────┘       └────┘


Angle Units Comparison:

  180deg = 3.14159rad = 200grad = 0.5turn

     0° / 0turn
         │
 270° ───┼─── 90°
         │
     180° / 0.5turn


Transform Origin Effect — rotate(45deg):

Center (default)    Top Left            Bottom Right
  pivot: center     pivot: top-left     pivot: bottom-right

  ┌─┐               ┌─┐                    ┌─┐
 ┌┘ └┐             ┌┘ └┐                 ┌┘ └┐
 └┐ ┌┘             └┐ ┌┘                 └┐ ┌┘
  └─┘               └─┘                    └─┘


Positive vs Negative Rotation (Z-axis):

rotate(45deg) — clockwise    rotate(-45deg) — counter-clockwise
  ┌─┐                          ┌─┐
 ┌┘ └┐                        ┌┘ └┐
 └┐ ┌┘                        └┐ ┌┘
  └─┘                          └─┘
```

### Common Mistakes
1. Forgetting perspective on parent for X/Y rotation (without perspective, X/Y rotation looks flat or just compresses the element)
2. Not resetting rotation center point (rotation happens around transform-origin — default is center)
3. Using both rotate and transform with rotate (they can coexist, but the order of application is fixed when using individual properties)
4. Confusing clockwise vs counterclockwise (positive = clockwise for Z-axis, but depends on axis orientation for X/Y)
5. Expecting 3D rotation to look 3D without perspective and transform-style: preserve-3d
6. Not handling backface visibility in card flip implementations
7. Using degrees when turns would be clearer for full rotations

### Best Practices
1. Use `rotate` standalone when animating rotation independent of other transforms
2. Set appropriate `transform-origin` for desired pivot point
3. Add `perspective` on parent for 3D rotation visibility
4. Use `will-change: rotate` for performance hints
5. Use `turn` unit for multi-spin animations (more intuitive than large degree values)
6. Use `backface-visibility: hidden` for card flip UIs
7. When combining with translate/scale, understand the fixed order (translate → rotate → scale)
8. Test 3D rotations at different perspective values (800-1000px is natural)

### Accessibility
- Avoid excessive rotation that may cause motion sickness (especially full-screen or large elements)
- Respect `prefers-reduced-motion`
- Don't rely on rotation as the sole indicator of state or interactivity
- Provide alternative styling for users who disable animations
- Continuous spinning animations can trigger vestibular disorders

```css
@media (prefers-reduced-motion: reduce) {
  .spinner, .card {
    animation: none;
    rotate: none;
  }
}
```

### Performance
- Standalone `rotate` is GPU-accelerated (same as `transform: rotate()`)
- Animating rotation triggers only composite (no layout or paint)
- Use `will-change: rotate` for continuous rotation animations
- 3D rotation with perspective is slightly more expensive but still GPU-composited
- Multiple elements with continuous 3D rotation can stress GPU memory

### Browser Compatibility
| Feature | Chrome | Firefox | Safari | Edge | IE |
|---------|--------|---------|--------|------|-----|
| Standalone rotate | 104+ | 103+ | 16+ | 104+ | No |
| Axis-specific (X/Y/Z) | 104+ | 103+ | 16+ | 104+ | No |
| With perspective | 104+ | 103+ | 16+ | 104+ | No |

Standalone `rotate` is supported in Chrome 104+, Firefox 103+, Safari 16+. For broader browser support, use `transform: rotate()` which has universal support including IE 9+ (with prefix for IE 9).

### Rotate and Transform-Origin Interaction
The `transform-origin` property dramatically affects rotation outcomes:

```css
/* Default — rotates around center */
.default { rotate: 45deg; }

/* Rotates around top-left corner */
.from-top-left { transform-origin: top left; rotate: 45deg; }

/* Rotates around custom point */
.from-custom { transform-origin: 30% 70%; rotate: 45deg; }
```

For a card flip, setting `transform-origin: left center` and `rotate: Y 180deg` creates a book-like page turn effect instead of the standard center-axis flip.

### Rotation Direction Reference
```css
/* Z-axis (default) rotation */
rotate: 45deg;    /* Clockwise */
rotate: -45deg;   /* Counter-clockwise */

/* X-axis rotation (forward/backward) */
rotate: X 45deg;   /* Top tilts away from viewer */
rotate: X -45deg;  /* Top tilts toward viewer */

/* Y-axis rotation (left/right) */
rotate: Y 45deg;   /* Right side recedes */
rotate: Y -45deg;  /* Left side recedes */
```

Understanding these directions is critical when building 3D interfaces. Use a reference like the right-hand rule: align your thumb with the positive axis direction, and your fingers curl in the positive rotation direction.

### Practical: Loading Spinner with Multiple Dots
```css
.spinner-dot {
  width: 12px;
  height: 12px;
  background: #3498db;
  border-radius: 50%;
  animation: spin-dot 1.2s ease-in-out infinite;
}

.spinner-dot:nth-child(2) { animation-delay: 0.1s; }
.spinner-dot:nth-child(3) { animation-delay: 0.2s; }
.spinner-dot:nth-child(4) { animation-delay: 0.3s; }

@keyframes spin-dot {
  0%, 80%, 100% { rotate: 0deg; scale: 0.5; opacity: 0.5; }
  40% { rotate: 180deg; scale: 1; opacity: 1; }
}
```

### Summary Notes
- `rotate` can specify axis: `rotate: X 45deg`
- Default rotation is around Z-axis (2D rotation in the plane)
- Requires perspective on parent for X and Y axis rotations to appear 3D
- Angle units: `deg` (most common), `rad`, `grad`, `turn`
- Use `turn` unit for intuitive fractional rotations (0.5turn = 180deg)
- Combine with `translate` and `scale` individual properties for clean code
- Application order with individual properties is: translate → rotate → scale
- `backface-visibility: hidden` is essential for card flip effects
- `transform-origin` changes the pivot point of rotation
- GPU accelerated for smooth 60fps animations
- Positive rotation is clockwise around the axis
- Supported in Chrome 104+, Firefox 103+, Safari 16+

