<template>
  <div
    class="min-h-screen w-full pb-16 font-redhat"
    :class="{ 'overflow-hidden': modalVisible }"
  >
    <PageTitle>videos</PageTitle>
    <TransitionGroup name="list" tag="ul" class="mx-auto max-w-3xl">
      <li
        v-for="video in videos"
        :key="video.title"
        class="pb-0 lg:pb-28"
        @click="showModal(video)"
      >
        <h3 class="pt-10 pb-3 text-xs font-medium lg:pb-6 lg:text-base">
          {{ video.title }}
        </h3>
        <img
          :src="video.snapshot"
          :alt="video.title"
          class="card-shadow cursor-pointer"
        />
      </li>
    </TransitionGroup>
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

const modalVisible = ref(false)
const modalData = ref({})
const showModal = (data) => {
  modalData.value = data
  modalVisible.value = !modalVisible.value
}
</script>
<style>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
  transition-property: opacity, transform;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 200ms ease-out;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
