# CSS Keyframe Animations

## Introduction
CSS keyframe animations (`@keyframes`) define complex, multi-step animations that can run automatically (without triggers), loop infinitely, and animate between multiple states. Unlike transitions, they don't require a property change to start. Keyframe animations are the foundation of most CSS-driven motion on the modern web, powering everything from micro-interactions to full-page loading sequences entirely in the browser's compositor thread.

---

## Learning Objectives
1. Understand @keyframes syntax and structure
2. Define animation states using from/to and percentage stops
3. Control animation with animation properties
4. Create multi-step, looping animations
5. Combine multiple animations on one element
6. Understand the rendering pipeline and compositor vs main thread animation
7. Debug and inspect animations using browser DevTools
8. Optimize keyframe animations for performance
9. Handle animation events with JavaScript
10. Apply progressive enhancement for older browsers

---

## Theory

### @keyframes Structure
```css
@keyframes animation-name {
  from { /* initial state */ }
  to { /* final state */ }
}

@keyframes animation-name {
  0% { /* start */ }
  50% { /* middle */ }
  100% { /* end */ }
}
```

The `@keyframes` at-rule defines a named animation sequence. Each keyframe selector (percentage or `from`/`to`) specifies the property values at that point in the animation timeline. The browser interpolates between keyframes based on the timing function. When you omit intermediate keyframes, the browser automatically calculates the in-between states using the specified timing function.

Keyframe selectors must appear in ascending order (0% through 100%), though the browser will reorder them if necessary. You can omit the 0% and 100% keyframes — if they're missing, the browser uses the element's computed style at those points.

### How Keyframes Interpolate
Each property listed in a keyframe is interpolated independently according to its type:
- **Numeric values** (length, percentage, number) — linear interpolation
- **Colors** — interpolation in the appropriate color space (RGB by default)
- **Transforms** — matrix interpolation (matching transform functions)
- **Filters** — interpolation per filter function
- **Non-interpolable properties** — abrupt change at the keyframe boundary

### Animation Properties
| Property | Description | Default |
|----------|-------------|---------|
| `animation-name` | Name of @keyframes | none |
| `animation-duration` | Duration (s/ms) | 0s |
| `animation-timing-function` | Easing curve | ease |
| `animation-delay` | Delay before start | 0s |
| `animation-iteration-count` | Times to repeat | 1 |
| `animation-direction` | normal/reverse/alternate/alternate-reverse | normal |
| `animation-fill-mode` | forwards/backwards/both | none |
| `animation-play-state` | running/paused | running |
| `animation-timeline` | Scroll or view timeline | auto |

### The Animation Rendering Pipeline
Modern browsers run CSS animations on the **compositor thread** rather than the main thread. This is critical for performance: even if JavaScript is blocked, composited animations continue smoothly. Properties that trigger compositing include `transform`, `opacity`, and `filter`. Properties like `width`, `height`, `top`, and `left` require layout recalculation on the main thread and should be avoided in keyframe animations.

### Animation Events
JavaScript can listen for three animation events:
- `animationstart` — fired when the animation begins
- `animationend` — fired when the animation completes
- `animationiteration` — fired at the end of each iteration (except the final one)

```javascript
element.addEventListener('animationend', () => {
  console.log('Animation completed');
});
```

---

## Examples

```css
/* Bounce animation */
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-50px); }
}

/* Shake animation */
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-10px); }
  75% { transform: translateX(10px); }
}

/* Fade in + slide up */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Pulse — scaling with opacity */
@keyframes pulse {
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.1); opacity: 0.7; }
  100% { transform: scale(1); opacity: 1; }
}

/* Spin — full rotation */
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Multiple animations applied to one element */
.element {
  animation: bounce 1s ease infinite, fadeInUp 0.5s ease;
}

/* Staggered animation with different delays */
.items li {
  opacity: 0;
  animation: fadeInUp 0.4s ease forwards;
}
.items li:nth-child(1) { animation-delay: 0.1s; }
.items li:nth-child(2) { animation-delay: 0.2s; }
.items li:nth-child(3) { animation-delay: 0.3s; }
.items li:nth-child(4) { animation-delay: 0.4s; }

/* Animation with steps() for frame-by-frame */
@keyframes frameByFrame {
  0% { background-position: 0 0; }
  100% { background-position: -400px 0; }
}
.sprite {
  animation: frameByFrame 1s steps(4) infinite;
}
```

---

## Visual Explanation

