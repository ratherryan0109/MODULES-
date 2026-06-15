# CSS Navigation Bar

## Module Overview
Learn to create horizontal and vertical navigation bars using CSS, including hover effects, active states, and responsive patterns. Navigation bars are one of the most common UI components on the web, and mastering their creation is essential for building usable, accessible websites.

## Introduction
A navigation bar (navbar) is the primary way users navigate through a website. CSS navigation bars are typically built using semantic HTML (`<nav>` with `<ul>` and `<li>`) styled with CSS to create horizontal or vertical layouts. This module covers both approaches, along with interactive states, responsive design, and accessibility best practices.

## Learning Objectives
1. Build horizontal and vertical navigation bars with `<ul>` / `<li>` structure
2. Style links with hover, active, and current-page states
3. Create responsive navigation that adapts to screen size
4. Understand accessibility best practices for navigation
5. Implement dropdown menus within navigation bars
6. Create sticky/fixed navigation bars
7. Style active/current page indicators
8. Use Flexbox for modern horizontal navigation layout
9. Implement hamburger menus for mobile navigation
10. Test navigation with keyboard and screen reader navigation

## Theory

### Semantic HTML Structure
Navigation should use the `<nav>` element, which is a semantic HTML5 landmark that helps screen readers and search engines identify the primary navigation region. Inside `<nav>`, an unordered list (`<ul>`) with list items (`<li>`) containing anchor links (`<a>`) provides the best structure for navigation. This pattern ensures that:
- Screen readers announce the number of items in the list
- Keyboard navigation works out of the box (Tab keys move between links)
- The structure is understandable even without CSS

### Vertical vs Horizontal Navigation
Vertical navigation bars stack list items naturally (block-level). They are common in sidebars, dashboard layouts, and documentation sites. Horizontal navigation bars require CSS to make list items display side by side — traditionally via `float: left` or `display: inline-block`, and modernly via `display: flex`.

### Styling States
Navigation links have several interactive states that should be styled distinctly:
- **Default state**: Clean, identifiable as links
- **:hover**: Visual feedback on mouse over (background color change, underline)
- **:focus**: Keyboard focus indicator (outline or visible change)
- **:active**: During click (brief visual feedback)
- **.active class**: Indicates the current page (not automatic — requires manual class assignment or server-side logic)

## Key Concepts

### HTML Structure
- Navigation uses `<nav>` element with an unordered list
- Each list item contains an `<a>` link
- Semantic HTML improves accessibility and SEO
- Use `aria-current="page"` on the current page link for screen reader support

### Vertical Nav
- List items stack naturally (block-level)
- Full-width clickable area via `display: block` on links
- Common for sidebars and mobile menus

### Horizontal Nav
- List items displayed inline via `display: inline-block` or `flex`
- `float` (legacy) or `flexbox` (modern) for layout
- Flexbox provides better alignment and spacing control

### Styling States
- `:hover` — visual feedback on mouse over
- `:focus` — keyboard focus indicator
- `:active` — during click
- `.active` class — indicates current page
- `aria-current="page"` — semantic current page indicator

## Code Examples

### Horizontal Nav with Flexbox
```css
nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  background: #333;
}
nav li a {
  display: block;
  color: #fff;
  padding: 14px 20px;
  text-decoration: none;
  transition: background 0.3s;
}
nav li a:hover {
  background: #575757;
}
nav li a:focus {
  outline: 2px solid #fff;
  outline-offset: -2px;
}
nav li a.active {
  background: #04aa6d;
}
```

### Vertical Nav
```css
.vertical-nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  width: 200px;
  background: #f1f1f1;
}
.vertical-nav li a {
  display: block;
  color: #000;
  padding: 12px 16px;
  text-decoration: none;
}
.vertical-nav li a:hover {
  background: #ddd;
}
.vertical-nav li a.active {
  background: #04aa6d;
  color: white;
}
```

### Sticky Navigation
```css
nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: #333;
}
/* Add padding to main content to prevent overlap */
main {
  padding-top: 60px; /* Adjust to navbar height */
}
```

### Responsive Hamburger Menu (CSS Only)
```css
.menu-toggle {
  display: none; /* Hidden on desktop */
}
@media (max-width: 768px) {
  nav ul {
    flex-direction: column;
    display: none; /* Hidden by default on mobile */
  }
  .menu-toggle:checked ~ ul {
    display: flex; /* Show when checkbox is checked */
  }
  .menu-toggle-label {
    display: block;
    cursor: pointer;
    padding: 14px 20px;
    color: white;
    background: #333;
  }
}
```

### Centered Navigation
```css
nav ul {
  list-style: none;
  display: flex;
  justify-content: center;
  background: #333;
  margin: 0;
  padding: 0;
}
```

### Navigation with Dividers
```css
nav li:not(:last-child)::after {
  content: "|";
  color: #666;
  padding: 0 4px;
}
```

## Visual Explanation

