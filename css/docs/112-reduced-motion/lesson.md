# Module 112: Reduced Motion

## Introduction
Motion and animation can enhance user experience, but for people with vestibular disorders, motion sickness, or attention sensitivities, excessive movement can cause discomfort or disability. CSS provides the `prefers-reduced-motion` media query to detect user preferences and adjust animations accordingly. This module covers responsible animation design — how to create engaging experiences that don't exclude users who are sensitive to motion.

## Learning Objectives
1. Understand vestibular disorders and their relation to web motion
2. Use the `prefers-reduced-motion` media query
3. Design fallback experiences for reduced motion preferences
4. Implement accessible animations without losing meaning
5. Use CSS `animation` and `transition` properties responsibly
6. Control animation timing and triggers
7. Test animations with motion sensitivity simulators
8. Build motion design systems with progressive enhancement
9. Audit existing animations for accessibility issues
10. Implement scroll-linked animation alternatives

## Theory

### Beginner Level
The `prefers-reduced-motion` media query detects if the user has requested less animation in their operating system settings. When set to `reduce`, you should minimize or remove non-essential motion. Essential motion (loading indicators, progress bars) can remain but with reduced intensity. Operating system settings that trigger this include:
- **macOS**: System Preferences → Accessibility → Display → Reduce motion
- **Windows**: Settings → Ease of Access → Display → Show animations
- **iOS**: Settings → Accessibility → Motion → Reduce Motion
- **Android**: Settings → Accessibility → Remove animations

Approximately 5-10% of users have reduced motion enabled, though this varies significantly by platform and age group.

### Intermediate Level
Not all motion is bad — some animations serve functional purposes (indicating loading, showing state changes, guiding attention). The goal is to preserve functional animation while eliminating decorative or distracting motion. Use `animation-duration: 0s` or `animation: none` to stop animations, but preserve the final state with `animation-fill-mode`.

A practical approach classifies animations into three tiers:
1. **Essential**: Loading spinners, progress bars, state change indicators — keep but slow down
2. **Functional**: Page transitions, scroll indicators, focus rings — keep but simplify (replace slide with fade)
3. **Decorative**: Parallax, floating elements, confetti, sparkle effects — remove entirely

### Advanced Level
The `@media (prefers-reduced-motion: no-preference)` query targets users who haven't set a preference (default). You can build motion-rich experiences for them while providing static alternatives. CSS scroll-driven animations (`animation-timeline: scroll()`) should have reduced-motion fallbacks. Use `animation-delay: -1s` tricks to show mid-animation states for non-animated alternatives.

### Motion Sensitivity Conditions
| Condition | Trigger | Symptoms |
|-----------|---------|----------|
| Vestibular disorder | Linear/rotational movement | Dizziness, nausea, disorientation |
| Migraine | Flicker, stroboscopic effects | Headache, visual aura |
| ADHD | Persistent motion, auto-playing | Distraction, difficulty focusing |
| Seizure disorders | Flashing > 3 Hz | Seizures |
| Motion sickness | Parallax, parallax-scroll | Nausea, sweating |

## Syntax

```css
/* Basic reduced motion — universal reset (use carefully) */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* Selective disable — better approach */
@media (prefers-reduced-motion: reduce) {
  .decorative-animation {
    animation: none;
  }
  .functional-transition {
    transition-duration: 0.1s;
  }
}

/* Progressive enhancement: motion first, then static fallback */
.fade-in {
  animation: fadeIn 0.5s ease-out;
}

@media (prefers-reduced-motion: reduce) {
  .fade-in {
    animation: none;
    opacity: 1;
  }
}

/* Scroll behavior */
html {
  scroll-behavior: smooth;
}
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}

/* Reduced motion class-based toggle (for manual control) */
 body:not(.motion-allowed) .animated-element {
  animation: none;
}

/* No-preference query for motion-first design */
@media (prefers-reduced-motion: no-preference) {
  .hero-title {
    animation: slideIn 0.8s ease-out both;
  }
  .hero-image {
    animation: fadeScale 1s ease-out both;
  }
}

/* Throttled animation — still animates but less intensely */
@media (prefers-reduced-motion: reduce) {
  .pulse-loader {
    animation-duration: 4s; /* slowed from 1s */
    opacity: 0.6; /* less dramatic */
  }
}
```

