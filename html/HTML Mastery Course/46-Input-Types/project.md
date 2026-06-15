# Mini Project: Hotel Room Booking Form

## Objective

Build a hotel room booking form that leverages various HTML input types for collecting guest information, room preferences, dates, special requests, and payment details. The form should provide real-time price calculation based on selected options.

## Requirements

1. **Guest Information**: Full name (text), email (email), phone (tel), ID number (text with pattern)
2. **Booking Details**: Check-in date (date), check-out date (date), number of guests (number), rooms (number)
3. **Room Preferences**: Room type (radio), floor preference (range), extra services (checkboxes), room color theme (color)
4. **Special Requests**: Arrival time (time), cancellation date (datetime-local), special occasions (month), preferred contact time (time)
5. **Payment**: Credit card number (text with pattern), expiry month/year (month), CVV (number)
6. **Real-time price calculator** that updates based on selections
7. **Form validation** with error messages for all fields

## Learning Objectives

- Apply multiple input types in a production-like scenario
- Implement real-time calculations based on form input
- Create date range validation (check-out after check-in)
- Handle multiple input types together in a single form
- Style various input types consistently

## Implementation Steps

1. Design the form layout with logical sections
2. Implement each section with appropriate input types
3. Add real-time price calculation with JavaScript
4. Implement cross-field validation (date range, matching fields)
5. Style all input types consistently
6. Add confirmation dialog before submission

