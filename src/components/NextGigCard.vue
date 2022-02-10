<template>
    <div
        class="mx-auto flex max-w-4xl flex-col items-center justify-center py-16 text-center"
    >
        <h3
            class="pt-6 pb-6 font-redhat text-3xl font-medium uppercase tracking-widest text-gray-800"
        >
            next gig
        </h3>

        <ul class="font-redhat">
            <li
                v-for="gig in props.nextGig"
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
                    >{{ gig.venue }}/{{ gig.city }}
                </div>
                <div class="mx-1 rounded-sm border p-1 px-2">info</div>
                <div class="rounded-sm border p-1 px-2">
                    <a herf="#">ticket</a>
                </div>
            </li>
            <li class="mb-2 flex items-center rounded-sm border p-3 shadow-sm">
                <div class="uppercase px-16">tba</div>
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
