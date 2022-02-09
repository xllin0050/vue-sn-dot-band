<template>
  <div class="mx-auto max-w-4xl">
    <ul class="font-redhat">
      <li
        v-for="gig in gigDatas"
        :key="gig.id"
        class="mb-2 flex items-center rounded-sm border p-3 shadow-sm"
      >
        <div class="">{{ gig.show_time }}</div>
        <div class="mx-4 flex grow items-center font-normal">
          <span
            class="iconify mx-1"
            data-icon="ic:outline-place"
            data-inline="false"
          ></span
          >{{ gig.venue }}
        </div>
        <div class="mx-4 flex w-36 items-center font-normal">
          <span
            class="iconify mx-1"
            data-icon="mdi:city-variant-outline"
            data-inline="false"
          ></span
          >{{ gig.city }}
        </div>
        <div class="mx-2 rounded-sm border p-1 px-2" @click="showModal(gig)">
          info
        </div>
        <div class="rounded-sm border p-1 px-2"><a herf="#">ticket</a></div>
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
import { supabase } from '@/supabase.js'
import { ref } from 'vue'
export default {
  name: 'GigsPage',
  setup(props) {
    const gigDatas = ref([])
    const gigInfoData = ref({})
    const modalVisible = ref(false)
    const showModal = (data) => {
      if (data) gigInfoData.value = data
      modalVisible.value = !modalVisible.value
    }

    async function getGigsData() {
      const today = new Date().toISOString()
      let { data: gigs, error } = await supabase
        .from('gigs')
        .select('*')
        .order('show_time', { ascending: false })
      gigDatas.value = gigs
    }
    getGigsData()

    return { gigDatas, gigInfoData, showModal, modalVisible }
  },
}
</script>

<style scoped></style>
