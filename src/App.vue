<template>
    <NoGlitchTitle />
    <AppNavbar :routes-list="routes" />
    <SiteNavbar :routes-list="routes" />
    <div class="mx-auto max-w-xs lg:max-w-4xl">
        <router-view />
    </div>
    <SiteFooter />
    <ScrollToTop />
</template>
<script setup>
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
</script>
<style>
body {
    position: relative;
}
</style>
