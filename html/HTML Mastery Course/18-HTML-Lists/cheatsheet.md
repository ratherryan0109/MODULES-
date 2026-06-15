# HTML Lists — Cheatsheet

## Three List Types

| Type | Element | Purpose |
|------|---------|---------|
| Unordered | `<ul>` / `<li>` | Items where order doesn't matter |
| Ordered | `<ol>` / `<li>` | Items where order matters |
| Description | `<dl>` / `<dt>` + `<dd>` | Term-definition pairs |

## Ordered List Attributes

```html
<ol type="1">   <!-- Decimal (default) -->
<ol type="A">   <!-- Uppercase letters -->
<ol type="a">   <!-- Lowercase letters -->
<ol type="I">   <!-- Uppercase Roman -->
<ol type="i">   <!-- Lowercase Roman -->
<ol start="5">  <!-- Start at 5 -->
<ol reversed>   <!-- Descending order -->
<li value="10"> <!-- Jump to 10 -->
```

## CSS Styling

```css
/* Marker style */
ul { list-style-type: disc; }    /* disc, circle, square, none */
ol { list-style-type: decimal; } /* decimal, lower-alpha, upper-roman */

/* Marker position */
li { list-style-position: inside; }  /* or outside (default) */

/* Custom marker with ::before */
ul { list-style: none; }
ul li::before { content: '✓ '; color: green; }

/* Colored markers */
li::marker { color: red; font-size: 1.2em; }

/* Horizontal navigation */
ul { list-style: none; display: flex; gap: 20px; }
```

## Nested Lists Template

```html
<ul>
  <li>Parent item
    <ul>
      <li>Child item</li>
      <li>Child item</li>
    </ul>
  </li>
  <li>Parent item
    <ol>
      <li>Ordered child</li>
    </ol>
  </li>
</ul>
```

## Description List Template

```html
<dl>
  <dt>Term 1</dt>
  <dd>Definition for term 1.</dd>
  <dt>Term 2</dt>
  <dd>Definition for term 2.</dd>
</dl>
```

## Best Practices

- Use `<ul>` for navigation menus (with `list-style: none`)
- Use `<ol>` for step-by-step instructions
- Use `<dl>` for metadata, glossaries, and key-value pairs
- Nest lists inside `<li>` elements only
- Use CSS `::marker` for colored markers
- Keep nesting to 3 levels maximum
- Use `type` and `start` attributes for custom numbering
- Always close `<li>` tags for readability
- Add headings above lists for context
