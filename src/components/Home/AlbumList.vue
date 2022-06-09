<template>
  <div class="mx-auto max-w-4xl pt-16 lg:pt-24">
    <h3
      class="pb-4 text-center font-redhat text-xl font-medium uppercase tracking-widest text-neutral-800 dark:text-purple-200 lg:pb-20 lg:text-3xl"
    >
      albums
    </h3>
    <div
      v-for="album in props.albums"
      :key="album.created_at"
      class="pb-10 lg:pb-28"
    >
      <div class="mx-auto max-w-[75%] lg:max-w-sm">
        <router-link :to="`/album/${album.release}/${album.url}`">
          <img
            :src="album.cover"
            :alt="album.title"
            class="card-shadow hover:card-shadow-elev mx-auto block aspect-square w-full object-cover"
          />
        </router-link>
      </div>
      <h5
        class="py-4 text-center font-redhat text-sm font-medium uppercase text-neutral-800 dark:text-purple-200 lg:py-12 lg:text-xl lg:font-normal"
      >
        <span class="rounded-lg p-6 drop-shadow">
          {{ album.title }}
        </span>
      </h5>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({ albums: Array })
</script>
