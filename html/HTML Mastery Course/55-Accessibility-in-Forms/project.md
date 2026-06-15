# Module 55 Mini Project: Accessible Event Registration Form

## Project Overview

Build a fully accessible **Event Registration Form** for a tech conference. The form must meet WCAG 2.1 Level AA standards, work with screen readers, be fully keyboard-navigable, and implement all accessibility best practices covered in this module.

## Learning Objectives

- Implement comprehensive form accessibility following WCAG 2.1 AA
- Handle all input types with proper ARIA attributes
- Build an accessible multi-step registration flow
- Implement accessible error handling with live regions
- Create custom accessible components (tooltip, toggle, autocomplete)
- Test and verify accessibility with tools and screen readers
- Ensure keyboard-only navigation throughout

## Requirements

### Form Sections

1. **Personal Information** — Full Name, Email, Phone, Job Title, Company
2. **Registration Type** — Radio buttons: Standard ($199), VIP ($499), Student ($99), Virtual (Free)
3. **Sessions Selection** — Checkbox grid of 8+ sessions across 3 time slots
4. **Accommodations** — Toggle switches for: Dietary restrictions (with expandable text input), Accessibility needs (wheelchair access, ASL interpretation, large print materials), T-shirt size select
5. **Payment** — Credit card fields (if paid registration selected)
6. **Confirmation** — Review all data, accept terms, submit

### Accessibility Requirements
- All inputs have proper `<label>` with `for` attribute
- Radio buttons in `<fieldset>` with `<legend>`
- Checkbox groups use `<fieldset>` with `<legend>`
- All fields have `autocomplete` where applicable
- Required fields use `aria-required="true"`
- Error messages use `aria-describedby` and `role="alert"`
- `aria-invalid` dynamically set on validation
- Error summary that receives focus on validation failure
- Visible focus indicators (3px minimum)
- Skip link at top of page
- Correct heading hierarchy
- Color alone never used to convey information
- All content zoomable to 200% without loss of functionality

### Functional Requirements
- Show/hide payment section based on registration type
- Multi-step navigation with progress indicator
- Form data persists if user navigates back
- Real-time validation on blur
- Character counter on textareas (with aria-live announcement)
- Confirmation email preview on final step

## Project Structure

```
accessible-registration/
├── index.html       # Complete single-file accessible form
```

## Step-by-Step Implementation

### Step 1: HTML Structure
Create the form foundation with skip link, ARIA landmarks, and proper heading hierarchy.

```html
<a href="#main-content" class="skip-link">Skip to main content</a>

<div class="page-wrapper">
  <header role="banner">
    <h1>TechConf 2026 Registration</h1>
  </header>
  
  <nav aria-label="Registration Progress">
    <ol class="progress-indicator">
      <li aria-current="step">Personal Info</li>
      <li>Registration</li>
      <li>Sessions</li>
      <li>Accommodations</li>
      <li>Payment</li>
      <li>Confirmation</li>
    </ol>
  </nav>

  <main id="main-content">
    <form id="regForm" novalidate aria-label="Conference registration form">
      <!-- Steps here -->
    </form>
  </main>
</div>
```

### Step 2: CSS Styling
1. Base accessible styles: readable font sizes, sufficient color contrast, visible focus indicators
2. Responsive design that works at 200% zoom
3. Print-friendly styles
4. Dark mode support via prefers-color-scheme

### Step 3: JavaScript
1. Multi-step navigation with focus management
2. Real-time field validation with ARIA updates
3. Error summary with focus trapping
4. Conditional sections (payment visibility)
5. Character count live regions
6. Data persistence across steps

