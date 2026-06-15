# Textarea — Cheatsheet

## Basic Syntax

```html
<textarea id="msg" name="message" rows="4" cols="50"
  placeholder="Enter text..." maxlength="1000"
  required minlength="10" wrap="soft">
Default content here
</textarea>
```

## Key Attributes

| Attribute | Values | Default | Description |
|-----------|--------|---------|-------------|
| `rows` | number | 2 | Visible line count |
| `cols` | number | 20 | Visible character width |
| `maxlength` | number | none | Maximum character count |
| `minlength` | number | none | Minimum character count |
| `placeholder` | string | none | Hint text when empty |
| `wrap` | `soft`, `hard` | `soft` | Line wrapping mode |
| `readonly` | boolean | false | Prevent editing (submitted) |
| `disabled` | boolean | false | Disable (not submitted) |
| `required` | boolean | false | Must have value |
| `autofocus` | boolean | false | Auto-focus on load |
| `spellcheck` | boolean | inherit | Enable spellcheck |
| `form` | formID | nearest | Associate with form |
| `autocomplete` | string | off | Autofill hint |

## CSS Styling

```css
textarea {
  width: 100%;
  min-height: 100px;
  padding: 12px 16px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-family: inherit;
  font-size: 15px;
  line-height: 1.6;
  resize: vertical;
  transition: border-color 0.3s;
}
textarea:focus {
  border-color: #4a6cf7;
  outline: none;
  box-shadow: 0 0 0 3px rgba(74,108,247,0.12);
}
textarea:disabled {
  background: #f5f5f5;
  cursor: not-allowed;
}
```

## JavaScript

```javascript
// Properties
ta.value                // Current text
ta.selectionStart       // Cursor start index
ta.selectionEnd         // Cursor end index
ta.textLength           // Value length
ta.rows                 // Rows attribute
ta.cols                 // Cols attribute
ta.maxLength            // Maxlength attribute

// Methods
ta.focus()
ta.blur()
ta.select()             // Select all
ta.setSelectionRange(s, e)
ta.setRangeText(repl, s, e, mode)

// Auto-resize
ta.addEventListener('input', function() {
  this.style.height = 'auto';
  this.style.height = this.scrollHeight + 'px';
});

// Character counter
ta.addEventListener('input', function() {
  counter.textContent = this.value.length + ' / ' + this.maxLength;
});
```

## Events

| Event | Fires When |
|-------|-----------|
| `input` | Every value change |
| `change` | Value committed (on blur) |
| `focus` | Receives focus |
| `blur` | Loses focus |
| `select` | Text selected |
| `keydown`/`keyup` | Key pressed |

## Displaying Textarea Content

```css
/* Preserve line breaks and whitespace */
.output {
  white-space: pre-wrap;
}
```

## Wrap Modes

```
soft (default): wraps visually, NO line breaks submitted
hard:           wraps visually, inserts line breaks at cols width
```

## Auto-Resize Pattern

```javascript
function autoResize(ta) {
  ta.style.height = 'auto';
  ta.style.height = ta.scrollHeight + 'px';
}
textarea.addEventListener('input', function() {
  autoResize(this);
});
```
