# CSS 2D Transformations

## Introduction
CSS 2D transformations allow elements to be translated, rotated, scaled, and skewed in two-dimensional space. They are fundamental to modern web design, enabling interactive effects, micro-interactions, and responsive layout adjustments without JavaScript. All 2D transforms are GPU-accelerated for smooth performance and don't trigger layout recalculation on surrounding elements.

## Learning Objectives
1. Apply all 2D transform functions effectively
2. Combine multiple transforms for complex effects
3. Use transform-origin to control transformation pivot
4. Understand the matrix() function
5. Create practical UI patterns with 2D transforms
6. Understand the right-to-left transform execution order
7. Properly animate transforms with transitions and keyframes
8. Debug common transform issues

## Theory

### Available 2D Transform Functions
| Function | Description | Example |
|----------|-------------|---------|
| `translate(tx, ty)` | Moves element | `translate(50px, 100px)` |
| `rotate(angle)` | Rotates | `rotate(45deg)` |
| `scale(sx, sy)` | Scales size | `scale(1.5, 1.2)` |
| `skew(ax, ay)` | Skews | `skew(10deg, 5deg)` |
| `matrix(a,b,c,d,e,f)` | 6-value transform matrix | `matrix(1,0,0,1,0,0)` |

```css
/* Each 2D transform function */
.translate { transform: translate(50px, 100px); }
.rotate { transform: rotate(45deg); }
.scale { transform: scale(1.5); }
.skew { transform: skew(10deg, 5deg); }
.matrix { transform: matrix(1, 0.3, 0, 1, 0, 0); }

/* Partial axis functions */
.translate-x { transform: translateX(50px); }
.translate-y { transform: translateY(-20px); }
.scale-x { transform: scaleX(2); }
.scale-y { transform: scaleY(0.5); }
.skew-x { transform: skewX(15deg); }
.skew-y { transform: skewY(10deg); }
```

### Transform Order (Right to Left)
Multiple transform functions are applied right-to-left:

```css
transform: translateX(50px) rotate(45deg) scale(1.5);
/* Applied order: 1. scale, 2. rotate, 3. translate */
```

**Why right-to-left?**
Each transform function modifies the coordinate system for subsequent (leftward) functions. The function written farthest right is applied to the original coordinate system. Each subsequent function operates on the already-transformed coordinates.

```css
/* Example: Different order = different result */
.example-a { transform: translateX(100px) rotate(45deg); }
/* 1. Rotate 0° (no rotation yet)
   2. Translate 100px right
   3. Rotate 45° (after translation)
   Result: Element moves 100px right, then rotates in place */

.example-b { transform: rotate(45deg) translateX(100px); }
/* 1. No transform
   2. Rotate 45°
   3. Translate 100px along rotated X-axis
   Result: Element rotates 45°, then moves diagonally (along rotated axis) */
```

**Visualizing transform order:**
```css
/* Think of each transform as a step in a chain:
   Final Position = translate( rotate( scale( Element ) ) )
   
   transform: scale(1.5) rotate(45deg) translateX(50px);
   = scale(1.5) is applied FIRST to the original element
   = rotate(45deg) is applied SECOND to the scaled element
   = translateX(50px) is applied THIRD to the rotated/scaled element
   = The translation moves along the rotated/scaled axis, not the original axis
*/
```

### Transform Origin
Controls the anchor point for transformations:

```css
transform-origin: center;           /* default (50% 50%) */
transform-origin: top left;
transform-origin: 50% 50%;
transform-origin: 0 0;
transform-origin: right bottom;

/* Three-value syntax for 3D */
transform-origin: 50% 50% 0;
```

**How transform-origin affects each transform:**
- **translate**: transform-origin does NOT affect translation (always moves along the same path)
- **rotate**: Element spins around the specified point
- **scale**: Element grows/shrinks toward/away from the specified point
- **skew**: The origin determines which edge "anchors" the skew distortion

```css
/* Same rotation, different origins */
.rotate-center { transform-origin: center; transform: rotate(45deg); }
.rotate-top-left { transform-origin: top left; transform: rotate(45deg); }
.rotate-bottom-right { transform-origin: bottom right; transform: rotate(45deg); }

/* Scale with different origins */
.scale-from-left { transform-origin: left center; transform: scaleX(0); }
.scale-from-top { transform-origin: top; transform: scaleY(0); }
```

