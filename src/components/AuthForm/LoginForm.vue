<template>
    <form @submit.prevent="handleLogin">
        <h1 class="my-4 text-xl">Login</h1>
        <div class="felx-col flex">
            <label class="border"
                >Email <input v-model="form.email" type="email" class="border"
            /></label>
            <label class="border"
                >Password
                <input v-model="form.password" type="password" class="border"
            /></label>
            <button class="border px-2">Login</button>
        </div>
    </form>
</template>
<script setup>
import { ref } from 'vue'
import useAuthUser from '@/composables/UseAuthUser'
import { useRouter } from 'vue-router'

const router = useRouter()
const { login } = useAuthUser()

const form = ref({
    email: '',
    password: '',
})

const handleLogin = async () => {
    try {
        await login(form.value)
        router.push({ name: 'GigUpdate' })
    } catch (error) {
        alert(error.message)
    }
}
</script>
