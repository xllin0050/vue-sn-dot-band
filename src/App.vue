<template>
  <div class="max-w-screen relative min-h-screen overflow-x-hidden">
    <div ref="innerScroll" class="inner-scroll h-[100vh] w-full overflow-auto">
      <div
        ref="outterWrap"
        class="outter-wrap h-[100vh] overflow-auto overflow-x-hidden"
      >
        <div ref="outterScroll" class="outter-scroll">
          <div ref="videoWrap" class="video-wrap relative">
            <video
              v-if="route.name === 'Home'"
              ref="videoBG"
              autoplay="true"
              muted="true"
              loop="true"
              class="hidden min-w-full sm:block"
            >
              <source :src="videoUrl" type="video/mp4" />
            </video>
            <div
              ref="siteTitle"
              class="site-title relative w-[100vw] pt-16 sm:fixed sm:top-[50vh] sm:-translate-y-1/2 sm:pt-0"
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
      <div
        ref="scrollView"
        :style="{ height: htmlHeight }"
        class="scroll-view w-full"
      ></div>
    </div>
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
const innerScroll = ref(null)
const scrollView = ref(null)
const outterWrap = ref(null)

let siteTitleHeight

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
onMounted(() => {
  // 語言
  const zh = ['zh-tw', 'zh-cn', 'zh-hk']
  const browser = window.navigator.language || window.navigator.browserLanguage
  store.$patch((state) => {
    if (zh.includes(browser.toLowerCase())) state.lang = 'zh'
  })
})
onUpdated(() => {
  if (screen.width < 640) {
    innerScroll.value.style.display = 'none'
    return
  }
  outterWrap.value.addEventListener('scroll', throttled(scoll, 100))
  innerScroll.value.addEventListener('scroll', throttled(windowScrollTo, 100))
  outterScroll.value.addEventListener('DOMNodeInserted', () => {
    siteTitleHeight = siteTitle.value.offsetHeight
    videoWrap.value.style.paddingBottom = siteTitleHeight / 2 + 'px'
    const scrollViewHeight = Number.parseInt(scrollView.value.style.height)
    const outterHeight = outterScroll.value.scrollHeight
    if (scrollViewHeight !== outterHeight) {
      // 高度有變化重新計算video 與 title高度
      siteTitleHeight = siteTitle.value.offsetHeight
      scrollView.value.style.height = `${
        outterHeight + siteTitle.value.offsetHeight
      }px`
    }
  })
})
const scoll = () => {
  // const outterWrapScrollTop = outterWrap.value.scrollTop
  // const innerScrollTop = innerScroll.value.scrollTop
  // console.log('scroll', window.innerHeight / 2, outterWrap.value.scrollTop)
  // if (innerScrollTop === outterWrapScrollTop) {
  //   scrollView.value.style.pointerEvents = 'none'
  //   return
  // }
  // innerScroll.value.scrollTop = outterWrapScrollTop
  // scrollView.value.style.pointerEvents = 'auto'
}

let windowScrollWait = false
let scrollGoCtl = null
function windowScrollTo() {
  if (windowScrollWait) return
  if (!windowScrollWait) {
    windowScrollWait = true
    if (scrollGoCtl) clearTimeout(scrollGoCtl)
    scrollGoCtl = setTimeout(scrollGo, 15)
    setTimeout(() => {
      windowScrollWait = false
    }, 100)
  }
}
function scrollGo() {
  const outterWrapScrollTop = outterWrap.value.scrollTop
  const innerScrollTop = innerScroll.value.scrollTop
  if (innerScrollTop === outterWrapScrollTop) return
  if (
    innerScrollTop > outterWrapScrollTop &&
    innerScrollTop - outterWrapScrollTop < 15
  ) {
    outterWrap.value.scrollTop = innerScrollTop
  } else if (innerScrollTop > outterWrapScrollTop) {
    outterWrap.value.scrollTop = outterWrapScrollTop + 15
  } else if (
    innerScrollTop < outterWrapScrollTop &&
    outterWrapScrollTop - innerScrollTop < 15
  ) {
    outterWrap.value.scrollTop = innerScrollTop
  } else if (innerScrollTop < outterWrapScrollTop) {
    outterWrap.value.scrollTop = outterWrapScrollTop - 15
  }
  if (scrollGoCtl) clearTimeout(scrollGoCtl)
  scrollGoCtl = setTimeout(scrollGo, 5)
  if (
    window.innerHeight / 2 + outterWrap.value.scrollTop <
    videoWrap.value.offsetHeight
  ) {
    siteTitle.value.style.top = window.innerHeight / 2 + 'px'
    siteTitle.value.style.position = 'fixed'
    return
  }
  siteTitle.value.style.top = `${
    videoBG.value.offsetHeight + siteTitleHeight / 2
  }px`
  siteTitle.value.style.position = 'absolute'
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
  /* display: none; */
  width: 10px;
  z-index: 999;
  background: white;
}
.outter-wrap::-webkit-scrollbar-thumb {
  background: #333;
  border-radius: 25px;
  width: 10px;
  z-index: 999;
}
.inner-scroll::-webkit-scrollbar {
  display: block;
  width: 10px;
  z-index: 999;
  background: white;
  position: relative;
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
  width: calc(100% - 10px);
  mix-blend-mode: difference;
  color: #fff;
}
.site-title div {
  color: inherit;
}
.inner-scroll {
  pointer-events: auto;
  position: fixed;
  top: 0px;
  left: 0px;
}
.scroll-view {
  pointer-events: none;
  position: relative;
}
.video-wrap {
  background-color: white;
  transition: 0.3s;
}
.outter-wrap {
  top: 0px;
  left: 0px;
  width: calc(100% - 10px);
  pointer-events: none;
  position: fixed;
  overflow: hidden !important;
}
.outter-scroll {
  pointer-events: none;
  overflow: hidden;
}

.outter-scroll a {
  pointer-events: auto;
}
</style>
