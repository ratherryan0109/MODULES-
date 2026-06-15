# CSS Keyframe Animations Cheatsheet

## @keyframes Syntax
```css
@keyframes name {
  from { /* styles */ }
  to { /* styles */ }
}

@keyframes name {
  0% { /* start */ }
  50% { /* middle */ }
  100% { /* end */ }
}
```

## Animation Properties
| Property | Description | Default |
|----------|-------------|---------|
| `animation-name` | @keyframes name | none |
| `animation-duration` | Duration | 0s |
| `animation-timing-function` | Easing | ease |
| `animation-delay` | Delay before start | 0s |
| `animation-iteration-count` | Repetitions | 1 |
| `animation-direction` | normal/reverse/alternate | normal |
| `animation-fill-mode` | Pre/post styles | none |
| `animation-play-state` | running/paused | running |

## Shorthand
```css
animation: name duration timing delay count direction fill-mode play-state;
animation: bounce 1s ease 0s infinite alternate both running;
```

## Common Animations
```css
/* Bounce */
@keyframes bounce { 50% { transform: translateY(-30px); } }

/* Fade In */
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

/* Spin */
@keyframes spin { to { transform: rotate(360deg); } }

/* Pulse */
@keyframes pulse { 50% { transform: scale(1.1); } }

/* Shake */
@keyframes shake { 25%,75% { transform: translateX(-5px); } 50% { transform: translateX(5px); } }
```

## Accessibility
```css
@media (prefers-reduced-motion: reduce) {
  * { animation-duration: 0.01ms !important; }
}
```
