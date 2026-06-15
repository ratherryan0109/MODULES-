# Module 06: CSS Backgrounds

## Table of Contents
1. Introduction
2. Learning Objectives
3. Theory
   - Background Properties Overview
   - Background Color
   - Background Image
   - Background Repeat
   - Background Position
   - Background Size
   - Background Attachment
   - Background Clip and Origin
   - Gradients (Linear and Radial)
   - Multiple Backgrounds
   - Background Shorthand
   - Conic Gradients
   - Repeating Gradients
4. Visual Explanation
5. Common Mistakes
6. Best Practices
7. Accessibility Considerations
8. Performance Considerations
9. Browser Compatibility
10. Summary Notes

## Introduction
CSS backgrounds control the area behind an element's content. You can set solid colors, gradient backgrounds, images, or combinations of these. Backgrounds are essential for visual design — they create depth, texture, and visual interest. CSS provides extensive control over how backgrounds display, repeat, position, size, and attach themselves to the viewport.

Beyond simple color fills, CSS backgrounds power hero sections, card layouts, hover effects, loading skeletons, and decorative elements. Modern CSS also supports conic gradients, multiple background layers, and sophisticated blending modes. Mastering backgrounds is key to creating visually rich web experiences without relying on heavy image assets.

## Learning Objectives
By the end of this module, you will be able to:
- Set background colors and images on any element
- Control background repeat, position, and size behavior
- Use multiple background layers on a single element
- Create linear, radial, and conic gradients
- Master the background shorthand property
- Use background-attachment for parallax scrolling effects
- Apply background-clip and background-origin for precise control
- Create repeating gradient patterns
- Understand performance implications of different background techniques

## Theory

### Background Properties Overview
CSS provides eight distinct background properties plus a shorthand:

```css
background-color: #f0f0f0;
background-image: url("bg.jpg");
background-repeat: no-repeat;
background-position: center;
background-size: cover;
background-attachment: fixed;
background-clip: padding-box;
background-origin: padding-box;
```

### Background Color
The simplest background property. It fills the element's background area with a solid color:

```css
.element {
  background-color: #f0f0f0;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent overlay */
  background-color: transparent;         /* Default */
}
```

The background color paints behind any background images. If an image fails to load, the background color is displayed. It also shows through transparent portions of PNG/SVG images and gradient backgrounds.

### Background Image
Sets an image as the background. The image is placed on top of the background color:

```css
background-image: url("images/pattern.png");
background-image: url("https://example.com/bg.jpg");
background-image: none; /* Default */
```

URLs in CSS are relative to the CSS file's location, not the HTML file. This is a common source of broken background images.

### Background Repeat
Controls how the background image tiles when it's smaller than the element:

- `repeat` (default): Tiles both horizontally and vertically
- `repeat-x`: Tiles horizontally only (one row)
- `repeat-y`: Tiles vertically only (one column)
- `no-repeat`: Single instance, no tiling
- `space`: Tiles evenly with space between tiles
- `round`: Tiles and scales to fit without clipping

```css
.no-repeat { background-repeat: no-repeat; }
.repeat-x  { background-repeat: repeat-x; }
.repeat-y  { background-repeat: repeat-y; }
.repeat    { background-repeat: repeat; }
.space     { background-repeat: space; }     /* Evenly spaced tiles */
.round     { background-repeat: round; }     /* Scaled to fit */
```

`space` and `round` are newer values that give more control:
- `space`: The browser adjusts spacing between tiles to fit the container evenly
- `round`: The browser scales the image so that an integer number of tiles fits exactly

### Background Position
Specifies where the background image starts within the element. Can use keywords, percentages, or length values:

```css
background-position: right top;
background-position: center center;
background-position: left bottom;
background-position: 50% 50%;        /* Center */
background-position: 20px 40px;      /* 20px from left, 40px from top */
background-position: right 20px bottom 10px; /* Offset from edges (CSS3) */
background-position: 30% 70%;        /* 30% across, 70% down */
```

**How percentage positioning works:**
A value of `50% 50%` aligns the image's center point with the element's center point. A value of `0% 0%` aligns the image's top-left corner with the element's top-left corner. A value of `100% 100%` aligns the image's bottom-right with the element's bottom-right.

