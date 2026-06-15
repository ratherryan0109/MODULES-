# Lesson 32: HTML Header

## Introduction

The `<header>` element is a semantic HTML5 element that represents introductory content, a group of navigational aids, or a container for a set of links or headings. It is typically used at the top of a page, section, or article to introduce the content that follows.

## Learning Objectives

By the end of this lesson, you will be able to:
1. Understand the purpose and semantics of the `<header>` element
2. Use `<header>` appropriately within pages, articles, and sections
3. Structure header content with headings, navigation, and branding
4. Differentiate between page-level and section-level headers
5. Apply CSS styling to headers for visual appeal
6. Implement accessible header patterns
7. Avoid common misuse of the `<header>` element

## Theory

### What is the `<header>` Element?

The `<header>` element represents introductory content for its nearest ancestor sectioning content or sectioning root. It typically contains headings (`<h1>`–`<h6>`), logos, navigation, search forms, and other introductory elements.

### Key Characteristics

- **Semantic**: Clearly identifies the introductory portion of content
- **Flexible**: Can be used at page level, section level, or article level
- **Non-sectioning**: Unlike `<section>`, `<header>` does not create a new section in the document outline
- **Repeatable**: A single page can have multiple `<header>` elements

### Where to Use `<header>`

| Context | Usage |
|---------|-------|
| Page-level | Site header with logo, nav, and tagline |
| Article-level | Article title, author, and publication date |
| Section-level | Section title and introductory text |
| Aside-level | Widget or sidebar heading |

### Where NOT to Use `<header>`

- Inside `<footer>` or `<address>` elements
- As a child of another `<header>`
- Nested inside `<header>` recursively
- When only a heading is needed (use `<h1>`–`<h6>` directly)

## Syntax

```html
<!-- Page-level header -->
<header>
  <img src="logo.png" alt="Company Logo">
  <h1>Company Name</h1>
  <nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
  </nav>
</header>

<!-- Article-level header -->
<article>
  <header>
    <h2>Blog Post Title</h2>
    <p>By Author | Published: Jan 1, 2025</p>
  </header>
  <p>Article content...</p>
</article>
```

## Examples

### Example 1: Simple Page Header

```html
<header>
  <h1>My Website</h1>
  <p>Welcome to my personal website.</p>
</header>
```

### Example 2: Header with Logo and Navigation

```html
<header>
  <div class="logo">
    <img src="logo.svg" alt="Site Logo" width="60">
    <span>BrandName</span>
  </div>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/products">Products</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </nav>
  <form role="search">
    <input type="search" placeholder="Search...">
    <button type="submit">Search</button>
  </form>
</header>
```

### Example 3: Article Header with Metadata

```html
<article>
  <header>
    <h2>Understanding Flexbox</h2>
    <p><time datetime="2025-03-15">March 15, 2025</time> by Jane Doe</p>
    <p>Category: CSS | Tags: layout, flexbox, responsive</p>
  </header>
  <p>Flexbox is a one-dimensional layout method...</p>
</article>
```

### Example 4: Section-Level Header

```html
<section>
  <header>
    <h2>Our Services</h2>
    <p>We offer a wide range of professional services to help your business grow.</p>
  </header>
  <div class="services-grid">
    <!-- service cards -->
  </div>
</section>
```

### Example 5: Styled Page Header

```html
<header class="site-header">
  <div class="header-inner">
    <a href="/" class="site-logo">
      <img src="/images/logo.svg" alt="TechCorp" height="40">
    </a>
    <nav aria-label="Main navigation">
      <ul>
        <li><a href="/features">Features</a></li>
        <li><a href="/pricing">Pricing</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </nav>
    <a href="/signup" class="cta-button">Get Started</a>
  </div>
</header>
```

## Visual Explanation

### HTML5 Document Structure with `<header>`

```
┌─────────────────────────────────────────┐
│  <body>                                  │
│  ┌─────────────────────────────────────┐ │
│  │ <header>  (page-level)              │ │
│  │   ┌──────┐  ┌────────────────────┐  │ │
│  │   │ Logo │  │  Navigation        │  │ │
│  │   └──────┘  └────────────────────┘  │ │
│  │   <h1>Page Title</h1>               │ │
│  └─────────────────────────────────────┘ │
│                                          │
│  ┌─────────────────────────────────────┐ │
│  │ <article>                           │ │
│  │  ┌─────────────────────────────────┐│ │
│  │  │ <header> (article-level)        ││ │
│  │  │  <h2>Article Title</h2>         ││ │
│  │  │  <p>Author, Date</p>            ││ │
│  │  └─────────────────────────────────┘│ │
│  │  <p>Article content...</p>          │ │
│  └─────────────────────────────────────┘ │
│                                          │
│  ┌─────────────────────────────────────┐ │
│  │ <section>                           │ │
│  │  ┌─────────────────────────────────┐│ │
│  │  │ <header> (section-level)        ││ │
│  │  │  <h2>Section Title</h2>         ││ │
│  │  └─────────────────────────────────┘│ │
│  │  <p>Section content...</p>          │ │
│  └─────────────────────────────────────┘ │
└─────────────────────────────────────────┘
```

### Header Content Model

```
<header> ────────────────────────────────
├── <h1>-<h6> (headings)                │
├── <nav> (navigation bar)              │
├── <img> (logo, branding)              │
├── <p> (tagline, description)          │
├── <form> (search, sign-in)            │
├── <div> (grouping elements)           │
├── <a> (links, skip-to-content)        │
└── Text content (introductory text)    │
─────────────────────────────────────────
```

## Common Mistakes

1. **Using multiple page-level `<header>` elements** — Only one `<header>` should represent the page-level header
2. **Putting `<header>` inside `<footer>`** — Header is not allowed inside `<footer>` or `<address>`
3. **Using `<header>` just for styling** — Use `<div>` if you only need a container for CSS; `<header>` is semantic
4. **Nesting `<header>` inside another `<header>`** — Headers cannot be nested within headers
5. **Placing `<header>` inside `<nav>`** — Navigation has its own element; a header can contain nav, not the reverse
6. **Forgetting the `<main>` element** — After the page `<header>`, content should go in `<main>` (not more headers)

## Best Practices

1. Use `<header>` for introductory content, not just decorative containers
2. Include the site name/logo and primary navigation in the page-level header
3. Always include at least one heading inside `<header>` when possible
4. Use `<nav>` inside `<header>` for primary site navigation
5. Add `aria-label` to `<nav>` inside `<header>` for clarity
6. Keep the header consistent across all pages of a website
7. Make the header responsive with CSS media queries
8. Use `position: sticky` or `fixed` for persistent headers with caution
9. Include a "skip to content" link in the header for accessibility
10. Test header readability with screen readers and keyboard navigation

## Summary Notes

- `<header>` is a semantic HTML5 element for introductory content
- It can appear multiple times per page (page-level, article-level, section-level)
- Common contents: headings, logo, navigation, search, tagline, metadata
- `<header>` does NOT create a new section in the document outline
- Cannot be nested inside another `<header>`, `<footer>`, or `<address>`
- Always place the page header before `<main>` in document order
- Use CSS Grid or Flexbox for header layout
- The `<header>` has an implicit ARIA role of `banner` at page level
- Section-level `<header>` has no implicit role (equivalent to a generic landmark)
- Combine with `<nav>`, `<h1>`–`<h6>`, and `<img>` for complete branding
