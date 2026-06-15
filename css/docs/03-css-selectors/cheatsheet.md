# CSS Selectors — Cheatsheet

## Basic Selectors
| Selector | Example | Description |
|----------|---------|-------------|
| Universal | `*` | All elements |
| Type | `p`, `div` | All elements of that type |
| Class | `.class-name` | Elements with that class |
| ID | `#id-name` | Element with that ID |
| Grouped | `h1, h2, h3` | Multiple selectors |

## Combinators
| Combinator | Symbol | Example | Description |
|-----------|--------|---------|-------------|
| Descendant | space | `div p` | All p inside div |
| Child | `>` | `ul > li` | Direct children only |
| Adjacent sibling | `+` | `h2 + p` | Immediately after |
| General sibling | `~` | `h2 ~ p` | All after |

## Attribute Selectors
| Pattern | Example | Matches |
|---------|---------|---------|
| `[attr]` | `[disabled]` | Has attribute |
| `[attr="x"]` | `[type="text"]` | Exact value |
| `[attr^="x"]` | `[href^="https"]` | Starts with |
| `[attr$="x"]` | `[src$=".jpg"]` | Ends with |
| `[attr*="x"]` | `[class*="btn"]` | Contains |

## Pseudo-Classes
| Pseudo-class | When It Applies |
|-------------|-----------------|
| `:link` | Unvisited link |
| `:visited` | Visited link |
| `:hover` | Mouse over |
| `:active` | Being clicked |
| `:focus` | Keyboard/click focus |
| `:first-child` | First child of parent |
| `:last-child` | Last child of parent |
| `:nth-child(n)` | Nth child |
| `:nth-of-type(n)` | Nth of that type |
| `:not(x)` | Not matching x |
| `:checked` | Checked input |

## Pseudo-Elements
| Pseudo-element | Description |
|---------------|-------------|
| `::before` | Insert content before |
| `::after` | Insert content after |
| `::first-letter` | First letter |
| `::first-line` | First line |
| `::selection` | Selected text |
| `::placeholder` | Placeholder text |

## Specificity (a-b-c-d)
- `1-0-0-0` Inline style
- `0-1-0-0` ID selectors
- `0-0-1-0` Class, attribute, pseudo-class
- `0-0-0-1` Element, pseudo-element
- `0-0-0-0` Universal selector
