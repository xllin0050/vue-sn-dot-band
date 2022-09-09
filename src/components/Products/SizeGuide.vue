<template>
  <div class="py-2">Size Guide (CM)</div>
  <div class="flex justify-center">
    <ul>
      <li v-for="(size, name) in props.guide" :key="name" class="flex py-2">
        <div class="w-6 uppercase">{{ name }}</div>
        <div v-for="(num, part) in size" :key="part" class="flex px-2">
          {{ num }}
        </div>
      </li>
    </ul>
  </div>
</template>
<script setup>
const props = defineProps({ guide: Object })
</script>
