<template>
  <nav class="hidden py-8 md:flex md:justify-center lg:pb-20">
    <div
      v-for="routeName in props.routesList"
      :key="routeName"
      style="word-spacing: -0.3em"
      class="px-4 py-10 font-redhat text-sm font-medium uppercase text-neutral-600 hover:text-neutral-800 lg:text-xl"
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
