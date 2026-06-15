# Module 31: HTML Semantic Elements

## Introduction

Semantic HTML elements clearly describe their meaning to both the browser and the developer. Unlike generic `<div>` and `<span>` tags, semantic elements like `<article>`, `<section>`, `<nav>`, and `<aside>` convey the structure and purpose of content. They are essential for accessibility, SEO, and maintainable code.

## Learning Objectives

By the end of this module, you will be able to:
- Define semantic HTML and its importance
- Use all major semantic elements correctly
- Structure a page with semantic landmarks
- Understand accessibility benefits of semantic elements
- Choose the right semantic element for different content
- Distinguish semantic elements from generic containers

## What is Semantic HTML?

Semantic HTML uses elements that carry meaning about the content they contain:

```html
<!-- Non-semantic -->
<div class="nav">...</div>
<div class="article">...</div>

<!-- Semantic -->
<nav>...</nav>
<article>...</article>
```

## Major Semantic Elements

### Page Structure

| Element | Meaning | Use For |
|---------|---------|---------|
| `<header>` | Introductory content | Logo, tagline, navigation |
| `<nav>` | Navigation links | Site menus, table of contents |
| `<main>` | Dominant content | Primary page content (unique) |
| `<section>` | Thematic grouping | Chapters, tab panels |
| `<article>` | Self-contained content | Blog posts, news stories |
| `<aside>` | Indirectly related content | Sidebars, callout boxes |
| `<footer>` | Footer information | Copyright, links, author info |

### Text Semantics

| Element | Meaning |
|---------|---------|
| `<h1>`-`<h6>` | Section headings |
| `<p>` | Paragraph |
| `<blockquote>` | Extended quotation |
| `<figure>` | Self-contained content (images, diagrams) |
| `<figcaption>` | Caption for figure |
| `<address>` | Contact information |
| `<time>` | Date/time |

## Page Structure with Semantics

```html
<body>
  <header>
    <h1>Site Name</h1>
    <nav>
      <a href="/">Home</a>
      <a href="/about">About</a>
    </nav>
  </header>

  <main>
    <article>
      <h2>Article Title</h2>
      <section>
        <h3>Section One</h3>
        <p>Content here.</p>
      </section>
      <section>
        <h3>Section Two</h3>
        <p>More content.</p>
      </section>
    </article>

    <aside>
      <h3>Related Content</h3>
      <ul>
        <li><a href="#">Link one</a></li>
        <li><a href="#">Link two</a></li>
      </ul>
    </aside>
  </main>

  <footer>
    <p>&copy; 2025 Example.com</p>
  </footer>
</body>
```

## Correct Nesting Rules

```html
<!-- ✓ Correct -->
<article>
  <header>
    <h2>Title</h2>
  </header>
  <section>
    <p>Content</p>
  </section>
  <footer>
    <p>Meta info</p>
  </footer>
</article>

<!-- ✗ Incorrect -->
<main>
  <main>Nested main</main>  <!-- main cannot be nested -->
</main>
```

## Accessibility Benefits

Semantic elements create **landmarks** that screen readers use for navigation:

```html
<header role="banner">      <!-- Site header landmark -->
<nav role="navigation">     <!-- Navigation landmark -->
<main role="main">          <!-- Main landmark -->
<aside role="complementary"><!-- Complementary landmark -->
<footer role="contentinfo"> <!-- Content info landmark -->
```

Screen readers can jump between landmarks using keyboard shortcuts.

## SEO Benefits

Search engines use semantic structure to understand page content:

- `<article>` indicates independent content for indexing
- `<nav>` identifies navigation links for crawling
- `<header>` and `<footer>` contain meta information
- Proper heading hierarchy (`<h1>` to `<h6>`) improves ranking

## Common Mistakes

| Mistake | Problem | Solution |
|---------|---------|----------|
| Using div for everything | No semantic meaning, poor accessibility | Use semantic elements |
| Incorrect nesting of `<main>` | Invalid HTML | `<main>` must be unique, not nested in article/aside/footer/header/nav |
| Multiple `<h1>` elements | Confuses hierarchy | Use one `<h1>` per page |
| Using `<section>` as styling wrapper | Sections should have headings | Only use `<section>` with a heading |
| Footer inside article | Valid but confused with page footer | Use `<footer>` for the whole page; articles can have their own footer |
| Skipping heading levels | Breaks hierarchy | Go h1→h2→h3, not h1→h3 |

## Best Practices

1. **Use semantic elements as intended** — don't misuse them for styling
2. **Each page should have exactly one `<main>`**
3. **Sections should have headings** — use `<h1>`-`<h6>` inside sections
4. **Use `<nav>` for primary navigation** only, not all link groups
5. **Use `<aside>` for content indirectly related** to the main content
6. **Use `<article>` for syndicatable content** (blog posts, news, forum posts)
7. **Validate your HTML** to ensure correct nesting
8. **Test with screen readers** to verify landmarks are accessible
9. **Maintain heading hierarchy** — don't skip levels
10. **Use `<figure>` and `<figcaption>`** for images with captions

## Summary

- Semantic elements describe the meaning of content
- Major landmarks: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`
- Semantic HTML improves accessibility, SEO, and code maintainability
- Screen readers use landmarks for navigation
- Search engines use semantic structure for indexing
- Always prefer semantic elements over generic `<div>` and `<span>`
- Validate nesting rules and heading hierarchy
