# Mini Project: Alignment-Focused Landing Page

## Objective
Build a landing page that demonstrates mastery of CSS alignment techniques. Each section should use a different alignment method, showcasing when and why each approach is appropriate.

## Requirements

### Sections

1. **Hero Section** (Flexbox centering)
   - Full viewport height
   - Centered content (both axes) using Flexbox
   - Background image/gradient
   - Headline, subtext, and CTA button

2. **Features Grid** (Grid centering)
   - 3-column grid
   - Each feature card centered within its cell using `place-items`
   - Icons, titles, and descriptions

3. **Stats Bar** (Flexbox space-between)
   - Horizontal row of statistics
   - "Space-between" distribution
   - Centered numbers with labels below

4. **Testimonials** (Inline-block centering)
   - Multiple testimonial cards
   - Centered using text-align on parent
   - Avatar (absolute centered) and text

5. **Pricing Cards** (Absolute centering for labels)
   - Three pricing cards in a row
   - "Popular" badge absolutely centered at top of middle card
   - Card content centered with Flexbox

6. **Footer** (Mixed alignment)
   - Logo left, links center, social right (Flexbox)
   - Copyright centered below

### Alignment Techniques to Include
- `text-align: center` for inline content
- `margin: 0 auto` for block elements
- `vertical-align` for inline-block
- Flexbox (`align-items`, `justify-content`, `space-between`)
- Grid (`place-items`, `place-content`)
- Absolute positioning with `transform` for centering
- Line-height for single-line vertical centering

### Technical Requirements
- No floats allowed
- Each section should use a DIFFERENT alignment method
- Comment each section with the alignment technique used
- Responsive: single column on mobile
- Smooth scroll between sections

## Deliverables
- `index.html` - Complete landing page
- `style.css` - All styles with alignment comments

## Bonus Challenges
1. Add a sticky header with centered logo and right-aligned nav (justify-content: space-between)
2. Create a modal that uses absolute centering
3. Add animated counters that are centered in their containers
4. Implement a multi-level dropdown with proper alignment
5. Add a "back to top" button centered at the bottom

## Evaluation Criteria
- Each section uses a different alignment method appropriately
- Content is properly centered in all viewport sizes
- No misaligned content
- Responsive breakpoints maintain proper alignment
- Code is commented with alignment methods used
- All alignment edge cases handled (long text, images, etc.)
