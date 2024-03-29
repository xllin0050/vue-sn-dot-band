import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import VueLazyLoad from 'vue3-lazyload'
import '@purge-icons/generated'
import './index.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueLazyLoad, {
  observer: true,
})
app.mount('#app')
