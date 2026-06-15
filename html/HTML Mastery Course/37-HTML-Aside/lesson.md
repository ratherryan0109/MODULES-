# Module 37: HTML `<aside>` Element

## Introduction

The `<aside>` element represents a portion of a document whose content is only indirectly related to the document's main content. It is typically used for sidebars, pull quotes, advertising, related links, or tangential information that could be considered separate from but adjacent to the primary content.

The `<aside>` element helps organize supplementary content without cluttering the main narrative flow. Screen readers identify `<aside>` as a complementary landmark, allowing users to navigate to or skip this content.

## Learning Objectives

By the end of this module, you will be able to:

- Understand the purpose and correct usage of the `<aside>` element
- Distinguish between the two semantic contexts of `<aside>`
- Use `<aside>` for sidebars, pull quotes, and related content
- Apply `aria-label` and accessible naming
- Avoid common misuse of `<aside>`
- Integrate `<aside>` into complex page layouts

## Syntax and Basic Usage

```html
<aside>
  <h3>Related Articles</h3>
  <ul>
    <li><a href="/article1">Article 1</a></li>
    <li><a href="/article2">Article 2</a></li>
  </ul>
</aside>
```

## Visual Explanation

```
┌───────────────────────────────────────────┐
│ <main>                                    │
│  ┌─────────────────────┐ ┌─────────────┐  │
│  │ Primary Content     │ │ <aside>     │  │
│  │ Article text here...│ │ Related     │  │
│  │ More content...     │ │ links       │  │
│  │                     │ │ Ads         │  │
│  │                     │ │ Pull quotes │  │
│  └─────────────────────┘ └─────────────┘  │
└───────────────────────────────────────────┘
```

## Two Contexts of `<aside>`

### 1. Inside an `<article>` (Tangential to Article)

When nested inside `<article>`, the `<aside>` content relates specifically to that article:

```html
<article>
  <h2>Climate Change Update</h2>
  <p>Scientists have released new data...</p>
  
  <aside>
    <h3>Key Terms</h3>
    <dl>
      <dt>Carbon Footprint</dt>
      <dd>The total greenhouse gas emissions...</dd>
    </dl>
  </aside>
  
  <p>Further analysis shows...</p>
</article>
```

### 2. Outside an `<article>` (Tangential to Page)

When outside an `<article>`, the `<aside>` content relates to the entire page:

```html
<body>
  <main>
    <article>Main content...</article>
  </main>
  
  <aside>
    <h2>Sidebar</h2>
    <nav>Related pages...</nav>
    <section>Advertisement</section>
  </aside>
</body>
```

## Implicit ARIA Role

- **Outside `<article>`/`<section>`**: Implicit role of `complementary` (landmark)
- **Inside `<article>`/`<section>`**: Role of `complementary` but scoped to the parent
- **Nested inside another `<aside>`**: The inner `<aside>` loses the complementary role

```html
<aside>
  <!-- Implicit role="complementary" -->
</aside>

<aside role="complementary">
  <!-- Redundant but explicit -->
</aside>
```

## Accessibility: Landmark Navigation

When `<aside>` is a `complementary` landmark, screen readers announce it and allow users to navigate to it. Provide an accessible name:

```html
<aside aria-label="Related content">
  <h2>You Might Also Like</h2>
  <ul>
    <li><a href="#">Article One</a></li>
    <li><a href="#">Article Two</a></li>
  </ul>
</aside>

<!-- Or using aria-labelledby -->
<aside aria-labelledby="sidebar-title">
  <h2 id="sidebar-title">Sponsors</h2>
  <div class="ad">...</div>
</aside>
```

## Practical Examples

### Example 1: Blog Sidebar

