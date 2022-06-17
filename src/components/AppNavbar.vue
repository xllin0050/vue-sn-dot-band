<template>
  <div class="absolute top-2 right-2 block md:hidden">
    <div @click="handlerMenu" class="p-3 opacity-70 hover:opacity-100">
      <span
        class="iconify text-xl"
        data-icon="ri:menu-fill"
        data-inline="false"
      ></span>
    </div>
  </div>
  <transition name="fade">
    <div
      v-if="isShow"
      class="fixed top-0 z-10 flex min-h-screen w-full justify-between bg-neutral-50"
    >
      <ul class="pt-10 font-redhat font-medium uppercase tracking-wider">
        <li
          v-for="routeName in props.routesList"
          :key="routeName"
          class="p-3 px-12 hover:underline"
        >
          <p style="word-spacing: -0.3em">
            <router-link :to="{ name: routeName }">
              <span @click="isShow = false">
                {{ routeName }}
              </span>
            </router-link>
          </p>
        </li>
      </ul>
      <div @click="handlerMenu" class="px-8 pt-5">
        <span
          class="iconify text-2xl opacity-70 hover:opacity-100"
          data-icon="ri:close-fill"
          data-inline="false"
        ></span>
      </div>
    </div>
  </transition>
</template>
<script>
import { ref } from 'vue'
export default {
  props: { routesList: Array },
  setup(props) {
    const isShow = ref(false)
    const handlerMenu = () => {
      isShow.value = !isShow.value
    }
    return { props, isShow, handlerMenu }
  },
}
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 200ms ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
