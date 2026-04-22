const CACHE_NAME = 'mewartreats-v2';
const ASSET_EXTENSIONS = ['.js', '.css', '.png', '.jpg', '.jpeg', '.svg', '.webp', '.ico', '.json', '.woff', '.woff2'];

self.addEventListener('install', (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('fetch', (event) => {
  const request = event.request;

  if (request.method !== 'GET') {
    return;
  }

  const url = new URL(request.url);
  const isNavigationRequest = request.mode === 'navigate';
  const isStaticAsset = ASSET_EXTENSIONS.some((extension) => url.pathname.endsWith(extension));

  if (isNavigationRequest) {
    event.respondWith(
      fetch(request).catch(() => caches.match('/index.html'))
    );
    return;
  }

  if (!isStaticAsset) {
    return;
  }

  event.respondWith(
    caches.open(CACHE_NAME).then(async (cache) => {
      const cachedResponse = await cache.match(request);
      if (cachedResponse) {
        return cachedResponse;
      }

      const networkResponse = await fetch(request);
      if (networkResponse && networkResponse.status === 200) {
        cache.put(request, networkResponse.clone());
      }

      return networkResponse;
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
          return undefined;
        })
      )
    ).then(() => self.clients.claim())
  );
});
