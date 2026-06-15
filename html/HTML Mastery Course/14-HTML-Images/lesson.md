# Module 14: HTML Images

## Introduction

Images are an essential part of web content. They convey information, enhance visual appeal, and improve user engagement. HTML provides the `<img>` element to embed images in web pages, along with several attributes to control how images load, display, and behave.

Beyond the basic `<img>` tag, modern HTML also provides `<picture>`, `<figure>`, and `<figcaption>` elements for responsive images, semantic grouping, and accessibility. Understanding how to properly use images — including formats, optimization, responsive techniques, and accessibility — is critical for building professional websites.

---

## Learning Objectives

By the end of this module, you will be able to:
- Embed images using the `<img>` element
- Use the `src`, `alt`, `width`, `height`, and `loading` attributes
- Understand common image formats (JPEG, PNG, GIF, WebP, SVG, AVIF)
- Create responsive images with `srcset` and `sizes`
- Use the `<picture>` element for art direction
- Use `<figure>` and `<figcaption>` for semantic image grouping
- Optimize images for web performance
- Follow accessibility best practices for images
- Use image maps and background images appropriately

---

## Syntax

### Basic Image

```html
<img src="image.jpg" alt="Description of the image">
```

The `<img>` element is a **void element** (self-closing) and requires two essential attributes:
- `src` (source): The path to the image file
- `alt` (alternative text): A text description for accessibility

### Complete Attribute Set

```html
<img
  src="photo.jpg"
  alt="A scenic mountain landscape at sunset"
  width="800"
  height="600"
  loading="lazy"
  decoding="async"
>
```

---

## Image Formats

| Format | Extension | Use Case | Compression |
|--------|-----------|----------|-------------|
| JPEG | `.jpg`, `.jpeg` | Photographs, complex scenes | Lossy |
| PNG | `.png` | Diagrams, screenshots, transparency | Lossless |
| GIF | `.gif` | Simple animations, low-color images | Lossless (256 colors) |
| WebP | `.webp` | Modern replacement for JPEG/PNG | Lossy and lossless |
| AVIF | `.avif` | Next-gen format, better compression than WebP | Lossy and lossless |
| SVG | `.svg` | Icons, logos, illustrations | Vector (scalable) |

### Format Selection Guide

- **Photographs**: JPEG or WebP
- **Graphics with text**: PNG or SVG
- **Icons and logos**: SVG (scales infinitely)
- **Animations**: GIF or animated WebP
- **Maximum compression**: AVIF (modern browsers only)

---

## Essential Attributes

### `src` (Source)

Specifies the path to the image. Can be absolute or relative.

```html
<img src="https://example.com/images/photo.jpg" alt="...">
<img src="images/photo.jpg" alt="...">
<img src="../assets/photo.jpg" alt="...">
```

### `alt` (Alternative Text)

Provides a text alternative for screen readers and when images fail to load.

```html
<!-- Informative image — describe the content -->
<img src="chart.png" alt="Bar chart showing quarterly sales growth of 25%">

<!-- Decorative image — empty alt text -->
<img src="decorative-border.png" alt="">

<!-- Link image — describe the destination -->
<a href="about.html">
  <img src="about-icon.png" alt="About Us">
</a>
```

### `width` and `height`

Specify the intrinsic dimensions of the image in pixels. Setting these prevents layout shifts (Cumulative Layout Shift / CLS).

```html
<img src="photo.jpg" alt="..." width="800" height="600">
```

**Best practice:** Always set width and height attributes to prevent CLS, but use CSS `max-width: 100%` for responsive scaling.

### `loading`

Controls lazy loading behavior.

| Value | Description |
|-------|-------------|
| `eager` | Load immediately (default) |
| `lazy` | Defer loading until near the viewport |

```html
<img src="below-fold-photo.jpg" alt="..." loading="lazy">
```

### `decoding`

Hints to the browser about how to decode the image.

| Value | Description |
|-------|-------------|
| `sync` | Decode synchronously for immediate display |
| `async` | Decode asynchronously to reduce delay on other content |
| `auto` | Browser default |

### `fetchpriority`

Hints to the browser about the relative priority of the image.

| Value | Description |
|-------|-------------|
| `high` | Load with high priority |
| `low` | Load with low priority |
| `auto` | Default priority |

---

## Responsive Images

### `srcset` and `sizes`

The `srcset` attribute provides multiple image sources for different screen resolutions and widths.

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
  alt="A mountain landscape"
