# CSS Forms Cheatsheet

## Input Reset & Base
```css
* { box-sizing: border-box; }

input, textarea, select {
  width: 100%;
  padding: 12px;
  border: 2px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  font-family: inherit;
}
```

## Focus State
```css
input:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 3px rgba(0,123,255,0.25);
}
```

## Validation States
```css
input:valid   { border-color: #2ecc71; }
input:invalid { border-color: #e74c3c; }
```

## Custom Checkbox
```css
input[type="checkbox"] {
  appearance: none;
  width: 20px; height: 20px;
  border: 2px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
}
input[type="checkbox"]:checked {
  background: #007bff;
  border-color: #007bff;
}
```

## Layout
```css
.form-group { margin-bottom: 20px; }
.form-group label {
  display: block;
  margin-bottom: 6px;
  font-weight: 600;
}

/* Horizontal form */
.form-row {
  display: flex;
  gap: 20px;
}
```

## Buttons
```css
button, input[type="submit"] {
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;
}
```
