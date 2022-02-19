<template>
    <div
        ref="scrollTopButton"
        class="fixed bottom-5 z-10 flex w-20 rounded justify-center bg-gray-300 opacity-80 transition sm:hidden"
    >
        <div
            class="py-2 px-5 font-redhat text-xl uppercase text-white font-medium"
            @click="scrollToTop"
        >
            top
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
const scrollTopButton = ref(null)

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    scrollTopButton.value.classList.add('invisible')
})

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
})

const handleScroll = () => {
    if (window.scrollY > 1100) {
        scrollTopButton.value.classList.remove('invisible')
    } else {
        scrollTopButton.value.classList.add('invisible')
    }
}

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>
