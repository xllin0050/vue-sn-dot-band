<template>
  <div
    class="card-shadow hover:card-shadow-elev flex h-full w-[280px] flex-col justify-between rounded-lg bg-white transition"
  >
    <div class="mx-auto w-full grow p-2">
      <img :src="props.data.picture" alt="super napkin goods" />
    </div>
    <div class="flex flex-col text-center font-redhat text-xs font-medium px-2">
      <div class="py-4 capitalize">
        {{ props.data.name }}
      </div>
      <div v-if="props.data.format" class="pb-4">
        Format: {{ props.data.format }}
      </div>
      <SizeGuide v-if="props.data.size" :guide="props.data.size" />
      <div v-if="props.data.note" class="p-4 text-left pt-12">
        Notice: {{ props.data.note }} and sizes may rarely vary in the range of 5%.
      </div>
      <!-- <p
        v-if="props.data.available"
        class="text-sm font-medium uppercase text-neutral-600 lg:text-xl"
      >
        available
      </p>
      <p
        v-else
        class="text-sm font-medium uppercase text-neutral-300 lg:text-xl"
      >
        currently sold out
      </p> -->
    </div>
  </div>
</template>
<script setup>
const props = defineProps({ data: Object })
</script>
