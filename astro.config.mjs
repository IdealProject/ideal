import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";
import cloudflare from "@astrojs/cloudflare";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://ideal-7m3.sites.dev",
  integrations: [
    react(),
    markdoc(),
    keystatic(),
    tailwind(),
    icon(),
    robotsTxt({
      transform(content) {
        return `${content}\nDisallow: ${site}/keystatic`;
      },
    }),
  ],
  output: "hybrid",
  adapter: cloudflare(),
});
