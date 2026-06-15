# Project Specification: Admin Dashboard

## Overview
Build a functional admin dashboard called "AdminPanel" with sidebar navigation, header, stat cards, charts, activity feed, and data table.

## Requirements
- Fixed sidebar with nav groups and active indicators
- Sticky header with search, notifications, and profile avatar
- Stat cards grid (Revenue, Users, Orders, Issues) with trends
- CSS bar chart widget for revenue visualization
- Recent activity feed with user avatars
- Responsive data table with status badges
- Mobile: sidebar as overlay with hamburger toggle

## CSS Features
- CSS Grid for dashboard layout and stats
- Sticky positioning for sidebar and header
- CSS-only bar charts with flex alignment
- Status badges with color-coded classes
- Hover effects on table rows and cards
- Sidebar active state with left border indicator

## Accessibility
- aria-label on navigation and buttons
- aria-current on active sidebar link
- Semantic table structure with th
- Focus-visible outlines
- Screen reader-friendly icon labels

## Project Structure
```
dashboard/
├── index.html
├── css/style.css
└── assets/icons/
```

## Grading
| Criteria | Points |
|----------|--------|
| Layout (sidebar, header, content) | 25 |
| Stat cards and data display | 20 |
| Charts and widgets | 20 |
| Table component | 15 |
| Responsive and mobile | 10 |
| Accessibility | 10 |
| **Total** | **100** |
