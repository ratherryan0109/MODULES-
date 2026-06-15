# Project Specification: Blog Website Styling

## Overview
Build a styled blog website called "DesignBlog" with a responsive article feed, individual article pages, and a sidebar. Focus on typography, readability, and visual hierarchy.

## Requirements
- Fixed/sticky nav with logo and links
- Hero section with blog title and tagline
- Featured article card (large, 2:1 image ratio)
- Article grid (2-column on tablet+)
- Individual article page with full typography styling
- Sidebar with Categories, Tags, and Recent Posts
- Post metadata (author, date, reading time)
- Tag system with styled pills
- Code block and blockquote styling
- Footer

## CSS Features
- Serif + sans-serif font pairing (Merriweather + Inter)
- Typography scale with clamp()
- Line length limited to 65ch for readability
- CSS Grid for main layout (2fr main + 1fr sidebar)
- Flexbox for post meta and tag layout
- Hover effects on cards (translate + shadow + image zoom)
- Responsive article grid (auto-fill on smaller screens)

## Accessibility
- Semantic HTML (`<article>`, `<time>`, `<nav>`, `<aside>`)
- aria-label on nav and sidebar
- Skip-to-content link
- Focus-visible outlines
- Alt text on all images
- Proper heading hierarchy

## Project Structure
```
blog/
├── index.html
├── article.html
├── css/style.css
└── assets/images/
```

## Grading
| Criteria | Points |
|----------|--------|
| Typography system | 25 |
| Blog layout and sidebar | 20 |
| Article card design | 15 |
| Full article page styling | 15 |
| Accessibility | 10 |
| Responsive design | 10 |
| Code quality | 5 |
| **Total** | **100** |
