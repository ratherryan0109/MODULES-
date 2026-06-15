# Module 34: HTML `<main>` Element

## Introduction

The `<main>` element is one of the most important semantic HTML5 elements. It represents the dominant content of the `<body>` of a document. The main content area consists of content that is directly related to or expands upon the central topic of a document or the central functionality of an application.

Before HTML5, developers used generic `<div>` elements with `id="main"` or `class="main"` which provided no semantic meaning to browsers, screen readers, or search engines. The `<main>` element changed this by giving developers a standardized way to mark up the primary content area.

## Learning Objectives

By the end of this module, you will be able to:

- Understand the purpose and appropriate use of the `<main>` element
- Identify where `<main>` fits within the HTML document hierarchy
- Recognize the one-document-one-main rule and its exceptions
- Distinguish between `<main>` and other semantic elements
- Implement accessible skip-navigation links using `<main>`
- Apply proper nesting and avoid common pitfalls
- Use `<main>` effectively in single-page applications (SPAs)

## Syntax and Basic Usage

### The Element

```html
<main>
  <!-- Primary page content goes here -->
</main>
```

### Basic Document Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Page Title</title>
</head>
<body>
  <header>Site header with navigation</header>
  
  <main>
    <h1>Welcome to My Website</h1>
    <p>This is the primary content of the page.</p>
    <article>
      <h2>Blog Post Title</h2>
      <p>Content of the blog post...</p>
    </article>
  </main>
  
  <footer>Site footer with copyright</footer>
</body>
</html>
```

## Visual Explanation

```
┌──────────────────────────────────────┐
│ <header>                             │
│   Logo, Navigation, Site branding    │
├──────────────────────────────────────┤
│ <main>                               │
│ ┌──────────────────────────────────┐ │
│ │ <article>                        │ │
│ │   Primary content of the page    │ │
│ └──────────────────────────────────┘ │
│ ┌──────────────────────────────────┐ │
│ │ <section>                        │ │
│ │   Related content groups         │ │
│ └──────────────────────────────────┘ │
├──────────────────────────────────────┤
│ <footer>                             │
│   Copyright, Links, Legal info       │
└──────────────────────────────────────┘
```

## The One `<main>` Rule

### Key Constraint

A document **must not** contain more than one `<main>` element unless the other instances are hidden via the `hidden` attribute. This is a strict content model requirement.

### Valid: Single `<main>`

```html
<main>
  <h1>About Us</h1>
  <p>We are a company that...</p>
</main>
```

### Valid: Hidden Multiple `<main>`

```html
<main>
  <!-- Default content -->
</main>
<main hidden>
  <!-- Fallback content shown via JavaScript -->
</main>
```

### Invalid: Multiple Visible `<main>`

```html
<main>
  <h1>Section A</h1>
</main>
<main>
  <h1>Section B</h1>
</main>
<!-- This violates the spec! Only use one non-hidden <main> -->
```

## Nesting Rules

The `<main>` element **must not** be a descendant of the following elements:
- `<article>`
- `<aside>`
- `<footer>`
- `<header>`
- `<nav>`

It should be a direct child of `<body>` or be nested only in elements that represent the document root structure.

### Correct Placement

```html
<body>
  <header>...</header>
  <main>
    <article>
      <header>Article header (OK)</header>
      <p>Content</p>
      <footer>Article footer (OK)</footer>
    </article>
  </main>
  <footer>...</footer>
</body>
```

### Incorrect Placement

```html
<body>
  <article>
    <main>  <!-- WRONG: <main> inside <article> -->
      <p>Content</p>
    </main>
  </article>
</body>
```

## Accessibility: Skip Navigation

The `<main>` element is the primary target for skip-navigation links, which allow keyboard users to bypass repetitive navigation.

```html
<body>
  <a href="#main-content" class="skip-link">Skip to main content</a>
  
  <header>
    <nav>...</nav>
  </header>
  
  <main id="main-content">
    <h1>Main Content</h1>
  </main>
</body>
```

With CSS styling:

```css
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: #000;
  color: #fff;
  padding: 8px;
  z-index: 100;
}
.skip-link:focus {
  top: 0;
}
```

## Screen Reader Behavior

When a screen reader encounters `<main>`, it typically announces "main landmark" or "main content start." Users can navigate between landmarks using keyboard shortcuts (e.g., pressing "D" in NVDA or VoiceOver's rotor menu).

The `<main>` element implicitly has a role of `main` in the accessibility tree, which is why it receives this special treatment.

## Implicit ARIA Role

The `<main>` element automatically receives:

```html
<main role="main">
```

You should **not** add `role="main"` to a `<main>` element, as the native semantic is already sufficient. However, for legacy browser support, some developers include it redundantly:

```html
<main role="main">
```

This is safe but unnecessary in modern browsers.

## `<main>` in Single-Page Applications

In SPAs, the `<main>` element's content changes dynamically via JavaScript. This can cause screen reader confusion since the browser might not announce content changes.

### Solution: `aria-live` Region

```html
<main aria-live="polite" aria-atomic="true">
  <!-- Dynamic content -->
