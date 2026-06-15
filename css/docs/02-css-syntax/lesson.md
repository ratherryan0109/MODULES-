# Module 02: CSS Syntax

## Introduction

CSS syntax is the language of styling — the grammar and structure you use to tell the browser how elements should look. Just as English has rules about sentence structure, CSS has rules about how to write style declarations. Understanding CSS syntax is the foundation for everything else you'll learn in CSS. Every CSS rule follows the same basic pattern: select the element(s) you want to style, then declare what properties to change and what values to assign.

Mastering CSS syntax means understanding selectors, declaration blocks, properties, values, and the punctuation (colons, semicolons, curly braces) that holds it all together. Once you internalize this structure, writing CSS becomes intuitive.

## Learning Objectives

- Write CSS rules with correct syntax including selectors, braces, colons, and semicolons
- Differentiate between selectors, properties, and values
- Use multiple declarations within a single rule
- Group selectors with commas
- Understand the difference between shorthand and individual properties
- Write valid CSS with proper spacing and formatting conventions
- Recognize and fix common syntax errors
- Use vendor prefixes correctly
- Understand the role of whitespace in CSS

## Theory

### Anatomy of a CSS Rule

Every CSS statement follows this pattern:

```
selector {
  property: value;
}
```

Breaking this down:

| Component | Description | Example |
|-----------|-------------|---------|
| **Selector** | Targets HTML element(s) | `h1`, `.class`, `#id` |
| **Opening brace** | Begins declaration block | `{` |
| **Declaration** | Property-value pair | `color: blue;` |
| **Property** | What aspect to style | `color`, `font-size`, `margin` |
| **Colon** | Separates property from value | `:` |
| **Value** | The style setting | `blue`, `16px`, `10px` |
| **Semicolon** | Ends each declaration | `;` |
| **Closing brace** | Ends declaration block | `}` |

### Whitespace and Formatting

CSS ignores most whitespace (spaces, tabs, newlines). This means you can format your code for readability:

```css
/* All of these are valid and equivalent: */
p {color:red;}

p {
  color: red;
}

p {
  color:
    red;
}
```

However, consistent formatting is crucial for maintainability. Industry convention:

```css
selector {
  property: value;
  property: value;
}
```

- One declaration per line
- One level of indentation (2 spaces or 1 tab) per property
- Space after the colon
- Closing brace on its own line

### Multiple Selectors

Group selectors with commas to apply the same styles to multiple elements:

```css
h1, h2, h3 {
  font-family: Arial, sans-serif;
  color: #333;
}
```

### Multiple Declarations

Each declaration must end with a semicolon. The last declaration's semicolon is technically optional but always include it for consistency:

```css
/* ✅ Correct */
p {
  color: red;
  font-size: 16px;
  line-height: 1.5;
}

/* ❌ Missing semicolon — the second line breaks */
p {
  color: red
  font-size: 16px;
}
```

### Shorthand Properties

Many CSS properties have shorthand forms that combine multiple individual properties:

```css
/* Individual properties */
border-width: 1px;
border-style: solid;
border-color: black;

/* Shorthand */
border: 1px solid black;

/* Individual properties */
margin-top: 10px;
margin-right: 20px;
margin-bottom: 10px;
margin-left: 20px;

/* Shorthand (top right bottom left) */
margin: 10px 20px 10px 20px;

/* Shorthand (top/bottom left/right) */
margin: 10px 20px;
```

### Case Sensitivity

CSS is generally case-insensitive for property names and most values, but **case-sensitive for:**

- **IDs**: `#myID` matches `id="myID"` (case-sensitive per HTML spec)
- **Classes**: `.myClass` matches `class="myClass"` (case-sensitive)
- **URLs**: file paths in `url()` may be case-sensitive depending on the filesystem
- **Font names**: some font names are case-sensitive

**Best practice:** Always use lowercase for properties and values.

```css
/* ✅ Correct */
background-color: #f0f0f0;

/* ❌ Works but bad practice */
BACKGROUND-COLOR: #f0f0f0;
Background-Color: #f0f0f0;
```

