<template>
    <div class="w-full min-h-screen">
        <ul class="font-redhat">
            <li
                v-for="gig in gigDatas"
                :key="gig.id"
                class="mb-2 flex items-center rounded-md border p-3 uppercase shadow-sm"
                :class="gig.coming ? 'border-gray-700 py-6 shadow-md' : ''"
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
                <div
                    class="mx-2 cursor-pointer rounded-md border p-1 px-2 hover:border-gray-600"
                    :class="gig.coming ? 'border-gray-400 ' : ''"
                    @click="showModal(gig)"
                >
                    info
                </div>
                <div
                    v-show="gig.coming"
                    class="rounded-md border p-1 px-2"
                    :class="
                        gig.coming
                            ? 'cursor-pointer border-gray-400 hover:border-gray-600 '
                            : ''
                    "
                >
                    <a :href="gig.event_url" target="_blank">ticket</a>
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
            const today = new Date()
            const { data: gigs, error } = await supabase
                .from('gigs')
                .select('*')
                .order('show_time', { ascending: false })
            if (gigs.length)
                gigDatas.value = gigs.map((gig) => {
                    const gigDate = new Date(gig.show_time)
                    gig.coming = gigDate >= today
                    return gig
                })
        }
        getGigsData()

        return { gigDatas, gigInfoData, showModal, modalVisible }
    },
}
</script>

<style scoped></style>
