# Ordered Lists — Cheatsheet

## Basic Structure

```html
<ol>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ol>
```

## Attributes

| Attribute | Values | Description |
|-----------|--------|-------------|
| `type` | `1`, `A`, `a`, `I`, `i` | Numbering style |
| `start` | Number | Starting value |
| `reversed` | (boolean) | Descending order |

## Numbering Styles

```
type="1" → 1, 2, 3, 4        (decimal)
type="A" → A, B, C, D        (uppercase letters)
type="a" → a, b, c, d        (lowercase letters)
type="I" → I, II, III, IV    (uppercase Roman)
type="i" → i, ii, iii, iv    (lowercase Roman)
```

## List Item Value

```html
<ol>
  <li>Item 1</li>
  <li value="10">Item 10</li>
  <li>Item 11 (continues)</li>
</ol>
```

## CSS Styling

```css
/* Change marker style */
ol { list-style-type: upper-roman; }

/* Style the marker itself */
li::marker { color: red; font-weight: bold; }

/* Remove default, use custom counter */
ol { list-style: none; counter-reset: my-counter; }
li { counter-increment: my-counter; }
li::before { content: "Step " counter(my-counter) ": "; }

/* Legal numbering */
ol { counter-reset: section; }
> li { counter-increment: section; }
> li::before { content: counter(section) ". "; }
ol ol { counter-reset: sub; }
ol ol li { counter-increment: sub; }
ol ol li::before { content: counter(section) "." counter(sub) " "; }
```

## Nested List Template

```html
<ol>
  <li>Main step 1
    <ol type="a">
      <li>Sub-step a</li>
      <li>Sub-step b</li>
    </ol>
  </li>
  <li>Main step 2</li>
</ol>
```

## Best Practices

- Use `<ol>` when sequence matters
- Use CSS `::marker` for colored numbers
- Place nested lists inside `<li>` only
- Keep nesting under 3 levels
- Use type/start for semantic meaning
- Use `reversed` for countdowns
- Always close `<li>` tags (optional but recommended)
- Use CSS counters for complex numbering
