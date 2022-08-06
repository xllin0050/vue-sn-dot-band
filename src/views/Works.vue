<template>
  <SiteNavbar />
  <div
    id="title"
    class="css-selector hidden h-screen w-full items-center justify-center text-neutral-700 lg:flex"
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
        <h3
          class="pb-3 text-sm uppercase text-neutral-600 lg:pb-2 lg:text-base"
        >
          tracks
        </h3>
        <ul>
          <li
            v-for="(track, num) in albumData.tracks"
            :key="track.num"
            class="py-1 text-xs text-neutral-800 lg:py-0 lg:text-base"
          >
            {{ num.slice(5) }}.{{ track }}
          </li>
        </ul>
        <div v-if="albumData.note">
          <h3
            class="pt-10 pb-3 text-sm uppercase text-neutral-600 lg:pt-14 lg:pb-2 lg:text-base"
          >
            credits
          </h3>
          <p
            v-for="(note, i) in albumData.note.note"
            :key="i"
            class="py-1 text-xs text-neutral-800 lg:py-0 lg:text-base"
          >
            {{ note }}
          </p>
        </div>
        <h3
          class="pt-10 pb-3 text-sm uppercase text-neutral-600 lg:pb-2 lg:pt-14 lg:text-base"
        >
          release date
        </h3>
        <p class="text-xs text-neutral-800 lg:text-base">
          {{ albumData.release }}
        </p>
        <h3
          class="pt-10 pb-3 text-sm uppercase text-neutral-600 lg:pt-14 lg:pb-2 lg:text-base"
        >
          streams
        </h3>
        <ul>
          <li
            v-for="(link, host) in albumData.listen"
            :key="host"
            class="py-1 text-xs text-neutral-800 lg:py-0 lg:text-base"
          >
            <a :href="link" target="_blank" class="uppercase">{{ host }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import useDatabase from '@/composables/UseDatabase'
export default {
  name: 'AlbumPage',
  setup() {
    const { getSingleAlbum } = useDatabase()
    const route = useRoute()
    const albumData = ref({})
    getSingleAlbum(route.params.date).then((data) => {
      console.log(data)
      albumData.value = data
    })
    return { albumData }
  },
}
</script>
<style scoped>
.selector-2 {
  background: linear-gradient(180deg, #018abe, #e9b2c0);
  background-size: 400% 400%;

  -webkit-animation: AnimationName 7s ease infinite;
  -moz-animation: AnimationName 7s ease infinite;
  animation: AnimationName 7s ease infinite;
}

.selector-3 {
  background: linear-gradient(180deg, #695690, #92c7d9);
  background-size: 400% 400%;

  -webkit-animation: AnimationName 7s ease infinite;
  -moz-animation: AnimationName 7s ease infinite;
  animation: AnimationName 7s ease infinite;
}

.selector-1 {
  background: linear-gradient(180deg, #000000, #ffffff);
  background-size: 400% 400%;

  -webkit-animation: AnimationName 7s ease infinite;
  -moz-animation: AnimationName 7s ease infinite;
  animation: AnimationName 7s ease infinite;
}

@-webkit-keyframes AnimationName {
  0% {
    background-position: 18% 0%;
  }
  50% {
    background-position: 83% 100%;
  }
  100% {
    background-position: 18% 0%;
  }
}
@-moz-keyframes AnimationName {
  0% {
    background-position: 18% 0%;
  }
  50% {
    background-position: 83% 100%;
  }
  100% {
    background-position: 18% 0%;
  }
}
@keyframes AnimationName {
  0% {
    background-position: 18% 0%;
  }
  50% {
    background-position: 83% 100%;
  }
  100% {
    background-position: 18% 0%;
  }
}
</style>
