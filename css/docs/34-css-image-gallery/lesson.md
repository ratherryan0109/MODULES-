# CSS Image Gallery

## Module Overview
Learn to create responsive image galleries using CSS Flexbox and Grid, with hover effects, captions, and lightbox-like interactions. Image galleries are a staple of portfolios, e-commerce sites, and content-rich applications.

## Introduction
CSS image galleries display a collection of images in a grid or masonry layout, often with interactive features like hover zooms, captions, and filtering. Modern CSS makes responsive, visually appealing galleries straightforward to build without JavaScript. This module covers Grid-based galleries, hover effects, image optimization, and accessibility.

## Learning Objectives
1. Build a responsive image gallery with CSS Grid
2. Add overlay captions and hover effects
3. Create filterable and sortable galleries
4. Implement lightbox-style image previews
5. Use `object-fit` for consistent image sizing
6. Optimize images for performance with responsive images
7. Ensure gallery accessibility with proper ARIA attributes
8. Create masonry-style layouts with CSS
9. Add lazy loading for improved performance
10. Implement keyboard navigation for gallery browsing

## Theory

### Grid-Based Gallery
CSS Grid provides the most powerful and flexible layout system for image galleries. The key property is `grid-template-columns: repeat(auto-fill, minmax(200px, 1fr))`, which creates a responsive grid that automatically adjusts the number of columns based on available space — no media queries required.

### The auto-fill vs auto-fit Difference
- `auto-fill`: Creates as many grid tracks as fit, keeping empty tracks even if there aren't enough items
- `auto-fit`: Creates as many grid tracks as fit but collapses empty tracks

For image galleries, `auto-fit` is usually preferred because it prevents empty columns from taking up space on smaller grids.

### Image Sizing with object-fit
The `object-fit` property controls how an image fits within its container. `object-fit: cover` ensures the image fills the container while maintaining its aspect ratio (cropping excess). `object-fit: contain` ensures the entire image is visible (potentially leaving letterbox space). Using `object-fit: cover` with a fixed `height` on all gallery images creates a consistent grid without distortion.

### Hover Effects and Captions
CSS transitions and transforms enable smooth hover effects:
- `transform: scale()` for zoom effects
- `opacity` transitions for caption overlays
- `filter: brightness()` for darkening on hover

Captions can be positioned absolutely over the image using `position: relative` on the container and `position: absolute` on the caption, with `opacity` transitions for smooth appearance.

## Key Concepts

### Grid-Based Gallery
- Use `display: grid` with `grid-template-columns: repeat(auto-fill, minmax(200px, 1fr))`
- Responsive columns without media queries
- Consistent aspect ratios with `object-fit: cover`

### Hover Effects
- Scale, opacity, and overlay transitions on hover
- Caption animations (slide up, fade in)
- Use `transform` for smooth performance (GPU-accelerated)

### Image Optimization
- `object-fit: cover` prevents distortion
- `aspect-ratio` property maintains consistent sizing
- Lazy loading with `loading="lazy"` attribute
- Responsive images with `srcset` for different screen sizes

## Code Examples

### Basic Grid Gallery
```css
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
}
.gallery img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 8px;
  transition: transform 0.3s ease;
}
.gallery img:hover {
  transform: scale(1.05);
}
```

### Gallery with Captions
```css
.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
}
.gallery-item img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: transform 0.3s ease;
}
.gallery-item:hover img {
  transform: scale(1.1);
}
.gallery-item .caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 10px;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}
.gallery-item:hover .caption {
  transform: translateY(0);
}
```

### Filterable Gallery
```css
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
}
.gallery-item {
  display: block;
}
.gallery-item.hidden {
  display: none;
}
/* Filter buttons */
.filter-btn {
  padding: 8px 16px;
  margin: 4px;
  border: 1px solid #ddd;
  cursor: pointer;
}
.filter-btn.active {
  background: #333;
  color: white;
}
```

### Masonry Layout with CSS Columns
```css
.masonry {
  column-count: 3;
  column-gap: 16px;
}
.masonry-item {
  break-inside: avoid;
  margin-bottom: 16px;
}
.masonry-item img {
  width: 100%;
  display: block;
  border-radius: 8px;
}
@media (max-width: 768px) {
  .masonry { column-count: 2; }
}
@media (max-width: 480px) {
  .masonry { column-count: 1; }
}
```

### Aspect Ratio Control
```css
.gallery-image {
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}
```

## Visual Explanation

```
Grid Gallery Layout:
┌────────────────────────────────────────────┐
│ ┌────────┐ ┌────────┐ ┌────────┐ ┌───────┐│
│ │  Img 1 │ │  Img 2 │ │  Img 3 │ │Img 4 ││
│ │250x250 │ │250x250 │ │250x250 │ │250x250││
│ └────────┘ └────────┘ └────────┘ └───────┘│
│ ┌────────┐ ┌────────┐ ┌────────┐ ┌───────┐│
│ │  Img 5 │ │  Img 6 │ │  Img 7 │ │Img 8 ││
│ └────────┘ └────────┘ └────────┘ └───────┘│
└────────────────────────────────────────────┘
Resizes automatically with auto-fill/minmax

Hover Overlay Effect:
┌──────────────────────┐
│ ┌──────────────────┐ │
│ │                  │ │
│ │   Image          │ │ ← scale(1.1) on hover
│ │                  │ │
│ │ ┌─── Caption ──┐ │ │ ← slides up from bottom
│ │ │ Photo Title  │ │ │
│ │ └──────────────┘ │ │
│ └──────────────────┘ │
└──────────────────────┘
```

