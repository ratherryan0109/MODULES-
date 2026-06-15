# CSS Functions

## Module Overview
Explore the wide range of CSS functions available for calculations, color manipulation, transformations, and more. Master the functions that make CSS a powerful styling language, enabling dynamic calculations, color adjustments, and complex visual effects directly in stylesheets without JavaScript.

## Learning Objectives
- Understand CSS function syntax and categories
- Use math functions: calc(), min(), max(), clamp()
- Apply color functions: rgb(), hsl(), hwb(), color-mix()
- Use transform functions: translate(), scale(), rotate(), skew()
- Work with filter, gradient, and shape functions
- Master reference functions: var(), attr(), env(), url()
- Select the right function for each design challenge
- Combine multiple CSS functions for complex results

## Topics Covered

### 1. Math Functions
CSS math functions enable dynamic calculations directly in stylesheets:

- `calc()` — perform calculations with mixed units
- `min()` — select the smallest value
- `max()` — select the largest value
- `clamp()` — constrain a value between a minimum and maximum
- `abs()` — absolute value (new in CSS Values 4)
- `round()` — round to nearest value (new in CSS Values 4)
- `mod()` — modulus operation (new in CSS Values 4)
- `rem()` — remainder operation (new in CSS Values 4)

```css
/* Practical math function usage */
.container {
  width: min(90%, 1200px);         /* Responsive max-width */
  padding: clamp(1rem, 5vw, 3rem); /* Fluid spacing */
  font-size: max(1rem, 2vw);       /* Minimum readable size */
}
```

**Newer math functions (CSS Values 4):**
```css
/* Round — useful for grid calculations */
width: round(nearest, 33.33%, 100px); /* Rounds 33.33% to nearest 100px */

/* Mod and rem */
margin: mod(100%, 3); /* Remaining space after dividing by 3 */
```

### 2. Color Functions
Modern CSS offers extensive color manipulation capabilities:

- `rgb()` / `rgba()` — RGB color notation
- `hsl()` / `hsla()` — HSL color notation
- `hwb()` — Hue, Whiteness, Blackness
- `lab()` — CIE Lab color space
- `lch()` — CIE LCH color space
- `oklch()` — OKLCH perceptually uniform color space (modern standard)
- `color()` — color from a specified color space
- `color-mix()` — mix two colors in a given color space
- `color-contrast()` — select the best contrasting color

```css
/* Modern color function usage */
.element {
  /* OKLCH — perceptually uniform */
  color: oklch(0.5 0.2 200);
  background: oklch(0.9 0.05 80);
  
  /* Color mixing */
  --primary: oklch(0.5 0.2 250);
  --primary-light: color-mix(in oklch, var(--primary), white 30%);
  --primary-dark: color-mix(in oklch, var(--primary), black 20%);
  
  /* Best contrast selection */
  color: color-contrast(var(--primary) vs white, black);
}
```

**Color space comparison:**

| Function | Space | Best For |
|----------|-------|----------|
| rgb() | sRGB | Legacy color values, simple hex-like use |
| hsl() | sRGB (cylindrical) | Intuitive hue adjustments |
| hwb() | sRGB (cylindrical) | Tinting/shading operations |
| oklch() | OKLCH (perceptual) | Smooth gradients, accessible color palettes |
| lab() | CIE Lab | Device-independent color |
| lch() | CIE LCH | Industry-standard color (print) |

### 3. Transform Functions
Essential for positioning, scaling, and rotating elements:

```css
/* Translate — movement */
transform: translate(50px, 100px);
transform: translateX(-50%);
transform: translateY(2rem);

/* Scale — sizing */
transform: scale(1.5);
transform: scaleX(0.5);
transform: scaleY(2);

/* Rotate — rotation */
transform: rotate(45deg);
transform: rotateX(180deg);  /* 3D flip */
transform: rotateY(180deg);  /* 3D flip */
transform: rotateZ(90deg);

/* Skew — distortion */
transform: skew(10deg, 5deg);
transform: skewX(-15deg);
transform: skewY(20deg);

/* Matrix — complex transforms */
transform: matrix(1, 0.5, 0, 1, 0, 0);

/* Perspective — 3D depth */
transform: perspective(800px) rotateY(45deg);
```

