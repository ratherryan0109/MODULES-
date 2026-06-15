# Module 132: SaaS Website Design

## Introduction
SaaS websites need to communicate value quickly, build trust, and convert visitors. This module covers landing pages with feature sections, pricing tiers, testimonials, and CTAs.

## Learning Objectives
- Build a conversion-focused SaaS landing page
- Design feature highlight sections with icons
- Create pricing comparison tables
- Implement trust signals (testimonials, logos, stats)
- Use consistent brand theming

## Layout Architecture
SaaS pages follow a narrative flow: Hero → Problem/Solution → Features → Testimonials → Pricing → CTA → Footer. Each section uses CSS Grid for content arrangement.

## Key CSS Patterns
```css
.features-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
.pricing-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; align-items: start; }
.pricing-card.featured { transform: scale(1.05); border: 2px solid var(--primary); }
```

## Trust Signals
- Customer logo bar (grayscale, hover to full color)
- Testimonial cards with photos and quotes
- Statistics with animated counters
- Integration badges

## Responsive Approach
- Mobile: Single column, stacked sections
- Tablet: 2-column features, 2 pricing cards
- Desktop: 3-column features, full pricing table

## Accessibility
- Skip-to-content link
- ARIA labels on CTA buttons
- Focus styles on all interactive elements
- Color contrast for pricing tiers

## Summary Notes
- SaaS design focuses on conversion and trust
- Pricing comparison should be clear and scannable
- Social proof (testimonials, logos) builds credibility
- Feature sections should solve specific pain points
- CTAs should be prominent and action-oriented
