# Responsive Navigation

## Introduction
Responsive navigation is the practice of designing navigation systems that work across all device sizes. From hamburger menus on mobile to horizontal nav bars on desktop, responsive navigation ensures users can access all parts of a website regardless of their device.

## Learning Objectives
1. Understand responsive navigation patterns
2. Implement hamburger menus (CSS-only and JS)
3. Design accessible navigation systems
4. Handle multi-level navigation responsively
5. Use Flexbox for adaptive navigation
6. Implement sticky navigation
7. Design bottom navigation for mobile
8. Create tab bars and segmented controls
9. Handle dropdowns on touch devices
10. Test navigation on real devices

## Theory

### Navigation Patterns

| Pattern | Mobile | Desktop | Best For |
|---------|--------|---------|----------|
| Hamburger | Hidden behind ☰ icon | Horizontal links | Content-heavy sites |
| Bottom nav | Icons at bottom | Sidebar | Apps, mobile-first |
| Tab bar | Horizontal scroll | Full labels | Category browsing |
| Off-canvas | Slide from side | Always visible | Dashboards |
| Priority+ | Shows priority items | All items | Responsive menus |
| Utility nav | Minimal icons | Full text | Toolbars |

### Touch Target Requirements

- Minimum 44x44px touch target (WCAG 2.2)
- Adequate spacing between links (8px minimum)
- Visual feedback on tap (color change, ripple)
- Sufficient padding, not just icon size

### Navigation Accessibility

| Requirement | Why |
|-------------|-----|
| Skip link | Let keyboard users skip navigation |
| ARIA labels | Screen readers need context |
| Focus indicators | Keyboard navigation visibility |
| Current page indication | User orientation |
| Expand/collapse announcements | Dynamic content changes |
| Keyboard support | Arrow keys for submenus |

## Syntax Examples

### CSS-Only Hamburger Menu
```css
/* Mobile: hide nav, show hamburger */
.nav-toggle { display: none; }
.nav-toggle-label { display: block; cursor: pointer; padding: 1rem; }
.nav-menu { display: none; }
.nav-toggle:checked ~ .nav-menu { display: flex; flex-direction: column; }

/* Desktop: show nav, hide hamburger */
@media (min-width: 768px) {
  .nav-toggle-label { display: none; }
  .nav-menu { display: flex !important; flex-direction: row; }
}
```

```html
<nav>
  <input type="checkbox" id="nav-toggle" class="nav-toggle">
  <label for="nav-toggle" class="nav-toggle-label">☰</label>
  <ul class="nav-menu">
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Services</a></li>
  </ul>
</nav>
```

### Sticky Navigation
```css
.nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
```

### Multi-Level Dropdown
```css
/* Desktop dropdown */
@media (min-width: 768px) {
  .dropdown { position: relative; }
  .dropdown-menu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background: white;
    box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  }
  .dropdown:hover .dropdown-menu,
  .dropdown:focus-within .dropdown-menu {
    display: block;
  }
}

/* Mobile accordion */
.dropdown-menu { display: none; }
.dropdown.open .dropdown-menu { display: block; }
```

### Bottom Navigation (Mobile)
```css
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  background: white;
  border-top: 1px solid #e2e8f0;
  z-index: 100;
}

.bottom-nav a {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  font-size: 0.75rem;
  color: #64748b;
  text-decoration: none;
  min-height: 56px;
  justify-content: center;
}

.bottom-nav a.active { color: #3b82f6; }

@media (min-width: 768px) {
  .bottom-nav { display: none; }
}
```

### Priority+ Navigation
```css
.nav { display: flex; align-items: center; overflow: hidden; }
.nav-list { display: flex; gap: 0; list-style: none; }
.nav-more {
  display: none; /* Shown via JS when items overflow */
}
```

## Visual Explanation

### Navigation Pattern Decision

```
How many nav items?
    |
< 5 items        ≥ 5 items
    |                |
Horizontal bar    Desktop: hamburger or full
on all sizes      Mobile: bottom nav or hamburger
    |
    ↓
Multi-level?
    |
YES → Desktop: dropdowns
       Mobile: accordion / off-canvas
NO  → Simple horizontal or hamburger
```

### Touch-Friendly Design Rules

```
+--------------------------------------+
|         44px minimum touch target    |
+--------------------------------------+

     ××××××××××××××××××××××××××××
     ×   Home        ×   About     ×
     ×  (44×44)      ×  (44×44)    ×
     ××××××××××××××××××××××××××××
         ↑                    ↑
    Adequate gap          Adequate gap
    (8px min)             (8px min)
```

## Common Mistakes
1. **Too small touch targets** - Below 44x44px
2. **Hiding navigation completely** - Users can't find it
3. **No skip link** - Keyboard users tab through all links
4. **Broken on orientation change** - Test both portrait/landscape
5. **Overflowing content** - Nav items should wrap or hide
6. **No active state indicators** - Users don't know where they are
7. **Mouse-only hover for dropdowns** - Doesn't work on touch
8. **Hamburger without label** - Screen readers can't identify it

## Best Practices
1. Use `<nav>` element with ARIA label for screen readers
2. Include skip-to-content link as first focusable element
3. Use `current` page indication (aria-current="page")
4. Keep navigation consistent across pages
5. Provide visual feedback on interaction
6. Use `focus-within` for dropdown accessibility
7. Test with keyboard navigation only
8. Ensure hamburger has accessible label
9. Use `prefers-reduced-motion` for nav animations
10. Consider thumb zones (bottom of screen for mobile)

## Accessibility
- `aria-label="Main navigation"` on `<nav>`
- `aria-current="page"` on current link
- `aria-expanded` on toggle buttons
- `role="navigation"` (implicit with `<nav>`)
- Skip link visible on focus
- Keyboard: Enter/Space to toggle, Tab/Escape to dismiss
- Focus trap inside off-canvas menus
- Announcing menu state changes to screen readers

## Performance
- Sticky navigation uses `position: sticky` (no JS)
- CSS-only hamburger avoids JavaScript overhead
- Lazy load secondary nav items
- Avoid expensive animations during scroll
- Use `will-change: transform` for smooth animations
- Off-canvas menus use CSS transforms (GPU-accelerated)
- Minimize DOM size in navigation

## Browser Compatibility
- `position: sticky`: All modern browsers (2017+)
- CSS-only hamburger checkbox: Universally supported
- `focus-within`: All modern browsers (2018+)
- Flexbox navigation: All modern browsers
- CSS transforms for off-canvas: All modern browsers
- `gap` in Flexbox: All modern browsers (2021+)

## Summary Notes
- Choose navigation pattern based on number of items and content depth
- Touch targets must be minimum 44x44px
- Always include skip-to-content link
- Use ARIA attributes for screen reader support
- CSS-only hamburger menus reduce JS dependency
- Test navigation with keyboard only
- Multi-level menus need special handling on touch devices
- Sticky navigation improves usability on long pages
- Bottom navigation suits mobile-first designs
- Priority+ pattern shows important items, hides less important ones
