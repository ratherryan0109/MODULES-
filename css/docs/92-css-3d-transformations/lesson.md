# CSS 3D Transformations

## Introduction
CSS 3D transformations extend 2D transforms with depth, allowing elements to be positioned and animated in three-dimensional space. With perspective, rotateX/Y/Z, translateZ, and scaleZ, you can create immersive 3D experiences using pure CSS — no JavaScript or WebGL required. From card flips to product showcases, 3D transforms bring a new dimension to web interfaces.

## Learning Objectives
1. Understand 3D coordinate system and perspective
2. Apply 3D transform functions: rotateX, rotateY, rotateZ, translateZ, scaleZ
3. Use perspective and perspective-origin for depth
4. Create 3D card flips and cube effects
5. Manage backface-visibility and transform-style
6. Build practical 3D UI patterns
7. Understand performance implications of 3D transforms
8. Debug common 3D rendering issues

## Theory

### 3D Coordinate System
- **X-axis**: Horizontal (left/right)
- **Y-axis**: Vertical (up/down)
- **Z-axis**: Depth (toward/away from viewer)

```
        -Y
         │
         │
  -X─────┼───── +X
         │
         │
        +Y
         │
         │  +Z (toward viewer)
         │ /
         │/
         └───── -Z (away from viewer)
```

The Z-axis is the key addition in 3D transforms. Positive Z values bring elements toward the viewer; negative Z values push them away. The Z-axis is perpendicular to the screen surface.

### Key Properties

| Property | Description | Default |
|----------|-------------|---------|
| `perspective` | Defines depth (distance from viewer in px) | none (no 3D) |
| `perspective-origin` | Viewer's position relative to scene | 50% 50% |
| `transform-style` | `flat` or `preserve-3d` for children | flat |
| `backface-visibility` | Shows/hides element's back | visible |

```css
/* Setting up 3D space */
.scene {
  perspective: 800px;
  perspective-origin: 50% 50%;
}

.element-3d {
  transform-style: preserve-3d;
  backface-visibility: hidden;
}
```

**Understanding perspective:**
The `perspective` property defines the distance between the viewer and the z=0 plane. Smaller values create more dramatic 3D effects (like viewing from very close), while larger values create subtler effects (like viewing from far away).

```css
/* Perspective comparison */
.dramatic { perspective: 200px; }  /* Very strong 3D effect */
.natural { perspective: 800px; }   /* Natural-looking depth */
.subtle { perspective: 2000px; }   /* Very subtle 3D */
```

### 3D Transform Functions
```css
/* Core 3D transform functions */
.element {
  transform: 
    perspective(800px)     /* Can also be set on parent */
    rotateX(45deg)         /* Tilt forward/backward */
    rotateY(45deg)         /* Turn left/right */
    rotateZ(45deg)         /* Spin (same as 2D rotate) */
    translateZ(100px)      /* Move closer/farther */
    scaleZ(2)              /* Scale along Z (depth) */
    translate3d(x, y, z)   /* 3D translation shorthand */
    scale3d(x, y, z)       /* 3D scaling shorthand */
    rotate3d(x, y, z, a)   /* 3D rotation around vector */
}
```

```css
/* Individual 3D transforms */
.rotate-x { transform: rotateX(45deg); }     /* Tilt forward/backward */
.rotate-y { transform: rotateY(45deg); }     /* Turn left/right */
.rotate-z { transform: rotateZ(45deg); }     /* Spin (same as 2D) */
.translate-z { transform: translateZ(100px); } /* Bring toward viewer */
.scale-z { transform: scaleZ(2); }            /* Depth scaling */
```

### Perspective
```css
/* On parent (affects all children) — RECOMMENDED */
.parent { perspective: 800px; }

/* As a transform function (affects only that element) */
.child { transform: perspective(800px) rotateY(45deg); }
```

**Difference between parent perspective and function perspective:**
- Parent perspective: All children share the same vanishing point. The 3D scene feels unified.
- Function perspective: Each element has its own perspective. Elements don't share a common 3D space.

