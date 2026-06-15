# CSS Pseudo-classes - Cheatsheet

## Dynamic Pseudo-classes

```css
:link      /* Unvisited link */
:visited   /* Visited link */
:hover     /* Mouse over */
:focus     /* Has focus */
:active    /* During click */
:focus-visible /* Keyboard focus only */
```

**LVHA Order**: `:link` → `:visited` → `:hover` → `:active`

## Structural Pseudo-classes

```css
:root               /* Document root (<html>) */
:empty              /* No children/text */
:first-child        /* First child of parent */
:last-child         /* Last child of parent */
:first-of-type      /* First of its element type */
:last-of-type       /* Last of its element type */
:nth-child(n)       /* nth child (1-based) */
:nth-last-child(n)  /* nth from end */
:nth-of-type(n)     /* nth of its type */
:nth-last-of-type(n)/* nth of type from end */
:only-child         /* Only child of parent */
:only-of-type       /* Only of its type */
```

## nth-child Formulas

| Expression | Selects |
|------------|---------|
| `:nth-child(3)` | 3rd child |
| `:nth-child(odd)` | 1, 3, 5, ... |
| `:nth-child(even)` | 2, 4, 6, ... |
| `:nth-child(2n+1)` | 1, 3, 5, ... (odd) |
| `:nth-child(3n)` | 3, 6, 9, ... |
| `:nth-child(n+4)` | 4, 5, 6, ... |
| `:nth-child(-n+3)` | 1, 2, 3 |

## Form State Pseudo-classes

```css
:valid          /* Valid input */
:invalid        /* Invalid input */
:required       /* Has required attribute */
:optional       /* No required attribute */
:disabled       /* Disabled element */
:enabled        /* Enabled element */
:checked        /* Checked checkbox/radio */
:in-range       /* Value within range */
:out-of-range   /* Value outside range */
:placeholder-shown /* Placeholder visible */
:read-only      /* Has readonly attribute */
:read-write     /* Editable */
```

## Functional Pseudo-classes

```css
:not(selector)     /* Negation */
:is(selector-list) /* Matches any (takes highest specificity) */
:where(selector-list) /* Matches any (zero specificity) */
:has(selector)     /* Parent containing child */
```

## Other Pseudo-classes

```css
:target        /* URL fragment target */
:lang(de)      /* German language */
:dir(ltr)      /* Left-to-right direction */
:fullscreen    /* Full-screen element */
:defined       /* Custom element defined */
:host          /* Shadow DOM host */
```

## Specificity Reference

| Selector | Specificity |
|----------|-------------|
| `:hover` | 0,1,0 |
| `.class:hover` | 0,2,0 |
| `li:first-child` | 0,1,1 |
| `:not(.class)` | 0,1,0 |
| `:is(#id, .class)` | 1,0,0 |
| `:where(#id, .class)` | 0,0,0 |

## Accessibility Best Practices

```css
/* Always pair hover with focus */
button:hover,
button:focus {
  background: darkblue;
}

/* Use focus-visible for mouse-safe focus */
button:focus-visible {
  outline: 3px solid blue;
}

/* Respect reduced motion */
@media (prefers-reduced-motion: reduce) {
  *:hover { transform: none; }
}

/* High contrast mode adjustments */
@media (prefers-contrast: high) {
  a:link { text-decoration: underline; }
}
```

## Common Patterns

### Zebra Striping
```css
tr:nth-child(even) { background: #f2f2f2; }
```

### First Paragraph Styling
```css
article > p:first-of-type { font-size: 1.2em; }
```

### Last Item Margin
```css
li:last-child { margin-bottom: 0; }
```

### Exclude First
```css
li:not(:first-child) { border-top: 1px solid #ddd; }
```

### Empty State
```css
.container:empty::after {
  content: "No items found";
  color: #999;
}
```

## Best Practices

- Follow LVHA order: `:link` → `:visited` → `:hover` → `:active`
- Always provide `:focus` or `:focus-visible` for interactive elements
- Use `:nth-of-type` when mixing element types
- Combine `:not()` for exclusion patterns
- Use `:where()` for low-specificity defaults
- Test hover effects on touch devices
