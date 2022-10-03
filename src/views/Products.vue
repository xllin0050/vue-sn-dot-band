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
        <p class="pt-12">
          專輯：Sherry’s Neighbors、Subtropical Jet Stream 以及亞熱帶 T-Shirt
          預計於 9/15 台北場首賣。
        </p>
        <p class="pt-2">怪物 T-Shirt 復刻上市。</p>
        <p class="pt-12">怪物 T-Shirt (L)、亞熱帶 T-Shirt (S) 廠商無庫存。</p>
        <p class="pt-2">其他尺寸均可在巡迴場次買到。</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
const records = reactive([
  {
    name: 'There’s Nothing That Cannot Beat Me',
    picture: new URL('../assets/images/products/sn3-lp.png', import.meta.url)
      .href,
    available: true,
    format: 'LP',
  },
  {
    name: 'Sherry’s Neighbors',
    picture: new URL('../assets/images/products/sn4-cover.jpg', import.meta.url)
      .href,
    available: true,
    format: 'CD',
  },
  {
    name: 'Subtropical Jet Stream',
    picture: new URL('../assets/images/products/sn5-cover.jpg', import.meta.url)
      .href,
    available: true,
    format: 'CD',
  },
])

const tshirts = reactive([
  {
    name: 'monster',
    picture: new URL(
      '../assets/images/products/monster-tshirt.jpg',
      import.meta.url
    ).href,
    available: true,
    note: 'Size L is not yet available',
    size: {
      s: { chest: 47, length: 69 },
      m: { chest: 52, length: 72 },
      l: { chest: 57, length: 76 },
      xl: { chest: 62, length: 80 },
    },
  },
  {
    name: 'subtropical',
    picture: new URL(
      '../assets/images/products/subtropical-tshirt.jpg',
      import.meta.url
    ).href,
    available: true,
    note: 'Size S is not yet available',
    size: {
      s: { chest: 49, length: 65 },
      m: { chest: 52, length: 69 },
      l: { chest: 55, length: 73 },
      xl: { chest: 58, length: 77 },
    },
  },
])
</script>
