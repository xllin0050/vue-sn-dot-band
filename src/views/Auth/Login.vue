<template>
  <div class="m-auto max-w-lg">
    <div class="py-14 text-4xl font-semibold uppercase text-teal-600">
      {{ formTitle }}
    </div>
    <ul class="flex py-4">
      <li
        v-for="(action, i) in authActions"
        :key="i"
        class="mr-4 rounded border-2 border-gray-300 px-4 py-2 text-base uppercase text-gray-500 hover:border-gray-500 hover:text-gray-500"
        :class="{
          '!border-teal-900 text-teal-600 hover:border-teal-300 hover:bg-teal-100 hover:!text-teal-800':
            formTitle === action,
        }"
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