```css
/* Parent perspective — unified scene */
.scene {
  perspective: 800px;
}
.card {
  transform: rotateY(45deg);
}
.card:nth-child(2) {
  transform: rotateY(-45deg);
}
/* Both cards share the same vanishing point */

/* Function perspective — independent */
.card {
  transform: perspective(800px) rotateY(45deg);
}
.card:nth-child(2) {
  transform: perspective(800px) rotateY(-45deg);
}
/* Each card has its own vanishing point — less natural */
```

### Creating 3D Space
```css
/* Parent must have these for 3D children */
.parent {
  perspective: 800px;
  transform-style: preserve-3d;
}
```

The `transform-style: preserve-3d` property is critical. Without it, child elements are flattened into the parent's plane (the default `flat` behavior). With `preserve-3d`, children maintain their individual 3D positions within the parent's 3D space.

```css
/* Without preserve-3d — children flattened */
.carousel-flat {
  perspective: 800px;
  /* Missing transform-style: preserve-3d */
}
.carousel-flat .item {
  transform: rotateY(45deg) translateZ(200px);
  /* Children appear flat, no 3D effect */
}

/* With preserve-3d — children in 3D space */
.carousel-3d {
  perspective: 800px;
  transform-style: preserve-3d;
}
.carousel-3d .item {
  transform: rotateY(45deg) translateZ(200px);
  /* Children appear in true 3D */
}
```

### Creating 3D Space with backface-visibility
The `backface-visibility` property controls whether the back of an element is visible when rotated away from the viewer:

```css
.backface-hidden {
  backface-visibility: hidden;
  /* Essential for card flips — prevents the back face from showing through */
}

.backface-visible {
  backface-visibility: visible; /* Default */
}
```

### Practical 3D Patterns

**3D Card Flip:**
```css
.flip-container {
  perspective: 1000px;
}

.flipper {
  position: relative;
  width: 300px;
  height: 200px;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flipper:hover {
  transform: rotateY(180deg);
}

.front, .back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.front {
  background: #3498db;
}

.back {
  background: #e74c3c;
  transform: rotateY(180deg);
}
```

**3D Cube:**
```css
.cube-container {
  perspective: 1000px;
  width: 200px;
  height: 200px;
}

.cube {
  position: relative;
  width: 200px;
  height: 200px;
  transform-style: preserve-3d;
  animation: spin-cube 8s infinite linear;
}

.cube-face {
  position: absolute;
  width: 200px;
  height: 200px;
  border: 2px solid black;
  opacity: 0.8;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
}

.front  { background: rgba(255, 0, 0, 0.8); transform: translateZ(100px); }
.back   { background: rgba(0, 255, 0, 0.8); transform: rotateY(180deg) translateZ(100px); }
.right  { background: rgba(0, 0, 255, 0.8); transform: rotateY(90deg) translateZ(100px); }
.left   { background: rgba(255, 255, 0, 0.8); transform: rotateY(-90deg) translateZ(100px); }
.top    { background: rgba(255, 0, 255, 0.8); transform: rotateX(90deg) translateZ(100px); }
.bottom { background: rgba(0, 255, 255, 0.8); transform: rotateX(-90deg) translateZ(100px); }

@keyframes spin-cube {
  from { transform: rotateY(0deg) rotateX(0deg); }
  to { transform: rotateY(360deg) rotateX(360deg); }
}
```

**3D Carousel:**
```css
.carousel-container {
  perspective: 1200px;
  width: 300px;
  height: 200px;
}

.carousel {
  width: 300px;
  height: 200px;
  transform-style: preserve-3d;
  animation: spin-carousel 12s infinite linear;
}

.carousel-item {
  position: absolute;
  width: 200px;
  height: 130px;
  left: 50px;
  backface-visibility: hidden;
}

.carousel-item:nth-child(1) { transform: rotateY(0deg) translateZ(300px); }
.carousel-item:nth-child(2) { transform: rotateY(60deg) translateZ(300px); }
.carousel-item:nth-child(3) { transform: rotateY(120deg) translateZ(300px); }
.carousel-item:nth-child(4) { transform: rotateY(180deg) translateZ(300px); }
.carousel-item:nth-child(5) { transform: rotateY(240deg) translateZ(300px); }
.carousel-item:nth-child(6) { transform: rotateY(300deg) translateZ(300px); }

@keyframes spin-carousel {
  from { transform: rotateY(0deg); }
  to { transform: rotateY(360deg); }
}
```

