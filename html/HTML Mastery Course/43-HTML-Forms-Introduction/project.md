# Mini Project: Build a User Registration Form

## Objective
Build a complete user registration form using proper HTML form structure, input types, labels, and accessibility features.

## Requirements

Build a registration form with:

1. **Personal Information**
   - Full name (text input)
   - Email address (email input with validation)
   - Password (password input with show/hide toggle via CSS)
   - Date of birth (date input)
   - Phone number (tel input)

2. **Account Preferences**
   - Country selection (select dropdown with optgroups)
   - Newsletter subscription (checkbox)
   - Account type (radio buttons: Personal/Business/Enterprise)

3. **Terms and Submission**
   - Terms and conditions checkbox (required)
   - Submit button with loading state
   - Reset button

4. **Accessibility**
   - All fields have `<label>` elements with `for` attributes
   - `<fieldset>` and `<legend>` for grouping
   - Required fields marked with asterisk and `aria-required`
   - Error messages using `aria-describedby`

## Styling Requirements
- Clean, modern design with proper spacing
- Focus states on all inputs
- Invalid input styling
- Responsive layout

## Bonus Challenges
- Add a password strength indicator
- Implement live validation with CSS pseudo-classes
- Add a multi-step form layout
- Include a CAPTCHA placeholder

## Starter Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Registration</title>
</head>
<body>
    <!-- Build your registration form -->
</body>
</html>
```

## Submission
Test form submission with both GET and POST methods. Validate with W3C. Test keyboard-only navigation.
