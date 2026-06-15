# Project Specification: Interactive Pricing Page

## Overview
Build an interactive pricing page called "FlexiPlans" with monthly/yearly toggle, pricing cards, user count slider, and feature comparison table.

## Requirements
- Header with title and description
- Billing toggle (monthly/yearly) with ARIA switch
- 3 pricing cards (Starter, Professional featured, Enterprise)
- Prices update via JavaScript on toggle (animate transition)
- Yearly savings calculation and display
- User count range slider with live total
- Feature comparison table
- Responsive grid layout

## CSS Features
- CSS-only toggle switch with pseudo-element
- Price change animation (opacity + translateY)
- Grid layout for pricing cards (1 → 2 → 3 columns)
- Custom range slider styling
- Feature list with check/cross pseudo-elements
- Featured plan with scale and border

## Accessibility
- role='switch' with aria-checked on toggle
- aria-live='polite' on price updates
- aria-valuemin/max/now on range slider
- Focus-visible on all interactive elements
- Semantic HTML and heading hierarchy

## Project Structure
```
pricing/
├── index.html
├── css/style.css
├── js/pricing.js
└── assets/
```

## Grading
| Criteria | Points |
|----------|--------|
| Billing toggle and price switching | 25 |
| Pricing card design | 20 |
| Range slider and live total | 20 |
| Feature comparison table | 15 |
| Accessibility | 10 |
| Responsive design | 10 |
| **Total** | **100** |
