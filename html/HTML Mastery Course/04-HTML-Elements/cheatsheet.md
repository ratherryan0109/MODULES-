# HTML Elements — Cheatsheet

## Element Anatomy

```html
<tagname attribute="value">Content</tagname>
```

## Block-Level vs Inline

| Block Elements | Inline Elements |
|----------------|-----------------|
| `<div>`, `<p>` | `<span>`, `<a>` |
| `<h1>`-`<h6>` | `<strong>`, `<em>` |
| `<ul>`, `<ol>`, `<li>` | `<img>`, `<br>` |
| `<table>`, `<form>` | `<code>`, `<small>` |
| `<header>`, `<main>` | `<sub>`, `<sup>` |
| `<section>`, `<article>` | `<label>`, `<input>` |

## Void Elements (No Closing Tag)

```
<br>, <hr>, <img>, <input>, <meta>, <link>, <area>, <base>, <col>, <embed>, <source>, <track>, <wbr>
```

## Semantic HTML5 Elements

| Element | Purpose |
|---------|---------|
| `<header>` | Intro / navigation container |
| `<nav>` | Navigation links |
| `<main>` | Primary content (×1 per page) |
| `<article>` | Self-contained content |
| `<section>` | Thematic group |
| `<aside>` | Related content / sidebar |
| `<footer>` | Footer information |

## Text Semantics

| Element | Meaning |
|---------|---------|
| `<strong>` | Strong importance (bold) |
| `<em>` | Emphasis (italic) |
| `<mark>` | Highlighted text |
| `<small>` | Fine print / side comment |
| `<del>` | Deleted text |
| `<ins>` | Inserted text |
| `<sub>` | Subscript |
| `<sup>` | Superscript |
| `<code>` | Code fragment |
| `<cite>` | Title of a work |
| `<time>` | Machine-readable date/time |
| `<abbr>` | Abbreviation |
| `<q>` | Short inline quotation |
| `<blockquote>` | Block quotation |

## List Elements

```html
<ul><li>Item</li></ul>           <!-- Unordered -->
<ol><li>Item</li></ol>           <!-- Ordered -->
<dl><dt>Term</dt><dd>Desc</dd></dl>  <!-- Description -->
```

## Table Elements

```html
<table>
  <thead><tr><th>Header</th></tr></thead>
  <tbody><tr><td>Data</td></tr></tbody>
  <tfoot><tr><td>Footer</td></tr></tfoot>
</table>
```

## Form Elements

| Element | Purpose |
|---------|---------|
| `<form>` | Form container |
| `<input>` | Input field |
| `<textarea>` | Multi-line input |
| `<select>` | Dropdown |
| `<option>` | Dropdown item |
| `<button>` | Button |
| `<label>` | Input label |
| `<fieldset>` | Group related fields |
| `<legend>` | Fieldset caption |

## Nesting Rule

```
✅ Correct: <div><p><span>Text</span></p></div>
✅ Exception: <a href="#"><div><h2>Card</h2></div></a>
❌ Wrong: <span><div>Text</div></span>
```

## Key Reminders
- Close all non-void tags
- Nest properly (last opened = first closed)
- Use semantic elements over `<div>` when possible
- Only one `<main>` per page
- `<a>` can wrap blocks in HTML5
