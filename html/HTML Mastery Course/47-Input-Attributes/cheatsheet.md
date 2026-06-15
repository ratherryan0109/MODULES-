# Input Attributes — Cheatsheet

## Core Attributes

| Attribute | Values | Required | Purpose |
|-----------|--------|----------|---------|
| `type` | input type name | No* | Control type (*default: text) |
| `name` | string | Yes for submission | Form data key |
| `id` | unique string | For label/JS | Unique identifier |
| `value` | string | No | Default/current value |

## Validation Attributes

| Attribute | Applies To | Example |
|-----------|-----------|---------|
| `required` | Most types | `<input required>` |
| `min` | number, range, date/time | `min="0"` |
| `max` | number, range, date/time | `max="100"` |
| `step` | number, range, date/time | `step="5"` |
| `minlength` | text, email, tel, url, password | `minlength="3"` |
| `maxlength` | text, email, tel, url, password | `maxlength="50"` |
| `pattern` | text, tel, email, url, password | `pattern="[A-Z]+"` |

## Behavior Attributes

| Attribute | Effect |
|-----------|--------|
| `placeholder` | Hint text when empty |
| `autofocus` | Auto-focus on page load |
| `disabled` | Disables input, NOT submitted |
| `readonly` | Prevents editing, IS submitted |
| `checked` | Pre-selects checkbox/radio |
| `multiple` | Allow multiple values/files |
| `autocomplete` | Browser autofill hint |
| `inputmode` | Virtual keyboard hint |
| `enterkeyhint` | Enter key label on mobile |
| `spellcheck` | Enable/disable spellcheck |
| `dirname` | Submit text direction |
| `list` | Reference to `<datalist>` id |

## Form Association Attributes (on submit buttons)

| Attribute | Overrides | Example |
|-----------|-----------|---------|
| `form` | Associates external input | `form="myForm"` |
| `formaction` | Form's `action` URL | `formaction="/alt"` |
| `formmethod` | Form's `method` | `formmethod="GET"` |
| `formenctype` | Form's `enctype` | `formenctype="multipart/form-data"` |
| `formtarget` | Form's `target` | `formtarget="_blank"` |
| `formnovalidate` | Form's validation | `formnovalidate` |

## Autocomplete Values

```
Personal: name, given-name, family-name, nickname, honorific-prefix
Contact:  email, tel, tel-country-code, tel-national, tel-area-code
Address:  street-address, address-line1, address-line2, address-level1,
          address-level2, address-level3, postal-code, country-name
Account:  username, current-password, new-password, one-time-code
Payment:  cc-name, cc-number, cc-exp, cc-exp-month, cc-exp-year,
          cc-csc, cc-type, transaction-currency, transaction-amount
Web:      url, photo, language, impp
Birth:    bday, bday-day, bday-month, bday-year
Sex:      sex
Phone:    tel, tel-extension
```

## `inputmode` Values

| Value | Keyboard Type | Best For |
|-------|--------------|----------|
| `none` | No virtual keyboard | Custom input widgets |
| `text` | Standard text | General text |
| `decimal` | Numeric with . | Prices, decimals |
| `numeric` | Digits only | ZIP, PIN codes |
| `tel` | Telephone keypad | Phone numbers |
| `search` | Search-optimized | Search fields |
| `email` | @ and .com keys | Email addresses |
| `url` | / and .com keys | URLs |

## `enterkeyhint` Values

| Value | Typical Label |
|-------|--------------|
| `enter` | ↵ (new line) |
| `done` | Done |
| `go` | Go |
| `next` | Next |
| `previous` | Previous |
| `search` | Search |
| `send` | Send |

## ARIA Accessibility Attributes

| Attribute | Purpose |
|-----------|---------|
| `aria-label` | Accessible name when no visible label |
| `aria-labelledby` | References IDs of labeling elements |
| `aria-describedby` | References help text element ID |
| `aria-errormessage` | References error message element ID |
| `aria-invalid` | Indicates validation error (true/false) |
| `aria-required` | Indicates required field (true/false) |
| `aria-disabled` | Indicates disabled state (true/false) |
| `aria-readonly` | Indicates readonly state (true/false) |

## Common Patterns

```html
<!-- Required with pattern -->
<input required pattern="[A-Za-z0-9]+" title="Alphanumeric only">

<!-- Password with autocomplete -->
<input type="password" autocomplete="new-password" minlength="8">

<!-- Number with constraints -->
<input type="number" min="1" max="100" step="1" value="1">

<!-- Mobile-optimized text -->
<input type="text" inputmode="numeric" pattern="[0-9]*" placeholder="ZIP Code">

<!-- External input association -->
<input form="formId" name="external" type="text">

<!-- Dual action buttons -->
<button type="submit" formaction="/save-draft">Save Draft</button>
<button type="submit" formaction="/publish">Publish</button>

<!-- File with restrictions -->
<input type="file" accept="image/*" multiple>

<!-- Readonly vs Disabled -->
<input readonly value="Submitted with form">
<input disabled value="Not submitted">
```

## `disabled` vs `readonly` Comparison

| Feature | `disabled` | `readonly` |
|---------|-----------|------------|
| User can edit | No | No |
| Value submitted | No | Yes |
| Visual change | Grayed out | Usually none |
| Can receive focus | No | Yes |
| Tab navigation | Skipped | Included |
| Works on checkboxes/radios | Yes | No |
| JavaScript changeable | No | Yes |
| Form validation | Skipped | Applied |