## Solution Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hotel Booking</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Segoe UI', sans-serif; background: linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d); min-height: 100vh; padding: 30px 20px; }
    .container { max-width: 800px; margin: 0 auto; background: white; border-radius: 20px; padding: 40px; box-shadow: 0 25px 80px rgba(0,0,0,0.3); }
    h1 { font-size: 28px; color: #1a2a6c; margin-bottom: 4px; }
    .subtitle { color: #718096; margin-bottom: 30px; }
    .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
    .form-group { margin-bottom: 20px; }
    label { display: block; margin-bottom: 4px; font-weight: 600; color: #4a5568; font-size: 14px; }
    input, select { width: 100%; padding: 10px 14px; border: 2px solid #e2e8f0; border-radius: 8px; font-size: 15px; transition: all 0.3s; }
    input:focus, select:focus { border-color: #667eea; outline: none; box-shadow: 0 0 0 3px rgba(102,126,234,0.12); }
    fieldset { border: 2px solid #e2e8f0; border-radius: 12px; padding: 20px; margin-bottom: 24px; }
    legend { font-weight: 700; color: #2d3748; padding: 0 12px; font-size: 16px; }
    .radio-group, .checkbox-group { display: flex; gap: 12px; flex-wrap: wrap; }
    .radio-group label, .checkbox-group label { display: flex; align-items: center; gap: 6px; font-weight: 400; cursor: pointer; }
    .price-summary { background: #f7f8fc; border-radius: 12px; padding: 20px; margin: 20px 0; }
    .price-row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #e2e8f0; }
    .price-row.total { font-weight: 700; font-size: 20px; color: #1a2a6c; border-bottom: none; }
    .btn { width: 100%; padding: 14px; background: linear-gradient(135deg, #667eea, #764ba2); color: white; border: none; border-radius: 8px; font-size: 16px; font-weight: 600; cursor: pointer; transition: opacity 0.3s; }
    .btn:hover { opacity: 0.9; }
    .error { color: #e53e3e; font-size: 13px; margin-top: 4px; display: none; }
    input.error { border-color: #fc8181; }
    .color-preview { display: inline-block; width: 30px; height: 30px; border-radius: 50%; vertical-align: middle; margin-left: 8px; border: 2px solid #e2e8f0; }
  </style>
</head>
<body>
<div class="container">
  <h1>🏨 Hotel Room Booking</h1>
  <p class="subtitle">Reserve your perfect stay</p>
  <form id="bookingForm" onsubmit="event.preventDefault(); submitBooking()">
    <fieldset>
      <legend>Guest Information</legend>
      <div class="form-row">
        <div class="form-group"><label>Full Name</label><input type="text" id="name" required placeholder="John Doe"></div>
        <div class="form-group"><label>Email</label><input type="email" id="email" required placeholder="john@email.com"></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label>Phone</label><input type="tel" id="phone" required pattern="[0-9\-\(\)\s\+]+" placeholder="+1 (555) 000-0000"></div>
        <div class="form-group"><label>ID Number</label><input type="text" id="idnum" pattern="[A-Z0-9]{6,12}" placeholder="AB123456"></div>
      </div>
    </fieldset>
    <fieldset>
      <legend>Booking Details</legend>
      <div class="form-row">
        <div class="form-group"><label>Check-in</label><input type="date" id="checkin" required onchange="updatePrice()"></div>
        <div class="form-group"><label>Check-out</label><input type="date" id="checkout" required onchange="updatePrice()"></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label>Guests</label><input type="number" id="guests" min="1" max="10" value="1" onchange="updatePrice()"></div>
        <div class="form-group"><label>Rooms</label><input type="number" id="rooms" min="1" max="5" value="1" onchange="updatePrice()"></div>
      </div>
    </fieldset>
    <fieldset>
      <legend>Room Preferences</legend>
      <div class="form-group"><label>Room Type</label>
        <div class="radio-group">
          <label><input type="radio" name="roomType" value="standard" checked onchange="updatePrice()"> Standard ($100/night)</label>
          <label><input type="radio" name="roomType" value="deluxe" onchange="updatePrice()"> Deluxe ($180/night)</label>
          <label><input type="radio" name="roomType" value="suite" onchange="updatePrice()"> Suite ($300/night)</label>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group"><label>Floor Preference: <span id="floorVal">5</span></label><input type="range" id="floor" min="1" max="20" value="5" oninput="document.getElementById('floorVal').textContent=this.value"></div>
        <div class="form-group"><label>Theme Color: <span id="themeColor">#667eea</span> <span class="color-preview" id="colorPreview" style="background:#667eea;"></span></label><input type="color" id="roomColor" value="#667eea" oninput="document.getElementById('themeColor').textContent=this.value; document.getElementById('colorPreview').style.background=this.value"></div>
      </div>
      <div class="form-group"><label>Extra Services</label>
        <div class="checkbox-group">
          <label><input type="checkbox" id="breakfast" value="breakfast" onchange="updatePrice()"> Breakfast ($15/guest)</label>
          <label><input type="checkbox" id="parking" value="parking" onchange="updatePrice()"> Parking ($10/day)</label>
          <label><input type="checkbox" id="spa" value="spa" onchange="updatePrice()"> Spa Access ($30/guest)</label>
        </div>
      </div>
    </fieldset>
    <fieldset>
      <legend>Special Requests</legend>
      <div class="form-row">
        <div class="form-group"><label>Arrival Time</label><input type="time" step="900"></div>
        <div class="form-group"><label>Departure Date/Time</label><input type="datetime-local"></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label>Billing Month</label><input type="month"></div>
        <div class="form-group"><label>Preferred Contact Time</label><input type="time"></div>
      </div>
    </fieldset>
    <div class="price-summary" id="priceSummary">
      <h3>Price Summary</h3>
      <div class="price-row"><span>Room Rate</span><span id="roomRate">$100.00</span></div>
      <div class="price-row"><span>Nights</span><span id="nightCount">0</span></div>
      <div class="price-row"><span>Extras</span><span id="extrasTotal">$0.00</span></div>
      <div class="price-row total"><span>Total</span><span id="grandTotal">$0.00</span></div>
    </div>
    <button class="btn" type="submit">Confirm Booking</button>
  </form>
</div>
<script>
const rates = { standard: 100, deluxe: 180, suite: 300 };
function updatePrice() {
  const checkin = document.getElementById('checkin').value;
  const checkout = document.getElementById('checkout').value;
  if (!checkin || ! checkout) return;
  const nights = Math.max(1, (new Date(checkout) - new Date(checkin)) / (1000*60*60*24));
  const rooms = parseInt(document.getElementById('rooms').value) || 1;
  const guests = parseInt(document.getElementById('guests').value) || 1;
  const roomType = document.querySelector('input[name="roomType"]:checked').value;
  const roomRate = rates[roomType] * rooms;
  let extras = 0;
  if (document.getElementById('breakfast').checked) extras += 15 * guests;
  if (document.getElementById('parking').checked) extras += 10 * nights;
  if (document.getElementById('spa').checked) extras += 30 * guests;
  const total = (roomRate * nights) + extras;
  document.getElementById('roomRate').textContent = '$' + (roomRate).toFixed(2);
  document.getElementById('nightCount').textContent = nights;
  document.getElementById('extrasTotal').textContent = '$' + extras.toFixed(2);
  document.getElementById('grandTotal').textContent = '$' + total.toFixed(2);
}
function submitBooking() {
  const form = document.getElementById('bookingForm');
  if (!form.checkValidity()) { form.reportValidity(); return; }
  document.querySelector('.container').innerHTML = '<div style="text-align:center;padding:60px 0;"><div style="font-size:64px;margin-bottom:20px;">✅</div><h1 style="color:#2ecc71;">Booking Confirmed!</h1><p style="color:#718096;font-size:18px;margin-top:8px;">Your reservation has been received. Check your email for details.</p></div>';
}
updatePrice();
</script>
</body>
</html>
```

## Evaluation Criteria

| Criterion | Points |
|-----------|--------|
| All required input types used | 20 |
| Real-time price calculation | 20 |
| Form validation works correctly | 20 |
| Date range validation | 15 |
| Responsive layout | 10 |
| Code organization | 10 |
| Extra features (color, range, etc.) | 5 |
