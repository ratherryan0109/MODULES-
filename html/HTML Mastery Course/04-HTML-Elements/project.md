# Mini Project: Build a 'HTML Elements Reference Guide' Page

## Objective
Create a comprehensive reference page that documents and demonstrates all major categories of HTML elements. This page will serve as your personal quick reference for HTML development.

## Requirements

Build a single HTML page with these sections:

1. **Header & Navigation**
   - A title: "HTML Elements Reference Guide"
   - A navigation menu linking to each section via anchor links

2. **Block-Level Elements Section**
   - An explanation of what block elements are
   - A table listing at least 10 block elements with columns: Element, Description, and Example
   - Use `<code>` tags inside the table for element names

3. **Inline Elements Section**
   - An explanation of inline elements
   - A table with at least 10 inline elements
   - A demonstration paragraph showing inline elements in action

4. **Void Elements Section**
   - An unordered list of all void elements (at least 10)
   - A note about why they have no closing tag

5. **Semantic Elements Section**
   - A description list (<dl>) of 8 semantic elements
   - Use `<dt>` for the element name and `<dd>` for its definition

6. **Lists & Tables Section**
   - An ordered list of 5 HTML list types
   - A sample table showing an element comparison

7. **Form Elements Section**
   - A small demo form using at least 5 different input types
   - Use `<fieldset>` and `<legend>`

8. **Footer**
   - Copyright with current year
   - A link to the W3C HTML validator

## Step-by-Step Instructions

1. Create `elements-reference.html`
2. Start with the HTML5 boilerplate
3. Build the navigation as anchor links
4. Write each section with explanations and examples
5. Use `<pre>` and `<code>` for HTML syntax display
6. Ensure all elements are properly nested
7. Validate your final HTML

## Starter Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Elements Reference Guide</title>
</head>
<body>
    <!-- Build your comprehensive reference here -->
</body>
</html>
```

## Expected Structure

```
┌──────────────────────────────────────┐
│ HTML Elements Reference Guide        │
│ [Block] [Inline] [Void] [Semantic]   │
├──────────────────────────────────────┤
│ Block-Level Elements                 │
│ ┌──────────┬──────────────────────┐  │
│ │ <div>    │ Generic container    │  │
│ │ <p>      │ Paragraph            │  │
│ └──────────┴──────────────────────┘  │
├──────────────────────────────────────┤
│ Inline Elements                      │
│ ┌──────────┬──────────────────────┐  │
│ │ <span>   │ Inline container    │  │
│ │ <strong> │ Strong importance   │  │
│ └──────────┴──────────────────────┘  │
├──────────────────────────────────────┤
│ Void Elements (list form)            │
│ • <br> - Line break                  │
│ • <hr> - Horizontal rule             │
├──────────────────────────────────────┤
│ Semantic Elements (dl)               │
│ <header> → Intro content             │
│ <nav> → Navigation                   │
├──────────────────────────────────────┤
│ Demo Form                            │
│ [Text] [Email] [Select] [Submit]     │
├──────────────────────────────────────┤
│ Footer: © 2026 | Validate HTML       │
└──────────────────────────────────────┘
```

## Bonus Challenges
- Add a `<details>` element for each category to show/hide additional information
- Create a color-coded system using inline styles for different element types
- Add a "copy code" button simulation using `<kbd>` elements
- Include a `<meter>` and `<progress>` element demonstration

## Submission
Open in a browser, verify all sections render correctly, and validate with W3C validator.
