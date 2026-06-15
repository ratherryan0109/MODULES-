# Module 9: HTML Quotations

## Introduction
HTML provides several elements for marking up quotations and citations. These elements distinguish between short inline quotes and longer block quotes, identify the source being quoted, and provide semantic meaning that helps browsers, search engines, and screen readers understand quoted content. Proper use of quotation elements improves both accessibility and content credibility.

## Learning Objectives
By the end of this module, you will be able to:
- Use `<q>` for inline quotations
- Use `<blockquote>` for longer block quotations
- Add citations with `<cite>`
- Use `<abbr>` for abbreviations
- Style quotations and understand their default browser rendering
- Understand best practices for citing sources

## The `<q>` Element (Inline Quotation)

The `<q>` element represents a short inline quotation. Browsers automatically add quotation marks around the content.

```html
<p>Albert Einstein once said, <q>Imagination is more important than knowledge.</q></p>
```

### Key Characteristics
- Inline element
- Browsers automatically add quotation marks
- Can nest `<q>` elements (browser switches quote styles)
- Use for short quotes that fit within a paragraph

### Nested Quotations
```html
<p>She said, <q>He told me, <q>I will be there soon</q>, but he never showed up.</q></p>
```
Browsers automatically alternate between different quotation mark styles for nesting.

### cite Attribute
```html
<q cite="https://example.com/speech">The only limit is your imagination.</q>
```
The `cite` attribute provides the URL of the source (not visible to users by default).

## The `<blockquote>` Element (Block Quotation)

The `<blockquote>` element represents a longer quotation that typically spans multiple lines or paragraphs.

```html
<blockquote cite="https://example.com/source">
    <p>The most beautiful thing we can experience is the mysterious. It is the source of all true art and science.</p>
    <cite>— Albert Einstein, The World As I See It</cite>
</blockquote>
```

### Key Characteristics
- Block-level element
- Typically indented by browsers (default: ~40px margin)
- Can contain multiple paragraphs, headings, lists
- Use for quotes that are 2+ lines or deserve visual separation

### Styling blockquote
```html
<blockquote style="border-left: 4px solid #3498db; padding: 15px; margin: 20px 0; background: #f8f9fa;">
    <p>This is a styled block quotation with a left border accent.</p>
</blockquote>
```

## The `<cite>` Element (Citation)

The `<cite>` element represents the title of a creative work (book, article, movie, song, etc.).

```html
<p>One of my favorite books is <cite>The Great Gatsby</cite> by F. Scott Fitzgerald.</p>
<p>For more details, see <cite>MDN Web Docs</cite>.</p>
```

### Important Notes
- HTML5 restricts `<cite>` to **titles of works** only (not people's names)
- Rendered in italic by default
- For a person's name as a source, use regular text or other formatting
- Do not use `<cite>` for the person being quoted (use a different element)

### Inside `<blockquote>`
```html
<blockquote>
    <p>Quote content here.</p>
    <cite>— Author Name, <cite>Book Title</cite></cite>
</blockquote>
```

## The `<abbr>` Element (Abbreviation)

The `<abbr>` element represents an abbreviation or acronym, with the optional `title` attribute providing the full expansion.

```html
<p>The <abbr title="World Health Organization">WHO</abbr> issued new guidelines.</p>
<p><abbr title="HyperText Markup Language">HTML</abbr> is the foundation of web development.</p>
```

### Key Characteristics
- Inline element
- Title attribute shows full form on hover
- Some browsers add a dotted underline
- Screen readers may expand the abbreviation
- Use for all abbreviations on first occurrence

## The `<address>` Element (Contact Information)

The `<address>` element provides contact information for the nearest `<article>` or `<body>` ancestor.

```html
<address>
    Written by <a href="mailto:john@example.com">John Doe</a><br>
    Visit us at:<br>
    123 Main Street<br>
    New York, NY 10001
</address>
```

### Key Characteristics
- Block-level element
- Rendered in italic by default
- Should only contain contact information
- Typically placed in `<footer>`

## Visual Summary

```
Inline: <q>Short quote</q> → "Short quote"
        <abbr title="World Health">WHO</abbr> → WHO (hover for tooltip)
        <cite>Book Title</cite> → Book Title (italic)

Block:  <blockquote>
            ┌─────────────────────────────┐
            │  Longer quote that can       │
            │  span multiple lines.         │
            │  ─ Author, Source            │
            └─────────────────────────────┘
        </blockquote>
```

## Common Mistakes

| Mistake | Incorrect | Correct |
|---------|-----------|---------|
| Using `<q>` for long quotes | `<q>Long paragraph...</q>` | Use `<blockquote>` |
| Using `<cite>` for a person | `<cite>Albert Einstein</cite>` | `<p>Albert Einstein</p>` |
| Not using `cite` attribute | `<blockquote>Text</blockquote>` | `<blockquote cite="url">Text</blockquote>` |
| Missing `title` on `<abbr>` | `<abbr>HTML</abbr>` | `<abbr title="HyperText...">HTML</abbr>` |
| Using fake quotes | `"Text"` instead of `<q>` | Use `<q>` for semantic quotes |

## Best Practices
1. **Use `<q>` for short inline quotes** — let browsers add quotation marks
2. **Use `<blockquote>` for longer quotes** — semantic separation
3. **Always include `cite` attribute** — when you know the source URL
4. **Use `<cite>` for work titles only** — not for people's names
5. **Always expand abbreviations** — use `title` attribute on `<abbr>`
6. **Use `<address>` for contact info** — not just any italic text
7. **Nest `<q>` properly** — inner quotes should be inside outer `<q>` tags
8. **Respect copyright** — quote others' work fairly and cite sources

## Summary Notes
- `<q>` = short inline quote (browser adds quotation marks)
- `<blockquote>` = long block quote (indented by default)
- `<cite>` = title of a creative work (italic)
- `<abbr>` = abbreviation with optional expansion
- `<address>` = contact information (italic, block-level)
- Always cite sources for credibility and copyright compliance
- Semantic quotation elements improve accessibility and SEO