**3D Perspective Text:**
```css
.scene {
  perspective: 500px;
}

.text-3d {
  font-size: 4rem;
  font-weight: bold;
  transform: rotateX(20deg) rotateY(-15deg);
  transform-origin: bottom;
  text-shadow: 0 10px 20px rgba(0,0,0,0.3);
}
```

## Visual Explanation

```
3D Coordinate System:

        -Y (up)
         │
         │
  -X─────┼────── +X (right)
         │
         │
        +Y (down)
         │
         │  +Z (toward viewer)
         │ /
         │/
    ─────●────── -Z (away from viewer)


Z-Axis Depth — translateZ Values:

  translateZ(-200px)     translateZ(0)      translateZ(200px)

  ┌────────┐            ┌────┐             ╔════════╗
  │farther │            │at   │             │ closer │
  │from    │            │plane│             │ to     │
  │viewer  │            └────┘             │ viewer │
  └────────┘                                ╚════════╝


Perspective Values Compared:

  perspective: 200px (dramatic)    perspective: 800px (natural)

  ╱────────────────────────╲       ┌──────────────────────┐
  │ very strong foreshort.  │       │ natural depth like   │
  │ extreme 3D effect       │       │ real-world viewing   │
  ╲────────────────────────╱       └──────────────────────┘

  perspective: 2000px (subtle)
  ┌──────────────────────────────────┐
  │ hardly noticeable 3D             │
  │ very flat, far away view         │
  └──────────────────────────────────┘


3D Card Flip Sequence (rotateY):

  perspective: 1000px on parent

  ┌────┐          ┌────┐          ┌────┐          ┌────┐
  │front│          │  fr│          │    │          │back│
  │    │          │    │          │    │          │    │
  └────┘          └────┘          └────┘          └────┘
 rotateY(0°)    rotateY(45°)    rotateY(90°)    rotateY(180°)
  face visible    narrowing      edge-on,        back face
                  slightly        face hidden     visible


3D Cube Face Positions:

  Six faces rotated and translated outward from center:

                  ┌──────────┐
                  │ TOP      │
                  │ rotateX(│
                  │ -90°)    │
                  │ translateZ(100px)
┌──────────┐     ┌──────────┐     ┌──────────┐     ┌──────────┐
│ LEFT     │     │ FRONT    │     │ RIGHT    │     │ BACK     │
│ rotateY( │     │ translate│     │ rotateY( │     │ rotateY( │
│ -90°)    │     │ Z(100px) │     │ 90°)     │     │ 180°)    │
│ translate│     │          │     │ translate│     │ translate│
│ Z(100px) │     └──────────┘     │ Z(100px) │     │ Z(100px) │
└──────────┘                      └──────────┘     └──────────┘
                  ┌──────────┐
                  │ BOTTOM   │
                  │ rotateX( │
                  │ 90°)     │
                  │ translateZ(100px)
                  └──────────┘


preserve-3d vs flat:

  transform-style: flat (default)    transform-style: preserve-3d

  ┌──────────────────┐              ┌──────────────────┐
  │ parent           │              │ parent           │
  │  ┌──┐            │              │   ┌──────────┐   │
  │  │  │ child      │              │  ┌┘  child   └┐  │
  │  │  │ flattened  │              │  │  in 3D     │  │
  │  └──┘            │              │  └┐  space   ┌┘  │
  └──────────────────┘              │   └──────────┘   │
    children lose 3D position        └──────────────────┘
    (projected into parent plane)    children maintain Z-depth
```

