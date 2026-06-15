# Mini Project: Semantic, Accessible Landing Page for a Tech Conference

## Project Overview

Build a landing page for "WebTech Summit 2026" - a one-day tech conference. The page must demonstrate all HTML best practices including semantic structure, accessibility compliance, SEO optimization, performance best practices, and proper code organization.

## Learning Objectives

- Implement complete semantic HTML5 document structure
- Apply WCAG accessibility guidelines
- Optimize HTML for search engines with proper metadata
- Implement performance best practices
- Create a maintainable, well-organized codebase

## Requirements

### Content Sections
1. **Header** - Logo, main navigation (Home, Schedule, Speakers, Tickets, Contact)
2. **Hero** - Conference title, date, tagline, CTA button
3. **About** - Conference description
4. **Speakers** - Grid of 3 speaker cards with photos, names, topics
5. **Schedule** - Timeline of events with times
6. **Tickets** - Pricing tiers (Early Bird $99, Standard $149, VIP $299)
7. **Newsletter Signup** - Email subscription form
8. **Footer** - Copyright, social links, privacy policy

### Technical Requirements

- **Semantic HTML**: header, nav, main, section, article, aside, footer, figure
- **Accessibility**: Skip link, ARIA landmarks, proper heading hierarchy, alt text, form labels
- **SEO**: Meta tags, Open Graph, Twitter Cards, canonical, structured data (Event schema)
- **Performance**: Deferred scripts, optimized images, preload critical assets
- **Code Quality**: Valid HTML, consistent indentation, meaningful comments

## Implementation Guide

### Step 1: Document Setup
Create the HTML5 boilerplate with all required meta tags.

### Step 2: Skip Link and Navigation
Add a skip-to-content link and accessible navigation.

### Step 3: Hero Section
Create a compelling hero with conference details.

### Step 4: Speakers Section
Use `<article>` for each speaker card with `<figure>` for photos.

### Step 5: Schedule
Use a `<table>` with proper `<thead>`, `<tbody>`, and `<th scope>`.

### Step 6: Tickets
Use sections with tiered pricing cards.

### Step 7: Newsletter Form
Create an accessible signup form with proper validation.

### Step 8: Footer and Structured Data
Add footer and Event JSON-LD schema.

## Complete Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>WebTech Summit 2026 - June 15 | San Francisco</title>
  <meta name="description" content="Join the leading web technology conference in San Francisco. Learn from industry experts about HTML, CSS, JavaScript, and modern web development.">
  <meta name="author" content="WebTech Events">
  <link rel="canonical" href="https://webtechsummit.com">
  
  <meta property="og:title" content="WebTech Summit 2026">
  <meta property="og:description" content="The premier web technology conference in San Francisco.">
  <meta property="og:image" content="https://webtechsummit.com/images/og-image.jpg">
  <meta property="og:url" content="https://webtechsummit.com">
  <meta property="og:type" content="website">
  
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="WebTech Summit 2026">
  <meta name="twitter:description" content="The premier web technology conference.">
  
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="stylesheet" href="styles.css">
</head>
<body>

<a href="#main-content" class="skip-link">Skip to main content</a>

<header role="banner">
  <div class="container">
    <a href="/" class="logo" aria-label="WebTech Summit 2026 - Home">
      <img src="logo.svg" alt="" width="40" height="40">
      <span>WebTech Summit</span>
    </a>
    <nav aria-label="Main navigation">
      <button id="menu-toggle" aria-expanded="false" aria-controls="primary-nav" aria-label="Toggle menu">
        <span class="hamburger"></span>
      </button>
      <ul id="primary-nav" role="list">
        <li><a href="#about" aria-current="page">About</a></li>
        <li><a href="#speakers">Speakers</a></li>
        <li><a href="#schedule">Schedule</a></li>
        <li><a href="#tickets">Tickets</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </div>
</header>

