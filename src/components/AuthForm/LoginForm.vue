<template>
    <form @submit.prevent="handleLogin">
        <h1 class="my-4 text-xl">Login</h1>
        <div>
            <label
                >Email
                <input
                    v-model="form.email"
                    type="email"
                    class="mx-2 border border-gray-600"
            /></label>
            <label
                >Password
                <input
                    v-model="form.password"
                    type="password"
                    class="mx-2 border border-gray-600"
            /></label>
        </div>

        <button class="mt-4 rounded border border-gray-600 py-1 px-2">
            Login
        </button>
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
