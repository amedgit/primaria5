/* Service worker · Ciencias 5º */
const CACHE = "primaria5-v5";
const SHELL = [
  "./", "./index.html", "./styles.css", "./datos.js", "./creditos.js", "./app.js",
  "./creditos.html", "./manifest.webmanifest",
  "./icons/icon-192.png", "./icons/icon-512.png", "./icons/apple-touch-icon.png",
  "./img/mini/u1.jpg",
  "./img/mini/u2.jpg",
  "./img/mini/u3.jpg",
  "./img/mini/u4.jpg",
  "./img/mini/u5.jpg",
  "./img/mini/u6.jpg",
  "./img/mini/u7.jpg",
  "./img/mini/u8.jpg",
  "./img/mini/u9.jpg",
  "./img/mini/u10.jpg",
  "./img/mini/u11.jpg",
  "./img/mini/u12.jpg",
  "./img/mini/u13.jpg",
  "./img/mini/u14.jpg",
  "./img/mini/u15.jpg"
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE).then(function (c) { return c.addAll(SHELL); }).then(function () {
      return self.skipWaiting();
    })
  );
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function (event) {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  if (req.mode === "navigate") {
    event.respondWith(
      fetch(req).then(function (res) {
        const copy = res.clone();
        caches.open(CACHE).then(function (c) { c.put(req, copy); });
        return res;
      }).catch(function () {
        return caches.match("./index.html");
      })
    );
    return;
  }

  event.respondWith(
    caches.match(req).then(function (hit) {
      if (hit) return hit;
      return fetch(req).then(function (res) {
        if (res && res.status === 200) {
          const copy = res.clone();
          caches.open(CACHE).then(function (c) { c.put(req, copy); });
        }
        return res;
      });
    })
  );
});
