<template>
    <div class="w-full">
        <PageTitle></PageTitle>
        <div v-for="(product, i) in products" :key="i" class="pt-16">
            <ProductCard :product="product" />
        </div>
        <p
            class="mx-auto w-3/4 py-8 font-redhat text-xl font-medium leading-relaxed text-gray-600"
        >
            If you’d like to get a copy of our albums or merchants, please drop
            us a line at
            <a href="mailto:supernapkinsogood@gmail.com"
                >supernapkinsogood@gmail.com</a
            >.
        </p>
    </div>
</template>

<script>
export default {
    name: 'ProdPage',
    setup() {
        const products = [
            {
                item: 'lp',
                picture: new URL(
                    '../assets/images/products/lp-3rd-album.png',
                    import.meta.url
                ).href,
                available: true,
                note: '',
            },
            {
                item: 'clothes',
                picture: new URL(
                    '../assets/images/products/ts-3rd-album.png',
                    import.meta.url
                ).href,
                available: false,
                note: '',
                size: {
                    s: { chest: 47, length: 69 },
                    m: { chest: 52, length: 72 },
                    l: { chest: 57, length: 76 },
                    xl: { chest: 62, length: 80 },
                },
            },
        ]
        return { products }
    },
}
</script>

<style scoped></style>
