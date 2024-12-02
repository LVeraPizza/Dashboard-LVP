self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('my-cache').then((cache) => {
        return cache.addAll([
          '/',
          'https://lverapizza.github.io/Dashboard-LVP/index.html',
          'https://lverapizza.github.io/Dashboard-LVP/dashboard.html',
          'https://lverapizza.github.io/Dashboard-LVP/principal.html',
          'https://lverapizza.github.io/Dashboard-LVP/splash.js',
          'https://lverapizza.github.io/Dashboard-LVP/service-worker.js',
          'https://lverapizza.github.io/Dashboard-LVP/logo_vp.png',
  
          // Agrega otros archivos que necesites en el caché
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        return cachedResponse || fetch(event.request);
      })
    );
  });