</main>
```

### Better Solution: Route Announcements

```javascript
function navigateTo(newContent) {
  document.querySelector('main').innerHTML = newContent;
  document.querySelector('main').focus();
  // Screen reader announces the new heading
}
```

With CSS:

```css
main:focus {
  outline: none;
}
```

## Practical Examples

### Example 1: Blog Page

```html
<body>
  <header>
    <nav aria-label="Main navigation">
      <a href="/">Home</a>
      <a href="/blog">Blog</a>
      <a href="/contact">Contact</a>
    </nav>
  </header>
  
  <main>
    <h1>Latest Blog Posts</h1>
    <article>
      <h2>Understanding HTML Semantics</h2>
      <p>Posted on <time datetime="2026-01-15">January 15, 2026</time></p>
      <p>HTML5 introduced several semantic elements...</p>
      <a href="/blog/html-semantics">Read more</a>
    </article>
    <article>
      <h2>CSS Grid Layout</h2>
      <p>Posted on <time datetime="2026-01-10">January 10, 2026</time></p>
      <p>CSS Grid is a powerful layout system...</p>
      <a href="/blog/css-grid">Read more</a>
    </article>
  </main>
  
  <footer>
    <p>&copy; 2026 My Blog. All rights reserved.</p>
  </footer>
</body>
```

### Example 2: Application Dashboard

```html
<body>
  <header>
    <h1>Analytics Dashboard</h1>
    <nav aria-label="Dashboard sections">
      <a href="#overview">Overview</a>
      <a href="#reports">Reports</a>
      <a href="#settings">Settings</a>
    </nav>
  </header>
  
  <main>
    <section id="overview">
      <h2>Overview</h2>
      <div class="stats-grid">
        <div class="stat-card">Users: 1,234</div>
        <div class="stat-card">Revenue: $12,345</div>
        <div class="stat-card">Orders: 567</div>
      </div>
    </section>
    
    <section id="reports">
      <h2>Reports</h2>
      <!-- Chart components here -->
    </section>
  </main>
  
  <footer>
    <p>Last updated: <time datetime="2026-06-12T10:00:00">Today at 10:00 AM</time></p>
  </footer>
</body>
```

## Common Mistakes

### Mistake 1: Multiple Visible `<main>` Elements

```html
<!-- INCORRECT -->
<main>
  <h1>Section 1</h1>
</main>
<main>
  <h1>Section 2</h1>
</main>
```

### Mistake 2: `<main>` Inside `<article>`

```html
<!-- INCORRECT -->
<article>
  <main>
    <p>Content</p>
  </main>
</article>
```

### Mistake 3: Wrapping Everything in `<main>`

```html
<!-- INCORRECT: Don't wrap header/footer in main -->
<main>
  <header>...</header>
  <section>...</section>
  <footer>...</footer>
</main>
```

### Mistake 4: Using `<main>` for Sidebar Content

```html
<!-- INCORRECT: Sidebar belongs in <aside> -->
<main>
  <aside>Sidebar content</aside>
</main>
<!-- CORRECT: -->
<main>Primary content</main>
<aside>Sidebar content</aside>
```

### Mistake 5: Omitting `<main>` Entirely

Many pages lack a `<main>` element, making it harder for screen reader users to navigate to the primary content.

## Best Practices

1. **Always use exactly one `<main>` element** per page (visible at a time)
2. **Place `<main>` directly after `<header>`** and before `<footer>`
3. **Do not nest `<main>` inside `<article>`, `<aside>`, `<footer>`, `<header>`, or `<nav>`**
4. **Always include a heading** (`<h1>`-`<h6>`) as the first child of `<main>`
5. **Pair `<main>` with a skip link** for maximum accessibility
6. **Use `role="main"` only if supporting very old browsers** that don't recognize `<main>`
7. **In SPAs, manage focus** when content updates to inform screen readers
8. **Apply `aria-live="polite"`** on `<main>` in dynamic applications
9. **Ensure `<main>` wraps the primary content only**, not sidebars or navigation
10. **Use semantic elements inside `<main>`** such as `<article>`, `<section>`, `<p>`, etc.

## Browser Support

The `<main>` element is supported in all modern browsers:
- Chrome 5+
- Firefox 4+
- Safari 5.1+
- Edge 12+
- IE (partial support in IE 9-11, requires HTML5 shiv)

## Summary Notes

| Aspect | Details |
|--------|---------|
| **Purpose** | Represents the dominant content of the document body |
| **Rule** | Only one visible `<main>` per document |
| **Nesting** | Must not be inside `<article>`, `<aside>`, `<footer>`, `<header>`, `<nav>` |
| **ARIA Role** | Implicit `main` role |
| **Accessibility** | Primary landmark for skip navigation |
| **Display** | Block-level element by default |
| **Attributes** | Supports global attributes + `hidden` for multiple instances |
| **Best used for** | Core page content, not sidebars, nav, or site chrome |
