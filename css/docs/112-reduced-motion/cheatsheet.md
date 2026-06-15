# Reduced Motion Cheatsheet

## Media Query

```css
/* Detect user preference */
@media (prefers-reduced-motion: reduce) {
  /* Disable or reduce animations */
}

/* Users without preference (default) */
@media (prefers-reduced-motion: no-preference) {
  /* Enhanced animations */
}
```

## Recommended Patterns

| Approach | Code |
|----------|------|
| Disable all non-essential | `* { animation-duration: 0.01ms !important; }` |
| Selective disable | `.decorative { animation: none; }` |
| Replace animation type | `slideIn → fadeIn` |
| Stop infinite | `animation-iteration-count: 1` |
| Smooth scroll off | `scroll-behavior: auto;` |

## Animation Classification

| Classification | Examples | Action |
|---------------|----------|--------|
| **Functional (keep)** | Loading spinner, progress bar, focus ring, typing indicator | Keep, reduce intensity |
| **Transitional (reduce)** | Page transitions, slide menus, accordion | Replace with fade |
| **Decorative (remove)** | Bounce, float, shake, parallax, confetti | Remove entirely |

## Best Practices

| Do | Don't |
|----|-------|
| Preserve animation end state | Remove functional animations |
| Use transform/opacity for performance | Animate layout properties (width/height) |
| Provide manual toggle in app | Rely only on OS setting |
| Test with reduced motion ON | Assume everyone sees animations |
| Use gradual enhancement | Use !important everywhere |

## WCAG Criteria

| Criterion | Requirement |
|-----------|-------------|
| 2.2.2 Pause, Stop, Hide | Moving content can be paused/stopped |
| 2.3.1 Three Flashes | No more than 3 flashes/second |
| 2.3.3 Animation from Interactions | Motion animation can be disabled |

## OS Settings Access

| OS | Path |
|----|------|
| Windows | Settings → Ease of Access → Display → Reduce motion |
| macOS | System Settings → Accessibility → Display → Reduce motion |
| iOS | Settings → Accessibility → Motion → Reduce Motion |
| Android | Settings → Accessibility → Remove animations |
| Linux | GNOME → Settings → Accessibility → Seeing → Reduced animation |
