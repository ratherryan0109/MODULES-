# Module 128: E-Commerce Store UI

## Introduction
An e-commerce UI requires product displays, filtering, cart functionality, and a streamlined checkout. This module builds a complete online store front-end using CSS Grid, Flexbox, and interactive components.

## Learning Objectives
- Design product catalog grids with filtering
- Build a shopping cart sidebar with CSS transitions
- Implement product cards with hover states
- Create responsive navigation with mega-menu
- Style form elements for checkout

## Layout Architecture
The store uses a two-tier header (top bar + main nav), a hero banner, product grid with sidebar filters, and a slide-out cart drawer. CSS Grid powers the product grid while Flexbox handles the header and cart items.

## Key CSS Concepts
- **CSS Grid**: Product catalog with `auto-fill` and `minmax(250px, 1fr)`
- **Sticky Sidebar**: Filter panel stays visible during scroll
- **Cart Drawer**: Fixed position panel with transform animation
- **Badges**: Discount badges with absolute positioning
- **Rating Stars**: Display ratings with color-coded stars

## Responsive Approach
- Mobile: Single column products, hamburger menu, full-width cart drawer
- Tablet: 2-column grid, visible filters toggle
- Desktop: 3-4 column grid, persistent sidebar filters

## Common Mistakes
- Poor image aspect ratio management
- Missing alt text on product images
- Not adding focus styles to cart buttons
- Forgetting to handle empty cart states

## Accessibility
- aria-labels on all action buttons (add to cart, wishlist)
- aria-live region for cart count updates
- Focus management when cart opens/closes
- Keyboard navigable product grid
- Form validation messages with ARIA

## Summary Notes
- Consistent product card design builds trust
- Cart should be accessible from any page
- Use CSS transitions for cart open/close
- Always show product availability and price clearly
- Mobile-first ensures shopping on any device
