# CSS Alignment - Cheatsheet

## Text Alignment

```css
text-align: left | center | right | justify | start | end;
```

## Vertical Alignment (inline/inline-block)

```css
vertical-align: baseline | top | middle | bottom | text-top | text-bottom | sub | super;
```

## Block Centering

```css
.block {
  width: 300px;        /* Required */
  margin: 0 auto;      /* Horizontal centering */
}
```

## Flexbox Centering

```css
.container {
  display: flex;
  align-items: center;     /* Cross axis */
  justify-content: center; /* Main axis */
}
```

## Grid Centering

```css
.container {
  display: grid;
  place-items: center;        /* Item within cell */
  /* OR */
  place-content: center;      /* Grid within container */
}
```

## Absolute Centering

```css
.element {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* Horizontal only */
.element {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

/* Vertical only */
.element {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
```

## Line Height Vertical Centering

```css
.single-line {
  height: 100px;
  line-height: 100px;
  text-align: center;
}
```

## Table Cell Vertical Centering

```css
.container {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}
```

## Alignment Methods Comparison

| Method | Horizontal | Vertical | Requires Width | Requires Height |
|--------|------------|----------|----------------|-----------------|
| `text-align` | ✓ | ✗ | No | No |
| `vertical-align` | ✗ | ✓ | No | Yes |
| `margin: auto` | ✓ | ✗ | Yes | No |
| Flexbox | ✓ | ✓ | No | Yes |
| Grid (place-items) | ✓ | ✓ | No | Yes |
| Absolute + transform | ✓ | ✓ | No | No |
| Line-height | ✗ | ✓ | Yes | Yes |

## Flexbox Alignment Properties

| Property | Aligns | Values |
|----------|--------|--------|
| `justify-content` | Main axis | flex-start, center, flex-end, space-between, space-around, space-evenly |
| `align-items` | Cross axis | stretch, center, flex-start, flex-end, baseline |
| `align-self` | Single item (cross axis) | stretch, center, flex-start, flex-end, baseline |
| `align-content` | Multiple rows | stretch, center, flex-start, flex-end, space-between, space-around |

## Grid Alignment Properties

| Property | Aligns | Shorthand |
|----------|--------|-----------|
| `justify-items` | Inline axis within cell | `place-items` |
| `align-items` | Block axis within cell | `place-items` |
| `justify-content` | Grid within container | `place-content` |
| `align-content` | Grid within container | `place-content` |
| `justify-self` | Single item (inline) | `place-self` |
| `align-self` | Single item (block) | `place-self` |

## Common Patterns

### Centered Hero Section
```css
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
}
```

### Centered Modal
```css
.modal-overlay {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  inset: 0;
}
```

### Centered Icon in Circle
```css
.icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

## Quick Reference

| Need | Use |
|------|-----|
| Center text | `text-align: center` |
| Center block | `margin: 0 auto` + width |
| Vertically center 1 line | line-height = height |
| Center in flex | `align-items + justify-content: center` |
| Center in grid | `place-items: center` |
| Center absolutely positioned | `top: 50%; left: 50%; transform: translate(-50%, -50%)` |
