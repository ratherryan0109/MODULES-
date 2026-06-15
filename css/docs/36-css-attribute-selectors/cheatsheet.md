# CSS Attribute Selectors Cheatsheet

## Basic Selectors
```css
[attr]            /* Has attribute */
[attr="value"]    /* Exact match */
[attr^="value"]   /* Starts with */
[attr$="value"]   /* Ends with */
[attr*="value"]   /* Contains substring */
[attr~="value"]   /* Word in space-separated list */
[attr|="value"]   /* Starts with followed by hyphen */
```

## Case Insensitivity
```css
[attr="value" i]  /* Case-insensitive match */
```

## Common Patterns
```css
/* External links */
a[href^="http"] { color: #007bff; }

/* File types */
a[href$=".pdf"] { color: #e74c3c; }
a[href$=".zip"] { color: #f39c12; }
a[href$=".jpg"],
a[href$=".png"] { color: #2ecc71; }

/* Form inputs */
input[required] { border-color: #e74c3c; }
input[type="email"] { border-color: #3498db; }
input[disabled] { opacity: 0.5; }

/* Data attributes */
[data-status="active"] { background: #2ecc71; }
[data-status="archived"] { background: #95a5a6; }

/* Language */
[lang|="en"] { font-family: serif; }
```

## Combining Selectors
```css
/* Multiple attribute conditions */
input[type="text"][required] {
  border: 2px solid #e74c3c;
}

/* With element selector */
a[href*="example.com"] {
  color: #9b59b6;
}
```
