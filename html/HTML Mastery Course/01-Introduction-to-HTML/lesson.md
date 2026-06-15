# Module 1: Introduction to HTML

## Introduction
HTML (HyperText Markup Language) is the standard language used to create and structure content on the web. It forms the backbone of every website, defining the structure of web pages by using a system of tags and attributes. Think of HTML as the skeleton of a building — it provides the framework upon which CSS (styling) and JavaScript (interactivity) are layered.

## Learning Objectives
By the end of this module, you will be able to:
- Define what HTML is and explain its role in web development
- Understand the history and evolution of HTML (HTML 1.0 through HTML5)
- Identify the components of an HTML document
- Write a basic HTML page from scratch
- Open an HTML file in a browser and view rendered content
- Distinguish between HTML, CSS, and JavaScript

## What is HTML?
HTML stands for **HyperText Markup Language**. It is not a programming language — it is a **markup language** that uses tags to describe the structure and meaning of content on a web page.

- **HyperText**: Refers to the ability to link from one document to another using hyperlinks.
- **Markup**: The practice of annotating text with tags that define how it should be displayed or structured.
- **Language**: A systematic set of rules and symbols used to communicate instructions to a computer.

HTML documents are plain text files with the extension `.html` or `.htm`. When a browser (like Chrome, Firefox, or Edge) reads an HTML file, it renders the content according to the markup instructions.

## History of HTML

| Version | Year | Key Features |
|---------|------|--------------|
| HTML 1.0 | 1991 | Basic text formatting, links, images |
| HTML 2.0 | 1995 | Standardized forms, tables |
| HTML 3.2 | 1997 | Applets, text flow around images |
| HTML 4.01 | 1999 | Stylesheets, scripting, improved accessibility |
| XHTML 1.0 | 2000 | Stricter syntax based on XML |
| HTML5 | 2014 | Semantic elements, audio/video, canvas, local storage |

HTML5 is the current standard and is maintained by the **W3C (World Wide Web Consortium)** and **WHATWG (Web Hypertext Application Technology Working Group)**.

## How HTML Works
HTML works by embedding **tags** within text content. Tags are enclosed in angle brackets (`< >`) and typically come in pairs: an opening tag and a closing tag.

```
Opening Tag: <tagname>
Closing Tag: </tagname>  (note the forward slash)
Content: The text or elements between the opening and closing tags
Element: The combination of opening tag, content, and closing tag
```

### Basic HTML Document Structure
Every HTML document follows a standard structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Web Page</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is my first HTML page.</p>
</body>
</html>
```

Let's break down each part:

| Component | Purpose |
|-----------|---------|
| `<!DOCTYPE html>` | Declares this is an HTML5 document |
| `<html>` | The root element that wraps all content |
| `<head>` | Contains metadata (not displayed on the page) |
| `<meta charset="UTF-8">` | Sets character encoding for proper text rendering |
| `<meta name="viewport">` | Ensures responsive behavior on mobile devices |
| `<title>` | Sets the page title shown in the browser tab |
| `<body>` | Contains all visible content |
| `<h1>` | A top-level heading |
| `<p>` | A paragraph of text |

## Key Concepts

### Tags and Elements
- **Tag**: The markup syntax `<tagname>` or `</tagname>`
- **Element**: The complete unit including opening tag, content, and closing tag
- **Empty Elements**: Some elements have no content and no closing tag, like `<br>` and `<img>`

### Nesting
HTML elements can be nested inside one another:

```html
<div>
    <p>This paragraph is <strong>nested</strong> inside a div.</p>
</div>
```

Nesting must be properly closed — the last opened tag must be the first closed.

### Attributes
HTML elements can have attributes that provide additional information:

```html
<a href="https://example.com">Click here</a>
<img src="photo.jpg" alt="A description of the photo">
```

The `href` and `src` and `alt` are **attributes** that modify the behavior or appearance of elements.

## HTML vs CSS vs JavaScript
These three technologies work together to create modern web pages:

| Technology | Role | Analogy |
|-----------|------|---------|
| **HTML** | Structure and content | The skeleton of a house |
| **CSS** | Presentation and styling | The paint, wallpaper, and decor |
| **JavaScript** | Behavior and interactivity | The plumbing, electricity, and appliances |

```html
<!-- HTML: Structure -->
<p id="greeting">Hello!</p>

<!-- CSS: Style -->
<style>
    #greeting { color: blue; font-size: 24px; }
</style>

<!-- JavaScript: Behavior -->
<script>
    document.getElementById('greeting').onclick = function() {
        alert('You clicked the greeting!');
    };
</script>
```

## Visual Diagram: How a Web Page Loads

```
User enters URL → Browser sends HTTP request → Server responds with HTML
                                                       ↓
                                              Browser parses HTML
                                                       ↓
                                              Builds DOM Tree
                                                       ↓
                                              Downloads CSS & JS
                                                       ↓
                                              Renders the page
```

The **DOM (Document Object Model)** is the tree-like representation of the HTML document that the browser creates in memory.

## Common Mistakes

| Mistake | Incorrect | Correct |
|---------|-----------|---------|
| Missing DOCTYPE | `<html>` | `<!DOCTYPE html><html>` |
| Unclosed tags | `<p>Text` | `<p>Text</p>` |
| Incorrect nesting | `<b><i>Text</b></i>` | `<b><i>Text</i></b>` |
| Case sensitivity | `<P>Text</P>` | `<p>Text</p>` (use lowercase) |
| Wrong file extension | `page.doc` | `page.html` |

## Best Practices
1. **Always declare DOCTYPE** at the top of your document.
2. **Use lowercase tag names** — HTML5 is case-insensitive but lowercase is the convention.
3. **Close all tags** — even optional closing tags should be included for clarity.
4. **Use proper indentation** — indent nested elements by 2 or 4 spaces.
5. **Include lang attribute** on the `<html>` tag for accessibility and SEO.
6. **Always set charset** to UTF-8 to support all characters.
7. **Validate your HTML** using the W3C Validator (https://validator.w3.org).
8. **Keep structure separate** — use HTML for structure, CSS for styling, JS for behavior.

## Summary Notes
- HTML is a markup language that structures web content.
- HTML5 is the current version, offering semantic elements and multimedia support.
- An HTML document has `<head>` (metadata) and `<body>` (visible content).
- Tags are the building blocks, usually paired as opening and closing.
- Attributes provide additional information about elements.
- The DOM is the browser's tree representation of HTML.
- HTML works with CSS and JavaScript to create complete web pages.
- Always validate your HTML and follow semantic best practices.
