<template>
  <div class="min-h-screen w-full pb-16">
    <h2 class="pt-8 font-redhat text-xl font-medium text-gray-600 uppercase">
      videos
    </h2>
    <div v-for="(url, i) in urls" :key="i" class="py-20">
      <div class="mx-auto w-[590px] border-2 border-gray-400 py-4 shadow-md">
        <iframe
          width="560"
          height="315"
          :src="url"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          class="mx-auto"
        ></iframe>
      </div>
    </div>
  </div>
</template>
<script>
const urls = [
  'https://www.youtube.com/embed/HhBR0t9zyAY',
  'https://www.youtube.com/embed/mfFnPvhy-GE',
  'https://www.youtube.com/embed/EdBtZZiCC38',
  'https://www.youtube.com/embed/uoLYfKt-l38',
]
export default {
  name: 'VideosPage',
  setup(props) {
    return { urls }
  },
}
</script>
