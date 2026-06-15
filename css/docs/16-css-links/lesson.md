# Module 16: CSS Links

## Table of Contents
1. Introduction
2. Learning Objectives
3. Theory
   - Link Pseudo-Classes
   - LVHA Order
   - Link Styling Patterns
   - Styling Different Link Types
   - Link Hover Effects and Animations
   - Link States and Accessibility
   - Link Buttons (Button-style Links)
   - Styling Navigation Links
   - Current Page Indication
4. Visual Explanation
5. Common Mistakes
6. Best Practices
7. Accessibility Considerations
8. Performance Considerations
9. Browser Compatibility
10. Summary Notes

## Introduction
Links (`<a>` elements) are fundamental to web navigation. CSS provides special pseudo-classes to style links in different states: unvisited, visited, hover, active, and focus. Proper link styling is essential for usability, accessibility, and visual design.

Links are the connective tissue of the web. Every navigation menu, every call-to-action, every reference to another page is a link. How you style links determines whether users can easily identify interactive content, understand where they've been, and navigate efficiently. Well-styled links improve usability, support keyboard navigation, and create visual feedback that guides users through your interface.

## Learning Objectives
By the end of this module, you will be able to:
- Style links in all four states (link, visited, hover, active)
- Apply the LVHA order correctly for link pseudo-classes
- Remove or customize link underlines with modern techniques
- Style link buttons with hover and active effects
- Create accessible link indicators beyond color alone
- Style different link types (external, download, email, phone)
- Create animated underline effects
- Style navigation links with active/current page states
- Design clickable areas with appropriate sizing

## Theory

### Link Pseudo-Classes
CSS provides five pseudo-classes specifically for links:

```css
/* Unvisited link */
a:link {
  color: #3182ce;
  text-decoration: underline;
}

/* Visited link */
a:visited {
  color: #6b46c1;
}

/* Hover (mouse over the link) */
a:hover {
  color: #2c5282;
  text-decoration: none;
}

/* Active (being clicked — between mousedown and mouseup) */
a:active {
  color: #e53e3e;
}

/* Focus (keyboard navigation via Tab) */
a:focus {
  outline: 3px solid #4299e1;
  outline-offset: 2px;
}

/* Focus-visible (keyboard only, modern) */
a:focus-visible {
  outline: 3px solid #4299e1;
}
```

**What each state means:**
- `:link` — An unvisited link (href attribute present, not yet clicked)
- `:visited` — A link the user has visited (URL is in browser history)
- `:hover` — Mouse pointer is over the link
- `:active` — Link is being activated (clicked)
- `:focus` — Link has keyboard focus (Tab key)
- `:focus-visible` — Focus is visible (typically keyboard focus, not mouse click)

### LVHA Order
The pseudo-classes MUST be defined in this specific order for all to work correctly:

```css
a:link    /* 1. Unvisited */
a:visited /* 2. Visited */
a:hover   /* 3. Hover (must come AFTER :link and :visited) */
a:active  /* 4. Active (must come AFTER :hover) */
```

**Why the order matters:**
- `:hover` must come after `:link` and `:visited` to override them when the mouse is over the link
- `:active` must come last to override all other states when the link is being clicked
- If you reverse the order (e.g., `:hover` then `:link`), the `:link` color would always override the `:hover` color

**Memory trick:** **L**o**V**e **H**ate **A**voids — **L**ink, **V**isited, **H**over, **A**ctive

**Including `:focus-visible`:**
```css
/* Full accessible link styling with modern :focus-visible */
a:link { color: #3182ce; }
a:visited { color: #6b46c1; }
a:hover { color: #2c5282; }
a:active { color: #e53e3e; }
a:focus-visible { outline: 3px solid #4299e1; outline-offset: 2px; }
```

### Link Styling Patterns

**Pattern 1: Classic underline toggle**
```css
a {
  text-decoration: none;
  color: #3182ce;
  transition: color 0.2s;
}
a:hover {
  text-decoration: underline;
  color: #2c5282;
}
```

**Pattern 2: Animated underline (slide-in effect)**
```css
a {
  text-decoration: none;
  position: relative;
  color: #3182ce;
}
a::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: currentColor;
  transition: width 0.3s ease;
}
a:hover::after {
  width: 100%;
}
```

**Pattern 3: Button-style links**
```css
.button-link {
  display: inline-block;
  padding: 12px 28px;
  background: #4299e1;
  color: white;
  text-decoration: none;
  border-radius: 6px;
  font-weight: 600;
  transition: background 0.2s, transform 0.1s;
}
.button-link:hover {
  background: #2b6cb0;
  color: white;
}
.button-link:active {
  transform: scale(0.98);
}
```

**Pattern 4: Background highlight**
```css
a {
  color: #3182ce;
  text-decoration: none;
  padding: 2px 4px;
  border-radius: 3px;
  transition: background 0.2s, color 0.2s;
}
a:hover {
  background: #bee3f8;
  color: #2b6cb0;
}
```

