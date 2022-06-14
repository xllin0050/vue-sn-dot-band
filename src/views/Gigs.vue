<template>
  <div class="min-h-screen w-full pb-16">
    <PageTitle>gigs</PageTitle>
    <ul class="pt-6 font-redhat md:pt-0">
      <li
        v-for="gig in gigDatas"
        :key="gig.id"
        class="mb-6 flex flex-col items-center rounded-md border p-2 uppercase shadow lg:flex-row lg:p-3"
        :class="{
          'border-neutral-700 shadow-md dark:border-2 lg:py-6': gig.coming,
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
          class="my-1 flex items-center text-sm font-normal text-neutral-800 lg:my-0 lg:mx-3 lg:w-20 lg:text-base"
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
            class="mx-2 cursor-pointer rounded-md border p-1 px-3 text-sm hover:border-neutral-600 lg:text-base"
            :class="{ 'border-neutral-400 ': gig.coming }"
            @click="showModal(gig)"
          >
            info
          </div>
          <div
            v-show="gig.coming"
            class="rounded-md border p-1 px-3 text-sm lg:text-base"
            :class="{
              ' border-neutral-400 hover:border-neutral-600 ': gig.coming,
            }"
          >
            <a :href="gig.event_url" target="_blank">ticket</a>
          </div>
        </div>
      </li>
    </ul>
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

<style scoped></style>
