<template>
  <section
    class="flex w-full flex-col items-center justify-center py-16 text-center"
  >
    <h3
      class="font-redhat text-3xl font-medium uppercase tracking-widest text-gray-800 py-6"
    >
      next gig
    </h3>
    <div
      v-for="gig in props.nextGig"
      :key="gig.id"
      class="tilt block w-96 rounded-md border border-gray-300 bg-white p-6 shadow-sm"
    >
      <p class="font-redhat font-normal text-gray-600">
        {{ gig.show_time }}
      </p>
      <p class="font-redhat font-normal text-gray-600">
        <span>{{ gig.venue }}</span>
        <span>{{ gig.city }}</span>
      </p>
      <div class="font-redhat font-normal uppercase text-gray-600">info</div>
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
