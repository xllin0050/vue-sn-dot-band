import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import '@purge-icons/generated'
import './index.css'
import VueLazyLoad from 'vue3-lazyload'

const app = createApp(App)

app.use(router)
app.use(VueLazyLoad)

app.mount('#app')
