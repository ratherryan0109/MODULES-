# Module 4: HTML Elements

## Introduction
HTML elements are the fundamental building blocks of web pages. Every piece of content on a webpage — from headings and paragraphs to images, links, and forms — is defined by an HTML element. Understanding how elements work, how they are categorized, and how they interact is essential for writing well-structured, valid HTML.

## Learning Objectives
By the end of this module, you will be able to:
- Define HTML elements and their anatomy
- Distinguish between block-level and inline elements
- Use void (self-closing) elements correctly
- Nest elements following proper rules
- Apply semantic elements for better structure
- Understand element categories in HTML5

## Element Anatomy

Every HTML element consists of three parts (plus optional attributes):

```html
<p class="intro">Hello, World!</p>
```

| Part | Example | Description |
|------|---------|-------------|
| Opening tag | `<p>` | The tag name inside angle brackets |
| Attributes | `class="intro"` | Additional information about the element |
| Content | `Hello, World!` | The text or nested elements inside |
| Closing tag | `</p>` | Same as opening tag but with a forward slash |

### Void (Self-Closing) Elements
Some elements have no content and no closing tag:

```html
<br>       <!-- Line break -->
<hr>       <!-- Horizontal rule -->
<img src="photo.jpg" alt="Photo">  <!-- Image -->
<input type="text">  <!-- Input field -->
<meta charset="UTF-8">  <!-- Metadata -->
<link rel="stylesheet" href="style.css">  <!-- External resource -->
```

## Block-Level vs Inline Elements

### Block-Level Elements
Block elements always start on a new line and take up the full width available.

```html
<div>, <p>, <h1>-<h6>, <ul>, <ol>, <li>, <table>, <form>, <header>, <main>, <footer>, <section>, <article>, <aside>, <nav>, <blockquote>, <pre>, <hr>
```

**Characteristics:**
- Start on a new line
- Take up the full container width by default
- Can contain inline elements and other block elements
- Have top and bottom margins

### Inline Elements
Inline elements do not start on a new line and only take up as much width as necessary.

```html
<span>, <a>, <strong>, <em>, <b>, <i>, <u>, <mark>, <small>, <sub>, <sup>, <code>, <img>, <br>, <input>, <label>, <button>, <textarea>, <select>
```

**Characteristics:**
- Do not start on a new line
- Only take up as much width as their content
- Cannot contain block-level elements
- Only have left and right margins

### Visual Comparison

```
Block elements: ┌──────────────────────────────────┐
                │   Takes full width               │
                └──────────────────────────────────┘
                ┌──────────────────────────────────┐
                │   Next block on new line          │
                └──────────────────────────────────┘

Inline elements: <a>link</a> <span>text</span> <em>emphasis</em>
                  (All on the same line, only as wide as content)
```

## HTML5 Content Categories

HTML5 categorizes elements into groups based on their content model:

| Category | Description | Examples |
|----------|-------------|----------|
| **Flow content** | Most elements that go in `<body>` | `<p>`, `<div>`, `<form>`, `<table>` |
| **Phrasing content** | Text-level elements | `<span>`, `<strong>`, `<a>`, `<img>` |
| **Embedded content** | External resources | `<img>`, `<video>`, `<audio>`, `<canvas>` |
| **Interactive content** | User-interactive elements | `<a>`, `<button>`, `<input>`, `<select>` |
| **Heading content** | Section headings | `<h1>`-`<h6>`, `<hgroup>` |
| **Sectioning content** | Creates sections | `<article>`, `<section>`, `<nav>`, `<aside>` |
| **Metadata content** | Page information | `<link>`, `<meta>`, `<title>`, `<style>` |

## Semantic HTML Elements

Semantic elements clearly describe their meaning to both the browser and developer.

### Structural Semantics

| Element | Meaning |
|---------|---------|
| `<header>` | Introductory content, often with navigation |
| `<nav>` | Navigation links |
| `<main>` | Primary content (unique per page) |
| `<article>` | Self-contained composition (blog post, news story) |
| `<section>` | Thematic grouping of content |
| `<aside>` | Indirectly related content (sidebar, callout) |
| `<footer>` | Footer information, copyright, links |

### Text-Level Semantics

| Element | Meaning |
|---------|---------|
| `<strong>` | Strong importance (bold) |
| `<em>` | Emphasized text (italic) |
| `<mark>` | Highlighted/marked text |
| `<small>` | Side comments, fine print |
| `<cite>` | Title of a work |
| `<time>` | Date/time (machine-readable) |
| `<address>` | Contact information |

## Element Nesting Rules

### Correct Nesting
```html
<div>
    <p>This is <strong>valid</strong> nesting.</p>
</div>
```

### Incorrect Nesting (Overlapping)
```html
<div>
    <p>This is <strong>invalid</p></strong>
</div>
```

### Block inside Inline (Generally Invalid)
```html
<!-- Incorrect: Block element inside inline element -->
<span>
    <p>This is invalid</p>
</span>
```

### HTML5 Exceptions
In HTML5, `<a>` elements can wrap block-level elements:
```html
<a href="#">
    <div>
        <h2>Clickable Card</h2>
        <p>This entire card is a link.</p>
    </div>
</a>
```

## Common Element Groups

### Text Elements
```html
<h1> to <h6>   - Headings
<p>              - Paragraph
<br>             - Line break
<hr>             - Thematic break
<pre>            - Preformatted text
```

### List Elements
```html
<ul>    - Unordered list
<ol>    - Ordered list
<li>    - List item
<dl>    - Description list
<dt>    - Term in description list
<dd>    - Description of a term
```

### Table Elements
```html
<table>   - Table container
<thead>   - Table header section
<tbody>   - Table body section
<tfoot>   - Table footer section
<tr>      - Table row
<th>      - Table header cell
<td>      - Table data cell
```

### Form Elements
```html
<form>     - Form container
<input>    - Input field
<textarea> - Multi-line text input
<select>   - Dropdown list
<option>   - Dropdown option
<button>   - Clickable button
<label>    - Input label
<fieldset> - Group of related fields
<legend>   - Caption for fieldset
```

## Common Mistakes

| Mistake | Incorrect | Correct |
|---------|-----------|---------|
| Unclosed tags | `<p>Text` | `<p>Text</p>` |
| Wrong nesting | `<b><i>text</b></i>` | `<b><i>text</i></b>` |
| Block in inline | `<span><p>Text</p></span>` | `<div><p>Text</p></div>` |
| Missing alt on img | `<img src="photo.jpg">` | `<img src="photo.jpg" alt="description">` |
| Multiple `<main>` | Two `<main>` | Only one `<main>` |

## Best Practices
1. **Use semantic elements** instead of generic `<div>` when possible
2. **Always close tags** unless they are void elements
3. **Nest properly** — the last opened tag must be the first closed
4. **Use lowercase tag names** — convention improves readability
5. **Do not put block elements inside inline elements**
6. **Add alt text to all images** for accessibility
7. **Use `<strong>` and `<em>`** instead of `<b>` and `<i>` (they have meaning)
8. **Validate your HTML** to catch element errors

## Summary Notes
- Every HTML element has an opening tag, optional attributes, content, and closing tag
- Void elements like `<br>` and `<img>` have no closing tag
- Block elements start on a new line and take full width
- Inline elements stay on the same line and take only needed width
- Semantic elements convey meaning, improving accessibility and SEO
- HTML5 allows `<a>` to wrap block-level content
- Proper nesting is essential for valid HTML
- Content categories help understand where elements can be used
