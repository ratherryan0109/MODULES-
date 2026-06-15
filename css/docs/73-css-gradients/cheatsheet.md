# CSS Gradients Cheatsheet

## Linear Gradient

```css
/* Direction keywords */
background: linear-gradient(to bottom, red, blue);        /* default */
background: linear-gradient(to top, red, blue);
background: linear-gradient(to right, red, blue);
background: linear-gradient(to left, red, blue);
background: linear-gradient(to bottom right, red, blue);

/* Angles */
background: linear-gradient(45deg, red, blue);
background: linear-gradient(135deg, #667eea, #764ba2);

/* Multiple stops */
background: linear-gradient(90deg, red, orange, yellow, green, blue, purple);

/* Transparency */
background: linear-gradient(to bottom, transparent, rgba(0,0,0,0.8));

/* Hard stops (stripes) */
background: linear-gradient(90deg, #3b82f6 50%, #1e40af 50%);
background-size: 20px 100%;
```

## Radial Gradient

```css
/* Basic */
background: radial-gradient(circle, red, blue);
background: radial-gradient(ellipse, red, blue);

/* Position */
background: radial-gradient(circle at top left, red, transparent);
background: radial-gradient(circle at center, red, blue);

/* Size keywords */
background: radial-gradient(circle closest-side, red, blue);
background: radial-gradient(circle farthest-corner, red, blue);
background: radial-gradient(circle closest-corner, red, blue);
background: radial-gradient(circle farthest-side, red, blue);
```

## Conic Gradient

```css
/* Full wheel */
background: conic-gradient(red, yellow, lime, aqua, blue, magenta, red);

/* From angle */
background: conic-gradient(from 90deg, red, blue);

/* Pie chart segments */
background: conic-gradient(
  red 0% 25%,
  blue 25% 50%,
  green 50% 75%,
  yellow 75% 100%
);
```

## Repeating Gradients

```css
/* Stripes */
background: repeating-linear-gradient(
  45deg,
  #3b82f6, #3b82f6 10px,
  #1e40af 10px, #1e40af 20px
);

/* Dots/target */
background: repeating-radial-gradient(
  circle,
  #3b82f6, #3b82f6 10px,
  transparent 10px, transparent 20px
);
```

## Text Gradient

```css
.gradient-text {
  background: linear-gradient(45deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
```

## Multiple Gradients

```css
/* Overlay effect */
background:
  linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
  url('image.jpg');

/* Combined patterns */
background:
  linear-gradient(45deg, transparent 50%, rgba(255,255,255,0.1) 50%),
  linear-gradient(-45deg, transparent 50%, rgba(255,255,255,0.1) 50%);
background-size: 20px 20px;
```

## Animated Gradient

```css
.animated {
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}

@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .animated { animation: none; }
}
```

## Common Color Palettes

```css
/* Sunset */
background: linear-gradient(135deg, #f093fb, #f5576c);

/* Ocean */
background: linear-gradient(90deg, #4facfe, #00f2fe);

/* Forest */
background: linear-gradient(135deg, #43e97b, #38f9d7);

/* Night */
background: linear-gradient(135deg, #0f172a, #1e293b);

/* Corporate */
background: linear-gradient(135deg, #667eea, #764ba2);

/* Warm */
background: linear-gradient(135deg, #fa709a, #fee140);
```

## Fallback for Old Browsers

```css
.element {
  background-color: #667eea; /* fallback */
  background-image: linear-gradient(135deg, #667eea, #764ba2);
}
```
