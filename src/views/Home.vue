<template>
  <div class="banner relative hidden bg-white pb-20 lg:block">
    <div ref="videoWrap" class="h-auto w-full">
      <video
        src="../assets/video-banner.mp4"
        :autoplay="videoAuto"
        muted=""
        loop=""
        poster="../assets/still-banner.jpeg"
        type="video/mp4"
        class="mx-auto"
      ></video>
    </div>
    <div
      ref="siteTitle"
      class="absolute w-full -translate-y-1/2 text-white mix-blend-difference"
      :style="`top:${titleTop}px`"
    >
      <div
        class="ml-0 text-center font-redhat text-3xl font-medium uppercase tracking-[.1em] text-inherit lg:ml-[.3em] lg:text-7xl lg:tracking-[.3em]"
      >
        super napkin
      </div>
    </div>
  </div>
  <div
    v-show="route.name === 'Home'"
    class="block w-full pt-12 text-neutral-900 lg:hidden"
  >
    <div
      class="ml-0 text-center font-redhat text-3xl font-medium uppercase tracking-[.1em] text-inherit lg:ml-[.3em] lg:text-7xl lg:tracking-[.3em]"
    >
      super napkin
    </div>
  </div>
  <SiteNavbar />
  <MembersNameCircle />
  <NextGigCard :next-gig="nextGigDatas" />
  <AlbumList :albums="albumDatas" />
</template>

<script>
import { onMounted, ref, computed } from 'vue'
import { useRoute } from 'vue-router'

import {
  useThrottleFn,
  useEventListener,
  useElementSize,
  useWindowSize,
} from '@vueuse/core'

import useDatabase from '@/composables/UseDatabase'

export default {
  name: 'HomePage',
  setup() {
    const { getAlbumsData, albumDatas, nextGigDatas, getNextGigs } =
      useDatabase()

    const route = useRoute()

    const siteTitle = ref(null)
    const videoWrap = ref(null)
    const videoAuto = ref(false)
    // 視螢幕大小比例調整初始高度
    const titleTop = computed(() =>
      screenWIDTH.value / screenHEIGHT.value < 1.77
        ? videoWrapHEIGHT.value / 2
        : screenHEIGHT.value / 2
    )
    const { height: videoWrapHEIGHT } = useElementSize(videoWrap)
    const { width: screenWIDTH, height: screenHEIGHT } = useWindowSize()

    onMounted(() => {
      getAlbumsData('id, release, title, created_at')
      getNextGigs()

      // 手機板停止自動播放
      if (screenWIDTH.value > 1024) {
        videoAuto.value = true
      }
      // 初始位置
      let additionY = siteTitle.value.parentNode.offsetHeight / 2
      let previousY = 0

      const movingTitle = useThrottleFn(() => {
        // 已移動距離
        const scrollY =
          document.documentElement.scrollTop || document.body.scrollTop

        const bannerHEIGHT = siteTitle.value.parentNode.offsetHeight
        // 原點
        if (scrollY === 0) {
          siteTitle.value.style.top = `${titleTop.value}px`
          additionY = bannerHEIGHT / 2
        }

        if (scrollY >= previousY) {
          // 行為：向下滾動
          previousY = scrollY

          if (scrollY + 150 > siteTitle.value.offsetTop) {
            additionY += scrollY + 150 - siteTitle.value.offsetTop
            if (siteTitle.value.offsetTop < bannerHEIGHT) {
              siteTitle.value.style.top = `${additionY}px`
            } else {
              siteTitle.value.style.top = `${bannerHEIGHT}px`
            }
          }
        } else {
          // 行為：向上
          previousY = scrollY

          if (scrollY + 250 > screenHEIGHT.value / 2) {
            additionY = bannerHEIGHT - (bannerHEIGHT - scrollY) + 250
            if (additionY < screenHEIGHT.value) {
              siteTitle.value.style.top = `${additionY}px`
            }
          }
        }
      }, 10)

      useEventListener(window, 'scroll', () => {
        movingTitle()
      })
    })
    return {
      albumDatas,
      nextGigDatas,
      siteTitle,
      videoWrap,
      videoWrapHEIGHT,
      videoAuto,
      titleTop,
      route,
    }
  },
}
</script>
<style scoped>
video {
  filter: contrast(1.3) grayscale(1);
}
</style>
