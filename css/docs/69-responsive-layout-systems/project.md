# Mini Project: SaaS Landing Page with Dashboard Demo

## Objective
Build a SaaS product landing page that includes a demo dashboard section using responsive layout systems (Grid, Flexbox, Container Queries).

## Requirements

### Page Sections
1. **Navigation** - Logo, nav links, CTA button (Flexbox)
2. **Hero** - Headline, subtext, demo screenshot, CTA
3. **Features** - 6 feature cards in a responsive grid
4. **Dashboard Demo** - Showcase of the actual dashboard layout
5. **Pricing** - 3 pricing cards side by side
6. **Testimonials** - Quote cards with avatars
7. **Footer** - Multi-column link grid

### Layout System Usage
1. **CSS Grid**: Page structure (named areas), feature grid, pricing, footer
2. **Flexbox**: Navigation, card content alignment, testimonial layout
3. **Auto-fit/minmax**: Feature cards that need no media queries
4. **Container Queries**: Dashboard widget components that adapt
5. **Multi-column**: Testimonial text flowing

### Dashboard Demo Section
- Stats bar (3-4 metrics in flex row)
- Main chart area (spans 2 columns)
- Activity feed (sidebar)
- Table with recent transactions
- All dashboard widgets use container queries

### Responsive Breakpoints
- Mobile (< 768px): Single column, hamburger nav
- Tablet (768-1024px): 2 columns for features, sidebar demo
- Desktop (> 1024px): Full layout with max-width container

### Technical Requirements
- No CSS frameworks (pure CSS Grid + Flexbox)
- Use CSS custom properties for spacing and colors
- At least one CSS Grid named area pattern
- Container queries on dashboard widgets
- Print styles that simplify the layout

## Deliverables
- `index.html` with embedded CSS (or linked style.css)
- Placeholder content and charts (SVG or CSS)

## Bonus Challenges
- Add a dark/light theme toggle for the dashboard
- Implement a collapsible sidebar using CSS Grid
- Create CSS-only charts (bar chart, donut chart) for the dashboard
- Add scroll-triggered animations for feature cards
- Implement a theme switcher between light and dark dashboard

## Evaluation Criteria
- Grid + Flexbox used appropriately for each section
- Named grid areas used for main page layout
- Container queries used for dashboard widgets
- Responsive at all breakpoints without horizontal scroll
- Dashboard section works in both page and standalone contexts
- Code is clean with consistent spacing
