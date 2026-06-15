# CSS Scale

## Introduction
The `scale` CSS property is a standalone transform property that scales (sizes) an element along the X, Y, and Z axes. It provides a cleaner way to resize elements without the `transform` function overhead, enabling GPU-accelerated scaling animations that don't trigger layout recalculation or repaints.

## Learning Objectives
1. Use the standalone scale property for 2D and 3D scaling
2. Differentiate between uniform and non-uniform scaling
3. Combine scale with other individual transform properties
4. Create hover zoom effects and scale-based animations
5. Understand scale performance benefits
6. Apply scaling with proper transform-origin
7. Handle negative scale values for mirror effects

## Theory

### Standalone Scale Property
```css
scale: 1.5;           /* Uniform scale (both axes same) */
scale: 1.5 0.5;       /* X, Y different */
scale: 1.5 1.5 2.0;   /* 3D scale (X, Y, Z) */
scale: none;          /* Default (no scaling) */
```

The standalone `scale` property follows the CSS Transforms Module Level 2 specification, providing a dedicated way to scale elements without the `scale()` function inside `transform`. This enables independent control over scaling, separate from rotation and translation.

```css
/* Uniform scaling */
.element {
  scale: 1.5; /* 150% of original size on all axes */
}

/* Non-uniform scaling */
.element {
  scale: 2 0.5; /* Double width, half height */
}

/* 3D scaling (directional depth) */
.scene {
  perspective: 800px;
}
.element {
  scale: 1 1 2; /* Double depth */
}
```

### Scale Values
| Value | Effect |
|-------|--------|
| 1 | Original size (no scaling) |
| 0.5 | Half size |
| 2 | Double size |
| 0 | Invisible (zero size — element disappears) |
| -1 | Mirrored (flipped 180°) |

```css
/* Scale value examples */
.scale-half { scale: 0.5; }       /* Shrink to 50% */
.scale-normal { scale: 1; }       /* Original size */
.scale-double { scale: 2; }       /* Enlarge to 200% */
.scale-mirror-x { scale: -1 1; }  /* Mirror horizontally */
.scale-mirror-y { scale: 1 -1; }  /* Mirror vertically */
.scale-mirror-both { scale: -1; } /* Mirror both axes = rotate 180° */
.scale-invisible { scale: 0; }    /* Element collapses to nothing */
```

**Understanding negative values:**
- `scale(-1, 1)` mirrors the element horizontally (left becomes right)
- `scale(1, -1)` mirrors vertically (top becomes bottom)
- `scale(-1, -1)` is equivalent to `rotate(180deg)` — both axes mirrored
- Negative values flip around the transform-origin point

### Scaling Axes
| Axis | Property aspect | Effect |
|------|----------------|--------|
| X | width-wise | Stretches/squeezes horizontally |
| Y | height-wise | Stretches/squeezes vertically |
| Z | depth-wise | Scales in 3D space (requires 3D context) |

```css
/* Individual axis scaling */
.scale-x { scale: 2 1; }         /* Double width only */
.scale-y { scale: 1 1.5; }       /* 1.5x height only */
.scale-xy { scale: 2 1.5; }      /* Different X and Y */

/* Z-axis scaling requires 3D context */
.scene {
  perspective: 800px;
  transform-style: preserve-3d;
}
.scale-z { scale: 1 1 3; }       /* Triple depth */
```

### Scaling and transform-origin
The `transform-origin` property controls the anchor point for scaling. Elements scale outward from (or inward toward) this point.

```css
/* Different origins for different scale behavior */
.scale-center { transform-origin: center; scale: 0; }
/* Element shrinks to its center — all edges move inward equally */

.scale-top-left { transform-origin: top left; scale: 0; }
/* Element shrinks to its top-left corner — bottom and right edges move inward */

.scale-bottom { transform-origin: bottom center; scale: 2; }
/* Element expands upward from its bottom edge */
```

**Practical example — hover zoom with different origins:**
```css
.gallery-item {
  overflow: hidden;
}

.gallery-item img {
  scale: 1;
  transition: scale 0.4s ease;
  transform-origin: center;
}

.gallery-item:hover img {
  scale: 1.15; /* Smooth zoom on hover */
}
```

### Combining with Other Transform Properties
```css
.element {
  translate: 100px 50px;
  rotate: 45deg;
  scale: 1.5;
}
```

**Application order:**
When using individual transform properties, the browser applies them in: `translate` → `rotate` → `scale`. For scaling, this means the element is first moved to its translated position, rotated, and then scaled from the transform-origin. The scaling does NOT affect the translation or rotation amounts — it only affects the final visual size.

```css
/* Individual properties — fixed order */
.element {
  translate: 100px 0;
  rotate: 45deg;
  scale: 2;
}
/* Applied: move 100px → rotate 45° → scale 2x */
/* The element is scaled AFTER rotation, so it's 2x the rotated size */

/* Equivalent transform — same order */
.element-eq {
  transform: translate(100px, 0) rotate(45deg) scale(2);
}
```

### Practical Patterns

**Hover zoom effect:**
```css
.card {
  transition: scale 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  scale: 1.05;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
}
```

**Press effect (active state):**
```css
.button {
  transition: scale 0.1s ease;
  cursor: pointer;
}

.button:active {
  scale: 0.95; /* Slight shrink on press feels tactile */
}
```

**Scale-in reveal animation:**
```css
.modal-backdrop {
  opacity: 0;
  transition: opacity 0.3s ease;
}

.modal-content {
  scale: 0.9;
  opacity: 0;
  transition: scale 0.3s ease, opacity 0.3s ease;
}

.modal-open .modal-backdrop {
  opacity: 1;
}

.modal-open .modal-content {
  scale: 1;
  opacity: 1;
}
```

