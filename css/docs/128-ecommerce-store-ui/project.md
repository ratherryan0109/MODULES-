# Project Specification: E-Commerce Store UI

## Overview
Build a responsive e-commerce store UI called "ShopFlow" with product grid, filters, cart drawer, and promotional hero section.

## Requirements
- Top announcement bar with promo message
- Sticky header with logo, search, nav, cart icon with badge
- Hero section with CTA
- Sidebar filters (category checkboxes, price range)
- Product grid (auto-fill, min 220px cards)
- Product cards with image, badge, title, rating, price, add-to-cart
- Slide-out cart drawer with item list, quantities, and total
- Footer with link columns

## CSS Features
- CSS Grid for product catalog and shop layout
- Sticky filters sidebar
- Fixed cart drawer with transform transition
- Aspect-ratio product images
- Rating stars with color accent
- Hover effects (card lift, image zoom, button shift)

## Accessibility
- aria-labels on icon buttons
- aria-live on cart count
- aria-expanded on cart toggle
- Focus management on cart open/close
- Keyboard navigation for cart item quantities
- Semantic product cards with <article>

## Project Structure
```
ecommerce/
├── index.html
├── css/style.css
├── js/cart.js
└── assets/images/
```

## Grading
| Criteria | Points |
|----------|--------|
| Product grid and layout | 25 |
| Cart drawer functionality | 20 |
| Filters sidebar | 15 |
| Responsive design | 15 |
| Accessibility | 15 |
| Code quality | 10 |
| **Total** | **100** |
