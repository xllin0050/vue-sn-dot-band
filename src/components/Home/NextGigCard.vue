<template>
  <div
    class="mx-auto flex max-w-4xl flex-col items-center justify-center py-16 pt-10 text-center lg:py-36"
  >
    <h3
      class="pb-6 font-redhat text-xl font-medium uppercase tracking-widest text-neutral-800 lg:pb-20 lg:text-3xl"
    >
      next gig
    </h3>

    <div class="w-[320px] font-redhat uppercase lg:w-[456px]">
      <div
        v-if="Object.keys(props.nextGig).length"
        class="card-shadow hover:card-shadow-elev flex flex-col items-center rounded-lg bg-neutral-50 p-4 text-sm transition lg:text-base"
      >
        <a :href="props.nextGig.event_url" target="_blank" class="-ml-2">
          <div class="flex py-4">
            <span data-icon="ic:outline-dataset" class="iconify text-xl"></span>
            <div class="pl-2">{{ props.nextGig.show_time }}</div>
          </div>
          <div class="flex py-4">
            <span data-icon="ic:outline-house" class="iconify text-xl"></span>
            <div class="pl-2">
              {{ props.nextGig.venue }}
            </div>
          </div>
          <div class="flex py-4">
            <span
              class="iconify text-xl"
              data-icon="ic:outline-place"
              data-inline="false"
            ></span>
            <div class="pl-2">{{ props.nextGig.city }}</div>
          </div>
        </a>
      </div>
      <div
        v-else
        class="card-shadow flex flex-col items-center rounded-lg bg-neutral-50 p-4 text-sm lg:text-base"
      >
        <div class="p-16 text-xl uppercase tracking-widest">tba</div>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({ nextGig: Object })
</script>