**Transform function chaining order:**
Multiple transform functions are applied right-to-left. This means the function written first in the declaration is actually applied LAST:
```css
transform: translateX(100px) rotate(45deg);
/* Applied: 1. rotate 45°, 2. translate 100px right */
/* Result: Element moves 100px along its rotated X-axis */
```

### 4. Gradient Functions
Create smooth color transitions for backgrounds:

```css
/* Linear gradient */
background: linear-gradient(135deg, #f06, #9f6);

/* Radial gradient */
background: radial-gradient(circle at center, #f06, #9f6, transparent);

/* Conic gradient */
background: conic-gradient(from 0deg, #f06, #9f6, #06f, #f06);

/* Repeating gradients */
background: repeating-linear-gradient(
  45deg,
  #f06 0px,
  #f06 10px,
  #9f6 10px,
  #9f6 20px
);
```

**Gradient function parameters:**

| Function | Parameters | Shape |
|----------|------------|-------|
| linear-gradient() | angle/side, color stops | Straight line |
| radial-gradient() | shape/size/position, color stops | Circle or ellipse |
| conic-gradient() | from-angle/position, color stops | Circle around center |
| repeating-* | Same as non-repeating | Tile pattern |

### 5. Filter Functions
Apply graphical effects to elements:

```css
/* Common filter functions */
filter: blur(4px);
filter: brightness(1.2);
filter: contrast(1.5);
filter: grayscale(1);
filter: sepia(0.8);
filter: hue-rotate(90deg);
filter: saturate(2);
filter: invert(1);
filter: opacity(0.5);
filter: drop-shadow(2px 4px 6px rgba(0,0,0,0.3));

/* Combined filters */
filter: brightness(1.1) contrast(1.2) saturate(1.3);
```

### 6. Shape Functions
Define geometric clipping and wrapping regions:

```css
/* polygon — most flexible */
clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);

/* circle */
clip-path: circle(50% at center);

/* ellipse */
clip-path: ellipse(40% 60% at 50% 50%);

/* inset */
clip-path: inset(20px 30px 10px 50px round 10px);

/* path — custom SVG path */
clip-path: path('M10 10 H 90 V 90 H 10 Z');
```

### 7. Reference Functions
Access values from custom properties, HTML attributes, and environment:

```css
/* var() — custom property reference */
color: var(--primary-color, #333);

/* attr() — HTML attribute reference */
content: attr(data-tooltip);
width: attr(data-width px, 100px); /* Enhanced attr() with unit */

/* env() — environment variable reference */
padding: env(safe-area-inset-top);
padding: env(safe-area-inset-right);
padding: env(safe-area-inset-bottom);
padding: env(safe-area-inset-left);

/* url() — resource reference */
background: url('bg.png');
cursor: url('custom.cur'), auto;
```

**The `attr()` function** is particularly useful for data-driven styling:
```css
/* Tooltip using attr() */
[data-tooltip]:hover::after {
  content: attr(data-tooltip);
  position: absolute;
  background: #333;
  color: #fff;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 14px;
}

/* Using attr() for sizing */
.bar {
  height: attr(data-value px, 0px);
  background: linear-gradient(to top, #f06, #9f6);
}
```

### 8. Image Functions
Manipulate images directly in CSS:

```css
/* cross-fade — blend two images */
background: cross-fade(url('img1.jpg'), url('img2.jpg'), 50%);

/* image-set — responsive images */
background-image: image-set(
  url('small.avif') type('image/avif') 1x,
  url('large.avif') type('image/avif') 2x,
  url('small.jpg') type('image/jpeg') 1x,
  url('large.jpg') type('image/jpeg') 2x
);

/* paint() — CSS Paint API (Houdini) */
background: paint(custom-pattern, #f06, #9f6);
```

### 9. Timing Functions for Animations
Control animation acceleration curves:

