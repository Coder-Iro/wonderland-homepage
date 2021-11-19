import { defineNuxtConfig } from 'nuxt3';

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  meta: {
    link: [{ rel: 'shortcut icon', href: '/favicon.ico' }],
    meta: [
      { name: 'google', content: 'notranslate' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=0.8, maximum-scale=0.8',
      },
    ],
  },
  typescript: { strict: true },
});
