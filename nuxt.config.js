import metadata from './assets/data/metadata.json'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: metadata.title,
    htmlAttrs: {
      lang: 'ko',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#8F1F32' },
      {
        hid: 'description',
        name: 'description',
        content: metadata.description,
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:title', property: 'og:title', content: metadata.title },
      {
        hid: 'og:description',
        property: 'og:description',
        content: metadata.description,
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: `${metadata.protocol}://${metadata.domain}${metadata.image}`,
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:domain',
        property: 'twitter:domain',
        content: metadata.domain,
      },
      { hid: 'twitter:title', name: 'twitter:title', content: metadata.title },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: metadata.description,
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: `${metadata.protocol}://${metadata.domain}${metadata.image}`,
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/youtube.client.ts', '~/plugins/toast-editor.client.ts'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
