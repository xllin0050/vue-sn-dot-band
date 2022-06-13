<template>
  <div
    id="modal-backdrop"
    class="fixed inset-0 flex items-center justify-center bg-white"
    @click.self="$emit('closeModal')"
  >
    <div id="modal" class="w-full p-0 font-redhat text-lg uppercase lg:w-3/4">
      <div class="absolute top-10 right-5 lg:right-16">
        <div
          class="card-shadow hover:card-shadow-elev rounded-full bg-neutral-50 p-4 hover:bg-neutral-100"
          @click="$emit('closeModal')"
        >
          <span
            class="iconify text-xl"
            data-icon="ion:close-round"
            data-inline="false"
          ></span>
        </div>
      </div>
      <div class="resp-container">
        <iframe
          :src="`https://www.youtube-nocookie.com/embed/${props.data.id}?controls=0`"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          class="responsive-iframe"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
const props = defineProps({ data: Object })
const emit = defineEmits(['closeModal'])

onMounted(() => {
  document.body.style.overflow = 'hidden'
})
onBeforeUnmount(() => {
  document.body.style.overflow = 'auto'
})
</script>
<style scoped>
.resp-container {
  position: relative;
  overflow: hidden;
  padding-top: 56.25%;
}
.responsive-iframe {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
}
</style>
