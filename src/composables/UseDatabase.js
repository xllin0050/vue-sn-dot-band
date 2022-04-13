import { ref } from 'vue'
import { supabase } from '@/supabase.js'

export default function useDatabase() {
  const albumDatas = ref([])
  const singleAlbum = ref([])
  const nextGigDatas = ref([])
  const gigDatas = ref([])

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
      .gte('show_time', today)
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

  return {
    albumDatas,
    getAlbumsData,
    singleAlbum,
    getSingleAlbum,
    nextGigDatas,
    getNextGigs,
    gigDatas,
    getGigsData,
  }
}
