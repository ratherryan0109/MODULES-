# Mini Project: Personal Portfolio Page

## Objective
Build a one-page personal portfolio website using only HTML. This project will test your understanding of HTML document structure, semantic elements, links, images, lists, and text formatting.

## Requirements

Your portfolio page must include:

1. **Header Section**
   - Your name as the main heading (`<h1>`)
   - A navigation bar with links to About, Skills, Projects, and Contact sections
   - Use `<header>` and `<nav>` semantic elements

2. **About Section**
   - A professional photo placeholder (use an image from a placeholder service)
   - 2-3 paragraphs describing yourself, your background, and your goals
   - At least one word in `<strong>` and one in `<em>`

3. **Skills Section**
   - An unordered list of technical skills
   - Each skill name should be bold (`<strong>`)
   - Use `<section>` to wrap this content

4. **Projects Section**
   - An ordered list of 3 projects
   - Each project must have a heading, a short description, and a link to "View Project" (use `#` as placeholder)
   - Use `<article>` for each project

5. **Contact Section**
   - A simple contact form with: Name (text input), Email (email input), Message (textarea), and a Submit button
   - Use proper `<form>`, `<input>`, `<textarea>`, and `<button>` elements
   - Include labels for each form field

6. **Footer**
   - Copyright symbol with the current year
   - Links to social media placeholders (use `#`)

## Step-by-Step Instructions

1. Create a new file called `index.html`
2. Start with the DOCTYPE and basic HTML skeleton
3. Add the `<head>` section with appropriate meta tags and a title
4. Build the `<body>` with a `<header>` containing your `<h1>` and `<nav>`
5. Create a `<main>` element and add each section inside
6. For the About section, add an image and write your bio paragraphs
7. For the Skills section, create an unordered list
8. For the Projects section, use `<article>` tags within an ordered list
9. For the Contact section, build a functional form
10. Finish with a `<footer>`
11. Validate your HTML using the W3C Validator

## Starter Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Portfolio</title>
</head>
<body>
    <!-- Build your portfolio here -->
</body>
</html>
```

## Expected Output Structure

```
┌─────────────────────────────────┐
│         HEADER / NAV            │
│  Home | About | Skills | Contact│
├─────────────────────────────────┤
│        ABOUT SECTION            │
│  [Photo]   Bio paragraphs...    │
├─────────────────────────────────┤
│        SKILLS SECTION           │
│  • HTML    • CSS    • JS        │
├─────────────────────────────────┤
│       PROJECTS SECTION          │
│  1. Project One                 │
│  2. Project Two                 │
│  3. Project Three               │
├─────────────────────────────────┤
│       CONTACT SECTION           │
│  [Name] [Email] [Message] [Send]│
├─────────────────────────────────┤
│         FOOTER                  │
│  © 2026 | Social Links          │
└─────────────────────────────────┘
```

## Bonus Challenges
- Add a table showing your education history
- Use `<blockquote>` to include a favorite quote about coding
- Add a back-to-top link that scrolls to the top of the page

## Submission
Save your file and open it in a browser. It should render a complete, well-structured portfolio page with all the required sections. Validate your code at https://validator.w3.org/.
