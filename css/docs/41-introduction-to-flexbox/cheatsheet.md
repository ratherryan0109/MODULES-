# Flexbox Introduction - Cheatsheet

## Creating a Flex Container

| Property | Value | Description |
|----------|-------|-------------|
| `display` | `flex` | Block-level flex container |
| `display` | `inline-flex` | Inline-level flex container |

## Key Terminology

| Term | Definition |
|------|------------|
| Flex Container | Parent element with `display: flex` |
| Flex Items | Direct children of the flex container |
| Main Axis | Primary axis (default: horizontal) |
| Cross Axis | Perpendicular axis (default: vertical) |
| Main Start | Beginning of the main axis |
| Main End | End of the main axis |
| Cross Start | Beginning of the cross axis |
| Cross End | End of the cross axis |

## Flex Properties Overview

### Container Properties
```
flex-direction
flex-wrap
flex-flow
justify-content
align-items
align-content
gap
```

### Item Properties
```
order
flex-grow
flex-shrink
flex-basis
flex (shorthand)
align-self
```

## Basic Setup
```css
.container {
  display: flex; /* or inline-flex */
}
```

## One-dimensional Layout
```
Flexbox works in ONE direction at a time:
→ Row (default)
↓ Column
```

## Block vs Flex vs Inline-Flex

| display | Container Behavior | Children Layout |
|---------|-------------------|-----------------|
| `block` | Full width, new line | Stack vertically |
| `flex` | Full width, new line | Flex row (default) |
| `inline-flex` | Shrink-to-fit, inline | Flex row (default) |

## Common Use Cases
- Navigation bars
- Centering content
- Equal height columns
- Distributing space
- Reordering elements visually
