import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  vite: {
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
      ]
    },
    plugins: [
      tailwindcss(),
    ],
  },

  app: {
    head: {
      title: 'Lightmaeres', // default fallback title
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },

  site: {
    url: 'https://lightmaeres.ch',
    name: 'Lightmaeres',
    description: 'Enter Lightmaeres',
    defaultLocale: 'en', // not needed if you have @nuxtjs/i18n installed
  },

  icon: {
    mode: 'css',
    cssLayer: 'base'
  },

  css: ["./app/assets/css/main.css"],

  modules: [
  '@nuxt/hints',
  '@nuxt/fonts',
  '@nuxt/image',
  '@nuxt/scripts',
  '@nuxt/icon',
  '@vueuse/nuxt',
  '@nuxtjs/seo'
  ]

})
