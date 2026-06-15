# Module 131: Admin Dashboard

## Introduction
Admin dashboards require dense data presentation, charts, cards, and navigation. This module builds a complete admin panel using CSS Grid for complex layouts and Flexbox for component arrangement.

## Learning Objectives
- Build a sidebar + header + content dashboard layout
- Design data cards with statistics
- Create tables and list views
- Implement a dark admin theme
- Use CSS Grid for dashboard widget placement

## Layout Architecture
The dashboard uses a fixed sidebar (left), fixed header (top), and scrollable main content area. CSS Grid-template-areas define the macro layout while widgets use a nested grid.

```css
.dashboard { display: grid; grid-template-columns: 260px 1fr; grid-template-rows: 64px 1fr; min-height: 100vh; }
.stats-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 1.5rem; }
```

## Key Components
- **Stat Cards**: Icon, value, label, trend indicator
- **Tables**: Striped rows, sticky header, responsive overflow
- **Charts Area**: CSS-based bar/line charts using div widths
- **Activity Feed**: Timeline-style list with avatars

## Responsive Approach
- Desktop: Full sidebar, multi-column stats
- Tablet (768px): Collapsed sidebar icons, 2-column stats
- Mobile (480px): Hidden sidebar, single column, hamburger nav

## Accessibility
- aria-current on active nav links
- role="table" with proper headers
- aria-sort on sortable table columns
- Focus indicators throughout

## Summary Notes
- Dashboards prioritize data density and clarity
- CSS Grid excels at widget-based layouts
- Sticky headers keep column labels visible
- Use monospace fonts for numeric data
- Color-code trends (green up, red down)
