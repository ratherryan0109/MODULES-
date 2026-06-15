# Responsive Images

## Introduction
Responsive images are images that adapt to different screen sizes, resolutions, and device capabilities. Using HTML attributes like `srcset`, `sizes`, and the `<picture>` element, you can serve the right image for each device, optimizing both visual quality and performance.

## Learning Objectives
1. Understand the need for responsive images
2. Implement `srcset` with width descriptors
3. Implement `sizes` attribute for art direction
4. Use the `<picture>` element for format selection
5. Apply `image-set()` in CSS for background images
6. Use `object-fit` for image cropping
7. Implement lazy loading with `loading="lazy"`
8. Optimize images for performance
9. Use modern image formats (WebP, AVIF)
10. Handle responsive images in CSS

## Theory

### Why Responsive Images?

| Problem | Solution |
|---------|----------|
| Desktop image on mobile (1500px → 375px) = wasted bandwidth | Serve smaller images to small screens |
| Mobile image on retina desktop = blurry | Serve high-res images to high-DPI screens |
| One format doesn't fit all devices | Serve WebP/AVIF to compatible browsers |
| Art direction: crop differently at different sizes | Use `<picture>` with media queries |

### Resolution Switching vs Art Direction

| Technique | Purpose | Method |
|-----------|---------|--------|
| Resolution switching | Same image, different sizes | `srcset` with `w` descriptors |
| Art direction | Different crops/aspects | `<picture>` with `media` |
| Format selection | Modern formats with fallback | `<picture>` with `type` |

### Image Formats

| Format | Compression | Browser Support | Best For |
|--------|-------------|-----------------|----------|
| JPEG | Lossy | Universal | Photos |
| PNG | Lossless | Universal | Graphics with transparency |
| WebP | Lossy/Lossless | All modern browsers | Photos, graphics |
| AVIF | Lossy/Lossless | Chrome, Firefox | Photos (better than WebP) |
| SVG | Vector | Universal | Icons, logos, illustrations |
| GIF | Lossless | Universal | Animations |

## Syntax Examples

### Basic `srcset` with Width Descriptors
```html
<img
  src="photo-800.jpg"
  srcset="
    photo-400.jpg 400w,
    photo-800.jpg 800w,
    photo-1200.jpg 1200w,
    photo-1600.jpg 1600w
  "
  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
  alt="Description"
>
```

### With `sizes` Attribute
```html
<img
  src="img.jpg"
  srcset="img-320.jpg 320w, img-480.jpg 480w, img-800.jpg 800w, img-1200.jpg 1200w"
  sizes="(max-width: 320px) 280px,
         (max-width: 480px) 440px,
         800px"
  alt="Description"
>
```

### Art Direction with `<picture>`
```html
<picture>
  <source media="(min-width: 1200px)" srcset="hero-desktop.jpg">
  <source media="(min-width: 768px)" srcset="hero-tablet.jpg">
  <img src="hero-mobile.jpg" alt="Hero image">
</picture>
```

### Format Selection
```html
<picture>
  <source type="image/avif" srcset="photo.avif">
  <source type="image/webp" srcset="photo.webp">
  <img src="photo.jpg" alt="Photo">
</picture>
```

### Combined: Format + Resolution + Art Direction
```html
<picture>
  <source
    type="image/avif"
    media="(min-width: 1200px)"
    srcset="hero-desktop.avif 1x, hero-desktop@2x.avif 2x"
  >
  <source
    type="image/webp"
    media="(min-width: 768px)"
    srcset="hero-tablet.webp 1x, hero-tablet@2x.webp 2x"
  >
  <img
    src="hero-mobile.jpg"
    srcset="hero-mobile.jpg 1x, hero-mobile@2x.jpg 2x"
    alt="Hero"
    loading="lazy"
  >
</picture>
```

### CSS `image-set()`
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
.hero {
  background-image: image-set(
    url("hero-1x.jpg") 1x,
    url("hero-2x.jpg") 2x,
    url("hero-3x.jpg") 3x
  );
}
```

### `object-fit` for Image Control
```css
.responsive-img {
  width: 100%;
  height: 300px;
  object-fit: cover; /* cover, contain, fill, scale-down */
  object-position: center; /* positioning */
}

