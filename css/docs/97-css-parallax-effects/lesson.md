# CSS Parallax Effects

## Introduction
CSS parallax effects create depth by moving background and foreground elements at different speeds during scrolling. Pure CSS parallax uses `perspective` and `translateZ` with `scroll` positioning, avoiding JavaScript scroll listeners. Parallax scrolling is a popular visual technique that creates an illusion of depth — foreground content scrolls faster than background content, mimicking the way distant objects appear to move slower when you're in motion.

---

## Learning Objectives
1. Understand pure CSS parallax using perspective
2. Create multi-layer parallax scrolling effects
3. Implement parallax with background-attachment: fixed
4. Build performant parallax without JavaScript
5. Ensure parallax is accessible and mobile-friendly
6. Troubleshoot common parallax rendering issues
7. Apply parallax progressively (enhancement, not requirement)
8. Combine parallax with other scroll-driven effects
9. Understand the difference between CSS and JavaScript parallax approaches
10. Test and debug parallax across browsers and devices

---

## Theory

### The Perspective Method (True CSS Parallax)
The pure CSS parallax technique uses a combination of `perspective` and 3D transforms to create parallax naturally as the user scrolls. The container establishes a 3D perspective, and child elements are positioned at different Z depths. Elements with negative `translateZ` appear farther away and scroll more slowly.

```css
.parallax-container {
  perspective: 1px;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
}
.parallax-layer {
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
}
.layer-back {
  transform: translateZ(-1px) scale(2);
}
.layer-front {
  transform: translateZ(0);
}
```

### How It Works
- Elements with negative translateZ appear farther away in 3D space
- `perspective: 1px` creates the parallax effect by establishing a very close vanishing point
- `scale()` compensates for the Z-translation to maintain size (scale = 1 + (translateZ / perspective) * -1)
- Scroll speed = 1 + (translateZ / perspective) — more negative = slower scroll
- The `overflow-y: scroll` on the container is what drives the parallax — the inner content scrolls within the 3D space

### The Math Behind Parallax
For a container with `perspective: 1px`:
- `translateZ(-1px)` = scroll speed ratio of 0.5x (element moves at half speed)
- `translateZ(-2px)` = scroll speed ratio of 0.33x (element moves at one-third speed)
- `translateZ(-3px)` = scroll speed ratio of 0.25x
- `translateZ(0)` = normal scroll speed (1x)

The scale compensation formula: `scale = 1 + abs(translateZ) / perspective`

For `translateZ(-1px)` with `perspective: 1px`: `scale = 1 + 1/1 = 2`
For `translateZ(-2px)`: `scale = 1 + 2/1 = 3`

### Alternative: background-attachment: fixed
```css
.parallax-bg {
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}
```
This simpler approach creates a parallax effect where the background image stays fixed while the content scrolls over it. However, `background-attachment: fixed` has poor mobile support — Safari and Chrome on iOS ignore it, falling back to `scroll`. This method also triggers paint on every scroll event, making it less performant than the perspective method.

### Scroll-Driven Parallax (Newer API)
CSS Scroll-Driven Animations (`animation-timeline: scroll()`) offer another approach to parallax:
```css
@keyframes parallax-scroll {
  from { transform: translateY(0); }
  to { transform: translateY(-100px); }
}
.parallax-element {
  animation: parallax-scroll linear;
  animation-timeline: scroll();
}
```
This API is newer and not as widely supported as the perspective method, but it provides more granular control over scroll-linked effects.

---

## Examples

```css
/* Three-layer parallax with perspective */
.parallax-container {
  height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
  perspective: 1px;
  transform-style: preserve-3d;
}
.layer-1 { transform: translateZ(-3px) scale(4); } /* slowest — far background */
.layer-2 { transform: translateZ(-1px) scale(2); } /* medium — midground */
.layer-3 { transform: translateZ(0); } /* normal scroll — foreground content */

/* Stars/particles parallax with multiple layers */
.stars-layer {
  transform: translateZ(-5px) scale(6);
  background-image: radial-gradient(2px 2px at 20px 30px, white, transparent);
}
.clouds-layer {
  transform: translateZ(-2px) scale(3);
  background-image: url('clouds.png');
  opacity: 0.5;
}

/* background-attachment fixed parallax */
.hero-section {
  min-height: 100vh;
  background-image: url('hero-bg.jpg');
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Mobile fallback for background-attachment: fixed */
@media (max-width: 768px) {
  .hero-section {
    background-attachment: scroll;
  }
}

/* Reduced motion fallback */
@media (prefers-reduced-motion: reduce) {
  .parallax-container {
    perspective: none;
    transform-style: flat;
  }
  .layer-1, .layer-2 {
    transform: none;
  }
}
```

### HTML Structure
```html
<div class="parallax-container">
  <div class="layer-1">
    <!-- Background content (mountains, sky) -->
  </div>
  <div class="layer-2">
    <!-- Midground content (trees, buildings) -->
  </div>
  <div class="layer-3">
    <!-- Foreground content (text, cards, CTAs) -->
  </div>
</div>
```

---

## Visual Explanation

