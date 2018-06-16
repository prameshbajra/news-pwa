importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js');

console.log("Pramesh -> Service workers.js")

if (workbox) {
    console.log(`Yay! Workbox is loaded 🎉`);
    const staticAssets = [
        "/",
        "/index.css",
        "/index.js"
    ];
    workbox.routing.registerRoute(
        new RegExp('.*\.*'),
        workbox.strategies.networkFirst()
    );
} else {
    console.log(`Boo! Workbox didn't load 😬`);
}