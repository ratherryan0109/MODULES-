# CSS Image Sprites

## Module Overview
Learn to combine multiple images into a single sprite sheet and display individual icons using `background-position`. Image sprites are an important performance optimization technique that reduces HTTP requests by consolidating many small images into one.

## Introduction
An image sprite is a single image file that contains multiple smaller images arranged in a grid. By using CSS `background-position`, you can display only the portion of the sprite that contains the desired icon or image. This technique was especially important in the HTTP/1.1 era when each image required a separate HTTP request. While HTTP/2 has reduced the need for sprites (via multiplexing), they remain useful for icon systems, sprite sheet animations, and performance optimization in specific contexts.

## Learning Objectives
1. Understand the performance benefits of image sprites
2. Create a sprite sheet from multiple icons
3. Display specific icons using `background-position`
4. Animate sprite states on hover and active
5. Calculate background-position values for sprite grids
6. Combine sprites with `::before`/`::after` pseudo-elements
7. Use sprites for responsive designs
8. Implement sprite sheet animations (flip-book style)
9. Consider modern alternatives (SVG sprites, icon fonts)
10. Debug sprite positioning issues

## Theory

### What Are Image Sprites?
An image sprite is a composite image containing multiple smaller images (icons, buttons, UI elements) arranged in a grid. Instead of loading 20 separate icon files (20 HTTP requests), the browser loads one sprite file (1 HTTP request). The CSS then uses `background-position` to shift the visible portion of the background, revealing the desired icon.

### How Sprites Work
1. Create a grid of icons in a single image file (e.g., 4 icons × 4 icons = 16 icons)
2. Set element dimensions to match one icon (e.g., 32×32px)
3. Use the sprite as `background-image`
4. Apply negative `background-position` values to align the desired icon

The `background-position` values are calculated as:
- X-position: `-(icon_index_x × icon_width)`
- Y-position: `-(icon_index_y × icon_height)`

For a sprite sheet with 50×50px icons in a row, `icon-search` at position 1 (second icon) would be `background-position: -50px 0`.

### Performance Benefits
- **Fewer HTTP requests**: The primary benefit — combining 20 icons into one sprite reduces requests from 20 to 1
- **Faster page load**: Fewer connections mean faster overall load time, especially on high-latency connections
- **Cached as one resource**: The single sprite is cached as one file, reducing future load times
- **Reduced overhead**: Each HTTP request has headers, cookies, and SSL negotiation overhead

### Modern Context
With HTTP/2's multiplexing capability, multiple requests can be sent over a single connection, reducing the need for sprites. However, sprites still offer benefits:
- Lower total bytes (combined image compression can be more efficient)
- Simpler cache management (one file vs many)
- Essential for sprite sheet animations (game sprites, CSS animations)
- Useful when HTTP/2 is not available (some CDNs, legacy servers)

## Key Concepts

### What Are Image Sprites?
- A single image file containing multiple smaller images
- Reduces HTTP requests (fewer server round-trips)
- Common for icons, buttons, and UI elements

### How Sprites Work
- Set the element's dimensions to match one icon
- Use the sprite image as `background-image`
- Use `background-position` to align the desired icon into view
- Negative values shift the background to reveal the correct portion

### Performance Benefits
- Fewer HTTP requests (especially important for HTTP/1.1)
- Combined file can be cached as a single resource
- Reduced page load time for sites with many small images

## Code Examples

### Basic Sprite (Horizontal Layout)
```css
/* Sprite: 4 icons in a row, each 50x50px */
.nav-icon {
  width: 50px;
  height: 50px;
  background: url('sprite.png') no-repeat;
  display: inline-block;
}

.icon-home { background-position: 0 0; }
.icon-search { background-position: -50px 0; }
.icon-user { background-position: -100px 0; }
.icon-settings { background-position: -150px 0; }

/* Hover state — icons in row 2 (offset by -50px vertically) */
.icon-home:hover { background-position: 0 -50px; }
.icon-search:hover { background-position: -50px -50px; }
```

### Grid Sprite (4×4 Grid)
```css
/* Icons in a 4×4 grid, each 32×32px */
.icon {
  width: 32px;
  height: 32px;
  background: url('icons-sprite.png') no-repeat;
}
/* Row 1 */
.icon-email { background-position: 0 0; }
.icon-print { background-position: -32px 0; }
.icon-save { background-position: -64px 0; }
.icon-delete { background-position: -96px 0; }
/* Row 2 */
.icon-add { background-position: 0 -32px; }
.icon-edit { background-position: -32px -32px; }
.icon-copy { background-position: -64px -32px; }
.icon-move { background-position: -96px -32px; }
```

### Sprite with ::before Pseudo-element
```css
.button::before {
  content: "";
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-right: 8px;
  background: url('icons-sprite.png') no-repeat;
  vertical-align: middle;
}
.button-save::before {
  background-position: -16px -16px;
}
.button-delete::before {
  background-position: -48px -16px;
}
```

### Sprite Animation (Flip-Book)
```css
.sprite-animation {
  width: 100px;
  height: 100px;
  background: url('animation-sprite.png') no-repeat;
  animation: playSprite 1s steps(8) infinite;
}
@keyframes playSprite {
  from { background-position: 0 0; }
  to { background-position: -800px 0; } /* 8 frames × 100px */
}
```

