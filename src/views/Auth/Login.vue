<template>
    <div class="m-auto max-w-lg">
        <ul class="flex py-4">
            <li
                v-for="(menu, i) in menus"
                :key="i"
                class=" mr-2 cursor-pointer rounded border-2 border-gray-400 px-4 text-xl uppercase hover:border-gray-600"
                @click="showForm(menu)"
            >
                {{ menu }}
            </li>
        </ul>
        <LoginForm v-if="isShow === 'login'" />
        <RegisterForm v-if="isShow === 'register'" />
    </div>
</template>
<script setup>
import { ref } from 'vue'

const menus = ['login', 'register']
const isShow = ref('login')
const showForm = (menu) => {
    isShow.value = menu
}
</script>
