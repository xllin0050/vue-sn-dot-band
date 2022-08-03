<template>
  <div class="banner relative hidden bg-white pb-20 lg:block">
    <div ref="videoWrap" class="h-auto w-full">
      <!-- <img src="../assets/dummy.jpg" alt="DUMMY" class="w-full" /> -->
      <video
        src="../assets/video-banner.mp4"
        autoplay="true"
        muted="true"
        loop="true"
        poster="../assets/still-banner.jpeg"
        type="video/mp4"
      ></video>
    </div>
    <div
      ref="siteTitle"
      class="site-title absolute w-full -translate-y-1/2 text-white mix-blend-difference"
      :style="`top:${videoWrapHEIGHT / 2}px`"
    >
      <div
        class="text-center font-redhat text-3xl font-medium uppercase tracking-[.1em] text-inherit lg:text-7xl lg:tracking-[.3em]"
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
      class="text-center font-redhat text-3xl font-medium uppercase tracking-[.1em] text-inherit lg:text-7xl lg:tracking-[.3em]"
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
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

import { useThrottleFn, useEventListener, useElementSize } from '@vueuse/core'

import useDatabase from '@/composables/UseDatabase'

export default {
  name: 'HomePage',
  setup() {
    const { getAlbumsData, albumDatas, nextGigDatas, getNextGigs } =
      useDatabase()

    const route = useRoute()

    const siteTitle = ref(null)
    const videoWrap = ref(null)
    const { height: videoWrapHEIGHT } = useElementSize(videoWrap)

    onMounted(() => {
      getAlbumsData('id, release, title, created_at')
      getNextGigs()

      // 初始位置
      let additionY = siteTitle.value.parentNode.offsetHeight / 2
      let previousY = 0

      const movingTitle = useThrottleFn(() => {
        // 已移動距離
        const scrollY =
          document.documentElement.scrollTop || document.body.scrollTop

        const bannerHeight = siteTitle.value.parentNode.offsetHeight
        // 原點
        if (scrollY === 0) {
          siteTitle.value.style.top = `${videoWrapHEIGHT.value / 2}px`
          additionY = bannerHeight / 2
        }

        if (scrollY >= previousY) {
          // 行為：向下滾動
          previousY = scrollY

          if (scrollY + 150 > siteTitle.value.offsetTop) {
            additionY += scrollY + 150 - siteTitle.value.offsetTop
            if (siteTitle.value.offsetTop < bannerHeight) {
              siteTitle.value.style.top = `${additionY}px`
            }
          }
        } else {
          // 行為：向上
          previousY = scrollY
          if (scrollY + 250 > videoWrapHEIGHT.value / 2) {
            additionY = bannerHeight - (bannerHeight - scrollY) + 250
            if (additionY < videoWrapHEIGHT.value) {
              siteTitle.value.style.top = `${additionY}px`
            }
          }
        }
      }, 15)

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
      route,
    }
  },
}
</script>
<style scoped>
video {
  filter: contrast(3)  grayscale(1);
}
</style>
