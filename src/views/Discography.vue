<template>
  <section>
    <h1>Discography</h1>
    <p>{{ albumDatas }}</p>
  </section>
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
