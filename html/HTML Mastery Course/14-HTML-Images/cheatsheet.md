# HTML Images — Cheatsheet

## Basic Image

```html
<img src="photo.jpg" alt="Description" width="800" height="600">
```

## Image Formats

| Format | Best For | Compression | Transparency |
|--------|----------|-------------|--------------|
| JPEG | Photos | Lossy | No |
| PNG | Graphics, screenshots | Lossless | Yes |
| GIF | Simple animations | Lossless (256 colors) | Yes (1-bit) |
| WebP | Modern replacement | Lossy & Lossless | Yes |
| AVIF | Next-gen compression | Lossy & Lossless | Yes |
| SVG | Icons, logos, vectors | Vector | Yes |

## Key Attributes

| Attribute | Values | Purpose |
|-----------|--------|---------|
| `src` | URL/path | Image source |
| `alt` | Text | Alternative text |
| `width` | Number (px) | Intrinsic width |
| `height` | Number (px) | Intrinsic height |
| `loading` | `lazy`, `eager` | Lazy loading |
| `decoding` | `sync`, `async`, `auto` | Decode timing |
| `fetchpriority` | `high`, `low`, `auto` | Fetch priority |
| `srcset` | URLs + descriptors | Responsive sources |
| `sizes` | Media + width | Display width |
| `usemap` | `#mapname` | Image map reference |

## Responsive Images

### Resolution Switching (srcset + sizes)

```html
<img
  src="photo-800.jpg"
  srcset="
    photo-400.jpg 400w,
    photo-800.jpg 800w,
    photo-1200.jpg 1200w
  "
  sizes="
    (max-width: 600px) 100vw,
    (max-width: 1200px) 50vw,
    800px
  "
  alt="Description"
>
```

### Density Descriptors

```html
<img src="icon-1x.png"
  srcset="icon-1x.png 1x, icon-2x.png 2x, icon-3x.png 3x"
  alt="Icon">
```

### Art Direction (picture)

```html
<picture>
  <source media="(min-width: 800px)" srcset="hero-wide.jpg">
  <source media="(min-width: 400px)" srcset="hero-tablet.jpg">
  <img src="hero-mobile.jpg" alt="Hero">
</picture>
```

### Format Fallback

```html
<picture>
  <source type="image/avif" srcset="photo.avif">
  <source type="image/webp" srcset="photo.webp">
  <img src="photo.jpg" alt="Photo">
</picture>
```

## Figure and Figcaption

```html
<figure>
  <img src="diagram.png" alt="Architecture diagram">
  <figcaption>Figure 1: System architecture</figcaption>
</figure>
```

## Image Map

```html
<img src="map.png" alt="Interactive map" usemap="#myMap">
<map name="myMap">
  <area shape="rect" coords="0,0,100,100" href="page.html" alt="Region">
  <area shape="circle" coords="200,200,50" href="other.html" alt="Circle">
  <area shape="poly" coords="300,0,350,50,300,100" href="poly.html" alt="Polygon">
</map>
```

## CSS for Images

```css
img {
  max-width: 100%;      /* Responsive */
  height: auto;         /* Maintain aspect ratio */
  display: block;       /* Remove bottom gap */
  border-radius: 8px;   /* Rounded corners */
  object-fit: cover;    /* Crop to fit */
  object-position: center; /* Focus area */
}
```

## Accessibility Rules

| Image Type | Alt Text |
|------------|----------|
| Informative | Describe the content |
| Decorative | `alt=""` (empty) |
| Linked | Describe the destination |
| Complex (chart) | `alt="Summary"` + longdesc or caption |

## Performance Tips

1. Compress images (Squoosh, TinyPNG, ImageOptim)
2. Use modern formats (WebP, AVIF) with `<picture>` fallbacks
3. Set `width` and `height` to prevent CLS
4. Use `loading="lazy"` for below-fold images
5. Use `srcset` for responsive images
6. Preload hero images: `<link rel="preload" as="image" href="hero.jpg">`
7. Use a CDN with image optimization
