<template>
    <div
        class="mx-auto flex max-w-4xl flex-col items-center justify-center py-8 text-center lg:py-16"
    >
        <h3
            class="p-2 lg:p-6 font-redhat text-xl font-medium uppercase tracking-widest text-gray-800 lg:text-3xl"
        >
            next gig
        </h3>

        <ul class="font-redhat uppercase">
            <li
                v-for="gig in props.nextGig"
                :key="gig.id"
                class="mb-2 flex flex-col items-center rounded border border-gray-500 p-4 text-sm shadow lg:flex-row lg:p-3 lg:text-base"
            >
                <div class="text-sm lg:text-base">{{ gig.show_time }}</div>
                <div class="m-0 flex grow items-center py-3 lg:mx-2 lg:py-0 text-sm lg:text-base">
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
                    <a
                        :href="gig.event_url"
                        target="_blank"
                        class="flex items-center"
                    >
                        <span class="mr-1">ticket</span>
                        <span
                            class="iconify"
                            data-icon="ion:md-open"
                            data-inline="false"
                        ></span
                    ></a>
                </div>
            </li>
            <li
                v-if="!props"
                class="mb-2 flex flex-col items-center rounded border border-gray-500 p-5 text-sm shadow lg:flex-row lg:p-3 lg:text-base"
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
