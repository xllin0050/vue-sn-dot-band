import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import '@purge-icons/generated'
import './index.css'
import VueLazyLoad from 'vue3-lazyload'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueLazyLoad)

app.mount('#app')
