# Mini Project: Sticky Notes Dashboard

## Objective
Build a dashboard interface that effectively uses all five CSS position values to create an interactive, visually appealing sticky notes application.

## Requirements

### Layout
- A fixed sidebar navigation (200px wide, full height)
- A main content area with the remaining width
- A fixed top header bar containing the app title and user avatar

### Features
1. **Sticky Note Cards**: Each note card should have:
   - A title area and content area
   - A pin/unpin button in the top-right corner (absolutely positioned)
   - A timestamp displayed at the bottom-right

2. **Add Note Button**: A fixed circular button in the bottom-right corner

3. **Category Headers**: Sticky headers for each category column (To-Do, In Progress, Done)

4. **Drag Preview**: When dragging a note, show an absolutely positioned preview that follows the cursor

5. **Scroll Behavior**: The sticky headers should stick to the top when scrolling within each column

### Technical Requirements
- Use `position: fixed` for the sidebar, header, and add button
- Use `position: sticky` for category headers within scrollable columns
- Use `position: relative` for note card containers
- Use `position: absolute` for the pin button, timestamp, and drag preview
- Use `z-index` to manage stacking properly (header > sidebar > columns > notes)
- Ensure no content is hidden behind fixed elements

### Styling
- Modern, clean design with shadows and rounded corners
- Color-coded priority levels (red=high, yellow=medium, green=low)
- Smooth transitions and hover effects
- Responsive minimum: 768px breakpoint

## Deliverables
- `index.html` - Complete dashboard page
- `style.css` - All styles with positioning demonstrated
- `script.js` - Basic interactivity (add/remove notes, toggle pin)

## Bonus Challenges
1. Add a fixed "Back to Top" button
2. Implement a modal for editing notes (fixed overlay + absolute close button)
3. Add tooltips (absolutely positioned) on hover for note actions
4. Make the sidebar collapsible with a toggle button (positioned fixed)

## Evaluation Criteria
- Correct usage of all 5 position values
- Proper stacking context management with z-index
- No content hidden behind fixed elements
- Smooth scrolling behavior with sticky headers
- Responsive layout adapts to smaller screens
- Code organization and comments
