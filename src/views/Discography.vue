<template>
  <SiteNavbar />
  <div class="mx-auto min-h-screen max-w-sm lg:max-w-4xl">
    <PageTitle>Discography</PageTitle>
    <div
      v-for="album in albumDatas"
      :key="album.id"
      class="flex flex-col items-center justify-center pt-8 pb-32 font-redhat md:pt-2 md:pb-24 lg:flex-row lg:items-start lg:pt-4 lg:pb-44"
    >
      <div class="w-[250px] shrink-0 lg:w-[400px]">
        <router-link
          :to="{
            path: `/album/${album.release}/${album.url}`,
            hash: width > 1024 ? '#banner' : '',
          }"
        >
          <img
            :src="album.cover"
            class="block w-full p-1 shadow-xl ring-neutral-300 hover:ring"
          />
        </router-link>
      </div>
      <div class="mx-8 pt-14 lg:ml-16 lg:pt-0">
        <h3
          class="flex pb-4 text-sm font-medium uppercase text-neutral-800 lg:pb-12 lg:text-2xl"
        >
          {{ album.title }}
        </h3>
        <p
          class="pt-4 pb-8 text-justify text-xs leading-[2.2em] tracking-widest text-neutral-600 lg:pb-12 lg:text-base lg:leading-[2em]"
        >
          {{ album.desc }}
        </p>
        <iframe
          style="border: 0; width: 100%; height: 120px; margin: auto"
          :src="album.bandcamp"
          seamless
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useWindowSize } from '@vueuse/core'
import data from '../data/discography'

const { width } = useWindowSize()

const albumDatas = ref(data)
</script>

<style scoped></style>
