# Module 15: CSS Icons

## Table of Contents
1. Introduction
2. Learning Objectives
3. Theory
   - Icon Libraries Overview
   - Font Awesome (Installation and Usage)
   - Bootstrap Icons (Installation and Usage)
   - Material Icons (Installation and Usage)
   - Styling Icons with CSS
   - Accessibility with Icons
   - SVG Icons (Inline and External)
   - Icon Fonts vs SVGs
   - Pseudo-Element Icons
   - Custom Icon Components
   - Icon Sprite Systems
4. Visual Explanation
5. Common Mistakes
6. Best Practices
7. Accessibility Considerations
8. Performance Considerations
9. Browser Compatibility
10. Summary Notes

## Introduction
Icons are visual symbols that communicate meaning quickly and save space. CSS can style icons from icon libraries like Font Awesome, Bootstrap Icons, Material Icons, or custom SVG icons. Icons enhance user interfaces by providing visual cues for actions, content types, and navigation.

Icons serve as universal visual language — a trash can icon conveys "delete" across languages, a magnifying glass means "search," and an envelope means "email." When used properly, icons reduce cognitive load, speed up scanning, and make interfaces more intuitive. However, icons also present accessibility challenges and performance considerations that every developer must understand.

## Learning Objectives
By the end of this module, you will be able to:
- Include icon libraries (Font Awesome, Bootstrap Icons, Material Icons) in HTML projects
- Style icon size, color, and spacing with CSS
- Use Font Awesome, Bootstrap Icons, and Material Icons correctly
- Add custom SVG icons styled with CSS
- Create accessible icons with proper ARIA labels
- Use icons in buttons, links, and navigation menus
- Choose between icon fonts and SVG icons for different scenarios
- Create icon systems with pseudo-elements
- Understand icon performance and loading strategies

## Theory

### Icon Libraries Overview
Three popular free icon libraries dominate the web:

**Comparison table:**

| Library | Approx. Count | License | Format | Class Prefix | Loading |
|---------|---------------|---------|--------|-------------|---------|
| Font Awesome | 2,000+ (Free), 5,000+ (Pro) | MIT/SIL | Icon font + SVG | `fas`/`far`/`fab` | CSS CDN or SVG JS |
| Bootstrap Icons | 1,900+ | MIT | SVG | `bi` | CSS CDN or individual SVG |
| Material Icons | 2,500+ | Apache 2.0 | Icon font + SVG | `material-icons` | CSS CDN or font |

### Font Awesome (Installation and Usage)
Font Awesome is the most widely used icon library, with versions 5 and 6 being current:

```html
<!-- CDN link (place in <head>) -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
```

```html
<!-- Usage -->
<i class="fas fa-home"></i>           <!-- Solid style -->
<i class="far fa-heart"></i>          <!-- Regular style -->
<i class="fab fa-github"></i>         <!-- Brand icons -->
```

**Class structure for Font Awesome 6:**
- `fas` — Font Awesome Solid (filled icons)
- `far` — Font Awesome Regular (outlined icons)
- `fal` — Font Awesome Light (thin icons, Pro only)
- `fad` — Font Awesome Duotone (two-color icons, Pro only)
- `fab` — Font Awesome Brands (company logos)

**Using Font Awesome with `<i>` vs `<span>`:**
```html
<!-- Both are valid -->
<i class="fas fa-user"></i>
<span class="fas fa-user"></span>
```

### Bootstrap Icons (Installation and Usage)
```html
<!-- CDN link -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css">
```

```html
<!-- Usage -->
<i class="bi bi-house-door"></i>
<i class="bi bi-person-circle"></i>
<i class="bi bi-search"></i>
```

Bootstrap Icons uses SVG-based icons embedded as a CSS font. The prefix is `bi` followed by `bi-` and the icon name.

**Individual SVG downloads:** Bootstrap Icons also offers each icon as a standalone SVG file, making it easy to use SVGs directly without a library.

### Material Icons (Installation and Usage)
```html
<!-- CDN link -->
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```

```html
<!-- Usage — uses text content, not a class suffix -->
<span class="material-icons">home</span>
<span class="material-icons">favorite</span>
<span class="material-icons-outlined">home</span>  <!-- Outlined style -->
```

