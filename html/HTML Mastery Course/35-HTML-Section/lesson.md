# Module 35: HTML `<section>` Element

## Introduction

The `<section>` element is a semantic HTML5 element that represents a generic standalone section of a document. It is used to group related content together thematically, typically with a heading. Think of a `<section>` as a chapter in a book, a tabbed panel in a dialog, or a distinct grouping of content on a webpage.

Sections should always have a heading (`<h1>`–`<h6>`) to describe their purpose, unless the heading is provided by an ancestor element. The `<section>` element helps search engines, screen readers, and developers understand the logical structure of a document.

## Learning Objectives

By the end of this module, you will be able to:

- Understand the purpose and semantics of the `<section>` element
- Distinguish `<section>` from `<article>`, `<div>`, and `<main>`
- Properly nest and structure sections within a document
- Use sections to create document outlines
- Apply sections in various real-world scenarios
- Follow accessibility best practices with sections

## Syntax and Basic Usage

```html
<section>
  <h2>Section Title</h2>
  <p>Content related to this section's theme.</p>
</section>
```

## Visual Explanation

```
┌─────────────────────────────────────┐
│ <main>                              │
│  ┌───────────────────────────────┐  │
│  │ <section> (Chapter 1)         │  │
│  │  ┌─────────────────────────┐  │  │
│  │  │ <h2>Introduction</h2>   │  │  │
│  │  │ <p>Content...</p>       │  │  │
│  │  └─────────────────────────┘  │  │
│  └───────────────────────────────┘  │
│                                     │
│  ┌───────────────────────────────┐  │
│  │ <section> (Chapter 2)         │  │
│  │  ┌─────────────────────────┐  │  │
│  │  │ <h2>Getting Started</h2>│  │  │
│  │  │ <p>Content...</p>       │  │  │
│  │  └─────────────────────────┘  │  │
│  └───────────────────────────────┘  │
└─────────────────────────────────────┘
```

## When to Use `<section>` vs. Other Elements

### `<section>` vs. `<article>`

| `<section>` | `<article>` |
|-------------|-------------|
| Thematic grouping of content | Self-contained, independently distributable content |
| Could be a chapter, tab, or group | Could be a blog post, news story, or comment |
| Often part of a larger whole | Can stand alone (e.g., in RSS feed) |
| Example: "Features" section on product page | Example: A single blog post |

**Rule of thumb:** If the content could be syndicated (RSS feed, shared independently), use `<article>`. Otherwise, use `<section>`.

### `<section>` vs. `<div>`

| `<section>` | `<div>` |
|-------------|---------|
| Has semantic meaning | Generic container, no semantic meaning |
| Should have a heading | No heading required |
| Contributes to document outline | Does not affect outline |
| Used for thematic grouping | Used for styling or scripting hooks |

## Nesting and Document Outline

Sections can be nested to create a hierarchical document structure:

```html
<section>
  <h2>Chapter 1: Introduction</h2>
  <p>Opening content...</p>
  
  <section>
    <h3>1.1 Background</h3>
    <p>Background information...</p>
  </section>
  
  <section>
    <h3>1.2 Purpose</h3>
    <p>The purpose of this document...</p>
  </section>
</section>
```

### Document Outline Algorithm

HTML5 defines a document outline algorithm where `<section>` elements (along with `<article>`, `<aside>`, and `<nav>`) create sections in the outline:

```
1. Chapter 1: Introduction (h2)
  1.1 Background (h3)
  1.2 Purpose (h3)
2. Chapter 2: Main Content (h2)
  2.1 Key Findings (h3)
  2.2 Analysis (h3)
```

**Important Note:** The HTML5 outline algorithm is not implemented by browsers or screen readers. Always use proper heading hierarchy (`<h1>` → `<h2>` → `<h3>`) for accurate accessibility representation.

## ARIA and Accessibility

The `<section>` element has an implicit ARIA role of `region` **only when** it has an accessible name (e.g., via `aria-labelledby` or `aria-label`).

```html
<!-- Becomes a landmark region -->
<section aria-labelledby="features-heading">
  <h2 id="features-heading">Features</h2>
  <p>Feature details...</p>
</section>

<!-- NOT a landmark region (no accessible name) -->
<section>
  <h2>Features</h2>
  <p>Feature details...</p>
</section>
```

### Adding Accessible Names

```html
<!-- Using aria-labelledby -->
<section aria-labelledby="section-title">
  <h2 id="section-title">Pricing</h2>
</section>

<!-- Using aria-label -->
<section aria-label="Pricing information">
  <h2>Our Plans</h2>
</section>
```

## Practical Examples

### Example 1: Landing Page Sections

