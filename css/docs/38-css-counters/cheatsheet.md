# CSS Counters Cheatsheet

## Core Properties
```css
counter-reset: mycounter 0;      /* Create/reset counter */
counter-increment: mycounter;     /* Increment by 1 */
counter-increment: mycounter 2;   /* Increment by 2 */
```

## Display Functions
```css
content: counter(mycounter);                 /* Basic display */
content: counter(mycounter, upper-roman);    /* With style */
content: counters(nested, ".");              /* Nested hierarchy */
content: counters(nested, "-", lower-alpha); /* Nested with style */
```

## Counter Styles
```
decimal         (1, 2, 3)
decimal-leading-zero (01, 02)
lower-roman     (i, ii, iii)
upper-roman     (I, II, III)
lower-alpha     (a, b, c)
upper-alpha     (A, B, C)
lower-greek     (α, β, γ)
```

## Section Numbering Example
```css
body { counter-reset: section; }

h2 {
  counter-reset: subsection;
}
h2::before {
  counter-increment: section;
  content: counter(section) ". ";
}

h3::before {
  counter-increment: subsection;
  content: counter(section) "." counter(subsection) " ";
}
```

## Figure/Table Numbering
```css
.content { counter-reset: figure; }
figure { counter-increment: figure; }
figcaption::before {
  content: "Figure " counter(figure) ": ";
}
```