<main id="main-content">
  
  <section id="hero" aria-label="Conference hero">
    <div class="container">
      <h1>WebTech Summit 2026</h1>
      <p class="tagline">Where the Future of Web Development Begins</p>
      <p class="date-location">
        <time datetime="2026-06-15">June 15, 2026</time>
        <span aria-hidden="true"> &bull; </span>
        Moscone Center, San Francisco
      </p>
      <a href="#tickets" class="cta-button">Get Your Ticket</a>
    </div>
  </section>
  
  <section id="about" aria-labelledby="about-heading">
    <div class="container">
      <h2 id="about-heading">About the Conference</h2>
      <p>WebTech Summit brings together the brightest minds in web development for a day of learning, networking, and inspiration. With tracks covering HTML, CSS, JavaScript, accessibility, and performance, there's something for every web professional.</p>
      <div class="stats">
        <div class="stat">
          <span class="stat-number">500+</span>
          <span class="stat-label">Attendees</span>
        </div>
        <div class="stat">
          <span class="stat-number">15</span>
          <span class="stat-label">Speakers</span>
        </div>
        <div class="stat">
          <span class="stat-number">3</span>
          <span class="stat-label">Tracks</span>
        </div>
      </div>
    </div>
  </section>
  
  <section id="speakers" aria-labelledby="speakers-heading">
    <div class="container">
      <h2 id="speakers-heading">Featured Speakers</h2>
      <div class="speakers-grid">
        <article class="speaker-card">
          <figure>
            <img src="speaker-sarah.jpg" alt="Sarah Chen - Frontend Architect" width="300" height="300" loading="lazy">
            <figcaption>Sarah Chen</figcaption>
          </figure>
          <h3>Sarah Chen</h3>
          <p class="role">Frontend Architect at TechCorp</p>
          <p class="topic">Topic: Modern CSS Layouts</p>
        </article>
        <article class="speaker-card">
          <figure>
            <img src="speaker-marcus.jpg" alt="Marcus Johnson - Accessibility Engineer" width="300" height="300" loading="lazy">
            <figcaption>Marcus Johnson</figcaption>
          </figure>
          <h3>Marcus Johnson</h3>
          <p class="role">Accessibility Engineer at WebA11y</p>
          <p class="topic">Topic: Building Inclusive Web Apps</p>
        </article>
        <article class="speaker-card">
          <figure>
            <img src="speaker-ema.jpg" alt="Ema Rodriguez - Performance Specialist" width="300" height="300" loading="lazy">
            <figcaption>Ema Rodriguez</figcaption>
          </figure>
          <h3>Ema Rodriguez</h3>
          <p class="role">Performance Specialist at FastWeb</p>
          <p class="topic">Topic: Core Web Vitals Mastery</p>
        </article>
      </div>
    </div>
  </section>
  
  <section id="schedule" aria-labelledby="schedule-heading">
    <div class="container">
      <h2 id="schedule-heading">Event Schedule</h2>
      <table>
        <caption>WebTech Summit 2026 Schedule</caption>
        <thead>
          <tr>
            <th scope="col">Time</th>
            <th scope="col">Track 1</th>
            <th scope="col">Track 2</th>
            <th scope="col">Track 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><time datetime="09:00">9:00 AM</time></td>
            <td colspan="3">Keynote: The State of the Web</td>
          </tr>
          <tr>
            <td><time datetime="10:00">10:00 AM</time></td>
            <td>CSS Container Queries</td>
            <td>TypeScript Best Practices</td>
            <td>Web Performance 101</td>
          </tr>
          <tr>
            <td><time datetime="11:00">11:00 AM</time></td>
            <td>Semantic HTML Deep Dive</td>
            <td>React Server Components</td>
            <td>Accessibility Auditing</td>
          </tr>
          <tr>
            <td><time datetime="12:00">12:00 PM</time></td>
            <td colspan="3">Networking Lunch</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
  
  <section id="tickets" aria-labelledby="tickets-heading">
    <div class="container">
      <h2 id="tickets-heading">Get Your Ticket</h2>
      <div class="tier-grid">
        <article class="tier" aria-label="Early Bird ticket">
          <h3>Early Bird</h3>
          <p class="price">$99</p>
          <ul>
            <li>Full day access</li>
            <li>Lunch included</li>
            <li>Workshop access</li>
          </ul>
          <a href="#register" class="ticket-button" aria-label="Buy Early Bird ticket for $99">Buy Now</a>
        </article>
        <article class="tier featured" aria-label="Standard ticket">
          <h3>Standard</h3>
          <p class="price">$149</p>
          <ul>
            <li>Everything in Early Bird</li>
            <li>Priority seating</li>
            <li>Speaker meet & greet</li>
          </ul>
          <a href="#register" class="ticket-button" aria-label="Buy Standard ticket for $149">Buy Now</a>
        </article>
        <article class="tier" aria-label="VIP ticket">
          <h3>VIP</h3>
          <p class="price">$299</p>
          <ul>
            <li>Everything in Standard</li>
            <li>VIP lounge access</li>
            <li>Exclusive workshop</li>
          </ul>
          <a href="#register" class="ticket-button" aria-label="Buy VIP ticket for $299">Buy Now</a>
        </article>
      </div>
    </div>
  </section>
  
  <section id="newsletter" aria-labelledby="newsletter-heading">
    <div class="container">
      <h2 id="newsletter-heading">Stay Updated</h2>
      <p>Subscribe to receive conference updates and speaker announcements.</p>
      <form action="/subscribe" method="POST" novalidate>
        <div class="form-group">
          <label for="newsletter-email">Email address <span aria-hidden="true">*</span></label>
          <input type="email" id="newsletter-email" name="email" required aria-required="true" placeholder="you@example.com" autocomplete="email">
          <span class="error-message" role="alert"></span>
        </div>
        <button type="submit">Subscribe</button>
      </form>
    </div>
  </section>

