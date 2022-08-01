<template>
  <div class="max-w-screen min-h-screen overflow-x-hidden">
    <div class="banner relative pb-20">
      <div ref="videoWrap" class="h-auto w-full">
        <img src="./assets/dummy.jpg" alt="DUMMY" />
      </div>
      <div ref="siteTitle" class="absolute top-1/2 w-full -translate-y-1/2">
        <div
          class="text-center font-redhat text-3xl font-medium uppercase tracking-[.1em] text-neutral-900 invert lg:text-7xl lg:tracking-[.3em]"
        >
          super napkin
        </div>
      </div>
    </div>
    <SiteNavbar :routes-list="pageNames" />
    <AppNavbar :routes-list="pageNames" />
    <main class="mx-auto max-w-xs lg:max-w-4xl">
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
import { onMounted, ref } from 'vue'
import { storeUserLang } from '@/stores/lang'
import { useThrottleFn, useEventListener } from '@vueuse/core'

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

const siteTitle = ref(null)
const videoWrap = ref(null)

onMounted(() => {
  // 語言
  const zh = ['zh-tw', 'zh-cn', 'zh-hk']
  const browser = window.navigator.language || window.navigator.browserLanguage
  store.$patch((state) => {
    if (zh.includes(browser.toLowerCase())) state.lang = 'zh'
  })
  // 初始位置

  let additionY = siteTitle.value.parentNode.offsetHeight / 2
  let previousY = 0
  siteTitle.value.style.top = `${window.innerHeight / 2}px`

  const movingTitle = useThrottleFn(() => {
    // 已移動距離
    const scrollY =
      document.documentElement.scrollTop || document.body.scrollTop

    const bannerHeight = siteTitle.value.parentNode.offsetHeight

    // 原點
    if (scrollY === 0) {
      siteTitle.value.style.top = `${window.innerHeight / 2}px`
      additionY = bannerHeight / 2
    }

    if (scrollY >= previousY) {
      // 行為：向下滾動
      previousY = scrollY
      if (scrollY + 150 > siteTitle.value.offsetTop) {
        additionY += scrollY + 150 - siteTitle.value.offsetTop
        if (additionY < bannerHeight) {
          siteTitle.value.style.top = `${additionY}px`
        }
      }
    } else {
      // 行為：向上
      previousY = scrollY
      if (scrollY + 150 > (bannerHeight - 150) / 2) {
        additionY = bannerHeight - (bannerHeight - scrollY) + 150
        if (additionY < bannerHeight) {
          siteTitle.value.style.top = `${additionY}px`
        }
      }
    }
  }, 15)

  useEventListener(window, 'scroll', () => {
    movingTitle()
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
