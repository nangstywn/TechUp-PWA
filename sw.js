const cache_name = 'My-Tech'

const filesToCache = [
    'index.html',
    'ai.html',
    'data.html',
    'help.html',
    'iot.html',
    'contacs.html',
    'moreTech.html',
    '/css/style.css',
    '/css/master.css',
    '/css/materialize.min.css',
    '/css/materialize.css',
    '/js/app.js',
    '/js/init.js',
    '/js/materialize.js',
    '/js/materialize.min.js',
    '/image/tech1.jpg',
    '/image/tech2.jpeg',
    '/image/tech3.jpg',
    '/image/tech4.jpg',
    '/image/tech5.png',
    '/image/office.png',
    'manifest.json'
];

self.addEventListener('install', function(event) {
  console.log('service worker installed');
  event.waitUntil(
    caches.open(cache_name)
      .then(function(cache) {
        return cache.addAll(filesToCache)
      })
  )
});

self.addEventListener('activate', function(event){
  console.log('service worker activated');
});

self.addEventListener('fetch', function(event) {
  console.log('service worker fetched');
  event.respondWith(
    caches.match(event.request)
      .then(function(res) {
        if (res) return res;

        return fetch(event.request);
      })
  );
});