**Scale pulse (attention-getting):**
```css
@keyframes pulse {
  0%, 100% { scale: 1; }
  50% { scale: 1.1; }
}

.notification-dot {
  animation: pulse 2s ease-in-out infinite;
  transform-origin: center;
}
```

**Full-screen expand:**
```css
.thumbnail {
  scale: 1;
  transition: scale 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  cursor: pointer;
}

.thumbnail.expanded {
  scale: 3; /* Expand to 3x size */
}
```

## Visual Explanation

```
Scale Value Spectrum:

  scale(0)     scale(0.5)   scale(1)     scale(1.5)    scale(2)
  ·            ┌──┐         ┌────┐       ┌──────┐      ┌────────┐
  (invisible)  │  │         │    │       │      │      │        │
               └──┘         └────┘       └──────┘      └────────┘


Uniform vs Non-Uniform Scale:

Uniform: scale(1.5)        Non-uniform: scale(2, 1)    scale(1, 1.5)
┌──────┐                   ┌────────┐                  ┌────┐
│      │                   │        │                  │    │
│      │                   │        │                  │    │
└──────┘                   └────────┘                  └────┘

Non-uniform: scale(2, 1.5)
┌────────┐
│        │
│        │
└────────┘


Transform Origin Effect on scale(0):

  Center                    Top Left                  Bottom Right
  ┌────┐                    ┌────┐                    ┌────┐
  │    │  shrink to center  │    │  shrink to          │    │  shrink to
  │    │  → ·               │    │  top-left → ┌       │    │  bottom-right
  └────┘                    └────┘    └        └────┘         →     ┐
                                                                    ┘

  Transform origin determines the anchor point the element shrinks toward
  or grows away from.


Negative Scale (Mirroring):

scale(-1, 1)              scale(1, -1)              scale(-1, -1)
┌────┐    →    ┌────┐     ┌────┐    →    ┌────┐    ┌────┐    →    ┌────┐
│ A  │         │  A │     │  A │         │  V │    │  A │         │  V │
│    │         │    │     │    │         │    │    │    │         │    │
└────┘         └────┘     └────┘         └────┘    └────┘         └────┘
horizontal             vertical                 both = rotate(180deg)
mirror                 mirror


Fixed Application Order:

  translate → rotate → scale

  1. translateX(100px)   2. rotate(45deg)      3. scale(2)
  ┌────┐                 ┌────┐      ┌─┐       ┌──┐
  │    │  →  ┌────┐      │    │  →  ┌┘ └┐     │  │  →  ┌──┐
  └────┘     │    │      └────┘     └┐ ┌┘     │  │     ┌┘  └┐
             └────┘                  └─┘      └──┘     └──  ┘
```

### Common Mistakes
1. Using scale without transition for jarring size changes
2. Negative values causing unintended mirroring (use positive values unless mirroring is desired)
3. Not accounting for text readability at extreme scales (very large or very small text)
4. Scaling children with fixed dimensions causing overflow (scaled element occupies same layout space)
5. Forgetting that scale doesn't affect layout — the element's original space remains
6. Using `scale: 0` to hide elements (use `visibility: hidden` or `display: none` instead)
7. Not setting `transform-origin` for the desired scaling direction
8. Confusing uniform and non-uniform scaling syntax

### Best Practices
1. Use `scale: 1.1` for subtle hover effects (feel natural and responsive)
2. Keep scale factors reasonable (0.5-3) for readability and visual comfort
3. Use with `transform-origin` to control scaling direction
4. Combine with `transition` for smooth animations
5. Use `scale: 0.95` for tactile press/click feedback
6. Use negative scale values only when mirroring is explicitly needed
7. For complex scale+rotate+translate, prefer individual properties for clarity
8. Test scale animations at edge values (very large or very small)

### Performance
Scale operations are GPU-composited (like all transforms) and don't trigger layout or paint. This makes them ideal for animations:

```css
/* High-performance scale animation */
.element {
  will-change: scale;
  transition: scale 0.3s ease;
}

/* Only composite — no layout or paint */
```

### Accessibility
- Large scale changes may trigger vestibular disorders (especially continuous pulsing)
- Use `prefers-reduced-motion` to disable scale animations for affected users
- Don't rely solely on scale for conveying information (screen readers don't perceive scale)
- Text that scales very small may become completely unreadable
- Elements that scale very large may overflow the viewport on small screens
- Ensure interactive elements remain tappable/clickable after scaling

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scale: none !important;
  }
}
```

### Browser Compatibility
| Feature | Chrome | Firefox | Safari | Edge | IE |
|---------|--------|---------|--------|------|-----|
| Standalone scale | 104+ | 103+ | 16+ | 104+ | No |
| Non-uniform (X, Y) | 104+ | 103+ | 16+ | 104+ | No |
| 3D (with Z) | 104+ | 103+ | 16+ | 104+ | No |

Standalone `scale` is supported in Chrome 104+, Firefox 103+, Safari 16+. For broader browser support, use `transform: scale()` which has universal support (IE 9+ with prefix).

### Summary Notes
- `scale` resizes element from transform-origin (default: center)
- Values > 1 enlarge, values between 0-1 shrink
- Value of 1 = original size, 0 = invisible
- Negative values mirror the element (scale(-1, 1) = horizontal flip)
- GPU accelerated for smooth animations (no layout/paint)
- Use with `:hover` for zoom effects and `:active` for press effects
- Combine with `translate`, `rotate` for complex effects (fixed order: translate → rotate → scale)
- `transform-origin` controls the anchor point for scaling
- Supported in Chrome 104+, Firefox 103+, Safari 16+
- For broader support, use `transform: scale()`
