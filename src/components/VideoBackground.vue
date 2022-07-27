<template>
  <video autoplay="true" loop class="min-w-full">
    <source :src="videoUrl" type="video/mp4" />
  </video>
</template>
<script setup>
const videoUrl = new URL('../assets/SNLL.mp4', import.meta.url).href
</script>
