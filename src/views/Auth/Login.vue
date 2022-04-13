<template>
  <div class="m-auto max-w-lg">
    <ul class="flex py-4">
      <li
        v-for="(action, i) in authActions"
        :key="i"
        class="mr-2 cursor-pointer rounded border-2 border-gray-300 px-4 py-2 text-base uppercase text-gray-500 hover:border-gray-500 hover:text-gray-500"
        :class="
          formTitle === action
            ? '!border-teal-500 text-teal-600 hover:border-teal-300 hover:bg-teal-100 hover:!text-teal-800'
            : ''
        "
        @click="showForm(action)"
      >
        {{ action }}
      </li>
    </ul>
    <AuthForm :is-show="formTitle">{{ formTitle }}</AuthForm>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const authActions = ['login', 'register']
const formTitle = ref('login')
const showForm = (action) => {
  formTitle.value = action
}
</script>
