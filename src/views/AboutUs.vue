<template>
    <div class="w-full">
        <PageTitle>about us</PageTitle>
        <article
            class="mx-auto max-w-2xl break-all pt-2 text-left font-redhat text-sm font-normal leading-relaxed text-neutral-600 dark:text-neutral-400 sm:break-words sm:pt-0 sm:text-justify sm:text-base"
        >
            <p class="paragraph">
                {{ $t('ABOUT.paragraph01') }}
            </p>
        </article>
        <div class="mx-auto max-w-2xl pt-12">
            <img :src="imgUrl" alt="About Us" class="block w-full" />
        </div>
    </div>
</template>
<script>
export default {
    name: 'AboutPage',
    setup() {
        const imgUrl = new URL('../assets/images/about-us.jpg', import.meta.url)
            .href
        return { imgUrl }
    },
}
</script>
<style scoped>
.paragraph {
    @apply py-4;
}
</style>
