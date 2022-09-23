<template>
  <SiteNavbar />
  <div class="min-h-screen max-w-full">
    <PageTitle>photos</PageTitle>
    <div
      v-if="loading"
      class="mt-12 text-center font-redhat text-xl font-semibold"
    >
      Now loading...
    </div>
    <div class="flex flex-col flex-wrap pt-12 md:flex-row md:pt-0 md:px-12">
      <TransitionGroup name="list">
        <div v-for="(url, i) in photoUrls" :key="i" class="w-full md:w-1/3">
          <img
            v-lazy="url"
            alt="photo"
            class="h-full w-full object-cover"
            @click="showImagesByComponent(url)"
          />
        </div>
      </TransitionGroup>
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
    const photoUrls = ref([])

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
        photoUrls.value = data
        loading.value = false
      })
    })

    return {
      singlePhotoUrl,
      photoUrls,
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
  background-color: #000000;
  opacity: 0.95;
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
