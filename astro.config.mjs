// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  build:{
    inlineStylesheets: "always"
  },
  devToolbar: {
    enabled: false,
  },
  compressHTML:false,
  vite: {
    resolve: {
      alias: {
        "@components": "/src/components",
        "@assets": "/src/assets",
      },
    },
    build: {
      assetsInlineLimit: 20048,
    },
  },

  experimental: {
    csp:false
  },

});
