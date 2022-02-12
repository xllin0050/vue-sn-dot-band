<template>
    <div class="min-h-screen w-full">
        <div
            v-for="album in albumDatas"
            :key="album.id"
            class="flex justify-center py-16 pl-8 font-redhat"
        >
            <div class="max-w-xs grow-0 pr-10">
                <a :href="album.url">
                    <img :src="album.cover" class="block w-full shadow-xl" />
                </a>
            </div>
            <div class="grow">
                <h3 class="pb-4 text-lg font-medium uppercase text-gray-800">
                    {{ album.title }}
                </h3>
                <ul class="text-gray-600">
                    <li
                        v-for="(track, num) in album.tracks"
                        :key="num"
                        class="my-1"
                    >
                        {{ track }}
                    </li>
                </ul>
                <p class="flex items-center pt-10 uppercase">
                    <span class="mr-2">release</span>{{ album.release }}
                </p>
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
