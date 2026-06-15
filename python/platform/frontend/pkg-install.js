var PackageInstallOverlay = (function() {
  'use strict';

  var items = {};
  var onDoneCallback = null;

  function show(options) {
    options = options || {};
    var packages = options.packages || [];
    onDoneCallback = options.onDone || null;
    var onProgress = options.onProgress || null;

    items = {};
    var list = document.getElementById('pyInstallList');
    if (!list) return;

    list.innerHTML = packages.map(function(pkg) {
      var id = 'pkg-' + pkg.replace(/[^a-zA-Z0-9]/g, '-');
      items[pkg] = {status: 'pending', id: id};
      return '<div class="py-install-item" id="' + id + '">' +
        '<span class="py-ii-status">⏳</span>' +
        '<span class="py-ii-name">' + pkg + '</span>' +
        '<div class="py-ii-bar"><div class="py-ii-bar-fill" id="' + id + '-bar"></div></div>' +
        '</div>';
    }).join('');

    var overlay = document.getElementById('pyInstallOverlay');
    if (overlay) overlay.style.display = 'flex';

    var log = document.getElementById('pyInstallLog');
    if (log) log.innerHTML = '';

    var done = document.getElementById('pyInstallDone');
    if (done) done.style.display = 'none';
  }

  function updateProgress(pkg, status, message) {
    var item = items[pkg];
    if (!item) return;

    var el = document.getElementById(item.id);
    if (!el) return;

    var statusEl = el.querySelector('.py-ii-status');
    var barEl = document.getElementById(item.id + '-bar');

    item.status = status;

    switch (status) {
      case 'pending':
        if (statusEl) statusEl.textContent = '⏳';
        break;
      case 'installing':
      case 'downloading':
        if (statusEl) statusEl.textContent = '📥';
        if (barEl) barEl.style.width = '50%';
        break;
      case 'done':
        if (statusEl) statusEl.textContent = '✅';
        if (barEl) barEl.style.width = '100%';
        break;
      case 'failed':
      case 'error':
        if (statusEl) statusEl.textContent = '❌';
        if (barEl) { barEl.style.width = '100%'; barEl.style.background = '#f87171'; }
        break;
      default:
        if (statusEl) statusEl.textContent = '⏳';
    }

    if (message) {
      var log = document.getElementById('pyInstallLog');
      if (log) {
        log.innerHTML += message + '\n';
        log.scrollTop = log.scrollHeight;
      }
    }

    var allDone = Object.values(items).every(function(i) {
      return i.status === 'done' || i.status === 'failed' || i.status === 'error';
    });

    if (allDone) {
      var success = Object.values(items).every(function(i) {
        return i.status === 'done';
      });
      var done = document.getElementById('pyInstallDone');
      if (done) {
        done.style.display = 'block';
        done.querySelector('button').textContent = success ? 'Continue' : 'Close';
      }
      if (onDoneCallback) onDoneCallback(success);
    }
  }

  function hide() {
    var overlay = document.getElementById('pyInstallOverlay');
    if (overlay) overlay.style.display = 'none';
    onDoneCallback = null;
  }

  return {
    show: show,
    updateProgress: updateProgress,
    hide: hide,
  };
})();

window.PackageInstallOverlay = PackageInstallOverlay;
