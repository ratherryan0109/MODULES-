# Module 12: HTML CSS Basics

## Introduction

HTML provides the structure of a web page, but CSS (Cascading Style Sheets) controls how that structure looks. CSS is the language used to style HTML elements — controlling colors, fonts, spacing, layout, and responsive behavior. Without CSS, every web page would look like a plain text document rendered in the browser's default styles.

CSS works by selecting HTML elements and applying visual rules to them. It can be written in three ways: inline (directly on an element), internal (inside a `<style>` tag in the HTML head), or external (in a separate `.css` file). The external method is the most maintainable and professional approach.

---

## Learning Objectives

By the end of this module, you will be able to:
- Explain what CSS is and how it interacts with HTML
- Apply CSS using inline, internal, and external stylesheets
- Use CSS selectors (element, class, ID, universal, grouping)
- Write CSS rules with properties and values
- Understand the CSS cascade, specificity, and inheritance
- Use common CSS properties for colors, fonts, spacing, and layout
- Link an external CSS file to an HTML document correctly
- Organize CSS code for readability and maintainability

---

## Syntax

### CSS Rule Structure

A CSS rule consists of a **selector** and a **declaration block**:

```css
selector {
  property: value;
  property: value;
}
```

- **Selector**: Targets the HTML element(s) to style
- **Declaration block**: Enclosed in curly braces `{}`, contains one or more declarations
- **Declaration**: A property-value pair separated by a colon and ending with a semicolon

### Example

```css
h1 {
  color: blue;
  font-size: 32px;
  text-align: center;
}
```

This rule selects all `<h1>` elements and applies three styles: blue text color, 32-pixel font size, and center alignment.

---

## Three Ways to Apply CSS

### 1. Inline CSS

Applied directly to an HTML element using the `style` attribute.

```html
<p style="color: red; font-weight: bold;">This is a red bold paragraph.</p>
```

**Pros**: Quick for testing, highest specificity
**Cons**: Mixes content with presentation, hard to maintain, not reusable

### 2. Internal CSS

Written inside a `<style>` element in the HTML `<head>`.

```html
<head>
  <style>
    p {
      color: green;
      font-size: 18px;
    }
  </style>
</head>
```

**Pros**: Keeps styles in one place for a single page, useful for small projects
**Cons**: Only applies to one page, not reusable across pages

### 3. External CSS

Written in a separate `.css` file and linked to the HTML via the `<link>` element.

**styles.css:**
```css
p {
  color: purple;
  line-height: 1.6;
}
```

**index.html:**
```html
<head>
  <link rel="stylesheet" href="styles.css">
</head>
```

**Pros**: Reusable across multiple pages, separates concerns, cacheable by browsers
**Cons**: Requires an extra HTTP request (mitigated by caching)

---

## CSS Selectors

Selectors determine which elements a rule applies to.

### Universal Selector `*`

Selects all elements on the page.

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

### Element Selector

Selects all elements of a given type.

```css
h2 {
  font-family: Arial, sans-serif;
}
```

### Class Selector `.`

Selects all elements with a specific class attribute.

```css
.highlight {
  background-color: yellow;
}
```

```html
<p class="highlight">This paragraph has a yellow background.</p>
```

### ID Selector `#`

Selects a single element with a specific ID.

```css
#main-title {
  font-size: 48px;
  color: navy;
}
```

```html
<h1 id="main-title">Welcome</h1>
```

**Important:** IDs must be unique within a page. Use classes for reusable styles.

### Grouping Selector `,`

Applies the same styles to multiple selectors.

```css
h1, h2, h3 {
  margin-bottom: 0.5em;
  color: #333;
}
```

### Descendant Selector (space)

Selects elements that are descendants of a specified ancestor.

```css
article p {
  text-indent: 2em;
}
```

This targets only `<p>` elements that are inside an `<article>`.

---

## Common CSS Properties

### Colors

```css
color: red;                /* Named color */
color: #ff0000;            /* Hex code */
color: rgb(255, 0, 0);     /* RGB */
color: rgba(255, 0, 0, 0.5); /* RGB with alpha transparency */
color: hsl(0, 100%, 50%);  /* HSL */
```

### Backgrounds

```css
background-color: #f0f0f0;
background-image: url('bg.png');
background-repeat: no-repeat;
background-size: cover;
background-position: center;
```

### Typography

```css
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-size: 16px;
font-weight: 700;          /* boldness, 400=normal, 700=bold */
font-style: italic;
line-height: 1.5;          /* unitless number is relative to font-size */
text-align: center;
text-decoration: underline;
text-transform: uppercase;  /* uppercase, lowercase, capitalize */
letter-spacing: 1px;
word-spacing: 2px;
```

### Spacing

```css
margin: 10px;              /* space outside the element */
padding: 20px;             /* space inside the element */
margin-top: 5px;
margin-right: 10px;
margin-bottom: 15px;
margin-left: 10px;
padding: 10px 20px;        /* top/bottom left/right */
padding: 5px 10px 15px 20px; /* top right bottom left */
```

