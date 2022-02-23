<template>
    <div
        id="modal-backdrop"
        class="fixed inset-0 flex items-center justify-center bg-neutral-900 bg-opacity-60 dark:bg-opacity-80"
        @click.self="$emit('closeModal')"
    >
        <div
            id="modal"
            class="flex aspect-square max-w-2xl flex-col items-center justify-between rounded-md border bg-white p-4 font-redhat text-lg uppercase dark:border-purple-400 dark:bg-neutral-900"
        >
            <div class="max-h-[50%]">
                <img
                    :src="props.gigInfoData.banner"
                    class="mx-auto block max-h-full"
                />
            </div>
            <div class="flex flex-col items-center p-4">
                <p class="p-2 font-medium">{{ props.gigInfoData.show_time }}</p>
                <p class="p-2 font-medium">{{ props.gigInfoData.venue }}</p>
                <p class="p-2 font-medium">{{ props.gigInfoData.city }}</p>
            </div>
            <div class="flex">
                <div
                    class="mr-2 rounded border-2 border-neutral-500 px-2 py-2 text-base shadow hover:border-neutral-800 hover:font-medium dark:border-purple-400"
                >
                    <a
                        :href="props.gigInfoData.event_url"
                        target="_blank"
                        class="flex items-center"
                        >info
                        <span
                            class="iconify ml-1"
                            data-icon="ion:md-open"
                            data-inline="false"
                        ></span
                    ></a>
                </div>
                <div
                    class="ml-2 flex cursor-pointer items-center rounded border-2 border-neutral-500 px-2 py-2 text-base shadow hover:border-neutral-800 hover:font-medium dark:border-purple-400"
                    @click="$emit('closeModal')"
                >
                    <span class="mr-1">colse</span>
                    <span
                        class="iconify"
                        data-icon="ion:close-round"
                        data-inline="false"
                    ></span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: { gigInfoData: Object },
    emits: ['closeModal'],
    setup(props) {
        return { props }
    },
}
</script>
<style scoped></style>
