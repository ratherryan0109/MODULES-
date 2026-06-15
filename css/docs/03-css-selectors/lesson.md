# Module 03: CSS Selectors

## Introduction

CSS selectors are patterns used to select and target HTML elements for styling. Think of selectors as a query language — you write a pattern, and CSS finds all matching elements in the HTML document. Without selectors, you couldn't apply styles to specific elements. Selectors are the "who" in the CSS rule (the selector { property: value } pattern).

There are many types of selectors, from simple element names to complex combinators and pseudo-classes. Mastering selectors is essential for writing efficient, maintainable CSS. The right selector can reduce the amount of HTML you need to write and make your stylesheets more powerful.

## Learning Objectives

- Use basic element, class, and ID selectors
- Understand the difference between class and ID selectors
- Combine selectors using combinators (descendant, child, adjacent sibling, general sibling)
- Use attribute selectors for precise targeting
- Apply pseudo-classes for dynamic states (:hover, :focus, :nth-child)
- Use pseudo-elements for content generation (::before, ::after)
- Understand specificity and how different selectors affect it
- Group selectors efficiently
- Write efficient, performant selectors
- Use the universal selector appropriately

## Theory

### Basic Selectors

#### Universal Selector (`*`)
Selects all elements on the page. Useful for resets but should be used sparingly due to performance implications.

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

#### Type (Element) Selector
Selects all elements of a given type.

```css
h1 { color: navy; }
p { line-height: 1.8; }
div { margin-bottom: 20px; }
```

#### Class Selector (`.`)
Selects all elements with a specific class attribute. Classes are reusable across multiple elements.

```css
.card { border: 1px solid #ddd; }
.highlight { background: yellow; }
.btn-primary { background: blue; color: white; }
```

Elements can have multiple classes:
```html
<div class="card highlight">Multiple classes</div>
```

#### ID Selector (`#`)
Selects a single element with a specific id attribute. IDs must be unique within a page.

```css
#header { background: #333; color: white; }
#main-content { max-width: 1200px; margin: 0 auto; }
```

### Combinators

Combinators describe relationships between selectors:

| Combinator | Symbol | Description | Example |
|-----------|--------|-------------|---------|
| Descendant | ` ` (space) | Selects descendants (any level) | `div p` selects all p inside div |
| Child | `>` | Selects direct children only | `div > p` selects p that are direct children of div |
| Adjacent sibling | `+` | Selects the immediately following sibling | `h2 + p` selects p immediately after h2 |
| General sibling | `~` | Selects all following siblings | `h2 ~ p` selects all p after h2 |

```css
/* Descendant: any p inside any div */
div p { color: blue; }

/* Child: direct children only */
ul > li { list-style: none; }

/* Adjacent sibling: p immediately after h2 */
h2 + p { font-weight: bold; }

/* General sibling: all p after h2 */
h2 ~ p { color: gray; }
```

### Attribute Selectors

Select elements based on attributes and their values:

| Selector | Matches | Example |
|----------|---------|---------|
| `[attr]` | Has attribute | `[disabled]` |
| `[attr="value"]` | Exact value | `[type="text"]` |
| `[attr^="value"]` | Starts with | `[href^="https"]` |
| `[attr$="value"]` | Ends with | `[src$=".jpg"]` |
| `[attr*="value"]` | Contains | `[class*="btn"]` |
| `[attr~="value"]` | Word in list | `[rel~="nofollow"]` |
| `[attr|="value"]` | Starts with followed by hyphen | `[lang|="en"]` |

```css
/* All elements with a "disabled" attribute */
[disabled] { opacity: 0.5; }

/* All text inputs */
input[type="text"] { border: 1px solid #ccc; }

/* External links (starting with https) */
a[href^="https"] { color: green; }

/* Image links */
a[href$=".jpg"]::after { content: " (image)"; }
```

### Pseudo-Classes

Pseudo-classes target elements based on their state or position. They start with a single colon `:`.

