# Mini Project: SaaS Landing Page with Div Layout

## Overview

Build a complete SaaS (Software as a Service) landing page using div elements for all structural components. The page must demonstrate proper div-based layout techniques including flexbox, grid, nesting, and responsive design.

## Requirements

1. **Navigation bar**: Div-based nav with logo and links, fixed at top
2. **Hero section**: Full-width hero with headline, subtext, and CTA
3. **Features grid**: 3-column grid of feature cards using divs
4. **Pricing section**: 3-tier pricing cards with header, body, footer divs
5. **Testimonials section**: Quote cards with avatar, text, and attribution
6. **FAQ section**: Accordion-style using divs with click handlers
7. **Footer**: Multi-column footer with link groups
8. **Responsive**: Mobile-first with breakpoints at 768px and 1024px

## Steps

### Step 1: HTML Structure
Create the skeleton with wrapper div, header div, main div sections, and footer div.

### Step 2: Navigation
Use a div with `display: flex` for nav items. Style with dark background, white text. Add `position: fixed` and `z-index`.

### Step 3: Hero Section
Create a div with large padding, gradient background, centered content. Style headline, subtext paragraph, and CTA button div.

### Step 4: Features Grid
Use a `display: grid` div with `grid-template-columns: repeat(3, 1fr)`. Each feature card is a nested div with icon, title, description.

### Step 5: Pricing Cards
Create a flex row of three pricing card divs. Each card has header (plan name, price), body (features list), and footer (CTA button) divs.

### Step 6: Testimonials
Use a flex/grid row of testimonial card divs. Each has an avatar div, quote text, and author name.

### Step 7: FAQ Section
Create div-based accordion items. Each item has a question div (clickable) and an answer div (initially hidden, shown on click).

### Step 8: Footer
Use a flex/grid div with columns for product links, company links, support links, and social media.

## Starter Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SaaS Landing Page</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Segoe UI', sans-serif; }
    /* Add your styles */
  </style>
</head>
<body>
  <div class="nav">Navbar</div>
  <div class="hero">Hero Section</div>
  <div class="features">Features Grid</div>
  <div class="pricing">Pricing Cards</div>
  <div class="testimonials">Testimonials</div>
  <div class="faq">FAQ Section</div>
  <div class="footer">Footer</div>
</body>
</html>
```

## Evaluation Criteria

- All structural elements use divs (no semantic elements required)
- Flexbox and/or grid are used correctly for layout
- Responsive design works at mobile, tablet, and desktop
- Div nesting is kept reasonable (≤4 levels)
- Classes are named meaningfully
- CSS is organized and efficient
- No empty divs used for spacing
