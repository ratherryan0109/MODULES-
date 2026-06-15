# Mini Project: Layered Dashboard UI

## Objective
Build a complex dashboard interface that demonstrates mastery of z-index and stacking contexts through multiple overlapping UI components.

## Requirements

### Layout
- Fixed sidebar navigation (left side, full height)
- Fixed top header bar (full width)
- Main content area with scrollable content

### Components (each must use appropriate z-index)

1. **Fixed Header** (z-index: 1000)
   - App logo/name
   - User avatar dropdown
   - Notification bell with badge

2. **Fixed Sidebar** (z-index: 999)
   - Navigation links with icons
   - Collapsible menu sections
   - Active state indicator

3. **Content Cards**
   - Cards with absolutely positioned badges (New, Hot, Sale)
   - Cards should use `isolation: isolate` to contain badge z-index
   - Cards can be dragged (use absolutely positioned drag preview)

4. **Dropdowns**
   - User menu dropdown below avatar
   - Notifications dropdown panel
   - Dropdowns must appear above content but below modals

5. **Modal System**
   - Semi-transparent overlay
   - Modal dialog centered
   - Close button absolutely positioned in modal

6. **Toast Notifications**
   - Fixed position, bottom-right
   - Stack multiple toasts vertically
   - Must appear above all other content (including modals)

7. **Tooltips**
   - Appear on hover for sidebar items
   - Absolutely positioned
   - Highest z-index

### Z-index Scale (use CSS variables)

```css
:root {
  --z-content: 1;
  --z-sticky: 100;
  --z-sidebar: 500;
  --z-header: 1000;
  --z-dropdown: 1500;
  --z-overlay: 2000;
  --z-modal: 2500;
  --z-toast: 3000;
  --z-tooltip: 3500;
}
```

### Technical Requirements
- Use CSS custom properties for z-index scale
- Demonstrate at least one stacking context bug and fix it with `isolation: isolate`
- Ensure all layered components work correctly
- Page should not feel sluggish despite many positioned elements

## Deliverables
- `index.html` - Complete dashboard page
- `style.css` - All styles with proper z-index organization
- `script.js` - Interactivity (dropdowns, modals, toasts)

## Bonus Challenges
1. Add a walkthrough/tutorial overlay that highlights specific elements (requires very high z-index)
2. Implement a context menu (right-click) with proper stacking
3. Add drag-and-drop for cards with a semi-transparent ghost
4. Implement modal stacking (open modal from within another modal)

## Evaluation Criteria
- Correct z-index values used throughout
- Isolation used to contain stacking contexts
- All layered components stack correctly
- No z-index wars (999999 anti-pattern)
- CSS variables used for z-index scale
- Components work at different viewport sizes
