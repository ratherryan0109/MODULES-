# CSS Object-Fit and Object-Position

## Module Overview
Learn how to control how images and videos fit within their containers using the `object-fit` and `object-position` properties. These properties are essential for responsive media handling, enabling consistent presentation of replaced elements across different viewport sizes and aspect ratios.

## Learning Objectives
- Understand the object-fit property and its values
- Use object-position to control media placement
- Create responsive image grids with object-fit
- Apply object-fit to video elements
- Combine with aspect-ratio for consistent media displays
- Compare object-fit with background-size for appropriate use cases
- Understand the behavior of replaced elements with object-fit
- Set proper fallback strategies for object-fit

## Topics Covered

### 1. The object-fit Property
The `object-fit` property determines how an `<img>` or `<video>` element's content resizes to fit its container. It applies only to replaced elements — elements whose content is outside the scope of CSS (like images, videos, iframes, and embedded objects).

```css
/* Basic usage */
img {
  width: 300px;
  height: 300px;
  object-fit: cover;
}
```

**Values:**
- `fill` — stretches to fill container (default, may distort)
- `contain` — fits entire content within container (may have letterboxing)
- `cover` — covers the entire container (may crop content)
- `none` — displays at original size
- `scale-down` — acts as `none` or `contain`, whichever is smaller

```css
/* Comparison of all values */
.img-fill { object-fit: fill; }       /* Distorted if aspect ratio differs */
.img-contain { object-fit: contain; }  /* Full image visible, may have bars */
.img-cover { object-fit: cover; }      /* Container filled, image may be cropped */
.img-none { object-fit: none; }        /* Original size, may overflow */
.img-scale-down { object-fit: scale-down; } /* Never larger than original */
```

**Detailed behavior of each value:**

`fill` (default): The image is stretched or compressed to exactly match the container dimensions. This ignores the image's intrinsic aspect ratio and will cause distortion unless the container happens to match the image's aspect ratio.

`contain`: The entire image is visible within the container while preserving its aspect ratio. If the container's aspect ratio doesn't match, letterboxing or pillarboxing occurs (empty space on the sides or top/bottom). This is the "poster image" behavior — you see the whole image but it may not fill the frame.

`cover`: The image fills the entire container while preserving its aspect ratio. If the aspect ratios don't match, the image is cropped (either left/right or top/bottom). This is the most commonly used value for image galleries, hero sections, and profile avatars.

`none`: The image is displayed at its intrinsic (natural) dimensions. If the image is larger than the container, it overflows; if smaller, it leaves empty space. No scaling is applied.

`scale-down`: This is a combination of `none` and `contain`. The browser compares the two and picks whichever results in a smaller final image. This ensures the image is never displayed larger than its natural size.

### 2. The object-position Property
The `object-position` property positions the media content within its box, similar to `background-position`. Works with any `object-fit` value, but is most impactful with `cover` and `contain`.

```css
/* Center the visible portion (default) */
img {
  object-fit: cover;
  object-position: center;
}

/* Focus on the top of the image (good for portraits) */
img.portrait {
  object-fit: cover;
  object-position: 50% 20%;
}

/* Focus on the right side */
img {
  object-fit: cover;
  object-position: 100% 50%;
}
```

The `object-position` property accepts the same values as `background-position`: keywords (`top`, `bottom`, `left`, `right`, `center`), percentages, and length values. The default is `50% 50%` (center).

**Practical use cases for object-position:**

```css
/* Product images — always show the full item */
.product-image {
  object-fit: contain;
  object-position: center;
}

/* Team headshots — focus on faces */
.team-photo {
  object-fit: cover;
  object-position: 50% 25%; /* Center horizontally, slightly top for face */
}

/* Landscape header — focus on interesting area */
.hero-image {
  object-fit: cover;
  object-position: 75% 50%; /* Focus on right portion of image */
}
```

### 3. Responsive Image Strategies
Combine `object-fit: cover` with percentage-based widths and `aspect-ratio` for predictable, responsive image grids.

```css
/* Consistent image grid */
.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
}

.image-grid img {
  width: 100%;
  height: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  object-position: center;
}
```

The combination of `aspect-ratio`, `object-fit: cover`, and CSS Grid creates robust image galleries where:
- All images have the same aspect ratio (controlled by `aspect-ratio`)
- Images fill their allocated space completely (controlled by `object-fit: cover`)
- Images respond to available space (controlled by `grid-template-columns`)
- No layout shift occurs as images load (because `aspect-ratio` reserves space)

