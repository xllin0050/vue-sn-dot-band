<template>
  <NoGlitchTitle />
  <SiteNavbar />
  <router-view />
  <SiteFooter />
</template>
<script>
import { supabase } from '@/supabase.js'
import { ref } from 'vue'
export default {
  setup() {
    async function getData() {
      let { data: albums, error } = await supabase.from('albums').select('*')
    }
    getData()
    return {}
  },
}
</script>
<style></style>
