import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './app.vue'
import router from './router'

const app = createApp(App) // Create the Vue.js app instance

app.use(createPinia()) // Register Pinia as a Vue.js plugin
app.use(router) // Register the VueRouter as a Vue.js plugin
app.mount('#app') // Mount the app to the DOM
