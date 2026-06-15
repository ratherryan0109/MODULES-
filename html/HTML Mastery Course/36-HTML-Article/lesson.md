# Module 36: HTML `<article>` Element

## Introduction

The `<article>` element is a semantic HTML5 element that represents a self-contained composition in a document, page, application, or site. It is intended to be independently distributable or reusable, such as in syndication (e.g., RSS feeds). Examples include forum posts, magazine articles, blog entries, user-submitted comments, interactive widgets, or any other independent item of content.

The key distinction between `<article>` and `<section>` lies in independence: an `<article>` should make sense on its own, whereas a `<section>` is a thematic grouping that may depend on its surrounding context.

## Learning Objectives

By the end of this module, you will be able to:

- Understand the purpose and semantic meaning of the `<article>` element
- Distinguish between `<article>`, `<section>`, and `<div>`
- Implement nested `<article>` elements correctly
- Use `<article>` with proper heading structure
- Understand syndication compatibility and RSS
- Apply `<article>` in blog layouts, comment systems, and widgets
- Follow accessibility best practices

## Syntax and Basic Usage

```html
<article>
  <h2>Article Title</h2>
  <p>This is the content of the article, which should be self-contained and meaningful on its own.</p>
</article>
```

## Visual Explanation

```
<article>
  ┌─────────────────────────────────────┐
  │ <header>                            │
  │   <h1>Blog Post Title</h1>          │
  │   <p>By Author | Date</p>           │
  ├─────────────────────────────────────┤
  │ <section> (Introduction)            │
  │   <p>Opening paragraph...</p>       │
  ├─────────────────────────────────────┤
  │ <section> (Main Body)               │
  │   <p>Detailed content...</p>        │
  ├─────────────────────────────────────┤
  │ <footer>                            │
  │   <p>Tags, share links</p>          │
  └─────────────────────────────────────┘
</article>
```

## `<article>` vs. `<section>`

| `<article>` | `<section>` |
|-------------|-------------|
| Self-contained, independent | Thematic grouping within a document |
| Could be syndicated in RSS | Not typically syndicated |
| Can stand alone | Requires surrounding context |
| Example: Blog post, news story | Example: Chapter in a blog post |

**Rule of thumb:** If you could copy-paste the content into an email and it still makes sense, it's an `<article>`. If it only makes sense in the context of the page, it's a `<section>`.

## Nested `<article>` Elements

`<article>` elements can be nested. The inner `<article>` represents a related but self-contained item within the outer one.

```html
<article>
  <h2>Blog Post: HTML5 Semantics</h2>
  <p>HTML5 introduced powerful semantic elements...</p>
  
  <article>
    <h3>Comment by Jane Doe</h3>
    <p>Great article! Really helped me understand...</p>
    <footer>
      <p>Posted on <time datetime="2026-06-12">June 12, 2026</time></p>
    </footer>
  </article>
  
  <article>
    <h3>Comment by John Smith</h3>
    <p>I have a question about the article element...</p>
    <footer>
      <p>Posted on <time datetime="2026-06-13">June 13, 2026</time></p>
    </footer>
  </article>
</article>
```

## Syndication and RSS

The `<article>` element is particularly important for content syndication. RSS readers, news aggregators, and content management systems often extract `<article>` elements for distribution.

```html
<article>
  <h2>Breaking News: Technology Advances</h2>
  <p>Published by <span class="author">Jane Doe</span></p>
  <p>Today, a major breakthrough in technology...</p>
  <a href="/article/123">Read full article</a>
</article>
```

For syndication, you might also include:

- `<time>` for publication dates
- `<address>` for author information
- `<link>` for canonical URLs
- `<meta>` tags within the `<article>` (not standard, but used by some systems)

## `<article>` with Header and Footer

An `<article>` can (and often should) have its own `<header>` and `<footer>`:

```html
<article>
  <header>
    <h2>How to Master HTML5</h2>
    <p>By <a href="/authors/jane">Jane Doe</a> | 
       <time datetime="2026-06-01">June 1, 2026</time></p>
  </header>
  
  <p>HTML5 offers a range of semantic elements...</p>
  <p>In this article, we'll explore...</p>
  
  <footer>
    <p>Categories: <a href="/html">HTML</a>, <a href="/web-dev">Web Development</a></p>
    <p>Tags: #html5 #semantics #accessibility</p>
  </footer>
</article>
```

## Accessibility

The `<article>` element has an implicit ARIA role of `article`. Screen readers announce it as an article landmark and allow users to navigate between articles using keyboard shortcuts.

```html
<article>
  <h2>Accessible Article</h2>
  <p>Screen readers will recognize this as an article landmark.</p>
</article>
```

### Adding Accessible Names

