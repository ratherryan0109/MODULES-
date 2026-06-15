# Mini Project: Magazine-Style Article Page

## Objective
Build a magazine-style article page that demonstrates the proper use of CSS floats for text wrapping, pull quotes, drop caps, and image placement within long-form content.

## Requirements

### Layout
- Fixed header with magazine title and navigation
- Article content area (max-width: 800px, centered)
- Sidebar with related articles (floated right)

### Float Components

1. **Featured Image** (float: left)
   - Floated to the left of the first paragraph
   - Rounded corners with shadow
   - Caption below the image
   - Margin on right and bottom for text spacing

2. **Pull Quote** (float: right)
   - Floated to the right within the article body
   - Distinctive style (border-left, background, larger font)
   - Attribution line below the quote
   - Responsive: full width on mobile

3. **Drop Cap** (float: left on ::first-letter)
   - First letter of the article should be enlarged
   - Proper line-height adjustment
   - Different color or font weight

4. **Author Image** (float: left in author bio)
   - Small circular image
   - Bio text wraps around it

5. **Inline Images** (float: left or right)
   - At least two small inline images within text
   - One left, one right

6. **Related Articles Sidebar** (float: right)
   - 3 related article links
   - Thumbnails floated left within each item

### Technical Requirements
- Use clearfix on all parent containers
- No Flexbox or Grid for layout (deliberately use floats)
- Responsive: single column at 768px breakpoint
- Print-friendly styles

## Deliverables
- `index.html` - Complete magazine article page
- `style.css` - All styles
- `print.css` - Print-specific styles

## Bonus Challenges
1. Add a floated table of contents on the left
2. Implement a newsletter signup form that uses float for layout
3. Add social share buttons (floated left, fixed on scroll)
4. Create a comments section with floated avatar images
5. Add a "related posts" grid using float

## Evaluation Criteria
- Correct float usage for all text-wrapping elements
- All parents properly cleared
- Pull quote and images wrap text correctly
- Drop cap renders properly
- Responsive design works at all breakpoints
- No layout issues with floated elements
