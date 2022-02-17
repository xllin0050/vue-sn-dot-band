<template>
    <div class="mx-auto max-w-lg font-redhat">
        <h3 class="pt-8 text-2xl font-medium uppercase sm:pt-0">gigs update</h3>
        <div class="flex flex-col text-xl">
            <label for="venue" class="pt-5 uppercase">venue</label>
            <input
                type="text"
                v-model="venue"
                class="max-w-lg border-2 p-1"
                required
            />
            <label for="city" class="pt-5 uppercase">city</label>
            <input
                type="text"
                v-model="city"
                class="max-w-lg border-2 p-1"
                required
            />
            <label for="showTime" class="pt-5 uppercase">show time</label>
            <input
                type="date"
                v-model="showTime"
                class="max-w-lg border-2 p-1"
                required
            />
            <label for="eventUrl" class="pt-5 uppercase">url</label>
            <p class="p-2 text-sm">
                facebook event url or any links can buy the ticket
            </p>
            <input
                type="text"
                v-model="eventUrl"
                class="max-w-lg border-2 p-1"
            />
            <label for="banner" class="pt-5 uppercase">banner</label>
            <p class="p-1 text-sm">file name should be like: 2022-01-01.jpg</p>
            <p class="p-1 text-sm">file size under 1MB (1024KB) is better</p>
            <input
                type="file"
                ref="fileInput"
                class="max-w-lg border-2 p-1 text-base"
            />
            <input
                type="submit"
                @click="havePicture"
                class="my-14 max-w-lg cursor-pointer rounded-md border py-1 shadow-md"
            />
            <p
                v-if="uploadComplete"
                class="py-4 text-2xl font-medium uppercase"
            >
                upload Complete
            </p>
        </div>
    </div>
</template>
<script>
import { supabase } from '@/supabase.js'
import { ref } from 'vue'

export default {
    name: 'GigUpdate',
    setup() {
        const showTime = ref('')
        const venue = ref('')
        const city = ref('')
        const eventUrl = ref('')
        const fileInput = ref(null)
        const uploadComplete = ref(false)

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
            uploadComplete.value = false
            if (fileInput.value.files.length) {
                uploadBanner(showTime.value)
            } else {
                updateGigInfo()
            }
        }

        return {
            showTime,
            venue,
            city,
            eventUrl,
            fileInput,
            uploadComplete,
            havePicture,
        }
    },
}
</script>
