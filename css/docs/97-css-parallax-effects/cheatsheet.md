# CSS Parallax Effects Cheatsheet

## Pure CSS Parallax (Perspective Method)
```css
.parallax-container {
  perspective: 1px;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
}

.layer-back {
  transform: translateZ(-2px) scale(3); /* slowest */
}

.layer-mid {
  transform: translateZ(-1px) scale(2); /* medium */
}

.layer-front {
  transform: translateZ(0); /* normal */
}
```

## Background-Attachment Method
```css
.parallax-bg {
  background-image: url('image.jpg');
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  height: 400px;
}
```

## Scale Compensation Formula
```
scale = 1 + (translateZ / perspective)
For perspective: 1px, translateZ(-2px):
scale = 1 + (-2 / 1) = 3
```

## Performance
| Technique | Performance | Mobile |
|-----------|-------------|--------|
| Perspective method | Good | Moderate |
| background-attachment: fixed | Good desktop | Poor mobile |
| JS scroll listeners | Depends on implementation | Can be janky |

## Accessibility
```css
@media (prefers-reduced-motion: reduce) {
  .parallax-container {
    perspective: none;
  }
  .layer-back, .layer-mid {
    transform: none;
  }
}
```

## Browser Support
- Perspective method: Chrome, Firefox, Safari (with quirks)
- background-attachment: fixed: Desktop only (avoid on mobile)
