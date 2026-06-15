# Module 26: HTML Inline Elements

## Introduction

Inline elements are the building blocks of text-level content in HTML. Unlike block elements that create distinct sections, inline elements flow within the text without disrupting the line. They only take up as much width as necessary and are essential for styling fragments of text, adding links, embedding media, and creating rich textual content.

## Learning Objectives

By the end of this module, you will be able to:
- Define inline elements and understand their behavior
- Distinguish inline from block and inline-block elements
- Use common inline elements correctly
- Understand inline element restrictions
- Style inline elements with CSS
- Nest inline elements properly
- Recognize void elements vs container inline elements

## Characteristics of Inline Elements

1. **Do not start on a new line**
2. **Only take up as much width as their content**
3. **Flow within text content**
4. **Cannot contain block-level elements** (with some exceptions)
5. **Ignore `width` and `height` properties** (unless changed with `display`)
6. **Only respect horizontal margins** (`margin-left`, `margin-right`)
7. **Respect `padding`** but may overlap with adjacent content

### Visual Behavior

```
Text before <inline>inline element</inline> text after.
The inline element flows within the text on the same line.
```

## Common Inline Elements

### Text Formatting Elements

| Element | Purpose |
|---------|---------|
| `<strong>` | Strong importance (bold) |
| `<em>` | Emphasized text (italic) |
| `<b>` | Bold text (presentational) |
| `<i>` | Italic text (presentational) |
| `<u>` | Underlined text |
| `<s>` | Strikethrough text |
| `<small>` | Smaller text (side comments) |
| `<mark>` | Highlighted/marked text |
| `<sub>` | Subscript |
| `<sup>` | Superscript |
| `<ins>` | Inserted text |
| `<del>` | Deleted text |
| `<code>` | Code fragment |
| `<kbd>` | Keyboard input |
| `<samp>` | Sample output |
| `<var>` | Variable name |
| `<abbr>` | Abbreviation |
| `<dfn>` | Definition term |
| `<q>` | Inline quotation |
| `<cite>` | Citation |
| `<time>` | Date/time |
| `<span>` | Generic inline container |
| `<a>` | Hyperlink |
| `<img>` | Image (void element) |
| `<br>` | Line break (void element) |
| `<wbr>` | Word break opportunity |
| `<bdi>` | Bidirectional isolated text |
| `<bdo>` | Bidirectional text override |
| `<data>` | Machine-readable data |
| `<ruby>`, `<rt>`, `<rp>` | Ruby annotations |

## Inline Elements vs Void Elements

Some inline elements are **void elements** (self-closing, no content):

```html
<!-- Container inline elements (have content) -->
<strong>text content</strong>
<a href="#">link text</a>
<span>text</span>

<!-- Void inline elements (no content) -->
<img src="photo.jpg" alt="Photo">
<br>
<wbr>
<input type="text">
```

## Nesting Rules

### Correct Nesting
```html
<p>
  This is <strong>very <em>important</em></strong> content.
</p>
```

### Incorrect Nesting
```html
<!-- INVALID: Inline cannot contain block -->
<strong>
  <p>This is invalid</p>
</strong>
```

## Inline Elements and the Box Model

Inline elements have a modified box model:

```css
.inline-element {
  /* width: 300px; — IGNORED */
  /* height: 100px; — IGNORED */
  margin-left: 10px;  /* Works */
  margin-right: 10px; /* Works */
  margin-top: 20px;   /* Does NOT affect layout flow */
  margin-bottom: 20px; /* Does NOT affect layout flow */
  padding: 10px;      /* Applied but may overlap */
  border: 1px solid;  /* Visible */
  background: #f0f0f0; /* Visible */
}
```

### Visual Impact of Padding on Inline Elements

Inline padding extends the background but does not increase the line height:

```
|  Text before  <span style="padding: 20px;">inline text</span>  text after.  |
                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                 Background extends but line height unchanged
```

## Replaced Inline Elements

Some inline elements are "replaced" — their appearance is determined by external resources:

```html
<img src="photo.jpg" alt="Photo">       <!-- Image -->
<input type="text" value="Input">        <!-- Form input -->
<textarea>Text</textarea>                <!-- Text area -->
<select><option>Choice</option></select> <!-- Select dropdown -->
```

Replaced elements can have `width` and `height` applied, unlike non-replaced inline elements.

## Styling Inline Elements

### Display: Inline-Block

Convert inline elements to inline-block to gain box model control:

```css
.inline-block-item {
  display: inline-block;
  width: 150px;
  height: 50px;
  margin: 10px;
  padding: 8px;
}
```

### Display: Block

Force inline elements to behave as blocks:

```css
a {
  display: block;
  padding: 12px;
  background: #3498db;
  color: white;
  text-decoration: none;
}
```

## Practical Examples

### Text Formatting
```html
<p>
  The <strong>quick</strong> brown fox <em>jumps</em> over the lazy dog.
  This is <mark>highlighted</mark> and this is <small>small text</small>.
  Water is H<sub>2</sub>O. E = mc<sup>2</sup>.
</p>
```

### Links and Navigation
```html
<nav>
  <a href="/">Home</a>
  <a href="/about">About</a>
  <a href="/contact">Contact</a>
</nav>
```

### Icons and Images
```html
<p>
  <img src="icon.png" alt="Icon" class="inline-icon">
  Text flows around the image naturally.
</p>
```

## Common Mistakes

| Mistake | Problem | Solution |
|---------|---------|----------|
| Putting block inside inline | Invalid HTML, browser closes inline early | Only nest inline inside inline |
| Setting width on inline element | Has no effect | Use `display: inline-block` or block |
| Using `<br>` for spacing | Bad practice, not semantic | Use CSS margin/padding |
| Overusing `<span>` when semantic element exists | Poor semantics | Use `<strong>`, `<em>`, `<mark>`, etc. |
| Expecting vertical margins to work | They do not affect layout | Use `line-height` or display: inline-block |
| Forgetting `alt` on `<img>` | Accessibility issue | Always add descriptive `alt` text |
| Nesting `<a>` inside `<a>` | Invalid HTML | Never nest anchor elements |

## Best Practices

1. **Use semantic inline elements** over generic `<span>` (use `<strong>` not `<b>`, `<em>` not `<i>`)
2. **Never nest block elements inside inline elements**
3. **Use `display: inline-block`** when you need box model control on inline content
4. **Use CSS instead of `<br>`** for spacing between elements
5. **Always add `alt` attributes** to `<img>` elements
6. **Keep inline elements simple** — avoid complex nesting
7. **Use `<span>` only as a last resort** when no semantic element fits
8. **Use `line-height`** to control vertical spacing of inline content
9. **Be aware of whitespace** between inline elements (renders as space)
10. **Validate your HTML** to ensure correct inline nesting

## Whitespace Between Inline Elements

Whitespace in HTML (newlines, spaces) between inline elements creates visible gaps:

```html
<!-- This creates a gap -->
<span>One</span>
<span>Two</span>

<!-- No gap -->
<span>One</span><span>Two</span>
```

## Summary

- Inline elements flow within text and do not start new lines
- They ignore `width` and `height` (except replaced elements)
- Only horizontal margins work; vertical margins are ignored
- Padding and borders are visible but may overlap adjacent content
- Never nest block elements inside inline elements
- Use semantic elements (`<strong>`, `<em>`, `<mark>`) instead of `<span>` when possible
- Use `display: inline-block` for box model control on inline content
- Whitespace between inline elements creates visible gaps
