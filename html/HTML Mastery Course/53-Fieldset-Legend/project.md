# Module 53 Mini Project: Checkout Form

## Project Overview

Build a complete e-commerce **Checkout Form** using `<fieldset>` and `<legend>` to organize the form into logical sections: Contact Information, Shipping Address, Payment Details, and Order Summary. The form should demonstrate proper fieldset usage, including a disabled fieldset for a "Gift Options" section that activates when a checkbox is checked.

## Learning Objectives

- Organize complex forms with multiple fieldsets
- Use legends to label each form section descriptively
- Implement a togglable disabled fieldset with JavaScript
- Style fieldsets to match a cohesive design
- Ensure full accessibility with proper fieldset/legend usage
- Validate form data across all sections

## Requirements

### Form Sections
1. **Contact Information** — Name, Email, Phone
2. **Shipping Address** — Street, City, State, ZIP, Country
3. **Payment Details** — Card number, Expiry, CVC, Cardholder name
4. **Gift Options** (disabled by default) — Gift message, Gift wrap checkbox, Delivery date — Enable via "This is a gift" checkbox
5. **Order Summary** — Read-only display of selected items

### Functional Requirements
- All radio buttons must be inside `<fieldset>` with `<legend>`
- Toggling the gift checkbox enables/disables the gift section fieldset
- Form validation with HTML5 constraint validation
- Clear visual hierarchy with styled fieldsets
- Responsive layout (single column on mobile, multi-column on desktop)
- Accessible error messages

## Project Structure

```
checkout-form/
├── index.html       # Main file with all HTML, CSS, JS
```

## Step-by-Step Implementation

### Step 1: HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Checkout</title>
</head>
<body>
    <h1>Checkout</h1>
    <form id="checkoutForm" novalidate>
        <!-- Shipping Method Radio Group -->
        <fieldset>
            <legend>Shipping Method</legend>
            <label><input type="radio" name="shipping" value="standard"> Standard (5-7 days)</label>
            <label><input type="radio" name="shipping" value="express"> Express (2-3 days)</label>
            <label><input type="radio" name="shipping" value="overnight"> Overnight</label>
        </fieldset>

        <!-- Contact Information -->
        <fieldset>
            <legend>Contact Information</legend>
            <div class="field-group">
                <label>Full Name <input type="text" name="name" required></label>
                <label>Email <input type="email" name="email" required></label>
                <label>Phone <input type="tel" name="phone"></label>
            </div>
        </fieldset>

        <!-- Shipping Address -->
        <fieldset>
            <legend>Shipping Address</legend>
            <div class="field-group grid-2">
                <label>Street <input type="text" name="street" required></label>
                <label>City <input type="text" name="city" required></label>
                <label>State <input type="text" name="state" required></label>
                <label>ZIP Code <input type="text" name="zip" required pattern="[0-9]{5}"></label>
                <label class="full-width">Country <input type="text" name="country" required></label>
            </div>
        </fieldset>

        <!-- Payment Details -->
        <fieldset>
            <legend>Payment Details</legend>
            <div class="field-group grid-2">
                <label class="full-width">Card Number <input type="text" name="card" required pattern="[0-9]{16}" maxlength="16"></label>
                <label>Expiry <input type="text" name="expiry" placeholder="MM/YY" required pattern="(0[1-9]|1[0-2])\/[0-9]{2}"></label>
                <label>CVC <input type="text" name="cvc" required pattern="[0-9]{3,4}" maxlength="4"></label>
                <label class="full-width">Cardholder Name <input type="text" name="cardName" required></label>
            </div>
        </fieldset>

        <!-- Gift Toggle -->
        <label class="gift-toggle">
            <input type="checkbox" id="giftToggle"> This is a gift
        </label>

        <!-- Gift Options (Disabled) -->
        <fieldset id="giftSection" disabled>
            <legend>Gift Options</legend>
            <div class="field-group">
                <label>Gift Message <textarea name="giftMessage" rows="3" placeholder="Write your gift message..."></textarea></label>
                <label><input type="checkbox" name="giftWrap"> Gift wrap (+$5.00)</label>
                <label>Delivery Date <input type="date" name="deliveryDate"></label>
            </div>
        </fieldset>

        <button type="submit">Place Order</button>
    </form>

    <script>
        // Gift toggle logic
        const giftToggle = document.getElementById('giftToggle');
        const giftSection = document.getElementById('giftSection');
        giftToggle.addEventListener('change', () => {
            giftSection.disabled = !giftToggle.checked;
        });
    </script>
