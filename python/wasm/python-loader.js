(function() {
  'use strict';

  var worker = null;
  var ready = false;

  var WasmPython = {
    get ready() { return ready; },

    init: function(workerPath) {
      return new Promise(function(resolve, reject) {
        if (worker) {
          worker.terminate();
          worker = null;
          ready = false;
        }

        worker = new Worker(workerPath);

        worker.onmessage = function(e) {
          if (e.data.type === 'ready') {
            ready = true;
            resolve();
          }
        };

        worker.onerror = function(err) {
          reject(new Error('Worker error: ' + (err.message || 'unknown')));
        };

        setTimeout(function() {
          if (!ready) {
            reject(new Error('Python WASM initialization timed out'));
          }
        }, 30000);
      });
    },

    run: function(code, timeoutMs) {
      return new Promise(function(resolve) {
        if (!worker || !ready) {
          resolve({ output: '', error: 'Python runtime not initialized. Call WasmPython.init() first.', time: 0 });
          return;
        }

        timeoutMs = timeoutMs || 10000;

        var stdout = '';
        var stderr = '';
        var startTime = performance.now();

        var timeoutId = null;
        var finished = false;

        var handler = function(e) {
          if (finished) return;
          var d = e.data;
          if (d.type === 'stdout') {
            stdout += String.fromCharCode(d.char);
          } else if (d.type === 'stderr') {
            stderr += String.fromCharCode(d.char);
          } else if (d.type === 'finished') {
            finished = true;
            if (timeoutId) clearTimeout(timeoutId);
            worker.removeEventListener('message', handler);
            var elapsed = ((performance.now() - startTime) / 1000).toFixed(2);
            resolve({
              output: stdout,
              error: stderr,
              returnCode: d.returnCode,
              time: parseFloat(elapsed)
            });
          }
        };

        worker.addEventListener('message', handler);

        timeoutId = setTimeout(function() {
          if (!finished) {
            finished = true;
            worker.removeEventListener('message', handler);
            worker.terminate();
            worker = null;
            ready = false;
            var elapsed = ((performance.now() - startTime) / 1000).toFixed(2);
            resolve({
              output: stdout,
              error: 'Execution timed out after ' + (timeoutMs / 1000) + 's' + (stderr ? '\n' + stderr : ''),
              returnCode: -1,
              time: parseFloat(elapsed)
            });
          }
        }, timeoutMs);

        worker.postMessage({
          type: 'run',
          args: ['-c', code]
        });
      });
    },

    terminate: function() {
      if (worker) {
        worker.terminate();
        worker = null;
        ready = false;
      }
    }
  };

  window.WasmPython = WasmPython;
})();
