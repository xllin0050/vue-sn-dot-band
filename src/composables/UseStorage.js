import { ref } from 'vue'
import { supabase } from '@/supabase.js'

export default function useStorage() {
  const photoUrls = ref([])

  const getStorageList = async (buckets, traget) => {
    const { data, error } = await supabase.storage.from(buckets).list(traget)
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
    getPhotoUrls,
    photoUrls,
  }
}
