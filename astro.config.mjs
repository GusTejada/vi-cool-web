// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { VitePWA } from "vite-plugin-pwa";

// https://astro.build/config
export default defineConfig({
  site: "https://vicoolmadrid.com", // Placeholder URL for SEO

  integrations: [sitemap()],

  vite: {
    plugins: [
      VitePWA({
        mode: "production",
        registerType: "autoUpdate",
        injectRegister: "script",
        manifest: {
          name: "Vi Cool Madrid",
          short_name: "Vi Cool",
          description:
            "Vi Cool Madrid - Restaurante gastronómico de Sergi Arola",
          theme_color: "#3c6d5d",
          background_color: "#ffffff",
          display: "standalone",
          start_url: ".",
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
          navigateFallback: null, // Allow i18n routes to handle fallbacks
        },
        devOptions: {
          enabled: true,
          type: "module",
          suppressWarnings: true,
        },
      }),
    ],
  },

  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
