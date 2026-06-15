# Mini Project: Build an Editor Setup & Reference Page

## Objective
Create an HTML document that serves as your personal VS Code setup guide and HTML reference. This project will demonstrate your understanding of HTML structure while documenting your development environment.

## Requirements

Build a single-page HTML document with the following sections:

1. **Page Header**
   - A main heading: "My VS Code Setup for HTML Development"
   - A short introductory paragraph explaining what this guide covers

2. **Editor Installation Section**
   - An ordered list of steps you took to install VS Code
   - Include download, installation, and initial configuration

3. **Extension Reference Table**
   - A table with 3 columns: Extension Name, Purpose, and Rating (1-5 stars)
   - Include at least 8 extensions with descriptions
   - Use proper table elements (`<table>`, `<tr>`, `<th>`, `<td>`)

4. **Emmet Shortcuts Section**
   - A heading "Essential Emmet Shortcuts"
   - An unordered list of 8+ Emmet abbreviations with their expanded output
   - Format as: abbreviation → expanded HTML (use `<code>` tags)

5. **Keyboard Shortcuts Section**
   - A definition list (`<dl>`) with 10 VS Code keyboard shortcuts
   - Use `<dt>` for the shortcut and `<dd>` for what it does

6. **Tips Section**
   - A section with best practices for using VS Code
   - Use `<strong>` for key points and `<em>` for emphasis

7. **Footer**
   - Copyright with current year
   - A link back to the top of the page

## Step-by-Step Instructions

1. Create `editor-setup.html` with the HTML5 boilerplate
2. Add the header section with `<h1>` and `<p>`
3. Build the installation steps using `<ol>`
4. Research and list at least 8 VS Code extensions in a table
5. Compile your Emmet shortcuts into a structured list
6. Document keyboard shortcuts using `<dl>`
7. Add tips for editor productivity
8. Complete with a proper footer
9. Validate your HTML

## Starter Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My VS Code Setup for HTML</title>
</head>
<body>
    <!-- Build your setup guide here -->
</body>
</html>
```

## Expected Output

```
┌──────────────────────────────────────┐
│  My VS Code Setup for HTML Dev       │
│  A comprehensive guide to my editor  │
├──────────────────────────────────────┤
│  Installation Steps:                  │
│  1. Download VS Code                  │
│  2. Run installer                     │
│  3. Configure settings                │
│  ...                                  │
├──────────────────────────────────────┤
│  Extensions Table                     │
│  ┌──────────┬──────────────┬───────┐ │
│  │ Live Svr │ Auto-reload  │ ★★★★★│ │
│  │ Prettier │ Format code  │ ★★★★★│ │
│  └──────────┴──────────────┴───────┘ │
├──────────────────────────────────────┤
│  Emmet Shortcuts                      │
│  • ! → <!DOCTYPE html>...            │
│  • ul>li*3 → <ul><li>...</li></ul>   │
├──────────────────────────────────────┤
│  Keyboard Shortcuts (dl)              │
│  Ctrl+S → Save file                   │
│  Ctrl+P → Quick open                  │
├──────────────────────────────────────┤
│  Tips & Best Practices                │
│  • Use <strong>dark mode</strong>     │
│  • <em>Organize</em> extensions      │
├──────────────────────────────────────┤
│  Footer: © 2026 | Back to Top        │
└──────────────────────────────────────┘
```

## Bonus Challenges
- Add a `<figure>` with an `<img>` showing your VS Code screenshot
- Create a nested list showing extension categories (Formatting, Server, Git, etc.)
- Add a `<blockquote>` with a tip from a professional developer

## Submission
Save the HTML file, open it in a browser to verify it renders correctly, and validate with the W3C validator.
