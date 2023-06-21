// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    [
      "@storyblok/nuxt",
      {
        accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
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
