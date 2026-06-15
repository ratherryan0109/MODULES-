# HTML Paragraphs — Cheatsheet

## Paragraph Elements

| Element | Description | Type |
|---------|-------------|------|
| `<p>` | Paragraph of text | Block |
| `<br>` | Line break within text | Void/Inline |
| `<hr>` | Thematic break (horizontal line) | Block/Void |
| `<pre>` | Preformatted text | Block |
| `<blockquote>` | Block quotation | Block |
| `<address>` | Contact information | Block |
| `<wbr>` | Word break opportunity | Void/Inline |

## Basic Paragraph

```html
<p>This is a paragraph with <strong>inline</strong> elements.</p>
```

## Line Breaks

```html
<p>Line 1<br>Line 2<br>Line 3</p>
```

## Preformatted Text

```html
<pre>
function hello() {
    console.log("Hello!");
}
</pre>
```

## Thematic Break

```html
<p>End of section one.</p>
<hr>
<p>Beginning of section two.</p>
```

## Address

```html
<address>
    John Doe<br>
    123 Main Street<br>
    New York, NY 10001
</address>
```

## Block Quote

```html
<blockquote cite="https://example.com">
    <p>The only limit is your imagination.</p>
    <cite>— Someone</cite>
</blockquote>
```

## Paragraph CSS Properties

| Property | Values | Effect |
|----------|--------|--------|
| `margin` | 0, auto, 1em | Controls spacing |
| `line-height` | 1.5, 1.8 | Line spacing |
| `text-align` | left, center, right, justify | Alignment |
| `text-indent` | 20px | First line indent |
| `word-wrap` | normal, break-word | Long word handling |
| `white-space` | normal, pre, nowrap | Whitespace handling |

## Rules
- ✅ Use `<p>` for paragraphs
- ✅ Use `<br>` for line breaks within text
- ✅ Use `<hr>` for thematic shifts
- ❌ Never nest `<p>` inside `<p>`
- ❌ Don't use `<br>` for paragraph spacing
- ❌ Don't put block elements in `<p>`
