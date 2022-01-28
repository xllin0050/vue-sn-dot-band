<template>
  <div>
    <label for="venue">venue </label>
    <input type="text" v-model="venue" />
    <label for="city">city </label>
    <input type="text" v-model="city" />
    <label for="showTime">show time </label>
    <input type="date" v-model="showTime" />
    <input type="submit" @click="updateGigInfo" />
  </div>
</template>
<script>
import { supabase } from '@/supabase.js'
import { ref } from 'vue'

export default {
  setup(props) {
    const showTime = ref('')
    const venue = ref('')
    const city = ref('')
    async function updateGigInfo() {
      const { data, error } = await supabase
        .from('gigs')
        .insert([
          { show_time: showTime.value, venue: venue.value, city: city.value },
        ])
      if (data.length) {
        showTime.value = ''
        venue.value = ''
        city.value = ''
      }
    }
    return { showTime, venue, city, updateGigInfo }
  },
}
</script>