</main>

<footer role="contentinfo">
  <div class="container">
    <p>&copy; 2026 WebTech Events. All rights reserved.</p>
    <nav aria-label="Footer navigation">
      <ul>
        <li><a href="/privacy">Privacy Policy</a></li>
        <li><a href="/terms">Terms of Service</a></li>
        <li><a href="/code-of-conduct">Code of Conduct</a></li>
      </ul>
    </nav>
    <ul class="social-links" aria-label="Social media">
      <li><a href="https://twitter.com/webtechsummit" aria-label="Follow us on Twitter">Twitter</a></li>
      <li><a href="https://linkedin.com/company/webtechsummit" aria-label="Follow us on LinkedIn">LinkedIn</a></li>
    </ul>
  </div>
</footer>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "WebTech Summit 2026",
  "startDate": "2026-06-15T09:00:00",
  "endDate": "2026-06-15T17:00:00",
  "location": {
    "@type": "Place",
    "name": "Moscone Center",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "747 Howard Street",
      "addressLocality": "San Francisco",
      "addressRegion": "CA",
      "postalCode": "94103"
    }
  },
  "offers": {
    "@type": "Offer",
    "url": "https://webtechsummit.com/tickets",
    "price": "99",
    "priceCurrency": "USD"
  },
  "organizer": {
    "@type": "Organization",
    "name": "WebTech Events"
  }
}
</script>

<script src="main.js" defer></script>
</body>
</html>
```

## Validation Checklist

- [ ] W3C HTML validation passes without errors
- [ ] Semantic elements used correctly
- [ ] One `<h1>` per page, proper heading hierarchy
- [ ] All images have meaningful alt text
- [ ] All form inputs have associated labels
- [ ] Skip navigation link works
- [ ] ARIA landmarks properly applied
- [ ] Keyboard navigation works through all interactive elements
- [ ] Open Graph and Twitter Card meta tags present
- [ ] Canonical URL specified
- [ ] Structured data (Event) implemented
- [ ] Scripts deferred, no render-blocking
- [ ] Color contrast meets WCAG AA standards
- [ ] HTML is well-indented and organized

## Submission

Submit the complete `index.html` and a validation report from W3C validator.