**Using aspect-ratio with object-fit for layout stability:**
```css
img {
  width: 100%;
  height: auto;
  aspect-ratio: 4 / 3;
  object-fit: cover;
}
```

This pattern is critical for Core Web Vitals — it prevents Cumulative Layout Shift (CLS) by reserving space before the image loads, while ensuring the loaded image fills that space proportionally.

### 4. object-fit with Videos
The same properties apply to `<video>` elements, enabling cinematic video presentations.

```css
/* Full-screen background video */
.video-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
}

/* Cinematic letterbox video */
.cinematic-video {
  width: 100%;
  aspect-ratio: 21 / 9;
  object-fit: contain;
  background: #000; /* Letterbox color */
}
```

Video elements behave identically to images with object-fit. Using `object-fit: cover` ensures the video always fills its container without distortion, making it ideal for video backgrounds. Using `object-fit: contain` with a black background creates cinematic letterboxing effects.

### 5. Comparison with background-size
object-fit works on replaced elements (img, video) while background-size works on background images. Choose based on semantic needs.

| Aspect | object-fit | background-size |
|--------|------------|-----------------|
| Applies to | Replaced elements (img, video, iframe) | Elements with background-image |
| Semantics | Content (part of document) | Presentation (not in document flow) |
| Accessibility | Screen reader accessible | Not accessible |
| SEO | Images are indexed | Not indexed |
| Printing | Included | May not print |
| Right-click | Saveable | Not saveable |
| Selection | Selectable | Not selectable |

**When to use each:**
- Use `<img>` with `object-fit` when the image is content (product photos, article images, user avatars)
- Use `background-image` with `background-size` when the image is decorative (textures, patterns, hero backgrounds that are purely stylistic)
- For full-bleed hero sections, either approach works — choose based on whether the image is content or decoration

```css
/* Content image */
<img class="product-photo" src="product.jpg" alt="Product Name">
.product-photo {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

/* Decorative background */
.hero-section {
  background-image: url('hero-bg.jpg');
  background-size: cover;
  background-position: center;
}
```

### 6. Browser Fallback Strategies
For browsers that don't support `object-fit` (primarily IE 11 and below), provide fallback styling:

```css
/* Object-fit with IE fallback using background-image */
.img-container {
  position: relative;
  width: 300px;
  height: 300px;
  overflow: hidden;
}

.img-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* IE fallback */
@media (-ms-high-contrast: none), screen and (-ms-high-contrast: active) {
  .img-container img {
    /* IE doesn't support object-fit — hide img and use background */
    position: absolute;
    left: -10000px;
  }
  .img-container {
    background-image: attr(data-src url);
    background-size: cover;
    background-position: center;
  }
}
```

## Best Practices
- Use `object-fit: cover` for consistent image aspect ratios in grids
- Use `object-fit: contain` when the full image must be visible (product photos)
- Set explicit dimensions on the container, not the img element itself
- Combine with `aspect-ratio` for predictable sizing before images load
- Use `object-position: top` for portrait photos of people (keeps face visible)
- Always provide `width` and `height` attributes in HTML for layout stability
- Use `<img>` with object-fit for content images, background-image for decorative images
- Test image presentation at all breakpoints in responsive designs

