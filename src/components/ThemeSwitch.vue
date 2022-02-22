<template>
    <div
        class="md:right-18 fixed top-6 right-0 p-3 md:top-4"
        @click="themeSwitch"
    >
        <span
            class="iconify md:text-2xl"
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
