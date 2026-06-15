# Module 66 Project: Session-Aware Multi-Step Checkout System

## Overview
Build a complete multi-step e-commerce checkout flow that uses **sessionStorage** for guest checkout progress, **localStorage** for user account data, and implements **tab isolation awareness** — if the user opens a second tab, the system detects it and prevents duplicate checkout submissions.

## Learning Objectives
- Implement multi-step form progress persistence with sessionStorage
- Understand and demonstrate tab isolation with sessionStorage
- Use sessionStorage for one-time flags and UI state
- Combine sessionStorage with localStorage for guest-to-user data flow
- Implement duplicate tab detection and prevention
- Handle window close events gracefully with beforeunload

## Requirements

### Core Features (Must-Have)
1. **3-Step Checkout Wizard**: Cart Review → Shipping → Payment Confirmation
2. **Session Persistence**: User can navigate between steps and reload the page without losing data
3. **Tab Detection**: When a checkout is started, register it in localStorage; if another tab tries to start a checkout, warn the user
4. **Cart Data**: Store cart items in sessionStorage (guest session)
5. **Order History**: On successful checkout, save order to localStorage (user history)
6. **Confirmation Page**: Show order summary and confirmation number after submission
7. **Session Reset**: sessionStorage clears when tab closes; reopening shows a fresh checkout

### Enhanced Features (Nice-to-Have)
8. **Form Validation**: Validate shipping fields before allowing step progression
9. **Progress Indicator**: Visual progress bar showing current step
10. **Saved Addresses**: After first checkout, save shipping address to localStorage for future use
11. **Cart Quantity Editing**: Allow changing quantities during checkout review
12. **Promo Codes**: Apply promo code and recalculate total (session-scoped)
13. **Keyboard Navigation**: Enter to proceed, Escape to go back

### Technical Requirements
- sessionStorage for all checkout form data (guest session)
- localStorage for user profile, saved addresses, and order history
- Cross-tab checkout lock: prevent two tabs from processing the same checkout
- Fallback: if sessionStorage is unavailable, use in-memory state with a warning
- Debounced form field saving (save on blur, not on every keystroke)

## Architecture

### Data Model
```javascript
// sessionStorage keys
const SESSION_KEYS = {
  CHECKOUT_STEP: 'checkout_step',           // number (1-3)
  CART: 'checkout_cart',                    // CartItem[]
  FORM_DATA: 'checkout_form_data',          // CheckoutForm
  CHECKOUT_ID: 'checkout_session_id',       // string (UUID)
  CHECKOUT_STARTED: 'checkout_started_at'   // ISO timestamp
};

// localStorage keys
const LOCAL_KEYS = {
  USER_PROFILE: 'user_profile',             // UserProfile
  SAVED_ADDRESSES: 'saved_addresses',       // Address[]
  ORDER_HISTORY: 'order_history',           // Order[]
  ACTIVE_CHECKOUT_TABS: 'active_checkouts'  // { [tabId]: timestamp }
};

// Data structures
const CartItem = {
  productId: 'string',
  name: 'string',
  price: 'number',
  quantity: 'number',
  image: 'string'
};

const CheckoutForm = {
  step1: { email, firstName, lastName, phone },
  step2: { address, city, state, zip, country },
  step3: { cardNumber, cardName, expiry, cvv }
};

const Order = {
  id: 'ORDER-123456',
  items: CartItem[],
  shipping: CheckoutForm.step2,
  total: 149.99,
  status: 'confirmed',
  createdAt: '2026-01-15T10:30:00.000Z'
};
```

### Required Functions
| Function | Description |
|----------|-------------|
| `initCheckout()` | Initialize checkout session — check for active tabs |
| `saveStep(stepNumber, data)` | Save step data to sessionStorage |
| `getStep(stepNumber)` | Load step data from sessionStorage |
| `goToStep(n)` | Navigate to a step, saving previous step |
| `submitCheckout()` | Validate all steps, create order, clear session |
| `loadCart()` | Get cart items from sessionStorage |
| `updateCartQuantity(productId, delta)` | Adjust item quantity |
| `applyPromoCode(code)` | Validate and apply discount |
| `saveAddress(address)` | Save shipping address to localStorage |
| `getSavedAddresses()` | Retrieve saved addresses from localStorage |
| `registerActiveTab()` | Register this tab in localStorage |
| `unregisterActiveTab()` | Remove this tab from localStorage |
| `getActiveCheckoutTabs()` | List all tabs with active checkouts |
| `detectDuplicateCheckout()` | Warn if another tab is in checkout |