### Styling Different Link Types
CSS attribute selectors let you style links based on their destination:

```css
/* External links (open in new tab) */
a[target="_blank"]::after {
  content: " ↗";
  font-size: 0.8em;
}

/* Download links */
a[download]::before {
  content: "⬇ ";
}

/* Email links */
a[href^="mailto:"] {
  color: #38a169;
}
a[href^="mailto:"]::before {
  content: "✉ ";
}

/* Phone links */
a[href^="tel:"] {
  color: #d69e2e;
}

/* PDF links */
a[href$=".pdf"]::after {
  content: " [PDF]";
  font-size: 0.8em;
  color: #e53e3e;
}

/* HTTPS links (secure) */
a[href^="https://"]::before {
  content: "🔒 ";
}

/* Same-page anchor links */
a[href^="#"] {
  border-bottom: 1px dotted #4299e1;
}
```

**Combined styling for external links with accessibility:**
```css
/* External link indicator */
a[target="_blank"]::after {
  content: " (opens in new tab)";
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
/* Visual indicator for sighted users */
a[target="_blank"]::before {
  content: "↗";
  margin-right: 2px;
}
```

### Link Hover Effects and Animations

**Subtle color transition:**
```css
a {
  color: #4299e1;
  transition: color 0.2s ease;
}
a:hover {
  color: #2b6cb0;
}
```

**Scale on hover:**
```css
/* For navigation links or cards */
.nav-link {
  display: inline-block;
  transition: transform 0.2s ease;
}
.nav-link:hover {
  transform: translateY(-2px);
}
```

**Underline animation from left to right:**
```css
.animated-underline {
  display: inline-block;
  position: relative;
  text-decoration: none;
}
.animated-underline::after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background: currentColor;
  transform-origin: bottom right;
  transition: transform 0.3s ease-out;
}
.animated-underline:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
```

**Fill button effect (for button-style links):**
```css
.btn-outline {
  display: inline-block;
  padding: 10px 24px;
  border: 2px solid #4299e1;
  color: #4299e1;
  text-decoration: none;
  border-radius: 6px;
  transition: background 0.3s, color 0.3s;
}
.btn-outline:hover {
  background: #4299e1;
  color: white;
}
```

### Current Page Indication
For navigation menus, indicate which page is currently active:

```html
<nav>
  <ul>
    <li><a href="/" class="active">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>
```

```css
.nav a {
  color: #4a5568;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 6px;
  transition: background 0.2s;
}
.nav a:hover {
  background: #edf2f7;
}
.nav a.active {
  background: #4299e1;
  color: white;
}
```

**Using aria-current for current page (more semantic):**
```html
<li><a href="/" aria-current="page">Home</a></li>
```

```css
[aria-current="page"] {
  background: #4299e1;
  color: white;
  font-weight: 600;
}
```

## Visual Explanation
```
Link States Order (LVHA):

  a:link    ───→ Unvisited link (blue, underlined)
     │
     ▼
  a:visited ──→ Visited link (purple)
     │
     ▼
  a:hover   ───→ Hover state (darker blue)
     │
     ▼
  a:active  ───→ Active/clicked (red)

  Memory: LoVe HAte Avoids

Link Underline Animations:

  Default:  This is a link
            ───────────────

  Hover (slide in):
  This is a link
  ──────────────  ← underline grows from left

  Hover (scale):
  This is a link
  ───────────────  ← underline scales from center

External Link Indicator:

  Example Link ↗
               ↑
          ::after content
```

