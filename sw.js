// Service worker minimo: serve solo perché il telefono riconosca la pagina come app installabile.
// Non salva niente: ogni volta chiede la pagina aggiornata alla rete.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () {});
