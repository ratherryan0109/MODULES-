# CSS Transitions Cheatsheet

## Properties

| Property | Description | Default |
|----------|-------------|---------|
| `transition-property` | Property to animate (`all`, `none`, or specific) | `all` |
| `transition-duration` | How long (e.g. `0.3s`, `500ms`) | `0s` |
| `transition-timing-function` | Speed curve | `ease` |
| `transition-delay` | Wait before starting (can be negative) | `0s` |

## Shorthand

```
transition: <property> <duration> <timing-function> <delay>;
transition: all 0.3s ease 0s;
transition: transform 0.2s ease-out;
transition: opacity 0.5s ease, transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```

## Timing Functions

| Value | Description |
|-------|-------------|
| `ease` | slow → fast → slow |
| `linear` | constant speed |
| `ease-in` | slow start |
| `ease-out` | slow end |
| `ease-in-out` | slow start & end |
| `steps(n)` | n discrete steps |
| `cubic-bezier(x1,y1,x2,y2)` | custom curve |

## GPU-Friendly Properties

✅ Use these for 60fps:
- `transform`
- `opacity`

❌ Avoid for animation (trigger layout):
- `width`, `height`
- `margin`, `padding`
- `top`, `left`, `right`, `bottom`
- `display`

## Media Query for Motion

```css
@media (prefers-reduced-motion: no-preference) {
  .element { transition: transform 0.3s ease; }
}

/* Disable all transitions */
@media (prefers-reduced-motion: reduce) {
  * { transition: none !important; }
}
```

## Events (JavaScript)

```js
element.addEventListener('transitionend', handler);
element.addEventListener('transitionrun', handler);
element.addEventListener('transitionstart', handler);
element.addEventListener('transitioncancel', handler);
```
