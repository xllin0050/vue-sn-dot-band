import { supabase } from '@/supabase.js'

export default function useDatabase() {
  // const getAlbumsArt = (title) => {
  //   const fileName = title.replace(/ /g, '-')
  //   const { publicURL, error } = supabase.storage
  //     .from('works')
  //     .getPublicUrl(`albums/${fileName}.jpg`)
  //   return publicURL
  // }

  // const getAlbumsData = async (select) => {
  //   const { data: albums, error } = await supabase
  //     .from('albums')
  //     .select(select)
  //     .order('release', { ascending: false })

  //   return albums.map((item) => {
  //     item.url = item.title
  //       .toLowerCase()
  //       .replace(/'|\s/g, (e) => (e === "'" ? '' : '-'))
  //     item.cover = getAlbumsArt(item.title)
  //     return item
  //   })
  // }

  // const getSingleAlbum = async (params) => {
  //   let { data: albums, error } = await supabase
  //     .from('albums')
  //     .select()
  //     .match({ release: params })

  //   const [singleAlbum] = albums
  //   singleAlbum.cover = getAlbumsArt(singleAlbum.title)

  //   return singleAlbum
  // }

  const getNextGigs = async () => {
    const today = new Date().toISOString()
    let { data, error } = await supabase
      .from('gigs')
      .select('*')
      .order('show_time')
      .gte('show_time', today)

    const [theNextOne] = data

    return theNextOne || {}
  }

  const getGigsData = async () => {
    const today = new Date()
    const { data: gigs, error } = await supabase
      .from('gigs')
      .select('*')
      .order('show_time', { ascending: false })

    return gigs.map((gig) => {
      const gigDate = new Date(gig.show_time)
      gig.coming = gigDate >= today
      return gig
    })
  }

  return {
    getNextGigs,
    getGigsData,
  }
}
