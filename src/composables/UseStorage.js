import { supabase } from '@/supabase.js'

export default function useStorage() {
  const getStorageList = async (buckets, traget) => {
    const { data, error } = await supabase.storage.from(buckets).list(traget)
    return data
  }

  const getPhotoUrls = async () => {
    return await getStorageList('gigs', 'photos')
      .then((dateFolders) => dateFolders.map((folder) => folder.name))
      .then((dates) =>
        Promise.all(
          dates.map(async (date) => ({
            [date]: await getStorageList('gigs', `photos/${date}`),
          }))
        )
      )
      .then((props) =>
        Promise.all(
          props.map(async (prop) => {
            for (let date in prop) {
              return Promise.all(
                prop[date].map(async (file) => {
                  const { publicURL, error } = await supabase.storage
                    .from('gigs')
                    .getPublicUrl(`photos/${date}/${file.name}`)
                  return publicURL
                })
              )
            }
          })
        )
      )
      .then((arr) => arr.flat(1))
  }

  return {
    getPhotoUrls,
  }
}
