const cacheName = "skynet-cache-v1";
const assets = [
  "./",
  "./index.html",
  "./style/style.css",
  "./script/script.js",
  "./manifest.json",
  "./img/logo.png",
  "./img/card1.png",
  "./img/card2.png",
  "./img/card3.png",
  "./img/card4.png",
  "./img/card5.png",
  "./img/card6.png",
  "./img/card7.png",
  "./img/card8.png",
  "./img/card9.png",
  "./img/card10.png",
  "./img/card11.png",
  "./img/card12.png",
  "./img/card13.png",
  "./img/card14.png",
  "./img/card15.png",
  "./img/card16.png",
  "./img/card17.png",
  "./img/card18.png",
  "./img/card19.png",
  "./img/card20.png",
  "./img/card21.png",
  "./img/card22.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // إذا الملف موجود في الكاش، نرجعه
      return response || fetch(event.request);
    })
  );
});
