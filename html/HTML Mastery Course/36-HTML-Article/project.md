# Mini Project: Tech Magazine Homepage

## Overview

Build a technology magazine homepage that demonstrates proper use of the `<article>` element. The page should feature a lead article with hero image, a grid of secondary articles, a sidebar with trending stories, and a comments preview section.

## Requirements

### HTML Structure
1. Use proper page structure: `<header>`, `<main>`, `<aside>`, `<footer>`
2. One featured `<article>` (hero) with:
   - `<header>` with category label, `<h1>` headline, author, date
   - `<figure>` with `<img>` and `<figcaption>`
   - Multiple sections of body content
   - `<footer>` with tags and share links
3. A grid of at least 4 secondary `<article>` elements
4. A "Latest Comments" section using nested `<article>` elements
5. Proper heading hierarchy (`h1` → `h2` → `h3`)

### Structured Data
1. Include JSON-LD for the main article using schema.org/Article
2. Properties: headline, author, datePublished, image, description

### CSS Requirements
1. Magazine-style layout with CSS Grid
2. Hero article should span 2 columns
3. Secondary articles in 4-column grid
4. Sidebar with trending list
5. Responsive design (mobile → tablet → desktop)
6. Typography suitable for a magazine (serif headings, sans-serif body)
7. Readable line-height (1.6+) and measure (60-75 characters per line)

### Accessibility
1. Skip navigation link
2. ARIA landmarks on all sections
3. `aria-labelledby` on article sections
4. Alt text on all images
5. Proper heading hierarchy
6. Focus styles on all interactive elements

## Content Guidelines

### Main Article Topic: "The Rise of AI in Web Development"
Sections for main article:
1. Introduction — AI tools are changing how we build websites
2. AI-Powered Code Generation — GitHub Copilot, ChatGPT for coding
3. Design Automation — AI design-to-code tools
4. Testing and QA — Automated testing with AI
5. The Future — What's next for AI and web development

### Secondary Articles (4)
1. "CSS Container Queries: A Complete Guide"
2. "Getting Started with Web Components"
3. "Performance Optimization in 2026"
4. "The State of JavaScript Frameworks"

## Steps

1. Create HTML boilerplate with skip link and page structure
2. Build the header with navigation
3. Create the featured article with all sections
4. Build the secondary articles grid
5. Add the sidebar with trending and comments
6. Create the footer
7. Add JSON-LD structured data
8. Write the CSS with magazine layout
9. Test responsiveness and accessibility
10. Validate HTML and check with W3C Validator

## Expected Output

A professional magazine-style homepage with:
- Hero article spanning full width with a large heading
- Grid of secondary articles below
- Sidebar with trending stories and comment previews
- Proper semantic structure with ARIA landmarks
- Responsive layout adapting to all screen sizes

## Bonus Challenges

1. Add a dark mode toggle
2. Implement a "Reading time" estimate displayed on each article
3. Add a sticky header that shrinks on scroll
4. Include a newsletter signup form in the sidebar
5. Add smooth scrolling for anchor links

## Submission Checklist

- [ ] Valid HTML5 document
- [ ] One featured `<article>` with proper structure
- [ ] 4+ secondary `<article>` elements
- [ ] JSON-LD structured data for main article
- [ ] CSS Grid magazine layout
- [ ] Responsive design (3 breakpoints)
- [ ] Skip navigation link
- [ ] ARIA landmarks and labels
- [ ] Proper heading hierarchy
- [ ] Alt text on all images
