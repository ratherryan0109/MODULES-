# Module 127: Blog Website Styling

## Introduction
A well-styled blog balances readability with visual appeal. This module covers typography systems, article layouts, card-based grids, and reading experience optimization using modern CSS.

## Learning Objectives
- Design a typographic scale with CSS
- Build article card and list layouts with Grid/Flexbox
- Style blog posts with optimal reading typography
- Implement a tag/category filtering system
- Create responsive multi-column layouts

## Theory / Architecture
The blog uses a main feed layout with article cards, a sidebar for categories/tags, and a full article template. Key focus is on typography: `--fs-base: 1rem`, heading scale using `clamp()`, and line-height of 1.7 for body text.

### Typography Scale
```css
:root {
  --fs-base: 1rem;
  --fs-h1: clamp(2rem, 5vw, 3.5rem);
  --fs-h2: clamp(1.5rem, 3vw, 2.25rem);
  --fs-h3: clamp(1.25rem, 2vw, 1.5rem);
  --fs-body: 1rem;
  --fs-small: 0.875rem;
  --lh-tight: 1.2;
  --lh-body: 1.7;
  --ff-serif: 'Merriweather', Georgia, serif;
  --ff-sans: 'Inter', system-ui, sans-serif;
}
```

## Layout Architecture
The blog index uses a grid layout with a main content area and sidebar:
```css
.blog-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
}
@media (min-width: 768px) {
  .blog-layout { grid-template-columns: 2fr 1fr; }
}
```

## Article Card Design
Cards use a vertical flex layout with image, meta info (date, author), title, excerpt, and tags. Hover state lifts the card with a shadow.

## Common Mistakes
- Using `px` for font sizes (breaks user preferences)
- Too long line lengths (>75 characters per line)
- Missing `max-width` on article content
- Not styling blockquotes or code blocks

## Accessibility
- Articles use `<article>` with `aria-labelledby` on the title
- Proper heading hierarchy (h1 → h2 → h3)
- `alt` text on all images
- Skip link and focus indicators
- `prefers-reduced-motion` for animations

## Summary Notes
- Typography is the foundation of blog design
- Use `ch` units for line length (`max-width: 75ch`)
- Grid sidebar layout adapts on mobile
- Serif fonts improve readability for long-form content
- Always style code blocks, quotes, and lists for a complete reading experience
