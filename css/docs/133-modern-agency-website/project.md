# Project Specification: Modern Agency Website

## Overview
Build a creative agency website called "NOVA" with full-screen hero, service cards, portfolio grid, about section, and stats.

## Requirements
- Fixed nav with underline hover animation
- Full-screen hero with background image, large typography, scroll indicator
- Services section with 3 cards (hover slide effect)
- Portfolio grid with hover overlay
- About section with image and stats
- Footer with social links

## CSS Features
- Full-bleed hero layout
- Clamp for fluid typography (up to 8rem)
- Overlay gradients for hero and portfolio
- Pseudo-element hover animations
- CSS Grid for services and portfolio
- aspect-ratio for portfolio items
- Object-fit cover for images

## Accessibility
- aria-hidden on decorative background images
- role='presentation' on decorative elements
- Skip link and semantic HTML
- Focus-visible outlines
- Alt text on portfolio images

## Project Structure
```
agency/
├── index.html
├── css/style.css
├── js/main.js
└── assets/images/
```

## Grading
| Criteria | Points |
|----------|--------|
| Hero section and typography | 25 |
| Service cards with animations | 20 |
| Portfolio grid with overlays | 20 |
| About section with stats | 15 |
| Responsive design | 10 |
| Accessibility | 10 |
| **Total** | **100** |
