# Mini Project: SaaS Marketing Landing Page

## Objective
Build a marketing landing page using CSS Grid areas that shifts from a 3-column desktop layout to mobile in one column. The page must use `grid-template-areas` for layout definition and responsive reordering.

## Context
You are building a landing page for a SaaS product. The page needs distinctive sections: a hero (with logo, headline, CTA), features section, testimonials, pricing cards, and footer. Using grid areas allows you to rearrange sections for mobile without changing HTML.

## Design Specifications

### Desktop Layout (3-column)
```
┌──────────────────────────────────────────────────────┐
│          Hero Section (full width)                    │
│    Logo | Headline | CTA Button                      │
├──────────────────────┬───────────────┬───────────────┤
│    Feature 1          │  Feature 2    │  Feature 3    │
├──────────────────────┴───────────────┴───────────────┤
│              Testimonials (full width)                 │
├──────────────────────┬───────────────────────────────┤
│    Pricing Card 1    │      Pricing Card 2            │
├──────────────────────┴───────────────────────────────┤
│                     Footer                            │
└──────────────────────────────────────────────────────┘
```

### Mobile Layout (1-column stacked)
```
┌──────────────────────┐
│        Hero           │
├──────────────────────┤
│     Feature 1         │
├──────────────────────┤
│     Feature 2         │
├──────────────────────┤
│     Feature 3         │
├──────────────────────┤
│    Testimonials       │
├──────────────────────┤
│  Pricing Card 1       │
├──────────────────────┤
│  Pricing Card 2       │
├──────────────────────┤
│       Footer           │
└──────────────────────┘
```

## Requirements

1. Define areas for: `hero`, `feature1`, `feature2`, `feature3`, `testimonials`, `price1`, `price2`, `footer`
2. Desktop: 3 columns with `grid-template-areas` matching the spec above
3. Tablet (≤900px): 2 columns — hero spans full, features in 2/1 split, testimonials full-width, pricing side-by-side, footer full
4. Mobile (≤600px): Single column all areas stacked
5. Use `gap: 24px` on desktop, `gap: 16px` on tablet, `gap: 12px` on mobile
6. Each section has a background color and padding
7. Hero section spans the full width at all breakpoints
8. Pricing section: 2 cards side-by-side on desktop/tablet, stacked on mobile

## Starter Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SaaS Landing Page</title>
    <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Segoe UI', system-ui, sans-serif; color: #333; line-height: 1.6; }
        
        .landing {
            display: grid;
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            /* Desktop: 3-column grid-template-areas */
            gap: 24px;
        }
        
        .hero { grid-area: hero; background: linear-gradient(135deg, #667eea, #764ba2); color: white; padding: 60px 40px; border-radius: 12px; text-align: center; }
        .hero h1 { font-size: 2.5em; margin-bottom: 16px; }
        .hero p { font-size: 1.2em; opacity: 0.9; margin-bottom: 24px; }
        .hero .cta { background: #fff; color: #667eea; padding: 12px 32px; border-radius: 6px; text-decoration: none; font-weight: bold; display: inline-block; }
        
        .feature { background: #f8f9fa; padding: 30px; border-radius: 10px; }
        .feature h3 { color: #667eea; margin-bottom: 8px; }
        
        .testimonials { grid-area: testimonials; background: #2d3436; color: white; padding: 40px; border-radius: 10px; text-align: center; font-style: italic; }
        
        .pricing { background: #fff; padding: 30px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); text-align: center; border: 2px solid transparent; }
        .pricing.featured { border-color: #667eea; }
        .pricing .price { font-size: 2em; color: #667eea; font-weight: bold; margin: 16px 0; }
        .pricing ul { list-style: none; margin: 16px 0; }
        .pricing li { padding: 8px 0; border-bottom: 1px solid #eee; }
        .pricing .btn { background: #667eea; color: white; padding: 12px 32px; border-radius: 6px; text-decoration: none; display: inline-block; margin-top: 16px; }
        
        .footer { grid-area: footer; text-align: center; padding: 30px; background: #2c3e50; color: #ccc; border-radius: 10px; }

        /* Apply grid-area to each section */
        /* TODO: Add grid-area assignments and responsive breakpoints */
    </style>
</head>
<body>
    <div class="landing">
        <div class="hero">
            <h1>Build Better Products</h1>
            <p>Our SaaS platform helps teams ship faster with powerful collaboration tools.</p>
            <a href="#" class="cta">Start Free Trial</a>
        </div>
        
        <div class="feature" style="grid-area: feature1;">
            <h3>🚀 Fast Performance</h3>
            <p>Lightning-fast infrastructure that scales with your business.</p>
        </div>
        <div class="feature" style="grid-area: feature2;">
            <h3>🔒 Enterprise Security</h3>
            <p>Bank-level encryption and compliance certifications.</p>
        </div>
        <div class="feature" style="grid-area: feature3;">
            <h3>📊 Real-time Analytics</h3>
            <p>Make data-driven decisions with live dashboards.</p>
        </div>
        
        <div class="testimonials">
            "This platform transformed our workflow. Highly recommended!"
        </div>
        
        <div class="pricing" style="grid-area: price1;">
            <h3>Starter</h3>
            <div class="price">$29/mo</div>
            <ul><li>5 users</li><li>10GB storage</li><li>Basic support</li></ul>
            <a href="#" class="btn">Get Started</a>
        </div>
        <div class="pricing featured" style="grid-area: price2;">
            <h3>Professional</h3>
            <div class="price">$79/mo</div>
            <ul><li>Unlimited users</li><li>100GB storage</li><li>Priority support</li></ul>
            <a href="#" class="btn">Get Started</a>
        </div>
        
        <div class="footer">
            <p>© 2025 SaaS Platform. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
```

## Tasks

1. Assign `grid-area` to each section: `hero`, `feature1`, `feature2`, `feature3`, `testimonials`, `price1`, `price2`, `footer`
2. Define desktop grid: 3 columns, `grid-template-areas` that places hero across all 3 columns, features in a row, testimonials full-width, pricing 2-column, footer full-width
3. Add tablet breakpoint (900px): 2 columns, features in 2+1 split, pricing remains side-by-side
4. Add mobile breakpoint (600px): 1 column, everything stacked
5. Responsive gap: 24px → 16px → 12px

## Bonus Challenges

- Add a CSS transition on gap when resizing
- Use `minmax()` in column definitions for extra responsiveness
- Add a sticky navigation bar as an additional grid area
- Add hover effects on pricing cards (scale transform)
- Use a 4th column on very wide screens (>1600px) for decorative side elements

## Evaluation Criteria

| Criteria | Points |
|----------|--------|
| All sections assigned grid-area correctly | 15 |
| Desktop grid-template-areas matches design spec | 20 |
| Tablet breakpoint redefines areas correctly | 20 |
| Mobile breakpoint stacks all sections | 15 |
| Responsive gap values (24/16/12) | 10 |
| Hero spans full width at all breakpoints | 10 |
| Clean, organized CSS with comments | 10 |

## Expected Output Description

The completed landing page should:
- Display a full-width hero with gradient background and CTA button on desktop
- Show 3 feature cards in a row below the hero
- Feature a full-width testimonial section spanning across all columns
- Present 2 pricing cards side-by-side with featured pricing highlighted
- Have a full-width footer
- Resize gracefully: 3 columns → 2 columns (tablet) → 1 column (mobile) with responsive gaps
- At all breakpoints, the hero remains the first visual element and navigation is logical
