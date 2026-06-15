# Module 18: HTML Lists — Overview

## Introduction

HTML provides three types of lists: ordered lists (`<ol>`), unordered lists (`<ul>`), and description lists (`<dl>`). Lists are used everywhere on the web — navigation menus, feature lists, step-by-step instructions, glossaries, and more. Understanding when and how to use each list type is essential for creating structured, semantic content.

Lists can be nested, styled with CSS, and customized with attributes to control numbering, bullet styles, and layout.

---

## Learning Objectives

By the end of this module, you will be able to:
- Identify the three types of HTML lists (ol, ul, dl)
- Create ordered, unordered, and description lists
- Nest lists within each other
- Use list attributes (type, start, reversed)
- Style lists with CSS (list-style-type, positioning, markers)
- Use lists for navigation menus
- Follow semantic and accessibility best practices

---

## Three Types of Lists

### Unordered List (`<ul>`)

For items where order doesn't matter. Rendered with bullet points by default.

```html
<ul>
  <li>Apples</li>
  <li>Bananas</li>
  <li>Oranges</li>
</ul>
```

### Ordered List (`<ol>`)

For items where order matters — steps, rankings, instructions. Rendered with numbers.

```html
<ol>
  <li>Preheat oven to 350°F</li>
  <li>Mix dry ingredients</li>
  <li>Bake for 30 minutes</li>
</ol>
```

### Description List (`<dl>`)

For name-value groups — glossaries, metadata, terms and definitions.

```html
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language — the standard language for web pages</dd>
  <dt>CSS</dt>
  <dd>Cascading Style Sheets — controls presentation</dd>
</dl>
```

---

## List Attributes

### Ordered List Attributes

| Attribute | Values | Description |
|-----------|--------|-------------|
| `type` | `1`, `A`, `a`, `I`, `i` | Numbering style |
| `start` | Number | Starting value |
| `reversed` | (boolean) | Reverse order |

```html
<ol type="A" start="3">
  <li>Third letter item</li>
  <li>Fourth letter item</li>
</ol>

<ol reversed>
  <li>Item 3</li>
  <li>Item 2</li>
  <li>Item 1</li>
</ol>
```

### List Item (`<li>`) Attribute

| Attribute | Description |
|-----------|-------------|
| `value` | Sets the number for this and subsequent items |

```html
<ol>
  <li value="10">Item 10</li>
  <li>Item 11</li>
</ol>
```

---

## Nested Lists

Lists can be nested inside list items to create hierarchies:

```html
<ul>
  <li>Fruits
    <ul>
      <li>Apples</li>
      <li>Bananas</li>
    </ul>
  </li>
  <li>Vegetables
    <ul>
      <li>Carrots</li>
      <li>Broccoli</li>
    </ul>
  </li>
</ul>
```

---

## CSS List Styling

```css
/* Bullet/number style */
ul { list-style-type: disc; }    /* disc, circle, square, none */
ol { list-style-type: decimal; } /* decimal, lower-alpha, upper-roman, etc. */

/* Custom marker */
ul { list-style-type: none; }
ul li::before {
  content: '✓ ';
  color: green;
}

/* Position */
ul { list-style-position: inside; }  /* or outside (default) */

/* Image as bullet */
ul { list-style-image: url('bullet.png'); }
```

---

## Best Practices

1. **Use semantic list types** — `ul` for unordered, `ol` for ordered, `dl` for terms
2. **Don't use lists purely for indentation** — Use CSS margin/padding instead
3. **Use `list-style: none` for navigation** — Then style links with padding and hover effects
4. **Keep list items semantic** — Each `<li>` should be a complete item
5. **Nest properly** — Always put nested `<ul>`/`<ol>` inside `<li>` elements
6. **Avoid deep nesting** — More than 3 levels becomes hard to read
7. **Use `type` and `start` attributes** — For custom numbering requirements
8. **Accessibility** — Screen readers announce list structure and item counts

---

## Common Mistakes

1. **Nesting lists outside `<li>`** — Invalid HTML; nested lists must be inside list items
2. **Using `<br>` to create list-like layouts** — Use actual list elements
3. **Forgetting closing tags** — `<li>` tags are optional to close but should be explicit
4. **Using `ul` for ordered steps** — Use `ol` when sequence matters
5. **Over-nesting** — Creates unnecessarily complex HTML
6. **Not using headings with lists** — Always add a heading or context above lists for accessibility

---

## Summary Notes

- Three list types: `<ul>` (unordered), `<ol>` (ordered), `<dl>` (description)
- `<li>` is the list item element for ul and ol
- `<dt>` (term) and `<dd>` (definition) for description lists
- `type`, `start`, `reversed` attributes control ordered list numbering
- Nested lists go inside `<li>` elements
- CSS `list-style-type` changes bullet/number appearance
- Use `list-style: none` for horizontal navigation bars
- Lists are block-level elements by default
- Screen readers announce list type and item count for accessibility
- Semantic lists improve SEO and content structure
