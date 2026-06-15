# Semantic Accessibility - Cheatsheet

## Core Semantic Elements

### Document Structure
| Element | Purpose | Landmark |
|---------|---------|----------|
| `<header>` | Introductory content | banner (top-level) |
| `<nav>` | Navigation links | navigation |
| `<main>` | Primary content | main |
| `<article>` | Self-contained composition | (within main) |
| `<section>` | Thematic grouping | (within main) |
| `<aside>` | Tangentially related | complementary |
| `<footer>` | Footer info | contentinfo |

### Text Structure
- `<h1>` (×1) → `<h2>` → `<h3>` → `<h4>` → `<h5>` → `<h6>`
- `<p>` for paragraphs
- `<ul>` / `<ol>` / `<li>` for lists
- `<dl>` / `<dt>` / `<dd>` for definition lists
- `<blockquote>` for extended quotes
- `<figure>` / `<figcaption>` for captioned content

### Inline Semantics
| Element | Meaning | Screen Reader Effect |
|---------|---------|---------------------|
| `<strong>` | Strong importance | Different voice emphasis |
| `<em>` | Stressed emphasis | Italic voice inflection |
| `<code>` | Code snippet | Monotone voice |
| `<kbd>` | Keyboard input | Announces as command |
| `<cite>` | Citation | - |
| `<abbr>` | Abbreviation | Reads abbreviation |
| `<time>` | Date/time | Natural date reading |
| `<mark>` | Highlighted text | May announce "mark" |
| `<small>` | Side comment | Lower prominence |

### Forms
```html
<form role="search" aria-label="Search">...</form>
<fieldset><legend>Group Label</legend>...</fieldset>
<label for="input-id">Field Label</label>
<input type="text" id="input-id">
<button type="submit">Submit</button>
<progress max="100" value="50"></progress>
<meter min="0" max="100" value="75"></meter>
```

## Interactive Elements (Native Keyboard Support)
| Element | Keyboard Activation |
|---------|-------------------|
| `<button>` | Enter, Space |
| `<a href>` | Enter |
| `<select>` | Arrow keys, Enter |
| `<input>` | Type text |
| `<input type="range">` | Arrow keys |
| `<details>/<summary>` | Enter, Space |
| `<dialog>` | Escape (close) |

## Heading Rules
- ONE `<h1>` per page
- No skipping levels (h1 → h2 → h3)
- Headings reflect content structure, not size
- Screen readers navigate via heading key (H)

## Div vs Semantic: Common Replacements
```
<div class="header"> → <header>
<div class="nav"> → <nav>
<div class="main"> → <main>
<div class="footer"> → <footer>
<div onclick=""> → <button>
<div class="heading"> → <h1>-<h6>
<span class="link"> → <a href>
<div class="list"> → <ul>/<ol>
```

## Accessibility Benefits
- **Keyboard**: Native elements are focusable/activatable
- **Screen reader**: Landmarks, headings, lists announced
- **SEO**: Search engines understand content
- **Progressive enhancement**: Works without CSS/JS
- **Maintainability**: Self-documenting code

## Quick Audit
- [ ] Only one `<h1>` on page
- [ ] Headings don't skip levels
- [ ] All interactive elements are buttons or links
- [ ] Every `<input>` has an associated `<label>`
- [ ] Page uses `<main>`, `<nav>`, `<header>`, `<footer>`
- [ ] Related items are in lists (`<ul>` / `<ol>`)
- [ ] `<table>` only for tabular data (not layout)
- [ ] No `<div>` or `<span>` with onclick
