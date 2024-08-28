// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/tailwind.css"],
  modules: ["@nuxt/test-utils/module"],

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
});
