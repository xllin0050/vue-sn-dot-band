<template>
    <div
        class="mb-8 w-3/4 mx-auto flex flex-col items-center border-2 border-gray-300 py-2 shadow-md lg:mb-16 lg:flex-row"
    >
        <div class="max-w-sm border-gray-500">
            <img :src="props.product.picture" class="block w-full" />
        </div>
        <div class="flex grow flex-col items-center font-redhat">
            <!-- <SizeGuide v-if="props.product.size" :guide="props.product.size" /> -->
            <p
                v-if="props.product.available"
                class="text-sm font-medium uppercase text-gray-600 lg:text-xl"
            >
                available
            </p>
            <p
                v-if="!props.product.available"
                class="text-sm font-medium uppercase lg:text-xl"
                :class="
                    props.product.available ? 'text-gray-600' : 'text-red-200'
                "
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
