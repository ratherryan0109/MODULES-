# Project Specification: YouTube Clone UI

## Overview
Build a video platform UI called "VidStream" with header, collapsible sidebar, chip bar, and responsive video grid.

## Requirements
- Fixed header with logo, search bar, and action icons
- Collapsible sidebar with nav groups (toggle width between 240px and 72px)
- Horizontal chip/tab bar for content filtering
- Video card grid with auto-fill columns
- Video thumbnail with duration badge
- Channel avatar, title (2-line clamp), channel name, and stats
- Responsive (mobile: hide sidebar, single column grid)

## CSS Features
- CSS Grid for app layout and video grid
- CSS transitions for sidebar collapse
- aspect-ratio: 16/9 for thumbnails
- -webkit-line-clamp for text truncation
- Custom scrollbar hiding for chip bar

## Accessibility
- aria-label on icon buttons
- aria-expanded on sidebar toggle
- aria-selected on active chip
- Focus-visible outlines
- Semantic card structure with <article>

## Project Structure
```
youtube-clone/
├── index.html
├── css/style.css
└── assets/icons/
```

## Grading
| Criteria | Points |
|----------|--------|
| Layout (header, sidebar, content) | 25 |
| Video grid and cards | 25 |
| Sidebar collapse functionality | 20 |
| Chip bar | 10 |
| Responsive design | 10 |
| Accessibility | 10 |
| **Total** | **100** |
