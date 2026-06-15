# CSS Combinators

## Introduction
CSS combinators define relationships between selectors, allowing you to target elements based on their position in the DOM tree. Understanding combinators is essential for writing precise, efficient CSS without adding excessive classes or IDs.

## Learning Objectives
1. Understand the four CSS combinators and their syntax
2. Target elements with descendant combinator (space)
3. Select direct children with child combinator (>)
4. Target adjacent siblings with adjacent sibling combinator (+)
5. Select general siblings with general sibling combinator (~)
6. Combine multiple combinators for complex selections
7. Understand specificity with combinator-based selectors
8. Use combinators to write cleaner, more maintainable CSS
9. Debug selector issues with browser DevTools
10. Apply combinators in practical layout scenarios

## Theory

### What are Combinators?
Combinators are characters that specify the relationship between two or more selectors. They tell the browser how elements relate to each other in the DOM. Combinators themselves do not select elements — they connect selectors to define a relationship-based selection.

### The Four Combinators

| Combinator | Symbol | Relationship | Example | Matches |
|------------|--------|--------------|---------|---------|
| Descendant | ` ` (space) | Any descendant | `div p` | All `p` inside `div` at any depth |
| Child | `>` | Direct child | `div > p` | `p` that is a direct child of `div` |
| Adjacent Sibling | `+` | Immediate sibling | `h2 + p` | First `p` immediately after `h2` |
| General Sibling | `~` | Any following sibling | `h2 ~ p` | All `p` after `h2` (same parent) |

### How Browsers Process Selectors
Browsers parse CSS selectors from right to left. When you write `article p`, the browser first finds all `<p>` elements, then checks if they have an `<article>` ancestor. This right-to-left parsing means that the rightmost part of the selector (the "key selector") determines which elements are even considered for styling. Using a highly specific key selector (like a class or ID) on the right side of a combinator improves performance because the browser can quickly find matching elements.

### The Power of Combinators
Combinators enable you to style elements based on their context without adding extra classes to the HTML. For example, you can make all paragraphs after an `h2` stand out (`h2 + p`) or style only direct children of a navigation list (`nav > ul > li`). This keeps your HTML clean and semantic while giving you precise styling control.

## Syntax

```css
/* Descendant Combinator */
ancestor descendant { }

/* Child Combinator */
parent > child { }

/* Adjacent Sibling Combinator */
element + sibling { }

/* General Sibling Combinator */
element ~ sibling { }
```

### Combining Multiple Combinators

```css
/* Select a > span that is inside li that is direct child of ul inside nav */
nav > ul > li > a > span { }

/* Select h2 followed by p inside article */
article h2 + p { }

/* More readable with classes */
.card:has(img) > .card-body > p:first-of-type { }
```

## Examples

### Descendant Combinator
```css
/* Select all paragraphs inside any article */
article p {
  color: blue;
}
```

### Child Combinator
```css
/* Select only direct li children of ul */
ul > li {
  list-style: none;
}
```

### Adjacent Sibling
```css
/* Select the paragraph immediately after h2 */
h2 + p {
  font-weight: bold;
}
```

### General Sibling
```css
/* Select all paragraphs after h2 (same parent) */
h2 ~ p {
  margin-left: 20px;
}
```

### Practical: Card Component
```css
.card {
  border: 1px solid #ddd;
  padding: 1rem;
}
.card > .card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.card > .card-body > .card-title + .card-text {
  margin-top: 0.5rem;
}
```

### Practical: Styled Lists in Article
```css
article > ul {
  padding-left: 2rem;
}
article > ul > li {
  margin-bottom: 0.5em;
}
article > ul > li > ul > li {
  list-style: circle;
}
```

## Visual Explanation

```
DOM Tree Structure:
┌─────────────────────────────┐
│         <body>              │
│  ┌───────────────────────┐  │
│  │      <article>        │  │
│  │  ┌────┐ ┌────┐ ┌───┐ │  │
│  │  │ h2 │ │ p  │ │ p │ │  │  ← p is descendant of article
│  │  └────┘ └────┘ └───┘ │  │     h2 + p = first p after h2
│  │  ┌────┐               │  │     h2 ~ p = all p after h2
│  │  │ ul │               │  │
│  │  │ ┌─┐ ┌─┐ ┌─┐      │  │     ul > li = direct children only
│  │  │ │li│ │li│ │li│    │  │
│  │  │ └─┘ └─┘ └─┘      │  │
│  │  └────┘              │  │
│  └───────────────────────┘  │
└─────────────────────────────┘

Selector Matching Visualization:
div .class  →  Any .class inside div (any depth)
div > .class →  .class that is direct child of div
div + .class →  .class immediately after div (same parent)
div ~ .class →  All .class after div (same parent)
```

