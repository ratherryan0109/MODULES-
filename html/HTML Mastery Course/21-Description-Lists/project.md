# Mini Project: Glossary of Web Technologies

## Objective
Create a visually appealing, fully styled glossary page using HTML description lists. The page will define at least 15 web-related terms and display them in a multi-column layout with hover effects.

## Requirements

### HTML Structure
- A main heading (`<h1>`) with the title "Glossary of Web Technologies"
- A single `<dl>` element containing all term-description pairs
- At least 15 terms using `<dt>` and definitions using `<dd>`
- At least 3 terms with multiple `<dd>` definitions
- Use `<div>` wrappers (HTML5) to group each term-definition pair

### Styling & Layout
- Apply a two-column grid layout for the glossary
- Style terms with bold text, a different background color, and rounded corners
- Style descriptions with indentation and a subtle left border
- Add alternating row colors for readability
- Include hover effects on each term group
- Make the page responsive: single column on screens under 600px

### Content Categories
Include terms from these categories:
- **HTML** (5 terms): e.g., HTML, CSS, JavaScript, DOM, Element
- **Networking** (5 terms): e.g., HTTP, HTTPS, DNS, API, JSON
- **Tools** (5 terms): e.g., Git, npm, Webpack, Babel, Browser

## Steps

1. Create the HTML document skeleton with `<!DOCTYPE html>` and required meta tags
2. Add the main heading and description list container
3. Add all 15 terms with their definitions using `<dt>` and `<dd>`
4. Add 3+ terms with multiple `<dd>` definitions
5. Wrap each term-definition group in `<div>` elements
6. Write CSS for the two-column grid layout
7. Add styling for terms (bold, background color, padding, rounded corners)
8. Style descriptions with border-left accent and margin
9. Add alternating row colors using `nth-child` selector
10. Add hover transition effects
11. Add responsive media query for mobile
12. Validate your HTML and test in a browser

## Example Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Glossary of Web Technologies</title>
  <!-- styles -->
</head>
<body>
  <h1>Glossary of Web Technologies</h1>
  <dl>
    <div>
      <dt>HTML</dt>
      <dd>HyperText Markup Language — the standard language for creating web pages.</dd>
    </div>
    <!-- ... 14 more groups ... -->
  </dl>
</body>
</html>
```

## Expected Output

A professional-looking glossary page with:
- A clean, centered layout
- Terms in colored boxes on the left
- Descriptions with left-border accents on the right
- Smooth hover animations
- Mobile-responsive single-column layout

## Bonus Challenges

- Add a search/filter bar using JavaScript to filter terms in real-time
- Add a numbered index at the top with anchor links to each term
- Include a dark mode toggle
- Add tooltips with additional information on hover
- Use CSS animations for page load
