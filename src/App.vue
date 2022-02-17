<template>
    <NoGlitchTitle />
    <AppNavbar :routes-list="routes" />
    <SiteNavbar :routes-list="routes" />
    <div class="mx-auto max-w-xs lg:max-w-4xl">
        <router-view />
    </div>
    <SiteFooter />
</template>
<script>
export default {
    setup() {
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
        return { routes }
    },
}
</script>
<style>
body {
    position: relative;
}
</style>