#### Dynamic Pseudo-Classes
```css
/* Link states */
a:link { color: blue; }      /* Unvisited link */
a:visited { color: purple; }  /* Visited link */
a:hover { color: red; }       /* Mouse over */
a:active { color: orange; }   /* While clicking */
a:focus { outline: 2px solid blue; }  /* Focused */

/* Form states */
input:focus { border-color: blue; }
input:disabled { background: #eee; }
input:checked + label { font-weight: bold; }
```

#### Structural Pseudo-Classes
```css
/* Position-based */
li:first-child { font-weight: bold; }
li:last-child { border-bottom: none; }
li:nth-child(odd) { background: #f5f5f5; }
li:nth-child(3n) { color: green; }  /* Every 3rd */

/* Type-based */
p:first-of-type { margin-top: 0; }
p:last-of-type { margin-bottom: 0; }

/* Negation */
input:not([type="submit"]) { border: 1px solid #ddd; }
```

### Pseudo-Elements

Pseudo-elements target parts of elements or generate content. They use double colons `::` (CSS3) or single colon `:` (CSS2, for backward compatibility).

```css
/* First line and first letter */
p::first-line { font-weight: bold; }
p::first-letter { font-size: 2em; float: left; }

/* Generated content */
.element::before { content: "→ "; }
.element::after { content: " ←"; }

/* Selection highlight */
::selection { background: yellow; color: black; }

/* Placeholder text */
input::placeholder { color: #999; }
```

### Specificity of Selectors

Different selectors have different specificity weights:

| Selector Type | Specificity (a-b-c-d) | Example |
|---------------|----------------------|---------|
| Inline style | 1-0-0-0 | `style="color: red"` |
| ID | 0-1-0-0 | `#header` |
| Class, attribute, pseudo-class | 0-0-1-0 | `.nav`, `[type]`, `:hover` |
| Element, pseudo-element | 0-0-0-1 | `div`, `p`, `::before` |
| Universal | 0-0-0-0 | `*` |

### Performance Considerations

Not all selectors are equally performant:

- **Fastest**: ID selectors (`#id`), class selectors (`.class`)
- **Fast**: Element selectors (`div`, `p`)
- **Moderate**: Attribute selectors (`[type="text"]`), adjacent siblings (`h2 + p`)
- **Slowest**: Universal selector (`*`), descendant selectors with many levels (`div ul li a`)
- Pseudo-classes like `:nth-child` are relatively fast in modern browsers

## Syntax

```css
/* Basic selectors */
* { }
element { }
.class { }
#id { }

/* Combinators */
parent child { }
parent > child { }
element + sibling { }
element ~ siblings { }

/* Attribute selectors */
[attr] { }
[attr="value"] { }
[attr^="value"] { }
[attr$="value"] { }
[attr*="value"] { }

/* Pseudo-classes */
:link, :visited, :hover, :active, :focus { }
:first-child, :last-child, :nth-child(n) { }
:not(selector) { }

/* Pseudo-elements */
::before { }
::after { }
::first-line { }
::first-letter { }
::selection { }

/* Grouping */
selector1, selector2, selector3 { }
```

## Examples

### Example 1: Navigation with Selectors
```css
/* Navigation styling using various selectors */
nav { background: #333; }
nav ul { list-style: none; padding: 0; }
nav > ul > li { display: inline; }
nav a { color: white; text-decoration: none; padding: 10px; }
nav a:hover { background: #555; }
nav a[aria-current="page"] { font-weight: bold; border-bottom: 2px solid white; }
```

### Example 2: Zebra-Striped Table
```css
table { width: 100%; border-collapse: collapse; }
tr:nth-child(even) { background: #f2f2f2; }
tr:hover { background: #e8f4f8; }
td:first-child { font-weight: bold; }
td:last-child { text-align: right; }
```

### Example 3: Form Styling
```css
input:not([type="submit"]):not([type="checkbox"]) {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
}
input:focus { border-color: #4299e1; outline: none; box-shadow: 0 0 0 3px rgba(66,153,225,0.2); }
input:invalid { border-color: #e53e3e; }
input:valid { border-color: #38a169; }
```

