<template>
  <section>
    <p>{{ gigDatas }}</p>
  </section>
</template>

<script>
import { supabase } from '@/supabase.js'
import { ref } from 'vue'
export default {
  name: 'GigsPage',
  setup(props) {
    const gigDatas = ref([])

    async function getGigsData() {
      const today = new Date().toISOString()
      let { data: gigs, error } = await supabase.from('gigs').select('*')
      gigDatas.value = gigs
    }
    getGigsData()

    return { gigDatas }
  },
}
</script>

<style scoped></style>