### The Matrix Function
```css
matrix(scaleX, skewY, skewX, scaleY, translateX, translateY)
```

The `matrix()` function combines all 2D transforms into a single 6-value matrix. It represents a 3×3 affine transformation matrix:

```
[scaleX]  [skewX]  [translateX]
[skewY]   [scaleY] [translateY]
[0]       [0]      [1]
```

```css
/* Identity matrix (no transform) */
transform: matrix(1, 0, 0, 1, 0, 0);

/* Scale(2, 2) — uniform scaling */
transform: matrix(2, 0, 0, 2, 0, 0);

/* Rotate(45deg) — rotation */
/* cos(45) = 0.707, sin(45) = 0.707 */
transform: matrix(0.707, 0.707, -0.707, 0.707, 0, 0);

/* Translate(100px, 50px) — movement */
transform: matrix(1, 0, 0, 1, 100, 50);

/* Combined — scale + translate */
transform: matrix(2, 0, 0, 1.5, 100, 50);
/* = scale(2, 1.5) translate(100px, 50px) */
```

While `matrix()` is powerful, it's rarely used directly because the individual functions are more readable. Matrix is most useful when:
- You need to express a transform mathematically
- You're generating transforms programmatically (JavaScript canvas, SVG)
- You need to combine transforms in ways that individual functions can't express

### Practical Patterns

**Centering with transforms:**
```css
.centered-element {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* Perfect centering regardless of element size */
}
```

**Flip card:**
```css
.flip-card {
  perspective: 1000px;
}

.flip-card-inner {
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  backface-visibility: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
}

.flip-card-back {
  transform: rotateY(180deg);
}
```

**Hover elevation:**
```css
.card {
  transform: translateY(0) scale(1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.12);
}
```

**Modal entrance:**
```css
.modal {
  transform: scale(0.8) translateY(20px);
  opacity: 0;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.modal.open {
  transform: scale(1) translateY(0);
  opacity: 1;
}
```

**Bounce animation with cubic-bezier:**
```css
@keyframes bounce-in {
  0% { transform: scale(0.3); opacity: 0; }
  50% { transform: scale(1.05); }
  70% { transform: scale(0.9); }
  100% { transform: scale(1); opacity: 1; }
}

.bounce-element {
  animation: bounce-in 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}
```

**Slider navigation:**
```css
.slider-track {
  transform: translateX(0);
  transition: transform 0.4s ease;
}

.slider-track.slide-2 { transform: translateX(-100%); }
.slider-track.slide-3 { transform: translateX(-200%); }
```

## Visual Explanation

```
The Five 2D Transform Functions:

Original:       translate(50, 30)    rotate(45deg)
┌────┐          ┌────┐              ┌─┐
│    │          │    │  →           ┌┘ └┐
└────┘          └────┘             └┐ ┌┘
                                     └─┘

scale(1.5)      skew(15deg, 5deg)   matrix(a,b,c,d,e,f)
┌──────┐        ┌────────┐          ┌────┐
│      │        ┘        ┐          │    │  ← 6-value matrix
└──────┘        ┐        ┘          └────┘  (any combined)
                └────────┘


Right-to-Left Transform Execution:

  transform: translateX(50px) rotate(45deg) scale(1.5)

  Apply RIGHTMOST first (scale), then work LEFT:

  Step 1: scale(1.5)      Step 2: rotate(45deg)    Step 3: translateX(50px)
  ┌────┐    ┌────────┐    ┌──┐                     ┌─────┐
  │    │ →  │        │ → ┌┘  └┐  →                │     │
  └────┘    └────────┘   └┐  ┌┘                   └─────┘
                           └──┘


Order Matters — Different Order = Completely Different Result:

  A: translateX(100px) rotate(45deg)

  ┌────┐          ┌────┐            ┌─┐
  │    │  → move  │    │  → rotate  ┌┘ └┐
  └────┘          └────┘           └┐ ┌┘
                                     └─┘
  Result: Element moves right, then rotates in place.

  B: rotate(45deg) translateX(100px)

  ┌────┐          ┌─┐               ┌─────┐
  │    │  →rotate ┌┘ └┐  → move     │     │
  └────┘          └┐ ┌┘  diagonally └─────┘
                   └─┘
  Result: Element rotates, then moves along its rotated X-axis (diagonal).


The matrix() Function — Affine Transform Matrix:

  ┌              ┐
  │  scaleX  skewX  translateX │
  │  skewY   scaleY translateY │
  │  0       0      1        │
  └              ┘

  matrix(2, 0, 0, 1.5, 100, 50)

  = scaleX(2) + skewX(0) + translateX(100)
    skewY(0) + scaleY(1.5) + translateY(50)

  = scale(2, 1.5) translate(100px, 50px)


Transform-Origin Effects — Same rotate(45deg):

  ┌──────────────────────────────────────┐
  │ center (default)    top left          │
  │    ┌─┐                ┌─┐            │
  │   ┌┘ └┐              ┌┘ └┐          │
  │   └┐ ┌┘              └┐ ┌┘          │
  │    └─┘                └─┘            │
  │                                      │
  │ bottom right        right center     │
  │      ┌─┐                 ┌─┐         │
  │     ┌┘ └┐              ┌┘ └┐        │
  │     └┐ ┌┘              └┐ ┌┘        │
  │      └─┘                └─┘          │
  └──────────────────────────────────────┘
```

