# Module 80: HTML Best Practices

## Introduction

Writing clean, maintainable, and standards-compliant HTML is the foundation of professional web development. HTML best practices encompass everything from proper document structure and semantic elements to accessibility, performance, and code organization. Following these practices ensures your websites are accessible, performant, SEO-friendly, and maintainable by other developers.

## Learning Objectives

By the end of this module, you will be able to:
- Write semantic HTML that conveys meaning and structure
- Implement proper document structure and metadata
- Follow accessibility best practices (WCAG compliance)
- Optimize HTML for performance
- Maintain consistent code organization and formatting
- Understand the separation of concerns (HTML, CSS, JavaScript)

## 1. Use Semantic HTML Elements

Semantic HTML uses elements that clearly describe their meaning to both the browser and the developer.

### Non-Semantic (Bad)
```html
<div class="header">
  <div class="nav">
    <div class="nav-item">Home</div>
  </div>
</div>
<div class="main">
  <div class="article">
    <div class="title">Article Title</div>
  </div>
</div>
<div class="footer">
  <div>Copyright 2026</div>
</div>
```

### Semantic (Good)
```html
<header>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
    </ul>
  </nav>
</header>
<main>
  <article>
    <h1>Article Title</h1>
    <p>Article content...</p>
  </article>
</main>
<footer>
  <p>&copy; 2026</p>
</footer>
```

### Semantic Elements Reference

| Element | Purpose |
|---------|---------|
| `<header>` | Introductory content or navigational aids |
| `<nav>` | Navigation links |
| `<main>` | Dominant content of the document |
| `<article>` | Self-contained composition |
| `<section>` | Thematic grouping of content |
| `<aside>` | Tangentially related content |
| `<footer>` | Footer for its nearest sectioning root |
| `<figure>` | Self-contained content with optional caption |
| `<figcaption>` | Caption for a figure element |
| `<mark>` | Highlighted text |
| `<time>` | Machine-readable date/time |

## 2. Proper Document Structure

Every HTML document should have a consistent, well-formed structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Descriptive Page Title</title>
  <meta name="description" content="Brief description of the page content">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <!-- Site header content -->
  </header>
  
  <main>
    <!-- Primary page content -->
  </main>
  
  <footer>
    <!-- Site footer content -->
  </footer>
  
  <script src="scripts.js"></script>
</body>
</html>
```

## 3. Heading Hierarchy

Headings should form a logical hierarchy without skipping levels:

```html
<h1>Page Title (one per page)</h1>
  <h2>Section Title</h2>
    <h3>Sub-section Title</h3>
  <h2>Another Section</h2>
    <h3>Sub-section</h3>
      <h4>Detail</h4>
```

### Rules
- One `<h1>` per page
- Don't skip heading levels (h1 → h3 is invalid)
- Use headings for structure, not styling
- Screen readers use headings for navigation

## 4. Accessibility (A11y) Best Practices

### Alt Text for Images
```html
<!-- Good: Descriptive alt text -->
<img src="chart.png" alt="Bar chart showing Q1 sales growth of 25%">

<!-- Good: Decorative image -->
<img src="decoration.png" alt="" role="presentation">

<!-- Bad: Missing alt -->
<img src="photo.jpg">
```

### ARIA Attributes
```html
<!-- Navigation landmark -->
<nav aria-label="Main navigation">
  <ul>
    <li><a href="/">Home</a></li>
  </ul>
</nav>

<!-- Button with accessible label -->
<button aria-label="Close dialog" onclick="closeDialog()">×</button>

<!-- Live region for dynamic content -->
<div aria-live="polite" aria-atomic="true">
  <!-- Dynamic content updates -->
</div>
```

### Form Accessibility
```html
<label for="email">Email address</label>
<input type="email" id="email" name="email" required aria-describedby="email-help">

<fieldset>
  <legend>Contact preferences</legend>
  <input type="checkbox" id="email-pref" name="contact" value="email">
  <label for="email-pref">Email notifications</label>
</fieldset>
```

## 5. Forms Best Practices

```html
<form action="/submit" method="POST" novalidate>
  <div class="form-group">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" 
           minlength="3" maxlength="20" 
           pattern="[a-zA-Z0-9]+" required>
    <span class="error-message" role="alert"></span>
  </div>
  
  <div class="form-group">
    <label for="country">Country:</label>
    <select id="country" name="country">
      <option value="">Select a country</option>
      <option value="us">United States</option>
      <option value="ca">Canada</option>
    </select>
  </div>
  
  <button type="submit">Submit</button>