### Background Size
Controls the size of the background image:

- `auto`: Original image size (default)
- `cover`: Scales the image to cover the entire element (may crop portions of the image)
- `contain`: Scales the image to fit entirely inside the element (may leave gaps)
- Specific values: `100px 50px` (width / height) or `50% 50%`
- Single value: Sets width, height becomes `auto`

```css
.cover {
  background-size: cover;     /* Fills container, image may be cropped */
}
.contain {
  background-size: contain;   /* Image fully visible, may leave empty space */
}
.custom {
  background-size: 200px 100px;  /* Explicit width and height */
}
.half-width {
  background-size: 50%;          /* 50% of element width, height auto */
}
```

**Cover vs Contain comparison:**
```
Cover:    ████████████████
          ██ █████████ ██   ← Image fills everything
          ██ █████████ ██     (image may be cropped)
          ████████████████

Contain:  ░░░░░░░░░░░░░░░░
          ░░ ████████████░░   ← Image fully visible
          ░░ ████████████░░     (may have empty space)
          ░░░░░░░░░░░░░░░░
```

### Background Attachment
Controls whether the background scrolls with the element or stays fixed:
```css
background-attachment: scroll;  /* Scrolls with the element (default) */
background-attachment: fixed;   /* Fixed relative to viewport */
background-attachment: local;   /* Scrolls with element's content */
```

**Parallax effect with `fixed`:**
```css
.parallax-section {
  background-image: url("mountains.jpg");
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  min-height: 400px;
}
```
This creates a classic parallax scrolling effect where the background stays still while content scrolls over it.

### Background Clip and Origin
These properties control the painting area and positioning reference:

**background-clip:** Defines how far the background extends:
```css
background-clip: border-box;   /* Extends under the border (default) */
background-clip: padding-box;  /* Stops at the padding edge */
background-clip: content-box;  /* Only behind the content */
background-clip: text;         /* Clips to text shape (experimental) */
```

**background-origin:** Defines where positioning starts:
```css
background-origin: border-box;   /* Positioned from border edge */
background-origin: padding-box;  /* Positioned from padding edge (default) */
background-origin: content-box;  /* Positioned from content edge */
```

**Text clip effect:**
```css
.gradient-text {
  background: linear-gradient(45deg, #667eea, #764ba2);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
```

### Gradients
Gradients are CSS-generated images. They're created with functions that produce smooth transitions between colors.

**Linear Gradient** — transitions along a straight line:
```css
/* Direction, color stops */
background: linear-gradient(to right, red, blue);
background: linear-gradient(45deg, #667eea, #764ba2);
background: linear-gradient(180deg, #ff0000 0%, #00ff00 50%, #0000ff 100%);
background: linear-gradient(to bottom, #fff 0%, #eee 100%);

/* Hard stop (no gradient transition) */
background: linear-gradient(to right, red 50%, blue 50%);
```
The direction can be specified as:
- Keywords: `to top`, `to bottom`, `to left`, `to right`, `to top left`, etc.
- Angles: `0deg` (top to bottom), `90deg` (left to right), `180deg`, `270deg`

**Radial Gradient** — transitions from a center point outward:
```css
background: radial-gradient(circle, yellow, orange, red);
background: radial-gradient(ellipse at center, white, #ddd);
background: radial-gradient(circle at top left, #667eea, #764ba2);
background: radial-gradient(circle at 30% 50%, red, blue);
```

**Conic Gradient** — transitions around a center point (like a color wheel):
```css
background: conic-gradient(red, yellow, green, blue, red);
background: conic-gradient(from 0deg, red, blue, red);
background: conic-gradient(from 90deg at 50% 50%, #fff, #000);
```

Conic gradients are useful for creating pie charts, color wheels, and circular progress indicators.

**Repeating Gradients:**
```css
/* Repeating linear gradient (stripes) */
background: repeating-linear-gradient(
  45deg,
  #667eea 0px,
  #667eea 10px,
  #764ba2 10px,
  #764ba2 20px
);

/* Repeating radial gradient (target pattern) */
background: repeating-radial-gradient(
  circle,
  #fff 0px,
  #fff 10px,
  #ddd 10px,
  #ddd 20px
);
```

