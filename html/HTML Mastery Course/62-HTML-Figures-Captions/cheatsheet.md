# HTML Figures & Captions Cheatsheet

## Basic Structure
```html
<figure>
  <!-- Content: image, video, code, table, blockquote, etc. -->
  <figcaption>Caption describing the content</figcaption>
</figure>
```

## Caption Position
```html
<!-- Caption first (good for tables) -->
<figure>
  <figcaption>Table 1: Data Summary</figcaption>
  <table>...</table>
</figure>

<!-- Caption last (good for images) -->
<figure>
  <img src="photo.jpg" alt="Description">
  <figcaption>Figure 1: Beautiful landscape</figcaption>
</figure>
```

## Common Content Types

**Image**
```html
<figure>
  <img src="photo.jpg" alt="Sunset over mountains">
  <figcaption>Sunset at the summit</figcaption>
</figure>
```

**Video**
```html
<figure>
  <video controls src="tutorial.mp4"></video>
  <figcaption>Tutorial: Getting Started</figcaption>
</figure>
```

**Audio**
```html
<figure>
  <audio controls src="podcast.mp3"></audio>
  <figcaption>Episode 42: Interview</figcaption>
</figure>
```

**Code**
```html
<figure>
  <pre><code>console.log('Hello');</code></pre>
  <figcaption>Listing 1: Hello World</figcaption>
</figure>
```

**Blockquote**
```html
<figure>
  <blockquote>"The best way to predict the future is to create it."</blockquote>
  <figcaption>— Peter Drucker</figcaption>
</figure>
```

**Table**
```html
<figure>
  <table>
    <tr><th>Name</th><th>Value</th></tr>
    <tr><td>A</td><td>10</td></tr>
  </table>
  <figcaption>Table 2: Sample Data</figcaption>
</figure>
```

**Multiple elements**
```html
<figure>
  <img src="front.jpg" alt="Front view">
  <img src="side.jpg" alt="Side view">
  <img src="back.jpg" alt="Back view">
  <figcaption>Figure 2: Product views</figcaption>
</figure>
```

## CSS Styling
```css
figure {
  margin: 1.5em 0;
  padding: 1em;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fafafa;
  text-align: center;
}

figure img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
}

figcaption {
  font-style: italic;
  font-size: 0.9em;
  color: #666;
  margin-top: 0.75em;
  padding-top: 0.75em;
  border-top: 1px solid #eee;
}

/* Caption at top */
figcaption:first-child {
  margin-top: 0;
  padding-top: 0;
  border-top: none;
  border-bottom: 1px solid #eee;
  padding-bottom: 0.75em;
  font-weight: bold;
}
```

## Auto-Numbering with CSS Counters
```css
body {
  counter-reset: figure table listing;
}

figure figcaption::before {
  counter-increment: figure;
  content: "Figure " counter(figure) ": ";
}

/* Different counters for different types */
figure[data-type="table"] figcaption::before {
  counter-increment: table;
  content: "Table " counter(table) ": ";
}

figure[data-type="code"] figcaption::before {
  counter-increment: listing;
  content: "Listing " counter(listing) ": ";
}
```

## Accessibility
```html
<!-- Basic accessible figure -->
<figure aria-labelledby="caption-1">
  <img src="chart.png" alt="Bar chart showing quarterly growth">
  <figcaption id="caption-1">Chart 1: Q4 Growth</figcaption>
</figure>

<!-- With long description -->
<figure aria-describedby="long-desc">
  <img src="complex.svg" alt="Complex diagram">
  <figcaption>Figure 3: System Architecture</figcaption>
  <details id="long-desc">
    <summary>Diagram description</summary>
    <p>The diagram shows three tiers: frontend, API, and database...</p>
  </details>
</figure>
```

## Print Styles
```css
@media print {
  figure {
    break-inside: avoid;
    page-break-inside: avoid;
  }
  figcaption {
    color: #000;
    font-style: normal;
  }
}
```

## Responsive Figures
```css
figure {
  max-width: 100%;
  overflow: hidden;
}

figure img,
figure video,
figure table {
  max-width: 100%;
  height: auto;
}
```

## Rules & Restrictions
- Only one `<figcaption>` per `<figure>`
- `<figcaption>` must be first or last child
- `<figure>` cannot contain another `<figure>`
- `<figure>` can contain any flow content (images, video, tables, code, etc.)
- Images inside `<figure>` still require `alt` text
- `<figure>` has implicit `role="figure"`

## Figure vs Aside
| | `<figure>` | `<aside>` |
|---|---|---|
| Content | Self-contained, referenced directly | Tangential, loosely related |
| Caption | `<figcaption>` | None standard |
| Essential | Can be moved without affecting meaning | Supplementary |
| Example | Image with caption, code listing | Sidebar, related links |