### Quotes in CSS

Quotes are required for:
- String values in `content` property
- Font family names with spaces
- URLs in `url()` (though sometimes optional)

```css
.quote::before {
  content: "👉 ";
}

h2 {
  font-family: "Times New Roman", serif;
}

div {
  background-image: url("image.jpg");
}
```

### The `!important` Annotation

Adding `!important` after a value gives it the highest priority, overriding normal cascade rules:

```css
p {
  color: red !important;
}
```

**Warning:** Use `!important` sparingly — it breaks the natural cascade and makes debugging difficult.

### Vendor Prefixes

Experimental CSS features may require vendor prefixes:

```css
.element {
  -webkit-transform: rotate(45deg);  /* Chrome, Safari, newer Opera */
  -moz-transform: rotate(45deg);     /* Firefox */
  -ms-transform: rotate(45deg);      /* Internet Explorer */
  -o-transform: rotate(45deg);       /* Older Opera */
  transform: rotate(45deg);          /* Standard */
}
```

Always put the unprefixed version last so that once the standard is supported, it takes precedence.

## Syntax

```
/* Complete CSS syntax reference */

/* Element selector */
element { property: value; }

/* Class selector */
.class-name { property: value; }

/* ID selector */
#id-name { property: value; }

/* Multiple selectors */
selector1, selector2, selector3 { property: value; }

/* Descendant selector */
parent child { property: value; }

/* Child selector */
parent > child { property: value; }

/* Pseudo-class */
element:hover { property: value; }

/* Pseudo-element */
element::before { content: ""; }

/* Attribute selector */
element[attribute="value"] { property: value; }

/* Media query */
@media (condition) {
  element { property: value; }
}
```

## Examples

### Example 1: Basic Syntax

```css
/* Element selector targets all <p> elements */
p {
  color: #333;
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 15px;
}
```

### Example 2: Grouping Selectors

```css
/* Apply same styles to multiple elements */
h1, h2, h3, h4 {
  font-family: Georgia, "Times New Roman", serif;
  color: #2c3e50;
  margin-top: 0;
}

h1 { font-size: 2.5em; }
h2 { font-size: 2em; }
h3 { font-size: 1.75em; }
```

### Example 3: Shorthand vs Longhand

```css
/* Longhand — verbose but explicit */
.longhand {
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 10px;
  padding-left: 20px;
  background-color: #f0f0f0;
  background-image: url("bg.png");
  background-repeat: no-repeat;
  background-position: center;
}

/* Shorthand — concise */
.shorthand {
  padding: 10px 20px;
  background: #f0f0f0 url("bg.png") no-repeat center;
}
```

## Visual Explanation

### CSS Rule Structure Diagram

```
┌───────────────────────────────────────────────────────────┐
│                        CSS RULE                           │
│                                                           │
│   ┌─────────────────┐   ┌─────────────────────────────┐  │
│   │    SELECTOR      │   │     DECLARATION BLOCK       │  │
│   │                 │   │                             │  │
│   │   h1, .title    │   │  {                         │  │
│   │                 │   │    color: blue;  ← declaration  │
│   │  (targets HTML) │   │    font-size: 20px;        │  │
│   └─────────────────┘   │    text-align: center;     │  │
│                         │  }                         │  │
│                         └─────────────────────────────┘  │
└───────────────────────────────────────────────────────────┘
```

### Common Syntax Errors

```
❌ Missing closing brace:
h1 { color: red;

❌ Missing semicolon:
h1 { color: red font-size: 20px; }

❌ Using equals instead of colon:
h1 { color = red; }

❌ Extra commas in values:
h1 { font-family: "Arial",, sans-serif; }

❌ Unclosed string:
h1 { font-family: "Arial; }
```

### Shorthand Value Order

