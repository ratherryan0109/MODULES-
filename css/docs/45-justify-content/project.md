# Mini Project: Flexible Navigation Header

## Objective
Build a responsive website header/navigation bar using justify-content for proper spacing of logo, navigation links, and action buttons.

## Requirements
1. Header with logo (left), nav links (center or right), action button (right)
2. Use `justify-content: space-between` for the main layout
3. Nested flex containers for nav links using `gap` and `justify-content`
4. Responsive: on mobile (<768px), stack items vertically
5. Sticky header on scroll

## Layout Diagram
```
Desktop:
┌─────────────────────────────────────────────┐
│ [Logo]     Home About Services Contact  [Btn]│
└─────────────────────────────────────────────┘

Mobile:
┌─────────────────────┐
│ [Logo]              │
│ Home About Services │
│ Contact             │
│ [Button]            │
└─────────────────────┘
```

## Specifications
- Header background: dark (#222), text: white
- Logo on left, links in center/right area, button far right
- Use `space-between` for main header
- Nav links use `gap: 1.5rem`
- Button with distinct color (#e94560)
- Sticky top: `position: sticky; top: 0;`

## Bonus Challenges
- Add dropdown menus on hover
- Animate hamburger menu on mobile
- Add active/current page indicator

## Evaluation Criteria
- Correct use of justify-content
- Responsive behavior
- Proper nesting of flex containers
- Visual polish
- Sticky functionality
