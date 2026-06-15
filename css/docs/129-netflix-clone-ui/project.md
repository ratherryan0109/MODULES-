# Project Specification: Netflix Clone UI

## Overview
Build a streaming service UI clone called "StreamBox" with a cinematic hero, horizontal scrollable rows, and hover-scale thumbnails.

## Requirements
- Fixed nav that transitions from transparent to solid on scroll
- Full-screen hero with gradient overlay, title, description, and action buttons
- Multiple horizontal scrollable content rows (Trending, Continue Watching, Top Picks)
- Thumbnail cards with hover scale (1.4x) and metadata overlay
- Custom scrollbar styling for rows
- Responsive layout (mobile: smaller thumbnails, stacked hero)

## CSS Features
- Linear gradients for hero overlay and nav fade
- Flexbox for scrollable rows with scroll-snap
- Transform scale on hover with z-index layering
- Position absolute overlays for thumbnail info
- WebKit scrollbar pseudo-elements

## Accessibility
- Skip-to-content link
- role='list' and role='listitem' on card rows
- aria-labels on icon buttons
- Focus-visible outlines on interactive elements
- Keyboard navigation for thumbnail rows

## Project Structure
```
streaming/
├── index.html
├── css/style.css
├── js/main.js
└── assets/images/
```

## Grading
| Criteria | Points |
|----------|--------|
| Hero section with overlay | 25 |
| Scrollable row implementation | 25 |
| Thumbnail hover effects | 20 |
| Navigation scroll behavior | 15 |
| Responsive design | 15 |
| **Total** | **100** |
