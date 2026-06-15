# Mini Project: Accessible Component Library Contrast Audit

## Objective
Perform a comprehensive contrast audit of a UI component library and fix all failures to meet WCAG AA standards.

## Requirements

### 1. Component Inventory
Build or audit these components for contrast:
- Buttons (primary, secondary, disabled, danger)
- Form inputs (default, focus, error, disabled)
- Navigation links (default, hover, active, visited)
- Cards with text content
- Badges and tags
- Alerts (success, error, warning, info)
- Tables with alternating rows
- Tooltips

### 2. Contrast Audit Checklist
For each component state, record:
- Foreground color and hex
- Background color and hex
- Computed contrast ratio
- WCAG AA pass/fail (normal and large text)
- WCAG AAA pass/fail (normal and large text)

### 3. Automated Validation
Create a JavaScript function that:
- Accepts a CSS color value
- Returns the contrast ratio against its computed background
- Reports pass/fail status for all WCAG levels

### 4. Color Palette Fixes
For any failing combinations:
- Generate alternative colors that pass AA minimum
- Provide at least 3 options per failing pair
- Show the adjusted palette with ratios

### 5. High Contrast Theme
Implement a separate high-contrast stylesheet that:
- Uses maximum contrast (black/white or dark/light extremes)
- Maintains all interactive state indicators
- Works with `prefers-contrast: more` media query
- Preserves layout and spacing

### 6. Documentation
Create a contrast report that includes:
- Summary statistics (pass rate, number of failures)
- Before/after comparison table
- Color palette with verified ratios
- Implementation notes for developers

## Deliverables
- `audit.html` - Component inventory with contrast data
- `fix.css` - Corrected stylesheet with accessible colors
- `high-contrast.css` - High contrast theme variant
- `report.md` - Complete contrast audit report

## Evaluation Criteria
- 100% of text meets WCAG AA (4.5:1)
- 100% of UI components meet 3:1 minimum
- Disabled states pass AA or provide justification
- High-contrast theme is a true alternative, not just color inversion
- Audit document is thorough and actionable