```html
<main>
  <article>
    <h1>How to Build Accessible Websites</h1>
    <p>Accessibility is crucial for modern web development...</p>
  </article>
</main>

<aside aria-labelledby="sidebar-heading">
  <h2 id="sidebar-heading">More Resources</h2>
  
  <section>
    <h3>Popular Posts</h3>
    <ul>
      <li><a href="#">10 Accessibility Tips</a></li>
      <li><a href="#">ARIA Landmarks Guide</a></li>
    </ul>
  </section>
  
  <section>
    <h3>Categories</h3>
    <ul>
      <li><a href="#">HTML</a></li>
      <li><a href="#">CSS</a></li>
      <li><a href="#">Accessibility</a></li>
    </ul>
  </section>
</aside>
```

### Example 2: Pull Quote

```html
<article>
  <h2>The Future of Renewable Energy</h2>
  <p>The solar energy sector has grown by 300% in the past five years...</p>
  
  <aside>
    <blockquote>
      "Solar energy will be the primary power source within a decade."
      <cite>— Dr. Energy Expert, 2026</cite>
    </blockquote>
  </aside>
  
  <p>This growth is driven by decreasing costs and increasing efficiency...</p>
</article>
```

### Example 3: Advertisement Placement

```html
<aside aria-label="Advertisement">
  <div class="ad-container">
    <a href="/signup">
      <img src="banner.jpg" alt="Sign up for our newsletter">
    </a>
  </div>
</aside>
```

### Example 4: Product Sidebar

```html
<main>
  <article>
    <h1>Premium Wireless Headphones</h1>
    <p>Experience crystal-clear audio...</p>
  </article>
</main>

<aside aria-label="Product details">
  <h2>Specifications</h2>
  <dl>
    <dt>Battery Life</dt>
    <dd>30 hours</dd>
    <dt>Connectivity</dt>
    <dd>Bluetooth 5.3</dd>
    <dt>Weight</dt>
    <dd>250g</dd>
  </dl>
  
  <h2>Price</h2>
  <p class="price">$79.99</p>
  <button>Add to Cart</button>
</aside>
```

## Common Mistakes

### Mistake 1: Using `<aside>` for Main Navigation

```html
<!-- INCORRECT: Main navigation should be <nav> -->
<aside>
  <a href="/">Home</a>
  <a href="/about">About</a>
</aside>
```

### Mistake 2: Wrapping Everything in `<aside>`

```html
<!-- INCORRECT: Footer content is not tangential -->
<aside>
  <p>&copy; 2026 Company</p>
</aside>
```

### Mistake 3: Using `<aside>` for Content Closely Related to Main Content

```html
<!-- INCORRECT: This information might be essential -->
<aside>
  <h2>Contact Information</h2>
  <p>Our hours are 9-5 Mon-Fri</p>
</aside>
```

### Mistake 4: Missing Accessible Name

```html
<!-- Not ideal: No label for screen reader landmarks -->
<aside>
  <h2>Sponsors</h2>
</aside>

<!-- Better -->
<aside aria-labelledby="sponsors-heading">
  <h2 id="sponsors-heading">Sponsors</h2>
</aside>
```

## Best Practices

1. **Use `<aside>` for content that is tangentially related**, not essential
2. **Provide an accessible name** with `aria-label` or `aria-labelledby`
3. **Place `<aside>` after `<main>`** in the DOM for page-level sidebars
4. **Use `<aside>` inside `<article>`** for article-specific tangents
5. **Use CSS for positioning** rather than relying on `<aside>` order
6. **Avoid nesting `<aside>` inside another `<aside>`**
7. **Include headings** in `<aside>` for structure
8. **Don't use `<aside>` for navigation** (use `<nav>`)
9. **Test with screen readers** to verify landmark behavior
10. **Use `<section>` inside `<aside>`** for grouping sub-content

## Summary Notes

| Aspect | Details |
|--------|---------|
| **Purpose** | Content tangentially related to the main content |
| **ARIA Role** | `complementary` (when outside article/section) |
| **Nesting** | Can be inside or outside `<article>`, not inside `<aside>` |
| **Heading** | Should have a heading |
| **Display** | Block-level element |
| **Common uses** | Sidebars, pull quotes, related links, ads, glossaries |
| **Accessibility** | Landmark region when outside article/section |