```html
<main>
  <section id="hero">
    <h1>Welcome to Our Platform</h1>
    <p>The best solution for your business.</p>
    <a href="/signup" class="cta-button">Get Started</a>
  </section>
  
  <section id="features" aria-labelledby="features-title">
    <h2 id="features-title">Key Features</h2>
    <div class="feature-grid">
      <article>
        <h3>Fast Performance</h3>
        <p>Optimized for speed...</p>
      </article>
      <article>
        <h3>Secure Platform</h3>
        <p>Enterprise-grade security...</p>
      </article>
    </div>
  </section>
  
  <section id="pricing">
    <h2>Choose Your Plan</h2>
    <!-- Pricing cards -->
  </section>
</main>
```

### Example 2: Blog Post with Multiple Sections

```html
<article>
  <header>
    <h1>How to Master HTML5 Semantics</h1>
    <p>By Jane Doe | Published: <time datetime="2026-06-01">June 1, 2026</time></p>
  </header>
  
  <section id="introduction">
    <h2>Introduction</h2>
    <p>HTML5 introduced many semantic elements...</p>
  </section>
  
  <section id="main-content">
    <h2>Key Semantic Elements</h2>
    
    <section id="section-element">
      <h3>The &lt;section&gt; Element</h3>
      <p>The section element represents a standalone section...</p>
    </section>
    
    <section id="article-element">
      <h3>The &lt;article&gt; Element</h3>
      <p>The article element represents a self-contained composition...</p>
    </section>
  </section>
  
  <section id="conclusion">
    <h2>Conclusion</h2>
    <p>Using semantic HTML is crucial for accessibility and SEO...</p>
  </section>
  
  <footer>
    <p>Tags: <a href="/tag/html">HTML</a>, <a href="/tag/semantics">Semantics</a></p>
  </footer>
</article>
```

### Example 3: Dashboard Widget Sections

```html
<main>
  <h1>Analytics Dashboard</h1>
  
  <div class="dashboard-grid">
    <section aria-labelledby="revenue-title">
      <h2 id="revenue-title">Revenue Overview</h2>
      <div class="stat">$12,345</div>
      <p>+15% vs last month</p>
    </section>
    
    <section aria-labelledby="users-title">
      <h2 id="users-title">User Statistics</h2>
      <div class="stat">1,234</div>
      <p>Active users today</p>
    </section>
  </div>
</main>
```

## Common Mistakes

### Mistake 1: Using `<section>` as a Styling Container

```html
<!-- INCORRECT: No thematic relationship, just styling -->
<section class="red-bg">
  <p>Some text</p>
  <img src="image.jpg" alt="">
  <button>Click me</button>
</section>
<!-- Use <div> instead for pure styling -->
```

### Mistake 2: Omitting Headings in `<section>`

```html
<!-- INCORRECT: Missing heading -->
<section>
  <p>Content without a thematic heading...</p>
</section>

<!-- CORRECT: With heading -->
<section>
  <h2>About Our Services</h2>
  <p>Content about services...</p>
</section>
```

### Mistake 3: Using `<section>` for Single-Line Grouping

```html
<!-- INCORRECT: Too trivial for a section -->
<section>
  <p>Just one paragraph.</p>
</section>
```

### Mistake 4: Nesting `<section>` Inside `<header>` or `<footer>`

```html
<!-- INCORRECT -->
<header>
  <section>
    <h2>Site Title</h2>
  </section>
</header>

<!-- CORRECT -->
<header>
  <h1>Site Title</h1>
</header>
```

### Mistake 5: Confusing `<section>` with `<main>`

```html
<!-- INCORRECT: main should be the overall container -->
<main>
  <main>
    <h1>Title</h1>
  </main>
</main>

<!-- CORRECT -->
<main>
  <section>
    <h1>Title</h1>
  </section>
</main>
```

## Best Practices

1. **Always include a heading** (`<h1>`–`<h6>`) in each `<section>`
2. **Use `<section>` for thematic grouping**, not for styling hooks
3. **Choose `<article>` over `<section>`** if the content can stand alone
4. **Add `aria-labelledby` or `aria-label`** to convert sections into landmarks
5. **Follow proper heading hierarchy** — don't skip levels
6. **Nest sections appropriately** for hierarchical content
7. **Use sections for document structure**, not for layout grids
8. **Validate your HTML** to check for proper nesting
9. **Avoid empty sections** — they confuse screen readers
10. **Use `id` attributes** for in-page navigation anchors

## Summary Notes

| Aspect | Details |
|--------|---------|
| **Purpose** | Thematic grouping of related content |
| **Heading** | Should always have a heading (`<h1>`–`<h6>`) |
| **ARIA Role** | `region` only when it has an accessible name |
| **Display** | Block-level element |
| **Nesting** | Can contain other sections, articles, divs |
| **Vs. `<article>`** | Section is part of a whole; article is self-contained |
| **Vs. `<div>`** | Section has semantic meaning; div does not |
| **Outline** | Creates a section in the HTML5 outline algorithm |
| **Accessibility** | Becomes a landmark only with accessible name |
