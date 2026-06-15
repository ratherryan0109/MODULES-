var Module = {
  noInitialRun: true,
  arguments: [],
  stdin: function() { return null; },
  stdout: function(c) { if (c) postMessage({ type: 'stdout', char: c }); },
  stderr: function(c) { if (c) postMessage({ type: 'stderr', char: c }); },
  onRuntimeInitialized: function() {
    postMessage({ type: 'ready' });
  }
};

onmessage = function(e) {
  if (e.data.type === 'run') {
    var output = '';
    var error = '';

    var origStdout = Module.stdout;
    var origStderr = Module.stderr;

    Module.stdout = function(c) {
      if (c) output += String.fromCharCode(c);
    };
    Module.stderr = function(c) {
      if (c) error += String.fromCharCode(c);
    };

    try {
      var ret = callMain(e.data.args);
      Module.stdout = origStdout;
      Module.stderr = origStderr;
      postMessage({ type: 'finished', output: output, error: error, returnCode: ret });
    } catch (ex) {
      Module.stdout = origStdout;
      Module.stderr = origStderr;
      postMessage({ type: 'finished', output: output, error: error + '\n' + String(ex), returnCode: 1 });
    }
  }
};

importScripts('python.js');
