<template>
  <SiteNavbar />
  <div class="mx-auto min-h-screen max-w-sm lg:max-w-4xl">
    <PageTitle>Discography</PageTitle>
    <div
      v-for="album in albumDatas"
      :key="album.id"
      class="flex flex-col items-center justify-center pt-10 pb-24 font-redhat md:pt-2 md:pb-24 lg:flex-row lg:items-start lg:pt-4 lg:pb-44"
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
      <div class="mx-8 w-[250px] lg:w-full pt-12 lg:ml-16 lg:pt-0">
        <h3
          class="pb-8 text-sm uppercase text-neutral-800 lg:pb-12 lg:text-lg"
        >
          <span class="capitalize lg:hidden">title: </span>{{ album.title }}
        </h3>
        <div class="pb-8 text-sm capitalize lg:text-base lg:pb-12">
          release: {{ album.release.slice(0, 4) }}
        </div>
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
import { reactive } from 'vue'
import { useWindowSize } from '@vueuse/core'
import data from '../data/discography'

const { width } = useWindowSize()

const albumDatas = reactive(data)
</script>

<style scoped></style>
