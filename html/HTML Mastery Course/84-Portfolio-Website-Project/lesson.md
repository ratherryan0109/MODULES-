# Module 84: Portfolio Website Project

## Introduction

A portfolio website is your digital resume and showcase of work. It's often the first impression potential employers or clients have of you. This module guides you through building a professional, responsive portfolio website from scratch, focusing on clean design, accessibility, performance, and effective content presentation.

## Learning Objectives

By the end of this module, you will be able to:
- Plan and structure a compelling portfolio website
- Design an effective hero section that captures attention
- Showcase projects with case study layouts
- Implement skill visualization and progress indicators
- Create a working contact form
- Integrate social proof (testimonials, stats)
- Optimize for performance and SEO
- Deploy to a hosting platform

## Portfolio Structure

### Essential Sections
1. **Hero** - Name, title, tagline, CTA
2. **About** - Bio, photo, key achievements
3. **Skills** - Technical skills with proficiency
4. **Projects** - Case studies with images and links
5. **Experience** - Work history timeline
6. **Testimonials** - Client/colleague quotes
7. **Contact** - Form and social links
8. **Footer** - Copyright, navigation

### Design Principles
- **Visual hierarchy** - Guide the eye to important content
- **Consistent spacing** - Use a modular scale
- **Limited color palette** - 2-3 primary colors
- **Clean typography** - 1-2 font families
- **Whitespace** - Let content breathe
- **Motion** - Subtle animations for engagement

## Project Showcase Patterns

### Card Layout
```html
<article class="project-card">
  <img src="project-thumb.jpg" alt="Project screenshot" loading="lazy">
  <div class="project-card__body">
    <h3>Project Name</h3>
    <p>Brief description of the project and technologies used.</p>
    <div class="project-card__tags">
      <span class="tag">React</span>
      <span class="tag">Node.js</span>
    </div>
    <div class="project-card__links">
      <a href="#">Live Demo</a>
      <a href="#">Source Code</a>
    </div>
  </div>
</article>
```

## Skills Visualization

### Progress Bars
```html
<div class="skill">
  <div class="skill__header">
    <span class="skill__name">HTML/CSS</span>
    <span class="skill__level">95%</span>
  </div>
  <div class="skill__bar">
    <div class="skill__fill" style="width: 95%"></div>
  </div>
</div>
```

## Contact Form

```html
<form action="https://formspree.io/f/your-id" method="POST">
  <div class="form__group">
    <label for="name">Name</label>
    <input type="text" id="name" name="name" required>
  </div>
  <div class="form__group">
    <label for="email">Email</label>
    <input type="email" id="email" name="email" required>
  </div>
  <div class="form__group">
    <label for="message">Message</label>
    <textarea id="message" name="message" rows="5" required></textarea>
  </div>
  <button type="submit">Send Message</button>
</form>
```

## SEO for Portfolio

- Descriptive title tags per page
- Meta descriptions with keywords
- Open Graph tags for social sharing
- Alt text on all images
- Semantic HTML structure
- Sitemap for search engines
- Schema.org Person/Portfolio markup

## Performance Optimization

- Optimize images (WebP, responsive srcset)
- Lazy load below-fold images
- Minify HTML, CSS, JS
- Use a CDN for assets
- Implement caching
- Critical CSS inlining

## Summary Notes

- Portfolio = first impression - make it count
- Showcase 3-6 best projects with case studies
- Use clean, professional design with consistent branding
- Include clear CTAs (Hire me, View resume, Contact)
- Optimize for mobile first
- Add social proof (testimonials, metrics)
- Keep it updated regularly
- Deploy and share the URL everywhere
