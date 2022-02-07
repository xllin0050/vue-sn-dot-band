<template>
  <section>
    <h1>Discography</h1>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.container {
  width: 100%;
  color: $text-color-main;
  margin: auto;

  @media (min-width: 670px) {
    width: 45rem;
    transform: translateX(3rem);
  }

  .pageTitle {
    font-size: $font-size-album;
    text-transform: uppercase;
    padding: 5rem 5rem 0;
    margin-bottom: 0.5rem;
    text-align: center;

    @media (min-width: 670px) {
      text-align: left;
      padding: 7rem 0rem 3.5rem;
    }
  }
}
</style>
