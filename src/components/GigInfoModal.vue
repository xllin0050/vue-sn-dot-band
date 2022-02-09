<template>
  <div
    id="modal-backdrop"
    class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-60"
    @click.self="$emit('closeModal')"
  >
    <div
      id="modal"
      class="flex h-4/6 w-2/6 flex-col justify-between overflow-x-auto rounded-md bg-white"
    >
      <!-- Modal Header -->

      <!-- Modal Body -->
      {{ props }}

      <!-- Modal Footer -->
      <div @click="$emit('closeModal')">colse</div>
    </div>
  </div>
</template>
<script>
export default {
  props: { gigInfoData: Object },
  emits: ['closeModal'],
  setup(props) {
    return { props }
  },
}
</script>
<style scoped></style>
