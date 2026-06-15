var PyRuntime = (function() {
  'use strict';

  var mode = 'checking';
  var ws = null;
  var currentJobId = null;
  var callbacks = {
    onStdout: null,
    onStderr: null,
    onInput: null,
    onInstallProgress: null,
    onStatusChange: null,
    onJobDone: null,
  };
  var wasmReady = false;
  var wasmWorkerPath = 'wasm/dist/python.worker.js';

  function setMode(newMode, label) {
    mode = newMode;
    var dot = document.getElementById('pyModeDot');
    var lbl = document.getElementById('pyModeLabel');
    if (dot) dot.className = 'py-mode-dot ' + newMode;
    if (lbl) lbl.textContent = label;
    console.debug('[PyRuntime] mode:', newMode, label);
    if (callbacks.onStatusChange) callbacks.onStatusChange(newMode, label);
  }

  function detectOnline() {
    return new Promise(function(resolve) {
      var controller = new AbortController();
      var timeoutId = setTimeout(function() { controller.abort(); }, 2000);
      fetch('/api/python/status', { signal: controller.signal })
        .then(function(r) {
          clearTimeout(timeoutId);
          if (!r.ok) { resolve(false); return; }
          r.json().then(function(data) {
            resolve(data.docker ? 'online+docker' : 'online');
          }, function() { resolve(false); });
        }, function() {
          clearTimeout(timeoutId);
          resolve(false);
        });
    });
  }

  function detectOffline() {
    return new Promise(function(resolve) {
      if (!window.WasmPython) { resolve(false); return; }
      var timedOut = false;
      var tid = setTimeout(function() { timedOut = true; resolve(false); }, 5000);
      window.WasmPython.init(wasmWorkerPath).then(function() {
        clearTimeout(tid);
        if (!timedOut) resolve(true);
      }, function() {
        clearTimeout(tid);
        if (!timedOut) resolve(false);
      });
    });
  }

  async function init() {
    setMode('checking', 'Checking...');

    var online = await detectOnline();
    if (online === 'online+docker') {
      setMode('online', 'Online Mode (Full Python + Packages)');
      return;
    }
    if (online === 'online') {
      setMode('online', 'Online Mode (Full Python)');
      return;
    }

    var offline = await detectOffline();
    if (offline) {
      wasmReady = true;
      setMode('offline', 'Offline Mode (Limited Python)');
      return;
    }

    setMode('error', 'No runtime available (server offline, no WASM)');
  }

  async function run(code) {
    if (mode === 'online') {
      return await runOnline(code);
    } else if (mode === 'offline') {
      return await runOffline(code);
    } else if (mode === 'checking') {
      return {
        output: '',
        error: 'Runtime still initializing. Please wait.',
        returnCode: -1,
        time: 0,
      };
    }
    return {
      output: '',
      error: 'No runtime available. Start the server or check WASM setup.',
      returnCode: -1,
      time: 0,
    };
  }

  async function runOnline(code) {
    var startTime = performance.now();

    try {
      var detectRes = await fetch('/api/python/detect', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({code: code}),
      });
      var detectData = await detectRes.json();
      var missing = detectData.missing || [];

      if (missing.length > 0) {
        if (window.PackageInstallOverlay) {
          window.PackageInstallOverlay.show({
            packages: missing,
            onProgress: function(pkg, status, msg) {
              if (callbacks.onInstallProgress) {
                callbacks.onInstallProgress(pkg, status, msg);
              }
            },
            onDone: function(success) {
              if (success) {
                doRunOnline(code, startTime);
              } else {
                PyCodeMirror.appendOutput(
                  '\nPackage installation failed. Check server logs.\n', 'py-stderr');
              }
            },
          });
        }
        var installRes = await fetch('/api/python/install', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({packages: missing}),
        });
        var installData = await installRes.json();
        var installJobId = installData.job_id;

        await streamJobOutput(installJobId, {
          onInstallProgress: function(pkg, status, msg) {
            if (window.PackageInstallOverlay) {
              window.PackageInstallOverlay.updateProgress(pkg, status, msg);
            }
          },
        });

        if (window.PackageInstallOverlay) {
          window.PackageInstallOverlay.hide();
        }
      }
    } catch (e) {
      return {
        output: '',
        error: 'Detection/install failed: ' + e.message,
        returnCode: -1,
        time: 0,
      };
    }

    return await doRunOnline(code, startTime);
  }

  async function doRunOnline(code, startTime) {
    try {
      var runRes = await fetch('/api/python/run', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({code: code}),
      });
      var runData = await runRes.json();
      currentJobId = runData.job_id;

      var output = '';
      var error = '';

      await streamJobOutput(currentJobId, {
        onStdout: function(text) {
          output += text;
          PyCodeMirror.appendOutput(text, 'py-stdout');
        },
        onStderr: function(text) {
          error += text;
          PyCodeMirror.appendOutput(text, 'py-stderr');
        },
        onInput: async function(prompt) {
          if (window.InputDialog) {
            var value = await window.InputDialog.show({prompt: prompt});
            sendInputResponse(currentJobId, value);
            return value;
          }
          return '';
        },
      });

      var elapsed = ((performance.now() - startTime) / 1000).toFixed(2);

      return {
        output: output,
        error: error,
        returnCode: 0,
        time: parseFloat(elapsed),
      };
    } catch (e) {
      var elapsed = ((performance.now() - startTime) / 1000).toFixed(2);
      return {
        output: '',
        error: 'Execution error: ' + e.message,
        returnCode: -1,
        time: parseFloat(elapsed),
      };
    }
  }

  async function streamJobOutput(jobId, handlers) {
    var proto = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    var wsUrl = proto + '//' + window.location.host + '/api/python/ws';

    return new Promise(function(resolve, reject) {
      var socket = new WebSocket(wsUrl);
      var timeout = setTimeout(function() {
        socket.close();
        reject(new Error('WebSocket timed out'));
      }, 60000);

      socket.onopen = function() {
        socket.send(JSON.stringify({
          type: 'subscribe',
          job_id: jobId,
        }));
      };

      socket.onmessage = function(event) {
        try {
          var msg = JSON.parse(event.data);

          if (msg.type === 'pong') return;
          if (msg.type === 'subscribed') return;

          if (msg.type === 'heartbeat' || msg.type === 'ping') {
            socket.send(JSON.stringify({type: 'pong'}));
            return;
          }

          if (msg.type === 'stdout') {
            if (handlers.onStdout) handlers.onStdout(msg.text);
          } else if (msg.type === 'stderr') {
            if (handlers.onStderr) handlers.onStderr(msg.text);
          } else if (msg.type === 'input_request') {
            if (handlers.onInput) {
              handlers.onInput(msg.prompt || '').then(function(value) {
                socket.send(JSON.stringify({
                  type: 'input_response',
                  job_id: jobId,
                  value: value,
                }));
              });
            }
          } else if (msg.type === 'install_start') {
            if (handlers.onInstallProgress && msg.packages) {
              msg.packages.forEach(function(pkg) {
                handlers.onInstallProgress(pkg, 'pending', 'Queued...');
              });
            }
          } else if (msg.type === 'install_progress') {
            if (handlers.onInstallProgress) {
              handlers.onInstallProgress(
                msg.package || '',
                msg.status || '',
                msg.message || ''
              );
            }
          } else if (msg.type === 'install_done') {
            if (handlers.onInstallProgress && msg.packages) {
              msg.packages.forEach(function(pkg) {
                handlers.onInstallProgress(pkg, 'done', 'Installed');
              });
            }
          } else if (msg.type === 'job_done') {
            clearTimeout(timeout);
            socket.close();
            resolve(msg);
          } else if (msg.type === 'job_failed') {
            clearTimeout(timeout);
            socket.close();
            reject(new Error(msg.error || 'Job failed'));
          }
        } catch (e) {
          console.error('WS parse error:', e);
        }
      };

      socket.onerror = function(err) {
        clearTimeout(timeout);
        reject(new Error('WebSocket error'));
      };

      socket.onclose = function() {
        clearTimeout(timeout);
        resolve({type: 'job_done', returnCode: 0});
      };
    });
  }

  function sendInputResponse(jobId, value) {
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify({
        type: 'input_response',
        job_id: jobId,
        value: value,
      }));
    }
  }

  async function runOffline(code) {
    var startTime = performance.now();

    if (!window.WasmPython || !window.WasmPython.ready) {
      try {
        await window.WasmPython.init(wasmWorkerPath);
        wasmReady = true;
      } catch (e) {
        return {
          output: '',
          error: 'Failed to initialize WASM Python: ' + e.message,
          returnCode: -1,
          time: 0,
        };
      }
    }

    try {
      var result = await window.WasmPython.run(code, 10000);

      var elapsed = ((performance.now() - startTime) / 1000).toFixed(2);

      var output = result.output || '';
      var error = result.error || '';

      if (error && (error.includes('ModuleNotFoundError') || error.includes('ImportError'))) {
        var match = error.match(/No module named ['"](\w+)['"]/);
        if (match) {
          var pkgName = match[1];
          var banner = document.getElementById('pyOfflineBanner');
          if (banner) banner.style.display = 'block';
          return {
            output: output,
            error: error,
            returnCode: result.returnCode || 1,
            time: parseFloat(elapsed),
            offlinePackage: 'Package "' + pkgName +
              '" requires online mode. Connect to the server for full Python support.',
          };
        }
      }

      return {
        output: output,
        error: error,
        returnCode: result.returnCode || 0,
        time: parseFloat(elapsed),
      };
    } catch (e) {
      var elapsed = ((performance.now() - startTime) / 1000).toFixed(2);
      return {
        output: '',
        error: 'WASM execution error: ' + e.message,
        returnCode: -1,
        time: parseFloat(elapsed),
      };
    }
  }

  return {
    init: init,
    run: run,
    get mode() { return mode; },
    onStdout: function(fn) { callbacks.onStdout = fn; },
    onStderr: function(fn) { callbacks.onStderr = fn; },
    onInput: function(fn) { callbacks.onInput = fn; },
    onInstallProgress: function(fn) { callbacks.onInstallProgress = fn; },
    onStatusChange: function(fn) { callbacks.onStatusChange = fn; },
    onJobDone: function(fn) { callbacks.onJobDone = fn; },
  };
})();

window.PyRuntime = PyRuntime;
