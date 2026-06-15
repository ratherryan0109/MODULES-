# CSS Attribute Selectors

## Module Overview
Learn to select HTML elements based on their attributes and attribute values using CSS attribute selectors. Attribute selectors enable powerful pattern-based styling without adding extra classes to your HTML.

## Introduction
CSS attribute selectors allow you to target elements based on the presence or value of their HTML attributes. This includes everything from basic presence checks (`[disabled]`) to complex substring matching (`[href^="https"]`). Attribute selectors are particularly useful for styling form inputs, external links, data-driven components, and dynamic content without modifying the HTML markup.

## Learning Objectives
1. Use basic attribute selectors (`[attr]`)
2. Match exact values (`[attr="value"]`)
3. Use substring matching selectors (`^=`, `$=`, `*=`)
4. Combine attribute selectors with other selectors
5. Understand case sensitivity and the `i` flag
6. Style form inputs based on type and state attributes
7. Create data-attribute-driven styling patterns
8. Combine attribute selectors with pseudo-classes and pseudo-elements
9. Use attribute selectors for internationalization (lang, dir)
10. Debug specificity and performance of attribute selectors

## Theory

### What Are Attribute Selectors?
Attribute selectors match elements based on the presence or value of HTML attributes. They are enclosed in square brackets `[]` and can be used alone or combined with other selectors. Unlike classes and IDs, attribute selectors can match patterns within attribute values, making them incredibly flexible.

### Types of Attribute Selectors
CSS provides several types of attribute selectors, ranging from simple presence checks to complex substring matching:

- `[attr]` — Element has the attribute (regardless of value)
- `[attr="value"]` — Exact match of the attribute value
- `[attr^="value"]` — Attribute value starts with the specified string
- `[attr$="value"]` — Attribute value ends with the specified string
- `[attr*="value"]` — Attribute value contains the specified substring
- `[attr~="value"]` — Attribute value contains the specified word in a space-separated list
- `[attr|="value"]` — Attribute value is exactly "value" or starts with "value-"

### When to Use Attribute Selectors vs Classes
Attribute selectors are ideal when:
- Styling based on HTML attributes that already exist (type, href, required)
- Working with data attributes (`data-*`) for dynamic state
- Targeting patterns in attribute values (file extensions, protocols)
- Styling without modifying HTML markup

Classes are better when:
- You need a reusable style that is explicitly applied
- The styling is not related to an existing attribute
- Maximum specificity control is needed

### Case Sensitivity
By default, attribute selectors are case-sensitive in HTML (they follow document language rules). Adding the `i` flag before the closing bracket makes the matching case-insensitive. This is particularly useful for `type` attributes (which are case-insensitive in HTML) or when matching user-provided data.

## Key Concepts

### Types of Attribute Selectors
| Selector | Pattern | Example | Matches |
|----------|---------|---------|---------|
| `[attr]` | Presence | `[required]` | All required elements |
| `[attr="value"]` | Exact | `[type="email"]` | Email inputs |
| `[attr^="value"]` | Starts with | `[href^="https"]` | Secure links |
| `[attr$="value"]` | Ends with | `[href$=".pdf"]` | PDF links |
| `[attr*="value"]` | Contains | `[class*="icon"]` | Classes containing "icon" |
| `[attr~="value"]` | Word | `[rel~="nofollow"]` | rel contains "nofollow" |
| `[attr|="value"]` | Hyphen prefix | `[lang|="en"]` | English language variants |

### Case Sensitivity
- By default, attribute selectors are case-sensitive
- Add `i` before closing bracket for case-insensitive: `[attr="value" i]`

### Practical Uses
- Styling external links (`[href^="http"]`)
- Styling file type icons (`[href$=".pdf"]`)
- Form input validation styling (`[required]`, `[type="email"]`)
- Data attribute styling (`[data-*]`)

## Code Examples

### Basic Presence Selector
```css
/* All elements with a required attribute */
input[required] {
  border: 2px solid #e74c3c;
}

/* All elements with a disabled attribute */
button[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}
```

### Exact Value Match
```css
/* Specific input types */
input[type="text"] { background: #fff; }
input[type="email"] { background: #e8f5e9; }
input[type="password"] { background: #fff3e0; }

/* Specific data states */
[data-status="active"] { background: #2ecc71; }
[data-status="inactive"] { background: #95a5a6; }
[data-status="pending"] { background: #f39c12; }
```

### Substring Matching
```css
/* External link indicator */
a[href^="http"]::after {
  content: " ↗";
}

/* File type styling */
a[href$=".pdf"] { color: red; }
a[href$=".doc"] { color: blue; }
a[href$=".jpg"]::before { content: "🖼 "; }

/* Links containing specific word */
a[href*="github.com"] { color: #333; }
a[href*="twitter.com"] { color: #1da1f2; }
```

### Combining Attribute Selectors
```css
/* Secure external links */
a[href^="https"][href*="."] {
  color: #2ecc71;
}

/* Required email inputs */
input[type="email"][required] {
  border-left: 3px solid #e74c3c;
}

/* Data attribute combinations */
[data-type="card"][data-featured="true"] {
  border: 2px solid gold;
}
```

### Case-Insensitive Matching
```css
/* Match type regardless of case */
input[type="email" i] {
  background: #e8f5e9;
}

/* Match language regardless of case */
[lang="en" i] {
  font-family: sans-serif;
}
```

