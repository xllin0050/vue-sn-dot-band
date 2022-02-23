<template>
    <div class="min-h-screen w-full">
        <PageTitle>gigs</PageTitle>
        <ul class="pt-6 font-redhat md:pt-0">
            <li
                v-for="gig in gigDatas"
                :key="gig.id"
                class="mb-6 flex flex-col items-center rounded-md border p-2 uppercase shadow-sm lg:mb-4 lg:flex-row lg:p-3"
                :class="
                    gig.coming
                        ? 'border-neutral-700 shadow-md dark:border-2 dark:border-purple-400 lg:py-6'
                        : ''
                "
            >
                <div class="">{{ gig.show_time }}</div>
                <div
                    class="my-2 flex items-center text-sm font-normal text-neutral-800 dark:text-neutral-200 lg:my-0 lg:grow lg:text-base"
                >
                    <span
                        class="iconify mx-1 dark:text-neutral-400"
                        data-icon="ic:outline-place"
                        data-inline="false"
                    ></span
                    >{{ gig.venue }}
                </div>
                <div
                    class="my-1 flex items-center text-sm font-normal text-neutral-800 dark:text-neutral-200 lg:my-0 lg:mx-4 lg:w-36 lg:text-base"
                >
                    <span
                        class="iconify mx-1 dark:text-neutral-400"
                        data-icon="mdi:city-variant-outline"
                        data-inline="false"
                    ></span
                    >{{ gig.city }}
                </div>
                <div class="flex pt-2 lg:pt-0">
                    <div
                        class="mx-2 cursor-pointer rounded-md border p-1 px-2 text-sm hover:border-neutral-600 lg:text-base"
                        :class="
                            gig.coming
                                ? 'border-neutral-400 dark:border-purple-400'
                                : ''
                        "
                        @click="showModal(gig)"
                    >
                        info
                    </div>
                    <div
                        v-show="gig.coming"
                        class="rounded-md border p-1 px-2 text-sm lg:text-base"
                        :class="
                            gig.coming
                                ? 'cursor-pointer border-neutral-400 hover:border-neutral-600 dark:border-purple-400'
                                : ''
                        "
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
import { supabase } from '@/supabase.js'
import { ref } from 'vue'
export default {
    name: 'GigsPage',
    setup() {
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
