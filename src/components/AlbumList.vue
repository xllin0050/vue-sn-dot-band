<template>
  <section class="mx-auto w-2/3 py-8">
    <h3
      class="mb-4 text-center font-redhat text-3xl font-medium uppercase tracking-widest text-gray-800"
    >
      albums
    </h3>
    <div
      v-for="album in props.albums"
      :key="album.created_at"
      class="mx-auto w-full py-6"
    >
      <h5
        class="my-6 text-center font-redhat text-xl font-normal uppercase text-gray-800"
      >
        {{ album.title }}
      </h5>
      <router-link :to="`/album/${album.release}/${album.url}`">
        <div class="mx-auto aspect-square w-1/3">
          <img
            :src="album.cover"
            :alt="album.title"
            class="mx-auto aspect-square object-cover"
          />
        </div>
      </router-link>
    </div>
  </section>
</template>
<script>
export default {
  props: { albums: Array },
  setup(props) {
    return { props }
  },
}
</script>
