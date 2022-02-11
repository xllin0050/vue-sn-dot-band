<template>
    <div
        class="mx-auto flex max-w-4xl flex-col items-center justify-center py-16 text-center"
    >
        <h3
            class="pt-6 pb-6 font-redhat text-3xl font-medium uppercase tracking-widest text-gray-800"
        >
            next gig
        </h3>

        <ul class="font-redhat uppercase">
            <li
                v-for="gig in props.nextGig"
                :key="gig.id"
                class="mb-2 flex items-center rounded border border-gray-500 p-3 px-6 shadow"
            >
                <div class="">{{ gig.show_time }}</div>
                <div class="mx-2 flex grow items-center font-normal">
                    <span
                        class="iconify mx-1"
                        data-icon="ic:outline-place"
                        data-inline="false"
                    ></span
                    >{{ gig.venue }}/{{ gig.city }}
                </div>
                <div
                    class="ml-2 cursor-pointer rounded border p-1 px-2 text-sm hover:border-gray-700"
                >
                    <a :href="gig.event_url" target="_blank" class="flex items-center">
                    <span class="mr-1">ticket</span>
                        <span
                            class="iconify"
                            data-icon="ion:md-open"
                            data-inline="false"
                        ></span
                        ></a
                    >
                </div>
            </li>
            <li
                v-if="!props"
                class="mb-2 flex items-center rounded border border-gray-500 p-3 shadow"
            >
                <div class="px-16 uppercase">tba</div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props: { nextGig: Array },

    setup(props) {
        return { props }
    },
}
</script>
