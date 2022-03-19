<template>
    <div class="min-h-screen w-full dark:bg-neutral-900 dark:text-purple-200">
        <ThemeSwitch />
        <LangSwitch
            v-if="route.name === 'About Us'"
            @change-router="router.go(0)"
        />
        <NoGlitchTitle />
        <AppNavbar :routes-list="routes" />
        <SiteNavbar :routes-list="routes" />
        <div class="mx-auto max-w-xs lg:max-w-4xl">
            <!-- <router-view /> -->
            <router-view v-slot="{ Component }">
                <transition name="fade" mode="out-in">
                    <component :is="Component" />
                </transition>
            </router-view>
        </div>
        <SiteFooter />
        <ScrollToTop />
    </div>
</template>
<script setup>
import { onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
const routes = [
    'Home',
    'About Us',
    'Discography',
    'Gigs',
    'Videos',
    'Photos',
    'Products',
]

onMounted(() => {
    localStorage.setItem('theme', 'light')

    if (!localStorage.getItem('lang')) {
        const zh = ['zh-tw', 'zh-cn', 'zh-hk']
        if (
            zh.includes(
                (
                    window.navigator.language ||
                    window.navigator.browserLanguage
                ).toLowerCase()
            )
        ) {
            localStorage.setItem('lang', 'zh')
        } else {
            localStorage.setItem('lang', 'en')
        }
    }
})
</script>

<style>
body {
    position: relative;
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