**Material Icons styles:**
- `material-icons` — Filled (default)
- `material-icons-outlined` — Outlined
- `material-icons-round` — Rounded
- `material-icons-sharp` — Sharp
- `material-icons-two-tone` — Two-tone

### Styling Icons with CSS
Icon fonts can be styled like any text element:

```css
/* Size — use font-size */
.icon-small { font-size: 16px; }
.icon-medium { font-size: 24px; }
.icon-large { font-size: 48px; }
.icon-responsive { font-size: 1.25em; }  /* Scales with parent */

/* Color */
.icon-primary { color: #4299e1; }
.icon-success { color: #48bb78; }
.icon-danger { color: #f56565; }
.icon-custom:hover { color: #2b6cb0; }

/* Spacing */
.icon-left { margin-right: 8px; }
.icon-right { margin-left: 8px; }

/* Fixed width (icons same width for alignment) */
.fa-fw, .bi-fw { width: 1.25em; text-align: center; }

/* Rotation and animation */
.fa-spin {
  animation: fa-spin 2s infinite linear;
}
.fa-pulse {
  animation: fa-spin 1s infinite steps(8);
}

/* Layering icons (Font Awesome) */
.fa-layers {
  position: relative;
}
.fa-layers .fas {
  position: absolute;
}
```

**Complete button example:**
```css
.btn-icon {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  font-size: 16px;
  background: #4299e1;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
.btn-icon:hover {
  background: #2b6cb0;
}
.btn-icon .fas {
  font-size: 1.1em;  /* Slightly larger than text */
}
```

### Accessibility with Icons
Accessibility is the most critical consideration when using icons:

```html
<!-- DECORATIVE icon — hidden from screen readers -->
<button aria-label="Search">
  <i class="fas fa-search" aria-hidden="true"></i>
</button>

<!-- Icon with visible text label -->
<button>
  <i class="fas fa-trash" aria-hidden="true"></i>
  <span>Delete</span>
</button>

<!-- Standalone icon with accessible text -->
<i class="fas fa-heart" role="img" aria-label="Favorite"></i>

<!-- Using visually hidden text (best compatibility) -->
<button>
  <i class="fas fa-search" aria-hidden="true"></i>
  <span class="sr-only">Search</span>
</button>
```

