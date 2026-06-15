# Portfolio Website Project

## Project Overview

Build a professional, responsive portfolio website to showcase your skills, projects, and experience. This project covers a complete single-page portfolio with a modern design, accessibility features, performance optimization, and SEO best practices.

## Learning Outcomes

- Structure a portfolio with semantic HTML
- Create responsive layouts with CSS Grid and Flexbox
- Implement scroll-triggered animations
- Build form handling without a backend
- Apply accessibility and SEO best practices
- Deploy with continuous integration

## Project Requirements

### HTML Structure
- Semantic elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Sections: Hero, About, Skills, Projects, Testimonials, Contact
- Proper `<head>` with meta tags, Open Graph, favicon
- Schema.org Person markup

### CSS
- CSS custom properties for theming
- Responsive design (mobile-first)
- CSS Grid for project gallery
- Smooth animations and transitions
- Print stylesheet

### JavaScript
- Smooth scroll navigation
- Mobile menu toggle
- Intersection Observer for scroll animations
- Form validation and submission
- Dark mode toggle (bonus)

### Accessibility
- Skip-to-content link
- ARIA labels and landmarks
- Keyboard navigation
- Focus management
- Color contrast (WCAG AA)

### Performance
- Optimized images (WebP, lazy loading)
- Minified assets
- Critical CSS inline
- Deferred JavaScript

## Getting Started

1. Create `index.html`, `style.css`, and `script.js`
2. Set up the HTML skeleton with meta tags
3. Build the hero section
4. Add about and skills sections
5. Create the project gallery
6. Implement testimonials
7. Build the contact form
8. Add navigation and mobile menu
9. Style with responsive CSS
10. Deploy to Netlify or GitHub Pages

## Complete Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Portfolio of Alex Chen - Full Stack Developer specializing in accessible, performant web applications.">
  <title>Alex Chen | Full Stack Developer</title>
  <meta property="og:title" content="Alex Chen | Full Stack Developer">
  <meta property="og:description" content="Full Stack Developer specializing in accessible, performant web applications.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://alexchen.dev">
  <meta property="og:image" content="https://alexchen.dev/og-image.jpg">
  <link rel="icon" type="image/svg+xml" href="favicon.svg">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Alex Chen",
    "jobTitle": "Full Stack Developer",
    "url": "https://alexchen.dev",
    "sameAs": ["https://github.com/alexchen", "https://linkedin.com/in/alexchen", "https://twitter.com/alexchen"],
    "knowsAbout": ["HTML", "CSS", "JavaScript", "React", "Node.js", "Accessibility", "Web Performance"]
  }
  </script>
