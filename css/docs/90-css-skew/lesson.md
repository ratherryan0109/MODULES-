# CSS Skew

## Introduction
The `skew` CSS transform function skews an element along the X and Y axes, creating a slanted or tilted appearance. It's useful for creating perspective effects, ribbon designs, and dynamic visual distortions. Unlike rotation (which spins the entire element) or scaling (which resizes), skew distorts the element's geometry by shifting its edges in opposite directions.

## Learning Objectives
1. Understand skew transformation along X and Y axes
2. Apply skewX and skewY functions
3. Combine skew with other transforms
4. Create parallax and ribbon effects with skew
5. Avoid common pitfalls with skew distortions
6. Counter-skew child elements for readable content
7. Understand the mathematical basis of skew transformations

## Theory

### Skew Functions
```css
skew(ax);           /* Skews both axes by the same angle */
skew(ax, ay);       /* X and Y skew separately */
skewX(angle);       /* X-axis only */
skewY(angle);       /* Y-axis only */
```

The `skew` function (and its variants `skewX` / `skewY`) applies a shear mapping to the element. This mapping shifts points along one axis by an amount proportional to their distance from the other axis. The result is a parallelogram transformation — the element appears "stretched" diagonally.

```css
/* X-axis skew — horizontal distortion */
.skew-x {
  transform: skewX(15deg);
  /* Top edge shifts right, bottom edge shifts left (or vice versa) */
}

/* Y-axis skew — vertical distortion */
.skew-y {
  transform: skewY(15deg);
  /* Left edge shifts up, right edge shifts down (or vice versa) */
}

/* Both axes */
.skew-both {
  transform: skew(10deg, 10deg);
}
```

### How Skew Works
- **skewX**: Shifts top and bottom edges horizontally, creating a diagonal parallelogram effect
- **skewY**: Shifts left and right edges vertically
- Units: `deg`, `rad`, `grad`, `turn`

**Mathematical basis:**
The skew transformation applies a shear matrix. For `skewX(θ)`:
- Each point (x, y) is mapped to (x + y·tan(θ), y)
- The X coordinate shifts proportionally to the Y coordinate
- `tan(45°) = 1`, so at 45 degrees, a point moves horizontally by its vertical distance from the origin

For `skewY(θ)`:
- Each point (x, y) is mapped to (x, y + x·tan(θ))
- The Y coordinate shifts proportionally to the X coordinate

```css
/* At skewX(45deg), a square becomes a parallelogram where:
   - top edge shifts right
   - bottom edge shifts left (relative to unpinned position)
   - each point moves horizontally by its distance from the transform-origin
*/
```

### Visual Effects
| Function | Effect | Use Case |
|----------|--------|----------|
| skewX(angle) | Tilts left/right | Ribbon banners, speed effects |
| skewY(angle) | Tilts up/down | Perspective panels, 3D-like depth |
| skew(angle) | Both axes | Diagonal distortions, dynamic shapes |

```css
/* Ribbon banner effect */
.ribbon {
  background: #e74c3c;
  color: white;
  padding: 10px 40px;
  transform: skewX(-15deg);
  /* Creates a dynamic slanted ribbon look */
}

/* Counter-skew content inside ribbon */
.ribbon-text {
  transform: skewX(15deg); /* Opposite skew to make text straight */
}

/* Perspective panel effect */
.panel {
  transform: skewY(5deg);
  /* Creates a subtle perspective/depth illusion */
}

/* Diagonal distortion */
.diagonal {
  transform: skew(10deg, -5deg);
  /* Complex diagonal shape */
}
```

### Skew and Transform-Origin
The `transform-origin` property affects how skew distorts the element. The skew always shifts points away from the transform origin:

```css
.skew-from-top-left {
  transform-origin: top left;
  transform: skewX(15deg);
  /* Top-left corner stays fixed, everything shifts right */
}

.skew-from-center {
  transform-origin: center;
  transform: skewX(15deg);
  /* Center stays fixed, top shifts right, bottom shifts left */
}

.skew-from-bottom {
  transform-origin: bottom;
  transform: skewX(15deg);
  /* Bottom edge stays fixed, top shifts right */
}
```

### Practical Patterns