### Borders

```css
border: 2px solid black;
border-width: 2px;
border-style: solid;       /* solid, dashed, dotted, double, none */
border-color: #333;
border-radius: 8px;        /* rounded corners */
border-radius: 50%;        /* makes a circle */
```

### Width and Height

```css
width: 500px;              /* fixed width */
max-width: 1200px;         /* responsive maximum */
height: auto;              /* automatic based on content */
min-height: 100vh;         /* at least full viewport height */
```

### Display

```css
display: block;            /* takes full width, starts new line */
display: inline;           /* takes only needed width, flows inline */
display: inline-block;     /* inline but accepts width/height */
display: none;             /* element removed from flow, invisible */
display: flex;             /* flexbox layout */
display: grid;             /* CSS grid layout */
```

---

## The Cascade, Specificity, and Inheritance

### Cascade

When multiple rules target the same element, the browser determines which rule wins based on three factors: **importance**, **specificity**, and **source order**. Later rules override earlier ones when specificity is equal.

### Specificity

Each selector type has a specificity weight:

| Selector Type | Weight |
|---------------|--------|
| Inline styles | 1,0,0,0 |
| IDs | 0,1,0,0 |
| Classes, attributes, pseudo-classes | 0,0,1,0 |
| Elements, pseudo-elements | 0,0,0,1 |

The selector with the highest total specificity wins.

```css
p { color: black; }                /* 0,0,0,1 */
.text { color: blue; }             /* 0,0,1,0 */
#intro { color: green; }           /* 0,1,0,0 */
<p style="color: red;">...</p>     /* 1,0,0,0 */
```

If two selectors have the same specificity, the one declared last in the CSS file wins.

### Inheritance

Some CSS properties (like `color`, `font-family`, `line-height`) are **inherited** from parent elements to child elements. Others (like `margin`, `padding`, `border`) are not.

```css
body {
  color: #333;
  font-family: Arial, sans-serif;
}
```

All text inside the body will inherit these styles unless overridden.

---

## Best Practices

1. **Use external stylesheets** for all production projects
2. **Use semantic class names** — describe what the element is, not what it looks like (use `.alert`, not `.red-text`)
3. **Keep specificity low** — avoid deep nesting and overuse of IDs for styling
4. **Use shorthand properties** where possible (`margin: 10px 20px` instead of four separate margin properties)
5. **Organize your CSS** — group related rules, use comments for sections
6. **Use a CSS reset or normalize** to ensure cross-browser consistency
7. **Follow a naming convention** like BEM (Block Element Modifier) for larger projects
8. **Avoid `!important`** — it breaks the natural cascade and makes debugging difficult
9. **Use relative units** (rem, em, %, vw, vh) over absolute units (px) for responsive design
10. **Validate your CSS** using the W3C CSS Validator

---

## Common Mistakes

1. **Missing semicolons** — Each declaration must end with a semicolon
2. **Misspelled properties or values** — CSS silently ignores unknown properties
3. **Wrong selector syntax** — Confusing `.class` with `#id`, or forgetting to precede class with `.`
4. **Overusing `!important`** — Makes future maintenance difficult
5. **Not resetting margins/padding** — Browsers have default styles that vary
6. **Specifying colors without fallbacks** — Always provide fallbacks for older browsers
7. **Forgetting to link the CSS file** — The most common beginner mistake
8. **Using inline styles excessively** — Defeats the purpose of CSS
9. **Not testing across browsers** — CSS can render differently
10. **Forgetting the `rel="stylesheet"` attribute** in the `<link>` tag

---

## Visual Explanation

```
+----------------------------------+
|         HTML Document            |
|  +----------------------------+  |
|  |  <head>                    |  |
|  |  <style>  (internal CSS)   |  |
|  |  <link>   (external CSS)   |  |
|  +----------------------------+  |
|  +----------------------------+  |
|  |  <body>                    |  |
|  |  <p style="..."> (inline) |  |
|  |  <div class="box">...</div>|  |
|  |  <h1 id="title">...</h1>  |  |
|  +----------------------------+  |
+----------------------------------+

CSS Specificity Hierarchy:
Inline > ID > Class > Element
(1000)   (100)  (10)    (1)
```

---

## Summary Notes

- CSS = Cascading Style Sheets — controls the visual presentation of HTML
- Three application methods: inline, internal, external
- External CSS is the preferred method for production
- Selectors target elements: element, class (`.`), ID (`#`), universal (`*`), grouping (`,`)
- A CSS rule = selector + declaration block with property-value pairs
- Specificity determines which rule wins when conflicts occur
- Inheritance passes certain styles from parent to children
- Use shorthand properties for cleaner code
- Keep styles organized with consistent naming conventions
- Always validate your CSS and test across browsers
