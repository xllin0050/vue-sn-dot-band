<template>
  <div
    class="max-w-screen min-h-screen overflow-x-hidden scroll-smooth dark:bg-neutral-900 dark:text-purple-200"
  >
    <ThemeSwitch />
    <LangSwitch v-if="route.name === 'About Us'" />
    <NoGlitchTitle />

    <AppNavbar :routes-list="pageNames" />
    <SiteNavbar :routes-list="pageNames" />
    <main class="mx-auto max-w-xs lg:max-w-4xl">
      <router-view />
    </main>

    <SiteFooter />
    <ScrollToTop />
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { storeUserLang } from '@/stores/lang'

const router = useRouter()
const route = useRoute()
const store = storeUserLang()

const pageNames = [
  'Home',
  'About Us',
  'Discography',
  'Gigs',
  'Videos',
  'Photos',
  'Products',
]

onMounted(() => {
  // 主題色
  localStorage.setItem('theme', 'light')
  // 語言
  const zh = ['zh-tw', 'zh-cn', 'zh-hk']
  const browser = window.navigator.language || window.navigator.browserLanguage
  store.$patch((state) => {
    if (zh.includes(browser.toLowerCase())) state.lang = 'zh'
  })
})
</script>

<style>
body {
  position: relative;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 120ms linear;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
