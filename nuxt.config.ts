// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "@nuxt/image"],
  googleFonts: {
    families: {
      "Barlow Condensed": [600, 700],
      Montserrat: [400, 700],
    },
  },
  image: {
    dir: "assets/images",
  },
})
