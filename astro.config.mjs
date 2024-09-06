import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";
import cloudflare from "@astrojs/cloudflare";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { minify } from "terser";

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
      policy: [{ userAgent: "*", allow: "/" }],
    }),
  ],
  output: "hybrid",
  adapter: cloudflare(),
  vite:{
    build:{
      minify:'terser',
      terserOptions:{
        compress:{
          drop_console:true,
          drop_debugger:true
        },
        format:{
          comments:false
        }
      }
    }
  }
});
