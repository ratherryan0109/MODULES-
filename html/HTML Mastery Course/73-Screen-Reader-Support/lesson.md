# Screen Reader Support

## What is a Screen Reader?
A screen reader is assistive technology software that converts digital text into synthesized speech or braille output. It allows people who are blind or have low vision to navigate websites, read content, and interact with applications. Popular screen readers include NVDA (Windows, free), JAWS (Windows, commercial), VoiceOver (macOS/iOS, built-in), Narrator (Windows, built-in), and TalkBack (Android, built-in).

## How Screen Readers Interact with Web Content
Screen readers parse the DOM (Document Object Model) and generate an accessibility tree — a subset of elements containing semantic information. Users navigate via:
- **Virtual Cursor/Browse Mode**: Default mode for reading content, navigating by element type (headings, links, landmarks, form controls)
- **Focus Mode**: Activated on interactive elements, direct keyboard input passes to the page
- **Forms Mode**: Special mode for form filling with automatic field announcement
- **Quick Navigation Keys**: Single-key shortcuts (H for headings, L for links, G for graphics, T for tables)

## Screen Reader Navigation Patterns

### Navigation by Element Type
Users can jump between specific element types using keyboard shortcuts:

| Key | Element | Key | Element |
|-----|---------|-----|---------|
| H | Headings | 1-6 | Heading level 1-6 |
| L | Links | T | Tables |
| G | Graphics | F | Form fields |
| B | Buttons | C | Combo boxes |
| R | Radio buttons | X | Checkboxes |
| Q | Blockquotes | M | Frames |
| D | Landmarks | K | Keyboard shortcuts |

### Navigation by Region
- Tab: Move between focusable elements
- Arrow keys: Read character by character (with modifier) or navigate by element
- Insert+F7 (NVDA): Show element list dialog
- VO+U (VoiceOver): Show rotor for quick navigation

## Optimizing Content for Screen Readers

### Text Alternatives
Every non-text element must have a text alternative:
```html
<!-- Informative images -->
<img src="chart.png" alt="Q3 sales increased 25% compared to Q2">

<!-- Decorative images -->
<img src="divider.png" alt="" role="presentation">

<!-- Complex images -->
<figure>
    <img src="organization-chart.png" alt="Company organizational structure">
    <figcaption>Detailed description: CEO at top, VP levels below...</figcaption>
</figure>
```

### Semantic Structure
Screen readers rely heavily on structure:
```html
<!-- Poor -->
<div class="heading">My Title</div>
<div class="section">Content</div>

<!-- Good -->
<h1>My Title</h1>
<section aria-labelledby="section-title">
    <h2 id="section-title">Section Name</h2>
    <p>Content</p>
</section>
```

### Link Text
Link text must be descriptive out of context:
```html
<!-- Bad -->
Click <a href="/docs/guide.pdf">here</a> for the guide.

<!-- Good -->
<a href="/docs/guide.pdf">Download the PDF guide (2.4 MB)</a>

<!-- Icon links -->
<a href="/settings" aria-label="Settings">
    <svg aria-hidden="true"><!-- gear icon --></svg>
</a>
```

### Table Accessibility
Tables require proper structure for screen reader navigation:
```html
<table>
    <caption>Monthly Sales Report 2024</caption>
    <thead>
        <tr>
            <th scope="col">Month</th>
            <th scope="col">Revenue</th>
            <th scope="col">Expenses</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">January</th>
            <td>$50,000</td>
            <td>$30,000</td>
        </tr>
    </tbody>
</table>
```

## Screen Reader-Specific Considerations

### Dynamic Content Announcements
Use `aria-live` regions and `role="alert"` for updates:
```html
<!-- Cart updates -->
<div aria-live="polite" id="cart-status" class="sr-only">
    Cart updated: 3 items, total $45.00
</div>

<!-- Error announcements -->
<div role="alert" id="form-errors">
    <ul>
        <li>Email address is required</li>
        <li>Password must be 8+ characters</li>
    </ul>
</div>
```

### Status Messages
WCAG 2.2 requires status messages to be programmatically determinable:
```html
<!-- Search results -->
<div role="status" aria-live="polite">
    Showing 15 of 150 results
</div>

<!-- Loading -->
<div role="status" aria-label="Loading content">
    <span aria-hidden="true" class="spinner"></span>
</div>
```

### Focus Management
When content changes dynamically, manage focus:
```javascript
// After navigation in SPA
function navigateToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.focus();
    // Prevent scroll jump for non-interactive elements
    section.setAttribute('tabindex', '-1');
}

// After modal closes
function closeModal() {
    const trigger = document.querySelector('[data-trigger-modal]');
    trigger.focus();
}
```

### Off-Screen Content
Use CSS clipping pattern for screen reader-only text:
```css
.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
}
```

## Screen Reader Testing Methodology

### Setup Testing Environment
1. Install NVDA (Windows) or use VoiceOver (Mac)
2. Disable mouse (test keyboard-only navigation)
3. Use latest Chrome or Firefox
4. Adjust speech rate for comfortable listening

### Test Script Template
```
1. Navigate to page
2. Press H - Verify heading structure announced
3. Press D - Verify landmarks announced
4. Press L - Verify links announced with context
5. Press T - Verify tables announced
6. Tab through interactive elements - Verify focus indicators
7. Fill out form - Verify labels announced
8. Submit form - Verify errors announced
9. Test dynamic updates - Verify live regions announce
```

### Common Issues Found During Testing
1. **Missing labels**: Form fields without associated labels
2. **Empty links**: `<a href="#">Read more</a>` without context
3. **Heading gaps**: Jumping from h2 to h4 without h3
4. **Orphaned landmarks**: Content outside any landmark
5. **Unlabeled iframes**: `<iframe>` without title attribute
6. **Status not announced**: Dynamic updates without live regions
7. **Focus lost**: Dynamic content changes without focus management
8. **Redundant announcements**: aria-live regions announcing old content
9. **Image maps**: Complex clickable areas without text alternatives
10. **Data tables**: Table headers not properly associated

## Screen Reader Differences

### NVDA (Windows)
- Browse mode (NVDA+Space to toggle)
- Elements list: NVDA+F7
- Most widely used free screen reader
- Best for general testing

### JAWS (Windows)
- Virtual PC cursor (Insert+Z to toggle)
- List of headings/links: Insert+F6
- Most popular commercial screen reader
- Industry standard for enterprise

### VoiceOver (macOS/iOS)
- Rotor: VO+U (Mac), rotate two fingers (iOS)
- Navigate by: VO+Arrow keys
- Built into Apple ecosystem
- Safari best support

### Narrator (Windows)
- Scan mode: Caps+Space
- Built into Windows
- Improving support
- Good for quick checks

## Best Practices Summary

1. **Structure first**: Proper semantic HTML is the foundation
2. **Descriptive text**: Links, images, and buttons need context
3. **Live regions**: Announce dynamic changes appropriately
4. **Focus management**: Guide users through application flows
5. **Test early, test often**: Screen reader test throughout development
6. **Don't rely on one screen reader**: Test with at least NVDA and VoiceOver
7. **ARIA is supplement, not replacement**: Use native HTML first
8. **Status messages**: Use role="status" for non-critical updates
9. **Keyboard is required**: All functionality must be keyboard operable
10. **Document accessibility**: Note known issues and workarounds
