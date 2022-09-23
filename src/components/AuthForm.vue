<template>
  <form
    @submit.prevent="handleAuth"
    class="rounded border-2 border-teal-900 p-4"
  >
    <div class="flex flex-col py-3">
      <label class="w-2 py-4 font-semibold text-teal-700"
        >Email
        <input
          v-model="form.email"
          type="email"
          class="rounded border-2 border-teal-900 outline-none focus:border-teal-600"
      /></label>
      <label class="w-2 py-4 font-semibold text-teal-700"
        >Password
        <input
          v-model="form.password"
          type="password"
          class="rounded border-2 border-teal-900 outline-none focus:border-teal-600"
      /></label>
    </div>
    <button
      class="my-8 rounded border-2 border-teal-900 py-2 px-4 uppercase text-teal-700 hover:border-teal-700 hover:bg-teal-100 hover:text-teal-800"
    >
      enter
    </button>
  </form>
</template>
<script setup>
import { ref, computed } from 'vue'
import { storeUserAuth } from '@/stores/user'
import useAuthUser from '@/composables/UseAuthUser'
import { useRouter } from 'vue-router'

const router = useRouter()
const { login, register } = useAuthUser()
const props = defineProps({ isShow: String })
const auth = computed(() => storeUserAuth().user)

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
      await login(form.value).then((_) => {
        vaildAccess(auth)
      })
    } catch (error) {
      alert('登入失敗', error.message)
    }
  } else {
    try {
      await register(form.value).then((_) => {
        vaildAccess(auth)
      })
    } catch (error) {
      alert('註冊失敗', error.message)
    }
  }
}
</script>