**Slanted section divider:**
```css
.section-divider {
  height: 100px;
  background: #2c3e50;
  transform: skewY(-3deg);
  transform-origin: left;
  /* Creates a subtle diagonal edge between sections */
}

.section-divider > * {
  transform: skewY(3deg); /* Counter-skew inner content */
}
```

**Speed/motion lines:**
```css
.speed-line {
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, transparent, #fff);
  transform: skewX(-30deg);
  /* Angled lines suggesting fast motion */
}
```

**Perspective depth effect:**
```css
.floor {
  height: 200px;
  background: repeating-linear-gradient(
    90deg,
    transparent,
    transparent 100px,
    rgba(255,255,255,0.1) 100px,
    rgba(255,255,255,0.1) 102px
  );
  transform: skewX(-45deg) scaleY(0.5);
  /* Creates a 3D floor receding into the distance */
}
```

**Hover tilt effect:**
```css
.tilt-card {
  transition: transform 0.2s ease;
}

.tilt-card:hover {
  transform: skewX(-2deg);
  /* Subtle tilt interaction feedback */
}
```

### Combining Skew with Other Transforms
```css
/* Skew is often combined with scale for perspective effects */
.perspective-element {
  transform: scaleY(0.5) skewX(-45deg);
  /* Creates a 3D-like floor or wall effect */
}

/* Skew with rotation */
.rotated-skew {
  transform: rotate(10deg) skewX(5deg);
  /* Complex distorted shape */
}
```

### Skew vs Rotation
It's important to understand the difference:

| Transform | Effect | Shape |
|-----------|--------|-------|
| rotate(θ) | Spins the element | Same shape, different orientation |
| skewX(θ) | Slants horizontally | Rectangle → Parallelogram |
| skewY(θ) | Slants vertically | Rectangle → Parallelogram |

Rotation preserves all angles (a 90° corner stays 90°). Skew changes angles — a rectangle becomes a parallelogram where angles are no longer 90°.

## Visual Explanation

```
Rectangle Before Skew:        After skewX(15deg):       After skewY(15deg):

┌────────────────────┐        ┌────────────────────┐    ┌────────────────────┐
│                    │       ┌┘                    │    │                   ┌┘
│                    │       │                     │    │                   │
│                    │       │                     │    │                   │
└────────────────────┘       └─────────────────────┘    └────────────────────┘
  All angles 90°              Angles changed!            Angles changed!
  (rectangle)                 (parallelogram)            (parallelogram)


Increasing Skew Angles:

skewX(0deg)      skewX(15deg)     skewX(30deg)      skewX(45deg)
┌────┐           ┌────┐           ┌────┐            ┌────┐
│    │          ┌┘    │          ┌┘    ┐            ┘    ┐
│    │          │     │         ┌┘     ┘            ┐     ┐
└────┘          └─────┘        └──────┘            └─────┘


How skewX Displaces Points Mathematically:

For skewX(θ), each point (x, y) → (x + y·tan(θ), y)

Example with skewX(45deg), tan(45°) = 1:

Point (10, 20) → (10 + 20·1, 20) = (30, 20)
                ↑ shifted right by y distance

Original box:           After skewX(45deg):
(0,0)──(100,0)         (0,0)──(100,0)       top edge stays
  │       │              \        \
  │       │               \        \
(0,50)──(100,50)       (50,50)──(150,50)    bottom edge shifts
                                            right by 50


Counter-Skew Pattern:

Parent element skewed:     Child counter-skewed for readable text:

┌────────────────┐         ┌────────────────┐
┘  skewed parent ┐        ┘┌──────────────┐┐
┐                ┘         ┐│  readable    │┘
└────────────────┘         └┘  text here  ┘┘
                            └──────────────┘
   skewX(15deg)              skewX(-15deg) on child


Transform-Origin Effect on skewX(15deg):

top left                 center                  bottom
┌────────────────┐       ┌────────────────┐      ┌────────────────┐
┘ stays fixed    ┐      ┌┘                ┐     ┌┘                ┐
┐                ┘      │    fixed        │     │                 │
└────────────────┘      └────────────────┘      └────────────────┘
                                                    └ fixed ┘
```

