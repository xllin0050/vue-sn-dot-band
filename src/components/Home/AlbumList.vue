<template>
  <div class="relative pt-16 lg:pt-24">
    <h3
      class="pb-4 text-center font-redhat text-xl font-medium uppercase tracking-widest text-neutral-800 lg:pb-20 lg:text-3xl"
    >
      albums
    </h3>
    <div
      v-for="album in props.albums"
      :key="album.id"
      class="relative pb-10 lg:pb-28"
    >
      <div class="mx-auto max-w-[75%] lg:max-w-sm">
        <router-link
          :to="{
            path: `/album/${album.release}/${album.url}`,
            hash: width > 1024 ? '#banner' : '',
          }"
        >
          <img
            :src="album.cover"
            :alt="album.title"
            class="card-shadow mx-auto block w-full object-cover"
          />
        </router-link>
      </div>
      <h5
        class="py-4 text-center font-redhat text-sm font-medium uppercase text-neutral-800 lg:text-base"
      >
        <span class="rounded-lg p-6 drop-shadow">
          {{ album.title }}
        </span>
      </h5>
    </div>
  </div>
</template>
<script setup>
import { useWindowSize } from '@vueuse/core'
const props = defineProps({ albums: Array })
const { width } = useWindowSize()
</script>
