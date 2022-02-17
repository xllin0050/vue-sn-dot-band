<template>
    <div
        ref="scrollTopButton"
        class="fixed bottom-5 z-10 flex w-full justify-center bg-gray-400 opacity-60 transition sm:hidden"
    >
        <div
            class="py-3 px-8 font-redhat text-xl uppercase text-white transition"
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
