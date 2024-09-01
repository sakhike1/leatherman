// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/tailwind.css"],
  modules: ["@nuxt/test-utils/module", "nuxt-aos", "@pinia/nuxt"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  plugins: [{ src: '~/plugins/redux.js', ssr: false }],

  compatibilityDate: "2024-08-24",
  pages: {
    // Add a dynamic route for product details
    '/products/:id': '~/pages/ProductDetail.vue',
  },

  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'item-details',
        path: '/item-details',
        component: resolve(__dirname, 'pages/ItemDetails.vue')
      });
    }
  },
  pinia: {
    autoImports: ['defineStore'],
  }
});