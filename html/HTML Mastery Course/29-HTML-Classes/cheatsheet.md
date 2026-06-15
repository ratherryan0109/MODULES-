# HTML Classes Cheatsheet

## Syntax

```html
<!-- Single class -->
<div class="container">Content</div>

<!-- Multiple classes -->
<p class="text-center text-bold mt-4">Styled text</p>
```

## CSS Selectors

| Selector | Meaning |
|----------|---------|
| `.class` | All elements with this class |
| `element.class` | Element with this class |
| `.class1.class2` | Element with both classes |
| `.class1 .class2` | Descendant with class2 inside class1 |
| `.class1 > .class2` | Direct child |

## ClassList API (JavaScript)

| Method | Description |
|--------|-------------|
| `.add('cls')` | Add a class |
| `.remove('cls')` | Remove a class |
| `.toggle('cls')` | Toggle on/off |
| `.contains('cls')` | Check if exists |
| `.replace('a','b')` | Replace class a with b |

## Selecting Elements by Class

```javascript
// Single element (first match)
document.querySelector('.myclass');

// All matching (NodeList)
document.querySelectorAll('.myclass');

// Live HTMLCollection
document.getElementsByClassName('myclass');
```

## Naming Conventions

| Convention | Example |
|------------|---------|
| kebab-case | `.main-content` |
| camelCase | `.mainContent` |
| BEM | `.block__element--modifier` |
| SUIT | `.Block-element--modifier` |
| Utility | `.text-center.mt-4` |

## State Class Pattern

```css
.btn { /* base styles */ }
.btn--primary { /* variation */ }
.btn--disabled { /* state */ }
.is-active { /* JavaScript state */ }
.has-error { /* validation state */ }
```

## Common Mistakes

| Mistake | Correct |
|---------|---------|
| Spaces in class name | Use hyphens or underscores |
| Using ID for styling | Use class instead |
| `element.className = 'x'` | Use `classList.add()` |
| Over-nesting `.nav ul li a` | Use `.nav a` |

## Specificity Reference

| Selector | Specificity |
|----------|-------------|
| `*` | 0,0,0,0 |
| `div` | 0,0,0,1 |
| `.class` | 0,0,1,0 |
| `.a.b` | 0,0,2,0 |
| `#id` | 0,1,0,0 |
| `style=""` | 1,0,0,0 |
