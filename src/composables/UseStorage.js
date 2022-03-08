import { ref } from 'vue'
import { supabase } from '@/supabase.js'

export default function useStorage() {
    const albumDatas = ref([])
    const singleAlbum = ref([])
    const nextGigDatas = ref([])
    const gigDatas = ref([])
    const photoUrls = ref([])

    const getAlbumsArt = (title) => {
        const fileName = title.replace(/ /g, '-')
        const { publicURL, error } = supabase.storage
            .from('works')
            .getPublicUrl(`albums/${fileName}.jpg`)
        return publicURL
    }

    const getAlbumsData = async (select) => {
        const { data: albums, error } = await supabase
            .from('albums')
            .select(select)
            .order('release', { ascending: false })
        if (albums.length)
            albumDatas.value = albums.map((item) => {
                item.url = item.title
                    .toLowerCase()
                    .replace(/'|\s/g, (e) => (e === "'" ? '' : '-'))
                item.cover = getAlbumsArt(item.title)
                return item
            })
    }

    const getSingleAlbum = async (params) => {
        let { data: albums, error } = await supabase
            .from('albums')
            .select()
            .match({ release: params })
        singleAlbum.value = albums.map((item) => {
            item.cover = getAlbumsArt(item.title)
            return item
        })
    }

    const getNextGigs = async () => {
        const today = new Date().toISOString()
        let { data: gigs, error } = await supabase
            .from('gigs')
            .select('*')
            .order('show_time')
            .gt('show_time', today)
        nextGigDatas.value = gigs
    }

    const getGigsData = async () => {
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
                photoUrls.value.push(publicURL)
            })
        })
    }
    return {
        albumDatas,
        getAlbumsData,
        singleAlbum,
        getSingleAlbum,
        nextGigDatas,
        getNextGigs,
        gigDatas,
        getGigsData,
        getPhotoUrls,
        photoUrls
    }
}