### Common Mistakes
1. Over-skewing causing unreadable content (text becomes illegible at extreme angles)
2. Forgetting to unskew child elements (parent skew distorts children too — counter-skew children)
3. Negative skew causing unexpected direction (understand which direction positive/negative shifts)
4. Skew on text making it illegible (use counter-skew or keep angles under 15°)
5. Using skew when rotate or other transforms would be more appropriate
6. Not accounting for transform-origin's effect on skew direction
7. Expecting skew to create true 3D perspective (it only creates a 2D illusion)
8. Combining skew with complex transforms in unpredictable order

### Best Practices
1. Keep skew under 30 degrees for readability (ideally under 15° for text)
2. Counter-skew child elements by the opposite amount for readable content
3. Use `transform-origin` to control skew direction
4. Combine with `scale` for perspective effects
5. Test skew at multiple viewport sizes (skew at extreme widths can look very different)
6. Use skew for decorative elements, not critical content
7. Apply skew to background/pseudo-elements, counter-skew to content containers
8. Remember that skew is not 3D — use 3D transforms for true depth

### Performance
Skew is GPU accelerated (part of transform). It has the same performance characteristics as other transform functions — no layout or paint triggers.

```css
/* Skew is fully GPU-accelerated */
.element {
  transition: transform 0.3s ease;
}
.element:hover {
  transform: skewX(-5deg);
}
```

### Accessibility
- Skewed text can be difficult or impossible to read — ensure counter-skew is applied
- Don't rely on skew to convey meaning (users with visual impairments won't perceive it)
- Skewed elements may overflow containers — test at all viewport sizes
- Animated skew effects should respect `prefers-reduced-motion`
- Provide unskewed alternatives for critical content

### Browser Compatibility
| Feature | Chrome | Firefox | Safari | Edge | IE |
|---------|--------|---------|--------|------|-----|
| skew() | 36+ | 16+ | 9+ | 12+ | 10+ (with prefix) |
| skewX() | 36+ | 16+ | 9+ | 12+ | 10+ (with prefix) |
| skewY() | 36+ | 16+ | 9+ | 12+ | 10+ (with prefix) |

Skew transforms are supported in all modern browsers. IE 9 supported skew with the `-ms-` prefix. All other modern browsers have full support without prefixes.

### Practical Example: Hexagonal Image Grid
```css
.hex-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}

.hex-item {
  width: 200px;
  height: 200px;
  overflow: hidden;
  transform: rotate(60deg) skewX(-30deg);
}

.hex-item-inner {
  width: 100%;
  height: 100%;
  transform: skewX(30deg) rotate(-60deg);
  overflow: hidden;
}

.hex-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.2);
}
```

### Diagonal Section Divider with Skew
```css
.diagonal-section {
  position: relative;
  padding: 80px 0;
  margin-top: -50px;
}

.diagonal-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100px;
  background: inherit;
  transform: skewY(-3deg);
  transform-origin: top left;
}
```

### Skew in 3D Contexts
While skew itself is a 2D operation, combining skew with scale creates passable 3D illusions for isometric or pseudo-3D designs:

```css
/* Isometric cube face */
.isometric-face-top {
  transform: skewX(-30deg) scaleY(0.866);
  /* Creates a 30-degree isometric top face */
}

.isometric-face-right {
  transform: skewY(30deg);
  /* Creates a 30-degree isometric right face */
}

.isometric-face-left {
  transform: skewY(-30deg);
  /* Creates a 30-degree isometric left face */
}
```

### Summary Notes
- `skewX(angle)` shifts top/bottom edges horizontally — creates a parallelogram
- `skewY(angle)` shifts left/right edges vertically — creates a parallelogram
- Positive values skew clockwise, negative values counter-clockwise
- Counter-skew child elements for text readability (apply opposite angle)
- Use `transform-origin` to control which edge "anchors" the skew
- Best for: ribbon banners, section dividers, perspective illusions, speed effects, isometric designs
- Keep under 30° for readability, under 15° for text
- GPU accelerated — same performance as other transforms
- Skew changes angles (unlike rotation which preserves them)
- Combine with scale for pseudo-3D and isometric effects
- All modern browsers support skew transforms (IE 9+ with prefix)

