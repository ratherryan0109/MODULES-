# Responsive Navigation Cheatsheet

## HTML Structure

```html
<nav aria-label="Main navigation">
  <a href="#main" class="skip-link">Skip to content</a>
  <ul>
    <li><a href="#" aria-current="page">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>
```

## CSS-Only Hamburger Menu

```html
<input type="checkbox" id="menu-toggle" hidden>
<label for="menu-toggle" aria-label="Toggle menu">☰</label>
<ul class="nav-menu">
  <!-- links -->
</ul>
```

```css
/* Mobile: hidden menu */
.nav-menu { display: none; }
#menu-toggle:checked ~ .nav-menu { display: flex; flex-direction: column; }

/* Desktop: visible menu */
@media (min-width: 768px) {
  label[for="menu-toggle"] { display: none; }
  .nav-menu { display: flex !important; flex-direction: row; }
}
```

## Skip Link

```css
.skip-link {
  position: absolute;
  top: -100%;
  left: 0;
  background: #333;
  color: white;
  padding: 0.5rem 1rem;
  z-index: 1000;
}
.skip-link:focus { top: 0; }
```

## Sticky Navigation

```css
nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: white;
}
```

## Dropdown Menu

```css
/* Desktop */
.dropdown { position: relative; }
.dropdown-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 200px;
}
.dropdown:hover .dropdown-menu,
.dropdown:focus-within .dropdown-menu {
  display: block;
}

/* Mobile */
@media (max-width: 767px) {
  .dropdown-menu {
    position: static;
    box-shadow: none;
  }
}
```

## Bottom Navigation (Mobile)

```css
.bottom-nav {
  position: fixed;
  bottom: 0;
  width: 100%;
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
  min-height: 56px;
  font-size: 0.75rem;
  color: #64748b;
  text-decoration: none;
}
```

## Off-Canvas Menu

```css
.off-canvas {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 280px;
  background: white;
  transform: translateX(-100%);
  transition: transform 0.3s ease;
  z-index: 200;
}
.off-canvas.open { transform: translateX(0); }
.overlay {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  z-index: 199;
}
.off-canvas.open + .overlay { display: block; }
```

## Accessibility Checklist

- [ ] `<nav>` element with `aria-label`
- [ ] Skip to content link (first focusable element)
- [ ] `aria-current="page"` on active link
- [ ] `aria-expanded` on toggle buttons
- [ ] Keyboard navigation (Tab, Enter, Escape)
- [ ] Focus trap in off-canvas menus
- [ ] Visible focus indicators
- [ ] Touch targets ≥ 44x44px
- [ ] Screen reader announcements
- [ ] `prefers-reduced-motion` respected

## Common Patterns Reference

| Pattern | Mobile | Desktop | Implementation |
|---------|--------|---------|----------------|
| Hamburger | ☰ icon | Horizontal bar | CSS checkbox hack |
| Bottom nav | Fixed bottom | Sidebar | Media query hide |
| Off-canvas | Slide from side | Always visible | CSS transform |
| Tabs | Scrollable | Full labels | Flexbox |
| Mega menu | Accordion | Large dropdown | Grid layout |
| Breadcrumb | Wrapped | Full path | Flexbox wrap |
