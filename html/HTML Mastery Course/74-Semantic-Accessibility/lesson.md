# Semantic Accessibility

## What is Semantic HTML?
Semantic HTML uses elements that convey meaning about their content beyond just presentation. Instead of using generic `<div>` and `<span>` tags for everything, semantic elements like `<nav>`, `<article>`, `<form>`, and `<table>` describe their purpose both to developers and to browsers/assistive technologies.

Semantic HTML is the foundation of web accessibility. Before applying ARIA, before writing JavaScript, before styling with CSS — use the right HTML element for the job.

## Why Semantic HTML Matters for Accessibility

### Built-in Accessibility
Native HTML elements come with built-in accessibility features:
- `<button>` is keyboard-focusable and activatable with Enter/Space
- `<label>` automatically associates text with form controls
- `<summary>`/`<details>` provide native expand/collapse with keyboard support
- `<table>` with `<th>` and `scope` provides row/column header associations
- `<form>` supports native submission on Enter

### Improved Screen Reader Navigation
Semantic elements become landmarks in the accessibility tree:
```html
<!-- Non-semantic: screen reader sees generic divs -->
<div class="header">...</div>
<div class="nav">...</div>
<div class="main">...</div>

<!-- Semantic: screen reader sees landmarks -->
<header>...</header>
<nav>...</nav>
<main>...</main>
```

### Better Keyboard Support
Native interactive elements include keyboard handlers:
- `<button>` and `<a>` are focusable and activatable
- `<select>` supports arrow key navigation
- `<input type="range">` supports arrow key adjustment
- `<details>/<summary>` supports Enter/Space to toggle

## Semantic HTML Element Reference

### Document Structure
```html
<body>        <!-- Page content -->
<header>      <!-- Introductory content or navigation -->
<nav>         <!-- Navigation links -->
<main>        <!-- Primary content (one per page) -->
<article>     <!-- Self-contained composition -->
<section>     <!-- Thematic grouping -->
<aside>       <!-- Tangentially related content -->
<footer>      <!-- Footer for section or page -->
```

### Text Content
```html
<h1>-<h6>     <!-- Headings (hierarchical) -->
<p>           <!-- Paragraph -->
<blockquote>  <!-- Extended quotation -->
<pre>         <!-- Preformatted text -->
<figure>      <!-- Self-contained content (images, code) -->
<figcaption>  <!-- Caption for figure -->
<dl>, <dt>, <dd>  <!-- Definition list -->
<ol>, <ul>, <li>  <!-- Ordered/unordered lists -->
```

### Inline Text
```html
<a>           <!-- Anchor/hyperlink -->
<strong>      <!-- Strong importance (bold) -->
<em>          <!-- Emphasis (italic) -->
<q>           <!-- Short inline quotation -->
<cite>        <!-- Citation -->
<code>        <!-- Computer code -->
<kbd>         <!-- Keyboard input -->
<dfn>         <!-- Definition term -->
<abbr>        <!-- Abbreviation -->
<mark>        <!-- Marked/highlighted text -->
<small>       <!-- Side comments -->
<time>        <!-- Date/time -->
<address>     <!-- Contact information -->
```

### Forms
```html
<form>        <!-- Form container -->
<fieldset>    <!-- Group of related form controls -->
<legend>      <!-- Caption for fieldset -->
<label>       <!-- Label for form control -->
<input>       <!-- Various input types -->
<textarea>    <!-- Multi-line text input -->
<select>      <!-- Drop-down list -->
<optgroup>    <!-- Group of options -->
<option>      <!-- Individual option -->
<button>      <!-- Clickable button -->
<output>      <!-- Result of calculation -->
<progress>    <!-- Progress bar -->
<meter>       <!-- Scalar measurement -->
```

### Tables
```html
<table>       <!-- Table container -->
<caption>     <!-- Table title -->
<thead>       <!-- Header rows group -->
<tbody>       <!-- Body rows group -->
<tfoot>       <!-- Footer rows group -->
<tr>          <!-- Table row -->
<th>          <!-- Header cell -->
<td>          <!-- Data cell -->
<colgroup>    <!-- Column group -->
<col>         <!-- Column properties -->
```

### Interactive Elements
```html
<details>     <!-- Disclosure widget -->
<summary>     <!-- Summary/caption for details -->
<dialog>      <!-- Dialog box or modal -->
<menu>        <!-- Menu of commands (experimental) -->
```

## Common Semantic Mistakes

### 1. Using div for buttons
```html
<!-- Bad -->
<div onclick="submit()" role="button" tabindex="0">Submit</div>

<!-- Good -->
<button type="submit">Submit</button>
```

### 2. Using div for links
```html
<!-- Bad -->
<div onclick="navigate('/about')" style="cursor:pointer;color:blue;">About</div>

<!-- Good -->
<a href="/about">About</a>
```

### 3. Using br for spacing
```html
<!-- Bad -->
<p>Line 1</p><br><br><p>Line 2</p>

<!-- Good -->
<p>Line 1</p>
<p>Line 2</p>
```

### 4. Using div for headings (styled with CSS)
```html
<!-- Bad -->
<div class="heading">Section Title</div>

<!-- Good -->
<h2>Section Title</h2>
```

