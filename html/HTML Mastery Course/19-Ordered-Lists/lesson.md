# Module 19: Ordered Lists

## Introduction

Ordered lists (`<ol>`) display items in a specific sequence where the order matters. The browser automatically numbers each item. Ordered lists are used for step-by-step instructions, rankings, top-N lists, recipes, legal documents, and any content where the sequence conveys meaning.

The `<ol>` element supports several attributes (`type`, `start`, `reversed`) that give you control over the numbering system. Combined with CSS, you can create sophisticated list presentations.

---

## Learning Objectives

By the end of this module, you will be able to:
- Create ordered lists with the `<ol>` element
- Use `type`, `start`, and `reversed` attributes
- Understand the five numbering types (1, A, a, I, i)
- Use the `value` attribute on `<li>` to override numbering
- Nest ordered lists inside other lists
- Style ordered lists with CSS (markers, counters, positioning)
- Choose when to use `<ol>` vs `<ul>`

---

## Syntax

```html
<ol type="1" start="1" reversed>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>
```

## Numbering Types

| Type | Style | Example |
|------|-------|---------|
| `1` | Decimal (default) | 1, 2, 3, 4 |
| `A` | Uppercase letters | A, B, C, D |
| `a` | Lowercase letters | a, b, c, d |
| `I` | Uppercase Roman | I, II, III, IV |
| `i` | Lowercase Roman | i, ii, iii, iv |

## Attributes

### type
```html
<ol type="A">
  <li>First</li>  <!-- A -->
  <li>Second</li> <!-- B -->
</ol>
```

### start
```html
<ol start="10">
  <li>Item 10</li>
  <li>Item 11</li>
</ol>
```

### reversed
```html
<ol reversed>
  <li>Top item</li>  <!-- 3 -->
  <li>Middle item</li> <!-- 2 -->
  <li>Last item</li>  <!-- 1 -->
</ol>
```

### value on li
```html
<ol>
  <li>Step 1</li>
  <li value="5">Step 5 (jumped)</li>
  <li>Step 6 (continues from 5)</li>
</ol>
```

## Nesting Ordered Lists

```html
<ol>
  <li>Topic 1
    <ol type="a">
      <li>Subtopic 1a</li>
      <li>Subtopic 1b</li>
    </ol>
  </li>
  <li>Topic 2</li>
</ol>
```

## CSS Styling

```css
/* Change numbering style */
ol { list-style-type: upper-alpha; }  /* A, B, C */
ol { list-style-type: lower-roman; }  /* i, ii, iii */

/* Custom numbering with counters */
ol { list-style: none; counter-reset: custom-counter; }
ol li { counter-increment: custom-counter; }
ol li::before {
  content: "Step " counter(custom-counter) ": ";
  font-weight: bold;
}

/* Colored numbers */
ol li::marker { color: #e94560; font-weight: bold; }

/* Legal numbering (1.1, 1.2) with CSS counters */
ol { counter-reset: section; list-style: none; }
ol li { counter-increment: section; }
ol li::before { content: counter(section) ". "; }
ol ol { counter-reset: subsection; }
ol ol li { counter-increment: subsection; }
ol ol li::before {
  content: counter(section) "." counter(subsection) " ";
}
```

## Best Practices

1. **Use `<ol>` when sequence matters** — Steps, rankings, timelines
2. **Use `<ul>` when order doesn't matter** — Features, ingredients
3. **Don't manually number items** — Use the `<ol>` element
4. **Use `type` for semantic numbering** — Letters for appendices, Roman for chapters
5. **Close your `<li>` tags** — For consistency and readability
6. **Avoid deep nesting** — Beyond 3 levels becomes confusing
7. **Use CSS counters** — For complex nested numbering schemes

## Common Mistakes

1. **Using `<ul>` for numbered steps** — Lose semantic meaning
2. **Manually typing numbers** — Breaks if items are reordered
3. **Nesting lists outside `<li>`** — Invalid HTML
4. **Forgetting `type` case** — 'A' vs 'a' produce different results
5. **Not testing `reversed` browser support** — In older browsers

## Summary Notes

- `<ol>` represents an ordered list with automatic numbering
- `type` attribute controls numbering style (1, A, a, I, i)
- `start` sets the starting number
- `reversed` counts in descending order
- `value` on `<li>` overrides the number for that item
- Nested ordered lists go inside `<li>` elements
- CSS counters enable complex nested numbering (1.1, 1.2)
- Use `<ol>` when item sequence is meaningful
- Screen readers announce the number of items and current position
