import { fileURLToPath } from "url"

import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import PurgeIcons from "vite-plugin-purge-icons"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    PurgeIcons({
      // globs for searching source file to analyze
      content: [
        "**/*.html",
        "**/*.js",
        "**/*.vue", // scan for .vue file as well
      ],
      format: "mjs",
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
})
