import Vue3Lottie from 'vue3-lottie'
import 'add-to-calendar-button';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Vue3Lottie, { name: "Vue3Lottie" })
})