/* Aspect ratio boxes */
.img-container {
  aspect-ratio: 16 / 9;
  overflow: hidden;
}
.img-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

### Lazy Loading
```html
<!-- Native lazy loading -->
<img src="image.jpg" loading="lazy" alt="...">

<!-- With explicit dimensions for CLS prevention -->
<img src="image.jpg" width="800" height="600" loading="lazy" alt="...">
```

## Visual Explanation

### srcset Decision Flow

```
Browser loads HTML
        |
  Check srcset attribute
        |
  Check sizes attribute (or default to 100vw)
        |
  Calculate actual display size
        |
  Check device pixel ratio
        |
  Pick the best image candidate
        |
  Load the selected image
```

### Bandwidth Savings Example

```
Viewport: 375px (phone)
  Without responsive:  1500px image = ~500KB
  With responsive:     400px image  = ~80KB
  Savings: 84%

Viewport: 1440px (retina desktop)
  Without responsive:  1500px image = ~500KB (blurry on retina)
  With responsive:     2880px image = ~1.2MB (crisp)
```

## Common Mistakes
1. **Missing `src` fallback** - Always include `src` for browsers without `srcset` support
2. **Wrong `sizes` attribute** - Misleading browser about display size
3. **No `width`/`height` attributes** - Causes layout shift (CLS)
4. **Forgetting `alt` text** - Accessibility requirement
5. **Serving huge images to mobile** - Wasted bandwidth
6. **Not using modern formats** - WebP/AVIF save 25-50%
7. **Lazy loading above-fold images** - Hurts LCP
8. **No `object-fit` for CSS-controlled images** - Distorted images

## Best Practices
1. Always set `width` and `height` on images (prevents CLS)
2. Use `srcset` with `w` descriptors (not `x` unless retina-specific)
3. Provide at least 3 image sizes (small, medium, large)
4. Use `<picture>` for format selection with JPEG fallback
5. Add `loading="lazy"` for below-fold images
6. Use `aspect-ratio` in CSS as a CLS safeguard
7. Optimize images with tools (Squoosh, ImageOptim)
8. Serve WebP with AVIF as an enhancement
9. Test image loading on slow connections
10. Use CDN with image transformation capabilities

## Accessibility
- Always include descriptive `alt` text
- Use `<figure>` and `<figcaption>` for captioned images
- Decorative images: `alt=""` (empty alt)
- Informational images: describe the content
- Functional images (linked): alt describing the link target
- Complex images (charts): provide longdesc or adjacent text
- Avoid text in images; use real text with CSS
- Test with screen readers to verify alt text

## Performance
- Serve appropriately sized images to save bandwidth
- Use modern formats (WebP/AVIF) for 25-50% size reduction
- Lazy load below-fold images with `loading="lazy"`
- Use `fetchpriority="high"` for above-fold images
- Preload hero images with `<link rel="preload">`
- Use CDN with auto-optimization
- Implement responsive images in CSS with `image-set()`
- Consider using `content-visibility: auto` for off-screen sections

## Browser Compatibility
- `srcset` + `sizes`: All modern browsers (2014+)
- `<picture>`: All modern browsers (2014+)
- WebP: All modern browsers (2018+)
- AVIF: Chrome 85+, Firefox 93+
- `loading="lazy"`: All modern browsers (2020+)
- `image-set()`: Modern browsers (partial support in Safari)
- `object-fit`: All modern browsers (IE not supported)
- `aspect-ratio`: All modern browsers (2021+)

## Summary Notes
- Responsive images serve the right image for each device context
- Use `srcset` with `w` descriptors + `sizes` for resolution switching
- Use `<picture>` for art direction and format selection
- Always include `src` as a fallback
- Set `width` and `height` to prevent layout shift
- Use `loading="lazy"` for images below the fold
- Use modern formats (WebP, AVIF) for smaller file sizes
- `object-fit` controls how images fill their containers
- CSS `image-set()` does for backgrounds what `srcset` does for HTML images
- Test on real devices and slow connections
