<template>
  <div class="max-w-screen relative min-h-screen overflow-x-hidden">
    <div>
      <VideoBackground v-if="route.name === 'Home'" />
      <div class="w-full bg-white pt-16">
        <div
          class="text-center font-redhat text-3xl font-medium uppercase tracking-[.1em] text-neutral-900 lg:text-7xl lg:tracking-[.3em]"
        >
          super napkin
        </div>
      </div>
    </div>
    <SiteNavbar :routes-list="pageNames" />
    <AppNavbar :routes-list="pageNames" />
    <main class="mx-auto max-w-xs bg-white lg:max-w-4xl">
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <SiteFooter />
    <ScrollToTop />
  </div>
</template>
<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { storeUserLang } from '@/stores/lang'

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
  // 語言
  const zh = ['zh-tw', 'zh-cn', 'zh-hk']
  const browser = window.navigator.language || window.navigator.browserLanguage
  store.$patch((state) => {
    if (zh.includes(browser.toLowerCase())) state.lang = 'zh'
  })
})
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 180ms ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