### Tab Detection System
```javascript
function registerActiveTab() {
  const tabs = JSON.parse(localStorage.getItem('active_checkouts') || '{}');
  tabs[myTabId] = Date.now();
  localStorage.setItem('active_checkouts', JSON.stringify(tabs));
}

function getActiveCheckoutTabs() {
  const tabs = JSON.parse(localStorage.getItem('active_checkouts') || '{}');
  // Remove stale entries older than 30 minutes
  const cutoff = Date.now() - 30 * 60 * 1000;
  return Object.fromEntries(
    Object.entries(tabs).filter(([_, time]) => time > cutoff)
  );
}

// Register on page load
window.addEventListener('load', registerActiveTab);
// Unregister on tab close
window.addEventListener('beforeunload', unregisterActiveTab);
```

## User Interface Layout

```
┌────────────────────────────────────────────────────────────┐
│ 🛒 Secure Checkout               Cart (3 items) — $129.97  │
│                                                             │
│  [●] 1. Cart Review  →  [○] 2. Shipping  →  [○] 3. Pay    │
│  ─────────────────────────────────────────────────────      │
│                                                             │
│  Step 1: Cart Review                                        │
│                                                             │
│  ┌────────────────────────────────────────────────────┐    │
│  │ Item                    Qty  Price      Total       │    │
│  │ ──────────────────────────────────────────────────  │    │
│  │ Wireless Mouse         [2]  $29.99   → $59.98      │    │
│  │ Mechanical Keyboard    [1]  $89.99   → $89.99      │    │
│  │ USB-C Hub              [1]  $39.99   → $39.99      │    │
│  │ ──────────────────────────────────────────────────  │    │
│  │                              Subtotal:    $189.96   │    │
│  │                              Promo:      -$20.00    │    │
│  │                              Total:      $169.96    │    │
│  └────────────────────────────────────────────────────┘    │
│                                                             │
│  [Apply Promo Code]  [Proceed to Shipping →]                │
│                                                             │
├────────────────────────────────────────────────────────────┤
│ ⚠️ Checkout started in another tab — duplicate checkout    │
│    detected! Please close the other tab before proceeding.  │
└────────────────────────────────────────────────────────────┘
```

## Implementation Checklist

- [ ] Define sessionStorage keys and data model constants
- [ ] Create `initCheckout()` with tab detection
- [ ] Create `registerActiveTab()` / `unregisterActiveTab()` functions
- [ ] Build 3-step checkout progression UI
- [ ] Implement `saveStep()` and `getStep()` for each form step
- [ ] Add form validation per step
- [ ] Implement progress bar with step indicators
- [ ] Add cart display with quantity adjustment
- [ ] Implement promo code validation and discount calculation
- [ ] Create order submission with confirmation number generation
- [ ] Save completed order to localStorage order history
- [ ] Implement saved addresses (load from localStorage)
- [ ] Add `storage` event listener to detect tab changes
- [ ] Show duplicate checkout warning UI
- [ ] Add `beforeunload` handler to warn about unsaved progress
- [ ] Test opening checkout in two tabs simultaneously
- [ ] Test page refresh during each step
- [ ] Test closing tab mid-checkout and reopening
- [ ] Test private/incognito mode (feature detection fallback)

## Example Code Skeleton

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Checkout</title>
  <style>
    /* Stepper UI with CSS */
    .step-indicator { display: flex; }
    .step { flex: 1; text-align: center; padding: 10px; }
    .step.active { background: #4CAF50; color: white; }
    .step.completed { background: #81c784; color: white; }
    .warning { background: #fff3e0; border: 1px solid #ff9800; }
    /* Checkout form styles */
  </style>
</head>
<body>
  <header>
    <h1>Secure Checkout</h1>
    <span id="cartSummary">Cart (0 items)</span>
    <span id="tabWarning" class="warning" hidden></span>
  </header>

  <div id="stepper" class="step-indicator">
    <div class="step active" data-step="1">1. Cart Review</div>
    <div class="step" data-step="2">2. Shipping</div>
    <div class="step" data-step="3">3. Payment</div>
  </div>

  <div id="stepContent">
    <!-- Rendered dynamically based on current step -->
  </div>

  <div id="navigation">
    <button id="prevBtn" disabled>← Back</button>
    <button id="nextBtn">Proceed →</button>
  </div>

  <script>
    // Your JavaScript here
  </script>
</body>
</html>
```

## Stretch Goals
- Add order confirmation email simulation
- Implement real-time shipping cost calculation based on zip code
- Add "Save my information for next time" checkbox
- Implement guest checkout vs. registered user checkout switch
- Add order tracking page that reads from localStorage order history
- Implement currency formatting and localization
- Add Apple Pay / Google Pay placeholder buttons
- Implement abandoned checkout recovery prompt using localStorage

## Submission
Submit a single `index.html` file containing all HTML, CSS, and JavaScript. The checkout flow should work entirely client-side with no server dependency. Include clear comments at the top explaining how tab detection works and the sessionStorage/localStorage split.
