# Mini Project: Accessible Component Library with Focus Management

## Objective
Build a reusable component library with complete, accessible focus management across all interactive components.

## Requirements

### 1. Core Components
Build the following components with complete focus support:

**Navigation**
- Horizontal nav bar with skip-to-content link
- Dropdown menus (open/close with Enter/Space/Escape)
- Hamburger menu for mobile (focus management on open/close)

**Interactive Controls**
- Custom buttons (primary, secondary, icon-only)
- Custom checkboxes and radio buttons
- Custom select/combobox
- Toggle switch
- Slider/Range input

**Composite Widgets**
- Tab panel with roving tabindex
- Accordion with arrow key navigation
- Modal dialog with focus trap
- Tooltip (show/hide on focus)

### 2. Focus Style System
- CSS custom properties for focus ring configuration
- `:focus-visible` based approach
- Large enough (2px minimum) with sufficient contrast
- Different styles for different component types
- Support for forced colors mode
- Dark mode compatible focus indicators

### 3. Focus Management (JavaScript)
- Programmatic focus on component mount/open
- Focus trap for modals
- Return focus to trigger on close
- Roving tabindex for tab panels and toolbars
- Arrow key navigation for menu items
- Escape key handling for overlays

### 4. Testing
- Tab through all components in order
- Verify all interactive elements receive focus
- Test with screen reader
- Test in forced colors mode
- Test with reduced motion (no focus animations)
- Document any known issues

### 5. Documentation
- Component markup patterns
- Keyboard interaction table for each component
- Focus style customization guide
- Testing checklist

## Deliverables
- `components.html` - All components with working focus management
- `focus-styles.css` - Reusable focus style system
- `focus-utils.js` - JavaScript focus management utilities
- `documentation.md` - Usage guide and testing results

## Evaluation Criteria
- Every interactive element has visible focus indicator
- No focus traps without escape mechanisms
- Proper tab order (logical, matches visual order)
- Custom widgets follow ARIA Authoring Practices
- Focus indicators meet WCAG 2.2 appearance requirements
- All keyboard interactions work correctly
