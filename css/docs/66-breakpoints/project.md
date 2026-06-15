# Mini Project: Responsive News Magazine Layout

## Objective
Build a responsive news magazine homepage with content-based breakpoints that adapts from mobile to large desktop.

## Requirements

### Layout Structure
- **Breaking news ticker** at top
- **Header** with logo, date, and navigation
- **Featured article** with large hero image
- **Article grid** with mixed sizes (some wide, some tall)
- **Sidebar** with trending topics, ads, newsletter signup
- **Footer** with links and copyright

### Breakpoint Specifications
Use only 3 content-based breakpoints (not device-based):

| Breakpoint | Layout Change |
|------------|---------------|
| Base (mobile) | Single column, stacked |
| 1st breakpoint | 2-column grid for articles |
| 2nd breakpoint | Sidebar appears, 3-column article grid |
| 3rd breakpoint | Featured article gets wider, max container width |

Identify the exact pixel values yourself based on content behavior.

### Content-Based Rules
- Navigation: Hamburger → Horizontal links
- Featured article: Stacked → Text alongside image
- Article grid: 1 col → 2 col → 3 col (some spanning 2)
- Sidebar: Below content → Right column
- Footer: Stacked → 3-column grid

### Technical Requirements
1. CSS custom properties for breakpoint values (naming: --bp-*)
2. Comment each breakpoint explaining WHY it exists
3. Use auto-fit/minmax where possible to reduce breakpoint needs
4. Demo page showing the breakpoint indicator
5. No CSS frameworks

## Deliverables
- `index.html` - the magazine homepage
- `style.css` - responsive stylesheet

## Bonus Challenges
- Implement a sticky sidebar using CSS position: sticky
- Add a "dark mode" that works at all breakpoints
- Create a print stylesheet that removes sidebar and ads
- Add CSS Grid named areas for the main layout
- Include a scroll-snap carousel for featured articles

## Evaluation Criteria
- All 3 breakpoints are content-based (document why each was chosen)
- Layout works at ALL widths, not just breakpoints
- Text is readable without zooming on mobile
- No horizontal scroll at any width
- Lighthouse score > 85 mobile, > 90 desktop
- CSS is clean with documented breakpoints
