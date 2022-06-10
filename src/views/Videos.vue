<template>
  <div class="min-h-screen w-full pb-16 font-redhat">
    <PageTitle>videos</PageTitle>
    <ul class="mx-auto max-w-3xl">
      <li
        v-for="video in videos"
        :key="video.title"
        class="pb-0 lg:pb-28"
        @click="setVideoUrl(video)"
      >
        <h3 class="pt-10 pb-3 text-xs font-medium lg:pb-6 lg:text-base">
          {{ video.title }}
        </h3>
        <img :src="video.snapshot" :alt="video.title" class="card-shadow cursor-pointer" />
      </li>
    </ul>
    <FsLightbox :toggler="toggler" type="youtube" :sources="[lightBoxSource]" />
  </div>
</template>
<script setup>
import { ref } from 'vue'
import FsLightbox from 'fslightbox-vue/v3'

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
const toggler = ref(false)
const lightBoxSource = ref('')

const setVideoUrl = (data) => {
  lightBoxSource.value = data.url
  toggler.value = !toggler.value
}
</script>
