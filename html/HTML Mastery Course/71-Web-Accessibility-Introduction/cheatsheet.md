# Web Accessibility Introduction - Cheatsheet

## WCAG 4 Principles (POUR)
- **Perceivable**: Content must be presentable to users in ways they can perceive
- **Operable**: UI components and navigation must be operable
- **Understandable**: Information and UI must be understandable
- **Robust**: Content must work with current/future assistive technologies

## WCAG Conformance Levels
| Level | Description | Common Requirements |
|-------|-------------|-------------------|
| A | Minimum | Alt text, keyboard access, captions |
| AA | Standard (legal req) | 4.5:1 contrast, descriptive headings |
| AAA | Highest (not always possible) | 7:1 contrast, sign language |

## Key Requirements (WCAG AA)
- Color contrast: 4.5:1 (normal text), 3:1 (large text)
- Keyboard operable: All functions via keyboard
- Focus visible: Clear focus indicator
- Headings: Proper hierarchy (h1-h6)
- Alt text: Meaningful descriptions for images
- Forms: Labels associated with inputs
- Captions: For prerecorded video/audio
- Resize: Text can zoom to 200% without loss

## HTML Semantics
```html
<header role="banner">Site header</header>
<nav role="navigation" aria-label="Main">Navigation</nav>
<main role="main" id="main-content">Primary content</main>
<aside role="complementary">Sidebar</aside>
<footer role="contentinfo">Footer info</footer>
```

## Accessible Forms
```html
<label for="email">Email:</label>
<input type="email" id="email" name="email" aria-required="true" aria-describedby="email-hint">
<span id="email-hint">We'll never share your email</span>
```

## Skip Link Pattern
```html
<a href="#main-content" class="skip-link">Skip to main content</a>
<!-- CSS: .skip-link:focus { top: 0; } -->
```

## Focus Management
- Never use `outline: none` without alternative
- Use `:focus-visible` for keyboard-only focus indicators
- Tab order follows DOM order (avoid positive tabindex)
- Use `tabindex="-1"` for programmatic focus

## Testing Tools
- **Automated**: axe DevTools, WAVE, Lighthouse
- **Manual**: Keyboard-only testing, Screen reader (NVDA/VoiceOver)
- **Color**: WebAIM Contrast Checker, Color Oracle

## ARIA First Rule
"Don't use ARIA if you can use a native HTML element that has the semantics you need."
- Use `<nav>` not `role="navigation"` on `<div>`
- Use `<button>` not `role="button"` on `<div>`

## Common Mistakes
- Missing form labels
- Low contrast text
- No focus indicator
- Non-semantic structure
- Missing alt text
- Keyboard traps
- Auto-playing media
- Time limits without warning
