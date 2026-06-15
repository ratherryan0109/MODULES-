# Module 38: HTML `<footer>` Element

## Introduction

The `<footer>` element represents the footer of its nearest ancestor sectioning content or sectioning root element. It typically contains information about the author, copyright, contact information, sitemap links, back-to-top links, and related documents. A `<footer>` is not just for the bottom of the page — it can also be used within `<article>`, `<section>`, and other elements to represent footers for those sections.

## Learning Objectives

By the end of this module, you will be able to:
- Understand the purpose and usage of `<footer>` at page and section levels
- Properly structure footer content with semantic elements
- Implement multi-column footer layouts
- Add accessible contact information and navigation
- Understand the implicit ARIA role and content model restrictions

## Syntax and Basic Usage

```html
<footer>
  <p>&copy; 2026 Company Name. All rights reserved.</p>
</footer>
```

## Footer in Different Contexts

### Page-Level Footer

```html
<body>
  <main>Primary content</main>
  <footer>
    <nav aria-label="Footer navigation">
      <a href="/privacy">Privacy Policy</a>
      <a href="/terms">Terms of Service</a>
    </nav>
    <p>&copy; 2026 Example Corp</p>
    <address>
      Contact: <a href="mailto:info@example.com">info@example.com</a>
    </address>
  </footer>
</body>
```

### Section-Level Footer

```html
<article>
  <h2>Blog Post</h2>
  <p>Content...</p>
  <footer>
    <p>Posted by Jane Doe | <time datetime="2026-06-01">June 1, 2026</time></p>
    <p>Tags: <a href="#">HTML</a>, <a href="#">CSS</a></p>
  </footer>
</article>
```

## Content Model Restrictions

A `<footer>` element **must not** contain:
- `<header>`
- `<main>`
- Another `<footer>`

It can contain:
- `<nav>`, `<address>`, `<p>`, `<ul>`, `<div>`, `<section>`, and flow content

## Implicit ARIA Role

The `<footer>` element has an implicit ARIA role of `contentinfo` **only when it is a page-level footer** (not nested inside an article, section, or aside).

```html
<footer role="contentinfo"> <!-- Implicit when page-level -->
```

When inside an `<article>`, `<section>`, or `<aside>`, `<footer>` has **no** implicit landmark role.

## Practical Examples

### Multi-Column Footer

```html
<footer>
  <div class="footer-grid">
    <section>
      <h2>Company</h2>
      <ul>
        <li><a href="/about">About Us</a></li>
        <li><a href="/careers">Careers</a></li>
        <li><a href="/press">Press</a></li>
      </ul>
    </section>
    <section>
      <h2>Products</h2>
      <ul>
        <li><a href="/product1">Product 1</a></li>
        <li><a href="/product2">Product 2</a></li>
      </ul>
    </section>
    <section>
      <h2>Support</h2>
      <ul>
        <li><a href="/help">Help Center</a></li>
        <li><a href="/contact">Contact Us</a></li>
      </ul>
    </section>
  </div>
  <hr>
  <p class="copyright">&copy; 2026 Company. All rights reserved.</p>
</footer>
```

### Footer with Address

```html
<footer>
  <address>
    <strong>Company Inc.</strong><br>
    123 Main Street<br>
    City, State 12345<br>
    <a href="mailto:info@company.com">info@company.com</a><br>
    <a href="tel:+1234567890">(123) 456-7890</a>
  </address>
  <p>&copy; 2026 Company Inc.</p>
</footer>
```

## Common Mistakes

- **Putting `<footer>` inside `<main>` incorrectly**: `<footer>` should be outside `<main>` for page-level, but can be inside for section-level
- **Nesting `<footer>` inside `<footer>`**: Invalid HTML
- **Omitting `<address>` for contact info**: `<address>` is the semantic element for contact information
- **Using `<footer>` for non-footer content**: Don't use `<footer>` for purely decorative separators

## Best Practices

1. Use `<address>` for contact information within `<footer>`
2. Include `<nav>` for footer link groups
3. Use `<small>` for legal disclaimers
4. Do not nest `<footer>` or include `<main>`/`<header>`
5. Use CSS Grid for multi-column layouts
6. Add `aria-label` to footer `<nav>` elements
7. Ensure proper contrast for footer text
8. Keep footer content concise and organized

## Summary Notes

| Aspect | Details |
|--------|---------|
| **Purpose** | Footer for page or section |
| **ARIA Role** | `contentinfo` (page-level only) |
| **Nesting** | Can be in `<article>`, `<section>`, `<body>` |
| **Cannot contain** | `<header>`, `<main>`, `<footer>` |
| **Display** | Block-level |
| **Common content** | Copyright, links, address, sitemap |
