<template>
  <SiteNavbar />

  <div class="mx-auto min-h-screen max-w-xs lg:max-w-4xl">
    <PageTitle>Discography</PageTitle>
    <div
      v-for="album in albumDatas"
      :key="album.id"
      class="flex flex-col items-center justify-center pt-4 pb-32 font-redhat md:pt-2 md:pb-24 lg:flex-row lg:items-start lg:pt-16 lg:pb-36"
    >
      <div class="w-[250px] shrink-0 lg:w-[300px]">
        <router-link :to="`/album/${album.release}/${album.url}`">
          <img :src="album.cover" class="block w-full shadow-xl" />
        </router-link>
      </div>
      <div class="pt-8 pl-8 lg:pt-0">
        <h3
          class="pb-4 text-sm font-medium uppercase text-neutral-800 lg:text-xl"
        >
          {{ album.title }}
        </h3>
        <p
          class="pt-4 pb-8 text-xs leading-6 tracking-widest text-neutral-600 lg:text-base"
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
import { onMounted, ref } from 'vue'
import useDatabase from '@/composables/UseDatabase'

export default {
  name: 'DiscPage',
  setup() {
    const { getAlbumsData } = useDatabase()
    const albumDatas = ref([])
    onMounted(() => {
      getAlbumsData('*').then((data) => {
        albumDatas.value = data
      })
    })

    return { albumDatas }
  },
}
</script>

<style scoped></style>
