# Module 8: HTML Text Formatting

## Introduction
HTML provides a rich set of elements for formatting text. These elements go beyond simple bold and italic — they add semantic meaning to text, making it more accessible, SEO-friendly, and meaningful. From strong importance and emphasis to citations, definitions, and code snippets, text formatting elements help convey the right message and tone.

## Learning Objectives
By the end of this module, you will be able to:
- Use semantic formatting elements appropriately
- Distinguish between presentational and semantic markup
- Format text for emphasis, importance, and technical content
- Use subscript, superscript, and special text elements
- Understand the accessibility impact of text formatting

## Semantic vs Presentational Formatting

### Presentational (Deprecated or Less Preferred)
```html
<b>Bold text</b>         <!-- Just bold -->
<i>Italic text</i>       <!-- Just italic -->
<u>Underline</u>          <!-- Just underline -->
```

### Semantic (Recommended)
```html
<strong>Important text</strong>     <!-- Strong importance -->
<em>Emphasized text</em>           <!-- Stressed emphasis -->
<mark>Highlighted text</mark>      <!-- Marked/relevant -->
```

**Key Difference**: Semantic elements convey meaning, not just visual style. Screen readers pronounce `<em>` with different intonation.

## Text Formatting Elements

| Element | Visual | Meaning |
|---------|--------|---------|
| `<strong>` | **Bold** | Strong importance, seriousness |
| `<em>` | *Italic* | Emphasized, stressed |
| `<mark>` | Highlighted | Relevant, marked |
| `<small>` | Smaller | Fine print, side comments |
| `<del>` | ~~Strikethrough~~ | Deleted text |
| `<ins>` | Underline | Inserted text |
| `<sub>` | Subscript | Subscript (H₂O) |
| `<sup>` | Superscript | Superscript (E=mc²) |
| `<b>` | **Bold** | Stylistic bold (no meaning) |
| `<i>` | *Italic* | Technical term, foreign word |
| `<u>` | Underline | Unarticulated annotation |
| `<s>` | ~~Strikethrough~~ | No longer accurate |

## Detailed Element Guide

### `<strong>` — Strong Importance
```html
<p><strong>Warning:</strong> This area is restricted.</p>
<p>You must <strong>save your work</strong> before closing.</p>
```
- Indicates serious importance
- Screen readers use different voice
- Nesting increases emphasis level

### `<em>` — Emphasized Text
```html
<p>I <em>really</em> mean this.</p>
<p>This is <em>not</em> what I expected.</p>
```
- Indicates stressed emphasis
- Changes sentence meaning
- Screen readers emphasize verbally

### `<mark>` — Marked/Highlighted
```html
<p>The <mark>key finding</mark> was unexpected.</p>
<p>Search results: <mark>HTML</mark> tutorial</p>
```
- Highlights text for reference
- Often used in search results
- Yellow background by default

### `<small>` — Side Comments
```html
<p><small>Prices exclude tax and shipping.</small></p>
<p><small>&copy; 2026 All rights reserved.</small></p>
```
- Represents fine print, disclaimers
- Not for reducing text size generally

### `<del>` and `<ins>` — Changes
```html
<p>Price: <del>$29.99</del> <ins>$19.99</ins></p>
<p><del>Outdated information</del> <ins>Updated content</ins></p>
```
- `<del>` shows deleted/removed content
- `<ins>` shows newly inserted content
- Useful for showing document revisions

### `<sub>` and `<sup>` — Subscript/Superscript
```html
<p>H<sub>2</sub>O is water.</p>
<p>E=mc<sup>2</sup> is relativity.</p>
<p>The 1<sup>st</sup> of January.</p>
<p>Footnote<sup><a href="#fn1">[1]</a></sup></p>
```

### `<b>` — Bold (Stylistic)
```html
<p><b>Important:</b> Terms and conditions apply.</p>
<p>This chapter introduces <b>key concepts</b>.</p>
```
- Use when no semantic element fits
- Keywords, product names, lead sentences

### `<i>` — Italic (Stylistic)
```html
<p>The <i>Titanic</i> sank in 1912.</p>
<p>This is a <i>bon mot</i> (clever phrase).</p>
```
- Foreign words, technical terms, thoughts
- Ship names, book titles, taxonomic names

### `<u>` — Underline
```html
<p><u>Misspelled</u> word.</p>
<p>Proper <u>names</u> in some languages.</p>
```
- Avoid for links (users expect underlined links)
- Use for misspellings or proper names in some languages

### `<s>` — Strikethrough
```html
<p><s>Old price: $100</s></p>
<p><s>This offer has expired.</s></p>
```
- Indicates content is no longer accurate
- Different from `<del>` (which shows replacement)

## Technical and Quotation Elements

| Element | Purpose | Example |
|---------|---------|---------|
| `<code>` | Code fragment | `<code>console.log()</code>` |
| `<kbd>` | Keyboard input | Press `<kbd>Ctrl+S</kbd>` |
| `<samp>` | Sample output | `<samp>File saved</samp>` |
| `<var>` | Variable name | `<var>username</var>` |
| `<cite>` | Citation | `<cite>The Great Gatsby</cite>` |
| `<q>` | Short quote | `<q>To be or not to be</q>` |
| `<abbr>` | Abbreviation | `<abbr title="Doctor">Dr.</abbr>` |
| `<dfn>` | Definition | `<dfn>HTML</dfn> is...` |
| `<bdi>` | Bi-directional isolation | `<bdi>user123</bdi>` |
| `<bdo>` | Bi-directional override | `<bdo dir="rtl">Text</bdo>` |
| `<ruby>` | Ruby annotation | `<ruby>漢<rt>kan</rt></ruby>` |

## Accessibility Considerations

- Screen readers handle `<strong>` and `<em>` differently than normal text
- Overuse of formatting elements reduces their effectiveness
- Do not rely on visual formatting alone — use semantic elements
- `<mark>` helps screen reader users find relevant content
- Avoid `<u>` (underlined text is often mistaken for links)

## Common Mistakes

| Mistake | Incorrect | Correct |
|---------|-----------|---------|
| Using `<b>` for importance | `<b>Important!</b>` | `<strong>Important!</strong>` |
| Using `<i>` for emphasis | `<i>Really?</i>` | `<em>Really?</em>` |
| Overusing `<mark>` | Entire paragraph marked | Only key phrases |
| Using `<sub>`/`<sup>` for layout | Position text with these | Use CSS |
| Not using `<abbr>` title | `<abbr>HTML</abbr>` | `<abbr title="HyperText...">HTML</abbr>` |
| Nesting formatting incorrectly | `<strong><em>text</strong></em>` | `<strong><em>text</em></strong>` |

## Best Practices
1. **Use semantic elements over presentational** — `<strong>` > `<b>`, `<em>` > `<i>`
2. **Format with purpose** — every formatting element should have a reason
3. **Avoid over-formatting** — too much formatting is distracting
4. **Use CSS for visual styling** — keep HTML for meaning
5. **Always expand abbreviations** — use the `title` attribute on `<abbr>`
6. **Test formatting with a screen reader**
7. **Remember accessibility** — formatting affects all users

## Summary Notes
- Semantic elements (`<strong>`, `<em>`) convey meaning beyond visual style
- `<b>`, `<i>`, `<u>` are presentational — use sparingly
- `<sub>` and `<sup>` handle mathematical and chemical notation
- `<code>`, `<kbd>`, `<samp>`, `<var>` mark technical content
- `<del>`/`<ins>` show document changes
- `<mark>` highlights relevant content
- `<q>` and `<cite>` handle quotations and references
- Always consider accessibility when formatting text
