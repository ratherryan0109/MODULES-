# Mini Project: Interactive Documentation Page

## Overview

Build an interactive documentation page with ID-based anchor navigation, a table of contents with smooth scrolling, JavaScript-powered active section highlighting, and form associations using IDs.

## Requirements

1. **Table of Contents**: Links with `#id` fragments, sticky positioning
2. **Documentation sections**: Each section has a unique ID and `scroll-margin-top`
3. **Active nav highlighting**: JavaScript detects which section is in view and highlights the corresponding nav link using `getElementById`
4. **Smooth scrolling**: `scroll-behavior: smooth` on html
5. **Back to top button**: Uses `#top` ID on the header
6. **Code examples**: Clickable code snippets that copy to clipboard, using IDs for the textarea
7. **Search field**: A search input with `id` for label association

## Steps

### Step 1: HTML Structure
Create header with `id="top"`, TOC nav, main content with multiple sections, each with unique IDs.

### Step 2: CSS
Enable smooth scrolling, add scroll-margin-top to sections, style TOC as sticky sidebar.

### Step 3: Active Section Tracking
Use Intersection Observer API to detect which section is visible. Update nav link classes.

### Step 4: Copy-to-Clipboard
Each code block has a linked textarea with an ID. Clicking "Copy" selects the textarea content.

### Step 5: Search
Add a search input with `<label for="search-input">` and ID on the input.

## Starter Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Documentation</title>
  <style>
    html { scroll-behavior: smooth; }
  </style>
</head>
<body>
  <header id="top">
    <h1>Documentation</h1>
    <input type="search" id="search-input" placeholder="Search...">
    <label for="search-input">Search</label>
  </header>
  <nav class="toc">
    <a href="#getting-started">Getting Started</a>
    <a href="#installation">Installation</a>
    <a href="#usage">Usage</a>
    <a href="#api">API</a>
  </nav>
  <main>
    <section id="getting-started">...</section>
    <section id="installation">...</section>
    <section id="usage">...</section>
    <section id="api">...</section>
  </main>
  <a href="#top">Back to Top</a>
  <script>
    // Intersection Observer for active nav
  </script>
</body>
</html>
```

## Evaluation Criteria

- All sections have unique, descriptive IDs
- TOC links correctly navigate to sections
- Smooth scrolling is enabled
- Active nav link updates as user scrolls
- Back to top works
- Copy-to-clipboard uses ID for textarea
- Search label is properly associated via for/id
- scroll-margin-top offsets sections from the top
