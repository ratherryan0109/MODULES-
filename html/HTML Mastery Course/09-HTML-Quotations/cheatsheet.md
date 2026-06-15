# HTML Quotations — Cheatsheet

## Quotation Elements

| Element | Type | Description | Visual |
|---------|------|-------------|--------|
| `<q>` | Inline | Short inline quotation | "Quoted text" |
| `<blockquote>` | Block | Longer block quotation | Indented |
| `<cite>` | Inline | Title of a creative work | *Italic* |
| `<abbr>` | Inline | Abbreviation/acronym | Dotted underline |
| `<address>` | Block | Contact information | *Italic* |

## Inline Quotation

```html
<p>Einstein said, <q>Imagination is more important than knowledge.</q></p>
```

### Nested Quotes
```html
<q>He said, <q>She whispered, <q>Hello</q></q></q>
```
(Browsers alternate quote styles automatically)

## Block Quotation

```html
<blockquote cite="https://example.com/source">
    <p>Quote text here...</p>
    <cite>— Author Name, <cite>Source Title</cite></cite>
</blockquote>
```

## Citation

```html
<p>My favorite book is <cite>The Great Gatsby</cite>.</p>
<p>According to <cite>MDN Web Docs</cite>, ...</p>
```

> **Note**: HTML5 restricts `<cite>` to titles of works only — not people's names.

## Abbreviation

```html
<p><abbr title="HyperText Markup Language">HTML</abbr> is easy to learn.</p>
```

## Address (Contact Info)

```html
<address>
    Written by <a href="mailto:john@example.com">John Doe</a><br>
    123 Main Street<br>
    New York, NY 10001
</address>
```

## Attributes

| Attribute | Used On | Purpose |
|-----------|---------|---------|
| `cite` | `<q>`, `<blockquote>` | Source URL |
| `title` | `<abbr>` | Full expansion |

## Styling Tips

```css
blockquote {
    border-left: 4px solid #ccc;
    padding-left: 15px;
    margin: 20px 0;
    font-style: italic;
}

q {
    font-style: italic;
}

cite {
    font-style: normal;
    font-size: 0.9em;
    color: #666;
}
```

## Best Practices
- ✅ Use `<q>` for short inline quotes
- ✅ Use `<blockquote>` for long quotes
- ✅ Always cite sources with `cite` attribute
- ✅ Use `<cite>` for work titles only
- ❌ Don't use `<cite>` for people's names
- ❌ Don't use `<q>` for long multi-paragraph quotes
