# CSS Cheatsheet — Modern Agency Website

## Full-Screen Hero
```css
.hero { min-height: 100vh; display: flex; flex-direction: column; justify-content: center; position: relative; }
.hero-bg { position: absolute; inset: 0; z-index: -1; }
.hero-bg img { width: 100%; height: 100%; object-fit: cover; filter: brightness(0.3); }
```

## Hero Typography
```css
.hero h1 { font-size: clamp(3rem, 10vw, 8rem); font-weight: 900; line-height: 0.95; letter-spacing: -3px; }
.hero-label { font-size: 0.8rem; text-transform: uppercase; letter-spacing: 4px; color: var(--accent); }
```

## Service Cards with Hover Slider
```css
.service-card { position: relative; overflow: hidden; padding: 3rem 2rem; border: 1px solid #222; }
.service-card::before { content: ''; position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: var(--accent); transition: transform 0.4s; z-index: 0; }
.service-card:hover::before { transform: translateX(100%); }
.service-card>* { position: relative; z-index: 1; }
```

## Portfolio Grid with Overlay
```css
.work-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem; }
.work-item { position: relative; aspect-ratio: 1; overflow: hidden; }
.work-item img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s; }
.work-item:hover img { transform: scale(1.05); }
.work-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%); display: flex; flex-direction: column; justify-content: flex-end; padding: 1.5rem; opacity: 0; transition: opacity 0.4s; }
.work-item:hover .work-overlay { opacity: 1; }
```

## Nav Underline Animation
```css
.nav-links a::after { content: ''; position: absolute; bottom: -4px; left: 0; width: 0; height: 2px; background: var(--accent); transition: width 0.4s; }
.nav-links a:hover::after { width: 100%; }
```

## Hero CTA
```css
.hero-cta { display: inline-flex; align-items: center; gap: 1rem; border-bottom: 2px solid var(--accent); padding-bottom: 0.5rem; transition: gap 0.4s; }
.hero-cta:hover { gap: 1.5rem; }
```

## Scroll Indicator
```css
.hero-scroll { position: absolute; bottom: 2rem; left: 50%; transform: translateX(-50%); animation: bounce 2s infinite; }
@keyframes bounce { 0%,100%{ transform: translateX(-50%) translateY(0); } 50%{ transform: translateX(-50%) translateY(10px); } }
```

## Stat Numbers
```css
.stats dt { font-size: 2.5rem; font-weight: 900; color: var(--accent); }
.stats dd { font-size: 0.8rem; color: var(--gray-600); text-transform: uppercase; letter-spacing: 1px; }
```
