<template>
    <div
        class="mx-auto mb-8 flex w-3/4 flex-col items-center border-2 border-neutral-300 py-2 shadow-md lg:mb-16 lg:flex-row"
    >
        <div class="max-w-sm border-neutral-500">
            <img :src="props.product.picture" class="block w-full" />
        </div>
        <div class="flex grow flex-col items-center font-redhat">
            <!-- <SizeGuide v-if="props.product.size" :guide="props.product.size" /> -->
            <p
                v-if="props.product.available"
                class="text-sm font-medium uppercase text-neutral-600 dark:text-pink-400 lg:text-xl"
            >
                available
            </p>
            <p
                v-if="!props.product.available"
                class="text-sm font-medium uppercase text-red-200 dark:text-pink-200 lg:text-xl"
            >
                currently sold out
            </p>
        </div>
    </div>
</template>
<script>
export default {
    props: { product: Object },
    setup(props) {
        return { props }
    },
}
</script>
