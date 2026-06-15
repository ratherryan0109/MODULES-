# Module 82: Clean Code Standards

## Introduction

Clean code is code that is easy to read, understand, and maintain. In HTML, clean code standards encompass consistent formatting, meaningful naming conventions, proper indentation, logical organization, and adherence to web standards. Writing clean HTML is not just about aesthetics — it directly impacts team productivity, debugging efficiency, site maintainability, and the ability to scale projects over time.

## Learning Objectives

By the end of this module, you will be able to:
- Write consistently formatted HTML
- Apply meaningful naming conventions for classes, IDs, and attributes
- Organize HTML code logically
- Implement proper commenting strategies
- Understand code linting and formatting tools
- Follow team coding conventions
- Create maintainable, scalable HTML structures

## 1. Consistent Formatting

### Indentation

Use consistent indentation (2 spaces is the most common standard):

```html
<!-- Good: Consistent 2-space indentation -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Clean Code</title>
</head>
<body>
  <header>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </nav>
  </header>
  
  <main>
    <article>
      <h1>Article Title</h1>
      <p>Article content goes here.</p>
    </article>
  </main>
  
  <footer>
    <p>&copy; 2026</p>
  </footer>
</body>
</html>
```

### Line Length

Keep lines under 80-120 characters for readability:

```html
<!-- Bad: Very long line -->
<img src="https://example.com/images/products/category/electronics/headphones/premium-wireless-headphones-black-edition.jpg" alt="Premium Wireless Headphones">

<!-- Good: Break long attributes -->
<img src="https://example.com/images/products/category/electronics/headphones/premium-wireless-headphones-black-edition.jpg" 
     alt="Premium Wireless Headphones">
```

### Attribute Ordering

Establish consistent attribute ordering:

```html
<!-- Google HTML Style Guide recommendation -->
<input 
  type="text" 
  id="username" 
  class="form-input" 
  name="username" 
  value="" 
  placeholder="Enter username" 
  required 
  disabled>
```

**Recommended attribute order:**
1. `src`, `href`, `type`
2. `id`
3. `class`
4. `data-*`
5. `aria-*`, `role`
6. `name`, `value`
7. `placeholder`, `title`, `alt`
8. `required`, `disabled`, `readonly`
9. Event handlers (`onclick`, etc.)

## 2. Naming Conventions

### Classes (BEM - Block Element Modifier)

```html
<!-- Bad: Unclear naming -->
<div class="blue-box important">...</div>
<div class="wrapper">...</div>

<!-- Good: BEM naming -->
<div class="card">
  <div class="card__header">
    <h2 class="card__title">Card Title</h2>
  </div>
  <div class="card__body">
    <p class="card__text">Card content</p>
  </div>
  <div class="card__footer">
    <button class="card__button card__button--primary">Submit</button>
  </div>
</div>
```

### IDs

IDs should be unique and descriptive, used for JavaScript hooks or anchor targets:

```html
<!-- Good: Descriptive ID for specific purpose -->
<section id="pricing-section">
<div id="main-content">
<input id="user-email" type="email">

<!-- Bad: Generic or non-descriptive -->
<div id="div1">
<section id="section">
<div id="item">
```

### Data Attributes

Use `data-*` attributes for JavaScript hooks:

```html
<!-- Good: Data attributes for JS -->
<button data-action="submit" data-user-id="123">Submit</button>
<div data-component="modal" data-modal-type="confirmation">...</div>

<!-- Bad: Inline event handlers -->
<button onclick="submitForm(123)">Submit</button>
```

## 3. Code Organization

### Logical Section Grouping

```html
<!-- ========================================
     Header Section
     ======================================== -->
<header class="site-header">
  ...
</header>

<!-- ========================================
     Main Content
     ======================================== -->
<main class="main-content">
  <section class="hero-section">...</section>
  <section class="features-section">...</section>
</main>

<!-- ========================================
     Footer
     ======================================== -->
<footer class="site-footer">
  ...
</footer>
```

### Component-Based Structure

Organize HTML by component, not by page section:

```html
<!-- Card Component -->
<article class="card">
  <div class="card__header">
    <img class="card__image" src="..." alt="...">
  </div>
  <div class="card__body">
    <h3 class="card__title">Card Title</h3>
    <p class="card__text">Card description text.</p>
  </div>
  <div class="card__footer">
    <a href="#" class="card__link">Read more</a>
  </div>
</article>

<!-- Same card component reused -->
<article class="card">
  ...
</article>
```

