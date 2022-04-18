<template>
  <nav class="hidden pt-4 pb-8 dark:bg-neutral-900 md:flex md:justify-center">
    <div
      v-for="routeName in props.routesList"
      :key="routeName"
      class="px-4 py-10 font-redhat text-sm font-medium uppercase text-neutral-600 dark:text-purple-200 lg:text-xl"
    >
      <router-link :to="{ name: routeName }">{{ routeName }}</router-link>
    </div>
  </nav>
</template>
<script>
export default {
  props: { routesList: Array },
  setup(props) {
    return { props }
  },
}
</script>
