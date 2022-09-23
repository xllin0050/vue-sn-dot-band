import { defineStore } from 'pinia'

export const storeUserAuth = defineStore('user', {
  state: () => {
    return {
      user: '',
    }
  },
  actions: {
    setUserAuth(data) {
      // authenticated
      console.log('store', data)
      this.user = data
    },
  },
})
