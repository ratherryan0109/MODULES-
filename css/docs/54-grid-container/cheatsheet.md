# Grid Container - Quick Reference

## Display Values

| Value | Behavior |
|-------|----------|
| `display: grid` | Block-level grid container |
| `display: inline-grid` | Inline-level grid container |

## Track Sizing Functions

| Function | Example | Description |
|----------|---------|-------------|
| `repeat()` | `repeat(3, 1fr)` | Creates repetitive pattern |
| `minmax()` | `minmax(200px, 1fr)` | Min/max track size |
| `auto-fill` | `repeat(auto-fill, 200px)` | Fills with as many tracks as fit |
| `auto-fit` | `repeat(auto-fit, minmax(200px, 1fr))` | Fills and collapses empty tracks |

## Key Properties

| Property | Description |
|----------|-------------|
| `grid-template-columns` | Define column tracks |
| `grid-template-rows` | Define row tracks |
| `gap` | Spacing between tracks |
| `grid-auto-rows` | Implicit row sizing |
| `grid-auto-columns` | Implicit column sizing |
