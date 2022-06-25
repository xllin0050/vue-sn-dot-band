<template>
  <button @click="langSwitch">
    <span
      class="iconify md:text-2xl"
      data-icon="fa6-solid:language"
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
