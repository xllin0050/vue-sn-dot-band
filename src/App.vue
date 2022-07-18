<template>
  <div
    ref="outterScroll"
    class="max-w-screen relative min-h-screen overflow-x-hidden"
  >
    <div ref="innerScroll" class="absolute z-50 h-[100vh] w-full overflow-auto">
      <div ref="scrollView" class="w-full bg-red-300"></div>
    </div>
    <div ref="videoWrap" class="relative">
      <video
        v-if="route.name === 'Home'"
        ref="videoBG"
        autoplay="true"
        muted="true"
        loop="true"
        class="min-w-full"
      >
        <source :src="videoUrl" type="video/mp4" />
      </video>
      <div ref="siteTitle" class="absolute w-full -translate-y-1/2">
        <div
          class="my-8 text-center font-redhat text-3xl font-medium uppercase tracking-[.1em] text-neutral-900 lg:text-7xl lg:tracking-[.3em]"
        >
          super napkin
        </div>
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
import { onMounted, ref, onUpdated } from 'vue'
import { useRoute } from 'vue-router'
import { storeUserLang } from '@/stores/lang'

const videoUrl = new URL('./assets/SNLL.mp4', import.meta.url).href

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

const outterScroll = ref(null)
const scrollView = ref(null)

let siteTitleTop, siteTitleHeight

function throttled(fn, delay = 500) {
  let timer = null
  return function (...args) {
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(this, args)
        timer = null
      }, delay)
    }
  }
}

const scoll = () => {
  if (document.documentElement.scrollTop < siteTitleTop + siteTitleHeight) {
    siteTitle.value.style.top = `${
      siteTitleTop + document.documentElement.scrollTop
    }px`
  } else {
    siteTitle.value.style.top = `${
      videoBG.value.offsetHeight + siteTitleHeight / 2
    }px`
  }
  if (Number.parseInt(siteTitle.value.style.top) > videoBG.value.offsetHeight) {
    videoWrap.value.style.marginBottom =
      Number.parseInt(siteTitle.value.style.top) -
      videoBG.value.offsetHeight +
      'px'
  }
  if (
    Number.parseInt(siteTitle.value.style.top) < videoBG.value.offsetHeight &&
    Number.parseInt(videoWrap.value.style.marginBottom) < 0
  ) {
    const neg =
      Number.parseInt(siteTitle.value.style.top) - videoBG.value.offsetHeight
    videoWrap.value.style.marginBottom =
      neg > 0
        ? Number.parseInt(siteTitle.value.style.top) -
          videoBG.value.offsetHeight +
          'px'
        : 0 + 'px'
  }
}

window.addEventListener('scroll', throttled(scoll, 10))

onMounted(() => {
  // 語言
  const zh = ['zh-tw', 'zh-cn', 'zh-hk']
  const browser = window.navigator.language || window.navigator.browserLanguage
  store.$patch((state) => {
    if (zh.includes(browser.toLowerCase())) state.lang = 'zh'
  })
})

onUpdated(() => {
  siteTitleTop = videoBG.value.offsetHeight / 2
  siteTitleHeight = siteTitle.value.offsetHeight
  siteTitle.value.style.top = `${siteTitleTop}px`

  scrollView.value.style.height = outterScroll.value.offsetHeight + 'px'
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
