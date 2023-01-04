<template>
  <div
    class="card-shadow hover:card-shadow-elev flex h-full w-[280px] flex-col justify-start rounded-lg bg-white transition"
  >
    <div class="mx-auto min-h-[280px] w-full p-2">
      <img :src="props.data.picture" alt="super napkin goods" />
    </div>
    <div class="flex flex-col px-2 text-center font-redhat text-xs font-medium">
      <div class="py-4 capitalize">
        {{ props.data.name }}
      </div>
      <div v-if="props.data.format" class="pb-4">
        Format: {{ props.data.format }}
      </div>
      <SizeGuide v-if="props.data.size" :guide="props.data.size" />
      <div v-if="props.data.note" class="px-2 py-8 text-left">
        <div class="pb-2">Notice:</div>
        <div v-for="(text, idx) in props.data.note" :key="idx" class="pb-2">{{ text }}</div>
        <div class="pt-4 text-gray-500">Sizes may rarely vary in the range of 5%</div>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({ data: Object })
</script>
