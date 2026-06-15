# CSS Pseudo-classes

## Introduction
CSS pseudo-classes select elements based on their state or position rather than their attributes in the DOM. They enable dynamic styling for interactive elements, structural targeting, and form states without JavaScript.

## Learning Objectives
1. Understand what pseudo-classes are and how they differ from regular classes
2. Master dynamic pseudo-classes (:hover, :focus, :active, :visited)
3. Use structural pseudo-classes (:first-child, :last-child, :nth-child, :nth-of-type)
4. Apply form state pseudo-classes (:valid, :invalid, :disabled, :checked)
5. Combine pseudo-classes for precise targeting
6. Use negation pseudo-class (:not) for exclusion
7. Implement UI element states (:target, :empty)
8. Apply pseudo-classes in forms for validation feedback
9. Understand specificity with pseudo-classes
10. Follow best practices for interactive pseudo-classes

## Theory

### What are Pseudo-classes?
Pseudo-classes start with a colon (:) and represent a state or condition of an element. They can target elements that are in a certain state (e.g., hovered) or at a certain position (e.g., first child). Unlike regular CSS classes, pseudo-classes are dynamic — they can change based on user interaction, document structure, or form state without any JavaScript.

### Difference from Regular Classes
Regular classes (`.class`) are explicitly assigned in HTML and do not change unless the markup or JavaScript changes. Pseudo-classes, by contrast, are evaluated by the browser in real time. An element might match `:hover` one moment and not match it the next. This dynamic nature makes pseudo-classes powerful for interactive styling but also means they must be carefully ordered to avoid conflicts.

### How Browsers Evaluate Pseudo-classes
The browser continuously evaluates pseudo-classes as the user interacts with the page. When a pseudo-class state changes (e.g., the user hovers over a button), the browser recalculates styles and repaints the affected elements. Modern browsers optimize this process by only recalculating elements whose pseudo-class state changed, rather than the entire document.

### The LVHA Rule
For link pseudo-classes, the order in which they are defined matters because all four can apply to the same element. The correct order is: `:link`, `:visited`, `:hover`, `:active` (LVHA). This is because later rules override earlier ones with the same specificity. If `:hover` came before `:link`, visited links would never show the hover style.

## Common Pseudo-classes

### Dynamic/User Action
```css
a:link { }         /* Unvisited link */
a:visited { }      /* Already visited link */
a:hover { }        /* Mouse over */
a:focus { }        /* Keyboard focus */
a:active { }       /* During click */
:focus-within { }  /* Element has a focused child */
:focus-visible { } /* Focus visible to user (keyboard) */
```

### Structural
```css
:first-child { }       /* First child of parent */
:last-child { }        /* Last child of parent */
:nth-child(n) { }      /* nth child (an+b formula) */
:nth-last-child(n) { } /* nth from end */
:nth-of-type(n) { }    /* nth of its type */
:first-of-type { }     /* First of its type */
:last-of-type { }      /* Last of its type */
:only-child { }        /* Only child of parent */
:empty { }             /* No children (including text) */
```

Structural pseudo-classes are particularly powerful for styling lists, tables, and repeated content without adding classes to each item.

### Form State
```css
input:valid { }
input:invalid { }
input:required { }
input:optional { }
input:disabled { }
input:enabled { }
input:checked { }
input:in-range { }
input:out-of-range { }
input:placeholder-shown { }
input:read-only { }
input:read-write { }
```

### Functional Pseudo-classes
```css
:not(selector) { }     /* Negation — matches elements NOT matching selector */
:is(selector) { }      /* Matches if any selector matches (forgiving list) */
:where(selector) { }   /* Same as :is() but 0 specificity */
:has(selector) { }     /* Parent with matching descendants */
```

The `:is()` and `:where()` pseudo-classes are particularly useful for reducing selector repetition. For example, instead of `header h1, main h1, footer h1`, you can write `:is(header, main, footer) h1`.

### Other
```css
:target { }            /* URL hash target */
:root { }              /* Document root (<html>) */
:lang(language) { }    /* Language */
:dir(direction) { }    /* Directionality */
```

## Examples

### Hover and Focus
```css
button:hover {
  background: darkblue;
}
button:focus {
  outline: 2px solid blue;
}
button:focus-visible {
  outline: 3px solid blue; /* Only for keyboard focus */
}
```

### Striped Table
```css
tr:nth-child(even) {
  background: #f2f2f2;
}
tr:nth-child(odd) {
  background: #ffffff;
}
/* Using an+b formula */
tr:nth-child(3n+1) {
  border-left: 3px solid blue;
}
```

### Form Validation
```css
input:valid {
  border-color: green;
}
input:invalid {
  border-color: red;
}
input:required {
  border-left: 3px solid orange;
}
```

### Targeting with :not()
```css
/* Style all inputs except checkboxes */
input:not([type="checkbox"]) {
  display: block;
  width: 100%;
}
/* Style all list items except the last */
li:not(:last-child) {
  border-bottom: 1px solid #ccc;
}
```

### Using :has() (Parent Selector)
```css
/* Style a form group that contains an invalid input */
.form-group:has(input:invalid) {
  background: #fff5f5;
}
/* Style a card that contains an image */
.card:has(img) {
  grid-column: span 2;
}
```

## Visual Explanation