## Common Mistakes

1. **Images with different aspect ratios breaking the layout** — use `object-fit: cover` with fixed height
2. **Large file sizes slowing page load** — optimize images and use responsive image techniques
3. **Forgetting `alt` text** — accessibility requirement, not optional
4. **Using `width` and `height` attributes that don't match CSS** — causes layout shift (CLS)
5. **Not setting `overflow: hidden` on containers with hover zoom** — zoomed images overflow outside the container
6. **Using CSS columns for masonry** — items are ordered top-to-bottom, not left-to-right
7. **Not providing keyboard navigation** — gallery images should be focusable and navigable with keyboard
8. **Ignoring touch devices** — hover effects don't work on mobile; provide tap alternatives
9. **Missing `loading="lazy"` on below-the-fold images** — hurts initial page load performance

## Best Practices

1. Use CSS Grid with `auto-fill` + `minmax()` for truly responsive galleries
2. Always set `object-fit: cover` on gallery images for consistent sizing
3. Use `aspect-ratio` to prevent cumulative layout shift (CLS)
4. Add `loading="lazy"` to offscreen images for performance
5. Use `srcset` and `<picture>` for responsive images at different viewport sizes
6. Add smooth transitions (`transition: transform 0.3s ease`) for hover effects
7. Include `alt` text on every image for accessibility
8. Use `overflow: hidden` on image containers that use scale transforms
9. Make gallery items focusable for keyboard navigation
10. Use WebP format with JPEG fallback for optimal image compression
11. Consider using `<figure>` and `<figcaption>` for semantic captioned images
12. Test gallery at all breakpoints — what works at 1200px may break at 480px

## Accessibility

- All images must have descriptive `alt` text
- Use `<figure>` and `<figcaption>` for semantic grouping of images with captions
- Make gallery items focusable with `tabindex="0"` if they are interactive
- Hover-only effects must also work with `:focus`
- Lightbox implementations need keyboard support (Escape to close, Tab to navigate)
- Use `aria-label` on gallery regions for screen readers
- Ensure color contrast for overlay text and captions (minimum 4.5:1)
- Add `role="list"` and `role="listitem"` for gallery grids if using non-list elements
- Avoid auto-playing slideshows without pause controls
- Provide a skip gallery link for keyboard users who want to bypass long galleries

## Performance

- Use `loading="lazy"` for images below the fold (defer loading until needed)
- Use `decoding="async"` for non-critical images
- Specify `width` and `height` attributes to prevent Cumulative Layout Shift (CLS)
- Use responsive images with `srcset` and `sizes` to serve appropriately sized files
- Consider using WebP format for 25-35% smaller file sizes
- CSS transforms (scale) are GPU-accelerated and don't trigger layout
- Lazy loading + Grid layout can improve initial page load by up to 40%
- Use `content-visibility: auto` on gallery sections below the fold
- CDN with image optimization (compression, format conversion) reduces load times
- Avoid using too many high-resolution images in a single gallery view

## Browser Compatibility

| Feature | Chrome | Firefox | Safari | Edge | IE |
|---------|--------|---------|--------|------|----|
| CSS Grid | ✓ 57+ | ✓ 52+ | ✓ 10.1+ | ✓ 16+ | ✗ |
| `object-fit: cover` | ✓ 31+ | ✓ 36+ | ✓ 7.1+ | ✓ 79+ | ✗ |
| `aspect-ratio` | ✓ 88+ | ✓ 87+ | ✓ 15+ | ✓ 88+ | ✗ |
| `loading="lazy"` | ✓ 76+ | ✓ 75+ | ✓ 15.4+ | ✓ 79+ | ✗ |
| CSS `filter` | ✓ 18+ | ✓ 35+ | ✓ 6+ | ✓ 79+ | ✗ |
| CSS Columns | ✓ | ✓ | ✓ | ✓ | ✓ 10+ |

## Summary Notes

- CSS Grid provides the most flexible responsive gallery layout
- Use `grid-template-columns: repeat(auto-fill, minmax(250px, 1fr))` for auto-responsive
- `object-fit: cover` prevents image distortion in fixed-size containers
- Use `aspect-ratio` for consistent sizing and CLS prevention
- Hover effects: `transform: scale()` with `transition` for smooth zoom
- Captions: absolute positioning with `translateY` animation
- Masonry layout uses CSS columns (`column-count`) — items ordered vertically
- Always add `alt` text to every image for accessibility
- Use `loading="lazy"` for below-the-fold images
- Use `overflow: hidden` on containers with zoom effects
- Test gallery at all breakpoints
- Grid gallery items should be keyboard accessible
- Filterable galleries toggle `display: none` via JavaScript classes
- Lightbox requires JavaScript but can be styled with CSS overlays
- WebP format with responsive `srcset` provides best performance
