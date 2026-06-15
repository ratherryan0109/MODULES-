var CACHE_NAME = 'python-platform-v1';

var PRECACHE_URLS = [
  '/',
  '/index.html',
  '/modules.js',
  '/platform/frontend/editor.html',
  '/platform/frontend/editor.css',
  '/platform/frontend/editor.js',
  '/platform/frontend/py-runtime.js',
  '/platform/frontend/pkg-install.js',
  '/platform/frontend/input-dialog.js',
  '/platform/frontend/codemirror/bundle.js',
  '/wasm/dist/python.js',
  '/wasm/dist/python.wasm',
  '/wasm/dist/python.data',
  '/wasm/dist/python.worker.js',
  '/wasm/python-loader.js',
];

var API_ORIGIN = '/api/python';

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(PRECACHE_URLS);
    }).then(function() {
      return self.skipWaiting();
    })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(name) {
          return name !== CACHE_NAME;
        }).map(function(name) {
          return caches.delete(name);
        })
      );
    }).then(function() {
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', function(event) {
  var url = new URL(event.request.url);

  if (url.origin !== self.location.origin) {
    return;
  }

  if (url.pathname.startsWith(API_ORIGIN) || url.pathname.startsWith('/ws')) {
    event.respondWith(networkFirst(event.request));
    return;
  }

  if (url.pathname.startsWith('/wasm/')) {
    event.respondWith(cacheFirst(event.request));
    return;
  }

  if (isStaticAsset(url.pathname)) {
    event.respondWith(cacheFirst(event.request));
    return;
  }

  event.respondWith(networkFirst(event.request));
});

function cacheFirst(request) {
  return caches.match(request).then(function(response) {
    if (response) {
      return response;
    }
    return fetch(request).then(function(networkResponse) {
      if (!networkResponse || networkResponse.status !== 200) {
        return networkResponse;
      }
      var clone = networkResponse.clone();
      caches.open(CACHE_NAME).then(function(cache) {
        cache.put(request, clone);
      });
      return networkResponse;
    });
  }).catch(function() {
    return new Response('Offline', {status: 503});
  });
}

function networkFirst(request) {
  return fetch(request).then(function(response) {
    if (response && response.status === 200) {
      var clone = response.clone();
      caches.open(CACHE_NAME).then(function(cache) {
        cache.put(request, clone);
      });
    }
    return response;
  }).catch(function() {
    return caches.match(request).then(function(cached) {
      return cached || new Response('Offline', {status: 503});
    });
  });
}

function isStaticAsset(path) {
  var exts = ['.html', '.css', '.js', '.json', '.png', '.jpg', '.svg', '.ico', '.woff', '.woff2'];
  return exts.some(function(ext) {
    return path.endsWith(ext);
  });
}
