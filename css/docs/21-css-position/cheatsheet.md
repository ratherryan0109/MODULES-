# CSS Position - Cheatsheet

## Position Values

| Value | Description | In Flow | Offset Relative To |
|-------|-------------|---------|-------------------|
| `static` | Default position | Yes | N/A |
| `relative` | Offset from normal position | Yes | Its own normal position |
| `absolute` | Removed from flow | No | Nearest positioned ancestor |
| `fixed` | Fixed to viewport | No | Viewport |
| `sticky` | Toggles relative/fixed on scroll | Yes | Scroll container |

## Offset Properties

```css
top: value;    /* Moves element DOWN from top reference */
right: value;  /* Moves element LEFT from right reference */
bottom: value; /* Moves element UP from bottom reference */
left: value;   /* Moves element RIGHT from left reference */
```

**Accepted values:** `px`, `em`, `rem`, `%`, `vw`, `vh`, `auto`, `inherit`

## Shorthand - `inset`

```css
inset: 10px;             /* All four: top, right, bottom, left */
inset: 10px 20px;        /* top/bottom: 10px, right/left: 20px */
inset: 10px 20px 30px;   /* top: 10px, right/left: 20px, bottom: 30px */
inset: 10px 20px 30px 40px; /* top right bottom left */
```

## Creating a Containing Block

```css
.parent {
  position: relative;  /* or absolute, fixed, sticky */
  /* Now absolute children position relative to this */
}
```

## Common Patterns

### Fixed Header
```css
body { padding-top: 60px; }
.header {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 60px;
  z-index: 1000;
}
```

### Centered Modal
```css
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
.modal {
  position: relative;
  background: white;
  padding: 2rem;
  border-radius: 8px;
}
```

### Sticky Section Header
```css
.section-header {
  position: sticky;
  top: 0;
  z-index: 100;
}
```

## z-index Quick Reference

- Only works on positioned elements (non-static)
- Higher value = closer to viewer (on top)
- Default: `auto` (inherits from parent)
- Values: `-1` to `2147483647`
- Creates a stacking context

## Common Pitfalls

| Issue | Solution |
|-------|----------|
| Fixed header hides content | `padding-top` on body |
| Absolute element references viewport | Ensure an ancestor has `position: relative` |
| Sticky not working | Check parent doesn't have `overflow: hidden` |
| z-index not working | Element must have non-static position |
| Fixed element on mobile zooms weird | Use `viewport` meta tag properly |

## Performance

- ✅ Use `transform` for animations
- ✅ Use `will-change` sparingly
- ❌ Don't animate `top`/`left` if avoidable
- ❌ Don't overuse `position: fixed` on mobile