## Examples

### Parallax with fallback
```css
.parallax-section {
  background-attachment: fixed;
}
@media (prefers-reduced-motion: reduce) {
  .parallax-section {
    background-attachment: scroll;
  }
}
```

### Replace slide with fade for reduced motion
```css
/* Default: slide-in animation */
@keyframes slideIn {
  from { transform: translateX(-100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

.panel {
  animation: slideIn 0.5s ease-out;
}

@media (prefers-reduced-motion: reduce) {
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  .panel {
    animation-name: fadeIn;
    animation-duration: 0.3s;
  }
}
```

### Hover effects with reduced motion
```css
.card-hover {
  transition: transform 0.3s ease, background-color 0.3s ease;
}
.card-hover:hover {
  transform: translateY(-4px);
  background-color: #f0f4ff;
}

@media (prefers-reduced-motion: reduce) {
  .card-hover:hover {
    transform: none;
    background-color: #f0f4ff;
    /* Only color changes — no movement */
  }
}
```

### Animated chart with reduced motion fallback
```css
.bar {
  animation: growBar 1s ease-out forwards;
}

@keyframes growBar {
  from { transform: scaleY(0); }
  to { transform: scaleY(1); }
}

@media (prefers-reduced-motion: reduce) {
  .bar {
    animation: none;
    transform: scaleY(1); /* Already at final state */
  }
}
```

### Manual toggle for in-app motion control
```css
/* JavaScript toggles this class */
.motion-reduced .animated {
  animation: none !important;
  transition: none !important;
}
```

## Visual Explanation

| Motion Type | Accessible? | Reduced Motion Alternative |
|------------|-------------|---------------------------|
| Decorative float/shake | ❌ Remove | Static position, no animation |
| Page transition | ⚠️ Reduce | Fade instead of slide |
| Progress bar | ✅ Keep | Keep (functional), reduce speed |
| Hover scale | ⚠️ Reduce | Color change instead of movement |
| Loader spinner | ✅ Keep | Keep but slower (2-4s cycle) |
| Parallax scroll | ❌ Remove | Static background, no parallax |
| Skeleton loading | ✅ Keep | Keep but no pulse (static placeholder) |
| Notification slide-in | ⚠️ Reduce | Fade in instead of slide from edge |
| Confetti/celebration | ❌ Remove | Static text or icon instead |

```
Animation Decision Flow:

  Does this animation serve a function?
           │
      ┌────┴────┐
      │         │
    Yes         No (decorative)
      │               │
      ▼               ▼
  Can it be       Remove entirely
  simplified?
      │
  ┌───┴───┐
  │       │
  Yes     No
  │       │
  ▼       ▼
  Keep    Keep with
  slowed  reduced duration
```

## Common Mistakes
- **Using `@media (prefers-reduced-motion: reduce) { * { animation: none !important } }`** — This breaks functional animations like loading spinners and progress indicators that users need to see
- **Not providing context: removing animation entirely when a static version loses meaning** — A progress bar without animation still conveys progress; but don't remove it entirely — just slow it down
- **Using `!important` in reduced-motion queries that can't be overridden** — `!important` prevents component-specific overrides and makes the codebase brittle
- **Animating critical content that needs focus (moving text while user reads)** — Moving text is harder to read for users with dyslexia, ADHD, or cognitive disabilities
- **Infinite animations without respecting user preference** — `animation: float 3s ease-in-out infinite` should be disabled when reduced motion is preferred
- **Scroll-jacking animations that ignore reduced motion** — Scroll-jacking (changing scroll behavior) combined with animation can cause significant motion sickness
- **Only testing on desktop with mouse** — Mobile devices have different motion sensitivities and reduced motion settings
- **Assuming reduced motion = no motion (binary thinking)** — Some users prefer reduced motion, not zero motion. Throttling is often better than removal.
- **Not providing a manual animation toggle** — Not all users know about OS-level reduced motion settings; an in-app toggle is more discoverable
- **Animating CSS properties that trigger layout** — Combined with reduced motion, layout-triggering animations are doubly problematic (performance + accessibility)

