# Mini Project: Typography-Focused Blog Homepage

## Objective
Build a blog homepage where typography is the primary design element. The design should be clean, content-focused, with fluid typography that scales beautifully across all devices.

## Requirements

### Structure
- **Site title** with tagline
- **Featured article** card
- **Article grid** with 6 article cards
- **Categories** navigation
- **Newsletter** signup section
- **Footer** with minimal links

### Typography Specifications
1. **Fluid type system**: All headings and body text use `clamp()` for fluid sizing
2. **Modular scale**: Use a 1.25 (Major Third) or 1.333 (Perfect Fourth) scale
3. **Line length**: All text blocks constrained to optimal measure (65ch max)
4. **Line height**: 1.5 for body, 1.2 for headings
5. **Vertical rhythm**: Consistent spacing based on the line-height unit
6. **Letter spacing**: Subtle adjustments for headings (-0.02em) and all-caps (0.1em)
7. **Weight contrast**: Light weight (300) for body, bold (700) for headings
8. **Color contrast**: Meet WCAG AA (4.5:1) for all text
9. **Font strategy**: System font stack for performance
10. **Print styles**: Optimized typography for printed articles

### Technical Requirements
- All font sizes use `rem` units with `clamp()` for fluid scaling
- CSS custom properties for type scale values
- No `px` for font-sizes anywhere
- Responsive without media queries for typography
- Article cards show excerpt with proper line clamping

### Article Card Typography
```css
.card-title { font-size: clamp(1.125rem, 0.75rem + 1.5vw, 1.5rem); }
.card-excerpt { 
  font-size: 0.875rem; 
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
```

## Deliverables
- `index.html` with embedded CSS
- Page demonstrates all typography specifications

## Bonus Challenges
- Add a web font from Google Fonts with `font-display: swap`
- Implement a "typography theme switcher" (serif vs sans-serif)
- Create a reading progress indicator (fixed top bar)
- Add pull quotes with decorative styling
- Implement `initial-letter` for drop caps in articles

## Evaluation Criteria
- All text uses fluid sizing with clamp()
- Readable on all devices without zooming
- Proper vertical rhythm throughout
- WCAG AA color contrast on all text
- Clean, well-structured CSS with custom properties
- No horizontal scroll at any viewport
