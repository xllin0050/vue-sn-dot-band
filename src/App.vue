<template>
  <nav class="flex">
    <div
      v-for="routeName in routes"
      :key="routeName"
      class="px-4 text-gray-400"
    >
      <router-link :to="{ name: routeName }">{{ routeName }}</router-link>
    </div>
  </nav>
  <router-view />
</template>
<script>
import { supabase } from '@/supabase.js'
import { ref } from 'vue'
export default {
  setup() {
    const routes = [
      'Home',
      'About Us',
      'Discography',
      'Gigs',
      'Photos',
      'Products',
      'Update Admin',
    ]
    async function getData() {
      let { data: albums, error } = await supabase.from('albums').select('*')
      console.log(albums)
    }
    getData()

    return { routes }
  },
}
</script>
<style></style>