>
```

- **`srcset`**: Lists image files with their widths (`400w`) or pixel densities (`2x`)
- **`sizes`**: Tells the browser how much space the image will occupy at different viewport widths
- The browser selects the most appropriate image based on device capabilities

### Density Descriptors (`x`)

For fixed-width images on different pixel densities:

```html
<img
  src="icon-1x.png"
  srcset="icon-1x.png 1x, icon-2x.png 2x, icon-3x.png 3x"
  alt="Icon"
>
```

### The `<picture>` Element

For art direction — showing different images at different viewport sizes:

```html
<picture>
  <source media="(min-width: 800px)" srcset="hero-wide.jpg">
  <source media="(min-width: 400px)" srcset="hero-tablet.jpg">
  <img src="hero-mobile.jpg" alt="Hero banner">
</picture>
```

The `<picture>` element also works with format selection:

```html
<picture>
  <source type="image/avif" srcset="photo.avif">
  <source type="image/webp" srcset="photo.webp">
  <img src="photo.jpg" alt="Photo">
</picture>
```

---

## `<figure>` and `<figcaption>`

Use `<figure>` to semantically group an image with its caption.

```html
<figure>
  <img src="diagram.png" alt="Network architecture diagram">
  <figcaption>Figure 1: System network architecture overview</figcaption>
</figure>
```

---

## Image Maps

An image map defines clickable regions on an image.

```html
<img src="world-map.png" alt="World Map" usemap="#worldmap">

<map name="worldmap">
  <area shape="rect" coords="50,50,200,150" href="north-america.html" alt="North America">
  <area shape="circle" coords="400,200,60" href="europe.html" alt="Europe">
  <area shape="poly" coords="300,250,350,200,400,250" href="africa.html" alt="Africa">
</map>
```

---

## Styling Images with CSS

```css
img {
  max-width: 100%;       /* Responsive by default */
  height: auto;          /* Maintain aspect ratio */
  display: block;        /* Remove gap below inline images */
  border-radius: 8px;    /* Rounded corners */
  object-fit: cover;     /* Crop to cover container */
  object-position: center; /* Focus area for cropping */
}
```

---

## Performance Optimization

1. **Choose the right format** — WebP or AVIF for photos, SVG for vectors
2. **Compress images** — Use tools like Squoosh, ImageOptim, or TinyPNG
3. **Use responsive images** — Serve smaller images to smaller screens
4. **Lazy load below-fold images** — `loading="lazy"`
5. **Set dimensions** — Prevent layout shifts
6. **Use a CDN** — Faster delivery with image optimization built in
7. **Preload critical images** — Use `<link rel="preload">` for hero images

```html
<link rel="preload" as="image" href="hero.jpg">
```

---

## Accessibility Best Practices

1. **Always provide `alt` text** — Describe the content and function
2. **Use empty `alt=""` for decorative images** — Screen readers will ignore them
3. **Don't include "image of" or "picture of"** — Screen readers announce this
4. **Use `<figure>` + `<figcaption>`** for complex images with captions
5. **Ensure sufficient color contrast** — In images containing text
6. **Avoid using images for text** — Use real text styled with CSS

---

## Common Mistakes

1. **Missing or empty `alt` attribute** on informative images
2. **Not setting width and height** — Causes layout shifts
3. **Using oversized images** — Increases page load time
4. **Not using responsive images** — Serves desktop-sized images to mobile
5. **Using images for text** — Bad for accessibility and SEO
6. **Forgetting the file extension** or using wrong file path
7. **Not using `loading="lazy"`** for below-fold images
8. **No fallback in `<picture>`** — Always include a fallback <img>
9. **Hotlinking images** without permission (uses their bandwidth)

---

## Summary Notes

- `<img>` is a void element with required `src` and `alt` attributes
- Choose image formats based on content type and quality needs
- Set `width` and `height` to prevent CLS; use CSS `max-width: 100%` for responsiveness
- Use `srcset` and `sizes` for resolution switching
- Use `<picture>` for art direction and format fallbacks
- `<figure>` + `<figcaption>` provide semantic image grouping
- Always lazy load images below the fold with `loading="lazy"`
- Compress images and use modern formats like WebP and AVIF
- Provide descriptive `alt` text for accessibility; use `alt=""` for decorative images
- Preload critical hero images for faster LCP (Largest Contentful Paint)
