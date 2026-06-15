# CSS Cheatsheet — SaaS Website Design

## Feature Grid
```css
.features-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
.feature-card { background: white; padding: 2rem; border-radius: 0.75rem; border: 1px solid #e2e8f0; transition: all 0.3s ease; }
.feature-card:hover { transform: translateY(-4px); box-shadow: 0 20px 40px rgba(0,0,0,0.05); border-color: #6366f1; }
```

## Pricing Grid
```css
.pricing-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; align-items: start; }
.pricing-card.featured { transform: scale(1.05); border: 2px solid #6366f1; box-shadow: 0 20px 40px rgba(99,102,241,0.1); }
.pricing-card .price { font-size: 2.5rem; font-weight: 800; }
.pricing-card ul li::before { content: "✓"; color: #6366f1; font-weight: 700; }
```

## Hero Section
```css
.hero { padding: 8rem 0 5rem; background: linear-gradient(135deg, #eef2ff 0%, #f0fdfa 100%); }
.hero h1 { font-size: clamp(2rem, 5vw, 3.5rem); font-weight: 800; line-height: 1.15; }
.hero-stats { display: flex; gap: 3rem; margin-top: 3rem; padding-top: 2rem; border-top: 1px solid #e2e8f0; }
.hero-stats dt { font-size: 2rem; font-weight: 800; }
```

## Section Header
```css
.section-header { text-align: center; max-width: 650px; margin: 0 auto 3rem; }
.label { display: inline-block; font-size: 0.8rem; font-weight: 600; color: #6366f1; text-transform: uppercase; letter-spacing: 2px; }
```

## Navigation
```css
.header { position: fixed; top: 0; left: 0; right: 0; z-index: 100; background: rgba(255,255,255,0.9); backdrop-filter: blur(10px); border-bottom: 1px solid #e2e8f0; }
```

## Buttons
```css
.btn { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.75rem 1.75rem; border-radius: 0.5rem; font-weight: 600; border: none; cursor: pointer; transition: all 0.3s ease; }
.btn-primary:hover { transform: translateY(-2px); box-shadow: 0 10px 30px rgba(99,102,241,0.3); }
```

## CTA Section
```css
.cta { background: linear-gradient(135deg, #6366f1, #06b6d4); color: white; text-align: center; padding: 5rem 0; }
.cta h2 { font-size: clamp(1.75rem, 3vw, 2.5rem); font-weight: 700; }
```

## Testimonials
```css
.testimonials { background: #0f172a; color: white; }
.testimonial-card { background: #1e293b; padding: 2rem; border-radius: 0.75rem; border: 1px solid #334155; }
.testimonial-author { display: flex; align-items: center; gap: 1rem; }
```

## Responsive
```css
@media (max-width: 768px) { .hero-grid { grid-template-columns: 1fr; } .pricing-card.featured { transform: scale(1); } }
```
