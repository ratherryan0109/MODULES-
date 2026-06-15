# Buttons — Cheatsheet

## Button Elements

| Element | Type Default | Content | Use Case |
|---------|-------------|---------|----------|
| `<button>` | `submit` | HTML content | Most flexible, recommended |
| `<input type="submit">` | N/A | Text (value attr) | Simple text-only submit |
| `<input type="reset">` | N/A | Text (value attr) | Reset form to initial values |
| `<input type="button">` | N/A | Text (value attr) | JavaScript actions |
| `<input type="image">` | N/A | Image (src attr) | Graphical submit button |

## Button Attributes

| Attribute | Applies To | Effect |
|-----------|-----------|--------|
| `type` | button, input | `submit`, `reset`, `button` |
| `value` | input | Button label text |
| `disabled` | both | Disable interaction |
| `autofocus` | both | Auto-focus on load |
| `form` | both | Associate with form by ID |
| `formaction` | submit | Override action URL |
| `formmethod` | submit | Override method |
| `formenctype` | submit | Override encoding |
| `formtarget` | submit | Override target |
| `formnovalidate` | submit | Skip validation |
| `name` | both | Submit name/value |
| `popovertarget` | both | Popover element ID |
| `popovertargetaction` | both | `show`, `hide`, `toggle` |

## CSS Styling

```css
button, input[type="submit"], input[type="reset"], input[type="button"] {
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  font-size: 15px;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.2s;
}

button:hover { opacity: 0.9; }
button:active { transform: scale(0.98); }
button:focus-visible { outline: 3px solid currentColor; outline-offset: 2px; }
button:disabled { opacity: 0.5; cursor: not-allowed; }
```

## Common Patterns

```html
<!-- Primary -->
<button type="submit" class="btn-primary">Save</button>

<!-- Danger -->
<button type="button" class="btn-danger" onclick="deleteItem()">Delete</button>

<!-- Loading -->
<button onclick="handleSubmit(this)" disabled>
  <span class="spinner"></span> Processing...
</button>

<!-- Icon button -->
<button aria-label="Close dialog">✕</button>

<!-- Toggle -->
<button aria-pressed="false" onclick="toggle(this)">Mute</button>

<!-- Split action -->
<button type="submit" formaction="/save">Save Draft</button>
<button type="submit" formaction="/publish">Publish</button>

<!-- Popover -->
<button popovertarget="menu" popovertargetaction="toggle">Menu</button>
```

## Accessibility

```html
<button aria-label="Action description">Icon</button>
<button aria-pressed="true/false">Toggle</button>
<button aria-busy="true">Loading...</button>
<button aria-disabled="true">Cannot save</button>
```

## States Reference

| State | Implementation | Visual |
|-------|---------------|--------|
| Normal | Default | Solid color |
| Hover | `:hover` | Darker/lighter |
| Active | `:active` | Scale down |
| Focus | `:focus-visible` | Outline ring |
| Disabled | `[disabled]` | Reduced opacity |
| Loading | Custom JS | Spinner + disabled |
| Toggle | `aria-pressed` | Two-color state |
