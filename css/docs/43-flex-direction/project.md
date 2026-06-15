# Mini Project: Vertical Sidebar Navigation

## Objective
Create a vertical sidebar navigation menu using `flex-direction: column` that also has a horizontal sub-menu.

## Requirements
1. Main sidebar container uses `flex-direction: column`
2. Include 5 navigation items: Dashboard, Profile, Settings, Help, Logout
3. Each nav item has an icon (emoji) and text
4. Bottom section (Help, Logout) should be pushed to the bottom
5. Sub-menu items within a section use `flex-direction: row`

## Layout
```
┌─────────────┐
│ 📊 Dashboard│
│ 👤 Profile  │
│ ⚙️ Settings │
│             │
│ ❓ Help     │
│ 🚪 Logout   │
└─────────────┘
```

## Specifications
- Sidebar width: 250px
- Full viewport height
- Dark background (#333) with white text
- Hover effect: lighter background on items
- Active state: highlighted item
- Gap between items: 0.5rem
- Push bottom items using `margin-top: auto`

## Bonus Challenges
- Add collapsible sub-menus
- Make the sidebar responsive (collapses to icon-only on mobile)
- Add smooth hover transitions

## Evaluation Criteria
- Correct use of flex-direction: column
- Bottom items pushed to the bottom
- Hover and active states
- Clean code and styling