```
Parallax Depth Layers (side view):

  Foreground (layer-3):    ════════════════  ← scrolls at 1x speed
                                Midground (layer-2):  ════════  ← scrolls at ~0.5x speed
                                    Background (layer-1): ════  ← scrolls at ~0.25x speed

  Viewport looking through perspective:

       ┌─────────────────────────┐
       │  perspective: 1px       │
       │                         │
       │   ┌─── Foreground ──┐   │  ← Full scroll speed
       │   │  ┌─ Midground ─┐│   │  ← Half scroll speed
       │   │  │ ┌Background┐││   │  ← Quarter scroll speed
       │   │  │ │          │││   │
       └─────────────────────────┘

  Scroll position 1 (top):
     [Mountain]        ← background
        [Tree]         ← midground
           [Text]      ← foreground

  Scroll position 2 (scrolled down):
     [Mountain]        ← barely moved (far away)
        [Tree]         ← moved a little
           [Text]      ← moved full distance
```

---

## Common Mistakes
1. **Performance issues on mobile (use sparingly)** — Parallax can cause jank on mobile devices with limited GPU capabilities.
2. **Overflow clipping killing the 3D effect** — The `overflow: hidden` or `overflow-x: hidden` must be on the perspective container, not a parent, or the 3D effect is flattened.
3. **Background-attachment: fixed not supported on mobile** — iOS Safari intentionally ignores this property. Always provide a fallback.
4. **Not scaling to compensate for Z translation** — Without `scale()`, elements with `translateZ(-1px)` appear smaller and leave gaps in the layout.
5. **Overly dramatic movement causing motion sickness** — Fast parallax speeds (translateZ < -3px) can cause nausea, especially on large screens.
6. **Parallax layers without proper z-index ordering** — Layers must stack correctly with `z-index` in addition to transform ordering.
7. **Not disabling parallax for users who prefer reduced motion** — Parallax is purely decorative motion and should be disabled when `prefers-reduced-motion: reduce` is set.
8. **Parallax containers with complex layout inside** — The perspective method requires absolute positioning for layers, which can complicate responsive layouts.
9. **Parallax that causes content to be inaccessible** — Critical text or CTAs placed in parallax layers may be partially obscured during scroll.
10. **Using `background-attachment: fixed` on the body element** — This is not supported in Chrome and can cause rendering bugs; always use on a contained section.

## Best Practices
- Use the perspective method for better performance and mobile compatibility
- Limit to 2-3 layers maximum for performance and visual clarity
- Test on real mobile devices — emulation often doesn't match real behavior
- Provide fallback for unsupported browsers (flat layout)
- Respect `prefers-reduced-motion` — disable parallax entirely
- Keep parallax speed subtle (translateZ between -1 and -2px)
- Always apply `scale()` compensation to maintain element size
- Use `transform-style: preserve-3d` on the container to maintain the 3D context
- Avoid placing critical content in parallax layers — content should be accessible regardless of scroll position
- Consider using `background-attachment: fixed` only for simple hero sections, not full-page parallax

## Accessibility Considerations
- Provide reduced-motion alternatives — disable all parallax when `prefers-reduced-motion: reduce` is active
- Don't place critical content or calls-to-action in parallax layers
- Ensure content is fully accessible and readable regardless of parallax effects
- Test with screen readers — parallax must not interfere with content order or navigation
- Parallax scrolling should not trap or hijack the scroll position
- Avoid auto-scrolling or scroll-jacking in combination with parallax
- Provide a flat, non-parallax fallback that doesn't lose content
- Add `aria-hidden="true"` to purely decorative parallax layers

## Performance Considerations
- The perspective method runs primarily on the GPU, making it more performant than `background-attachment: fixed`
- `background-attachment: fixed` triggers repaints on every scroll event — avoid on low-end devices
- Each parallax layer creates a new compositing layer (GPU memory)
- 3D transforms (`translateZ`, `preserve-3d`) promote elements to their own compositor layers
- Use `will-change: transform` on parallax layers to hint at upcoming 3D transforms
- On mobile, consider disabling parallax entirely or reducing to a single layer
- Parallax effects should use `transform` only — do not animate `top`, `left`, or `background-position` with parallax
- The paint cost of parallax is proportional to the number of layers and their complexity (large background images increase cost)
- Use `contain: paint style layout` on parallax layers to isolate rendering

## Browser Compatibility

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| Perspective method | 12+ | 10+ | 4+ | 12+ |
| `transform-style: preserve-3d` | 12+ | 10+ | 4+ | 12+ |
| `background-attachment: fixed` | 1+ | 1+ | 15+ (iOS: ❌) | 12+ |
| `translateZ()` | 12+ | 10+ | 4+ | 12+ |
| `animation-timeline: scroll()` | 115+ | ❌ | ❌ | 115+ |
| `prefers-reduced-motion` | 74+ | 63+ | 10.1+ | 79+ |

- **Perspective method**: Supported in all modern desktop browsers. Safari on iOS 15+ has improved support but may still exhibit quirks.
- **background-attachment: fixed**: Not supported on iOS Safari (any version). Android Chrome may have inconsistent behavior. Always provide a fallback.
- **Scroll-driven animations**: Very limited support as of 2025; use as progressive enhancement only.
- For maximum compatibility, use the perspective method with a mobile/reduced-motion fallback.

## Summary Notes
- Pure CSS parallax uses `perspective: 1px` on a container and `translateZ()` on child layers
- The perspective method is GPU-accelerated and more performant than `background-attachment: fixed`
- Always apply `scale()` compensation: `scale = 1 + abs(translateZ) / perspective`
- Limit to 2-3 parallax layers for performance
- `background-attachment: fixed` is not supported on iOS — always provide a fallback
- Disable parallax when `prefers-reduced-motion: reduce` is active
- Use `transform-style: preserve-3d` on the parallax container
- The further back (more negative translateZ), the slower the element scrolls
- Parallax is a decorative enhancement — never rely on it for content accessibility
- Test on real devices across browsers and input methods
