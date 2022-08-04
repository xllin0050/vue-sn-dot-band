<template>
  <SiteNavbar />

  <div
    class="mx-auto min-h-screen max-w-xs pb-16 font-redhat lg:max-w-4xl"
    :class="{ 'overflow-hidden': modalVisible }"
  >
    <PageTitle>videos</PageTitle>
    <ul class="mx-auto max-w-3xl">
      <li
        v-for="video in videos"
        :key="video.title"
        class="pb-0 lg:mb-28"
        @click="showModal(video)"
      >
        <h3 class="pt-10 pb-3 text-xs font-medium lg:pb-6 lg:text-base">
          {{ video.title }}
        </h3>
        <div
          class="relative"
          @mouseover="saveVideoID = video.id"
          @mouseleave="saveVideoID = ''"
        >
          <img
            :src="video.snapshot"
            :alt="video.title"
            class="card-shadow bg-white"
          />
          <transition name="hover">
            <div
              v-show="saveVideoID === video.id"
              class="absolute top-0 flex h-full w-full items-center justify-center bg-neutral-700/30"
            >
              <span
                class="iconify text-7xl text-purple-400"
                data-icon="material-symbols:play-circle"
                data-inline="false"
              ></span>
            </div>
          </transition>
        </div>
      </li>
    </ul>
    <transition name="fade">
      <VideoModal
        v-if="modalVisible"
        :data="modalData"
        @close-modal="showModal"
      />
    </transition>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const videos = [
  {
    title: 'Time to Understand 2020 (Live at The Wall)',
    snapshot: new URL(
      '../assets/images/videos/time_to_understand_live.jpeg',
      import.meta.url
    ).href,
    url: 'https://www.youtube.com/watch?v=HhBR0t9zyAY',
    id: 'HhBR0t9zyAY',
  },
  {
    title: 'Sonic Candy Pepper Blitz (OFFICIAL VIDEO)',
    snapshot: new URL(
      '../assets/images/videos/sonic_candy_pepper_blitz_video.jpeg',
      import.meta.url
    ).href,
    url: 'https://www.youtube.com/watch?v=mfFnPvhy-GE',
    id: 'mfFnPvhy-GE',
  },
  {
    title: 'Diamond Shaped Hearts pt.1 (OFFICIAL VIDEO)',
    snapshot: new URL(
      '../assets/images/videos/diamond_shaped_hearts_pt1_video.jpeg',
      import.meta.url
    ).href,
    url: 'https://www.youtube.com/watch?v=EdBtZZiCC38',
    id: 'EdBtZZiCC38',
  },
  {
    title: 'Brahe (OFFICIAL VIDEO)',
    snapshot: new URL(
      '../assets/images/videos/brahe_ video.jpeg',
      import.meta.url
    ).href,
    url: 'https://www.youtube.com/watch?v=uoLYfKt-l38',
    id: 'uoLYfKt-l38',
  },
]
const saveVideoID = ref('')
const modalVisible = ref(false)
const modalData = ref({})
const showModal = (data) => {
  modalData.value = data
  modalVisible.value = !modalVisible.value
}
</script>
<style>
.hover-enter-active,
.hover-leave-active {
  transition: opacity 400ms ease-in-out;
}
.hover-enter,
.hover-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 300ms ease-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
