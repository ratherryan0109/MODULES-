# CSS Loading Animations

## Introduction
Loading animations provide visual feedback during content loading or processing. CSS-only loading animations include spinners, progress bars, skeletons, and pulsating placeholders — all created with transforms and keyframe animations. These animations bridge the gap between user action and system response, reducing perceived wait time and preventing users from thinking the application has frozen. Well-designed loading states are a hallmark of professional web applications.

---

## Learning Objectives
1. Create various CSS loading spinners
2. Build animated progress bars
3. Design skeleton screen placeholders
4. Implement pulse/shimmer loading effects
5. Combine multiple animations for complex loaders
6. Ensure loading animations are performant and accessible
7. Understand perceived performance and animation psychology
8. Build loading animations that respect user motion preferences
9. Implement indeterminate vs determinate progress indicators
10. Use CSS-only loading states without JavaScript dependencies

---

## Theory

### Loading Animation Types
- **Spinners** — rotating elements (circle, ring, dots) indicating indeterminate progress
- **Progress bars** — horizontal bar filling animation (determinate or indeterminate)
- **Skeletons** — pulsing placeholder shapes that mimic content layout
- **Shimmer** — moving gradient reflection across a surface
- **Dots** — bouncing/sequential dot animations (typing indicators)
- **Circular progress** — SVG or CSS arc-based progress rings

### Determinate vs Indeterminate
Loading indicators fall into two categories:

**Determinate** progress shows how much of an operation is complete (e.g., 0% to 100%). This is appropriate for file uploads, downloads, or multi-step processes with known durations. Use CSS width or SVG stroke-dashoffset animation.

**Indeterminate** progress indicates that something is happening but the duration is unknown (e.g., page loading, API calls). Spinners and skeleton screens are indeterminate. Most loading animations should be indeterminate unless you have accurate progress data.

### Key Principles
- Use only GPU-accelerated properties (transform, opacity)
- Keep performance cost low (loading should not slow down the page)
- Provide accessible alternatives for screen readers
- Match the loading animation style to your brand identity
- Consider perceived performance: skeleton screens feel faster than spinners
- Never block user interaction with loading overlays

### Perceived Performance Psychology
Research by the Nielsen Norman Group shows that:
- 0-100ms: Users perceive instant response
- 100-300ms: Users notice a slight delay but no break in flow
- 300-1000ms: Users perceive a delay; loading indicators should appear
- 1000ms+: Users may become impatient; progress indicators reduce frustration
- Skeleton screens can make loads feel 2x faster than spinners by giving users a sense of progress and familiar layout

---

## Examples

```css
/* Ring spinner */
.spinner {
  width: 40px; height: 40px;
  border: 4px solid rgba(255,255,255,0.2);
  border-top-color: #3b82f6;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

/* Dot loader — bouncing dots */
.dot-loader span {
  width: 10px; height: 10px;
  background: #3b82f6;
  border-radius: 50%;
  display: inline-block;
  animation: bounce 1.4s ease-in-out infinite both;
}
.dot-loader span:nth-child(1) { animation-delay: -0.32s; }
.dot-loader span:nth-child(2) { animation-delay: -0.16s; }
.dot-loader span:nth-child(3) { animation-delay: 0s; }

/* Skeleton screen — shimmer effect */
.skeleton {
  background: linear-gradient(90deg, #2a2a4a 25%, #3a3a5a 50%, #2a2a4a 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 4px;
}
.skeleton-text {
  height: 16px;
  margin-bottom: 8px;
  width: 100%;
}
.skeleton-text:last-child {
  width: 60%;
}

/* Progress bar — determinate */
.progress-bar {
  width: 100%; height: 8px;
  background: #2a2a4a;
  border-radius: 4px;
  overflow: hidden;
}
.progress-bar::after {
  content: '';
  display: block;
  height: 100%;
  background: #3b82f6;
  animation: progress 2s ease-in-out infinite;
}

/* Indeterminate progress bar */
.progress-indeterminate {
  height: 4px;
  background: #e5e7eb;
  overflow: hidden;
  border-radius: 2px;
}
.progress-indeterminate::after {
  content: '';
  display: block;
  height: 100%;
  width: 40%;
  background: #3b82f6;
  animation: indeterminate 1.5s ease-in-out infinite;
  border-radius: 2px;
}

/* Full-page loader overlay */
.loader-overlay {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.7);
  z-index: 9999;
}
.loader-overlay[hidden] {
  display: none;
}

/* Keyframes */
@keyframes spin { to { transform: rotate(360deg); } }
@keyframes bounce {
  0%, 80%, 100% { transform: scale(0); }
  40% { transform: scale(1); }
}
@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
@keyframes progress {
  0% { width: 0; }
  100% { width: 100%; }
}
@keyframes indeterminate {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(250%); }
}
```

### HTML Structure
```html
<!-- Accessible spinner -->
<div class="spinner" role="status" aria-label="Loading content">
  <span class="sr-only">Loading...</span>
</div>

<!-- Skeleton layout -->
<div class="skeleton-card" aria-busy="true">
  <div class="skeleton skeleton-image"></div>
  <div class="skeleton skeleton-text"></div>
  <div class="skeleton skeleton-text"></div>
</div>
```