### Attribute Selectors with Pseudo-elements
```css
/* Icon before external links */
a[href^="http"]::before {
  content: "🌐 ";
}

/* Status indicator */
[data-status]::before {
  content: "";
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 6px;
}
[data-status="active"]::before {
  background: #2ecc71;
}
[data-status="inactive"]::before {
  background: #95a5a6;
}
```

## Visual Explanation

```
Attribute Selector Matching:

[href="https://example.com"]
        ↓  exact match
[href^="https"]  ← starts with
[href$=".com"]   ← ends with
[href*="example"] ← contains
[href~="secure"] ← word in space-separated list

Practical Example:
External Links:   a[href^="http"] { }
File Downloads:   a[href$=".pdf"] { }
Required Fields:  input[required] { }
Data States:     [data-theme="dark"] { }
Languages:       [lang|="en"] { }
```

## Common Mistakes

1. **Attribute selectors are case-sensitive by default** — use the `i` flag when case-insensitive matching is needed
2. **`[attr~="value"]` matches whole words only, not substrings** — `[class~="icon"]` won't match `class="icon-large"`
3. **Overusing attribute selectors can impact performance on very large DOMs** — attribute selectors are slower than class selectors
4. **Not all attributes are accessible via CSS** — only HTML attributes work; custom attributes not in the DOM are not accessible
5. **Forgetting quotes around values** — values with spaces or special characters must be quoted: `[attr="my value"]`
6. **Confusing `^=` (starts with) with `*=` (contains)** — subtle difference in matching behavior
7. **`[attr|="value"]` is rarely used correctly** — it matches `value` and `value-*` only, not `values` or `value_*`
8. **Over-relying on attribute selectors for styling** — class-based selectors are usually more maintainable

## Best Practices

1. Use attribute selectors for styling based on inherent HTML attributes (type, href, required)
2. Use data attributes (`data-*`) for custom state-driven styling
3. For maintainability, prefer class-based selectors over complex attribute matching
4. Combine attribute selectors with other selectors (classes, pseudo-classes) for precision
5. Use the `i` flag for case-insensitive matching when appropriate
6. Use `^=` for protocol matching (`[href^="https"]`)
7. Use `$=` for file extension matching (`[href$=".pdf"]`)
8. Document complex attribute selectors with comments
9. Avoid attribute selectors on large DOMs where performance matters
10. Use attribute selectors to reduce class bloat in form-heavy interfaces
11. Combine with `::before`/`::after` for visual indicators based on attributes

## Accessibility

- Attribute selectors can style elements based on accessibility attributes like `aria-*`, `role`, and `lang`
- Use `[aria-hidden="true"]` to hide decorative elements
- Style `[aria-current="page"]` for current page indicators in navigation
- Use `[aria-expanded="false"]` and `[aria-expanded="true"]` for expandable content styling
- Attribute selectors for `[role]` can complement semantic HTML styling
- Ensure that attribute-based styling does not rely on color alone to convey meaning
- Test with screen readers to verify that attribute-driven styling doesn't hide meaningful content

## Performance

- Attribute selectors are slower than class and ID selectors but faster than pseudo-classes
- The browser must check each element's attributes against the selector
- On very large DOMs (thousands of elements), avoid complex attribute selectors in hot paths
- `[attr]` (presence) is faster than `[attr="value"]` (exact match)
- Substring matching (`*=`, `^=`, `$=`) is slower than exact matching
- Combine attribute selectors with tag names for better performance: `input[required]` is faster than `[required]`
- Use class-based selectors for critical rendering path elements
- Modern browsers optimize attribute selector matching well

## Browser Compatibility

| Selector | Chrome | Firefox | Safari | Edge | IE |
|----------|--------|---------|--------|------|----|
| `[attr]` | ✓ | ✓ | ✓ | ✓ | ✓ 7+ |
| `[attr="value"]` | ✓ | ✓ | ✓ | ✓ | ✓ 7+ |
| `[attr^="value"]` | ✓ | ✓ | ✓ | ✓ | ✓ 7+ |
| `[attr$="value"]` | ✓ | ✓ | ✓ | ✓ | ✓ 7+ |
| `[attr*="value"]` | ✓ | ✓ | ✓ | ✓ | ✓ 7+ |
| `[attr~="value"]` | ✓ | ✓ | ✓ | ✓ | ✓ 7+ |
| `[attr|="value"]` | ✓ | ✓ | ✓ | ✓ | ✓ 7+ |
| Case-insensitive `i` flag | ✓ 49+ | ✓ 47+ | ✓ 9+ | ✓ 79+ | ✗ |

All attribute selectors have been supported since Internet Explorer 7. The case-insensitive `i` flag is supported in all modern browsers but not in any version of Internet Explorer.

## Summary Notes

- `[attr]` — matches elements with the attribute present
- `[attr="value"]` — exact value match
- `[attr^="value"]` — starts with the given string (prefix match)
- `[attr$="value"]` — ends with the given string (suffix match)
- `[attr*="value"]` — contains the given string (substring match)
- `[attr~="value"]` — contains the word in a space-separated list
- `[attr|="value"]` — starts with followed by hyphen
- Add `i` flag for case-insensitive matching: `[attr="value" i]`
- Attribute selectors are case-sensitive by default
- Use for: form inputs, external links, file types, data attributes
- Combined with pseudo-elements for visual indicators (icons, badges)
- Supported since IE7 (all modern browsers)
- Case-insensitive flag not supported in IE
- Slower than class selectors on very large DOMs
- Data attributes (`data-*`) are perfect for custom state-driven styling
- Document complex attribute selector patterns for team maintainability
- Combine with tag selectors for better performance (`input[required]`)
