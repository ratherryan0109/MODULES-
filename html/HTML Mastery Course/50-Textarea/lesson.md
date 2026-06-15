# Module 50: Textarea

## Introduction

The `<textarea>` element creates a multi-line text input field that allows users to enter and edit larger amounts of text. Unlike the single-line `<input type="text">`, textareas support line breaks, scrolling, and resizing. They're essential for comments, messages, descriptions, code editors, and any form field requiring more than a short text entry.

## Learning Objectives

- Create and configure `<textarea>` elements
- Use `rows`, `cols`, `maxlength`, and `wrap` attributes
- Style textareas with CSS including resize control
- Handle textarea events with JavaScript
- Implement auto-resizing textareas
- Create rich text editing foundations

## Basic Syntax

```html
<textarea id="bio" name="bio" rows="4" cols="50" placeholder="Tell us about yourself..."></textarea>
```

Unlike `<input>`, `<textarea>` is **not** a void element. It has both opening and closing tags, and default content goes between them (not in a `value` attribute):

```html
<textarea name="notes" rows="5">
This is default text content.
Multiple lines are preserved.
</textarea>
```

## Key Attributes

| Attribute | Description | Default |
|-----------|-------------|---------|
| `rows` | Visible height in text lines | 2 |
| `cols` | Visible width in character columns | 20 |
| `maxlength` | Maximum character count | None |
| `minlength` | Minimum character count (for validation) | None |
| `placeholder` | Hint text when empty | None |
| `wrap` | Line wrapping: `soft` or `hard` | `soft` |
| `readonly` | Prevents editing (value submitted) | false |
| `disabled` | Disables input (value not submitted) | false |
| `required` | Must have value | false |
| `autofocus` | Auto-focus on load | false |
| `form` | Associate with form by ID | nearest form |
| `spellcheck` | Enable/disable spellcheck | browser default |

## Wrapping Behavior

```html
<!-- Soft wrap (default): wraps visually but submitted as one line -->
<textarea wrap="soft" rows="4" cols="40"></textarea>

<!-- Hard wrap: wraps visually AND inserts line breaks in submitted value -->
<textarea wrap="hard" rows="4" cols="40"></textarea>
```

## CSS Styling

```css
textarea {
  width: 100%;
  min-height: 120px;
  padding: 12px 16px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 15px;
  font-family: inherit;
  line-height: 1.5;
  resize: vertical;
  transition: border-color 0.3s;
}

textarea:focus {
  border-color: #4a6cf7;
  outline: none;
  box-shadow: 0 0 0 3px rgba(74,108,247,0.12);
}

/* Disable resize */
textarea { resize: none; }
/* Allow only vertical resize */
textarea { resize: vertical; }
/* Allow both directions */
textarea { resize: both; }
```

## JavaScript Events and Properties

```javascript
const ta = document.getElementById('myTextarea');

// Events
ta.addEventListener('input', () => console.log('Value changed'));
ta.addEventListener('change', () => console.log('Value committed'));
ta.addEventListener('focus', () => {});
ta.addEventListener('blur', () => {});

// Properties
ta.value          // Current text content
ta.selectionStart // Cursor start position
ta.selectionEnd   // Cursor end position
ta.rows           // Number of visible rows
ta.cols           // Number of visible columns
ta.textLength     // Length of value (readonly)

// Methods
ta.focus()
ta.blur()
ta.select()       // Select all text
ta.setSelectionRange(start, end)
ta.setRangeText(replacement)
```

## Auto-Resizing Textarea

Make a textarea grow with its content:

```javascript
function autoResize(textarea) {
  textarea.style.height = 'auto';
  textarea.style.height = textarea.scrollHeight + 'px';
}

// Usage
document.querySelectorAll('textarea').forEach(ta => {
  ta.addEventListener('input', function() {
    autoResize(this);
  });
});
```

## Character Counter

```html
<div style="position: relative;">
  <textarea id="message" maxlength="500" rows="4" oninput="updateCount()"></textarea>
  <div id="count" style="text-align:right;font-size:13px;color:#718096;">0 / 500</div>
</div>
<script>
function updateCount() {
  const ta = document.getElementById('message');
  document.getElementById('count').textContent = ta.value.length + ' / 500';
}
</script>
```

## Accessibility

```html
<label for="comments">Comments</label>
<textarea id="comments" name="comments" rows="4"
  aria-describedby="commentsHelp"
  aria-required="true"
  placeholder="Share your thoughts...">
</textarea>
<p id="commentsHelp">Your feedback helps us improve. Please be specific.</p>
```

## Common Mistakes

1. **Self-closing tag**: `<textarea />` is invalid — always use `<textarea></textarea>`
2. **Whitespace in default content**: Newlines after the opening tag are included in the value
3. **Using `value` attribute**: Textarea has no `value` attribute; use text content instead
4. **Forgetting `resize: none` on fixed-layout designs**: Users can break layouts with resize handles
5. **Not sanitizing textarea content**: Textareas can contain HTML that needs escaping
6. **Setting `cols` to a percentage**: `cols` expects a number; use CSS `width: 100%` instead

## Best Practices

1. **Always set `rows` and `cols`** for a good initial size
2. **Use `maxlength` to prevent excessively long submissions**
3. **Provide a character counter** when using `maxlength`
4. **Use `minlength` with `required`** to enforce minimum content length
5. **Set `font-family: inherit`** to match the site's font
6. **Enable `resize: vertical` only** — horizontal resize breaks layouts
7. **Sanitize and escape output** when displaying user-submitted textarea content
8. **Use auto-resize** for comment boxes where content length varies
9. **Consider a WYSIWYG editor** for rich text (formatting, images, links)
10. **Apply `white-space: pre-wrap`** to preserve line breaks in displayed content

## Summary Notes

- `<textarea>` is for multi-line text input; uses text content, not `value` attribute
- `rows` and `cols` set dimensions; CSS overrides these
- `maxlength`/`minlength` control character count limits
- `wrap="soft"` vs `wrap="hard"` affects submitted line breaks
- Textareas are resizable by default (use `resize: none` to disable)
- Auto-resizing requires JavaScript (scrollHeight technique)
- Character counters improve UX when limits are enforced
- `readonly` allows scrolling/selection but prevents editing
- Whitespace between tags is preserved as default content
- Always sanitize textarea output to prevent XSS attacks
