<template>
  <section class="mx-auto w-full py-16">
    <h3
      class="text-center font-redhat text-3xl font-medium uppercase tracking-widest text-gray-800 py-4"
    >
      albums
    </h3>
    <div
      v-for="album in props.albums"
      :key="album.created_at"
      class="mx-auto w-full pb-6"
    >
      <h5
        class="text-center font-redhat text-xl font-normal uppercase text-gray-800 py-3"
      >
        {{ album.title }}
      </h5>
      <router-link :to="`/album/${album.release}/${album.url}`">
        <div class="mx-auto aspect-square max-w-sm">
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
