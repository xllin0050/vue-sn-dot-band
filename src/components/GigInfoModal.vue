<template>
  <div
    id="modal-backdrop"
    class="fixed inset-0 flex items-center justify-center bg-neutral-900 bg-opacity-80"
    @click.self="$emit('closeModal')"
  >
    <div
      id="modal"
      class="flex w-[300px] flex-col items-center justify-between rounded-md border bg-neutral-50 p-4 font-redhat uppercase lg:w-[500px]"
    >
      <div class="w-full">
        <img
          :src="props.gigInfoData.banner"
          class="mx-auto w-full"
          @load="show = false"
        />
        <div v-if="show" class="h-[300px] w-full text-center">wait for poster loading or nothing at all</div>
      </div>
      <div class="flex p-4 text-base">
        <p class="p-1">{{ props.gigInfoData.show_time }}</p>
        <p class="p-1">{{ props.gigInfoData.venue }}</p>
        <!-- <p class="p-1">{{ props.gigInfoData.city }}</p> -->
      </div>
      <div class="flex">
        <div
          class="mx-4 flex cursor-default items-center rounded bg-neutral-50 p-2 text-base shadow hover:bg-neutral-100"
          @click="$emit('closeModal')"
        >
          <span class="mr-1">colse</span>
          <span
            class="iconify"
            data-icon="ion:close-round"
            data-inline="false"
          ></span>
        </div>
        <div
          class="mx-4 rounded bg-neutral-50 p-2 text-base shadow hover:bg-neutral-100"
        >
          <a
            :href="props.gigInfoData.event_url"
            target="_blank"
            class="flex items-center"
            >info
            <span
              class="iconify ml-1"
              data-icon="ion:md-open"
              data-inline="false"
            ></span
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'

const props = defineProps({ gigInfoData: Object })
const emits = defineEmits(['closeModal'])
onMounted(() => {
  document.body.style.overflow = 'hidden'
})
onBeforeUnmount(() => {
  document.body.style.overflow = 'auto'
})
const show = ref(true)
</script>
<style scoped></style>
