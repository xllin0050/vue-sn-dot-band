<template>
  <nav class="flex justify-center py-4">
    <div
      v-for="routeName in routes"
      :key="routeName"
      class="px-4 py-4 font-redhat text-xl font-medium uppercase text-gray-800"
    >
      <router-link :to="{ name: routeName }">{{ routeName }}</router-link>
    </div>
  </nav>
</template>
<script>
export default {
  setup(props) {
    const routes = [
      'Home',
      'About Us',
      'Discography',
      'Gigs',
      'Videos',
      'Photos',
      'Products',
      'Update Admin',
    ]
    return { routes }
  },
}
</script>
