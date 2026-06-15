# Mini Project: Personal Profile Card Layout

## Objective
Create a personal profile card section using Flexbox to arrange avatar, name, bio, and social links in a responsive layout.

## Requirements
1. Use `display: flex` on the profile card container
2. Include at least 3 profile cards in a row
3. Each card should contain:
   - Avatar image (use placeholder images)
   - Name (heading)
   - Short bio (paragraph)
   - Social media links (3-4 links)
4. Use proper spacing with the `gap` property
5. Make the layout responsive (cards stack on mobile)

## Specifications

### Desktop Layout
```
┌─────────────┐ ┌─────────────┐ ┌─────────────┐
│  Avatar     │ │  Avatar     │ │  Avatar     │
│  Name       │ │  Name       │ │  Name       │
│  Bio        │ │  Bio        │ │  Bio        │
│  [links]    │ │  [links]    │ │  [links]    │
└─────────────┘ └─────────────┘ └─────────────┘
```

### Mobile Layout (stacked)
```
┌─────────────┐
│  Avatar     │
│  Name       │
│  Bio        │
│  [links]    │
└─────────────┘
┌─────────────┐
│  ...        │
└─────────────┘
```

## Bonus Challenges
- Add hover effects on cards
- Use `inline-flex` for the social links row
- Add a subtle box-shadow and border-radius

## Evaluation Criteria
- Correct use of display: flex
- Proper spacing and alignment
- Responsive behavior
- Clean, readable code
- Working demo
