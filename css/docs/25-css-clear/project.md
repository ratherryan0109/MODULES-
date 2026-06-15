# Mini Project: Float + Clear Magazine Layout

## Objective
Build a complete magazine-style layout that relies entirely on floats and clears for positioning. This project reinforces understanding of how float and clear work together in a real-world layout.

## Requirements

### Layout Structure
1. **Header** - Full width, no floats
2. **Navigation Bar** - Horizontal nav using float: left on list items
3. **Featured Hero Section** - Large image float: left with text wrap, clear: both below
4. **Three-Column Story Grid** - Stories floated left, clear after every 3rd item
5. **Two-Column Content + Sidebar** - Content float: left, sidebar float: right
6. **Related Articles Grid** - 4 articles in 2x2 grid using float
7. **Footer** - clear: both, full width

### Clear Requirements
- Use clearfix on ALL parent containers
- Use clear: both for section breaks
- Use empty divs with clear: both for row breaks in grids
- Footer must use clear: both
- Demonstrate the difference between clearfix (parent) and clear (child)

### Content Types
- Images with text wrapping
- Pull quotes (floated right)
- Drop caps on article text
- Related article thumbnails (floated left within each article card)

### Technical Requirements
- NO Flexbox or Grid (deliberately use floats only)
- Responsive: single column at 768px
- Use `display: flow-root` or overflow clearfix on at least one element
- Include a section that demonstrates common float bug (parent collapse) showing both broken and fixed versions

## Deliverables
- `index.html` - Complete page
- `style.css` - All styles with float/clear
- `notes.md` - Explanation of each clear/clearfix usage

## Bonus Challenges
1. Add a comments section with floated avatar images and cleared comment text
2. Create a newsletter signup form with floated layout
3. Add social media share buttons (floated left, sticky)
4. Implement a "magazine cover" style section with overlapping absolute elements
5. Create a print stylesheet that removes unnecessary clears

## Evaluation Criteria
- All floats properly cleared
- Clearfix used on all float parents
- Row breaks work correctly in grids
- No unwanted overlap of content
- Responsive to mobile (floats become blocks)
- Drop cap and pull quote work correctly
- Understanding shown in notes.md
