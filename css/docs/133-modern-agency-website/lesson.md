# Module 133: Modern Agency Website

## Introduction
Agency websites showcase creative work through bold typography, full-bleed imagery, and immersive layouts. This module covers modern design patterns for creative agencies.

## Learning Objectives
- Build a full-screen hero with video/image background
- Create a portfolio showcase with lightbox
- Implement service cards with hover effects
- Design a team section with social links
- Use overlapping grid layouts for visual impact

## Key CSS Patterns
```css
.hero-full { min-height: 100vh; display: flex; align-items: center; justify-content: center; position: relative; }
.hero-bg { position: absolute; inset: 0; object-fit: cover; z-index: -1; }
.overlap-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }
.overlap-grid img:first-child { grid-column: 1 / 3; grid-row: 1; }
.overlap-grid img:last-child { grid-column: 2 / 3; grid-row: 1; margin-top: 30%; }
```

## Design Principles
- Bold typography with large headings
- Full-bleed sections with no container padding
- Asymmetric grid layouts for visual interest
- Monochrome + accent color palette
- Ample whitespace for breathing room

## Accessibility
- aria-label on decorative elements
- Captions for video backgrounds
- Keyboard-accessible lightbox
- Sufficient contrast for overlay text

## Summary Notes
- Agency sites should feel bold and confident
- Full-bleed layouts create immersive experiences
- Overlapping elements add depth
- Typography choices define the brand personality
- Portfolio should be the visual centerpiece
