# Module 126: Portfolio Website Design

## Introduction
A portfolio website showcases a creative professional's work. This module teaches how to build a visually stunning, responsive portfolio using modern CSS layout techniques, dark/light theming, and interactive project filtering.

## Learning Objectives
- Build a single-page portfolio with multiple sections
- Implement a dark/light theme toggle with CSS custom properties
- Create a project filtering system with CSS classes
- Use CSS Grid for masonry-like project galleries
- Implement smooth scroll navigation and animations

## Theory / Architecture
The portfolio uses a personal branding approach: Hero (name/title), About (bio + skills), Projects (filterable gallery), Experience (timeline), Testimonials, and Contact form. CSS custom properties power the theme system.

### Key CSS Concepts
- **Custom Properties**: Theme colors, spacing, typography scale
- **CSS Grid**: Project gallery with auto-fill and minmax
- **Flexbox**: Navigation, skill bars, timeline items
- **Filter System**: JavaScript toggle classes, CSS hide/show
- **Animations**: Entrance animations on scroll, hover effects

## Theming Architecture
```css
:root {
  --bg-primary: #ffffff;
  --text-primary: #1e293b;
  --accent: #8b5cf6;
}
[data-theme="dark"] {
  --bg-primary: #0f172a;
  --text-primary: #f1f5f9;
}
```

## Complete Code Walkthrough
The project gallery uses CSS Grid with `auto-fill` and `minmax()` for responsive columns without media queries. The filter system works by adding a `data-category` attribute and toggling a `show` class.

```css
.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}
.project-card {
  display: none; /* Hidden by default */
}
.project-card.show {
  display: block; /* Shown when filter matches */
  animation: fadeIn 0.4s ease;
}
```

## Responsive Approach
- **Mobile (320px)**: Single column, hamburger nav, stacked layout
- **Tablet (768px)**: Two-column project grid, side-by-side about
- **Desktop (1024px)**: Three-column gallery, multi-column footer
- **Dark/Light**: Theme toggle persists in localStorage

## Common Mistakes
- Not handling focus states in dark mode
- Forgetting transition on theme switch
- Over-nesting grid layouts
- Missing alt text on project images

## Best Practices
- Use `object-fit: cover` for project thumbnails
- Semantic HTML: `<figure>`, `<figcaption>`, `<time>` for dates
- Lazy load off-screen images
- Use CSS scroll-margin for anchor offsets

## Accessibility
- Theme toggle announces state changes
- Filter buttons use `aria-pressed`
- Project cards have `aria-label` with project name
- Skip link and focus management

## Performance
- Use `will-change: transform` sparingly
- Optimize images with WebP/AVIF
- Debounce scroll listeners
- CSS animations over JS where possible

## Summary Notes
- Custom properties make theming trivial
- Grid auto-fill creates responsive layouts without media queries
- Dark mode improves user experience and reduces eye strain
- Filter systems are simple with data attributes
- Always test contrast in both themes
