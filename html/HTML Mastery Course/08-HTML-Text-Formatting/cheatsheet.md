# HTML Text Formatting — Cheatsheet

## Semantic vs Presentational

| Semantic | Presentational | Meaning |
|----------|---------------|---------|
| `<strong>` | `<b>` | Strong importance (bold) |
| `<em>` | `<i>` | Stress emphasis (italic) |
| `<ins>` | `<u>` | Inserted text (underline) |
| `<del>` | `<s>` | Deleted text (strikethrough) |

## Text Formatting Elements

| Element | Visual | Usage |
|---------|--------|-------|
| `<strong>` | **Bold** | Strong importance |
| `<em>` | *Italic* | Emphasis |
| `<mark>` | Yellow | Highlighted |
| `<small>` | Smaller | Fine print |
| `<del>` | ~~Strikethrough~~ | Deleted |
| `<ins>` | Underline | Inserted |
| `<sub>` | Below line | Subscript |
| `<sup>` | Above line | Superscript |
| `<b>` | **Bold** | Stylistic bold |
| `<i>` | *Italic* | Technical/foreign |
| `<u>` | Underline | Annotation |
| `<s>` | ~~Strikethrough~~ | No longer accurate |

## Technical Elements

| Element | Purpose | Example |
|---------|---------|---------|
| `<code>` | Code fragment | `<code>let x = 1;</code>` |
| `<kbd>` | Keyboard input | `<kbd>Ctrl+S</kbd>` |
| `<samp>` | Sample output | `<samp>Error</samp>` |
| `<var>` | Variable name | `<var>count</var>` |
| `<data>` | Machine-readable | `<data value="1">One</data>` |
| `<time>` | Date/time | `<time>2026-06-12</time>` |

## Quotes & Citations

| Element | Purpose |
|---------|---------|
| `<q>` | Short inline quote |
| `<blockquote>` | Block quotation |
| `<cite>` | Title of a work |
| `<abbr>` | Abbreviation |
| `<dfn>` | Defining term |

## Editorial Changes

| Element | Meaning | Visual |
|---------|---------|--------|
| `<del>` | Deleted (with replacement) | ~~Strikethrough~~ |
| `<ins>` | Inserted (as replacement) | Underline |
| `<s>` | No longer accurate | ~~Strikethrough~~ |

## Best Practices
- ✅ Use `<strong>` over `<b>` for importance
- ✅ Use `<em>` over `<i>` for emphasis
- ✅ Always set `title` on `<abbr>` for full form
- ✅ Use `<cite>` for titles of works
- ❌ Don't use `<sub>`/`<sup>` for layout
- ❌ Don't misuse `<small>` just for smaller text
- ❌ Don't stack too many formatting elements
