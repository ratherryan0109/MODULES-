var PyCodeMirror = (function() {
  'use strict';

  var editor = null;
  var currentSnippetIndex = 0;
  var defaultSnippet = '# Write your Python code here\nprint("Hello, World!")';
  var snippets = [
    { label: 'Hello', code: 'print("Hello, World!")' },
    { label: 'Variables', code: 'name = "Python"\nyear = 1991\nprint(f"{name} was created in {year}")' },
    { label: 'Loop', code: 'for i in range(5):\n    print(f"Number: {i}")' },
    { label: 'List', code: 'fruits = ["apple", "banana", "cherry"]\nfor f in fruits:\n    print(f.upper())' },
    { label: 'Function', code: 'def greet(name):\n    return f"Hello, {name}!"\n\nprint(greet("World"))' },
  ];

  function getValue() {
    if (editor && typeof editor.getValue === 'function') {
      return editor.getValue();
    }
    var ta = document.getElementById('pyTextareaFallback');
    return ta ? ta.value : '';
  }

  function setValue(code) {
    if (editor && typeof editor.setValue === 'function') {
      editor.setValue(code);
    } else {
      var ta = document.getElementById('pyTextareaFallback');
      if (ta) ta.value = code;
    }
  }

  function initEditor() {
    var container = document.getElementById('pyEditorContainer');
    if (!container) return;

    if (typeof window.createPythonEditor === 'function') {
      editor = window.createPythonEditor(container);
    } else {
      var ta = document.createElement('textarea');
      ta.id = 'pyTextareaFallback';
      ta.style.cssText = 'width:100%;height:100%;background:#0f172a;color:#e2e8f0;border:none;padding:16px;font-family:JetBrains Mono,Fira Code,monospace;font-size:13px;line-height:1.6;resize:none;outline:none;tab-size:4;white-space:pre;overflow:auto;';
      ta.value = defaultSnippet;
      container.appendChild(ta);
      editor = {
        getValue: function() { return ta.value; },
        setValue: function(v) { ta.value = v; },
        focus: function() { ta.focus(); },
      };
    }
    setValue(defaultSnippet);
  }

  function showSnippets(moduleSnippets) {
    var list = document.getElementById('pySnippetList');
    if (!list) return;
    if (moduleSnippets && moduleSnippets.length) {
      snippets = moduleSnippets;
    }
    list.innerHTML = snippets.map(function(s, i) {
      return '<button class="' + (i === 0 ? 'active' : '') + '" onclick="PyCodeMirror.loadSnippet(' + i + ')">' +
        s.label + '</button>';
    }).join('');
  }

  function loadSnippet(index) {
    if (!snippets[index]) return;
    currentSnippetIndex = index;
    setValue(snippets[index].code);
    document.querySelectorAll('#pySnippetList button').forEach(function(b, i) {
      b.classList.toggle('active', i === index);
    });
    clearOutput();
  }

  function clearOutput() {
    var out = document.getElementById('pyOutput');
    if (out) out.innerHTML = '';
    var time = document.getElementById('pyExecTime');
    if (time) time.textContent = '';
  }

  function appendOutput(text, className) {
    var out = document.getElementById('pyOutput');
    if (!out) return;
    var span = document.createElement('span');
    span.className = className || 'py-stdout';
    span.textContent = text;
    out.appendChild(span);
    out.scrollTop = out.scrollHeight;
  }

  function setExecutionTime(seconds) {
    var el = document.getElementById('pyExecTime');
    if (el) el.textContent = seconds + 's';
  }

  function run() {
    var code = getValue();
    if (!code.trim()) return;

    var runBtn = document.getElementById('pyRunBtn');
    if (runBtn) {
      runBtn.disabled = true;
      runBtn.textContent = 'Running...';
    }

    clearOutput();
    appendOutput('Running...\n', 'py-system');

    PyRuntime.run(code).then(function(result) {
      if (runBtn) {
        runBtn.disabled = false;
        runBtn.textContent = 'Run';
      }

      if (result.error && result.returnCode !== 0) {
        if (result.output) {
          appendOutput(result.output, 'py-stdout');
        }
        appendOutput(result.error, 'py-stderr');
        if (result.offlinePackage) {
          appendOutput('\n' + result.offlinePackage + '\n', 'py-system');
          var banner = document.getElementById('pyOfflineBanner');
          if (banner) banner.style.display = 'block';
        }
      } else {
        appendOutput(result.output || '(no output)', 'py-stdout');
      }
      setExecutionTime(result.time);
    }).catch(function(err) {
      if (runBtn) {
        runBtn.disabled = false;
        runBtn.textContent = 'Run';
      }
      appendOutput('Error: ' + err.message, 'py-stderr');
    });
  }

  function reset() {
    if (confirm('Reset code to default snippet?')) {
      loadSnippet(0);
    }
  }

  function showInstallOverlay() {
    var el = document.getElementById('pyInstallOverlay');
    if (el) el.style.display = 'flex';
  }

  function hideInstallOverlay() {
    var el = document.getElementById('pyInstallOverlay');
    if (el) el.style.display = 'none';
  }

  document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      e.preventDefault();
      run();
    }
  });

  return {
    initEditor: initEditor,
    showSnippets: showSnippets,
    loadSnippet: loadSnippet,
    run: run,
    reset: reset,
    getValue: getValue,
    setValue: setValue,
    clearOutput: clearOutput,
    appendOutput: appendOutput,
    setExecutionTime: setExecutionTime,
    showInstallOverlay: showInstallOverlay,
    hideInstallOverlay: hideInstallOverlay,
    snippets: snippets,
  };
})();

window.PyCodeMirror = PyCodeMirror;
