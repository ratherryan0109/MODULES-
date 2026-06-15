# Responsive Cards

## Introduction
Cards are one of the most common UI patterns in modern web design. Responsive cards adapt their layout, sizing, and content presentation across different viewports, maintaining usability and visual appeal on any device. CSS Grid and Flexbox make creating flexible card systems straightforward.

## Learning Objectives
1. Build responsive card grids with CSS Grid
2. Implement equal-height cards with Flexbox
3. Create card layouts that adapt without media queries
4. Design card content that responds to container size
5. Implement card hover and interaction effects
6. Handle card images responsively
7. Create featured/highlighted card variants
8. Build card lists vs card grids
9. Use container queries for card adaptation
10. Implement card loading states and transitions

## Theory

### Card Anatomy

```
+----------------------------------+
|  +----------------------------+  |
|  |         Image              |  |  ← Responsive (object-fit: cover)
|  +----------------------------+  |
|                                  |
|  Card Title                      |  ← Fluid typography
|  Card description text that      |
|  can span multiple lines and     |
|  wraps naturally.                |
|                                  |
|  [Meta]          [Action]        |  ← Flexbox for alignment
+----------------------------------+
```

### Card Grid Patterns

| Pattern | Method | Best For |
|---------|--------|----------|
| Auto-fit grid | `repeat(auto-fit, minmax(280px, 1fr))` | Homogeneous cards |
| Explicit columns | `repeat(3, 1fr)` with media queries | Fixed layouts |
| Masonry | CSS columns or JS | Mixed heights |
| Featured grid | Grid with spanning | Highlighting content |
| Horizontal cards | Flexbox | Compact lists |
| Carousel | Overflow scroll | Limited space |

### Card Components

| Element | Implementation | Responsive Considerations |
|---------|---------------|--------------------------|
| Image | object-fit: cover, aspect-ratio | Different crops at sizes |
| Title | Fluid font-size (clamp) | Line clamping for overflow |
| Body | Flexible text | Readable measure |
| Actions | Flexbox | Full-width on mobile, inline on desktop |
| Badges | Absolute positioning | Stack vs overlay |

## Syntax Examples

### Basic Responsive Card Grid
```css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  padding: 1rem;
}
```

### Card Component (Flexbox)
```css
.card {
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  transition: transform 0.2s, box-shadow 0.2s;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.card-image {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}

.card-body {
  padding: 1rem;
  flex: 1; /* Push footer down */
}

.card-footer {
  padding: 1rem;
  border-top: 1px solid #e2e8f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

### Horizontal Card (List View)
```css
.card-horizontal {
  display: flex;
  flex-direction: column;
}

@media (min-width: 640px) {
  .card-horizontal {
    flex-direction: row;
  }
  .card-horizontal .card-image {
    width: 200px;
    height: auto;
  }
}
```

### Featured Card (Spans Grid)
```css
.card-featured {
  grid-column: 1 / -1; /* Span full width */
}

@media (min-width: 768px) {
  .card-featured {
    grid-column: span 2;
    display: flex;
    flex-direction: row;
  }
}
```

### Card with Container Queries
```css
.card-container {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card-content { flex-direction: row; }
}

@container (min-width: 600px) {
  .card { padding: 2rem; }
  .card-image { width: 300px; }
}
```

### Line Clamping for Titles
```css
.card-title {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-excerpt {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
```

## Visual Explanation

### Card Size Progression

```
Mobile                            Desktop
+----------+                     +-------+-------+-------+
|  Card 1  |                     | Card1 | Card2 | Card3 |
+----------+                     +-------+-------+-------+
|  Card 2  |                     | Card4 | Card5 | Card6 |
+----------+                     +-------+-------+-------+
|  Card 3  |
+----------+

1 column (auto-fit minmax)       3+ columns
```

## Common Mistakes
1. **Fixed card heights** - Content overflows or gaps appear
2. **Images without aspect-ratio** - Layout shift on load
3. **Missing flex: 1 on body** - Footers float mid-card
4. **Hardcoded column counts** - Use auto-fit/minmax
5. **No hover on touch devices** - Consider hover effects
6. **Too much padding on mobile** - Wastes space
7. **Inconsistent card sizes** - Different content breaks layout
8. **No line clamping** - Uneven card heights from overflow

## Best Practices
1. Use `auto-fit` + `minmax()` for responsive card grids
2. Set `display: flex; flex-direction: column` on cards
3. Use `flex: 1` on the body to push footers down
4. Use `object-fit: cover` with `aspect-ratio` on images
5. Line-clamp titles and excerpts to 2-3 lines
6. Use `gap` for card spacing (not margins)
7. Add hover effects with `prefers-reduced-motion` check
8. Use container queries for card content adaptation
9. Provide featured card variants
10. Use CSS transitions for smooth interactions

## Accessibility
- Cards should be focusable (link or button inside)
- Use proper heading hierarchy (h2/h3 for card titles)
- Add `aria-label` if card links are not descriptive
- Ensure color contrast on all card text
- Test card focus indicators (keyboard navigation)
- Consider that card may be a single link or have multiple actions
- Use `article` element for standalone cards
- Screen readers should understand card structure

## Performance
- Aspect-ratio prevents layout shift (CLS)
- CSS transitions are GPU-accelerated
- Lazy-load card images with loading="lazy"
- Use content-visibility for off-screen cards
- Minimize card DOM size
- Use will-change: transform for hover animations
- Avoid expensive filters/shadows on many cards

## Browser Compatibility
- CSS Grid: All modern browsers (IE11 partial)
- `aspect-ratio`: All modern browsers (2021+)
- `line-clamp`: All modern browsers (2019+)
- Container queries: Modern browsers (2023+)
- `object-fit`: All modern browsers (IE not supported)
- `gap`: All modern browsers (2021+)
- `auto-fit`/`auto-fill`: Same as Grid support

## Summary Notes
- Card grids are best built with CSS Grid `auto-fit` + `minmax()`
- Each card should be a Flexbox column with `flex: 1` on body
- Use `aspect-ratio` + `object-fit: cover` for responsive images
- Line-clamp titles and excerpts for consistent heights
- Container queries enable card-level responsiveness
- Featured cards can span multiple grid columns
- Always respect `prefers-reduced-motion` for animations
- Cards need proper accessibility: headings, focus, ARIA
- Test card layouts on real devices for touch interaction
- Use CSS transitions for smooth hover/active states
