<template>
  <div class="min-h-screen w-full">
    <PageTitle>photos</PageTitle>
    <div class="columns-1 pt-4 lg:columns-2 lg:gap-x-0 lg:pt-0">
      <div
        v-for="(url, i) in photoUrls"
        class="w-full"
        :key="`c_${i}`"
        @click="showImagesByComponent(i)"
      >
        <img v-lazy="url" class="p-1 shadow-sm" />
      </div>
    </div>
    <ImgViewr
      :visible="visible"
      :urls="photoUrls"
      :initial-index="index"
      @close="closeHandle"
      @switch="changeHandle"
      @show="showHandle"
    />
  </div>
</template>
<script>
import { onMounted, ref } from 'vue'
import useStorage from '@/composables/UseStorage'
import ImgViewr from 'vue-img-viewr'
import 'vue-img-viewr/styles/index.css'

export default {
  name: 'PhotosPage',
  components: { ImgViewr },
  setup() {
    const { getPhotoUrls, photoUrls } = useStorage()
    const index = ref(0)
    const visible = ref(false)
    const showImagesByComponent = (i) => {
      visible.value = true
      index.value = i
    }
    const changeHandle = (i) => {
      console.log(`current image index: ${i}`)
    }
    const closeHandle = () => {
      console.log('closed component')
      visible.value = false
    }
    const showHandle = (isShow) => {
      console.log(`component is show: ${isShow}`)
    }
    onMounted(() => {
      getPhotoUrls()
    })

    return {
      photoUrls,
      index,
      visible,
      showImagesByComponent,
      closeHandle,
      changeHandle,
      showHandle,
    }
  },
}
</script>
<style>
.img-viewr__icon.icon__download-image {
  display: none !important;
}
</style>