```
Horizontal Navigation:
┌──────────────────────────────────────────────┐
│  [Home]  [About]  [Services]  [Contact]  │ │
│                     ↑ current page (active)   │
└──────────────────────────────────────────────┘

Vertical Navigation:
┌──────────────────┐
│  Home             │
├──────────────────┤
│  About           │  ← hover state (highlighted)
├──────────────────┤
│  Services        │
├──────────────────┤
│  Contact         │
└──────────────────┘

Responsive Navigation:
Desktop:
[Home] [About] [Services] [Contact]

Mobile (≤768px):
☰ Menu
[Home]
[About]
[Services]
[Contact]
```

## Common Mistakes

1. **Forgetting to remove `list-style`, `margin`, and `padding` on `<ul>`** — browsers apply default list styling that breaks nav layout
2. **Using inline links without `display: block`** — reduces clickable area to just the text, making small links hard to click
3. **Not adding a skip-to-content link for screen reader users** — a critical accessibility failure
4. **Nesting `<nav>` inside `<nav>`** — only one `<nav>` per navigation region
5. **Forgetting `:focus` styles** — keyboard users cannot see where they are
6. **Hardcoding current page as `.active`** — must be dynamically set per page
7. **Using `float` for horizontal nav** — flexbox is simpler and more reliable
8. **Not testing hamburger menus with keyboard** — the checkbox-based approach is not keyboard-friendly without JavaScript
9. **Overlapping content with fixed navbars** — forgetting to add top padding/margin to main content
10. **Insufficient tap targets on mobile** — links should be at least 44×44px for touch targets

## Best Practices

1. Use semantic `<nav>` with `<ul>` / `<li>` structure
2. Remove default list styles (`list-style: none; margin: 0; padding: 0`)
3. Use `display: block` on links for full-width/height clickable area
4. Use Flexbox for horizontal layouts (avoid float for nav)
5. Style all states: `:hover`, `:focus`, `:active`, `.active`
6. Add `aria-current="page"` to the current page link
7. Ensure tap targets are at least 44×44px on mobile
8. Add a skip-to-content link for keyboard users
9. Test navigation with keyboard only (Tab, Enter)
10. Use `transition` for smooth hover effects
11. Make navigation responsive — stack vertically on small screens
12. Use `position: sticky` for persistent navigation
13. Add `z-index` to prevent content overlap
14. Use consistent spacing and typography across all nav items

## Accessibility

- Always use `<nav>` landmark element for navigation regions
- Add `aria-label` if multiple nav elements exist: `<nav aria-label="Main navigation">`
- Use `aria-current="page"` on the current page link
- Provide a skip-to-content link: `<a href="#main" class="skip-link">Skip to content</a>`
- Ensure sufficient color contrast for all link states (minimum 4.5:1)
- Test keyboard navigation (Tab through all links, Enter to activate)
- Focus indicators must be visible (never use `outline: none` without an alternative)
- Mobile hamburger menus need JavaScript for proper keyboard accessibility
- Ensure dropdown menus open on hover AND focus
- Use `aria-expanded` for expandable navigation items

## Performance

- Navigation bars are typically lightweight and have minimal performance impact
- Using `position: fixed` or `sticky` creates a new stacking context and compositing layer
- Smooth transitions on hover/background use GPU compositing
- Avoid using too many box-shadows or filters on navigation elements (increases paint time)
- For mobile, lazy-load secondary navigation items if present
- CSS-only hamburger menus (checkbox hack) avoid JavaScript overhead
- Use `will-change: transform` for sticky navbars sparingly

## Browser Compatibility

| Feature | Chrome | Firefox | Safari | Edge | IE |
|---------|--------|---------|--------|------|----|
| Flexbox nav | ✓ 29+ | ✓ 20+ | ✓ 9+ | ✓ 12+ | Partial* |
| `position: sticky` | ✓ 56+ | ✓ 32+ | ✓ 13+ | ✓ 16+ | ✗ |
| `aria-current` | ✓ | ✓ | ✓ | ✓ | ✓ |
| `:focus-visible` | ✓ 86+ | ✓ 85+ | ✓ 15.4+ | ✓ 86+ | ✗ |
| CSS transitions | ✓ | ✓ | ✓ | ✓ | ✓ 10+ |

*IE 10-11 support Flexbox with vendor prefixes

## Summary Notes

- Navigation bars rely on semantic `<nav>` + `<ul>` structure
- Use flexbox for horizontal layouts, `display: block` for full click area
- Style states with `:hover` / `:focus` / `:active` / `.active`
- Ensure full-width clickable targets with `display: block` on links
- Add `aria-current="page"` for current page indicator
- Use `position: sticky` for persistent navigation
- Always test with keyboard-only navigation
- Mobile navigation should respect 44×44px touch targets
- Skip-to-content links improve keyboard accessibility
- Responsive navigation often uses a hamburger menu pattern
- Focus indicators must never be removed without an accessible alternative
- Avoid using float for navigation — Flexbox is cleaner and more maintainable
