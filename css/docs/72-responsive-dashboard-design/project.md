# Mini Project: Analytics Dashboard

## Objective
Build a full analytics dashboard with responsive layouts, data visualization areas, and interactive widgets that work on mobile, tablet, and desktop.

## Requirements

### Dashboard Sections
1. **Sidebar navigation** with 5+ menu items and user profile
2. **Header** with page title, date filter, notifications, user avatar
3. **KPI row** with 4 metric cards (revenue, users, sessions, conversion rate)
4. **Chart area** with two charts side by side on desktop
5. **Data table** showing recent transactions (responsive → cards on mobile)
6. **Activity feed** with recent user actions
7. **Footer** with last updated timestamp

### Responsive Breakpoints
- **Mobile (< 640px)**: Single column, off-canvas sidebar, KPI cards stack, table → cards
- **Tablet (640-1024px)**: 2-column widget grid, collapsed sidebar icon
- **Desktop (1024-1440px)**: Full layout with sidebar, 4-column stats
- **Wide (> 1440px)**: Max-width container, charts get more space

### Technical Requirements
1. CSS Grid with named areas (grid-template-areas)
2. Container queries for widget-level adaptation
3. Auto-fit grid for KPI cards
4. Responsive table to card conversion (data-label)
5. Sticky sidebar on desktop, off-canvas on mobile
6. CSS custom properties for theming (light/dark)
7. Skeleton loading states for data widgets
8. Smooth transitions for layout changes
9. No JavaScript framework - pure CSS
10. Accessibility: ARIA labels, keyboard nav, focus indicators

### Data Visualization
- Use CSS/SVG for simple charts (bar chart, line chart placeholder)
- Charts should simplify on mobile (larger bars, fewer data points)
- Color-blind friendly palette for all charts

## Deliverables
- `index.html` - complete dashboard page
- All data is mock/placeholder

## Bonus Challenges
- Implement a dark/light theme toggle using CSS custom properties
- Add a date range picker (CSS/HTML only)
- Create CSS-animated chart bars that fill on load
- Add a notification dropdown (CSS only with checkbox hack)
- Implement a widget that can be expanded/collapsed

## Evaluation Criteria
- Dashboard grid layout works at all 4 breakpoints
- KPI cards are truly responsive with auto-fit
- Table converts to cards on mobile
- Sidebar functions as off-canvas on mobile, sticky on desktop
- Container queries used for widget adaptation
- Skeleton loaders present for data areas
- Color-blind friendly palette
- Accessible with keyboard navigation
- Clean, maintainable CSS with custom properties
