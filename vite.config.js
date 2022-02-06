import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import PurgeIcons from 'vite-plugin-purge-icons'
import eslintPlugin from 'vite-plugin-eslint'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    PurgeIcons({
      // globs for searching source file to analyze
      content: [
        '**/*.vue', // scan for .vue file as well
      ],
      format: 'mjs',
    }),
    Components(),
    eslintPlugin({ include: ['src/**/*.vue', 'src/**/*.js'], fix: true }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
