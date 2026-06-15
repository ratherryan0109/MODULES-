# Responsive Images Cheatsheet

## HTML Attributes

| Attribute | Purpose | Example |
|-----------|---------|---------|
| `srcset` | List of image candidates with widths or densities | `srcset="img-400.jpg 400w, img-800.jpg 800w"` |
| `sizes` | Display size at breakpoints | `sizes="(max-width: 600px) 100vw, 50vw"` |
| `loading` | Lazy or eager loading | `loading="lazy"` |
| `fetchpriority` | Loading priority | `fetchpriority="high"` |
| `width` | Intrinsic width (prevents CLS) | `width="800"` |
| `height` | Intrinsic height (prevents CLS) | `height="600"` |

## srcset Patterns

### Width Descriptors (w)
```html
<img src="default.jpg"
     srcset="small.jpg 400w,
             medium.jpg 800w,
             large.jpg 1200w,
             xlarge.jpg 1600w"
     sizes="(max-width: 600px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
     alt="">
```

### Pixel Density Descriptors (x)
```html
<img src="1x.jpg"
     srcset="1x.jpg 1x,
             2x.jpg 2x,
             3x.jpg 3x"
     alt="">
```

## `<picture>` Element

### Art Direction
```html
<picture>
  <source media="(min-width: 1200px)" srcset="desktop.jpg">
  <source media="(min-width: 768px)" srcset="tablet.jpg">
  <img src="mobile.jpg" alt="">
</picture>
```

### Format Selection
```html
<picture>
  <source type="image/avif" srcset="photo.avif">
  <source type="image/webp" srcset="photo.webp">
  <img src="photo.jpg" alt="">
</picture>
```

## CSS Techniques

### object-fit Values
```css
object-fit: cover;      /* Crop to fill */
object-fit: contain;    /* Fit inside (letterbox) */
object-fit: fill;       /* Stretch to fill */
object-fit: scale-down; /* Smallest of contain/none */
object-fit: none;       /* Original size */
```

### image-set() for Backgrounds
```css
.hero {
  background-image: image-set(
    url("hero.avif") type("image/avif"),
    url("hero.webp") type("image/webp"),
    url("hero.jpg") type("image/jpeg")
  );
  background-size: cover;
}

/* With resolution */
.icon {
  background-image: image-set(
    url("icon.png") 1x,
    url("icon@2x.png") 2x
  );
}
```

### CLS Prevention
```css
img {
  width: 100%;
  height: auto;
  aspect-ratio: attr(width) / attr(height);
}
```
```html
<img src="photo.jpg" width="1200" height="800" alt="">
```

## Image Formats Comparison

| Format | Type | Size vs JPEG | Browser Support |
|--------|------|-------------|-----------------|
| JPEG | Lossy | 100% (baseline) | Universal |
| WebP | Lossy/Lossless | 65-80% | All modern |
| AVIF | Lossy/Lossless | 50-65% | Chrome, Firefox |
| PNG | Lossless | 150-200% | Universal |
| SVG | Vector | Variable | Universal |

## Performance Checklist
- [ ] Use srcset with 3-5 width candidates
- [ ] Include width and height attributes
- [ ] Add loading="lazy" for below-fold images
- [ ] Add fetchpriority="high" for hero/LCP images
- [ ] Use WebP/AVIF with JPEG fallback
- [ ] Optimize images (Squoosh, ImageOptim)
- [ ] Preload hero image: `<link rel="preload" as="image">`
- [ ] Use CDN with auto-optimization
- [ ] Set aspect-ratio in CSS
- [ ] Test on slow connections (3G throttling)
