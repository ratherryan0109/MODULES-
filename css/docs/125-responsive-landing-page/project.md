# Project Specification: Responsive Landing Page

## Overview
Build a fully responsive landing page for a fictional SaaS product called "FlowBrand." The page should demonstrate mastery of mobile-first design, CSS Grid, Flexbox, custom properties, and modern CSS techniques.

## Requirements

### Layout & Structure
- Fixed header with logo and navigation (collapses to hamburger on mobile)
- Hero section with headline, subtext, CTA buttons, and illustration
- Features section with 3 feature cards
- Testimonials section with quotes
- Pricing section with 3 tier cards (one featured/highlighted)
- Call-to-action banner
- Footer with 4-column link grid

### CSS Features
- CSS custom properties for all colors, fonts, spacing
- Mobile-first media queries (breakpoints: 640px, 768px, 1024px)
- CSS Grid for hero and pricing sections
- Flexbox for feature cards and navigation
- Smooth transitions on hover/focus
- Fade-in animation on page load
- `clamp()` for fluid typography
- `backdrop-filter` for glassmorphism header

### Accessibility
- Skip-to-content link
- ARIA labels and roles (`banner`, `navigation`, `main`, `contentinfo`)
- `aria-expanded` on mobile menu toggle
- `:focus-visible` outlines on all interactive elements
- `prefers-reduced-motion` support
- Color contrast ratio ≥ 4.5:1
- Semantic heading hierarchy (h1 → h2 → h3)

### Performance
- Inline critical CSS (or link to external stylesheet)
- `loading="lazy"` on images below the fold
- Use of `transform` and `opacity` for animations

## Deployment Guide

### Option 1: GitHub Pages
1. Create a GitHub repository
2. Push the `index.html` (and any CSS/JS) to the `main` branch
3. Go to Settings → Pages → Source: Deploy from branch → main → / (root)
4. Your site will be live at `https://<username>.github.io/<repo>/`

### Option 2: Netlify (Drag & Drop)
1. Build the project into a folder
2. Go to https://app.netlify.com → Drag and drop the folder
3. Netlify auto-deploys with HTTPS

### Option 3: Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the CLI prompts

## Project Structure
```
project/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── assets/
    └── images/
```

## Grading Rubric
| Criteria | Points |
|----------|--------|
| Responsive layout works on mobile/tablet/desktop | 25 |
| Correct use of CSS Grid and Flexbox | 20 |
| CSS custom properties implementation | 15 |
| Accessibility features (skip link, ARIA, focus) | 15 |
| Visual design quality (color, typography, spacing) | 15 |
| Code quality (clean, organized, comments) | 10 |
| **Total** | **100** |
