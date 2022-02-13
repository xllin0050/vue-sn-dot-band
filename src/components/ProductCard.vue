<template>
  <div class="mb-16 flex items-center border-2 border-gray-400 py-2 shadow-md">
    <div class="max-w-lg border-gray-500">
      <img :src="props.product.picture" class="block w-full" />
    </div>
    <div class="grow font-redhat flex flex-col items-center">
      <!-- <SizeGuide v-if="props.product.size" :guide="props.product.size" /> -->
      <p v-if="props.product.available" class="text-xl font-medium uppercase text-gray-600">
        available
      </p>
      <p v-else class="text-xl font-medium uppercase" :class="props.product.available?'text-gray-600':'text-gray-400'">not available</p>
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
