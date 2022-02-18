<template>
    <form @submit.prevent="handleLogin">
        <h1 class="py-8 text-xl uppercase">Login</h1>
        <div class="py-12">
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

        <button
            class="my-8 rounded border border-gray-400 py-2 px-4 hover:border-gray-600"
        >
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
