<template>
    <div class="min-h-screen w-full">
        <MembersNameCircle />
        <NextGigCard :next-gig="nextGigDatas" />
        <AlbumList :albums="albumDatas" />
    </div>
</template>

<script>
import { onMounted } from 'vue'
import useStorage from '@/composables/UseStorage'

export default {
    name: 'HomePage',
    setup() {
        const { getAlbumsData, albumDatas, nextGigDatas, getNextGigs } =
            useStorage()

        onMounted(() => {
            getAlbumsData('id, release, title, created_at')
            getNextGigs()
        })
        return { albumDatas, nextGigDatas }
    },
}
</script>
