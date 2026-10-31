/* Service worker · Lengua Castellana 5º */
const CACHE = "lengua-v1";
const SHELL = [
  "./", "./index.html", "./styles.css", "./datos.js", "./creditos.js", "./app.js",
  "./creditos.html", "./manifest.webmanifest",
  "./icons/icon-192.png", "./icons/icon-512.png", "./icons/apple-touch-icon.png",
  "./img/mini/l1.jpg",
  "./img/mini/l2.jpg",
  "./img/mini/l3.jpg",
  "./img/mini/l4.jpg",
  "./img/mini/l5.jpg",
  "./img/mini/l6.jpg",
  "./img/mini/l7.jpg",
  "./img/mini/l8.jpg",
  "./img/mini/l9.jpg",
  "./img/mini/l10.jpg",
  "./img/mini/l11.jpg",
  "./img/mini/l12.jpg",
  "./img/mini/l13.jpg",
  "./img/mini/l14.jpg",
  "./img/mini/l15.jpg"
];

self.addEventListener("install", function (event) {
  event.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(SHELL); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener("activate", function (event) {
  event.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
self.addEventListener("fetch", function (event) {
  const req = event.request;
  if (req.method !== "GET") return;
  if (new URL(req.url).origin !== self.location.origin) return;
  if (req.mode === "navigate") {
    event.respondWith(fetch(req).then(function (res) {
      const copy = res.clone(); caches.open(CACHE).then(function (c) { c.put(req, copy); });
      return res;
    }).catch(function () { return caches.match("./index.html"); }));
    return;
  }
  event.respondWith(caches.match(req).then(function (hit) {
    if (hit) return hit;
    return fetch(req).then(function (res) {
      if (res && res.status === 200) {
        const copy = res.clone(); caches.open(CACHE).then(function (c) { c.put(req, copy); });
      }
      return res;
    });
  }));
});
