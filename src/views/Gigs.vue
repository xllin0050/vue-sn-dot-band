<template>
  <div class="min-h-screen w-full pb-16">
    <PageTitle>gigs</PageTitle>
    <TransitionGroup name="list" tag="ul" class="pt-6 font-redhat md:pt-0">
      <li
        v-for="gig in gigDatas"
        :key="gig.id"
        class="mb-6 flex flex-col items-center rounded-md p-2 py-8 uppercase shadow lg:flex-row lg:p-3"
        :class="{
          'card-shadow bg-neutral-50 lg:py-6': gig.coming,
        }"
      >
        <div class="">{{ gig.show_time }}</div>
        <div
          class="my-2 flex items-center text-sm font-normal text-neutral-800 lg:my-0 lg:grow lg:text-base"
        >
          <span
            class="iconify mx-1"
            data-icon="ic:outline-place"
            data-inline="false"
          ></span
          >{{ gig.venue }}
        </div>
        <div
          class="my-1 flex items-center text-sm font-normal text-neutral-800 lg:my-0 lg:mx-3 lg:w-24"
        >
          <span
            class="iconify mx-1"
            data-icon="mdi:city-variant-outline"
            data-inline="false"
          ></span
          >{{ gig.city }}
        </div>
        <div class="flex w-auto pt-2 lg:w-[160px] lg:pt-0">
          <div
            class="mx-2 cursor-pointer rounded-md p-1 px-3 font-extralight text-sm underline hover:underline-offset-4 lg:text-base"
            @click="showModal(gig)"
          >
            info
          </div>
          <div
            v-show="gig.coming"
            class="rounded-md p-1 px-3 font-extralight text-sm underline hover:underline-offset-4 lg:text-base"
          >
            <a :href="gig.event_url" target="_blank">ticket</a>
          </div>
        </div>
      </li>
    </TransitionGroup>
    <GigInfoModal
      v-if="modalVisible"
      :gig-info-data="gigInfoData"
      @close-modal="showModal"
    />
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import useDatabase from '@/composables/UseDatabase'

export default {
  name: 'GigsPage',
  setup() {
    const { gigDatas, getGigsData } = useDatabase()
    onMounted(() => {
      getGigsData()
    })
    const gigInfoData = ref({})
    const modalVisible = ref(false)
    const showModal = (data) => {
      if (data) gigInfoData.value = data
      modalVisible.value = !modalVisible.value
    }

    return { gigDatas, gigInfoData, showModal, modalVisible }
  },
}
</script>

<style>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
  transition-property: opacity, transform;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
