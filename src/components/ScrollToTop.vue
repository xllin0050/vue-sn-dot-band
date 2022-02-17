<template>
    <div
        ref="scrollTopButton"
        class="sticky bottom-0 flex w-full justify-end transition"
    >
        <div
            class="p-2 px-4 text-gray-400 transition hover:text-gray-600"
            @click="scrollToTop"
        >
            <span
                class="iconify rotate-180 text-2xl"
                data-icon="mdi:arrow-down-thin"
                data-inline="false"
            ></span>
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
    if (window.scrollY > 500) {
        scrollTopButton.value.classList.remove('invisible')
    } else {
        scrollTopButton.value.classList.add('invisible')
    }
}

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>
