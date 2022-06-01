<template>
  <button
    class="absolute top-0 right-0 cursor-pointer p-3 md:right-16 md:top-4"
    @click="langSwitch"
  >
    <span
      class="iconify dark:text-purple-400 md:text-2xl"
      data-icon="lucide:languages"
      data-inline="false"
    ></span>
  </button>
</template>
<script setup>
import { computed } from 'vue'
import { storeUserLang } from '@/stores/lang'

const store = storeUserLang()
const userLang = computed(() => store.lang)

const langSwitch = () => {
  store.$patch((state) => {
    if (userLang.value === 'zh') {
      state.lang = 'en'
      return
    }
    state.lang = 'zh'
  })
}
</script>
