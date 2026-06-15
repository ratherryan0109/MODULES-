# Mini Project: E-Commerce Product Page with Aside

## Overview

Build a product detail page for an e-commerce store that effectively uses the `<aside>` element for supplementary product information, related products, customer reviews summary, and promotional content.

## Requirements

### Main Content (`<main>`)
1. Product images (main image + thumbnails)
2. Product title, description, price, rating
3. Add to Cart form with quantity selector and size/color options
4. Product specifications table
5. Customer reviews section

### Aside Content (`<aside>`)
1. **Related Products** — Grid of 3-4 related product cards
2. **Promotional Banner** — Special offer or discount code
3. **Recently Viewed** — Links to previously viewed products
4. **Customer Support** — Quick contact links

### Accessibility
1. `<aside>` must have `aria-label="Supplementary information"`
2. All images must have alt text
3. Form inputs must have labels
4. Skip navigation link
5. Proper heading hierarchy
6. Focus management on interactive elements

### CSS Requirements
1. Two-column layout with `<main>` and `<aside>` using CSS Grid
2. `<aside>` should be 300px wide on desktop
3. On mobile (< 768px), `<aside>` should stack below `<main>`
4. Style related product cards with borders and hover effects
5. Style the promotional banner distinctly
6. Use a professional color scheme (minimalist e-commerce style)

## Steps

1. Create HTML boilerplate with skip link
2. Build header with site navigation
3. Create main product content (images, info, form, specs, reviews)
4. Build the aside with all supplementary sections
5. Create the footer
6. Write CSS with responsive grid layout
7. Test with screen reader
8. Validate HTML

## Expected Output

A professional product page with:
- Product details in the main area
- Related products, promotions, and support in the sidebar
- Responsive layout
- Accessible form controls
- Clean e-commerce aesthetic

## Submission Checklist

- [ ] `<main>` with product details
- [ ] `<aside>` with 3+ supplementary sections
- [ ] `<aside>` has `aria-label`
- [ ] CSS Grid two-column layout
- [ ] Responsive (stacked on mobile)
- [ ] Form with labeled inputs
- [ ] All images have alt text
- [ ] Skip navigation link
- [ ] Valid HTML5
- [ ] Professional styling
