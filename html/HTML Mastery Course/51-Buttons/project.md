# Buttons — Project: Button Component Library

## Objective
Build a reusable, accessible button component library with multiple variants, sizes, and states, using vanilla HTML/CSS/JS. The library should demonstrate all button types (`submit`, `reset`, `button`), form overrides, loading states, and keyboard accessibility.

## Requirements

### Core Components
1. **Primary Button** — solid background, white text, used for main actions
2. **Secondary Button** — gray background, dark text, for alternative actions
3. **Danger Button** — red background, white text, destructive actions
4. **Ghost Button** — transparent background, dark text, subtle actions
5. **Outline Button** — bordered, primary color, secondary primary action

### Features
6. **Size Variants** — small (8px padding), medium (12px), large (16px)
7. **Disabled State** — reduced opacity, `not-allowed` cursor, no click events
8. **Loading State** — spinner replaces or precedes text, button disabled
9. **Icon Support** — icon slot before and after text
10. **Block Button** — full-width variant

### Interactive Demo Page
11. **Button Playground** — controls to switch variant, size, state, and see live preview
12. **HTML Code Output** — displays the generated `<button>` HTML
13. **Multi-Button Form Demo** — form with Save Draft (`formnovalidate`), Publish, Preview (`formtarget`, `formmethod`, `formaction`)
14. **Popover Button** — uses the Popover API to show/hide a tooltip or menu

### Accessibility Requirements
15. All buttons have visible `:focus-visible` outlines
16. Icon buttons have `aria-label`
17. Loading buttons use `aria-busy="true"`
18. Toggleable buttons use `aria-pressed`
19. Disabled buttons use `aria-disabled`
20. Keyboard navigable (Tab, Enter, Space)

## Deliverables
- `index.html` — single file containing all components, demo, and playground
- All CSS inline or in a `<style>` block
- All JavaScript inline or in a `<script>` block
- No external dependencies

## Evaluation
| Criteria | Points |
|----------|--------|
| All variants implemented | 2 |
| All states implemented | 2 |
| Form override demos | 2 |
| Popover API demo | 1 |
| Button playground | 3 |
| Accessibility | 3 |
| Code quality & comments | 2 |
| Visual design & polish | 2 |
| Generated HTML output | 1 |
| No external dependencies | 2 |

## Bonus
- Dark/light theme toggle for the demo page
- Animation on button press (ripple effect)
- Button that shows a confirmation `<dialog>` before deleting
- Split button pattern (primary action + dropdown menu)
