<template>
  <form
    @submit.prevent="handleAuth"
    class="rounded border-2 border-teal-500 p-4"
  >
    <h1 class="py-4 text-lg font-semibold uppercase text-teal-500">
      <slot></slot>
    </h1>
    <div class="flex flex-col py-3">
      <label class="w-2 py-4 font-semibold text-teal-500"
        >Email
        <input
          v-model="form.email"
          type="email"
          class="rounded border-2 border-teal-400 outline-none focus:border-teal-600"
      /></label>
      <label class="w-2 py-4 font-semibold text-teal-500"
        >Password
        <input
          v-model="form.password"
          type="password"
          class="rounded border-2 border-teal-400 outline-none focus:border-teal-600"
      /></label>
    </div>
    <button
      class="my-8 rounded border-2 border-teal-500 py-2 px-4 uppercase text-teal-500 hover:border-teal-300 hover:bg-teal-100 hover:text-teal-800"
    >
      enter
    </button>
  </form>
</template>
<script setup>
import { ref } from 'vue'
import useAuthUser from '@/composables/UseAuthUser'
import { store } from '@/store'
import { useRouter } from 'vue-router'

const router = useRouter()
const { login, register } = useAuthUser()
const props = defineProps({ isShow: String })

const form = ref({
  email: '',
  password: '',
})

const vaildAccess = (vaild) => {
  if (vaild) {
    router.push({ name: 'GigUpdate' })
  }
}

const handleAuth = async () => {
  if (props.isShow === 'login') {
    try {
      await login(form.value)
      vaildAccess(store.user.identities?.length)
    } catch (error) {
      alert(error.message)
    }
  } else {
    try {
      await register(form.value)
      vaildAccess(store.user.identities?.length)
    } catch (error) {
      alert(error.message)
    }
  }
}
</script>