</head>
<body>
  <a href="#main" class="skip-link">Skip to main content</a>

  <header class="header" role="banner">
    <div class="header__container">
      <a href="#" class="header__logo" aria-label="Alex Chen - Home">AC</a>
      <button class="nav-toggle" aria-label="Toggle navigation" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
      <nav class="nav" aria-label="Main navigation">
        <ul class="nav__list" role="list">
          <li><a href="#about" class="nav__link">About</a></li>
          <li><a href="#skills" class="nav__link">Skills</a></li>
          <li><a href="#projects" class="nav__link">Projects</a></li>
          <li><a href="#testimonials" class="nav__link">Testimonials</a></li>
          <li><a href="#contact" class="nav__link">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main id="main">
    <section id="hero" class="hero" aria-label="Introduction">
      <div class="hero__container">
        <p class="hero__greeting">Hi, I'm</p>
        <h1 class="hero__name">Alex Chen</h1>
        <p class="hero__title">Full Stack Developer</p>
        <p class="hero__tagline">I build accessible, performant web applications that make a difference.</p>
        <div class="hero__cta">
          <a href="#projects" class="btn btn--primary">View My Work</a>
          <a href="#contact" class="btn btn--secondary">Get In Touch</a>
        </div>
        <div class="hero__social">
          <a href="https://github.com/alexchen" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12 24 5.37 18.63 0 12 0z"/></svg>
          </a>
          <a href="https://linkedin.com/in/alexchen" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
        </div>
      </div>
    </section>

    <section id="about" class="about section" aria-label="About me">
      <div class="container">
        <h2 class="section__title">About Me</h2>
        <div class="about__content">
          <div class="about__text">
            <p>I'm a full stack developer with 5+ years of experience building web applications that are accessible, performant, and user-friendly. I specialize in React, Node.js, and modern CSS.</p>
            <p>I'm passionate about web accessibility and believe the web should work for everyone. I've contributed to open source projects and spoken at local meetups about inclusive design patterns.</p>
            <p>When I'm not coding, you'll find me hiking, reading sci-fi novels, or experimenting with new recipes in the kitchen.</p>
          </div>
          <div class="about__stats">
            <div class="stat">
              <span class="stat__number">5+</span>
              <span class="stat__label">Years Experience</span>
            </div>
            <div class="stat">
              <span class="stat__number">30+</span>
              <span class="stat__label">Projects Delivered</span>
            </div>
            <div class="stat">
              <span class="stat__number">15+</span>
              <span class="stat__label">Happy Clients</span>
            </div>
            <div class="stat">
              <span class="stat__number">10+</span>
              <span class="stat__label">Open Source Contributions</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="skills" class="skills section" aria-label="My skills">
      <div class="container">
        <h2 class="section__title">Skills & Technologies</h2>
        <div class="skills__grid">
          <div class="skills__category">
            <h3 class="skills__category-title">Frontend</h3>
            <div class="skill">
              <div class="skill__header"><span>HTML/CSS</span><span>95%</span></div>
              <div class="skill__bar"><div class="skill__fill" style="width:95%"></div></div>
            </div>
            <div class="skill">
              <div class="skill__header"><span>JavaScript/TypeScript</span><span>90%</span></div>
              <div class="skill__bar"><div class="skill__fill" style="width:90%"></div></div>
            </div>
            <div class="skill">
              <div class="skill__header"><span>React/Next.js</span><span>88%</span></div>
              <div class="skill__bar"><div class="skill__fill" style="width:88%"></div></div>
            </div>
          </div>
          <div class="skills__category">
            <h3 class="skills__category-title">Backend</h3>
            <div class="skill">
              <div class="skill__header"><span>Node.js</span><span>85%</span></div>
              <div class="skill__bar"><div class="skill__fill" style="width:85%"></div></div>
            </div>
            <div class="skill">
              <div class="skill__header"><span>Python</span><span>75%</span></div>
              <div class="skill__bar"><div class="skill__fill" style="width:75%"></div></div>
            </div>
            <div class="skill">
              <div class="skill__header"><span>PostgreSQL</span><span>80%</span></div>
              <div class="skill__bar"><div class="skill__fill" style="width:80%"></div></div>
            </div>
          </div>
          <div class="skills__category">
            <h3 class="skills__category-title">Tools & DevOps</h3>
            <div class="skill">
              <div class="skill__header"><span>Git/GitHub</span><span>92%</span></div>
              <div class="skill__bar"><div class="skill__fill" style="width:92%"></div></div>
            </div>
            <div class="skill">
              <div class="skill__header"><span>Docker</span><span>72%</span></div>
              <div class="skill__bar"><div class="skill__fill" style="width:72%"></div></div>
            </div>
            <div class="skill">
              <div class="skill__header"><span>AWS</span><span>68%</span></div>
              <div class="skill__bar"><div class="skill__fill" style="width:68%"></div></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="projects" class="projects section" aria-label="My projects">
      <div class="container">
        <h2 class="section__title">Featured Projects</h2>
        <div class="projects__grid">
          <article class="project-card">
            <img src="https://picsum.photos/seed/ecommerce/600/400" alt="E-commerce platform screenshot showing product grid" class="project-card__image" loading="lazy" width="600" height="400">
            <div class="project-card__body">
              <h3 class="project-card__title">ShopFlow E-Commerce</h3>
              <p class="project-card__description">Full-featured e-commerce platform with product management, cart, checkout, and payment integration.</p>
              <div class="project-card__tags">
                <span class="tag">React</span>
                <span class="tag">Node.js</span>
                <span class="tag">Stripe</span>
                <span class="tag">PostgreSQL</span>
              </div>
              <div class="project-card__links">
                <a href="#" class="btn btn--small">Live Demo</a>
                <a href="#" class="btn btn--small btn--outline">Source Code</a>
              </div>
            </div>
          </article>
          <article class="project-card">
            <img src="https://picsum.photos/seed/accessibility/600/400" alt="Accessibility audit tool dashboard" class="project-card__image" loading="lazy" width="600" height="400">
            <div class="project-card__body">
              <h3 class="project-card__title">A11yAudit</h3>
              <p class="project-card__description">Automated accessibility auditing tool that scans websites and provides actionable WCAG compliance reports.</p>
              <div class="project-card__tags">
                <span class="tag">TypeScript</span>
                <span class="tag">Next.js</span>
                <span class="tag">Puppeteer</span>
              </div>
              <div class="project-card__links">
                <a href="#" class="btn btn--small">Live Demo</a>
                <a href="#" class="btn btn--small btn--outline">Source Code</a>
              </div>
            </div>
          </article>
          <article class="project-card">
            <img src="https://picsum.photos/seed/weather/600/400" alt="Weather dashboard showing maps and forecasts" class="project-card__image" loading="lazy" width="600" height="400">
            <div class="project-card__body">
              <h3 class="project-card__title">WeatherViz</h3>
              <p class="project-card__description">Interactive weather dashboard with real-time data visualization, forecasts, and location-based alerts.</p>
              <div class="project-card__tags">
                <span class="tag">Vue.js</span>
                <span class="tag">D3.js</span>
                <span class="tag">OpenWeather API</span>
              </div>
              <div class="project-card__links">
                <a href="#" class="btn btn--small">Live Demo</a>
                <a href="#" class="btn btn--small btn--outline">Source Code</a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section id="testimonials" class="testimonials section" aria-label="Testimonials">
      <div class="container">
        <h2 class="section__title">What People Say</h2>
        <div class="testimonials__grid">
          <blockquote class="testimonial">
            <p class="testimonial__text">"Alex transformed our outdated website into a modern, accessible application. Our user engagement increased by 60% and accessibility scores went from 45 to 98."</p>
            <footer class="testimonial__author">
              <strong>Sarah Johnson</strong>
              <span>CTO, TechStart Inc.</span>
            </footer>
          </blockquote>
          <blockquote class="testimonial">
            <p class="testimonial__text">"Working with Alex was a fantastic experience. The attention to detail and commitment to performance optimization resulted in a 40% improvement in page load times."</p>
            <footer class="testimonial__author">
              <strong>Marcus Williams</strong>
              <span>Product Manager, WebForge</span>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>

    <section id="contact" class="contact section" aria-label="Contact me">
      <div class="container">
        <h2 class="section__title">Get In Touch</h2>
        <p class="contact__lead">I'm always open to new opportunities, collaborations, and interesting projects. Let's build something great together.</p>
        <form class="contact__form" action="https://formspree.io/f/your-form-id" method="POST">
          <div class="form__group">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" required autocomplete="name">
          </div>
          <div class="form__group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required autocomplete="email">
          </div>
          <div class="form__group">
            <label for="subject">Subject</label>
            <input type="text" id="subject" name="subject">
          </div>
          <div class="form__group">
            <label for="message">Message</label>
            <textarea id="message" name="message" rows="6" required></textarea>
          </div>
          <button type="submit" class="btn btn--primary btn--large">Send Message</button>
        </form>
      </div>
    </section>
  </main>

  <footer class="footer" role="contentinfo">
    <div class="container">
      <div class="footer__content">
        <p>&copy; 2026 Alex Chen. All rights reserved.</p>
        <div class="footer__links">
          <a href="https://github.com/alexchen" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/alexchen" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://twitter.com/alexchen" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </div>
    </div>
  </footer>

  <script defer src="script.js"></script>
