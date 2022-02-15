<template>
  <section class="w-full py-8">
    <vueper-slides
      autoplay
      :bullets="false"
      arrows-outside
      class="mx-auto max-w-sm"
    >
      <vueper-slide
        v-for="(slide, i) in props.albums"
        :key="i"
        :title="slide.title"
        :content="slide.release"
        :image="slide.cover"
      />
    </vueper-slides>
  </section>
</template>
<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import { ref } from 'vue'
export default {
  components: { VueperSlides, VueperSlide },
  props: { albums: Array },
  setup(props) {
    return { props }
  },
}
</script>
