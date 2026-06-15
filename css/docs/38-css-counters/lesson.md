# CSS Counters

## Table of Contents
1. [Introduction](#introduction)
2. [Learning Objectives](#learning-objectives)
3. [Theory](#theory)
4. [Syntax and Code Examples](#syntax-and-code-examples)
5. [Visual Explanation](#visual-explanation)
6. [Common Mistakes](#common-mistakes)
7. [Best Practices](#best-practices)
8. [Accessibility Considerations](#accessibility-considerations)
9. [Performance Considerations](#performance-considerations)
10. [Browser Compatibility](#browser-compatibility)
11. [Summary Notes](#summary-notes)

## Introduction
CSS counters are a powerful feature of CSS that allows you to automatically number elements using purely CSS — no JavaScript required. They work by maintaining named counter variables that can be created, incremented, reset, and displayed via the `content` property on `::before` and `::after` pseudo-elements. CSS counters are ideal for automatically numbering headings in documentation, creating custom ordered lists, numbering figures and tables, building outlines and table-of-contents structures, and generating multi-level nested numbering schemes like legal document outlines (1, 1.1, 1.1.1). Understanding CSS counters eliminates the need for manual numbering in HTML content and ensures that numbering automatically adjusts when content is added, removed, or reordered.

## Learning Objectives
1. Create and reset counters using `counter-reset` with custom starting values
2. Increment counters with `counter-increment` using different step values
3. Display counter values using `counter(name)` and `counters(name, separator)` functions
4. Build nested numbering systems (e.g., 1.1, 1.2) using scoped counters
5. Understand counter scope and how nesting creates new counter instances
6. Use counters for automatic section, figure, table, and listing numbering
7. Customize counter display with `list-style-type` styles (decimal, roman, alpha)
8. Debug counter issues using browser DevTools
9. Combine counters with `@counter-style` for custom numbering patterns
10. Apply counters in documentation sites, academic papers, and e-books

## Theory

### How CSS Counters Work
CSS counters are essentially variables maintained by the browser during layout. They follow three fundamental operations:

1. **`counter-reset`** — Creates a new counter (or resets an existing one) to a specified value. The initial value is `0` if not specified. The counter is scoped to the element and its children.
2. **`counter-increment`** — Increases (or decreases) a counter's value by a specified amount. Default increment is `1`. Negative values are allowed for decrementing.
3. **`counter()` / `counters()`** — Retrieves the current value of a counter for display. These functions can only be used inside the `content` property of `::before` or `::after` pseudo-elements.

### The Counter Scope Model
Each element creates a new scope for counters. When you use `counter-reset` on an element, it creates a fresh counter instance that is visible to that element and all its descendants. Descendants can increment or display the counter, but each sibling subtree gets its own independent counter instance.

```
body { counter-reset: section; }
  ├── h2 (increments section → 1)
  │   ├── h3 (section=1, subsection=1)
  │   └── h3 (section=1, subsection=2)
  ├── h2 (increments section → 2)
  │   ├── h3 (section=2, subsection=1)
  │   └── h3 (section=2, subsection=2)
  └── h2 (increments section → 3)
```

Each `h2` creates a new subsection scope — the subsection counter resets at each `h2`.

### Counter Display Formats
The `counter()` function accepts an optional second parameter for the display style — using standard CSS `list-style-type` values:

```css
/* Available counter styles */
content: counter(section, decimal);       /* 1, 2, 3 */
content: counter(section, lower-roman);   /* i, ii, iii */
content: counter(section, upper-roman);   /* I, II, III */
content: counter(section, lower-alpha);   /* a, b, c */
content: counter(section, upper-alpha);   /* A, B, C */
content: counter(section, lower-greek);   /* α, β, γ */
content: counter(section, georgian);      /* ა, ბ, გ */
content: counter(section, decimal-leading-zero); /* 01, 02, 03 */
```

### The `counters()` Function for Nesting
The `counters(name, separator)` function is specifically designed for nested counters. It joins all counter instances from the current element up through its ancestors, using the separator between levels:

```css
content: counters(section, ".") " ";
/* Produces: 1, 1.1, 1.1.1, 1.2, 2, 2.1 */
```

This automatically walks up the DOM tree, collecting the counter value at each level.

### Counter vs `list-style-type`
CSS counters are more flexible than the built-in `list-style-type` on `<ol>` elements:

| Feature | `list-style-type` | CSS Counters |
|---|---|---|
| Scope | Single list only | Any element, nested or not |
| Formatting | Limited to predefined styles | Any string formatting with `content` |
| Multi-level | Manual with `type` attribute | Automatic via `counters()` |
| Positioning | Before list item only | Anywhere via `::before`/`::after` |
| Custom text | Not possible | Full customization |
| Skipping numbers | Not possible | Control via `counter-increment` |

## Syntax and Code Examples

### Basic Section Numbering
```css
/* Create the counter on the root element */
body {
  counter-reset: section;
}

/* Increment and display on each h2 */
h2::before {
  counter-increment: section;
  content: "Section " counter(section) ": ";
  color: #3b82f6;
  font-weight: bold;
}
```

### Nested Subsection Numbering
```css
/* Reset subsection counter at each section */
h2 {
  counter-reset: subsection;
}

h2::before {
  counter-increment: section;
  content: counter(section) ". ";
}

/* h3 numbering: 1.1, 1.2, 2.1, etc. */
h3::before {
  counter-increment: subsection;
  content: counter(section) "." counter(subsection) " ";
  margin-left: 20px;
}

/* Deeper nesting: 1.1.1, 1.1.2 */
h3 {
  counter-reset: subsubsection;
}

h4::before {
  counter-increment: subsubsection;
  content: counter(section) "." counter(subsection) "." counter(subsubsection) " ";
  margin-left: 40px;
}
```

### Using `counters()` for Automatic Nesting
```css
/* Automatically produces: 1, 1.1, 1.1.1, etc. */
h2 { counter-reset: nested; }
h3 { counter-reset: nested; }
h4 { counter-reset: nested; }

h2::before,
h3::before,
h4::before {
  counter-increment: nested;
  content: counters(nested, ".") " ";
}
```

### Custom Ordered Lists with Counters
```css
.custom-list {
  counter-reset: custom-item;
  list-style: none;
  padding: 0;
}

.custom-list li {
  counter-increment: custom-item;
  padding: 8px 0 8px 36px;
  position: relative;
}

.custom-list li::before {
  content: counter(custom-item, decimal-leading-zero);
  position: absolute;
  left: 0;
  top: 8px;
  width: 28px;
  height: 28px;
  background-color: #3b82f6;
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: bold;
}
```

### Figure and Table Numbering
```css
body {
  counter-reset: figure-count table-count;
}

figure figcaption::before {
  counter-increment: figure-count;
  content: "Figure " counter(figure-count) ": ";
  font-weight: bold;
}

table caption::before {
  counter-increment: table-count;
  content: "Table " counter(table-count) ": ";
  font-weight: bold;
}
```

### Reverse Counting
```css
.countdown {
  counter-reset: item 11;
}

.countdown li {
  counter-increment: item -1;
}

.countdown li::before {
  content: counter(item) "... ";
}
```
This starts at 10 and counts down: "10... 9... 8..."

### Skipping Numbers (Custom Increment)
```css
.stepped-list {
  counter-reset: step;
}

.stepped-list li {
  counter-increment: step 2;
}

.stepped-list li::before {
  content: counter(step) ". ";
}
```
This produces: 2. Item, 4. Item, 6. Item (every other number).

### Combining with Roman Numerals
```css
h2::before {
  counter-increment: chapter;
  content: "Chapter " counter(chapter, upper-roman) ": ";
}
/* Output: Chapter I:, Chapter II:, Chapter III: */
```

## Visual Explanation

```
Counter Lifecycle in the DOM:
┌─────────────────────────────────────────────────────┐
│ body { counter-reset: section; }                     │
│                                                       │
│  ┌─ h2 (counter-increment: section → 1) ────────────┐│
│  │  h2::before { content: "Section 1: " }           ││
│  │                                                    ││
│  │  ┌─ h3 (counter-increment: subsection → 1) ─────┐││
│  │  │  h3::before { content: "1.1 " }              │││
│  │  └───────────────────────────────────────────────┘││
│  │                                                    ││
│  │  ┌─ h3 (counter-increment: subsection → 2) ─────┐││
│  │  │  h3::before { content: "1.2 " }              │││
│  │  └───────────────────────────────────────────────┘││
│  └────────────────────────────────────────────────────┘│
│                                                       │
│  ┌─ h2 (counter-increment: section → 2) ────────────┐│
│  │  h2::before { content: "Section 2: " }           ││
│  │  └── (subsection resets to 0 at each h2) ───────┘│
│  └────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────┘

Counter values walk up the DOM tree:
┌─ Article ─────────────────────────────────────┐
│  Header level:       Counter value:           │
│  h2 (section=1)      ── section: 1            │
│    h3 (subsection=1) ── section.subsec: 1.1   │
│      h4 (subsub=1)   ── all three: 1.1.1     │
│    h3 (subsection=2) ── section.subsec: 1.2   │
│  h2 (section=2)      ── section: 2            │
└───────────────────────────────────────────────┘
```

## Common Mistakes
1. **Forgetting `counter-reset` on the parent element**: Without a reset, the counter never starts and `counter()` returns 0
2. **Applying `counter-increment` on the wrong element**: The increment must happen on the element whose `::before`/`::after` displays it — or an earlier sibling that sets the value before display
3. **Using `counter()` on non-generated content**: `counter()` and `counters()` only work inside the `content` property of `::before` or `::after`
4. **Not accounting for `display: none`**: Elements with `display: none` are not rendered — their counters are not incremented. `visibility: hidden` elements DO increment counters
5. **Confusing counter scope nesting**: Each nested element with `counter-reset` creates a new instance — the parent counter is accessible via `counters()` but `counter()` returns only the current scope
6. **Using `counter-increment` instead of `counter-reset` for setup**: `counter-increment` changes an existing counter; it doesn't create one. Always establish the counter with `counter-reset` first
7. **Overlapping counter names**: If two unrelated counters share the same name, they interfere with each other
8. **Forgetting that `::before` and `::after` increment order matters**: Counter increment in `::before` happens before the element content renders

## Best Practices
1. **Always initialize counters with `counter-reset`** on the parent element that scopes the numbering
2. **Use unique counter names** for different numbering purposes (e.g., `section`, `figure`, `table`, `listing`)
3. **Prefer `counters()` for deeply nested structures** — it automatically walks up the ancestor chain
4. **Set `counter-reset` on the container** (like `<body>` or `<article>`) rather than individual heading elements
5. **Use `counter-increment` on the same element as the `::before`** that displays it for predictable behavior
6. **Combine with `list-style: none`** when overriding default list numbering
7. **Use `content: counters(counter, ".") ". "`** — the trailing period and space after `counters()` adds proper punctuation
8. **Test with content additions/removals** — counters automatically renumber; verify the sequence is correct
9. **Use counter styles for localization** — `lower-greek`, `cjk-decimal`, `hebrew` for international content
10. **Document your counter scheme** in comments so other developers understand the numbering structure

## Accessibility Considerations
- Counter content in `::before`/`::after` pseudo-elements may not be announced by all screen readers
- For critical numbering (legal documents, academic citations), include numbers in the HTML as a fallback
- Screen readers typically read the element's content, not pseudo-element generated content
- Use `aria-label` or visually hidden text for numbering that must be announced
- Pseudo-element content with `content: counter()` is included in the accessibility tree in modern browsers but may be inconsistent in older ones
- The `content` property should not be the only source of information for important numbering
- For ordered lists, prefer `<ol>` with `list-style-type` over CSS counters when possible for native screen reader support
- Test numbering with NVDA, VoiceOver, and JAWS to verify announcement behavior

## Performance Considerations
- CSS counters are calculated during the layout phase and have negligible performance impact
- Counters do not trigger layout recalculations unless counter values change (which only happens with DOM mutations)
- No additional DOM nodes or JavaScript overhead — counters are purely CSS
- Complex nested counters with many levels (10+) may have minor performance impact on page render
- Browser DevTools > Computed tab shows counter values for debugging
- Counters work with CSS containment (`contain: layout`) for performance isolation
- Counter recalculation on DOM mutations is optimized — only affected subtrees recalculate

## Browser Compatibility

| Feature | Chrome | Edge | Firefox | Safari | Opera | IE |
|---|---|---|---|---|---|---|
| `counter-reset` | 2+ | 12+ | 1+ | 3+ | 9+ | 8+ |
| `counter-increment` | 2+ | 12+ | 1+ | 3+ | 9+ | 8+ |
| `counter(name)` | 2+ | 12+ | 1+ | 3+ | 9+ | 8+ |
| `counters(name, sep)` | 2+ | 12+ | 1+ | 3+ | 9+ | 8+ |
| Counter styles (roman, alpha) | 2+ | 12+ | 1+ | 3+ | 9+ | 8+ |
| `decimal-leading-zero` | 2+ | 12+ | 1+ | 3+ | 9+ | 8+ |
| `@counter-style` | 91+ | 91+ | 33+ | 17.2+ | 77+ | No |
| Negative increment values | 2+ | 12+ | 1+ | 3+ | 9+ | 8+ |
| Counters with `display: none` elements | Skipped | Skipped | Skipped | Skipped | Skipped | Skipped |
| `::before`/`::after` counter support | 2+ | 12+ | 1.5+ | 4+ | 9+ | 9+ |

## Summary Notes
- CSS counters are browser-maintained variables for automatic numbering — no JavaScript needed
- Three core properties: `counter-reset` (create/reset), `counter-increment` (advance), `counter()`/`counters()` (display)
- `counter(name)` returns the current counter value; `counter(name, style)` formats it
- `counters(name, separator)` joins all ancestor counter levels into a nested string (e.g., "1.2.3")
- Counter scope is hierarchical — each `counter-reset` creates a new instance for that subtree
- Negative increment values allow countdowns and skipping patterns
- Counters only work inside `content` property of `::before` or `::after` pseudo-elements
- `display: none` elements skip counter increment; `visibility: hidden` elements do NOT skip it
- Browser support is excellent — CSS counters have been supported since IE 8+
- Use `@counter-style` for fully custom numbering systems in modern browsers
- Ideal for: documentation TOCs, academic numbering, figure/table numbering, custom lists
