# CSS Scroll Snap Cheatsheet

## Container Properties

| Property | Values | Description |
|----------|--------|-------------|
| `scroll-snap-type` | `none` \| `x` \| `y` \| `block` \| `inline` \| `both` + `mandatory` \| `proximity` | Snap behavior and strictness |
| `scroll-padding` | `<length>` \| `<percentage>` 1-4 values | Offset snap position inside container |
| `scroll-snap-stop` | `normal` \| `always` | Whether snap positions can be skipped |

## Child Properties

| Property | Values | Description |
|----------|--------|-------------|
| `scroll-snap-align` | `none` \| `start` \| `center` \| `end` | Which edge aligns to snap position |
| `scroll-margin` | `<length>` \| `<percentage>` 1-4 values | Offset snap position outside child |

## Snap Type Combinations

```css
/* Common patterns */
scroll-snap-type: x mandatory;     /* Horizontal, always snap */
scroll-snap-type: y proximity;     /* Vertical, snap when near */
scroll-snap-type: both mandatory;  /* Both axes, always snap */
scroll-snap-type: inline mandatory; /* Writing-mode aware */
scroll-snap-type: block proximity;  /* Writing-mode aware */
```

## Strictness Comparison

| Value | Behavior | Best For |
|-------|----------|----------|
| `mandatory` | Always snaps to nearest snap position | Full-screen sections, slideshows, strict carousels |
| `proximity` | Snaps when near a snap position | Content browsing, galleries, cards |

## Alignment Values

```css
scroll-snap-align: start;   /* Aligns to top (vertical) or left (horizontal) */
scroll-snap-align: center;  /* Aligns to center */
scroll-snap-align: end;     /* Aligns to bottom (vertical) or right (horizontal) */
```

## Quick Reference Patterns

```css
/* Horizontal carousel */
.carousel {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
}
.carousel-item {
  flex: 0 0 100%;
  scroll-snap-align: start;
}

/* Partial visibility carousel */
.carousel-peek {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x proximity;
  gap: 16px;
  padding: 16px;
}
.carousel-item {
  flex: 0 0 80%;
  scroll-snap-align: center;
}

/* Full-screen sections */
.sections {
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
}
.section {
  height: 100vh;
  scroll-snap-align: start;
}

/* With fixed header offset */
.container {
  scroll-padding-block-start: 60px;
}

/* Grid-based scroll */
.grid-scroll {
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(6, 300px);
  overflow-x: auto;
  scroll-snap-type: x mandatory;
}

/* Stop at every item */
.important-item {
  scroll-snap-stop: always;
}

/* iOS momentum scroll */
.container {
  -webkit-overflow-scrolling: touch;
}
```

## Accessibility

```css
/* Respect reduced motion */
@media (prefers-reduced-motion: reduce) {
  .carousel {
    scroll-behavior: auto;
  }
}
```

```html
<!-- ARIA for carousel -->
<div class="carousel" role="region" aria-label="Product gallery">
  <div class="carousel-item" role="group" aria-label="Slide 1 of 5">
    Content
  </div>
</div>
```

## Browser Support

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| scroll-snap-type | 69+ | 68+ | 11+ | 79+ |
| scroll-snap-align | 69+ | 68+ | 11+ | 79+ |
| scroll-padding | 69+ | 68+ | 11+ | 79+ |
| scroll-margin | 69+ | 68+ | 11+ | 79+ |
| scroll-snap-stop | 75+ | 103+ | 15+ | 79+ |
