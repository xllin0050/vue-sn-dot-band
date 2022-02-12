<template>
    <NoGlitchTitle />
    <SiteNavbar />
    <div class="mx-auto max-w-4xl">
        <router-view />
    </div>
    <SiteFooter />
</template>
<script>
export default {
    setup() {
        return {}
    },
}
</script>
