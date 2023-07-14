self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('racoon-cache').then(function(cache) {
      return cache.addAll([
'mdb.min.js',
'mdb.min.css',
'sweetalert2.js',
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
