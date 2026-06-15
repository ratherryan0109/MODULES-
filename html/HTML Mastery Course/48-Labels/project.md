# Mini Project: Accessible Survey Form with Perfect Labels

## Objective

Build a fully accessible survey form demonstrating every labeling technique: explicit, implicit, fieldset/legend, aria-label, aria-labelledby, and aria-describedby. The form must pass WCAG AA accessibility requirements.

## Requirements

1. **Personal Info Section**: Explicit labels for name, email, phone, age
2. **Preferences Section**: Fieldset/legend for radio and checkbox groups
3. **Feedback Section**: Implicit labels for checkboxes, aria-describedby for help text
4. **Search Field**: Visually hidden label (accessible, not visible)
5. **Rating Widget**: aria-labelledby using existing heading text
6. **Error Handling**: aria-invalid and aria-errormessage on invalid fields
7. **Required Indicators**: Visual asterisks on all required labels
8. **Real-time Preview**: Show how screen readers would announce each field

## Solution

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Accessible Survey</title>
  <style>
    * { margin:0; padding:0; box-sizing:border-box; }
    body { font-family:'Segoe UI',sans-serif; background:#f7f8fc; padding:30px 20px; }
    .container { max-width:700px; margin:0 auto; background:white; border-radius:16px; padding:40px; box-shadow:0 10px 40px rgba(0,0,0,0.08); }
    h1 { color:#1a1a2e; margin-bottom:8px; }
    .subtitle { color:#718096; margin-bottom:30px; }
    .visually-hidden { position:absolute; width:1px; height:1px; padding:0; margin:-1px; overflow:hidden; clip:rect(0,0,0,0); border:0; }
    fieldset { border:2px solid #e2e8f0; border-radius:12px; padding:24px; margin-bottom:24px; }
    legend { font-weight:700; color:#2d3748; padding:0 12px; font-size:16px; }
    .form-group { margin-bottom:20px; }
    label { display:block; margin-bottom:4px; font-weight:600; color:#4a5568; font-size:14px; cursor:pointer; }
    .req::after { content:" *"; color:#e53e3e; }
    input, select, textarea { width:100%; padding:10px 14px; border:2px solid #e2e8f0; border-radius:8px; font-size:15px; transition:all 0.3s; }
    input:focus, textarea:focus { border-color:#4a6cf7; outline:none; box-shadow:0 0 0 3px rgba(74,108,247,0.12); }
    .inline-label { display:inline-flex; align-items:center; gap:6px; margin-right:16px; font-weight:400; cursor:pointer; }
    .inline-label input { width:auto; }
    .help-text { font-size:13px; color:#718096; margin-top:2px; }
    .error-text { color:#e53e3e; font-size:13px; display:none; }
    .error { border-color:#fc8181!important; }
    button { width:100%; padding:14px; background:linear-gradient(135deg,#667eea,#764ba2); color:white; border:none; border-radius:8px; font-size:16px; font-weight:600; cursor:pointer; }
    .sr-only-announce { background:#fefcbf; padding:16px; border-radius:8px; margin-top:20px; font-size:14px; }
    .sr-only-announce code { font-size:13px; }
  </style>
</head>
<body>
<div class="container">
  <h1>Accessible Survey</h1>
  <p class="subtitle">Every input is properly labeled</p>
  <form id="surveyForm" onsubmit="event.preventDefault(); if(this.checkValidity()) alert('Survey submitted!'); else this.reportValidity();">
    <fieldset>
      <legend>Personal Information</legend>
      <div class="form-group">
        <label for="fullname" class="req">Full Name</label>
        <input type="text" id="fullname" name="fullname" required aria-describedby="nameHelp">
        <div class="help-text" id="nameHelp">Your full legal name as shown on identification.</div>
      </div>
      <div class="form-group">
        <label for="email" class="req">Email Address</label>
        <input type="email" id="email" name="email" required>
      </div>
      <div class="form-group">
        <label for="phone">Phone Number</label>
        <input type="tel" id="phone" name="phone" aria-describedby="phoneHelp" pattern="[0-9\-\(\)\s\+]+">
        <div class="help-text" id="phoneHelp">Format: +1 (555) 000-0000</div>
      </div>
    </fieldset>
    <fieldset>
      <legend>Preferences</legend>
      <div class="form-group">
        <label>Experience Level</label>
        <label class="inline-label"><input type="radio" name="exp" value="beginner" required> Beginner</label>
        <label class="inline-label"><input type="radio" name="exp" value="intermediate"> Intermediate</label>
        <label class="inline-label"><input type="radio" name="exp" value="advanced"> Advanced</label>
      </div>
      <div class="form-group">
        <label>Topics of Interest</label>
        <label class="inline-label"><input type="checkbox" value="web"> Web Development</label>
        <label class="inline-label"><input type="checkbox" value="data"> Data Science</label>
        <label class="inline-label"><input type="checkbox" value="mobile"> Mobile Apps</label>
      </div>
    </fieldset>
    <h2 id="ratingHeading" style="font-size:16px;margin-bottom:12px;">Rating</h2>
    <div class="form-group">
      <div aria-labelledby="ratingHeading">
        <label class="inline-label"><input type="radio" name="rating" value="1"> 1 - Poor</label>
        <label class="inline-label"><input type="radio" name="rating" value="2"> 2</label>
        <label class="inline-label"><input type="radio" name="rating" value="3"> 3 - Average</label>
        <label class="inline-label"><input type="radio" name="rating" value="4"> 4</label>
        <label class="inline-label"><input type="radio" name="rating" value="5"> 5 - Excellent</label>
      </div>
    </div>
    <div class="form-group">
      <label for="feedback" class="req">Your Feedback</label>
      <textarea id="feedback" name="feedback" rows="4" required aria-describedby="fbHelp"></textarea>
      <div class="help-text" id="fbHelp">Please provide at least 10 characters describing your experience.</div>
    </div>
    <div class="form-group">
      <label for="surveySearch" class="visually-hidden">Search survey topics</label>
      <input type="search" id="surveySearch" placeholder="Search topics (visually hidden label is accessible)">
    </div>
    <div class="form-group">
      <label class="inline-label" style="margin-bottom:12px;"><input type="checkbox" required aria-describedby="termsHelp"> I accept the terms and conditions</label>
      <div class="help-text" id="termsHelp">You must accept to submit the survey.</div>
    </div>
    <div id="errorContainer" aria-live="polite"></div>
    <button type="submit">Submit Survey</button>
  </form>
  <div class="sr-only-announce">
    <strong>Screen Reader Announcements:</strong><br>
    <code id="srAnnounce">Submit the form to see how screen readers would announce each field.</code>
  </div>
</div>
<script>
document.querySelectorAll('input,textarea').forEach(el => {
  el.addEventListener('focus', function() {
    let text = 'Focused: ';
    const label = document.querySelector(`label[for="${this.id}"]`);
    if (label) text += label.textContent.trim();
    else if (this.getAttribute('aria-label')) text += this.getAttribute('aria-label');
    else if (this.closest('label')) text += this.closest('label').textContent.trim().substring(0, 50);
    if (this.hasAttribute('aria-describedby')) {
      const help = document.getElementById(this.getAttribute('aria-describedby'));
      if (help) text += '. Help: ' + help.textContent.trim();
    }
    document.getElementById('srAnnounce').textContent = text;
  });
});
</script>
</body>
</html>
```

## Evaluation

- Explicit labels used for text/email/phone inputs (20 pts)
- Fieldset/legend for radio/checkbox groups (20 pts)
- Visually hidden label for search (15 pts)
- aria-labelledby for rating group (15 pts)
- aria-describedby for help text (15 pts)
- Required indicators on labels (10 pts)
- Screen reader preview (5 pts)
