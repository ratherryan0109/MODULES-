# CSS Animation Properties Cheatsheet

## Shorthand
```css
animation: name duration timing-function delay iteration-count direction fill-mode play-state;
animation: bounce 1s ease 0s infinite normal both running;
```

## Sub-Properties

| Property | Values | Default |
|----------|--------|---------|
| `animation-name` | `@keyframes` name | `none` |
| `animation-duration` | time (s/ms) | `0s` |
| `animation-timing-function` | ease, linear, etc. | `ease` |
| `animation-delay` | time (s/ms) | `0s` |
| `animation-iteration-count` | number, `infinite` | `1` |
| `animation-direction` | normal, reverse, alternate, alternate-reverse | `normal` |
| `animation-fill-mode` | none, forwards, backwards, both | `none` |
| `animation-play-state` | running, paused | `running` |

## Fill Mode
| Value | Before Animation | After Animation |
|-------|-----------------|----------------|
| `none` | No styles | Returns to original |
| `forwards` | No styles | Retains last keyframe |
| `backwards` | Applies first keyframe | Returns to original |
| `both` | Applies first keyframe | Retains last keyframe |

## Direction
| Value | Description |
|-------|-------------|
| `normal` | 0% → 100% |
| `reverse` | 100% → 0% |
| `alternate` | 0% → 100% → 0% |
| `alternate-reverse` | 100% → 0% → 100% |

## Multiple Animations
```css
.element {
  animation: fadeIn 0.5s ease, bounce 1s ease 0.5s infinite;
}
```

## Play State
```css
.element:hover {
  animation-play-state: paused;
}
```