### Common Mistakes
1. Forgetting perspective (3D transforms look flat without it — rotateX and rotateY just compress the element)
2. Not using `preserve-3d` for child elements (children are flattened into parent plane)
3. Confusing perspective values (smaller = more dramatic; 200px is very dramatic, 2000px is subtle)
4. Not handling backface visibility in flips (both sides visible simultaneously without it)
5. Using `perspective()` function when parent-level perspective would be better
6. Forgetting that transforms don't affect document flow (3D elements may overlap oddly)
7. Not setting transform-origin for desired rotation pivot
8. Creating too many 3D layers (performance impact on mobile devices)

### Best Practices
1. Start with perspective: 800-1000px for natural depth
2. Use `preserve-3d` when children need their own 3D positions
3. Combine rotateY with translateX for circular layouts
4. Use `backface-visibility: hidden` for card flips
5. Apply perspective on parent elements, not individual children (for unified scenes)
6. Test 3D effects on mobile devices (GPU performance varies)
7. Use `will-change: transform` for continuously animating 3D elements
8. Keep 3D scene complexity reasonable — not every element needs to be 3D

### Performance
3D transforms promote elements to their own compositor layers. This has benefits and costs:
- ✅ GPU-accelerated rendering
- ✅ Smooth 60fps animations
- ✅ No layout or paint triggers
- ❌ Each promoted layer consumes GPU memory
- ❌ Too many layers can cause performance issues on mobile

```css
/* Performance considerations */
.good {
  /* Single 3D transform — efficient */
  transform: rotateY(45deg);
}

.bad {
  /* Multiple 3D layers may be expensive */
  transform: rotateX(30deg) rotateY(45deg) translateZ(100px) scaleZ(1.5);
}

.optimize {
  /* Use sparingly — creates GPU layer */
  will-change: transform;
}
```

### Accessibility
- 3D motion can cause disorientation and motion sickness
- Always respect `prefers-reduced-motion` for 3D animations
- Don't convey critical information through 3D transformations alone
- Ensure 3D content is still accessible when animations are disabled
- Text readability in 3D perspective may be reduced — test thoroughly
- Provide 2D fallbacks for 3D interactive elements
- Keyboard navigation should work on 3D interfaces

```css
@media (prefers-reduced-motion: reduce) {
  .cube,
  .carousel,
  .flipper {
    animation: none;
    transform: none;
  }
}
```

### Browser Compatibility
| Feature | Chrome | Firefox | Safari | Edge | IE |
|---------|--------|---------|--------|------|-----|
| perspective | 36+ | 16+ | 9+ | 12+ | 10+ (with prefix) |
| translateZ() | 36+ | 16+ | 9+ | 12+ | 10+ (with prefix) |
| rotateX/Y/Z() | 36+ | 16+ | 9+ | 12+ | 10+ (with prefix) |
| scaleZ() | 36+ | 16+ | 9+ | 12+ | 10+ (with prefix) |
| transform-style: preserve-3d | 36+ | 16+ | 9+ | 12+ | 10+ (with prefix) |
| backface-visibility | 36+ | 16+ | 9+ | 12+ | 10+ (with prefix) |

3D transforms are supported in all modern browsers. IE 10+ supports 3D transforms with the `-ms-` prefix. Safari has supported 3D transforms since version 4 with the `-webkit-` prefix.

### Summary Notes
- 3D transforms add Z-axis depth to 2D transforms
- `perspective` creates depth; smaller value = more extreme 3D
- `transform-style: preserve-3d` enables 3D for child elements
- `backface-visibility` controls rear visibility (hidden for flips)
- `translateZ()` moves toward/away from viewer (positive = closer)
- `rotateX()` tilts forward/backward; `rotateY()` turns left/right
- `perspective-origin` changes viewer position relative to scene
- Cube, carousel, and card flip are classic CSS 3D patterns
- GPU accelerated but memory-intensive on mobile
- Respect `prefers-reduced-motion` for 3D animations
- Always provide 2D fallbacks for accessibility
