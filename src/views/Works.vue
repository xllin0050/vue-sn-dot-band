<template>
  <SiteNavbar />
  <div
    id="banner"
    class="selector-animation hidden h-screen w-full items-center justify-center text-neutral-600 lg:flex"
    :class="`selector-${albumData.id}`"
  >
    <h1 class="font-redhat text-[14vw] uppercase leading-[11vw]">
      <span class="relative left-12">
        {{ albumData.title }}
      </span>
    </h1>
  </div>
  <div class="w-full pt-0 lg:pt-20">
    <div class="flex flex-col p-12 font-redhat lg:pt-0">
      <div class="mx-auto mb-3 max-w-xl lg:mb-4">
        <img
          :src="albumData.cover"
          :alt="albumData.title"
          class="block w-full"
        />
      </div>

      <div class="mx-auto mb-16">
        <h1
          class="py-10 pb-14 text-lg font-bold uppercase lg:py-16 lg:text-2xl"
        >
          {{ albumData.title }}
        </h1>
        <div class="max-w-xl pb-14">
          <LangSwitch v-if="albumData.desc.en" />
          <div
            class="text-xs leading-loose lg:text-sm lg:leading-loose"
            :clsss="userLang === 'zh' ? 'text-justify' : ''"
          >
            {{ albumData.desc[userLang] || albumData.desc.zh }}
          </div>
        </div>
        <h3
          class="pb-3 text-sm font-medium uppercase text-neutral-600 lg:pb-4 lg:text-base"
        >
          tracks
        </h3>
        <ul>
          <li
            v-for="(track, num) in albumData.tracks"
            :key="track.num"
            class="py-2 text-xs text-neutral-800 lg:text-base"
          >
            {{ num.slice(5) }}.{{ track }}
          </li>
        </ul>
        <div v-if="albumData.note">
          <h3
            class="pt-10 pb-3 text-sm font-medium uppercase text-neutral-600 lg:pt-24 lg:pb-4 lg:text-base"
          >
            credits
          </h3>
          <p
            v-for="(note, i) in albumData.note"
            :key="i"
            class="py-2 text-xs text-neutral-800 lg:text-base"
          >
            {{ note }}
          </p>
        </div>
        <!-- <h3
          class="pt-10 pb-3 text-sm font-medium uppercase text-neutral-600 lg:pb-4 lg:pt-24 lg:text-base"
        >
          release date
        </h3>
        <p class="py-4 text-xs text-neutral-800 lg:py-2 lg:text-base">
          {{ albumData.release }}
        </p> -->
        <h3
          class="pt-10 pb-3 text-sm font-medium uppercase text-neutral-600 lg:pt-24 lg:pb-4 lg:text-base"
        >
          streams
        </h3>
        <ul>
          <li
            v-for="(link, host) in albumData.listen"
            :key="host"
            class="py-2 text-xs text-neutral-800 lg:text-base"
          >
            <a :href="link" target="_blank" class="capitalize">{{ host }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { storeUserLang } from '@/stores/lang'
const store = storeUserLang()
const userLang = computed(() => store.lang)

import data from '../data/discography'

const route = useRoute()
const albumData = ref(data.find((album) => album.url === route.params.title))
</script>
<style scoped>
.selector-1 {
  background: linear-gradient(180deg, #000000, #ffffff);
}
.selector-2 {
  background: linear-gradient(90deg, #018abe, #e9b2c0);
}

.selector-3 {
  background: linear-gradient(160deg, #695690, #92c7d9);
}

.selector-4 {
  background: linear-gradient(185deg, #8c1622, #cb2e3b);
  color: #da8b91;
}
.selector-5 {
  background: linear-gradient(110deg, #050202, #77598a);
  color: #d8580d;
}
.selector-animation {
  background-size: 250% 250%;
  -webkit-animation: AnimationName 10s ease-in-out infinite;
  -moz-animation: AnimationName 10s ease-in-out infinite;
  animation: AnimationName 10s ease-in-out infinite;
}

@-webkit-keyframes AnimationName {
  0% {
    background-position: 10% 0%;
  }
  50% {
    background-position: 83% 100%;
  }
  100% {
    background-position: 10% 0%;
  }
}
@-moz-keyframes AnimationName {
  0% {
    background-position: 10% 0%;
  }
  50% {
    background-position: 83% 100%;
  }
  100% {
    background-position: 10% 0%;
  }
}
@keyframes AnimationName {
  0% {
    background-position: 10% 0%;
  }
  50% {
    background-position: 83% 100%;
  }
  100% {
    background-position: 10% 0%;
  }
}
</style>
