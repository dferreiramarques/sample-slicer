// SLICER Service Worker
// Caches all assets for offline functionality

const CACHE_NAME = 'slicer-v2.0';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.json',
  'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js'
];

// Install event - cache assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Caching app assets');
      return cache.addAll(ASSETS_TO_CACHE).catch((err) => {
        console.warn('Some assets could not be cached:', err);
        // Continue even if some assets fail
        return Promise.resolve();
      });
    })
  );
  self.skipWaiting();
});

// Activate event - clean old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((response) => {
      // Return cached response if available
      if (response) {
        console.log('Serving from cache:', event.request.url);
        return response;
      }

      // Otherwise fetch from network
      return fetch(event.request)
        .then((response) => {
          // Cache successful responses for next time
          if (response.ok && event.request.url.startsWith('http')) {
            const responseToCache = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache);
            });
          }
          return response;
        })
        .catch((error) => {
          console.warn('Fetch failed, offline?', error);
          // Return offline page or cached response
          return caches.match('/index.html');
        });
    })
  );
});

// Background sync for any future features
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-projects') {
    event.waitUntil(
      // Sync projects when connection restored
      Promise.resolve()
    );
  }
});
