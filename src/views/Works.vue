<template>
    <div class="w-full">
        <h1>{{ $route.params }}</h1>
        <p>
            {{ albumData }}
        </p>
    </div>
</template>
<script>
import { supabase } from '@/supabase.js'
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
export default {
    name: 'AlbumPage',
    setup(props) {
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