While `<article>` already has a role, you can enhance it:

```html
<article aria-labelledby="article-title">
  <h2 id="article-title">Article Title</h2>
  <!-- Content -->
</article>
```

## Practical Examples

### Example 1: Blog Listing Page

```html
<main>
  <h1>Latest Blog Posts</h1>
  
  <article>
    <h2>Understanding the Article Element</h2>
    <p><time datetime="2026-06-10">June 10, 2026</time> by Jane Doe</p>
    <p>The article element represents a self-contained composition...</p>
    <a href="/blog/article-element">Read More</a>
  </article>
  
  <article>
    <h2>CSS Grid vs. Flexbox</h2>
    <p><time datetime="2026-06-08">June 8, 2026</time> by John Smith</p>
    <p>Two powerful layout systems serve different purposes...</p>
    <a href="/blog/grid-vs-flexbox">Read More</a>
  </article>
</main>
```

### Example 2: News Website

```html
<main>
  <h1>Today's Headlines</h1>
  
  <article>
    <header>
      <h2>Global Summit Addresses Climate Change</h2>
      <p><time datetime="2026-06-12T09:00:00">9:00 AM</time> | World News</p>
    </header>
    <p>World leaders gathered today to discuss...</p>
    <figure>
      <img src="summit.jpg" alt="World leaders at summit">
      <figcaption>Global Climate Summit 2026</figcaption>
    </figure>
  </article>
  
  <article>
    <header>
      <h2>Tech Company Announces New Product</h2>
      <p><time datetime="2026-06-12T08:30:00">8:30 AM</time> | Technology</p>
    </header>
    <p>A major tech company unveiled...</p>
  </article>
</main>
```

### Example 3: Product Cards

```html
<section aria-labelledby="products-heading">
  <h2 id="products-heading">Featured Products</h2>
  
  <div class="product-grid">
    <article>
      <img src="product1.jpg" alt="Wireless Headphones">
      <h3>Wireless Headphones</h3>
      <p>$79.99</p>
      <p>High-quality wireless sound with noise cancellation.</p>
      <button>Add to Cart</button>
    </article>
    
    <article>
      <img src="product2.jpg" alt="Smart Watch">
      <h3>Smart Watch Pro</h3>
      <p>$199.99</p>
      <p>Track your fitness and stay connected.</p>
      <button>Add to Cart</button>
    </article>
  </div>
</section>
```

## Common Mistakes

### Mistake 1: Using `<article>` for Short, Non-Independent Content

```html
<!-- INCORRECT: Too trivial, not self-contained -->
<article>
  <p>Welcome to our site!</p>
</article>
```

### Mistake 2: Nesting `<article>` Incorrectly

```html
<!-- INCORRECT: A comment is not about another comment -->
<article>
  <h2>Blog Post</h2>
  <article>Comment 1</article>
  <article>Comment 2</article>
  <article>Reply to Comment 1</article> <!-- This is wrong nesting -->
</article>
```

### Mistake 3: Using `<article>` Without a Heading

```html
<!-- INCORRECT: Missing heading -->
<article>
  <p>Some content that should have a heading.</p>
</article>
```

### Mistake 4: Wrapping Everything in `<article>`

```html
<!-- INCORRECT: Not everything is an article -->
<body>
  <article> <!-- Should be <main> -->
    <article> <!-- Should be <header> -->Site Header</article>
    <article>Content</article>
    <article>Footer</article>
  </article>
</body>
```

## Best Practices

1. **Use `<article>` for self-contained content** that can stand alone
2. **Always include a heading** (`<h1>`–`<h6>`)
3. **Use `<time>` for dates** and `<address>` for author info
4. **Include `<header>` and `<footer>`** for metadata within articles
5. **Nest comments as `<article>` elements** in a blog post
6. **Don't use `<article>` as a generic container** — use `<div>` instead
7. **Combine `<article>` with `<section>`** for complex content
8. **Use `aria-labelledby`** to enhance accessibility
9. **Ensure each `<article>` makes sense out of context**
10. **Validate your HTML** to check nesting correctness

## Summary Notes

| Aspect | Details |
|--------|---------|
| **Purpose** | Self-contained, independently distributable content |
| **Heading** | Should always have a heading |
| **ARIA Role** | Implicit `article` role |
| **Nesting** | Can contain nested `<article>` elements |
| **Syndication** | Suitable for RSS feeds and content aggregation |
| **Vs. `<section>`** | Article is independent; section is thematic grouping |
| **Display** | Block-level element |
| **Inside** | `<body>`, `<main>`, `<section>`, nested in other `<article>` |
| **Contains** | Headings, paragraphs, `<header>`, `<footer>`, `<section>` |
