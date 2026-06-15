# Mini Project: Inline-Block Portfolio Gallery

## Objective
Build a photo portfolio gallery website that exclusively uses `display: inline-block` for layout. No floats, no Flexbox, no Grid. This will reinforce understanding of inline-block behavior, whitespace management, and vertical alignment.

## Requirements

### Layout
- **Header**: Site title with tagline (centered with text-align)
- **Navigation**: Horizontal menu using inline-block list items
- **Filter Buttons**: Inline-block button group with no gaps (font-size: 0)
- **Gallery Grid**: 3-column grid of portfolio items using inline-block
- **Item Detail**: Expanded view with inline-block image + description
- **Footer**: Centered text with inline-block social links

### Gallery Features
- Portfolio items displayed in a grid
- Each item: thumbnail image, title, category badge
- Items centered in the container
- Items wrap to next row when container is narrow
- Hover effect: slight scale transform
- Category badge positioned with inline-block

### Technical Requirements
- NO floats, NO Flexbox, NO Grid
- Use `font-size: 0` technique where needed
- Use `vertical-align: top` on all inline-block items
- Responsive: 3 cols → 2 cols (768px) → 1 col (480px)
- All elements use inline-block for horizontal positioning
- Remove whitespace gaps properly

### Whitepace Gap Handling
Use at least 2 different techniques:
- font-size: 0 on some parents
- HTML comments between elements in others
- Demonstrate you understand both methods

## Deliverables
- `index.html` - Complete portfolio page
- `style.css` - All styles
- `images/` - Placeholder images (use colored divs or SVG)

## Bonus Challenges
1. Add a lightbox overlay that opens on click (uses inline-block for thumbnail grid)
2. Create an "about me" section with avatar (inline-block) and text
3. Add testimonial cards in an inline-block row
4. Implement a skill bar section using inline-block for the bar fill
5. Create a pricing table with inline-block columns

## Evaluation Criteria
- No floats, Flexbox, or Grid used
- Whitespace gaps properly managed throughout
- Vertical alignment correct on all elements
- Responsive breakpoints work correctly
- Gallery items wrap naturally
- No clearfix needed anywhere
- Code is clean and well-organized
