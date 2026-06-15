# Project: Responsive News Homepage

## Goal
Build a responsive news homepage layout that uses `auto-fit`, `minmax()`, and `grid-area` to create a layout that adapts from mobile to desktop without any media queries for the content grid, and minimal media queries for the overall layout structure.

## Requirements
1. **Overall page layout** (use media queries for this):
   - **Mobile** (< 768px): Single column — header, nav, main content, sidebar, footer
   - **Desktop** (≥ 768px): Left sidebar (200–250px), main content (flexible), right sidebar (150–200px)

2. **Featured stories grid** (NO media queries):
   - 1 featured hero story (spanning 2 columns, 2 rows)
   - 4 secondary stories
   - Use `repeat(auto-fit, minmax(300px, 1fr))` with dense packing

3. **Latest news ticker grid** (NO media queries):
   - Horizontal scrolling list of 6 news items
   - Use `grid-auto-flow: column` for horizontal layout

4. **Category sections** (NO media queries):
   - Sports, Tech, Business — each with 3–4 articles
   - Each category section uses `repeat(auto-fit, minmax(250px, 1fr))`

5. **Responsive nav**:
   - Desktop: horizontal nav links in the header
   - Mobile: hamburger menu (CSS-only or with toggled class)

## Content Structure
```
HEADER (logo + nav + search)
SIDEBAR LEFT (categories, trending topics)
MAIN
  ├── Featured Hero (big story, 2×2)
  ├── Secondary Stories (4 cards in auto-fit grid)
  ├── Sports Section (auto-fit grid, 3 articles)
  ├── Tech Section (auto-fit grid, 3 articles)
  └── Business Section (auto-fit grid, 3 articles)
SIDEBAR RIGHT (newsletter signup, popular posts)
FOOTER (links, copyright)
```

## Styling Requirements
- Modern news site look (clean, serif headlines, sans-serif body)
- Dark mode by default with light background on cards
- Category color coding (Sports=green, Tech=blue, Business=gold)
- Card hover effect (slight lift + shadow)
- Each card must have: headline, category badge, excerpt, date, read time

## Bonus Challenge
- Implement a "compact" mode toggle that changes `grid-auto-flow` from `row` to `dense`
- Show the difference in visual density

## Evaluation Criteria
- [ ] No horizontal overflow at any viewport width
- [ ] Content grid sections adjust column count automatically without media queries
- [ ] Overall layout (header/main/sidebar/footer) switches from stacked to 3-column at 768px
- [ ] Dense packing fills gaps in the featured area
- [ ] All cards are visually consistent
- [ ] Navigation is usable on mobile
- [ ] Footer spans full width
