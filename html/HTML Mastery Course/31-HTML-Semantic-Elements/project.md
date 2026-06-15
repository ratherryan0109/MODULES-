# Mini Project: Build a Semantic Blog Page

## Objective
Create a complete blog page using only semantic HTML5 elements. No `<div>` or `<span>` unless absolutely necessary for styling hooks.

## Requirements

Build a single HTML page with proper semantic structure:

1. **Page Header** (`<header>`)
   - Site logo/title and tagline
   - Primary navigation (`<nav>`) with Home, Blog, About, Contact links

2. **Main Content** (`<main>`)
   - **Blog Article** (`<article>`)
     - Article `<header>` with title, author, published date (`<time>`)
     - Multiple `<section>` elements breaking up the content
     - A pull quote or aside (`<aside>`) within the article
     - Article `<footer>` with tags, categories, share links
   - **Comments Section** (`<section>`)
     - Each comment as a nested `<article>` with `<footer>` for metadata

3. **Sidebar** (`<aside>`)
   - About the author
   - Recent posts list
   - Advertisement or newsletter signup

4. **Page Footer** (`<footer>`)
   - Copyright, privacy policy link, social media links

## Styling
- Use semantic element selectors (`header`, `nav`, `main`, `article`, `section`, `aside`, `footer`)
- No class names on semantic elements — add them via nested elements
- Responsive with media queries

## Bonus Challenges
- Add `<figure>` and `<figcaption>` for images
- Use `<details>` and `<summary>` for expandable content
- Implement breadcrumb navigation

## Starter Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Semantic Blog</title>
</head>
<body>
    <!-- Build with semantic HTML5 elements -->
</body>
</html>
```

## Submission
Validate with W3C — should have zero errors. Test with a screen reader to confirm semantic regions are announced.