```css
/* Predefined timing functions */
transition-timing-function: ease;
transition-timing-function: ease-in;
transition-timing-function: ease-out;
transition-timing-function: ease-in-out;
transition-timing-function: linear;

/* Custom cubic bezier */
transition-timing-function: cubic-bezier(0.68, -0.55, 0.27, 1.55);

/* Step functions */
animation-timing-function: steps(4, end);
animation-timing-function: step-start;
animation-timing-function: step-end;
```

### 10. Function Nesting
CSS functions can be nested inside each other for complex expressions:

```css
/* Nested calc */
width: calc(100% - calc(2rem + 10px));
/* Simpler: width: calc(100% - 2rem - 10px); */

/* Nested var with calc */
padding: calc(var(--spacing, 1rem) * 2);

/* Function nesting */
background: color-mix(
  in oklch,
  var(--primary, #3498db),
  var(--secondary, #2ecc71) 50%
);
```

## Best Practices
- Use `calc()` for fluid typography and spacing combinations
- Prefer `clamp()` over media queries for responsive values
- Use `color-mix()` for creating color variations programmatically
- Combine transform functions for complex 3D effects
- Use `min()` and `max()` for responsive sizing without media queries
- Use `oklch()` for perceptually uniform color systems
- Use `image-set()` for responsive background images with modern formats (AVIF, WebP)
- Keep function nesting limited to 2-3 levels for readability
- Use `attr()` for data-driven styling but be aware of type limitations

