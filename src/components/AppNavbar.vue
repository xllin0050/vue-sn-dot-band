<template>
    <div class="absolute top-0 block md:hidden">
        <div @click="handlerMenu" class="p-3">
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
            class="fixed top-0 z-10 flex min-h-screen w-full justify-around bg-white pt-12 dark:bg-neutral-900"
        >
            <ul class="font-redhat font-medium uppercase tracking-wider">
                <li
                    v-for="routeName in props.routesList"
                    :key="routeName"
                    class="py-3"
                >
                    <p>
                        <router-link :to="{ name: routeName }">
                            <span @click="isShow = false">
                                {{ routeName }}
                            </span>
                        </router-link>
                    </p>
                </li>
            </ul>
            <div @click="handlerMenu" class="p-3">
                <span
                    class="iconify text-2xl"
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
            console.log('ok')
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
