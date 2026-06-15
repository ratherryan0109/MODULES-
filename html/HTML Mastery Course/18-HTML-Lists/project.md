# Mini Project: Build a Multi-Page Documentation Site

## Overview

Create a 3-page documentation site for a web development framework. Each page uses a different list type appropriately. The site should demonstrate proper use of ordered, unordered, and description lists with CSS styling.

## Pages

### 1. Installation Guide (`installation.html`) — Ordered List
- Step-by-step installation instructions using `<ol>`
- Each step includes detailed description
- Use `type` and `start` attributes where appropriate

### 2. API Reference (`api.html`) — Description List
- List of API endpoints with `<dl>` / `<dt>` / `<dd>`
- Each endpoint: method, URL, parameters, return value
- Style the description list for readability

### 3. Best Practices (`best-practices.html`) — Unordered List
- Categories best practices with nested `<ul>`
- Use custom bullet markers with CSS
- Include code snippets within list items

## Requirements
- Consistent navigation across all pages
- Proper HTML5 semantic structure
- CSS list styling with custom markers
- At least one nested list on each page
- Proper indentation and formatting

## Solution (installation.html)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Installation Guide — Docs</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <nav>
    <a href="installation.html">Installation</a>
    <a href="api.html">API</a>
    <a href="best-practices.html">Best Practices</a>
  </nav>
  <main>
    <h1>Installation Guide</h1>
    <ol>
      <li>
        <strong>Download the Framework</strong>
        <p>Visit the official website and download the latest version (v2.5.0).</p>
      </li>
      <li>
        <strong>Extract the Archive</strong>
        <p>Unzip the downloaded file to your preferred directory.</p>
      </li>
      <li value="3">
        <strong>Install Dependencies</strong>
        <p>Run <code>npm install</code> in the project directory.</p>
      </li>
      <li>
        <strong>Configure the Environment</strong>
        <p>Copy <code>.env.example</code> to <code>.env</code> and update values.</p>
      </li>
      <li>
        <strong>Run the Development Server</strong>
        <p>Execute <code>npm run dev</code> to start the local server.</p>
      </li>
    </ol>
  </main>
</body>
</html>
```

## style.css

```css
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: 'Segoe UI', sans-serif; max-width: 900px; margin: 0 auto; padding: 30px; background: #f8f9fa; }

nav { background: #1a1a2e; padding: 15px 20px; border-radius: 10px; margin-bottom: 30px; }
nav a { color: white; text-decoration: none; margin-right: 20px; }
nav a:hover { color: #e94560; }

main { background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.06); }

h1 { color: #1a1a2e; margin-bottom: 25px; }

ol, ul { padding-left: 25px; line-height: 2; }
ol li p { line-height: 1.5; color: #666; font-size: 14px; margin: 4px 0 12px; }

/* Custom bullet for best practices */
.custom-list { list-style: none; }
.custom-list li::before { content: '✔ '; color: #2ecc71; font-weight: bold; }
.custom-list li { margin: 8px 0; }

/* Description list styling */
dt { font-weight: bold; color: #2563eb; margin-top: 15px; }
dd { margin-left: 20px; color: #555; }
```

## Submission

Open all three pages and verify:
- Navigation links work between pages
- Ordered lists use correct numbering
- Nested lists display properly
- Custom CSS markers appear correctly
- Content is readable and well-structured
