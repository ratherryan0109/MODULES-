# Project: Screen Reader-Optimized Web Application

## Objective
Build a complex web application (e.g., email client, project management tool, or e-commerce dashboard) that is fully optimized for screen reader users. The application must be navigable and fully functional using only a screen reader, requiring no visual feedback.

## Requirements

### Core Functionality
Build an application with at least 5 of these features:
1. **Dynamic list with filtering** (e.g., email inbox with search/filter)
2. **Form with validation** (multi-field form with accessible errors)
3. **Modal dialog** (confirmations, forms in modals)
4. **Accordion or expandable sections** (settings panels)
5. **Sortable data table** (with sort indicators)
6. **Drag-and-drop** (with keyboard alternative)
7. **Tab panel** (configuration tabs)
8. **Autocomplete search** (live filtering)
9. **Notification system** (toast notifications)
10. **Progress indicator** (async operations)

### Screen Reader Requirements
- All components navigable using NVDA and VoiceOver
- All dynamic content changes announced via appropriate live regions
- Focus management after all user interactions and content updates
- No ambiguous or unlabeled interactive elements
- Proper heading hierarchy throughout the application
- All status messages use role="status" or role="alert" correctly
- Navigation menus announce current page/location

### Testing Requirements
Create a detailed test script:
1. Step-by-step instructions for screen reader users
2. Expected announcements at each step
3. Verification checkpoints
4. Test with both NVDA (Windows/Chrome) and VoiceOver (Mac/Safari)
5. Document any differences between screen readers
6. Fix issues found during testing

### Deliverables
- Complete application source code
- Screen reader test script with expected announcements
- Testing report documenting issues and resolutions
- README with screen reader optimization notes
- Quick reference guide for maintaining accessibility

### Evaluation Criteria
- Full keyboard operability (25%)
- Correct screen reader announcements (25%)
- Proper focus management (20%)
- Appropriate live region usage (15%)
- Testing documentation quality (15%)

## Stretch Goals
- Implement WAI-ARIA Authoring Practices for all widgets
- Achieve zero axe-core violations
- Add speech input support
- Implement high contrast mode support
- Create automated screen reader tests using axe-core
- Add reduced motion support
