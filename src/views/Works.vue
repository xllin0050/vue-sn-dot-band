<template>
    <div class="min-h-screen w-full">
        <div
            v-for="album in albumData"
            :key="album.id"
            class="flex flex-col pt-6 font-redhat lg:pt-0"
        >
            <div class="mx-auto mb-3 max-w-2xl">
                <img
                    :src="album.cover"
                    :alt="album.title"
                    class="block w-full"
                />
            </div>

            <div class="mx-auto mb-16">
                <h1 class="py-10 text-2xl font-bold uppercase">
                    {{ album.title }}
                </h1>
                <h3 class="pb-3 text-base font-medium text-gray-600 uppercase lg:text-lg">
                    tracks
                </h3>
                <ul>
                    <li
                        v-for="(track, num) in album.tracks"
                        :key="track.num"
                        class="py-1 text-sm lg:text-lg text-gray-800"
                    >
                        {{ track }}
                    </li>
                </ul>
                <div v-if="album.note">
                    <h3
                        class="pt-6 pb-3 text-base font-medium text-gray-600 uppercase lg:text-lg"
                    >
                        note
                    </h3>
                    <p
                        v-for="(note, i) in album.note.note"
                        :key="i"
                        class="py-1 text-gray-800 text-xs lg:text-lg"
                    >
                        {{ note }}
                    </p>
                </div>
                <h3
                    class="pt-6 pb-3 text-base font-medium uppercase lg:text-lg text-gray-600"
                >
                    release
                </h3>
                <p class="text-sm lg:text-lg text-gray-800">{{ album.release }}</p>
                <h3
                    class="pt-6 pb-3 text-base font-medium uppercase lg:text-lg text-gray-600"
                >
                    listening links
                </h3>
                <ul>
                    <li
                        v-for="(link, host) in album.listen"
                        :key="host"
                        class="py-1 text-sm lg:text-lg text-gray-800"
                    >
                        <a :href="link" target="_blank" class="uppercase">{{
                            host
                        }}</a>
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
