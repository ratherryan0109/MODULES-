# CSS Animation Properties

## Introduction
CSS animation properties control how `@keyframes` animations behave. Understanding each property gives precise control over animation timing, repetition, direction, and state management. These properties serve as the control panel for keyframe animations — they determine whether an animation plays once or loops infinitely, moves forward or in reverse, starts immediately or after a delay, and retains its end state or resets when finished.

---

## Learning Objectives
1. Master all CSS animation sub-properties
2. Write effective animation shorthand
3. Control animation playback with play-state
4. Manage animation end state with fill-mode
5. Create complex animation sequences
6. Understand the interaction between multiple animation properties
7. Debug animation issues using browser DevTools Animation panel
8. Apply animation-timing-function per-keyframe vs globally
9. Use animation-delay for staggered and sequenced effects
10. Build production-ready animation systems with CSS custom properties

---

## Theory

### Animation Shorthand
```css
animation: name duration timing-function delay iteration-count direction fill-mode play-state;
animation: bounce 1s ease 0s infinite normal both running;
```

The `animation` shorthand is one of CSS's most powerful shorthand properties, combining eight individual sub-properties into a single declaration. The order is important: the first time value is `animation-duration`, the second time value is `animation-delay`. Omitting either uses the default (0s).

You can apply multiple animations by comma-separating shorthand values:

```css
.element {
  animation:
    fadeIn 0.5s ease 0.2s both,
    pulse 2s ease 0.7s infinite;
}
```

### Sub-Properties in Detail

**animation-name:** References the `@keyframes` rule by name. Multiple names can be comma-separated. If a name doesn't match any `@keyframes` rule, no animation runs.

**animation-duration:** Specifies how long one complete cycle of the animation takes. Values in seconds (`s`) or milliseconds (`ms`). Default is `0s`, meaning no animation occurs. Common UI animation durations:
- 100-200ms: Micro-interactions, button feedback
- 200-500ms: Element transitions, entrance animations
- 500-1000ms: Page transitions, emphasis animations
- 1000ms+: Loading indicators, decorative ambient animations

**animation-timing-function:** Applied per keyframe, not per property. This means the easing curve applies to the entire segment between keyframes, not to individual animated properties within a segment. Common timing functions:
- `ease` — slow start, fast middle, slow end (default)
- `linear` — constant speed (good for rotations)
- `ease-in` — slow start, fast end
- `ease-out` — fast start, slow end (best for UI entrances)
- `ease-in-out` — slow start and end, fast middle
- `cubic-bezier(x1, y1, x2, y2)` — custom curve
- `steps(n)` — frame-by-frame, no interpolation between steps

**animation-fill-mode:**
- `none` — no styles applied before/after (default)
- `forwards` — retains end state after animation ends
- `backwards` — applies start state before animation begins (during delay)
- `both` — applies both forwards and backwards

Understanding fill-mode is critical for entrance animations. With `forwards`, the element stays at the 100% keyframe values after the animation completes. With `backwards`, the element takes on the 0% keyframe values during the delay period, preventing a flash of the pre-animation state.

**animation-direction:**
- `normal` — 0% to 100% (default)
- `reverse` — 100% to 0%
- `alternate` — normal then reverse (requires iteration-count > 1)
- `alternate-reverse` — reverse then normal

`alternate` is commonly used for ping-pong effects like pulsing or swaying. Combined with `infinite` iteration count, it creates smooth back-and-forth motion.

**animation-iteration-count:**
- Number: specific count (3, 5, 10, etc.)
- `infinite`: loops forever
- Fractional values (0.5, 1.5) — runs part of the cycle

Decorative animations should use `infinite` sparingly. Functional animations like loading spinners are appropriate cases for infinite loops.