## Common Mistakes

1. **Space vs No space**: `div.class` (element with class) vs `div .class` (descendant) — the space completely changes the selector meaning
2. **Over-nesting**: Too many levels (e.g., `div > ul > li > a > span`) creates fragile selectors that break with HTML structure changes
3. **Child vs Descendant**: Using space (descendant) when `>` is more appropriate and performant
4. **Adjacent vs General**: Using `+` when `~` should be used for all siblings after an element
5. **Performance concerns**: Deep descendant selectors are slower because the browser checks ancestors at each level
6. **Nesting with specificity**: Over-nesting can create unnecessary specificity battles that require `!important` to override

## Best Practices

1. Keep selector depth to 3 levels maximum
2. Use child combinator `>` when you only want direct children
3. Use adjacent sibling `+` for spacing between elements (e.g., `h2 + p` for the first paragraph after a heading)
4. Use general sibling `~` for styling all following siblings
5. Combine with classes for clarity: `.card > .card-title`
6. Avoid relying on HTML structure that may change
7. Use combinators to reduce class bloat in HTML
8. Prefer class-based selectors for maintainability — use combinators for context-specific styling
9. In large projects, combine the BEM naming convention with combinators for optimal specificity management

## Specificity with Combinators

Combinators themselves don't add specificity — the selectors they connect do.

```css
/* Both have same specificity */
.parent .child { }        /* 2 classes = 0,2,0 */
.parent > .child { }      /* 2 classes = 0,2,0 */
h2 + p { }                /* 2 elements = 0,0,2 */
nav > ul > li { }         /* 3 elements = 0,0,3 */
```

This means you can freely swap combinators without worrying about specificity changes. The specificity is determined entirely by the types of selectors (IDs, classes, elements, attributes, pseudo-classes) that the combinators connect.

### The (:has) Pseudo-Class and Combinators
The CSS `:has()` pseudo-class (now supported in all modern browsers) adds new capabilities to combinators:

```css
/* Style a card that contains an image */
.card:has(img) {
  border: 2px solid blue;
}

/* Style a heading only when followed by a paragraph */
h2:has(+ p) {
  margin-bottom: 0;
}
```

## Accessibility

- Combinators don't directly affect accessibility
- Clean structure helps screen readers navigate
- Avoid overly complex selectors that might cause styling issues
- Use semantic HTML structure rather than relying on complex combinators for styling
- Combinators that target structural relationships should respect the logical document flow
- When using combinators with `:focus-within`, ensure focus indicators remain visible

## Performance

- Browsers process selectors right-to-left
- Specific selectors (class, ID) are faster than general (element)
- Deep descendant selectors can be slower due to ancestor traversal
- Keep selectors simple for better performance
- The child combinator `>` is faster than the descendant combinator (space) because the browser only checks one level up
- For large DOMs, prefer class-based selectors over deep combinator chains
- Use the key selector (rightmost part) as specific as possible

### Selector Performance (Fastest to Slowest)

1. ID selector (`#id`)
2. Class selector (`.class`)
3. Tag selector (`div`)
4. Adjacent sibling (`h2 + p`)
5. Child combinator (`ul > li`)
6. Descendant combinator (`article p`) — slowest for deep DOMs

## Browser Compatibility

All CSS combinators are supported in all browsers since CSS1 (descendant) and CSS2 (child, adjacent sibling, general sibling).

| Combinator | Chrome | Firefox | Safari | Edge | IE |
|------------|--------|---------|--------|------|----|
| Descendant (space) | ✓ | ✓ | ✓ | ✓ | ✓ |
| Child (>) | ✓ | ✓ | ✓ | ✓ | ✓ |
| Adjacent sibling (+) | ✓ | ✓ | ✓ | ✓ | ✓ |
| General sibling (~) | ✓ | ✓ | ✓ | ✓ | ✓ 7+ |
| `:has()` | ✓ 105+ | ✓ 121+ | ✓ 15.4+ | ✓ 105+ | ✗ |

## Summary Notes

- **Descendant (space)**: Selects any descendant at any level
- **Child (>)**: Selects only direct children
- **Adjacent sibling (+)**: Selects immediately following sibling
- **General sibling (~)**: Selects all following siblings
- Combinators don't add specificity — only the selectors they connect do
- Browsers read selectors right-to-left
- Keep selectors shallow (max 3 levels)
- Use combinators to write cleaner HTML with fewer classes
- The child combinator `>` is more performant than the descendant combinator
- Use `+` for spacing between specific elements (e.g., `h2 + p`)
- The `:has()` pseudo-class extends combinator-like selection to parent elements
- Prefer class-based selectors over deep combinator chains for maintainability
- Combinators are fully supported in all modern browsers
