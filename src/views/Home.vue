<template>
  <div class="min-h-screen w-full">
    <MembersNameCircle />
    <NextGigCard :next-gig="nextGigDatas" />
    <AlbumList :albums="albumDatas" />
  </div>
</template>

<script>
import { onMounted } from 'vue'
import useDatabase from '@/composables/UseDatabase'

export default {
  name: 'HomePage',
  setup() {
    const { getAlbumsData, albumDatas, nextGigDatas, getNextGigs } =
      useDatabase()

    onMounted(() => {
      getAlbumsData('id, release, title, created_at')
      getNextGigs()
    })
    return { albumDatas, nextGigDatas }
  },
}
</script>
