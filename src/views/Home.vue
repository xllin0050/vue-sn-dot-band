<template>
    <div class="min-h-screen w-full ">
        <MembersNameCircle />
        <NextGigCard :next-gig="nextGigDatas" />
        <AlbumList :albums="albumDatas" />
    </div>
</template>

<script>
import { supabase } from '@/supabase.js'
import { ref } from 'vue'
export default {
    name: 'HomePage',
    setup() {
        const albumDatas = ref([])
        const nextGigDatas = ref([])

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
                .select('id, release, title, created_at')
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

        async function getGigsData() {
            const today = new Date().toISOString()
            let { data: gigs, error } = await supabase
                .from('gigs')
                .select('*')
                .order('show_time')
                .gt('show_time', today)
            nextGigDatas.value = gigs
        }
        getGigsData()
        getAlbumsData()
        return { albumDatas, nextGigDatas }
    },
}
</script>