**animation-delay:**
- Positive value: waits before starting
- Negative value: starts mid-animation (as if it's been running)
- Zero: starts immediately

Negative delays are powerful for synchronizing elements that should appear to start simultaneously or for creating staggered effects without JavaScript.

**animation-play-state:**
- `running` — animation is playing (default)
- `paused` — animation is paused at its current position

Use `paused` to freeze an animation on hover or when a component becomes inactive. The animation resumes from where it was paused, not from the beginning.

---

## Examples

```css
/* Typing indicator dots */
.dot {
  animation: pulse 1.5s ease-in-out infinite;
}
.dot:nth-child(2) { animation-delay: 0.2s; }
.dot:nth-child(3) { animation-delay: 0.4s; }

/* Pause on hover */
.card {
  animation: float 3s ease-in-out infinite;
}
.card:hover {
  animation-play-state: paused;
}

/* One-time entrance with fill-mode */
.hero-title {
  animation: slideIn 0.8s ease-out 0.3s both;
}

/* Complex staggered animation for list items */
@keyframes itemEnter {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
.item { animation: itemEnter 0.4s ease-out both; }
.item:nth-child(1) { animation-delay: 0.1s; }
.item:nth-child(2) { animation-delay: 0.2s; }
.item:nth-child(3) { animation-delay: 0.3s; }

/* Reverse direction for exit animation */
.element-exit {
  animation: slideIn 0.3s ease-in reverse both;
}

/* Custom cubic-bezier for bounce-like entrance */
.bounce-in {
  animation: scaleUp 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) both;
}

/* Animation with all longhand properties */
.controlled-animation {
  animation-name: fadeIn;
  animation-duration: 500ms;
  animation-timing-function: ease-out;
  animation-delay: 100ms;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: both;
  animation-play-state: running;
}
```

---

## Visual Explanation

```
Animation Timeline with fill-mode:

 Delay     |     Active Animation     |   Post-animation
-----------+--------------------------+--------------------

backwards: [applies 0% styles]       |
none:      [no styles applied]       | [snaps to original]
forwards:                            | [retains 100% styles]
both:      [applies 0% styles]       | [retains 100% styles]

Effect of animation-delay with negative value:

delay: 0s     → [0%]───[25%]───[50%]───[75%]───[100%]
delay: -0.5s  →       [25%]───[50%]───[75%]───[100%]
                 (starts mid-way at 25%)
```

---

## Common Mistakes
1. **Missing animation-duration (animation won't run)** — Defaults to 0s, making the animation instant and invisible. Always explicitly set duration.
2. **Confusing animation and transition** — Transitions respond to state changes; animations run independently. They are not interchangeable.
3. **Not setting fill-mode for entrance animations** — Without `forwards` or `both`, the element snaps back to its original state when the animation ends.
4. **Using animation-delay for all items instead of staggered** — Applying the same delay to every element doesn't create a stagger effect. Each element needs a progressively larger delay.
5. **Overriding animation shorthand with longhand** — Setting `animation: bounce 1s;` then `animation-duration: 2s;` doesn't work as expected due to shorthand reset behavior.
6. **Not accounting for fill-mode when using animation-delay** — During the delay period, the element shows its pre-animation state unless `backwards` or `both` is set.
7. **Overusing infinite animations** — Infinite animations consume CPU/GPU resources continuously and can annoy users.
8. **Mixing multiple animations with conflicting properties** — When two animations animate the same property, the last one in the list wins, potentially creating unexpected results.

## Best Practices
- Always set `animation-duration` — never rely on the default
- Use `animation-fill-mode: both` for entrance animations to prevent flicker
- Group related animations using animation shorthand for readability
- Use negative animation-delay for synchronizing elements
- Apply `animation-play-state: paused` for hover-pausing animations
- Use `cubic-bezier()` for custom, brand-appropriate timing
- Keep animation-duration under 600ms for UI feedback animations
- Document complex animation setups with comments explaining intent
- Use CSS custom properties for animation parameters (duration, delay)

## Accessibility Considerations
- Respect `prefers-reduced-motion: reduce` by setting `animation-duration: 0.01ms`
- Provide users with a manual toggle to stop all animations
- Avoid animations that flash more than 3 times per second
- Ensure content is not obscured during animation delay periods
- Use `animation-play-state: paused` as a default for users who trigger reduced motion preferences
- Test with animation disabled entirely — all functionality must remain

## Performance Considerations
- The compositor thread handles `transform` and `opacity` animations independently of the main thread
- Animating `box-shadow`, `filter`, or `background-color` triggers paint on every frame
- Each animation that creates a compositing layer consumes GPU memory
- Use Chrome DevTools Performance panel to identify paint-heavy animations
- `animation-iteration-count: infinite` with expensive properties will drain battery on mobile
- `animation-delay` has no performance cost — it simply postpones the start
- Multiple animations on the same element can create layer explosions
- For smooth 60fps animations, keep the total compositing layers under 20-30

## Browser Compatibility

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| `animation` shorthand | 43+ | 16+ | 9+ | 79+ |
| `animation-delay` (negative) | 43+ | 16+ | 9+ | 79+ |
| `animation-fill-mode` | 43+ | 16+ | 9+ | 79+ |
| `animation-play-state` | 43+ | 16+ | 9+ | 79+ |
| `animation-direction` | 43+ | 16+ | 9+ | 79+ |
| `steps()` timing | 43+ | 16+ | 9+ | 79+ |
| `cubic-bezier()` | 43+ | 16+ | 9+ | 79+ |

All modern browsers support all animation properties with full feature parity. IE 10+ supports animations with the `-webkit-` prefix. No browser prefixes are needed for modern browser versions. The Animation panel in Chrome DevTools provides visual inspection and timeline control for debugging.

## Summary Notes
- The `animation` shorthand combines all eight sub-properties; order matters for time values (duration before delay)
- `animation-fill-mode` controls element state before and after animation — use `both` for entrance animations
- `animation-direction: alternate` creates ping-pong effects with infinite iterations
- `animation-play-state: paused` freezes animations at their current position
- Negative `animation-delay` starts an animation mid-cycle, useful for synchronization
- `animation-timing-function` applies per-keyframe segment, not per-property
- Use comma-separated shorthand values for multiple animations on one element
- CSS animations are composited for `transform` and `opacity` — prefer these for smooth performance
- Always respect `prefers-reduced-motion` as the responsible default
