<template>
  <div
    ref="siteWrap"
    class="max-w-screen relative min-h-screen overflow-x-hidden"
  >
    <div ref="videoWrap" class="relative">
      <video
        v-if="route.name === 'Home'"
        ref="videoBG"
        autoplay="false"
        muted="true"
        loop="true"
        class="min-w-full blur-lg grayscale"
        :poster="stillBanner"
      >
        <source :src="videoMP4" type="video/mp4" />
      </video>
    </div>
    <div
      ref="siteTitle"
      class="site-title absolute top-1/2 w-full -translate-y-1/2"
    >
      <div
        class="my-8 text-center font-redhat text-3xl font-medium uppercase tracking-[.1em] text-neutral-900 lg:text-7xl lg:tracking-[.3em]"
      >
        super napkin
      </div>
    </div>
    <nav ref="siteNav">
      <SiteNavbar :routes-list="pageNames" />
    </nav>

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
import { onMounted, ref, onUpdated, computed } from 'vue'
import { useRoute } from 'vue-router'
import { storeUserLang } from '@/stores/lang'

const videoMP4 = new URL('./assets/video-banner.mp4', import.meta.url).href
const stillBanner = new URL('./assets/still-banner.jpeg', import.meta.url).href

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

const videoWrap = ref(null)
const videoBG = ref(null)
const siteTitle = ref(null)
const siteNav = ref(null)

const siteWrap = ref(null)
const outterScroll = ref(null)
const innerScroll = ref(null)
const scrollView = ref(null)
const outterWrap = ref(null)

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
.site-title {
  transition: 0.3s;
}
</style>
