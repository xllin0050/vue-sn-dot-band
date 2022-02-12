<template>
    <div class="w-full">
        <div class="grid grid-cols-3 gap-2">
            <div
                v-for="(url, i) in urls"
                class="w-full"
                :key="`c_${i}`"
                @click="showImagesByComponent(i)"
            >
                <img :src="url" class="block" />
            </div>
        </div>
        <ImgViewr
            :visible="visible"
            :urls="urls"
            :initial-index="index"
            @close="closeHandle"
            @switch="changeHandle"
            @show="showHandle"
        />
    </div>
</template>
<script>
import { supabase } from '@/supabase.js'
import { ref } from 'vue'
import ImgViewr from 'vue-img-viewr'
import 'vue-img-viewr/styles/index.css'

export default {
    name: 'PhotosPage',
    components: { ImgViewr },
    setup(props) {
        const urls = ref([])
        const index = ref(0)
        const visible = ref(false)
        const showImagesByComponent = (i) => {
            visible.value = true
            index.value = i
        }
        const changeHandle = (i) => {
            console.log(`current image index: ${i}`)
        }
        const closeHandle = () => {
            console.log('closed component')
            visible.value = false
        }
        const showHandle = (isShow) => {
            console.log(`component is show: ${isShow}`)
        }

        const getStorageList = async (buckets, traget) => {
            const { data, error } = await supabase.storage
                .from(buckets)
                .list(traget)
            return data
        }
        const getPhotoUrls = async () => {
            const phothDates = await getStorageList('gigs', 'photos')
            phothDates.forEach(async (folder) => {
                const photoFilesName = await getStorageList(
                    'gigs',
                    `photos/${folder.name}`
                )
                photoFilesName.forEach((fileName) => {
                    const { publicURL, error } = supabase.storage
                        .from('gigs')
                        .getPublicUrl(`photos/${folder.name}/${fileName.name}`)
                    urls.value.push(publicURL)
                })
            })
        }
        getPhotoUrls()

        return {
            urls,
            index,
            visible,
            showImagesByComponent,
            closeHandle,
            changeHandle,
            showHandle,
        }
    },
}
</script>
