# Module 83: Responsive Website Project

## Introduction

Responsive web design is the practice of building websites that adapt seamlessly to any screen size, from mobile phones to large desktop monitors. This project-based module brings together all the HTML, CSS, and responsive design principles you've learned to build a complete, production-quality responsive website. You'll learn mobile-first design, fluid layouts, flexible media, and responsive navigation patterns.

## Learning Objectives

By the end of this module, you will be able to:
- Plan and structure a fully responsive website
- Implement mobile-first CSS with progressive enhancement
- Use CSS Grid and Flexbox for responsive layouts
- Create responsive navigation patterns (hamburger menu)
- Optimize images and media for different screen sizes
- Test and debug responsive designs across devices
- Deploy a responsive website

## Responsive Design Principles

### 1. Fluid Layouts
Instead of fixed pixel widths, use relative units (%, rem, vw, vh) and CSS Grid/Flexbox:

```css
/* Fixed - not responsive */
.container { width: 1200px; }

/* Fluid - responsive */
.container { width: 90%; max-width: 1200px; }
```

### 2. Flexible Media
Media should scale within their containing elements:

```css
img, video, iframe {
  max-width: 100%;
  height: auto;
}
```

### 3. Media Queries
Apply styles conditionally based on device characteristics:

```css
/* Mobile-first: base styles for mobile */
.grid { grid-template-columns: 1fr; }

/* Tablet */
@media (min-width: 768px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
}

/* Desktop */
@media (min-width: 1024px) {
  .grid { grid-template-columns: repeat(3, 1fr); }
}
```

### 4. Mobile-First Design
Start with the smallest screen and add complexity as screen size increases:

```css
/* Base: Mobile styles */
.content { padding: 1rem; }

/* Tablet+ */
@media (min-width: 768px) {
  .content { padding: 2rem; display: grid; grid-template-columns: 2fr 1fr; }
}
```

## Responsive Breakpoints

| Breakpoint | Target | Common Devices |
|------------|--------|----------------|
| 320px - 480px | Mobile phones | iPhone SE, Galaxy S |
| 481px - 768px | Large phones/tablets | iPad mini, Pixel |
| 769px - 1024px | Tablets/small laptops | iPad, Surface Pro |
| 1025px - 1200px | Desktops | Standard monitors |
| 1201px+ | Large screens | 27" monitors, TV |

## Responsive Navigation Patterns

### Hamburger Menu Pattern
```html
<nav class="nav">
  <button class="nav__toggle" aria-label="Toggle menu">☰</button>
  <ul class="nav__list" id="nav-list">
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
  </ul>
</nav>
```

```css
.nav__list { display: none; }

@media (min-width: 768px) {
  .nav__toggle { display: none; }
  .nav__list { display: flex; }
}

/* When menu is open via JS */
.nav__list--open { display: flex; }
```

## Responsive Images

```html
<img src="photo-800.jpg"
     srcset="photo-400.jpg 400w, photo-800.jpg 800w, photo-1200.jpg 1200w"
     sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 800px"
     alt="Description"
     loading="lazy">
```

## Testing Responsive Designs

1. **Browser DevTools** - Device mode, responsive mode
2. **Real devices** - Test on actual phones and tablets
3. **Online tools** - BrowserStack, Responsinator
4. **Viewport resizing** - Drag browser to different sizes
5. **Test all breakpoints** - Check navigation, content, images

## Common Responsive Pitfalls

| Problem | Solution |
|---------|----------|
| Fixed widths | Use max-width, relative units |
| Horizontal scroll | overflow-x: hidden, check widths |
| Tiny text on mobile | Base font-size: 16px |
| Touch targets too small | Minimum 44x44px tap area |
| Images overflowing | max-width: 100%; height: auto |
| Tables on mobile | Use responsive table patterns |
| Not enough contrast | Check WCAG contrast ratios |
| Missing viewport meta | Always include meta viewport tag |

## Summary Notes

- Responsive design adapts to any screen size
- Mobile-first approach starts with smallest screen
- Use relative units (%, rem, vw) not fixed pixels
- CSS Grid and Flexbox are essential for responsive layouts
- Media queries apply conditional styles at breakpoints
- Images need max-width: 100% and responsive srcset
- Navigation patterns must adapt for mobile
- Test on real devices and emulators
- Viewport meta tag is required
- Touch targets need adequate sizing
