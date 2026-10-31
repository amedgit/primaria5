/* Service worker · Matemáticas 5º */
const CACHE = "mates-v2";
const SHELL = [
  "./", "./index.html", "./styles.css", "./datos.js", "./creditos.js", "./app.js",
  "./creditos.html", "./manifest.webmanifest",
  "./icons/icon-192.png", "./icons/icon-512.png", "./icons/apple-touch-icon.png",
  "./img/m1.svg",
  "./img/m2.svg",
  "./img/m3.svg",
  "./img/m4.svg",
  "./img/m5.svg",
  "./img/m6.svg",
  "./img/m7.svg",
  "./img/m8.svg",
  "./img/m9.svg",
  "./img/m10.svg",
  "./img/m11.svg",
  "./img/m12.svg",
  "./img/m13.svg",
  "./img/m14.svg",
  "./img/m15.svg"
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
  if (new URL(req.url).origin !== self.location.origin) return;

  if (req.mode === "navigate") {
    event.respondWith(
      fetch(req).then(function (res) {
        const copy = res.clone();
        caches.open(CACHE).then(function (c) { c.put(req, copy); });
        return res;
      }).catch(function () { return caches.match("./index.html"); })
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
