# Module 25: HTML Block Elements

## Introduction

HTML elements are categorized into two fundamental display types: block-level and inline. Block elements form the structural backbone of every web page. They create distinct blocks of content that stack vertically, occupy the full available width, and can contain other block and inline elements. Understanding block elements is essential for creating well-structured, semantically correct HTML documents.

## Learning Objectives

By the end of this module, you will be able to:
- Define what block elements are and how they behave
- Distinguish block elements from inline elements
- Use common block-level elements correctly
- Understand the box model as it applies to block elements
- Control block element behavior with CSS
- Nest block elements properly
- Identify block elements in HTML5

## Characteristics of Block Elements

1. **Start on a new line** by default
2. **Occupy the full available width** (100% of parent container)
3. **Stack vertically** one after another
4. **Can contain other block elements and inline elements**
5. **Respect `width`, `height`, `margin`, and `padding` properties**

### Visual Behavior

```
+------------------------------------------+
| Block Element 1 (full width)              |
+------------------------------------------+
+------------------------------------------+
| Block Element 2 (full width)              |
+------------------------------------------+
+------------------------------------------+
| Block Element 3 (full width)              |
+------------------------------------------+
```

## Common Block-Level Elements

| Element | Purpose |
|---------|---------|
| `<div>` | Generic container (no semantic meaning) |
| `<p>` | Paragraph of text |
| `<h1>`-`<h6>` | Headings |
| `<ul>`, `<ol>`, `<dl>` | Lists |
| `<li>` | List item |
| `<header>` | Introductory content |
| `<nav>` | Navigation links |
| `<main>` | Main content |
| `<section>` | Thematic grouping |
| `<article>` | Self-contained content |
| `<aside>` | Sidebar or related content |
| `<footer>` | Footer information |
| `<blockquote>` | Block quotation |
| `<pre>` | Preformatted text |
| `<address>` | Contact information |
| `<hr>` | Thematic break |
| `<form>` | Input form |
| `<table>` | Tabular data |
| `<fieldset>` | Grouped form controls |
| `<figcaption>` | Figure caption |
| `<figure>` | Self-contained content |

## Block Elements in the Box Model

Block elements follow the CSS box model:

```
+-------------------------------------------+
| Margin (outer - transparent)              |
|  +-------------------------------------+  |
|  | Border                              |  |
|  |  +-------------------------------+  |  |
|  |  | Padding                       |  |  |
|  |  |  +-------------------------+  |  |  |
|  |  |  | Content                |  |  |  |
|  |  |  |                        |  |  |  |
|  |  |  +-------------------------+  |  |  |
|  |  +-------------------------------+  |  |
|  +-------------------------------------+  |
+-------------------------------------------+
```

### Box Model Properties for Block Elements

```css
.block-element {
  width: 600px;
  height: auto;
  margin: 20px auto;
  padding: 16px;
  border: 1px solid #ccc;
  background: #f9f9f9;
}
```

## Centering Block Elements

Block elements can be centered horizontally using `margin: auto`:

```css
.centered-block {
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
}
```

## Nesting Rules

### Correct Nesting
```html
<div>
  <h1>Title</h1>
  <p>Paragraph with <strong>inline</strong> text.</p>
  <div>
    <p>Nested block.</p>
  </div>
</div>
```

### Incorrect Nesting
```html
<!-- INVALID: <p> cannot contain <div> -->
<p>
  Text here
  <div>Not allowed inside p</div>
</p>
```

## HTML5 Semantic Block Elements

HTML5 introduced semantic block elements that replace generic `<div>` tags:

| Element | Meaning |
|---------|---------|
| `<header>` | Introductory content or navigational aids |
| `<nav>` | Section with navigation links |
| `<main>` | Dominant content of the `<body>` |
| `<section>` | Thematic grouping of content |
| `<article>` | Self-contained composition |
| `<aside>` | Content indirectly related to main content |
| `<footer>` | Footer for its nearest sectioning root |

## CSS Display Property

You can change any element's display behavior:

```css
/* Make inline element behave as block */
span {
  display: block;
}

/* Make block element behave as inline */
div {
  display: inline;
}

/* Inline-block (flows inline but respects box model) */
div {
  display: inline-block;
}

/* Hide the element */
.hidden {
  display: none;
}
```

## Block Element Width Control

```css
.fixed-width {
  width: 500px;         /* Fixed pixel width */
}

.percentage-width {
  width: 75%;            /* 75% of parent */
}

.max-width {
  max-width: 1000px;     /* Responsive with cap */
}

.min-width {
  min-width: 300px;      /* Minimum size guarantee */
}
```

## Margins and Padding on Block Elements

### Margin Collapsing

Adjacent vertical margins collapse into a single margin:

```css
.element-a { margin-bottom: 30px; }
.element-b { margin-top: 20px; }
/* Actual space between them: 30px (not 50px) */
```

### Preventing Margin Collapse

```css
/* Use overflow: hidden on the container */
.container {
  overflow: hidden;
}

/* Or use padding instead of margin */
.element {
  padding-bottom: 30px;
}
```

## Common Mistakes

| Mistake | Problem | Solution |
|---------|---------|----------|
| Putting block inside `<p>` | Invalid HTML, browser auto-closes `<p>` | Use `<div>` or other allowed containers |
| Using `<div>` for everything | Poor semantics, bad for SEO | Use semantic elements where appropriate |
| Forgetting `box-sizing: border-box` | Width calculations include padding + border | Always set `box-sizing: border-box` globally |
| Setting height on block elements | Content overflow issues | Let height be auto; use min-height if needed |
| Margin collapsing confusion | Unexpected spacing | Understand collapsing rules |
| Not clearing floats | Container height collapses | Use flexbox or grid instead of floats |

## Best Practices

1. **Use semantic block elements** instead of generic `<div>` when possible
2. **Set `box-sizing: border-box`** globally for predictable sizing
3. **Avoid fixed heights** on block containers; let content determine height
4. **Use `max-width`** for responsive layouts instead of fixed widths
5. **Nest block elements logically** following HTML content model rules
6. **Use CSS `display` property** to change element behavior when needed
7. **Avoid deeply nested structures** (max 3-4 levels deep)
8. **Comment your HTML** to clarify section purposes
9. **Validate your HTML** to catch nesting errors

## Summary

- Block elements stack vertically and occupy full width
- Common block elements: `<div>`, `<p>`, `<h1>`-`<h6>`, lists, semantic HTML5 elements
- The CSS box model applies fully to block elements (width, height, margin, padding, border)
- Vertical margins collapse between adjacent block elements
- Use semantic HTML5 elements for better structure and accessibility
- The `display` property can change any element's behavior
- Always validate nesting to avoid invalid HTML