```
Timeline of a 1-second bounce animation:

  0% ──●── translateY(0)
       │
  25%  │    ●── translateY(-25px)
       │   / \
  50%  │  ●────●── translateY(-50px)
       │   \ /
  75%  │    ●── translateY(-25px)
       │
 100% ──●── translateY(0)

Multiple keyframes:  [0%]────[25%]────[50%]────[75%]────[100%]
                     translateY interpolates between each stop
```

---

## Common Mistakes
1. **Not using vendor prefixes for older browsers** — While modern browsers don't need prefixes, older versions (IE 10, Safari 8) require `-webkit-`.
2. **Forgetting animation-duration (defaults to 0s)** — Without a duration, the animation appears instant and invisible.
3. **Overlapping property conflicts in same animation** — Setting the same property to different values in overlapping keyframes creates sudden jumps.
4. **Not considering animation-fill-mode for retained end state** — Without `forwards` or `both`, the element snaps back to its original state after the animation ends.
5. **Using too many keyframes causing performance issues** — Each additional keyframe increases interpolation computation.
6. **Animating expensive properties** — Properties like `box-shadow`, `border-radius`, and `width` trigger layout or paint on every frame.
7. **Negative animation-delay misunderstanding** — A negative delay starts the animation mid-sequence, which can surprise developers expecting a simple pause.
8. **Confusing shorthand order** — The `animation` shorthand has a specific longhand order; mistaking it can break the animation silently.

## Best Practices
- Use from/to for simple, percentage for complex animations
- Keep animations subtle and purposeful (200-600ms for UI animations)
- Use animation shorthand for cleaner code
- Pause animations with prefers-reduced-motion
- Use `will-change` for animated properties (sparingly)
- Prefer `transform` and `opacity` for GPU-composited animations
- Use `animation-delay` with negative values to synchronize staggered entries
- Limit infinite animations to decorative elements only
- Use `animation-fill-mode: both` for entrance animations to avoid FOUC
- Test animations at different speeds and with reduced motion enabled

## Accessibility Considerations
- Respect `prefers-reduced-motion: reduce` — disable non-essential animations
- Provide a manual toggle for animations on your site
- Avoid flashing animations that could trigger seizures (more than 3 flashes/second)
- Never use animation to convey critical information alone
- Ensure content is still understandable when animations are paused or removed
- Support `prefers-reduced-transparency` for transparency-related effects

## Performance Considerations
- CSS animations run on the compositor thread when animating `transform` and `opacity` only
- Avoid animating `width`, `height`, `top`, `left`, `margin`, `padding` — these trigger layout
- Avoid animating `box-shadow`, `border-radius`, `background` — these trigger paint
- Keyframe animations are generally more performant than JavaScript rAF loops
- Each animated `transform` creates a new compositing layer (watch for layer explosion)
- Use Chrome DevTools Performance panel to identify jank caused by animations
- `will-change: transform` promotes the element to its own layer but should be used sparingly
- On mobile devices, excessive compositing layers can exhaust GPU memory

## Browser Compatibility

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| `@keyframes` | 43+ | 16+ | 9+ | 79+ |
| `animation` shorthand | 43+ | 16+ | 9+ | 79+ |
| `animation-fill-mode` | 43+ | 16+ | 9+ | 79+ |
| `animation-play-state` | 43+ | 16+ | 9+ | 79+ |
| `-webkit-` prefix needed | No | No | Safari < 9 | No |
| `animation-timeline` | 115+ | ❌ | ❌ | 115+ |

All modern browsers support CSS keyframe animations natively. IE 10+ supports animations with the `-webkit-` prefix. For maximum compatibility, use a PostCSS autoprefixer in your build process. Do not rely on `@keyframes` for critical layout — always provide a static fallback.

## Summary Notes
- `@keyframes` defines named animation sequences with percentage stops (0%-100%) or `from`/`to`
- The `animation` shorthand combines all animation sub-properties in one declaration
- Always set `animation-duration` — default is 0s (invisible)
- Use `animation-fill-mode: both` to prevent flickering before and after animations
- For performance, only animate `transform` and `opacity` (compositor-friendly)
- Apply `prefers-reduced-motion` fallbacks for users with vestibular disorders
- Combine multiple animations on one element by comma-separating in shorthand
- Use negative `animation-delay` values to start animations mid-sequence
- Keyframe animations are event-driven: listen for `animationstart`, `animationend`, and `animationiteration`