### Responsive Sprite (Using background-size)
```css
.icon {
  width: 10vw;
  height: 10vw;
  max-width: 50px;
  max-height: 50px;
  background: url('sprite.png') no-repeat;
  background-size: 400px 100px; /* Scale sprite to match */
}
```

## Visual Explanation

```
Sprite Sheet Structure:
┌────────────────────────────────────────────────┐
│   0,0         -50,0       -100,0      -150,0   │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────┐│
│ │  Home    │ │  Search  │ │  User    │ │Settings│
│ │  icon    │ │  icon    │ │  icon    │ │ icon  │
│ └──────────┘ └──────────┘ └──────────┘ └──────┘│
│   0,-50       -50,-50     -100,-50    -150,-50  │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────┐│
│ │Home hover│ │Search hvr│ │ User hvr │ │Sets hvr│
│ └──────────┘ └──────────┘ └──────────┘ └──────┘│
└────────────────────────────────────────────────┘

Displaying one icon:
┌──────────────────┐
│  Element Box     │
│  50px × 50px     │
│                  │
│  Visible portion │
│  of sprite       │
│  ┌────────────┐  │
│  │  Home icon │  │  ← background-position: 0 0
│  └────────────┘  │
│                  │
│  Rest of sprite  │
│  is hidden       │
└──────────────────┘
```

## Common Mistakes

1. **Incorrect `background-position` values** — each unit of offset is the icon width/height, not pixels from the edge
2. **Forgetting to set `width` and `height`** — sprite won't display correctly without explicit dimensions
3. **Using `background-repeat: repeat`** — causes visible tiling of the sprite
4. **Not accounting for padding/borders in the sprite layout** — background-position calculations ignore padding
5. **Mixing sprites with different icon sizes** — all icons in a sprite must be the same dimensions for reliable positioning
6. **Using sprites for single-use images** — only beneficial when combining multiple images
7. **Not providing fallback for failed sprite load** — all icons fail if the single sprite file fails to load
8. **Sprites with 2×/Retina mismatch** — must use double-size sprite with `background-size: 50%` for Retina displays
9. **Using sprites in HTTP/2 environments unnecessarily** — HTTP/2 multiplexing reduces the need for spriting

## Best Practices

1. Use sprite sheets for 5+ small icons that are used repeatedly across a site
2. Maintain consistent icon sizes within each sprite (same width and height)
3. Use a sprite generator tool (Compass, Grunt, Gulp, webpack) for automated sprite creation
4. Include hover/active states in the same sprite (second row)
5. Always set `background-repeat: no-repeat` on sprite elements
6. For Retina displays, use a double-resolution sprite with `background-size: 50%`
7. Document sprite coordinates in your CSS with comments
8. Prefer inline SVG or SVG sprites for modern projects (SVG scales seamlessly)
9. Keep sprite files under 100KB for optimal caching
10. Use CSS custom properties for sprite coordinates to improve maintainability
11. For HTTP/2 sites, consider SVG icons or icon fonts instead of image sprites
12. Test sprite rendering at different zoom levels and DPI settings

## Accessibility

- Sprites used as icons on interactive elements need accessible text alternatives
- Use `aria-label` or screen-reader-only text for icon-only buttons using sprites
- Don't rely on sprites alone to convey information
- Ensure sufficient color contrast for sprite icons
- Sprites used as `background-image` are decorative — use `role="img"` with `aria-label` if meaningful
- Test with high contrast mode — background images may be disabled
- Provide `alt` text on `<img>` fallbacks for sprite-based navigation
- Ensure hover states also have visible focus indicators

## Performance

- Fewer HTTP requests = faster page load (critical for HTTP/1.1)
- Sprites reduce total bytes through combined image compression
- One cached sprite file = faster return visits
- For HTTP/2, the benefit is reduced — consider SVG sprites (smaller, sharper)
- Large sprites (>200KB) can delay initial paint — use critical CSS
- Sprite animations using `background-position` can cause repaints
- Consider using `transform: translate()` for sprite animations (GPU-accelerated)
- Use image compression tools to optimize sprite file size

## Browser Compatibility

| Feature | Chrome | Firefox | Safari | Edge | IE |
|---------|--------|---------|--------|------|----|
| `background-position` | ✓ | ✓ | ✓ | ✓ | ✓ |
| `background-image` | ✓ | ✓ | ✓ | ✓ | ✓ |
| Sprite animation | ✓ | ✓ | ✓ | ✓ | ✓ |
| `background-size` for Retina | ✓ | ✓ | ✓ | ✓ | ✓ 9+ |

Sprite technique works in all browsers because it uses fundamental CSS background properties that have been supported since CSS1.

## Summary Notes

- Image sprites combine multiple images into one file
- Use `background-position` with negative values to display the correct portion
- Reduces HTTP requests (critical for HTTP/1.1 performance)
- All icons in a sprite must have consistent dimensions
- Always set `width`, `height`, and `background-repeat: no-repeat`
- Hover states can be included in the same sprite (second row)
- For Retina: use 2× sprite with `background-size: 50%`
- SVG sprites or inline SVG are better for modern projects (scalable)
- Sprite animations use `background-position` with `steps()` timing
- Use sprite generators for maintainable workflows
- Background images are decorative — provide text alternatives
- Test sprite rendering at different zoom levels and on Retina displays
- Sprites remain useful for game animation, sprite sheets, and HTTP/1.1 sites
- Document sprite coordinates in CSS for team maintainability
