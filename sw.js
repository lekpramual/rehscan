const CACHE_NAME = "version-1";
const urlsToCache = ["index.html", "offline.html"];

const self = this;

// Install SW
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache");

      return cache.addAll(urlsToCache);
    })
  );
});

// Listen for requests
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then(() => {
      return fetch(event.request).catch(() => caches.match("offline.html"));
    })
  );
});

// Activate the SW
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [];
  cacheWhitelist.push(CACHE_NAME);

  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});

// update cache for pwa
// self.addEventListener("activate", function (event) {
//   event.waitUntil(
//     caches.keys().then(function (cacheNames) {
//       return Promise.all(
//         cacheNames
//           .filter(function (cacheName) {
//             // Return true if you want to remove this cache,
//             // but remember that caches are shared across
//             // the whole origin
//           })
//           .map(function (cacheName) {
//             return caches.delete(cacheName);
//           })
//       );
//     })
//   );
// });

self.addEventListener("DOMContentLoaded", () => {
  let displayMode = "browser tab";
  if (navigator.standalone) {
    console.log("standalone-ios");
    displayMode = "standalone-ios";
  }
  if (window.matchMedia("(display-mode: standalone)").matches) {
    console.log("browser tab");
    displayMode = "standalone";
  }
  // Log launch display mode to analytics
  console.log("DISPLAY_MODE_LAUNCH:", displayMode);
});

self.addEventListener("DOMContentLoaded", () => {
  window.matchMedia("(display-mode: standalone)").addListener((evt) => {
    let displayMode = "browser tab";
    if (evt.matches) {
      console.log("standalone");
      displayMode = "standalone";
    }
    // Log display mode change to analytics
    console.log("DISPLAY_MODE_CHANGED", displayMode);
  });
});