```
Dynamic Pseudo-classes:
┌────────────────────────────────────┐
│  :link     → Unvisited link (blue) │
│  :visited  → Visited link (purple) │
│  :hover    → Mouse over (underline)│
│  :focus    → Keyboard focus (outline│
│  :active   → During click (red)    │
└────────────────────────────────────┘

Structural Pseudo-classes:
┌────────────────────────────────────┐
│ :first-child     → ①               │
│ :nth-child(2)    → ②               │
│ :nth-child(3)    → ③  ← Odd/even  │
│ :nth-child(4)    → ④               │
│ :last-child      → ⑤               │
└────────────────────────────────────┘

The an+b Formula:
nth-child(2n+1) = odd positions: ①, ③, ⑤, ⑦...
nth-child(3n) = every 3rd: ③, ⑥, ⑨...
nth-child(n+4) = from 4th onward: ④, ⑤, ⑥...
nth-child(-n+3) = first 3: ①, ②, ③
```

## Common Mistakes

1. **LVHA order**: `:link`, `:visited`, `:hover`, `:active` must be in this order for links
2. **:nth-child vs :nth-of-type**: Confusing which one to use — `:nth-child` counts all children regardless of type; `:nth-of-type` only counts siblings of the same element type
3. **:not() specificity**: `:not()` itself doesn't add specificity, but the selector inside it does
4. **Form pseudo-classes without validation**: `:valid`/`:invalid` need HTML5 validation attributes (like `required`, `pattern`, `type`) to work
5. **Over-relying on :hover**: Remember touch devices don't have hover — always provide `:focus` as well
6. **:empty misunderstanding**: `:empty` matches elements with no children at all, including text nodes and whitespace
7. **Nesting :not()**: `:not(:not(...))` is not allowed; `:not()` can now take a selector list in modern browsers

## Best Practices

1. Always follow LVHA order for link states
2. Provide both `:hover` and `:focus` for accessibility
3. Use `:focus-visible` instead of `:focus` for keyboard-only focus indicators
4. Don't rely solely on `:hover` for interactive effects
5. Use `:nth-child` for tables, `:nth-of-type` for mixed content
6. Combine `:not()` with other selectors for clean exclusions
7. Use form pseudo-classes for real-time validation feedback
8. Use `:is()` to group selectors and reduce repetition
9. Use `:where()` when you need group selectors with zero specificity
10. Use `:has()` for parent-aware styling (modern browsers only)

## Specificity

Pseudo-classes have the same specificity as regular classes (0,1,0).

```css
a:hover { }         /* 0,1,1 */
li:first-child { }  /* 0,1,1 */
input:valid { }     /* 0,1,1 */
:is(.special, p) { }  /* Specificity = strongest arg: 0,1,0 */
:where(.special, p) { } /* Specificity = 0,0,0 always */
```

The difference between `:is()` and `:where()` is specificity: `:is()` takes the specificity of its most specific argument, while `:where()` always has zero specificity. This makes `:where()` ideal for resets and base styles that should be easy to override.

## Accessibility

- Always include `:focus` styles for keyboard users
- Don't remove `:focus` outlines without providing alternatives
- `:hover`-only effects exclude touch and keyboard users
- Use `@media (hover: hover)` for hover-only effects
- Ensure color isn't the only indicator (visited links)
- Use `:focus-visible` to avoid showing focus rings on mouse clicks while keeping them for keyboard navigation
- Form validation pseudo-classes should be accompanied by text-based error messages for screen readers
- Test all interactive pseudo-class states with keyboard navigation

## Performance

- Pseudo-classes are well-optimized in modern browsers
- `:nth-child` complex formulas can be slightly slower on very large DOMs
- `:not()` with complex selectors may impact performance
- `:has()` is more computationally expensive because the browser must check descendants
- Generally, pseudo-classes are fast and their performance impact is negligible for most pages
- For pages with tens of thousands of elements, prefer class-based styling over structural pseudo-classes

## Browser Compatibility

| Pseudo-class | Chrome | Firefox | Safari | Edge | IE |
|-------------|--------|---------|--------|------|----|
| Basic (`:hover`, `:focus`) | ✓ | ✓ | ✓ | ✓ | ✓ |
| Structural (`:nth-child`) | ✓ | ✓ | ✓ | ✓ | ✓ 9+ |
| Form (`:valid`, `:invalid`) | ✓ | ✓ | ✓ | ✓ | ✓ 10+ |
| `:focus-visible` | ✓ 86+ | ✓ 85+ | ✓ 15.4+ | ✓ 86+ | ✗ |
| `:is()`, `:where()` | ✓ 88+ | ✓ 78+ | ✓ 14+ | ✓ 88+ | ✗ |
| `:has()` | ✓ 105+ | ✓ 121+ | ✓ 15.4+ | ✓ 105+ | ✗ |
| `:focus-within` | ✓ 60+ | ✓ 52+ | ✓ 10.1+ | ✓ 79+ | ✗ |

## Summary Notes

- Pseudo-classes select elements by state or position
- Dynamic: `:hover`, `:focus`, `:active`, `:visited`
- Structural: `:first-child`, `:nth-child`, `:last-of-type`
- Form: `:valid`, `:invalid`, `:disabled`, `:checked`
- Other: `:not()`, `:empty`, `:target`, `:root`
- Follow LVHA order for links
- Always pair `:hover` with `:focus` for accessibility
- `:nth-child(an+b)` for complex patterns (even, odd, every 3rd, etc.)
- Pseudo-classes have class-level specificity (0,1,0)
- Use `:focus-visible` for keyboard-only focus indicators
- Use `:is()` for selector grouping, `:where()` for zero-specificity grouping
- `:has()` enables parent selection based on descendants
- `:empty` matches elements with no children (including text nodes)
- `:not()` can take comma-separated selector lists in modern CSS