---

## Visual Explanation

```
Skeleton Screen Layout:

┌─────────────────────┐
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  │  ← Image placeholder (shimmer)
│  ████████████████   │  ← Title skeleton line
│  ██████████████     │  ← Text skeleton line
│  ████████           │  ← Text skeleton (short)
└─────────────────────┘

Shimmer Animation Flow:

  Frame 1: [▓▓░░░░░░░░░░]  ← gradient at left
  Frame 2: [░░▓▓░░░░░░░░]
  Frame 3: [░░░░▓▓░░░░░░]
  Frame 4: [░░░░░░▓▓░░░░]
  Frame 5: [░░░░░░░░▓▓░░]
  Frame 6: [░░░░░░░░░░▓▓]  ← gradient at right
```

---

## Common Mistakes
1. **Using heavy paint/layout properties for animation** — Animating `width`, `left`, or `background-position` on spinners causes layout thrashing. Use `transform: rotate()` instead.
2. **Not providing accessible labels for screen readers** — A visual spinner with no `aria-label` or `role="status"` is invisible to assistive technology.
3. **Making loaders too large or visually distracting** — Overly large or fast-loading animations draw attention away from content.
4. **Forgetting to remove loader when content loads** — A persistent spinner after content has loaded is confusing. Use JavaScript to hide loaders.
5. **Using too many animated elements causing jank** — Animating a dozen skeleton elements simultaneously can drop frames.
6. **Not matching skeleton shapes to actual content** — Mismatched skeleton layouts cause layout shift when real content loads.
7. **Using only one loading state** — Different operations (initial page load, data refresh, form submission) may benefit from different loading indicators.
8. **Blocking user interaction during loading** — Always allow users to close or dismiss loading overlays.

## Best Practices
- Use `aria-label` and `role="status"` for accessibility
- Keep spinners under 40px for inline UI elements
- Use CSS-only when possible (no JS dependency)
- Respect `prefers-reduced-motion` — replace animations with static indicators
- Use `will-change` sparingly (only on the animated property)
- Match skeleton shapes proportionally to actual content layout
- Animate only `transform` and `opacity` for jank-free loading animations
- Use `animation-delay` with negative values to synchronize staggered dot loaders
- For skeleton screens, match the background color to avoid jarring transitions
- Fade in loaded content to create a smooth transition from skeleton to real content

## Accessibility Considerations
- Always use `role="status"` and `aria-live="polite"` on loading indicators
- Provide text alternatives: `<span class="sr-only">Loading...</span>`
- Respect `prefers-reduced-motion: reduce` by slowing or pausing loading animations
- Avoid flashing animations that could trigger seizures
- Loading indicators must not trap focus or prevent keyboard navigation
- For skeleton screens, set `aria-busy="true"` on the container while loading
- Ensure loading overlays can be dismissed with the Escape key
- Use `aria-hidden="true"` on decorative animation elements (not the accessible label)

## Performance Considerations
- CSS loading animations run on the compositor thread when using `transform` and `opacity`
- Skeleton screens with `background-position` animation trigger paint on every frame — use `transform: translateX()` on a pseudo-element instead for better performance
- Multiple simultaneous loading placeholders can create dozens of compositing layers
- On low-end mobile devices, reduce the number of animated skeleton elements
- Use `content-visibility: auto` to avoid animating off-screen skeleton elements
- The shimmer effect is more GPU-intensive than a simple opacity pulse — prefer opacity pulses for performance
- Loading animations should stop when the browser tab is hidden (Page Visibility API)
- Use `will-change: transform` on the spinner element to promote it to a compositor layer

## Browser Compatibility

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| `@keyframes` | 43+ | 16+ | 9+ | 79+ |
| `transform: rotate()` | 36+ | 16+ | 9+ | 79+ |
| `border-radius` | 4+ | 2+ | 3.1+ | 12+ |
| `linear-gradient` | 26+ | 16+ | 6.1+ | 12+ |
| `aria-busy` attribute | all | all | all | all |
| `prefers-reduced-motion` | 74+ | 63+ | 10.1+ | 79+ |

All modern browsers support CSS animations used for loading. The techniques described here require no JavaScript for the animation itself. Use `@supports (animation-name: test)` for progressive enhancement if you need to detect animation support.

## Summary Notes
- CSS-only loading animations use `@keyframes` with `transform` and `opacity` for smooth, composited performance
- Spinners use `transform: rotate()` with `border-radius: 50%` and a visible top border
- Skeleton screens use shimmer gradients or pulsing opacity on shape-mimicking elements
- Always provide `role="status"`, `aria-label`, and screen-reader-only text for accessibility
- Respect `prefers-reduced-motion` by disabling or slowing loading animations
- Skeleton screens improve perceived performance more than spinners
- Determinate progress bars show completion percentage; indeterminate shows activity without known duration
- Use `animation-delay` with negative values to synchronize staggered dot loaders
- Animate only composited properties (`transform`, `opacity`) for jank-free loading
- Always remove loading overlays once content is ready — test for this edge case specifically
