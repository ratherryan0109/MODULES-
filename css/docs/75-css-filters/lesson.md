# CSS Filters

## Module Overview
Learn how to apply graphical effects like blur, brightness, contrast, grayscale, and more to HTML elements using the CSS `filter` property. Filters enable image editing capabilities directly in the browser without external tools, allowing dynamic visual processing that can adapt to user interactions, themes, and accessibility needs.

## Learning Objectives
- Understand the CSS filter property and its functions
- Apply common filters: blur, brightness, contrast, grayscale, sepia, hue-rotate, saturate, invert, opacity
- Combine multiple filters for complex effects
- Use filter transitions and animations
- Understand performance considerations
- Master the backdrop-filter property for glassmorphism effects
- Apply filters conditionally with media queries and feature detection

## Topics Covered

### 1. The filter Property
The `filter` property applies graphical effects to an element's rendering. Multiple filters can be combined by separating them with spaces. Filters are applied in the order they are written, and the order affects the final result.

```css
/* Single filter */
filter: blur(4px);

/* Multiple filters — order matters! */
filter: brightness(1.2) contrast(1.1) saturate(1.3);

/* Reset */
filter: none;
```

The filter property creates a new stacking context and containing block for the element, similar to `transform` and `opacity` with values less than 1. This means elements with filters may behave differently in terms of z-index and overflow clipping.

### 2. Core Filter Functions

**blur()** — Applies Gaussian blur. Accepts a length value (e.g., `5px`). Larger values = more blur. The blur radius defines the standard deviation of the Gaussian convolution kernel. A value of `0` leaves the element unchanged.

```css
filter: blur(0);      /* No effect */
filter: blur(2px);    /* Subtle blur */
filter: blur(8px);    /* Heavy blur — content unrecognizable */
```

**brightness()** — Adjusts brightness. 1 = normal, 0 = black, >1 = brighter.

```css
filter: brightness(1);    /* Normal */
filter: brightness(0.5);  /* Half brightness (darker) */
filter: brightness(1.5);  /* 50% brighter */
filter: brightness(0);    /* Completely black */
```

**contrast()** — Adjusts contrast. 1 = normal, 0 = gray, >1 = more contrast.

```css
filter: contrast(1);    /* Normal */
filter: contrast(0.5);  /* Reduced contrast, muted look */
filter: contrast(2);    /* High contrast, vivid look */
```

**grayscale()** — Converts to grayscale. 0 = color, 1 = fully grayscale. Values between 0 and 1 produce partial desaturation.

```css
filter: grayscale(0);      /* Full color */
filter: grayscale(0.5);    /* Partial desaturation */
filter: grayscale(1);      /* Fully grayscale */
```

**sepia()** — Applies sepia tone. 0 = color, 1 = fully sepia. Useful for vintage photo effects or "warm" monochrome aesthetics.

```css
filter: sepia(0.3);    /* Subtle warm tone */
filter: sepia(0.8);    /* Strong sepia — vintage look */
filter: sepia(1);      /* Full sepia */
```

**hue-rotate()** — Rotates the hue. Accepts angle (e.g., `90deg`, `0.5turn`). The entire color palette of the element is shifted around the color wheel.

```css
filter: hue-rotate(90deg);   /* Shift hues by 90 degrees */
filter: hue-rotate(0.5turn); /* Shift by 180 degrees (complementary) */
filter: hue-rotate(360deg);  /* Full rotation — back to original */
```

**saturate()** — Adjusts saturation. 0 = desaturated, 1 = normal, >1 = oversaturated.

```css
filter: saturate(0);     /* Grayscale equivalent */
filter: saturate(1.5);   /* Vibrant, punchy colors */
filter: saturate(3);     /* Extremely vivid — use sparingly */
```

**invert()** — Inverts colors. 0 = normal, 1 = fully inverted. Useful for dark mode adaptation and creative effects.

```css
filter: invert(0);     /* Normal */
filter: invert(1);     /* Fully inverted like a photo negative */
filter: invert(0.5);   /* Gray (all colors mapped to midtones) */
```

**opacity()** — Adjusts transparency. 0 = fully transparent, 1 = fully opaque. While similar to the `opacity` property, this filter version is useful when combining with other filters in a single filter declaration.

```css
filter: opacity(0.5);  /* 50% transparent */
```

**drop-shadow()** — Creates a shadow that follows the element's alpha mask (covered in Module 74).

### 3. Combining Filters
Multiple filters are combined with spaces. The order of application significantly impacts the result because each filter operates on the output of the previous one.

