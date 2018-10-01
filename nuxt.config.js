const pkg = require("./package");

module.exports = {
  mode: "universal",

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [{
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: pkg.description
      }
    ],
    link: [{
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon-16x16.png",
        sizes: "16x16"
      },
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon-32x32.png",
        sizes: "32x32"
      },
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon-96x96.png",
        sizes: "96x96"
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: "#fff"
  },

  /*
   ** Global CSS
   */
  css: ["element-ui/lib/theme-chalk/index.css"],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["@/plugins/element-ui",
    "@/plugins/font-awesome"
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    '@nuxtjs/browserconfig',
    ['@nuxtjs/google-tag-manager', {
      id: 'GTM-PDCPXVB'
    }],
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  workbox: {
    dev: true //開発環境でもPWAできるように
  },
  manifest: {
    "name": "deploy.am",
    "short_name": "Deploy.am",
    "start_url": "https://deploy.am/",
    "display": "standalone",
    "background_color": "transparent",
    "theme_color": "#000000",
    "lang": "Japanese",
    "orientation": "portrait",
    "description": "コードを書かないエンジニアでも楽しめるPodcast",
    "scope": "https://deploy.am/",
    "icons": [{
      "src": "https://deploy.am/img/icons/android-chrome-192x192.png",
      "sizes": "192x192"
    }, {
      "src": "https://deploy.am/img/icons/android-chrome-512x512.png",
      "sizes": "512x512"
    }, {
      "src": "https://deploy.am/img/icons/android-icon-36x36.png",
      "sizes": "36x36"
    }, {
      "src": "https://deploy.am/img/icons/android-icon-48x48.png",
      "sizes": "48x48"
    }, {
      "src": "https://deploy.am/img/icons/android-icon-72x72.png",
      "sizes": "72x72"
    }, {
      "src": "https://deploy.am/img/icons/android-icon-96x96.png",
      "sizes": "96x96"
    }, {
      "src": "https://deploy.am/img/icons/android-icon-144x144.png",
      "sizes": "144x144"
    }, {
      "src": "https://deploy.am/img/icons/android-icon-192x192.png",
      "sizes": "192x192"
    }, {
      "src": "https://deploy.am/img/icons/apple-icon-57x57.png",
      "sizes": "57x57"
    }, {
      "src": "https://deploy.am/img/icons/apple-icon-60x60.png",
      "sizes": "60x60"
    }, {
      "src": "https://deploy.am/img/icons/apple-icon-72x72.png",
      "sizes": "72x72"
    }, {
      "src": "https://deploy.am/img/icons/apple-icon-76x76.png",
      "sizes": "76x76"
    }, {
      "src": "https://deploy.am/img/icons/apple-icon-114x114.png",
      "sizes": "114x114"
    }, {
      "src": "https://deploy.am/img/icons/apple-icon-120x120.png",
      "sizes": "120x120"
    }, {
      "src": "https://deploy.am/img/icons/apple-icon-144x144.png",
      "sizes": "144x144"
    }, {
      "src": "https://deploy.am/img/icons/apple-icon-152x152.png",
      "sizes": "152x152"
    }, {
      "src": "https://deploy.am/img/icons/apple-icon-180x180.png",
      "sizes": "180x180"
    }, {
      "src": "https://deploy.am/img/icons/apple-icon-precomposed.png",
      "sizes": "192x192"
    }, {
      "src": "https://deploy.am/img/icons/ms-icon-70x70.png",
      "sizes": "70x70"
    }, {
      "src": "https://deploy.am/img/icons/ms-icon-144x144.png",
      "sizes": "144x144"
    }, {
      "src": "https://deploy.am/img/icons/ms-icon-150x150.png",
      "sizes": "150x150"
    }, {
      "src": "https://deploy.am/img/icons/ms-icon-310x310.png",
      "sizes": "310x310"
    }]
  }
};
