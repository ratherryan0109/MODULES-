# CSS Cheatsheet — Admin Dashboard

## Dashboard Layout
```css
.dashboard { display: grid; grid-template-columns: 260px 1fr; min-height: 100vh; }
.sidebar { background: #1e293b; position: sticky; top: 0; height: 100vh; }
```

## Stats Grid
```css
.stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.5rem; }
.stat-card { background: white; border: 1px solid #e2e8f0; border-radius: 0.75rem; padding: 1.5rem; }
.stat-value { font-size: 2rem; font-weight: 700; }
.stat-trend.up { color: #22c55e; background: #dcfce7; }
.stat-trend.down { color: #ef4444; background: #fee2e2; }
```

## Sidebar Navigation
```css
.sidebar-item { display: flex; align-items: center; gap: 1rem; padding: 0.65rem 1.5rem; color: #94a3b8; border-left: 3px solid transparent; cursor: pointer; }
.sidebar-item:hover { background: rgba(255,255,255,0.05); color: white; }
.sidebar-item.active { background: rgba(59,130,246,0.1); color: white; border-left-color: #3b82f6; }
```

## CSS Bar Chart
```css
.chart-bars { display: flex; align-items: flex-end; gap: 0.5rem; height: 200px; }
.chart-bar { flex: 1; background: #3b82f6; border-radius: 4px 4px 0 0; min-height: 4px; }
```

## Table
```css
table { width: 100%; border-collapse: collapse; font-size: 0.85rem; }
th { padding: 0.75rem; text-align: left; font-weight: 600; color: #64748b; border-bottom: 2px solid #e2e8f0; }
td { padding: 0.75rem; border-bottom: 1px solid #e2e8f0; }
tr:hover td { background: #f8fafc; }
```

## Status Badge
```css
.status { padding: 0.2rem 0.6rem; border-radius: 100px; font-size: 0.75rem; font-weight: 500; }
.status.active { background: #dcfce7; color: #22c55e; }
.status.pending { background: #fef3c7; color: #f59e0b; }
.status.inactive { background: #fee2e2; color: #ef4444; }
```

## Widget
```css
.widget { background: white; border: 1px solid #e2e8f0; border-radius: 0.75rem; padding: 1.5rem; }
.widget-title { font-size: 1rem; font-weight: 600; margin-bottom: 1.25rem; display: flex; justify-content: space-between; }
```

## Activity Feed
```css
.activity-item { display: flex; gap: 1rem; padding: 0.75rem 0; border-bottom: 1px solid #e2e8f0; }
.activity-avatar { width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: 600; }
```

## Responsive
```css
@media (max-width: 768px) { .dashboard { grid-template-columns: 1fr; } .sidebar { display: none; } .sidebar.open { display: flex; position: fixed; z-index: 100; } }
```
