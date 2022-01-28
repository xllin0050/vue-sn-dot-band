<template>
  <Layout>
    <section class="section">
      <div class="container">

      </div>
    </section>
  </Layout>
</template>

<script>
export default {
  name: 'GigsIndex',
}
</script>

<style scoped>
.container {
  width: 100%;
  color: $text-color-main;
  margin: auto;

  @media (min-width: 670px) {
    width: 45rem;
  }

  .pageTitle {
    font-size: $font-size-album;
    text-transform: uppercase;
    padding: 5rem 5rem 0;
    margin-bottom: 0.5rem;

    @media (min-width: 670px) {
      padding: 7rem 0rem 0;
    }
  }

  .gigsList {
    font-size: $font-size-mobile;
    padding: 1rem 5rem 0;

    @media (min-width: 670px) {
      font-size: $font-size-desc;
      padding: 1rem 0 0;
    }
    & :first-child {
      color: rgb(40, 40, 40);
      background: $text-color-main;
    }

    &__date,
    &__place {
      padding-left: 1.2rem;
    }
    &__date {
      margin-bottom: 0.5rem;
    }
    &__place {
      margin-bottom: 0.5rem;
    }
  }
}
</style>
