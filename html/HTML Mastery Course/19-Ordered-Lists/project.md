# Mini Project: Build a Multi-Step Form with Progress Indicator

## Overview

Create a 3-step form (Personal Info, Address, Review) using ordered lists for the step indicators. Each step is a numbered item. The current step is highlighted. Navigation between steps uses JavaScript.

## Requirements

- Ordered list as step progress indicator (Step 1, Step 2, Step 3)
- Visual highlight on active step
- Numbered circles connected by a line
- Content changes when clicking "Next" / "Previous"
- Completion state for finished steps
- CSS-only styling (minimal JavaScript)

## Solution

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Multi-Step Form</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Segoe UI', sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #f0f2f5; padding: 20px; }
    .container { background: white; border-radius: 16px; padding: 40px; width: 100%; max-width: 600px; box-shadow: 0 8px 30px rgba(0,0,0,0.08); }
    ol.progress { list-style: none; display: flex; justify-content: space-between; padding: 0; margin-bottom: 40px; position: relative; counter-reset: step; }
    ol.progress::before { content: ''; position: absolute; top: 50%; left: 10%; right: 10%; height: 3px; background: #e2e8f0; transform: translateY(-50%); z-index: 0; }
    ol.progress li { counter-increment: step; flex: 1; text-align: center; position: relative; z-index: 1; }
    ol.progress li::before { content: counter(step); display: block; width: 40px; height: 40px; line-height: 40px; border-radius: 50%; background: #e2e8f0; color: #94a3b8; margin: 0 auto 8px; font-weight: bold; transition: all 0.3s; }
    ol.progress li.active::before { background: #2563eb; color: white; box-shadow: 0 4px 12px rgba(37,99,235,0.3); }
    ol.progress li.completed::before { background: #2ecc71; color: white; content: '✓'; }
    ol.progress li span { font-size: 14px; color: #94a3b8; }
    ol.progress li.active span { color: #2563eb; font-weight: 600; }
    ol.progress li.completed span { color: #2ecc71; }
    .step-content { margin-bottom: 30px; }
    .step-content h2 { margin-bottom: 20px; color: #1a1a2e; }
    .step-content label { display: block; margin-bottom: 5px; font-weight: 500; }
    .step-content input { width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 6px; margin-bottom: 15px; }
    .buttons { display: flex; gap: 10px; justify-content: flex-end; }
    .buttons button { padding: 12px 24px; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; transition: all 0.2s; }
    .btn-next { background: #2563eb; color: white; }
    .btn-next:hover { background: #1d4ed8; }
    .btn-prev { background: #e2e8f0; color: #475569; }
    .btn-prev:hover { background: #cbd5e1; }
    .hidden { display: none; }
  </style>
</head>
<body>
  <div class="container">
    <ol class="progress" id="progress">
      <li class="active"><span>Personal Info</span></li>
      <li><span>Address</span></li>
      <li><span>Review</span></li>
    </ol>

    <div class="step-content" id="step1">
      <h2>Personal Information</h2>
      <label>Full Name</label>
      <input type="text" placeholder="John Doe">
      <label>Email</label>
      <input type="email" placeholder="john@example.com">
    </div>

    <div class="step-content hidden" id="step2">
      <h2>Address</h2>
      <label>Street</label>
      <input type="text" placeholder="123 Main St">
      <label>City</label>
      <input type="text" placeholder="New York">
    </div>

    <div class="step-content hidden" id="step3">
      <h2>Review Your Information</h2>
      <p>Please review all information before submitting.</p>
      <ul style="margin-top:15px;line-height:2;">
        <li>Personal Info — Complete ✓</li>
        <li>Address — Complete ✓</li>
      </ul>
    </div>

    <div class="buttons">
      <button class="btn-prev" id="prevBtn" onclick="prevStep()">Previous</button>
      <button class="btn-next" id="nextBtn" onclick="nextStep()">Next</button>
    </div>
  </div>

  <script>
    let currentStep = 1;
    function updateUI() {
      document.querySelectorAll('.step-content').forEach(el => el.classList.add('hidden'));
      document.getElementById('step' + currentStep).classList.remove('hidden');
      document.querySelectorAll('.progress li').forEach((li, i) => {
        li.classList.remove('active', 'completed');
        if (i + 1 === currentStep) li.classList.add('active');
        else if (i + 1 < currentStep) li.classList.add('completed');
      });
      document.getElementById('prevBtn').style.display = currentStep === 1 ? 'none' : 'inline-block';
      document.getElementById('nextBtn').textContent = currentStep === 3 ? 'Submit' : 'Next';
    }
    function nextStep() { if (currentStep < 3) { currentStep++; updateUI(); } }
    function prevStep() { if (currentStep > 1) { currentStep--; updateUI(); } }
    updateUI();
  </script>
</body>
</html>
```

## Submission

Open the file in a browser. Verify:
- Step 1 is active initially (blue circle)
- Clicking "Next" advances to Step 2 with Step 1 marked complete
- Step progress line connects all three steps
- "Previous" button only appears after Step 1
- Submit text appears on the last step
