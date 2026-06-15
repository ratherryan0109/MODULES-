var InputDialog = (function() {
  'use strict';

  var currentResolver = null;
  var timeoutId = null;

  function show(options) {
    options = options || {};
    var prompt = options.prompt || 'Input required:';
    var timeout = options.timeout || 60000;

    return new Promise(function(resolve, reject) {
      currentResolver = resolve;

      var promptEl = document.getElementById('pyInputPrompt');
      var fieldEl = document.getElementById('pyInputField');
      var overlayEl = document.getElementById('pyInputOverlay');
      var submitBtn = document.getElementById('pyInputSubmit');

      if (!promptEl || !fieldEl || !overlayEl) {
        resolve('');
        return;
      }

      promptEl.textContent = prompt;
      fieldEl.value = '';
      overlayEl.style.display = 'flex';

      setTimeout(function() { fieldEl.focus(); }, 100);

      function submit() {
        var value = fieldEl.value;
        cleanup();
        overlayEl.style.display = 'none';
        if (currentResolver) {
          currentResolver(value);
          currentResolver = null;
        }
      }

      function cancel() {
        cleanup();
        overlayEl.style.display = 'none';
        if (currentResolver) {
          currentResolver('');
          currentResolver = null;
        }
      }

      function onKeydown(e) {
        if (e.key === 'Enter') {
          e.preventDefault();
          submit();
        } else if (e.key === 'Escape') {
          e.preventDefault();
          cancel();
        }
      }

      function cleanup() {
        if (timeoutId) {
          clearTimeout(timeoutId);
          timeoutId = null;
        }
        if (fieldEl) fieldEl.removeEventListener('keydown', onKeydown);
        if (submitBtn) submitBtn.removeEventListener('click', submit);
      }

      if (submitBtn) submitBtn.addEventListener('click', submit);
      fieldEl.addEventListener('keydown', onKeydown);

      if (timeout > 0) {
        timeoutId = setTimeout(function() {
          cleanup();
          overlayEl.style.display = 'none';
          if (currentResolver) {
            currentResolver('');
            currentResolver = null;
          }
          reject(new Error('Input timed out'));
        }, timeout);
      }
    });
  }

  return {
    show: show,
  };
})();

window.InputDialog = InputDialog;
