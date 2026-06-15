# Landing Page Project — Cheatsheet

## Essential Landing Page Sections

| Section | Purpose | Key Elements |
|---------|---------|--------------|
| Header | Navigation & branding | Logo, nav links, CTA button, sticky position |
| Hero | First impression, value prop | Headline, subheadline, primary CTA, background |
| Features | Product benefits | Grid of cards with icons, titles, descriptions |
| Testimonials | Social proof | Quotes, customer names, avatars, companies |
| Pricing | Plan comparison | Tiered cards, price, feature list, CTA per tier |
| CTA Section | Final conversion push | Big heading, email form, action button |
| FAQ | Address objections | Accordion questions/answers |
| Footer | Links & legal | Company info, links, copyright, social icons |

## HTML Structure Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Product Name - Value Proposition</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <nav>
            <a href="#" class="logo">Brand</a>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact" class="cta">Get Started</a>
        </nav>
    </header>

    <section class="hero">
        <h1>Main Headline</h1>
        <p>Supporting subheadline</p>
        <a href="#" class="btn-primary">Call to Action</a>
    </section>

    <section id="features">
        <div class="feature-card">
            <div class="icon">⚡</div>
            <h3>Feature Title</h3>
            <p>Feature description</p>
        </div>
        <!-- Repeat for each feature -->
    </section>

    <section id="pricing">
        <div class="pricing-card">
            <h3>Plan Name</h3>
            <div class="price">$29/mo</div>
            <ul>
                <li>Feature 1</li>
                <li>Feature 2</li>
            </ul>
            <a href="#" class="btn">Choose Plan</a>
        </div>
        <!-- Repeat for each tier -->
    </section>

    <section id="contact" class="cta-section">
        <h2>Final CTA Heading</h2>
        <form>
            <input type="email" placeholder="Your email">
            <button type="submit">Subscribe</button>
        </form>
    </section>

    <footer>
        <p>&copy; 2026 Company Name</p>
    </footer>
</body>
</html>
```

## CSS Quick Reference

### Sticky Header
```css
header { position: fixed; top: 0; width: 100%; z-index: 1000; }
```

### CSS Grid Layouts
```css
/* 3-column grid */
.features-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; }

/* Pricing grid */
.pricing-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 25px; align-items: start; }

/* Responsive breakpoints */
@media (max-width: 768px) {
    .features-grid { grid-template-columns: 1fr; }
}
```

### Card Hover Effect
```css
.card { transition: transform 0.3s, box-shadow 0.3s; }
.card:hover { transform: translateY(-8px); box-shadow: 0 15px 35px rgba(0,0,0,0.1); }
```

### Gradient Background
```css
.hero { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
```

### Button Styles
```css
.btn-primary { background: white; color: #667eea; padding: 16px 40px; border-radius: 30px; text-decoration: none; font-weight: 600; display: inline-block; }
.btn-secondary { background: transparent; color: white; padding: 16px 40px; border-radius: 30px; border: 2px solid rgba(255,255,255,0.5); }
```

### Flexbox Centering
```css
.hero { display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; min-height: 80vh; }
```

## JavaScript Quick Reference

### Hamburger Menu
```js
function toggleMenu() { document.querySelector('nav').classList.toggle('open'); }
```

### FAQ Accordion (Toggle)
```js
document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => q.parentElement.classList.toggle('active'));
});
```

### Smooth Scrolling
```css
html { scroll-behavior: smooth; }
```

### Scroll Progress Bar
```js
window.addEventListener('scroll', () => {
    const scroll = window.scrollY;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    document.getElementById('progress').style.width = (scroll / height * 100) + '%';
});
```

## Key Reminders

- One primary CTA per landing page
- Keep hero headline clear and benefit-focused
- Use social proof to build trust
- Minimize form fields
- Mobile-first responsive design
- Fast loading (optimized images, minimal CSS/JS)
- High contrast for CTAs (color contrast ratio 4.5:1)
- Semantic HTML for accessibility
- Test on real devices
- Validate HTML with W3C Validator