```css
/* Warm, vintage photo effect */
filter: sepia(0.6) contrast(1.1) brightness(1.05);

/* Cool, desaturated modern look */
filter: saturate(0.8) hue-rotate(-10deg) brightness(1.1);

/* High-contrast dark mode image */
filter: brightness(0.8) contrast(1.3) saturate(0.9);
```

**Why order matters:** Applying `brightness` before `hue-rotate` produces different results than `hue-rotate` before `brightness`. The output of each function feeds into the next. For predictable results, apply global adjustments (brightness, contrast) before stylistic effects (hue-rotate, sepia).

### 4. Filter Transitions and Animations
Filters can be animated using CSS transitions or keyframe animations, enabling smooth visual effects on hover or state changes.

```css
/* Smooth hover transition */
.image {
  filter: brightness(1) saturate(1);
  transition: filter 0.3s ease;
}
.image:hover {
  filter: brightness(1.1) saturate(1.2);
}

/* Keyframe animation */
@keyframes pulse-filter {
  0% { filter: brightness(1); }
  50% { filter: brightness(1.3); }
  100% { filter: brightness(1); }
}
.animated-image {
  animation: pulse-filter 2s ease-in-out infinite;
}
```

### 5. backdrop-filter
The `backdrop-filter` property applies filters to the area behind an element, creating frosted glass and blur effects. It affects the background behind the element, not the element itself.

```css
/* Glassmorphism effect */
.glass-panel {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
```

**Key differences from filter:**
- `filter` affects the element itself
- `backdrop-filter` affects the content behind the element
- `backdrop-filter` requires a partially transparent background to show the effect
- `backdrop-filter` is often paired with `-webkit-` prefix for Safari support

### 6. Advanced Filter Techniques

**Dark mode image adaptation:**
```css
@media (prefers-color-scheme: dark) {
  img {
    filter: brightness(0.9) contrast(1.1);
  }
}
```

**Accessibility — reduced motion:**
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

**Color blindness simulation (for testing):**
```css
/* Protanopia simulation */
filter: url(#protanopia);

/* Grayscale for testing colorless readability */
filter: grayscale(1);
```

### 7. Performance Considerations
- Filters can be GPU-accelerated, but complex filters may impact performance
- `blur()` with large values is computationally expensive (more pixels in the convolution kernel)
- Use `will-change: filter` for animated filters to promote GPU rendering
- Test on lower-end devices when using heavy filter effects
- `backdrop-filter` is particularly expensive on mobile devices — use small blur values (3-8px)
- Combining 4+ filters can significantly impact rendering time
- Filters force the browser to rasterize on the CPU in some cases (especially older browsers)

**Performance optimization tips:**
```css
/* Prefer smaller blurs */
backdrop-filter: blur(4px); /* Better than blur(20px) */

/* Limit filter surface area — smaller elements perform better */
/* If possible, avoid full-page blur effects */

/* Use opacity instead of filter: opacity() when not combining with other filters */
opacity: 0.5; /* More performant than filter: opacity(0.5) */
```

## Best Practices
- Use `filter` for image editing that adapts to theme changes (dark mode, accessibility)
- Combine `brightness` and `contrast` for image enhancement
- Use `backdrop-filter` for modern UI effects (glassmorphism)
- Prefer `filter: opacity()` over `opacity` when combining with other filters
- Animate filters with `transform` to minimize layout thrashing
- Always include `-webkit-backdrop-filter` for Safari support
- Test filter combinations on real content, not test patterns
- Use `@supports (filter: blur(1px))` to provide fallbacks

