# Mini Project: Clean Code Portfolio - Personal Website Refactor

## Project Overview

You will build a personal portfolio website from scratch, then refactor it to meet all clean code standards. The final version must demonstrate semantic HTML, BEM naming, separation of concerns, proper commenting, accessibility, and validation compliance.

## Learning Objectives

- Write clean, semantic HTML5 from the ground up
- Apply BEM naming conventions consistently
- Implement separation of concerns (HTML/CSS/JS)
- Create accessible, validated HTML
- Use proper commenting and organization
- Configure and use linting tools

## Requirements

### Content Sections
1. **Header** - Logo, navigation (About, Projects, Skills, Contact)
2. **Hero** - Name, title, tagline, CTA button
3. **About** - Bio paragraph, photo
4. **Projects** - Grid of 3 project cards with image, title, description, tech stack tags
5. **Skills** - List of technical skills with categories
6. **Contact** - Form with name, email, message fields
7. **Footer** - Copyright, social links

### Clean Code Requirements

- **Semantic HTML**: All appropriate semantic elements
- **BEM Naming**: Every class follows BEM convention
- **Separation of Concerns**: No inline styles or event handlers
- **Accessibility**: Skip link, ARIA landmarks, alt text, labels, heading hierarchy
- **Comments**: Section markers, component boundaries
- **Validation**: Passes W3C HTML validation
- **Formatting**: Consistent 2-space indentation, 80-120 char lines
- **EditorConfig**: Configuration file included
- **External Files**: CSS and JS in separate files

## Implementation Steps

### Step 1: File Structure
```
portfolio/
├── .editorconfig
├── .htmlhintrc
├── index.html
├── css/
│   └── styles.css
└── js/
    └── main.js
```

### Step 2: Write EditorConfig
```ini
root = true
[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
[*.md]
trim_trailing_whitespace = false
```

### Step 3: Write HTML with Clean Standards

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Alex Rivera - Full-Stack Developer</title>
  <meta name="description" content="Portfolio of Alex Rivera, a full-stack web developer specializing in modern web technologies.">
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>

<a href="#main-content" class="skip-link">Skip to main content</a>

<!-- ==========================================
     HEADER
     ========================================== -->
<header class="header">
  <div class="header__container">
    <a href="/" class="header__logo" aria-label="Alex Rivera - Home">
      <span class="header__logo-text">AR</span>
    </a>
    <nav class="nav" aria-label="Main navigation">
      <button class="nav__toggle" data-action="toggle-menu" aria-controls="nav-list" aria-expanded="false" aria-label="Toggle menu">
        <span class="nav__hamburger"></span>
      </button>
      <ul id="nav-list" class="nav__list" data-visible="false">
        <li class="nav__item"><a href="#about" class="nav__link">About</a></li>
        <li class="nav__item"><a href="#projects" class="nav__link">Projects</a></li>
        <li class="nav__item"><a href="#skills" class="nav__link">Skills</a></li>
        <li class="nav__item"><a href="#contact" class="nav__link">Contact</a></li>
      </ul>
    </nav>
  </div>
</header>

<!-- ==========================================
     MAIN CONTENT
     ========================================== -->
