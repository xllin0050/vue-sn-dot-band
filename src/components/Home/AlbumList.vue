<template>
  <div class="relative pt-16 lg:pt-24">
    <h3
      class="pb-4 text-center font-redhat text-xl font-medium uppercase tracking-widest text-neutral-800 lg:pb-20 lg:text-3xl"
    >
      albums
    </h3>
    <div
      v-for="album in props.albums"
      :key="album.created_at"
      class="relative pb-10 lg:pb-28"
    >
      <transition name="fade">
        <div
          v-show="album.id === saveAlbumID"
          class="fixed top-0 z-10 flex h-screen w-full items-center justify-center bg-purple-900 text-emerald-300"
        >
          <div
            class="w-full break-all font-redhat text-[18vw] uppercase leading-[14vw]"
          >
            <span class="">
              {{ album.title }}
            </span>
          </div>
        </div>
      </transition>
      <div
        class="relative left-1/2 max-w-[75%] -translate-x-1/2 lg:max-w-sm"
        :class="{ 'z-20': album.id === saveAlbumID }"
        @mouseover="mouseIntoAlbum(album.id)"
        @mouseleave="mouseIntoAlbum(0)"
      >
        <router-link :to="`/album/${album.release}/${album.url}`">
          <img
            :src="album.cover"
            :alt="album.title"
            class="mx-auto block w-full object-cover"
            :class="{ 'card-shadow': album.id !== saveAlbumID }"
          />
        </router-link>
      </div>
      <h5
        class="block py-4 text-center font-redhat text-sm font-medium uppercase text-neutral-800 lg:hidden"
      >
        <span class="rounded-lg p-6 drop-shadow">
          {{ album.title }}
        </span>
      </h5>
    </div>
  </div>
</template>
<script setup>
import { ref, onBeforeUnmount } from 'vue'
const props = defineProps({ albums: Array })

const saveAlbumID = ref(null)

const mouseIntoAlbum = (id) => {
  // setTimeout(() => {
  //   }, 200)
  saveAlbumID.value = id
  document.body.style.overflow = 'hidden'
  if (!id) document.body.style.overflow = 'auto'
}

onBeforeUnmount(() => {
  document.body.style.overflow = 'auto'
})
</script>
<style scoped>
.hover-enter-active,
.hover-leave-active {
  transition: opacity 400ms ease-in-out;
}
.hover-enter,
.hover-leave-to {
  opacity: 0;
}
.hover-bg {
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 400ms linear;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
