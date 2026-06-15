# Module 130: YouTube Clone UI

## Introduction
Clone the YouTube video platform interface to master sidebar navigation, video grid layouts, and responsive media queries for complex dashboards.

## Learning Objectives
- Build a collapsible sidebar with navigation
- Create a responsive video card grid
- Implement a fixed top search bar
- Style video metadata (views, channel, date)
- Use CSS Grid and Flexbox for complex layouts

## Architecture
The YouTube UI has three main areas: fixed top header (logo, search, icons), collapsible left sidebar (nav links, subscriptions), and main content area (video grid). The layout uses CSS Grid for the overall page and Flexbox for cards.

## Key CSS Patterns
```css
.app-layout {
  display: grid;
  grid-template-columns: 240px 1fr;
  grid-template-rows: 56px 1fr;
  min-height: 100vh;
}
.video-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
}
.sidebar.collapsed { width: 72px; }
```

## Responsive Breaks
- Desktop: Expanded sidebar, 3-4 column grid
- Tablet (768px): Collapsed sidebar, 2-3 column grid
- Mobile (480px): Hidden sidebar, single column, bottom nav

## Accessibility
- aria-expanded on sidebar toggle
- aria-label on all icon buttons
- Skip-to-content link
- Focus management for sidebar

## Summary Notes
- Grid-template-areas simplify complex layouts
- CSS Grid auto-fill handles video grid responsiveness
- Collapsible sidebar uses width transitions
- 56px header is the YouTube standard
- Use aspect-ratio: 16/9 for video thumbnails