## Complete Solution

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>TechConf 2026 — Accessible Registration</title>
<style>
*, *::before, *::after { box-sizing: border-box; }
:root { --primary: #4361ee; --primary-dark: #3a56d4; --error: #e63946; --success: #2d6a4f; --bg: #f8f9fa; --text: #212529; --border: #dee2e6; --focus: #4361ee; }
body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; margin: 0; padding: 0; background: var(--bg); color: var(--text); line-height: 1.6; }
.skip-link { position: absolute; top: -100px; left: 0; background: var(--text); color: white; padding: 10px 20px; z-index: 1000; text-decoration: none; font-weight: 600; }
.skip-link:focus { top: 0; }
:focus-visible { outline: 3px solid var(--focus); outline-offset: 3px; border-radius: 4px; }
.container { max-width: 800px; margin: 0 auto; padding: 20px; }
h1 { font-size: 2rem; margin-bottom: 0.25rem; }
.subtitle { color: #6c757d; margin-bottom: 2rem; }

/* Progress */
nav[aria-label="Registration Progress"] { margin-bottom: 2rem; }
.progress { list-style: none; padding: 0; display: flex; gap: 4px; flex-wrap: wrap; counter-reset: step; }
.progress li { counter-increment: step; display: flex; align-items: center; gap: 6px; padding: 8px 16px; background: #e9ecef; border-radius: 20px; font-size: 0.85rem; color: #6c757d; }
.progress li::before { content: counter(step); display: inline-flex; align-items: center; justify-content: center; width: 24px; height: 24px; background: #6c757d; color: white; border-radius: 50%; font-size: 0.75rem; font-weight: 700; }
.progress li[aria-current="step"] { background: var(--primary); color: white; }
.progress li[aria-current="step"]::before { background: white; color: var(--primary); }
.progress li.completed { background: #d3f9d8; color: #2d6a4f; }
.progress li.completed::before { background: var(--success); }

/* Steps */
.form-step { display: none; }
.form-step.active { display: block; }
fieldset { border: 2px solid var(--border); border-radius: 8px; padding: 1.5rem; margin-bottom: 1.5rem; }
legend { font-weight: 700; font-size: 1.25rem; padding: 0 0.5rem; color: var(--text); }
.field { margin-bottom: 1rem; }
label { display: block; font-weight: 500; margin-bottom: 0.25rem; font-size: 0.95rem; }
input, select, textarea { display: block; width: 100%; padding: 0.75rem; border: 2px solid var(--border); border-radius: 6px; font-size: 1rem; font-family: inherit; background: white; }
input:focus, select:focus, textarea:focus { border-color: var(--focus); }
.hint { display: block; font-size: 0.85rem; color: #6c757d; margin-top: 0.25rem; }
.error-msg { display: block; font-size: 0.85rem; color: var(--error); margin-top: 0.25rem; display: none; }
.error-msg.show { display: block; }
.char-count { text-align: right; font-size: 0.85rem; color: #6c757d; margin-top: 0.25rem; }
.field[aria-invalid="true"] input, .field[aria-invalid="true"] select, .field[aria-invalid="true"] textarea { border-color: var(--error); }

/* Radio/Checkbox groups */
.radio-group, .checkbox-group { display: flex; flex-direction: column; gap: 0.5rem; padding: 0.5rem 0; }
.radio-group label, .checkbox-group label { display: flex; align-items: center; gap: 0.5rem; font-weight: 400; cursor: pointer; padding: 0.75rem 1rem; border: 2px solid var(--border); border-radius: 8px; transition: 0.15s; }
.radio-group label:has(input:checked), .checkbox-group label:has(input:checked) { border-color: var(--primary); background: #eef1ff; }
.radio-group input, .checkbox-group input { width: auto; }

/* Navigation */
.nav-buttons { display: flex; justify-content: space-between; margin-top: 1.5rem; gap: 1rem; }
.nav-buttons button { padding: 0.75rem 2rem; border: none; border-radius: 8px; font-size: 1rem; font-weight: 600; cursor: pointer; transition: 0.15s; }
#prevBtn { background: #e9ecef; color: var(--text); }
#prevBtn:hover:not(:disabled) { background: #dee2e6; }
#nextBtn, #submitBtn { background: var(--primary); color: white; }
#nextBtn:hover, #submitBtn:hover { background: var(--primary-dark); }
button:disabled { opacity: 0.4; cursor: not-allowed; }

/* Error summary */
.error-summary { background: #fff5f5; border: 2px solid var(--error); border-radius: 8px; padding: 1rem; margin-bottom: 1.5rem; display: none; }
.error-summary:focus { outline: 3px solid var(--error); outline-offset: 2px; }
.error-summary h2 { font-size: 1.1rem; color: var(--error); margin: 0 0 0.5rem; }
.error-summary ul { margin: 0; padding-left: 1.5rem; font-size: 0.9rem; }
.error-summary a { color: var(--error); text-decoration: underline; }

/* Review */
.review-section { background: white; border: 1px solid var(--border); border-radius: 8px; padding: 1rem; margin-bottom: 1rem; }
.review-section h3 { font-size: 1rem; color: var(--text); margin: 0 0 0.5rem; }
.review-row { display: flex; padding: 0.5rem 0; border-bottom: 1px solid var(--border); font-size: 0.9rem; }
.review-row:last-child { border-bottom: none; }
.review-label { font-weight: 500; width: 160px; flex-shrink: 0; color: #6c757d; }
.review-value { color: var(--text); }

/* Toggle */
.toggle-row { display: flex; align-items: center; gap: 1rem; margin-bottom: 0.5rem; }
.toggle { position: relative; width: 48px; height: 26px; flex-shrink: 0; }
.toggle input { position: absolute; opacity: 0; width: 0; height: 0; }
.toggle .slider { position: absolute; inset: 0; background: #ccc; border-radius: 13px; cursor: pointer; transition: 0.2s; }
.toggle .slider::before { content: ''; position: absolute; width: 22px; height: 22px; left: 2px; top: 2px; background: white; border-radius: 50%; transition: 0.2s; }
.toggle input:checked + .slider { background: var(--primary); }
.toggle input:checked + .slider::before { left: 24px; }
.toggle input:focus-visible + .slider { outline: 3px solid var(--focus); outline-offset: 3px; }

.sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0; }

@media (max-width: 600px) {
  .progress { gap: 2px; }
  .progress li { font-size: 0.75rem; padding: 4px 8px; }
  .nav-buttons { flex-direction: column; }
}
</style>
</head>
<body>
<a href="#main-content" class="skip-link">Skip to main content</a>

<div class="container">
  <header>
    <h1>TechConf 2026</h1>
    <p class="subtitle">Complete your registration for the premier tech conference — June 15-17, 2026</p>
  </header>

  <nav aria-label="Registration progress">
    <ol class="progress" id="progressBar">
      <li aria-current="step" id="stepIndicator1">Personal Info</li>
      <li id="stepIndicator2">Registration</li>
      <li id="stepIndicator3">Sessions</li>
      <li id="stepIndicator4">Accommodations</li>
      <li id="stepIndicator5">Payment</li>
      <li id="stepIndicator6">Confirm</li>
    </ol>
  </nav>

  <div class="error-summary" id="errorSummary" tabindex="-1" role="alert">
    <h2>Please fix the following errors:</h2>
    <ul id="errorList"></ul>
  </div>

  <main id="main-content">
    <form id="regForm" novalidate aria-label="Conference registration form">

      <!-- Step 1: Personal -->
      <fieldset class="form-step active" id="step1">
        <legend>Your Information</legend>
        <div class="field"><label for="fullName">Full Name <span aria-hidden="true">*</span></label><input type="text" id="fullName" required autocomplete="name" aria-required="true" aria-describedby="nameHint nameError"><span id="nameHint" class="hint">First and last name</span><span id="nameError" class="error-msg" role="alert">Name is required</span></div>
        <div class="field"><label for="email">Email <span aria-hidden="true">*</span></label><input type="email" id="email" required autocomplete="email" aria-required="true" aria-describedby="emailHint emailError"><span id="emailHint" class="hint">We'll send your confirmation here</span><span id="emailError" class="error-msg" role="alert">Valid email is required</span></div>
        <div class="field"><label for="phone">Phone</label><input type="tel" id="phone" autocomplete="tel" aria-describedby="phoneHint"><span id="phoneHint" class="hint">For urgent updates only</span></div>
        <div class="field"><label for="jobTitle">Job Title</label><input type="text" id="jobTitle" autocomplete="organization-title"></div>
        <div class="field"><label for="company">Company</label><input type="text" id="company" autocomplete="organization"></div>
      </fieldset>

      <!-- Step 2: Registration -->
      <fieldset class="form-step" id="step2">
        <legend>Registration Type</legend>
        <p id="regHint" class="hint">Choose your registration type. Prices include all keynote sessions and access to the expo hall.</p>
        <div class="radio-group" role="radiogroup" aria-labelledby="regTypeLegend">
          <label><input type="radio" name="regType" value="standard" data-price="199" required> Standard Pass — $199</label>
          <label><input type="radio" name="regType" value="vip" data-price="499"> VIP Pass — $499 (includes networking dinner)</label>
          <label><input type="radio" name="regType" value="student" data-price="99"> Student Pass — $99 (valid ID required)</label>
          <label><input type="radio" name="regType" value="virtual" data-price="0"> Virtual Pass — Free (live stream only)</label>
        </div>
        <span id="regTypeError" class="error-msg" role="alert">Select a registration type</span>
      </fieldset>

      <!-- Step 3: Sessions -->
      <fieldset class="form-step" id="step3">
        <legend>Select Sessions</legend>
        <p class="hint">Choose at least one session per day.</p>
        <fieldset><legend>Day 1 — June 15</legend><div class="checkbox-group">
          <label><input type="checkbox" name="session" value="d1-k1"> Keynote: The Future of AI</label>
          <label><input type="checkbox" name="session" value="d1-w1"> Workshop: Web Performance</label>
          <label><input type="checkbox" name="session" value="d1-w2"> Workshop: Cloud Architecture</label>
        </div></fieldset>
        <fieldset><legend>Day 2 — June 16</legend><div class="checkbox-group">
          <label><input type="checkbox" name="session" value="d2-k2"> Keynote: Cybersecurity Trends</label>
          <label><input type="checkbox" name="session" value="d2-w3"> Workshop: React Deep Dive</label>
          <label><input type="checkbox" name="session" value="d2-w4"> Workshop: DevOps Pipeline</label>
        </div></fieldset>
        <fieldset><legend>Day 3 — June 17</legend><div class="checkbox-group">
          <label><input type="checkbox" name="session" value="d3-k3"> Keynote: Sustainable Tech</label>
          <label><input type="checkbox" name="session" value="d3-w5"> Workshop: Data Science</label>
          <label><input type="checkbox" name="session" value="d3-w6"> Workshop: Mobile Dev</label>
        </div></fieldset>
        <span id="sessionsError" class="error-msg" role="alert">Select at least 1 session</span>
      </fieldset>

      <!-- Step 4: Accommodations -->
      <fieldset class="form-step" id="step4">
        <legend>Accommodations</legend>
        <fieldset><legend>Accessibility Needs</legend>
          <div class="checkbox-group">
            <label class="toggle-row"><span class="toggle"><input type="checkbox" id="wheelchair"><span class="slider"></span></span> Wheelchair accessible seating</label>
            <label class="toggle-row"><span class="toggle"><input type="checkbox" id="asl"><span class="slider"></span></span> ASL interpretation</label>
            <label class="toggle-row"><span class="toggle"><input type="checkbox" id="largeprint"><span class="slider"></span></span> Large print materials</label>
          </div>
        </fieldset>
        <fieldset><legend>Dietary Requirements</legend>
          <label class="toggle-row"><span class="toggle"><input type="checkbox" id="dietaryNeeded"><span class="slider"></span></span> I have dietary restrictions</label>
          <div class="field" id="dietaryDetails" style="display:none;"><label for="dietaryText">Please describe your dietary needs</label><textarea id="dietaryText" rows="3" aria-describedby="dietaryCount" maxlength="200"></textarea><div id="dietaryCount" class="char-count" aria-live="polite">0 characters</div></div>
        </fieldset>
        <div class="field"><label for="tshirt">T-shirt Size</label><select id="tshirt"><option value="">Select size</option><option>XS</option><option>S</option><option>M</option><option>L</option><option>XL</option><option>2XL</option><option>3XL</option></select></div>
      </fieldset>

      <!-- Step 5: Payment -->
      <fieldset class="form-step" id="step5">
        <legend>Payment Details</legend>
        <p id="paymentNotice" class="hint">Your registration type: <span id="selectedRegType">None</span> — Total: <span id="totalPrice">$0</span></p>
        <div class="field"><label for="cardNumber">Card Number</label><input type="text" id="cardNumber" autocomplete="cc-number" pattern="[0-9\s]{13,19}" aria-describedby="cardError"><span id="cardError" class="error-msg" role="alert">Valid card number required</span></div>
        <div style="display:flex;gap:1rem;"><div class="field" style="flex:1;"><label for="cardExpiry">Expiry (MM/YY)</label><input type="text" id="cardExpiry" autocomplete="cc-exp" pattern="(0[1-9]|1[0-2])\/[0-9]{2}"></div><div class="field" style="flex:1;"><label for="cardCvc">CVC</label><input type="text" id="cardCvc" autocomplete="cc-csc" pattern="[0-9]{3,4}"></div></div>
        <div class="field"><label for="cardName">Cardholder Name</label><input type="text" id="cardName" autocomplete="cc-name"></div>
        <div id="virtualNotice" style="display:none;background:#d3f9d8;padding:1rem;border-radius:8px;font-size:0.9rem;">Virtual pass is free — no payment needed!</div>
      </fieldset>

      <!-- Step 6: Confirm -->
      <fieldset class="form-step" id="step6">
        <legend>Review & Confirm</legend>
        <div id="reviewContent"></div>
        <div class="field" style="margin-top:1rem;"><label class="toggle-row"><span class="toggle"><input type="checkbox" id="acceptTerms" required aria-required="true"><span class="slider"></span></span> I confirm that all information is accurate and I agree to the <a href="#">Terms & Conditions</a> <span aria-hidden="true">*</span></label><span id="termsError" class="error-msg" role="alert">You must accept the terms</span></div>
      </fieldset>

      <div class="nav-buttons">
        <button type="button" id="prevBtn" disabled>← Previous</button>
        <button type="button" id="nextBtn">Next →</button>
        <button type="submit" id="submitBtn" style="display:none;">Complete Registration</button>
      </div>
    </form>
  </main>
</div>

<script>
let currentStep = 1;
const totalSteps = 6;

// Navigation
function goToStep(n) {
  document.querySelectorAll('.form-step').forEach(s => s.classList.remove('active'));
  document.getElementById('step' + n).classList.add('active');
  document.getElementById('prevBtn').disabled = n === 1;
  document.getElementById('nextBtn').style.display = n === totalSteps ? 'none' : 'inline-block';
  document.getElementById('submitBtn').style.display = n === totalSteps ? 'inline-block' : 'none';
  document.querySelectorAll('.progress li').forEach((li, i) => {
    li.removeAttribute('aria-current');
    li.classList.toggle('completed', i + 1 < n);
    if (i + 1 === n) li.setAttribute('aria-current', 'step');
  });
  currentStep = n;
  const legend = document.querySelector('#step' + n + ' > legend');
  if (legend) { legend.tabIndex = -1; legend.focus(); }
}

function validateStep(n) {
  const step = document.getElementById('step' + n);
  const errors = [];
  
  ['fullName', 'email'].forEach(id => {
    const input = document.getElementById(id);
    if (input && !input.validity.valid) {
      document.getElementById(id + 'Error').classList.add('show');
      input.closest('.field')?.setAttribute('aria-invalid', 'true');
      errors.push({ id, msg: document.getElementById(id + 'Error').textContent });
    } else if (input) {
      document.getElementById(id + 'Error').classList.remove('show');
      input.closest('.field')?.setAttribute('aria-invalid', 'false');
    }
  });

  if (n === 2) {
    const reg = document.querySelector('input[name="regType"]:checked');
    if (!reg) {
      document.getElementById('regTypeError').classList.add('show');
      errors.push({ id: 'regType', msg: 'Select a registration type' });
    } else {
      document.getElementById('regTypeError').classList.remove('show');
    }
  }

  if (n === 3) {
    const checked = document.querySelectorAll('#step3 input[type="checkbox"]:checked');
    if (checked.length === 0) {
      document.getElementById('sessionsError').classList.add('show');
      errors.push({ id: 'sessions', msg: 'Select at least 1 session' });
    } else {
      document.getElementById('sessionsError').classList.remove('show');
    }
  }

  if (n === 6) {
    if (!document.getElementById('acceptTerms').checked) {
      document.getElementById('termsError').classList.add('show');
      errors.push({ id: 'acceptTerms', msg: 'Accept terms to continue' });
    } else {
      document.getElementById('termsError').classList.remove('show');
    }
  }

  return errors;
}

document.getElementById('nextBtn').addEventListener('click', () => {
  const errors = validateStep(currentStep);
  if (errors.length > 0) {
    const summary = document.getElementById('errorSummary');
    const list = document.getElementById('errorList');
    list.innerHTML = '';
    errors.forEach(e => { const li = document.createElement('li'); const a = document.createElement('a'); a.href = '#' + e.id; a.textContent = e.msg; li.appendChild(a); list.appendChild(li); });
    summary.style.display = 'block';
    summary.focus();
    return;
  }
  document.getElementById('errorSummary').style.display = 'none';
  if (currentStep === 4) updatePaymentVisibility();
  if (currentStep === 5) { if (document.querySelector('input[name="regType"]:checked')?.value === 'virtual') goToStep(6); else goToStep(currentStep + 1); }
  else goToStep(currentStep + 1);
  if (currentStep === totalSteps) renderReview();
});

document.getElementById('prevBtn').addEventListener('click', () => {
  document.getElementById('errorSummary').style.display = 'none';
  goToStep(currentStep - 1);
});

// Dietary toggle
document.getElementById('dietaryNeeded').addEventListener('change', function() {
  document.getElementById('dietaryDetails').style.display = this.checked ? 'block' : 'none';
});
document.getElementById('dietaryText').addEventListener('input', function() {
  document.getElementById('dietaryCount').textContent = this.value.length + ' characters';
});

// Registration type change
document.querySelectorAll('input[name="regType"]').forEach(r => {
  r.addEventListener('change', updatePaymentVisibility);
});

function updatePaymentVisibility() {
  const selected = document.querySelector('input[name="regType"]:checked');
  if (!selected) return;
  document.getElementById('selectedRegType').textContent = selected.parentElement.textContent.trim().split('—')[0].trim();
  const price = selected.dataset.price;
  document.getElementById('totalPrice').textContent = '$' + price;
  const isVirtual = selected.value === 'virtual';
  document.getElementById('virtualNotice').style.display = isVirtual ? 'block' : 'none';
  document.querySelectorAll('#step5 input').forEach(i => i.required = !isVirtual);
}

// Review
function renderReview() {
  const data = {
    'Full Name': document.getElementById('fullName').value,
    'Email': document.getElementById('email').value,
    'Phone': document.getElementById('phone').value || 'N/A',
    'Registration': document.querySelector('input[name="regType"]:checked')?.parentElement.textContent.trim() || 'N/A',
    'Sessions': [...document.querySelectorAll('#step3 input:checked')].map(c => c.parentElement.textContent.trim()).join(', ') || 'N/A',
    'Wheelchair': document.getElementById('wheelchair').checked ? 'Yes' : 'No',
    'ASL': document.getElementById('asl').checked ? 'Yes' : 'No',
    'Dietary': document.getElementById('dietaryNeeded').checked ? document.getElementById('dietaryText').value || 'Yes (not specified)' : 'None'
  };
  let html = '<div class="review-section"><h3>Personal Info</h3>';
  ['Full Name','Email','Phone','Registration'].forEach(k => html += `<div class="review-row"><span class="review-label">${k}:</span><span class="review-value">${data[k]}</span></div>`);
  html += '</div><div class="review-section"><h3>Sessions</h3><div class="review-value">${data.Sessions}</div></div>';
  html += '<div class="review-section"><h3>Accommodations</h3>';
  ['Wheelchair','ASL','Dietary'].forEach(k => html += `<div class="review-row"><span class="review-label">${k}:</span><span class="review-value">${data[k]}</span></div>`);
  html += '</div>';
  document.getElementById('reviewContent').innerHTML = html;
}

// Submit
document.getElementById('regForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const errors = validateStep(6);
  if (errors.length > 0) {
    const summary = document.getElementById('errorSummary');
    const list = document.getElementById('errorList');
    list.innerHTML = '';
    errors.forEach(e => { const li = document.createElement('li'); const a = document.createElement('a'); a.href = '#' + e.id; a.textContent = e.msg; li.appendChild(a); list.appendChild(li); });
    summary.style.display = 'block'; summary.focus();
    return;
  }
  alert('Registration complete! Confirmation sent to ' + document.getElementById('email').value);
});

goToStep(1);
</script>
</body>
</html>
```

## Bonus Challenges

1. **Add dark mode support** via `prefers-color-scheme` media query
2. **Implement a real character countdown** for textareas with `aria-live`
3. **Add keyboard shortcuts** (Ctrl+Enter to submit, Alt+number for steps)
4. **Save draft to localStorage** — auto-save form data so users can resume
5. **Add internationalization** support for form validation messages
6. **Implement an accessible modal** for the Terms & Conditions link
7. **Add print styles** for the confirmation/receipt page
8. **Implement a session conflict detector** — warn if user selects overlapping sessions

## Submission Checklist

- [ ] All inputs have proper labels with `for` attribute
- [ ] All radio/checkbox groups use `<fieldset>` and `<legend>`
- [ ] Required fields have `aria-required="true"`
- [ ] Error messages use `aria-describedby` and `role="alert"`
- [ ] `aria-invalid` set on invalid fields
- [ ] Error summary receives focus on validation failure
- [ ] Skip link at top of page
- [ ] Visible 3px focus indicators
- [ ] Logical heading hierarchy
- [ ] All autocomplete attributes set
- [ ] Keyboard-only navigation works
- [ ] Color is never the only indicator
- [ ] Content works at 200% zoom
- [ ] Screen reader labels correct for all controls
- [ ] Progress indicator has `aria-current="step"`
