<template>
  <main>
    <MembersNameCircle />
    <NextGigCard />
    <AlbumSlides />
  </main>
</template>

<script>
export default {
  name: 'SiteIndex',
  setup(props) {
    const photoSet = {
      shih: './images/members/shih.jpg',
      // weiting: '@/assets/images/members/weiting.jpg',
      // yau: '@/assets/images/members/yau.jpg',
    }

    const imgUrl = new URL('../assets/images/members/shih.jpg', import.meta.url)
      .href

    return { photoSet, imgUrl }
  },
}
</script>

<style scoped></style>