### Common Mistakes
1. Wrong transform order producing unexpected results (remember: right-to-left!)
2. Using two transform declarations (second overwrites first — combine in one declaration)
3. Forgetting transform-origin affects all transforms (not just rotation)
4. Combining transforms with position properties (use translate instead of top/left)
5. Applying transforms to inline elements without `display: inline-block` or `block`
6. Not accounting for the new stacking context created by transforms
7. Transitioning all properties including transform when only one is needed
8. Using matrix() without understanding the parameter order

### Best Practices
1. Think in right-to-left order for multiple transforms
2. Use shorthand transforms for cleaner code
3. Keep transforms simple for maintainability
4. Combine related transforms in one declaration
5. Use `translate()` instead of `top`/`left` for position animations
6. Use `transform-origin` deliberately — don't rely on default
7. Add `will-change: transform` for elements that animate continuously
8. Test transforms at different screen sizes and zoom levels

### Performance
All 2D transforms are GPU accelerated and composited:
- No layout triggers — surrounding elements are unaffected
- No paint triggers — only the compositor handles transforms
- 60fps is achievable with multiple transformed elements

```css
/* Performance comparison */
/* ❌ Bad — triggers layout */
position: relative; top: 10px; left: 20px;

/* ✅ Good — GPU composited */
transform: translate(10px, 20px);
```

### Accessibility
- Transforms should not hide content from screen readers
- Animated transforms should respect `prefers-reduced-motion`
- Transform effects shouldn't be the sole indicator of interactivity
- Don't use transforms to make content inaccessible (e.g., scaling to 0 to "hide")
- Ensure keyboard focus indicators are visible on transformed elements

### Browser Compatibility
| Function | Chrome | Firefox | Safari | Edge | IE |
|----------|--------|---------|--------|------|-----|
| translate() | 36+ | 16+ | 9+ | 12+ | 10+ |
| rotate() | 36+ | 16+ | 9+ | 12+ | 10+ |
| scale() | 36+ | 16+ | 9+ | 12+ | 10+ |
| skew() | 36+ | 16+ | 9+ | 12+ | 10+ |
| matrix() | 36+ | 16+ | 9+ | 12+ | 10+ (with prefix) |
| transform-origin | 36+ | 16+ | 9+ | 12+ | 10+ |

Supported in all modern browsers (IE 10+). IE 9 supports transforms with the `-ms-` prefix. All modern browsers support unprefixed 2D transforms.

### Summary Notes
- 5 core functions: translate, rotate, scale, skew, matrix
- Transforms apply right-to-left (last function = first applied)
- transform-origin controls the anchor point (default: center)
- GPU accelerated — use over layout properties for animations
- Cannot be applied to inline elements (needs inline-block/block)
- matrix() combines all transforms into 6 values (rarely needed directly)
- Use translate() for centering: `translate(-50%, -50%)`
- Combine transforms in one declaration, don't overwrite
- All modern browsers support 2D transforms
- Will-change: transform promotes GPU compositing
