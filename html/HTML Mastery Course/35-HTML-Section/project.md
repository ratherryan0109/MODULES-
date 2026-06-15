# Mini Project: Technical Documentation Page

## Overview

Create a multi-section technical documentation page that demonstrates advanced use of `<section>` elements with nested sections, accessible landmarks, and a table of contents. The topic is "CSS Flexbox" — provide a comprehensive guide organized into logical sections.

## Requirements

### HTML Structure
1. Use `<main>` with `id="main-doc"`
2. Include at least 5 top-level `<section>` elements
3. At least 2 sections must contain nested `<section>` elements
4. Each section must have a heading (`<h2>` or `<h3>`)
5. All sections must become proper ARIA landmarks using `aria-labelledby`
6. Include a `<nav id="navbar">` with links to every section
7. Include code examples inside `<pre><code>` elements
8. Use `<figure>` and `<figcaption>` for diagrams
9. Include a `<footer>` with copyright

### Content Sections Required
1. **Introduction** — What is Flexbox and why use it
2. **Flex Container** — Properties like display, flex-direction, flex-wrap, justify-content, align-items
   - Nested subsection: Flex Direction (row, column, etc.)
   - Nested subsection: Alignment (justify-content, align-items)
3. **Flex Items** — Properties like flex-grow, flex-shrink, flex-basis, order, align-self
   - Nested subsection: The flex shorthand
4. **Layout Patterns** — Common Flexbox patterns
   - Nested subsection: Holy Grail Layout
   - Nested subsection: Centering
5. **Browser Support & Resources**

### CSS Requirements
1. Two-column layout: fixed-width navbar on left, scrollable content on right
2. Navbar must be sticky (position: sticky or position: fixed)
3. Highlight the current section in the navbar (optional, JavaScript)
4. Use a clean monospace font for code blocks
5. Style headings consistently with border-bottom or similar
6. Responsive design: on mobile, navbar becomes a top bar
7. Minimum 50 lines of CSS

### Accessibility Requirements
1. All `<section>` elements must have `aria-labelledby` pointing to their heading
2. `<nav>` must have `aria-label="Table of Contents"`
3. Proper heading hierarchy (`h1` → `h2` → `h3` → `h4`)
4. Skip navigation link targeting `<main>`
5. All images/diagrams must have `alt` text

## Steps

### Step 1: HTML Boilerplate and Skip Link
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Flexbox - Documentation</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <a href="#main-doc" class="skip-link">Skip to main content</a>
```

### Step 2: Create the Navbar
```html
<nav id="navbar" aria-label="Table of Contents">
  <header><h1>CSS Flexbox</h1></header>
  <ul>
    <li><a href="#introduction" class="nav-link">Introduction</a></li>
    <li><a href="#flex-container" class="nav-link">Flex Container</a></li>
    <li><a href="#flex-items" class="nav-link">Flex Items</a></li>
    <li><a href="#layout-patterns" class="nav-link">Layout Patterns</a></li>
    <li><a href="#browser-support" class="nav-link">Browser Support</a></li>
  </ul>
</nav>
```

### Step 3: Build Sections with Nested Sections
```html
<main id="main-doc">
  <section id="introduction" aria-labelledby="introduction-heading">
    <h2 id="introduction-heading">Introduction</h2>
    <p>Flexbox is a one-dimensional layout method...</p>
  </section>
  
  <section id="flex-container" aria-labelledby="container-heading">
    <h2 id="container-heading">Flex Container</h2>
    
    <section id="flex-direction" aria-labelledby="direction-heading">
      <h3 id="direction-heading">Flex Direction</h3>
    </section>
    
    <section id="alignment" aria-labelledby="alignment-heading">
      <h3 id="alignment-heading">Alignment Properties</h3>
    </section>
  </section>
  <!-- Continue for all sections -->
</main>
```

### Step 4: Add CSS
Create `styles.css` with the two-column layout, styling, and responsiveness.

### Step 5: Validate and Test
- Validate HTML at validator.w3.org
- Test with a screen reader (NVDA, VoiceOver)
- Test responsive breakpoints

## Expected Output

A professional technical documentation page with:
- Left-side sticky navigation bar
- Right-side scrollable content with nested sections
- All sections accessible as ARIA landmarks
- Code examples with proper formatting
- Responsive mobile layout

## Bonus Challenges

1. Add a "scroll spy" that highlights the current section in the navbar using Intersection Observer API
2. Include dark mode toggle
3. Add copy-to-clipboard buttons on each code block
4. Generate the table of contents dynamically with JavaScript
5. Add a "Back to top" link at the bottom of each section

## Submission Checklist

- [ ] 5+ top-level `<section>` elements
- [ ] 2+ sections with nested `<section>` elements
- [ ] All sections have `aria-labelledby` and headings
- [ ] `<nav id="navbar">` with links to all sections
- [ ] Sticky/fixed navbar with CSS
- [ ] Responsive layout (mobile-friendly)
- [ ] Skip navigation link
- [ ] Valid HTML5
- [ ] Code examples in `<pre><code>`
- [ ] Proper heading hierarchy
