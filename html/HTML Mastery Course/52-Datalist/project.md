# Datalist — Project: Smart Autocomplete Search

## Objective
Build an employee directory search page that uses a `<datalist>` for autocomplete suggestions but also provides a custom-styled fallback combobox when JavaScript is available. The page must demonstrate dynamic datalist updates, multiple input types, and a polished user experience.

## Requirements

### Core Features
1. **Employee Search Input** — text input with datalist containing 20+ employee names
2. **Department Filter** — select dropdown (Engineering, Marketing, Sales, HR) that filters the datalist suggestions
3. **Dynamic Datalist** — options update based on the selected department
4. **Role/Position Input** — second input with its own datalist showing job titles
5. **Location Input** — third input with datalist showing office locations

### JavaScript Enhancement
6. **Custom Combobox** — Replace native datalist popup with a styled dropdown (div-based) with hover and keyboard navigation
7. **Keyboard Support** — Arrow keys, Enter to select, Escape to close
8. **Debounced Filtering** — Wait 200ms after typing before filtering (for performance)
9. **Selected Value Display** — Show a tag/chip of the selected value below the input
10. **No-JS Fallback** — Page works with native datalist when JavaScript is disabled

### Visual Design
11. **Clean, modern UI** — using system fonts, subtle shadows, rounded corners
12. **Responsive** — works on mobile (touch-friendly list items)
13. **Focus styles** — visible focus indicators on all interactive elements
14. **Loading state** — subtle debounce indicator while typing

### Accessibility
15. Proper `<label>` associations for all inputs
16. `aria-expanded`, `aria-activedescendant`, `role="combobox"`, `role="listbox"`, `role="option"`
17. Screen reader announcements for suggestion count
18. Visible focus ring on the combobox

## Deliverables
- `index.html` — single file with all HTML, CSS, and JavaScript
- `noscript` fallback using native datalist
- No external dependencies

## Evaluation
| Criteria | Points |
|----------|--------|
| Employee datalist with 20+ names | 1 |
| Department filter affects datalist | 2 |
| Combobox with custom styling | 3 |
| Keyboard navigation (arrows, enter, escape) | 2 |
| Debounced filtering | 1 |
| Accessibility (ARIA, labels, focus) | 3 |
| Mobile responsive | 2 |
| No-JS fallback | 1 |
| Visual polish | 2 |
| Code quality & comments | 2 |

## Bonus
- Multiple selection with chips/tags
- AJAX search fetching from a mock API
- Recent searches section below the input
- Highlight matched text in dropdown
