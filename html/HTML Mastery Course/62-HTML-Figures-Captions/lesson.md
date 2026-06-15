# Module 62: HTML Figures & Captions

## Overview
The `<figure>` and `<figcaption>` elements provide a semantic way to group self-contained content like images, diagrams, charts, code snippets, and illustrations along with an associated caption. Introduced in HTML5, these elements improve document structure, accessibility, and machine readability. This module covers proper usage, styling, nesting, and best practices for figures and captions.

## Section 1: Introduction to Figures

### What is `<figure>`?
The `<figure>` element represents self-contained content that is referenced as a single unit from the main flow of the document. It can be moved to an appendix or a sidebar without affecting the meaning of the main content.

Common use cases:
- Images with captions
- Code snippets with descriptions
- Diagrams and charts
- Illustrations
- Pull quotes
- Audio and video embeds with captions
- Tables with explanatory notes

### What is `<figcaption>`?
The `<figcaption>` element is an optional child of `<figure>` that provides a caption or legend for the figure's content. It can appear as the first or last child of `<figure>`.

```html
<figure>
  <img src="diagram.png" alt="Network architecture diagram">
  <figcaption>Figure 1: System Network Architecture</figcaption>
</figure>
```

## Section 2: Proper Syntax and Nesting

### Basic Structure
```html
<figure>
  <!-- Self-contained content: image, video, code, table, etc. -->
  <figcaption>Descriptive caption for the content</figcaption>
</figure>
```

### Order of `<figcaption>`
The `<figcaption>` can be placed before or after the content:

```html
<!-- Caption first -->
<figure>
  <figcaption>Table 1: Quarterly Revenue</figcaption>
  <table>
    <tr><th>Q1</th><th>Q2</th><th>Q3</th><th>Q4</th></tr>
    <tr><td>$10K</td><td>$15K</td><td>$12K</td><td>$18K</td></tr>
  </table>
</figure>

<!-- Caption last -->
<figure>
  <img src="chart.png" alt="Revenue growth chart">
  <figcaption>Figure 2: Year-over-year revenue growth</figcaption>
</figure>
```

### Multiple Content Elements
A `<figure>` can contain multiple child elements:

```html
<figure>
  <img src="photo1.jpg" alt="Front view">
  <img src="photo2.jpg" alt="Side view">
  <img src="photo3.jpg" alt="Back view">
  <figcaption>Figure 3: Product views from multiple angles</figcaption>
</figure>
```

### Nested Figures
Figures can be nested within other elements like `<section>`, `<article>`, or `<aside>`, but should not be nested inside other `<figure>` elements:

```html
<article>
  <h2>Research Results</h2>
  <figure>
    <img src="results.png" alt="Experiment results chart">
    <figcaption>Figure 4: Experiment results showing correlation</figcaption>
  </figure>
</article>
```

## Section 3: Accessibility and Semantic Meaning

### Accessibility Benefits
- Screen readers announce `<figure>` and `<figcaption>` roles
- The `<figcaption>` is programmatically associated with the figure content
- ARIA roles are implicit (`role="figure"` for `<figure>`)
- Provides structure for assistive technology navigation

### Accessible Examples
```html
<!-- Good: Descriptive alt text with caption -->
<figure>
  <img src="architecture.svg" alt="Layered architecture diagram showing frontend, API, and database tiers">
  <figcaption>Three-tier application architecture</figcaption>
</figure>

<!-- Better: Figure provides grouping context -->
<figure aria-label="Q4 Performance Metrics">
  <table>
    <caption>Quarterly Revenue Breakdown</caption>
    <!-- table content -->
  </table>
  <figcaption>Table 2: Q4 revenue by product category</figcaption>
</figure>
```

### ARIA Override (if needed)
```html
<figure role="group" aria-labelledby="fig-caption">
  <img src="complex.svg" alt="Complex data visualization">
  <figcaption id="fig-caption">Figure 5: Multi-variable analysis results</figcaption>
</figure>
```

## Section 4: Common Usage Patterns

### Images
```html
<figure>
  <picture>
    <source srcset="photo.webp" type="image/webp">
    <source srcset="photo.jpg" type="image/jpeg">
    <img src="photo.jpg" alt="Sunset over mountains" loading="lazy">
  </picture>
  <figcaption>Sunset captured from the summit trail</figcaption>
</figure>
```

