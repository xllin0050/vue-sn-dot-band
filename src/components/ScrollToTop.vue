<template>
  <div
    ref="scrollTopButton"
    class="fixed bottom-5 z-10 block rounded-sm transition sm:hidden"
  >
    <div
      class="py-2 px-4 font-redhat font-medium uppercase text-neutral-900 dark:text-purple-400"
      @click="scrollToTop"
    >
      <span
        class="iconify rotate-180 text-2xl"
        data-icon="mdi:arrow-down-bold-circle-outline"
      ></span>
    </div>
    <div
      class="py-2 px-4 font-redhat font-medium uppercase text-neutral-900 dark:text-purple-400"
      @click="router.foroward"
    >
      <span
        class="iconify text-2xl"
        data-icon="mdi:arrow-right-bold-circle-outline"
      ></span>
    </div>
    <div
      class="py-2 px-4 font-redhat font-medium uppercase text-neutral-900 dark:text-purple-400"
      @click="router.back"
    >
      <span
        class="iconify text-2xl"
        data-icon="mdi:arrow-left-bold-circle-outline"
      ></span>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const scrollTopButton = ref(null)

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  scrollTopButton.value.classList.add('opacity-0')
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})

const handleScroll = () => {
  if (window.scrollY > 670) {
    scrollTopButton.value.classList.remove('opacity-0')
  } else {
    scrollTopButton.value.classList.add('opacity-0')
  }
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>
