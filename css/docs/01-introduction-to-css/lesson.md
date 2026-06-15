# Module 01: Introduction to CSS

## Introduction

CSS (Cascading Style Sheets) is the language used to control the visual presentation of web pages. While HTML provides the structure and content of a webpage, CSS determines how that content looks — the colors, layouts, fonts, spacing, and overall visual design. Think of HTML as the骨架 (skeleton) of a house and CSS as the paint, wallpaper, furniture, and interior design that makes it beautiful and functional.

CSS was first proposed by Håkon Wium Lie in 1994 and has evolved through several versions: CSS1 (1996), CSS2 (1998), and CSS3 (ongoing modules). Modern CSS is now a collection of modular specifications maintained by the World Wide Web Consortium (W3C).

Every website you visit uses CSS. Understanding CSS is essential for any web developer, designer, or content creator who wants to build professional, responsive, and accessible web experiences.

## Learning Objectives

- Understand what CSS is and its role in web development
- Differentiate between CSS and HTML responsibilities
- Recognize the three methods of applying CSS to HTML
- Write basic CSS rules with selectors and declarations
- Understand the cascade and inheritance principles
- Apply inline, internal, and external CSS correctly
- Link external stylesheets to HTML documents
- Understand browser default styles and user-agent stylesheets
- Use browser developer tools to inspect and debug CSS
- Recognize the separation of concerns principle (content vs. presentation)

## Theory

### What is CSS?

CSS stands for Cascading Style Sheets. Let's break down each word:

- **Cascading**: Multiple style rules can apply to the same element; the browser follows specific rules (the cascade) to determine which style takes precedence.
- **Style**: Refers to the visual appearance — colors, fonts, spacing, layout, animations, etc.
- **Sheets**: Style information is organized into "sheets" (files or blocks of code).

### The Relationship Between HTML and CSS

HTML and CSS work together but have distinct responsibilities:

| Technology | Responsibility | Example |
|-----------|---------------|---------|
| HTML | Structure and content | Headings, paragraphs, images, links |
| CSS | Presentation and layout | Colors, fonts, spacing, positioning |

A common analogy:
- **HTML** is the blueprint/nouns: "This is a heading, this is a paragraph, this is an image."
- **CSS** is the decoration/adjectives: "The heading is large and blue, the paragraph has gray text, the image has a border."

### How CSS Works

CSS works by selecting HTML elements and applying visual rules to them. A CSS rule consists of:

1. A **selector** — identifies which HTML element(s) to style
2. A **declaration block** — contains one or more declarations
3. Each **declaration** contains a **property** and a **value**

```
selector {
  property: value;
  property: value;
}
```

### Three Ways to Apply CSS

There are three methods for applying CSS to an HTML document:

#### 1. External CSS (Recommended)
A separate `.css` file linked in the HTML `<head>`. This is the best practice approach because it separates content from presentation, enables caching, and allows one stylesheet to control multiple pages.

```html
<head>
  <link rel="stylesheet" href="styles.css">
</head>
```

#### 2. Internal CSS
CSS placed inside a `<style>` tag in the HTML `<head>`. Useful for single-page sites or quick prototypes.

```html
<head>
  <style>
    body { background-color: lightblue; }
  </style>
</head>
```

#### 3. Inline CSS
CSS applied directly to an HTML element using the `style` attribute. This is the least preferred method because it mixes content with presentation and is difficult to maintain.

```html
<p style="color: red; font-size: 20px;">Hello</p>
```

### The Cascade Principle

The "cascading" part of CSS is one of its most important features. When multiple rules conflict, the browser follows these rules to determine which wins:

1. **Importance**: `!important` annotations override everything
2. **Specificity**: More specific selectors override general ones
3. **Source Order**: Later rules override earlier ones when specificity is equal

### Inheritance

Some CSS properties (like `color` and `font-family`) are inherited from parent elements to children. Others (like `margin`, `padding`, `border`) are not inherited by default.

```css
/* color is inherited: all paragraphs inside this div will be blue */
div { color: blue; }

/* border is NOT inherited */
div { border: 1px solid black; }
```

### Browser Developer Tools

All modern browsers include Developer Tools (DevTools) that allow you to:
- Inspect HTML elements and see applied CSS rules
- Temporarily edit CSS and see changes in real-time
- Debug layout issues
- View the box model of any element
- Test responsive designs

Open DevTools with F12 or right-click → Inspect.

## Syntax

```css
/* Basic CSS Rule Structure */
selector {
  property: value;
}

/* Example with multiple declarations */
h1 {
  color: navy;
  font-size: 32px;
  text-align: center;
}

/* Multiple selectors (comma-separated) */
h1, h2, h3 {
  font-family: Arial, sans-serif;
}

/* Nested selector */
div p {
  color: gray;
}
```

## Examples

### Example 1: External Stylesheet

