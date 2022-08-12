import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import VueLazyLoad from 'vue3-lazyload'
import '@purge-icons/generated'
import './index.css'
import 'aos/dist/aos.css'

const app = createApp(App)

app.use(router)
app.use(createPinia())
app.use(VueLazyLoad)
app.mount('#app')
