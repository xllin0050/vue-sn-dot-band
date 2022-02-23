<template>
    <!-- <p class="text-2xl">{{ $t('GENERAL.OK') }}</p> -->
    <div class="w-full min-h-screen dark:bg-neutral-900 dark:text-purple-200">
        <ThemeSwitch />
        <LangSwitch />
        <NoGlitchTitle />
        <AppNavbar :routes-list="routes" />
        <SiteNavbar :routes-list="routes" />
        <div class="mx-auto max-w-xs lg:max-w-4xl">
            <router-view />
        </div>
        <SiteFooter />
        <ScrollToTop />
    </div>
</template>
<script setup>
import { onMounted } from 'vue'
const routes = [
    'Home',
    'About Us',
    'Discography',
    'Gigs',
    'Videos',
    'Photos',
    'Products',
    'GigUpdate',
]
onMounted(() => {
    localStorage.setItem('theme', 'light')
})
</script>

<style>
body {
    position: relative;
}
</style>
