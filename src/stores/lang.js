import { defineStore } from 'pinia'

export const storeUserLang = defineStore('lang', {
  state: () => {
    return {
      lang: 'en',
    }
  },
  actions: {
    setUserLang(data) {
      this.lang = data
    },
  },
})
