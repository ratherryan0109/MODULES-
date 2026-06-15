# Mini Project: Accessible Portfolio Page

## Overview

Build a personal portfolio page that demonstrates proper use of the `<main>` element with full accessibility features, including skip-navigation links, semantic page structure, and proper focus management.

## Requirements

### HTML Structure
1. Use `<!DOCTYPE html>` with proper `lang` attribute
2. Include a `<header>` with site navigation (at least 4 links: Home, Projects, About, Contact)
3. Use a single `<main>` element containing:
   - An `<h1>` with your name
   - A `<section>` for the hero/about area
   - A `<section>` containing at least 3 `<article>` elements for projects
   - Each `<article>` must have an `<h2>`, a description paragraph, and a link
4. Include an `<aside>` with tangential content (e.g., testimonials or skills)
5. Include a `<footer>` with copyright and social links

### Accessibility Requirements
1. Add a skip-navigation link as the first focusable element
2. The skip link must target the `<main>` element's `id`
3. Style the skip link to be hidden off-screen by default and visible on focus
4. Add `tabindex="-1"` to `<main>`
5. Use proper heading hierarchy (`<h1>` → `<h2>` → `<h3>`)
6. Add `aria-label` to `<nav>`
7. Use `<time>` for any dates

### CSS Requirements
1. Minimum 30 lines of CSS
2. Style the skip link with high contrast
3. Use a clean, professional color scheme
4. Make the layout responsive (use flexbox or grid)
5. Style `main:focus` with a visible outline

## Steps

### Step 1: Create the HTML Boilerplate
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Jane Doe - Portfolio</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
```

### Step 2: Add the Skip Link
```html
<a href="#main-content" class="skip-link">Skip to main content</a>
```

### Step 3: Create the Header
```html
<header>
  <nav aria-label="Main navigation">
    <a href="#home">Home</a>
    <a href="#projects">Projects</a>
    <a href="#about">About</a>
    <a href="#contact">Contact</a>
  </nav>
</header>
```

### Step 4: Build the Main Content
```html
<main id="main-content" tabindex="-1">
  <section id="home">
    <h1>Hi, I'm Jane Doe</h1>
    <p>Full-stack web developer specializing in accessible, semantic HTML.</p>
  </section>
  
  <section id="projects">
    <h2>My Projects</h2>
    <article>
      <h3>Project Alpha</h3>
      <p>A web application built with HTML5 semantic elements and ARIA landmarks.</p>
      <a href="#">View Project</a>
    </article>
    <!-- Add 2 more articles -->
  </section>
</main>
```

### Step 5: Add Aside and Footer
```html
<aside>
  <h2>Skills & Tools</h2>
  <ul>
    <li>HTML5, CSS3, JavaScript</li>
    <li>React, Node.js</li>
    <li>Accessibility (WCAG 2.1)</li>
  </ul>
</aside>

<footer>
  <p>&copy; 2026 Jane Doe</p>
  <nav aria-label="Social links">
    <a href="#">GitHub</a>
    <a href="#">LinkedIn</a>
  </nav>
</footer>
```

### Step 6: Write the CSS
Create `style.css` with proper styling for skip link, layout, colors, and responsive design.

## Expected Output

A single-page portfolio with:
- A skip link that appears on focus (tab to see it)
- Proper `<main>` landmark with all primary content
- Accessible navigation and structure
- Professional visual design
- Responsive layout

## Bonus Challenges

1. Add a dark/light theme toggle that preserves focus management
2. Implement smooth scrolling when navigating via anchor links
3. Add a `aria-current="page"` attribute to the active nav link
4. Include a `role="presentation"` on decorative elements only
5. Validate your HTML with the W3C Validator

## Submission Checklist

- [ ] Valid HTML5 document
- [ ] Only one visible `<main>` element
- [ ] Skip link visible on focus, hidden otherwise
- [ ] `<main>` has `id` and `tabindex="-1"`
- [ ] Proper heading hierarchy (`h1` → `h2` → `h3`)
- [ ] `<nav>` has `aria-label`
- [ ] CSS file is separate and at least 30 lines
- [ ] Responsive layout works on mobile and desktop
- [ ] All semantic elements used correctly
- [ ] No `<main>` inside `<article>`, `<aside>`, or `<nav>`
