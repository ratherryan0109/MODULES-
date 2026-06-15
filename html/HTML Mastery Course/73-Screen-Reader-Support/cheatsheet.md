# Screen Reader Support - Cheatsheet

## Common Screen Readers
| Name | Platform | Cost | Key Command |
|------|----------|------|-------------|
| NVDA | Windows | Free | NVDA+Space (toggle modes) |
| JAWS | Windows | $1,100/yr | Insert+Z (toggle) |
| VoiceOver | macOS/iOS | Built-in | VO+U (Rotor) |
| Narrator | Windows | Built-in | Caps+Space (Scan mode) |
| TalkBack | Android | Built-in | Swipe gestures |

## Quick Navigation Keys (NVDA Browse Mode)
| Key | Navigates To | Key | Navigates To |
|-----|-------------|-----|-------------|
| H | Headings | 1-6 | Heading level |
| L | Links | T | Tables |
| D | Landmarks | F | Form fields |
| B | Buttons | G | Graphics |
| R | Radio buttons | X | Checkboxes |
| C | Combo boxes | Q | Blockquotes |
| K | Keyboard shortcuts | M | Frames |

## Screen Reader-Only CSS
```css
.sr-only {
    position: absolute;
    width: 1px; height: 1px;
    padding: 0; margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}
```

## Testing Checklist
- [ ] Skip link present and functional
- [ ] Heading hierarchy logical (no skipping levels)
- [ ] All images have alt text (or alt="" for decorative)
- [ ] Form fields have associated labels
- [ ] Links have descriptive text (no "click here")
- [ ] ARIA landmarks present (main, nav, banner, footer)
- [ ] Tables have headers (th) and scope
- [ ] Dynamic content uses aria-live or role="alert"
- [ ] Keyboard navigable without mouse
- [ ] Focus indicators visible
- [ ] Page title describes content
- [ ] Language declared (lang attribute)

## Dynamic Content Patterns
```html
<!-- Polite announcement -->
<div aria-live="polite" aria-atomic="true">
    New content will be announced here
</div>

<!-- Urgent announcement -->
<div role="alert">Error message</div>

<!-- Status update -->
<div role="status" aria-live="polite">
    Loading complete
</div>
```

## Focus Management
```javascript
// Focus after content update
element.setAttribute('tabindex', '-1');
element.focus();

// After modal closes
triggerElement.focus();
```

## Heading Structure Rule
```
h1 (page title) ─ ONE per page
  └─ h2 (major sections)
       └─ h3 (sub-sections)
            └─ h4 (details)
```

## Link Best Practices
- Descriptive: `<a href="#">Download report (PDF)</a>`
- Icon: `<a href="#" aria-label="Settings">⚙️</a>`
- Button: `<button aria-label="Close">×</button>`

## Common Issues
| Issue | Impact | Fix |
|-------|--------|-----|
| Missing labels | Can't fill forms | Add <label for="id"> |
| Empty links | No navigation context | Add descriptive text |
| Heading gaps | Broken outline | Fix hierarchy |
| No landmarks | Hard to navigate | Add ARIA landmarks |
| No focus style | Lost keyboard focus | Add :focus-visible |

## Browser + Screen Reader Testing Matrix
| Browser | NVDA | JAWS | VoiceOver |
|---------|------|------|-----------|
| Chrome | Best | Good | N/A |
| Firefox | Good | Good | N/A |
| Safari | N/A | N/A | Best |
| Edge | Good | Good | N/A |