<main id="main-content">
  
  <!-- Hero Section -->
  <section class="hero" aria-label="Introduction">
    <div class="hero__container">
      <h1 class="hero__name">Alex Rivera</h1>
      <p class="hero__title">Full-Stack Web Developer</p>
      <p class="hero__tagline">Building accessible, performant, and beautiful web experiences.</p>
      <a href="#projects" class="btn btn--primary">View My Work</a>
    </div>
  </section>
  
  <!-- About Section -->
  <section id="about" class="about" aria-labelledby="about-title">
    <div class="about__container">
      <h2 id="about-title" class="about__title">About Me</h2>
      <div class="about__content">
        <img src="images/profile.jpg" alt="Alex Rivera smiling at desk with dual monitors" class="about__image" width="300" height="300" loading="lazy">
        <div class="about__text">
          <p>I'm a full-stack developer with 5+ years of experience building modern web applications. I specialize in React, Node.js, and accessibility-focused development.</p>
          <p>I believe in writing clean, maintainable code that stands the test of time. When I'm not coding, you'll find me hiking or experimenting with new recipes.</p>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Projects Section -->
  <section id="projects" class="projects" aria-labelledby="projects-title">
    <div class="projects__container">
      <h2 id="projects-title" class="projects__title">Featured Projects</h2>
      <div class="projects__grid">
        
        <article class="project-card">
          <img src="images/project-ecommerce.jpg" alt="E-commerce dashboard showing sales analytics" class="project-card__image" width="400" height="250" loading="lazy">
          <div class="project-card__content">
            <h3 class="project-card__title">ShopHub</h3>
            <p class="project-card__description">A full-featured e-commerce platform with real-time inventory management, payment processing, and admin dashboard.</p>
            <div class="project-card__tags">
              <span class="tag tag--react">React</span>
              <span class="tag tag--node">Node.js</span>
              <span class="tag tag--mongo">MongoDB</span>
            </div>
            <a href="#" class="project-card__link" aria-label="View ShopHub project">View Project</a>
          </div>
        </article>
        
        <article class="project-card">
          <img src="images/project-weather.jpg" alt="Weather app showing 5-day forecast" class="project-card__image" width="400" height="250" loading="lazy">
          <div class="project-card__content">
            <h3 class="project-card__title">WeatherVue</h3>
            <p class="project-card__description">Real-time weather dashboard with interactive maps, 7-day forecasts, and severe weather alerts.</p>
            <div class="project-card__tags">
              <span class="tag tag--vue">Vue.js</span>
              <span class="tag tag--api">REST API</span>
              <span class="tag tag--css">CSS Grid</span>
            </div>
            <a href="#" class="project-card__link" aria-label="View WeatherVue project">View Project</a>
          </div>
        </article>
        
        <article class="project-card">
          <img src="images/project-task.jpg" alt="Task management board with drag and drop" class="project-card__image" width="400" height="250" loading="lazy">
          <div class="project-card__content">
            <h3 class="project-card__title">TaskFlow</h3>
            <p class="project-card__description">Kanban-style project management tool with drag-and-drop, real-time collaboration, and team analytics.</p>
            <div class="project-card__tags">
              <span class="tag tag--react">React</span>
              <span class="tag tag--ts">TypeScript</span>
              <span class="tag tag--firebase">Firebase</span>
            </div>
            <a href="#" class="project-card__link" aria-label="View TaskFlow project">View Project</a>
          </div>
        </article>
        
      </div>
    </div>
  </section>
  
  <!-- Skills Section -->
  <section id="skills" class="skills" aria-labelledby="skills-title">
    <div class="skills__container">
      <h2 id="skills-title" class="skills__title">Skills &amp; Technologies</h2>
      <div class="skills__grid">
        <div class="skill-category">
          <h3 class="skill-category__title">Frontend</h3>
          <ul class="skill-category__list">
            <li class="skill-category__item">HTML5 &amp; CSS3</li>
            <li class="skill-category__item">JavaScript (ES6+)</li>
            <li class="skill-category__item">React &amp; Next.js</li>
            <li class="skill-category__item">TypeScript</li>
            <li class="skill-category__item">Accessibility (WCAG)</li>
          </ul>
        </div>
        <div class="skill-category">
          <h3 class="skill-category__title">Backend</h3>
          <ul class="skill-category__list">
            <li class="skill-category__item">Node.js &amp; Express</li>
            <li class="skill-category__item">PostgreSQL</li>
            <li class="skill-category__item">MongoDB</li>
            <li class="skill-category__item">GraphQL</li>
            <li class="skill-category__item">RESTful APIs</li>
          </ul>
        </div>
        <div class="skill-category">
          <h3 class="skill-category__title">Tools</h3>
          <ul class="skill-category__list">
            <li class="skill-category__item">Git &amp; GitHub</li>
            <li class="skill-category__item">Docker</li>
            <li class="skill-category__item">CI/CD Pipelines</li>
            <li class="skill-category__item">AWS &amp; Vercel</li>
            <li class="skill-category__item">Figma</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Contact Section -->
  <section id="contact" class="contact" aria-labelledby="contact-title">
    <div class="contact__container">
      <h2 id="contact-title" class="contact__title">Get In Touch</h2>
      <p class="contact__description">I'm always open to new opportunities and collaborations.</p>
      
      <form class="form" action="/contact" method="POST" novalidate>
        <div class="form__group">
          <label for="contact-name" class="form__label">Name <span aria-hidden="true">*</span></label>
          <input type="text" id="contact-name" class="form__input" name="name" required aria-required="true" autocomplete="name">
          <span class="form__error" role="alert"></span>
        </div>
        <div class="form__group">
          <label for="contact-email" class="form__label">Email <span aria-hidden="true">*</span></label>
          <input type="email" id="contact-email" class="form__input" name="email" required aria-required="true" autocomplete="email">
          <span class="form__error" role="alert"></span>
        </div>
        <div class="form__group">
          <label for="contact-message" class="form__label">Message <span aria-hidden="true">*</span></label>
          <textarea id="contact-message" class="form__textarea" name="message" required aria-required="true" rows="5"></textarea>
          <span class="form__error" role="alert"></span>
        </div>
        <button type="submit" class="btn btn--primary">Send Message</button>
      </form>
    </div>
  </section>

</main>

<!-- ==========================================
     FOOTER
     ========================================== -->
<footer class="footer">
  <div class="footer__container">
    <p class="footer__text">&copy; 2026 Alex Rivera. Built with clean code.</p>
    <nav class="footer__nav" aria-label="Social links">
      <a href="https://github.com/alexrivera" class="footer__link" aria-label="GitHub">GitHub</a>
      <a href="https://linkedin.com/in/alexrivera" class="footer__link" aria-label="LinkedIn">LinkedIn</a>
      <a href="mailto:hello@alexrivera.dev" class="footer__link" aria-label="Email">Email</a>
    </nav>
  </div>
</footer>
<!-- /FOOTER -->

<script src="js/main.js" defer></script>
</body>
</html>
```

## Validation Checklist

- [ ] W3C HTML validation passes with 0 errors
- [ ] All tags properly closed
- [ ] No duplicate IDs
- [ ] Proper heading hierarchy (one h1, sequential)
- [ ] All images have alt text
- [ ] All form inputs have labels
- [ ] BEM naming used consistently
- [ ] No inline styles or event handlers
- [ ] External CSS file for all styles
- [ ] External JS file for all scripts
- [ ] Section comments used appropriately
- [ ] 2-space indentation throughout
- [ ] Lines under 120 characters
- [ ] `.editorconfig` in project root
- [ ] HTMLHint passes without errors

## Submission

Submit:
1. Complete `index.html`
2. Associated `css/styles.css` and `js/main.js`
3. `.editorconfig` configuration file
4. `.htmlhintrc` configuration file
5. W3C validation screenshot showing zero errors
