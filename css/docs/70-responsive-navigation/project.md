# Mini Project: E-Commerce Website Header

## Objective
Build a fully responsive e-commerce website header with complex navigation patterns including multi-level categories, search, cart, and user account menu.

## Requirements

### Header Components
1. **Logo** (left side)
2. **Main navigation** with 5+ links, some with dropdown subcategories
3. **Search bar** (expandable on mobile, always visible on desktop)
4. **Cart icon** with item count badge
5. **User account** menu with dropdown (login/signup/my account)
6. **Mobile hamburger** or off-canvas toggle

### Navigation Patterns
- **Desktop (> 1024px)**: Full horizontal nav with hover dropdowns, search bar visible, cart and user icons
- **Tablet (768-1024px)**: Condensed nav with maybe Priority+ pattern, search icon
- **Mobile (< 768px)**: Hamburger menu (CSS-only) or off-canvas, bottom cart icon, search expandable

### Technical Requirements
1. Accessible with ARIA attributes
2. CSS-only hamburger (no JS for toggle)
3. Sticky header on scroll
4. Dropdowns work with keyboard (focus-within)
5. Touch targets ≥ 44x44px
6. Cart badge positioned absolutely
7. Search form with proper label
8. Current page indicator (aria-current)
9. Skip to content link
10. Respect prefers-reduced-motion

### Accessibility Requirements
- `<nav>` with aria-label="Main navigation"
- aria-current on active links
- aria-expanded on dropdown toggles
- aria-label on hamburger button
- Visible focus indicators
- Keyboard navigation support
- Skip to main content link

## Deliverables
- `index.html` with all components
- `style.css` for the header only

## Bonus Challenges
- Add a mini cart dropdown showing recent items
- Implement a search suggestions dropdown with CSS
- Add secondary utility navigation (help, language, currency)
- Create a sticky mobile bottom toolbar with cart, search, account
- Implement breadcrumb navigation for product pages

## Evaluation Criteria
- All header components present and functional
- Navigation works at all 3 breakpoints
- ARIA attributes correctly implemented
- Touch targets meet 44x44px minimum
- Dropdowns work with both mouse and keyboard
- CSS-only mobile toggle works
- Sticky header functions correctly
- Code is clean and well-organized
