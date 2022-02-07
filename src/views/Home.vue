<template>
  <main>
    <MembersNameCircle />
    <NextGigCard />
    <AlbumSlides :albums="albumDatas" />
    {{ albumDatas }}
  </main>
</template>

<script>
import { supabase } from '@/supabase.js'
import { ref, onMounted } from 'vue'
export default {
  name: 'HomePage',

  setup(props) {
    // const photoSet = {
    //   shih: './images/members/shih.jpg',
    // }

    // const imgUrl = new URL('../assets/images/members/shih.jpg', import.meta.url)
    //   .href
    const albumDatas = ref([])
    async function getAlbumsData() {
      let { data: albums, error } = await supabase.from('albums').select('*')
      if (albums.length) albumDatas.value = albums
      // console.log(albumDatas)
    }
    getAlbumsData()
    return { albumDatas }
  },
}
</script>

<style scoped></style>
