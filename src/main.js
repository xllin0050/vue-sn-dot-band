import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'
import '@purge-icons/generated'
import './index.css'
import VueLazyLoad from 'vue3-lazyload'

import { locale as en } from '@/language/en'
import { locale as zh } from '@/language/zh'

const lang = localStorage.getItem('lang') || 'en'
const i18n = createI18n({
    // something vue-i18n options here ...
    legacy: false,
    globalInjection: true,
    locale: lang,
    messages: { en, zh },
})
const app = createApp(App)

app.use(router)
app.use(VueLazyLoad)
app.use(i18n)
app.mount('#app')