## Common Mistakes
1. **Wrong LVHA order**: If pseudo-classes aren't in `:link` → `:visited` → `:hover` → `:active` order, the styles won't apply correctly (e.g., `:hover` won't override `:link`)
2. **Removing underline without other indicator**: If you remove `text-decoration: underline` and only use color to indicate links, colorblind users may not be able to identify links
3. **Removing focus outline**: `a:focus { outline: none; }` without providing an alternative makes keyboard navigation impossible — this is a critical WCAG failure
4. **Insufficient visited link contrast**: Visited links must still be distinguishable from surrounding text and should have sufficient contrast
5. **No hover/focus styles**: Interactive elements need visual feedback states — users should know when they're interacting with a link
6. **Using only color to indicate links**: Color alone is insufficient — at least 3:1 contrast against surrounding non-link text is required
7. **Making clickable areas too small**: Links should have sufficient padding or surrounding space to be easy to click/tap
8. **Not styling visited state**: Users benefit from knowing which links they've already visited — it aids navigation
9. **Using `a` selector for the entire site**: Global `a` styles affect ALL links — use specific selectors for navigation, content, buttons, etc.
10. **Forgetting `:focus-visible`**: Use `:focus-visible` for keyboard-only focus styles to avoid showing focus rings after mouse clicks

## Best Practices
- Always follow LVHA order: `:link` → `:visited` → `:hover` → `:active`
- Use `:focus-visible` for keyboard-only focus indicators (with `:focus` fallback)
- Provide at least two visual cues to identify links: color AND underline, or color AND icon, or color AND weight change
- Ensure visited links are visually distinct from unvisited links (different color or style)
- Use `transition` for smooth hover animations (prefer `color`, `background`, `opacity`, `transform`)
- Use `currentColor` for link borders and underlines to keep them consistent with text color
- Use attribute selectors (`a[href^="https"]`, `a[download]`) to style different link types automatically
- Add external link indicators (icon or text) for links that open in new tabs
- Use `text-underline-offset` to fine-tune underline position for better readability
- Use `aria-current="page"` for current page indicator in navigation

```css
/* Complete link styling best practice */
a {
  color: #3182ce;
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-thickness: 1px;
  transition: color 0.2s, text-decoration-color 0.2s;
}
a:visited {
  color: #6b46c1;
}
a:hover {
  color: #2b6cb0;
  text-decoration-thickness: 2px;
}
a:active {
  color: #e53e3e;
}
a:focus-visible {
  outline: 3px solid #4299e1;
  outline-offset: 2px;
}
a[target="_blank"]::after {
  content: " ↗";
}
```

## Accessibility Considerations
- **WCAG 1.4.1 Use of Color**: Links must be distinguishable from surrounding text by more than color alone (underline, bold, icon)
- **WCAG 2.4.4 Link Purpose (In Context)**: Link text must clearly describe the destination (not "click here")
- **WCAG 2.4.7 Focus Visible**: Links must have a visible focus indicator
- **WCAG 2.4.9 Link Purpose (Link Only)**: Links should be understandable out of context
- **WCAG 3.3.2 Labels or Instructions**: Links that open in new tabs should be indicated
- Use `aria-label` when link text alone isn't descriptive enough
- Use `aria-current="page"` for current page indication (not just CSS)
- Ensure skip-to-content links are available for keyboard users
- External link indicators should be screen-reader accessible
- Test link focus visibility with keyboard-only navigation (Tab, Shift+Tab, Enter)

```css
/* Visually hidden accessible text for external links */
.external-link::after {
  content: " (opens in new window)";
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
}
```

## Performance Considerations
- Link pseudo-classes have negligible performance cost
- CSS transitions on link states (color, background) are GPU-accelerated when animating `opacity` or `transform`
- Avoid animating `box-shadow` or `filter` on hover for large numbers of links — they trigger repaints
- Animated underline effects using `::after` with `transform: scaleX()` are performant
- Use `will-change: transform` sparingly on link hover effects (only when needed)
- `text-decoration` animation is less performant than `border-bottom` or `background-size` animations

## Browser Compatibility
| Feature | Chrome | Firefox | Safari | Edge | Opera | IE |
|---------|--------|---------|--------|------|-------|----|
| a:link | 1+ | 1+ | 1+ | 12+ | 3.5+ | 4+ |
| a:visited | 1+ | 1+ | 1+ | 12+ | 3.5+ | 4+ |
| a:hover | 1+ | 1+ | 1+ | 12+ | 3.5+ | 4+ |
| a:active | 1+ | 1+ | 1+ | 12+ | 3.5+ | 4+ |
| a:focus | 1+ | 1+ | 1+ | 12+ | 3.5+ | 4+ |
| :focus-visible | 86+ | 85+ | 15.4+ | 86+ | 72+ | No |
| Attribute selectors | 1+ | 1+ | 1+ | 12+ | 3.5+ | 7+ |
| text-underline-offset | 57+ | 70+ | 12.1+ | 79+ | 44+ | No |
| transition on link states | 26+ | 16+ | 9+ | 12+ | 12.1+ | 10+ |

Link pseudo-classes are supported in every CSS-capable browser since CSS2 (1998). `:focus-visible` requires modern browsers (2022+). Transitions on link states work in all modern browsers.

## Summary Notes
- Four link states in LVHA order: `:link` (unvisited) → `:visited` → `:hover` → `:active`
- LVHA memory aid: LoVe HAte Avoids
- Always include `:focus` or `:focus-visible` for keyboard accessibility
- Use `:focus-visible` for keyboard-only focus styles (best UX for mouse + keyboard users)
- Never remove outlines without providing alternative focus indicators
- Style different link types with attribute selectors: `a[href^="https"]`, `a[download]`, `a[href^="mailto:"]`
- Use at least two visual cues to identify links (color + underline, color + icon)
- Ensure sufficient color contrast in all link states (4.5:1 for normal text)
- Use `transition` for smooth hover effects on `color`, `background`, `transform`
- Add external link indicators for links that open in new tabs
- Use `aria-current="page"` for current page navigation indicators
- Test all link states manually — hover, focus, visited, active
- Links should have sufficient clickable area (44×44px minimum for touch targets)
- Avoid "click here" — link text should describe the destination
