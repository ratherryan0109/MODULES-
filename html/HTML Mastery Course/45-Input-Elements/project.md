# Mini Project: Multi-Step Survey Form

## Objective

Build a multi-step survey form that uses various input elements across three steps. The survey should collect user profile information, preferences, and feedback with proper validation, navigation controls, and a summary review step before submission.

## Requirements

1. **Step 1 — Personal Info**: Collect name (text), email (email), age (number), country (text), and profile picture (file)
2. **Step 2 — Preferences**: Collect interests (checkboxes), experience level (radio), favorite color (color), satisfaction (range slider), and preferred contact time (time)
3. **Step 3 — Feedback**: Collect rating (radio stars), comments (text), would recommend (checkbox), and newsletter subscription (checkbox)
4. **Review Step**: Show all collected data for user confirmation before submission
5. Navigation: Previous/Next buttons with step indicators
6. Validation: Each step must be valid before proceeding
7. Progress bar showing completion status
8. Success message with submitted data summary

## Learning Objectives

- Implement various input element types in a real form
- Manage multi-step form state with JavaScript
- Implement client-side validation across steps
- Handle file input previews
- Create a review/confirm step before final submission
- Provide visual feedback for form progress

## Starter Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Multi-Step Survey</title>
  <style>
    /* Style your multi-step form */
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Segoe UI', sans-serif; background: #f7f8fc; display: flex; justify-content: center; padding: 40px 20px; }
    .container { background: white; border-radius: 16px; box-shadow: 0 10px 40px rgba(0,0,0,0.1); width: 100%; max-width: 700px; padding: 40px; }
    .step-indicators { display: flex; justify-content: center; gap: 12px; margin-bottom: 30px; }
    .step-dot { width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 14px; background: #e0e0e0; color: #999; transition: all 0.3s; }
    .step-dot.active { background: #4a6cf7; color: white; }
    .step-dot.completed { background: #2ecc71; color: white; }
    .progress-bar { height: 6px; background: #e0e0e0; border-radius: 3px; margin-bottom: 30px; overflow: hidden; }
    .progress-fill { height: 100%; background: linear-gradient(90deg, #4a6cf7, #2ecc71); border-radius: 3px; transition: width 0.5s ease; width: 0%; }
    .step { display: none; }
    .step.active-step { display: block; }
    .form-group { margin-bottom: 20px; }
    .form-group label { display: block; margin-bottom: 6px; font-weight: 600; color: #333; font-size: 14px; }
    .form-group input, .form-group textarea, .form-group select { width: 100%; padding: 10px 14px; border: 2px solid #e2e8f0; border-radius: 8px; font-size: 15px; transition: border-color 0.3s; }
    .form-group input:focus, .form-group textarea:focus { border-color: #4a6cf7; outline: none; box-shadow: 0 0 0 3px rgba(74,108,247,0.12); }
    .radio-group, .checkbox-group { display: flex; gap: 12px; flex-wrap: wrap; }
    .radio-group label, .checkbox-group label { display: flex; align-items: center; gap: 6px; font-weight: 400; cursor: pointer; }
    .btn-group { display: flex; justify-content: space-between; margin-top: 30px; }
    .btn { padding: 12px 28px; border: none; border-radius: 8px; font-size: 15px; font-weight: 600; cursor: pointer; transition: all 0.3s; }
    .btn-prev { background: #e2e8f0; color: #4a5568; }
    .btn-prev:hover { background: #cbd5e0; }
    .btn-next { background: #4a6cf7; color: white; }
    .btn-next:hover { background: #3b5de7; }
    .btn-submit { background: #2ecc71; color: white; }
    .btn-submit:hover { background: #27ae60; }
    .error-msg { color: #e53e3e; font-size: 13px; margin-top: 4px; display: none; }
    input.error { border-color: #fc8181; }
    input.success { border-color: #68d391; }
    .review-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
    .review-item { padding: 10px; background: #f7f8fc; border-radius: 8px; }
    .review-item .label { font-size: 12px; color: #718096; text-transform: uppercase; letter-spacing: 0.5px; }
    .review-item .value { font-size: 16px; font-weight: 500; color: #2d3748; margin-top: 2px; }
    .success-screen { text-align: center; padding: 40px 0; display: none; }
    .success-screen .icon { font-size: 64px; margin-bottom: 16px; }
    .success-screen h2 { color: #2ecc71; margin-bottom: 8px; }
    .file-area { position: relative; }
    .file-area input[type="file"] { position: absolute; opacity: 0; width: 100%; height: 100%; cursor: pointer; }
    .file-area .file-label { display: flex; align-items: center; gap: 8px; padding: 10px 14px; border: 2px dashed #cbd5e0; border-radius: 8px; color: #718096; cursor: pointer; }
    #preview { max-width: 80px; border-radius: 50%; margin-top: 8px; display: none; }
    h2 { margin-bottom: 20px; color: #2d3748; }
  </style>
</head>
<body>
  <div class="container">
    <h2 style="text-align:center;">Feedback Survey</h2>

    <!-- Step Indicators -->
    <div class="step-indicators">
      <div class="step-dot active" id="dot1">1</div>
      <div class="step-dot" id="dot2">2</div>
      <div class="step-dot" id="dot3">3</div>
      <div class="step-dot" id="dot4">✓</div>
    </div>

    <!-- Progress Bar -->
    <div class="progress-bar">
      <div class="progress-fill" id="progressFill"></div>
    </div>

    <form id="surveyForm" onsubmit="event.preventDefault();">

      <!-- Step 1: Personal Info -->
      <div class="step active-step" id="step1">
        <h3>Personal Information</h3>
        <div class="form-group">
          <label for="fullname">Full Name</label>
          <input type="text" id="fullname" name="fullname" required minlength="2">
        </div>
        <div class="form-group">
          <label for="email">Email Address</label>
          <input type="email" id="email" name="email" required>
        </div>
        <div class="form-group">
          <label for="age">Age</label>
          <input type="number" id="age" name="age" min="1" max="120" required>
        </div>
        <div class="form-group">
          <label for="country">Country</label>
          <input type="text" id="country" name="country" required>
        </div>
        <div class="form-group">
          <label>Profile Picture</label>
          <div class="file-area">
            <input type="file" id="avatar" name="avatar" accept="image/*">
            <div class="file-label">📁 Choose an image...</div>
          </div>
          <img id="preview" alt="Preview">
        </div>
      </div>

      <!-- Step 2: Preferences -->
      <div class="step" id="step2">
        <h3>Your Preferences</h3>
        <div class="form-group">
          <label>Interests (select all that apply)</label>
          <div class="checkbox-group">
            <label><input type="checkbox" name="interests" value="tech"> Technology</label>
            <label><input type="checkbox" name="interests" value="design"> Design</label>
            <label><input type="checkbox" name="interests" value="music"> Music</label>
            <label><input type="checkbox" name="interests" value="sports"> Sports</label>
            <label><input type="checkbox" name="interests" value="food"> Food</label>
          </div>
        </div>
        <div class="form-group">
          <label>Experience Level</label>
          <div class="radio-group">
            <label><input type="radio" name="experience" value="beginner" required> Beginner</label>
            <label><input type="radio" name="experience" value="intermediate"> Intermediate</label>
            <label><input type="radio" name="experience" value="advanced"> Advanced</label>
          </div>
        </div>
        <div class="form-group">
          <label for="favcolor">Favorite Color</label>
          <input type="color" id="favcolor" name="favcolor" value="#4a6cf7">
        </div>
        <div class="form-group">
          <label for="satisfaction">Satisfaction Level: <span id="satVal">5</span></label>
          <input type="range" id="satisfaction" name="satisfaction" min="1" max="10" value="5" oninput="document.getElementById('satVal').textContent=this.value">
        </div>
        <div class="form-group">
          <label for="contacttime">Preferred Contact Time</label>
          <input type="time" id="contacttime" name="contacttime">
        </div>
      </div>

      <!-- Step 3: Feedback -->
      <div class="step" id="step3">
        <h3>Your Feedback</h3>
        <div class="form-group">
          <label>Rating</label>
          <div class="radio-group" style="font-size:24px;">
            <label><input type="radio" name="rating" value="1" required> ⭐</label>
            <label><input type="radio" name="rating" value="2"> ⭐⭐</label>
            <label><input type="radio" name="rating" value="3"> ⭐⭐⭐</label>
            <label><input type="radio" name="rating" value="4"> ⭐⭐⭐⭐</label>
            <label><input type="radio" name="rating" value="5"> ⭐⭐⭐⭐⭐</label>
          </div>
        </div>
        <div class="form-group">
          <label for="comments">Additional Comments</label>
          <textarea id="comments" name="comments" rows="4" placeholder="Share your thoughts..."></textarea>
        </div>
        <div class="form-group">
          <label><input type="checkbox" name="recommend" value="yes"> Would you recommend this to others?</label>
        </div>
        <div class="form-group">
          <label><input type="checkbox" name="newsletter" value="yes"> Subscribe to newsletter</label>
        </div>
      </div>

      <!-- Step 4: Review -->
      <div class="step" id="step4">
        <h3>Review Your Responses</h3>
        <div class="review-grid" id="reviewGrid"></div>
      </div>

      <!-- Navigation Buttons -->
      <div class="btn-group">
        <button type="button" class="btn btn-prev" id="prevBtn" onclick="prevStep()">Previous</button>
        <button type="button" class="btn btn-next" id="nextBtn" onclick="nextStep()">Next</button>
      </div>

      <!-- Success Message -->
      <div class="success-screen" id="successScreen">
        <div class="icon">🎉</div>
        <h2>Thank You!</h2>
        <p>Your survey has been submitted successfully.</p>
      </div>

    </form>
  </div>

  <script>
    let currentStep = 1;
    const totalSteps = 4;

    function nextStep() {
      if (currentStep === 3) {
        buildReview();
      }
      if (currentStep < totalSteps) {
        if (validateStep(currentStep)) {
          document.getElementById('step' + currentStep).classList.remove('active-step');
          currentStep++;
          document.getElementById('step' + currentStep).classList.add('active-step');
          updateUI();
        }
      }
      if (currentStep === totalSteps) {
        document.getElementById('nextBtn').textContent = 'Submit';
        document.getElementById('nextBtn').className = 'btn btn-submit';
        document.getElementById('nextBtn').onclick = submitForm;
      }
    }

    function prevStep() {
      if (currentStep > 1) {
        document.getElementById('step' + currentStep).classList.remove('active-step');
        currentStep--;
        document.getElementById('step' + currentStep).classList.add('active-step');
        updateUI();
      }
      document.getElementById('nextBtn').textContent = 'Next';
      document.getElementById('nextBtn').className = 'btn btn-next';
      document.getElementById('nextBtn').onclick = nextStep;
    }

    function updateUI() {
      for (let i = 1; i <= totalSteps; i++) {
        const dot = document.getElementById('dot' + i);
        dot.classList.remove('active');
        if (i < currentStep) dot.classList.add('completed');
        else if (i === currentStep) dot.classList.add('active');
      }
      document.getElementById('prevBtn').style.display = currentStep === 1 ? 'none' : 'block';
      const progress = ((currentStep - 1) / (totalSteps - 1)) * 100;
      document.getElementById('progressFill').style.width = progress + '%';
    }

    function validateStep(step) {
      const stepEl = document.getElementById('step' + step);
      const inputs = stepEl.querySelectorAll('input[required], textarea[required], select[required]');
      let valid = true;
      inputs.forEach(inp => {
        if (!inp.validity.valid) {
          inp.classList.add('error');
          valid = false;
        } else {
          inp.classList.remove('error');
          inp.classList.add('success');
        }
      });
      if (!valid) alert('Please fill in all required fields.');
      return valid;
    }

    function buildReview() {
      const grid = document.getElementById('reviewGrid');
      grid.innerHTML = '';
      const data = {
        'Full Name': document.getElementById('fullname').value,
        'Email': document.getElementById('email').value,
        'Age': document.getElementById('age').value,
        'Country': document.getElementById('country').value,
        'Interests': [...document.querySelectorAll('input[name="interests"]:checked')].map(cb => cb.value).join(', ') || 'None',
        'Experience': (document.querySelector('input[name="experience"]:checked') || {}).value || 'Not selected',
        'Favorite Color': document.getElementById('favcolor').value,
        'Satisfaction': document.getElementById('satisfaction').value + '/10',
        'Contact Time': document.getElementById('contacttime').value || 'Not specified',
        'Rating': document.querySelector('input[name="rating"]:checked') ? '⭐'.repeat(parseInt(document.querySelector('input[name="rating"]:checked').value)) : 'Not rated',
        'Comments': document.getElementById('comments').value || 'None'
      };
      Object.entries(data).forEach(([key, val]) => {
        const div = document.createElement('div');
        div.className = 'review-item';
        div.innerHTML = `<div class="label">${key}</div><div class="value">${val}</div>`;
        grid.appendChild(div);
      });
    }

    function submitForm() {
      buildReview();
      document.getElementById('surveyForm').style.display = 'none';
      document.getElementById('successScreen').style.display = 'block';
    }

    document.getElementById('avatar').addEventListener('change', function(e) {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function(ev) {
          const img = document.getElementById('preview');
          img.src = ev.target.result;
          img.style.display = 'block';
        };
        reader.readAsDataURL(file);
      }
    });

    updateUI();
  </script>
</body>
</html>
```

## Implementation Steps

1. Set up the HTML structure with a container, step indicators, and form
2. Create the three survey steps with appropriate input elements
3. Add the review step for data confirmation
4. Implement step navigation (Next/Previous) with JavaScript
5. Add step validation before allowing progression
6. Style the progress bar and step indicators
7. Add file upload preview functionality
8. Build the review grid dynamically from form data
9. Handle form submission with success screen
10. Test all steps, validation, and edge cases

## Bonus Challenges

- Add localStorage persistence so form data survives page refresh
- Implement animated transitions between steps
- Add a "Skip" option for optional sections
- Allow editing of previous steps from the review screen
- Add keyboard navigation (Enter to go next, Escape to close)
- Generate a PDF summary on submission using a library like jsPDF

## Evaluation Criteria

| Criterion | Points |
|-----------|--------|
| All input types used correctly | 20 |
| Multi-step navigation works | 15 |
| Step validation prevents incomplete submission | 15 |
| Review step shows all data accurately | 15 |
| Progress bar and indicators update correctly | 10 |
| File upload preview works | 10 |
| Code is clean and well-organized | 10 |
| Bonus features implemented | 5 |
