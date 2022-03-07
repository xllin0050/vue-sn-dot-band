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
    define: {
        __VUE_OPTIONS_API__: false,
        __VUE_PROD_DEVTOOLS__: false,
    },
    plugins: [
        vue(),
        vueI18n({
            runtimeOnly: false,
            include: path.resolve(__dirname, './src/language/**'),
        }),
        PurgeIcons({
            content: ['**/*.vue'],
            format: 'mjs',
        }),
        Components(),
        eslintPlugin(),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            'vue-i18n': 'vue-i18n/dist/vue-i18n.esm-bundler.js',
        },
    },
    server: {
        host: '0.0.0.0',
        port: 4000,
    },
})