</body>
</html>
```

### style.css

```css
:root {
  --primary: #2563eb;
  --primary-dark: #1d4ed8;
  --primary-light: #dbeafe;
  --text: #1f2937;
  --text-light: #6b7280;
  --bg: #ffffff;
  --bg-alt: #f9fafb;
  --bg-dark: #111827;
  --border: #e5e7eb;
  --radius: 8px;
  --radius-lg: 12px;
  --shadow: 0 1px 3px rgba(0,0,0,0.1);
  --shadow-lg: 0 8px 24px rgba(0,0,0,0.12);
  --font: 'Inter', system-ui, -apple-system, sans-serif;
  --transition: 0.3s ease;
  --max-width: 1100px;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html { scroll-behavior: smooth; }

body {
  font-family: var(--font);
  color: var(--text);
  background: var(--bg);
  line-height: 1.6;
}

.skip-link {
  position: absolute;
  top: -100%;
  left: 1rem;
  padding: 0.5rem 1rem;
  background: var(--primary);
  color: #fff;
  z-index: 1000;
  border-radius: var(--radius);
}
.skip-link:focus { top: 1rem; }

.container { max-width: var(--max-width); margin: 0 auto; padding: 0 1.5rem; }

.section { padding: 5rem 0; }
.section:nth-child(even) { background: var(--bg-alt); }
.section__title {
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
}
.section__title::after {
  content: '';
  display: block;
  width: 60px;
  height: 4px;
  background: var(--primary);
  border-radius: 2px;
  margin: 0.75rem auto 0;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255,255,255,0.95);
  backdrop-filter: blur(10px);
  z-index: 100;
  border-bottom: 1px solid var(--border);
}
.header__container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
}
.header__logo {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--primary);
  text-decoration: none;
}

