# CSS Masking

## Module Overview
Learn how to use CSS masking to hide or reveal portions of elements using images, gradients, and SVG masks. Master the `mask` property and its related properties to create sophisticated visual transitions, reveals, and compositing effects entirely in CSS.

## Learning Objectives
- Understand CSS masking concepts and use cases
- Apply mask-image with gradients and images
- Use mask-mode, mask-repeat, mask-position, and mask-size
- Create SVG-based masks
- Combine masking with animations and transitions
- Understand the difference between masking and clipping
- Use mask-composite for advanced multi-layer effects
- Apply text masking with background-clip

## Topics Covered

### 1. The mask Property
The `mask` shorthand property hides or reveals parts of an element based on an alpha channel. White/opaque areas = visible, black/transparent areas = hidden. The mask is applied on top of the element's rendered content, selectively showing or hiding pixels based on the mask's alpha values.

```css
/* Shorthand */
mask: url('mask.png') center / cover no-repeat;

/* Longhand equivalent */
mask-image: url('mask.png');
mask-position: center;
mask-size: cover;
mask-repeat: no-repeat;
```

**How masking differs from opacity:**
- `opacity: 0.5` makes the entire element 50% transparent
- A mask with 50% gray reveals the element at 50% opacity in specific areas
- Masks can create soft edges, gradient fades, and complex shapes
- Opacity is uniform across the element; masks are per-pixel selective

### 2. mask-image
Accepts images, gradients, and SVG references as mask sources. Multiple masks can be comma-separated for layered effects.

```css
/* Gradient mask — smooth fade out */
mask-image: linear-gradient(to bottom, black, transparent);

/* Image-based mask */
mask-image: url('circle-mask.png');

/* SVG mask reference */
mask-image: url('#star-mask');

/* Multiple masks */
mask-image: 
  linear-gradient(to right, transparent, black),
  url('texture-mask.png');
```

**Gradient masking is the most common and versatile technique:**
```css
/* Fade an image from left to right */
.fade-image {
  mask-image: linear-gradient(to right, transparent 0%, black 50%, black 100%);
  mask-size: 100% 100%;
}

/* Circular vignette effect */
.vignette {
  mask-image: radial-gradient(ellipse at center, black 60%, transparent 70%);
}
```

### 3. mask-mode
Controls whether the mask uses luminance values or alpha values:

- `alpha` — uses the alpha channel (default for images with transparency)
- `luminance` — uses color brightness (brighter pixels = more visible)
- `match-source` — auto-detects based on source type (SVG uses luminance, images use alpha)

```css
/* Use luminance — bright areas reveal more */
mask-image: url('bw-texture.jpg');
mask-mode: luminance;

/* Use alpha — transparency in mask hides element */
mask-image: url('transparent-png-mask.png');
mask-mode: alpha;

/* Auto-detect */
mask-image: url('circle-mask.png');
mask-mode: match-source; /* Will use alpha for PNG */
```

**When to use luminance vs alpha:**
- `alpha` mode is best for masks with built-in transparency (PNG with alpha channel, CSS gradients)
- `luminance` mode is useful when you want to use black-and-white images (like JPEG textures) as masks
- SVG masks default to luminance mode, which is why colors in SVG `<mask>` elements affect visibility

### 4. mask-repeat, mask-position, mask-size
These work like their background counterparts, controlling how the mask image tiles and positions.

```css
/* Prevent tiling */
mask-repeat: no-repeat;

/* Center the mask */
mask-position: center;

/* Cover the element */
mask-size: cover;

/* Explicit mask dimensions */
mask-size: 200px 150px;
```

**Available values are identical to background properties:**
- `mask-repeat`: repeat, repeat-x, repeat-y, no-repeat, round, space
- `mask-position`: keywords (center, top, left), percentages, lengths
- `mask-size`: cover, contain, auto, explicit dimensions, percentages

### 5. mask-composite
Defines how multiple mask layers combine:

- `add` — overlays masks (union of visible areas)
- `subtract` — subtracts one mask from another
- `intersect` — keeps overlapping visible areas
- `exclude` — keeps non-overlapping visible areas

```css
/* Two gradient masks composited */
.element {
  mask-image: 
    linear-gradient(to right, black, transparent),
    linear-gradient(to bottom, black, transparent);
  mask-composite: intersect; /* Only center area visible */
}
```

Mask compositing is the CSS equivalent of boolean operations on shapes. This enables complex mask shapes to be built from simple primitives, similar to how vector graphics use boolean path operations.

### 6. SVG Masks
The `<mask>` SVG element provides powerful vector-based masking. Reference it via `mask: url(#myMask)`.