### Videos
```html
<figure>
  <video controls width="640">
    <source src="tutorial.mp4" type="video/mp4">
    <source src="tutorial.webm" type="video/webm">
    Your browser does not support video.
  </video>
  <figcaption>Video 1: Getting Started Tutorial (5:32)</figcaption>
</figure>
```

### Code Snippets
```html
<figure>
  <pre><code>
function hello() {
  console.log('Hello, World!');
}
  </code></pre>
  <figcaption>Listing 1: Hello World function in JavaScript</figcaption>
</figure>
```

### Audio
```html
<figure>
  <audio controls src="podcast.mp3">
    Your browser does not support audio.
  </audio>
  <figcaption>Episode 42: Interview with guest speaker</figcaption>
</figure>
```

### Blockquotes
```html
<figure>
  <blockquote>
    "The best way to predict the future is to create it."
  </blockquote>
  <figcaption>— Peter Drucker, <cite>Management Challenges</cite></figcaption>
</figure>
```

### Tables
```html
<figure>
  <table>
    <thead>
      <tr><th>Product</th><th>Price</th><th>Stock</th></tr>
    </thead>
    <tbody>
      <tr><td>Widget A</td><td>$19.99</td><td>45</td></tr>
      <tr><td>Widget B</td><td>$29.99</td><td>32</td></tr>
    </tbody>
  </table>
  <figcaption>Table 3: Current inventory levels</figcaption>
</figure>
```

## Section 5: `<figure>` vs `<aside>`

| Feature | `<figure>` | `<aside>` |
|---------|------------|-----------|
| Purpose | Self-contained content unit | Content tangentially related to main content |
| Essentiality | Related but could be moved | Supplementary, not essential |
| Common content | Images, charts, code | Sidebars, pull quotes, ads |
| Caption | `<figcaption>` | No standard caption element |
| Reference | Referenced from main text | Not typically referenced by number |

Use `<figure>` when the content is directly referenced in the text (e.g., "as shown in Figure 3"). Use `<aside>` for content that is loosely related.

## Section 6: Styling Figures with CSS

### Basic Styling
```css
figure {
  margin: 1.5em 0;
  padding: 1em;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fafafa;
}

figcaption {
  font-style: italic;
  font-size: 0.9em;
  color: #666;
  text-align: center;
  margin-top: 0.5em;
}

/* Caption above */
figure figcaption:first-child {
  margin-top: 0;
  margin-bottom: 0.5em;
  font-weight: bold;
}
```

### Responsive Images in Figures
```css
figure img, figure video {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
}

figure {
  max-width: 100%;
  overflow: hidden;
}
```

### Figure as a Card
```css
figure.card {
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transition: transform 0.2s;
}

figure.card:hover {
  transform: translateY(-4px);
}

figure.card figcaption {
  padding: 1em;
  background: white;
  margin: 0;
  text-align: left;
}
```

## Section 7: SEO and Machine Readability

### Structured Data
Figures with captions help search engines understand content relationships. For better SEO:

```html
<figure itemscope itemtype="http://schema.org/ImageObject">
  <img src="photo.jpg" alt="Description" itemprop="contentUrl">
  <figcaption itemprop="caption">Beautiful landscape photo</figcaption>
  <meta itemprop="author" content="Photographer Name">
</figure>
```

### Print Styles
```css
@media print {
  figure {
    page-break-inside: avoid;
    break-inside: avoid;
  }

  figcaption {
    font-style: normal;
    color: black;
  }
}
```

## Section 8: Common Mistakes

1. **Omitting `<figcaption>`**: While optional, figures without captions lose semantic value.
2. **Using `<figure>` for decorative images**: Decorative images should use empty `alt=""` and no `<figure>`.
3. **Nesting `<figure>` inside `<figure>`**: Invalid HTML — figures cannot be nested.
4. **Multiple `<figcaption>` elements**: Only one `<figcaption>` per `<figure>`.
5. **Using `<figure>` as a generic container**: Use `<div>` for purely layout purposes.
6. **Forgetting `alt` text on images**: Even inside `<figure>`, images still need `alt`.

## Summary

The `<figure>` and `<figcaption>` elements provide semantic structure for self-contained content units. They enhance accessibility by associating captions with content, improve SEO by clarifying content relationships, and give developers CSS hooks for styling. Proper use of these elements is a hallmark of well-structured, semantic HTML.
