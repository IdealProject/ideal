import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
// import keystatic from "@keystatic/astro";
import cloudflare from "@astrojs/cloudflare";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import pagefind from "astro-pagefind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false
  },
  site: "https://ideal.fiuni.edu.py",
  build: {
    formats: ["file"],
    client: './dist/client',
    server: './dist/server',
  },
  integrations: [
    react(),
    markdoc(),
    // keystatic(),
    tailwind(),
    icon(),
    pagefind(),
    sitemap(),
  ],
  output: "server",
  adapter: cloudflare(),
  build: {
    formats: ["file"],
    client: "./dist/client",
    server: "./dist/server",
  },
  vite: {
     ssr: {
      external: ["node:path"],
    },
  },
});