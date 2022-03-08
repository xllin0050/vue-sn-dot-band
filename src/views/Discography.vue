<template>
    <div class="min-h-screen w-full">
        <PageTitle>Discography</PageTitle>
        <div
            v-for="album in albumDatas"
            :key="album.id"
            class="flex flex-col items-center justify-center py-8 font-redhat md:pt-2 md:pb-24 lg:flex-row lg:items-start lg:pt-16 lg:pb-36"
        >
            <div class="w-[250px] grow-0 lg:w-[650px]">
                <router-link :to="`/album/${album.release}/${album.url}`">
                    <img :src="album.cover" class="block w-full shadow-xl" />
                </router-link>
            </div>
            <div class="grow pt-8 pl-8 lg:pt-0">
                <h3
                    class="pb-4 text-sm font-medium uppercase text-neutral-800 dark:text-purple-200 lg:text-xl"
                >
                    {{ album.title }}
                </h3>
                <p
                    class="pt-4 pb-8 text-xs leading-6 tracking-widest text-neutral-600 dark:text-neutral-400 lg:text-base"
                >
                    {{ album.desc }}
                </p>
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
import { onMounted } from 'vue'
import useStorage from '@/composables/UseStorage'

export default {
    name: 'DiscPage',
    setup() {
        const { getAlbumsData, albumDatas } = useStorage()

        onMounted(() => {
            getAlbumsData('*')
        })

        return { albumDatas }
    },
}
</script>

<style scoped></style>
