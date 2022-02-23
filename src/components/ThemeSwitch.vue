<template>
    <div
        class="fixed top-0 right-0 hidden p-3 md:right-20 md:top-4 md:block"
        @click="themeSwitch"
    >
        <span
            class="iconify dark:text-purple-400 md:text-2xl"
            data-icon="ic:outline-dark-mode"
            data-inline="false"
        ></span>
    </div>
</template>
<script setup>
const themeSwitch = () => {
    let userTheme = localStorage.getItem('theme')
    if (userTheme === 'dark') {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', 'light')
    } else {
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', 'dark')
    }
}
</script>
