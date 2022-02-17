<template>
    <div class="m-auto max-w-lg">
        <ul class="flex py-4">
            <li
                v-for="(menu, i) in menus"
                :key="i"
                class="px-4 text-2xl uppercase cursor-pointer"
                @click="showForm(menu)"
            >
                {{ menu }}
            </li>
        </ul>
        <LoginForm v-if="isShow === 'login'" />
        <RegisterForm v-if="isShow === 'register'" />
        <ForgotForm v-if="isShow === 'forgot'" />
    </div>
</template>
<script setup>
import { ref } from 'vue'

const menus = ['login', 'register', 'forgot']
const isShow = ref('login')
const showForm = (menu) => {
    isShow.value = menu
}
</script>
