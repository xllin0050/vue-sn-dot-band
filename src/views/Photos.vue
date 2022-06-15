<template>
  <div class="min-h-screen w-full">
    <PageTitle>photos</PageTitle>
    <div class="flex flex-col flex-wrap pt-8 md:flex-row md:pt-0">
      <div class="max-w-1/2 basis-1/2">
        <img
          v-for="(url, i) in photoUrlsA"
          :key="i"
          v-lazy="url"
          alt="photo"
          class="w-full p-1"
          @click="showImagesByComponent(url)"
        />
      </div>
      <div class="max-w-1/2 basis-1/2">
        <img
          v-for="(url, i) in photoUrlsB"
          :key="i"
          v-lazy="url"
          alt="photo"
          class="w-full p-1"
          @click="showImagesByComponent(url)"
        />
      </div>
    </div>
    <ImgViewr :visible="visible" :urls="singlePhotoUrl" @close="closeHandler" />
  </div>
</template>
<script>
import { onMounted, ref, computed, onUpdated } from 'vue'
import useStorage from '@/composables/UseStorage'
import ImgViewr from 'vue-img-viewr'
import 'vue-img-viewr/styles/index.css'

export default {
  name: 'PhotosPage',
  components: { ImgViewr },
  setup() {
    const { getPhotoUrls } = useStorage()
    const visible = ref(false)
    const singlePhotoUrl = ref([])
    const photoUrlsA = ref([])
    const photoUrlsB = ref([])

    const showImagesByComponent = (url) => {
      singlePhotoUrl.value = [url]
      visible.value = true
    }

    const closeHandler = () => {
      console.log('closed component')
      visible.value = false
      singlePhotoUrl.value = []
    }

    onMounted(() => {
      getPhotoUrls().then((data) => {
        const half = Math.ceil(data.length / 2)
        photoUrlsA.value = data.slice(0, half)
        photoUrlsB.value = data.slice(half)
      })
    })

    return {
      singlePhotoUrl,
      photoUrlsA,
      photoUrlsB,
      visible,
      showImagesByComponent,
      closeHandler,
    }
  },
}
</script>
<style>
.img-viewr__icon.icon__download-image {
  display: none !important;
}
</style>
