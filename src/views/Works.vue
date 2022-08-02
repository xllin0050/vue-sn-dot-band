<template>
  <SiteNavbar />

  <div class="min-h-screen w-full">
    <div
      v-for="album in singleAlbum"
      :key="album.id"
      class="flex flex-col pt-6 font-redhat lg:pt-0"
    >
      <div class="mx-auto mb-3 max-w-xl lg:mb-4">
        <img :src="album.cover" :alt="album.title" class="block w-full" />
      </div>

      <div class="mx-auto mb-16">
        <h1
          class="py-10 pb-14 text-lg font-bold uppercase lg:py-16 lg:text-2xl"
        >
          {{ album.title }}
        </h1>
        <h3
          class="pb-3 text-sm uppercase text-neutral-600 lg:pb-2 lg:text-base"
        >
          tracks
        </h3>
        <ul>
          <li
            v-for="(track, num) in album.tracks"
            :key="track.num"
            class="py-1 text-xs text-neutral-800 lg:py-0 lg:text-base"
          >
            {{ num.slice(5) }}.{{ track }}
          </li>
        </ul>
        <div v-if="album.note">
          <h3
            class="pt-10 pb-3 text-sm uppercase text-neutral-600 lg:pt-14 lg:pb-2 lg:text-base"
          >
            credits
          </h3>
          <p
            v-for="(note, i) in album.note.note"
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
          {{ album.release }}
        </p>
        <h3
          class="pt-10 pb-3 text-sm uppercase text-neutral-600 lg:pt-14 lg:pb-2 lg:text-base"
        >
          streams
        </h3>
        <ul>
          <li
            v-for="(link, host) in album.listen"
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
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import useDatabase from '@/composables/UseDatabase'
export default {
  name: 'AlbumPage',
  setup() {
    const { getSingleAlbum, singleAlbum } = useDatabase()
    const route = useRoute()

    onMounted(() => {
      getSingleAlbum(route.params.date)
    })

    return { singleAlbum }
  },
}
</script>