**Rules for icon accessibility:**
1. **Decorative icons** (icons that don't convey meaning alone): Use `aria-hidden="true"`
2. **Informative icons** (icons that convey meaning): Provide text via `aria-label`, `aria-labelledby`, or visually hidden text
3. **Icon-only buttons**: Always provide an accessible name using `aria-label` or hidden text
4. **Brand icons** (social media logos): Use `aria-label` with the brand name

### SVG Icons (Inline)
SVG icons offer maximum flexibility — they can be styled directly with CSS:

```html
<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
</svg>
```

```css
.icon {
  width: 24px;
  height: 24px;
  color: #333;           /* Inherited by currentColor in SVG */
}
.icon:hover {
  color: #4299e1;
}

/* In a button */
.button svg {
  width: 1em;            /* Match button font size */
  height: 1em;
  vertical-align: middle;
}
```

**Advantages of inline SVGs over icon fonts:**
- Guaranteed rendering — no cross-browser icon font bugs
- Multi-color icons possible
- `currentColor` inheritance for adaptive theming
- Scalable without quality loss at any size
- Animatable individual paths
- No external library dependency

### Icon Fonts vs SVGs

| Aspect | Icon Fonts | Inline SVGs |
|--------|-----------|-------------|
| Rendering | Text — may render differently across OSes | Vector — consistent across all platforms |
| Styling | CSS color, font-size (single color only) | CSS color, fill, stroke, individual paths |
| Multi-color | Not possible in free tiers | Yes, multiple colors per icon |
| Performance | Single font file, many icons | Each `<svg>` is inline HTML (can be bundled) |
| Accessibility | Complex (need aria-hidden, focus management) | Simpler — can use `<title>` and `<desc>` |
| Positioning | May have baseline alignment issues | Precise control with viewBox |
| Loading | Blocking (font file must load) | Non-blocking (in HTML) |

**When to use each:**
- **Icon fonts**: Quick prototyping, simple UIs, projects where performance of single font file matters
- **Inline SVGs**: Production applications, designs needing multi-color icons, exact rendering requirements
- **External SVGs** (via `<img>` or `background-image`): When you don't need CSS styling of the SVG internals

### Pseudo-Element Icons
Icons can be added via CSS without modifying HTML — useful for consistent decorative icons:

```css
/* Icon font via pseudo-element */
[data-icon]::before {
  font-family: 'Font Awesome 6 Free';
  font-weight: 900;
  content: attr(data-icon);
  margin-right: 8px;
}

/* SVG via pseudo-element (background-image) */
.external-link::after {
  content: '';
  display: inline-block;
  width: 0.8em;
  height: 0.8em;
  margin-left: 4px;
  background: url('external-link.svg') no-repeat center;
  background-size: contain;
}
```

### Custom Icon Components
For design systems, create reusable icon components:

```css
/* Icon size system */
.icon--xs { width: 12px; height: 12px; }
.icon--sm { width: 16px; height: 16px; }
.icon--md { width: 24px; height: 24px; }
.icon--lg { width: 32px; height: 32px; }
.icon--xl { width: 48px; height: 48px; }

/* Icon with container */
.icon-wrapper {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #ebf8ff;
  color: #4299e1;
}

/* Icon button */
.icon-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: 8px;
  transition: background 0.2s;
}
.icon-button:hover {
  background: #f7fafc;
}
```

## Visual Explanation
```
Icon Accessibility Patterns:

  Decorative Icon (with text):
  [🗑] Delete
     ↑ aria-hidden="true"

  Icon-only Button:
  [🔍]
   ↑ aria-label="Search" or
     <span class="sr-only">Search</span>

  Informative Icon:
  [❤️] Favorite
   ↑ role="img" aria-label="Favorite"

SVG Icon Structure:

  <svg class="icon" viewBox="0 0 24 24" ...>
    <title>Home</title>        ← Accessible name
    <desc>A house icon</desc>  ← Description (optional)
    <path d="..." />           ← Icon shape data
  </svg>
```

## Common Mistakes
1. **Missing CDN link**: Icons don't appear without the library CSS loaded first — always check the `<link>` tag is present
2. **Wrong class prefix**: Different libraries use different prefixes — Font Awesome uses `fas fa-`, Bootstrap uses `bi bi-`, Material uses `material-icons` class with text content
3. **Not hiding decorative icons from screen readers**: Every decorative icon must have `aria-hidden="true"` — this is the most common icon accessibility failure
4. **Icon-only buttons without accessible labels**: Buttons with only an icon MUST have `aria-label`, `aria-labelledby`, or visually hidden text
5. **Using outdated icon libraries**: Font Awesome 4 vs 5/6 have different class names — FA4 used `fa fa-` (v4) vs `fas fa-` (v5+)
6. **Overriding icon font-family**: Setting `font-family` on a parent can break icon rendering because icon fonts use their own font-family
7. **Using icon fonts for complex illustrations**: Icon fonts are single-color — use inline SVGs for multi-color or detailed graphics
8. **Not testing icon rendering across devices**: Icon fonts may render differently on Windows vs macOS due to font rendering engines
9. **Forgetting `display: inline-flex` for icon+text alignment**: Icons and text often need `align-items: center` for proper vertical alignment
10. **Loading all icons when only a few are needed**: Icon libraries include hundreds or thousands of icons — consider subsetting or using only the SVGs you need

## Best Practices
- Always use `aria-hidden="true"` on decorative icons (icons that don't convey essential meaning)
- Use `role="img"` and `aria-label` for standalone informative icons
- Use `<span>` or `<i>` for icon font icons; use `<svg>` for inline SVG icons
- Set `pointer-events: none` on decorative icons to prevent accidental interactions
- Use `display: inline-flex` with `align-items: center` when combining icons with text
- Prefer inline SVGs over icon fonts for production applications (better rendering, multi-color support)
- Use `currentColor` in SVG icons to inherit parent text color
- Create a consistent icon sizing system (xs, sm, md, lg, xl)
- Consider self-hosting icons or using a subset for better performance control
- Use SVG sprites when you need many icons on a page with minimal HTTP requests

```css
/* Best practice icon+text alignment */
.icon-text {
  display: inline-flex;
  align-items: center;
  gap: 0.5em;  /* Consistent spacing between icon and text */
}
```

## Accessibility Considerations
- **WCAG 1.1.1 Non-text Content**: All non-decorative icons need text alternatives
- **WCAG 4.1.2 Name, Role, Value**: Interactive icon buttons must have accessible names
- Decorative icons: Use `aria-hidden="true"` — screen readers will ignore them
- Informative icons: Use `role="img"` with `aria-label` or include a `<title>` in SVGs
- Icon-only links/buttons must have text alternatives (hidden text or aria-label)
- Test with a screen reader (NVDA, VoiceOver, JAWS) to verify icon announcements
- Ensure color contrast for icons that convey information (minimum 3:1 against background)
- Don't rely on icons alone to convey critical information — pair with text when possible
- Consider users with low vision who may use high contrast mode — test with forced-colors

```html
<!-- Preferred icon-only button pattern -->
<button aria-label="Delete item">
  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24">
    <path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m3 0v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6h14z"/>
  </svg>
</button>
```

## Performance Considerations
- **Icon fonts**: Single font file, all icons in one request — but the full file must load even if you only use 3 icons
- **Inline SVGs**: No additional HTTP requests, but increase HTML size — can be cached if in a component library
- **External SVG files**: Cached separately, one HTTP request per file (or use SVG sprite)
- **Icon library CDN**: Add latency — use a fast CDN, preconnect, or self-host
- **Font loading**: Icon fonts can cause FOIT (Flash of Invisible Icons) — use `font-display: swap` if self-hosting
- **Tree-shaking**: When using build tools, import only the icons you use (e.g., `@fortawesome/free-solid-svg-icons`)
- **SVG optimization**: Run SVGs through SVGO to remove unnecessary metadata, reducing file size by 20-50%
- **CSS-only icons** (like those made with borders and transforms): Zero external resources, but limited in complexity

```javascript
// Tree-shaken Font Awesome (with @fortawesome packages)
import { faUser, faCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
```

## Browser Compatibility
| Feature | Chrome | Firefox | Safari | Edge | Opera | IE |
|---------|--------|---------|--------|------|-------|----|
| Icon fonts (CSS @font-face) | 5+ | 3.5+ | 3.1+ | 12+ | 10+ | 9+ |
| Inline SVG | 7+ | 4+ | 5.1+ | 79+ | 11.6+ | 9+ |
| SVG as img/background | 4+ | 3.5+ | 3.2+ | 12+ | 9+ | 9+ |
| CSS masks (SVG as mask) | 4+ | 53+ | 4+ | 79+ | 15+ | No |

Icon fonts and SVGs are well-supported across all modern browsers. For legacy browsers (IE9-11), icon fonts may have positioning bugs, and SVGs may need fallbacks.

## Summary Notes
- Three major icon libraries: Font Awesome (`fas fa-`), Bootstrap Icons (`bi bi-`), Material Icons (`material-icons`)
- Style icons with CSS: `font-size` (size), `color`, `margin`, `padding`
- Always use `aria-hidden="true"` for decorative icons
- Use `aria-label` for icon-only interactive elements
- Inline SVGs offer maximum flexibility: multi-color, `currentColor` inheritance, animation
- Icon fonts are single-color only; SVGs can have multiple colors
- Pseudo-elements (`::before`/`::after`) can add icons via `content` or `background-image`
- Use `display: inline-flex` with `align-items: center` for icon+text alignment
- Prefer inline SVGs over icon fonts for production applications
- Tree-shake icon libraries — only load the icons you actually use
- Optimize SVGs with SVGO before using them
- Ensure all non-decorative icons have text alternatives for screen readers
- Test icon-based interactions with screen readers and keyboard navigation
- Handle FOIT for icon fonts by using appropriate loading strategies
