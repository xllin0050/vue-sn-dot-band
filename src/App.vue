<template>
  <div class="w-full overflow-x-hidden">
    <AppNavbar />
    <router-view />
    <SiteFooter />
    <ScrollToTop />
  </div>
</template>
<script setup>
import { onMounted } from 'vue'
import { storeUserLang } from '@/stores/lang'

const store = storeUserLang()

onMounted(() => {
  // 語言
  const zh = ['zh-tw', 'zh-cn', 'zh-hk']
  const browser = window.navigator.language || window.navigator.browserLanguage
  store.$patch((state) => {
    if (zh.includes(browser.toLowerCase())) state.lang = 'zh'
  })
})
</script>
