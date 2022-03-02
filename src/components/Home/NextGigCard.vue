<template>
    <div
        class="mx-auto flex max-w-4xl flex-col items-center justify-center py-8 text-center lg:py-16"
    >
        <h3
            class="pb-6 font-redhat text-xl font-medium uppercase tracking-widest text-neutral-800 dark:text-purple-200 lg:pb-10 lg:text-3xl"
        >
            next gig
        </h3>

        <ul class="font-redhat uppercase">
            <li
                v-for="gig in props.nextGig"
                :key="gig.id"
                class="mb-3 flex flex-col items-center rounded border border-gray-400 p-4 text-sm shadow dark:border-2 lg:mb-6 lg:flex-row lg:p-3 lg:text-base"
            >
                <div class="text-sm lg:text-base">{{ gig.show_time }}</div>
                <div
                    class="m-0 flex grow items-center py-3 text-sm lg:mx-2 lg:py-0 lg:text-base"
                >
                    <span
                        class="iconify mx-1"
                        data-icon="ic:outline-place"
                        data-inline="false"
                    ></span
                    >{{ gig.venue }}/{{ gig.city }}
                </div>
                <div
                    class="ml-2 cursor-pointer rounded border p-1 px-2 text-sm hover:border-gray-700 dark:text-purple-400"
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
                v-if="props.nextGig.length === 0"
                class="mb-2 flex flex-col items-center rounded border border-neutral-500 p-4 text-sm shadow lg:flex-row lg:p-3 lg:px-20 lg:text-lg"
            >
                <div class="px-16 uppercase tracking-widest">tba</div>
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
