# Mini Project: Photography Portfolio Gallery

## Objective
Build a responsive photography portfolio with a card-based gallery that showcases photos in various layouts, from single-column mobile to multi-column desktop with lightbox preview.

## Requirements

### Layout Sections
1. **Header** with photographer name, tagline, and navigation
2. **Featured work** - Large hero card showcasing best photo
3. **Gallery grid** - 12-15 photo cards in responsive grid
4. **Categories** - Card-based category filter
5. **About/Bio** card with headshot
6. **Footer** with social links

### Card Types
1. **Hero card**: Full-width, horizontal on desktop with overlay text
2. **Gallery cards**: Square (1:1) aspect ratio, hover zoom effect
3. **Category cards**: Different aspect ratio per category (landscape, portrait, macro)
4. **Bio card**: Image left, text right on desktop
5. **Featured set**: 2 cards side by side, one larger

### Responsive Behavior
- **Mobile (< 640px)**: 1 column, full-width cards
- **Tablet (640-1024px)**: 2 columns, some cards span both
- **Desktop (> 1024px)**: 3-4 columns with varied spans

### Technical Requirements
1. Auto-fit grid for the main gallery
2. Featured card uses `grid-column: 1 / -1`
3. Cards use `object-fit: cover` with `aspect-ratio`
4. Hover effects respect `prefers-reduced-motion`
5. Container queries for card content adaptation
6. All images use `loading="lazy"` (except hero)
7. Cards use `<article>` element
8. Keyboard accessible card links
9. Color overlay on card hover for visual feedback
10. CSS custom properties for card spacing and colors

## Deliverables
- `index.html` - portfolio page
- Photos can be placeholder images or generated colors

## Bonus Challenges
- Implement a CSS-only lightbox for card images
- Add a "load more" button that reveals additional cards
- Create a masonry-style layout for mixed card heights
- Add category filter with CSS (hidden radio buttons)
- Implement a slideshow hero card with CSS animations

## Evaluation Criteria
- Gallery uses auto-fit grid with appropriate minmax
- Featured card spans full width correctly
- Cards are equal height with footers aligned
- Images maintain aspect ratio without distortion
- Hover effects are smooth and performant
- Layout works at all breakpoints without horizontal scroll
- Cards are accessible with keyboard navigation
- Code uses semantic HTML and CSS custom properties
