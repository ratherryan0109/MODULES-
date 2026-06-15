# Mini Project: Interactive Dashboard with Pseudo-classes

## Objective
Build an interactive dashboard that extensively uses CSS pseudo-classes for interactivity, validation, structural styling, and state management without JavaScript.

## Requirements

### Dashboard Sections

1. **Sidebar Navigation** (pseudo-classes for states)
   - Current page indicator using class with `:not()`
   - Collapsible submenus using `:hover` with child combinator
   - Focus styles for keyboard navigation
   - Tooltip on hover using `::after` with `:hover`

2. **Header** (dynamic pseudo-classes)
   - Notification bell with badge count
   - User avatar dropdown on hover
   - Search input with focus and placeholder styling

3. **Main Content - Data Table** (structural pseudo-classes)
   - Striped rows using `:nth-child(odd/even)`
   - Hover highlight on rows
   - First column styled differently (first-child)
   - Sorted header indicators using `:hover`
   - Editable cells with `:valid/:invalid`

4. **Main Content - Cards Grid** (structural + negation)
   - Cards in a grid
   - First card featured (larger)
   - Last card different border
   - Cards except first use `:not(:first-child)`
   - nth-child(3n) for different accent color

5. **Form Section** (form pseudo-classes)
   - Real-time validation feedback
   - Required field indicators using `:required`
   - Checkbox/radio styling using `:checked`
   - Disabled submit button using `:disabled`
   - Focus states on all inputs

6. **Footer** (structural)
   - Alternating link list items
   - First link: logo/home
   - Last link: copyright

### Required Pseudo-classes to Include
- `:hover` (multiple uses)
- `:focus` / `:focus-visible`
- `:active`
- `:first-child`, `:last-child`
- `:nth-child()`, `:nth-of-type()`
- `:not()`
- `:valid`, `:invalid`, `:required`
- `:checked`
- `:disabled`, `:enabled`
- `:empty`
- `:target` (for section navigation)

## Deliverables
- `index.html` - Complete dashboard
- `style.css` - All pseudo-class-based styles

## Bonus Challenges
1. Use `:has()` to style parent rows containing checked checkboxes
2. Add a theme switcher using `:target` (different sections show different themes)
3. Create an animated progress bar using `:checked` with sibling combinators
4. Implement a tooltip system using `:hover` and `::after`
5. Add a notification counter that appears/disappears with `:empty`

## Evaluation Criteria
- At least 15 different pseudo-classes used
- All form states properly styled
- Structural pseudo-classes used for layout
- LVHA order followed for all links
- :focus/:focus-visible provided for all interactive elements
- No JavaScript for interactivity
- Responsive design maintained