## Best Practices
- Use `prefers-reduced-motion: reduce` as a progressive enhancement — start with accessible, enhance with motion
- Keep functional animations (loading, progress, notifications) — but reduce their speed and intensity
- Replace sliding with fading for reduced motion — opacity changes are less disorienting than translation
- Test with system reduced motion enabled — this is the only way to know if your fallbacks work
- Provide a manual toggle if user can't access OS settings — not all users know about system accessibility settings
- Use `animation-delay: -1s` to show mid-animation states as non-animated alternatives
- Prefer CSS animations over JavaScript for better browser optimization and reduced motion integration
- Classify animations as essential, functional, or decorative — handle each class differently
- Avoid `!important` in reduced motion fallbacks — use specificity or cascading instead
- Document motion design decisions in design systems and component documentation
- Use `transform` and `opacity` for animations — they're composited and respect reduced motion preferences

## Accessibility
- About 30% of people experience some form of motion sensitivity (varying degrees)
- Vestibular disorders affect balance and spatial orientation — triggered by parallax, parallax-scroll, and full-page transitions
- WCAG 2.1 SC 2.3.3 Animation from Interactions (Level AAA): Animation from interactions can be disabled
- WCAG 2.2 SC 2.3.2 Three Flashes (Level AAA): Web pages must not contain anything that flashes more than three times per second
- Consider users with ADHD who may be distracted by persistent motion — auto-playing animations are especially problematic
- Consider users with autism who may find unexpected motion distressing or overstimulating
- A manual animation toggle in the UI helps users who can't access OS-level settings
- The `<picture>` element combined with `prefers-reduced-motion` can serve animated vs static images
- For video content, respect `prefers-reduced-motion` and offer non-animated alternatives or descriptive text

## Performance
- CSS animations run on the compositor thread (GPU-accelerated) when animating `transform` and `opacity`
- Reduced motion can improve performance on low-end devices and conserve battery
- Removing animations reduces CPU/GPU usage, memory consumption, and battery drain
- `transform` and `opacity` are the cheapest properties to animate — motion or not, prefer these
- The `prefers-reduced-motion` media query has zero performance cost
- Slowing down animations (e.g., from 1s to 4s) reduces the number of frames rendered per second, lowering GPU load
- Disabling parallax significantly reduces paint operations on scroll
- Skeleton screens without pulse animation have minimal rendering cost
- JavaScript-based animation libraries (GSAP, Framer Motion) should respect `prefers-reduced-motion` at initialization to avoid unnecessary setup

## Browser Compatibility

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| `prefers-reduced-motion` | 74+ | 63+ | 10.1+ | 79+ |
| `scroll-behavior` | 61+ | 36+ | 15.4+ | 79+ |
| `animation` | 43+ | 16+ | 9+ | 79+ |
| `transition` | 26+ | 16+ | 6.1+ | 12+ |
| `animation-timeline` (scroll) | 115+ | ❌ | ❌ | 115+ |

The `prefers-reduced-motion` media query is supported in all modern browsers. Safari added support in version 10.1 (2017). No prefix or polyfill is needed for modern browsers. The `animation-timeline` scroll-driven animations feature is Chrome-only as of 2025 — always provide fallbacks. For legacy browser support, use JavaScript-based feature detection combined with Modernizr if needed.

## Summary Notes
- Always provide reduced motion alternatives for animations — it's a WCAG requirement and best practice
- Use `@media (prefers-reduced-motion: reduce)` to detect user preference from OS settings
- Classify animations: keep functional (slowed), simplify transitional (fade instead of slide), remove decorative entirely
- Replace translate/slide-based animations with opacity-based fades for reduced motion
- Provide a manual toggle for in-app motion control as a supplement to OS settings
- Test with OS-level reduced motion enabled to verify fallbacks work correctly
- Prefer `transform` and `opacity` for performant animations that are easier to override
- Avoid `!important` in reduced motion fallbacks — use selective overrides
- About 30% of people experience motion sensitivity — reduced motion isn't a niche concern
- WCAG SC 2.3.3 requires that animation from interactions can be disabled (Level AAA)
- Document motion in design systems: tier animations by essential/functional/decorative
