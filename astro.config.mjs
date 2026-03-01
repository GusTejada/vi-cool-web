// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import AstroPWA from "@vite-pwa/astro";

// https://astro.build/config
export default defineConfig({
  site: "https://vicoolmadrid.com", // Placeholder URL for SEO
  integrations: [
    sitemap(),
    AstroPWA({
      mode: "production",
      base: "/",
      scope: "/",
      id: "/",
      registerType: "autoUpdate",
      manifest: {
        name: "Vi Cool Madrid",
        short_name: "Vi Cool",
        description: "Vi Cool Madrid - Restaurante gastronómico de Sergi Arola",
        theme_color: "#3c6d5d",
        background_color: "#ffffff",
        display: "standalone",
        start_url: "/",
        icons: [
          {
            src: "/img/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/img/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/img/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,webp,jpeg,jpg}"],
        navigateFallback: "/",
      },
      devOptions: {
        enabled: true,
        type: "module",
      },
    }),
  ],
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
