# Accessible Components Cheatsheet

## Accordion
| Attribute | Usage |
|-----------|-------|
| `aria-expanded` | On trigger button, true/false |
| `aria-controls` | ID of controlled panel |
| `role="region"` | On panel, with aria-labelledby |

## Tabs
| Element | Role | Attributes |
|---------|------|-----------|
| Container | `tablist` | — |
| Tab | `tab` | `aria-selected`, `aria-controls` |
| Panel | `tabpanel` | `aria-labelledby` (tab's ID) |
| **Keyboard**: Left/Right arrows, Home/End |

## Modal Dialog
| Attribute | Usage |
|-----------|-------|
| `role="dialog"` / `alertdialog` | Container |
| `aria-modal="true"` | Blocks background access |
| `aria-labelledby` | Dialog title |
| **Keyboard**: Tab trap, Escape to close |

## Tooltip
| Attribute | Usage |
|-----------|-------|
| `role="tooltip"` | Tooltip element |
| `aria-describedby` | On trigger, points to tooltip ID |
| **Trigger**: Hover + focus |

## Form Controls
| State | Attribute |
|-------|-----------|
| Invalid | `aria-invalid="true"` |
| Error message | `aria-describedby` → error ID |
| Required | `aria-required="true"` |
| Disabled | `aria-disabled="true"` |

## CSS Patterns
```css
/* Accordion */
[aria-expanded="true"] .icon { transform: rotate(180deg); }

/* Tab selected */
[role="tab"][aria-selected="true"] {
  border-bottom: 3px solid var(--primary);
}

/* Visually hidden (screen reader only) */
.sr-only {
  position: absolute;
  width: 1px; height: 1px;
  padding: 0; margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  white-space: nowrap;
  border: 0;
}
```