### Multiple Backgrounds
You can layer multiple backgrounds on a single element — the first listed is on top:
```css
background:
  url("overlay.png") no-repeat center,     /* Top layer */
  url("bg.jpg") repeat-x bottom,           /* Middle layer */
  #f0f0f0;                                  /* Bottom layer (color) */

/* Multiple gradients as backgrounds */
background:
  linear-gradient(45deg, transparent 50%, rgba(255,255,255,0.1) 50%),
  linear-gradient(135deg, #667eea, #764ba2);
```

### Background Shorthand
The shorthand property combines all background values in one declaration:
```css
background: color image repeat position / size attachment;
background: #fff url("bg.jpg") no-repeat center / cover fixed;
background: no-repeat center/cover url("bg.jpg") #fff;

/* Shorthand order: */
/* background: [color] [image] [repeat] [position(/size)] [attachment] [clip] [origin]; */
```

**Important:** In shorthand, `position` and `size` are paired as `position / size`. The slash between them is critical.

## Visual Explanation
```
Background Layers Stacking Order (top to bottom):

  ┌─────────────────────┐
  │  background-image 1 │  ← Top layer (first listed in shorthand)
  │  (overlay.png)      │
  ├─────────────────────┤
  │  background-image 2 │  ← Middle layer (second listed)
  │  (bg.jpg)           │
  ├─────────────────────┤
  │  background-color   │  ← Bottom layer (always behind images)
  │  (#f0f0f0)          │
  └─────────────────────┘

Background Painting Area (background-clip):

  ┌── border-box ──────┐
  │  ┌─ padding-box ─┐ │
  │  │  ┌ content-box ┐│ │
  │  │  │             ││ │
  │  │  │  Content    ││ │
  │  │  │             ││ │
  │  │  └─────────────┘│ │
  │  └─────────────────┘ │
  └──────────────────────┘
```

## Common Mistakes
1. **Missing fallback color**: Always set a `background-color` when using `background-image` — images may fail to load or load slowly
2. **Wrong image path**: URLs in CSS are relative to the CSS file, not the HTML file. A path that works in `<img src="...">` may not work in `background-image: url(...)`
3. **Forgetting `no-repeat`**: Images tile by default, which often produces unexpected results
4. **Cover vs contain confusion**: `cover` fills the element fully (cropping the image), `contain` fits the entire image (leaving gaps)
5. **Not using shorthand properly**: Forgetting the `/` between position and size in shorthand
6. **Overusing large background images**: Background images can significantly increase page weight
7. **Using gradients where images would be more performant**: Simple gradients are fast, but complex ones can impact rendering
8. **Not considering the text legibility on background images**: Always ensure text has sufficient contrast
9. **Forgetting `background-attachment: fixed` doesn't work on mobile**: Mobile browsers often ignore or poorly implement `fixed` attachment
10. **Setting both background and background-color**: When using shorthand, it overrides individual properties — order matters

## Best Practices
- Always use `background-color` as fallback when using images (progressive enhancement)
- Optimize background images — compress with tools like ImageOptim, use modern formats (WebP, AVIF)
- Use CSS gradients instead of images for simple patterns (reduces HTTP requests)
- Prefer `cover` for hero sections (visual impact), `contain` for logos and icons (full visibility)
- Use multiple background layers instead of nested elements for overlay effects
- Consider using `background-blend-mode` for creative effects without extra images
- Wrap content in inner containers when you need text legibility over background images
- Use `will-change: transform` carefully with fixed backgrounds to avoid repaints
- Test background images on slow connections (use DevTools throttling)
- For responsive designs, use different background images at different breakpoints

```css
/* Overlay for text legibility */
.hero {
  background:
    linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
    url("hero.jpg") center/cover;
  color: white;
}

/* Responsive background image */
.hero {
  background: url("hero-mobile.jpg") center/cover;
}
@media (min-width: 768px) {
  .hero {
    background-image: url("hero-tablet.jpg");
  }
}
@media (min-width: 1200px) {
  .hero {
    background-image: url("hero-desktop.jpg");
  }
}
```

