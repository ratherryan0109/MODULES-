# Module 54 Mini Project: Job Application Form with Smart Validation

## Project Overview

Build a comprehensive **Job Application Form** with sophisticated client-side validation. The form includes personal information, work experience, skills assessment, document uploads, and reference contacts. Implement real-time validation with helpful error messages, a multi-step wizard interface, and a submission review screen.

## Learning Objectives

- Implement complex form validation with multiple field types
- Build a multi-step wizard with step-level validation
- Create custom validation rules (date ranges, file types, conditional fields)
- Use the Constraint Validation API for all custom validation
- Display validation errors inline and in a summary panel
- Handle edge cases: optional fields, conditional requirements, cross-field validation

## Requirements

### Form Sections

1. **Step 1: Personal Info** — Full Name (required, 2-100 chars), Email (required, valid format), Phone (required, valid US format), Address (required), Portfolio URL (optional, valid URL)
2. **Step 2: Experience** — Current Employer (optional), Years of Experience (required, 0-50, number), Job Title (required), Start Date (required, not in future), End Date (conditional — if still employed, disable end date), Skills checklist (at least 3 required from 10 options)
3. **Step 3: Documents** — Resume (required, PDF only, max 5MB), Cover Letter (optional, PDF/DOC, max 5MB), Portfolio file (optional, ZIP/PDF, max 10MB)
4. **Step 4: References** — 2 reference contacts (Name, Email, Phone, Relationship), at least 1 required, Email format validation
5. **Step 5: Review & Submit** — Read-only summary of all entered data, accept terms checkbox, submit button

### Functional Requirements
- Navigation: Previous/Next buttons between steps
- Step validation: Cannot proceed to next step until current step is valid
- Progress bar showing current step
- Real-time field validation on blur
- Cross-field validation (end date after start date)
- File type and size validation
- Character counters on textareas
- Mobile-responsive layout

## Project Structure

```
job-application/
├── index.html       # Complete single-file application
```

## Step-by-Step Implementation

### Step 1: HTML Structure
Create the form with five fieldsets (one per step), navigation buttons, and a progress indicator.

```html
<div class="progress-bar">
  <div class="progress-fill" id="progressFill"></div>
  <div class="step-indicators">
    <span class="step-dot active">1</span>
    <span class="step-dot">2</span>
    <span class="step-dot">3</span>
    <span class="step-dot">4</span>
    <span class="step-dot">5</span>
  </div>
</div>

<form id="jobForm" novalidate>
  <fieldset id="step1" class="form-step active">
    <legend>Step 1: Personal Information</legend>
    <!-- Fields -->
  </fieldset>
  <!-- Steps 2-5 -->
  <div class="nav-buttons">
    <button type="button" id="prevBtn" disabled>Previous</button>
    <button type="button" id="nextBtn">Next</button>
    <button type="submit" id="submitBtn" style="display:none">Submit Application</button>
  </div>
</form>
```

### Step 2: CSS Styling
Design a professional, branded look with clear visual feedback for validation states.

### Step 3: JavaScript Validation Logic

```javascript
const form = document.getElementById('jobForm');
let currentStep = 1;
const totalSteps = 5;

function validateStep(step) {
  const stepEl = document.getElementById('step' + step);
  const fields = stepEl.querySelectorAll('input, select, textarea');
  let valid = true;
  fields.forEach(field => {
    if (field.hasAttribute('required') || field.value) {
      if (!field.checkValidity()) {
        field.reportValidity();
        valid = false;
      }
    }
  });
  return valid;
}

function goToStep(step) {
  if (step > currentStep && !validateStep(currentStep)) return;
  currentStep = step;
  document.querySelectorAll('.form-step').forEach(s => s.classList.remove('active'));
  document.getElementById('step' + step).classList.add('active');
  updateNav();
  updateProgress();
}
```