```html
<svg width="0" height="0">
  <defs>
    <mask id="star-mask">
      <polygon points="50,0 63,38 100,38 69,59 82,100 50,75 18,100 31,59 0,38 37,38" 
               fill="white" />
    </mask>
  </defs>
</svg>
```

```css
.element {
  mask: url(#star-mask);
  mask-mode: luminance;
}
```

SVG masks offer several advantages over image-based masks:
- Resolution-independent (scales perfectly at any size)
- Smaller file size than equivalent PNG masks
- Animatable via CSS (SVG attributes can be targeted)
- Support for complex vector shapes, text, and gradients

**Important SVG mask rules:**
- Inside `<mask>`, white/gray = visible, black = hidden
- The `maskUnits` attribute controls the coordinate system
- SVG masks default to luminance mode

### 7. Text Masking
Use `-webkit-text-fill-color: transparent` combined with `background-clip: text` and a gradient/image background for text masking effects.

```css
.gradient-text {
  background: linear-gradient(45deg, #f06, #9f6);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

This technique doesn't use the `mask` property directly, but achieves a similar visual result — the text characters act as a mask revealing the gradient background. This is one of the most popular CSS text effects and is supported in nearly all browsers (with the `-webkit-` prefix).

### 8. Masking vs. Clipping
Understanding when to use `mask` versus `clip-path` is important:

| Aspect | mask | clip-path |
|--------|------|-----------|
| Source | Images, gradients, SVG | Shapes, SVG paths |
| Soft edges | Yes (via gradient alpha) | No (always hard edges) |
| Performance | More expensive | Less expensive |
| Browser support | Good (with prefixes) | Excellent |
| Animation | Complex | Simple (shape morphing) |
| Use case | Fades, textures, soft reveals | Hard shapes, polygons |

Choose `mask` when you need soft edges, gradient transitions, or image-based reveals. Choose `clip-path` when you need hard-edged shapes, performance, or simpler animation.

### 9. Mask Transitions and Animations
Masks can be animated for creative reveal effects:

```css
.reveal-element {
  mask-image: linear-gradient(to right, black 0%, black 50%, transparent 50%, transparent 100%);
  mask-size: 200% 100%;
  mask-position: 100% 0;
  transition: mask-position 0.6s ease;
}
.reveal-element:hover {
  mask-position: 0 0;
}
```

This creates a "wipe" reveal effect that slides the visible area across the element. By adjusting the gradient stops and animation direction, you can create directional reveals, circular reveals, and complex multi-step reveals.

## Best Practices
- Use PNG with transparency for image-based masks
- Prefer SVG masks for crisp, resolution-independent masking
- Combine mask-image with gradients for smooth fade effects
- Test mask rendering across browsers
- Use `mask-composite: intersect` for defining visible areas from multiple masks
- Prefer CSS gradients over image files for simple masks (fewer HTTP requests)
- For text masking, use `background-clip: text` instead of the mask property
- Always include `-webkit-` prefix for maximum browser compatibility
- Use luminance masks when working with black-and-white imagery

## Common Mistakes
- Forgetting that most mask properties don't work in older browsers without `-webkit-` prefix
- Using opaque colors in gradients incorrectly (white reveals, black hides)
- Not accounting for mask positioning when element size changes
- Overlooking the `mask-mode` vs default behavior
- Using mask when `clip-path` would be simpler and more performant
- Applying mask to inline elements without `display: block` or `inline-block`
- Not providing fallback content for browsers that don't support masking
- Forgetting that SVG masks require `mask-mode: luminance` or proper SVG setup

## Accessibility Considerations
- Masked content must still be accessible to screen readers (masking affects visual only)
- Don't convey critical information exclusively through masked reveals
- Ensure interactive elements remain accessible — masking shouldn't hide focus outlines
- Test with browser zoom — some mask implementations don't scale well
- Provide visible alternatives for masked decorative effects
- Consider that users with cognitive disabilities may rely on predictable visual layouts
- Use `prefers-reduced-motion` to disable animated mask transitions

## Performance Considerations
- Image-based masks require decoding and can delay rendering
- SVG masks are generally more performant than image masks
- Gradient masks are the most performant (no external resources)
- Large mask images (especially PNG) increase memory usage
- Animated masks trigger repaints — similar in cost to animated filters
- Multiple mask layers increase compositing complexity
- Use `mask-size: cover` to prevent large images from being unnecessarily decoded at full size
- On low-powered devices, prefer simple gradient masks over complex image masks

## Browser Compatibility

| Feature | Chrome | Firefox | Safari | Edge | IE |
|---------|--------|---------|--------|------|-----|
| mask-image | 4+ (-webkit-) | 53+ | 4+ (-webkit-) | 79+ | No |
| mask-mode | 120+ | 53+ | 15.4+ | 120+ | No |
| mask-repeat | 4+ (-webkit-) | 53+ | 4+ (-webkit-) | 79+ | No |
| mask-position | 4+ (-webkit-) | 53+ | 4+ (-webkit-) | 79+ | No |
| mask-size | 4+ (-webkit-) | 53+ | 4+ (-webkit-) | 79+ | No |
| mask-composite | 120+ | 53+ | 15.4+ | 120+ | No |
| SVG mask reference | 4+ | 3.5+ | 4+ | 12+ | 9+ |
| background-clip: text | 4+ (-webkit-) | 49+ | 4+ (-webkit-) | 79+ | No |

For maximum compatibility, always include `-webkit-` prefix versions of mask properties. Firefox was the first browser to ship unprefixed mask support. Chrome and Safari have historically required the `-webkit-` prefix.

## Visual Explanation

**How CSS masking works — alpha channel determines visibility:**
```
  Mask image (gradient):          Element:             Result:
  ┌──────────────────┐           ┌──────────────────┐  ┌──────────────────┐
  │ ████████░░░░░░░░ │           │ ABC ABC ABC ABC  │  │ ABC ABC          │
  │ ████████░░░░░░░░ │  applied  │ ABC ABC ABC ABC  │  │ ABC ABC          │
  │ ████████░░░░░░░░ │  ──────→  │ ABC ABC ABC ABC  │  │ ABC ABC          │
  │ ████████░░░░░░░░ │   to      │ ABC ABC ABC ABC  │  │ ABC ABC          │
  └──────────────────┘           └──────────────────┘  └──────────────────┘
    ██ = opaque (visible)                               Left half visible
    ░░ = transparent (hidden)                           Right half hidden
