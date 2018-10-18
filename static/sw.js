importScripts('/_nuxt/workbox.dev.5c678697.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/04e63687e60c3dd4be1a.js",
    "revision": "2a6367893fd436523b23973dd68aeb23"
  },
  {
    "url": "/_nuxt/5cc8c902177df51116ed.js",
    "revision": "25c7cce9cbc0e3c427541e95a8077bbf"
  },
  {
    "url": "/_nuxt/685ae15ec2459ca5e1b4.js",
    "revision": "019a925598b0b4112364d63ad63104a0"
  },
  {
    "url": "/_nuxt/80b15464a24b1a7e8c01.js",
    "revision": "bf8cde8aee98747aefe64a925b2dad31"
  },
  {
    "url": "/_nuxt/99c49909220df3076004.js",
    "revision": "d1f8ec8ed4b3caf0bba6e3807f02e9ab"
  },
  {
    "url": "/_nuxt/ae08be80486177f977cd.js",
    "revision": "9be6d9da3d20f3f819791e63157a81d9"
  },
  {
    "url": "/_nuxt/c0f6a1735ab075a99682.js",
    "revision": "d1eeb3f2eca0d1a9d8be2b530f41c799"
  },
  {
    "url": "/_nuxt/d0bbc70f5fa09bc401d3.js",
    "revision": "de15de355eabd0a4b729a79c3faa2b89"
  },
  {
    "url": "/_nuxt/d2bef19ee017aeaef62f.js",
    "revision": "62f21fddc67e9cfb4a9f7a451c53b133"
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





