<template>
  <div
    id="modal-backdrop"
    class="fixed inset-0 flex w-full items-center justify-center bg-neutral-900 bg-opacity-80"
    @click.self="$emit('closeModal')"
  >
    <div
      id="modal"
      class="relative flex w-3/4 flex-col  justify-between rounded-md bg-neutral-50 p-4 font-redhat uppercase  md:w-1/3 md:p-12"
    >
      <div
        class="absolute top-2 right-2 rounded bg-neutral-50 p-2 text-base shadow-lg hover:bg-neutral-100"
        @click="$emit('closeModal')"
      >
        <span
          class="iconify"
          data-icon="ion:close-round"
          data-inline="false"
        ></span>
      </div>
      <div class="w-full">
        <img
          :src="props.gigInfoData.banner"
          class="mx-auto w-full"
          @load="show = false"
        />
        <div v-if="show" class="h-[300px] w-full text-center pt-8">
          wait for poster loading or nothing at all
        </div>
      </div>
      <div class="flex flex-col p-4 text-sm lg:text-base">
        <p class="pt-6">{{ props.gigInfoData.show_time }}</p>
        <p class="pt-6">{{ props.gigInfoData.venue }}</p>
        <p class="pt-6 text-xs text-gray-500 normal-case">{{ props.gigInfoData.note }}</p>
      </div>
      <div class="pt-8">
        <div
          class="rounded bg-neutral-100 p-2 text-base shadow hover:bg-neutral-100"
        >
          <a
            :href="props.gigInfoData.event_url"
            target="_blank"
            class="flex justify-center items-center"
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
