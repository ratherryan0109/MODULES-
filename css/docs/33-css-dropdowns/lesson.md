# CSS Dropdowns

## Module Overview
Learn to create CSS-only dropdown menus using nested lists, positioning, and the `:hover` pseudo-class. Dropdown menus are a fundamental UI pattern for organizing navigation links, action menus, and settings panels without cluttering the interface.

## Introduction
CSS dropdowns allow you to create multi-level menus that appear when the user hovers over or focuses on a trigger element. While JavaScript can enhance dropdown behavior (animations, keyboard support, click-to-toggle), many functional dropdowns can be built with CSS alone. This module covers the core positioning and visibility techniques, along with accessibility and usability considerations.

## Learning Objectives
1. Build dropdown menus with nested HTML lists
2. Control dropdown visibility with `display` and `:hover`
3. Position dropdown content relative to its parent
4. Style multi-level dropdown hierarchies
5. Create accessible dropdown menus with keyboard support
6. Implement animated dropdowns with CSS transitions
7. Add ARIA attributes for screen reader support
8. Debug positioning and z-index issues with dropdowns
9. Build mega menus for complex navigation
10. Test dropdowns across devices and input methods

## Theory

### HTML Structure
A dropdown menu consists of a parent trigger element (typically a `<li>` or `<button>`) that contains a nested list for the dropdown items. The parent `<li>` acts as the hover/focus trigger area, and the nested `<ul>` becomes the dropdown panel that appears on interaction. This structure can be nested further for multi-level dropdowns, where each level contains its own submenu.

### CSS Mechanics
The core CSS pattern for dropdowns uses three key properties:
1. **`position: relative`** on the parent — establishes the positioning context
2. **`position: absolute`** on the submenu — positions the dropdown relative to the parent
3. **`display: none`** (default) / **`display: block`** (on hover) — controls visibility

When the user hovers over the parent `<li>`, the child `<ul>` becomes visible via the `li:hover > ul` selector. This works because the child `ul` is a direct descendant of the `li`, not a descendant of the `<a>` tag.

### Multi-Level Dropdowns
For multi-level dropdowns, each level positions absolutely relative to its immediate parent. Level 2 submenus are typically positioned to the right (or left) of the Level 1 dropdown item, creating the classic cascading menu pattern. Each level needs careful `z-index` management to ensure proper overlap.

### The Gap Problem
A common issue with dropdowns is the gap between the trigger and the submenu. If there is any space between the parent `li` and the child `ul`, the `:hover` state is lost when the mouse crosses the gap, causing the dropdown to disappear. This is why submenus are typically nested directly inside the parent `li` (no whitespace gap in the HTML) or use padding on the parent to bridge the gap.

## Key Concepts

### HTML Structure
- Dropdown is a nested `<ul>` inside a `<li>`
- Parent `<li>` acts as the trigger area
- Submenu appears on hover over the parent `<li>`

### CSS Mechanics
- Parent `li` has `position: relative`
- Submenu `ul` has `position: absolute`
- Default submenu state: `display: none`
- Hover state: `li:hover > ul { display: block; }`

### Multi-Level Dropdowns
- Submenus can contain further nested lists
- Each level positions absolutely relative to its parent
- Careful z-index management needed for overlap
- Level 2+ submenus typically appear to the right of the parent item

## Code Examples

### Basic Dropdown
```css
.dropdown {
  position: relative;
  display: inline-block;
}
.dropdown-content {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background: #f9f9f9;
  min-width: 160px;
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
  z-index: 1;
}
.dropdown:hover .dropdown-content {
  display: block;
}
```

### Full Navigation Dropdown
```css
nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  background: #333;
}
nav li {
  position: relative; /* Establishes positioning context */
}
nav li a {
  display: block;
  color: #fff;
  padding: 14px 20px;
  text-decoration: none;
}
nav li:hover > a {
  background: #575757;
}
/* Dropdown submenu */
nav li ul {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background: #444;
  min-width: 180px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.3);
  z-index: 10;
}
nav li:hover > ul {
  display: block;
}
/* Submenu items */
nav li ul li {
  width: 100%;
}
nav li ul li a {
  padding: 10px 20px;
}
/* Level 2+ — open to the right */
nav li ul li ul {
  top: 0;
  left: 100%;
}
```

### Animated Dropdown (Using Opacity + Visibility)
```css
.dropdown-content {
  opacity: 0;
  visibility: hidden;
  position: absolute;
  top: 100%;
  left: 0;
  transition: opacity 0.3s ease, visibility 0.3s ease;
}
.dropdown:hover .dropdown-content {
  opacity: 1;
  visibility: visible;
}
```

The `opacity` + `visibility` approach allows smooth fade transitions, unlike `display: none` → `display: block` which cannot be animated.

### Mega Menu
```css
.mega-menu {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  display: none;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
nav li:hover .mega-menu {
  display: grid;
}
```

## Visual Explanation

