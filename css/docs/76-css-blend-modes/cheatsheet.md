# CSS Blend Modes Cheatsheet

## mix-blend-mode
```css
/* Element blends with background */
.element {
  mix-blend-mode: multiply;
}
```

## Background Blend Mode
```css
/* Blend multiple background layers */
.element {
  background:
    linear-gradient(135deg, #f093fb, #f5576c),
    url('image.jpg') center/cover;
  background-blend-mode: multiply;
}
```

## Common Blend Modes

| Mode | Description |
|------|-------------|
| `multiply` | Darkens — good for duotone, watermarks |
| `screen` | Lightens — good for bright overlays |
| `overlay` | Combines multiply and screen |
| `darken` | Keeps darkest pixel |
| `lighten` | Keeps lightest pixel |
| `color-dodge` | Brightens base color |
| `color-burn` | Darkens base color |
| `hard-light` | Intense overlay (like hard spotlight) |
| `soft-light` | Subtle overlay (like soft spotlight) |
| `difference` | Subtracts colors — inverted look |
| `exclusion` | Similar to difference, softer |
| `hue` | Uses blend hue + base saturation/luminosity |
| `saturation` | Uses blend saturation + base hue/luminosity |
| `color` | Uses blend hue/saturation + base luminosity |
| `luminosity` | Uses blend luminosity + base hue/saturation |

## Duotone Effect
```css
.duotone {
  background:
    linear-gradient(135deg, #ff6b6b 0%, #556270 100%),
    url('photo.jpg') center/cover;
  background-blend-mode: multiply;
  background-size: cover;
}
```

## Text Effect (Difference)
```css
.hero {
  background: #111;
}
.hero h1 {
  color: white;
  font-size: 5rem;
  mix-blend-mode: difference;
}
```

## Isolation
```css
.container {
  isolation: isolate; /* Limits blending to this container */
}
```
