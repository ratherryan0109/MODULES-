# Portfolio Website Cheat Sheet

## Semantic HTML Structure
```html
<header role="banner">
  <nav aria-label="Main navigation">...</nav>
</header>
<main>
  <section id="hero" aria-label="Introduction">...</section>
  <section id="about" aria-label="About me">...</section>
  <section id="skills" aria-label="My skills">...</section>
  <section id="projects" aria-label="My projects">...</section>
  <section id="contact" aria-label="Contact me">...</section>
</main>
<footer role="contentinfo">...</footer>
```

## Essential Meta Tags
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Portfolio of [Name] - [Title/Role]">
<title>Name | Title</title>
<meta property="og:title" content="Name | Title">
<meta property="og:description" content="..." />
<meta property="og:image" content="https://example.com/og-image.jpg">
```

## Person Schema Markup
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Your Name",
  "jobTitle": "Full Stack Developer",
  "url": "https://yourportfolio.com",
  "sameAs": ["https://github.com/...", "https://linkedin.com/in/..."]
}
</script>
```

## Responsive Project Card CSS
```css
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}
.project-card {
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.15);
}
```

## Skill Bar CSS
```css
.skill__bar { background: #e0e0e0; border-radius: 8px; height: 10px; overflow: hidden; }
.skill__fill { height: 100%; border-radius: 8px; background: linear-gradient(90deg, #007cf0, #00dfd8); transition: width 1s ease; }
```

## Contact Form HTML
```html
<form action="https://formspree.io/f/your-id" method="POST">
  <label for="email">Email</label>
  <input type="email" id="email" name="email" required autocomplete="email">
  <label for="message">Message</label>
  <textarea id="message" name="message" required></textarea>
  <button type="submit">Send Message</button>
</form>
```

## Lazy Loading Images
```html
<img src="placeholder.jpg" data-src="full-image.webp" alt="Project screenshot" loading="lazy" width="600" height="400">
```

## Custom Properties Theme
```css
:root {
  --primary: #2563eb;
  --primary-dark: #1d4ed8;
  --text: #1f2937;
  --bg: #ffffff;
  --bg-alt: #f9fafb;
  --radius: 8px;
  --shadow: 0 2px 8px rgba(0,0,0,0.1);
}
```

## Navigation Toggle (Mobile)
```html
<button class="nav-toggle" aria-label="Toggle navigation" aria-expanded="false">
  <span></span><span></span><span></span>
</button>
```
```css
@media (max-width: 768px) {
  .nav-menu { display: none; }
  .nav-menu.active { display: flex; flex-direction: column; }
}
```

## Intersection Observer Animation
```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});
document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
```
