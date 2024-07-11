// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  nitro: {
    static: true,
  },
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxt/image",
    "nuxt-phosphor-icons",
    "nuxt-lenis",
    "@nuxtjs/seo",
    "@nuxt/content",
  ],
  googleFonts: {
    families: {
      "Barlow Condensed": [600, 700],
      Montserrat: [400, 700],
    },
  },
  image: {
    dir: "assets/images",
    provider: "ipx",
  },
  site: {
    url: "https://pedroruviaro.com.br/",
    name: "Pedro Ruviaro",
    description: "Desenvolvedor Front End",
    defaultLocale: "pt-BR",
  },
  content: {
    highlight: {
      theme: "monokai",
    },
  },
})
