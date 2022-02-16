<template>
    <form class="flex flex-col" @submit.prevent="handlePasswordReset()">
        <h1 class="my-4 text-xl">Forgot Password?</h1>
        <label
            >Email
            <input v-model="email" type="email" class="border border-gray-600"
        /></label>
        <button class="mt-4 rounded border border-gray-600 p-2">
            Send Reset Email
        </button>
    </form>
</template>
<script setup>
import { ref } from 'vue'
import useAuthUser from '@/composables/UseAuthUser'
import { useRouter } from 'vue-router'

const { sendPasswordRestEmail } = useAuthUser()
const router = useRouter()

const email = ref('')

const handlePasswordReset = async () => {
    await sendPasswordRestEmail(email.value)
    router.go(0)
}
</script>