## 4. Commenting Strategy

### Section Comments

```html
<!-- ==========================================
     Navigation Component
     ========================================== -->
<nav class="nav" aria-label="Main">
  <ul class="nav__list">
    <li class="nav__item"><a href="/" class="nav__link">Home</a></li>
    <li class="nav__item"><a href="/about" class="nav__link">About</a></li>
  </ul>
</nav>
<!-- /Navigation Component -->
```

### Inline Comments (Use Sparingly)

```html
<!-- Temporary: Remove after July 2026 launch -->
<div class="banner banner--legacy">...</div>

<!-- Accessibility: Hidden label for icon button -->
<button aria-label="Search">
  <span class="icon icon--search" aria-hidden="true"></span>
</button>
```

## 5. Code Linting and Formatting Tools

| Tool | Purpose | Configuration |
|------|---------|---------------|
| **HTMLHint** | HTML linting | `.htmlhintrc` |
| **Prettier** | Code formatting | `.prettierrc` |
| **EditorConfig** | Editor consistency | `.editorconfig` |
| **W3C Validator** | Standards validation | Online tool |

### Example `.editorconfig`
```ini
root = true

[*]
indent_style = space
indent_size = 2
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.md]
trim_trailing_whitespace = false
```

### Example `.htmlhintrc`
```json
{
  "tagname-lowercase": true,
  "attr-lowercase": true,
  "attr-value-double-quotes": true,
  "doctype-first": true,
  "tag-pair": true,
  "spec-char-escape": true,
  "id-unique": true,
  "src-not-empty": true,
  "attr-no-duplication": true,
  "title-require": true
}
```

## 6. Clean Code Principles

### DRY (Don't Repeat Yourself)

```html
<!-- Bad: Repeated structure -->
<div class="product">
  <img src="product1.jpg" alt="Product 1">
  <h2>Product 1</h2>
  <p>$19.99</p>
</div>
<div class="product">
  <img src="product2.jpg" alt="Product 2">
  <h2>Product 2</h2>
  <p>$29.99</p>
</div>

<!-- Good: Use templates/components -->
<!-- Use JavaScript templating or server-side includes -->
```

### KISS (Keep It Simple, Stupid)

```html
<!-- Bad: Overly complex nesting -->
<div class="wrapper">
  <div class="inner-wrapper">
    <div class="content-area">
      <div class="text-container">
        <span class="text">Hello</span>
      </div>
    </div>
  </div>
</div>

<!-- Good: Simple flat structure -->
<p class="greeting">Hello</p>
```

### Separation of Concerns

```html
<!-- Bad: Mixing presentation, structure, and behavior -->
<div style="color: red; font-size: 18px;" onclick="alert('clicked')">Click me</div>

<!-- Good: Separate concerns -->
<div class="alert">Click me</div>

<!-- CSS: .alert { color: red; font-size: 18px; cursor: pointer; } -->
<!-- JS: document.querySelector('.alert').addEventListener('click', () => alert('clicked')); -->
```

## Common Mistakes

| Mistake | Problem | Fix |
|---------|---------|-----|
| Inconsistent indentation | Hard to read | Use a formatter like Prettier |
| Too many <div>s (divitis) | Deep nesting, unclear structure | Use semantic elements |
| Missing closing tags | Broken layout | Always close tags or use self-closing syntax |
| Inline styles/event handlers | violates separation of concerns | Use CSS classes and event listeners |
| Non-descriptive class names | Unclear purpose | Use BEM or descriptive names |
| Mixed quote styles | Inconsistent | Use double quotes consistently |
| No character encoding declaration | Potential encoding issues | Always add `<meta charset="UTF-8">` |
| Skipping <!DOCTYPE html> | Quirks mode | Always include doctype |

## Summary Notes

- Clean code is readable, maintainable, and consistent
- Use 2-space indentation consistently
- Follow a naming convention (BEM is recommended)
- Keep lines under 80-120 characters
- Use comments to describe sections, not lines
- Use linting tools (HTMLHint, Prettier) for consistency
- Follow the DRY, KISS, and Separation of Concerns principles
- Avoid inline styles, event handlers, and deprecated elements
- Validate HTML with W3C validator
- Organize code by components, not page sections
