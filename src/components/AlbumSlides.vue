<template>
  <section class="w-full py-8">
    <vueper-slides
      autoplay
      duration="5000"
      :bullets="false"
      arrows-outside
      class="mx-auto max-w-sm"
    >
      <vueper-slide
        v-for="(slide, i) in slides"
        :key="i"
        :title="slide.title"
        :content="slide.content"
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
  props: ['albums'],
  setup(props) {
    // console.log('as:::', props.albums)
    const slides = [
      {
        title: 'Slide #1',
        content: 'Slide 1 content.',
      },
      {
        title: 'Slide #2',
        content: 'Slide 2 content.',
      },
      {
        title: 'Slide #3',
        content: 'Slide 3 content.',
      },
    ]
    return { slides }
  },
}
</script>
