# Responsive Dashboard Design

## Introduction
Responsive dashboard design involves creating data-rich interfaces that adapt across devices. Dashboards typically contain charts, tables, metrics, and widgets that need to reorganize and resize gracefully from large monitors to small phones.

## Learning Objectives
1. Plan dashboard layouts for different screen sizes
2. Use CSS Grid for dashboard layout systems
3. Design responsive data tables
4. Create responsive charts and visualizations
5. Implement responsive sidebars and navigation
6. Design responsive metric cards (KPI widgets)
7. Handle data density on small screens
8. Use container queries for widget adaptation
9. Implement dark mode for dashboards
10. Optimize dashboard performance

## Theory

### Dashboard Design Principles

| Principle | Description | Implementation |
|-----------|-------------|----------------|
| Progressive disclosure | Show essential data first, details on demand | Expand/collapse, modals |
| Data density | Adjust information density per viewport | Show less columns on mobile |
| Consistency | Keep patterns consistent across views | Design system |
| Context | Maintain context during navigation | Sticky headers, breadcrumbs |
| Performance | Fast loading and interaction | Lazy loading, virtualization |

### Dashboard Layout Patterns

| Pattern | Desktop | Tablet | Mobile |
|---------|---------|--------|--------|
| Sidebar + content | Fixed sidebar | Collapsible sidebar | Bottom nav/off-canvas |
| Widget grid | 3-4 columns | 2 columns | 1 column |
| Stats row | Horizontal row | Wrap to 2 rows | Single column |
| Table | Full columns | Key columns | Card list |
| Chart area | Full width | Full width | Simplified |

### Widget Priority

When space is limited, prioritize:
1. Key performance indicators (KPI)
2. Time-sensitive data
3. User-specific information
4. Charts and trends
5. Secondary metrics
6. Tables and lists

## Syntax Examples

### Dashboard Grid Layout
```css
.dashboard {
  display: grid;
  gap: 1rem;
  padding: 1rem;
  grid-template-columns: 1fr;
  grid-template-areas:
    "header"
    "stats"
    "chart"
    "table"
    "activity";
}

@media (min-width: 640px) {
  .dashboard {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "header header"
      "stats  stats"
      "chart  chart"
      "table  activity";
  }
}

@media (min-width: 1024px) {
  .dashboard {
    grid-template-columns: 250px 1fr 1fr 1fr;
    grid-template-areas:
      "sidebar header header header"
      "sidebar stats  stats  stats"
      "sidebar chart  chart  activity"
      "sidebar table  table  table";
  }
}
```

### Responsive KPI Cards
```css
.stats-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
}

.kpi-card {
  background: white;
  border-radius: 10px;
  padding: 1.25rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.08);
}

.kpi-value {
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  font-weight: 700;
}

.kpi-label {
  font-size: 0.85rem;
  color: #64748b;
  margin-top: 0.25rem;
}
```

### Responsive Data Table
```css
.table-container {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

table {
  width: 100%;
  border-collapse: collapse;
  min-width: 600px; /* Forces scroll on mobile */
}

/* Mobile: card-style rows */
@media (max-width: 640px) {
  table, thead, tbody, th, td, tr {
    display: block;
  }
  thead { display: none; }
  tr { margin-bottom: 1rem; border: 1px solid #e2e8f0; border-radius: 8px; padding: 0.75rem; }
  td { display: flex; justify-content: space-between; padding: 0.5rem 0; border-bottom: 1px solid #f1f5f9; }
  td::before { content: attr(data-label); font-weight: 600; color: #475569; }
  td:last-child { border-bottom: none; }
}
```

### Responsive Sidebar
```css
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 250px;
  background: #1e293b;
  transform: translateX(-100%);
  transition: transform 0.3s;
  z-index: 200;
}

.sidebar.open { transform: translateX(0); }

@media (min-width: 1024px) {
  .sidebar {
    transform: translateX(0);
    position: sticky;
  }
}
```

### Chart Container
```css
.chart-container {
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  aspect-ratio: 16 / 9;
}

@media (max-width: 640px) {
  .chart-container {
    aspect-ratio: 4 / 3;
    padding: 1rem;
  }
}
```

## Visual Explanation

### Dashboard Priority on Mobile

```
Desktop                              Mobile
+------+--------+--------+         +----------+
| Nav  | Header |  ---   |         |  Header  |
+------+--------+--------+         +----------+
| Nav  | KPI 1  | KPI 2  |   →    | KPI 1    |
| Nav  +--------+--------+         +----------+
| Nav  | Chart  | Chart  |         | KPI 2    |
| Nav  +--------+--------+         +----------+
| Nav  | Table  | Widget |         | Chart    |
+------+--------+--------+         +----------+
                                    | Table    |
                                    +----------+
More data visible                   Prioritized data
```

## Common Mistakes
1. **Too much data on mobile** - Overwhelming and slow
2. **Fixed-width columns** - Break on small screens
3. **Ignoring touch interactions** - Charts need touch support
4. **No loading states** - Data takes time to fetch
5. **Horizontal scroll** - Should stack, not overflow
6. **Same density at all sizes** - Adapt information density
7. **Hidden navigation** - Users can't navigate dashboard
8. **No data caching** - Refetching data on every resize

## Best Practices
1. Use CSS Grid named areas for dashboard layout
2. Implement progressive disclosure: show less on mobile
3. Use `auto-fit` for KPI card grids
4. Convert tables to cards on mobile (responsive table pattern)
5. Use sticky headers for scrollable tables
6. Implement skeleton loaders for data widgets
7. Use container queries for widget adaptation
8. Design for dark mode from the start
9. Use CSS custom properties for theming
10. Implement virtual scrolling for large datasets

## Accessibility
- Charts need data table equivalents or aria descriptions
- Tab order should follow visual order in dashboard
- Keyboard navigation for interactive widgets
- Color-blind friendly chart palettes
- Screen reader announcements for data updates
- Focus management in modals and sidebars
- Zoom support for data visualization
- High contrast mode for readability

## Performance
- Lazy-load below-fold dashboard widgets
- Use CSS `content-visibility: auto` for off-screen sections
- Virtualize large lists and tables
- Use SVG for charts (lightweight, scalable)
- Minimize layout thrashing during data updates
- Use `will-change` sparingly on animated elements
- Debounce resize handlers
- Cache API responses

## Browser Compatibility
- CSS Grid named areas: All modern browsers
- Container queries: Modern browsers (2023+)
- CSS custom properties: All modern browsers
- `aspect-ratio`: All modern browsers (2021+)
- `content-visibility`: Modern browsers (2020+)
- Overflow scroll with momentum: iOS requires `-webkit-overflow-scrolling: touch`

## Summary Notes
- Dashboard layouts should use CSS Grid with named areas
- Reduce data density on mobile - show only KPIs
- Convert tables to cards on small screens
- Use `auto-fit` for responsive KPI grids
- Implement progressive disclosure for secondary data
- Sidebars should collapse on mobile (off-canvas)
- Charts need touch support and simplified views on mobile
- Always provide loading states for data widgets
- Design for both light and dark modes
- Use skeleton loaders for perceived performance
- Test dashboards with real data for performance
