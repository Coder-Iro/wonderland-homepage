import meta from './assets/data/metadata.json'
// noinspection JSUnusedGlobalSymbols
export default {
  // target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: meta.title,
    htmlAttrs: {
      lang: 'ko'
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=0.8, maximum-scale=0.8'
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      },
      {
        name: 'theme-color',
        content: '#8F1F32'
      },
      {
        hid: 'description',
        name: 'description',
        content: meta.description
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: meta.title
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: meta.description
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: `https://${meta.domain}${meta.image}`
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'twitter:domain',
        property: 'twitter:domain',
        content: meta.domain
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: meta.title
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: meta.description
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: `https://${meta.domain}${meta.image}`
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/youtube.client.ts'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/sitemap'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  sitemap: {
    hostname: `https://${meta.domain}`,
    gzip: true
  },
  serverMiddleware: [
    { path: '/api', handler: '~/backend/index.ts' }
  ]
}
