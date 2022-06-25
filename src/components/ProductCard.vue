<template>
  <div
    class="card-shadow hover:card-shadow-elev mx-auto mb-8 flex h-[300px] w-[300px] flex-col justify-between rounded-lg bg-neutral-50 py-2 transition lg:mb-16 lg:h-[500px] lg:w-[500px]"
  >
    <div
      class="mx-auto flex max-w-sm grow flex-col items-center justify-center border-neutral-500"
    >
      <img :src="props.product.picture" class="block w-4/5 lg:w-full" />
    </div>
    <div class="flex flex-col py-4 text-center font-redhat lg:py-8">
      <!-- <SizeGuide v-if="props.product.size" :guide="props.product.size" /> -->
      <p
        v-if="props.product.available"
        class="text-sm font-medium uppercase text-neutral-600 lg:text-xl"
      >
        available
      </p>
      <p
        v-if="!props.product.available"
        class="text-sm font-medium uppercase text-neutral-300 lg:text-xl"
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