### 5. Using tables for layout
```html
<!-- Bad -->
<table role="presentation"><tr><td>Layout content</td></tr></table>

<!-- Good -->
<div>Layout with CSS Grid/Flexbox</div>
```

## Heading Hierarchy Best Practices

```html
<h1>Page Title (only one per page)</h1>
    <h2>Major Section</h2>
        <h3>Sub-section</h3>
            <h4>Detail</h4>
    <h2>Another Major Section</h2>
        <h3>Sub-section</h3>
```

Rules:
- Only one `<h1>` per page
- Don't skip levels (h1 → h3 is bad)
- Follow logical document outline
- Headings reflect content structure, not visual styling

## Landmark Structure Example

```html
<body>
    <header>
        <h1>Site Name</h1>
        <nav aria-label="Main">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <article>
            <h2>Article Title</h2>
            <p>Content...</p>
        </article>

        <aside aria-label="Related articles">
            <h3>Related</h3>
            <ul><!-- links --></ul>
        </aside>
    </main>

    <footer>
        <p>&copy; 2024 Company</p>
    </footer>
</body>
```

## Form Structure Best Practices

```html
<form aria-label="Contact form">
    <fieldset>
        <legend>Personal Information</legend>

        <label for="name">Full Name:</label>
        <input type="text" id="name" name="name" required
               aria-required="true">

        <label for="email">Email:</label>
        <input type="email" id="email" name="email"
               aria-describedby="email-hint">
        <span id="email-hint" class="hint">
            We'll never share your email
        </span>
    </fieldset>

    <fieldset>
        <legend>Preferences</legend>

        <label>
            <input type="checkbox" name="newsletter">
            Subscribe to newsletter
        </label>
    </fieldset>

    <button type="submit">Submit</button>
</form>
```

## List Semantics

Use lists for related items — screen readers announce list context (count, position):

```html
<!-- Screen reader: "List with 3 items" -->
<nav aria-label="Breadcrumb">
    <ol>
        <li><a href="/">Home</a></li>
        <li><a href="/products">Products</a></li>
        <li aria-current="page">Widgets</li>
    </ol>
</nav>

<!-- Screen reader: "List with 4 items" -->
<ul class="features">
    <li>Feature one</li>
    <li>Feature two</li>
    <li>Feature three</li>
    <li>Feature four</li>
</ul>
```

## Link vs Button Decision

| Scenario | Element | Reason |
|----------|---------|--------|
| Navigate to URL | `<a href="...">` | Navigation action |
| Submit form | `<button type="submit">` | Form submission |
| Open modal | `<button>` | Triggers in-page action |
| Download file | `<a href="file.pdf" download>` | Resource access |
| Toggle visibility | `<button>` | UI state change |
| Call JavaScript | `<button>` | Application behavior |

## Details/Summary for Expandable Content

```html
<details>
    <summary>Click to expand FAQ answer</summary>
    <p>This is the answer content. Native disclosure widget
       with built-in keyboard support (Enter/Space to toggle).</p>
</details>
```

## Dialog Element

```html
<dialog id="modal">
    <h2>Confirm Action</h2>
    <p>Are you sure?</p>
    <form method="dialog">
        <button value="cancel">Cancel</button>
        <button value="confirm">Confirm</button>
    </form>
</dialog>
<button onclick="document.getElementById('modal').showModal()">
    Open Modal
</button>
```

## Semantic Accessibility Benefits Summary

1. **SEO**: Search engines understand content structure better
2. **Performance**: Native elements are optimized by browsers
3. **Maintainability**: Code is self-documenting and easier to understand
4. **Progressive Enhancement**: Works without CSS/JS
5. **Future-proof**: Native elements evolve with web standards
6. **Reduced ARIA dependency**: Less code to maintain and debug
7. **Mobile-friendly**: Better touch interactions (native scroll, zoom)
8. **Print-friendly**: Semantic structure produces better print layouts

## Testing Semantic Accessibility

```javascript
// Check for common violations
function auditSemantics() {
    const violations = [];

    // Check for div buttons
    document.querySelectorAll('[role="button"]').forEach(el => {
        if (el.tagName !== 'BUTTON') {
            violations.push(`Use <button> instead of <${el.tagName}> with role="button"`);
        }
    });

    // Check heading hierarchy
    const headings = document.querySelectorAll('h1,h2,h3,h4,h5,h6');
    let prevLevel = 0;
    headings.forEach(h => {
        const level = parseInt(h.tagName[1]);
        if (level - prevLevel > 1 && prevLevel > 0) {
            violations.push(`Heading level skipped from h${prevLevel} to h${level}`);
        }
        prevLevel = level;
    });

    // Check multiple h1
    const h1s = document.querySelectorAll('h1');
    if (h1s.length > 1) violations.push('Multiple h1 elements found');

    // Check for unlabeled form inputs
    document.querySelectorAll('input:not([type="hidden"])').forEach(input => {
        if (!input.hasAttribute('aria-label') &&
            !document.querySelector(`label[for="${input.id}"]`) &&
            !input.closest('label')) {
            violations.push(`Input #${input.id || input.name} has no label`);
        }
    });

    return violations;
}
```
