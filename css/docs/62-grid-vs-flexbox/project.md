# Project: SaaS Dashboard — Grid Outside, Flexbox Inside

## Goal
Build a full SaaS analytics dashboard that demonstrates the "Grid outside, Flexbox inside" pattern. The project must intentionally use Grid for all layout-level decisions and Flexbox for all component-internal layouts.

## Requirements

### Layout (use Grid)
```
┌──────────────────────────────────────────────┐
│  HEADER (logo, search, user menu, notifs)     │
├────────┬─────────────────────┬───────────────┤
│        │                     │               │
│ SIDEBAR│   MAIN CONTENT      │ RIGHT SIDEBAR │
│        │   (stats, charts,   │ (activity     │
│ Nav    │    table)           │  feed,        │
│ Links  │                     │  tasks)       │
│        │                     │               │
├────────┴─────────────────────┴───────────────┤
│  FOOTER (links, copyright)                    │
└──────────────────────────────────────────────┘
```

1. **Header** — Grid row at top, spans full width
2. **Sidebar** — Grid column 1, 220px min, 260px max
3. **Main content** — Grid column 2, flexible (1fr)
4. **Right sidebar** — Grid column 3, 240px fixed
5. **Footer** — Grid row at bottom, spans full width
6. **Responsive**: At 900px → sidebar collapses to icon-only; at 600px → everything stacks

### Components (use Flexbox internally)
1. **Header items**: Logo + search bar + user menu + notifications — Flexbox row layout
2. **Sidebar nav**: Vertical list of links with icons — Flexbox column
3. **Stat cards grid**: 4 stats (Revenue, Users, Orders, Growth) — Grid with auto-fit
4. **Each stat card**: Flexbox column (title, value, trend indicator)
5. **Activity feed**: Flexbox column with feed items, each item is a Flexbox row
6. **Tasks list**: Flexbox column with checkbox + text rows
7. **Footer**: Flexbox row, space-between for links + copyright

### Styling Requirements
- Dark theme (background #0f0f23, cards #1a1a2e, elevated cards #16213e)
- Accent color: #4ecdc4 (teal) for interactive elements
- Stat cards with value numbers in large bold text
- Hover states on sidebar links and stat cards
- Icons (use emoji or unicode — no icon library required)
- Smooth transitions on hover states (200ms ease)

### Data (use static mock data)
- Stats: Revenue $48,290 (+14%), Users 2,847 (+8%), Orders 643 (+22%), Growth 12.4% (-2%)
- Activity feed: 5 items with different timestamps
- Tasks: 5 items with different statuses (pending, in-progress, done)
- Table: 5 rows of sample data (Name, Status, Date, Amount)

### Bonus Challenge
- Add a toggle that switches the sidebar from Grid-area layout to a Flexbox overlay sidebar
- Document the difference in behavior

## Evaluation Criteria
- [ ] Grid is used for all layout-level decisions (page structure, sections)
- [ ] Flexbox is used for all component-level decisions (card internals, nav, toolbar)
- [ ] No Flexbox page layout and no Grid component internals
- [ ] Responsive at 900px and 600px breakpoints
- [ ] All data is mock but realistic
- [ ] Hover states and transitions are smooth
- [ ] Dark theme is consistent throughout
- [ ] Code demonstrates understanding of when to use each tool
