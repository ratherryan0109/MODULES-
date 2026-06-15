# Project: Glassmorphism Dashboard Widgets

## Overview
Build a set of dashboard widgets using glassmorphism styling with CSS `backdrop-filter`. This project will challenge you to combine multiple `backdrop-filter` functions, manage progressive enhancement, and create a polished UI with frosted glass aesthetics.

## Learning Objectives
- Apply `backdrop-filter` with `blur()`, `brightness()`, and `saturate()` filters
- Implement proper vendor prefixing and fallback strategies
- Use `@supports` for progressive enhancement
- Combine semi-transparent backgrounds with backdrop-filter
- Handle text contrast and readability on glass elements
- Apply glassmorphism consistently across multiple components
- Test and verify cross-browser behavior

## Requirements

### Core Widgets (All Required)
1. **Stats Card** — Displays a number, label, and trend arrow with glass background
2. **Weather Widget** — Shows temperature, condition icon, and forecast with glass styling
3. **Activity Feed** — A scrollable list of recent activities, each with glass-styled items
4. **Mini Calender** — Shows current date with glass-styled date picker area

### Technical Requirements
- All widgets sit on a gradient background
- Each widget uses `backdrop-filter` with at least `blur()` and one additional filter function
- Include `-webkit-backdrop-filter` for Safari
- Provide a CSS fallback for browsers that don't support `backdrop-filter`
- Widgets must be responsive (1 column on mobile, 2-3 columns on desktop)
- Text must remain readable (WCAG AA contrast minimum)

### Styling Requirements
- Use a cohesive color palette (dark or light theme)
- Semi-transparent backgrounds (rgba or hsla)
- Subtle borders with transparency (`1px solid rgba(white, 0.15)`)
- Rounded corners (12-20px)
- Consistent spacing and typography
- Hover state that subtly changes the backdrop-filter values

## Starter Structure

```html
<div class="dashboard">
  <div class="dashboard-bg">
    <!-- Gradient background visible behind widgets -->
  </div>
  <div class="widget-container">
    <div class="widget stats-card">
      <div class="widget-content">
        <span class="widget-label">Total Users</span>
        <span class="widget-value">12,847</span>
        <span class="widget-trend trend-up">↑ 12.5%</span>
      </div>
    </div>
    <!-- Add more widgets -->
  </div>
</div>
```

## Stretch Goals
- Add dark/light theme toggle that changes the glass opacity and border colors
- Animate widget entrance with staggered fade-in using CSS animations
- Add a CSS filter preset system (tabs: "Frosted", "Vibrant", "Dark Glass")
- Implement reduced-motion media query support

## Evaluation Criteria
- [ ] All 4 core widgets are implemented
- [ ] backdrop-filter works correctly with multiple functions
- [ ] -webkit- prefix is included
- [ ] Solid background fallback works when backdrop-filter is unsupported
- [ ] Layout is responsive
- [ ] Text meets WCAG AA contrast guidelines
- [ ] Clean, commented code
- [ ] Hover states are implemented
- [ ] Widgets work correctly in Chrome, Firefox, and Safari

## Submission
Push your completed project to a repository and share the link. Include a screenshot showing the widgets in a browser that supports backdrop-filter and note any differences in the fallback version.
