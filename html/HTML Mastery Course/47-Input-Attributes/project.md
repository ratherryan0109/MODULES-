# Mini Project: Smart Checkout Form with Attribute Mastery

## Objective

Build a production-ready checkout form that demonstrates mastery of HTML input attributes. The form should use validation attributes, autocomplete, inputmode, form association, and dual-submit functionality with different behaviors.

## Requirements

1. **Billing Section**: Full name (autocomplete=name), email (autocomplete=email), phone (tel + inputmode=tel), address fields with full autocomplete
2. **Payment Section**: Card number (pattern + maxlength), CVV (number + min/max), expiry date (month)
3. **Shipping Section**: Same as billing but with "same as billing" checkbox
4. **Dual Submit Buttons**: "Pay Now" (formaction=/process, formmethod=POST) and "Save for Later" (formaction=/save, formmethod=POST, formnovalidate)
5. **External Input**: Cardholder name input placed outside the form but associated via `form` attribute
6. **Full Attribute Validation**: required, pattern, min, max, minlength, maxlength all used appropriately
7. **Mobile Optimization**: inputmode and enterkeyhint on all fields

## Implementation

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Smart Checkout</title>
  <style>
    * { margin:0; padding:0; box-sizing:border-box; }
    body { font-family:'Segoe UI',sans-serif; background:#f7f8fc; padding:30px 20px; }
    .container { max-width:700px; margin:0 auto; background:white; border-radius:16px; padding:40px; box-shadow:0 10px 40px rgba(0,0,0,0.08); }
    h1 { color:#1a1a2e; margin-bottom:8px; }
    .subtitle { color:#718096; margin-bottom:30px; }
    fieldset { border:2px solid #e2e8f0; border-radius:12px; padding:20px; margin-bottom:24px; }
    legend { font-weight:700; color:#2d3748; padding:0 12px; font-size:16px; }
    .form-row { display:grid; grid-template-columns:1fr 1fr; gap:16px; }
    .form-group { margin-bottom:16px; }
    label { display:block; margin-bottom:4px; font-weight:600; color:#4a5568; font-size:14px; }
    input, select { width:100%; padding:10px 14px; border:2px solid #e2e8f0; border-radius:8px; font-size:15px; transition:all 0.3s; }
    input:focus { border-color:#4a6cf7; outline:none; box-shadow:0 0 0 3px rgba(74,108,247,0.12); }
    .checkbox-label { display:flex; align-items:center; gap:8px; font-weight:400; cursor:pointer; margin-bottom:16px; }
    .checkbox-label input { width:auto; }
    .btn-group { display:flex; gap:12px; margin-top:8px; }
    .btn { flex:1; padding:14px; border:none; border-radius:8px; font-size:16px; font-weight:600; cursor:pointer; transition:all 0.3s; }
    .btn-primary { background:linear-gradient(135deg,#667eea,#764ba2); color:white; }
    .btn-primary:hover { opacity:0.9; }
    .btn-secondary { background:#e2e8f0; color:#4a5568; }
    .btn-secondary:hover { background:#cbd5e0; }
    .btn-danger { background:#fc8181; color:white; }
    .btn-danger:hover { background:#f56565; }
    .external-input { margin-bottom:16px; }
    .external-input input { border-color:#f6ad55; }
    .external-input label { color:#dd6b20; }
    .note { font-size:13px; color:#718096; margin-top:-8px; margin-bottom:12px; }
  </style>
</head>
<body>
<div class="container">
  <h1>Smart Checkout</h1>
  <p class="subtitle">Demonstrating HTML attribute mastery</p>

  <form id="checkoutForm" action="/process" method="POST">
    <fieldset>
      <legend>Billing Address</legend>
      <div class="form-group"><label>Full Name</label><input type="text" name="billing_name" required minlength="2" autocomplete="name" placeholder="John Doe" enterkeyhint="next"></div>
      <div class="form-row">
        <div class="form-group"><label>Email</label><input type="email" name="billing_email" required autocomplete="email" inputmode="email" placeholder="john@example.com"></div>
        <div class="form-group"><label>Phone</label><input type="tel" name="billing_phone" required pattern="[0-9\-\(\)\s\+]{7,20}" autocomplete="tel" inputmode="tel" placeholder="+1 (555) 000-0000"></div>
      </div>
      <div class="form-group"><label>Street Address</label><input type="text" name="billing_address" required autocomplete="street-address" placeholder="123 Main St"></div>
      <div class="form-row">
        <div class="form-group"><label>City</label><input type="text" name="billing_city" required autocomplete="address-level2"></div>
        <div class="form-group"><label>State</label><input type="text" name="billing_state" required autocomplete="address-level1" maxlength="2" pattern="[A-Z]{2}" placeholder="CA" title="2-letter state code"></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label>ZIP Code</label><input type="text" name="billing_zip" required pattern="[0-9]{5}" maxlength="5" autocomplete="postal-code" inputmode="numeric" placeholder="90210"></div>
        <div class="form-group"><label>Country</label><input type="text" name="billing_country" required autocomplete="country-name" value="United States"></div>
      </div>
    </fieldset>

    <fieldset>
      <legend>Payment Details</legend>
      <div class="form-row">
        <div class="form-group"><label>Card Number</label><input type="text" name="card_number" required pattern="[0-9]{13,19}" maxlength="19" inputmode="numeric" autocomplete="cc-number" placeholder="1234567890123456" title="13-19 digit card number"></div>
        <div class="form-group"><label>CVV</label><input type="number" name="cvv" required min="100" max="9999" inputmode="numeric" autocomplete="cc-csc" placeholder="123"></div>
      </div>
      <div class="form-group"><label>Expiry Date</label><input type="month" name="card_expiry" required autocomplete="cc-exp" min="2025-01"></div>
    </fieldset>

    <fieldset>
      <legend>Shipping Address</legend>
      <label class="checkbox-label"><input type="checkbox" id="sameBilling" onchange="toggleShipping()"> Same as billing address</label>
      <div id="shippingFields">
        <div class="form-group"><label>Full Name</label><input type="text" name="shipping_name" required autocomplete="shipping name"></div>
        <div class="form-group"><label>Street Address</label><input type="text" name="shipping_address" required autocomplete="shipping street-address"></div>
        <div class="form-row">
          <div class="form-group"><label>City</label><input type="text" name="shipping_city" required autocomplete="shipping address-level2"></div>
          <div class="form-group"><label>State</label><input type="text" name="shipping_state" required maxlength="2" pattern="[A-Z]{2}"></div>
        </div>
        <div class="form-row">
          <div class="form-group"><label>ZIP</label><input type="text" name="shipping_zip" required pattern="[0-9]{5}" inputmode="numeric" autocomplete="shipping postal-code"></div>
          <div class="form-group"><label>Country</label><input type="text" name="shipping_country" required autocomplete="shipping country-name"></div>
        </div>
      </div>
    </fieldset>
  </form>

  <!-- External input using form attribute -->
  <div class="external-input">
    <label style="color:#dd6b20;font-weight:600;">Cardholder Name (external input)</label>
    <input type="text" form="checkoutForm" name="cardholder_name" required minlength="2" autocomplete="cc-name" placeholder="Name as it appears on card" enterkeyhint="done" style="width:100%;padding:10px 14px;border:2px solid #f6ad55;border-radius:8px;font-size:15px;">
    <div class="note">This input is placed outside the &lt;form&gt; tag but associated via <code>form="checkoutForm"</code></div>
  </div>

  <div class="btn-group">
    <button type="submit" form="checkoutForm" class="btn btn-primary" formaction="/process-payment" formmethod="POST" formenctype="application/x-www-form-urlencoded">💳 Pay Now (with validation)</button>
    <button type="submit" form="checkoutForm" class="btn btn-secondary" formaction="/save-cart" formmethod="GET" formnovalidate>💾 Save for Later (no validation)</button>
    <button type="reset" form="checkoutForm" class="btn btn-danger">✕ Clear All</button>
  </div>
</div>
<script>
function toggleShipping() {
  const checked = document.getElementById('sameBilling').checked;
  document.getElementById('shippingFields').style.display = checked ? 'none' : 'block';
  document.querySelectorAll('#shippingFields input').forEach(inp => { if (checked) inp.removeAttribute('required'); else inp.setAttribute('required',''); });
}
</script>
</body>
</html>
```

## Learning Objectives

- Apply every major input attribute category in one form
- Understand form association with external inputs
- Implement dual-submit with different behaviors
- Use autocomplete for accessibility compliance
- Optimize for mobile with inputmode and enterkeyhint
- Create conditional validation with JavaScript

## Evaluation Criteria

| Criterion | Points |
|-----------|--------|
| All validation attributes used correctly | 20 |
| Autocomplete on all relevant fields | 15 |
| External input with form attribute | 15 |
| Dual submit with formaction/formnovalidate | 15 |
| Mobile optimization (inputmode, enterkeyhint) | 15 |
| Same-as-billing toggle | 10 |
| Code quality and organization | 10 |
