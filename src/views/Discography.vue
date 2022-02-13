<template>
  <div class="min-h-screen w-full">
    <div
      v-for="album in albumDatas"
      :key="album.id"
      class="flex justify-center pt-16 pb-36 pl-8 font-redhat"
    >
      <div class="max-w-xs grow-0 pr-10">
        <router-link :to="`/album/${album.release}/${album.url}`">
          <img :src="album.cover" class="block w-full shadow-xl" />
        </router-link>
      </div>
      <div class="grow">
        <h3 class="pb-4 text-lg font-medium uppercase text-gray-800">
          {{ album.title }}
        </h3>
        <p class="pt-4 pb-16 text-gray-600">{{ album.desc }}</p>
        <iframe
          style="border: 0; width: 100%; height: 120px; margin: auto"
          :src="album.bandcamp"
          seamless
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import { supabase } from '@/supabase.js'
import { ref } from 'vue'

export default {
  name: 'DiscPage',
  setup(props) {
    const albumDatas = ref([])

    const getAlbumsArt = (title) => {
      const fileName = title.replace(/ /g, '-')
      const { publicURL, error } = supabase.storage
        .from('works')
        .getPublicUrl(`albums/${fileName}.jpg`)
      return publicURL
    }

    async function getAlbumsData() {
      const { data: albums, error } = await supabase
        .from('albums')
        .select('*')
        .order('release', { ascending: false })
      if (albums.length)
        albumDatas.value = albums.map((item) => {
          item.url = item.title
            .toLowerCase()
            .replace(/'|\s/g, (e) => (e === "'" ? '' : '-'))
          item.cover = getAlbumsArt(item.title)
          return item
        })
    }
    getAlbumsData()

    return { albumDatas }
  },
}
</script>

<style scoped></style>
