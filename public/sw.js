self.addEventListener('intall', (evt) => {
    console.log('[Service Worker] Installing Service Worker', evt);
});

self.addEventListener('activate', (evt) => {
    console.log('[Service Worker] Activating Service Worker', evt);
    return self.clients.claim()
});

self.addEventListener('fetch', (evt) => {
    console.log('[Service Worker] fetching a resource', evt);
    evt.respondWith(fetch(evt.request))
});