.nav__list { display: flex; gap: 2rem; list-style: none; }
.nav__link { text-decoration: none; color: var(--text); font-weight: 500; transition: color var(--transition); }
.nav__link:hover, .nav__link:focus { color: var(--primary); }

.nav-toggle { display: none; flex-direction: column; gap: 5px; background: none; border: none; cursor: pointer; padding: 4px; }
.nav-toggle span { display: block; width: 24px; height: 2px; background: var(--text); transition: var(--transition); }
.nav-toggle[aria-expanded="true"] span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
.nav-toggle[aria-expanded="true"] span:nth-child(2) { opacity: 0; }
.nav-toggle[aria-expanded="true"] span:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }

.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 64px;
  background: linear-gradient(135deg, var(--bg) 0%, var(--bg-alt) 100%);
}
.hero__container { max-width: var(--max-width); margin: 0 auto; padding: 0 1.5rem; text-align: center; }
.hero__greeting { font-size: 1.125rem; color: var(--primary); font-weight: 600; margin-bottom: 0.5rem; }
.hero__name { font-size: 3.5rem; font-weight: 800; line-height: 1.1; margin-bottom: 0.5rem; }
.hero__title { font-size: 1.5rem; color: var(--text-light); font-weight: 500; margin-bottom: 1rem; }
.hero__tagline { font-size: 1.125rem; color: var(--text-light); max-width: 600px; margin: 0 auto 2rem; }
.hero__cta { display: flex; gap: 1rem; justify-content: center; margin-bottom: 2rem; }
.hero__social { display: flex; gap: 1rem; justify-content: center; }
.hero__social a { color: var(--text-light); transition: color var(--transition); }
.hero__social a:hover { color: var(--primary); }

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius);
  font-weight: 600;
  text-decoration: none;
  transition: all var(--transition);
  border: 2px solid transparent;
  font-size: 0.9375rem;
  cursor: pointer;
}
.btn--primary { background: var(--primary); color: #fff; }
.btn--primary:hover { background: var(--primary-dark); transform: translateY(-2px); box-shadow: var(--shadow-lg); }
.btn--secondary { background: transparent; color: var(--primary); border-color: var(--primary); }
.btn--secondary:hover { background: var(--primary-light); }
.btn--small { padding: 0.5rem 1rem; font-size: 0.875rem; }
.btn--large { padding: 1rem 2rem; font-size: 1rem; }
.btn--outline { background: transparent; border-color: var(--text); color: var(--text); }
.btn--outline:hover { border-color: var(--primary); color: var(--primary); }

.about__content { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: start; }
.about__text p { margin-bottom: 1rem; color: var(--text-light); }
.about__stats { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
.stat { text-align: center; padding: 1.5rem; background: var(--bg); border-radius: var(--radius-lg); box-shadow: var(--shadow); }
.stat__number { display: block; font-size: 2rem; font-weight: 800; color: var(--primary); }
.stat__label { font-size: 0.875rem; color: var(--text-light); }

.skills__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; }
.skills__category { background: var(--bg); padding: 1.5rem; border-radius: var(--radius-lg); box-shadow: var(--shadow); }
.skills__category-title { font-size: 1.125rem; margin-bottom: 1.5rem; color: var(--primary); }
.skill { margin-bottom: 1.25rem; }
.skill:last-child { margin-bottom: 0; }
.skill__header { display: flex; justify-content: space-between; margin-bottom: 0.375rem; font-size: 0.875rem; }
.skill__bar { height: 8px; background: var(--border); border-radius: 4px; overflow: hidden; }
.skill__fill { height: 100%; background: linear-gradient(90deg, var(--primary), #60a5fa); border-radius: 4px; transition: width 1s ease; }

.projects__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; }
.project-card {
  background: var(--bg);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: transform var(--transition), box-shadow var(--transition);
  display: flex;
  flex-direction: column;
}
.project-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); }
.project-card__image { width: 100%; height: 200px; object-fit: cover; }
.project-card__body { padding: 1.5rem; flex: 1; display: flex; flex-direction: column; }
.project-card__title { font-size: 1.125rem; margin-bottom: 0.5rem; }
.project-card__description { font-size: 0.875rem; color: var(--text-light); margin-bottom: 1rem; flex: 1; }
.project-card__tags { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem; }
.project-card__links { display: flex; gap: 0.5rem; }
.tag { padding: 0.25rem 0.75rem; background: var(--primary-light); color: var(--primary); border-radius: 100px; font-size: 0.75rem; font-weight: 600; }

