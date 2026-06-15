# CSS Introduction — Cheatsheet

## What is CSS?
- **CSS** = Cascading Style Sheets
- Controls visual presentation of HTML elements
- Maintained by W3C (World Wide Web Consortium)

## CSS Rule Structure
```
selector {
  property: value;
  property: value;
}
```
Example:
```css
h1 {
  color: blue;
  font-size: 24px;
}
```

## Three Ways to Apply CSS

| Method | Syntax | Best For |
|--------|--------|----------|
| **External** | `<link rel="stylesheet" href="style.css">` | Production sites |
| **Internal** | `<style>...</style>` in `<head>` | Single pages |
| **Inline** | `style="color: red;"` on element | Quick tests only |

## The Cascade
Resolution order (highest to lowest priority):
1. `!important` annotations
2. Inline styles
3. ID selectors (#id)
4. Class/attribute selectors (.class, [attr])
5. Element selectors (div, p, h1)
6. Universal selector (*)
7. Inherited styles

## Inheritance
- **Inherited**: color, font-family, font-size, line-height, text-align, visibility
- **NOT inherited**: margin, padding, border, background, width, height, display, position

## CSS Comments
```css
/* This is a CSS comment */
/* Multi-line
   comments work too */
```

## Specificity Calculation
Count (a-b-c-d):
- **a**: inline styles (1 if present, 0 otherwise)
- **b**: number of ID selectors
- **c**: number of class, attribute, pseudo-class selectors
- **d**: number of element, pseudo-element selectors

## Common Properties
```css
color: red;           /* Text color */
background-color: blue;  /* Background */
font-size: 16px;      /* Font size */
font-family: Arial;   /* Font family */
text-align: center;   /* Text alignment */
margin: 10px;         /* Outer spacing */
padding: 10px;        /* Inner spacing */
border: 1px solid black;  /* Border */
```

## DevTools Shortcuts
- **F12** or **Ctrl+Shift+I**: Open DevTools
- **Ctrl+Shift+C**: Inspect element
- **Ctrl+Shift+M**: Toggle device toolbar

## Best Practices
- ✅ Use external stylesheets
- ✅ Write semantic class names
- ✅ Keep specificity low
- ✅ Validate CSS with W3C Validator
- ✅ Use shorthand properties
- ❌ Avoid !important
- ❌ Avoid excessive inline styles
- ❌ Don't repeat yourself (DRY)

## Browser Support
Check compatibility at: [caniuse.com](https://caniuse.com)
