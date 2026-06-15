# Mini Project: Accessible Dashboard Color System

## Objective
Build a WCAG AA-compliant dashboard UI component that uses an accessible color system with multiple visual indicators for all information states.

## Requirements

### 1. Color Palette
- Create a CSS custom property system with `oklch()` colors
- Minimum 6 colors: primary, secondary, success, error, warning, info
- Each color must have a paired text/background variant
- All color pairs must pass WCAG AA (4.5:1 for normal text)

### 2. Status Indicators Component
- Build a status badge system (Online, Offline, Away, Busy)
- Each status must use: color + icon (Unicode) + text label
- Badges must maintain contrast on any background

### 3. Data Cards Component
- Create 4 data cards showing key metrics
- Each card must use color, an icon, and a text description
- Cards must include hover and focus-visible states

### 4. Form Validation
- Build a login form with email and password fields
- Error states must use: colored border + icon + text message
- Use `aria-describedby` and `role="alert"` for accessibility
- Include success states for valid fields

### 5. Responsive & Accessibility
- Support `prefers-contrast: high` media query
- Support `forced-colors: active` media query
- All interactive elements must have visible focus indicators
- Test with grayscale simulation

### 6. Theme Support
- Implement light and dark mode using `prefers-color-scheme`
- Both themes must maintain WCAG AA compliance

## Deliverables
- `index.html` - Complete dashboard component
- `styles.css` - Accessible color system with all custom properties
- `README.md` - Document your design decisions and contrast ratios

## Evaluation Criteria
- All color pairs meet WCAG AA minimum (4.5:1)
- No information conveyed by color alone
- Focus indicators visible on all interactive elements
- Forced colors mode does not break layout
- Light and dark themes both accessible
- Semantic HTML with proper ARIA attributes
