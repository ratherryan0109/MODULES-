# Mini Project: Product Feature Comparison Page

## Overview

Build a product feature comparison page that heavily uses inline elements for text formatting, annotations, and interactive elements. The page should demonstrate proper use of semantic inline elements, links, images, and inline-block layouts.

## Requirements

1. **Product title and description**: Use `<h1>` with `<span>` for branding, `<p>` with `<strong>`, `<em>`, `<mark>`, `<small>` for text formatting
2. **Feature list**: Use inline elements to highlight key features within paragraphs
3. **Pricing section**: Display prices with `<sup>` for currency superscripts and `<sub>` for footnotes
4. **Technical specs**: Use `<code>`, `<kbd>`, `<abbr>`, and `<dfn>` for technical annotations
5. **Reviews/Testimonials**: Use `<q>` for inline quotes and `<cite>` for attributions
6. **Navigation**: Inline-block links with hover effects
7. **Tooltips**: Use `title` attribute on `<abbr>` elements
8. **Inline images**: Use `<img>` with proper `alt` text and `vertical-align`

## Steps

### Step 1: Structure
Create `<header>` with product name and inline navigation. Use `<main>` for content.

### Step 2: Hero Section
Use a `<section>` with the product name in `<h1>`, a tagline in `<p>` with `<strong>` and `<em>` elements.

### Step 3: Features Section
Create a `<section>` with paragraph descriptions. Use `<mark>` for key benefits, `<small>` for disclaimers, `<sup>` for trademark symbols.

### Step 4: Technical Specs Section
Use `<code>` for API endpoints, `<kbd>` for shortcuts, `<abbr>` with `title` for acronyms, `<dfn>` for definitions.

### Step 5: Pricing
Display prices using `<sup>` for cents. Add footnotes with `<sub>`.

### Step 6: Reviews
Use `<q>` for customer quotes with `<cite>` for names. Add star ratings using HTML entities.

### Step 7: Call to Action
Create inline-block styled buttons using `<a>` elements.

## Starter Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Product Page</title>
  <style>
    /* Add styles using inline element techniques */
  </style>
</head>
<body>
  <!-- Build your page here -->
</body>
</html>
```

## Sample Content

```
Product: DevStudio Pro 2025
Tagline: The <strong>ultimate</strong> code editor for <em>modern</em> developers
Price: $<sup>79</sup><small>/year</small>
Features: <mark>Real-time collaboration</mark>, <abbr title="Artificial Intelligence">AI</abbr>-powered suggestions
Shortcut: Press <kbd>Ctrl+Shift+P</kbd> to open command palette
Quote: <q>The best editor I've ever used</q>
```

## Evaluation Criteria

- All inline elements are used semantically
- No block elements are incorrectly nested inside inline elements
- Inline images have proper alt text and sizing
- Whitespace gaps are handled (using font-size: 0 or other method)
- Inline-block is used where box model control is needed
- Title attributes provide tooltips on abbreviations
- Page is visually clean and readable