## Visual Explanation

### Selector Relationship Diagram
```
div.container > p.text + span.icon ~ a.link
│     │          │  │       │      │    │
│     │          │  │       │      │    └── ~ (general sibling)
│     │          │  │       │      └── + (adjacent sibling)
│     │          │  │       └── > (child combinator)
│     │          │  └── (descendant — space)
│     │          └── p element
│     └── .class selector
└── element selector
```

### Specificity Pyramid
```
            ┌───────────┐
            │  Inline   │  1-0-0-0
            ├───────────┤
            │    ID     │  0-1-0-0
            ├───────────┤
            │   Class   │  0-0-1-0
            ├───────────┤
            │  Element  │  0-0-0-1
            ├───────────┤
            │ Universal │  0-0-0-0
            └───────────┘
```

## Common Mistakes

1. **Confusing class and ID**: IDs are unique; classes are reusable. Using an ID when a class would suffice limits flexibility.
2. **Over-specific selectors**: Writing `div.container > ul > li > a` when `.nav-link` would work — makes CSS fragile to HTML changes.
3. **Forgetting `:hover` states**: Interactive elements need visual feedback.
4. **Overusing `!important`**: Usually results from overly specific selectors earlier in the stylesheet.
5. **Not understanding specificity**: Wondering why a rule doesn't apply when a more specific selector overrides it.
6. **Using `:nth-child` when `:nth-of-type` is needed**: `:nth-child` counts siblings regardless of type.
7. **Missing the element for pseudo-elements**: `::before` and `::after` require `content: ""` to render.
8. **Space between selector and `:before`**: `element :before` (with space) selects a child with `:before`, not `element::before`.

## Best Practices

- Use classes for reusable styles, IDs for unique page elements or JavaScript hooks
- Keep selectors as short as possible — avoid deep descendant selectors
- Use `>` child combinator when you only want direct children
- Group related selectors with commas
- Use `:is()` and `:where()` for more readable complex selectors (modern CSS)
- Avoid styling based on HTML structure that might change
- Name classes semantically based on purpose, not appearance (`.warning` not `.red-text`)
- Follow a naming convention like BEM (Block Element Modifier)
- Use attribute selectors for form elements and links

## Accessibility Considerations

- `:focus` styles are essential for keyboard navigation — never remove outlines without providing alternatives
- `:hover` should never be the only way to access information (mobile devices don't have hover)
- `:visited` privacy restrictions limit styling options (color only)
- Use `:focus-visible` for keyboard-only focus indicators
- Pseudo-element content (`::before` text) may not be read by all screen readers
- Use `aria-*` attributes with attribute selectors for accessible styling

## Performance Considerations

- Universal selector `*` forces the browser to check every element — avoid in large documents
- Complex attribute selectors are slower than classes
- Deep descendant selectors like `div ul li a` are inefficient — use classes instead
- Modern browsers optimize selectors by reading right-to-left — the rightmost part matters most
- Overly specific selectors increase CSS file size unnecessarily
- Use class selectors for the best balance of specificity and performance

## Browser Compatibility

- All basic selectors are supported in every browser
- CSS3 pseudo-classes (`:nth-child`, `:not`, `:last-child`) are supported in IE9+
- CSS3 pseudo-elements (`::before`) with double colons are supported in IE9+
- Modern pseudo-classes (`:is`, `:where`, `:has`) are supported in all modern browsers
- Use feature queries (`@supports`) for progressive enhancement with new selectors

## Summary Notes

- Universal `*` selects all; type selects elements; class `.` groups; ID `#` targets unique
- Combinators: space (descendant), `>` (child), `+` (adjacent sibling), `~` (general sibling)
- Attribute selectors target elements by HTML attributes and their values
- Pseudo-classes (`:`) style element states (hover, focus, nth-child)
- Pseudo-elements (`::`) style element parts or generate content (before, after)
- Specificity: inline > ID > class > element > universal
- Keep selectors short, specific, and performant
- Use classes by default, IDs for specific cases
- Always include focus styles for accessibility