**HTML file (index.html):**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My CSS Page</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Welcome to CSS</h1>
  <p>This paragraph is styled by an external stylesheet.</p>
</body>
</html>
```

**CSS file (style.css):**
```css
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f8f9fa;
  margin: 0;
  padding: 20px;
}

h1 {
  color: #2c3e50;
  border-bottom: 3px solid #3498db;
  padding-bottom: 10px;
}
```

### Example 2: Inline vs Internal vs External Comparison

| Method | Use Case | Pros | Cons |
|--------|----------|------|------|
| External | Production sites | Reusable, cacheable, maintainable | Extra HTTP request |
| Internal | Single-page demos | No extra files | Not reusable across pages |
| Inline | Quick tests, dynamic JS styles | Highest specificity | Hard to maintain, no reuse |

## Visual Explanation

### CSS Rule Anatomy

```
      ┌─────────────────────────────────────────┐
      │              CSS Rule                    │
      │                                          │
      │   selector    declaration block          │
      │  ┌───────┐  ┌─────────────────────────┐ │
      │  │  h1   │  │ {                       │ │
      │  └───────┘  │   color: blue;     ← declaration │
      │             │   font-size: 16px; ← declaration │
      │             │ }                       │ │
      │             └─────────────────────────┘ │
      └─────────────────────────────────────────┘
           ↑                 ↑         ↑
        selector         property   value
```

### Cascade Priority Pyramid

```
        ┌─────────────┐
        │ !important  │  ← Highest Priority
        ├─────────────┤
        │  Inline     │
        │  Styles     │
        ├─────────────┤
        │   ID        │
        │  Selectors  │
        ├─────────────┤
        │  Class,     │
        │  Attribute  │
        ├─────────────┤
        │  Element    │
        │  Selectors  │
        ├─────────────┤
        │  Universal  │  ← Lowest Priority
        └─────────────┘
```

## Common Mistakes

1. **Forgetting the link tag**: Writing CSS in a file but forgetting to link it in HTML — the styles won't apply.
2. **Missing semicolons**: Each declaration must end with a semicolon. Missing one breaks subsequent rules.
3. **Using inline styles excessively**: Makes maintenance difficult and overrides other styles unexpectedly.
4. **Not closing curly braces**: A missing `}` causes all following CSS to break.
5. **Confusing `=` with `:`**: CSS uses `property: value` not `property = value`.
6. **Case sensitivity**: Property names are lowercase; values like color names are case-insensitive.
7. **Wrong file path**: Using an incorrect path in the `href` attribute of the `<link>` tag.

## Best Practices

- Always use **external stylesheets** for production projects
- Organize CSS logically: reset/base → typography → layout → components → utilities
- Use meaningful class names (BEM methodology recommended)
- Keep specificity low to avoid cascading conflicts
- Comment your CSS sections (but keep comments relevant)
- Use shorthand properties where possible (e.g., `margin: 10px 20px;`)
- Validate your CSS using W3C CSS Validator
- Use a CSS reset or normalize.css for cross-browser consistency
- Minify CSS for production deployment

## Accessibility Considerations

- CSS can enhance accessibility but never replace semantic HTML
- Ensure sufficient color contrast (WCAG AA: 4.5:1 for normal text)
- Do not use CSS to hide content that should be available to screen readers (`display: none` hides from all users)
- Use relative units (`em`, `rem`, `%`) to respect user font-size preferences
- Never convey information through color alone
- Test with browser zoom (200%) to ensure layouts don't break

## Performance Considerations

- External CSS files are cacheable by browsers, reducing load times on subsequent pages
- Minimize the number of CSS files (concatenate in production)
- Use CSS minification tools to reduce file size
- Avoid using `@import` in CSS as it blocks parallel downloads
- Place `<link>` tags in the `<head>` to prevent Flash of Unstyled Content (FOUC)
- Defer non-critical CSS using media queries or loading techniques
- Use CSS shorthand properties to reduce file size

## Browser Compatibility

CSS is well-supported across all modern browsers. However:
- Very new CSS features may not be supported in older browsers
- Use Can I Use (caniuse.com) to check feature support
- Consider using vendor prefixes for experimental features:
  ```css
  .element {
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
  }
  ```
- Autoprefixer tools can automate vendor prefix addition
- Graceful degradation: design so that older browsers still get a usable experience
- CSS features like Grid, Flexbox, and Custom Properties are supported in all modern browsers

## Summary Notes

- CSS = Cascading Style Sheets — controls the visual presentation of HTML
- Rule structure: `selector { property: value; }`
- Three application methods: external (best), internal (single page), inline (avoid)
- Cascade determines which rules win via importance, specificity, and source order
- Some properties inherit from parent to child elements
- Browser DevTools (F12) are essential for debugging CSS
- Separation of concerns: HTML for structure, CSS for presentation
- Always validate, organize, and comment your CSS
- Accessibility and performance should guide CSS decisions
- Browser compatibility varies; always test across browsers
