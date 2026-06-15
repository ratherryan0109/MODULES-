# Mini Project: Overflow-Managed Content Platform

## Objective
Build a content platform (like a blog or documentation site) that demonstrates comprehensive overflow management across different sections and content types.

## Requirements

### Layout
- Fixed header with logo and navigation
- Sidebar with scrollable category list
- Main content area with long-form articles
- Right sidebar with "on this page" table of contents

### Overflow Challenges to Solve

1. **Header**: Fixed height, no overflow. But what if the nav has too many items?
   - Solution: Use horizontal overflow with scroll on navigation
   
2. **Left Sidebar**: Category list with many items
   - overflow-y: auto with custom scrollbar
   - overscroll-behavior: contain
   - Category names truncate with ellipsis if too long

3. **Main Content Area**:
   - Long articles with code blocks (code blocks need horizontal scroll)
   - Images must be responsive (max-width: 100%)
   - Long URLs in text must break properly
   - Blockquotes with long citations

4. **Right Sidebar (Table of Contents)**:
   - Sticky positioning
   - Long headings truncated with ellipsis
   - Smooth scroll behavior for anchor links

5. **Code Blocks**:
   - Horizontal scroll for long lines
   - Syntax highlighting background
   - Copy button (fixed positioned within block)

6. **Card Components**:
   - Cards with truncated titles
   - Cards with "read more" that expands content

### Technical Requirements
- Use overflow: hidden for image containers
- Use overflow: auto for scrollable areas
- Use overflow-wrap: break-word for long text
- Use text-overflow: ellipsis for truncation
- Custom scrollbar styling for all scrollable areas
- Smooth scroll behavior (scroll-behavior: smooth)
- Accessible scrollable regions (tabindex, ARIA labels)

## Deliverables
- `index.html` - Complete platform page
- `style.css` - All overflow management styles
- `script.js` - Copy button, smooth scroll, expand cards

## Bonus Challenges
1. Implement "scroll to top" button that appears after scrolling down
2. Add a reading progress bar at the top of the article
3. Create an infinite scroll list in the sidebar
4. Implement a lightbox for images (uses overflow: hidden on body)
5. Add a table with horizontal scroll on mobile

## Evaluation Criteria
- No horizontal overflow on page level
- Scrollable areas work correctly and are accessible
- Text truncation applied appropriately
- Custom scrollbars enhance the design
- Responsive images and text handling
- All overflow scenarios handled correctly
