<template>
  <NoGlitchTitle />
  <SiteNavbar />
  <div class="mx-auto max-w-4xl">
    <transition appear>
      <router-view />
    </transition>
  </div>
  <SiteFooter />
</template>
<script>
export default {
  setup() {
    return {}
  },
}
</script>