```
Basic Dropdown Structure:
┌────────────────────────────────────┐
│  [Home]  [Services ▼]  [Contact]   │
│           │                         │
│           ↓                         │
│      ┌──────────────┐              │
│      │  Web Design  │              │
│      │  Development │              │
│      │  Consulting  │              │
│      │  Support  ►  │──┐           │
│      └──────────────┘  │           │
│                        ↓           │
│                   ┌──────────┐     │
│                   │ Basic    │     │
│                   │ Premium  │     │
│                   │ Enterprise│    │
│                   └──────────┘     │
└────────────────────────────────────┘

Positioning:
┌──────────────────────────────────┐
│  .dropdown (position: relative)  │
│  ┌─────────────────────────────┐ │
│  │  Trigger (visible)          │ │
│  └─────────────────────────────┘ │
│  ┌─────────────────────────────┐ │
│  │  .dropdown-content          │ │
│  │  (position: absolute)       │ │
│  │  top: 100%                  │ │
│  │  left: 0                    │ │
│  │  z-index: 1                 │ │
│  └─────────────────────────────┘ │
└──────────────────────────────────┘
```

## Common Mistakes

1. **Forgetting `position: relative` on the parent** — submenu positions relative to viewport instead of parent
2. **Using `display: none`/`block` prevents transition animations** — use `opacity` + `visibility` for fades
3. **Submenu disappearing due to gap between trigger and dropdown** — invisible pixel gaps break hover state
4. **Nested dropdowns overlapping incorrectly without z-index** — each level needs explicit `z-index`
5. **Dropdown not working on touch devices** — `:hover` doesn't work reliably on mobile (use `:focus-within` or JavaScript)
6. **Not setting `min-width` on the submenu** — contents may wrap awkwardly
7. **Submenu positioned off-screen** — especially for right-aligned menus on small viewports
8. **Keyboard inaccessibility** — CSS-only dropdowns often can't be opened with keyboard without JavaScript
9. **Overlapping parent boundaries** — dropdown that extends beyond the viewport edge on small screens

## Best Practices

1. Always set `position: relative` on the dropdown parent
2. Use `opacity` + `visibility` + `transition` for animated dropdowns (not `display`)
3. Use `min-width` on submenus to ensure consistent sizing
4. Add `z-index` to prevent overlap issues
5. Use `:focus-within` for keyboard-open support (modern CSS)
6. Test dropdowns on touch devices (hover doesn't work on mobile)
7. Ensure submenus stay within the viewport at all screen sizes
8. Add ARIA attributes (`aria-haspopup="true"`, `aria-expanded="false"`)
9. For production dropdowns, use JavaScript for proper keyboard and mobile support
10. Use `pointer-events: none` on disabled dropdown items

## Accessibility

- Add `aria-haspopup="true"` to trigger elements to indicate a menu
- Use `aria-expanded="false"` (JavaScript toggles to "true")
- CSS-only dropdowns are limited for keyboard users — consider JavaScript enhancement
- Use `:focus-within` on the parent to keep dropdown open when submenu items are focused
- Ensure dropdown items are keyboard-focusable (they must be `<a>` or `<button>` elements)
- Provide sufficient color contrast for dropdown items
- Test with screen readers to ensure dropdown content is announced
- Add `role="menu"` and `role="menuitem"` for enhanced semantics (when using JavaScript)
- Avoid dropdowns that close on mouse leave but keep open on focus (consistent behavior)

## Performance

- Dropdowns have minimal performance impact
- Using `opacity` transitions for show/hide is GPU-accelerated
- Avoid complex box-shadows on dropdown panels (increases paint time)
- For mega menus, lazy-load or defer rendering of dropdown content if it's complex
- `z-index` doesn't affect performance
- Nested dropdowns with many levels may cause layout recalculations on hover
- Use `contain: paint` on dropdown containers to limit paint area

## Browser Compatibility

| Feature | Chrome | Firefox | Safari | Edge | IE |
|---------|--------|---------|--------|------|----|
| `:hover` dropdown | ✓ | ✓ | ✓ | ✓ | ✓ |
| `position: absolute` | ✓ | ✓ | ✓ | ✓ | ✓ |
| `opacity` + `transition` | ✓ | ✓ | ✓ | ✓ | ✓ 10+ |
| `:focus-within` | ✓ 60+ | ✓ 52+ | ✓ 10.1+ | ✓ 79+ | ✗ |
| `aria-haspopup` | ✓ | ✓ | ✓ | ✓ | Partial |

## Summary Notes

- CSS dropdowns use a parent-child relationship with `position: absolute` and `:hover`
- Submenu positioned with `top: 100%` from parent with `position: relative`
- Default visibility: `display: none` → `display: block` on hover
- For animated transitions, use `opacity` and `visibility` instead of `display`
- Always set `z-index` on dropdowns to prevent overlap issues
- Multi-level dropdowns nest submenus within each level
- Level 2+ submenus typically position to the right of the parent
- CSS-only dropdowns have limited keyboard support — `:focus-within` helps
- Add `aria-haspopup` and `aria-expanded` for accessibility
- Test dropdowns on touch devices (hover doesn't work on mobile)
- For production, enhance dropdowns with JavaScript for full accessibility
- Use `min-width` and `box-shadow` for professional-looking dropdowns
- The gap between trigger and submenu must be eliminated for reliable hover behavior
- Mega menus use grid layout for wide, multi-column dropdown panels
