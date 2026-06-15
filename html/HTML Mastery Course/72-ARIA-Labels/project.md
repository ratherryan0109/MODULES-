# Project: ARIA-Enhanced Web Application

## Objective
Build a feature-rich web application (e.g., a file manager, dashboard, or email client) that demonstrates proper ARIA implementation across multiple interactive components. The application must be fully keyboard accessible and pass screen reader testing.

## Requirements

### Core Components (All Must Be Accessible)
1. **Navigation**: Implement a sidebar with nested tree navigation using role="tree", role="treeitem", aria-expanded, and proper keyboard navigation
2. **Toolbar**: Create a toolbar with buttons using role="toolbar", aria-label, and roving tabindex
3. **Data Table**: Build a sortable, selectable grid with role="grid", aria-sort on columns, and row selection with aria-selected
4. **Modal Dialog**: Implement role="dialog", aria-modal, focus trapping, Escape to close, and return focus
5. **Tabs**: Tab panel with role="tablist", role="tab", role="tabpanel", arrow key navigation
6. **Autocomplete**: Custom combobox with role="combobox", listbox filtering, aria-activedescendant
7. **Notifications**: Toast notifications using aria-live="polite" with appropriate roles
8. **Form**: Accessible form with validation, aria-invalid, aria-describedby for errors, role="alert" for messages
9. **Menu**: Dropdown menus using role="menu", role="menuitem", aria-haspopup
10. **Progress Indicator**: Upload progress with role="progressbar"

### Requirements
- No `<div>` or `<span>` click handlers - use `<button>` or proper ARIA widget roles
- All interactive elements keyboard accessible
- Focus indicators visible at all times
- Screen reader can operate all features
- Roving tabindex pattern for widget groups
- Proper heading hierarchy (h1-h6)
- All images and icons have appropriate alt text or are hidden with aria-hidden
- Form validation with both visual and programmatic error indication

### Deliverables
- HTML/CSS/JS source files
- README documenting ARIA patterns used
- Accessibility testing report with screen reader results
- WAI-ARIA Authoring Practices compliance checklist

### Evaluation Criteria
- Correct ARIA roles and attributes on all components (30%)
- Full keyboard operability with documented focus patterns (25%)
- Proper focus management and navigation (20%)
- Screen reader test passes (15%)
- No ARIA misuse or redundant ARIA (10%)
