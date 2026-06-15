# Mini Project: Responsive Dashboard with Container Queries

## Objective
Build a dashboard layout where each widget component responds to its own container width using CSS Container Queries.

## Requirements
1. Dashboard grid with 3 widget columns (sidebar, main, wide)
2. Each widget uses container-type: inline-size
3. Widget adapts layout at breakpoints: single column → two column → three column
4. Headings use cqi units for responsive typography
5. Widgets show/hide elements based on container width
6. Works in a grid where widget sizes change with viewport

## Stretch Goals
- Named containers for different widget types
- Animated layout transitions between breakpoints
- Dashboard with resizable panels (resize property)
- Container query + media query combination

## Evaluation
- Components work in any container context
- All layout breaks use @container, not @media
- Proper use of container units (cqi)
- No hard-coded viewport breakpoints
- Graceful fallback for unsupported browsers
