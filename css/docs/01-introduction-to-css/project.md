# Mini Project: Personal Portfolio Page Styling

## Project Overview
Create a visually styled personal portfolio page using CSS. Apply all the concepts learned in Module 01: external CSS, selectors, properties, values, cascade, and inheritance.

## Requirements

### HTML Structure
Create an `index.html` file with the following sections:
- **Header**: Your name and a tagline
- **About Me**: A short paragraph about yourself
- **Skills**: A list of your skills
- **Projects**: Three project cards (title, description, tech used)
- **Contact**: Email and social media links
- **Footer**: Copyright notice

### CSS Requirements
Create a `style.css` file that:
1. Uses an external stylesheet linked in the HTML `<head>`
2. Sets a background color and text color on the `body`
3. Styles all `h1`, `h2`, and `h3` elements with distinct colors
4. Applies a custom font-family using a web-safe font stack
5. Adds padding and margin to sections
6. Uses class selectors to style project cards
7. Uses inheritance to set default text styles
8. Demonstrates the cascade by having both general and specific rules
9. Adds hover effects to links
10. Centers the content with a max-width container

## Design Specifications

| Element | Property | Value |
|---------|----------|-------|
| Body background | `background-color` | `#f8f9fa` |
| Body font | `font-family` | `'Segoe UI', Tahoma, sans-serif` |
| Body text | `color` | `#333` |
| Main heading | `color` | `#2c3e50` |
| Section headings | `color` | `#3498db` |
| Project cards | `background` | `white` |
| Project cards | `border-radius` | `8px` |
| Links | `color` | `#2980b9` |
| Links hover | `color` | `#1a5276` |

## Example Structure

```
portfolio/
├── index.html
└── style.css
```

## Stretch Goals
- Add a navigation bar with link styling
- Use CSS comments to organize your stylesheet
- Add a profile image with a border
- Use different font sizes for headings (h1 largest, h3 smallest)
- Add a subtle box-shadow to project cards

## Submission
Share both files (index.html and style.css) along with a screenshot of the rendered page.

## Rubric

| Criteria | Points |
|----------|--------|
| Correct external CSS linking | 15 |
| Proper CSS syntax throughout | 15 |
| Use of selectors (element, class) | 20 |
| Use of cascade (general + specific rules) | 15 |
| Inheritance demonstrated | 10 |
| Visual design quality | 15 |
| Code organization and comments | 10 |
| **Total** | **100** |
