<template>
  <div class="min-h-screen w-full">
    <div
      v-for="album in albumData"
      :key="album.id"
      class="flex flex-col font-redhat"
    >
      <div class="mx-auto mb-3 max-w-2xl">
        <img :src="album.cover" :alt="album.title" class="block w-full" />
      </div>

      <div class="mx-auto mb-16">
        <h1 class="py-10 text-2xl font-bold uppercase">{{ album.title }}</h1>
        <h3 class="pb-3 text-lg font-medium uppercase">tracks</h3>
        <ul>
          <li
            v-for="(track, num) in album.tracks"
            :key="track.num"
            class="py-1 text-lg"
          >
            {{ track }}
          </li>
        </ul>
        <div v-if="album.note">
          <h3 class="pt-6 pb-3 text-lg font-medium uppercase">note</h3>
          <p v-for="(note, i) in album.note.note" :key="i" class="py-1">
            {{ note }}
          </p>
        </div>
        <h3 class="pt-6 pb-3 text-lg font-medium uppercase">release</h3>
        <p>{{ album.release }}</p>
        <h3 class="pt-6 pb-3 text-lg font-medium uppercase">listening links</h3>
        <ul>
          <li v-for="(link, host) in album.listen" :key="host" class="py-1">
            <a :href="link" target="_blank" class="uppercase">{{ host }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { supabase } from '@/supabase.js'
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
export default {
  name: 'AlbumPage',
  setup() {
    const router = useRouter()
    const route = useRoute()
    const albumData = ref([])

    const getAlbumsArt = (title) => {
      const fileName = title.replace(/ /g, '-')
      const { publicURL, error } = supabase.storage
        .from('works')
        .getPublicUrl(`albums/${fileName}.jpg`)
      return publicURL
    }

    async function getAlbumData(params) {
      let { data: albums, error } = await supabase
        .from('albums')
        .select()
        .match({ release: params })
      albumData.value = albums.map((item) => {
        item.cover = getAlbumsArt(item.title)
        return item
      })
    }
    getAlbumData(route.params.date)

    return { albumData }
  },
}
</script>
