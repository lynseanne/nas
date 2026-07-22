/* Service worker — caches the app shell so it installs to the Home Screen and opens offline.
   The AI calls (Gemini, Claude) always go to the network; only the UI is cached.
   Bump CACHE when app files change so users get the update. */
const CACHE = 'nas-v58';
const SHELL = [
  './', './index.html', './app.css', './app.js', './sample.js',
  './manifest.webmanifest', './pup.png', './icon-192.png', './icon-512.png', './apple-touch-icon.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  // Never cache API calls — always hit the network.
  if (url.hostname.endsWith('googleapis.com') || url.hostname.endsWith('anthropic.com')) return;
  if (e.request.method !== 'GET') return;
  // Network-first: always try to fetch the freshest UI, cache it, and fall back to cache offline.
  // (This is why updates now show on a normal reload; offline still works from the last cache.)
  e.respondWith(
    fetch(e.request).then(res => {
      if (res && res.ok && res.type === 'basic') {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy));
      }
      return res;
    }).catch(() => caches.match(e.request))
  );
});