## Common Mistakes
- Forgetting that object-fit requires explicit dimensions on the container
- Using object-fit on non-replaced elements (it only works on img, video, etc.)
- Not providing height/width attributes in HTML for layout stability
- Confusing object-fit with background-size (they serve different use cases)
- Assuming object-fit works in Internet Explorer (it doesn't)
- Not accounting for `<figure>` and `<picture>` element behavior with object-fit
- Using `object-fit: fill` (default) when `cover` or `contain` is intended
- Forgetting that object-position works differently with different object-fit values

## Accessibility Considerations
- Images with object-fit must still have alt text for screen readers
- Cropped images (object-fit: cover) may hide important visual information
- For critical images, ensure the visible portion contains the key content
- Logo images should use `object-fit: contain` to avoid cropping brand elements
- Video with object-fit should still have captions and transcripts
- Test zoom behavior — object-fit may crop more aggressively at higher zoom levels
- Consider adding `role="img"` and `aria-label` for decorative images used as backgrounds
- Informational images must remain recognizable at all viewport sizes

## Performance Considerations
- `object-fit` is GPU-accelerated in modern browsers
- Images should be appropriately sized for their display container (use responsive images with `srcset`)
- `object-fit: cover` may cause the browser to decode larger image regions than necessary
- For performance, match image aspect ratio to container aspect ratio to avoid wasted decoding
- Use `loading="lazy"` for below-the-fold images with object-fit
- `aspect-ratio` prevents layout shift — important for Cumulative Layout Shift (CLS) scores
- Consider using `<picture>` with multiple sources for optimal image sizes per breakpoint
- Avoid using object-fit on very large images that are displayed small (wasteful decoding)

## Browser Compatibility

| Feature | Chrome | Firefox | Safari | Edge | IE |
|---------|--------|---------|--------|------|-----|
| object-fit | 31+ | 36+ | 10+ | 79+ | No |
| object-position | 31+ | 36+ | 10+ | 79+ | No |
| aspect-ratio | 88+ | 89+ | 15+ | 88+ | No |

`object-fit` and `object-position` are supported in all modern browsers. Internet Explorer does not support either property at any version. For IE 11, use polyfills or the background-image fallback approach described above. The `aspect-ratio` property is newer (2021+) and is well-supported in current versions of all major browsers.

## Visual Explanation

**The five object-fit values on a 4:3 image in a 1:1 container:**
```
  Container (gray):  ┌──────┐
                      │      │  width = height = 200px
                      │      │
                      └──────┘

  Original image (─ ─ intrinsic 4:3 bounding box)

  fill:               contain:             cover:
  ┌──────┐            ┌──────┐             ┌──────┐
  │██████│            │░░░░░░│             │██████│
  │██████│            │░████░│             │██████│
  │██████│            │░████░│             │██████│
  └──────┘            │░░░░░░│             │██████│
  image stretched      └──────┘             └──────┘
  to fill box          full image visible   box fully filled
  (distorted)          letterboxed          image cropped

  none:                scale-down:
  ┌──────┐            ┌──────┐
  │      │            │      │
  │ ████ │            │░████░│
  │ ████ │            │░████░│
  │      │            │      │
  └──────┘            └──────┘
  natural size         smaller of none
  (may overflow)       and contain
```

**object-fit with object-position:**
```
  object-fit: cover;           object-fit: cover;
  object-position: center;     object-position: 50% 20%;
  ┌──────────────────┐         ┌──────────────────┐
  │██████████████████│         │██████████████████│
  │██████████████████│         │██████████████████│
  │██████████████████│         │▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│ ← face area
  │██████████████████│         │██████████████████│
  └──────────────────┘         └──────────────────┘
  Visible portion centered     Visible portion shifted up
                               (focus on face in portrait)
```

**object-fit for videos:**
```
  21:9 video in 16:9 container:
  
  contain (black bars):         cover (cropped sides):
  ┌──────────────────────┐      ┌──────────────────────┐
  │░░░░░░░░░░░░░░░░░░░░░░│      │██████████████████████│
  │░░██████████████████░░│      │██████████████████████│
  │░░██████████████████░░│      │██████████████████████│
  │░░░░░░░░░░░░░░░░░░░░░░│      │██████████████████████│
  └──────────────────────┘      └──────────────────────┘
  All content visible           Content fills frame
  Letterboxed (top + bottom)    Cropped left + right
```

**img with object-fit vs background-image with background-size:**
```
  <img> (content)                       <div> (decoration)
  ┌──────────────────┐                  ┌──────────────────┐
  │                  │  Screen reader   │                  │
  │  Selectable      │  ✓              │  Not selectable  │
  │  Printable       │  ✓              │  May not print   │
  │  Right-clickable │  ✓              │  Not saveable    │
  │  SEO indexable   │  ✓              │  Not indexed     │
  │                  │                  │                  │
  └──────────────────┘                  └──────────────────┘
  object-fit: cover                     background-size: cover
```

## Summary Notes
- `object-fit` controls how replaced element content fits its container (5 values: fill, contain, cover, none, scale-down)
- `object-position` controls placement of content within the container (like background-position)
- Both only work on replaced elements (img, video, iframe, embed, object)
- Use `object-fit: cover` with `aspect-ratio` for stable, responsive image grids
- Use `object-fit: contain` for product images and logos where full content must be visible
- object-fit provides content-image control; background-size provides decorative-image control
- IE 11 has no object-fit support — provide fallback via background-image technique
- Combine with `width`, `height` attributes and `aspect-ratio` for CLS prevention
- Object-fit is GPU-accelerated and performant in modern browsers
