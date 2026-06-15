# CSS Blend Modes

## Module Overview
Learn how to blend elements with their backgrounds using CSS blend modes. Master the `mix-blend-mode` and `background-blend-mode` properties to create stunning visual compositions. Blend modes allow you to achieve Photoshop-style layer blending directly in CSS, enabling duotone images, text overlays, and artistic effects without image editing software or JavaScript.

## Learning Objectives
- Understand how blend modes work in CSS
- Apply mix-blend-mode to HTML elements
- Use background-blend-mode with multiple backgrounds
- Combine blend modes with filters and gradients
- Create text effects, duotones, and artistic overlays
- Understand stacking context requirements for blend modes
- Use isolation to contain blending effects
- Test and debug blend mode rendering across browsers

## Topics Covered

### 1. What Are Blend Modes?
Blend modes determine how two layers (element color and content behind it) combine mathematically. They originated in image editing software like Photoshop and are now available in CSS. Each blend mode applies a specific mathematical formula to combine pixel values from the source (the element) and the destination (what's behind it).

```css
/* Basic syntax */
.element {
  mix-blend-mode: multiply;
}
```

The blending formula considers three channels (red, green, blue) and the alpha channel. Different blend modes use different mathematical operations:
- **Multiply** multiplies channel values (result is always darker)
- **Screen** inverts, multiplies, and inverts again (result is always lighter)
- **Overlay** applies multiply to dark areas and screen to light areas

### 2. mix-blend-mode
The `mix-blend-mode` property blends an element with its parent/background content. The element must participate in a stacking context for blending to work correctly.

**Common values:**
- `normal` — no blending (default)
- `multiply` — darkens (like stacking transparencies)
- `screen` — lightens (like projecting slides)
- `overlay` — combines multiply and screen
- `darken` — keeps darker pixel
- `lighten` — keeps lighter pixel
- `color-dodge` — brightens the base
- `color-burn` — darkens the base
- `hard-light` — intense overlay
- `soft-light` — subtle overlay
- `difference` — subtracts colors (inverted effect)
- `exclusion` — similar to difference but lower contrast
- `hue`, `saturation`, `color`, `luminosity` — HSL-based blending

```css
/* Practical examples */

/* Text overlay on image — light text blends naturally */
.hero-title {
  color: white;
  mix-blend-mode: overlay;
}

/* Dark overlay for readability */
.overlay {
  background: rgba(0, 0, 0, 0.5);
  mix-blend-mode: multiply;
}

/* Creative image effect */
.image-card img {
  mix-blend-mode: screen;
}
```

**Mathematical basis for key blend modes:**

| Blend Mode | Formula (per channel) | Visual Effect |
|------------|----------------------|---------------|
| multiply | B × S | Darkens everything except white |
| screen | 1 - (1 - B) × (1 - S) | Lightens everything except black |
| overlay | B < 0.5 ? 2×B×S : 1 - 2×(1-B)×(1-S) | Increases contrast |
| difference | \|B - S\| | Creates inverted, high-contrast effect |

Where B = base pixel value, S = source pixel value (normalized to 0-1).

### 3. background-blend-mode
The `background-blend-mode` property blends an element's background layers (images, gradients, colors) with each other. This is different from `mix-blend-mode` which blends the element with content behind it.

```css
/* Blend background layers together */
.hero {
  background-image: url('photo.jpg');
  background-color: #2c3e50;
  background-blend-mode: overlay;
}

/* Multiple backgrounds with blending */
.fancy-bg {
  background-image: 
    linear-gradient(45deg, #f00, #00f),
    url('texture.png');
  background-blend-mode: screen;
}
```

Background blend modes operate on the background layers from top (first listed) to bottom. They never blend with content outside the element. This makes them ideal for creating texture overlays and color treatments that are self-contained within a single element.

### 4. Duotone Effects
Combine a grayscale image with a gradient background using blend modes to create duotone images — a popular design trend where images use two contrasting colors.

```css
.duotone {
  position: relative;
  background: linear-gradient(135deg, #667eea, #764ba2);
}

.duotone img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  mix-blend-mode: multiply;
  filter: grayscale(1) contrast(1.2);
}
```

**How duotone works:**
1. Convert the image to grayscale to remove original color information
2. Apply contrast to create a strong black-and-white separation
3. Use `mix-blend-mode: multiply` or `overlay` to blend the image with a colored background
4. The background gradient provides the two duotone colors
5. Shadow areas take the darker color, highlight areas take the lighter color

A variation without grayscale for a more colorful effect:
```css
.duotone-vibrant {
  background: linear-gradient(135deg, #ff6b6b, #4ecdc4);
}
.duotone-vibrant img {
  mix-blend-mode: overlay;
}
```

### 5. Text and Heading Effects
Use mix-blend-mode on text to create striking typography that interacts with background images.

```css
/* Text that "cuts out" its background */
.hero h1 {
  color: #000;
  mix-blend-mode: screen;
  background: white; /* Works best with white text on dark image */
}
/* Alternative: text acts as a window to background */
.hero h1 {
  background: url('texture.jpg');
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
```

Text blending is one of the most powerful uses of CSS blend modes. By carefully choosing the blend mode, text can appear to be carved into a surface, glowing from within, or seamlessly integrated with a background image.

**Example: Burned-in text effect:**
```css
.burned-text {
  color: white;
  mix-blend-mode: overlay;
  text-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
}
```

### 6. The isolation Property
The `isolation` property limits blending to a specific container, preventing blend modes from affecting content outside that container.

```css
.isolate-container {
  isolation: isolate; /* Creates new stacking context */
}
.isolate-container .blended {
  mix-blend-mode: multiply; /* Only blends within this container */
}
```

Using `isolation: isolate` is the primary way to control blend mode boundaries. Without it, blend modes can unintentionally affect content higher in the DOM tree. This property creates a new stacking context without affecting visual appearance, making it an invisible boundary for blending.

### 7. Blend Modes and Stacking Contexts
Blend modes require a stacking context to function properly. Elements with `mix-blend-mode` automatically create a new stacking context. This has implications for z-index, overflow, and positioning.

```css
/* Blend mode creates stacking context */
.blended-element {
  position: relative; /* Already creates stacking context */
  mix-blend-mode: multiply;
  z-index: 1;
}
```

Understanding stacking contexts is crucial when blend modes don't appear to work. If an element doesn't have a stacking context, the blend mode may blend with unintended ancestors or not blend at all. Common stacking context triggers include:
- `position: relative/absolute/fixed` with `z-index` not `auto`
- `opacity` less than 1
- `transform` not `none`
- `filter` not `none`
- `isolation: isolate`

## Best Practices
- Use `mix-blend-mode: multiply` for dark watermarks on light backgrounds
- Use `mix-blend-mode: screen` or `lighten` for light text on dark images
- Combine `isolation: isolate` to limit blending to a specific container
- Use `background-blend-mode` for duotone hero sections without image editing software
- Test blend modes on different background colors to ensure readability
- Use `will-change: transform` to promote GPU compositing for blended elements
- Layer CSS gradients with background-blend-mode for rich texture effects
- Provide solid color fallbacks when blend modes are unsupported

## Common Mistakes
- Forgetting that blend modes require stacking context to work correctly
- Using blend modes on elements that don't have background or content behind them
- Overlooking accessibility — low-contrast blended text may be unreadable
- Assuming all blend modes work the same across browsers (test thoroughly)
- Not using `isolation: isolate` when blend modes leak to unintended ancestors
- Applying blend mode to a parent expecting children to blend independently
- Using `difference` or `exclusion` without testing on the specific content
- Confusing `mix-blend-mode` with `background-blend-mode` usage

## Accessibility Considerations
- Text using blend modes must maintain 4.5:1 contrast ratio for readability
- Avoid using blend modes as the sole visual indicator of interactive elements
- Test content with Windows High Contrast Mode (blend modes are ignored)
- Provide solid fallback styles for accessibility tools and older browsers
- Duotone effects can reduce image detail recognition — avoid for important content
- Users with color vision deficiencies may not perceive blend mode effects as intended
- Ensure focus indicators remain visible regardless of blend mode
- Use `@media (prefers-contrast: more)` to provide non-blended alternatives

## Performance Considerations
- Blend modes can be GPU-accelerated on modern browsers
- `mix-blend-mode` creates a new stacking context, which can impact paint performance
- Complex blend modes (difference, luminosity) are more expensive than simple ones (multiply, screen)
- Animated elements with blend modes should use `will-change: transform`
- `background-blend-mode` is generally more performant than `mix-blend-mode`
- Blending large areas (full-screen hero images) may cause frame drops on mobile
- Use Chrome DevTools "Rendering" tab to visualize layer boundaries and paint counts
- Consider using CSS `filter` as a lighter alternative for simple color treatments

## Browser Compatibility

| Feature | Chrome | Firefox | Safari | Edge | IE |
|---------|--------|---------|--------|------|-----|
| mix-blend-mode | 41+ | 32+ | 8+ | 79+ | No |
| background-blend-mode | 35+ | 30+ | 7.1+ | 79+ | No |
| isolation: isolate | 41+ | 36+ | 8+ | 79+ | No |
| Multiply | 41+ | 32+ | 8+ | 79+ | No |
| Screen | 41+ | 32+ | 8+ | 79+ | No |
| Overlay | 41+ | 32+ | 8+ | 79+ | No |
| Difference | 41+ | 32+ | 8+ | 79+ | No |
| Hue/Saturation/Color/Luminosity | 41+ | 32+ | 8+ | 79+ | No |

Internet Explorer has no blend mode support at any version. All modern browsers (Chrome 41+, Firefox 32+, Safari 8+, Edge 79+) support all blend mode values. Always provide fallback styling for IE users.

## Visual Explanation

**How blend modes combine layers:**
```
  ┌──────────────────┐
  │  Source (S)      │  Top layer — the element itself
  │  e.g. text, img  │  Pixel values: S
  └────────┬─────────┘
           │  blend mode formula applied per-channel
  ┌────────▼─────────┐
  │  Base (B)         │  Bottom layer — content behind element
  │  e.g. background  │  Pixel values: B
  └────────┬─────────┘
           │
           ▼
  ┌──────────────────┐
  │  Result (R)       │  R = f(B, S)  (depends on blend mode)
  │  Final composited │
  └──────────────────┘
```

**Common blend modes visualized:**
```
  Base:   ██████████     (solid color)
  Source: ░░░░▓▓░░░░     (element on top)

  multiply:   ██████▓▓████    (always darker)
  screen:     ░░████▓▓██░░    (always lighter)
  overlay:    ████▓▓▓▓████    (increased contrast)
  difference: ▓▓▓▓░░▓▓▓▓     (inverted where overlapping)
```

**mix-blend-mode vs background-blend-mode:**
```
  mix-blend-mode                 background-blend-mode

  ┌───────────────────┐          ┌───────────────────┐
  │ Element (src)     │          │                   │
  │ blend w/ behind   │          │  Background-only   │
  ├───────────────────┤          │  blend between     │
  │ Background (base) │          │  layers:           │
  │ behind element    │          │  gradient, image,  │
  └───────────────────┘          │  color             │
                                 └───────────────────┘
  Blends ELEMENT + BEHIND        Blends BACKGROUNDS only
                                 (no outside content)
```

**Duotone effect pipeline:**
```
  Original image
       │
       ▼
  filter: grayscale(1) contrast(1.2)
       │
       ▼  ┌──────────────────┐
  Grayscale  │  ↓↓↓↓  ░░░░  │
  image      │  ░░  ▓▓▓▓    │
       │    └──────────────────┘
       │
       ▼  mix-blend-mode: multiply
  ┌────────────────────────┐
  │  Background gradient   │  #667eea → #764ba2
  │  ────────────────────→ │
  │  blended through image │
  └────────────────────────┘
       │
       ▼
  Duotone result — shadows = one color,
                   highlights = other color
```

## Summary Notes
- `mix-blend-mode` blends an element with content behind it
- `background-blend-mode` blends background layers within a single element
- 16 blend mode values cover everything from multiply to luminosity blending
- Blend modes require a stacking context — use `isolation: isolate` or `position: relative`
- Duotone effects use grayscale image + gradient + multiply blend mode
- Text blending creates striking visual effects but must maintain contrast
- Internet Explorer has no blend mode support — always provide fallbacks
- Test on real content with multiple background colors to verify effects
- Use `isolation: isolate` to prevent blend modes from leaking outside containers