## Common Mistakes
- Applying filters to parent elements affects all children (filters don't create stacking context like transforms)
- Overusing blur on large elements causes janky scrolling
- Combining too many filters can produce unexpected results
- `backdrop-filter` may not work in all browsers without vendor prefixes
- Forgetting that filter order affects the final visual result
- Using `filter: blur()` on text can make it completely unreadable
- Assuming `filter: grayscale(1)` creates an accessible monochrome mode (it affects images differently)
- Not testing `backdrop-filter` on scrollable content with complex backgrounds

## Accessibility Considerations
- Ensure text overlaid on backdrop-filtered areas maintains 4.5:1 contrast ratio
- Avoid heavy blur effects that obscure content or reduce readability
- Provide alternative styling when filters are unsupported or disabled
- Users with photosensitive epilepsy may react to rapidly changing filters
- Color transformations (hue-rotate, sepia) can make content unrecognizable
- Test with forced colors mode enabled (Windows High Contrast)
- Consider that `prefers-reduced-motion` should disable animated filter transitions
- Screen readers cannot interpret visual filter effects — don't convey information through filters alone

## Performance Considerations
- `blur()` with radius > 10px is significantly more expensive than smaller values
- `backdrop-filter` must re-render on every scroll, making it expensive for fixed elements
- Multiple filters increase the per-pixel processing cost
- Filters may prevent GPU compositing in some scenarios
- Use Chrome DevTools Performance tab to measure filter rendering cost
- On mobile, keep blur values under 8px for acceptable performance
- Animated filters should use `will-change: filter` to promote GPU layers
- Consider using CSS `opacity` and `mix-blend-mode` as lighter alternatives for simple effects

## Browser Compatibility

| Feature | Chrome | Firefox | Safari | Edge | IE |
|---------|--------|---------|--------|------|-----|
| filter | 18+ | 35+ | 6+ (with -webkit-) | 12+ | No |
| blur() | 18+ | 35+ | 6+ | 12+ | No |
| brightness() | 18+ | 35+ | 6+ | 12+ | No |
| contrast() | 18+ | 35+ | 6+ | 12+ | No |
| grayscale() | 18+ | 35+ | 6+ | 12+ | No |
| sepia() | 18+ | 35+ | 6+ | 12+ | No |
| hue-rotate() | 18+ | 35+ | 6+ | 12+ | No |
| saturate() | 18+ | 35+ | 6+ | 12+ | No |
| invert() | 18+ | 35+ | 6+ | 12+ | No |
| opacity() | 18+ | 35+ | 6+ | 12+ | No |
| drop-shadow() | 18+ | 35+ | 6+ | 12+ | No |
| backdrop-filter | 76+ | 103+ | 9+ (with -webkit-) | 76+ | No |

Filter support is excellent in modern browsers. IE 11 and below have no filter support. Safari required the `-webkit-` prefix for filters until version 15. For `backdrop-filter`, Safari has supported it with prefix since version 9, while Chrome and Firefox added support later.

## Visual Explanation

**Filter pipeline — order of operations:**
```
Original Element
      │
      ▼
┌─────────────────┐
│  Filter #1       │  e.g. brightness(1.2)
│  Applied first   │
└────────┬─────────┘
         │
         ▼
┌─────────────────┐
│  Filter #2       │  e.g. contrast(1.1)
│  Applied second  │
└────────┬─────────┘
         │
         ▼
┌─────────────────┐
│  Filter #3       │  e.g. saturate(1.3)
│  Applied third   │
└────────┬─────────┘
         │
         ▼
┌─────────────────┐
│  Final result    │  Each filter operates on the
│  (stacked output)│  output of the previous filter
└─────────────────┘
```

**backdrop-filter vs filter:**
```
  filter: blur(4px)          backdrop-filter: blur(4px)
  ┌──────────────────┐       ┌──────────────────┐
  │  ┌────────────┐  │       │  Blurred content │
  │  │  Element   │  │       │  (background     │
  │  │  (blurred) │  │       │   behind element) │
  │  └────────────┘  │       │                  │
  │                  │       │ ┌──────────────┐ │
  │                  │       │ │  Element     │ │
  │                  │       │ │  (sharp)     │ │
  └──────────────────┘       │ └──────────────┘ │
     Element itself           └──────────────────┘
     gets blurred               Background behind
                                 element gets blurred
```

**Filter function effects on a color spectrum:**
```
Original:  ██▒▒░░▒▒██  (full spectrum)
    │
    ▼  grayscale(1)
     ░░░░░░░░░░░░  (no color)
    
    ▼  sepia(1)
     ▓▓▓▓░░░░▓▓▓▓  (warm brown tones)
    
    ▼  hue-rotate(180deg)
     ██▓▓░░▓▓██    (complementary colors)
    
    ▼  invert(1)
     ░░██▓▓██░░    (negative image)
```

## Summary Notes
- CSS filters provide GPU-accelerated image editing directly in the browser
- 10 core filter functions: blur, brightness, contrast, grayscale, sepia, hue-rotate, saturate, invert, opacity, drop-shadow
- Multiple filters combine sequentially — order affects the final result
- `backdrop-filter` creates glassmorphism effects by filtering background content behind the element
- Animate filters with transitions and keyframes for interactive effects
- Large blur values are computationally expensive — use sparingly
- Always test filters on real content across browser/device combinations
- Provide fallbacks with `@supports` for browsers without filter support
- Include `-webkit-` prefix for `backdrop-filter` cross-browser support