</form>
```

## 6. Performance Best Practices

### Defer Non-Critical JavaScript
```html
<!-- Bad: Blocking script -->
<script src="analytics.js"></script>

<!-- Good: Deferred script -->
<script src="analytics.js" defer></script>

<!-- Good: Async for independent scripts -->
<script src="widget.js" async></script>
```

### Load CSS Early, JS Late
```html
<head>
  <!-- CSS in head for immediate styling -->
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <!-- Content -->
  
  <!-- JavaScript at end of body for faster rendering -->
  <script src="app.js" defer></script>
</body>
```

### Image Optimization
```html
<!-- Responsive images -->
<img src="photo-800.jpg" 
     srcset="photo-400.jpg 400w, photo-800.jpg 800w, photo-1200.jpg 1200w"
     sizes="(max-width: 600px) 100vw, 800px"
     alt="Descriptive alt text"
     loading="lazy"
     decoding="async">

<!-- Picture element for art direction -->
<picture>
  <source media="(min-width: 800px)" srcset="hero-wide.jpg">
  <source media="(min-width: 400px)" srcset="hero-tablet.jpg">
  <img src="hero-mobile.jpg" alt="Hero image" loading="lazy">
</picture>
```

## 7. Encoding and Validation

### Always Declare Character Encoding
```html
<meta charset="UTF-8">
```

### Validate Your HTML
- Use W3C Validator: https://validator.w3.org/
- Check for unclosed tags, invalid nesting, duplicate IDs
- Ensure all attributes are valid

## 8. Link Best Practices

```html
<!-- Use descriptive link text -->
<a href="/register">Create an account</a>
<!-- NOT: <a href="/register">Click here</a> -->

<!-- External links -->
<a href="https://external-site.com" target="_blank" rel="noopener noreferrer">
  External Resource
</a>

<!-- Skip navigation link -->
<a href="#main-content" class="skip-link">Skip to main content</a>
```

## 9. Commenting and Code Organization

```html
<!-- ==========================================
     HEADER SECTION
     ========================================== -->
<header>
  <!-- Logo -->
  <a href="/" class="logo">
    <img src="logo.svg" alt="Company Name">
  </a>
  
  <!-- Main Navigation -->
  <nav aria-label="Main">
    <ul>
      <li><a href="/">Home</a></li>
    </ul>
  </nav>
</header>

<!-- ==========================================
     MAIN CONTENT
     ========================================== -->
<main id="main-content">
  <!-- ... -->
</main>
```

## 10. Common Mistakes to Avoid

| Mistake | Why It's Bad | Fix |
|---------|-------------|-----|
| Missing `alt` on images | Accessibility failure | Add descriptive alt text |
| Skipping heading levels | Breaks document outline | Maintain hierarchy |
| Inline styles | Violates separation of concerns | Use CSS classes |
| Block elements in inline | Invalid markup | Use proper nesting |
| Duplicate IDs | Invalid HTML, JS bugs | Use unique IDs or classes |
| Missing `<label>` | Form accessibility failure | Always label inputs |
| Not declaring lang | Accessibility issue | Add `lang` to `<html>` |
| Using `<br>` for spacing | Presentational misuse | Use CSS margin/padding |
| Deprecated elements (`<center>`, `<font>`) | Not standards-compliant | Use modern HTML/CSS |
| Missing doctype | Quirks mode rendering | Always use `<!DOCTYPE html>` |

## Summary Notes

- Semantic HTML improves accessibility, SEO, and maintainability
- Use proper document structure with `<!DOCTYPE html>` and `<html lang="...">`
- Maintain heading hierarchy (one h1, no skipping levels)
- Always provide alt text for images
- Use ARIA attributes when native semantics are insufficient
- Load CSS in `<head>`, scripts before `</body>` with defer
- Validate HTML regularly with W3C Validator
- Use descriptive link text, never "click here"
- Include `rel="noopener noreferrer"` on external links
- Keep separation of concerns: HTML for structure, CSS for presentation, JS for behavior
