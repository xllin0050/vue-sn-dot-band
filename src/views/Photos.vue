<template>
  <SiteNavbar />

  <div class="min-h-screen mx-auto max-w-xs lg:max-w-4xl">
    <PageTitle>photos</PageTitle>
    <div v-if="loading" class="text-center">Now loading...</div>
    <div class="flex flex-col flex-wrap pt-8 md:flex-row md:pt-0">
      <div class="max-w-1/2 basis-1/2">
        <TransitionGroup name="list">
          <img
            v-for="(url, i) in photoUrlsA"
            :key="i"
            v-lazy="url"
            alt="photo"
            class="w-full p-1"
            @click="showImagesByComponent(url)"
          />
        </TransitionGroup>
      </div>
      <div class="max-w-1/2 basis-1/2">
        <TransitionGroup name="list">
          <img
            v-for="(url, i) in photoUrlsB"
            :key="i"
            v-lazy="url"
            alt="photo"
            class="w-full p-1"
            @click="showImagesByComponent(url)"
          />
        </TransitionGroup>
      </div>
    </div>
    <ImgViewr :visible="visible" :urls="singlePhotoUrl" @close="closeHandler" />
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
    const { getPhotoUrls } = useStorage()
    const loading = ref(false)
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
      loading.value = true
      getPhotoUrls().then((data) => {
        const half = Math.ceil(data.length / 2)
        photoUrlsA.value = data.slice(0, half)
        photoUrlsB.value = data.slice(half)
        loading.value = false
      })
    })

    return {
      singlePhotoUrl,
      photoUrlsA,
      photoUrlsB,
      visible,
      loading,
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
.img-viewr__mask {
  background-color: #fafafa;
  opacity: 0.98;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
  transition-property: opacity, transform;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
