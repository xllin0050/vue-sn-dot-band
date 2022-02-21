import { fileURLToPath } from 'url'
import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueI18n from '@intlify/vite-plugin-vue-i18n'
import PurgeIcons from 'vite-plugin-purge-icons'
import eslintPlugin from 'vite-plugin-eslint'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueI18n({
            include: path.resolve(__dirname, './path/to/src/locales/**'),
        }),
        PurgeIcons({
            // globs for searching source file to analyze
            content: [
                '**/*.vue', // scan for .vue file as well
            ],
            format: 'mjs',
        }),
        Components(),
        eslintPlugin(),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    server: {
        host: '0.0.0.0',
        port: 4000,
    },
})
