<template>
  <section class="flex w-full flex-col items-center justify-center py-16">
    <h3
      class="mb-6 text-center font-redhat text-3xl font-medium uppercase tracking-widest text-gray-800"
    >
      next gig
    </h3>
    <div
      class="tilt block max-w-xl rounded-lg border border-gray-200 bg-white p-6 shadow-md hover:bg-gray-100"
    >
      <p class="font-redhat font-normal text-gray-600">
        {{ props }}
      </p>
    </div>
  </section>
</template>
<script>
export default {
  props: { nextGig: Array },

  setup(props) {
    return { props }
  },
}
</script>