| Property | Value Order | Example |
|----------|-------------|---------|
| `margin` | top right bottom left | `margin: 10px 20px 10px 20px;` |
| `padding` | top right bottom left | `padding: 10px 20px;` (10px top/bottom, 20px left/right) |
| `border` | width style color | `border: 2px dashed red;` |
| `background` | color image repeat position | `background: #fff url("img.jpg") no-repeat center;` |
| `font` | style weight size/line-height family | `font: italic bold 16px/1.5 Arial;` |
| `animation` | name duration timing delay | `animation: slide 2s ease 1s;` |

## Common Mistakes

1. **Missing closing curly brace**: Causes all subsequent CSS to be ignored. Always check braces are balanced.
2. **Missing semicolons**: The last declaration doesn't require a semicolon, but forgetting one between declarations will cause the second property to be ignored.
3. **Using `=` instead of `:`**: CSS uses `property: value`, not `property = value`.
4. **Extra or missing commas**: In font stacks, `font-family: Arial, , sans-serif;` has an empty font name. In shorthand, `margin: 10px, 20px;` has an invalid comma.
5. **Case sensitivity issues**: While most CSS is case-insensitive, file paths, URLs, IDs, and classes are case-sensitive.
6. **Forgetting quotes around multi-word font names**: `font-family: Times New Roman;` should be `font-family: "Times New Roman";`.
7. **Putting spaces in incorrect places**: `margin: 10 px;` (space in "10px") is invalid.
8. **Using HTML comments in CSS**: `<!-- comment -->` doesn't work in CSS; use `/* comment */`.
9. **Nesting selectors without a preprocessor**: CSS doesn't support nesting like Sass/Less: `div { p { color: red; } }` is invalid.
10. **Not closing quotes**: An unclosed string will break everything after it.

## Best Practices

- **Consistent formatting**: Use the same brace style, indentation, and spacing throughout
- **One property per line**: Improves readability and diff-ability
- **Logical ordering**: Group related properties (positioning → box model → typography → visual)
- **Use shorthand wisely**: Shorthand is concise but can accidentally reset omitted values to defaults
- **Always include semicolons**: Even on the last declaration — it prevents errors when adding new rules
- **Lowercase for properties and values**: Consistent case improves readability
- **Space after colon**: `color: red` not `color:red` — improves readability
- **Comment complex sections**: Use `/* */` to document why, not what (the code shows what)
- **Alphabetize or group properties**: Choose a convention and stick with it
- **Avoid `!important`**: It breaks the cascade and makes debugging harder

## Accessibility Considerations

- CSS syntax doesn't directly affect accessibility, but the styles you write do
- Use meaningful color names or hex values with sufficient contrast
- Ensure font sizes are in relative units (`rem`, `em`) so they scale with user preferences
- Avoid `text-decoration: none` on links without providing other visual indicators
- Use valid syntax to ensure CSS parses correctly — broken CSS can lead to unstyled or poorly styled content

## Performance Considerations

- Syntax choices have minimal direct performance impact, but:
  - Shorthand properties reduce file size slightly
  - Valid CSS parses faster than invalid CSS (browsers recover from errors)
  - Consistent syntax helps minification tools work effectively
  - Browser parsing of CSS is highly optimized; focus on file size and selector efficiency for real gains

## Browser Compatibility

- CSS syntax is universally supported across all browsers
- Vendor prefixes may be needed for experimental properties (use Autoprefixer)
- Invalid syntax causes the browser to skip the entire rule or just the invalid declaration
- Browsers are forgiving — one syntax error doesn't break the entire stylesheet
- Use CSS validators to catch syntax errors before deployment

## Summary Notes

- CSS rule structure: `selector { property: value; }`
- Selector targets HTML elements; properties define what to style; values define how
- Multiple declarations separated by semicolons; multiple selectors separated by commas
- Shorthand combines multiple properties into one (e.g., `border: 1px solid black`)
- CSS ignores most whitespace; format for readability
- Use quotes for font names with spaces, `content` values, and URLs
- Vendor prefixes: `-webkit-`, `-moz-`, `-ms-`, `-o-` for experimental features
- Always put standard property last after vendor-prefixed versions
- Keep syntax valid: balanced braces, correct semicolons, proper colons
- `!important` overrides cascade but should be used sparingly
