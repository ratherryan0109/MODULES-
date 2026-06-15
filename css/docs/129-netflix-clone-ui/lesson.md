# Module 129: Netflix Clone UI

## Introduction
Clone the Netflix landing page interface to master hero layouts, horizontal scrollable rows, hover-scale thumbnails, and overlay effects using modern CSS.

## Learning Objectives
- Build a full-screen hero with gradient overlay
- Create horizontally scrollable content rows
- Implement hover-scale thumbnail effects
- Style a fixed navigation that changes on scroll
- Use CSS gradients for cinematic overlays

## Architecture
The layout has a fixed top nav, full-screen hero with background image + gradient overlay, and horizontal scrollable rows for movie/show categories. Cards use hover scaling with metadata overlays.

## Key Techniques
```css
.hero {
  min-height: 80vh;
  background: linear-gradient(to top, #141414, transparent 50%),
              url('hero.jpg') center/cover;
}
.row {
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding: 1rem 0;
}
.thumbnail {
  flex: 0 0 200px;
  transition: transform 0.3s ease;
}
.thumbnail:hover { transform: scale(1.4); z-index: 2; }
```

## Responsive Approach
- Mobile: Single column, hamburger nav, smaller thumbnails
- Tablet: 2-row hero text, medium thumbnails
- Desktop: Full hero, multi-row with scroll-snap

## Accessibility
- aria-labels on nav links
- Focus indicators on thumbnails
- Keyboard scrollable rows
- Skip-to-content link

## Summary Notes
- Use background gradients to overlay text on hero images
- Horizontal scroll with `overflow-x: auto` and `scroll-snap-type`
- Transform scale on hover for cinematic thumbnail effects
- Fixed nav with `background: rgba(20,20,20, var(--scroll-opacity))`
