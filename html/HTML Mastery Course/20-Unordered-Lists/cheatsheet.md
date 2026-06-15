# HTML Unordered Lists — Cheatsheet

## Basic Structure

| Element | Description |
|---------|-------------|
| `<ul>` | Unordered list container |
| `<li>` | List item element |

## Attributes

| Attribute | Values | Description |
|-----------|--------|-------------|
| `type` | `disc`, `circle`, `square` | Bullet style (deprecated in HTML5, use CSS) |

## CSS List Styling

| Property | Values | Description |
|----------|--------|-------------|
| `list-style-type` | `disc`, `circle`, `square`, `none` | Bullet shape |
| `list-style-image` | `url('image.png')` | Custom bullet image |
| `list-style-position` | `inside`, `outside` | Bullet position |
| `list-style` | Shorthand | All-in-one list style |

## Nested Lists

```html
<ul>
    <li>Item 1
        <ul>
            <li>Sub-item A</li>
            <li>Sub-item B</li>
        </ul>
    </li>
    <li>Item 2</li>
</ul>
```

## Navigation Menu Example

```html
<nav>
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
</nav>
```

## Common Use Cases

| Use Case | Why Unordered List |
|----------|-------------------|
| Navigation menus | Hierarchical, semantic |
| Feature lists | Bullet points for readability |
| Ingredients | No specific order needed |
| Categories | Grouping related items |
| Site maps | Deep nesting support |

## Best Practices
- ✅ Use `<ul>` for items where order doesn't matter
- ✅ Use CSS for styling bullets, not deprecated `type` attribute
- ✅ Use nested `<ul>` for hierarchical structures
- ✅ Pair with `<nav>` for navigation
- ❌ Don't use `<ul>` for ordered steps — use `<ol>`
- ❌ Don't use `<br>` for spacing — use CSS margin
- ❌ Don't use divs when `<ul>` is semantically correct
