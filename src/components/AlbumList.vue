<template>
  <div class="mx-auto max-w-4xl py-16">
    <h3
      class="text-center font-redhat text-3xl font-medium uppercase tracking-widest text-gray-800 pb-4"
    >
      albums
    </h3>
    <div v-for="album in props.albums" :key="album.created_at" class="pb-12">
      <h5
        class="py-3 text-center font-redhat text-xl font-normal uppercase text-gray-800"
      >
        {{ album.title }}
      </h5>
      <div class="max-w-sm mx-auto">
        <router-link :to="`/album/${album.release}/${album.url}`">
          <img
            :src="album.cover"
            :alt="album.title"
            class="mx-auto block aspect-square w-full object-cover shadow-xl"
          />
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: { albums: Array },
  setup(props) {
    return { props }
  },
}
</script>
