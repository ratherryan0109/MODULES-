# Mini Project: Complete Responsive Business Website

## Project Overview

Build a complete responsive website for "GreenLeaf Landscaping" - a landscaping business. The site must be fully responsive using mobile-first methodology, with a minimum of 3 breakpoints. It should score 90+ on Lighthouse Mobile Performance.

## Learning Objectives

- Implement mobile-first responsive design
- Use CSS Grid and Flexbox for responsive layouts
- Create responsive navigation with hamburger menu
- Optimize images for different screen sizes
- Test and debug responsive behavior

## Requirements

### Pages (Single Page Sections)
1. **Header** - Logo, responsive nav (Home, Services, Gallery, About, Contact)
2. **Hero** - Full-width background, CTA button
3. **Services** - 6 service cards in responsive grid
4. **Gallery** - Grid of landscaping project photos
5. **Testimonials** - Customer reviews in carousel
6. **About** - Company info with stats
7. **Contact** - Form + contact info
8. **Footer** - Links, social, copyright

### Breakpoints
- Mobile: base (320px+)
- Tablet: 768px+
- Desktop: 1024px+
- Wide: 1200px+

### Technical Requirements
- Mobile-first CSS
- Hamburger navigation (JavaScript toggle)
- Responsive images with srcset
- CSS Grid for layouts
- Flexbox for component alignment
- Touch-friendly targets (44px minimum)
- Accessible (skip link, ARIA, semantic HTML)
- Performance optimized (lazy loading, defer JS)

## Implementation Steps

### Step 1: HTML Structure
Create semantic HTML with all sections.

### Step 2: Mobile-First CSS
Start with mobile styles (single column, hamburger nav).

### Step 3: Tablet Styles (768px)
Two-column grids, visible navigation.

### Step 4: Desktop Styles (1024px+)
Three-column grids, full navigation, larger typography.

### Step 5: Navigation JavaScript
Implement hamburger menu toggle with ARIA attributes.

### Step 6: Images
Use WebP format with responsive srcset and lazy loading.

### Step 7: Testing
Test on real devices and emulators.

