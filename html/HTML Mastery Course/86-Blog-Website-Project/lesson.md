# Module 86: Blog Website Project

## Introduction
A blog website is one of the most common and practical web development projects. It combines semantic HTML structure, content organization, navigation, and responsive design into a cohesive whole. In this project, you will build a complete multi-page blog website using only HTML and CSS. You will learn how to structure content with semantic elements, create a consistent layout across pages, design a responsive reading experience, and implement best practices for content presentation.

## Learning Objectives
By the end of this module, you will be able to:
- Plan and structure a multi-page blog website using semantic HTML5
- Create a consistent header, navigation, and footer across all pages
- Design a blog homepage with featured posts and article previews
- Build an individual blog post page with article structure
- Implement an about page and contact page
- Create a sidebar with categories, tags, and recent posts
- Design a responsive reading experience for all devices
- Use CSS Grid and Flexbox for blog-specific layouts
- Understand SEO and accessibility considerations for blog content

## Key Components of a Blog Website

| Component | Purpose |
|-----------|---------|
| **Header** | Site title/logo, navigation, search bar |
| **Hero/Featured** | Featured post or welcome section |
| **Blog Grid** | List of article preview cards |
| **Sidebar** | Categories, tags, recent posts, about widget |
| **Article Page** | Full blog post with content, images, metadata |
| **Comments Section** | Placeholder for discussion |
| **About Page** | Information about the author/site |
| **Contact Page** | Contact form or information |
| **Footer** | Links, copyright, social media |

## Visual Diagram: Blog Layout

```
┌──────────────────────────────────────┐
│           HEADER                     │
│  Logo    Home  Blog  About  Contact  │
├──────────────────────────────────────┤
│  ┌──────────────────┐ ┌──────────┐  │
│  │   FEATURED POST  │ │ Sidebar  │  │
│  │   [Image]        │ │          │  │
│  │   Title...       │ │Categories│  │
│  └──────────────────┘ │ Recent   │  │
│                       │ Tags     │  │
│  ┌──────────────────┐ │          │  │
│  │  Post Card 1     │ │          │  │
│  │  [Image] Title   │ │          │  │
│  │  Date · Category │ └──────────┘  │
│  └──────────────────┘               │
│  ┌──────────────────┐               │
│  │  Post Card 2     │               │
│  └──────────────────┘               │
│  ┌──────────────────┐               │
│  │  Post Card 3     │               │
│  └──────────────────┘               │
├──────────────────────────────────────┤
│           FOOTER                    │
│  © 2026 | Privacy | Social Links   │
└──────────────────────────────────────┘
```

## Blog Post Page Structure

```
┌──────────────────────────────────────┐
│  ARTICLE                             │
│  ┌────────────────────────────────┐  │
│  │  [Featured Image]              │  │
│  │                                │  │
│  │  H1: Blog Post Title           │  │
│  │  By Author | Date | Category   │  │
│  │                                │  │
│  │  ## Section Heading            │  │
│  │  Paragraph content...          │  │
│  │                                │  │
│  │  ## Another Section            │  │
│  │  Paragraph content...          │  │
│  │                                │  │
│  │  ### Subsection                │  │
│  │  More content...               │  │
│  │                                │  │
│  │  <blockquote>                  │  │
│  │  A meaningful quote from       │  │
│  │  the article...                │  │
│  │                                │  │
│  │  [Image with caption]          │  │
│  │                                │  │
│  │  Tags: HTML, CSS, Web Design   │  │
│  │  [Share Buttons]               │  │
│  └────────────────────────────────┘  │
│                                       │
│  COMMENTS SECTION (placeholder)       │
├──────────────────────────────────────┤
│  RELATED POSTS                       │
│  Card 1 | Card 2 | Card 3           │
└──────────────────────────────────────┘
```

## Best Practices for Blog Websites
- **Semantic structure** — Use `<article>`, `<section>`, `<header>`, `<main>`, `<aside>`, `<footer>`
- **Heading hierarchy** — One `<h1>` per page, logical h2-h6 nesting
- **Readable typography** — 16-20px font size, 1.5-1.8 line height, 65-75 characters per line
- **Responsive images** — Use `max-width: 100%` and `height: auto`
- **Accessibility** — Alt text, aria-labels, skip navigation, semantic landmarks
- **SEO** — Meta descriptions, Open Graph tags, heading structure, internal links
- **Performance** — Optimize images, lazy loading, minimal CSS/JS
- **Consistent layout** — Same header/footer across all pages

## Common Mistakes
- Using `<div>` for everything instead of semantic elements
- Poor heading hierarchy (multiple h1s, skipping levels)
- No meta description or Open Graph tags
- Images without alt text
- Unreadable text (too small, low contrast, no line height)
- Broken internal links
- Non-responsive design that requires horizontal scrolling
- Cluttered sidebar with too many widgets

## Summary Notes
- A blog website requires multiple page types: home, post, about, contact.
- Semantic HTML5 elements make the content meaningful and accessible.
- Consistent header/footer across all pages creates a cohesive experience.
- CSS Grid is ideal for blog card layouts and sidebar positioning.
- Typography choices significantly impact readability.
- Always include alt text on images for accessibility.
- Blog posts need clear metadata (author, date, category, tags).
- A well-structured sidebar improves navigation and discovery.
- Responsive design ensures readers can access content on any device.
- SEO meta tags help search engines understand and rank blog content.
