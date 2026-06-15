# HTML Inline Elements Cheatsheet

## Key Characteristics

| Feature | Behavior |
|---------|----------|
| New line | No — stays on same line |
| Width | Content-based only |
| Height | Content-based only |
| Vertical margin | Ignored |
| Horizontal margin | Works |
| Width/Height CSS | Ignored (non-replaced) |
| Can contain block | No |
| Whitespace | Renders as visible gap |

## Common Inline Elements

### Text Semantics
| Element | Description | Example |
|---------|-------------|---------|
| `<strong>` | Strong importance | `**bold**` |
| `<em>` | Emphasis | `*italic*` |
| `<mark>` | Highlighted text | Yellow background |
| `<small>` | Side comments | Smaller text |
| `<sub>` | Subscript | H₂O |
| `<sup>` | Superscript | m² |
| `<ins>` | Inserted text | Underlined |
| `<del>` | Deleted text | Strikethrough |

### Technical
| Element | Description |
|---------|-------------|
| `<code>` | Code fragment |
| `<kbd>` | Keyboard input |
| `<samp>` | Sample output |
| `<var>` | Variable name |
| `<abbr>` | Abbreviation (use title attr) |
| `<dfn>` | Definition term |

### Links and Quotes
| Element | Description |
|---------|-------------|
| `<a>` | Hyperlink |
| `<q>` | Inline quotation |
| `<cite>` | Citation |
| `<time>` | Date/time (with datetime attr) |

### Generic
| Element | Description |
|---------|-------------|
| `<span>` | Generic inline container |
| `<b>` | Bold (presentational) |
| `<i>` | Italic (presentational) |
| `<u>` | Underline (presentational) |
| `<s>` | Strikethrough (presentational) |

### Void Inline Elements
| Element | Description |
|---------|-------------|
| `<br>` | Line break |
| `<wbr>` | Word break opportunity |
| `<img>` | Image (replaced) |
| `<input>` | Input control (replaced) |

## Box Model Comparison

| Property | Inline | Inline-Block | Block |
|----------|--------|--------------|-------|
| `width` | Ignored | Works | Works |
| `height` | Ignored | Works | Works |
| `margin-top` | Ignored | Works | Works |
| `margin-bottom` | Ignored | Works | Works |
| `margin-left` | Works | Works | Works |
| `margin-right` | Works | Works | Works |
| `padding` | Visual only | Works | Works |
| `border` | Visual only | Works | Works |

## Removing Whitespace Gaps

```css
/* Method 1: font-size: 0 on parent */
.parent { font-size: 0; }
.parent > * { font-size: 16px; }

/* Method 2: Flexbox */
.parent { display: flex; }

/* Method 3: HTML comment between elements */
/* <span>A</span><!-- --><span>B</span> */
```

## Accessibility Tips

| Element | Accessibility |
|---------|--------------|
| `<strong>` | Screen readers emphasize |
| `<em>` | Screen readers emphasize |
| `<abbr title="">` | Announces expansion |
| `<q>` | Announces as quotation |
| `<cite>` | Announces as citation |
| `<code>` | Announces as code |
| `<mark>` | Announces as marked |
| `<time datetime="">` | Machine-readable date |
| `<dfn title="">` | Announces definition |

## Nesting Rules

```
✓ Inline inside block:    <p><strong>text</strong></p>
✓ Inline inside inline:   <strong><em>text</em></strong>
✗ Block inside inline:    <strong><p>text</p></strong>
```

## Common Patterns

```html
<!-- Text formatting -->
<p>This is <strong>important</strong> and <em>emphasized</em>.</p>

<!-- Inline navigation -->
<nav><a href="#">Home</a><a href="#">About</a></nav>

<!-- Inline icons with text -->
<p><img src="icon.png" alt=""> Settings</p>

<!-- Toolbar with inline-block -->
<div class="toolbar">
  <button>B</button>
  <button>I</button>
  <button>U</button>
</div>
```
