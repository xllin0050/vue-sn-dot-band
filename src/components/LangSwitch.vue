<template>
    <div
        class="absolute top-0 right-0 p-3 md:right-10 md:top-4 cursor-pointer"
        @click="langSwitch"
    >
        <span
            class="iconify dark:text-purple-400 md:text-2xl"
            data-icon="lucide:languages"
            data-inline="false"
        ></span>
    </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const langSwitch = () => {
    let userLang = localStorage.getItem('lang')
    userLang === 'en' ? (userLang = 'zh') : (userLang = 'en')
    localStorage.setItem('lang', userLang)
    router.go(0)
}
</script>
