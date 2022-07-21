<template>
  <div class="max-w-screen relative min-h-screen overflow-x-hidden">
    <div
      ref="innerScroll"
      class="inner-scroll fixed z-50 h-[100vh] w-full overflow-auto"
      style="opacity: 0.7; background-color: rgba(0, 0, 0, 0)"
    >
      <div
        ref="scrollView"
        :style="{ height: htmlHeight }"
        class="w-full"
      ></div>
    </div>
    <div ref="outterWrap" class="outter-wrap h-[100vh] overflow-auto">
      <div ref="outterScroll">
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
          <div
            ref="siteTitle"
            class="site-title absolute w-full -translate-y-1/2"
          >
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
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref, onUpdated, computed } from 'vue'
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
const innerScroll = ref(null)
const scrollView = ref(null)
const outterWrap = ref(null)

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
  // title 滑動
  if (outterWrap.value.scrollTop < siteTitleTop + siteTitleHeight) {
    siteTitle.value.style.top = `${siteTitleTop + outterWrap.value.scrollTop}px`
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
  outterWrap.value.addEventListener('scroll', throttled(scoll, 100))

  scrollView.value.style.height = outterScroll.value.scrollHeight + 'px'
  innerScroll.value.addEventListener('scroll', throttled(windowScrollTo, 100))
  outterScroll.value.addEventListener('DOMNodeInserted', () => {
    const scrollViewHeight = Number.parseInt(scrollView.value.style.height)
    const outterHeight = outterScroll.value.scrollHeight
    if (scrollViewHeight !== outterHeight) {
      scrollView.value.style.height = `${
        outterHeight + siteTitle.value.offsetHeight
      }px`
    }
  })
})
let windowScrollWait = false
function windowScrollTo() {
  if (windowScrollWait) return
  const innerDOMScrollTop = innerScroll.value.scrollTop
  if (!windowScrollWait) {
    windowScrollWait = true

    outterWrap.value.scrollTo({
      top: innerDOMScrollTop,
      behavior: 'smooth',
    })
    setTimeout(() => {
      windowScrollWait = false
    }, 100)
  }
}
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
.outter-wrap::-webkit-scrollbar {
  display: none;
  width: 10px;
  background: white;
}
.outter-wrap::-webkit-scrollbar-thumb {
  background: #333;
  border-radius: 25px;
  width: 10px;
}
.inner-scroll::-webkit-scrollbar {
  display: block;
  width: 10px;
  background: white;
}
.inner-scroll::-webkit-scrollbar-thumb {
  background: #333;
  border-radius: 25px;
  width: 10px;
}
html,
body {
  padding: 0px;
  margin: 0px;
}
html ::-webkit-scrollbar {
  /* display: none; */
}
::-webkit-scrollbar-button {
  display: none;
  background-color: red;
  color: red;
  padding: 209px;
}
html {
  scroll-behavior: smooth;
}
.site-title {
  transition: 0.3s;
}
</style>
