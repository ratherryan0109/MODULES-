# Module 125: Responsive Landing Page

## Introduction
A responsive landing page is the cornerstone of modern web design. This module teaches how to build a fully responsive landing page using HTML5 and CSS3, employing mobile-first design, Flexbox, Grid, and CSS custom properties.

## Learning Objectives
- Implement mobile-first responsive design using CSS Grid and Flexbox
- Use CSS custom properties for consistent theming
- Apply media queries for breakpoint adjustments
- Build accessible, semantic HTML structures
- Create visually engaging hero sections and CTAs

## Theory / Architecture
The landing page follows a single-page layout with distinct sections: Navigation, Hero, Features, Testimonials, Pricing, and Footer. The mobile-first approach starts with a single-column layout and progressively enhances to multi-column at larger viewports.

### Key CSS Concepts
- **CSS Custom Properties**: Define colors, fonts, spacing in `:root`
- **Flexbox**: Used for nav, card alignment, and centering
- **CSS Grid**: Powers the features and pricing grid sections
- **Media Queries**: Breakpoints at 640px, 768px, 1024px
- **Transitions/Animations**: Hover effects, fade-in on scroll

## Complete Code Walkthrough

### HTML Structure
The page uses `<header>`, `<main>`, `<section>`, and `<footer>` semantic elements. Each section has a container class for consistent max-width and padding.

```html
<header class="header">
  <nav class="nav container" aria-label="Main navigation">
    <a href="#" class="logo">Brand</a>
    <button class="nav-toggle" aria-label="Toggle menu">☰</button>
    <ul class="nav-menu">
      <li><a href="#features">Features</a></li>
      <li><a href="#pricing">Pricing</a></li>
      <li><a href="#contact" class="btn-primary">Get Started</a></li>
    </ul>
  </nav>
</header>
```

### CSS Architecture

**Base & Reset:**
```css
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
:root {
  --clr-primary: #6366f1;
  --clr-secondary: #8b5cf6;
  --clr-dark: #1e293b;
  --clr-light: #f8fafc;
  --clr-gray: #94a3b8;
  --ff-sans: 'Inter', system-ui, -apple-system, sans-serif;
  --fw-regular: 400;
  --fw-bold: 700;
  --fs-body: 1rem;
  --fs-h1: clamp(2.5rem, 5vw, 4rem);
  --spacing-lg: 4rem;
  --max-width: 1200px;
}
```

**Hero Section with Grid:**
```css
.hero {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  padding: var(--spacing-lg) 1rem;
  align-items: center;
}
@media (min-width: 768px) {
  .hero { grid-template-columns: 1fr 1fr; }
}
```

**Feature Cards with Flexbox:**
```css
.features-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}
.feature-card {
  flex: 1 1 300px;
  max-width: 380px;
  padding: 2rem;
  border-radius: 1rem;
  background: var(--clr-light);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}
```

## Responsive Approach
- **Mobile**: Single column, stacked navigation, full-width elements
- **Tablet (768px)**: Two-column layouts for hero/grids, visible nav
- **Desktop (1024px)**: Three-column pricing, expanded hero, max-width container
- **Large (1280px)**: Max-width cap with centered content

## Visual Explanation
The page uses a top-to-bottom flow: sticky header → hero with CTA → features row → testimonials carousel → pricing tiers → footer with links. Visual hierarchy is established through size (hero heading is largest), color (primary CTAs stand out), and spacing.

## Common Mistakes
- Forgetting `box-sizing: border-box`
- Not using `clamp()` for fluid typography
- Hardcoding pixel values instead of custom properties
- Missing focus styles for keyboard navigation
- Overlapping z-index without stacking context

## Best Practices
- Use `rem` for text, `em` for padding on buttons
- Always include `alt` text on images
- Use `prefers-reduced-motion` for animations
- Set `:focus-visible` outlines
- Validate HTML with W3C validator

## Accessibility
- ARIA labels on navigation toggle and icons
- Skip-to-content link
- Color contrast ratios of 4.5:1 minimum
- Focus indicators on all interactive elements
- Semantic heading hierarchy (h1 → h2 → h3)

## Performance
- Lazy load images below the fold
- Use modern image formats (WebP, AVIF)
- Minimize repaints with `transform` and `opacity` only
- Inline critical CSS, defer non-critical

## Browser Compatibility
- Works in all modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid supported since 2017
- Custom properties supported in IE11+ with fallbacks
- `clamp()` supported in all modern browsers

## Summary Notes
- Mobile-first ensures a solid base experience
- Custom properties enable rapid theming
- Grid + Flexbox combination handles any layout
- Accessibility is not optional — it's required
- Test on real devices, not just DevTools
