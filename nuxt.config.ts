// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@/assets/css/roboto.css"],
  modules: [
    [
      "@storyblok/nuxt",
      {
        accessToken: "Q2hvnyJ71cdXaRo85MuBSQtt",
        apiOptions: {
          region: "", // Set 'US" if your space is created in US region (EU default)
        },
      },
    ],
    "@nuxtjs/tailwindcss",
  ],
  vite: {
    optimizeDeps: { exclude: ["fsevents"] },
  },
});
