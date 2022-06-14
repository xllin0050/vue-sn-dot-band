<template>
  <div
    class="mx-auto flex max-w-4xl flex-col items-center justify-center py-16 text-center lg:py-36"
  >
    <h3
      class="pb-6 font-redhat text-xl font-medium uppercase tracking-widest text-neutral-800 lg:pb-20 lg:text-3xl"
    >
      next gig
    </h3>

    <ul class="w-[320px] font-redhat uppercase lg:w-[456px]">
      <li
        v-for="(gig, ind) in props.nextGig"
        :key="gig.id"
        class="card-shadow hover:card-shadow-elev flex flex-col items-center rounded-lg bg-neutral-50 p-4 text-sm lg:text-base"
        :class="{
          'mb-12': props.nextGig.length > 1 && ind !== props.nextGig.length - 1,
        }"
      >
        <a :href="gig.event_url" target="_blank" class="w-full">
          <div class="flex py-4">
            <span
              data-icon="ic:outline-dataset"
              class="iconify mr-4 ml-4 text-xl lg:ml-10"
            ></span>
            <div>{{ gig.show_time }}</div>
          </div>
          <div class="flex py-4">
            <span
              data-icon="ic:outline-house"
              class="iconify mr-4 ml-4 text-xl lg:ml-10"
            ></span>
            <div>
              {{ gig.venue }}
            </div>
          </div>
          <div class="flex py-4">
            <span
              class="iconify mr-4 ml-4 text-xl lg:ml-10"
              data-icon="ic:outline-place"
              data-inline="false"
            ></span>
            <div>{{ gig.city }}</div>
          </div>
        </a>
      </li>
      <li
        v-if="props.nextGig.length === 0"
        class="card-shadow flex flex-col items-center rounded-lg bg-neutral-50 p-4 text-sm lg:text-base"
      >
        <div class="p-16 text-xl uppercase tracking-widest">tba</div>
      </li>
    </ul>
  </div>
</template>
<script setup>
const props = defineProps({ nextGig: Array })
</script>
