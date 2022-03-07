<template>
    <div
        class="absolute top-0 right-0 cursor-pointer p-3 md:right-10 md:top-4"
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
const emit = defineEmits(['changeRouter'])
const langSwitch = () => {
    let userLang = localStorage.getItem('lang')
    userLang === 'en' ? (userLang = 'zh') : (userLang = 'en')
    localStorage.setItem('lang', userLang)
    emit('changeRouter')
}
</script>
