// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {
    head: {
      bodyAttrs: {
        class: "bg-mirage-950",
      },
    },
  },

  modules: ["@nuxt/icon", "@nuxtjs/tailwindcss"],
});
