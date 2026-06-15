# Mini Project: Pseudo-element-Powered UI Kit

## Objective
Build a UI component library that relies entirely on pseudo-elements for decorative and functional styling. The goal is to create a reusable set of components that use no extra HTML elements for visual enhancements.

## Requirements

### Components (all must use pseudo-elements)

1. **Buttons**
   - Primary button with arrow icon via ::after
   - Secondary button with decorative border effect via ::before/::after
   - Icon button with tooltip on hover using ::before
   - Button group with dividers using ::after between items

2. **Cards**
   - Card with decorative top border using ::before
   - Card with image overlay on hover using ::before
   - Card with badge/corner ribbon using ::after
   - Card with gradient overlay on text via ::after

3. **Form Elements**
   - Custom checkbox with ::before (box) and ::after (checkmark)
   - Custom radio button with ::before (outer) and ::after (dot)
   - Toggle switch using ::before for the knob
   - Input with floating label animation using ::before/::after

4. **Navigation**
   - Breadcrumb with ::after separators (not on last)
   - Pagination with ::before/::after for prev/next arrows
   - Tab bar with active indicator using ::after
   - Sidebar menu with expand/collapse icons using ::after

5. **Content Elements**
   - Blockquote with decorative quotes (::before, ::after)
   - Drop cap on article text (::first-letter)
   - Custom list markers (::marker)
   - Code snippet with copy icon (::after)
   - Progress bar (::before for fill)

6. **Utility Elements**
   - Tooltip component (::before for text, ::after for arrow)
   - Notification badge (::after)
   - Star rating (::before with content: '★')
   - Loading spinner (::before/::after for segments)

### Technical Requirements
- NO extra divs or spans for visual decoration
- All decorative elements must use pseudo-elements
- Use `content: attr()` for dynamic content where appropriate
- Use absolute/relative positioning for pseudo-element placement
- All components must be responsive
- CSS custom properties for theming

## Deliverables
- `index.html` - Component showcase page
- `style.css` - All component styles with pseudo-elements
- `theme.css` - CSS custom properties for theming

## Bonus Challenges
1. Create a CSS-only hamburger menu icon using ::before, ::after, and the element itself
2. Implement a progress stepper with ::before lines between steps
3. Add CSS counters for auto-numbering sections
4. Create a timeline with ::before dots and lines
5. Build an accordion using ::before and ::after for +/- icons

## Evaluation Criteria
- All decorative elements use pseudo-elements (no extra HTML)
- ::before and ::after used appropriately
- ::first-letter, ::selection, ::placeholder, ::marker used where relevant
- Content property used correctly (empty for decorative, text for functional)
- Tooltips and badges work without JavaScript
- Components are reusable with clear class names
- Accessible (aria-hidden on decorative pseudo-elements)