.testimonials__grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem; }
.testimonial { background: var(--bg); padding: 2rem; border-radius: var(--radius-lg); box-shadow: var(--shadow); border-left: 4px solid var(--primary); }
.testimonial__text { font-style: italic; color: var(--text-light); margin-bottom: 1.5rem; line-height: 1.7; }
.testimonial__author strong { display: block; color: var(--text); font-size: 0.9375rem; }
.testimonial__author span { font-size: 0.8125rem; color: var(--text-light); }

.contact__lead { text-align: center; color: var(--text-light); max-width: 600px; margin: -2rem auto 2rem; }
.contact__form { max-width: 600px; margin: 0 auto; }
.form__group { margin-bottom: 1.5rem; }
.form__group label { display: block; margin-bottom: 0.375rem; font-weight: 500; font-size: 0.9375rem; }
.form__group input, .form__group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  font-family: inherit;
  font-size: 1rem;
  transition: border-color var(--transition);
}
.form__group input:focus, .form__group textarea:focus { outline: none; border-color: var(--primary); box-shadow: 0 0 0 3px rgba(37,99,235,0.1); }

.footer { background: var(--bg-dark); color: #fff; padding: 2rem 0; }
.footer__content { display: flex; justify-content: space-between; align-items: center; }
.footer__links { display: flex; gap: 1.5rem; }
.footer__links a { color: #9ca3af; text-decoration: none; font-size: 0.875rem; transition: color var(--transition); }
.footer__links a:hover { color: #fff; }

@media (max-width: 768px) {
  .nav-toggle { display: flex; }
  .nav { display: none; position: absolute; top: 64px; left: 0; right: 0; background: var(--bg); border-bottom: 1px solid var(--border); padding: 1rem 1.5rem; }
  .nav.active { display: block; }
  .nav__list { flex-direction: column; gap: 1rem; }
  .hero__name { font-size: 2.5rem; }
  .about__content { grid-template-columns: 1fr; }
  .skills__grid { grid-template-columns: 1fr; }
  .projects__grid { grid-template-columns: 1fr; }
  .testimonials__grid { grid-template-columns: 1fr; }
  .footer__content { flex-direction: column; gap: 1rem; text-align: center; }
}

@media (max-width: 480px) {
  .hero__cta { flex-direction: column; align-items: center; }
  .section { padding: 3rem 0; }
  .hero__name { font-size: 2rem; }
}
```

### script.js

```javascript
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

navToggle.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', !expanded);
  nav.classList.toggle('active');
});

document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.section, .project-card, .testimonial').forEach(el => {
  el.classList.add('animate');
  observer.observe(el);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
```

## Deployment Steps

1. **Netlify**: Connect your Git repository, set build command (if any), deploy folder is root.
2. **GitHub Pages**: Push to `username.github.io` repository or use `gh-pages` branch.
3. **Vercel**: Import project, auto-detects static site, deploys with one click.

## Testing Checklist

- [ ] Responsive on mobile, tablet, desktop
- [ ] All navigation links work (both menu and page anchors)
- [ ] Contact form submits (test with Formspree or similar)
- [ ] Images load with proper lazy loading
- [ ] Skip-to-content link appears on focus
- [ ] Keyboard navigation works throughout
- [ ] Color contrast meets WCAG AA
- [ ] Schema markup is valid (test with Google Rich Results)
- [ ] Open Graph preview looks correct
- [ ] Lighthouse scores: Performance 90+, Accessibility 95+, SEO 100