## Accessibility Considerations
- Background images are not accessible to screen readers — don't use them for content-essential images
- Ensure text over background images has sufficient contrast (use dark overlays for light text)
- Users with `prefers-reduced-motion` may need parallax effects disabled
- Complex background patterns can cause visual discomfort for some users (especially with vestibular disorders)
- Avoid background images that flash or animate — they can trigger seizures
- Provide sufficient contrast between text and background colors at all times

```css
/* Respect reduced motion preferences */
@media (prefers-reduced-motion: reduce) {
  .parallax-section {
    background-attachment: scroll; /* Disable parallax */
  }
}
```

## Performance Considerations
- Large background images impact load time — use responsive images via media queries
- Compress images and use modern formats (WebP, AVIF) with JPEG/PNG fallback
- Simple gradients are GPU-accelerated and perform better than image files
- Very complex gradients (many color stops, multiple layers) can cause repaint delays
- `background-attachment: fixed` causes repaints on scroll — use sparingly
- Use `image-set()` for resolution-aware background images:
```css
.hero {
  background-image: image-set(
    "hero.avif" type("image/avif"),
    "hero.webp" type("image/webp"),
    "hero.jpg" type("image/jpeg")
  );
}
```
- Avoid unnecessary background-size recalculations — they trigger layout

## Browser Compatibility
| Property | Chrome | Firefox | Safari | Edge | Opera | IE |
|----------|--------|---------|--------|------|-------|----|
| background-color | 1+ | 1+ | 1+ | 12+ | 3.5+ | 4+ |
| background-image | 1+ | 1+ | 1+ | 12+ | 3.5+ | 4+ |
| background-repeat | 1+ | 1+ | 1+ | 12+ | 3.5+ | 4+ |
| background-position | 1+ | 1+ | 1+ | 12+ | 3.5+ | 4+ |
| background-size | 1+ | 3.6+ | 3+ | 12+ | 9.5+ | 9+ |
| background-attachment | 1+ | 1+ | 1+ | 12+ | 3.5+ | 4+ |
| background-clip | 1+ | 4+ | 5+ | 12+ | 10.5+ | 9+ |
| background-origin | 1+ | 4+ | 5+ | 12+ | 10.5+ | 9+ |
| linear-gradient() | 26+ | 16+ | 6.1+ | 12+ | 12.1+ | 10+ |
| radial-gradient() | 26+ | 16+ | 6.1+ | 12+ | 12.1+ | 10+ |
| conic-gradient() | 69+ | 83+ | 12.1+ | 79+ | 56+ | No |
| repeating-gradient | 26+ | 16+ | 6.1+ | 12+ | 12.1+ | 10+ |
| Multiple backgrounds | 1+ | 3.6+ | 1.3+ | 12+ | 9+ | 9+ |
| background-clip: text | 29+ (webkit) | 49+ | 7+ | 79+ | 16+ | No |
| image-set() | 113+ | 93+ | 6+ | 113+ | 99+ | No |

## Summary Notes
- Backgrounds can be color, image, gradient, or multiple layers stacked in order
- Shorthand: `background: color image repeat position / size attachment clip origin`
- `background-repeat: no-repeat` stops tiling (default is `repeat`)
- `background-size: cover` fills area (may crop), `contain` shows entire image (may gap)
- `background-attachment: fixed` creates parallax effects
- `background-clip: text` creates text-masked gradients (need vendor prefix)
- Linear gradients: `linear-gradient(direction, color stops)`
- Radial gradients: `radial-gradient(shape at position, color stops)`
- Conic gradients: `conic-gradient(from angle, color stops)` — good for pie charts
- Always provide fallback `background-color` when using images or gradients
- URLs in CSS are relative to the CSS file location, not the HTML file
- Multiple backgrounds: first listed is top layer, last is bottom
- Test background visibility on mobile where `fixed` attachment is limited
- Use `prefers-reduced-motion` to disable parallax for motion-sensitive users
