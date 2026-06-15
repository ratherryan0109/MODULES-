# Project Specification: Complete Multi-Page Website

## Overview
Build a complete multi-page website called "Vertex" with Home, About, Services, Blog, and Contact pages sharing a unified CSS design system.

## Requirements
- 5 linked pages with consistent navigation and footer
- Shared CSS file containing the design system
- Home page with hero, feature cards, and CTA
- About page with company story, image, and team grid
- Blog page with article cards
- Contact page with form and contact info
- Active page highlighted in navigation
- Responsive across all pages

## CSS Features
- CSS custom properties design system in :root
- Reusable component classes (.btn, .card, .grid-3)
- Shared header and footer across pages
- Consistent typography and spacing
- Responsive grid system
- Hover effects on cards and buttons
- Form input focus styles

## File Structure
```
vertex/
├── index.html (Home)
├── about.html
├── services.html
├── blog.html
├── contact.html
├── css/
│   └── style.css (shared design system)
├── js/
│   └── main.js
└── assets/
    └── images/
```

## Accessibility
- aria-current="page" on active nav link
- role="banner", "main", "contentinfo" landmarks
- Skip-to-content link on every page
- Consistent focus-visible styles
- Form labels and required attributes

## Grading
| Criteria | Points |
|----------|--------|
| Design system architecture | 20 |
| Navigation and page linking | 15 |
| Home page | 15 |
| About page | 10 |
| Blog page | 10 |
| Contact page | 10 |
| Responsive design | 10 |
| Accessibility | 10 |
| **Total** | **100** |
