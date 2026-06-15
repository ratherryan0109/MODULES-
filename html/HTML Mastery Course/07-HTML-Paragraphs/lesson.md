# Module 7: HTML Paragraphs

## Introduction
Paragraphs are the most fundamental building block for text content on the web. The `<p>` element defines a paragraph, creating a block of text with automatic spacing before and after. Understanding how to properly use paragraphs — along with line breaks, preformatted text, and horizontal rules — is essential for presenting readable, well-structured content.

## Learning Objectives
By the end of this module, you will be able to:
- Create and structure paragraphs using `<p>`
- Add line breaks with `<br>`
- Display preformatted text with `<pre>`
- Insert thematic breaks with `<hr>`
- Understand browser paragraph rendering
- Follow best practices for text organization

## The `<p>` Element

```html
<p>This is a paragraph of text. Browsers automatically add space before and after each paragraph.</p>
```

### Key Characteristics
- Block-level element (starts on a new line)
- Automatically adds margin above and below (default ~16px)
- Can contain inline elements like `<strong>`, `<em>`, `<a>`, `<span>`
- Should NOT contain block-level elements like `<div>`, other `<p>`, headings
- Closing tag is technically optional but should always be included

### Multiple Paragraphs
```html
<p>First paragraph of content. It explains the main concept.</p>
<p>Second paragraph continues the discussion with more details.</p>
<p>Third paragraph concludes the topic with final thoughts.</p>
```

## The `<br>` Element (Line Break)

Use `<br>` to create a line break within a paragraph or text block.

```html
<p>123 Main Street<br>
New York, NY 10001<br>
United States</p>
```

- Void element — no closing tag
- Use for address, poetry, or song lyrics
- NOT for separating paragraphs (use `<p>` for that)
- Overusing `<br>` is a sign of poor structure

## The `<pre>` Element (Preformatted Text)

Preserves whitespace and line breaks exactly as written in HTML.

```html
<pre>
function hello() {
    console.log("Hello, World!");
    return true;
}
</pre>
```

- Monospace font by default
- Preserves spaces, tabs, and line breaks
- Ideal for code blocks, ASCII art, and poetry
- Use with `<code>` for inline code formatting

## The `<hr>` Element (Thematic Break)

Creates a horizontal line representing a thematic break.

```html
<section>
    <h2>Part 1</h2>
    <p>Content of first section...</p>
</section>

<hr>

<section>
    <h2>Part 2</h2>
    <p>Content of second section...</p>
</section>
```

- Block-level void element
- Represents a change in topic or scene
- NOT just a decorative line — has semantic meaning

## Paragraph Styling (CSS)

```html
<p style="text-align: justify; line-height: 1.6; text-indent: 20px;">
    This paragraph has justified alignment, comfortable line spacing,
    and an indented first line for a professional look.
</p>
```

## Common Mistakes

| Mistake | Incorrect | Correct |
|---------|-----------|---------|
| Nested paragraphs | `<p><p>Text</p></p>` | Two separate `<p>` tags |
| Multiple `<br>` for spacing | `Text<br><br><br>More` | Use CSS `margin` |
| Empty paragraphs | `<p></p>` | Use CSS padding instead |
| Block inside `<p>` | `<p><div>Text</div></p>` | Use `<div>` instead |
| `<p>` for headings | `<p>Section Title</p>` | Use `<h2>` or `<h3>` |
| Missing closing `</p>` | `<p>Text` | Always close paragraphs |

## Best Practices
1. **Use `<p>` for paragraphs** — not `<br>` or `<div>`
2. **Keep paragraphs focused** — one main idea per paragraph
3. **Close all `<p>` tags** — even though optional, it prevents bugs
4. **Use CSS for spacing** — not multiple `<br>` elements
5. **Use `<pre>` for code** — preserves formatting
6. **Use `<hr>` for thematic breaks** — not for decoration
7. **Avoid empty paragraphs** — they create unwanted whitespace
8. **Consider readability** — 60-75 characters per line is ideal

## Summary Notes
- `<p>` defines a paragraph with automatic spacing
- `<br>` creates a line break within content
- `<pre>` preserves whitespace for code/poetry
- `<hr>` represents a thematic break
- Always close `<p>` tags
- Do not nest block elements inside `<p>`
- Use CSS for spacing and styling, not structural elements
