# Mini Project: Build an Advanced Checkout Form

## Objective
Create a detailed e-commerce checkout form that demonstrates comprehensive use of form and input attributes.

## Requirements

Build a checkout form with:

1. **Shipping Information**
   - Full name, email, phone
   - Address (with autocomplete attributes)
   - Country, state, ZIP code
   - Shipping method selection (radio buttons with custom styling)

2. **Payment Information**
   - Card number (with pattern attribute for 16 digits)
   - Expiry date (month + year selects)
   - CVV (maxlength=4, pattern for digits)
   - Cardholder name

3. **Billing Address**
   - Checkbox: "Same as shipping address"
   - Conditional billing address fields (visible via CSS when checkbox unchecked)

4. **Order Summary**
   - Read-only summary section
   - Hidden inputs for subtotal, tax, total
   - Promo code input (disabled by default)

5. **Form Attributes Used**
   - `autocomplete` on all fields
   - `required`, `pattern`, `maxlength`, `minlength`
   - `readonly` on order total
   - `disabled` on promo until checkbox checked
   - `formnovalidate` on "Save for Later" button
   - `formaction` on different submit buttons

## Styling Requirements
- Payment card preview that updates dynamically via CSS
- Custom radio buttons and checkboxes
- Invalid state highlighting
- Disabled state styling
- Mobile-responsive 2-column layout

## Bonus Challenges
- Add a progress indicator (1/3, 2/3, 3/3)
- Implement CSS-only tooltips for help icons
- Add a "Remember me" toggle
- Create a print-friendly receipt

## Starter Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Checkout</title>
</head>
<body>
    <!-- Build your checkout form with advanced attributes -->
</body>
</html>
```

## Submission
Verify all attributes function as expected. Test form submission behavior with different buttons.
