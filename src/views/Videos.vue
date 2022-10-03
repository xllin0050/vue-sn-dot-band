<template>
  <SiteNavbar />
  <div
    class="mx-auto min-h-screen max-w-xs pb-16 font-redhat lg:max-w-4xl"
    :class="{ 'overflow-hidden': modalVisible }"
  >
    <PageTitle>videos</PageTitle>
    <ul class="mx-auto -mt-0 max-w-3xl pt-2 sm:pt-0 lg:-mt-8">
      <li
        v-for="video in videos"
        :key="video.title"
        class="pb-0 lg:mb-28"
        @click="showModal(video)"
      >
        <h3
          class="pt-10 pb-3 text-center text-xs font-medium lg:pb-6 lg:text-left lg:text-base"
        >
          {{ video.title }}
        </h3>
        <div
          class="relative"
          @mouseover="saveVideoID = video.id"
          @mouseleave="saveVideoID = ''"
        >
          <img
            :src="video.snapshot"
            :alt="video.title"
            class="card-shadow bg-white"
          />
          <transition name="hover">
            <div
              v-show="saveVideoID === video.id"
              class="absolute top-0 flex h-full w-full items-center justify-center bg-neutral-700/30"
            >
              <span
                class="iconify text-7xl text-purple-400"
                data-icon="material-symbols:play-circle"
                data-inline="false"
              ></span>
            </div>
          </transition>
        </div>
      </li>
    </ul>
    <transition name="fade">
      <VideoModal
        v-if="modalVisible"
        :data="modalData"
        @close-modal="showModal"
      />
    </transition>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import data from '../data/videos'

const videos = reactive(data)
const saveVideoID = ref('')
const modalVisible = ref(false)
const modalData = ref({})
const showModal = (data) => {
  modalData.value = data
  modalVisible.value = !modalVisible.value
}
</script>
<style>
.hover-enter-active,
.hover-leave-active {
  transition: opacity 400ms ease-in-out;
}
.hover-enter,
.hover-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 300ms ease-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
