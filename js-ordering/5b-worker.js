// (A) FILES TO CACHE
const cName = "aorderdemo",
cFiles = [
  // (A1) IMAGES
  "images/favicon.png",
  "images/ico-512.png",
  "images/banana.png",
  "images/hamburger.png",
  "images/hotdog.png",
  "images/salmon.png",
  "images/sandwich.png",
  "images/taco.png",

  // (A2) PAGES + SCRIPTS
  "1-products.js",
  "4b-manager.html",
  "4c-manager.js",
  "4d-manager.css",
  "5a-manifest.json"
];

// (B) CREATE/INSTALL CACHE
self.addEventListener("install", (evt) => {
  evt.waitUntil(
    caches.open(cName)
    .then((cache) => { return cache.addAll(cFiles); })
    .catch((err) => { console.error(err) })
  );
});

// (C) LOAD FROM CACHE FIRST, FALLBACK TO NETWORK IF NOT FOUND
self.addEventListener("fetch", (evt) => {
  evt.respondWith(
    caches.match(evt.request)
    .then((res) => { return res || fetch(evt.request); })
  );
});
