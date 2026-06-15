# CSS Combinators - Cheatsheet

## The Four Combinators

| Combinator | Symbol | Name | Selects |
|------------|--------|------|---------|
| ` ` (space) | `A B` | Descendant | All B inside A (any depth) |
| `>` | `A > B` | Child | Direct children B of A |
| `+` | `A + B` | Adjacent sibling | B immediately after A |
| `~` | `A ~ B` | General sibling | All B after A (same parent) |

## Syntax Examples

```css
/* Descendant */
article p { }

/* Child */
ul > li { }

/* Adjacent sibling */
h2 + p { }

/* General sibling */
h2 ~ p { }
```

## Combined Examples

```css
/* Direct child that is also adjacent sibling */
.parent > .child + .child { }

/* Descendant combined with child */
.card > .header ~ .content { }

/* Element with class using child */
ul.nav > li { }
```

## Specificity Reference

| Selector | Specificity |
|----------|-------------|
| `div p` | 0,0,2 |
| `div > p` | 0,0,2 |
| `.a .b` | 0,2,0 |
| `.a > .b` | 0,2,0 |
| `#a .b` | 1,1,0 |
| `div.a > span.b` | 0,2,2 |

## Performance Tips

```css
/* ✅ Good - shallow */
.nav > li { }

/* ✅ Good - ID based */
#sidebar a { }

/* ❌ Avoid - too deep */
body > div > article > section > p { }

/* ❌ Avoid - universal with combinators */
* > * > * { }
```

## Common Patterns

### Styling First and Last Elements
```css
.card > div:first-child { }
.card > div:last-child { }
```

### Styling Everything Except First
```css
.card > div ~ div { }
/* OR */
.card > div + div { }
```

### Active Navigation with Siblings
```css
.nav li.active { }
.nav li.active + li { }
.nav li.active ~ li { }
```

## BEM Alternative with Combinators

```css
/* Instead of BEM: .card__title { } */
.card > .title { }

/* Instead of BEM: .card__content { } */
.card > .content { }
```

## Quick Reference

| Goal | Combinator |
|------|-----------|
| All descendants | ` ` (space) |
| Direct children | `>` |
| Next sibling | `+` |
| All following siblings | `~` |
| Before element (no combinator) | Use `:has()` |
| Parent (no combinator) | Use `:has()` |

## Reading Direction

Browsers read selectors **right-to-left**:
```css
/* Browser reads: Find all a, then check if they're inside li, then inside ul */
ul li a { }
```
