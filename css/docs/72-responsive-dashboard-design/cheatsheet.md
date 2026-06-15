# Responsive Dashboard Design Cheatsheet

## Dashboard Grid Layout

```css
.dashboard {
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
  grid-template-areas:
    "header"
    "kpis"
    "chart1"
    "chart2"
    "table"
    "activity";
}

/* Tablet */
@media (min-width: 768px) {
  .dashboard {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "header header"
      "kpis   kpis"
      "chart1 chart2"
      "table  activity";
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .dashboard {
    grid-template-columns: 220px 1fr 1fr;
    grid-template-areas:
      "sidebar header  header"
      "sidebar kpis    kpis"
      "sidebar chart1  chart2"
      "sidebar table   activity";
  }
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.kpis { grid-area: kpis; }
.chart1 { grid-area: chart1; }
.chart2 { grid-area: chart2; }
.table { grid-area: table; }
.activity { grid-area: activity; }
```

## KPI Cards Grid

```css
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1rem;
}

.kpi {
  background: white;
  padding: 1.25rem;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.08);
}

.kpi-value {
  font-size: clamp(1.25rem, 2.5vw, 2.25rem);
  font-weight: 700;
}

.kpi-label {
  font-size: 0.85rem;
  color: #64748b;
  margin-top: 0.25rem;
}

.kpi-trend {
  font-size: 0.8rem;
  font-weight: 600;
}

.trend-up { color: #059669; }
.trend-down { color: #dc2626; }
```

## Responsive Table → Cards

```css
.table-wrapper { overflow-x: auto; }

table { width: 100%; border-collapse: collapse; min-width: 500px; }

/* Mobile: card layout */
@media (max-width: 639px) {
  table, thead, tbody, th, td, tr { display: block; }
  thead { display: none; }
  tr {
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 0.75rem;
    margin-bottom: 0.75rem;
  }
  td {
    display: flex;
    justify-content: space-between;
    padding: 0.4rem 0;
    border-bottom: 1px solid #f1f5f9;
  }
  td:last-child { border-bottom: none; }
  td::before {
    content: attr(data-label);
    font-weight: 600;
    color: #475569;
  }
}
```

## Sidebar Pattern

### Desktop: Fixed sidebar
### Mobile: Off-canvas overlay

```css
.sidebar {
  position: fixed;
  top: 0; left: 0; bottom: 0;
  width: 250px;
  background: #1e293b;
  transform: translateX(-100%);
  transition: transform 0.3s;
  z-index: 200;
}
.sidebar.open { transform: translateX(0); }

@media (min-width: 1024px) {
  .sidebar {
    position: sticky;
    transform: translateX(0);
  }
}
```

## Chart Responsiveness

```css
.chart-container {
  container-type: inline-size;
  aspect-ratio: 16 / 9;
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
}

@container (max-width: 400px) {
  .chart-container {
    aspect-ratio: 1 / 1;
    padding: 0.75rem;
  }
}
```

## Dashboard Widget Container Queries

```css
.widget {
  container-type: inline-size;
  container-name: widget;
}

@container widget (min-width: 300px) {
  .widget-content { flex-direction: row; }
}

@container widget (min-width: 500px) {
  .widget-value { font-size: 2rem; }
}
```

## Skeleton Loader

```css
.skeleton {
  background: linear-gradient(90deg, #e2e8f0 25%, #f1f5f9 50%, #e2e8f0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 4px;
}

@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
```

## Mobile Priority Order

```
1. KPI Cards (essential metrics)
2. Header (context, navigation)
3. Charts (trend data)
4. Activity Feed (recent updates)
5. Data Tables (detailed info)
```
