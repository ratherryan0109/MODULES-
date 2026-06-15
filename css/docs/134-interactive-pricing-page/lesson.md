# Module 134: Interactive Pricing Page

## Introduction
Interactive pricing pages use toggle switches, range sliders, and live price calculations to help users compare plans. This module builds a fully interactive pricing page with CSS transitions and JavaScript interactivity.

## Learning Objectives
- Build a monthly/yearly billing toggle
- Create a pricing range slider with live updates
- Implement feature comparison tables
- Use CSS transitions for smooth price changes
- Design interactive toggle switches with pure CSS

## Architecture
The page has a header, billing toggle (monthly/yearly), three pricing cards that update in real-time, and a feature comparison table. JavaScript handles the toggle and slider interactions while CSS animates the transitions.

## Key CSS Patterns
```css
.toggle-switch { width: 48px; height: 24px; background: #e2e8f0; border-radius: 12px; cursor: pointer; position: relative; transition: background 0.3s; }
.toggle-switch.active { background: #6366f1; }
.toggle-switch::after { content: ''; position: absolute; top: 2px; left: 2px; width: 20px; height: 20px; background: white; border-radius: 50%; transition: transform 0.3s; }
.toggle-switch.active::after { transform: translateX(24px); }
.price { transition: opacity 0.3s, transform 0.3s; }
.price.updating { opacity: 0; transform: translateY(-10px); }
```

## Responsive Approach
- Mobile: Stacked pricing cards, full-width toggle
- Tablet: 2-column cards
- Desktop: 3-column cards with comparison table

## Accessibility
- role="switch" with aria-checked on toggle
- aria-live="polite" on price changes
- Focus management on range slider
- Keyboard support for toggle (Space/Enter)

## Summary Notes
- Toggle switches should clearly show active state
- Price updates should animate for smooth UX
- Mobile: Stack pricing vertically
- Comparison tables help users decide
- Use aria-live to announce price changes
