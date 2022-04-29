<template>
    <div
        class="mx-auto max-w-lg font-redhat"
        :class="submitLoading ? 'opacity-40' : ''"
    >
        <div class="rounded border-2 border-teal-500 p-2">
            <span
                class="iconify text-3xl text-teal-500"
                data-icon="gg:add"
            ></span>
            <h3
                class="flex flex-col items-center pt-8 text-xl font-medium uppercase text-teal-600 sm:pt-0"
            >
                gig update
            </h3>
            <div class="flex flex-col text-lg text-teal-500">
                <label for="venue" class="p-5"
                    ><span class="uppercase">venue</span>
                    <input
                        type="text"
                        v-model="venue"
                        class="w-full border-2 p-1 outline-none"
                        required
                    />
                </label>
                <label for="city" class="p-5"
                    ><span class="uppercase">city</span>

                    <input
                        type="text"
                        v-model="city"
                        class="w-full border-2 p-1 outline-none"
                        required
                    />
                </label>
                <label for="showTime" class="p-5"
                    ><span class="uppercase">show time</span>

                    <input
                        type="date"
                        v-model="showTime"
                        class="w-full border-2 p-1 outline-none"
                        required
                    />
                </label>
                <label for="eventUrl" class="p-5"
                    ><span class="uppercase">url</span>

                    <p class="p-2 text-sm normal-case text-teal-700">
                        Facebook event url or any links can buy the ticket
                    </p>
                    <input
                        type="text"
                        v-model="eventUrl"
                        class="w-full border-2 p-1 outline-none"
                    />
                </label>
                <label for="banner" class="p-5"
                    ><span class="uppercase">event banner</span>
                    <p class="p-2 text-sm text-teal-700">
                        File name should be like:
                        <span class="font-medium"> 2022-01-01.jpg </span>
                    </p>
                    <p class="p-2 text-sm text-teal-700">
                        File size under
                        <span class="font-medium">1MB (1024KB) </span>is better.
                    </p>
                    <p class="px-2 text-sm capitalize">useful links:</p>
                    <ul class="p-2 text-sm text-teal-700">
                        <li>
                            <a href="https://compressjpeg.com/"
                                >https://compressjpeg.com/</a
                            >
                        </li>
                        <li>
                            <a href="https://imageresizer.com/"
                                >https://imageresizer.com/</a
                            >
                        </li>
                    </ul>
                    <input
                        type="file"
                        ref="fileInput"
                        class="w-full border-2 p-1 text-base outline-none"
                    />
                </label>
                <input
                    type="submit"
                    value="update"
                    @click="havePicture"
                    class="my-14 mx-auto w-40 cursor-pointer rounded-md border py-1 shadow-md"
                />
                <p
                    v-if="uploadComplete"
                    class="py-4 text-2xl font-medium uppercase"
                >
                    upload Complete
                </p>
            </div>
        </div>
        <div class="mt-8 rounded border-2 border-red-200 p-2">
            <span
                class="iconify mr-2 text-3xl text-red-400"
                data-icon="gg:danger"
            ></span>
            <h3
                class="flex flex-col items-center pt-16 text-xl font-medium uppercase text-red-500 sm:pt-0"
            >
                gig delete
            </h3>
            <div class="flex flex-col text-lg text-red-400">
                <label for="showTime" class="p-5"
                    ><p class="pb-4 normal-case">
                        Select show time for delete!
                    </p>
                    <input
                        type="date"
                        v-model="delShowTime"
                        class="w-full border-2 p-1"
                        required
                    />
                </label>
                <input
                    type="submit"
                    value="delete"
                    @click="deleteGig"
                    class="my-10 mx-auto w-40 cursor-pointer rounded-md border py-1 text-red-500 shadow-md"
                />
                <p
                    v-if="deleteComplete"
                    class="py-4 text-2xl font-medium uppercase"
                >
                    delete Complete
                </p>
            </div>
        </div>
    </div>
</template>
<script>
import { supabase } from '@/supabase.js'
import { ref } from 'vue'

export default {
    name: 'GigUpdate',
    setup() {
        const delShowTime = ref('')
        const showTime = ref('')
        const venue = ref('')
        const city = ref('')
        const eventUrl = ref('')
        const fileInput = ref(null)
        const uploadComplete = ref(false)
        const deleteComplete = ref(false)
        const submitLoading = ref(false)

        const getGigBanner = (date) => {
            const { publicURL, error } = supabase.storage
                .from('gigs')
                .getPublicUrl(`banners/${date}.jpg`)
            return publicURL
        }

        async function updateGigInfo(date, withPicture) {
            const { data, error } = await supabase.from('gigs').insert([
                {
                    show_time: showTime.value,
                    venue: venue.value,
                    city: city.value,
                    event_url: eventUrl.value || null,
                    banner: withPicture ? getGigBanner(date) : null,
                },
            ])
            if (data.length) {
                showTime.value = ''
                venue.value = ''
                city.value = ''
                eventUrl.value = ''
                fileInput.value = null
                uploadComplete.value = true
                submitLoading.value = false
            }
        }

        async function uploadBanner(date) {
            const { data, error } = await supabase.storage
                .from('gigs')
                .upload(`banners/${date}.jpg`, fileInput.value.files[0])
            if (error) console.log(error)
            if (data) updateGigInfo(date, true)
        }

        async function havePicture() {
            submitLoading.value = true
            uploadComplete.value = false
            if (fileInput.value.files.length) {
                uploadBanner(showTime.value)
            } else {
                updateGigInfo()
            }
        }

        async function deleteGig() {
            if (delShowTime.value) {
                submitLoading.value = true
                const { data, error } = await supabase
                    .from('gigs')
                    .delete()
                    .eq('show_time', delShowTime.value)
                if (data.length) {
                    submitLoading.value = false
                    deleteComplete.value = true
                }
            }
        }

        return {
            delShowTime,
            showTime,
            venue,
            city,
            eventUrl,
            fileInput,
            uploadComplete,
            deleteComplete,
            submitLoading,
            havePicture,
            deleteGig,
        }
    },
}
</script>
