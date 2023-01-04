<template>
  <div
    class="card-shadow hover:card-shadow-elev flex h-full w-[280px] flex-col justify-start rounded-lg bg-white transition"
  >
    <div class="mx-auto w-full min-h-[280px] p-2">
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
      <div v-if="props.data.note" class="p-4 pt-8 w-[26ch] mx-auto">
        <span>

          Notice: {{ props.data.note }} 
        </span>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({ data: Object })
</script>
