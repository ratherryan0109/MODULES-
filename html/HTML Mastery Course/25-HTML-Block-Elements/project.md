# Mini Project: Landing Page Layout

## Overview

Build a professional landing page layout using only block-level HTML elements. The page must use semantic HTML5 elements for structure, demonstrate proper nesting, and showcase the box model with CSS styling.

## Requirements

1. **Header section**: `<header>` with site logo (text-based), tagline, and `<nav>` with links
2. **Hero section**: `<section>` with a headline, subheadline, and call-to-action button (styled link as block)
3. **Features section**: `<section>` containing three `<article>` elements for feature cards
4. **Testimonials section**: `<section>` with `<blockquote>` elements
5. **Sidebar/Aside**: `<aside>` with related links and contact `<address>`
6. **Footer**: `<footer>` with copyright, links, and multiple `<section>` children
7. **Responsive layout**: Use proper block element behavior with CSS for centering and spacing
8. **Content**: At least 200 words of realistic content

## Steps

### Step 1: Set Up the HTML Structure
Create the document with `<!DOCTYPE html>`, `<html>`, `<head>`, and `<body>`. Use a global reset for box-sizing.

### Step 2: Build the Header
Use `<header>` with a `<h1>` for the site name and `<nav>` with `<a>` elements. Style with dark background, white text.

### Step 3: Create the Hero Section
Use `<section class="hero">` with `<h2>`, `<p>`, and a `<div>` styled as a CTA button. Center content using `text-align: center` and `margin: auto`.

### Step 4: Build Features Section
Use `<section class="features">` containing three `<article>` elements. Each article has an icon (emoji or text-based), `<h3>`, and `<p>`. Use `display: inline-block` or flex for horizontal layout.

### Step 5: Add Testimonials
Use `<section class="testimonials">` with `<blockquote>` elements. Style with left border, italic text, and subtle background.

### Step 6: Add Sidebar
Use `<aside>` with a list of related links and an `<address>` block for company contact info.

### Step 7: Build Footer
Use `<footer>` with multiple `<section>` children for different link groups. Include a copyright notice in a `<p>`.

### Step 8: Style Everything
- Set max-width on the body and center with `margin: auto`
- Use padding for spacing, borders for visual separation
- Apply `box-sizing: border-box` globally
- Use background colors and colors appropriate for a landing page

## Starter Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Landing Page</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Segoe UI', sans-serif; max-width: 1200px; margin: 0 auto; }
    /* Add your styles below */
  </style>
</head>
<body>
  <!-- Build your layout here -->
</body>
</html>
```

## Evaluation Criteria

- All required semantic block elements are used
- Proper nesting (no block inside `<p>`, etc.)
- Box model is correctly applied
- Layout is visually appealing and readable
- Code is well-formatted and validated