## Complete Solution

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Job Application Form</title>
<style>
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); min-height: 100vh; padding: 20px; }
.container { max-width: 800px; margin: 0 auto; background: white; border-radius: 16px; box-shadow: 0 10px 40px rgba(0,0,0,0.1); padding: 35px; }
h1 { text-align: center; color: #2c3e50; margin-bottom: 8px; font-size: 26px; }
.subtitle { text-align: center; color: #7f8c8d; margin-bottom: 25px; font-size: 14px; }

/* Progress Bar */
.progress-bar { margin-bottom: 30px; }
.progress-track { height: 4px; background: #e0e0e0; border-radius: 2px; position: relative; margin-bottom: 10px; }
.progress-fill { height: 100%; background: #3498db; border-radius: 2px; transition: width 0.4s; width: 20%; }
.step-dots { display: flex; justify-content: space-between; position: relative; top: -12px; }
.step-dot { width: 28px; height: 28px; background: #e0e0e0; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold; color: white; transition: 0.3s; }
.step-dot.active { background: #3498db; }
.step-dot.completed { background: #2ecc71; }
.step-label { display: flex; justify-content: space-between; font-size: 10px; color: #95a5a6; margin-top: -5px; }

/* Form Steps */
.form-step { display: none; border: none; padding: 0; }
.form-step.active { display: block; }
legend { font-size: 20px; font-weight: 700; color: #2c3e50; margin-bottom: 20px; padding: 0; }

/* Fields */
.field { margin-bottom: 16px; }
.field.half { display: inline-block; width: calc(50% - 8px); }
.field.half:first-child { margin-right: 16px; }
@media (max-width: 600px) { .field.half { width: 100%; margin-right: 0; } }
label { display: block; font-size: 14px; font-weight: 500; color: #333; margin-bottom: 4px; }
label .required { color: #e74c3c; }
input, select, textarea { width: 100%; padding: 10px 12px; border: 2px solid #e0e0e0; border-radius: 8px; font-size: 15px; transition: border-color 0.2s; font-family: inherit; }
input:focus, select:focus, textarea:focus { border-color: #3498db; outline: none; }
input.error, select.error, textarea.error { border-color: #e74c3c; }
input.valid, select.valid, textarea.valid { border-color: #2ecc71; }
.error-msg { color: #e74c3c; font-size: 12px; margin-top: 4px; display: none; }
.error-msg.show { display: block; }
.char-count { text-align: right; font-size: 12px; color: #95a5a6; margin-top: 2px; }
.hint { font-size: 12px; color: #95a5a6; margin-top: 2px; }

/* Skills Grid */
.skills-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 8px; }
.skills-grid label { display: flex; align-items: center; gap: 6px; font-weight: 400; padding: 8px 12px; border: 2px solid #e0e0e0; border-radius: 8px; cursor: pointer; transition: 0.2s; }
.skills-grid label:has(input:checked) { border-color: #3498db; background: #ebf5fb; }
.skills-grid input { width: auto; }
.skill-count { font-size: 12px; color: #7f8c8d; margin-top: 8px; }

/* File Upload */
.file-upload { border: 2px dashed #e0e0e0; border-radius: 8px; padding: 20px; text-align: center; cursor: pointer; transition: 0.2s; }
.file-upload:hover { border-color: #3498db; background: #f8f9fa; }
.file-upload.has-file { border-color: #2ecc71; background: #f0faf0; }
.file-upload input { display: none; }
.file-info { font-size: 12px; color: #7f8c8d; margin-top: 8px; }

/* Navigation */
.nav-buttons { display: flex; justify-content: space-between; margin-top: 25px; gap: 10px; }
.nav-buttons button { padding: 12px 30px; border: none; border-radius: 8px; font-size: 15px; font-weight: 600; cursor: pointer; transition: 0.2s; }
#prevBtn { background: #ecf0f1; color: #2c3e50; }
#prevBtn:hover:not(:disabled) { background: #dfe4e6; }
#nextBtn, #submitBtn { background: #3498db; color: white; }
#nextBtn:hover, #submitBtn:hover { background: #2980b9; }
button:disabled { opacity: 0.4; cursor: not-allowed; }

/* Review */
.review-section { background: #f8f9fa; border-radius: 8px; padding: 20px; margin-bottom: 15px; }
.review-section h3 { font-size: 16px; color: #2c3e50; margin-bottom: 10px; }
.review-row { display: flex; padding: 6px 0; border-bottom: 1px solid #eee; font-size: 14px; }
.review-row:last-child { border-bottom: none; }
.review-label { font-weight: 500; color: #555; width: 140px; flex-shrink: 0; }
.review-value { color: #2c3e50; }
.terms { display: flex; align-items: center; gap: 8px; margin-top: 15px; }
.terms input { width: auto; }
</style>
</head>
<body>
<div class="container">
  <h1>Job Application</h1>
  <p class="subtitle">Software Engineer Position</p>

  <div class="progress-bar">
    <div class="progress-track"><div class="progress-fill" id="progressFill" style="width:20%"></div></div>
    <div class="step-dots">
      <span class="step-dot active" data-step="1">1</span>
      <span class="step-dot" data-step="2">2</span>
      <span class="step-dot" data-step="3">3</span>
      <span class="step-dot" data-step="4">4</span>
      <span class="step-dot" data-step="5">5</span>
    </div>
    <div class="step-label">
      <span>Personal Info</span>
      <span>Experience</span>
      <span>Documents</span>
      <span>References</span>
      <span>Review</span>
    </div>
  </div>

  <form id="jobForm" novalidate>
    <!-- Step 1: Personal Info -->
    <fieldset class="form-step active" id="step1">
      <legend>Personal Information</legend>
      <div class="field half"><label>Full Name <span class="required">*</span></label><input type="text" id="fullName" required minlength="2" maxlength="100" pattern="[A-Za-z .'-]+" placeholder="John Doe"><div class="error-msg" id="fullNameError">Enter your full name (letters only)</div></div>
      <div class="field half"><label>Email <span class="required">*</span></label><input type="email" id="email" required placeholder="john@example.com"><div class="error-msg" id="emailError">Enter a valid email</div></div>
      <div class="field half"><label>Phone <span class="required">*</span></label><input type="tel" id="phone" required pattern="[\+]?[0-9\s\-\(\)]{7,20}" placeholder="(555) 123-4567"><div class="error-msg" id="phoneError">Enter a valid phone number</div></div>
      <div class="field half"><label>Portfolio URL</label><input type="url" id="portfolio" placeholder="https://yoursite.com"><div class="error-msg" id="portfolioError">Enter a valid URL</div></div>
      <div class="field"><label>Address <span class="required">*</span></label><input type="text" id="address" required placeholder="123 Main St, City, State ZIP"><div class="error-msg" id="addressError">Address is required</div></div>
    </fieldset>

    <!-- Step 2: Experience -->
    <fieldset class="form-step" id="step2">
      <legend>Work Experience</legend>
      <div class="field half"><label>Current Employer</label><input type="text" id="employer" placeholder="Acme Corp"></div>
      <div class="field half"><label>Years of Experience <span class="required">*</span></label><input type="number" id="yearsExp" required min="0" max="50" placeholder="5"><div class="error-msg" id="yearsError">Enter 0-50 years</div></div>
      <div class="field"><label>Job Title <span class="required">*</span></label><input type="text" id="jobTitle" required minlength="2" placeholder="Senior Software Engineer"><div class="error-msg" id="titleError">Job title is required</div></div>
      <div class="field half"><label>Start Date <span class="required">*</span></label><input type="date" id="startDate" required><div class="error-msg" id="startDateError">Start date is required</div></div>
      <div class="field half"><label>End Date</label><input type="date" id="endDate"><div class="error-msg" id="endDateError">End date must be after start date</div><div class="hint" id="stillEmployedHint"><label><input type="checkbox" id="stillEmployed"> I currently work here</label></div></div>
      <div class="field">
        <label>Skills <span class="required">*</span> (select at least 3)</label>
        <div class="skills-grid">
          <label><input type="checkbox" class="skill" value="JavaScript"> JavaScript</label>
          <label><input type="checkbox" class="skill" value="Python"> Python</label>
          <label><input type="checkbox" class="skill" value="React"> React</label>
          <label><input type="checkbox" class="skill" value="Node.js"> Node.js</label>
          <label><input type="checkbox" class="skill" value="TypeScript"> TypeScript</label>
          <label><input type="checkbox" class="skill" value="HTML/CSS"> HTML/CSS</label>
          <label><input type="checkbox" class="skill" value="SQL"> SQL</label>
          <label><input type="checkbox" class="skill" value="AWS"> AWS</label>
          <label><input type="checkbox" class="skill" value="Docker"> Docker</label>
          <label><input type="checkbox" class="skill" value="Git"> Git</label>
        </div>
        <div class="skill-count" id="skillCount">Selected: 0 (minimum 3)</div>
        <div class="error-msg" id="skillsError">Select at least 3 skills</div>
      </div>
    </fieldset>

    <!-- Step 3: Documents -->
    <fieldset class="form-step" id="step3">
      <legend>Documents</legend>
      <div class="field"><label>Resume (PDF) <span class="required">*</span></label><div class="file-upload" id="resumeUpload"><input type="file" id="resume" accept=".pdf" required><span id="resumeLabel">Click to upload resume (PDF, max 5MB)</span></div><div class="error-msg" id="resumeError">Please upload your resume (PDF, max 5MB)</div></div>
      <div class="field"><label>Cover Letter (optional)</label><div class="file-upload" id="coverUpload"><input type="file" id="coverLetter" accept=".pdf,.doc,.docx"><span id="coverLabel">Click to upload cover letter (PDF/DOC, max 5MB)</span></div></div>
      <div class="field"><label>Portfolio (optional)</label><div class="file-upload" id="portUpload"><input type="file" id="portfolioFile" accept=".pdf,.zip"><span id="portLabel">Click to upload portfolio (ZIP/PDF, max 10MB)</span></div></div>
    </fieldset>

    <!-- Step 4: References -->
    <fieldset class="form-step" id="step4">
      <legend>References</legend>
      <p style="color:#7f8c8d;margin-bottom:15px;font-size:14px;">Provide at least one professional reference.</p>
      <div class="field half"><label>Reference Name <span class="required">*</span></label><input type="text" class="ref-field" data-ref="1" required minlength="2" placeholder="Jane Smith"><div class="error-msg">Name is required</div></div>
      <div class="field half"><label>Reference Email <span class="required">*</span></label><input type="email" class="ref-field" data-ref="1" required placeholder="jane@company.com"><div class="error-msg">Valid email required</div></div>
      <div class="field half"><label>Reference Phone</label><input type="tel" class="ref-field" data-ref="1" pattern="[\+]?[0-9\s\-\(\)]{7,20}"><div class="error-msg">Valid phone required</div></div>
      <div class="field half"><label>Relationship <span class="required">*</span></label><input type="text" class="ref-field" data-ref="1" required placeholder="Manager / Colleague"><div class="error-msg">Relationship is required</div></div>
      <hr style="margin:15px 0;">
      <div class="field half"><label>Reference Name</label><input type="text" class="ref-field" data-ref="2" placeholder="Bob Johnson"></div>
      <div class="field half"><label>Reference Email</label><input type="email" class="ref-field" data-ref="2" placeholder="bob@company.com"></div>
      <div class="field half"><label>Reference Phone</label><input type="tel" class="ref-field" data-ref="2"></div>
      <div class="field half"><label>Relationship</label><input type="text" class="ref-field" data-ref="2" placeholder="Professor / Client"></div>
    </fieldset>

    <!-- Step 5: Review -->
    <fieldset class="form-step" id="step5">
      <legend>Review Your Application</legend>
      <div id="reviewContent"></div>
      <div class="terms"><input type="checkbox" id="acceptTerms" required><label>I certify that all information provided is accurate and complete <span class="required">*</span></label></div>
      <div class="error-msg" id="termsError" style="margin-top:5px;">You must accept the terms</div>
    </fieldset>

    <div class="nav-buttons">
      <button type="button" id="prevBtn" disabled>← Previous</button>
      <button type="button" id="nextBtn">Next →</button>
      <button type="submit" id="submitBtn" style="display:none">Submit Application</button>
    </div>
  </form>
</div>

<script>
const form = document.getElementById('jobForm');
let currentStep = 1;
const totalSteps = 5;

// File upload handlers
['resume','coverLetter','portfolioFile'].forEach(id => {
  const input = document.getElementById(id);
  if (!input) return;
  input.addEventListener('change', function() {
    const upload = this.closest('.file-upload');
    const label = upload.querySelector('span');
    if (this.files.length > 0) {
      const file = this.files[0];
      label.textContent = `${file.name} (${(file.size/1024/1024).toFixed(1)}MB)`;
      upload.classList.add('has-file');
    } else {
      const defaults = { resume: 'Click to upload resume (PDF, max 5MB)', coverLetter: 'Click to upload cover letter (PDF/DOC, max 5MB)', portfolioFile: 'Click to upload portfolio (ZIP/PDF, max 10MB)' };
      label.textContent = defaults[id];
      upload.classList.remove('has-file');
    }
  });
});

// Still employed toggle
document.getElementById('stillEmployed')?.addEventListener('change', function() {
  document.getElementById('endDate').disabled = this.checked;
  if (this.checked) document.getElementById('endDate').value = '';
});

// Skills counter
document.querySelectorAll('.skill').forEach(cb => {
  cb.addEventListener('change', () => {
    const count = document.querySelectorAll('.skill:checked').length;
    document.getElementById('skillCount').textContent = `Selected: ${count} (minimum 3)`;
  });
});

// Navigation
function validateStep(step) {
  const el = document.getElementById('step' + step);
  let valid = true;

  if (step === 1) {
    ['fullName','email','phone','address'].forEach(id => {
      const input = document.getElementById(id);
      const error = document.getElementById(id + 'Error');
      if (!input.validity.valid) { valid = false; if (error) error.classList.add('show'); input.classList.add('error'); }
      else { if (error) error.classList.remove('show'); input.classList.remove('error'); input.classList.add('valid'); }
    });
  }

  if (step === 2) {
    ['yearsExp','jobTitle','startDate'].forEach(id => {
      const input = document.getElementById(id);
      const error = document.getElementById(id + 'Error');
      if (!input.validity.valid) { valid = false; if (error) error.classList.add('show'); input.classList.add('error'); }
      else { if (error) error.classList.remove('show'); input.classList.remove('error'); input.classList.add('valid'); }
    });
    const start = document.getElementById('startDate');
    const end = document.getElementById('endDate');
    const still = document.getElementById('stillEmployed');
    if (end.value && start.value && !still.checked && new Date(end.value) <= new Date(start.value)) {
      valid = false;
      document.getElementById('endDateError').classList.add('show');
      end.classList.add('error');
    } else {
      document.getElementById('endDateError').classList.remove('show');
    }
    const skillCount = document.querySelectorAll('.skill:checked').length;
    if (skillCount < 3) { valid = false; document.getElementById('skillsError').classList.add('show'); }
    else { document.getElementById('skillsError').classList.remove('show'); }
  }

  if (step === 3) {
    const resume = document.getElementById('resume');
    if (!resume.files || !resume.files[0]) { valid = false; document.getElementById('resumeError').classList.add('show'); }
    else { document.getElementById('resumeError').classList.remove('show'); }
    // File type & size validation
    if (resume.files[0]) {
      if (resume.files[0].size > 5 * 1024 * 1024) { valid = false; document.getElementById('resumeError').textContent = 'File exceeds 5MB limit'; document.getElementById('resumeError').classList.add('show'); }
      else if (!resume.files[0].name.endsWith('.pdf')) { valid = false; document.getElementById('resumeError').textContent = 'Only PDF files accepted'; document.getElementById('resumeError').classList.add('show'); }
    }
  }

  if (step === 4) {
    const ref1Name = document.querySelector('.ref-field[data-ref="1"]');
    if (!ref1Name || !ref1Name.value.trim()) { valid = false; }
  }

  return valid;
}

function goToStep(step) {
  if (step !== currentStep) {
    if (step > currentStep && !validateStep(currentStep)) return;
    currentStep = step;
    document.querySelectorAll('.form-step').forEach(s => s.classList.remove('active'));
    document.getElementById('step' + step).classList.add('active');
    updateNav();
    updateProgress();
    if (step === totalSteps) renderReview();
  }
}

function updateNav() {
  document.getElementById('prevBtn').disabled = currentStep === 1;
  if (currentStep === totalSteps) {
    document.getElementById('nextBtn').style.display = 'none';
    document.getElementById('submitBtn').style.display = 'inline-block';
  } else {
    document.getElementById('nextBtn').style.display = 'inline-block';
    document.getElementById('submitBtn').style.display = 'none';
  }
}

function updateProgress() {
  document.getElementById('progressFill').style.width = ((currentStep / totalSteps) * 100) + '%';
  document.querySelectorAll('.step-dot').forEach(dot => {
    const s = parseInt(dot.dataset.step);
    dot.classList.remove('active', 'completed');
    if (s === currentStep) dot.classList.add('active');
    else if (s < currentStep) dot.classList.add('completed');
  });
}

function renderReview() {
  const data = {
    'Full Name': document.getElementById('fullName').value,
    'Email': document.getElementById('email').value,
    'Phone': document.getElementById('phone').value,
    'Address': document.getElementById('address').value,
    'Employer': document.getElementById('employer').value || 'N/A',
    'Years Exp': document.getElementById('yearsExp').value,
    'Job Title': document.getElementById('jobTitle').value,
    'Start Date': document.getElementById('startDate').value,
    'End Date': document.getElementById('stillEmployed').checked ? 'Present' : (document.getElementById('endDate').value || 'N/A'),
    'Skills': [...document.querySelectorAll('.skill:checked')].map(c => c.value).join(', '),
    'Resume': document.getElementById('resume').files[0]?.name || 'N/A',
    'References': document.querySelectorAll('.ref-field[data-ref="1"]')[0]?.value || 'N/A'
  };
  let html = '<div class="review-section"><h3>Personal Information</h3>';
  ['Full Name','Email','Phone','Address'].forEach(k => html += `<div class="review-row"><span class="review-label">${k}:</span><span class="review-value">${data[k]}</span></div>`);
  html += '</div><div class="review-section"><h3>Experience</h3>';
  ['Employer','Years Exp','Job Title','Start Date','End Date','Skills'].forEach(k => html += `<div class="review-row"><span class="review-label">${k}:</span><span class="review-value">${data[k]}</span></div>`);
  html += '</div><div class="review-section"><h3>Documents</h3>';
  html += `<div class="review-row"><span class="review-label">Resume:</span><span class="review-value">${data.Resume}</span></div>`;
  html += '</div>';
  document.getElementById('reviewContent').innerHTML = html;
}

document.getElementById('prevBtn').addEventListener('click', () => goToStep(currentStep - 1));
document.getElementById('nextBtn').addEventListener('click', () => goToStep(currentStep + 1));

form.addEventListener('submit', function(e) {
  e.preventDefault();
  if (!document.getElementById('acceptTerms').checked) {
    document.getElementById('termsError').classList.add('show');
    return;
  }
  document.getElementById('termsError').classList.remove('show');
  alert('Application submitted successfully! (Demo)');
});

// Init progress dots click
document.querySelectorAll('.step-dot').forEach(dot => {
  dot.addEventListener('click', () => {
    const s = parseInt(dot.dataset.step);
    if (s < currentStep) goToStep(s);
  });
});
</script>
</body>
</html>
```

## Bonus Challenges

1. **Save draft to localStorage** — Auto-save form data as the user types
2. **Character counters** — Show remaining characters for textareas
3. **File preview** — Show a preview of uploaded files (images, PDF thumbnails)
4. **Auto-suggest** — City/state autocomplete from ZIP code
5. **Dynamic references** — "Add another reference" button that clones reference fields
6. **Server validation simulation** — Simulate async validation (check email availability)

## Submission Checklist

- [ ] All five steps with proper fieldset and legend elements
- [ ] Step validation prevents proceeding with invalid data
- [ ] Progress bar updates correctly
- [ ] Real-time validation on blur for all fields
- [ ] Cross-field validation (dates, password, skills)
- [ ] File upload with type and size validation
- [ ] Review step shows all entered data
- [ ] Terms acceptance required before submission
- [ ] Responsive design
- [ ] Accessible error messages with aria-describedby
