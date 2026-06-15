# Mini Project: Theme-Aware Landing Page

## Objective
Build a landing page that responds to viewport size AND user preferences (color scheme, motion, contrast) using media queries.

## Requirements

### Layout
- Hero section with headline, subtext, and CTA
- Features section with 3-6 feature cards
- Testimonials carousel/section
- Pricing table
- Contact form
- Footer

### Media Query Requirements
1. **3 width breakpoints** using min-width (mobile-first)
2. **Dark mode support** via prefers-color-scheme
3. **Reduced motion** support honoring prefers-reduced-motion
4. **Print styles** for the pricing table
5. **Touch-friendly** styles for mobile (hover: none, pointer: coarse)
6. **Orientation-based** layout adjustment
7. **High contrast** support via prefers-contrast
8. **Responsive images** using resolution media queries
9. **PWA display-mode** styling (apple-mobile-web-app-capable)
10. **Reduced data** mode for images

### Technical Requirements
- CSS custom properties for theming
- Mobile-first CSS architecture
- Accessible focus states for keyboard users
- Smooth transitions that respect reduced motion
- Semantic HTML5 elements

## Deliverables
- `index.html` - the landing page
- `style.css` - all styles with media queries
- `print.css` (optional) - dedicated print stylesheet

## Bonus Challenges
- Add a manual dark/light toggle that overrides prefers-color-scheme
- Implement smooth scrolling only when motion is allowed
- Use `@media (hover: hover)` for hover effects and `@media (hover: none)` for touch effects
- Add a data-saver mode that replaces images with lower-res versions
- Use CSS `@import` with media queries for conditional loading

## Evaluation Criteria
- All 8 media features used correctly
- Dark mode is fully functional with smooth transitions
- Print styles hide unnecessary elements
- Touch targets are at least 44px on touch devices
- No horizontal scroll at any breakpoint
- Lighthouse accessibility score > 90