## Complete Project Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>GreenLeaf Landscaping - Professional Garden Services</title>
  <meta name="description" content="Professional landscaping services in your area. Lawn care, garden design, tree services, and more.">
  <link rel="canonical" href="https://greenleaf.example.com">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <style>
    /* Reset */
    *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
    
    /* Variables */
    :root {
      --primary: #2d6a4f;
      --primary-light: #40916c;
      --accent: #95d5b2;
      --dark: #1b4332;
      --text: #333;
      --text-light: #666;
      --bg: #f8f9fa;
      --white: #fff;
      --shadow: 0 2px 15px rgba(0,0,0,0.1);
      --radius: 8px;
      --transition: 0.3s ease;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      line-height: 1.6;
      color: var(--text);
      background: var(--bg);
    }
    
    .container { width: 100%; max-width: 1100px; margin: 0 auto; padding: 0 20px; }
    
    /* Typography */
    h1 { font-size: clamp(2rem, 5vw, 3.5rem); line-height: 1.2; }
    h2 { font-size: clamp(1.5rem, 3vw, 2.5rem); margin-bottom: 2rem; text-align: center; }
    h3 { font-size: 1.25rem; margin-bottom: 0.5rem; }
    
    /* Buttons */
    .btn { display: inline-block; padding: 0.75rem 2rem; border-radius: var(--radius); text-decoration: none; font-weight: 600; border: none; cursor: pointer; transition: var(--transition); font-size: 1rem; min-height: 44px; }
    .btn--primary { background: var(--primary); color: var(--white); }
    .btn--primary:hover { background: var(--dark); transform: translateY(-2px); }
    .btn--outline { background: transparent; color: var(--white); border: 2px solid var(--white); }
    .btn--outline:hover { background: var(--white); color: var(--primary); }
    
    /* Header */
    .header { background: var(--white); box-shadow: 0 2px 10px rgba(0,0,0,0.05); position: sticky; top: 0; z-index: 100; }
    .header__inner { display: flex; justify-content: space-between; align-items: center; padding: 1rem 0; }
    .header__logo { font-size: 1.5rem; font-weight: bold; color: var(--primary); text-decoration: none; }
    .header__logo span { color: var(--dark); }
    
    .nav__toggle { background: none; border: none; font-size: 1.5rem; cursor: pointer; padding: 0.5rem; color: var(--text); min-width: 44px; }
    .nav__list { display: none; list-style: none; flex-direction: column; position: absolute; top: 100%; left: 0; right: 0; background: var(--white); padding: 1rem; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }
    .nav__list--open { display: flex; }
    .nav__list a { display: block; padding: 0.75rem 0; color: var(--text); text-decoration: none; border-bottom: 1px solid #eee; min-height: 44px; display: flex; align-items: center; }
    .nav__list a:hover { color: var(--primary); }
    
    /* Hero */
    .hero { background: linear-gradient(rgba(27,67,50,0.8), rgba(27,67,50,0.8)), url('https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1600'); background-size: cover; background-position: center; color: var(--white); text-align: center; padding: 6rem 0; }
    .hero__title { margin-bottom: 1rem; }
    .hero__text { font-size: clamp(1rem, 2.5vw, 1.25rem); margin-bottom: 2rem; max-width: 600px; margin-left: auto; margin-right: auto; }
    .hero__cta { display: flex; flex-direction: column; gap: 1rem; align-items: center; }
    
    /* Services */
    .services { padding: 4rem 0; }
    .services__grid { display: grid; grid-template-columns: 1fr; gap: 1.5rem; }
    .service-card { background: var(--white); padding: 2rem; border-radius: var(--radius); box-shadow: var(--shadow); text-align: center; transition: var(--transition); }
    .service-card:hover { transform: translateY(-5px); }
    .service-card__icon { font-size: 2.5rem; margin-bottom: 1rem; }
    .service-card__text { color: var(--text-light); }
    
    /* Gallery */
    .gallery { padding: 4rem 0; background: var(--white); }
    .gallery__grid { display: grid; grid-template-columns: 1fr; gap: 1rem; }
    .gallery__grid img { width: 100%; height: 250px; object-fit: cover; border-radius: var(--radius); }
    
    /* Contact */
    .contact { padding: 4rem 0; }
    .contact__grid { display: grid; grid-template-columns: 1fr; gap: 2rem; }
    .contact__form { background: var(--white); padding: 2rem; border-radius: var(--radius); box-shadow: var(--shadow); }
    .form__group { margin-bottom: 1.5rem; }
    .form__label { display: block; margin-bottom: 0.5rem; font-weight: 600; }
    .form__input, .form__textarea { width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px; font-size: 1rem; min-height: 44px; }
    .form__textarea { min-height: 120px; resize: vertical; }
    
    /* Footer */
    .footer { background: var(--dark); color: var(--white); text-align: center; padding: 2rem 0; }
    .footer__links a { color: var(--accent); text-decoration: none; margin: 0 0.5rem; }
    
    /* Media Queries */
    @media (min-width: 768px) {
      .nav__toggle { display: none; }
      .nav__list { display: flex; flex-direction: row; position: static; padding: 0; box-shadow: none; gap: 2rem; }
      .nav__list a { border: none; padding: 0; }
      .hero__cta { flex-direction: row; justify-content: center; }
      .services__grid { grid-template-columns: repeat(2, 1fr); }
      .gallery__grid { grid-template-columns: repeat(2, 1fr); }
      .contact__grid { grid-template-columns: 1fr 1fr; }
    }
    
    @media (min-width: 1024px) {
      .services__grid { grid-template-columns: repeat(3, 1fr); }
      .gallery__grid { grid-template-columns: repeat(3, 1fr); }
      .hero { padding: 8rem 0; }
    }
  </style>
</head>
<body>

<a href="#main-content" class="skip-link" style="position:absolute;top:-100px;left:0;background:var(--primary);color:white;padding:0.5rem 1rem;z-index:1000;">&darr; Skip to main content</a>
<a href="#main-content" class="skip-link" style="position:absolute;top:-100px;left:0;background:var(--primary);color:white;padding:0.5rem 1rem;z-index:1000;">Skip to main content</a>

<header class="header">
  <div class="container header__inner">
    <a href="/" class="header__logo">Green<span>Leaf</span></a>
    <nav aria-label="Main navigation">
      <button class="nav__toggle" id="nav-toggle" aria-label="Toggle menu" aria-expanded="false" aria-controls="nav-list">☰</button>
      <ul class="nav__list" id="nav-list" role="list">
        <li><a href="#services">Services</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </div>
</header>

<main id="main-content">
  <section class="hero">
    <div class="container">
      <h1 class="hero__title">Your Outdoor Oasis Awaits</h1>
      <p class="hero__text">Professional landscaping, garden design, and lawn care services to transform your outdoor space into a beautiful retreat.</p>
      <div class="hero__cta">
        <a href="#contact" class="btn btn--primary">Get a Free Quote</a>
        <a href="#services" class="btn btn--outline">Our Services</a>
      </div>
    </div>
  </section>

  <section id="services" class="services">
    <div class="container">
      <h2>Our Services</h2>
      <div class="services__grid">
        <div class="service-card"><div class="service-card__icon">🌿</div><h3>Lawn Care</h3><p class="service-card__text">Regular mowing, fertilization, and weed control for a pristine lawn.</p></div>
        <div class="service-card"><div class="service-card__icon">🌺</div><h3>Garden Design</h3><p class="service-card__text">Custom garden layouts with native plants and sustainable design.</p></div>
        <div class="service-card"><div class="service-card__icon">🌳</div><h3>Tree Services</h3><p class="service-card__text">Pruning, removal, and health assessment for all tree species.</p></div>
        <div class="service-card"><div class="service-card__icon">💧</div><h3>Irrigation</h3><p class="service-card__text">Smart watering systems that conserve water while keeping plants healthy.</p></div>
        <div class="service-card"><div class="service-card__icon">🪨</div><h3>Hardscaping</h3><p class="service-card__text">Patios, walkways, retaining walls, and outdoor living spaces.</p></div>
        <div class="service-card"><div class="service-card__icon">🌙</div><h3>Landscape Lighting</h3><p class="service-card__text">Ambient and accent lighting to showcase your landscape at night.</p></div>
      </div>
    </div>
  </section>

  <section id="gallery" class="gallery">
    <div class="container">
      <h2>Our Projects</h2>
      <div class="gallery__grid">
        <img src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=250&fit=crop" alt="Beautiful garden with flowers and pathway" loading="lazy">
        <img src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=250&fit=crop" alt="Modern patio with outdoor furniture" loading="lazy">
        <img src="https://images.unsplash.com/photo-1596477595433-6de5b6c0d74f?w=400&h=250&fit=crop" alt="Lush green lawn with trees" loading="lazy">
        <img src="https://images.unsplash.com/photo-1560749003-f4b1e17e2dff?w=400&h=250&fit=crop" alt="Stone walkway through garden" loading="lazy">
        <img src="https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&h=250&fit=crop" alt="Night landscape with accent lighting" loading="lazy">
        <img src="https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=400&h=250&fit=crop" alt="Water feature in garden" loading="lazy">
      </div>
    </div>
  </section>

  <section id="about" class="services" style="background:var(--white);">
    <div class="container">
      <h2>Why Choose GreenLeaf?</h2>
      <div style="display:grid;grid-template-columns:1fr;gap:2rem;text-align:center;max-width:800px;margin:0 auto;">
        <p style="font-size:1.1rem;color:var(--text-light);">With over 15 years of experience, GreenLeaf Landscaping has transformed hundreds of outdoor spaces across the region. Our team of certified horticulturists and landscape designers is dedicated to creating sustainable, beautiful environments.</p>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:2rem;">
          <div><h3 style="font-size:2rem;color:var(--primary);">500+</h3><p>Projects Completed</p></div>
          <div><h3 style="font-size:2rem;color:var(--primary);">15+</h3><p>Years Experience</p></div>
          <div><h3 style="font-size:2rem;color:var(--primary);">98%</h3><p>Satisfied Clients</p></div>
        </div>
      </div>
    </div>
  </section>

  <section id="contact" class="contact">
    <div class="container">
      <h2>Get Your Free Quote</h2>
      <div class="contact__grid">
        <form class="contact__form" novalidate>
          <div class="form__group">
            <label for="name" class="form__label">Name</label>
            <input type="text" id="name" class="form__input" name="name" required>
          </div>
          <div class="form__group">
            <label for="email" class="form__label">Email</label>
            <input type="email" id="email" class="form__input" name="email" required>
          </div>
          <div class="form__group">
            <label for="phone" class="form__label">Phone</label>
            <input type="tel" id="phone" class="form__input" name="phone">
          </div>
          <div class="form__group">
            <label for="message" class="form__label">Tell us about your project</label>
            <textarea id="message" class="form__textarea" name="message" required></textarea>
          </div>
          <button type="submit" class="btn btn--primary">Send Request</button>
        </form>
        <div style="padding:2rem;">
          <h3>Contact Info</h3>
          <p style="margin:1rem 0;color:var(--text-light);">📍 123 Garden Street, Springfield</p>
          <p style="margin:1rem 0;color:var(--text-light);">📞 (555) 123-4567</p>
          <p style="margin:1rem 0;color:var(--text-light);">✉️ hello@greenleaf.example.com</p>
          <p style="margin:1rem 0;color:var(--text-light);">🕐 Mon-Sat: 7AM - 7PM</p>
        </div>
      </div>
    </div>
  </section>
</main>

<footer class="footer">
  <div class="container">
    <div class="footer__links" style="margin-bottom:1rem;">
      <a href="#">Facebook</a>
      <a href="#">Instagram</a>
      <a href="#">Pinterest</a>
    </div>
    <p>&copy; 2026 GreenLeaf Landscaping. All rights reserved.</p>
  </div>
</footer>

<script>
  document.getElementById('nav-toggle').addEventListener('click', function() {
    const nav = document.getElementById('nav-list');
    const expanded = nav.classList.toggle('nav__list--open');
    this.setAttribute('aria-expanded', expanded);
  });
</script>
</body>
</html>
```

## Testing Checklist

- [ ] Mobile: single column, hamburger nav works
- [ ] Tablet (768px+): two columns, horizontal nav
- [ ] Desktop (1024px+): three columns, full layout
- [ ] No horizontal scroll on any device
- [ ] All touch targets ≥ 44x44px
- [ ] Images scale correctly, no overflow
- [ ] Form is usable on mobile
- [ ] Navigation accessible via keyboard
- [ ] Lighthouse mobile performance ≥ 90
- [ ] W3C HTML validation passes

## Submission

Submit the complete `index.html` file with all inline CSS and JS, plus Lighthouse performance screenshots.