</body>
</html>
```

### Step 2: CSS Styling
1. Clean, modern design with a brand color scheme
2. Fieldsets styled as cards with subtle shadows
3. Legends styled as section headers with background color
4. Responsive grid using CSS Grid for multi-column layouts
5. Disabled fieldset has reduced opacity and cursor feedback

### Step 3: JavaScript Validation
1. Custom validation UI on form submit
2. Highlight invalid fields with red borders
3. Show error messages next to invalid fields
4. Prevent submit if validation fails
5. Toggle gift section disabled state

## Complete Solution

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Checkout - Complete Your Order</title>
<style>
* { box-sizing: border-box; margin: 0; padding: 0; }
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: #f7f8fc; color: #2c3e50; padding: 20px; min-height: 100vh;
}
.container { max-width: 800px; margin: 0 auto; }
h1 { font-size: 28px; margin-bottom: 8px; }
.subtitle { color: #7f8c8d; margin-bottom: 25px; }

fieldset {
  border: none;
  background: white;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  transition: opacity 0.3s, box-shadow 0.3s;
}
legend {
  font-weight: 700;
  font-size: 18px;
  color: #2c3e50;
  padding: 0;
  margin-bottom: 16px;
}
fieldset[disabled] {
  opacity: 0.5;
  box-shadow: none;
  cursor: not-allowed;
}
fieldset[disabled] * { pointer-events: none; }

.field-group { display: flex; flex-direction: column; gap: 14px; }
.grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.full-width { grid-column: 1 / -1; }
@media (max-width: 600px) { .grid-2 { grid-template-columns: 1fr; } }

label { font-size: 14px; font-weight: 500; color: #555; }
input, select, textarea {
  display: block; width: 100%; padding: 10px 12px;
  border: 2px solid #e0e0e0; border-radius: 8px;
  font-size: 15px; transition: border-color 0.2s; margin-top: 6px;
  font-family: inherit;
}
input:focus, select:focus, textarea:focus {
  border-color: #6C63FF; outline: none;
}
input:invalid:not(:placeholder-shown) { border-color: #e74c3c; }
.error-msg { color: #e74c3c; font-size: 12px; margin-top: 4px; display: none; }
input:invalid:not(:placeholder-shown) + .error-msg { display: block; }

.gift-toggle {
  display: flex; align-items: center; gap: 10px;
  background: white; border-radius: 12px; padding: 16px 24px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06); margin-bottom: 16px;
  cursor: pointer; font-weight: 500;
}
.gift-toggle input { width: auto; margin: 0; accent-color: #6C63FF; }

/* Radio group inside fieldset */
fieldset label { font-weight: 400; }
fieldset input[type="radio"], fieldset input[type="checkbox"] { width: auto; display: inline; margin: 0 6px 0 0; }

.submit-btn {
  width: 100%; padding: 14px; background: #6C63FF; color: white;
  border: none; border-radius: 10px; font-size: 18px; font-weight: 600;
  cursor: pointer; transition: background 0.2s; margin-top: 8px;
}
.submit-btn:hover { background: #5a52e0; }

.shipping-options { display: flex; gap: 12px; flex-wrap: wrap; }
.shipping-options label { display: flex; align-items: center; gap: 6px; padding: 10px 16px; border: 2px solid #e0e0e0; border-radius: 8px; cursor: pointer; transition: 0.2s; }
.shipping-options label:has(input:checked) { border-color: #6C63FF; background: #f0eeff; }

.summary-row { display: flex; justify-content: space-between; padding: 8px 0; font-size: 15px; }
.summary-row.total { border-top: 2px solid #e0e0e0; margin-top: 8px; padding-top: 12px; font-weight: 700; font-size: 18px; }
</style>
</head>
<body>
<div class="container">
  <h1>Checkout</h1>
  <p class="subtitle">Complete your order in a few steps</p>

  <form id="checkoutForm" novalidate>
    <!-- Shipping Method -->
    <fieldset>
      <legend>Shipping Method</legend>
      <div class="shipping-options">
        <label><input type="radio" name="shipping" value="standard" checked> Standard (5-7 days) — Free</label>
        <label><input type="radio" name="shipping" value="express"> Express (2-3 days) — $12.99</label>
        <label><input type="radio" name="shipping" value="overnight"> Overnight — $24.99</label>
      </div>
    </fieldset>

    <!-- Contact -->
    <fieldset>
      <legend>Contact Information</legend>
      <div class="field-group">
        <label>Full Name
          <input type="text" name="name" required placeholder="John Doe">
          <span class="error-msg">Please enter your full name</span>
        </label>
        <label>Email
          <input type="email" name="email" required placeholder="john@example.com">
          <span class="error-msg">Please enter a valid email</span>
        </label>
        <label>Phone (optional)
          <input type="tel" name="phone" placeholder="(555) 123-4567">
        </label>
      </div>
    </fieldset>

    <!-- Address -->
    <fieldset>
      <legend>Shipping Address</legend>
      <div class="field-group grid-2">
        <label class="full-width">Street Address
          <input type="text" name="street" required placeholder="123 Main St">
          <span class="error-msg">Street address is required</span>
        </label>
        <label>City
          <input type="text" name="city" required placeholder="New York">
          <span class="error-msg">City is required</span>
        </label>
        <label>State
          <input type="text" name="state" required placeholder="NY">
          <span class="error-msg">State is required</span>
        </label>
        <label>ZIP Code
          <input type="text" name="zip" required pattern="[0-9]{5}" placeholder="10001" maxlength="5">
          <span class="error-msg">Enter a 5-digit ZIP code</span>
        </label>
        <label class="full-width">Country
          <input type="text" name="country" required placeholder="United States">
          <span class="error-msg">Country is required</span>
        </label>
      </div>
    </fieldset>

    <!-- Payment -->
    <fieldset>
      <legend>Payment Details</legend>
      <div class="field-group grid-2">
        <label class="full-width">Card Number
          <input type="text" name="card" required pattern="[0-9]{13,16}" placeholder="1234 5678 9012 3456" maxlength="19" inputmode="numeric">
          <span class="error-msg">Enter a valid card number</span>
        </label>
        <label>Expiry (MM/YY)
          <input type="text" name="expiry" required placeholder="MM/YY" pattern="(0[1-9]|1[0-2])\/([0-9]{2})" maxlength="5">
          <span class="error-msg">Enter a valid expiry date</span>
        </label>
        <label>CVC
          <input type="text" name="cvc" required pattern="[0-9]{3,4}" placeholder="123" maxlength="4" inputmode="numeric">
          <span class="error-msg">Enter a valid CVC</span>
        </label>
        <label class="full-width">Cardholder Name
          <input type="text" name="cardName" required placeholder="Name on card">
          <span class="error-msg">Cardholder name is required</span>
        </label>
      </div>
    </fieldset>

    <!-- Gift Toggle -->
    <label class="gift-toggle">
      <input type="checkbox" id="giftToggle"> This is a gift — show gift options
    </label>

    <!-- Gift Section (Disabled) -->
    <fieldset id="giftSection" disabled>
      <legend>Gift Options</legend>
      <div class="field-group">
        <label>Gift Message
          <textarea name="giftMessage" rows="3" placeholder="Write a personal message..."></textarea>
        </label>
        <label><input type="checkbox" name="giftWrap" value="1"> Gift wrap (+$5.00)</label>
        <label>Delivery Date
          <input type="date" name="deliveryDate">
        </label>
      </div>
    </fieldset>

    <!-- Order Summary -->
    <fieldset>
      <legend>Order Summary</legend>
      <div class="summary-row"><span>Product A × 2</span><span>$49.98</span></div>
      <div class="summary-row"><span>Product B × 1</span><span>$29.99</span></div>
      <div class="summary-row"><span>Shipping</span><span id="shippingCost">$0.00</span></div>
      <div class="summary-row total"><span>Total</span><span id="totalCost">$79.97</span></div>
    </fieldset>

    <button type="submit" class="submit-btn">Place Order — $79.97</button>
  </form>
</div>

<script>
// Gift toggle
const giftToggle = document.getElementById('giftToggle');
const giftSection = document.getElementById('giftSection');
giftToggle.addEventListener('change', () => {
  giftSection.disabled = !giftToggle.checked;
});

// Shipping cost
document.querySelectorAll('input[name="shipping"]').forEach(radio => {
  radio.addEventListener('change', () => {
    const costs = { standard: 0, express: 12.99, overnight: 24.99 };
    const baseTotal = 79.97;
    const shipping = costs[radio.value];
    document.getElementById('shippingCost').textContent = '$' + shipping.toFixed(2);
    const total = baseTotal + shipping;
    document.getElementById('totalCost').textContent = '$' + total.toFixed(2);
    document.querySelector('.submit-btn').textContent = 'Place Order — $' + total.toFixed(2);
  });
});

// Validation
document.getElementById('checkoutForm').addEventListener('submit', function(e) {
  e.preventDefault();
  let valid = true;
  this.querySelectorAll('[required]').forEach(field => {
    if (!field.validity.valid) {
      field.reportValidity();
      valid = false;
    }
  });
  if (valid) {
    alert('Order placed successfully! (Demo)');
  }
});
</script>
</body>
</html>
```

## Bonus Challenges

1. **Multi-step checkout**: Split the form into separate pages/steps, showing one fieldset at a time
2. **Live validation**: Validate fields on blur rather than on submit
3. **Credit card formatting**: Auto-format card number with spaces every 4 digits
4. **Saved addresses**: Add a "Use saved address" checkbox that autofills address fields
5. **Country-dependent fields**: Show/hide state/province fields based on selected country
6. **Animated transitions**: Add smooth animations when enabling/disabling the gift section

## Submission Checklist

- [ ] All form sections use `<fieldset>` and `<legend>`
- [ ] Radio buttons are properly grouped with fieldsets
- [ ] Gift section toggles disabled state via checkbox
- [ ] Form validates on submit with user-friendly messages
- [ ] Responsive design works on mobile and desktop
- [ ] Styled fieldsets have consistent visual appearance
- [ ] Shipping cost updates when method changes
- [ ] Code is clean, well-organized, and accessible
