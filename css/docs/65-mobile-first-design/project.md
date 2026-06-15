# Mini Project: Mobile-First Blog Platform

## Objective
Build a mobile-first blog platform that prioritizes readability on phones and enhances to a full reading experience on tablets and desktops.

## Requirements

### Pages
1. **Blog home** - List of article cards with featured post
2. **Article page** - Full article with typography, author info, comments
3. **Category page** - Filtered articles by topic

### Mobile-First Specifications
- **Base CSS (0-639px)**: Single column, full-width content, large touch targets
- **Tablet (640px-1023px)**: 2-column layout for article list, sidebar for article page
- **Desktop (1024px+)**: 3-column grid for home, sticky sidebar, larger typography

### Content Features
- Article cards with image, title, excerpt, date, read time
- Featured article with larger hero
- Author bio section
- Comments section with form
- Category tags with filtering
- Search bar (collapsible on mobile)

### Technical Requirements
1. Mobile-first CSS only (no desktop-first media queries)
2. CSS custom properties for all colors and spacing
3. Fluid typography with clamp()
4. Responsive images with srcset and picture
5. Accessible navigation with skip link
6. Print styles for articles
7. Dark mode via prefers-color-scheme
8. Reduced motion support
9. Touch-friendly comment form
10. No external CSS frameworks

## Deliverables
- `index.html` with embedded CSS (or linked style.css)
- All content is placeholder/wireframe quality

## Bonus Challenges
- Implement reading progress indicator (scroll bar at top)
- Add sticky header on scroll (mobile-friendly height)
- Create a "save for later" feature with localStorage
- Add smooth scroll to comments
- Implement image lightbox for article images

## Evaluation Criteria
- Truly mobile-first: base CSS has no media queries, only mobile styles
- Typography is readable without zoom on mobile
- Touch targets meet 44x44px minimum
- No media queries wider than the largest enhancement
- Lighthouse mobile score > 85
- Internet Explorer is not required to be supported