```

**Multiple mask layers with mask-composite:**
```
  Mask 1 (left→right fade):     Mask 2 (top→bottom fade):
  ┌──────────────────┐          ┌──────────────────┐
  │ ████████████████  │          │ ████████████████  │
  │ ████████████████  │          │ ████████████████  │
  │ ████████████████  │          │ ████████████████  │
  │ ░░░░░░░░░░░░░░░░  │          │ ████████████████  │
  └──────────────────┘          │ ████████████████  │
                                 └──────────────────┘

  Composite modes:
  add:       ████████████████    union of both masks
             ████████████████
             ████████████████
             ░░░░████████░░░░

  intersect: ░░░░░░░░░░░░░░░░    only where BOTH visible
             ░░░░████░░░░░░░░
             ░░░░████░░░░░░░░
             ░░░░░░░░░░░░░░░░

  subtract:  ████████████████    Mask 1 minus Mask 2
             ████████████████
             ████████████████
             ░░░░░░░░░░░░░░░░
```

**White reveals, black hides:**
```
  Mask pixel → Element pixel → Result
  ┌──────┐     ┌──────┐        ┌──────┐
  │White │     │ Red  │        │ Red  │  fully visible
  │(255) │  ×  │      │   =    │      │
  └──────┘     └──────┘        └──────┘

  ┌──────┐     ┌──────┐        ┌──────┐
  │ Gray │     │ Red  │        │Pink  │  partially visible
  │(128) │  ×  │      │   =    │(50%) │
  └──────┘     └──────┘        └──────┘

  ┌──────┐     ┌──────┐        ┌──────┐
  │Black │     │ Red  │        │      │  fully hidden
  │ (0)  │  ×  │      │   =    │(trans)│
  └──────┘     └──────┘        └──────┘
```

**mask vs clip-path comparison:**
```
  mask (gradient fade):         clip-path (hard edge):
  ┌──────────────────┐         ┌──────────────────┐
  │  Fully visible   │         │  ╱ Fully visible  │
  │                   │         │ ╱                 │
  │   Fading zone     │         │╱  (clipped away)  │
  │    ░░░░░░░░░░░░   │         │                   │
  │  Fully hidden     │         │  (clipped away)   │
  └──────────────────┘         └──────────────────┘
  Soft edge (alpha)             Hard edge (geometric)
```

## Summary Notes
- CSS masking uses alpha or luminance channels to selectively show/hide element content
- White/gray in mask = visible, black/transparent in mask = hidden
- `mask-image` accepts gradients, images, and SVG references
- `mask-mode` controls alpha vs. luminance interpretation
- `mask-composite` enables boolean operations on multiple mask layers
- SVG masks provide resolution-independent vector-based masking
- Text masking is achieved via `background-clip: text`, not the mask property
- Always include `-webkit-` prefix for cross-browser compatibility
- Prefer gradient masks for performance, SVG for quality, images for complex textures
- Choose `clip-path` for hard-edged shapes, `mask` for soft edges and fades
