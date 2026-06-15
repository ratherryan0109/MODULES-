# CSS Object-Fit & Object-Position Cheatsheet

## object-fit Values

```css
img {
  width: 100%;
  height: 200px;
  object-fit: fill;       /* stretch to fill (default, may distort) */
  object-fit: contain;    /* fit entirely (may letterbox) */
  object-fit: cover;      /* fill container (may crop) */
  object-fit: none;       /* original size */
  object-fit: scale-down; /* none or contain (whichever is smaller) */
}
```

## object-position
```css
img {
  object-fit: cover;
  object-position: center;    /* default */
  object-position: top;
  object-position: bottom;
  object-position: left;
  object-position: right;
  object-position: 30% 70%;  /* custom position */
}
```

## Common Patterns

### Image Grid (all same aspect ratio)
```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}
.grid img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
```

### Product Gallery (full visibility)
```css
.product-img {
  width: 100%;
  height: 300px;
  background: #f5f5f5;
}
.product-img img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
```

### Video Background
```css
.hero video {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

### Aspect Ratio Lock
```css
.card {
  aspect-ratio: 1;        /* square */
  aspect-ratio: 16/9;     /* widescreen */
  aspect-ratio: 3/4;      /* portrait */
}
.card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

## Notes
- Only works on replaced elements: `<img>`, `<video>`, `<object>`, `<embed>`, `<canvas>`
- Container must have explicit width and height
- object-position defaults to `50% 50%` (center)
- For background images, use `background-size` and `background-position`
