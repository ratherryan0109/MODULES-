# Mini Project: Build a Blog Post Page with Complete Document Structure

## Objective
Create a complete, well-structured blog post HTML page that demonstrates proper document anatomy, semantic elements, comprehensive metadata, and clean nesting.

## Requirements

1. **Complete Document Skeleton**
   - Correct `<!DOCTYPE html>` declaration
   - `<html>` with `lang` attribute
   - Properly ordered `<head>` section
   - Fully nested `<body>` content

2. **Comprehensive Head Section**
   - Character encoding (first)
   - Viewport meta tag
   - Page title (under 60 characters)
   - Meta description (150-160 characters)
   - Meta keywords (5-7 keywords)
   - Author meta tag
   - Open Graph tags (title, description, image, url, type)
   - Twitter card meta tags
   - Favicon link
   - Link to a stylesheet (use a placeholder)

3. **Body Structure**
   - `<header>` with blog name and `<nav>` with 4 links
   - `<main>` with:
     - `<article>` containing:
       - `<header>` with post title, author, and date
       - At least 3 sections (`<section>`) with headings
       - An `<aside>` inside the article for related tips
       - An `<img>` with `alt` text
       - A `<blockquote>` for a quote
       - An ordered and unordered list
   - `<footer>` with copyright and social links

4. **Content Requirements**
   - The blog post should be about "The Importance of Semantic HTML"
   - Each section must have meaningful content (not lorem ipsum)
   - Include at least one `<code>` and `<pre>` element
   - Include a table of data

## Step-by-Step Instructions

1. Create `blog-post.html`
2. Write the DOCTYPE declaration
3. Build the `<head>` with all required meta tags
4. Create the `<header>` with blog identity and navigation
5. Start `<main>` and begin the `<article>`
6. Add the article `<header>` with title, author, date
7. Add 3 sections: "What is Semantic HTML?", "Benefits", "Common Semantic Elements"
8. Insert a table of semantic elements with descriptions
9. Add a code example using `<pre>` and `<code>`
10. Add an `<aside>` with related tips
11. Close with `<footer>` containing copyright and links
12. Validate with W3C validator

## Starter Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Add all meta tags here -->
    <title>Why Semantic HTML Matters</title>
</head>
<body>
    <!-- Build your blog post -->
</body>
</html>
```

## Bonus Challenges
- Add a `<figure>` with `<figcaption>` for the image
- Add a comments section with a form
- Add breadcrumb navigation using `<nav>`
- Add a table of contents with anchor links to sections

## Submission
Save and open in a browser. Verify all metadata is present by viewing the page source (Ctrl+U). Run through the W3C validator.
