importScripts('/_nuxt/workbox.dev.5c678697.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/08309e044c109b0c8f8a.js",
    "revision": "3c86a0d2b7f8591b80d0dc703a56548b"
  },
  {
    "url": "/_nuxt/37619037e8698e7891d3.js",
    "revision": "d3fcd6ca6994e8e7fce79eef75e5dffa"
  },
  {
    "url": "/_nuxt/5d2e1e8bf795736f44e4.js",
    "revision": "c221570fc6b2ba65f1ca09773123762b"
  },
  {
    "url": "/_nuxt/700a79d7bbc4d92778fd.js",
    "revision": "52932f7b99f203d9e03d7eb54b3b31ca"
  },
  {
    "url": "/_nuxt/9ce85d440b0e1e189371.js",
    "revision": "d21b06ec84858631a3e816aac2416452"
  },
  {
    "url": "/_nuxt/ae08be80486177f977cd.js",
    "revision": "9be6d9da3d20f3f819791e63157a81d9"
  },
  {
    "url": "/_nuxt/b285a24335d78d0657ac.js",
    "revision": "7b8492501cbe4fe7b40fe0f1fdb83ba7"
  },
  {
    "url": "/_nuxt/c24d9bf7cb13b61b6fdd.js",
    "revision": "24e29cd361826ef4545ba7ff989f1869"
  },
  {
    "url": "/_nuxt/e773f66c653b9a46a2c4.js",
    "revision": "140b0ee158e0a966e8c05882b9e69dd4"
  }
], {
  "cacheId": "Deploy.am",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')





