<template>
  <div
    v-show="route.name !== 'Home'"
    class="w-full pt-16 pb-4 text-neutral-900 sm:pt-20 sm:pb-0"
  >
    <div
      class="ml-0 text-center font-redhat text-3xl font-medium uppercase tracking-[.1em] text-inherit lg:ml-[.3em] lg:text-7xl lg:tracking-[.3em]"
    >
      super napkin
    </div>
  </div>
  <nav class="hidden bg-white py-8 md:flex md:justify-center lg:py-12">
    <div
      v-for="routeName in pageNames"
      :key="routeName"
      style="word-spacing: -0.3em"
      class="px-4 py-10 font-redhat text-sm font-medium uppercase text-neutral-600 transition hover:text-neutral-800 lg:text-xl"
      :class="{
        ' text-neutral-800 underline  ': route.name === routeName,
      }"
    >
      <router-link
        :to="{
          name: routeName,
          hash: routeName === 'About Us' ? '#banner' : '',
        }"
        >{{ routeName }}</router-link
      >
    </div>
  </nav>
</template>
<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const pageNames = [
  'Home',
  'About Us',
  'Discography',
  'Gigs',
  'Videos',
  'Photos',
  'Products',
]
</script>
