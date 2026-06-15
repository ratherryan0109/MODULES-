# Module 29: HTML Classes

## Introduction

The `class` attribute is one of the most powerful features in HTML. It allows you to assign one or more classification names to any HTML element, enabling CSS styling and JavaScript manipulation across multiple elements. Classes are the foundation of scalable, maintainable web styling.

## Learning Objectives

By the end of this module, you will be able to:
- Define the class attribute and its purpose
- Apply single and multiple classes to elements
- Use classes for CSS styling
- Manipulate classes with JavaScript
- Understand class naming conventions (BEM, etc.)
- Distinguish classes from IDs

## What is a Class?

A `class` is an attribute that assigns one or more classification names to an HTML element.

### Syntax

```html
<element class="classname">content</element>
```

### Basic Example

```html
<p class="highlight">This text is highlighted.</p>
```

## Multiple Classes

Elements can have multiple classes separated by spaces:

```html
<p class="text-large text-bold text-center">
  Large, bold, centered text.
</p>
```

### CSS with Multiple Classes

```css
.text-large { font-size: 24px; }
.text-bold { font-weight: bold; }
.text-center { text-align: center; }
```

## Classes in CSS

### Class Selector

```css
.classname {
  property: value;
}
```

### Specificity

Classes have higher specificity than element selectors but lower than IDs:

```css
/* Specificity: 0,0,1,0 */
.card { background: white; }

/* Specificity: 0,0,0,1 */
div { background: gray; }

/* Specificity: 0,1,0,0 */
#unique { background: blue; }
```

### Chaining Classes

```css
/* Element with both classes */
.card.featured {
  border: 2px solid gold;
}

/* Descendant with class */
.card .title {
  font-size: 20px;
}
```

## Classes and JavaScript

### Accessing Elements by Class

```javascript
// Single element
const el = document.querySelector('.myclass');

// All elements
const elements = document.getElementsByClassName('myclass');

// Modern way
const elements = document.querySelectorAll('.myclass');
```

### Manipulating Classes

```javascript
const el = document.getElementById('myElement');

// Add class
el.classList.add('active');

// Remove class
el.classList.remove('hidden');

// Toggle class
el.classList.toggle('expanded');

// Check if has class
if (el.classList.contains('active')) { ... }

// Replace class
el.classList.replace('old', 'new');
```

## Naming Conventions

### BEM (Block Element Modifier)

```html
<div class="card">
  <h3 class="card__title">Title</h3>
  <p class="card__text">Content</p>
  <button class="card__button card__button--primary">Click</button>
</div>
```

### Other Conventions

| Convention | Example | Description |
|------------|---------|-------------|
| camelCase | `mainContent` | Capitalize inner words |
| kebab-case | `main-content` | Hyphen-separated (common in CSS) |
| BEM | `block__element--modifier` | Block, element, modifier |
| SUIT | `Block-element--modifier` | PascalCase with hyphens |
| Namespaced | `tw-text-center` | Framework-prefixed |

## Common Class Patterns

### State Classes

```html
<button class="btn btn--primary btn--disabled">Submit</button>
<div class="accordion accordion--expanded">...</div>
```

### Layout Classes

```html
<div class="container">
  <div class="row">
    <div class="col col-6">Half width</div>
    <div class="col col-6">Half width</div>
  </div>
</div>
```

### Utility Classes

```html
<p class="mt-4 mb-2 text-center color-primary">
  Spaced, centered, primary-colored text.
</p>
```

## Classes vs IDs

| Feature | Class | ID |
|---------|-------|----|
| Usage | Multiple elements | One element per page |
| CSS specificity | 0,0,1,0 | 0,1,0,0 |
| JavaScript | `getElementsByClassName` | `getElementById` |
| URL fragment | No | Yes (hash link) |
| Reusability | Yes | No |
| Naming | Any valid identifier | Unique identifier |

## Common Mistakes

| Mistake | Problem | Solution |
|---------|---------|----------|
| Using ID instead of class for styling | Too specific, not reusable | Use classes for all styling |
| Spaces in class names | Creates multiple classes | Use hyphens or underscores |
| Overly long class names | Hard to read and maintain | Keep names concise but descriptive |
| Not using utility classes | Repeated CSS | Create reusable utility classes |
| Class name conflicts | Styles overwrite each other | Use BEM or namespacing |
| Styling by tag name instead of class | Too broad, conflicts | Always use classes for styling |

## Best Practices

1. **Use classes for all styling** — never use IDs for CSS
2. **Use semantic class names** — describe content, not appearance
3. **Follow a naming convention** — BEM is widely adopted
4. **Keep class names concise** — 2-4 words maximum
5. **Combine utility classes** — compose multiple small classes
6. **Avoid over-qualifying** — `.nav a` is better than `ul.nav li a`
7. **Use `classList` API** — not className for JS manipulation
8. **Validate class names** — start with letter, no spaces
9. **Document complex class structures** — especially in large projects
10. **Use CSS preprocessors** — nesting with & for BEM

## Summary

- Classes are reusable identifiers for HTML elements
- Elements can have multiple classes (space-separated)
- Classes are the primary way to attach CSS styles
- JavaScript can add, remove, and toggle classes
- BEM is a popular naming convention for class names
- Always prefer classes over IDs for styling
- Use the `classList` API for class manipulation in JavaScript
