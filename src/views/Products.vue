<template>
  <SiteNavbar />
  <div class="w-full">
    <PageTitle>products</PageTitle>
    <div class="mx-auto max-w-sm pt-4 sm:max-w-5xl sm:pt-0">
      <div
        class="flex flex-col items-center pb-0 sm:flex-row sm:items-stretch sm:pb-16"
      >
        <div
          v-for="(record, name) in records"
          :key="name"
          class="mx-0 my-8 sm:my-0 sm:mx-8"
        >
          <ProductCard :data="record" />
        </div>
      </div>
      <div
        class="flex flex-col items-center pt-0 sm:flex-row sm:items-stretch sm:py-16"
      >
        <div
          v-for="(tshirt, name) in tshirts"
          :key="name"
          class="mx-0 my-8 sm:my-0 sm:mx-8"
        >
          <ProductCard :data="tshirt" />
        </div>
      </div>
    </div>
    <div class="flex justify-center">
      <div
        class="inline-block py-8 px-12 font-redhat text-sm font-normal text-neutral-800 lg:px-0 lg:pb-36 lg:pt-14 lg:text-base lg:font-medium"
      >
        <p>If you’d like to get a copy of our albums or merchants,</p>
        <p>
          please drop us a line at
          <a href="mailto:supernapkinsogood@gmail.com" class="text-purple-500"
            >supernapkinsogood@gmail.com</a
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
const records = reactive([
  {
    name: 'Subtropical Jet Stream',
    picture: new URL('../assets/images/products/sn5-cover.jpg', import.meta.url)
      .href,
    available: true,
    format: 'CD',
  },
  {
    name: 'Sherry’s Neighbors',
    picture: new URL('../assets/images/products/sn4-cover.jpg', import.meta.url)
      .href,
    available: true,
    format: 'CD',
  },

  {
    name: 'There’s Nothing That Cannot Beat Me',
    picture: new URL('../assets/images/products/sn3-lp.png', import.meta.url)
      .href,
    available: true,
    format: 'LP',
  },
])

const tshirts = reactive([
  {
    name: 'subtropical',
    picture: new URL(
      '../assets/images/products/subtropical-tshirt.jpg',
      import.meta.url
    ).href,
    available: true,
    note: 'Size S Not Available. Size M, L & XL Available. Sizes may rarely vary in the range of 5%.',
    size: {
      s: { chest: 49, length: 65 },
      m: { chest: 52, length: 69 },
      l: { chest: 55, length: 73 },
      xl: { chest: 58, length: 77 },
    },
  },
  {
    name: 'monster',
    picture: new URL(
      '../assets/images/products/monster-tshirt.jpg',
      import.meta.url
    ).href,
    available: true,
    note: 'Size L & XL Out of Stock. Size S & M still Available. Sizes may rarely vary in the range of 5%',
    size: {
      s: { chest: 47, length: 69 },
      m: { chest: 52, length: 72 },
      l: { chest: 57, length: 76 },
      xl: { chest: 62, length: 80 },
    },
  },
])
</script>