## Common Mistakes
- Missing spaces around operators in `calc()` (`calc(100%-20px)` fails)
- Using incompatible units in `min()`/`max()`/`clamp()` (they work but be careful)
- Forgetting function arguments order (especially transform functions)
- Over-nesting functions which reduces readability
- Using `rgba()`/`hsla()` when modern browsers just need `rgb()`/`hsl()`
- Confusing the argument order in `matrix()` (it's not row-major intuitive)
- Expecting `attr()` to work outside of `content` without type hinting
- Using `cubic-bezier()` values outside the 0-1 range without understanding the consequences

## Accessibility Considerations
- Color functions should maintain WCAG 2.1 contrast ratios
- `hue-rotate()` and `invert()` can make content unrecognizable
- Animated functions (transitions, transforms) should respect `prefers-reduced-motion`
- Image processing functions should not remove critical visual information
- Test color-mixed combinations for readability
- `contrast()` and `brightness()` filters can affect legibility of text

## Performance Considerations
- Math functions (`calc`, `min`, `max`, `clamp`) are evaluated at computed-value time — negligible cost
- Gradient functions have higher rendering cost than solid colors
- Filter functions are more expensive than non-filtered alternatives
- Transform functions are GPU-accelerated — prefer over layout-changing properties
- Nested functions are not inherently slower but may be harder for browsers to optimize
- `image-set()` helps performance by letting browsers choose optimal image format
- Avoid excessive function calls inside animation loops

## Browser Compatibility

| Function Category | Chrome | Firefox | Safari | Edge | IE |
|-------------------|--------|---------|--------|------|-----|
| calc(), min(), max(), clamp() | 49+ | 31+ | 11+ | 79+ | No |
| rgb()/hsl() | 1+ | 1+ | 1+ | 12+ | 9+ |
| color-mix() | 111+ | 113+ | 16.2+ | 111+ | No |
| oklch() | 111+ | 113+ | 15.4+ | 111+ | No |
| Transform functions | 36+ | 16+ | 9+ | 12+ | 10+ (with prefix) |
| Gradient functions | 26+ | 16+ | 6.1+ | 12+ | 10+ (with prefix) |
| filter functions | 18+ | 35+ | 6+ | 12+ | No |
| var() | 49+ | 31+ | 9.1+ | 79+ | No |
| attr() | 2+ | 1+ | 3.1+ | 12+ | 8+ |
| env() (safe-area) | 69+ | 68+ | 11+ | 79+ | No |

CSS function support is generally excellent in modern browsers. Internet Explorer lacks support for newer functions like `calc()` (partially supported in IE 11), `min()`, `max()`, `clamp()`, and all filter functions.

## Visual Explanation

**CSS function categories and their roles:**
```
  ┌─────────────────────────────────────────────────────────┐
  │                    CSS FUNCTIONS                         │
  │                                                         │
  │  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌────────┐ │
  │  │  MATH    │  │  COLOR   │  │ TRANSFORM│  │ FILTER │ │
  │  │          │  │          │  │          │  │        │ │
  │  │ calc()   │  │ rgb()    │  │translate()│  │blur()  │ │
  │  │ min()    │  │ hsl()    │  │ scale()  │  │grayscale│ │
  │  │ max()    │  │ oklch()  │  │ rotate() │  │sepia() │ │
  │  │ clamp()  │  │color-mix │  │ skew()   │  │brightness│
  │  └──────────┘  └──────────┘  └──────────┘  └────────┘ │
  │                                                         │
  │  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌────────┐ │
  │  │ GRADIENT │  │  SHAPE   │  │ REFERENCE│  │ IMAGE  │ │
  │  │          │  │          │  │          │  │        │ │
  │  │ linear-  │  │ polygon()│  │ var()    │  │cross-  │ │
  │  │ gradient │  │ circle() │  │ attr()   │  │fade()  │ │
  │  │ radial-  │  │ inset()  │  │ env()    │  │image-  │ │
  │  │ gradient │  │ path()   │  │ url()    │  │set()   │ │
  │  └──────────┘  └──────────┘  └──────────┘  └────────┘ │
  └─────────────────────────────────────────────────────────┘
```

**Transform function order — right-to-left application:**
```
  transform: translateX(100px) rotate(45deg);
  
     Step 1 (first applied)          Step 2 (applied second)
     ┌──────────────┐                ┌──────────────────┐
     │ rotate(45°)   │    ────→      │ translateX(100px) │
     │               │               │                  │
     │  ┌────┐       │               │    ┌────┐        │
     │  │    │  ──→  │               │  ──│    │──→     │
     │  └────┘       │               │    └────┘        │
     └──────────────┘                └──────────────────┘
  
  The element rotates FIRST, then moves 100px along
  its rotated X axis (diagonally, not horizontally!)
```

**calc() precedence vs nested:**
```
  calc(50% + 20px * 2)          calc((50% + 20px) * 2)
  ┌──────────────┐              ┌──────────────────┐
  │  * has higher │              │  parentheses first │
  │  precedence   │              │                    │
  │              │              │  50% + 20px =      │
  │  20px * 2    │              │  (50% + 20px)      │
  │       = 40px │              │           × 2      │
  │  50% + 40px  │              │  = 100% + 40px     │
  │  = 50% + 40px│              │                    │
  └──────────────┘              └──────────────────┘
```

**Color space gamut comparison:**
```
           sRGB                           OKLCH
     ┌──────────────┐              ┌──────────────┐
     │  ▲  Limited   │              │  ▲ Perceptual │
     │ / \ gamut     │              │ / \ uniformity │
     │/   \          │              │/   \           │
     │\   /          │              │\   /           │
     │ \ /           │              │ \ /            │
     │  ▼            │              │  ▼             │
     └──────────────┘              └──────────────┘
  Smaller color range           Larger, uniform space
  Best for web-safe             Best for gradients,
  colors                        accessible palettes
```

## Summary Notes
- CSS functions enable calculations, color manipulation, transforms, and effects
- Key categories: math, color, transform, gradient, filter, shape, reference, image, timing
- Math functions (`calc`, `min`, `max`, `clamp`) enable responsive design without media queries
- Modern color functions (`oklch`, `color-mix`) support perceptually uniform and dynamic colors
- Transform functions are GPU-accelerated for smooth animation
- Reference functions (`var`, `attr`, `env`) connect CSS with the document and environment
- Functions can be nested but keep chains readable
- Most modern CSS functions have excellent browser support
- Use `image-set()` for responsive, format-optimized background images
