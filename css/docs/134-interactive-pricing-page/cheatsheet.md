# CSS Cheatsheet — Interactive Pricing Page

## Toggle Switch
```css
.toggle { width: 52px; height: 28px; background: #e2e8f0; border-radius: 14px; cursor: pointer; position: relative; border: none; transition: background 0.3s; }
.toggle::after { content: ''; position: absolute; top: 3px; left: 3px; width: 22px; height: 22px; background: white; border-radius: 50%; transition: transform 0.3s; box-shadow: 0 2px 4px rgba(0,0,0,0.2); }
.toggle.active { background: #6366f1; }
.toggle.active::after { transform: translateX(24px); }
```

## Pricing Card
```css
.pricing-card { background: white; border: 1px solid #e2e8f0; border-radius: 1rem; padding: 2rem; display: flex; flex-direction: column; transition: all 0.3s; }
.pricing-card.featured { border: 2px solid #6366f1; box-shadow: 0 20px 40px rgba(99,102,241,0.1); transform: scale(1.02); }
.pricing-card .price { font-size: 3rem; font-weight: 800; transition: all 0.3s; }
```

## Price Animation
```css
@keyframes priceChange { 0% { opacity: 0; transform: translateY(-10px); } 100% { opacity: 1; transform: translateY(0); } }
.pricing-card .price.animate { animation: priceChange 0.3s ease; }
```

## Range Slider
```css
input[type="range"] { -webkit-appearance: none; width: 100%; max-width: 400px; height: 8px; border-radius: 4px; background: #e2e8f0; outline: none; }
input[type="range"]::-webkit-slider-thumb { -webkit-appearance: none; width: 24px; height: 24px; border-radius: 50%; background: #6366f1; cursor: pointer; box-shadow: 0 2px 6px rgba(99,102,241,0.3); }
```

## Pricing Grid
```css
.pricing-grid { display: grid; grid-template-columns: 1fr; gap: 1.5rem; }
@media (min-width: 640px) { .pricing-grid { grid-template-columns: 1fr 1fr; } }
@media (min-width: 900px) { .pricing-grid { grid-template-columns: 1fr 1fr 1fr; } }
```

## Feature List
```css
.pricing-card ul li { padding: 0.5rem 0; border-bottom: 1px solid #e2e8f0; display: flex; align-items: center; gap: 0.5rem; font-size: 0.875rem; }
.pricing-card ul li::before { content: "✓"; color: #6366f1; font-weight: 700; }
.pricing-card ul li.disabled { opacity: 0.5; }
.pricing-card ul li.disabled::before { content: "✗"; color: #94a3b8; }
```

## Billing Toggle Group
```css
.billing-toggle { display: flex; align-items: center; justify-content: center; gap: 1rem; margin-bottom: 3rem; }
.billing-label { font-weight: 500; color: #64748b; transition: color 0.3s; }
.billing-label.active { color: #0f172a; }
```

## Save Badge
```css
.save-badge { display: inline-block; background: #dcfce7; color: #166534; font-size: 0.8rem; padding: 0.25rem 0.75rem; border-radius: 100px; font-weight: 600; }
```
