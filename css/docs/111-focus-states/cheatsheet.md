# Focus States Cheatsheet

## CSS Pseudo-Classes

| Selector | Trigger | Use |
|----------|---------|-----|
| `:focus` | Any focus (mouse, keyboard, programmatic) | Legacy support; use with caution |
| `:focus-visible` | Keyboard focus only | **Modern preferred** approach |
| `:focus-within` | Self or child has focus | Parent container highlighting |
| `:focus:not(:focus-visible)` | Mouse/programmatic focus only | Remove outline for non-keyboard |

## Focus Indicator Requirements (WCAG 2.2)

| Requirement | Specification |
|-------------|--------------|
| Minimum area | At least 2px thickness (or 4px on one side) |
| Minimum contrast | 3:1 against adjacent non-focus colors |
| Must cover | Full focus indicator perimeter |
| Must change | At least two visual properties (size, color, offset, style) |

## Properties for Focus Indicators

| Property | Pros | Cons |
|----------|------|------|
| `outline` | Doesn't affect layout, respects forced colors | Doesn't follow border-radius |
| `box-shadow` | Follows border-radius, customizable | Can be clipped, doesn't affect layout |
| `border` | Follows border-radius | Affects layout (shifts element) |
| `background` | Highly visible | May conflict with existing styles |

## Common Pattern

```css
/* Base interactive element style */
.element:focus-visible {
  outline: 2px solid #0066cc;
  outline-offset: 2px;
}

/* Safe universal reset */
:focus:not(:focus-visible) {
  outline: none;
}
```

## Keyboard Navigation Keys

| Key | Action |
|-----|--------|
| Tab | Move focus forward |
| Shift+Tab | Move focus backward |
| Enter/Space | Activate element |
| Escape | Close modal/dropdown |
| Arrow keys | Navigate within group |
| Home/End | First/Last in group |

## Focus Management Terms

| Term | Definition |
|------|------------|
| Focus trap | Locking focus within a component until dismissed |
| Roving tabindex | Only one element in a group has tabindex="0" |
| Skip link | Hidden link visible on focus to skip navigation |
| Focus order | The order elements receive focus (should match DOM order) |
| Programmatic focus | Using `.focus()` method in JavaScript |

## Dark Mode & High Contrast

```css
@media (prefers-color-scheme: dark) {
  :focus-visible {
    outline-color: #58a6ff;
  }
}

@media (forced-colors: active) {
  :focus-visible {
    outline: 2px solid Highlight;
  }
}
```
