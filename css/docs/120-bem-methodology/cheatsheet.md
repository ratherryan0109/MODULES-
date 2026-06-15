# BEM Cheatsheet

## Naming Syntax
| Part | Separator | Example |
|------|-----------|---------|
| Block | (none) | `.card` |
| Element | `__` (double underscore) | `.card__title` |
| Modifier | `--` (double dash) | `.card--featured` |
| Element Modifier | `__` + `--` | `.card__title--large` |

## Quick Reference
```css
/* Block */
.card { }

/* Element */
.card__title { }
.card__body { }
.card__actions { }

/* Modifier */
.card--featured { }
.card--compact { }

/* Element Modifier */
.card__title--large { }
.card__actions--centered { }

/* Nested blocks (composition) */
/* Bad: .card__btn — Button should be its own block */
/* Good: .btn inside .card */
```

## Common Patterns
```css
/* Block with elements */
.search-form { }
.search-form__input { }
.search-form__submit { }

/* Modifier with state */
.search-form--collapsed { }
.search-form__input--focused { }

/* Composition */
.article { }
.article__body { }
.article .card { }  /* Card block inside article */
```

## BEM vs Other Approaches
| Aspect | BEM | Utility |
|--------|-----|---------|
| Classes per element | 1-3 | 5-15 |
| Specificity | Flat (all classes) | Flat (all classes) |
| File size | Smaller HTML, larger CSS | Larger HTML, smaller CSS |
| Learning curve | Low | Medium |
| Refactoring | Change component CSS | Change many HTML files |

## Preprocessor Nesting
```scss
// Sass BEM nesting
.card {
  background: white;

  &__title {
    font-size: 1.25rem;
  }

  &--featured {
    border: 2px solid blue;
  }

  &__title--large {
    font-size: 1.5rem;
  }
}
```
