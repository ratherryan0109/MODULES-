# Project Specification: Portfolio Website

## Overview
Build a personal portfolio website for a fictional designer/developer named "Alex Chen." The site must demonstrate responsive design, dark/light theming, a filterable project gallery, and smooth scroll navigation.

## Requirements

### Sections
- Fixed navigation with theme toggle
- Hero section with name, title, stats, and CTA buttons
- About section with bio, image, and skill tags
- Projects section with filterable gallery (All, Web, Mobile, Design)
- Experience section with vertical timeline
- Contact section with functional form
- Footer with social links

### CSS Features
- CSS custom properties for light/dark theming
- `data-theme` attribute switching via JavaScript
- CSS Grid with `auto-fill`/`minmax` for project cards
- Flexbox for layout, navigation, and filter bar
- Smooth transitions (0.3s) on theme change
- Hover effects on cards (translateY, shadow, image zoom)
- Fade-in animation for filtered project cards

### Accessibility
- Skip-to-content link
- `aria-pressed` on filter buttons
- `aria-expanded` on mobile menu toggle
- `aria-label` on theme toggle
- Focus-visible outlines
- prefers-reduced-motion support
- Semantic HTML (`<figure>`, `<time>`, `<nav>`, `<main>`)

### Performance
- Lazy loading images (`loading="lazy"`)
- CSS animations over JavaScript
- localStorage for theme persistence
- Minimal JS (no framework needed)

## Deployment Guide

### GitHub Pages
1. Create repo `username.github.io` or use project site
2. Push to `main` branch
3. Enable Pages from Settings → Pages → main branch

### Netlify
1. Connect GitHub repo or drag-drop folder
2. Netlify auto-deploys on push

### Vercel
1. `npx vercel` in project directory
2. CLI handles deployment automatically

## Project Structure
```
portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── assets/
    ├── images/
    └── icons/
```

## Grading Rubric
| Criteria | Points |
|----------|--------|
| Responsive layout (mobile/tablet/desktop) | 20 |
| Dark/light theme implementation | 15 |
| Project filter system | 15 |
| Timeline component | 10 |
| Accessibility features | 15 |
| Visual design (typography, color, spacing) | 15 |
| Code quality | 10 |
| **Total** | **100** |
