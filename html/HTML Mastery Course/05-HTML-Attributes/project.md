# Mini Project: Build an 'HTML Attribute Explorer' Page

## Objective
Create an interactive reference page that catalogs and demonstrates the most important HTML attributes. This project will deepen your understanding of how attributes modify element behavior.

## Requirements

Build an HTML page with the following sections:

1. **Page Header**
   - Title: "HTML Attribute Explorer"
   - Navigation with links to each section

2. **Global Attributes Section**
   - A table listing at least 12 global attributes
   - Columns: Attribute, Description, Example
   - Demonstrate each with a live code sample inside `<pre>` and its rendered output

3. **Link Attributes Section**
   - Examples of `href`, `target`, `rel`, `download`, `hreflang`, `type`
   - Show different target values and rel values with explanations

4. **Image Attributes Section**
   - Demonstration of `src`, `alt`, `width`, `height`, `loading`, `sizes`, `srcset`
   - Explain responsive images with srcset

5. **Form Attributes Section**
   - A form demonstrating at least 10 different input attributes
   - Include `required`, `placeholder`, `maxlength`, `pattern`, `disabled`, `readonly`, `autofocus`, `autocomplete`, `min`, `max`, `step`, `multiple`

6. **Boolean Attributes Section**
   - A list or table of all boolean attributes
   - Show how they are used (presence = true)

7. **ARIA & Data Attributes Section**
   - Demonstrate `aria-label`, `aria-hidden`, `role`, `aria-expanded`
   - Show `data-*` attributes with JavaScript interaction (simulated with `<script>`)

8. **Footer**
   - Copyright with current year

## Step-by-Step Instructions

1. Create `attribute-explorer.html`
2. Write the HTML5 boilerplate with appropriate meta tags
3. Build the navigation section
4. Research and write each section with explanations
5. Use `<pre>` to show code and `<div class="demo">` for output
6. Ensure all your demo HTML uses valid attributes
7. Validate with W3C validator

## Bonus Challenges
- Add a `<details>` element for each section that expands to show more examples
- Create a table comparing presentational vs semantic attributes
- Add a form that validates and shows custom validation messages
- Include an interactive data-* example with inline JavaScript

## Starter Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Attribute Explorer</title>
</head>
<body>
    <!-- Build your attribute reference here -->
</body>
</html>
```

## Submission
Open the HTML file in a browser, verify all attribute examples render correctly, and run through the W3C validator.
