import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";
import cloudflare from "@astrojs/cloudflare";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import pagefind from "astro-pagefind";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://ideal-7m3.sites.dev",
  build: {
    formats: ["file"],
  },
  integrations: [
    react(),
    markdoc(),
    keystatic(),
    tailwind(),
    icon(),
    robotsTxt({
      policy: [{ userAgent: "*", allow: "/" }],
    }),
    pagefind(),
  ],
  output: "hybrid",
  adapter: cloudflare(),
});
