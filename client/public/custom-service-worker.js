importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js"
);

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

// workbox.routing.registerRoute(
//   'http://localhost:8000/todos',
//   workbox.strategies.staleWhileRevalidate()
// )

workbox.routing.registerRoute(
  /\.(?:js|css|html|png)$/,
  workbox.strategies.networkFirst()
);
// workbox.routing.registerRoute(
//   'http://localhost:3000',
//   workbox.strategies.networkFirst()
// )

workbox.routing.registerRoute(
  new RegExp("http://api.gcloud.jesusalpino.com"),
  workbox.strategies.staleWhileRevalidate()
);


workbox.routing.registerRoute(
  new RegExp("http://api.gcloud.jesusalpino.com"),
  workbox.strategies.cacheFirst()
);
